import './style.css'


export default function (){

  this.$store.$screen = $('#screen')
  let click = false
  this.on('screen', flag => {
    this.emit('screen:click', flag)
    click = flag
    if(click){
        this.$store.$screen.css('cursor', 'pointer')
    }
    else{
        this.$store.$screen.css('cursor', 'unset')
    }
  })

  this.$store.$screen.on('click', () => {
      if(click){
        this.exec({ next: true })
      }

  })
}




