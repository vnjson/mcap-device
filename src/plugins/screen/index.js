export default function () {
    vnjs.store.screen = $("#screen");
    let flag = false
    document.addEventListener("keydown", (e) => {
        if (e.key === "f"){
            if(flag){
                deactivateFullscreen();
                flag = false;
            }
            else{
                activateFullscreen(vnjs.store.screen.get(0));
                flag = true;
            }
        }
      }, false);
}

function activateFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();        // W3C spec
    }
    else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();     // Firefox
    }
    else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();  // Safari
    }
    else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();      // IE/Edge
    }
  };

function deactivateFullscreen() {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  };
    