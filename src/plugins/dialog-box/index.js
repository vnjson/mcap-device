import "./style.css";
import tpl from "./tpl.html";
import DialogBox from "./DialogBox.js";
import errorSnippet from "./error-snippet.js";

/**
 * INIT
 */
export default function () {
    const $tpl = $(tpl);

    this.store.screen.append($tpl);
    // при клике по диалоговому окну, продвигаемся дальше по yaml скрипту
    $tpl.find(".dialog-box__reply-wrapper").on("mousedown", (e) => {
        this.emit("dialog-box.click");
        this.next();
    });

    /**
     * DialogBox
     */
    const dBox = new DialogBox({
        vnjs,
        delay: 0,
        alpha: 0,
        endPoint: false,
        dialogBoxSelector: ".dialog-box",
        characterNameOutputSelector: ".dialog-box__name",
        characterAvatarSelector: ".dialog-box__avatar",
        replyWrapperSelector: ".dialog-box__reply-wrapper",
        replyOutputSelector: ".dialog-box__reply",
        replyContaiterSelector: ".dialog-box__container",
        classNameLetter: "dialog-box__letter",
        classNameEndPoint: "dialog-box__reply-end-point",
    });

    vnjs.store["dialog-box"] = dBox;
    /**
     * DELAY
     */
    this.on("postload", () => {
        const conf = this.package?.["dialog-box"];
        if (conf) {
            for (let key in conf) {
                switch (key) {
                    case "delay":
                        dBox.delay = conf.delay;
                        break;
                    case "alpha":
                        dBox.alpha = conf.alpha;
                        break;
                    case "endPoint":
                        dBox.endPoint = conf.endPoint;
                        break;
                    case "mode-classic":
                        dBox.setMode("mode-classic");
                        break;
                    case "mode-fullscreen":
                        /**/
                        break;
                    case "font-family":
                        $tpl.css("font-family", conf["font-family"]);
                        break;
                    case "font-size":
                        $tpl.css("font-size", conf["font-size"] + "px");
                        break;
                    default:
                        vnjs.emit(
                            "error",
                            {
                                ru: `Некоректный параметр <font color="deepskyblue">${key}</font>`,
                                en: `Invalid parametr <font color="deepskyblue">${key}</font>`,
                            } /*, jsyaml.dump(conf) */
                        );
                }
            }
        } 
        else {
            this.emit("vnjson.error", errorSnippet);
        }
    });
    /**
     * CHARACTER native event
     */
    this.on("character", (_character, param) => {
        const character = { ..._character };
        if (typeof param === "object") {
            if (param.nameColor) character.nameColor = param.nameColor;
            if (param.replyColor) character.replyColor = param.replyColor;
            if (param.avatar) character.avatar = param.avatar;
            vnjs.emit('character.set-param', character)
            dBox.print(character, String(param.reply));
        } 
        else {
            dBox.print(character, String(param));
        }
    });
    /**
     * append reply
     */
    this.on("+", (reply) => {
        
        let character = vnjs.state.character;

        if(!character) {
            character = this.getCharacterById('$')
            vnjs.state.character = character
        }

        dBox.forcePrintPrevReply();
        dBox.print(character, " " + String(reply), true);
    });

    /**
     * SHOW HIDE DIALOG-BOX
     */
    this.on("dialog-box", (param) => {
        let key = null;
        key = String(param);
        if (typeof param === "object") {
            key = "object";
        }
        const controller = {
            object: () => {
                for (let _key in param) {
                    dBox[_key] = param[_key];
                }
                dBox.show();
            },
            true: () => {
                dBox.disabled(false);
                dBox.show();
            },
            false: () => {
                dBox.hide();
            },
            clear: () => {
                dBox.disabled(false);
                dBox.clear();
            },
            disabled: () => {
                dBox.disabled(true);
            },
            transparent: () => {
                dBox.transparent();
            },
            classic: () => {
                dBox.disabled(false);
                dBox.setMode("mode-classic");
                dBox.show();
            },
            fullscreen: () => {
                dBox.disabled(false);
                dBox.setMode("mode-fullscreen");
                dBox.show();
            },
        };

        controller[key]();
    });
}
