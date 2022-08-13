

class AudioControl {
    //prevSound = null
    soundData = null
    constructor (){
      // не помню зачем это, но вроде раньше от чего то помогало
      this.stopAll()
    }
    isAudioExist (name) {
      if(!$vnjs.$store[name]&&!$vnjs.$store.sprites[name]){
        $vnjs.emit('error', 'assetNotFound', name)

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
          const soundName = $vnjs.$store.sprites[data]
          if(soundName){
              vnjs.$store[soundName].stop()
              $vnjs.$store[soundName].rate(1)
              $vnjs.$store[soundName].loop(false)
              $vnjs.$store[soundName].volume(1)
              $vnjs.$store[soundName].play(data)
  
          }
          else{
              $vnjs.$store[data].stop()
              $vnjs.$store[data].rate(1)
              $vnjs.$store[data].loop(false)
              $vnjs.$store[data].volume(1)
              $vnjs.$store[data].play()
          }
          
      }
      /**
       * OBJECT
       */
      else if(typeof data==='object'){
        if( !this.isAudioExist(data.name) ) return

        const soundName = $vnjs.$store.sprites[data.name]
        let sound = null
        if(soundName){
            sound = $vnjs.$store[soundName]
        }
        else{
          sound = $vnjs.$store[data.name]
        }
        sound.stop()
        sound.rate(data.speed||1)
        sound.loop(data.loop||false)
        sound.volume(data.volume||1)
        if(soundName){
          sound[data.action](data.name)
        }
        else{
          sound[data.action]()
        }
        //console.log(data , soundName )
        this.soundData = data
      }
    }
    stopAll (){
      Object.values($vnjs.$store).map(asset=>{
            if(asset.hasOwnProperty("_muted") ){
              asset.stop()
            }
      })
    }/**
     * 
     * @param {String} time [ 2:53 ] 
     */
    formatTime (time) {
      const t = time.split(':')
    
      let hrs = 0
      let min = 0
      let sec = 0
      if(t.length===2){
        min = Number(t[0])
        sec = Number(t[1])
      }
      else if(t.length===3){
        hrs = Number(t[0])
        min = Number(t[1])
        sec = Number(t[2])
      }
      else{
        return
      }
     
      return (hrs*60*60+min*60+sec)*1000
    }

    regSprites (data){
  
      for(let spriteID in data.sprite){
        const startTime = this.formatTime( data.sprite[spriteID][0] )
        const endTime = this.formatTime( data.sprite[spriteID][1] )
        const timeRange = [ startTime, endTime ]
      
        $vnjs.$store.sprites[spriteID] = data.name
        $vnjs.$store[data.name]._sprite[spriteID] = timeRange
        $vnjs.$store[data.name].volume(data.volume||1)
      }

  
    }
  }

export default AudioControl