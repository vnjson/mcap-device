
export default function(){

this.on('postload', ()=>{
  var htmlChunk = this.TREE.$root.html


  if(htmlChunk){
    for(let event in htmlChunk){
      eventRegistration.call(this, event, htmlChunk[event])
    }
  }
})

}



export function eventRegistration(event, tpl){
 
  const $tpl = $(tpl)
  $tpl.hide().addClass("component").addClass('event__'+event)
  this.$store.$screen.append($tpl)

  this.on(event, data => {
    if( typeof(data) === 'object' ){
        $tpl.css(data.css)
        $tpl.fadeIn()
    }
    else if(data){
       $tpl.fadeIn()  
    }
    else{
      const $src = $tpl
      $tpl.remove()
      $src.hide()
      this.$store.$screen.append($tpl)
    }
  })

}

