function query(request) {
    return new Promise((resolve, reject) => {
        try {
            window.mcefQuery({
                request,
                persistent: true,
                onSuccess: (response) => {
                    resolve(JSON.parse(response));
                },
                onFailure: (errCode, errMsg) => {
                    reject(JSON.parse(errMsg));
                },
            });
        } catch (err) {
            reject(JSON.parse(err));
        }
    });
}
function getTime() {
    return Math.floor(new Date().getTime() / 1000);
}

export default function () {
    vnjs.on("mc-get", (param) => {
        const data = {
            request: param.request,
            slot: param.slot || 0,
            posX: param.x || 0,
            posY: param.y || 0,
            posZ: param.z || 0,
            data: "",
        };
        const str = `GET_${JSON.stringify(data)}`;

        query(str)
            .then((res) => {
                res.data = JSON.parse(res.data);
                console.log(res)
                vnjs.store.MINECRAFT = vnjs.store.MINECRAFT || {};
                vnjs.store.MINECRAFT[param.request] = res;
                if (param.callback) {
                    param.callback(response);
                }
            })
            .catch((err) => {
                if (param.callback) {
                    param.callback(err);
                }
            });
    });

 


}
/**
 * сравнение по ID
 */
vnjs.on('mc-get-block', (args) => {
    const block = vnjs.store.MINECRAFT.BLOCK;
    if(args.id=== block.data.id){
            vnjs.exec(args.exec)
    }
})
/**
 * сравнение по цвету
 */
 vnjs.on('mc-get-block-color', (args) => {
    const block = vnjs.store.MINECRAFT.BLOCK;
    let color = null;
    for(let key in block.data.state){
        if(key.includes('name=color')){
            color = block.data.state[key].toLowerCase()
        }
    }
    if(args.id === block.data.id && args.color === color){
            vnjs.exec(args.exec)
    }
})

/**
 * сравнение по типу
 */
 vnjs.on('mc-get-block-variant', (args) => {
    const block = vnjs.store.MINECRAFT.BLOCK;
    let variant = null;
    for(let key in block.data.state){
        if(key.includes('name=variant')){
            variant = block.data.state[key].toLowerCase()
        }
    }
    if(args.id === block.data.id && args.variant === variant){
            vnjs.exec(args.exec)
    }     
})


/**
 * сравнение по направлению раположения
 */
 vnjs.on('mc-get-block-axis', (args) => {
    const block = vnjs.store.MINECRAFT.BLOCK;
    let axis = null;
    for(let key in block.data.state){
        if(key.includes('name=axis')){
            axis = block.data.state[key].toLowerCase()
        }
    }
    if(args.id === block.data.id && args.axis === axis){
            vnjs.exec(args.exec)
    }     
})

