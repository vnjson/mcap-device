/* native [jump] [next] [timeout] */
/* debug */
import debug from "./plugins/debug/index.js";
import debugUtils from "./plugins/debug-utils/index.js";
/* basic */
import assetsLoader from "./plugins/assets-loader/index.js";
import screen from "./plugins/screen/index.js";
import fontFamily from "./plugins/font-family/index.js";
import data from "./plugins/data/index.js";
import dialogBox from "./plugins/dialog-box/index.js";
import audio from "./plugins/audio/index.js";
import menu from "./plugins/menu/index.js";
import mainMenu from "./plugins/main-menu/index.js";
import show from "./plugins/show/index.js";
import showAuto from "./plugins/show-auto/index.js";
import scene from "./plugins/scene/index.js";
import table from "./plugins/table/index.js";
import clear from "./plugins/clear/index.js";
import switchVnjson from "./plugins/switch/index.js";
import input from "./plugins/input/index.js";
import wiki from "./plugins/wiki/index.js";
import slide from "./plugins/slide/index.js";
import content from "./plugins/content/index.js";
import voice from "./plugins/voice/index.js";
import html from "./plugins/html/index.js";
import discordLog from "./plugins/discord-log/index.js";
// minecraft
import mcPlayer from "./plugins/mc-player/index.js";
import mcExec from "./plugins/mc-exec/index.js";
import mcGet from "./plugins/mc-get/index.js";
import mcCheck from "./plugins/mc-check/index.js";
//
import hands from "./plugins/hands/index.js";
import video from "./plugins/video/index.js";
import area from "./plugins/area/index.js";
import blocks from "./plugins/blocks/index.js";
import dialogBoxInfo from "./plugins/dialog-box-info/index.js";
import executeVnjson from "./plugins/execute/index.js";
//import filter from "./plugins/filter/index.js";
import spriteAnimate from './plugins/sprite-animate/index.js';
import getLocalTime from './plugins/get-localtime/index.js';
import intervalVnjson from './plugins/interval/index.js';
import getData from './plugins/get-data/index.js';
import craftOS from './plugins/craft-os/index.js';
import mcCCT from './plugins/mc-cct/index.js';
import HUD from "./plugins/hud/index.js";
/**
 * Init plugins
 */

vnjs.use(assetsLoader);
vnjs.use(screen);
vnjs.use(fontFamily);
/*components*/
vnjs.use(scene);
vnjs.use(show);
vnjs.use(showAuto);
vnjs.use(audio);
vnjs.use(menu);
vnjs.use(mainMenu);
vnjs.use(table);
vnjs.use(clear);
vnjs.use(dialogBox);
vnjs.use(data);
vnjs.use(switchVnjson);
vnjs.use(input);
vnjs.use(wiki);
vnjs.use(slide);
vnjs.use(hands);
vnjs.use(content);
vnjs.use(voice);
vnjs.use(html);
vnjs.use(discordLog);

// minecraft
vnjs.use(mcPlayer);
vnjs.use(mcCheck);
vnjs.use(mcExec);
vnjs.use(mcGet);
//

vnjs.use(video);
vnjs.use(area);
vnjs.use(blocks);
vnjs.use(dialogBoxInfo);
vnjs.use(executeVnjson);
//vnjs.use(filter);
vnjs.use(spriteAnimate);
vnjs.use(getLocalTime);
vnjs.use(intervalVnjson);
vnjs.use(getData);
vnjs.use(craftOS);
vnjs.use(mcCCT);
vnjs.use(HUD);
/**
 * LOAD scenes
 */
function showError (err){
    const $errorWindow =  $(".debug-error");
    $errorWindow.show();
    const $errorMessageContainer = $errorWindow.find(".debug-error__msg")
    const yamlError = vnjs._loadError();
    if(yamlError){
        $errorMessageContainer.html(yamlError.msg);
        $errorWindow.find('.debug-error__path').html(yamlError.path)
        $errorWindow.find('.debug-error__pos').html(yamlError.pos)
        $errorWindow.find('.debug-error__code').html(yamlError.snippet)
    }
    else{   
        $errorMessageContainer.html("Невалидный скрипт " +  err.message);
    }
}
fetch(`scenes/vn.json?v=${new Date().getTime()}`)
    .then((r) => r.json())
    .then((tree) => {
        vnjs.mount(tree)
        if (tree.$root.package.debug) {
          vnjs.use(debug);
          vnjs.use(debugUtils);
        }
    })
    .catch((err) => {
        showError(err);
        console.error("Invalid script", err.message);
    });

vnjs.on("postload", function () {
    vnjs.config = {
        debug: vnjs.package.debug,
        width: 1024,
        height: 768,
    };
    // ?jump=scene.label
    // ?jump=scene  //default $init
    const label = new URL(location.href).searchParams.get("jump");
    if (label) {
        const [sceneName, labelName] = label.split(".");

        vnjs.exec({ jump: `${sceneName}.${labelName}` });
    } else {
        vnjs.exec({ jump: "$root.$init" });
    }
});
