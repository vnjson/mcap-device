function callback (data){
    $('.debug__output').html(data)
}

export default function (data) {
    const plugins = { 
              'mc-exec': {
                  action: 'executeCMD',
                  data,
                  type: 'server',
                  callback
              } 
    }

    this.exec(plugins)

}