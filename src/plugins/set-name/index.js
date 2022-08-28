import tpl from './tpl.html';
import './style.css';



export default function (){
  const $tpl = $(tpl);
  this.$store.$screen.append($tpl);


  let cid = null
  const handler = (param) => {
      if(param){
        $tpl.css('display', 'flex');
        cid = param;
      }
      else{
        $tpl.hide();
      }
  }

  this.on('set-name', handler)
  this.on('data-input', (param) => {

  })
  $('.vnjson__set-name-wrapper .vnjson__set-name-btn').on('click', ()=>{
        let input = $('.vnjson__set-name-wrapper input')
     
            $tpl.fadeOut();
            let char = this.TREE.$root.characters.find(character => character.id===cid)
            //this.state.data[cid] = value;
            char.name = input.val();
            input.val('');
            this.exec({ next: true })
           // this.exec({ next: true, 'set-data': { [cid]: value } });
       

  })
}