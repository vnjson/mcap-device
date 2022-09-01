import "./style.css";
import SritesAnimation from './SritesAnimation.js';

export default function () {


}

let animation = null;
let _args = null
const storeAnimation = {}

vnjs.on("sprites-animate", (args) => {
  
    _args = args
    if (args) {
        animation = new SritesAnimation(args);
        animation.start()
        storeAnimation[animation.id] = animation
    }
    else{
        storeAnimation[animation.id].remove();
    }
    
   
});

vnjs.on('srites-animation.loop', (id) => {

    storeAnimation[id].remove();

})

vnjs.on('srites-animation.end', (id) => {
    //console.log(_args.id)
    //animation.remove(_args.id);
})

