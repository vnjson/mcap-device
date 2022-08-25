import "./style.css";
import tpl from "./tpl.html"


const $tpl = $(tpl);
export default function (){

  const $vnjs = this;
  this.$store.$screen.append($tpl)
  let isShow = false;
  this.on('hand-left', id=>{
    if(id){
      isShow = true;
      $tpl.show();
      $tpl.find('.vnjson__hand-left').css('background-image', `url('${this.getAssetByName(id).url}')` )
    }
    else{
      $tpl.find('.vnjson__hand-left').css('background-image', "unset" ); 
    }
  })

  this.on('hand-right', id=>{
    if(id){
      isShow = true;
      $tpl.show();
      $tpl.find('.vnjson__hand-right').css('background-image', `url('${this.getAssetByName(id).url}')` )
    }
    else{
      $tpl.find('.vnjson__hand-right').css('background-image', "unset" ); 
    }
  })
  this.on('hands', data=>{
    if(data){
      isShow = true;
      $tpl.show();
    }
    else{
      isShow = false;
      $tpl.hide();
    }
  })
  const replyWrapper = $('.dialog-box__reply-wrapper');
  const handler = (character, reply)=>{
    
    // если аватар есть и руки отображены
    if(character.avatar&&isShow){
      replyWrapper.css('width', '75%');
    }
    // если нет ни аватара ни рук
    if(!character.avatar&&!isShow){
      replyWrapper.css('width', 'auto');
    }
    // Если аватара нет, но показывает руки
    if(!character.avatar&&isShow){
      replyWrapper.css('width', '90%');
    }
    // если есть аватар, но руки не отображаются
    if(character.avatar&&!isShow){
       replyWrapper.css('width', '84.5%');
    }

  } 
  this.on('character', handler)
  this.on('+', handler)
    /**
   * Когда screen: true, то dialog-box нужно скрыть
   */

    this.on('dialog-box.false', () => {
        this.exec({ 'hands': false })
    })
    /*
    this.on('dialog-box.mode', mode => {
        if(mode==='mode-classic'){
            $tpl.css({ top: 'unset', bottom: '10px' })
        }
        if(mode==='mode-fullscreen'){
          $tpl.css({ top: '10px', bottom: 'unset' })
        }
    })
    */
}

