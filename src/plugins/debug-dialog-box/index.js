import "./style.css";
import tpl from "./tpl.html"
/** 
 * color picker
 */
import './lib/color-picker/color.css'
import './lib/color-picker/color.js'
import copyTextToClipboard from './clipboard.js'



let cid = '$'
export default function (){
  
  const $tpl = $(tpl)
  $('.game').append($tpl)

  $('.debug__inner-reply').on('click', () => {
      cid = $('.debug__character').val()
      const reply = $('.debug__reply').val()
      if(cid==='') cid = '$';

      this.exec({ [cid]: reply })

  })

  $('.debug__mcexec').on('click', () => {
      const action = $('.debug__mc-exec').val()
      const data = $('.debug__mcexec-data').val()
      const checkBoxType = $('.debug__mcexec-type:checked').val()
      let type = 'player'
      if(checkBoxType==='on'){
         type = 'server'
      }
      const plugins = { 
                'mc-exec': {
                    action,
                    data,
                    type
                } 
      }

      this.exec(plugins)
    
  })


/**
- mc-exec:
    action: executeCMD
    data: say TEST TEST TEST # give @p dirt 1
    type: player
 */
    /*
     * delay
     */
    const _this = this 
    this.on('postload', () => {
        const dBox = this.TREE.$root.package?.['dialog-box']
        $('.debug__delay').val(dBox?.delay||0)

    }) 
   // _this.TREE.$root.characters[0]
    $('.debug__delay').on('change', function() {
        _this.$store['dialog-box'].delay = $(this).val()
    })
    $('#debug__color-picker').on('change', function() {
        const value = $(this).val()

        copyTextToClipboard(value);
    })

    $('#debug__color-picker').spectrum({
      color: '#d8dfe3',
      type: 'text'
    })
    /**
     * SCENE ASSETS
     */

    const CSS = `width: 0px
height: 0px
left: 0px
right: 0px`
    const assetsReset = () => {
      $pluginValue.val('')
    }
    const $css = $('.debug__plugin--css')
    const $pluginName = $('.debug-plugin__select')
    const $pluginValue = $('.debug-plugin__value')
    
    $('.debug-btn--css').on('click', function (){
        $css.text(CSS)
    })
    $('.debug__show-asset').on('click', function (){

      _this.exec({
        [ $pluginName.val() ]: $pluginValue.val()
      })
      assetsReset()
    })

    
}


    