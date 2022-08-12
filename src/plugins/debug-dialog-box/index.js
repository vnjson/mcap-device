import "./style.css";
import tpl from "./tpl.html"
/** 
 * color picker
 */
import './lib/color-picker/color.css'
import './lib/color-picker/color.js'
import copyTextToClipboard from './clipboard.js'
import pluginsSnipet from './plugins-snipet.js'
import getImageSize from './img-size.js'

let cid = '$'
export default function (){
  
  const $tpl = $(tpl)
  $('.game').append($tpl)

  $('.debug__inner-reply').on('click', () => {
      cid = $('.debug__character').val()
      const reply = $('.debug__reply').val().trim()
      const objReply = jsyaml.load( reply )
      if(cid==='') cid = '$';

      this.exec({ [cid]: objReply })

  })


    /*
     * delay
     */
    const _vnjs = this 
    this.on('postload', () => {
        const dBox = this.TREE.$root.package?.['dialog-box']
        $('.debug__delay').val(dBox?.delay||0)

    }) 
   // _vnjs.TREE.$root.characters[0]
    $('.debug__delay').on('change', function() {
        _vnjs.$store['dialog-box'].delay = $(this).val()
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
     * Клик по снипету в реплике
     */
    $('.debug-btn--character-snipet').on('click', function (){
        const val = pluginsSnipet['character']
        $('.debug__reply').val(val)
    })

 
    const $pluginValue = $('.debug__plugin--value')


    /**
     * выбираем название плагина
     */
    let pluginName = 'scene'
    const resetActivePluginName = () => {
      $('.debug-plugin__select .debug-plugin__name').each(function (node){
        $(this).removeClass('debug-plugin__name--active')
      })
    }
    $('.debug-plugin__select').on('click', '.debug-plugin__name', function (){
        resetActivePluginName()
        $(this).addClass('debug-plugin__name--active')
        pluginName = $(this).text()
    })
    
    /**
     * кликаем по кнопке css
     */
    $('.debug-btn--value').on('click', function (){
        const name = pluginsSnipet[pluginName]
        $pluginValue.val(name)
    })
    
    /**
     * Кликаем по кнопке [ выполнить плагин ]
     */
    $('.debug__show-asset').on('click', function (){

        let pluginValue = jsyaml.load( $pluginValue.val().trim() )
        _vnjs.exec({
          [ pluginName ]: pluginValue
        })

    })
    /**
     * Показываем и скрываем [ dialog-box ]
     */
    let flagDB = false
    const dbhNode = $('.debug__btn-img--dbh')
    $('.debug__show-dbh').on('click', function (){
        if(flagDB){
          _vnjs.exec({'dialog-box': true})
          dbhNode.removeClass('debug__btn-img--dbs')
          flagDB = false
        }
        else{
          _vnjs.exec({'dialog-box': false})
          dbhNode.addClass('debug__btn-img--dbs')
          flagDB = true
        }
    })

    /**
     * get original image size plugin
     */
    this.on('img-size', getImageSize )


    /**
    - mc-exec:
        action: executeCMD
        data: say TEST TEST TEST # give @p dirt 1
        type: player
    */

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


}


    