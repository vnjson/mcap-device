class AudioControl {
    prevSound = null
    soundData = null
  
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
        if(!this.prevSound) return
        $vnjs.$store[this.prevSound].stop()
        this.prevSound = null
      }
      /**
       * STRING
       */
      else if(data==='stop'){
        if(!this.prevSound) return
        $vnjs.$store[this.prevSound].stop()
        this.prevSound = null
      }
      else if(typeof data==='string'){
          if( !this.isAudioExist(data) ) return
  
          if(this.prevSound){
            $vnjs.$store[this.prevSound].stop()
          }
  
          $vnjs.$store[data].play()
          this.prevSound = data
  
      }
      /**
       * OBJECT
       */
      else if(typeof data==='object'){
  
        if( !this.isAudioExist(data.name) ) return
        if(this.prevSound){
          $vnjs.$store[prevSound].stop()
        }
   
        //this.$store[data.name]['stop']()
        $vnjs.$store[data.name].rate(data.speed||1)
        $vnjs.$store[data.name].loop(data.loop||false)
        $vnjs.$store[data.name].volume(data.volume||1)
        //$vnjs.$store[data.name].fade(0, 1, 1000)
        $vnjs.$store[data.name][data.action]()
        this.prevSound = data.name
        this.soundData = data
      }
      /*
      else{
        stopAll.call(this)
      }*/
  
    }
  
  
  }

export default AudioControl