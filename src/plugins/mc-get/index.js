function query (request){
    return new Promise((resolve, reject)=>{
          try {
              window.mcefQuery({
                request,
                persistent: true,
                onSuccess: (response) => {
                    resolve( JSON.parse(response) );
                },
                onFailure: (errCode, errMsg) => {
                            reject( JSON.parse(errMsg) )
                          }
                })
          } 
          catch (err) {
              reject(JSON.parse(err));
          }
  
    })
  }
  function getTime (){
    return Math.floor( new Date().getTime() / 1000 )
  }
  
  export default function (){
  
    vnjs.on('mc-get', param => {

        const data = {
            "request": param.request,
            "slot": param.slot||0,
            "posX": param.x||0,
            "posY": param.y||0,
            "posZ": param.z||0,
            "data": ""
        }
        const str = `GET_${JSON.stringify(data)}`;
  
        query(str)
          .then(res => { 
              const data = JSON.stringify(res) 
              console.log( data )
              thisstore.MINECRAFT = thisstore.MINECRAFT||{}
              thisstore.MINECRAFT[param.request] = res
              if(param.callback){
                  param.callback(data)
              }
          })
          .catch(err => { 
              const data = JSON.stringify(err) 
              console.log( data )
              if(param.callback){
                  param.callback(data)
              }
          })
    })

/*
    vnjs.on('mc.player', () => {
        alert(JSON.stringify(thisstore.MINECRAFT.PLAYER))
    })
    vnjs.on('mc.slot', () => {
        alert(JSON.stringify(thisstore.MINECRAFT.SLOT.id))
    })
    */
  }
  
  
  