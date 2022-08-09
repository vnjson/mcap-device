
class DialogBox {
  #reply = ''

  constructor (param){
      this.$vnjs = param.$vnjs;
      /*Tags*/
      this.dialogBoxTag = document.querySelector(param.dialogBoxSelector);
      this.characterNameTag = document.querySelector(param.characterNameOutputSelector)
      this.replyTag = document.querySelector(param.replyOutputSelector);
      this.characterAvatarTag = document.querySelector(param.characterAvatarSelector);
      this.replyWrapperTag = document.querySelector(param.replyWrapperSelector);
      /**/
      this.classNameEndPoint = param.classNameEndPoint;
      this.classNameLetter = param.classNameLetter;
      this.classNameCharacterNameInReply = param.classNameCharacterNameInReply;
      this.delay = param.delay;
      this.alpha = param.alpha;
      this.endPoint = param.endPoint;
      this.character;
      this.reply;
      this.index = 0;
      this.interval;
      // небходимы для того, что бы не ломать html теги при разбивании на отдельные символы
      this.letterInclude = true;
      this.letterExlude = false;
      // текущий символ
      this.letter;
  }

  update (){
    this.print(this.character, this.#reply)
  }
  print (character, reply=''){
    this.$vnjs.emit('dialog-box:print')
    this.reset();
    this.character = character;
    this.#reply = reply
    //проверяем сущесвуют ли внутри реплики ссылки на персонажей
    this.reply = this.replaceCharacterLink(this.#reply);
    // Если скорость вывода символов равна нулю, то строка не разбивается на символы
    if(this.delay>0){
      this.replyOutputBySingleLetter();
    }
    else{
      this.outputToHTML();
    }

  }
  /**
   * Посимвольный вывод текста
   */
  replyOutputBySingleLetter (){
    // Перед открывающей скобкой ставим пробел.
    // Это помогает избежать бага когда между двумя тегами ( >< ) отсутсуют символы
    // А так же, если реплика начинается с открывающей угловой скобки ( < )
    this.reply = this.reply.replaceAll('<', ' <').split('');
    // Убираем лишние пробелы.
    // Из за того, что  встречается несколько пробелов вывод символов идёт рвано
    // Так как затрачивается время на отрисовку пробелов завернутых в <span>
    // А визуально их не видно. Так как браузер обычные пробелы съедает
    this.reply = this.reply.join('')
                           .replaceAll(/ {2,}/gi, ' ') /*убираем пробелы больше одного подряд*/
                           .replaceAll(' </span>', '</span>') /*убираем проел в конце имени*/
                           .split('');
    // пробигаемся по массиву символов методом map
    // И соеденяем массив полученных символов завёрнутых в <span> в одну реплику 
    this.reply = this.reply.map( this.parse.bind(this) ).join('');
    // выводим готовый реузльтат
    this.outputToHTML();
    // Запускаем посимвольное изменение прозрачности
    this.startOutputReply();

  }
  outputToHTML (){
    /**
     * Определяем, есть ли у текущего персонажа аватар
     * Если есть, то отображаем его
     */
    if(this.character.avatar){
        this.characterAvatarTag.style.backgroundImage = `url('${this.$vnjs.getAssetByName(this.character.avatar).url}')`;
        this.characterAvatarTag.classList.add('dialog-box__avatar--show');
    }
    else{
        this.characterAvatarTag.classList.remove('dialog-box__avatar--show');
    }

    // output character name
    this.characterNameTag.style.color = this.character.nameColor;
    this.characterNameTag.innerHTML = this.character.name;
    // output reply
    this.replyTag.style.color = this.character.replyColor;
    this.replyTag.innerHTML = this.reply;

  }
  /**
   * Заменяем ссылку на персонажа его именем
   */
  replaceCharacterLink (reply){
    // проверяем есть ли ссылка на персонажа в реплике
    const characterAliaces = reply.match(/@\w+|@\$.*?[\s]|@\$/gi);

    if(characterAliaces){
        let len = characterAliaces.length;
        for(let i=0; i<len; i++){
          let id = characterAliaces[i];
          // получаем id персонажа
          let cid = id.replace('@', '').trim();
          // получаем персонажа по id
          let character = this.$vnjs.getCharacterById(cid)
          if(character){
              // заменяем ссылку на персонажа именем персонажа
              reply = reply.replace(id, `<span class="${this.classNameCharacterNameInReply}" style="color: ${character.nameColor}">${character.name}</span>`); 
          }
        }
    }
    return reply;
  }

  /**
   * Вызывается в качестве callback функции метода map
   * при переборе разделенной на символы входящей строки.
   * @param {String} letter текущий сивол
   */
  parse (letter){

    this.letter = letter;
    // проверяем есть ли html теги в реплике
    this.analyzeLetter(this.letter);

    const tpl = `<span class="${this.classNameLetter}" style="opacity: ${this.alpha}">${this.letter}</span>`

    if(this.letterInclude){  
        return tpl; 
    }
    return this.letter;

  }
  /**
   * Проверяем символ на html теги.
   * Если таковые присутсвуют, то останавливаем посимвольный вывод текста.
   * Что бы не нарушать целостность html разметки. 
   * Найдя закрывающую угловую скобку, переключаем режим обратно в посимвольный вывод текста
   * @param {String} letter текущий сивол
   */
  analyzeLetter (letter){
    switch (letter){
      case '<':
        this.letterInclude = false;
        break;
      case '>':
        this.letterExlude = true;
        break;
      default:
        if(this.letterExlude){
          this.letterInclude = true;
          this.letterExlude = false
        }
    }
  }
  /**
   * Получаем все теги в которые были завёрнуты буквы.
   * И меняем им прозрачность на 1. Эмулируя посимвольный вывод текста.
   */
  startOutputReply (){
    // получаем все теги в которые обёрныты отдельные символы
    let letters = this.replyTag.querySelectorAll('.'+this.classNameLetter );
    let len = letters.length;
    // отображаем каждый символ по отдельности
    this.interval = setInterval( ()=>{
        if(letters.length>0){
          this.$vnjs.emit('dialog-box:letter', letters[this.index].innerText)
          letters[this.index++].style.opacity = 1;
        }
        if(this.index>=len){
            this.onEndOutputReply();
        }
    }, this.delay);

  }

  onEndOutputReply(){
    if(this.endPoint){
        this.replyTag.innerHTML+= `<span class="${this.classNameEndPoint}"></span>`
    }
    this.reset();
    this.$vnjs.emit('dialog-box:endOutputReply')
  }
  clear (){
      this.characterNameTag.innerHTML = '';
      this.replyTag.innerHTML = '';
      this.characterAvatarTag.style.backgroundImage = 'unset';
  }
  disabled (flag){
    if(flag){
      this.dialogBoxTag.style['pointer-events'] = 'none';
    }
    else{
      this.dialogBoxTag.style['pointer-events'] = 'all';

    }
    this.$vnjs.emit('dialog-box:disabled', !flag)
  }
  reset (){
      this.index = 0;
      this.reply = '';
      clearInterval(this.interval);
  }
}

export default DialogBox;