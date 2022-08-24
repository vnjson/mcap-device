


export default function (){
  let ISBN;
  this.on('postload', ()=>{
      ISBN = '0000000000000';
      if( store.get(ISBN) ){
          this.current.data = store.get(ISBN);
      }
      else{
        this.current.data = {};
      }
  })
  /**
   * set
   */
  const dataSetHanlder = data => {
    for(let key in data){
      this.current.data[key] = data[key]
    }
    store.set(ISBN, this.current.data)
  }
  /**
   * clear
   */
  const dataClearHanler = data => {
    store.remove(ISBN)
    this.current.data = {
      score: this.current.data.score,
      player: this.current.data.player
    }
  }
  this.on('data-set', dataSetHanlder)
  this.on('data-clear', dataClearHanler)

  /**
   * deprecated
   */
  this.on('set-data', data => {
      console.warn('[set-data] is deprecated. Use [data-set]')
      dataSetHanlder(data)
  })
  this.on('clear-data', data => {
      console.warn('[clear-data] is deprecated. Use [data-clear]')
      dataClearHanler(data)
  })


}