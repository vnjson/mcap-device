
import "./style.css";
import tpl from "./tpl.html"

import dialogBoxImage from './assets/dialog-box.png'
const $tpl = $(tpl);


/**
 * controls
 */
const tplControls = `<div class="debug__dialog-box-controls">
                        <input  id="debug__character" type="text" value="$">
                        <input id="debug__reply" type="text" placeholder="text">
                        <div class="debug__btn"> -> </div>
                     </div>`
const $tplControls = $(tplControls);


export default function (){
  
$tpl.css('background-image', `url(${dialogBoxImage})`)

$('.game').append($tplControls)
/**/

$('.game').append($tpl)


$('.debug__btn').on('click', function (){
    let cid = $('#debug__character').val();
    let character = $vnjs.getCharacterById(cid);
    let reply = $('#debug__reply');
    print(character, reply.val() )
    reply.val('')
})


};



function print(character, reply){

      if(character.avatar){
          $tpl.find('.debug__dialog-box__reply-wrapper').css('width', '75%');
          $tpl.find('.debug__dialog-box__avatar').show().css({
            backgroundImage: `url('${$vnjs.getAssetByName(character.avatar).url}')`
          });
          $tpl.find('.debug__dialog-box__name').html(character.name).css({ color: character.nameColor });
          $tpl.find('.debug__dialog-box__reply').html(reply).css({ color: character.replyColor });
      }
      else{
          $tpl.find('.debug__dialog-box__reply-wrapper').css('width', '90%');
          $tpl.find('.debug__dialog-box__avatar').hide();
          $tpl.find('.debug__dialog-box__name').html(character.name).css({ color: character.nameColor });
          $tpl.find('.debug__dialog-box__reply').html(reply).css({ color: character.replyColor });
      }
      if(reply){
        setCharacterToReply.call($vnjs, reply, character.replyColor);
      }
};





function setCharacterToReply(reply, replyColor){

let characterAliaces = reply.match(/(@\w+)|(@\$.*?[\s])/gi);

if(characterAliaces){
  let newReply = reply;
  characterAliaces.forEach(id=>{

      let cid = id.replace('@', '').trim();
      let character = $vnjs.getCharacterById(cid);
      if(character){
          newReply = newReply.replace(id, `<span class="debug__dialog-box__reply-character-name" style="color: ${character.nameColor}">${character.name}</span> `); /*пробел на конце нужен из за спец символов $! которые получаю вместе с пробелом*/
      }
  })
  $tpl.find('.debug__dialog-box__reply').html(newReply).css({ color: replyColor });
}




}