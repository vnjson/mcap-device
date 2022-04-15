import './video.css';
import './style.css';
import tpl from './tpl.html';

export default function (){

  const $tpl = $(tpl);
  this.$store.$screen.append($tpl);

  const options = {
    responsive: true,
    controls: false,
    autoplay: false,
    preload: 'auto'
  };



  const player = videojs('vnjson__video', options);
  player.on('error', function(err) {
    videojs.log(err);
  });
  let onEndObj;
  player.on('ended', ()=>{
    $tpl.fadeOut();
    this.exec(onEndObj);
  });

  this.on('video', param=>{
    if(typeof param==='object'){
        const asset = this.getAssetByName(param.name);
        player.src(asset.url);
        if(param.css){
          $tpl.find('.video-js').css(param.css);
        }
        if(param.volume){
          player.ready( ()=>{
              player.volume(param.volume);
              player.play();
          });
        }
        if(param.onEnd){
          onEndObj = param.onEnd;
        }
        $tpl.fadeIn(500);
    }
    else if(typeof param==='string'){
        switch (param){
          case 'pause':
                player.pause();
            break;
          case 'play':
                player.play();
            break;
          default:
              const asset = this.getAssetByName(param);
              player.src(asset.url);
              player.ready( ()=>{
                 player.play();
              });
              
              $tpl.fadeIn(500);
        }
    } 
    else{
      player.pause();
      $tpl.fadeOut();

    }
  })



}
