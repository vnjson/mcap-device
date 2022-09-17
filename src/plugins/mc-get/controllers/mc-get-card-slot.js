/**
 * mc-get-card-slot
 */
export default function (args){
    const { BLOCK } = vnjs.store.MINECRAFT;
    const IDs = ['is_mtc:block_monodisplayer', 'is_mtc:block_displayer']
    /**
     * В заданных координатах не тот блок, что нам нужен
     */
    if(!IDs.includes(BLOCK.data.id)) {
        vnjs.exec(args.default);
        return;
    }
    console.log(BLOCK.data.nbt.Items.Items)
    const card = BLOCK.data.nbt.Items.Items.find( (item) => item.Slot===args.slot);
    /**
     * Пустой блок, без карточки
     */
    if(!card) {
        vnjs.exec(args.default);
        return;
    };

    const { assetnumber, cdwd } = card.tag;
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