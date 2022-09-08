import mcGet from './mc-get.js';
import blockHandler from "./block-handler";



export default function () {};
/**
 * получаем блок
 */
vnjs.on("mc-get", mcGet);
/**
 * сравнение по ID
 */
vnjs.on("mc-get-block", (args) => blockHandler["mc-get-block"](args));
/**
 * сравнение по цвету
 */
vnjs.on("mc-get-block-color", (args) => blockHandler.handler(args, "color") );

/**
 * сравнение по типу
 */
vnjs.on("mc-get-block-variant", (args) => blockHandler.handler(args, "variant") );

/**
 * сравнение по направлению раположения
 */
vnjs.on("mc-get-block-axis", (args) => blockHandler.handler(args, "axis") );

/**
 * куда смотрит предмет
 */
vnjs.on("mc-get-block-facing", (args) => blockHandler.handler(args, "facing") );

/**
 * nbt
 */

vnjs.on('mc-get-block-nbt', (args) => {
 
        const block = vnjs.store.MINECRAFT.BLOCK;
        for(let key in args){
            let value = block.data.nbt[key];
            vnjs.state.data[ args[key] ] = value;
        }

})