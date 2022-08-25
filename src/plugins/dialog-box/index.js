import "./style.css"
import tpl from "./tpl.html"
import DialogBox from './DialogBox.js'
import errorSnippet from './error-snippet.js'


/**
 * INIT
 */
export default function (){
  const $tpl = $(tpl);
 
  this.$store.$screen.append($tpl);
  // при клике по диалоговому окну, продвигаемся дальше по yaml скрипту
  $tpl.find('.dialog-box__reply-wrapper').on('mousedown', e => {
      this.emit('dialog-box.click')
      this.next() 
  })
  
  /**
   * DialogBox
   */
  const dBox = new DialogBox({
                      $vnjs,
                      delay: 0,
                      alpha: 0,
                      endPoint: false,
                      dialogBoxSelector: '.dialog-box',
                      characterNameOutputSelector: '.dialog-box__name',
                      characterAvatarSelector: '.dialog-box__avatar',
                      replyWrapperSelector: '.dialog-box__reply-wrapper',
                      replyOutputSelector: '.dialog-box__reply',
                      classNameLetter: 'dialog-box__letter',
                      classNameCharacterNameInReply: 'dialog-box__reply-character-name',
                      classNameEndPoint: 'dialog-box__reply-end-point'
               })



  this.$store['dialog-box'] = dBox    
  /**
   * DELAY 
   */  
  this.on('postload', () => {
    const conf = this.package?.['dialog-box'];
    if(conf){
        dBox.delay = conf.delay||dBox.delay;
        dBox.alpha = conf.alpha||dBox.alpha;
        dBox.endPoint = conf.endPoint||dBox.endPoint;
        if(conf['mode-classic']){
            dBox.setMode('mode-classic')
        }
        else{
            this.emit('vnjson.error', errorSnippet)
        }
       
    }
    else{
      this.emit('vnjson.error', errorSnippet)
    }
  })
  /**
   * CHARACTER native event
   */
	this.on('character', (_character, param) => {
      const character = {..._character}
      if(typeof param === 'object' ){
        if(param.nameColor) character.nameColor = param.nameColor
        if(param.replyColor) character.replyColor = param.replyColor
        if(param.avatar) character.avatar = param.avatar
        
        dBox.print(character, String(param.reply))
      }
      else{
        dBox.print(character, String(param))
      }

  })
  /**
   * append reply
   */
  this.on('+', (reply) => {
    dBox.forcePrintPrevReply()
    const character = this.getCurrentCharacter()
    dBox.print(character, ' '+String(reply), true)
  })

  /**
   * SHOW HIDE DIALOG-BOX
   */
  this.on('dialog-box', param=>{
    if(typeof param==='object'){
        for(let key in param){
          dBox[key] = param[key]
        }
        dBox.show()
    }
    else if(param===true){
      dBox.disabled(false)
      dBox.show()
    }
    else if(param==='clear'){
      dBox.disabled(false)
      dBox.clear()
    }
    else if(param==='disabled'){
      dBox.disabled(true)
    }
    else if(param==='fullscreen'){
      dBox.setMode('mode-fullscreen')
      dBox.show()
    }
    else if(param==='reset'|| param==='classic'){
      dBox.setMode('mode-classic')
      dBox.show()
    }
    else{
      dBox.hide()
    }
  })
  
 
    
 


}








