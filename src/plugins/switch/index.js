import Switch from './Switch.js'


export default function (){
    const _switch = new Switch(this)
    this.on('switch',  (data) => _switch.parse(data))

}