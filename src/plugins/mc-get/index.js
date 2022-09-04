import blockHandler from "./block-handler";

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
        const [x, y, z] = param.pos;
        const data = {
            request: param.request,
            slot: param.slot || 0,
            posX: x || 0,
            posY: y || 0,
            posZ: z || 0,
            data: "",
        };
        const str = `GET_${JSON.stringify(data)}`;

        query(str)
            .then((res) => {
                res.data = JSON.parse(res.data);
                console.log(res);
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

/*
function blockHandler (prop){
    const block = vnjs.store.MINECRAFT.BLOCK;
    let propValue = null;
    for (let key in block.data.state) {
        if (key.includes(`name=${prop}`)) {
            propValue = block.data.state[key].toLowerCase();
        }
    }
    if (args.id === block.data.id && args[prop] === propValue) {
        vnjs.exec(args.exec);
    }
}*/
/**
 * сравнение по ID
 */
vnjs.on("mc-get-block", (args) => {
    setTimeout(()=>{
        blockHandler["mc-get-block"](args)
    }, 100)

});
/**
 * сравнение по цвету
 */
vnjs.on("mc-get-block-color", (args) => {
    setTimeout(()=>{
        blockHandler["mc-get-block-color"](args)
    }, 100)

});

/**
 * сравнение по типу
 */
vnjs.on("mc-get-block-variant", (args) => {
    setTimeout(()=>{
        blockHandler["mc-get-block-variant"](args)
    }, 100)

});

/**
 * сравнение по направлению раположения
 */
vnjs.on("mc-get-block-axis", (args) => {
    setTimeout(()=>{
        blockHandler["mc-get-block-axis"](args)
    }, 100)

});

/**
 * куда смотрит предмет
 */
 vnjs.on("mc-get-block-facing", (args) => {
    setTimeout(()=>{
        blockHandler["mc-get-block-facing"](args)
    }, 100)

});
