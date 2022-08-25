class Switch {
    operators = [
        '===', 
        '<', 
        '>', 
        '>=', 
        '<=', 
        '!==', 
        '\[\]', 
        '\]\[',
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
            this.equal = equal.replaceAll(' ', '')
            /**
             * Определяем какой оператор используется в пользовательских данных
             */
            this.operators.forEach( op => {
                if( new RegExp(op).test(this.equal) ){

                    this.OPERATOR = op
                }
            })
            if(this.OPERATOR==='default'){

            }
            else{
                const [ key, val ] = this.equal.split(this.OPERATOR)
                this.dataValue = this.__vnjs.state.data[key]
                this.value = val
            }
            this.distributor()
       /*
            const [ key, value ] = equal.replaceAll(' ', '').split('===');
            
            // Если существует сохраненная переменная, то выполняем команду
            if( String( this.state.data[key] ) === String(value) && key!=='default'){
                defaultFlag = true;
                this.exec(data[equal]);
            }*/
        }
    }
    distributor (){
        console.log(this.dataValue, this.value)
        switch (this.OPERATOR){
            case '===':
                if(this.dataValue==this.value){
                    //this.__vnjs.exec(this.PLUGIN_DATA[this.equal])
                }
                break
            case '>':
                if(this.dataValue>this.value){
                    console.log('>')
                    //this.__vnjs.exec(this.PLUGIN_DATA[this.equal])
                }
                break
            case '<':
                if(this.dataValue<this.value){
                    console.log('<')
                    //this.__vnjs.exec(this.PLUGIN_DATA[this.equal])
                }
                break
            case '!==':
                if(this.dataValue!==this.value){
                    console.log('!==')
                    //this.__vnjs.exec(this.PLUGIN_DATA[this.equal])
                }
                break
            case '<=':
                if(this.dataValue==this.value){
                    console.log('<=')
                    //this.__vnjs.exec(this.PLUGIN_DATA[this.equal])
                }
                break   
            case '>=':
                if(this.dataValue==this.value){
                    console.log('>=')
                    //this.__vnjs.exec(this.PLUGIN_DATA[this.equal])
                }
                break   
            case '[]':
                if(this.dataValue.includes(this.value)){
                    console.log('include')
                    //this.__vnjs.exec(this.PLUGIN_DATA[this.equal])
                }
                break   
            case '][':
                if(!this.dataValue.includes(this.value)){
                    console.log('exclude')
                    //this.__vnjs.exec(this.PLUGIN_DATA[this.equal])
                }
                break  
            case 'default':
                alert('DEF')
                //this.__vnjs.exec(this.PLUGIN_DATA[this.equal])
                break
            default:
                this.__vnjs.emit('error', {
                    ru: 'Некоректный оператор',
                    en: 'Invalid operator'
                })
        }
    }
}

export default Switch