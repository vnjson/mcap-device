
import readyImg from './assets/ready.svg'
import helpImg from './assets/help.svg'

class StatusBar {
  flagReady = false
  flagHelp = false
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
  clearStatus (){
        //this.flagReady = false
        //this.flagHelp = false
        $('.status-bar__image-containter').css('background-image', `unset`)
        $('.status-bar__item').toArray().map(el => { 
        $(el).removeClass('status-active');
        })
  }
  readyHandler (){
        this.showHelp(false)
        this.showReady(this.flagReady =!this.flagReady)
        if(this.flagReady){
            $vnjs.exec(this.PLUGIN_DATA.onReady)
        }
  }
  helpHandler (){
        this.showReady(false)
        this.showHelp(this.flagHelp =!this.flagHelp)
        if(this.flagHelp){
            $vnjs.exec(this.PLUGIN_DATA.onHelp)
        }
  }
  showReady (flag){
    this.flagReady = flag
        if(this.flagReady){
            $(this).addClass('status-active')
            // добавляем изображение
            $('.status-bar__image-containter').css('background-image', `url(${readyImg})`)
        }
        else{
            this.clearStatus()
        }
  }

  showHelp (flag){
        this.flagHelp = flag
        if(this.flagHelp){
            // красим в красный
            $(this).addClass('status-active')
            // добавляем изображение
            $('.status-bar__image-containter').css('background-image', `url(${helpImg})`)
        }
        else{
            this.clearStatus()
        }
  }

}

export default StatusBar