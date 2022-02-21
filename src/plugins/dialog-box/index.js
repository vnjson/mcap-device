
import "./style.css";
import tpl from "./tpl.html"

import dialogBoxImage from './assets/dialog-box.png'
const $tpl = $(tpl)
export default function (){


  $tpl.css('background-image', `url(${dialogBoxImage})`)


  this.$store.$stream.append($tpl)
  let disabled = false
  $tpl.on('mousedown', e=>{
      if(!disabled){
          this.next()
      }
  });

	this.on('character', (character, reply)=>{

      if(character.avatar){
          $tpl.find('.dialog-box__reply-wrapper').css('width', '75%')
          $tpl.find('.dialog-box__avatar').show().css({
            backgroundImage: `url('${this.getAssetByName(character.avatar).url}')`
          })
          $tpl.find('.dialog-box__name').html(character.name).css({ color: character.nameColor })
          $tpl.find('.dialog-box__reply').html(reply).css({ color: character.replyColor })
      }
      else{
          $tpl.find('.dialog-box__reply-wrapper').css('width', '90%')
          $tpl.find('.dialog-box__avatar').hide()
          $tpl.find('.dialog-box__name').html(character.name).css({ color: character.nameColor })
          $tpl.find('.dialog-box__reply').html(reply).css({ color: character.replyColor })
      }
      setCharacterToReply.call(this, reply, character.replyColor)
	});
  this.on('dialog-box', param=>{

    if(param==='clear'){
       $tpl.find('.dialog-box__name').empty()
       $tpl.find('.dialog-box__reply').empty()
       $tpl.find('.dialog-box__avatar').css('background-image', `unset`)
       disabled = false
    }
    else if(param==='disabled'){
        disabled = true
    }
    else if(param===true){
      disabled = false
      $tpl.show()
    }
    else{
      disabled = false
      $tpl.hide()
    }
  })

}


function setCharacterToReply(reply, replyColor){

let characterAliaces = reply.match(/(@\w+)|(@\$)/gi);

if(characterAliaces){
  let newReply = reply;
  characterAliaces.forEach(id=>{
      let cid = id.replace('@', '');
      let character = this.getCharacterById(cid);
      newReply = newReply.replace(id, `<span class="dialog-box__reply-character-name" style="color: ${character.nameColor}">${character.name}</span>`)
      console.log(character)
  })
  $tpl.find('.dialog-box__reply').html(newReply).css({ color: replyColor })
}




}