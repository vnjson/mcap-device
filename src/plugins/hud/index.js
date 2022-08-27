import "./style.css";
import tpl from "./tpl.html";

export default function () {
    const $tpl = $(tpl);
    this.$store.$screen.append($tpl);
    this.on("hud", (param) => {
        if (param) {
            $tpl.show();
        } 
        else {
            $tpl.hide();
        }
    });
    /**
     * status bar
     */
    const $hudLeft = $tpl.find(".vnjson-hud__left");
    this.on("hud-left", (param) => {
        $hudLeft.animate({ width: param }, 300);
    });
    const $hudRight = $tpl.find(".vnjson-hud__right");
    this.on("hud-right", (param) => {
        $hudRight.animate({ width: param }, 300);
    });
    /**
     * inv
     */
    let slotData = null
    const $invTag = $('.vnjson-hud__inv')
    $invTag.on('click', '.vnjson-hud__slot', function (e){
        if(!slotData) return
        if(!slotData.exec) return
       
        if(slotData.slot===$(this).data('index')){
            $vnjs.exec(slotData.exec);
        }

    })
    this.on("hud-inv", (param) => {
        const $slot = $(`.vnjson-hud__item--${param.slot}`);

        if (param.icon) {

            slotData = param
            $slot.css({
                "background-image": `url(${
                    this.getAssetByName(param.icon).url
                })`,
            });
        } 
        else {
            slotData = null
            $slot.css({ "background-image": "unset" })
        }
        if(param.exec){
            $slot.css('cursor', 'pointer')
        }
        else{
            $slot.css('cursor', 'unset')
        }

    });
}
