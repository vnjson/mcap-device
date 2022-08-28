import Info from './Info.js'
import "./style.css"

export default function (){

    const $tpl = $('<div class="dialog-box__info"></div>')
    this.$store.$screen.append($tpl)
    /**
     * INFO
     */
    const $info = $('.dialog-box__info')
    const $avatar = $('.dialog-box__avatar')
    const info = new Info( $info, $avatar)
    
   
    this.on('dialog-box.print', () => info.close() )    
 
  

  let _param = null
	this.on('character', (character, param) => {
    
          if(typeof param === 'object' ){

              if(param.info) {
                info.print( String(param.info ) )
                
                if(param.borderColor){
                   info.addBorder(param.borderColor)
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
      this.emit('dialog-box.avatar-click')
    } )
 
    this.on('dialog-box.click', () => info.removeBorder() )
    this.on('dialog-box.mode', (MODE) => info.controlPadding(MODE))
}