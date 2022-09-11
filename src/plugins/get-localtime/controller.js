export default {
    '===': (localtime, value, execData) => {
        if(localtime===value){
            vnjs.exec(execData)
        }
    },
    '>': (localtime, value, execData) => {
        if(localtime>value){
            vnjs.exec(execData)
        }
    },
    '<': (localtime, value, execData) => {
        console.log(localtime, value )
        if(localtime<value){
            vnjs.exec(execData)
        }
    },
    '!==': (localtime, value, execData) => {
        if(localtime!==value){
            vnjs.exec(execData)
        }
    },
    '<=': (localtime, value, execData) => {
        if(localtime<=value){
            vnjs.exec(execData)
        }
    },
    '>=': (localtime, value, execData) => {
        if(localtime>=value){
            vnjs.exec(execData)
        }
    },
    '[]': (localtime, value, execData) => {
        if( value[0] <= localtime && localtime <= value[1]){
            vnjs.exec(execData)
        }
    },
    '][': (localtime, value, execData) => {
        if(localtime < value[0] || localtime > value[1]){
            vnjs.exec(execData)
        }
    }
}

