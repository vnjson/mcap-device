import './video.css';

import tpl from './tpl.html';

export default function (){

const $tpl = $(tpl);
this.$store.$screen.append($tpl);

const options = {
  /*
  responsive: true,
  controls: true,
  autoplay: false,
  preload: 'auto'
  */
};



var player = videojs('vnjson__video', options, function onPlayerReady() {


  // In this context, `this` is the player that was created by Video.js.
  player.play();

  // How about an event listener?
  this.on('ended', function() {
    videojs.log('Awww...over so soon?!');
  });
});

/*

player.on('error', function(err) {
  console.error(err)
});*/

/*
 this.on('ended', function() {
    videojs.log('Awww...over so soon?!');
  });
*/


  this.on('video', data=>{

    if(data){
        const asset = this.getAssetByName(data)
        console.log(asset)
        //player.src('scenes/assets/abc.webm')
        // player.src('scenes/assets/abc.webm')
        //player.play()
        $tpl.show();
    } 
    else{
      $tpl.hide();

    }
  })

}
