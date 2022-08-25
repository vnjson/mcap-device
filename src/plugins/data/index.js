


export default function (){
  let ISBN;
  this.on('postload', ()=>{
      ISBN = '0000000000000';
      if( store.get(ISBN) ){
          this.state.data = store.get(ISBN);
      }
      else{
        this.state.data = {};
      }
  })
  /**
   * set
   */
  const dataSetHanlder = data => {
    for(let key in data){
      this.state.data[key] = data[key]
    }
    store.set(ISBN, this.state.data)
  }
  /**
   * clear
   */
  const dataClearHanler = data => {
    store.remove(ISBN)
    this.state.data = {
      score: this.state.data.score,
      player: this.state.data.player
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