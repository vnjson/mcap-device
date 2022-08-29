
import readyImg from './assets/ready.svg'
import helpImg from './assets/help.svg'
import checkImg from './assets/check.svg'


class StatusBar {
  PLUGIN_DATA = null
  flag = false
  MODE = null
  constructor ($view){
        this.$view = $view
  }
  show (){
        this.$view.css('display', 'flex')
        this.flag = true
        this.controlDBoxPadding(this.MODE)
  }
  hide (){
        this.$view.hide()
        this.flag = false
        this.controlDBoxPadding(this.MODE)
  }
  handler (){
    const isReady = $('.status-bar__image--last').hasClass('status-bar__ready')

    if(!isReady){
        this.showHelp(false)
        if(this.PLUGIN_DATA.onHelp){
            vnjs.exec(this.PLUGIN_DATA.onHelp)
        }
    }
    else{
        this.showReady(false)
        this.showCheck(false)
        if(this.PLUGIN_DATA.onReady){
            vnjs.exec(this.PLUGIN_DATA.onReady)
        }
    }
  }
  checkHandler (){
    if(this.PLUGIN_DATA.onCheck){
        vnjs.exec(this.PLUGIN_DATA.onCheck)
    }
    this.showReady(false)
    this.showCheck(false)

  }

  /**
   * SHOW
   */
  showReady (flag){
    if(vnjs.state.data.readyСheck){
            this.showCheck(true)
    }
    if(flag){
        $('.status-bar__image--last').css('background-image', `url(${readyImg})`).addClass('status-bar__ready')
    }
    else{
        $('.status-bar__image--last').css('background-image', 'unset').removeClass('status-bar__ready')
    }
  }
  showCheck (flag){
    if(flag){
        $('.status-bar__image--first').css('background-image', `url(${checkImg})`)
    }
    else{
        $('.status-bar__image--first').css('background-image', 'unset')
    }
  }
  showHelp (flag){
    if(flag){
        this.showCheck(false)
        $('.status-bar__image--last').css('background-image', `url(${helpImg})`).removeClass('status-bar__ready')
    }
    else{
        $('.status-bar__image--last').css('background-image', 'unset')
    }
  }
  controlDBoxPadding (MODE){
      this.MODE = MODE
      /**
       * Если плагин dialog-box и плагин status-bar находятся в одном объекте
       * - dialog-box: fullscreen
       *   status-bar: true
       * Плагин dialog-box отработает быстрее, чем плагин status-bar
       * Поэтому переменная flag будет равна изначальному значению false
       * Но, небольшая задержка исправит это
       */
        setTimeout(() => {
            if(this.MODE==='mode-fullscreen'&&this.flag){
                $('.dialog-box').css('padding-top', '30px')
            }
            else{
                $('.dialog-box').css('padding-top', '10px')
            }
        }, 100)
  }

}

export default StatusBar