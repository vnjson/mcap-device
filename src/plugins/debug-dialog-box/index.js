import "./style.css";
import tpl from "./tpl.html"


export default function (){
  
  const $tpl = $(tpl)
  $('.game').append($tpl)

  $('.debug__inner-reply').on('click', () => {
      const cid = $('.debug__character').val()
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


}
