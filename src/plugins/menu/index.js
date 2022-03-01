
import "./style.css";
import tpl from "./tpl.html"


export default function (){

  const $tpl = $(tpl)
  this.$store.$stream.append($tpl)

  this.on('menu', obj=>{
      if(obj===true){
        $tpl.show();
      }
      else if(obj){
        menu.call(this, obj);
      }
      else{
        $tpl.hide();
      }  
  });

  function menu (menuObj){
    let onClickObj = null
    $tpl.html('')


    for(let [label, menuItem ] of Object.entries(menuObj)){
      let character = this.getCharacterById(label)

      if(character){
        let str = null
        if(label==='$'){
            character.name = '';
        }
        if(character.name!==''){
            str = `<div class="stream__menu-quetion">
                          <span style='color:${character.nameColor}; padding-right: 20px;'>${ character.name }:</span>
                          <span style='color:${character.replyColor}; '>${ menuItem }</span>
                    </div>`;
        }
        else{
            str = `<div class="stream__menu-quetion">
                          <span style='color:${character.replyColor};'>${ menuItem }</span>
                    </div>`;
        }
        $('.stream__menu-menu').append(str)
      }
      else{
        let str = null
        if(/disabled/i.test(label) ){
                   // c исконками
                    if(typeof menuItem==='object'){
                              str = `<div data-label="${ label }" class="stream__menu-item disabled"><img alt="" class="menu-item__icon" src="${this.getAssetByName(menuItem.icon).url}"/><span class="sound-click">${ menuItem.text }</span></div>`;
                    }
                    // без иконок
                    else{
                              str = `<div data-label="${ label }" class="stream__menu-item disabled"><span class="sound-click">${ menuItem }</span></div>`;
                    }
        }
        else if(label==='onClick'){
          onClickObj = menuItem
        }
        else if(label==='css'){
          $tpl.css(menuItem)
        }
        else{
                    // c исконками
                    if(typeof menuItem==='object'){
                              str = `<div data-label="${ label }" class="stream__menu-item"><img alt="" class="menu-item__icon" src="${this.getAssetByName(menuItem.icon).url}"/><span class="sound-click">${ menuItem.text }</span></div>`;
                    }
                    // без иконок
                    else{
                              str = `<div data-label="${ label }" class="stream__menu-item"><span class="sound-click">${ menuItem }</span></div>`;
                    }
        }
        
        $('.stream__menu-menu').append($(str))
      }
    }

let $vnjs = this
function onClickMenuHandler(label){
  if(menuObj.hasOwnProperty('onClick') ){
      $vnjs.exec(onClickObj)
  }
}
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
    $tpl.off( "click", clickHundler)
}
$tpl.css({display: 'flex'});
$tpl.on("click", ".stream__menu-item", clickHundler);




}


}