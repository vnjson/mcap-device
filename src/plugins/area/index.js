import "./style.css";

const $tpl = $('<div class="vnjson__area component"></div>');
let _regions = null;
export default function () {
    this.store.screen.append($tpl);
    this.on("area", handler.bind(this));
    $tpl.on("click", (e) => {
        if (!e.target.className.includes("vnjson__area-item")) return;
        const regIndex = JSON.parse(e.target.dataset.index);
        this.exec(_regions[regIndex].exec);
    });
}

function handler(regions) {
    if (!regions) {
        $tpl.hide();
        return;
    }
    _regions = regions;
    $tpl.empty();
    $tpl.show();
    regions.forEach((reg, index) => {
        let style = `position:absolute;
                    top:${reg.top}px;
                    left:${reg.left}px;
                    width:${reg.width}px;
                    height:${reg.height}px;`;
        if (reg.show) {
            if (reg.show === true) {
                style += "border: 5px solid #11f285;";
            }
            if (typeof reg.show === "string") {
                style += `border: 5px solid ${reg.show};`;
            }
        }
        const regTpl = `<div style="${style}" class="vnjson__area-item" data-index="${index}"></div>`;
        $tpl.append(regTpl);
    });
}
