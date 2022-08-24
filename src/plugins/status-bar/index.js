import './style.css'
import tpl from './tpl.html'
import playerImg from './assets/player.svg'
import StatusBar from './StatusBar'

export default function (){

  const $tpl = $(tpl)

  this.$store.$screen.append($tpl);
  const statusBar = new StatusBar($tpl)
  /**
   * @ event
   */

  this.on('status-bar', param => {
    if(param){
      statusBar.PLUGIN_DATA = param
      statusBar.show()
    }
    else{
      statusBar.hide()
    }
  })


  /**
   * Player
   */
  this.on('player-load', name => {
      $('#status-bar__player-logo').attr('src', playerImg);
      $('.status-bar__player-name').html(this.current.data.player.name);
  })
  /**
   * help | ready
   */
  $('.status-bar__status--ready').on('click', () => statusBar.readyHandler())

  $('.status-bar__status--help').on('click', () => statusBar.helpHandler())



}
        
