import "./style.css"
import tpl from "./tpl.html"
import dialogBoxImage from './assets/dialog-box.png'
import DialogBox from './DialogBox.js'


export default function (){
  const $tpl = $(tpl);
  $tpl.css('background-image', `url(${dialogBoxImage})`)
  this.$store.$screen.append($tpl);
  // при клике по диалоговому окну, продвигаемся дальше по yaml скрипту
  $tpl.find('.dialog-box__reply-wrapper').on('mousedown', e => this.next())

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
    const conf = this.TREE.$root.package?.['dialog-box'];
    if(conf){
        dBox.delay = conf.delay||dBox.delay;
        dBox.alpha = conf.alpha||dBox.alpha;
        dBox.endPoint = conf.endPoint||dBox.endPoint;
    }
  })
  /**
   * CHARACTER native event
   */
	this.on('character', (character, param)=>{
      
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
   * SHOW HIDE DIALOG-BOX
   */
  this.on('dialog-box', param=>{
    if(typeof param==='object'){
        for(let key in param){
          dBox[key] = param[key]
        }
        $tpl.show()
    }
    else if(param===true){
      dBox.disabled(false)
      $tpl.show()
    }
    else if(param==='clear'){
      dBox.disabled(false)
      dBox.clear()
    }
    else if(param==='disabled'){
      dBox.disabled(true)
    }
    else{
      $tpl.hide()
    }
  })
  
  /**
   * Когда screen: true, то dialog-box нужно скрыть
   */
  this.on('screen:click', flag => {
      this.exec({ 'dialog-box': !flag })
  })
    
 


}








