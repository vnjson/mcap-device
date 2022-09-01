import "./style.css";
import SritesAnimation from './SritesAnimation.js';

export default function () {


}

let animation = null;
let _args = null
const storeAnimation = {}

vnjs.on("sprite-animate", (args) => {
  
    _args = args
    if (typeof args==='object') {
        animation = new SritesAnimation(args);
        animation.start()
        storeAnimation[animation.id] = animation
    }
    else{
        vnjs.emit('vnjson.error', `Не корректный тип данных <font color="deepskyblue"> ${args}</font> === <font color="magenta">${typeof args}</font><br>Принимает только object`)
    }
   
});
vnjs.on("sprite-animate-remove", (args) => {
  
    if(storeAnimation[args]){
        storeAnimation[args].remove();
    }
    else{
        vnjs.emit('vnjson', `Неверный индификатор анимации <font color="deepskyblue">${args}</font>`)
    }
   
});


vnjs.on('sprite-animation.loop', (id, n) => {
    console.log('sprite-animation.loop: '+id, n)
    if(_args.onLoop){
        vnjs.exec(_args.onLoop)
    }

})

vnjs.on('sprite-animation.end', (id) => {
    console.log('sprite-animation.end: '+id)
    if(_args.onEnd){
        vnjs.exec(_args.onEnd)
    }
    
})

