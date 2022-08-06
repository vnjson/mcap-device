
import icoPlay from './assets/icoPlay.jpg'




export default function (){

let prev = null

let INDEX = null
this.on('$voice', data => {

  if(data){
    $('.vnjson__hand-left').css('background-image', `url(${icoPlay})`)
    this.$store.$voice = data
    INDEX = this.current.index
    prev = data
  }
  else{
    this.emit('hand-left', false)
    this.$store[prev].stop()
    prev = null
  }
  if(prev){
      this.$store[prev].stop()
      prev = null
  }


})

this.on('character', ctx => {
  if( INDEX ){ 
    const name = this.getCurrentLabelBody()[INDEX].$voice
    this.$store[name].stop();
    this.emit('hand-left', false)
    prev = null
    INDEX = null
  }
})

this.on('voicePlay', data => {
    
  if(INDEX){
      if(prev){
          this.$store[prev].stop()
          
      } 
      const name = this.getCurrentLabelBody()[INDEX].$voice
      this.$store[name].play()
  }
  else{
    //const name = this.getCurrentLabelBody()[INDEX].$voice
    //this.$store[name].stop()
    prev = null
  }
})


  $('.vnjson__hands').on('mouseover', '.vnjson__hand-left', function (){
      $(this).css('opacity', 0.5)
  })
  $('.vnjson__hands').on('mouseout', '.vnjson__hand-left', function (){
      $(this).css('opacity', 1)
  })


  
  $('.vnjson__hands').on('click', '.vnjson__hand-left', e => {
    console.log(INDEX, this.current.index)
     if(INDEX===this.current.index){
        this.emit('voicePlay')
     }
  })
};