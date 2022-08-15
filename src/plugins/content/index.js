import './style.css'
import icoContent from './assets/icoContent.jpg'
import Content from './Content.js'

const $tpl = $(`<ul class="vnjson__stage component"></ul>`)


export default function (){
  const content = new Content(this, $tpl)
  this.$store.$screen.append($tpl)
  /**
   * @ content
   */
  this.on('content', data => {
      if(data){
        content.render()
        content.show()
      }
      else{
        content.hide()
      }
  })
  /**
   * @ content-switch
   */
  this.on('content-switch', data => {
      content.switchItem(data)
      
  })
  /**
   * BTN MOUSEOVER
   */
  $('.vnjson__hands').on('mouseover', '.vnjson__hand-right', function (){
      $(this).css('opacity', 0.5)
  })
  $('.vnjson__hands').on('mouseout', '.vnjson__hand-right', function (){
      $(this).css('opacity', 1)
  })

  /**
   * SET BTN ICON
   */

  $('.vnjson__hand-right').css('background-image', `url(${icoContent})`)
  /**
   * BTN CLICK
   */
 
  $('.vnjson__hands').on('click', '.vnjson__hand-right', e => {
      if(content.open){
        this.emit('content', false )
        content.open = false
      } 
      else{
        this.emit('content', true )
        content.open = true
      }

  })


  $tpl.on('click', '.stage-item', function (){
    const label = $(this).data('label')
    content.selectItem(label)
  })

  this.on('dialog-box:click', () => {
    content.hide()
  })
}




