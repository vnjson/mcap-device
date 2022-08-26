const exclude = ['score', 'player']

export default function (asset) {

    const data = {}
    for(let key in  this.state.data){
        if( !exclude.includes(key) ){
           data[key] = this.state.data[key]
        }
    }

    const _data = jsyaml.dump(data)
    this.emit('vnjson.info', _data)

}