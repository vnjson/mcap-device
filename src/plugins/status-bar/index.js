import './style.css'
import tpl from './tpl.html'
import playerImg from './assets/player.svg'
import StatusBar from './StatusBar'

export default function (){
  this.state.data.readyСheck = false
  const $tpl = $(tpl)

  this.$store.$screen.append($tpl);
  const statusBar = new StatusBar($tpl)
  /**
   * @ event
   */

  this.on('status-bar', param => {

    if(param==='clear'){
      statusBar.showReady(false)
      statusBar.showHelp(false)
      statusBar.showCheck(false)
    }
    else if(param){
      statusBar.PLUGIN_DATA = param
      statusBar.show()
    }
    else{
      this.state.data.readyСheck = false
      statusBar.hide()
    }
  })


  /**
   * Player
   */
  this.on('player-load', name => {
      $('#status-bar__player-logo').attr('src', playerImg);
      $('.status-bar__player-name').html(this.state.data.player.name);
  })
  /**
   * help | ready
   */
  $('.status-bar__status--ready').on('click', () => statusBar.showReady(true))

  $('.status-bar__status--help').on('click', () => statusBar.showHelp(true))

  $('.status-bar__image--first').on('click', () => statusBar.checkHandler())
  $('.status-bar__image--last').on('click', () => statusBar.handler())
}
        
