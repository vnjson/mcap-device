import "./style.css";
import tpl from "./tpl.html";
const $tpl = $(tpl);

export default function () {
    $("#screen").append($tpl);

    const getAssets = () => {
        vnjs.emit("preload");

        let i = 0;

        let load = () => {
            let asset = this.state.assets[i];

            if (!asset) {
                vnjs.emit("postload");
                return;
            }
            if (/\.mp3|\.wav|\.ogg/i.test(asset.url)) {
                if (this.state.assets.length - 1 >= ++i) {
                    let sound = new Howl({ src: asset.url });

                    sound.on("end", () => vnjs.emit("loader.audio-onend", asset.name));
                    sound.on("load", (_) => {
                        vnjs.store[asset.name] = sound;
                        vnjs.emit("load", asset, this.state.assets.length, i);
                        load();
                    });
                    sound.on("loaderror", () => {
                        console.error(`File not found [ ${asset.name} ]`);
                        vnjs.emit("load", asset, this.state.assets.length, i);
                        load();
                    });
                } else {
                    vnjs.emit("postload");
                }
            } else if (/\.png|\.jpg|\.jpeg|\.webp|\.gif/i.test(asset.url)) {
                if (this.tree.$root?.package) {
                    if (this.package?.preload) {
                        if (this.state.assets.length - 1 >= ++i) {
                            if (this.package.preload) {
                                let img = new Image();
                                img.src = asset.url;

                                img.onerror = () => {
                                    vnjs.store[asset.name] = img;
                                    vnjs.emit("load", asset, this.state.assets.length, i);
                                    console.error("Image not found");
                                    load();
                                };
                                img.onload = () => {
                                    vnjs.store[asset.name] = img;
                                    vnjs.emit("load", asset, this.state.assets.length, i);
                                    load();
                                };
                            } else {
                                vnjs.store[asset.name] = asset.url;
                                load();
                            }
                        } else {
                            vnjs.emit("postload");
                        }
                    }
                }
            } else {
                ++i;
                vnjs.emit("load", asset, this.state.assets.length, i);
                load();
                
                // console.warn(asset.url +' Resource does not support preload')
            }
        };

        load();
    };

    const setAllAssets = () => {
        for (let [scene, body] of Object.entries(this.tree)) {
            this.state.assets = this.state.assets.concat(body.assets);
        }
        /**
         * Загрузка ресурсов происходит только тогда, когда есть ресурсы
         */
        if (this.state.assets.length > 0) {
            getAssets();
        } else {
        /**
         * Если ресурсов нет, то эмулируем событыия, будто ресурсы есть
         * [ postlaod ] - Является важным событием, так как первый прыжок совершается
         * после этого события. Так же для коректной работы некоторых плагинов.
         * Которым требуются загруженные ресурсы.
         */
            setTimeout(() => {
                vnjs.emit("preload");
                vnjs.emit("load");
                vnjs.emit("postload");
            }, 0);
        }
    };

    /**
     * Получили vn.json
     */
    vnjs.on("vnjson.mount", setAllAssets);
    /**
     * Отображаем прелоэдер
     */
    vnjs.on("preload", () => {
        $tpl.css("display", "flex");
    });
    const loadProgress = $tpl.find('.vnjson-loader__progress--load')
    vnjs.on("load", (asset, len, i) => {
        const width = ( (i / (len-1)  ) * 100 )
        const roundWidth = Math.ceil(width)

        loadProgress.css({
            width: `${roundWidth}%`
        })
        loadProgress.text(`${roundWidth}%`)
    });
    vnjs.on("postload", () => {
        $tpl.fadeOut(300);
    });
}
