export default {
    "mc-get-block" (args){
        const block = vnjs.store.MINECRAFT.BLOCK;

        if (args.id === block.data.id) {
            vnjs.exec(args.true);
        }
        else{
            if(args.false){
                vnjs.exec(args.false)
            }

        }
    },
    "mc-get-block-color" (args){
        const block = vnjs.store.MINECRAFT.BLOCK;
        let color = null;
        for (let key in block.data.state) {
            if (key.includes("name=color")) {
                color = block.data.state[key].toLowerCase();
            }
        }
        if (args.id === block.data.id && args.color === color) {
            vnjs.exec(args.true);
        }
        else{
            if(args.false){
                vnjs.exec(args.false)
            }

        }
    },
    "mc-get-block-variant" (args){
        const block = vnjs.store.MINECRAFT.BLOCK;
        let variant = null;
        for (let key in block.data.state) {
            if (key.includes("name=variant")) {
                variant = block.data.state[key].toLowerCase();
            }
        }
        if (args.id === block.data.id && args.variant === variant) {
            vnjs.exec(args.true);
        }
        else{
            if(args.false){
                vnjs.exec(args.false)
            }
        }
    },
    "mc-get-block-axis" (args){
        const block = vnjs.store.MINECRAFT.BLOCK;
        let axis = null;
        for (let key in block.data.state) {
            if (key.includes("name=axis")) {
                axis = block.data.state[key].toLowerCase();
            }
        }
        if (args.id === block.data.id && args.axis === axis) {
            vnjs.exec(args.true);
        }
        else{
            if(args.false){
                vnjs.exec(args.false)
            }

        }
    },
    "mc-get-block-facing" (args){
        const block = vnjs.store.MINECRAFT.BLOCK;
        let facing = null;
        for (let key in block.data.state) {
            if (key.includes("name=facing")) {
                facing = block.data.state[key].toLowerCase();
            }
        }
        if (args.id === block.data.id && args.facing === facing) {
            vnjs.exec(args.true);
        }
        else{
            if(args.false){
                vnjs.exec(args.false)
            }

        }
    },
}