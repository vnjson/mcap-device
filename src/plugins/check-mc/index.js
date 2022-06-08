export default function (){

  this.on('check-mc', (data)=>{
     if(window.mcefQuery){
        this.exec(data.true)
     }
     else{
        this.exec(data.false)
     } 
  })


}
