import './style.css'
import tpl from './tpl.html'
import readyImg from './assets/ready.svg'
import helpImg from './assets/help.svg'
import playerImg from './assets/player.svg'

export default function (){

  const $tpl = $(tpl);
  let ready = false;
  let help = false;
  this.$store.$screen.append($tpl);
  this.on('status-bar', param=>{
    if(param){
      $tpl.css('display', 'flex');
    }
    else{
      $tpl.hide();
    }
  })
  function clearStatus (){
    $('.status-bar__image-containter').css('background-image', `unset`)
    $('.status-bar__item').toArray().map(el=>{ 
      $(el).removeClass('status-active');
    })
  }
  var readyStatus = false;
  $('.status-bar__status--ready').on('click', function (){
      clearStatus()
      if(readyStatus){
          readyStatus = false;
      }
      else{
        helpStatus = false;
        readyStatus = true;
        // красим в зеленый
        $(this).addClass('status-active')
        // добавляем изображение
        $('.status-bar__image-containter').css('background-image', `url(${readyImg})`)
        /**
         * При клике на кнопку [ готов ] определяем стоит ли нам выполнить плагин [next] или нет
         */
        if(ready){
          $vnjs.exec({next: true});
          setTimeout(()=>{
              clearStatus();
              readyStatus = false;
          }, 1000)
        }
        ready = false
      }
  })
  var helpStatus = false
  $('.status-bar__status--help').on('click', function (){
      clearStatus()
      if(helpStatus){
          helpStatus = false
      }
      else{
          readyStatus = false
          helpStatus = true
          // красим в красный
          $(this).addClass('status-active')
          // добавляем изображение
          $('.status-bar__image-containter').css('background-image', `url(${helpImg})`)
         /**
          * При клике на кнопку [ помощь ] определяем стоит ли нам выполнить плагин [next] или нет
          */
          if(help){
            $vnjs.exec({next: true});
            setTimeout(()=>{
                clearStatus();
                helpStatus = false;
            }, 1000)
          }
          help = false
      }
  })

this.on('player-load', name=>{
    $('#status-bar__player-logo').attr('src', playerImg);
    $('.status-bar__player-name').html(this.current.data.player.name);
})
/**
 * Следим за статусом ready и help
 */
this.on('ready', e=>ready=e)

this.on('help', e=>help=e);

}
        
