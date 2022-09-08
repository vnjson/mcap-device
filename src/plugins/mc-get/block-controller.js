export default {
    /*
    isMinecraft (){
        if(!vnjs.store.MINECRAFT?.BLOCK){
            vnjs.emit('vnjson.error', `Плагин работает только внутри Minecraft`)
            return false
        }
        return true
    },*/
    "mc-get-block" (args){
        const block = vnjs.store.MINECRAFT.BLOCK;
        let flag = false
        for(let key in args){
            if (key === block.data.id) {
                flag = true
                vnjs.exec(args[key]);
            }
        }
        if(!flag){
            if(args.default){
                vnjs.exec(args.default);
           }
        }
    },
    handlerProp (args, prop){
        const block = vnjs.store.MINECRAFT.BLOCK;
        let flag = false
        for(let key in args){
            const [ id, param ] = key.split('.');
            let blockParam = null;
            for (let blockKey in block.data.state) {
                if (blockKey.includes(`name=${prop}`)) {
                    blockParam = block.data.state[blockKey].toLowerCase();
                }
            }
            if (id === block.data.id && blockParam === param) {
                flag = true
                vnjs.exec(args[key]);
            }
        }
        if(!flag){
            if(args.default){
                vnjs.exec(args.default);
           }
        }
    },
    "mc-get-block-nbt" (args) {
        const block = vnjs.store.MINECRAFT.BLOCK;
        for(let key in args){
            let value = block.data.nbt[key];
            vnjs.state.data[ args[key] ] = value;
        }
    }
}