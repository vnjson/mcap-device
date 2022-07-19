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

  this.on('mc-exec', param => {

      const data = {
        "data": param.data,
        "action": param.action,
        "uuid": "",
        "type": param.type,
        "dts": getTime(),
        "ars": true,
        "player": ""
      }
      const str = `CMD_${JSON.stringify(data)}`;

      query(str)
        .then(res => console.log( JSON.stringify(res) ))
        .catch(err => console.log( JSON.stringify(err) ))
  })
}


