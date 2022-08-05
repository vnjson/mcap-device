import AudioControl from './AudioControl.js'


export default function (){


  const audioControl = new AudioControl()

  this.on('audio', data => audioControl.handler(data))


  this.on('audioEnd', () => {
      if(audioControl.soundData?.onEnd){
          this.exec(audioControl.soundData.onEnd)
      }

  })

}

