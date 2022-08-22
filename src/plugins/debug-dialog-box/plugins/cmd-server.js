/**
 * Выполняет консольную команду в MineCraft
 */


function callback (data){
    this.emit('vnjson.info', data)
}

export default function (param) {
    const [ action, data ] = param.split(':\n')
    const plugins = { 
              'mc-exec': {
                  action,
                  data,
                  type: 'server',
                  callback: callback.bind(this)
              } 
    }

    this.exec(plugins)

}