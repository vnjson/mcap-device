import "./style.css";

const $tpl = $('<div class="vnjson-scene component"></div>');

export default function () {
    this.store.screen.append($tpl);
    this.on("scene", (id) => {
        if (typeof id === "object") {
            $tpl.css({
                "background-image": `url(${id.url})`,
            });
            $tpl.fadeIn();
        } else if (typeof id === "string") {
            $tpl.css({
                "background-image": `url('${this.getAssetByName(id).url}')`,
            });
            $tpl.fadeIn();
        } else {
            $tpl.fadeOut();
            $tpl.css({
                "background-image": `unset`,
            });
        }
    });
}
