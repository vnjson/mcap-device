import "./style.css";

export default function () {
    vnjs.on("vnjson.mount", () => {
        if (this.package.chess) {
            chessInit();
        }
    });

    var chessInit = () => {
        const $tpl = $(
            '<iframe class="chess__vnjson component" src="data/chess/index.html" width="500" height="500"></iframe>'
        );
        vnjs.store.screen.append($tpl);
        vnjs.on("chess", (fen) => {
            if (fen) {
                $tpl.show();
                let win = document.querySelector(
                    "iframe.chess__vnjson"
                ).contentWindow;
                win.postMessage(
                    { fen },
                    location.origin + "/data/chess/index.html"
                );
            } else {
                $tpl.hide();
            }
        });
    };
}
