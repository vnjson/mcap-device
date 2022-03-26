(function () {
  'use strict';

  var e = [],
      t = [];

  function n(n, r) {
    if (n && "undefined" != typeof document) {
      var a,
          s = !0 === r.prepend ? "prepend" : "append",
          d = !0 === r.singleTag,
          i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];

      if (d) {
        var u = e.indexOf(i);
        -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
      } else a = c();

      65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
    }

    function c() {
      var e = document.createElement("style");
      if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
      var a = "prepend" === s ? "afterbegin" : "beforeend";
      return i.insertAdjacentElement(a, e), e;
    }
  }

  var css$p = ".debug__dialog-box-controls{\n  background-color: wheat;\n  padding: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n}\n.debug__dialog-box-controls >div{\n  height: 70px;\n  width: 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n#debug__character{\n  width: 100%;\n  height: 46%;\n  color: black;\n  background-color: burlywood;\n  border-radius: 4px;\n  padding: 3px 5px;\n  text-align: center;\n}\n\n.debug__btn{\n  background-color: burlywood;\n  border-radius: 4px;\n  padding: 3px 5px;\n  cursor: pointer;\n  color: black;\n  width: 100%;\n  height: 46%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n}\n\n\n#debug__reply{\n  width: 89.5%;\n  color: black;\n  background-color: burlywood;\n  border-radius: 4px;\n  padding: 3px 5px;\n  resize: unset;\n  height: 70px;\n  border: unset;\n  outline: unset;\n  caret-color: deepskyblue;\n}\n\n.debug__btn:hover{\n  background-color: rgba(0,0,0,0.3);\n}\n/**\n * \n */\n\n.debug__dialog-box {\n  z-index: 7000;\n  /*position: absolute;\n  bottom: -200px;*/\n  width: 1024px;\n  line-height: 32px;\n  height: 200px;\n\n  cursor: pointer;\n  display: block;\n  padding-top: 10px;\n  padding-left: 10px;\n  word-spacing: 10px;\n  display: block;\n  top: unset;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n\n.debug__dialog-box__name {\n  color: wheat;\n  font-size: 22px;\n  width: 100%;\n  font-weight: bold;\n  padding-left: 10px;\n  padding-bottom: 10px;\n}\n\n.debug__dialog-box__reply {\n  color: wheat;\n  font-size: 22px;\n  padding-left: 10px;\n  width: 100%; \n}\n\n.debug__dialog-box__container{\n  display: flex; \n  height: 100%; \n}\n.debug__dialog-box__avatar{\n  margin-top: 15px;\n  width: 150px;\n  height: 150px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.debug__dialog-box__reply-wrapper{\n  position: relative;\n}\n";
  n(css$p,{});

  var tpl$e = "\n<div class=\"debug__dialog-box\">\n  <div class=\"debug__dialog-box__container\">\n        <div class=\"debug__dialog-box__avatar\"></div>\n        <div class=\"debug__dialog-box__reply-wrapper\">\n          <div class=\"debug__dialog-box__name\"></div>\n          <div class=\"debug__dialog-box__reply\"></div>\n        </div>\n  </div>\n</div>";

  var dialogBoxImage$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAADICAYAAAB26ZNJAAABbmlDQ1BpY2MAACiRdZE7SwNBFIU/oxLRSIqkELFIEcUiAVGQlBJBG7VIIvhqks1LyCbLboIEW8HGQrAQbXwV/gNtBVsFQVAEESt/gK9GwnrHDSRIMsvs/Tgz5zJzBlxzBU23usZAL5bN2Gw0sLS8EnC/4cKPjwiepGYZ8/GZBG3H9wMdqt6HVa/2+1qOvnTG0qCjR3hSM8yy8JTw3EbZULwj7NfyybTwsXDIlAMK3yg95fCr4pzDn4rNRGwaXKpnINfEqSbW8qYuPCoc1AsVrX4edRNPprgYlzoocwiLGLNECZCiwjoFyoSlFiWz1r6xP98CJfFo8jeoYoojR168IVEr0jUjNSt6Rr4CVZX7/zyt7MS4090The4X2/4YBvce1HZt++fEtmun0PkMV8WGvyQ5Rb5E321owSPwbsHFdUNL7cPlNgw8GUkz+Sd1ynRls/B+Dv3L4LuD3lUnq/o6Z4+Q2JQnuoWDQxiR/d61XxVkaBT4cFhYAAAACXBIWXMAAArwAAAK8AFCrDSYAAAFAUlEQVR4Xu3YMQHAIBDAwKf+pSEKCcwld3MUZM3MHgAAAOBp3y0AAAAA/s8AAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDuHwAlzNu7SaAAAAAElFTkSuQmCC";

  const $tpl$a = $(tpl$e);
  /**
   * controls
   */

  const tplControls = `<div class="debug__dialog-box-controls">
                        <div>
                            <input  id="debug__character" type="text" value="$">
                            <div class="debug__btn"> -> </div>
                        </div>
                        <textarea id="debug__reply" placeholder="text"></textarea>
                     </div>`;
  const $tplControls = $(tplControls);
  function debugDialogBox () {
    $tpl$a.css('background-image', `url(${dialogBoxImage$1})`);
    $('.game').append($tplControls);
    /**/

    $('.game').append($tpl$a);
    $('.debug__btn').on('click', function () {
      let cid = $('#debug__character').val();

      if (cid === '') {
        cid = '$';
      }

      let character = $vnjs.getCharacterById(cid);
      let reply = $('#debug__reply');
      print(character, reply.val());
    });
  }

  function print(character, reply) {
    if (character.avatar) {
      $tpl$a.find('.debug__dialog-box__reply-wrapper').css('width', '75%');
      $tpl$a.find('.debug__dialog-box__avatar').show().css({
        backgroundImage: `url('${$vnjs.getAssetByName(character.avatar).url}')`
      });
      $tpl$a.find('.debug__dialog-box__name').html(character.name).css({
        color: character.nameColor
      });
      $tpl$a.find('.debug__dialog-box__reply').html(reply).css({
        color: character.replyColor
      });
    } else {
      $tpl$a.find('.debug__dialog-box__reply-wrapper').css('width', '90%');
      $tpl$a.find('.debug__dialog-box__avatar').hide();
      $tpl$a.find('.debug__dialog-box__name').html(character.name).css({
        color: character.nameColor
      });
      $tpl$a.find('.debug__dialog-box__reply').html(reply).css({
        color: character.replyColor
      });
    }

    if (reply) {
      setCharacterToReply$1.call($vnjs, reply, character.replyColor);
    }
  }

  function setCharacterToReply$1(reply, replyColor) {
    let characterAliaces = reply.match(/(@\w+)|(@\$.*?[\s])/gi);

    if (characterAliaces) {
      let newReply = reply;
      characterAliaces.forEach(id => {
        let cid = id.replace('@', '').trim();
        let character = $vnjs.getCharacterById(cid);

        if (character) {
          newReply = newReply.replace(id, `<span class="debug__dialog-box__reply-character-name" style="color: ${character.nameColor}">${character.name}</span> `);
          /*пробел на конце нужен из за спец символов $! которые получаю вместе с пробелом*/
        }
      });
      $tpl$a.find('.debug__dialog-box__reply').html(newReply).css({
        color: replyColor
      });
    }
  }

  function assetsLoader () {
    var getAssets = _ => {
      this.emit('preload');
      var i = 0;

      var load = _ => {
        var asset = this.current.assets[i];

        if (/\.mp3|\.wav|\.ogg/i.test(asset.url)) {
          var sound = new Howl({
            src: asset.url
          });
          sound.on('load', _ => {
            this.$store[asset.name] = sound;

            if (this.current.assets.length - 1 >= ++i) {
              this.emit('load', asset);
              load();
            } else {
              this.emit('postload');
            }
          });
          sound.on('loaderror', () => {
            console.error(`File not found [ ${asset.name} ]`);
          });
        } else if (/\.png|\.jpg|\.jpeg|\.webp|\.gif/i.test(asset.url)) {
          if (this.TREE.$root.hasOwnProperty('package')) {
            if (this.TREE.$root.package.hasOwnProperty('preload')) {
              if (this.current.assets.length - 1 >= ++i) {
                if (this.TREE.$root.package.preload) {
                  let img = new Image();
                  img.src = asset.url;

                  img.onerror = () => {
                    this.$store[asset.name] = img;
                    this.emit('load', asset);
                    console.error('Image not found');
                    load();
                  };

                  img.onload = () => {
                    this.$store[asset.name] = img;
                    this.emit('load', asset);
                    load();
                  };
                } else {
                  this.$store[asset.name] = asset.url;
                  load();
                }
              } else {
                this.emit('postload');
              }
            }
          }
        } else {
          ++i;
          load();
          console.warn(asset.url + ' Format not supported');
        }
      };

      load();
    };

    var setAllAssets = () => {
      for (let [scene, body] of Object.entries(this.TREE)) {
        this.current.assets = this.current.assets.concat(body.assets);
      }

      if (this.current.assets.length > 0) {
        getAssets();
      } else {
        setTimeout(() => {
          this.emit('preload');
          this.emit('load');
          this.emit('postload');
        }, 0);
      }
    };
    /*
    this.on('preload', scene=>{
    
      var assets = this.TREE[this.current.sceneName].assets;
      this.current.assets = this.current.assets.concat(assets);
    
      this.emit('setAssets');
    })
    
    */


    this.on('setTree', _ => {
      setAllAssets();
    });
  }

  var css$o = "#screen {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAL0lEQVR4AWM8ZsOAF1BNAasXA8PvbSASjUYo+L0NXS9EnJAVhE0gqGCEuIFgXAAA5aUvR45cttUAAAAASUVORK5CYII=);\n  position: relative;\n  overflow: hidden;\n}\n\n.screen {\n  display: none;\n  width: 100%;\n  height: 100%;\n  /*transition: background-image 0.5s;*/\n  background-repeat: no-repeat;\n}\n";
  n(css$o,{});

  let click$1 = false;
  function screen () {
    var prevScreen = null;
    this.on('screen', id => {
      if (id.onClick === true) {
        /**
         * При повторном вызове плагина с параметром onClick почему то dialog-box
         * не успевает скрыться. Срабатывает слушатель click
         */
        setTimeout(() => {
          click$1 = true;
        }, 300);
      } else if (prevScreen && prevScreen !== id) {
        $('#' + prevScreen).fadeOut();
        prevScreen = id;
        $('#' + id).fadeIn();
      } else {
        prevScreen = id;
        $('#' + id).fadeIn();
      }

      if (typeof id === 'string') {
        this.$store.$screen = $('#' + id);
      } //this.emit('screenInit', id);

    });
  }
  $('#screen').on('click', function () {
    if (click$1) {
      click$1 = false;
      $vnjs.exec({
        next: true
      });
    }
  });

  var css$n = "#loader {\n  background: black;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.loader {\n  color: wheat;\n  font-family: Consolas, Menlo, Monaco, monospace;\n  font-weight: bold;\n  font-size: 100px;\n  opacity: 0.8;\n}\n.loader span {\n  display: inline-block;\n  animation: pulse 0.4s alternate infinite ease-in-out;\n}\n.loader span:nth-child(2) {\n  animation-delay: 0.4s;\n}\n\n@keyframes pulse {\n  to {\n    transform: scale(0.8);\n    opacity: 0.5; \n  } \n}\n";
  n(css$n,{});

  var tpl$d = "<div id=\"loader\">\n    <div class=\"loader\"><span>{</span><span>}</span></div>\n</div>";

  var $tpl$9 = $(tpl$d);
  $('#screen').append($tpl$9);
  function loaderScreen () {
    this.on('preload', () => {
      $tpl$9.css('display', 'flex');
    });
    this.on('load', () => {});
    this.on('postload', () => {
      $tpl$9.fadeOut();
    });
  }

  var tpl$c = "<div id=\"stream\" class=\"screen\">\n  \n</div>";

  function streamScreen () {
    $('#screen').append(tpl$c);
    this.$store.$stream = $('#stream');
  }

  var css$m = ".component canvas{\n  width: 1024px !important;\n  height: 768px !important;\n}";
  n(css$m,{});

  var tpl$b = "<div id=\"zim\" class=\"screen\">\n\n</div>";

  function zimScreen () {
    $('#screen').append(tpl$b);
  }

  var css$l = ".dialog-box {\n  z-index: 7000;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  line-height: 32px;\n  height: 200px;\n\n  cursor: pointer;\n  display: block;\n  padding-top: 10px;\n  padding-left: 10px;\n  word-spacing: 10px;\n  display: none;\n  top: unset;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n\n.dialog-box__name {\n  color: wheat;\n  font-size: 22px;\n  width: 100%;\n  font-weight: bold;\n  padding-left: 10px;\n  padding-bottom: 10px;\n}\n\n.dialog-box__reply {\n  color: wheat;\n  font-size: 22px;\n  padding-left: 10px;\n  width: 100%; \n}\n\n.dialog-box__container{\n  display: flex; \n  height: 100%; \n}\n.dialog-box__avatar{\n  margin-top: 15px;\n  width: 150px;\n  height: 150px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.dialog-box__reply-wrapper{\n  position: relative;\n}\n";
  n(css$l,{});

  var tpl$a = "<div class=\"dialog-box component\">\n  <div class=\"dialog-box__container\">\n        <div class=\"dialog-box__avatar\"></div>\n        <div class=\"dialog-box__reply-wrapper\">\n          <div class=\"dialog-box__name\"></div>\n          <div class=\"dialog-box__reply\"></div>\n        </div>\n  </div>\n</div>";

  var dialogBoxImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAADICAYAAAB26ZNJAAABbmlDQ1BpY2MAACiRdZE7SwNBFIU/oxLRSIqkELFIEcUiAVGQlBJBG7VIIvhqks1LyCbLboIEW8HGQrAQbXwV/gNtBVsFQVAEESt/gK9GwnrHDSRIMsvs/Tgz5zJzBlxzBU23usZAL5bN2Gw0sLS8EnC/4cKPjwiepGYZ8/GZBG3H9wMdqt6HVa/2+1qOvnTG0qCjR3hSM8yy8JTw3EbZULwj7NfyybTwsXDIlAMK3yg95fCr4pzDn4rNRGwaXKpnINfEqSbW8qYuPCoc1AsVrX4edRNPprgYlzoocwiLGLNECZCiwjoFyoSlFiWz1r6xP98CJfFo8jeoYoojR168IVEr0jUjNSt6Rr4CVZX7/zyt7MS4090The4X2/4YBvce1HZt++fEtmun0PkMV8WGvyQ5Rb5E321owSPwbsHFdUNL7cPlNgw8GUkz+Sd1ynRls/B+Dv3L4LuD3lUnq/o6Z4+Q2JQnuoWDQxiR/d61XxVkaBT4cFhYAAAACXBIWXMAAArwAAAK8AFCrDSYAAAFAUlEQVR4Xu3YMQHAIBDAwKf+pSEKCcwld3MUZM3MHgAAAOBp3y0AAAAA/s8AAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDuHwAlzNu7SaAAAAAElFTkSuQmCC";

  const $tpl$8 = $(tpl$a);
  function dialogBox () {
    $tpl$8.css('background-image', `url(${dialogBoxImage})`);
    this.$store.$stream.append($tpl$8);
    let disabled = false;
    $tpl$8.on('mousedown', e => {
      if (!disabled) {
        this.next();
      }
    });
    this.on('character', (character, reply) => {
      if (character.avatar) {
        $tpl$8.find('.dialog-box__reply-wrapper').css('width', '75%');
        $tpl$8.find('.dialog-box__avatar').show().css({
          backgroundImage: `url('${this.getAssetByName(character.avatar).url}')`
        });
        $tpl$8.find('.dialog-box__name').html(character.name).css({
          color: character.nameColor
        });
        $tpl$8.find('.dialog-box__reply').html(reply).css({
          color: character.replyColor
        });
      } else {
        $tpl$8.find('.dialog-box__reply-wrapper').css('width', '90%');
        $tpl$8.find('.dialog-box__avatar').hide();
        $tpl$8.find('.dialog-box__name').html(character.name).css({
          color: character.nameColor
        });
        $tpl$8.find('.dialog-box__reply').html(reply).css({
          color: character.replyColor
        });
      }

      if (reply) {
        setCharacterToReply.call(this, reply, character.replyColor);
      }
    });
    this.on('dialog-box', param => {
      if (param === 'clear') {
        $tpl$8.find('.dialog-box__name').empty();
        $tpl$8.find('.dialog-box__reply').empty();
        $tpl$8.find('.dialog-box__avatar').css('background-image', `unset`);
        disabled = false;
      } else if (param === 'disabled') {
        disabled = true;
      } else if (param === true) {
        disabled = false;
        $tpl$8.show();
      } else {
        disabled = false;
        $tpl$8.hide();
      }
    });
  }

  function setCharacterToReply(reply, replyColor) {
    let characterAliaces = reply.match(/(@\w+)|(@\$.*?[\s])/gi);

    if (characterAliaces) {
      let newReply = reply;
      characterAliaces.forEach(id => {
        let cid = id.replace('@', '').trim();
        let character = this.getCharacterById(cid);

        if (character) {
          newReply = newReply.replace(id, `<span class="dialog-box__reply-character-name" style="color: ${character.nameColor}">${character.name}</span> `);
          /*пробел на конце нужен из за спец символов $! которые получаю вместе с пробелом*/
        }
      });
      $tpl$8.find('.dialog-box__reply').html(newReply).css({
        color: replyColor
      });
    }
  }

  var css$k = ".stream__hands {\n    position: absolute;\n    z-index: 9999;\n    opacity: 0.8;\n    top: unset;\n    right: 0;\n    bottom: 10px;\n    display: none; \n    height: 185px;\n\n  }\n.stream__hands .stream__hand {\n    width: 95px;\n    height: 95px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGZmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTExLTA1VDEyOjM5OjM0KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTExLTA1VDEyOjM5OjM0KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMS0wNVQxMjozOTozNCswMzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0ZDZhODRkYi1kYWE5LTE3NDYtOWYxZS1iMjE4ODRiZDRmNTkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphMmY2NzgyMy03MTY2LTRhNGYtOGMyMC04N2FlNzQ5YzJmZTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MmI1MTYxMC1kMjQ0LTkzNGYtYjBmNS1jMjk1ZjJlNzY5OTQiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MmI1MTYxMC1kMjQ0LTkzNGYtYjBmNS1jMjk1ZjJlNzY5OTQiIHN0RXZ0OndoZW49IjIwMjEtMTEtMDVUMTI6Mzk6MzQrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGQ2YTg0ZGItZGFhOS0xNzQ2LTlmMWUtYjIxODg0YmQ0ZjU5IiBzdEV2dDp3aGVuPSIyMDIxLTExLTA1VDEyOjM5OjM0KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZWIwNzk3Mi1hMTdlLTA0NGYtYWIxYi04MDExN2JmYWYzODM8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6BgqWgAAAF1klEQVR4nOVb247TMBA9YzvOZcWyVYWQeOEBxHfzA7zwzCfwD0gIgQQS0E1308Q3Hrr2Ote2CFiSHqlSktpJ5oxnMh57yDmHcwZ76Bd4aJw9ASI+efPmjcvzHF++fMHV1RX8sZQSQtw35Zxju91is9mAcw4iAgAYY7BarXBxcQHnHL5//46qqsA5B2OHuT7VHKfaExGUUrDWIs9zvH//HsYYEBFev35NgwTc3t7CWou6rlvHl5eXLQKEEFBKIUmSlnDGGGRZhjzP4ZxDmqYwxoBzDs75bwvknAMR9f4P5wQQqPVfrJQkSaC1hlIqXB8kgDEGxhiIqHX89evXlgCcc1RVhZubmyC8cw7GGBhjUJYlnHMoyxK73e4o4aeI8MITUUsAay2IAGcBh+E+ngTfd5IArz0pJd6+fRu03u1krYWUEmmawjmHpmnQNE1o5x+cJEl4aF3X0FqDiFqEGGPCsb/uyfTP5pzDOQchBGQqQz+jNRhjaGqFRjUtxRljsF6vkec5rLXh3pMExMM+TVMwxiCEQJqmrU7OOUgpkSQJAKBpGtR13WPYmwcRYbfbQd+9cOwPrLXhuDua/DXGWCAgzdJAgFZqkgD/foyx000AAKSU2G63+PjxY48AIUQYIUqpoN3u/Twp3iHFgk4REJuBJ4BzDpGI0M8aAyIGrTS00YEAf48XL15gvV4HwQ+agJQyaJaIUBQFPnz4gHfv3mGOWK1WeP78OTabTU+5HqMjwDc81YH9TyAiaK3vnCUNfopbBNzc3EBrjd1uB2stjDEnf5v/Jwghwqg2xqBpmh4JLQJ+/PgBKSWur6+D04htdG5IkgRZlu0d5p1iuyO6Nya8xofsZW7wznRKia0R8OjRI6RpCqVUGP5zNoEYQggkSTJtAo8fP0ZRFKiqahEExM58jIBRE3DOwdl5ExDDK7MrT2sEbDabMBHK8gwyu4/25o6jCNhut6jrGlVVIU1TyLQ9DZ4zxghomQDnHEKIEHpiGaN/Ei0C9gwBzlk0dY26rqGUeqh3+6PwUe5BJwjsidBaQysFY/Q/ecG/jbHJ0GieaqzD0tAjYC8vdX7LwEkj4Fxw9gQs4yN/BBhjrRR+uP5A7/PPcfJX4FzQMgHPjk9FH7ui878i1vpYTnC+0v0hLJ6AQ8Fc7yvgG1trYa2ddT4gyzIURRGSO03THM4JLgmxLxvDogkwxkApBaXU6EhedCB0fX2Nb9++oSzLsDw2mRCJMZZBmROOkWE0KbqEOMCHv/GyexctE/DLYcD9XoE5J0WllOErQESDCyQHTWDuONkEloqj9gcc02FecOG3nw9wMHZGOcFjZBgcAT4r7Le+zBXeqd/vc9in/WO0CPDOwm+Umvu6QKxE54bnNYv2AXF+wzkbtsrEWHQo7CdDRAQpUwy5vIUTwMC5ABGDlBk474u7+Djg3u5d53yPnhNcSgR4Dwei/WbOeDuvxyABS4RSCnVdH7c6vET4zPBZZYXjT/kZL4xMr3CPEuAzwnOPBGObHwrqek7QR0tXV1cQQuDVq1d49uzZXcUGcGi/wH6YhbPJh8fPJSKkaRoSF3ESo7sVn4hCkYZzDhcXFyiKIrT1iY+nT5+iLEsAe4Wqu/qCUQL8yzDGQpHEer3Gy5cvAwFtQfpC/S4BjDEURdETeqjQgTGGqqpwe3sL5xxWqxUuLy+DkL59WZao6xpCiOO2yeV5DiFEYJExBqVUqAH62wTEWvdC+NR2l4DdbhcIEEK0+vn21tqw6y1JEhhjpkfAkydPQqmc1vpuFuXw8+fPAUH3oaYXYKiiq7XlLkK8DT/O03lNMcYg5b42SGsdynHie8cJ28+fP+PTp09B6O7zfNWY7ztKQFwz5Bv7ffbdgqi4AKH7UL/VTko5SEBsp3HRlM/beyJ826qqegT4oi0AYeo+Nspih350xUis1aHvZ3yt/x/gHBvs1yVvqDYoDliGAphuHWE86xuKZON79d51qaHvsTiDQGgaZ0/ALy4XCMLKcyfBAAAAAElFTkSuQmCC);\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    z-index: 100;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n.stream__hands .stream__hand-left {\n    width: 60px;\n    height: 60px;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat; \n}\n.stream__hands .stream__hand-right {\n    width: 60px;\n    height: 60px;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat; \n}\n";
  n(css$k,{});

  var tpl$9 = "<div class=\"stream__hands component\">\n    <div class=\"stream__hand\">\n        <div class=\"stream__hand-left\"></div>\n    </div>\n    <div class=\"stream__hand\">\n        <div class=\"stream__hand-right\"></div>\n    </div>\n</div>";

  function hands () {
    const $tpl = $(tpl$9);
    this.$store.$stream.append($tpl);
    this.on('hand-left', id => {
      if (id) {
        $tpl.show();
        $tpl.find('.stream__hand-left').css('background-image', `url('${this.getAssetByName(id).url}')`);
      } else {
        $tpl.find('.stream__hand-left').css('background-image', "unset");
      }
    });
    this.on('hand-right', id => {
      if (id) {
        $tpl.show();
        $tpl.find('.stream__hand-right').css('background-image', `url('${this.getAssetByName(id).url}')`);
      } else {
        $tpl.find('.stream__hand-right').css('background-image', "unset");
      }
    });
    this.on('hands', data => {
      if (data) {
        $tpl.show();
      } else {
        $tpl.hide();
      }
    });
  }

  var css$j = ".screen__cloud {\n  width: 500px;\n  background: wheat;\n  padding: 30px;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  z-index: 1000;\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);\n  transform: translate(-50%, 0);\n  top: 10%; }\n  .screen__cloud .tag {\n    padding: 10px 15px;\n    font-size: 18px;\n    margin: 10px;\n    display: inline-flex;\n    background: #444;\n    cursor: pointer;\n    color: #34d1a2;\n    transition: 0.3s;\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); }\n    .screen__cloud .tag:hover {\n      background: #000;\n      color: darkcyan; }\n";
  n(css$j,{});

  var tpl$8 = "<div class=\"screen__cloud component center\"></div>";

  function cloud () {
    var $tpl = $(tpl$8);
    this.$store.$stream.append($tpl);
    this.on('cloud', param => {
      $tpl.empty();
      $tpl.css('display', 'flex');

      if (param) {
        if (param.css) {
          $tpl.css(param.css);
        }

        Object.keys(param.tags).map(label => {
          let item = `<div class="tag sound-hover" data-label=${label}>${param.tags[label]}</div>`;
          $tpl.append(item);
        });
        let $vnjs = this;
        $tpl.on('click', '.tag', function () {
          let label = $(this).data('label');
          $vnjs.exec({
            jump: label
          });
        });
      } else {
        $tpl.hide();
      }
    });
  }

  function stopAll() {
    Object.values(this.$store).map(asset => {
      if (asset.hasOwnProperty("_muted")) {
        asset.stop();
      }
    });
  }

  function audio () {
    stopAll.call(this);

    var audio = data => {
      if (typeof data === 'string') {
        this.$store[data].play();
      } else if (typeof data === 'object') {
        this.$store[data.name].rate(data.speed || 1);
        this.$store[data.name].loop(data.loop || false);
        this.$store[data.name].volume(data.volume || 1);
        this.$store[data.name][data.action]();
      } else {
        stopAll.call(this);
      }
    };

    this.on('audio', audio);
    this.on('sound', data => {
      this.$store[data].play();
    });
  }

  //https://api.jquery.com/animate/

  /*
  	не умеет анимировать свойства 
    вроде 45deg, и т.д
   */
  function animate () {
    this.on('animate', data => {
      let {
        selector,
        duration,
        css
      } = data;
      console.log(data);
      $(selector).animate(css, duration);
      $(selector).css('color', 'red');
    });
  }

  var css$i = "\n\n.stream__show-frame{\n  width: 800px;\n  height: 400px;\n  flex-wrap: wrap;\n  top: unset;\n  bottom: 290px;\n  left: 50%;\n  transform: translateX(-50%);\n  overflow: hidden;\n  box-shadow: 3px 3px 5px rgba(0,0,0,0.5);\n  border: 1px solid rgba(200, 200, 200, 0.1);\n}\n\n.stream__show-frame__cell{\n  background-repeat: no-repeat;\n  /*background-size: cover;*/\n  background-position: left;\n  width: 50%;\n  height: 50%;\n  border: 1px solid rgba(200, 200, 200, 0.1);\n}\n.stream__show-frame__cell:nth-child(1){\n    background-position: 0px 0px;\n}\n.stream__show-frame__cell:nth-child(2){\n  background-position: -400px 0px;\n\n}\n.stream__show-frame__cell:nth-child(3){\n  background-position: 0px -200px;\n}\n.stream__show-frame__cell:nth-child(4){\n  background-position: -400px -200px;\n\n}\n.filter-blur{\n  filter: blur(20px);\n}";
  n(css$i,{});

  const tpl$7 = `<div class="stream__show-frame component">
                    <div class="stream__show-frame__cell"></div>
                    <div class="stream__show-frame__cell"></div>
                    <div class="stream__show-frame__cell"></div>
                    <div class="stream__show-frame__cell"></div>
             </div>`;
  function frame () {
    let $frame = $(tpl$7);
    this.$store.$stream.append($frame);
    this.on('frame', param => {
      if (param) {
        $frame.html('');

        for (let i = 1; i < 5; i++) {
          let tplItem = $(`<div class="stream__show-frame__cell ${param[i] ? '' : 'filter-blur'}" style="background-image:url('${this.getAssetByName(param.img).url}') "></div>`);
          $frame.append(tplItem);
        } //  $(item).removeClass('filter-blur')


        $frame.css('display', 'flex');
      } else {
        $frame.hide();
      }
    });
  }

  var css$h = ".stream__menu-menu {\n  width: 80%;\n  padding: 10px;\n  background: black;\n  flex-direction: column;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 200px;\n  display: none;\n  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);\n  overflow: auto;\n  max-height: 95%;\n  color: wheat;\n}\n  .stream__menu-menu .stream__menu-quetion {\n    background: rgba(70, 70, 70, 0.7);\n    width: 100%;\n    min-height: 40px;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    padding: 10px 20px;\n    transition: 0.1s;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-bottom: 10px;\n  }\n  .stream__menu-menu .stream__menu-item {\n    margin-bottom: 10px;\n    background: rgba(120, 120, 120, 0.7);\n    width: 100%;\n    min-height: 40px;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    transition: 0.1s;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n    .stream__menu-menu .stream__menu-item span {\n      padding: 10px 20px;\n      display: flex;\n      flex: 1; }\n    .stream__menu-menu .stream__menu-item:hover {\n      cursor: pointer;\n      background: rgba(200, 100, 100, 0.8); }\n    .stream__menu-menu .stream__menu-item span {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n.stream__menu-menu .stream__menu-item:last-child{\n  margin-bottom: 0;\n}\n\n\n.stream__menu-menu .menu-item__icon{\n  width: 32px;\n  height: 32px;\n  margin-left: 15px;\n}\n.stream__menu-menu .menu-item__icon+span{\n  /*padding-left: 20px;*/\n}";
  n(css$h,{});

  var tpl$6 = "<div class=\"stream__menu-menu component\"></div>";

  const $tpl$7 = $(tpl$6);
  $tpl$7.on("click", ".stream__menu-item", clickHundler$1);
  let onClickObj$1 = null;
  let menuObj$1 = null;
  function menu$1 () {
    this.$store.$stream.append($tpl$7);
    let prevObj = null;
    this.on('menu', obj => {
      if (obj === true) {
        menu$2.call(this, prevObj);
      } else if (obj) {
        prevObj = obj;
        menu$2.call(this, obj);
      } else {
        $tpl$7.hide();
      }
    });
  }
  /**
   * menu
   */

  function menu$2(param) {
    menuObj$1 = param;
    $tpl$7.html('');

    for (let [label, menuItem] of Object.entries(menuObj$1)) {
      let character = this.getCharacterById(label);

      if (character) {
        let str = null;

        if (label === '$') {
          character.name = '';
        }

        if (character.name !== '') {
          str = `<div class="stream__menu-quetion">
                          <span style='color:${character.nameColor}; padding-right: 20px;'>${character.name}:</span>
                          <span style='color:${character.replyColor}; '>${menuItem}</span>
                    </div>`;
        } else {
          str = `<div class="stream__menu-quetion">
                          <span style='color:${character.replyColor};'>${menuItem}</span>
                    </div>`;
        }

        $('.stream__menu-menu').append(str);
      } else {
        let str = null;

        if (/disabled/i.test(label)) {
          // c исконками
          if (typeof menuItem === 'object') {
            str = `<div data-label="${label}" class="stream__menu-item disabled"><img alt="" class="menu-item__icon" src="${this.getAssetByName(menuItem.icon).url}"/><span class="sound-click">${menuItem.text}</span></div>`;
          } // без иконок
          else {
            str = `<div data-label="${label}" class="stream__menu-item disabled"><span class="sound-click">${menuItem}</span></div>`;
          }
        } else if (label === 'onClick') {
          onClickObj$1 = menuItem;
        } else if (label === 'css') {
          $tpl$7.css(menuItem);
        } else {
          // c исконками
          if (typeof menuItem === 'object') {
            str = `<div data-label="${label}" class="stream__menu-item"><img alt="" class="menu-item__icon" src="${this.getAssetByName(menuItem.icon).url}"/><span class="sound-click">${menuItem.text}</span></div>`;
          } // без иконок
          else {
            str = `<div data-label="${label}" class="stream__menu-item"><span class="sound-click">${menuItem}</span></div>`;
          }
        }

        $('.stream__menu-menu').append($(str));
      }
    }

    $tpl$7.css({
      display: 'flex'
    });
  }
  /**
   * 
   */


  function onClickMenuHandler$1(label) {
    if (menuObj$1.hasOwnProperty('onClick')) {
      $vnjs.exec(onClickObj$1);
    }
  }
  /**
   * 
   */


  function clickHundler$1() {
    let label = $(this).data('label');

    if (label === 'next') {
      onClickMenuHandler$1();
      setTimeout(() => {
        $vnjs.exec({
          next: true
        });
      }, 0);
    } else {
      onClickMenuHandler$1();
      setTimeout(() => {
        $vnjs.exec({
          jump: label
        });
      }, 0);
    }

    $tpl$7.hide(); //$tpl.off( "click", clickHundler)
  }

  var css$g = ".main-menu {\n  width: 50%;\n  padding: 10px;\n  background-color: transparent;\n  left: 50%;\n  transform: translateX(-50%);\n  flex-direction: column;\n  display: none;\n  /*box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);*/\n  overflow: auto;\n  max-height: 95%;\n  top: 200px;\n  color: #34d1a2;\n}\n  .main-menu__item--quetion {\n    background: rgba(70, 70, 70, 0.7);\n    width: 100%;\n    min-height: 50px;\n    font-size: 26px;\n    display: flex;\n    align-items: center;\n    padding: 10px 20px;\n    color: white;\n    transition: 0.1s;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-bottom: 10px;\n    box-shadow: 3px 3px 10px rgba(0,0,0,0.5);\n  }\n  .main-menu__item {\n    margin-bottom: 20px;\n    background-color: #333;\n    width: 100%;\n    min-height: 50px;\n    font-size: 26px;\n    display: flex;\n    align-items: center;\n    transition: 0.1s;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    box-shadow: 3px 3px 10px rgba(0,0,0,0.7);\n\n  }\n    .main-menu__item span {\n      padding: 20px 20px;\n      padding-left: 50px;\n      display: flex;\n      flex: 1;\n      /*display: flex;\n      justify-content: center;*/\n    }\n    .main-menu__item:hover {\n      cursor: pointer;\n      color: darkcyan;\n      background: rgba(0, 0, 0, 0.7); }\n    .main-menu__item span {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n.main-menu__item:last-child{\n  margin-bottom: 0;\n}\n\n.main-menu__item.disabled{\n  opacity: 0.6;\n}\n\n.main-menu .menu-item__icon{\n  width: 50px;\n  height: 50px;\n  margin-left: 15px;\n}\n.main-menu .menu-item__icon+span{\n  padding-left: 20px;\n}";
  n(css$g,{});

  var tpl$5 = "<div class=\"main-menu component\"></div>";

  const $tpl$6 = $(tpl$5);
  let onClickObj = null;
  let menuObj = null;
  function mainMenu () {
    this.$store.$stream.append($tpl$6);
    let prevObj = null;
    this.on('main-menu', obj => {
      if (obj === true) {
        menu.call(this, prevObj);
      } else if (obj) {
        prevObj = obj;
        menu.call(this, obj);
      } else {
        $tpl$6.hide();
      }
    });
  }
  /**
   * menu
   */

  function menu(param) {
    menuObj = param;
    $tpl$6.html('');

    for (var [label, menuItem] of Object.entries(menuObj)) {
      var character = this.getCharacterById(label);

      if (character) {
        var str = null;

        if (label === '$') {
          character.name = '';
        }

        if (character.name !== '') {
          str = `<div class="main-menu__item--quetion">
                          <span style='color:${character.nameColor}; padding-right: 20px;'>${character.name}:</span>
                          <span style='color:${character.replyColor}; '>${menuItem}</span>
                    </div>`;
        } else {
          str = `<div class="main-menu__item--quetion">
                          <span style='color:${character.replyColor};'>${menuItem}</span>
                    </div>`;
        }

        $('.main-menu').append(str);
      } else {
        let str = null;

        if (/disabled/i.test(label)) {
          // c исконками
          if (typeof menuItem === 'object') {
            str = `<div data-label="${label}" class="main-menu__item disabled"><img alt="" class="menu-item__icon" src="${this.getAssetByName(menuItem.icon).url}"/><span class="sound-click">${menuItem.text}</span></div>`;
          } // без иконок
          else {
            str = `<div data-label="${label}" class="main-menu__item disabled"><span class="sound-click">${menuItem}</span></div>`;
          }
        } else if (label === 'onClick') {
          onClickObj = menuItem;
        } else if (label === 'css') {
          $tpl$6.css(menuItem);
        }
        /**
         * Вывод обычного пункта меню
         */
        else {
          // c исконками
          if (typeof menuItem === 'object') {
            str = `<div data-label="${label}" class="main-menu__item"><img alt="" class="menu-item__icon" src="${this.getAssetByName(menuItem.icon).url}"/><span class="sound-click">${menuItem.text}</span></div>`;
          } else {
            str = `<div data-label="${label}" class="main-menu__item"><span class="sound-click">${menuItem}</span></div>`;
          }
        }

        $('.main-menu').append($(str));
      }
    }

    $tpl$6.css({
      display: 'flex'
    });
  }
  /**
   * click handler
   */


  $tpl$6.on("click", ".main-menu__item", clickHundler);

  function clickHundler() {
    let label = $(this).data('label');

    if (label === 'next') {
      onClickMenuHandler();
      setTimeout(() => {
        $vnjs.exec({
          next: true
        });
      }, 0);
    } else {
      onClickMenuHandler();
      setTimeout(() => {
        $vnjs.exec({
          jump: label
        });
      }, 0);
    }

    $tpl$6.hide(); //$tpl.off( "click", clickHundler)
  }
  /**
   *  onClick:
   *    dialog-box: true
   */


  function onClickMenuHandler(label) {
    if (menuObj.hasOwnProperty('onClick')) {
      $vnjs.exec(onClickObj);
    }
  }

  var css$f = ".stream__term-board {\n  width: 808px;\n  height: 480px;\n  padding: 25px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAygAAAHgCAYAAABO0EkBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHM2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTE0VDE2OjI1OjM3KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMy0yMVQyMToyNToxMSswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMy0yMVQyMToyNToxMSswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YjU3NzllYTEtMDk0Zi1hNTQxLWJiZmYtZTY3YTFkZWVjNzdjIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NmRlYTlhYzAtYWQ5Mi03ZjQzLTk2YWItMGUyZTFkODQ2NWViIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YTBkYTUwNjItZGM4NC0yMzRkLWExOWYtMDExMmMzOWM3N2FhIj4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjZkZWE5YWMwLWFkOTItN2Y0My05NmFiLTBlMmUxZDg0NjVlYjwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmEwZGE1MDYyLWRjODQtMjM0ZC1hMTlmLTAxMTJjMzljNzdhYSIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0xNFQxNjoyNTozNyswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphZjBkMjdiMy1jOGJkLTVlNGEtOWRiOC0yMzAyY2E2OTYxZmQiIHN0RXZ0OndoZW49IjIwMjEtMTAtMTRUMTc6NDA6MjMrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjU3NzllYTEtMDk0Zi1hNTQxLWJiZmYtZTY3YTFkZWVjNzdjIiBzdEV2dDp3aGVuPSIyMDIyLTAzLTIxVDIxOjI1OjExKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Hu0bEAAADtNJREFUeJzt3U+LZFcdx+Hfubeq/zmJcaIGoiBRslDI23DhxpVkJQgufQO+B/cuBHHjSiQq0a2CO4ngwj+IYqJBBTUjk5me7q6uvve4mKRN0lEwzq35duZ5VrdvVd1zelcfzrm32pc+/9n+za9+uX75h1erquqDN47q9eOTAgAA2KWvfO2bNbzz5MU0PYy5AAAAj7CXfvLDqqoa7t69U1VVHzjYr9ZaHZ9sHua8AACA97nee63G8fLv73//hcvj1XZ7USebTZ2en1fvvVq7/FhVG6qN693OFgAAeH+7OL/cufXWOKmqWt28ebM2m/Oa53558vxvv7887tvTqt7rLeUCAADwnh2sxnrl1km98trplddWh4cHNc/zv8/0+6Fy9pdfV1XVuH+jqk9VbbzyYQAAgP/Z/li3//56/e7l2/XUk4/X0fr+rfE3j/ZqNU1TtbesjrRxdXm8uvHk/QMrKAAAwIOyGmu9f1g3bmyrqupkO9dqM9X5NF99ildbH1we94s3bpgXJwAAwA5cCZTqvdq4qmHvqNpq/yFMCQAAeFRdDRQAAICHRKAAAAAxBAoAABBDoAAAADEECgAAEEOgAAAAMQQKAAAQQ6AAAAAxBAoAABBDoAAAADEECgAAEGO1xEV7r1qPrdbjUL36EkMAAAAPQatW22mu7dSrtQd//UUC5XBvqD/846Reee2kDtfjEkMAAAAPwel2qmc+fFSf+shRnW3nB379RQJlNbZ6/fSi/vjaaX3waFVH66FalbUUAAC4hlpr1XuvW3eO69bdTT2299H69NOPXZ9AeXOL12MHqxqHVn+6valeVQusAAEAAAvrvVdrrZ775DP17Hq/njrc1mZzXkt8w18kUN60v2p1vJ3rxd/+s6bea2ytmkwBAIBro1ev7Xaq9XqsLz7/hXru2U/Vq7/5Wd155Re1OrjxwMdbNFB6rxpa1Y298TJQAACA62U7VK1XY23OTuvO3bu13W5rGJZ5IPCigfJW4zDWyb3j2mw2i/0zAADAgzPPc+3v79f+4eHOxtxZoFRVTdO0aG0BAAAPzjzPtVrtNBl2GyittRqGQaAAAMA10XZ8m4ZSAAAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYqx2Odg8zzVNU/XedzksAADwHszzXPM873TMnQXK3Oc6PDys9XpdrbVdDQsAALxHvfdarVbV51417uY7/KKB0lqrufe6fXxSF73X3jhWa0OVBRQAALgGWm23U51tzmpvPdbc++KLDYsGyjTNtR7H+swnnq65eg1l5QQAAK6bi2mq1TjWehxrmpbd8rVooByfndXHnvpwff35z9U4DDXteP8aAADw/2t1fxPUNM11fLZZdKxFAqW1qu3U697mojYXvYbVQbVxqGHh2gIAABbQqlqv6sNcbX1YbVxVLfTgq0UC5fR8rk/cPKwnnnu6Dvb36vjll6q15uldAABwzbVhrHlzr9r6YJHrLxIoF1OvJ45W9dHH92uapjq9/dfqVe5AAQCAa673Xm1cV1utF1lFWXSL13a6uP/3+kCcAADA+8Dl9/qFdkf5JXkAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAABgZ9bjUAfrocahVe9XXxcoAADAztw521ZV1dl2qvFdakSgAAAAixtaq6qqjz9xcHnucG+88r7VO0/0zb3aa3ON++tq66sfAAAA+F+NrdXUe51s5//6viuB0vY/UJs+1E9/9ec6fPxDi00QAAB4lLSq6nXr3ra203y5ovJOVwKlquq7P/55VR1U3TpdcIIAAMCj5mA9Xt4g3+v+PSdHb2z1Wo/D1UB54Tvffte9YAAAAA/Cm0/vGlvVxfz2R3m9LVB+8IMX6j+stAAAADxQe2Ork+1cJ9upHtu/v0hyGSg/evF7tRrUCQAAsBvj0Gr9RoPc3UxV9UagfONb33p4swIAAB5J51Ovg/Xbf/mk9Xf7+UYAAICH4F/no41w/cIydwAAAABJRU5ErkJggg==);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: absolute;\n  top: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: none; }\n  .stream__term-board pre {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    margin: 0; }\n    .stream__term-board pre code {\n      padding: 25px;\n      font-size: 24px;\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      top: 0;\n      overflow-x: auto;\n      font-family: Minecraft; }\n      .stream__term-board pre code img {\n        height: 100%; }\n\n\n\n/* term theme */\n\n.stream__term-board pre code{\n  font-size: 18px;\n  line-height: 24px;\n}\n";
  n(css$f,{});

  var tpl$4 = "<div class=\"stream__term-board component\">\n    <pre><code></code></pre>\n</div>\n";

  var map = {
    "js": "javascript",
    "lua": "lua",
    "py": "python"
  };

  document.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();
  });
  /**/

  function term () {
    const $tpl = $(tpl$4);
    this.$store.$stream.append($tpl);
    this.on('term', param => {
      if (param === true) {
        $tpl.fadeIn();
      } else if (param) {
        let data = this.getDataByName(param);

        if (/\./.test(param)) {
          if (!data) {
            console.error('Data file not found');
            console.warn(this.current.sceneName + '.' + this.current.labelName + '.' + this.current.index);
          } else {
            $tpl.find('pre code').removeAttr('class');
            let str = param.split('.');
            let langName = str[1];
            let val = map[langName];

            if (val) {
              langName = val;
            }

            $tpl.find('pre code').css({
              overflow: 'auto',
              padding: 10
            });
            $tpl.find('pre code').addClass('language-' + langName).addClass('hljs');
            let html = hljs.highlight(data.body, {
              language: langName
            }).value;
            $tpl.find('pre code').html(html); // yaml reply from Norrator

            $tpl.find('pre code .hljs-string').toArray().map(str => {
              if ($(str).html() === '$:') {
                $(str).addClass('hljs-reply');
              }
            });
            $tpl.fadeIn();
          }
        } else {
          if (param === 'clear') {
            $tpl.find('pre code').empty();
          } else {
            let img = $(`<img src=${this.getAssetByName(param).url} />`);
            $tpl.find('pre code').empty();
            $tpl.find('pre code').css('overflow', 'hidden');
            $tpl.find('pre code').append(img);
            $tpl.fadeIn();
          }
        }
      } else {
        $tpl.hide();
        $tpl.find('pre code').removeAttr('class');
      }
    });
  }

  var css$e = ".stream__show-left {\n  position: absolute;\n  left: 50px;\n  bottom: 210px;\n  top: unset;\n  width: 260px;\n  height: 450px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  z-index: 9999; }\n\n.stream__show-center {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 210px;\n  top: unset;\n  width: 260px;\n  height: 450px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  z-index: 9999; }\n\n.stream__show-right {\n  position: absolute;\n  right: 50px;\n  bottom: 210px;\n  top: unset;\n  width: 260px;\n  height: 450px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  z-index: 9999; }\n";
  n(css$e,{});

  function show () {
    let $left = $('<div class="stream__show-left component"></div>');
    let $right = $('<div class="stream__show-right component"></div>');
    let $center = $('<div class="stream__show-center component"></div>');
    let $show = $('<div class="stream__show-show component"></div>');
    this.$store.$stream.append($left);
    this.$store.$stream.append($right);
    this.$store.$stream.append($center);
    /*
    
    .stream__show-show.component
     */

    this.on('left', id => {
      if (id) {
        $left.hide();
        $left.css('background-image', `url('${this.getAssetByName(id).url}')`).fadeIn();
      } else {
        $left.fadeOut();
      }
    });
    this.on('center', id => {
      if (id) {
        $center.hide();
        $center.css('background-image', `url('${this.getAssetByName(id).url}')`).fadeIn();
      } else {
        $center.fadeOut();
      }
    });
    this.on('right', id => {
      if (id) {
        $right.hide();
        $right.css('background-image', `url('${this.getAssetByName(id).url}')`).fadeIn();
      } else {
        $right.fadeOut();
      }
    });
    this.on('show', param => {
      if (param) {
        $show.css('background-image', `url('${this.getAssetByName(id).url}')`).css(param.css).fadeIn();
      } else {
        $show.fadeOut();
      }
    });
  }

  var css$d = ".stream__show-auto-left {\n  position: absolute;\n  left: 50px;\n  bottom: 210px;\n  top: unset;\n  z-index: 7000;\n}\n\n.stream__show-auto-center {\n  position: absolute;\n  bottom: 210px;\n  top: unset;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 7000;\n\n}\n\n.stream__show-auto-right {\n  position: absolute;\n  right: 50px;\n  bottom: 210px;\n  top: unset;\n  z-index: 7000;\n\n}\n";
  n(css$d,{});

  function showAuto () {
    let $left = $('<img alt="" src="" class="stream__show-auto-left component"/>');
    let $center = $('<img alt="" src="" class="stream__show-auto-center component"/>');
    let $right = $('<img alt="" src="" class="stream__show-auto-right component"/>');
    this.$store.$stream.append($left);
    this.$store.$stream.append($center);
    this.$store.$stream.append($right);
    /*
    
    
     */

    this.on('leftimg', id => {
      if (id) {
        $left.hide();

        if (typeof id === 'object') {
          $left.attr('src', this.getAssetByName(id.name).url);
          $left.css(id.css);
        } else {
          $left.attr('src', this.getAssetByName(id).url);
        }

        $left.fadeIn();
      } else {
        $left.fadeOut();
      }
    });
    this.on('centerimg', id => {
      if (id) {
        $center.hide();

        if (typeof id === 'object') {
          $center.attr('src', this.getAssetByName(id.name).url);
          $center.css(id.css);
        } else {
          $center.attr('src', this.getAssetByName(id).url);
        }

        $center.fadeIn();
      } else {
        $center.fadeOut();
      }
    });
    this.on('rightimg', id => {
      if (id) {
        $right.hide();

        if (typeof id === 'object') {
          $right.attr('src', this.getAssetByName(id.name).url);
          $right.css(id.css);
        } else {
          $right.attr('src', this.getAssetByName(id).url);
        }

        $right.fadeIn();
      } else {
        $right.fadeOut();
      }
    });
  }

  function scene () {
    this.on('scene', id => {
      if (typeof id === 'object') {
        this.$store.$screen.css('opacity', 0);
        this.$store.$screen.css({
          'background-image': `url(${id.url})`
        });
        this.$store.$screen.css('opacity', 1);
      } else if (typeof id === 'string') {
        this.$store.$screen.css('opacity', 0);
        this.$store.$screen.css({
          'background-image': `url('${this.getAssetByName(id).url}')`
        });
        this.$store.$screen.css('opacity', 1);
      } else {
        this.$store.$screen.css({
          'background-image': `unset`
        });
      }
    });
  }

  var menuItemSound = "menu-item.mp3";

  function soundHover () {
    var itemSound = new Howl({
      src: './assets/' + menuItemSound,
      volume: 0.1
    });
    $('#screen').on('mouseover', '.sound-hover', function () {
      itemSound.play();
    });
    $('#screen').on('mousedown', '.sound-click', function () {
      itemSound.play();
    });
  }

  var css$c = "\n.stream__table{\n\n  left: 50%;\n  top: 0%;\n  transform: translateX(-50%);\n  z-index: 1000;\n  flex-direction: column;\n  /*background-color: wheat;*/\n}\n.table-row{\n  overflow: hidden;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n\n}\n.table__cell{\n  transition: all 0.2s linear;\n  margin: 0 5px;\n\n}\n\n.table__cell-text{\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n\n}\n.row-border{\n    border: 2px solid white;\n}\n.table__cell[data-jump]{\n  cursor: pointer;\n}\n.table__cell[data-jump]:hover{\n  filter: brightness(150%);\n}\n\n.table__cell-text[data-jump]{\n  cursor: pointer;\n}\n.table__cell-text[data-jump]:hover{\n  color: #24a3bf;\n}";
  n(css$c,{});

  function table () {
    let $table = $('<div class="stream__table component"></div>');
    this.$store.$stream.append($table);
    $table.on('click', '.table__cell', function () {
      let label = $(this).data('jump');

      if (label) {
        $vnjs.exec({
          'jump': label
        });
      }
    });
    this.on('table', tableData => {
      if (tableData) {
        $table.html('');
        $table.css('display', 'flex');
        let border = tableData.filter(item => item.hasOwnProperty('border'))[0];
        let rows = tableData.filter(item => item.hasOwnProperty('row'));
        rows.map(item => {
          let $row = $(`<div class="table-row"></div>`);
          let height = 30;
          item.row.map(cell => {
            if (cell.hasOwnProperty('height')) {
              height = cell.height;
            }

            if (cell.hasOwnProperty('image')) {
              let tpl = '';

              if (cell.image.hasOwnProperty('jump')) {
                tpl = `<img class="table__cell" style="width: ${cell.image.width}px" data-jump="${cell.image.jump}" src="${this.getAssetByName(cell.image.name).url}"/>`;
              } else {
                tpl = `<img class="table__cell" style="width: ${cell.image.width}px"  src="${this.getAssetByName(cell.image.name).url}"/>`;
              }

              $row.append(tpl);
            }

            if (cell.hasOwnProperty('text')) {
              let tpl = '';

              if (cell.text.hasOwnProperty('jump')) {
                tpl = `<span class="table__cell table__cell-text ${border ? 'row-border' : ''}"  data-jump="${cell.text.jump}" style="width: ${cell.text.width || ''}px; font-size: ${cell.text.size}px">${cell.text.content || ''}</span>`;
              } else {
                tpl = `<span class="table__cell table__cell-text ${border ? 'row-border' : ''}"" style="width: ${cell.text.width || ''}px; font-size: ${cell.text.size}px">${cell.text.content || ''}</span>`;
              }

              $row.append(tpl);
            }
          });
          $row.css('height', height);
          $table.append($row);
        });
      } else {
        $table.html('');
        $table.hide();
      }
    });
  }

  function clear () {
    this.on('clear', param => {
      if (param === 'all') {
        $('.component').toArray().map(function (component) {
          $(component).hide();
        });
        this.exec({
          scene: false,
          'dialog-box': 'clear'
        });
        Object.values(this.$store).map(asset => {
          if (asset.hasOwnProperty("_muted")) {
            asset.stop();
          }
        });
      }
    });
  }

  function data$1 () {
    this.on('player-load', name => {
      if (store.get(name)) {
        this.current.data = store.get(name);
      }
    });
    this.on('set-data', data => {
      for (let key in data) {
        this.current.data[key] = data[key];
      }

      store.set(this.current.data.player.name, this.current.data);
    });
    this.on('clear-data-all', data => {
      localStorage.clear();
    });
    this.on('clear-data', data => {
      store.remove(this.current.data.player.name);
      this.current.data = {
        score: this.current.data.score,
        player: this.current.data.player
      };
    });
    this.on('switch', data => {
      for (let equal in data) {
        let param = equal.split('===');

        if (this.current.data[param[0]] === param[1]) {
          this.exec(data[equal]);
        }
      }
    });
  }

  var css$b = "\n\n.stream__qa{\n  display: none;\n  z-index: 8888;\n  width: 60%;\n  flex-direction: column;\n}\n\n.stream__qa--item{\n\n  color: white;\n  cursor: pointer;\n  color: wheat;\n  transition: 0.1s;\n  margin-bottom: 10px;\n  border-style: solid;\n  border-width: 3px;\n  border-color: black;\n  color: white;\n  background: grey;\n}\n.stream__qa--item:last-child{\n  margin-bottom: 0;\n}\n.stream__qa--item:hover {\n  background: rgba(100, 200, 100, 0.7);\n}\n\n.stream__qa--quetion{\n  background: rgba(0,0,0,0.7);\n  pointer-events: none;\n  text-overflow: unset;\n  height: auto;\n  white-space: unset;\n}\n.stream__qa--quetion span{\n  text-overflow: unset;\n  height: auto;\n  overflow: auto;\n  white-space: unset;\n  line-height: 28px;\n\n}\n.stream__qa--item span{\n  padding: 7px 20px;\n  display: block;\n}\n.stream__qa--item .stream__qa--name{\n  padding: unset;\n  display: none;\n}\n/*\n.stream__qa--name:after{\n  content: \" :\"\n}\n*/\n.stream__qa--reply{\n  padding: unset;\n  padding-left: 20px;\n}";
  n(css$b,{});

  var tpl$3 = "<div class=\"stream__qa component center\"></div>";

  class Score {
    constructor() {
      this.логика = {
        мозговой_штурм: 0,
        критическое_мышление: 0,
        рефлексивное_мышление: 0,
        стратегическое_мышление: 0
      };
      this.творчество = {
        интуиция: 0,
        креативность: 0,
        оригинальность: 0,
        продуктивность: 0
      };
      this.эмоции = {
        понимание_эмоций: 0,
        выражение_эмоций: 0,
        восприятие_эмоций: 0,
        управление_эмоциями: 0
      };
      this.общение = {
        кругозор: 0,
        лидерство: 0,
        адекватность: 0,
        чувство_юмора: 0
      };
      this.теория = {
        понимание: 0,
        умение_доказать: 0,
        умение_объяснить: 0,
        доклады_презентации: 0
      };
      this.практика = {
        работа_в_команде: 0,
        работа_на_занятии: 0,
        работа_самостоятельно: 0,
        качество_и_время_работы: 0
      };
      this.прилежание = {
        упорство: 0,
        аккуратность: 0,
        внимательность: 0,
        самоорганизация: 0
      };
      this.квалификация = {
        специализация: 0,
        универсальность: 0
      };
    }

  }

  function clearData() {
    if (this.current.data.score) {
      this.current.data.score = new Score();
      store.set(this.current.data.player.name, this.current.data);
      this.emit('setScore');
    }
  }

  function qa () {
    if (!this.current.data.score) {
      this.current.data.score = new Score();
    }

    var $tpl = $(tpl$3);
    this.$store.$stream.append($tpl);

    var setScore = data => {
      for (let key in data) {
        for (let param in data[key]) {
          this.current.data.score[key][param] += data[key][param];
        }
      }

      store.set(this.current.data.player.name, this.current.data);
      this.emit('setScore');
    };

    this.on('оценка', data => {
      if (data === 'reset') {
        clearData.call(this);
        this.current.data.score = new Score();
      } else {
        setScore(data);
      }
    });

    var qaHandler = data => {
      $tpl.empty();

      for (var [label, menuItem] of Object.entries(data)) {
        var str = null;
        var character = this.getCharacterById(label);

        if (character) {
          str = `
          <div class="stream__qa--item stream__qa--quetion">
              <span class="stream__qa--name" style="color: ${character.nameColor};">${character.name}</span>
              <span class="stream__qa--reply" style="color: ${character.replyColor};">${menuItem}</span>
          </div>`;
          $('.stream__qa').append(str);
        } else {
          str = `<div class="stream__qa--item" data-score=${JSON.stringify(menuItem)}><span class="sound-hover">${label}</span></div>`;
          $('.stream__qa').append(str);
        }
      }

      $tpl.css('display', 'flex');
      let $vnjs = this;

      function clickHundler() {
        let data = $(this).data('score');
        setScore(data);
        $('.stream__qa').off("click", clickHundler);
        $('.stream__qa').hide();
        $vnjs.exec({
          next: true
        });
      }

      $(".stream__qa").on("click", ".stream__qa--item", clickHundler);
    };

    this.on('qa', data => {
      if (data === 'reset') {
        clearData.call(this);
      } else if (data) {
        qaHandler(data);
      } else {
        $(".stream__qa").hide();
      }
    });
  }

  var css$a = "#chess__vnjson{\n  border: 0;\n  display: none;\n  top: 50px;\n  left: 50%;\n  transform: translateX(-50%);\n  box-shadow: 3px 3px 5px rgba(0,0,0,0.3);\n}";
  n(css$a,{});

  function chess () {
    this.on('setTree', () => {
      if (this.TREE.$root.package.chess) {
        chessInit();
      }
    });

    var chessInit = () => {
      const $tpl = $('<iframe id="chess__vnjson" src="data/chess/index.html" width="500" height="500"></iframe>');
      this.$store.$stream.append($tpl);
      this.on('chess', fen => {
        if (fen) {
          $tpl.show();
          let win = document.querySelector("iframe#chess__vnjson").contentWindow;
          win.postMessage({
            fen
          }, location.origin + "/data/chess/index.html");
        } else {
          $tpl.hide();
        }
      });
    };
  }

  var tpl$2 = "<div class=\"stream__set-name\">\n    <div class=\"stream__set-name-wrapper\">\n        <input type=\"text\">\n        <div class=\"stream__set-name-btn\">\n            <svg style=\"width:60px;height:60px\" viewBox=\"0 0 24 24\">\n                <path fill=\"currentColor\" d=\"M3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19M17,12L12,7V10H8V14H12V17L17,12Z\"/>\n            </svg>\n        </div>\n    </div>\n  \n</div>";

  var css$9 = ".stream__set-name{\n  width: 470px;\n  height: 120px;\n  background-color: rgba(0, 0, 0, 0.7);\n  top: 250px;\n  left: 50%;\n  transform: translateX(-50%);\n  box-shadow: 3px 3px 5px rgba(0,0,0,0.5);\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  display: none;\n}\n.stream__set-name-wrapper{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stream__set-name-wrapper input{\n  caret-color: skyblue;\n  height: 47px;\n  border-radius: 4px;\n  width: 350px;\n  background-color: rgba(200,200,200,0.1);\n  font-size: 22px;\n  font-family: Minecraft;\n  color: skyblue;\n}\n\n.stream__set-name-wrapper .stream__set-name-btn{\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n}\n.stream__set-name-wrapper .stream__set-name-btn svg path{\n  fill: silver;\n  transition: 0.3s;\n\n}\n\n.stream__set-name-wrapper .stream__set-name-btn:hover svg path{\n  fill: skyblue;\n}";
  n(css$9,{});

  function setName () {
    const $tpl = $(tpl$2);
    this.$store.$stream.append($tpl);
    let cid = null;
    this.on('set-name', id => {
      if (id) {
        $tpl.css('display', 'flex');
        cid = id;
      } else {
        $tpl.hide();
      }
    });
    $('.stream__set-name-wrapper .stream__set-name-btn').on('click', () => {
      let input = $('.stream__set-name-wrapper input');
      $tpl.fadeOut();
      let char = this.TREE.$root.characters.find(character => character.id === cid); //this.current.data[cid] = value;

      char.name = input.val();
      input.val('');
      this.exec({
        next: true
      }); // this.exec({ next: true, 'set-data': { [cid]: value } });
    });
  }

  var css$8 = ".stream__wiki {\n  left: 10px;\n  top: 40px;\n  width: 300px;\n  display: none;\n  height: auto;\n  padding: 10px;\n  border-radius: 4px;\n  background-color: rgba(0,0,0,0.5);\n  z-index: 7100;\n  font-size: 14px;\n}\n.stream__wiki li{\n  padding: 5px 0;\n\n  line-height: 18px;\n    \n}\n.stream__wiki-key{\n  color: wheat;\n}\n.stream__wiki-dash{\n  padding: 0 5px;\n  color: silver;\n}\n.stream__wiki-value{\n  color: darkgray;\n}";
  n(css$8,{});

  let $tpl$5 = $('<ul class="stream__wiki component"></ul>');
  function wiki () {
    this.$store.$stream.append($tpl$5);
    this.on('wiki', data => {
      if (data) {
        $tpl$5.html('');
        $tpl$5.fadeIn();
        let list;

        if (Array.isArray(data)) {
          list = data;
        } else {
          list = data.list;
          $tpl$5.css(data.css);
        }

        appendElements.call(this, list);
      } else {
        $tpl$5.fadeOut();
      }
    });
  }

  function appendElements(list) {
    let wikiStore = this.TREE.$root.wiki;
    list.forEach(key => {
      let str;

      if (typeof wikiStore[key] === 'object') {
        str = `<li><span class="stream__wiki-key" style="color: ${wikiStore[key].color}">${key}</span> <span class="stream__wiki-dash">-</span> <span class="stream__wiki-value">${wikiStore[key].text}</span></li>`;
      } else {
        str = `<li><span class="stream__wiki-key">${key}</span> <span class="stream__wiki-dash">-</span> <span class="stream__wiki-value">${wikiStore[key]}</span></li>`;
      }

      $tpl$5.append(str);
    });
  }

  var css$7 = "\n\n#crossword{\n  top: 50px;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 0;\n  display: none;\n  box-shadow: 3px 3px 3px rgba(0,0,0,0.3);\n  background-color: antiquewhite;\n  padding: 5px;\n  border-radius: 4px;\n}\n";
  n(css$7,{});

  function crossWord () {
    this.on('setTree', () => {
      if (this.TREE.$root.package['crossword']) {
        init();
      }
    });
    let $tpl = null;

    const init = () => {
      this.on('crossword', data => {
        if ($tpl) {
          $tpl.remove();
          $tpl = null;
        }

        if (data) {
          $tpl = $('<iframe id="crossword" src="data/crossword/index.html" width="975" height="500"></iframe>');
          this.$store.$stream.append($tpl);
          setTimeout(() => {
            $tpl.show();
            let win = document.querySelector("iframe#crossword").contentWindow;
            win.postMessage(data, location.origin + "/data/crossword/index.html");
          }, 300);
        } else {
          $tpl.remove();
          $tpl = null;
        }
      });
    };
  }

  var css$6 = "\n.stream__test{\n  width: 600px;\n  min-height: 250px;\n  top: 50px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: wheat;\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);\n  padding: 20px;\n  border-radius: 4px;\n\n}\n\n.stream__test-name{\n\n  border-bottom: 2px solid gray;\n  padding: 5px;\n  font-size: 24px;\n  padding-bottom: 10px;\n  color: brown;\n}\n\n.stream__test-quetions-wrapper{\n  position: relative;\n}\n\n\n.stream__test-quetion{\n\n  padding: 15px 0;\n  color: black;\n}\n\n.stream__variants-item{\n  padding: 10px;\n  margin-top: 5px;\n  background-color: darkslateblue;\n\n  color: rgba(255, 255, 255, 0.7);\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n.stream__variants-item_success{\n  background-color: darkcyan;\n  color: white;\n}\n\n.stream__variants-item_fail{\n  background-color: crimson;\n  color: white;\n}\n.stream__variants-item:hover,\n.stream__variants-item_success:hover,\n.stream__variants-item_fail:hover{\n\n  filter: brightness(110%);\n}\n\n/**\n * RESULT\n */\n.stream__test-result{\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  border-radius: 4px;\n  display: none;\n  background-color: wheat;\n  padding: 20px 0;\n}\n.stream__test-result-data{\n  height: 110px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.stream__test-result-item{\n  color: black;\n  padding: 10px 0;\n  display: flex;\n  justify-content: space-between;\n  width: 250px;\n}\n.stream__test-result-item:first-child span:last-child{\n  color: darkcyan;\n}\n.stream__test-result-item:last-child span:last-child{\n  color: crimson;\n}\n.stream__test-next-btn{\n  background-color: burlywood;\n  color: black;\n  border-radius: 4px;\n  padding: 10px 10px;\n  width: 250px;\n  text-align: center;\n  cursor: pointer;\n  margin: 0 auto;\n  box-shadow: 2px 2px 2px rgba(0,0,0,0.3);\n  /*border: 2px solid magenta;*/\n}\n.stream__test-next-btn:hover{\n  background-color:  darkslateblue;\n  color: white;\n}";
  n(css$6,{});

  var tpl$1 = "<div class=\"stream__test component\">\n    <div class=\"stream__test-name\"></div>\n    <div class=\"stream__test-quetions-wrapper\">\n        <div class=\"stream__test-quetion\"></div>\n        <div class=\"stream__test-variants\"></div>\n        <!--result-->\n        <div class=\"stream__test-result\">\n            <div class=\"stream__test-result-data\">\n                <div class=\"stream__test-result-item\">\n                      <span>Правильно</span>\n                      <span class=\"stream__test-result-item_true\">0</span>\n                </div>\n               <div class=\"stream__test-result-item\">\n                      <span>Не правильно</span>\n                      <span class=\"stream__test-result-item_false\">0</span>\n                </div>\n            </div>\n            <div class=\"stream__test-next-btn\">Продолжить</div>\n        </div>\n    </div>\n</div>";

  const $tpl$4 = $(tpl$1);
  let TEST = null;
  let answers = [];
  let qIndex = 0;
  let _trueAnswer = 0;
  let _falseAnswer = 0;
  function test () {
    $vnjs.current.data.tests = {};
    this.$store.$stream.append($tpl$4);
    this.on('test', data => {
      if (data) {
        $tpl$4.show();
        TEST = data;
        qIndex = 0;
        answers = [];
        _trueAnswer = 0;
        _falseAnswer = 0;
        $('.stream__test-name').html(TEST.name);
        renderQuetion.call(this);
      } else {
        $tpl$4.hide();
      }
    });
  }
  let _quetionItem = null;

  function renderQuetion() {
    _quetionItem = TEST.quetions[qIndex];
    $('.stream__test-variants').html('');
    $('.stream__test-quetion').html(_quetionItem.quetion);

    _quetionItem.variants.map((item, index) => {
      let tplItem = `<div class="stream__variants-item" data-index="${index}">${item}</div>`;
      $('.stream__test-variants').append(tplItem);
    });
  }
  /**
   * @click
   */


  let click = true;
  $tpl$4.find('.stream__test-variants').on('click', '.stream__variants-item', function () {
    let index = $(this).data('index');

    if (click) {
      if (index === _quetionItem.correct - 1) {
        if (TEST['self-control'] === true) {
          $(this).addClass('stream__variants-item_success');
        }

        ++_trueAnswer;
        answers.push({
          answer: true,
          quetion: _quetionItem
        });
      } else {
        if (TEST['self-control'] === true) {
          $(this).addClass('stream__variants-item_fail'); // навешиваем класс на правильный ответ

          $('.stream__variants-item').toArray().map(item => {
            if ($(item).data('index') === TEST.quetions[qIndex].correct - 1) {
              $(item).addClass('stream__variants-item_success');
            }
          });
        }

        ++_falseAnswer;
        answers.push({
          answer: false,
          quetion: _quetionItem
        });
      }

      click = false;
      next();
    }
  });

  function next() {
    setTimeout(() => {
      click = true;
      ++qIndex;

      if (qIndex === TEST.quetions.length) {
        $vnjs.current.data.tests[TEST.name] = answers;
        $('.stream__test-result-item_true').html(_trueAnswer);
        $('.stream__test-result-item_false').html(_falseAnswer);
        $('.stream__test-result').show();
      } else {
        renderQuetion();
      }
    }, 800);
  }

  $tpl$4.find('.stream__test-next-btn').on('click', function () {
    $vnjs.exec({
      next: true,
      test: false
    });
    $('.stream__test-result').hide();
  });

  var css$5 = ".screen-stream__slide{\n  position: absolute;\n  display: none;\n  top: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.5);\n  z-index: 2000;\n}";
  n(css$5,{});

  const $tpl$3 = $(`<img class="screen-stream__slide component"/>`);
  function slide () {
    this.$store.$stream.append($tpl$3);
    this.on('slide', id => {
      $tpl$3.attr('src', null);

      if (typeof id === 'string') {
        $tpl$3.attr('src', this.getAssetByName(id).url).show();
      } else if (typeof id === 'object') {
        /*
         * id.name
         * id.css
         * id.url
         */
        if (id.hasOwnProperty('css')) {
          $tpl$3.css(id.css);
          $tpl$3.attr('src', id.name).show();
        }

        if (id.hasOwnProperty('url')) {
          $tpl$3.attr('src', id.url).fadeIn();
        } else {
          $tpl$3.attr('src', this.getAssetByName(id.name).url).show();
        }
        /*
        .css(id.css)
         */

      } else {
        $tpl$3.attr('src', null).hide();
      }
    });
  }

  var css$4 = ".stream__stage{\n  margin: 1% 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #333;\n  width: 70%;\n  padding: 5px;\n  height: 518px;\n  top: 30px;\n  overflow: auto;\n}\n.stream__stage li{\n  list-style-type: none;\n  cursor: pointer;\n  font-size: 18px;\n  display: block;\n}\n.stream__stage li:last-child{\n  margin-bottom: 0px;\n}\n.stage-children li:not(.stage-child){\n  display: none;\n}\n.stage-parent{\n  padding: 5px;\n  background: rgba(0, 0, 0, 0.1);\n  margin-bottom: 5px;\n}\n/*Том*/\n.stage-vol{\n  padding: 10px;\n  transition: 0.3s;\n  background: #000;\n  color: darkcyan;\n}\n.stage-vol:hover{\n  color: #34d1a2;\n  background: rgba(0, 0, 0, 0.7);\n}\n.stage-children{\n  padding-left: 20px;\n  display: block;\n  margin-top: 10px;\n}\n\n/*Глава*/\n.stage-child{\n  color: darkcyan;\n  padding: 10px;\n  transition: 0.3s;\n  background: #000;\n  margin-bottom: 10px;\n}\n\n.stage-child:hover{\n  color: #34d1a2;\n  background: rgba(0, 0, 0, 0.7);\n}\n";
  n(css$4,{});

  var icoContent = "data:image/jpeg;base64,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bmcAAAAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0EDQAAAAAABAAAAFo4QklNBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0nEAAAAAAACgABAAAAAAAAAAI4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQAAAAAAAACAAE4QklNBAIAAAAAAAQAAAAAOEJJTQQwAAAAAAACAQE4QklNBC0AAAAAAAYAAQAAAAI4QklNBAgAAAAAABAAAAABAAACQAAAAkAAAAAAOEJJTQQeAAAAAAAEAAAAADhCSU0EGgAAAAADSwAAAAYAAAAAAAAAAAAAADwAAAA8AAAACwQRBDUENwAgBDgEPAQ1BD0EOAAtADEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAADwAAAA8AAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAABudWxsAAAAAgAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAAA8AAAAAFJnaHRsb25nAAAAPAAAAAZzbGljZXNWbExzAAAAAU9iamMAAAABAAAAAAAFc2xpY2UAAAASAAAAB3NsaWNlSURsb25nAAAAAAAAAAdncm91cElEbG9uZwAAAAAAAAAGb3JpZ2luZW51bQAAAAxFU2xpY2VPcmlnaW4AAAANYXV0b0dlbmVyYXRlZAAAAABUeXBlZW51bQAAAApFU2xpY2VUeXBlAAAAAEltZyAAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAAAPAAAAABSZ2h0bG9uZwAAADwAAAADdXJsVEVYVAAAAAEAAAAAAABudWxsVEVYVAAAAAEAAAAAAABNc2dlVEVYVAAAAAEAAAAAAAZhbHRUYWdURVhUAAAAAQAAAAAADmNlbGxUZXh0SXNIVE1MYm9vbAEAAAAIY2VsbFRleHRURVhUAAAAAQAAAAAACWhvcnpBbGlnbmVudW0AAAAPRVNsaWNlSG9yekFsaWduAAAAB2RlZmF1bHQAAAAJdmVydEFsaWduZW51bQAAAA9FU2xpY2VWZXJ0QWxpZ24AAAAHZGVmYXVsdAAAAAtiZ0NvbG9yVHlwZWVudW0AAAARRVNsaWNlQkdDb2xvclR5cGUAAAAATm9uZQAAAAl0b3BPdXRzZXRsb25nAAAAAAAAAApsZWZ0T3V0c2V0bG9uZwAAAAAAAAAMYm90dG9tT3V0c2V0bG9uZwAAAAAAAAALcmlnaHRPdXRzZXRsb25nAAAAAAA4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBBEAAAAAAAEBADhCSU0EFAAAAAAABAAAAAI4QklNBAwAAAAABgUAAAABAAAAPAAAADwAAAC0AAAqMAAABekAGAAB/9j/7QAMQWRvYmVfQ00AAv/uAA5BZG9iZQBkgAAAAAH/2wCEAAwICAgJCAwJCQwRCwoLERUPDAwPFRgTExUTExgRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBDQsLDQ4NEA4OEBQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIADwAPAMBIgACEQEDEQH/3QAEAAT/xAE/AAABBQEBAQEBAQAAAAAAAAADAAECBAUGBwgJCgsBAAEFAQEBAQEBAAAAAAAAAAEAAgMEBQYHCAkKCxAAAQQBAwIEAgUHBggFAwwzAQACEQMEIRIxBUFRYRMicYEyBhSRobFCIyQVUsFiMzRygtFDByWSU/Dh8WNzNRaisoMmRJNUZEXCo3Q2F9JV4mXys4TD03Xj80YnlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vY3R1dnd4eXp7fH1+f3EQACAgECBAQDBAUGBwcGBTUBAAIRAyExEgRBUWFxIhMFMoGRFKGxQiPBUtHwMyRi4XKCkkNTFWNzNPElBhaisoMHJjXC0kSTVKMXZEVVNnRl4vKzhMPTdePzRpSkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2JzdHV2d3h5ent8f/2gAMAwEAAhEDEQA/AOKSSW06npXS8XFOXjHOycusXODnljWsMfQ2z79U4BgzZxj4RwynOZqEIVcuH1S+bhi4qXHPK2cjo2PZm4Iw3OZjdRG5jXGSyNbG7v6qWRldBxbn41fTTeKXFnquuc1ziPpEta17UaYhzsZcPt455JSjxmMeGJxx4vb9fuSh+m4qdav7U6L/AOVA/wC33f8ApNGxbeh9QyGYR6e7FdedldrLS4hx+iXNc1qVeKpc3OIMpcvljGIuUrxS4YjrUcjiJImTQcfItx3HcanuZu8dvtQ0Gzxx4OO/TXFf9X5rf//Q4qVqY/W6xjV4udiV5raBFLnuLHNHZvtDvaso6AnwE/cugvyG9GwcIYmPVYcmv1bMi1m/c4/4Jv7qeGnzhgfbgcfuTnI+36vZ4TGPFKXu/o+lzcrq+Vk5dWUIpOPAoYwe1gb+a37vcrT+t9PvcbcnplVlztbHtscwOP7+1rXKzldPw8jqXTC5gxxngOvpGgH9n+Wh5nXb8PKtxasWiiul5Yyt9YLoaYDtzkWqDiyjHHDgPFGBOmT7vwQ4+CUfcx/zn6yKH9qdH/8AKln/AG8//wAgnZ13Cxz6mF06ui/8y0vc7aTpuDXNTf8AObM/0WP/ANtBWendXt6lmV4eTi0203nY8Mr2lo/f3fyfpJKnhlCEpZMEjCIMpj71kn6R83ol8zgve973PeSXvJc4nuT3TIuXUynKupYdzK3ua0+QOiEm9XS44+3xfocPFt+jw9n/0eKWx0jK6+Mc1YNZyMdh0DmB7Wn+S56xzwfhoukvq6lldMwD0UuNDKg2yulwaW2/nuskhPDR5+cRGEJRxkTl8+f+ax8MeL1f1pfouJm5GfbmG3Mc/wC0tI5EFsfRDGwtunL+tT6mu+ytuBH85ZU3cfvc1LPsoZ1Xpbc9zbMipo+2ukEbv8Hv/lNcodRwfrPZmXPrN1lbnE1OrsAYWH6GxocxFqTywyxwxljwYhwGUZZx+r0lwcOD5P76X1/rV/3Aq/7ab/5NCycv6010vc/GGOyPc+utoIH9ZrlW/Zv1q/cyP+3P/UiudKw/rFRm12ZZtqxWmbza8OZsj3Dbud9JJjlHDCJnfJT4RxcEfmnw/ox9c/U83M6zPn4zyki5bqX5Vz6BFLrHmsDiJQk3q7PF+r4+E/LxcH6Xy8XC/wD/0uKlSrtuqJNVjq552Etn7lFJOWyqvVXD/W+VRMySA4nmdfy/SRG5WUwBrLrGtGgaHuA/AoaSOq2XBQ4uGunFt/zk323M/wBPb/nu/vUX5OTYNtlr3NPILiQUNJLVaPYvT278OFSSSSDK/wD/2QA4QklNBCEAAAAAAFcAAAABAQAAAA8AQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAAAAUAEEAZABvAGIAZQAgAFAAaABvAHQAbwBzAGgAbwBwACAAMgAwADIAMAAAAAEAOEJJTQQGAAAAAAAHAAYAAAABAQD/4Q5WaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTEtMDVUMTk6NTE6MzErMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMTEtMDVUMTk6NTE6MzErMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTExLTA1VDE5OjUxOjMxKzAzOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmMxMzJjNDExLWMwYTUtMjg0MS1iYjgxLTRjZDA2ZmZlMDU2MSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjIyZTVhYzcxLTdiYzgtMDc0YS1hMTNkLWM2MWZiMWUzYTk5NSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjFiYzdhZjBhLTUwNjktYmQ0Ni05ZmU0LWRjNmMzNDFhZDEwYyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxYmM3YWYwYS01MDY5LWJkNDYtOWZlNC1kYzZjMzQxYWQxMGMiIHN0RXZ0OndoZW49IjIwMjEtMTEtMDVUMTk6NTE6MzErMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzEzMmM0MTEtYzBhNS0yODQxLWJiODEtNGNkMDZmZmUwNTYxIiBzdEV2dDp3aGVuPSIyMDIxLTExLTA1VDE5OjUxOjMxKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPkFCOEEzMTkwMjI5NTE4Q0E5RjI4MURCNjA3RTYwRkUxPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/7gAOQWRvYmUAZEAAAAAB/9sAhAACAgICAgICAgICAwICAgMEAwICAwQFBAQEBAQFBgUFBQUFBQYGBwcIBwcGCQkKCgkJDAwMDAwMDAwMDAwMDAwMAQMDAwUEBQkGBgkNCgkKDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAA8ADwDAREAAhEBAxEB/90ABAAI/8QBogAAAAcBAQEBAQAAAAAAAAAABAUDAgYBAAcICQoLAQACAgMBAQEBAQAAAAAAAAABAAIDBAUGBwgJCgsQAAIBAwMCBAIGBwMEAgYCcwECAxEEAAUhEjFBUQYTYSJxgRQykaEHFbFCI8FS0eEzFmLwJHKC8SVDNFOSorJjc8I1RCeTo7M2F1RkdMPS4ggmgwkKGBmElEVGpLRW01UoGvLj88TU5PRldYWVpbXF1eX1ZnaGlqa2xtbm9jdHV2d3h5ent8fX5/c4SFhoeIiYqLjI2Oj4KTlJWWl5iZmpucnZ6fkqOkpaanqKmqq6ytrq+hEAAgIBAgMFBQQFBgQIAwNtAQACEQMEIRIxQQVRE2EiBnGBkTKhsfAUwdHhI0IVUmJy8TMkNEOCFpJTJaJjssIHc9I14kSDF1STCAkK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";

  const $tpl$2 = $(`<ul class="stream__stage component"></ul>`);
  function content () {
    this.$store.$stream.append($tpl$2);
    this.on('content', data => {
      if (typeof data === 'string') {
        console.log('hide: ', data);
      } else if (typeof data === 'object') {
        renderTree.call(this, data);
      } else {
        $tpl$2.hide();
      }
    });
    $('.stream__hands').on('mouseover', '.stream__hand-right', function () {
      $(this).css('opacity', 0.5);
    });
    $('.stream__hands').on('mouseout', '.stream__hand-right', function () {
      $(this).css('opacity', 1);
    });
    $('.stream__hand-right').css('background-image', `url(${icoContent})`);
    $('.stream__hands').on('click', '.stream__hand-right', e => {
      if (this.TREE[this.current.sceneName].content) {
        this.exec({
          jump: `${this.current.sceneName}.content`
        });
      } else if (this.TREE.$root.content) {
        this.exec({
          jump: `$root.content`
        });
      } else {
        console.warn('Scene: { ' + '$root.content' + ' } not found');
      }
    });
  }

  function renderTree(data) {
    const $vnjs = this;
    $tpl$2.empty();
    $tpl$2.fadeIn();
    data.map(item => {
      var $parent = $(`<li class="stage-parent"><div class="stage-vol stage-item sound-hover"></div><ul class="stage-children"></ul></li>`);
      Object.keys(item).map((key, i) => {
        if (i === 0) {
          $parent.find('.stage-vol').html(item[key]).attr('data-label', key);

          if (/disabled/i.test(key)) {
            $parent.addClass('disabled');
          }
        } else {
          let $str = $(`<li class="stage-child stage-item sound-hover" data-label="${key}">${item[key]}<li>`);

          if (/disabled/i.test(key)) {
            $str.addClass('disabled');
          }

          $parent.find('ul').append($str);
        }
      });
      $tpl$2.append($parent);
    });

    function clickHandler() {
      let label = $(this).data('label');
      $tpl$2.hide();

      if (label === 'next') {
        $vnjs.exec({
          next: true
        });
      } else {
        $vnjs.exec({
          jump: label
        });
      }

      $tpl$2.off('click', clickHandler);
    }

    $tpl$2.on('click', '.stage-item', clickHandler);
  }

  var icoPlay = "data:image/jpeg;base64,/9j/4QWgRXhpZgAATU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAfAAAAcgEyAAIAAAAUAAAAkYdpAAQAAAABAAAAqAAAANQACvyAAAAnEAAK/IAAACcQQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpADIwMjE6MTE6MDYgMTA6NDA6MzUAAAAAAAOgAQADAAAAAf//AACgAgAEAAAAAQAAADygAwAEAAAAAQAAADwAAAAAAAAABgEDAAMAAAABAAYAAAEaAAUAAAABAAABIgEbAAUAAAABAAABKgEoAAMAAAABAAIAAAIBAAQAAAABAAABMgICAAQAAAABAAAEZgAAAAAAAABIAAAAAQAAAEgAAAAB/9j/7QAMQWRvYmVfQ00AAv/uAA5BZG9iZQBkgAAAAAH/2wCEAAwICAgJCAwJCQwRCwoLERUPDAwPFRgTExUTExgRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBDQsLDQ4NEA4OEBQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIADwAPAMBIgACEQEDEQH/3QAEAAT/xAE/AAABBQEBAQEBAQAAAAAAAAADAAECBAUGBwgJCgsBAAEFAQEBAQEBAAAAAAAAAAEAAgMEBQYHCAkKCxAAAQQBAwIEAgUHBggFAwwzAQACEQMEIRIxBUFRYRMicYEyBhSRobFCIyQVUsFiMzRygtFDByWSU/Dh8WNzNRaisoMmRJNUZEXCo3Q2F9JV4mXys4TD03Xj80YnlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vY3R1dnd4eXp7fH1+f3EQACAgECBAQDBAUGBwcGBTUBAAIRAyExEgRBUWFxIhMFMoGRFKGxQiPBUtHwMyRi4XKCkkNTFWNzNPElBhaisoMHJjXC0kSTVKMXZEVVNnRl4vKzhMPTdePzRpSkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2JzdHV2d3h5ent8f/2gAMAwEAAhEDEQA/AOKSSU6azbdXUDBsc1s/1iGpy0kAEnYC2Gvgkt7LZ9XKMl/Tbsd9Qqhhy2kk7omXM/dVHqHRsjEaL6yMnEdq2+vUR/wn7iNNbFzuOZiJCWLjHFj9wcIyRO3DL5f8Fz0kkkG0pJJJJT//0OKR8D+nY/8Axtf/AFTUBHwP6dj/APG1/wDVtTmPL/Nz/uy/JP13/lnM7fpP4BQ6f1TM6e8uoePTd9Op+tbh/Laidd/5YzP+M/gqEondhwQjk5XFGcRKJxwsS1/Qds4fTOry/AIw846uxHmGPP8AwL1k5ONfi2mnIY6uwfmuEIQ0II7agjt9y3ulZ1vVHs6Vn1/aq3SGXRNlUCdzrP3EmOfu8rEyB93BHWUZn9dih/Un/lI/1JuCkp3Viu6ysO3itzmh3iAYBUEG3xDh4ulcX+D8z//R4pHwf6djf8dX/wBW1ARcNwbmUOOgbawk/BwKcx5f5uf92X5Nrrv/ACxmf8Z/BVmYtrqftDhsoBANju8n/Bt/wi187pudf9YMg1Y3qtLxY11giraR9Nzv3VLIysDp1hsscOp9Tbo0n+YqP7tTG+z2pxDRx81WHBjxD3JnHD0wNy+X9L9HH/fyNTE6G41fa89/2TDGoc7Sx4/4Ov8AlKWR1quql2J0mr7NQ7R9p/nX+Pu/NVDNzsnOuNuU82O7A8DyY381qB/qfihfZmjy0shE+ZlxkaxxR/mIHy/ysv601dkkkkG2/wD/0uKSSSTkNt/V+pvxxjPyrDUBG2ew81U4SSSYsPs0fZ4Kv1e3w/N/W4VJJJJMqkkkklP/2f/tDXxQaG90b3Nob3AgMy4wADhCSU0EJQAAAAAAEAAAAAAAAAAAAAAAAAAAAAA4QklNBDoAAAAAAPcAAAAQAAAAAQAAAAAAC3ByaW50T3V0cHV0AAAABQAAAABQc3RTYm9vbAEAAAAASW50ZWVudW0AAAAASW50ZQAAAABJbWcgAAAAD3ByaW50U2l4dGVlbkJpdGJvb2wAAAAAC3ByaW50ZXJOYW1lVEVYVAAAAAEAAAAAAA9wcmludFByb29mU2V0dXBPYmpjAAAAFQQfBDAEQAQwBDwENQRCBEAESwAgBEYEMgQ1BEIEPgQ/BEAEPgQxBEsAAAAAAApwcm9vZlNldHVwAAAAAQAAAABCbHRuZW51bQAAAAxidWlsdGluUHJvb2YAAAAJcHJvb2ZDTVlLADhCSU0EOwAAAAACLQAAABAAAAABAAAAAAAScHJpbnRPdXRwdXRPcHRpb25zAAAAFwAAAABDcHRuYm9vbAAAAAAAQ2xicmJvb2wAAAAAAFJnc01ib29sAAAAAABDcm5DYm9vbAAAAAAAQ250Q2Jvb2wAAAAAAExibHNib29sAAAAAABOZ3R2Ym9vbAAAAAAARW1sRGJvb2wAAAAAAEludHJib29sAAAAAABCY2tnT2JqYwAAAAEAAAAAAABSR0JDAAAAAwAAAABSZCAgZG91YkBv4AAAAAAAAAAAAEdybiBkb3ViQG/gAAAAAAAAAAAAQmwgIGRvdWJAb+AAAAAAAAAAAABCcmRUVW50RiNSbHQAAAAAAAAAAAAAAABCbGQgVW50RiNSbHQAAAAAAAAAAAAAAABSc2x0VW50RiNQeGxAUgAAAAAAAAAAAAp2ZWN0b3JEYXRhYm9vbAEAAAAAUGdQc2VudW0AAAAAUGdQcwAAAABQZ1BDAAAAAExlZnRVbnRGI1JsdAAAAAAAAAAAAAAAAFRvcCBVbnRGI1JsdAAAAAAAAAAAAAAAAFNjbCBVbnRGI1ByY0BZAAAAAAAAAAAAEGNyb3BXaGVuUHJpbnRpbmdib29sAAAAAA5jcm9wUmVjdEJvdHRvbWxvbmcAAAAAAAAADGNyb3BSZWN0TGVmdGxvbmcAAAAAAAAADWNyb3BSZWN0UmlnaHRsb25nAAAAAAAAAAtjcm9wUmVjdFRvcGxvbmcAAAAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0EDQAAAAAABAAAAFo4QklNBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0nEAAAAAAACgABAAAAAAAAAAI4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAA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b2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTEtMDZUMTA6NDA6MzUrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMTEtMDZUMTA6NDA6MzUrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTExLTA2VDEwOjQwOjM1KzAzOjAwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZDMxMzVjMGYtMWYyMi05ZDQ5LTgzYTAtMDFjZjMzY2YzZTUxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmQzMTM1YzBmLTFmMjItOWQ0OS04M2EwLTAxY2YzM2NmM2U1MSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQzMTM1YzBmLTFmMjItOWQ0OS04M2EwLTAxY2YzM2NmM2U1MSI+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPkFCOEEzMTkwMjI5NTE4Q0E5RjI4MURCNjA3RTYwRkUxPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDMxMzVjMGYtMWYyMi05ZDQ5LTgzYTAtMDFjZjMzY2YzZTUxIiBzdEV2dDp3aGVuPSIyMDIxLTExLTA2VDEwOjQwOjM1KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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";

  function voice () {
    var prev = null;
    this.on('voicePlay', data => {
      if (data) {
        if (prev) {
          this.$store[prev].stop();
        }

        prev = data;
        this.$store[data].play();
      } else {
        this.$store[data].stop();
      }
    });
    this.on('$voice', data => {
      if (data) {
        $('.stream__hand-left').css('background-image', `url(${icoPlay})`);
      } else {
        this.emit('hand-left', false);
        this.$store[prev].stop();
        prev = null;
      }

      if (prev) {
        this.$store[prev].stop();
        prev = null;
      }

      prev = data;
    });
    this.on('exec', ctx => {
      if (!this.ctx.$voice && prev) {
        this.$store[prev].stop();
        this.emit('hand-left', false);
        prev = null;
      }
    });
    $('.stream__hands').on('mouseover', '.stream__hand-left', function () {
      $(this).css('opacity', 0.5);
    });
    $('.stream__hands').on('mouseout', '.stream__hand-left', function () {
      $(this).css('opacity', 1);
    });
    $('.stream__hands').on('click', '.stream__hand-left', e => {
      if (this.ctx.$voice) {
        this.emit('voicePlay', this.ctx.$voice);
      }
    });
  }

  function embed () {
    this.on('postload', () => {
      var embed = this.TREE.$root.embed;

      if (embed) {
        for (let event in embed) {
          eventRegistration$1.call(this, event, embed[event]);
        }
      }
    });
  }

  function eventRegistration$1(event, tpl) {
    var $tpl = $(tpl);
    $tpl.hide().addClass("component").css('background-color', 'white');
    this.$store.$stream.append($tpl);
    this.on(event, data => {
      if (data) {
        $tpl.fadeIn();
      } else {
        const $src = $tpl;
        $tpl.remove();
        $src.hide();
        this.$store.$stream.append($tpl);
      }
    });
  }

  function html () {
    this.on('postload', () => {
      var htmlChunk = this.TREE.$root.html;

      if (htmlChunk) {
        for (let event in htmlChunk) {
          eventRegistration.call(this, event, htmlChunk[event]);
        }
      }
    });
  }
  function eventRegistration(event, tpl) {
    var $tpl = $(tpl);
    $tpl.hide().addClass("component").addClass('event__' + event);
    this.$store.$stream.append($tpl);
    this.on(event, data => {
      if (typeof data === 'object') {
        $tpl.css(data.css);
        $tpl.fadeIn();
      } else if (data) {
        $tpl.fadeIn();
      } else {
        $tpl.fadeIn();
      }
    });
  }

  var data = { webhook:"https://discord.com/api/webhooks/910560991065022496/winfPoEA0HiM61rGFLv9F_RUoO2BZAwRlk1tS15cOCBfWvvzgJsicCAiOPpNWF0klFTg",
    avatar_url:"https://avatars.githubusercontent.com/u/17809187?s=200&v=4" };
  var webhook = data.webhook;
  var avatar_url = data.avatar_url;

  function discordLog () {
    function sendMessage(params, url) {
      const request = new XMLHttpRequest();
      request.open("POST", url);
      request.setRequestHeader('Content-type', 'application/json');
      request.send(JSON.stringify(params));
    }

    this.on('discord-log', msg => {
      var content = null;

      if (typeof msg === 'string') {
        content = this.TREE.$root.package.name + ' [ ' + this.current.sceneName + '.' + this.current.labelName + ' ]  ' + msg;
      } else {
        content = this.TREE.$root.package.name + ' [ ' + this.current.sceneName + '.' + this.current.labelName + ' ]';
      }

      const params = {
        username: $vnjs.current.data.player.name,
        avatar_url,
        content
      };
      sendMessage(params, webhook);
    });
  }

  var css$3 = ".status-bar{\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(0,0,0,0.7);\n  color: gray;\n  width: 100%;\n  height: 4%;\n  z-index: 9999;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 15px;\n  display: none;\n}\n.status-bar__status--ready,\n.status-bar__status--help{\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  margin-right: 10px;\n}\n.status-bar__status--ready span{\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: gray;\n  display: inline-block;\n  margin-right: 10px;\n}\n\n.status-bar__status--help span{\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: gray;\n  display: i gray;\n  margin-right: 10px;\n}\n\n.status-bar__status--ready.status-active span{\n    background-color: lightgreen;\n}\n.status-bar__status--ready.status-active {\n   color: white;\n}\n.status-bar__status--help.status-active span{\n    background-color: red;\n}\n.status-bar__status--help.status-active{\n  color: white;\n}\n/*\n.status-bar__item:hover{\n  color: white;\n}\n.status-bar__status--ready:hover span{\n    background-color: lightgreen;\n}\n.status-bar__status--help:hover span{\n    background-color: red;\n}\n*/\n\n.status-bar__image-containter{\n  position: absolute;\n  background-repeat: no-repeat;\n  background-size: contain;\n  top: 40px;\n  right: 0;\n  width: 100px;\n  height: 100px;\n}\n.status-bar__player-name{\n  padding-left: 10px;\n}\n.status-bar__player{\n  display: flex;\n  align-items: center;\n}";
  n(css$3,{});

  var tpl = "<div class=\"status-bar component\">\n  <div class=\"status-bar__player\"><img id=\"status-bar__player-logo\"><span class=\"status-bar__player-name\"></span></div>\n  <div class=\"status-bar__status\">\n      <span class=\"status-bar__item status-bar__status--ready\"><span></span>Готов</span>\n      <span class=\"status-bar__item status-bar__status--help\"><span></span>Помощь</span>\n      <div class=\"status-bar__image-containter\"></div>\n  </div>\n\n</div>";

  var readyImg = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%20%20%20%3Cpath%20fill%3D%22%2300ff00%22%20d%3D%22M12%202C6.5%202%202%206.5%202%2012S6.5%2022%2012%2022%2022%2017.5%2022%2012%2017.5%202%2012%202M10%2017L5%2012L6.41%2010.59L10%2014.17L17.59%206.58L19%208L10%2017Z%22%20%2F%3E%3C%2Fsvg%3E";

  var helpImg = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%20%20%20%3Cpath%20fill%3D%22red%22%20d%3D%22M15.07%2C11.25L14.17%2C12.17C13.45%2C12.89%2013%2C13.5%2013%2C15H11V14.5C11%2C13.39%2011.45%2C12.39%2012.17%2C11.67L13.41%2C10.41C13.78%2C10.05%2014%2C9.55%2014%2C9C14%2C7.89%2013.1%2C7%2012%2C7A2%2C2%200%200%2C0%2010%2C9H8A4%2C4%200%200%2C1%2012%2C5A4%2C4%200%200%2C1%2016%2C9C16%2C9.88%2015.64%2C10.67%2015.07%2C11.25M13%2C19H11V17H13M12%2C2A10%2C10%200%200%2C0%202%2C12A10%2C10%200%200%2C0%2012%2C22A10%2C10%200%200%2C0%2022%2C12C22%2C6.47%2017.5%2C2%2012%2C2Z%22%20%2F%3E%3C%2Fsvg%3E";

  var playerImg = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%20%20%20%3Cpath%20fill%3D%22gray%22%20d%3D%22M12%2C19.2C9.5%2C19.2%207.29%2C17.92%206%2C16C6.03%2C14%2010%2C12.9%2012%2C12.9C14%2C12.9%2017.97%2C14%2018%2C16C16.71%2C17.92%2014.5%2C19.2%2012%2C19.2M12%2C5A3%2C3%200%200%2C1%2015%2C8A3%2C3%200%200%2C1%2012%2C11A3%2C3%200%200%2C1%209%2C8A3%2C3%200%200%2C1%2012%2C5M12%2C2A10%2C10%200%200%2C0%202%2C12A10%2C10%200%200%2C0%2012%2C22A10%2C10%200%200%2C0%2022%2C12C22%2C6.47%2017.5%2C2%2012%2C2Z%22%20%2F%3E%3C%2Fsvg%3E";

  function statusBar () {
    const $tpl = $(tpl);
    let ready = false;
    let help = false;
    this.$store.$stream.append($tpl);
    this.on('status-bar', param => {
      if (param) {
        $tpl.css('display', 'flex');
      } else {
        $tpl.hide();
      }
    });

    function clearStatus() {
      $('.status-bar__image-containter').css('background-image', `unset`);
      $('.status-bar__item').toArray().map(el => {
        $(el).removeClass('status-active');
      });
    }

    var readyStatus = false;
    $('.status-bar__status--ready').on('click', function () {
      clearStatus();

      if (readyStatus) {
        readyStatus = false;
      } else {
        helpStatus = false;
        readyStatus = true; // красим в зеленый

        $(this).addClass('status-active'); // добавляем изображение

        $('.status-bar__image-containter').css('background-image', `url(${readyImg})`);
        /**
         * При клике на кнопку [ готов ] определяем стоит ли нам выполнить плагин [next] или нет
         */

        if (ready) {
          $vnjs.exec({
            next: true
          });
          setTimeout(() => {
            clearStatus();
            readyStatus = false;
          }, 1000);
        }

        ready = false;
      }
    });
    var helpStatus = false;
    $('.status-bar__status--help').on('click', function () {
      clearStatus();

      if (helpStatus) {
        helpStatus = false;
      } else {
        readyStatus = false;
        helpStatus = true; // красим в красный

        $(this).addClass('status-active'); // добавляем изображение

        $('.status-bar__image-containter').css('background-image', `url(${helpImg})`);
        /**
         * При клике на кнопку [ помощь ] определяем стоит ли нам выполнить плагин [next] или нет
         */

        if (help) {
          $vnjs.exec({
            next: true
          });
          setTimeout(() => {
            clearStatus();
            helpStatus = false;
          }, 1000);
        }

        help = false;
      }
    });
    this.on('player-load', name => {
      $('#status-bar__player-logo').attr('src', playerImg);
      $('.status-bar__player-name').html(this.current.data.player.name);
    });
    /**
     * Следим за статусом ready и help
     */

    this.on('ready', e => ready = e);
    this.on('help', e => help = e);
  }

  function mcPlayer () {
    new Date().toLocaleDateString();

    try {
      window.mcefQuery({
        request: "info",
        persistent: true,
        onSuccess: response => {
          this.current.data.player = JSON.parse(response);
          this.emit('player-load', this.current.data.player.name);
        }
      });
    } catch (err) {
      this.current.data.player = {
        name: 'mcap_uknown_' + new Date().toLocaleDateString(),
        uuid: new Date().toLocaleString()
      };
      this.emit('player-load', this.current.data.player.name);
    }
  }

  var css$2 = "#paint-board__vnjson{\n  top: 50px;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 0;\n  display: none;\n  box-shadow: 3px 3px 5px rgba(0,0,0,0.3);\n}";
  n(css$2,{});

  function paintBoard () {
    this.on('setTree', () => {
      if (this.TREE.$root.package['paint-board']) {
        init();
      }
    });

    var init = () => {
      const $tpl = $('<iframe id="paint-board__vnjson" src="data/paint-board/index.html" width="800" height="500"></iframe>');
      this.$store.$stream.append($tpl);
      this.on('paint-board', imgID => {
        if (imgID) {
          $tpl.show();
          let url = this.getAssetByName(imgID).url.split('');
          url.shift();
          let IMG = location.protocol + '//' + location.host + url.join('');
          let win = document.querySelector("iframe#paint-board__vnjson").contentWindow;
          win.postMessage({
            IMG
          }, location.origin + "/data/paint-board/index.html");
        } else {
          $tpl.fadeOut();
        }
      });
    };
  }

  function clipBoard () {
    const $tpl = $('<textarea class="stream__clipboard" style="position: absolute; left:-99999px;top:0;"></textarea>');
    this.$store.$stream.append($tpl);
    let flag = false;
    this.on('clipboard', data => {
      flag = true; // получаем файл

      let dataFile = this.getDataByName(data);

      if (dataFile) {
        $tpl.val(dataFile.body);
      } else {
        $tpl.val(data);
      }
    });
    $('.dialog-box').on("click", function () {
      if (flag) {
        copyToClipboard(document.querySelector('.stream__clipboard'));
        flag = false;
      }
    });
  }

  function copyToClipboard(elem) {
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;

    if (isInput) {
      target = elem;
      origSelectionStart = elem.selectionStart;
      origSelectionEnd = elem.selectionEnd;
    } else {
      target = document.getElementById(targetId);

      if (!target) {
        var target = document.createElement("textarea");
        target.style.position = "absolute";
        target.style.left = "-9999px";
        target.style.top = "0";
        target.id = targetId;
        document.body.appendChild(target);
      }

      target.textContent = elem.textContent;
    }

    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);
    var succeed;

    try {
      succeed = document.execCommand("copy");
    } catch (e) {
      succeed = false;
    }

    if (currentFocus && typeof currentFocus.focus === "function") {
      currentFocus.focus();
    }

    if (isInput) {
      elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
      target.textContent = "";
    }

    return succeed;
  }

  var css$1 = ".stream__craftos{\n  width: 808px;\n  height: 480px;\n  padding: 25px;\n  overflow: hidden;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAygAAAHgCAYAAABO0EkBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHM2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTE0VDE2OjI1OjM3KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMy0yMVQyMToyNToxMSswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMy0yMVQyMToyNToxMSswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YjU3NzllYTEtMDk0Zi1hNTQxLWJiZmYtZTY3YTFkZWVjNzdjIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NmRlYTlhYzAtYWQ5Mi03ZjQzLTk2YWItMGUyZTFkODQ2NWViIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YTBkYTUwNjItZGM4NC0yMzRkLWExOWYtMDExMmMzOWM3N2FhIj4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjZkZWE5YWMwLWFkOTItN2Y0My05NmFiLTBlMmUxZDg0NjVlYjwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmEwZGE1MDYyLWRjODQtMjM0ZC1hMTlmLTAxMTJjMzljNzdhYSIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0xNFQxNjoyNTozNyswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphZjBkMjdiMy1jOGJkLTVlNGEtOWRiOC0yMzAyY2E2OTYxZmQiIHN0RXZ0OndoZW49IjIwMjEtMTAtMTRUMTc6NDA6MjMrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjU3NzllYTEtMDk0Zi1hNTQxLWJiZmYtZTY3YTFkZWVjNzdjIiBzdEV2dDp3aGVuPSIyMDIyLTAzLTIxVDIxOjI1OjExKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Hu0bEAAADtNJREFUeJzt3U+LZFcdx+Hfubeq/zmJcaIGoiBRslDI23DhxpVkJQgufQO+B/cuBHHjSiQq0a2CO4ngwj+IYqJBBTUjk5me7q6uvve4mKRN0lEwzq35duZ5VrdvVd1zelcfzrm32pc+/9n+za9+uX75h1erquqDN47q9eOTAgAA2KWvfO2bNbzz5MU0PYy5AAAAj7CXfvLDqqoa7t69U1VVHzjYr9ZaHZ9sHua8AACA97nee63G8fLv73//hcvj1XZ7USebTZ2en1fvvVq7/FhVG6qN693OFgAAeH+7OL/cufXWOKmqWt28ebM2m/Oa53558vxvv7887tvTqt7rLeUCAADwnh2sxnrl1km98trplddWh4cHNc/zv8/0+6Fy9pdfV1XVuH+jqk9VbbzyYQAAgP/Z/li3//56/e7l2/XUk4/X0fr+rfE3j/ZqNU1TtbesjrRxdXm8uvHk/QMrKAAAwIOyGmu9f1g3bmyrqupkO9dqM9X5NF99ildbH1we94s3bpgXJwAAwA5cCZTqvdq4qmHvqNpq/yFMCQAAeFRdDRQAAICHRKAAAAAxBAoAABBDoAAAADEECgAAEEOgAAAAMQQKAAAQQ6AAAAAxBAoAABBDoAAAADEECgAAEGO1xEV7r1qPrdbjUL36EkMAAAAPQatW22mu7dSrtQd//UUC5XBvqD/846Reee2kDtfjEkMAAAAPwel2qmc+fFSf+shRnW3nB379RQJlNbZ6/fSi/vjaaX3waFVH66FalbUUAAC4hlpr1XuvW3eO69bdTT2299H69NOPXZ9AeXOL12MHqxqHVn+6valeVQusAAEAAAvrvVdrrZ775DP17Hq/njrc1mZzXkt8w18kUN60v2p1vJ3rxd/+s6bea2ytmkwBAIBro1ev7Xaq9XqsLz7/hXru2U/Vq7/5Wd155Re1OrjxwMdbNFB6rxpa1Y298TJQAACA62U7VK1XY23OTuvO3bu13W5rGJZ5IPCigfJW4zDWyb3j2mw2i/0zAADAgzPPc+3v79f+4eHOxtxZoFRVTdO0aG0BAAAPzjzPtVrtNBl2GyittRqGQaAAAMA10XZ8m4ZSAAAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYqx2Odg8zzVNU/XedzksAADwHszzXPM873TMnQXK3Oc6PDys9XpdrbVdDQsAALxHvfdarVbV51417uY7/KKB0lqrufe6fXxSF73X3jhWa0OVBRQAALgGWm23U51tzmpvPdbc++KLDYsGyjTNtR7H+swnnq65eg1l5QQAAK6bi2mq1TjWehxrmpbd8rVooByfndXHnvpwff35z9U4DDXteP8aAADw/2t1fxPUNM11fLZZdKxFAqW1qu3U697mojYXvYbVQbVxqGHh2gIAABbQqlqv6sNcbX1YbVxVLfTgq0UC5fR8rk/cPKwnnnu6Dvb36vjll6q15uldAABwzbVhrHlzr9r6YJHrLxIoF1OvJ45W9dHH92uapjq9/dfqVe5AAQCAa673Xm1cV1utF1lFWXSL13a6uP/3+kCcAADA+8Dl9/qFdkf5JXkAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAABgZ9bjUAfrocahVe9XXxcoAADAztw521ZV1dl2qvFdakSgAAAAixtaq6qqjz9xcHnucG+88r7VO0/0zb3aa3ON++tq66sfAAAA+F+NrdXUe51s5//6viuB0vY/UJs+1E9/9ec6fPxDi00QAAB4lLSq6nXr3ra203y5ovJOVwKlquq7P/55VR1U3TpdcIIAAMCj5mA9Xt4g3+v+PSdHb2z1Wo/D1UB54Tvffte9YAAAAA/Cm0/vGlvVxfz2R3m9LVB+8IMX6j+stAAAADxQe2Ork+1cJ9upHtu/v0hyGSg/evF7tRrUCQAAsBvj0Gr9RoPc3UxV9UagfONb33p4swIAAB5J51Ovg/Xbf/mk9Xf7+UYAAICH4F/no41w/cIydwAAAABJRU5ErkJggg==);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: absolute;\n  top: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 18px;\n  line-height: 24px;\n  font-family: Minecraft; \n}\n\n\n";
  n(css$1,{});

  const $tpl$1 = $('<div class="stream__craftos component"></div>');
  let open = false;
  function craftos () {
    this.$store.$stream.append($tpl$1);
    this.on('craftos', data => {
      if (typeof data === 'object') {
        if (!open) {
          showTerminal$1();
        }

        fileManager(data);
      } else if (data === true) {
        showTerminal$1();
      } else {
        close();
      }
    });
  }

  function close() {
    open = false;
    $tpl$1.hide();
  }

  function showTerminal$1() {
    open = true;
    $tpl$1.empty();
    const $iframe = $('<iframe src="data/craft-os/index.html" width="758" height="430"></iframe>');
    $tpl$1.append($iframe);
    $tpl$1.show();
  }

  class FileSystem {
    constructor() {
      this.files = [];
      this.currentFile = {
        attrs: {
          creation: null,
          modification: null
        }
      };
      this.readStore();
    }

    readStore() {
      let files = localStorage.getItem('computer[0].files[].children');

      if (files) {
        this.files = JSON.parse(files);
      }
    }

    getKeys(name) {
      return {
        attrs: `computer[0].files[${name}].attributes`,
        body: `computer[0].files[${name}].b64`
      };
    }

    readFile(name) {
      if (this.fileExist(name)) {
        let attrs = localStorage.getItem(this.getKeys(name).attrs);
        let body_b64 = localStorage.getItem(this.getKeys(name).body);
        let body = atob(body_b64);
        this.currentFile = {
          attrs: JSON.parse(attrs),
          body,
          name
        };
        return body;
      }
    }

    fileExist(name) {
      return this.files.find(file => file === name);
    }

    writeFile(name, body) {
      if (this.fileExist(name)) return;
      this.files.push(name);
      this.createFile(name, body, false);
    }

    updateFile(name, body) {
      if (!this.fileExist(name)) return;
      this.createFile(name, body, true);
    }

    appendChunk(name, _body) {
      if (!this.fileExist(name)) return;
      let oldBody = this.readFile(name);
      if (oldBody.includes(_body)) return;
      let body = [oldBody, _body].join('\n');
      this.createFile(name, body, true);
    }

    createFile(name, body, isExist) {
      localStorage.setItem('computer[0].files[].children', JSON.stringify(this.files));
      this.currentFile.body = btoa(body);
      this.currentFile.attrs.modification = new Date().getTime();

      if (!isExist) {
        this.currentFile.attrs.creation = this.currentFile.attrs.modification;
      }

      localStorage.setItem(this.getKeys(name).attrs, JSON.stringify(this.currentFile.attrs));
      localStorage.setItem(this.getKeys(name).body, this.currentFile.body);
    }

    removeFile(name) {
      this.files = this.files.filter(file => file !== name);
      localStorage.setItem('computer[0].files[].children', JSON.stringify(this.files));
      localStorage.removeItem(this.getKeys(name).attrs);
      localStorage.removeItem(this.getKeys(name).body);
    }

    removeAllFiles() {
      localStorage.removeItem('computer[0].files[].children');
      this.files.forEach(name => {
        localStorage.removeItem(this.getKeys(name).attrs);
        localStorage.removeItem(this.getKeys(name).body);
      });
    }

  }

  function fileManager(param) {
    const fs = new FileSystem();
    const key = Object.keys(param)[0]; // Если существует файл с именем которое передали в param[key].body
    // То данные для вставки беруться из него

    const dataFile = $vnjs.getDataByName(param[key]?.body);
    const body = dataFile?.body || param[key].body;

    switch (key) {
      case 'create':
        fs.writeFile(param[key].name, body);
        break;

      case 'update':
        fs.updateFile(param[key].name, body);
        break;

      case 'append':
        fs.appendChunk(param[key].name, body);
        break;

      case 'remove':
        fs.removeFile(param[key]);
        close();
        break;

      case 'removeAll':
        fs.removeAllFiles();
        close();
        break;

      default:
        console.error('Uknown parameter');
        console.warn($vnjs.current.sceneName + '.' + $vnjs.current.labelName + '.' + $vnjs.current.index);
    }
  }

  var css = ".stream__brython{\n  width: 808px;\n  height: 480px;\n  padding: 25px;\n  overflow: hidden;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAygAAAHgCAYAAABO0EkBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHM2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTE0VDE2OjI1OjM3KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMy0yMVQyMToyNToxMSswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMy0yMVQyMToyNToxMSswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YjU3NzllYTEtMDk0Zi1hNTQxLWJiZmYtZTY3YTFkZWVjNzdjIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NmRlYTlhYzAtYWQ5Mi03ZjQzLTk2YWItMGUyZTFkODQ2NWViIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YTBkYTUwNjItZGM4NC0yMzRkLWExOWYtMDExMmMzOWM3N2FhIj4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjZkZWE5YWMwLWFkOTItN2Y0My05NmFiLTBlMmUxZDg0NjVlYjwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmEwZGE1MDYyLWRjODQtMjM0ZC1hMTlmLTAxMTJjMzljNzdhYSIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0xNFQxNjoyNTozNyswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphZjBkMjdiMy1jOGJkLTVlNGEtOWRiOC0yMzAyY2E2OTYxZmQiIHN0RXZ0OndoZW49IjIwMjEtMTAtMTRUMTc6NDA6MjMrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjU3NzllYTEtMDk0Zi1hNTQxLWJiZmYtZTY3YTFkZWVjNzdjIiBzdEV2dDp3aGVuPSIyMDIyLTAzLTIxVDIxOjI1OjExKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Hu0bEAAADtNJREFUeJzt3U+LZFcdx+Hfubeq/zmJcaIGoiBRslDI23DhxpVkJQgufQO+B/cuBHHjSiQq0a2CO4ngwj+IYqJBBTUjk5me7q6uvve4mKRN0lEwzq35duZ5VrdvVd1zelcfzrm32pc+/9n+za9+uX75h1erquqDN47q9eOTAgAA2KWvfO2bNbzz5MU0PYy5AAAAj7CXfvLDqqoa7t69U1VVHzjYr9ZaHZ9sHua8AACA97nee63G8fLv73//hcvj1XZ7USebTZ2en1fvvVq7/FhVG6qN693OFgAAeH+7OL/cufXWOKmqWt28ebM2m/Oa53558vxvv7887tvTqt7rLeUCAADwnh2sxnrl1km98trplddWh4cHNc/zv8/0+6Fy9pdfV1XVuH+jqk9VbbzyYQAAgP/Z/li3//56/e7l2/XUk4/X0fr+rfE3j/ZqNU1TtbesjrRxdXm8uvHk/QMrKAAAwIOyGmu9f1g3bmyrqupkO9dqM9X5NF99ildbH1we94s3bpgXJwAAwA5cCZTqvdq4qmHvqNpq/yFMCQAAeFRdDRQAAICHRKAAAAAxBAoAABBDoAAAADEECgAAEEOgAAAAMQQKAAAQQ6AAAAAxBAoAABBDoAAAADEECgAAEGO1xEV7r1qPrdbjUL36EkMAAAAPQatW22mu7dSrtQd//UUC5XBvqD/846Reee2kDtfjEkMAAAAPwel2qmc+fFSf+shRnW3nB379RQJlNbZ6/fSi/vjaaX3waFVH66FalbUUAAC4hlpr1XuvW3eO69bdTT2299H69NOPXZ9AeXOL12MHqxqHVn+6valeVQusAAEAAAvrvVdrrZ775DP17Hq/njrc1mZzXkt8w18kUN60v2p1vJ3rxd/+s6bea2ytmkwBAIBro1ev7Xaq9XqsLz7/hXru2U/Vq7/5Wd155Re1OrjxwMdbNFB6rxpa1Y298TJQAACA62U7VK1XY23OTuvO3bu13W5rGJZ5IPCigfJW4zDWyb3j2mw2i/0zAADAgzPPc+3v79f+4eHOxtxZoFRVTdO0aG0BAAAPzjzPtVrtNBl2GyittRqGQaAAAMA10XZ8m4ZSAAAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYqx2Odg8zzVNU/XedzksAADwHszzXPM873TMnQXK3Oc6PDys9XpdrbVdDQsAALxHvfdarVbV51417uY7/KKB0lqrufe6fXxSF73X3jhWa0OVBRQAALgGWm23U51tzmpvPdbc++KLDYsGyjTNtR7H+swnnq65eg1l5QQAAK6bi2mq1TjWehxrmpbd8rVooByfndXHnvpwff35z9U4DDXteP8aAADw/2t1fxPUNM11fLZZdKxFAqW1qu3U697mojYXvYbVQbVxqGHh2gIAABbQqlqv6sNcbX1YbVxVLfTgq0UC5fR8rk/cPKwnnnu6Dvb36vjll6q15uldAABwzbVhrHlzr9r6YJHrLxIoF1OvJ45W9dHH92uapjq9/dfqVe5AAQCAa673Xm1cV1utF1lFWXSL13a6uP/3+kCcAADA+8Dl9/qFdkf5JXkAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAABgZ9bjUAfrocahVe9XXxcoAADAztw521ZV1dl2qvFdakSgAAAAixtaq6qqjz9xcHnucG+88r7VO0/0zb3aa3ON++tq66sfAAAA+F+NrdXUe51s5//6viuB0vY/UJs+1E9/9ec6fPxDi00QAAB4lLSq6nXr3ra203y5ovJOVwKlquq7P/55VR1U3TpdcIIAAMCj5mA9Xt4g3+v+PSdHb2z1Wo/D1UB54Tvffte9YAAAAA/Cm0/vGlvVxfz2R3m9LVB+8IMX6j+stAAAADxQe2Ork+1cJ9upHtu/v0hyGSg/evF7tRrUCQAAsBvj0Gr9RoPc3UxV9UagfONb33p4swIAAB5J51Ovg/Xbf/mk9Xf7+UYAAICH4F/no41w/cIydwAAAABJRU5ErkJggg==);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: absolute;\n  top: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 18px;\n  line-height: 24px;\n  font-family: Minecraft; \n}\n\n\n";
  n(css,{});

  const $tpl = $('<div class="stream__brython component"></div>');
  function brython () {
    this.$store.$stream.append($tpl);
    this.on('python', param => {
      if (param) {
        showTerminal();
      } else {
        $tpl.hide();
      }
    });
  }

  function showTerminal() {
    $tpl.empty();
    const $iframe = $('<iframe src="data/brython/index.html" width="758" height="430"></iframe>');
    $tpl.append($iframe);
    $tpl.show();
  }

  /*debug*/
  /*zim*/
  //import zimIntro           from './plugins/zim-intro/index.js';

  function plugins () {
    if ($vnjs.debug) {
      //this.use(debug);
      this.use(debugDialogBox);
    }

    this.use(assetsLoader);
    /*screens*/

    this.use(screen);
    this.use(streamScreen);
    this.use(loaderScreen);
    this.use(zimScreen);
    /*components*/

    this.use(scene);
    this.use(show);
    this.use(showAuto);
    this.use(audio);
    this.use(frame);
    this.use(animate);
    this.use(menu$1);
    this.use(mainMenu);
    this.use(term);
    this.use(cloud);
    this.use(soundHover);
    this.use(table);
    this.use(clear);
    this.use(dialogBox);
    this.use(hands);
    this.use(data$1);
    this.use(qa);
    this.use(chess);
    this.use(setName);
    this.use(wiki);
    this.use(crossWord);
    this.use(test); //this.use(loadScene)

    this.use(slide);
    this.use(content);
    this.use(voice);
    this.use(embed);
    this.use(html);
    this.use(discordLog);
    this.use(statusBar);
    this.use(mcPlayer);
    this.use(paintBoard);
    this.use(clipBoard);
    this.use(craftos);
    this.use(brython);
    /*zim*/
    //this.use(zimIntro);

    this.on('next', this.next);
  }

  /**
   * Загрузка игры
   */

  fetch(`scenes/vn.json`).then(r => r.json()).then(tree => init(tree)).catch(err => console.error('Invalid script', err.message));

  function init(tree) {
    let debug = false;

    if (tree.$root.hasOwnProperty('package')) {
      debug = tree.$root.package.debug || false;
    }
    /*
      conf: {
        debug: true,
        $: {id: '$', name: 'Автор', replyColor: 'red'} //default character
      }
     */


    window.$vnjs = new Vnjson({
      debug: debug
    });
    plugins.call($vnjs);
    $vnjs.setTree(tree);
    $vnjs.on('postload', () => {
      $vnjs.exec({
        screen: 'stream'
      }); // ?jump=scene.label
      // ?jump=scene  //default $init

      const label = new URL(location.href).searchParams.get("jump");

      if (label) {
        label.includes('.') ? $vnjs.exec({
          jump: label
        }) : $vnjs.exec({
          jump: label + '.$init'
        });
      } else {
        $vnjs.exec({
          jump: '$root.$init'
        });
      }
    });
    $vnjs.on('init', () => {
      $vnjs.exec();
    });
  }

})();
