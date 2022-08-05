import Info from './Info.js'
import "./style.css"

export default function (){

    const $tpl = $('<div class="dialog-box__info"></div>')
    $('.dialog-box.component').append($tpl)
    /**
     * INFO
     */
    const $info = $('.dialog-box__info')
    const $avatar = $('.dialog-box__avatar')
    const info = new Info( $info, $avatar)
    
   
    this.on('dialog-box:print', () => info.close() )    
 
    $avatar.on('mousedown', () => info.toggle() )


	this.on('character', (character, param) => {
      
        if(typeof param === 'object' ){

          if(param.info) {
            character.info = param.info 
            
          }
          if(param.borderColor){
            $avatar.css('border-color', param.borderColor)
            $tpl.css('border-color', param.borderColor)
          }
        }
        info.print( String(character.info) )
    })

}