export default function (){

  this.on('mc-check', (data)=>{
     if(window.mcefQuery){
        this.exec(data.true)
     }
     else{
        this.exec(data.false)
     } 
  })


}
