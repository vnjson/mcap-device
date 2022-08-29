import "./style.css";
import tpl from "./tpl.html";

const $tpl = $(tpl);
const $hudLeft = $tpl.find(".vnjson-hud__left");
const $hudRight = $tpl.find(".vnjson-hud__right");
const $invTag = $tpl.find(".vnjson-hud__inv");

export default {
    slotData: null,
    mount() {
        vnjs.store.screen.append($tpl);
        vnjs.on("hud", (args) => {
            if (args) {
                $tpl.show();
            } else {
                $tpl.hide();
            }
        });
        vnjs.on("hud-left", (args) => {
            let width = null
            if(vnjs.state.data[args]){
                width = vnjs.state.data[args]
            }
            else{
                width = args
            }
            $hudLeft.animate({ width }, 300);
        });

        vnjs.on("hud-right", (args) => {
            let width = null
            if(vnjs.state.data[args]){
                width = vnjs.state.data[args]
            }
            else{
                width = args
            }
            $hudRight.animate({ width }, 300);
        });
        vnjs.on("hud-inv", (args) => this.hudInvHandler(args));
        const _this = this
        $invTag.on("click", ".vnjson-hud__slot", function () {
            _this.clickSlotHandler( $(this) )
        });
        /**
         * Если режим диалогового окна полноэкранный. То hud прижимаем к низу
         */
        vnjs.on("dialog-box.mode", (mode) => {
            if (mode === "mode-classic") {
                $tpl.css({ bottom: "210px" });
            }
            if (mode === "mode-fullscreen") {
                $tpl.css({ bottom: "10px" });
            }
        });
    },
    hudInvHandler(args) {
        const $slot = $tpl.find(`.vnjson-hud__item--${args.slot}`);
        if (args.icon) {
            this.slotData = args;
            $slot.css({
                "background-image": `url(${
                    vnjs.getAssetByName(args.icon).url
                })`,
            });
        } else {
            this.slotData = null;
            $slot.css({ "background-image": "unset" });
        }
        if (args.exec) {
            $slot.css("cursor", "pointer");
        } else {
            $slot.css("cursor", "unset");
        }
    },
    clickSlotHandler(target) {
  
        if (!this.slotData) return;
        if (!this.slotData.exec) return;

        if (this.slotData.slot === $(target).data('index') ) {
            vnjs.exec(this.slotData.exec);
        }
    },
};
