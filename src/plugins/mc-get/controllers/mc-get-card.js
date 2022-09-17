

export default function (args){
    const _id = 'is_mtc:item_card_';
    const excludeProps = ['card', 'default'];
    const { HAND } = vnjs.store.MINECRAFT;
    let item = null;
    if(HAND){
        item = HAND;
    }
    if(!item.data.id.includes(_id)){
        vnjs.exec(args.default);
        return;
    }
    const { tag } = item.data;

    const { assetnumber, cdwd } = tag;
    /**
     * Созраняем cardID в переменню
     */
     vnjs.state.data[args.card] = `${cdwd} ${assetnumber}`;
     /**
      * Выполняем cdwd карты, если найдена
      */
    let flagID = false;
    for(let key in args){
        if(key===cdwd){
            flagID = true;
            vnjs.exec(args[key]);
        }
    }
    if(!flagID){
        vnjs.exec(args.default);
    }

}