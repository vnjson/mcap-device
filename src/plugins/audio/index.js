import AudioControl from './AudioControl.js'


export default function (){

  vnjs.store.sprites = {}
  const audioControl = new AudioControl()

  this.on('audio', data => audioControl.handler(data) )

  this.on('audio-sprite', data => audioControl.regSprites(data) )

  this.on('audioEnd', () => {
      if(audioControl.soundData?.onEnd){
          this.exec(audioControl.soundData.onEnd)
      }

  })

}

