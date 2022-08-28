import tpl from "./tpl.html";
import "./style.css";

export default function () {
    const $tpl = $(tpl);
    this.$store.$screen.append($tpl);

    let dataID = false;
    const handler = (param) => {
        dataID = param;
        if (param) {
            $tpl.css("display", "flex");
        } else {
            $tpl.hide();
        }
    };

    this.on("set-name", (param) => {
        console.warn("[set-name] is deprecated. Use [input-name]");
        handler(param)
    });
    this.on("input-name", handler);
    this.on("input-data", handler);

    $(".vnjson__input-wrapper .vnjson__input-btn").on("click", () => {
        const input = $(".vnjson__input-wrapper input");

        $tpl.fadeOut();
        const character = this.getCharacterById(dataID);
        if(character){
            character.name = input.val();
        }
        /* state.data */
        else{
          $vnjs.emit('data-set', {
              [dataID]: input.val()
          })
        }
        input.val("");
        this.exec({ next: true });
        // this.exec({ next: true, 'set-data': { [dataID]: value } });
    });
}
