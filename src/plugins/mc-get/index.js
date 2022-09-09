import mcGet from './mc-get.js';
import blockController from "./block-controller";



export default function () {};
/**
 * получаем блок
 */
vnjs.on("mc-get", mcGet);
/**
 * сравнение по ID
 */
vnjs.on("mc-get-block", (args) => blockController["mc-get-block"](args));
/**
 * сравнение по цвету
 */
vnjs.on("mc-get-block-color", (args) => blockController.handlerProp(args, "color") );

/**
 * сравнение по типу
 */
vnjs.on("mc-get-block-variant", (args) => blockController.handlerProp(args, "variant") );

/**
 * сравнение по направлению раположения
 */
vnjs.on("mc-get-block-axis", (args) => blockController.handlerProp(args, "axis") );

/**
 * куда смотрит предмет
 */
vnjs.on("mc-get-block-facing", (args) => blockController.handlerProp(args, "facing") );

/**
 * nbt
 */

vnjs.on('mc-get-block-nbt', (args) => blockController["mc-get-block-nbt"](args) )

/**
 * get chest
 */
const notIDProp = ['count', 'damage', 'slot'];
vnjs.on('mc-get-store-slot', (args) => {
    const { slot } = args;
    const block = vnjs.store.MINECRAFT.BLOCK;
    const items = block.data.nbt.Items;
   
    const _item = items.find( (item) => item.Slot === slot);
    if(!_item){
        if(args.default){
            vnjs.exec(args.default)
        }
        return;
    }
    vnjs.state.data[args.count] = _item.Count;
    vnjs.state.data[args.damage] = _item.Damage;
    let idExist = false;
    for(let key in args){
        if(key===_item.id){
            idExist = true;
            vnjs.exec(args[key]);
        }

    }

    if(!idExist && args.default){
        vnjs.exec(args.default)
    }


    console.log(block.data.nbt)
})