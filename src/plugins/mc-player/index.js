export default function (){

  
const rndID = new Date().toLocaleDateString()
  try {
      window.mcefQuery({
        request: "info",
        persistent: true,
        onSuccess: response=>{
          this.state.data.player = JSON.parse(response)

          this.emit('player-load', this.state.data.player.name)
        }
      })

  } 
  catch (err) {
      this.state.data.player = {
        name: 'mcap_uknown',
        uuid: new Date().toLocaleString()
      }

      this.emit('player-load', this.state.data.player.name)
  }

}
