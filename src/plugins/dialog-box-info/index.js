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
 
  

  let _param = null
	this.on('character', (character, param) => {
    
          if(typeof param === 'object' ){

              if(param.info) {
                info.print( String(param.info ) )
                
                if(param.borderColor){
                  $avatar.css('border-color', param.borderColor)
                  $tpl.css('border-color', param.borderColor)
                }
                _param = true
                return 
              }
              else{

                info.$info.text('')
              }


        }
        _param = false
      
        
    })
    $avatar.on('mousedown', () => {
      if(_param){

        info.toggle()
      }
      
    } )
}