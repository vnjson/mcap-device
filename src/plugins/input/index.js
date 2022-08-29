import tpl from "./tpl.html";
import "./style.css";

const $tpl = $(tpl);


export default {
    args: null,
    mount() {
        vnjs.store.screen.append($tpl);
        vnjs.on("input-name", (args) => this.handler(args));
        vnjs.on("input-data", (args) => this.handler(args));
        /**
         * deprecated
         */
        vnjs.on("set-name", (args) => {
            console.warn("[set-name] is deprecated. Use [input-name]");
            this.handler(args);
        });
        /**
         * click
         */
        $tpl.find(".vnjson__input-btn").on("click", () => this.clickHandler());
    },
    handler(args) {
        if (args) {
            this.args = args;
            $tpl.css("display", "flex");
        } 
        else {
            $tpl.hide();
        }
    },
    clickHandler() {
        const input = $tpl.find(".vnjson__input-wrapper input");
        $tpl.fadeOut();
        const character = vnjs.getCharacterById(this.args);
        if (character) {
            character.name = input.val();
        } 
        else {
            vnjs.emit("data-set", {
                [this.args]: input.val(),
            });
        }
        input.val("");
        vnjs.emit('next', true);
    },
};
