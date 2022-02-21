import tpl from './tpl.html';
import './style.css';

export default function (){
  const $tpl = $(tpl);
  this.$store.$stream.append($tpl);
  let cid = null
  this.on('set-name', id=>{
      if(id){
        $tpl.css('display', 'flex');
        cid = id;
      }
      else{
        $tpl.hide();
      }
  })
  $('.stream__set-name-wrapper .stream__set-name-btn').on('click', ()=>{
        let input = $('.stream__set-name-wrapper input')
        if(input.val().length>3){
            $tpl.fadeOut();
            let char = this.TREE.$root.characters.find(character=>character.id===cid)
            //this.current.data[cid] = value;
            char.name = input.val();
            input.val('');
            this.exec({ next: true })
           // this.exec({ next: true, 'set-data': { [cid]: value } });
        }

  })
}