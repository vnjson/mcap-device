const exclude = ['score', 'player']

export default function (asset) {

    const data = {}
    for(let key in  this.current.data){
        if( !exclude.includes(key) ){
           data[key] = this.current.data[key]
        }
    }

    const _data = jsyaml.dump(data)
    this.emit('vnjson.info', _data)

}