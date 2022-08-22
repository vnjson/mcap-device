import './style.css'

import ErrorHandler from './ErrorHandler.js';
import errors from './errors.js';



export default function  (){
    $vnjs.errors = errors
    /**
     * Блокировка контекстного меню, если не debug
     */
	if(!this.debug) {
        $('body').attr('oncontextmenu', 'return false;')
        return
    }
    this.local = 'ru';        
    new ErrorHandler(this.local);  
  
    this.on('vnjson:exec', ctx => {
        /**
         * Добавляем параметры в URI
         */
        // убрал сцену по умолчанию, потому что на неё постоянно прыгало
        /*
        if(this.current.sceneName!==''){
            history.pushState(null, null, `?jump=${this.current.sceneName}.${this.current.labelName}`);
        }
        */
        /**
         * Проверяем существует ли плагин с таким именем
         * Исключая выражения - null | -false | - Hello world!
         */
        if(!ctx) return;
        if(typeof ctx==='object'){
                Object.keys(ctx).forEach(event=>{
                    if(!/^_/ig.test(event)&&!this.plugins.hasOwnProperty(event)){
                        this.emit('error', 'pluginNotFound', event);
                    }
                });
        }

    });

    this.on('error', (codeError, data)=>{
        // style
        $('.debug-error__status').css('background-color', 'brown')
        $('.debug-error__msg').css('color', 'brown')

        if(typeof codeError==='object'){
            const message = codeError[this.local]
     
            const path = `${this.current.sceneName}.${this.current.labelName}`;
            const snippet = ErrorHandler.getSnippetFromCtx(this.ctx);
            ErrorHandler.showModal(message, path, snippet);
        }
        else{
            const message = ErrorHandler.getMessage(this.local, codeError, data);
            const path = `${this.current.sceneName}.${this.current.labelName}`;
            const snippet = ErrorHandler.getSnippetFromCtx(this.ctx);
            ErrorHandler.showModal(message, path, snippet);
        }

    })
    this.on('warn', (codeError, data)=>{
        const codes =  {
            NoWayOutOfTheLabel: `No way out of the label [ ${this.current.labelName} ]`
        }
     
        console.log(codes[codeError]);
    })

    this.on('vnjson.info', (msg) => {
        // style
        $('.debug-error__status').css('background-color', 'darkcyan')
        $('.debug-error__msg').css('color', 'gray')
        ErrorHandler.showModal(msg)
    })

    
}
