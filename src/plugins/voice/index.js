
import icoPlay from './assets/icoPlay.jpg'




export default function (){

var prev = null

this.on('voicePlay', data=>{

    if(data){
        if(prev){
            this.$store[prev].stop();
        }
        prev = data  
        this.$store[data].play(); 
    }
    else{
      this.$store[data].stop();
    }
})

this.on('$voice', data=>{

  if(data){
    $('.vnjson__hand-left').css('background-image', `url(${icoPlay})`)

  }
  else{
    this.emit('hand-left', false)
    this.$store[prev].stop();
    prev=null
  }
  if(prev){
      this.$store[prev].stop();
      prev=null
  }
  prev = data
})

this.on('exec', ctx => {
  if(!this.ctx?.$voice&&prev){
    this.$store[prev].stop();
    this.emit('hand-left', false)
    prev=null
  }
})



  $('.vnjson__hands').on('mouseover', '.vnjson__hand-left', function (){
    $(this).css('opacity', 0.5)
  })
  $('.vnjson__hands').on('mouseout', '.vnjson__hand-left', function (){
    $(this).css('opacity', 1)
  })
  $('.vnjson__hands').on('click', '.vnjson__hand-left', e=>{
     if(this.ctx.$voice){
        this.emit('voicePlay', this.ctx.$voice )
     }
  })
};