
import readyImg from './assets/ready.svg'
import helpImg from './assets/help.svg'
import checkImg from './assets/check.svg'


class StatusBar {
  PLUGIN_DATA = null
  constructor ($view){
        this.$view = $view
  }
  show (){
        this.$view.css('display', 'flex')
  }
  hide (){
        this.$view.hide()
  }
  handler (){
    const isReady = $('.status-bar__image--last').hasClass('status-bar__ready')

    if(!isReady){
        this.showHelp(false)
        if(this.PLUGIN_DATA.onHelp){
            $vnjs.exec(this.PLUGIN_DATA.onHelp)
        }
    }
    else{
        this.showReady(false)
        this.showCheck(false)
        if(this.PLUGIN_DATA.onReady){
            $vnjs.exec(this.PLUGIN_DATA.onReady)
        }
    }
  }
  checkHandler (){
    if(this.PLUGIN_DATA.onCheck){
        $vnjs.exec(this.PLUGIN_DATA.onCheck)
    }
    this.showReady(false)
    this.showCheck(false)

  }

  /**
   * SHOW
   */
  showReady (flag){
    if($vnjs.state.data.readyСheck){
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

}

export default StatusBar