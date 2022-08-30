import AudioControl from './AudioControl.js'


export default function (){

  vnjs.store.sprites = {}
  const audioControl = new AudioControl()

  vnjs.on('audio', data => audioControl.handler(data) )

  vnjs.on('audio-sprite', data => audioControl.regSprites(data) )

  vnjs.on('audioEnd', () => {
      if(audioControl.soundData?.onEnd){
          this.exec(audioControl.soundData.onEnd)
      }

  })

}

