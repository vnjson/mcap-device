


export default function (){
  let ISBN;
  this.on('postload', ()=>{
      ISBN = this.TREE.$root.package?.ISBN||'0000000000000';
      if( store.get(ISBN) ){
          this.current.data = store.get(ISBN);
      }
      else{
        this.current.data = {};
      }
  })


  this.on('set-data', data=>{
    for(let key in data){
      this.current.data[key] = data[key]
    }
    store.set(ISBN, this.current.data)
  })

  this.on('clear-data', data=>{
    store.remove(ISBN)
    
    this.current.data = {
      score: this.current.data.score,
      player: this.current.data.player
    }

  })
  this.on('switch', data=>{
    let defaultFlag = false;
    for(let equal in data){
      const [ key, value ] = equal.replaceAll(' ', '').split('===');

      // Если существует сохраненная переменная, но выполняем команду
      if( String( this.current.data[key] ) === String(value) && key!=='default'){
          defaultFlag = true;
          this.exec(data[equal]);
      }
    }
    // если ни одна переменная в yaml коде ранее не задавалась, то
    // выполняем команду поумолчанию, если таковая присутсвует
    if(!defaultFlag&&data?.default){
        defaultFlag = false;
        this.exec(data.default);
    }

  })
}