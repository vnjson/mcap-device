import controller from './controller.js'

class Switch {
    operators = [
        '===', 
        '<', 
        '>', 
        '>=', 
        '<=', 
        '!==', 
        '\\[\\]', 
        '\\]\\[',
        'default'
    ]
    dataValue= null
    value = null
    OPERATOR = null
    equal = null
    PLUGIN_DATA = null
    constructor (vnjs){
        this.__vnjs = vnjs
    }
    parse (data){
        this.PLUGIN_DATA = data
        /**
         * Пробегаемся по всем условиям
         */
        for(let equal in this.PLUGIN_DATA){
            this.equal = equal
            /**
             * Определяем какой оператор используется в пользовательских данных
             */
          
            for(let i=0;i<this.operators.length; i++){
                const op = this.operators[i]
                if( new RegExp(op).test(this.equal) ){
                    this.OPERATOR = op
                }
            }
            if(this.OPERATOR.includes('\\') ){
                this.OPERATOR = this.OPERATOR.replaceAll('\\', '')
            }
           
            const [ key, val ] = this.equal.split(this.OPERATOR)
           
            this.dataValue = this.__vnjs.state.data[key.trim()]
            if( isNaN(+val) ){
                this.value = val.trim()
            }
            else{
                this.value = Number(val)
            }
            

            const execData = this.PLUGIN_DATA[this.equal]
            if(controller[this.OPERATOR]){
                controller[this.OPERATOR](this.dataValue, this.value, execData)
            }
            else{
                vnjs.emit('error', {
                    ru: `Некоректный оператор ${this.OPERATOR}`,
                    en: `Invalid operator ${this.OPERATOR}`
                })
            }

        }
    }
  
}

export default Switch