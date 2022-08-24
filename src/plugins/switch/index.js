import Switch from './Switch.js'


export default function (){
    const _switch = new Switch(this)
    this.on('switch',  (data) => _switch.parse(data))
           
        //let defaultFlag = false;


        // если ни одна переменная в yaml коде ранее не задавалась, то
        // выполняем команду поумолчанию, если таковая присутсвует
       /*
       
        if(!defaultFlag&&data?.default){
            defaultFlag = false;
            this.exec(data.default);
        }
*/
   
}