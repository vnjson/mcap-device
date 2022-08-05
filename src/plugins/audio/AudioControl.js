class AudioControl {
    //prevSound = null
    soundData = null
    constructor (){
      // не помню зачем это, но вроде раньше от чего то помогало
      this.stopAll()
    }
    isAudioExist (name) {
      if(!$vnjs.$store[name]){
        console.error('Некоректный индификатор аудио файла', name)
        return false
      }
      return true
    }
    handler (data) {
      /**
       * BOOLEAN
       */
      if(typeof data==='boolean'){
        this.stopAll()
      }
      /**
       * STRING
       */
      else if(typeof data==='string'){
          if( !this.isAudioExist(data) ) return
          $vnjs.$store[data].play()
      }
      /**
       * OBJECT
       */
      else if(typeof data==='object'){
        if( !this.isAudioExist(data.name) ) return
        $vnjs.$store[data.name].rate(data.speed||1)
        $vnjs.$store[data.name].loop(data.loop||false)
        $vnjs.$store[data.name].volume(data.volume||1)
        $vnjs.$store[data.name][data.action]()
        this.soundData = data
      }
    }
    stopAll (){
      Object.values($vnjs.$store).map(asset=>{
            if(asset.hasOwnProperty("_muted") ){
              asset.stop()
            }
      })
    }
  
  }

export default AudioControl