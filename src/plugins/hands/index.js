import "./style.css";
import tpl from "./tpl.html"


const $tpl = $(tpl);
export default function (){

  const $vnjs = this;
  this.$store.$stream.append($tpl)
  let isShow = false;
  this.on('hand-left', id=>{
    if(id){
      isShow = true;
      $tpl.show();
      $tpl.find('.stream__hand-left').css('background-image', `url('${this.getAssetByName(id).url}')` )
    }
    else{
      $tpl.find('.stream__hand-left').css('background-image', "unset" ); 
    }
  })

  this.on('hand-right', id=>{
    if(id){
      isShow = true;
      $tpl.show();
      $tpl.find('.stream__hand-right').css('background-image', `url('${this.getAssetByName(id).url}')` )
    }
    else{
      $tpl.find('.stream__hand-right').css('background-image', "unset" ); 
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
  this.on('character', (character, reply)=>{
    
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
               replyWrapper.css('width', 'auto');
            }

  })

}

