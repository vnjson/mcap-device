import './style.css'


export default function (){
  let click = false;
  this.$store.$screen = $('#screen'); 
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
  });


  this.$store.$screen.on('click', ()=>{
      if(click){
        click = false;
        this.exec({ next: true });
      }
  });


}



