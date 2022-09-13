/**
 * mc-get-block
 */

export function mcGetBlockCommon(args) {
    const props = ["color", "variant", "axis", "facing"];
    const block = vnjs.store.MINECRAFT.BLOCK.data;

    let idExist = false;
    for (let key in args) {
        /**
         * Обрабатываю ID
         */
        if (!props.includes(key) && key !== "default" && block.id === key) {
            idExist = true;
            vnjs.exec(args[key]);
        }
        /**
         * Обрабатвываю свойства ["color", "variant", "axis", "facing"];
         */
        if (props.includes(key)) {
            /**
             * Пробегаю по свойтвам блока
             */
            for (let blockKey in block.state) {
                if (blockKey.includes(`name=${key}`)) {
                    let blockParam = block.state[blockKey];
                    /**
                     * Передаю value блока в переменную заданную пользователем color: color123
                     */
                    vnjs.state.data[args[key]] = blockParam;
                }
            }
        }
    }

    if (!idExist && args.default) {
        vnjs.exec(args.default);
    }
}

/**
 * mc-get-block-nbt
 */

export function mcGetBlockNBT(args) {
    const block = vnjs.store.MINECRAFT.BLOCK;
    for (let key in args) {
        let value = block.data.nbt[key];
        vnjs.state.data[args[key]] = value;
    }
}

/**
 * mc-get-store-slot
 */

export function mcGetStoreSlot(args) {
    const { slot } = args;
    const notIDProp = ["count", "damage", "slot"];
    const block = vnjs.store.MINECRAFT.BLOCK;
    const items = block.data.nbt.Items;

    const _item = items.find((item) => item.Slot === slot);
    if (!_item) {
        if (args.default) {
            vnjs.exec(args.default);
        }
        return;
    }
    vnjs.state.data[args.count] = _item.Count;
    vnjs.state.data[args.damage] = _item.Damage;
    let idExist = false;
    for (let key in args) {
        if (key === _item.id) {
            idExist = true;
            vnjs.exec(args[key]);
        }
    }

    if (!idExist && args.default) {
        vnjs.exec(args.default);
    }
}

/**
 * mc-get-store-total
 */
export function mcGetStoreTotal(args) {
    const block = vnjs.store.MINECRAFT.BLOCK;
    const hand = vnjs.store.MINECRAFT.HAND;
    let items = null;
    if(block){
        items = block.data.nbt.Items;
    }
    if(hand){
        items = hand.data.ForgeCaps.Parent.Items;
    }

    const _items = items.filter((item) => {
        if (args.damage) {
            if (item.id === args.id && item.Damage === args.damage) {
                return true;
            }
        } else {
            if (item.id === args.id) {
                return true;
            }
        }
    });
    /**
     * formula
     */

    if (args.formula === "SumRateCount") {
        let sum = 0;
        _items.forEach((_i) => {
            let rate = args.rates.filter( (r) => {
                let rateDamage = Number( Object.keys(r)[0] );
                return rateDamage === _i.Damage;
            })[0]
 
            if(rate){
                let val = Object.values(rate)[0]
                sum += val * _i.Count;
               
            }

        });
        console.log(sum)
    /*    args.rates.forEach((item) => {
            let val = Object.values(item)[0];
            _items.forEach((_i) => {
                console.log(val, _i)
                sum += val * _i.Count;
                   // sum += Number(item[args.damage]) * _i.Count;
            });
       
         
        });
*/
        vnjs.state.data[args.result] = sum;
    }
    if(args.formula === "SumCount"){
        let sum = 0;
        _items.forEach((_i) => {
            sum += _i.Count;
        });
        vnjs.state.data[args.result] = sum;
        console.log(sum)
    }

}
/**
 * Табличка
 */
export function mcGetSign (args){
    const block = vnjs.store.MINECRAFT.BLOCK;

    const { Text1, Text2, Text3, Text4 } = block.data.nbt;
    
    const _strings = [ Text1, Text2, Text3, Text4 ].map( (item) => {
        return JSON.parse(item).text;
    });
 


    if('minecraft:standing_sign' === block.data.id){
        vnjs.state.data[args.text1] = _strings[0];
        vnjs.state.data[args.text2] = _strings[1];
        vnjs.state.data[args.text3] = _strings[2];
        vnjs.state.data[args.text4] = _strings[3];
        vnjs.exec( args['minecraft:standing_sign'] );

    }   
    else if('minecraft:wall_sign' === block.data.id){
        vnjs.state.data[args.text1] = _strings[0];
        vnjs.state.data[args.text2] = _strings[1];
        vnjs.state.data[args.text3] = _strings[2];
        vnjs.state.data[args.text4] = _strings[3];
        vnjs.exec( args['minecraft:wall_sign'] );
    }  
    else if(args['default']){
        vnjs.exec( args['default'] );
    }
}

/**
 * Рамка
 */
export function mcGetFrameItem (args) {
    const block = vnjs.store.MINECRAFT.ENTITY;
    const excludeProps = [ "default", "damage" ];
    const { id, Damage } = block.data.nbt.Item;
    /**
     * Получаю id предмета
     */
    let def = false;
    for(let key in args){
        if( !excludeProps.includes(key) && id === key ){
            vnjs.state.data[args.damage] = Damage;
            def = true;
            vnjs.exec(args[key]);
        }
    }
    if(!def && args.default){
        vnjs.exec(args.default);
    }

}
/**
 * Предметы в руках
 */
export function mcGetHandItem (args){
    const { id, Damage } = vnjs.store.MINECRAFT.HAND.data;


    const excludeProps = [ "default", "damage" ];
    /**
     * Получаю id предмета
     */
    let def = false;
    for(let key in args){
        if( !excludeProps.includes(key) && id === key ){
            vnjs.state.data[args.damage] = Damage;
            def = true;
            vnjs.exec(args[key]);
        }
    }
    if(!def && args.default){
        vnjs.exec(args.default);
    }
}