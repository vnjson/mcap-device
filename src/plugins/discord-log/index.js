

export default function (){

let webhook;
let avatar_url;

this.on('postload', ()=>{
  if(this.TREE.$root.package){
    let discordLogParam = this.TREE.$root.package['discord-log'];
    if(!discordLogParam) return;
    webhook = discordLogParam.webhook;
    avatar_url = discordLogParam.avatar_url
  }  
})

this.on('discord-log', msg=>{
  var content = null
  if(typeof(msg)==='string'){
    content = this.TREE.$root.package.name+' [ '+this.current.sceneName+'.'+this.current.labelName+' ]  '+ msg
  }
  else{
    content = this.TREE.$root.package.name+' [ '+this.current.sceneName+'.'+this.current.labelName+' ]'
  }
      const params = {
        username: $vnjs.current.data.player.name,
        avatar_url,
        content
      }

  sendMessage(params, webhook) 
})


}


function sendMessage(params, url) {
    const request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(params));
}