
import "./style.css";
import tpl from "./tpl.html";

const $tpl = $(tpl);
let onClickObj = null;
let menuObj = null;


export default function (){

  this.$store.$stream.append($tpl);

  let prevObj = null;
  this.on('main-menu', obj=>{
      if(obj===true){
         menu.call(this, prevObj);
      }
      else if(obj){
        prevObj = obj;
        menu.call(this, obj);
      }
      else{

        $tpl.hide();
      }  
  });


}
/**
 * menu
 */

function menu (param){
    menuObj = param;
    $tpl.html(''); 

    for(var [label, menuItem ] of Object.entries(menuObj)){
      var character = this.getCharacterById(label)

      if(character){
        var str = null
        if(label==='$'){
            character.name = '';
        }
        if(character.name!==''){
            str = `<div class="main-menu__item--quetion">
                          <span style='color:${character.nameColor}; padding-right: 20px;'>${ character.name }:</span>
                          <span style='color:${character.replyColor}; '>${ menuItem }</span>
                    </div>`;
        }
        else{
            str = `<div class="main-menu__item--quetion">
                          <span style='color:${character.replyColor};'>${ menuItem }</span>
                    </div>`;
        }

        $('.main-menu').append(str)

      }
      else{
        let str = null
        if(/disabled/i.test(label) ){
                  // c исконками
                  if(typeof menuItem==='object'){
                      str = `<div data-label="${ label }" class="main-menu__item disabled"><img alt="" class="menu-item__icon" src="${this.getAssetByName(menuItem.icon).url}"/><span class="sound-click">${ menuItem.text }</span></div>`;
                  }
                  // без иконок
                  else{
                      str = `<div data-label="${ label }" class="main-menu__item disabled"><span class="sound-click">${ menuItem }</span></div>`;
                  }
        }

        else if(label==='onClick'){
          onClickObj = menuItem
        }
        else if(label==='css'){
          $tpl.css(menuItem)
        }
        /**
         * Вывод обычного пункта меню
         */
        else{
                  // c исконками
                  if(typeof menuItem==='object'){
                      str = `<div data-label="${ label }" class="main-menu__item"><img alt="" class="menu-item__icon" src="${this.getAssetByName(menuItem.icon).url}"/><span class="sound-click">${ menuItem.text }</span></div>`;
                  }
                  else{
                      str = `<div data-label="${ label }" class="main-menu__item"><span class="sound-click">${ menuItem }</span></div>`;
                  }
        }
        $('.main-menu').append($(str))
      }
    }



  $tpl.css({display: 'flex'});


}


/**
 * click handler
 */

$tpl.on("click", ".main-menu__item", clickHundler);

function clickHundler(){

    let label = $(this).data('label')

    if(label==='next'){
        onClickMenuHandler(label)
        setTimeout(()=>{
          $vnjs.exec({ next: true })
        },0)
    }

    else{
      onClickMenuHandler(label)
      setTimeout(()=>{
          $vnjs.exec({ jump: label })
      },0)
    }
    $tpl.hide()
    //$tpl.off( "click", clickHundler)
}


/**
 *  onClick:
 *    dialog-box: true
 */

function onClickMenuHandler(label){

  if(menuObj.hasOwnProperty('onClick') ){

      $vnjs.exec(onClickObj)

  }
}
