import "./style.css";
import tpl from "./tpl.html";
import dialogBoxImage from './assets/dialog-box.png';
import DialogBox from './DialogBox.js';


export default function (){
  const $tpl = $(tpl);
  $tpl.css('background-image', `url(${dialogBoxImage})`);
  this.$store.$stream.append($tpl);
  // при клике по диалоговому окну, продвигаемся дальше по yaml скрипту
  $tpl.on('mousedown', e=>this.next());

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
               });

  this.on('postload', ()=>{
    let conf = this.TREE.$root.package?.['dialog-box'];
    if(conf){
        dBox.delay = conf.delay||dBox.delay;
        dBox.alpha = conf.alpha||dBox.alpha;
        dBox.endPoint = conf.endPoint||dBox.endPoint;
    }
  })
	this.on('character', (character, reply)=>{
      dBox.print(character, reply);
  });

  this.on('dialog-box', param=>{
    if(param===true){
      dBox.disabled(false);
      $tpl.show();
    }
    else if(param==='clear'){
      dBox.disabled(false);
      dBox.clear();
    }
    else if(param==='disabled'){
      dBox.disabled(true);
    }
    else{
      $tpl.hide();
    }
  })


}








