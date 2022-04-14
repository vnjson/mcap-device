
function stopAll(){

  Object.values(this.$store).map(asset=>{
        if(asset.hasOwnProperty("_muted") ){
          asset.stop()
        }
  })
}

export default function (){



stopAll.call(this)
let soundData;
const audio = data=>{

	if(typeof data==='string'){
	
		this.$store[data].play();

	}
	else if(typeof data==='object'){
    soundData = data;
    this.$store[data.name]['stop']();
		this.$store[data.name].rate(data.speed||1);
    this.$store[data.name].loop(data.loop||false);
		this.$store[data.name].volume(data.volume||1)
		this.$store[data.name][data.action]();
	}
  else{
    stopAll.call(this);
  }
}

	this.on('audio', audio);
  
	this.on('sound', data=>{
    this.$store[data].play();
	});


  this.on('audioEnd', (sName)=>{

    if(soundData.onEnd){
        console.log(11)
        this.exec(soundData.onEnd);
    }
    
      
  })

};