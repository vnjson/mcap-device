import errors from './errors.js';

const modalTpl = `<div class="debug-error">
                        <div class="debug-error__modal">
                            <p class="debug-error__msg"></p>
                            <p class="debug-error__path"></p>
                            <p class="debug-error__pos"></p>
                            <pre class="debug-error__code"></pre>
                        </div>
                    </div>`
const $modal =  $(modalTpl);

$('#screen').append($modal);


class ErrorHandler {
  
  constructor (local='en'){
    this.local = local
    this.url = '/socket.io/socket.io.js';
    this.init();
  }
  init (){
    this.dynamicallyLoadScript(this.url, ()=>{
        const socket = io();
        socket.on('yaml-error', (err, sceneName, labelName)=>{
             if(err){
                const path = `${sceneName}.${labelName.replace(/.ya?ml/i, '')}`;
                const pos = `line ${err.mark.line} column ${err.mark.column}`;
                const msg = ErrorHandler.getMessage(this.local, err.reason)
                ErrorHandler.showModal(msg, path, err.mark.snippet, pos );
                return;
             } 
             ErrorHandler.hideModal();
             // перезагрузка браузера при сохранении файла
             location.reload();
        });
        //socket.on("disconnect", () => {})
    });
  }
  /**
   * Так как я не хочу мусорить в index.html, что бы потом не вычищать
   * То скрипт для сокетов я подлючаю динамически
   * Не смог настроить babel, что бы async/await работали.
   * Необходимо поддерживать chrome 2015г.
   */
  dynamicallyLoadScript(url, callback) {
      const script = document.createElement("script"); 
      script.src = url;
      script.onload = callback;
      document.head.appendChild(script); 
  }
  static hideModal (){
      $modal.find('.debug-error__msg').html('');
      $modal.find('.debug-error__path').html('');
      $modal.find('.debug-error__pos').html('');
      $modal.find('.debug-error__code').html('');
      $modal.hide();
  }
  static showModal (msg='', path='', snippet='', pos=''){

      $modal.find('.debug-error__msg').html(msg);
      $modal.find('.debug-error__path').html(path);
      $modal.find('.debug-error__pos').html(pos);
      $modal.find('.debug-error__code').html(snippet);
      $modal.css('display', 'flex');
  }
  /**
   * По аналогии с yaml-снипетами от сборщика
   * Преобразую объект контекста в yaml - подобный синтаксис
   * @param  {Object} ctx   [Объект контекста]
   * @return {String}       [Возвращает снипет или пустую строку]
   */
  static getSnippetFromCtx (ctx){
        let snippet = '';
        if(typeof ctx==='string') return snippet;
        for(let key in ctx){
            let value = ctx[key];
            // Проверяем является ли репликой value
            // Если ключ является персонажем, соответсвенно значение является репликой
            value = String(value).slice(0, 60)
            if(value.length===60){
                value = value.concat('...');
            }
  
            // Делаем yaml-подобную структуру
            snippet = `${snippet}<br/>${key}: <font color="#999">${value}</font>`
        }
        return snippet;
  }
  /**
   * Подставляю переменную в строку описания ошибки
   * @param  {String} local     [Локализация]
   * @param  {String} codeError [Ключевое слово по которому я определяю сообщение ошибки]
   * @param  {String} data      [Переменная которую подставляю в строку ошибки]
   * @return {String}           [Сообщение о ошике]
   */
  static getMessage (local='en', codeError, data){
    if(errors[local].hasOwnProperty(codeError)){
          const message =  errors[local][codeError].replace(/{.{0,}}/gi, data);
          return message;
    }
    return codeError;
  }
}

export default ErrorHandler;



$modal.on('mousedown', function (e){
  if(!$(e.target).hasClass('debug-error')) return;
  ErrorHandler.hideModal();
})