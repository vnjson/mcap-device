import AudioControl from './AudioControl.js'

function stopAll(){

  Object.values(this.$store).map(asset=>{
        if(asset.hasOwnProperty("_muted") ){
          asset.stop()
        }
  })
}




export default function (){



stopAll.call(this)


  const audioControl = new AudioControl()
  const soundControl = new AudioControl()

  this.on('audio', data => audioControl.handler(data))
  this.on('sound', data => soundControl.handler(data))

  this.on('audioEnd', () => {
      if(audioControl.soundData?.onEnd){
          this.exec(audioControl.soundData.onEnd);
      }
      if(soundControl.soundData?.onEnd){
        this.exec(soundControl.soundData.onEnd);
    }
  })

}

