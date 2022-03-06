import './style.css'

let click = false;
export default function (){
  
  var prevScreen = null

  this.on('screen', id=>{
    if(id.onClick===true){
         /**
          * При повторном вызове плагина с параметром onClick почему то dialog-box
          * не успевает скрыться. Срабатывает слушатель click
          */
         setTimeout(()=>{
            click = true;
          }, 300);

    }
    else if(prevScreen&&prevScreen!==id){
      $('#'+prevScreen).fadeOut()
      prevScreen = id;
      
      $('#'+id).fadeIn()
    }
    else{
      prevScreen = id
      $('#'+id).fadeIn()
    }
    if(typeof id==='string'){
      this.$store.$screen = $('#'+id);
    }
    //this.emit('screenInit', id);
  })

}


$('#screen').on('click', function (){
    if(click){
      click = false;
      $vnjs.exec({ next: true });
    }
});
