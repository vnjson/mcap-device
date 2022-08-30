/**
 * Выполняет консольную команду в MineCraft
 */


function callback (res){
 
    const _res = JSON.parse(res)
    _res.data = JSON.parse(_res.data)
    const outputData = JSON.stringify(_res, null, 2);
    vnjs.emit('vnjson.info', outputData)
}

export default function (param) {
    param.callback = callback.bind(this)
    const plugins = { 
              'mc-get': param 
    }

    this.exec(plugins)

}