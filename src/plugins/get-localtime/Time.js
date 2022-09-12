import controller from "./controller.js";

class Time {
    operators = [
        "===",
        "<",
        ">",
        ">=",
        "<=",
        "!==",
        "\\[\\]",
        "\\]\\[",
        //'default'
    ];
    dataValue = null;
    value = null;
    OPERATOR = null;
    equal = null;
    PLUGIN_DATA = null;
    constructor(mode) {
        this.mode = mode;
    }
    parse(data) {
        this.PLUGIN_DATA = data;
        /**
         * Пробегаемся по всем условиям
         */
        for (let equal in this.PLUGIN_DATA) {
            this.equal = equal;
            /**
             * Определяем какой оператор используется в пользовательских данных
             */

            for (let i = 0; i < this.operators.length; i++) {
                const operator = this.operators[i];
                const isOperator = new RegExp(operator).test(this.equal);

                if (isOperator) {
                    this.OPERATOR = operator;
                }
            }
            if (this.OPERATOR === null) {
                vnjs.emit("error", {
                    ru: `Некоректный оператор <font color="deepskyblue">${
                        this.equal
                    }</font><br>Допустимые операторы <font color="lightgreen">${this.operators
                        .join("  ")
                        .replaceAll("\\", "")}</font>`,
                    en: `Invalid operator <font color="deepskyblue">${
                        this.equal
                    }</font><br>ValidoOperators <font color="lightgreen">${this.operators
                        .join("  ")
                        .replaceAll("\\", "")}</font>`,
                });
                return;
            }
            if (this.OPERATOR.includes("\\")) {
                this.OPERATOR = this.OPERATOR.replaceAll("\\", "");
            }
            const [ key, val ] = this.equal.split(this.OPERATOR);
            if(this.mode==='localdate'){
                this.dateEval(val)
            }
            if(this.mode==='localtime'){
                this.timeEval(val)
            }
            console.log(key,this.OPERATOR, val)


        }
    }
    timeEval (val){
            /**
             * Определяем диапазон ли лежит в значении
             */
             if(val.includes('--')){
                this.value = val.trim().split('--').map( (item) => {
                    return Number(item.replace('-', ''))
                });
            }
            else{
                this.value = Number( val.trim().replace('-', '') );
            }
 
            const execData = this.PLUGIN_DATA[this.equal];
            controller[this.OPERATOR](this.localtime, this.value, execData)
    }
    get localtime (){
        const [ hh, mm ] = new Date().toTimeString().split(":");
        return  Number(hh+mm);
    }

    dateEval (val){
            /**
             * Определяем диапазон ли лежит в значении
             */
            if(val.includes('--')){
                this.value = val.split('--').map( (item) => {
                    return this.transformDate( item.trim() );
                });
            }
            else{
                this.value = this.transformDate( val.trim() );
            }
            console.log(this.localdate, this.value)
            const execData = this.PLUGIN_DATA[this.equal];
            controller[this.OPERATOR](this.localdate, this.value, execData, this.mode);
    }
    get localdate (){
        return this.transformDate();
    }
    transformDate (date){
        let _date;
        if(date){
            _date = new Date(date);
        }
        else{
            _date = new Date();
        }
        return Math.ceil( _date.getTime() / 100000 );
    }
}

export default Time;
