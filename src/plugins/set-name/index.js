import tpl from './tpl.html';
import './style.css';

export default function (){
  const $tpl = $(tpl);
  this.$store.$screen.append($tpl);
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
  $('.vnjson__set-name-wrapper .vnjson__set-name-btn').on('click', ()=>{
        let input = $('.vnjson__set-name-wrapper input')
     
            $tpl.fadeOut();
            let char = this.TREE.$root.characters.find(character=>character.id===cid)
            //this.current.data[cid] = value;
            char.name = input.val();
            input.val('');
            this.exec({ next: true })
           // this.exec({ next: true, 'set-data': { [cid]: value } });
       

  })
}