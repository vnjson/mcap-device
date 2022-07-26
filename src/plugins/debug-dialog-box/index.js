import "./style.css";
import tpl from "./tpl.html"


export default function (){
  
  const $tpl = $(tpl)
  $('.game').append($tpl)

  $('.debug__btn').on('click', () => {
      const cid = $('#debug__character').val()
      const reply = $('#debug__reply').val()
      if(cid==='') cid = '$';

      this.exec({ [cid]: reply })

  })


}
