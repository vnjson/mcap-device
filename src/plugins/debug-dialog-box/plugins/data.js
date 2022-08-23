const exclude = ['score', 'player']

export default function (asset) {
    let str = ""
    for(let key in  this.current.data){
        if( !exclude.includes(key) ){
            str += `<font color="deepskyblue">${key}</font>: ${this.current.data[key]} <br/>`
        }
    }

    this.emit('vnjson.info', str)

}