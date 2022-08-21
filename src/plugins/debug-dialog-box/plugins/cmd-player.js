export default function (data) {

        const plugins = { 
                  'mc-exec': {
                      action: 'executeCMD',
                      data,
                      type: 'player'
                  } 
        }
  
        this.exec(plugins)

}