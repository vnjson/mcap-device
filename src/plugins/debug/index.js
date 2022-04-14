import './style.css'

import ErrorHandler from './ErrorHandler.js';

const local = 'ru';

export default function  (){
	if(!this.debug) return;
            
    new ErrorHandler();  
  
    this.on('exec', ctx=>{
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
         */
        if(typeof ctx==='string') return;
        Object.keys(ctx).forEach(event=>{
            if(!/^_/ig.test(event)&&!this.plugins.hasOwnProperty(event)){
                this.emit('error', 'pluginNotFound', event)
            }
        });
    });

    this.on('error', (codeError, data)=>{

        let message = ErrorHandler.getMessage(local, codeError, data);

        const path = `${this.current.sceneName}.${this.current.labelName}`;
        
        const snippet = ErrorHandler.getSnippetFromCtx(this.ctx);
        ErrorHandler.showModal(message, path, snippet);
    })
    this.on('warn', (codeError, data)=>{
        const codes =  {
            NoWayOutOfTheLabel: `No way out of the label [ ${this.current.labelName} ]`
        }
     
        console.log(codes[codeError]);
    })
}
