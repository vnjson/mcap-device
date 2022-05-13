(function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

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
      if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) {
        e.setAttribute(t[n], r.attributes[t[n]]);
      }
      var a = "prepend" === s ? "afterbegin" : "beforeend";
      return i.insertAdjacentElement(a, e), e;
    }
  }

  var css$u = "\r\n.debug-error{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 20px;\r\n  font-size: 20px;\r\n  z-index: 99999;  \r\n  background-color: #334;\r\n  justify-content: center;\r\n  align-items: center;\r\n  display: none;\r\n  font-family: Consolas;\r\n}\r\n\r\n.debug-error__modal{\r\n  background-color: #181818;\r\n  border-radius: 8px;\r\n  padding: 20px;\r\n  width: 80%;\r\n  height: 60%;\r\n  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.5);\r\n}\r\n.debug-error__modal::before{\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 10px;\r\n  background-color: brown;\r\n  border-radius: 8px 8px 0 0;\r\n}\r\n.debug-error__msg{\r\n  color: brown;\r\n  line-height: 28px;\r\n}\r\n.debug-error__msg:first-letter{\r\n  text-transform: capitalize;\r\n}\r\n\r\n.debug-error__path{\r\n  color: #cfa4ff;\r\n}\r\n.debug-error__pos{\r\n  color: skyblue;\r\n}\r\n.debug-error__code{\r\n  color: #e2aa53;\r\n}\r\n";
  n(css$u,{});

  var errors = {
    en: {
      pluginNotFound: 'Plugin <font color="deepskyblue">{ data }</font> not found',
      assetNotFound: 'Asset <font color="deepskyblue">{ data }</font> not found',
      menuOrJumpLeadsNowhere: 'Plugin  <font color="deepskyblue">menu</font>  or <font color="deepskyblue">jump</font>  leads nowhere',
      // yamljs errors
      'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line': 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line',
      'end of the stream or a document separator is expected': 'end of the stream or a document separator is expected',
      'bad indentation of a mapping entry': 'bad indentation of a mapping entry',
      'bad indentation of a sequence entry': 'bad indentation of a sequence entry',
      'can not read a block mapping entry; a multiline key may not be an implicit key': 'can not read a block mapping entry; a multiline key may not be an implicit key',
      'duplicated mapping key': 'duplicated mapping key',
      'can not read an implicit mapping pair; a colon is missed': 'can not read an implicit mapping pair; a colon is missed'
    },
    ru: {
      pluginNotFound: 'Плагин <font color="deepskyblue">{ data }</font> не найден',
      assetNotFound: 'Файл <font color="deepskyblue">{ data }</font> не найден',
      menuOrJumpLeadsNowhere: 'Некоректные параметры плагина <font color="deepskyblue">menu</font>  или <font color="deepskyblue">jump</font>. Маршрут не найден.',
      // yamljs errors
      'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line': 'неполная  пара сопостовлений; пропущен ключевой узел; Или за ним следует пустая строка без табуляции',
      'end of the stream or a document separator is expected': 'Ожидается конец потока или разделитель',
      'bad indentation of a mapping entry': 'Неправильный отступ записи сопоставления',
      'bad indentation of a sequence entry': 'Неправильный отступ записи последовательности',
      'can not read a block mapping entry; a multiline key may not be an implicit key': 'Не читается запись сопоставления блоков; многострочный ключ не может быть неявным ключом',
      'duplicated mapping key': 'Дублированный ключ сопоставления',
      'can not read an implicit mapping pair; a colon is missed': 'Пропущено двоеточие'
    }
  };

  var modalTpl = "<div class=\"debug-error\">\n                        <div class=\"debug-error__modal\">\n                            <p class=\"debug-error__msg\"></p>\n                            <p class=\"debug-error__path\"></p>\n                            <p class=\"debug-error__pos\"></p>\n                            <pre class=\"debug-error__code\"></pre>\n                        </div>\n                    </div>";
  var $modal = $(modalTpl);
  $('#screen').append($modal);

  var ErrorHandler = /*#__PURE__*/function () {
    function ErrorHandler() {
      var local = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';

      _classCallCheck(this, ErrorHandler);

      this.local = local;
      this.url = '/socket.io/socket.io.js';
      this.init();
    }

    _createClass(ErrorHandler, [{
      key: "init",
      value: function init() {
        var _this = this;

        this.dynamicallyLoadScript(this.url, function () {
          var socket = io();
          socket.on('yaml-error', function (err, sceneName, labelName) {
            if (err) {
              var path = "".concat(sceneName, ".").concat(labelName.replace(/.ya?ml/i, ''));
              var pos = "line ".concat(err.mark.line, " column ").concat(err.mark.column);
              var msg = ErrorHandler.getMessage(_this.local, err.reason);
              ErrorHandler.showModal(msg, path, err.mark.snippet, pos);
              return;
            }

            ErrorHandler.hideModal(); // перезагрузка браузера при сохранении файла

            location.reload();
          }); //socket.on("disconnect", () => {})
        });
      }
      /**
       * Так как я не хочу мусорить в index.html, что бы потом не вычищать
       * То скрипт для сокетов я подлючаю динамически
       * Не смог настроить babel, что бы async/await работали.
       * Необходимо поддерживать chrome 2015г.
       */

    }, {
      key: "dynamicallyLoadScript",
      value: function dynamicallyLoadScript(url, callback) {
        var script = document.createElement("script");
        script.src = url;
        script.onload = callback;
        document.head.appendChild(script);
      }
    }], [{
      key: "hideModal",
      value: function hideModal() {
        $modal.find('.debug-error__msg').html('');
        $modal.find('.debug-error__path').html('');
        $modal.find('.debug-error__pos').html('');
        $modal.find('.debug-error__code').html('');
        $modal.hide();
      }
    }, {
      key: "showModal",
      value: function showModal() {
        var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var snippet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var pos = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
        $modal.find('.debug-error__msg').html(msg);
        $modal.find('.debug-error__path').html(path);
        $modal.find('.debug-error__pos').html(pos);
        $modal.find('.debug-error__code').html(snippet);
        $modal.css('display', 'flex');
      }
      /**
       * По аналогии с yaml-снипетами от сборщика
       * Преобразую объект контекста в yaml - подобный синтаксис
       * @param  {Object} ctx   [Объект контекста]
       * @return {String}       [Возвращает снипет или пустую строку]
       */

    }, {
      key: "getSnippetFromCtx",
      value: function getSnippetFromCtx(ctx) {
        var snippet = '';
        if (typeof ctx === 'string') return snippet;

        for (var key in ctx) {
          var value = ctx[key]; // Проверяем является ли репликой value
          // Если ключ является персонажем, соответсвенно значение является репликой

          value = String(value).slice(0, 60);

          if (value.length === 60) {
            value = value.concat('...');
          } // Делаем yaml-подобную структуру


          snippet = "".concat(snippet, "<br/>").concat(key, ": <font color=\"#999\">").concat(value, "</font>");
        }

        return snippet;
      }
      /**
       * Подставляю переменную в строку описания ошибки
       * @param  {String} local     [Локализация]
       * @param  {String} codeError [Ключевое слово по которому я определяю сообщение ошибки]
       * @param  {String} data      [Переменная которую подставляю в строку ошибки]
       * @return {String}           [Сообщение о ошике]
       */

    }, {
      key: "getMessage",
      value: function getMessage() {
        var local = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
        var codeError = arguments.length > 1 ? arguments[1] : undefined;
        var data = arguments.length > 2 ? arguments[2] : undefined;

        if (errors[local].hasOwnProperty(codeError)) {
          var message = errors[local][codeError].replace(/{.{0,}}/gi, data);
          return message;
        }

        return codeError;
      }
    }]);

    return ErrorHandler;
  }();
  $modal.on('mousedown', function (e) {
    if (!$(e.target).hasClass('debug-error')) return;
    ErrorHandler.hideModal();
  });

  var local = 'ru';
  function debug () {
    var _this = this;

    if (!this.debug) return;
    new ErrorHandler(local);
    this.on('exec', function (ctx) {
      /**
       * Добавляем параметры в URI
       */
      // убрал сцену по умолчанию, потому что на неё постоянно прыгало

      /*
      if(this.current.sceneName!==''){
          history.pushState(null, null, `?jump=${this.current.sceneName}.${this.current.labelName}`);
      }
      */

      /**
       * Проверяем существует ли плагин с таким именем
       * Исключая выражения - null | -false | - Hello world!
       */
      if (!ctx) return;

      if (_typeof(ctx) === 'object') {
        Object.keys(ctx).forEach(function (event) {
          if (!/^_/ig.test(event) && !_this.plugins.hasOwnProperty(event)) {
            _this.emit('error', 'pluginNotFound', event);
          }
        });
      }
    });
    this.on('error', function (codeError, data) {
      var message = ErrorHandler.getMessage(local, codeError, data);
      var path = "".concat(_this.current.sceneName, ".").concat(_this.current.labelName);
      var snippet = ErrorHandler.getSnippetFromCtx(_this.ctx);
      ErrorHandler.showModal(message, path, snippet);
    });
    this.on('warn', function (codeError, data) {
      var codes = {
        NoWayOutOfTheLabel: "No way out of the label [ ".concat(_this.current.labelName, " ]")
      };
      console.log(codes[codeError]);
    });
  }

  var css$t = ".debug__dialog-box-controls{\n  background-color: wheat;\n  padding: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n}\n.debug__dialog-box-controls >div{\n  height: 70px;\n  width: 10%;\n  display: flex;\n  flex-direction: column;\n\n}\n.debug__checkbox-wrapper{\n  color: rgba(0,0,0,0.5);\n  background-color: burlywood;\n  border-radius: 4px;\n  padding: 3px 5px;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n}\n\n#debug__character{\n  width: 100%;\n  height: 22px;\n  color: black;\n  background-color: burlywood;\n  border-radius: 4px;\n  padding: 3px 5px;\n  text-align: center;\n  margin-top: 5px;\n}\n\n.debug__btn{\n  background-color: burlywood;\n  border-radius: 4px;\n  padding: 3px 5px;\n  cursor: pointer;\n  color: black;\n  width: 100%;\n  height: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px;\n  font-size: 12px;\n\n}\n\n\n#debug__reply{\n  width: 89.5%;\n  color: black;\n  background-color: burlywood;\n  border-radius: 4px;\n  padding: 3px 5px;\n  resize: unset;\n  height: 80px;\n  border: unset;\n  outline: unset;\n  caret-color: deepskyblue;\n}\n\n.debug__btn:hover{\n  background-color: rgba(0,0,0,0.3);\n}\n/**\n * \n */\n\n.debug__dialog-box {\n  z-index: 7000;\n  /*position: absolute;\n  bottom: -200px;*/\n  width: 1024px;\n  line-height: 32px;\n  height: 200px;\n\n  cursor: pointer;\n  display: block;\n  padding-top: 10px;\n  padding-left: 10px;\n  word-spacing: 10px;\n  display: block;\n  top: unset;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n\n.debug__dialog-box__name {\n  color: wheat;\n  font-size: 22px;\n  width: 100%;\n  font-weight: bold;\n  padding-left: 10px;\n  padding-bottom: 10px;\n}\n.debug__dialog-box__reply-wrapper{\n  position: relative;\n  max-width: 99%;\n}\n.debug__dialog-box__reply {\n  color: wheat;\n  font-size: 22px;\n  padding-left: 10px;\n  width: 100%; \n}\n\n.debug__dialog-box__container{\n  display: flex; \n  height: 100%; \n}\n.debug__dialog-box__avatar{\n  margin-top: 15px;\n  width: 150px;\n  height: 150px;\n  min-width: 150px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.debug__dialog-box__reply-wrapper{\n  position: relative;\n}\n\n";
  n(css$t,{});

  var tpl$e = "\n<div class=\"debug__dialog-box\">\n  <div class=\"debug__dialog-box__container\">\n        <div class=\"debug__dialog-box__avatar\"></div>\n        <div class=\"debug__dialog-box__reply-wrapper\">\n          <div class=\"debug__dialog-box__name\"></div>\n          <div class=\"debug__dialog-box__reply\"></div>\n        </div>\n  </div>\n</div>";

  var dialogBoxImage$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAADICAYAAAB26ZNJAAABbmlDQ1BpY2MAACiRdZE7SwNBFIU/oxLRSIqkELFIEcUiAVGQlBJBG7VIIvhqks1LyCbLboIEW8HGQrAQbXwV/gNtBVsFQVAEESt/gK9GwnrHDSRIMsvs/Tgz5zJzBlxzBU23usZAL5bN2Gw0sLS8EnC/4cKPjwiepGYZ8/GZBG3H9wMdqt6HVa/2+1qOvnTG0qCjR3hSM8yy8JTw3EbZULwj7NfyybTwsXDIlAMK3yg95fCr4pzDn4rNRGwaXKpnINfEqSbW8qYuPCoc1AsVrX4edRNPprgYlzoocwiLGLNECZCiwjoFyoSlFiWz1r6xP98CJfFo8jeoYoojR168IVEr0jUjNSt6Rr4CVZX7/zyt7MS4090The4X2/4YBvce1HZt++fEtmun0PkMV8WGvyQ5Rb5E321owSPwbsHFdUNL7cPlNgw8GUkz+Sd1ynRls/B+Dv3L4LuD3lUnq/o6Z4+Q2JQnuoWDQxiR/d61XxVkaBT4cFhYAAAACXBIWXMAAArwAAAK8AFCrDSYAAAFAUlEQVR4Xu3YMQHAIBDAwKf+pSEKCcwld3MUZM3MHgAAAOBp3y0AAAAA/s8AAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDuHwAlzNu7SaAAAAAElFTkSuQmCC";

  var $tpl$c = $(tpl$e);
  /**
   * controls
   */

  var tplControls = "<div class=\"debug__dialog-box-controls\">\n                        <div>\n                            <span class=\"debug__checkbox-wrapper\"><input  id=\"debug__hands\" type=\"checkbox\"> \u041A\u043D\u043E\u043F\u043A\u0438 </span>\n                            <input  id=\"debug__character\" type=\"text\" value=\"$\">\n\n                            <div class=\"debug__btn\"> -> </div>\n                        </div>\n                        <textarea id=\"debug__reply\" placeholder=\"text\"></textarea>\n                     </div>";
  var $tplControls = $(tplControls);
  function debugDialogBox () {
    $tpl$c.css('background-image', "url(".concat(dialogBoxImage$1, ")"));
    $('.game').append($tplControls);
    /**/

    $('.game').append($tpl$c);
    $('.debug__btn').on('click', function () {
      var cid = $('#debug__character').val();

      if (cid === '') {
        cid = '$';
      }

      var character = $vnjs.getCharacterById(cid);
      var reply = $('#debug__reply');
      print(character, reply.val());
    });
  }

  function print(character, reply) {
    var replyWrapper = $tpl$c.find('.debug__dialog-box__reply-wrapper');
    var checkedHands = $('#debug__hands').prop('checked');

    if (character.avatar && checkedHands) {
      replyWrapper.css('width', '75%');
      $tpl$c.find('.debug__dialog-box__avatar').show().css({
        backgroundImage: "url('".concat($vnjs.getAssetByName(character.avatar).url, "')")
      });
      $tpl$c.find('.debug__dialog-box__name').html(character.name).css({
        color: character.nameColor
      });
      $tpl$c.find('.debug__dialog-box__reply').html(reply).css({
        color: character.replyColor
      });
    }

    if (!character.avatar && !checkedHands) {
      replyWrapper.css('width', 'auto');
      $tpl$c.find('.debug__dialog-box__avatar').hide();
      $tpl$c.find('.debug__dialog-box__name').html(character.name).css({
        color: character.nameColor
      });
      $tpl$c.find('.debug__dialog-box__reply').html(reply).css({
        color: character.replyColor
      });
    }

    if (character.avatar && !checkedHands) {
      replyWrapper.css('width', 'auto');
      $tpl$c.find('.debug__dialog-box__avatar').show().css({
        backgroundImage: "url('".concat($vnjs.getAssetByName(character.avatar).url, "')")
      });
      $tpl$c.find('.debug__dialog-box__name').html(character.name).css({
        color: character.nameColor
      });
      $tpl$c.find('.debug__dialog-box__reply').html(reply).css({
        color: character.replyColor
      });
    }

    if (!character.avatar && checkedHands) {
      replyWrapper.css('width', '90%');
      $tpl$c.find('.debug__dialog-box__avatar').hide();
      $tpl$c.find('.debug__dialog-box__name').html(character.name).css({
        color: character.nameColor
      });
      $tpl$c.find('.debug__dialog-box__reply').html(reply).css({
        color: character.replyColor
      });
    }

    if (reply) {
      setCharacterToReply.call($vnjs, reply, character.replyColor);
    }
  }

  function setCharacterToReply(reply, replyColor) {
    var characterAliaces = reply.match(/(@\w+)|(@\$.*?[\s])/gi);

    if (characterAliaces) {
      var newReply = reply;
      characterAliaces.forEach(function (id) {
        var cid = id.replace('@', '').trim();
        var character = $vnjs.getCharacterById(cid);

        if (character) {
          newReply = newReply.replace(id, "<span class=\"debug__dialog-box__reply-character-name\" style=\"color: ".concat(character.nameColor, "\">").concat(character.name, "</span> "));
          /*пробел на конце нужен из за спец символов $! которые получаю вместе с пробелом*/
        }
      });
      $tpl$c.find('.debug__dialog-box__reply').html(newReply).css({
        color: replyColor
      });
    }
  }

  var css$s = "#loader {\n  background: black;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: white;\n  display: none;\n  align-items: center;\n  justify-content: center;\n}\n\n.loader {\n  color: wheat;\n  font-family: Consolas, Menlo, Monaco, monospace;\n  font-weight: bold;\n  font-size: 100px;\n  opacity: 0.8;\n}\n.loader span {\n  display: inline-block;\n  animation: pulse 0.4s alternate infinite ease-in-out;\n}\n.loader span:nth-child(2) {\n  animation-delay: 0.4s;\n}\n\n@keyframes pulse {\n  to {\n    transform: scale(0.8);\n    opacity: 0.5; \n  } \n}\n";
  n(css$s,{});

  var tpl$d = "<div id=\"loader\">\n    <div class=\"loader\"><span>{</span><span>}</span></div>\n</div>";

  var $tpl$b = $(tpl$d);
  function assetsLoader () {
    var _this = this;

    $('#screen').append($tpl$b);

    var getAssets = function getAssets(_) {
      _this.emit('preload');

      var i = 0;

      var load = function load(_) {
        var asset = _this.current.assets[i];

        if (/\.mp3|\.wav|\.ogg/i.test(asset.url)) {
          var sound = new Howl({
            src: asset.url
          });
          sound.on('end', function () {
            return _this.emit('audioEnd', asset.name);
          });
          sound.on('load', function (_) {
            _this.$store[asset.name] = sound;

            if (_this.current.assets.length - 1 >= ++i) {
              _this.emit('load', asset);

              load();
            } else {
              _this.emit('postload');
            }
          });
          sound.on('loaderror', function () {
            console.error("File not found [ ".concat(asset.name, " ]"));
          });
        } else if (/\.png|\.jpg|\.jpeg|\.webp|\.gif/i.test(asset.url)) {
          var _this$TREE$$root;

          if ((_this$TREE$$root = _this.TREE.$root) !== null && _this$TREE$$root !== void 0 && _this$TREE$$root["package"]) {
            var _this$TREE$$root$pack;

            if ((_this$TREE$$root$pack = _this.TREE.$root["package"]) !== null && _this$TREE$$root$pack !== void 0 && _this$TREE$$root$pack.preload) {
              if (_this.current.assets.length - 1 >= ++i) {
                if (_this.TREE.$root["package"].preload) {
                  var img = new Image();
                  img.src = asset.url;

                  img.onerror = function () {
                    _this.$store[asset.name] = img;

                    _this.emit('load', asset);

                    console.error('Image not found');
                    load();
                  };

                  img.onload = function () {
                    _this.$store[asset.name] = img;

                    _this.emit('load', asset);

                    load();
                  };
                } else {
                  _this.$store[asset.name] = asset.url;
                  load();
                }
              } else {
                _this.emit('postload');
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

    var setAllAssets = function setAllAssets() {
      for (var _i = 0, _Object$entries = Object.entries(_this.TREE); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2);
            _Object$entries$_i[0];
            var body = _Object$entries$_i[1];

        _this.current.assets = _this.current.assets.concat(body.assets);
      }
      /**
       * Загрузка ресурсов происходит только тогда, когда есть ресурсы
       */

      if (_this.current.assets.length > 0) {
        getAssets();
      }
      /**
       * Если ресурсов нет, то эмулируем событыия, будто ресурсы есть
       * [ postlaod ] - Является важным событием, так как первый прыжок совершается
       * после этого события. Так же для коректной работы некоторых плагинов.
       * Которым требуются загруженные ресурсы.
       */
      else {
        setTimeout(function () {
          _this.emit('preload');

          _this.emit('load');

          _this.emit('postload');
        }, 0);
      }
    };
    /**
     * Получили vn.json
     */


    this.on('setTree', setAllAssets);
    /**
     * Отображаем прелоэдер
     */

    this.on('preload', function () {
      $tpl$b.css('display', 'flex');
    });
    this.on('load', function () {});
    this.on('postload', function () {
      $tpl$b.fadeOut();
    });
  }

  var css$r = "#screen {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAL0lEQVR4AWM8ZsOAF1BNAasXA8PvbSASjUYo+L0NXS9EnJAVhE0gqGCEuIFgXAAA5aUvR45cttUAAAAASUVORK5CYII=);\n  position: relative;\n  overflow: hidden;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n";
  n(css$r,{});

  function screen () {
    var _this = this;

    var click = false;
    this.$store.$screen = $('#screen');
    this.on('screen', function (id) {
      if (id.onClick === true) {
        /**
         * При повторном вызове плагина с параметром onClick почему то dialog-box
         * не успевает скрыться. Срабатывает слушатель click
         */
        setTimeout(function () {
          click = true;
        }, 300);
      }
    });
    this.$store.$screen.on('click', function () {
      if (click) {
        click = false;

        _this.exec({
          next: true
        });
      }
    });
  }

  var css$q = ".dialog-box {\n  z-index: 7000;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  line-height: 32px;\n  height: 200px;\n\n  cursor: pointer;\n  display: block;\n  padding-top: 10px;\n  padding-left: 10px;\n  word-spacing: 10px;\n  display: none;\n  top: unset;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n\n.dialog-box__name {\n  color: wheat;\n  font-size: 22px;\n  width: 100%;\n  font-weight: bold;\n  padding-left: 10px;\n  padding-bottom: 10px;\n}\n\n.dialog-box__reply {\n  color: wheat;\n  font-size: 22px;\n  padding-left: 10px;\n  width: 100%; \n}\n\n.dialog-box__reply-end-point{\n\n  display: inline-block;\n\n}\n.dialog-box__reply-end-point::before{\n  content: '';\n  position: absolute;\n\n  left: 10px;\n  width: 7px;\n  height: 7px;\n  background-color: silver;\n  opacity: 0.7;\n  animation-duration: 0.7s;\n  animation-name: end-point;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n@keyframes end-point {\n  from {\n    top: -10px;\n    opacity: 0.1;\n  }\n  to {\n    top: -20px;\n    opacity: 0.7;\n  }\n}\n\n.dialog-box__container{\n  display: flex; \n  height: 100%; \n}\n.dialog-box__avatar{\n  margin-top: 15px;\n  min-width: 150px;\n  width: 150px;\n  height: 150px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  display: none;\n}\n.dialog-box__avatar--show{\n  display: block;\n}\n\n.dialog-box__reply-wrapper{\n  position: relative;\n  max-width: 99%;\n}\n";
  n(css$q,{});

  var tpl$c = "<div class=\"dialog-box component\">\n  <div class=\"dialog-box__container\">\n        <div class=\"dialog-box__avatar\"></div>\n        <div class=\"dialog-box__reply-wrapper\">\n          <div class=\"dialog-box__name\"></div>\n          <div class=\"dialog-box__reply\"></div>\n        </div>\n  </div>\n</div>";

  var dialogBoxImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAADICAYAAAB26ZNJAAABbmlDQ1BpY2MAACiRdZE7SwNBFIU/oxLRSIqkELFIEcUiAVGQlBJBG7VIIvhqks1LyCbLboIEW8HGQrAQbXwV/gNtBVsFQVAEESt/gK9GwnrHDSRIMsvs/Tgz5zJzBlxzBU23usZAL5bN2Gw0sLS8EnC/4cKPjwiepGYZ8/GZBG3H9wMdqt6HVa/2+1qOvnTG0qCjR3hSM8yy8JTw3EbZULwj7NfyybTwsXDIlAMK3yg95fCr4pzDn4rNRGwaXKpnINfEqSbW8qYuPCoc1AsVrX4edRNPprgYlzoocwiLGLNECZCiwjoFyoSlFiWz1r6xP98CJfFo8jeoYoojR168IVEr0jUjNSt6Rr4CVZX7/zyt7MS4090The4X2/4YBvce1HZt++fEtmun0PkMV8WGvyQ5Rb5E321owSPwbsHFdUNL7cPlNgw8GUkz+Sd1ynRls/B+Dv3L4LuD3lUnq/o6Z4+Q2JQnuoWDQxiR/d61XxVkaBT4cFhYAAAACXBIWXMAAArwAAAK8AFCrDSYAAAFAUlEQVR4Xu3YMQHAIBDAwKf+pSEKCcwld3MUZM3MHgAAAOBp3y0AAAAA/s8AAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDAAAAAAIMAAAAAAgwAAAAACAAAMAAAAAAgwAAAAACDAAAAAAIMAAAAAAgAADAAAAAAIMAAAAAAgwAAAAACDAAAAAAIAAAwAAAAACDuHwAlzNu7SaAAAAAElFTkSuQmCC";

  var DialogBox = /*#__PURE__*/function () {
    function DialogBox(param) {
      _classCallCheck(this, DialogBox);

      this.$vnjs = param.$vnjs;
      /*Tags*/

      this.dialogBoxTag = document.querySelector(param.dialogBoxSelector);
      this.characterNameTag = document.querySelector(param.characterNameOutputSelector);
      this.replyTag = document.querySelector(param.replyOutputSelector);
      this.characterAvatarTag = document.querySelector(param.characterAvatarSelector);
      this.replyWrapperTag = document.querySelector(param.replyWrapperSelector);
      /**/

      this.classNameEndPoint = param.classNameEndPoint;
      this.classNameLetter = param.classNameLetter;
      this.classNameCharacterNameInReply = param.classNameCharacterNameInReply;
      this.delay = param.delay;
      this.alpha = param.alpha;
      this.endPoint = param.endPoint;
      this.character;
      this.reply;
      this.index = 0;
      this.interval; // небходимы для того, что бы не ломать html теги при разбивании на отдельные символы

      this.letterInclude = true;
      this.letterExlude = false; // текущий символ

      this.letter;
    }

    _createClass(DialogBox, [{
      key: "print",
      value: function print(character) {
        var reply = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        this.reset();
        this.character = character; //проверяем сущесвуют ли внутри реплики ссылки на персонажей

        this.reply = this.replaceCharacterLink(reply); // Если скорость вывода символов равна нулю, то строка не разбивается на символы

        if (this.delay > 0) {
          this.replyOutputBySingleLetter();
        } else {
          this.outputToHTML();
        }
      }
      /**
       * Посимвольный вывод текста
       */

    }, {
      key: "replyOutputBySingleLetter",
      value: function replyOutputBySingleLetter() {
        // Перед открывающей скобкой ставим пробел.
        // Это помогает избежать бага когда между двумя тегами ( >< ) отсутсуют символы
        // А так же, если реплика начинается с открывающей угловой скобки ( < )
        this.reply = this.reply.replaceAll('<', ' <').split(''); // Убираем лишние пробелы.
        // Из за того, что  встречается несколько пробелов вывод символов идёт рвано
        // Так как затрачивается время на отрисовку пробелов завернутых в <span>
        // А визуально их не видно. Так как браузер обычные пробелы съедает

        this.reply = this.reply.join('').replaceAll(/ {2,}/gi, ' ')
        /*убираем пробелы больше одного подряд*/
        .replaceAll(' </span>', '</span>')
        /*убираем проел в конце имени*/
        .split(''); // пробигаемся по массиву символов методом map
        // И соеденяем массив полученных символов завёрнутых в <span> в одну реплику 

        this.reply = this.reply.map(this.parse.bind(this)).join(''); // выводим готовый реузльтат

        this.outputToHTML(); // Запускаем посимвольное изменение прозрачности

        this.startOutputReply();
      }
    }, {
      key: "outputToHTML",
      value: function outputToHTML() {
        /**
         * Определяем, есть ли у текущего персонажа аватар
         * Если есть, то отображаем его
         */
        if (this.character.avatar) {
          this.characterAvatarTag.style.backgroundImage = "url('".concat(this.$vnjs.getAssetByName(this.character.avatar).url, "')");
          this.characterAvatarTag.classList.add('dialog-box__avatar--show');
        } else {
          this.characterAvatarTag.classList.remove('dialog-box__avatar--show');
        } // output character name


        this.characterNameTag.style.color = this.character.nameColor;
        this.characterNameTag.innerHTML = this.character.name; // output reply

        this.replyTag.style.color = this.character.replyColor;
        this.replyTag.innerHTML = this.reply;
      }
      /**
       * Заменяем ссылку на персонажа его именем
       */

    }, {
      key: "replaceCharacterLink",
      value: function replaceCharacterLink(reply) {
        // проверяем есть ли ссылка на персонажа в реплике
        var characterAliaces = reply.match(/@\w+|@\$.*?[\s]|@\$/gi);

        if (characterAliaces) {
          var len = characterAliaces.length;

          for (var i = 0; i < len; i++) {
            var id = characterAliaces[i]; // получаем id персонажа

            var cid = id.replace('@', '').trim(); // получаем персонажа по id

            var character = this.$vnjs.getCharacterById(cid);

            if (character) {
              // заменяем ссылку на персонажа именем персонажа
              reply = reply.replace(id, "<span class=\"".concat(this.classNameCharacterNameInReply, "\" style=\"color: ").concat(character.nameColor, "\">").concat(character.name, "</span>"));
            }
          }
        }

        return reply;
      }
      /**
       * Вызывается в качестве callback функции метода map
       * при переборе разделенной на символы входящей строки.
       * @param {String} letter текущий сивол
       */

    }, {
      key: "parse",
      value: function parse(letter) {
        this.letter = letter; // проверяем есть ли html теги в реплике

        this.analyzeLetter(this.letter);
        var tpl = "<span class=\"".concat(this.classNameLetter, "\" style=\"opacity: ").concat(this.alpha, "\">").concat(this.letter, "</span>");

        if (this.letterInclude) {
          return tpl;
        }

        return this.letter;
      }
      /**
       * Проверяем символ на html теги.
       * Если таковые присутсвуют, то останавливаем посимвольный вывод текста.
       * Что бы не нарушать целостность html разметки. 
       * Найдя закрывающую угловую скобку, переключаем режим обратно в посимвольный вывод текста
       * @param {String} letter текущий сивол
       */

    }, {
      key: "analyzeLetter",
      value: function analyzeLetter(letter) {
        switch (letter) {
          case '<':
            this.letterInclude = false;
            break;

          case '>':
            this.letterExlude = true;
            break;

          default:
            if (this.letterExlude) {
              this.letterInclude = true;
              this.letterExlude = false;
            }

        }
      }
      /**
       * Получаем все теги в которые были завёрнуты буквы.
       * И меняем им прозрачность на 1. Эмулируя посимвольный вывод текста.
       */

    }, {
      key: "startOutputReply",
      value: function startOutputReply() {
        var _this = this;

        // получаем все теги в которые обёрныты отдельные символы
        var letters = this.replyTag.querySelectorAll('.' + this.classNameLetter);
        var len = letters.length; // отображаем каждый символ по отдельности

        this.interval = setInterval(function () {
          if (letters.length > 0) {
            letters[_this.index++].style.opacity = 1;
          }

          if (_this.index >= len) {
            _this.onEndOutputReply();
          }
        }, this.delay);
      }
    }, {
      key: "onEndOutputReply",
      value: function onEndOutputReply() {
        if (this.endPoint) {
          this.replyTag.innerHTML += "<span class=\"".concat(this.classNameEndPoint, "\"></span>");
        }

        this.reset();
      }
    }, {
      key: "clear",
      value: function clear() {
        this.characterNameTag.innerHTML = '';
        this.replyTag.innerHTML = '';
        this.characterAvatarTag.style.backgroundImage = 'unset';
      }
    }, {
      key: "disabled",
      value: function disabled(flag) {
        if (flag) {
          this.dialogBoxTag.style['pointer-events'] = 'none';
        } else {
          this.dialogBoxTag.style['pointer-events'] = 'all';
        }
      }
    }, {
      key: "reset",
      value: function reset() {
        this.index = 0;
        this.reply = '';
        clearInterval(this.interval);
      }
    }]);

    return DialogBox;
  }();

  function dialogBox () {
    var _this = this;

    var $tpl = $(tpl$c);
    $tpl.css('background-image', "url(".concat(dialogBoxImage, ")"));
    this.$store.$screen.append($tpl); // при клике по диалоговому окну, продвигаемся дальше по yaml скрипту

    $tpl.on('mousedown', function (e) {
      return _this.next();
    });
    var dBox = new DialogBox({
      $vnjs: $vnjs,
      delay: 0,
      alpha: 0,
      endPoint: false,
      dialogBoxSelector: '.dialog-box',
      characterNameOutputSelector: '.dialog-box__name',
      characterAvatarSelector: '.dialog-box__avatar',
      replyWrapperSelector: '.dialog-box__reply-wrapper',
      replyOutputSelector: '.dialog-box__reply',
      classNameLetter: 'dialog-box__letter',
      classNameCharacterNameInReply: 'dialog-box__reply-character-name',
      classNameEndPoint: 'dialog-box__reply-end-point'
    });
    this.on('postload', function () {
      var _this$TREE$$root$pack;

      var conf = (_this$TREE$$root$pack = _this.TREE.$root["package"]) === null || _this$TREE$$root$pack === void 0 ? void 0 : _this$TREE$$root$pack['dialog-box'];

      if (conf) {
        dBox.delay = conf.delay || dBox.delay;
        dBox.alpha = conf.alpha || dBox.alpha;
        dBox.endPoint = conf.endPoint || dBox.endPoint;
      }
    });
    this.on('character', function (character, reply) {
      dBox.print(character, reply);
    });
    this.on('dialog-box', function (param) {
      if (param === true) {
        dBox.disabled(false);
        $tpl.show();
      } else if (param === 'clear') {
        dBox.disabled(false);
        dBox.clear();
      } else if (param === 'disabled') {
        dBox.disabled(true);
      } else {
        $tpl.hide();
      }
    });
  }

  var css$p = ".stream__hands {\n    position: absolute;\n    z-index: 9999;\n    opacity: 0.8;\n    top: unset;\n    right: 0;\n    bottom: 10px;\n    display: none; \n    height: 185px;\n\n  }\n.stream__hands .stream__hand {\n    width: 95px;\n    height: 95px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGZmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTExLTA1VDEyOjM5OjM0KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTExLTA1VDEyOjM5OjM0KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMS0wNVQxMjozOTozNCswMzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0ZDZhODRkYi1kYWE5LTE3NDYtOWYxZS1iMjE4ODRiZDRmNTkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphMmY2NzgyMy03MTY2LTRhNGYtOGMyMC04N2FlNzQ5YzJmZTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MmI1MTYxMC1kMjQ0LTkzNGYtYjBmNS1jMjk1ZjJlNzY5OTQiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MmI1MTYxMC1kMjQ0LTkzNGYtYjBmNS1jMjk1ZjJlNzY5OTQiIHN0RXZ0OndoZW49IjIwMjEtMTEtMDVUMTI6Mzk6MzQrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGQ2YTg0ZGItZGFhOS0xNzQ2LTlmMWUtYjIxODg0YmQ0ZjU5IiBzdEV2dDp3aGVuPSIyMDIxLTExLTA1VDEyOjM5OjM0KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZWIwNzk3Mi1hMTdlLTA0NGYtYWIxYi04MDExN2JmYWYzODM8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6BgqWgAAAF1klEQVR4nOVb247TMBA9YzvOZcWyVYWQeOEBxHfzA7zwzCfwD0gIgQQS0E1308Q3Hrr2Ote2CFiSHqlSktpJ5oxnMh57yDmHcwZ76Bd4aJw9ASI+efPmjcvzHF++fMHV1RX8sZQSQtw35Zxju91is9mAcw4iAgAYY7BarXBxcQHnHL5//46qqsA5B2OHuT7VHKfaExGUUrDWIs9zvH//HsYYEBFev35NgwTc3t7CWou6rlvHl5eXLQKEEFBKIUmSlnDGGGRZhjzP4ZxDmqYwxoBzDs75bwvknAMR9f4P5wQQqPVfrJQkSaC1hlIqXB8kgDEGxhiIqHX89evXlgCcc1RVhZubmyC8cw7GGBhjUJYlnHMoyxK73e4o4aeI8MITUUsAay2IAGcBh+E+ngTfd5IArz0pJd6+fRu03u1krYWUEmmawjmHpmnQNE1o5x+cJEl4aF3X0FqDiFqEGGPCsb/uyfTP5pzDOQchBGQqQz+jNRhjaGqFRjUtxRljsF6vkec5rLXh3pMExMM+TVMwxiCEQJqmrU7OOUgpkSQJAKBpGtR13WPYmwcRYbfbQd+9cOwPrLXhuDua/DXGWCAgzdJAgFZqkgD/foyx000AAKSU2G63+PjxY48AIUQYIUqpoN3u/Twp3iHFgk4REJuBJ4BzDpGI0M8aAyIGrTS00YEAf48XL15gvV4HwQ+agJQyaJaIUBQFPnz4gHfv3mGOWK1WeP78OTabTU+5HqMjwDc81YH9TyAiaK3vnCUNfopbBNzc3EBrjd1uB2stjDEnf5v/Jwghwqg2xqBpmh4JLQJ+/PgBKSWur6+D04htdG5IkgRZlu0d5p1iuyO6Nya8xofsZW7wznRKia0R8OjRI6RpCqVUGP5zNoEYQggkSTJtAo8fP0ZRFKiqahEExM58jIBRE3DOwdl5ExDDK7MrT2sEbDabMBHK8gwyu4/25o6jCNhut6jrGlVVIU1TyLQ9DZ4zxghomQDnHEKIEHpiGaN/Ei0C9gwBzlk0dY26rqGUeqh3+6PwUe5BJwjsidBaQysFY/Q/ecG/jbHJ0GieaqzD0tAjYC8vdX7LwEkj4Fxw9gQs4yN/BBhjrRR+uP5A7/PPcfJX4FzQMgHPjk9FH7ui878i1vpYTnC+0v0hLJ6AQ8Fc7yvgG1trYa2ddT4gyzIURRGSO03THM4JLgmxLxvDogkwxkApBaXU6EhedCB0fX2Nb9++oSzLsDw2mRCJMZZBmROOkWE0KbqEOMCHv/GyexctE/DLYcD9XoE5J0WllOErQESDCyQHTWDuONkEloqj9gcc02FecOG3nw9wMHZGOcFjZBgcAT4r7Le+zBXeqd/vc9in/WO0CPDOwm+Umvu6QKxE54bnNYv2AXF+wzkbtsrEWHQo7CdDRAQpUwy5vIUTwMC5ABGDlBk474u7+Djg3u5d53yPnhNcSgR4Dwei/WbOeDuvxyABS4RSCnVdH7c6vET4zPBZZYXjT/kZL4xMr3CPEuAzwnOPBGObHwrqek7QR0tXV1cQQuDVq1d49uzZXcUGcGi/wH6YhbPJh8fPJSKkaRoSF3ESo7sVn4hCkYZzDhcXFyiKIrT1iY+nT5+iLEsAe4Wqu/qCUQL8yzDGQpHEer3Gy5cvAwFtQfpC/S4BjDEURdETeqjQgTGGqqpwe3sL5xxWqxUuLy+DkL59WZao6xpCiOO2yeV5DiFEYJExBqVUqAH62wTEWvdC+NR2l4DdbhcIEEK0+vn21tqw6y1JEhhjpkfAkydPQqmc1vpuFuXw8+fPAUH3oaYXYKiiq7XlLkK8DT/O03lNMcYg5b42SGsdynHie8cJ28+fP+PTp09B6O7zfNWY7ztKQFwz5Bv7ffbdgqi4AKH7UL/VTko5SEBsp3HRlM/beyJ826qqegT4oi0AYeo+Nspih350xUis1aHvZ3yt/x/gHBvs1yVvqDYoDliGAphuHWE86xuKZON79d51qaHvsTiDQGgaZ0/ALy4XCMLKcyfBAAAAAElFTkSuQmCC);\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    z-index: 100;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n.stream__hands .stream__hand-left {\n    width: 60px;\n    height: 60px;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat; \n}\n.stream__hands .stream__hand-right {\n    width: 60px;\n    height: 60px;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat; \n}\n\n";
  n(css$p,{});

  var tpl$b = "<div class=\"stream__hands component\">\n    <div class=\"stream__hand\">\n        <div class=\"stream__hand-left\"></div>\n    </div>\n    <div class=\"stream__hand\">\n        <div class=\"stream__hand-right\"></div>\n    </div>\n</div>";

  var $tpl$a = $(tpl$b);
  function hands () {
    var _this = this;
    this.$store.$screen.append($tpl$a);
    var isShow = false;
    this.on('hand-left', function (id) {
      if (id) {
        isShow = true;
        $tpl$a.show();
        $tpl$a.find('.stream__hand-left').css('background-image', "url('".concat(_this.getAssetByName(id).url, "')"));
      } else {
        $tpl$a.find('.stream__hand-left').css('background-image', "unset");
      }
    });
    this.on('hand-right', function (id) {
      if (id) {
        isShow = true;
        $tpl$a.show();
        $tpl$a.find('.stream__hand-right').css('background-image', "url('".concat(_this.getAssetByName(id).url, "')"));
      } else {
        $tpl$a.find('.stream__hand-right').css('background-image', "unset");
      }
    });
    this.on('hands', function (data) {
      if (data) {
        isShow = true;
        $tpl$a.show();
      } else {
        isShow = false;
        $tpl$a.hide();
      }
    });
    var replyWrapper = $('.dialog-box__reply-wrapper');
    this.on('character', function (character, reply) {
      // если аватар есть и руки отображены
      if (character.avatar && isShow) {
        replyWrapper.css('width', '75%');
      } // если нет ни аватара ни рук


      if (!character.avatar && !isShow) {
        replyWrapper.css('width', 'auto');
      } // Если аватара нет, но показывает руки


      if (!character.avatar && isShow) {
        replyWrapper.css('width', '90%');
      } // если есть аватар, но руки не отображаются


      if (character.avatar && !isShow) {
        replyWrapper.css('width', 'auto');
      }
    });
  }

  var css$o = ".screen__cloud {\n  width: 500px;\n  background: wheat;\n  padding: 30px;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  z-index: 1000;\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);\n  transform: translate(-50%, 0);\n  top: 10%; }\n  .screen__cloud .tag {\n    padding: 10px 15px;\n    font-size: 18px;\n    margin: 10px;\n    display: inline-flex;\n    background: #444;\n    cursor: pointer;\n    color: #34d1a2;\n    transition: 0.3s;\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); }\n    .screen__cloud .tag:hover {\n      background: #000;\n      color: darkcyan; }\n";
  n(css$o,{});

  var tpl$a = "<div class=\"screen__cloud component center\"></div>";

  function cloud () {
    var _this = this;

    var $tpl = $(tpl$a);
    this.$store.$screen.append($tpl);
    this.on('cloud', function (param) {
      $tpl.empty();
      $tpl.css('display', 'flex');

      if (param) {
        if (param.css) {
          $tpl.css(param.css);
        }

        Object.keys(param.tags).map(function (label) {
          var item = "<div class=\"tag sound-hover\" data-label=".concat(label, ">").concat(param.tags[label], "</div>");
          $tpl.append(item);
        });
        var $vnjs = _this;
        $tpl.on('click', '.tag', function () {
          var label = $(this).data('label');
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
    Object.values(this.$store).map(function (asset) {
      if (asset.hasOwnProperty("_muted")) {
        asset.stop();
      }
    });
  }

  function audio () {
    var _this = this;

    stopAll.call(this);
    var soundData;

    var audio = function audio(data) {
      if (typeof data === 'string') {
        _this.$store[data].play();
      } else if (_typeof(data) === 'object') {
        soundData = data;

        _this.$store[data.name]['stop']();

        _this.$store[data.name].rate(data.speed || 1);

        _this.$store[data.name].loop(data.loop || false);

        _this.$store[data.name].volume(data.volume || 1);

        _this.$store[data.name][data.action]();
      } else {
        stopAll.call(_this);
      }
    };

    this.on('audio', audio);
    this.on('sound', function (data) {
      _this.$store[data].play();
    });
    this.on('audioEnd', function (sName) {
      if (soundData.onEnd) {
        console.log(11);

        _this.exec(soundData.onEnd);
      }
    });
  }

  //https://api.jquery.com/animate/

  /*
  	не умеет анимировать свойства 
    вроде 45deg, и т.д
   */
  function animate () {
    this.on('animate', function (data) {
      var selector = data.selector,
          duration = data.duration,
          css = data.css;
      console.log(data);
      $(selector).animate(css, duration);
      $(selector).css('color', 'red');
    });
  }

  var css$n = "\n\n.stream__show-frame{\n  width: 800px;\n  height: 400px;\n  flex-wrap: wrap;\n  top: unset;\n  bottom: 290px;\n  left: 50%;\n  transform: translateX(-50%);\n  overflow: hidden;\n  box-shadow: 3px 3px 5px rgba(0,0,0,0.5);\n  border: 1px solid rgba(200, 200, 200, 0.1);\n}\n\n.stream__show-frame__cell{\n  background-repeat: no-repeat;\n  /*background-size: cover;*/\n  background-position: left;\n  width: 50%;\n  height: 50%;\n  border: 1px solid rgba(200, 200, 200, 0.1);\n}\n.stream__show-frame__cell:nth-child(1){\n    background-position: 0px 0px;\n}\n.stream__show-frame__cell:nth-child(2){\n  background-position: -400px 0px;\n\n}\n.stream__show-frame__cell:nth-child(3){\n  background-position: 0px -200px;\n}\n.stream__show-frame__cell:nth-child(4){\n  background-position: -400px -200px;\n\n}\n.filter-blur{\n  filter: blur(20px);\n}";
  n(css$n,{});

  var tpl$9 = "<div class=\"stream__show-frame component\">\n                    <div class=\"stream__show-frame__cell\"></div>\n                    <div class=\"stream__show-frame__cell\"></div>\n                    <div class=\"stream__show-frame__cell\"></div>\n                    <div class=\"stream__show-frame__cell\"></div>\n             </div>";
  function frame () {
    var _this = this;

    var $frame = $(tpl$9);
    this.$store.$screen.append($frame);
    this.on('frame', function (param) {
      if (param) {
        $frame.html('');

        for (var i = 1; i < 5; i++) {
          var tplItem = $("<div class=\"stream__show-frame__cell ".concat(param[i] ? '' : 'filter-blur', "\" style=\"background-image:url('").concat(_this.getAssetByName(param.img).url, "') \"></div>"));
          $frame.append(tplItem);
        } //  $(item).removeClass('filter-blur')


        $frame.css('display', 'flex');
      } else {
        $frame.hide();
      }
    });
  }

  var css$m = ".stream__menu-menu {\n  width: 80%;\n  padding: 10px;\n  background: black;\n  flex-direction: column;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 200px;\n  display: none;\n  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);\n  overflow: auto;\n  max-height: 95%;\n  color: wheat;\n}\n  .stream__menu-menu .stream__menu-quetion {\n    background: rgba(70, 70, 70, 0.7);\n    width: 100%;\n    min-height: 40px;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    padding: 10px 20px;\n    transition: 0.1s;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-bottom: 10px;\n  }\n  .stream__menu-menu .stream__menu-item {\n    margin-bottom: 10px;\n    background: rgba(120, 120, 120, 0.7);\n    width: 100%;\n    min-height: 40px;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    transition: 0.1s;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n    .stream__menu-menu .stream__menu-item span {\n      padding: 10px 20px;\n      display: flex;\n      flex: 1; }\n    .stream__menu-menu .stream__menu-item:hover {\n      cursor: pointer;\n      background: rgba(200, 100, 100, 0.8); }\n    .stream__menu-menu .stream__menu-item span {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n.stream__menu-menu .stream__menu-item:last-child{\n  margin-bottom: 0;\n}\n\n\n.stream__menu-menu .menu-item__icon{\n  width: 32px;\n  height: 32px;\n  margin-left: 15px;\n}\n.stream__menu-menu .menu-item__icon+span{\n  /*padding-left: 20px;*/\n}";
  n(css$m,{});

  var tpl$8 = "<div class=\"stream__menu-menu component\"></div>";

  var $tpl$9 = $(tpl$8);
  $tpl$9.on("click", ".stream__menu-item", clickHundler$1);
  var onClickObj$1 = null;
  var menuObj$1 = null;
  function menu$1 () {
    var _this = this;

    this.$store.$screen.append($tpl$9);
    var prevObj = null;
    this.on('menu', function (obj) {
      if (obj === true) {
        menu$2.call(_this, prevObj);
      } else if (obj) {
        prevObj = obj;
        menu$2.call(_this, obj);
      } else {
        $tpl$9.hide();
      }
    });
  }
  /**
   * menu
   */

  function menu$2(param) {
    menuObj$1 = param;
    $tpl$9.html('');

    for (var _i = 0, _Object$entries = Object.entries(menuObj$1); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          label = _Object$entries$_i[0],
          menuItem = _Object$entries$_i[1];

      var character = this.getCharacterById(label);

      if (character) {
        var str = null;

        if (label === '$') {
          character.name = '';
        }

        if (character.name !== '') {
          str = "<div class=\"stream__menu-quetion\">\n                          <span style='color:".concat(character.nameColor, "; padding-right: 20px;'>").concat(character.name, ":</span>\n                          <span style='color:").concat(character.replyColor, "; '>").concat(menuItem, "</span>\n                    </div>");
        } else {
          str = "<div class=\"stream__menu-quetion\">\n                          <span style='color:".concat(character.replyColor, ";'>").concat(menuItem, "</span>\n                    </div>");
        }

        $('.stream__menu-menu').append(str);
      } else {
        var _str = null;

        if (/disabled/i.test(label)) {
          // c исконками
          if (_typeof(menuItem) === 'object') {
            _str = "<div data-label=\"".concat(label, "\" class=\"stream__menu-item disabled\"><img alt=\"\" class=\"menu-item__icon\" src=\"").concat(this.getAssetByName(menuItem.icon).url, "\"/><span class=\"sound-click\">").concat(menuItem.text, "</span></div>");
          } // без иконок
          else {
            _str = "<div data-label=\"".concat(label, "\" class=\"stream__menu-item disabled\"><span class=\"sound-click\">").concat(menuItem, "</span></div>");
          }
        } else if (label === 'onClick') {
          onClickObj$1 = menuItem;
        } else if (label === 'css') {
          $tpl$9.css(menuItem);
        } else {
          // c исконками
          if (_typeof(menuItem) === 'object') {
            _str = "<div data-label=\"".concat(label, "\" class=\"stream__menu-item\"><img alt=\"\" class=\"menu-item__icon\" src=\"").concat(this.getAssetByName(menuItem.icon).url, "\"/><span class=\"sound-click\">").concat(menuItem.text, "</span></div>");
          } // без иконок
          else {
            _str = "<div data-label=\"".concat(label, "\" class=\"stream__menu-item\"><span class=\"sound-click\">").concat(menuItem, "</span></div>");
          }
        }

        $('.stream__menu-menu').append($(_str));
      }
    }

    $tpl$9.css({
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
    var label = $(this).data('label');

    if (label === 'next') {
      onClickMenuHandler$1();
      setTimeout(function () {
        $vnjs.exec({
          next: true
        });
      }, 0);
    } else {
      onClickMenuHandler$1();
      setTimeout(function () {
        $vnjs.exec({
          jump: label
        });
      }, 0);
    }

    $tpl$9.hide(); //$tpl.off( "click", clickHundler)
  }

  var css$l = ".main-menu {\n  width: 50%;\n  padding: 10px;\n  background-color: transparent;\n  left: 50%;\n  transform: translateX(-50%);\n  flex-direction: column;\n  display: none;\n  /*box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);*/\n  overflow: auto;\n  max-height: 95%;\n  top: 200px;\n  color: #34d1a2;\n}\n  .main-menu__item--quetion {\n    background: rgba(70, 70, 70, 0.7);\n    width: 100%;\n    min-height: 50px;\n    font-size: 26px;\n    display: flex;\n    align-items: center;\n    padding: 10px 20px;\n    color: white;\n    transition: 0.1s;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-bottom: 10px;\n    box-shadow: 3px 3px 10px rgba(0,0,0,0.5);\n  }\n  .main-menu__item {\n    margin-bottom: 20px;\n    background-color: #333;\n    width: 100%;\n    min-height: 50px;\n    font-size: 26px;\n    display: flex;\n    align-items: center;\n    transition: 0.1s;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    box-shadow: 3px 3px 10px rgba(0,0,0,0.7);\n\n  }\n    .main-menu__item span {\n      padding: 20px 20px;\n      padding-left: 50px;\n      display: flex;\n      flex: 1;\n      /*display: flex;\n      justify-content: center;*/\n    }\n    .main-menu__item:hover {\n      cursor: pointer;\n      color: darkcyan;\n      background: rgba(0, 0, 0, 0.7); }\n    .main-menu__item span {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n.main-menu__item:last-child{\n  margin-bottom: 0;\n}\n\n.main-menu__item.disabled{\n  opacity: 0.6;\n}\n\n.main-menu .menu-item__icon{\n  width: 50px;\n  height: 50px;\n  margin-left: 15px;\n}\n.main-menu .menu-item__icon+span{\n  padding-left: 20px;\n}";
  n(css$l,{});

  var tpl$7 = "<div class=\"main-menu component\"></div>";

  var $tpl$8 = $(tpl$7);
  var onClickObj = null;
  var menuObj = null;
  function mainMenu () {
    var _this = this;

    this.$store.$screen.append($tpl$8);
    var prevObj = null;
    this.on('main-menu', function (obj) {
      if (obj === true) {
        menu.call(_this, prevObj);
      } else if (obj) {
        prevObj = obj;
        menu.call(_this, obj);
      } else {
        $tpl$8.hide();
      }
    });
  }
  /**
   * menu
   */

  function menu(param) {
    menuObj = param;
    $tpl$8.html('');

    for (var _i = 0, _Object$entries = Object.entries(menuObj); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          label = _Object$entries$_i[0],
          menuItem = _Object$entries$_i[1];

      var character = this.getCharacterById(label);

      if (character) {
        var str = null;

        if (label === '$') {
          character.name = '';
        }

        if (character.name !== '') {
          str = "<div class=\"main-menu__item--quetion\">\n                          <span style='color:".concat(character.nameColor, "; padding-right: 20px;'>").concat(character.name, ":</span>\n                          <span style='color:").concat(character.replyColor, "; '>").concat(menuItem, "</span>\n                    </div>");
        } else {
          str = "<div class=\"main-menu__item--quetion\">\n                          <span style='color:".concat(character.replyColor, ";'>").concat(menuItem, "</span>\n                    </div>");
        }

        $('.main-menu').append(str);
      } else {
        var _str = null;

        if (/disabled/i.test(label)) {
          // c исконками
          if (_typeof(menuItem) === 'object') {
            _str = "<div data-label=\"".concat(label, "\" class=\"main-menu__item disabled\"><img alt=\"\" class=\"menu-item__icon\" src=\"").concat(this.getAssetByName(menuItem.icon).url, "\"/><span class=\"sound-click\">").concat(menuItem.text, "</span></div>");
          } // без иконок
          else {
            _str = "<div data-label=\"".concat(label, "\" class=\"main-menu__item disabled\"><span class=\"sound-click\">").concat(menuItem, "</span></div>");
          }
        } else if (label === 'onClick') {
          onClickObj = menuItem;
        } else if (label === 'css') {
          $tpl$8.css(menuItem);
        }
        /**
         * Вывод обычного пункта меню
         */
        else {
          // c исконками
          if (_typeof(menuItem) === 'object') {
            _str = "<div data-label=\"".concat(label, "\" class=\"main-menu__item\"><img alt=\"\" class=\"menu-item__icon\" src=\"").concat(this.getAssetByName(menuItem.icon).url, "\"/><span class=\"sound-click\">").concat(menuItem.text, "</span></div>");
          } else {
            _str = "<div data-label=\"".concat(label, "\" class=\"main-menu__item\"><span class=\"sound-click\">").concat(menuItem, "</span></div>");
          }
        }

        $('.main-menu').append($(_str));
      }
    }

    $tpl$8.css({
      display: 'flex'
    });
  }
  /**
   * click handler
   */


  $tpl$8.on("click", ".main-menu__item", clickHundler);

  function clickHundler() {
    var label = $(this).data('label');

    if (label === 'next') {
      onClickMenuHandler();
      setTimeout(function () {
        $vnjs.exec({
          next: true
        });
      }, 0);
    } else {
      onClickMenuHandler();
      setTimeout(function () {
        $vnjs.exec({
          jump: label
        });
      }, 0);
    }

    $tpl$8.hide(); //$tpl.off( "click", clickHundler)
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

  var css$k = ".stream__term-board {\n  width: 808px;\n  height: 480px;\n  padding: 25px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAygAAAHgCAYAAABO0EkBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHM2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTE0VDE2OjI1OjM3KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMy0yMVQyMToyNToxMSswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMy0yMVQyMToyNToxMSswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YjU3NzllYTEtMDk0Zi1hNTQxLWJiZmYtZTY3YTFkZWVjNzdjIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NmRlYTlhYzAtYWQ5Mi03ZjQzLTk2YWItMGUyZTFkODQ2NWViIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YTBkYTUwNjItZGM4NC0yMzRkLWExOWYtMDExMmMzOWM3N2FhIj4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjZkZWE5YWMwLWFkOTItN2Y0My05NmFiLTBlMmUxZDg0NjVlYjwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmEwZGE1MDYyLWRjODQtMjM0ZC1hMTlmLTAxMTJjMzljNzdhYSIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0xNFQxNjoyNTozNyswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphZjBkMjdiMy1jOGJkLTVlNGEtOWRiOC0yMzAyY2E2OTYxZmQiIHN0RXZ0OndoZW49IjIwMjEtMTAtMTRUMTc6NDA6MjMrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjU3NzllYTEtMDk0Zi1hNTQxLWJiZmYtZTY3YTFkZWVjNzdjIiBzdEV2dDp3aGVuPSIyMDIyLTAzLTIxVDIxOjI1OjExKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Hu0bEAAADtNJREFUeJzt3U+LZFcdx+Hfubeq/zmJcaIGoiBRslDI23DhxpVkJQgufQO+B/cuBHHjSiQq0a2CO4ngwj+IYqJBBTUjk5me7q6uvve4mKRN0lEwzq35duZ5VrdvVd1zelcfzrm32pc+/9n+za9+uX75h1erquqDN47q9eOTAgAA2KWvfO2bNbzz5MU0PYy5AAAAj7CXfvLDqqoa7t69U1VVHzjYr9ZaHZ9sHua8AACA97nee63G8fLv73//hcvj1XZ7USebTZ2en1fvvVq7/FhVG6qN693OFgAAeH+7OL/cufXWOKmqWt28ebM2m/Oa53558vxvv7887tvTqt7rLeUCAADwnh2sxnrl1km98trplddWh4cHNc/zv8/0+6Fy9pdfV1XVuH+jqk9VbbzyYQAAgP/Z/li3//56/e7l2/XUk4/X0fr+rfE3j/ZqNU1TtbesjrRxdXm8uvHk/QMrKAAAwIOyGmu9f1g3bmyrqupkO9dqM9X5NF99ildbH1we94s3bpgXJwAAwA5cCZTqvdq4qmHvqNpq/yFMCQAAeFRdDRQAAICHRKAAAAAxBAoAABBDoAAAADEECgAAEEOgAAAAMQQKAAAQQ6AAAAAxBAoAABBDoAAAADEECgAAEGO1xEV7r1qPrdbjUL36EkMAAAAPQatW22mu7dSrtQd//UUC5XBvqD/846Reee2kDtfjEkMAAAAPwel2qmc+fFSf+shRnW3nB379RQJlNbZ6/fSi/vjaaX3waFVH66FalbUUAAC4hlpr1XuvW3eO69bdTT2299H69NOPXZ9AeXOL12MHqxqHVn+6valeVQusAAEAAAvrvVdrrZ775DP17Hq/njrc1mZzXkt8w18kUN60v2p1vJ3rxd/+s6bea2ytmkwBAIBro1ev7Xaq9XqsLz7/hXru2U/Vq7/5Wd155Re1OrjxwMdbNFB6rxpa1Y298TJQAACA62U7VK1XY23OTuvO3bu13W5rGJZ5IPCigfJW4zDWyb3j2mw2i/0zAADAgzPPc+3v79f+4eHOxtxZoFRVTdO0aG0BAAAPzjzPtVrtNBl2GyittRqGQaAAAMA10XZ8m4ZSAAAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYqx2Odg8zzVNU/XedzksAADwHszzXPM873TMnQXK3Oc6PDys9XpdrbVdDQsAALxHvfdarVbV51417uY7/KKB0lqrufe6fXxSF73X3jhWa0OVBRQAALgGWm23U51tzmpvPdbc++KLDYsGyjTNtR7H+swnnq65eg1l5QQAAK6bi2mq1TjWehxrmpbd8rVooByfndXHnvpwff35z9U4DDXteP8aAADw/2t1fxPUNM11fLZZdKxFAqW1qu3U697mojYXvYbVQbVxqGHh2gIAABbQqlqv6sNcbX1YbVxVLfTgq0UC5fR8rk/cPKwnnnu6Dvb36vjll6q15uldAABwzbVhrHlzr9r6YJHrLxIoF1OvJ45W9dHH92uapjq9/dfqVe5AAQCAa673Xm1cV1utF1lFWXSL13a6uP/3+kCcAADA+8Dl9/qFdkf5JXkAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAABgZ9bjUAfrocahVe9XXxcoAADAztw521ZV1dl2qvFdakSgAAAAixtaq6qqjz9xcHnucG+88r7VO0/0zb3aa3ON++tq66sfAAAA+F+NrdXUe51s5//6viuB0vY/UJs+1E9/9ec6fPxDi00QAAB4lLSq6nXr3ra203y5ovJOVwKlquq7P/55VR1U3TpdcIIAAMCj5mA9Xt4g3+v+PSdHb2z1Wo/D1UB54Tvffte9YAAAAA/Cm0/vGlvVxfz2R3m9LVB+8IMX6j+stAAAADxQe2Ork+1cJ9upHtu/v0hyGSg/evF7tRrUCQAAsBvj0Gr9RoPc3UxV9UagfONb33p4swIAAB5J51Ovg/Xbf/mk9Xf7+UYAAICH4F/no41w/cIydwAAAABJRU5ErkJggg==);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: absolute;\n  top: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: none; }\n  .stream__term-board pre {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    margin: 0; }\n    .stream__term-board pre code {\n      padding: 25px;\n      font-size: 24px;\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      top: 0;\n      overflow-x: auto;\n      font-family: Minecraft; }\n      .stream__term-board pre code img {\n        height: 100%; }\n\n\n\n/* term theme */\n\n.stream__term-board pre code{\n  font-size: 18px;\n  line-height: 24px;\n}\n";
  n(css$k,{});

  var css$j = "pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#a9b7c6;background:#282b2e}.hljs-bullet,.hljs-literal,.hljs-number,.hljs-symbol{color:#6897bb}.hljs-deletion,.hljs-keyword,.hljs-selector-tag{color:#cc7832}.hljs-link,.hljs-template-variable,.hljs-variable{color:#629755}.hljs-comment,.hljs-quote{color:grey}.hljs-meta{color:#bbb529}.hljs-addition,.hljs-attribute,.hljs-string{color:#6a8759}.hljs-section,.hljs-title,.hljs-type{color:#ffc66d}.hljs-name,.hljs-selector-class,.hljs-selector-id{color:#e8bf6a}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}";
  n(css$j,{});

  var tpl$6 = "<div class=\"stream__term-board component\">\n    <pre><code></code></pre>\n</div>\n";

  var map = {
    "js": "javascript",
    "lua": "lua",
    "py": "python"
  };

  document.addEventListener('DOMContentLoaded', function () {
    hljs.highlightAll();
  });
  /**/

  function term () {
    var _this = this;

    var $tpl = $(tpl$6);
    this.$store.$screen.append($tpl);
    this.on('term', function (param) {
      if (param === true) {
        $tpl.fadeIn();
      } else if (param) {
        var data = _this.getDataByName(param);

        if (/\./.test(param)) {
          if (!data) {
            console.error('Data file not found');
            console.warn(_this.current.sceneName + '.' + _this.current.labelName + '.' + _this.current.index);
          } else {
            $tpl.find('pre code').removeAttr('class');
            var str = param.split('.');
            var langName = str[1];
            var val = map[langName];

            if (val) {
              langName = val;
            }

            $tpl.find('pre code').css({
              overflow: 'auto',
              padding: 10
            });
            $tpl.find('pre code').addClass('language-' + langName).addClass('hljs');
            var html = hljs.highlight(data.body, {
              language: langName
            }).value;
            $tpl.find('pre code').html(html); // yaml reply from Norrator

            $tpl.find('pre code .hljs-string').toArray().map(function (str) {
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
            var img = $("<img src=".concat(_this.getAssetByName(param).url, " />"));
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

  var css$i = ".stream__show-left {\n  position: absolute;\n  left: 50px;\n  bottom: 210px;\n  top: unset;\n  width: 260px;\n  height: 450px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  z-index: 9999; }\n\n.stream__show-center {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 210px;\n  top: unset;\n  width: 260px;\n  height: 450px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  z-index: 9999; }\n\n.stream__show-right {\n  position: absolute;\n  right: 50px;\n  bottom: 210px;\n  top: unset;\n  width: 260px;\n  height: 450px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  z-index: 9999; }\n";
  n(css$i,{});

  function show () {
    var _this = this;

    var $left = $('<div class="stream__show-left component"></div>');
    var $right = $('<div class="stream__show-right component"></div>');
    var $center = $('<div class="stream__show-center component"></div>');
    var $show = $('<div class="stream__show-show component"></div>');
    this.$store.$screen.append($left);
    this.$store.$screen.append($right);
    this.$store.$screen.append($center);
    /*
    
    .stream__show-show.component
     */

    this.on('left', function (id) {
      if (id) {
        $left.hide();
        $left.css('background-image', "url('".concat(_this.getAssetByName(id).url, "')")).fadeIn();
      } else {
        $left.fadeOut();
      }
    });
    this.on('center', function (id) {
      if (id) {
        $center.hide();
        $center.css('background-image', "url('".concat(_this.getAssetByName(id).url, "')")).fadeIn();
      } else {
        $center.fadeOut();
      }
    });
    this.on('right', function (id) {
      if (id) {
        $right.hide();
        $right.css('background-image', "url('".concat(_this.getAssetByName(id).url, "')")).fadeIn();
      } else {
        $right.fadeOut();
      }
    });
    this.on('show', function (param) {
      if (param) {
        $show.css('background-image', "url('".concat(_this.getAssetByName(id).url, "')")).css(param.css).fadeIn();
      } else {
        $show.fadeOut();
      }
    });
  }

  var css$h = ".stream__show-auto-left {\n  position: absolute;\n  left: 50px;\n  bottom: 210px;\n  top: unset;\n  z-index: 7000;\n}\n\n.stream__show-auto-center {\n  position: absolute;\n  bottom: 210px;\n  top: unset;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 7000;\n\n}\n\n.stream__show-auto-right {\n  position: absolute;\n  right: 50px;\n  bottom: 210px;\n  top: unset;\n  z-index: 7000;\n\n}\n";
  n(css$h,{});

  function showAuto () {
    var _this = this;

    var $left = $('<img alt="" src="" class="stream__show-auto-left component"/>');
    var $center = $('<img alt="" src="" class="stream__show-auto-center component"/>');
    var $right = $('<img alt="" src="" class="stream__show-auto-right component"/>');
    this.$store.$screen.append($left);
    this.$store.$screen.append($center);
    this.$store.$screen.append($right);
    /*
    
    
     */

    this.on('leftimg', function (id) {
      if (id) {
        $left.hide();

        if (_typeof(id) === 'object') {
          $left.attr('src', _this.getAssetByName(id.name).url);
          $left.css(id.css);
        } else {
          $left.attr('src', _this.getAssetByName(id).url);
        }

        $left.fadeIn();
      } else {
        $left.fadeOut();
      }
    });
    this.on('centerimg', function (id) {
      if (id) {
        $center.hide();

        if (_typeof(id) === 'object') {
          $center.attr('src', _this.getAssetByName(id.name).url);
          $center.css(id.css);
        } else {
          $center.attr('src', _this.getAssetByName(id).url);
        }

        $center.fadeIn();
      } else {
        $center.fadeOut();
      }
    });
    this.on('rightimg', function (id) {
      if (id) {
        $right.hide();

        if (_typeof(id) === 'object') {
          $right.attr('src', _this.getAssetByName(id.name).url);
          $right.css(id.css);
        } else {
          $right.attr('src', _this.getAssetByName(id).url);
        }

        $right.fadeIn();
      } else {
        $right.fadeOut();
      }
    });
  }

  function scene () {
    var _this = this;

    this.on('scene', function (id) {
      if (_typeof(id) === 'object') {
        _this.$store.$screen.css('opacity', 0);

        _this.$store.$screen.css({
          'background-image': "url(".concat(id.url, ")")
        });

        _this.$store.$screen.css('opacity', 1);
      } else if (typeof id === 'string') {
        _this.$store.$screen.css('opacity', 0);

        _this.$store.$screen.css({
          'background-image': "url('".concat(_this.getAssetByName(id).url, "')")
        });

        _this.$store.$screen.css('opacity', 1);
      } else {
        _this.$store.$screen.css({
          'background-image': "unset"
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

  var css$g = "\n.stream__table{\n\n  left: 50%;\n  top: 0%;\n  transform: translateX(-50%);\n  z-index: 1000;\n  flex-direction: column;\n  /*background-color: wheat;*/\n}\n.table-row{\n  overflow: hidden;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n\n}\n.table__cell{\n  transition: all 0.2s linear;\n  margin: 0 5px;\n\n}\n\n.table__cell-text{\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n\n}\n.row-border{\n    border: 2px solid white;\n}\n.table__cell[data-jump]{\n  cursor: pointer;\n}\n.table__cell[data-jump]:hover{\n  filter: brightness(150%);\n}\n\n.table__cell-text[data-jump]{\n  cursor: pointer;\n}\n.table__cell-text[data-jump]:hover{\n  color: #24a3bf;\n}";
  n(css$g,{});

  function table () {
    var _this = this;

    var $table = $('<div class="stream__table component"></div>');
    this.$store.$screen.append($table);
    $table.on('click', '.table__cell', function () {
      var label = $(this).data('jump');

      if (label) {
        $vnjs.exec({
          'jump': label
        });
      }
    });
    this.on('table', function (tableData) {
      if (tableData) {
        $table.html('');
        $table.css('display', 'flex');
        var border = tableData.filter(function (item) {
          return item.hasOwnProperty('border');
        })[0];
        var rows = tableData.filter(function (item) {
          return item.hasOwnProperty('row');
        });
        rows.map(function (item) {
          var $row = $("<div class=\"table-row\"></div>");
          var height = 30;
          item.row.map(function (cell) {
            if (cell.hasOwnProperty('height')) {
              height = cell.height;
            }

            if (cell.hasOwnProperty('image')) {
              var tpl = '';

              if (cell.image.hasOwnProperty('jump')) {
                tpl = "<img class=\"table__cell\" style=\"width: ".concat(cell.image.width, "px\" data-jump=\"").concat(cell.image.jump, "\" src=\"").concat(_this.getAssetByName(cell.image.name).url, "\"/>");
              } else {
                tpl = "<img class=\"table__cell\" style=\"width: ".concat(cell.image.width, "px\"  src=\"").concat(_this.getAssetByName(cell.image.name).url, "\"/>");
              }

              $row.append(tpl);
            }

            if (cell.hasOwnProperty('text')) {
              var _tpl = '';

              if (cell.text.hasOwnProperty('jump')) {
                _tpl = "<span class=\"table__cell table__cell-text ".concat(border ? 'row-border' : '', "\"  data-jump=\"").concat(cell.text.jump, "\" style=\"width: ").concat(cell.text.width || '', "px; font-size: ").concat(cell.text.size, "px\">").concat(cell.text.content || '', "</span>");
              } else {
                _tpl = "<span class=\"table__cell table__cell-text ".concat(border ? 'row-border' : '', "\"\" style=\"width: ").concat(cell.text.width || '', "px; font-size: ").concat(cell.text.size, "px\">").concat(cell.text.content || '', "</span>");
              }

              $row.append(_tpl);
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
    var _this = this;

    this.on('clear', function (param) {
      if (param === 'all') {
        $('.component').toArray().map(function (component) {
          $(component).hide();
        });

        _this.exec({
          scene: false,
          'dialog-box': 'clear'
        });

        Object.values(_this.$store).map(function (asset) {
          if (asset.hasOwnProperty("_muted")) {
            asset.stop();
          }
        });
      }
    });
  }

  function data () {
    var _this = this;

    var ISBN;
    this.on('postload', function () {
      var _this$TREE$$root$pack;

      ISBN = ((_this$TREE$$root$pack = _this.TREE.$root["package"]) === null || _this$TREE$$root$pack === void 0 ? void 0 : _this$TREE$$root$pack.ISBN) || '0000000000000';

      if (store.get(ISBN)) {
        _this.current.data = store.get(ISBN);
      } else {
        _this.current.data = {};
      }
    });
    this.on('set-data', function (data) {
      for (var key in data) {
        _this.current.data[key] = data[key];
      }

      store.set(ISBN, _this.current.data);
    });
    this.on('clear-data', function (data) {
      store.remove(ISBN);
      _this.current.data = {
        score: _this.current.data.score,
        player: _this.current.data.player
      };
    });
    this.on('switch', function (data) {
      var defaultFlag = false;

      for (var equal in data) {
        var _equal$replaceAll$spl = equal.replaceAll(' ', '').split('==='),
            _equal$replaceAll$spl2 = _slicedToArray(_equal$replaceAll$spl, 2),
            key = _equal$replaceAll$spl2[0],
            value = _equal$replaceAll$spl2[1]; // Если существует сохраненная переменная, но выполняем команду


        if (String(_this.current.data[key]) === String(value) && key !== 'default') {
          defaultFlag = true;

          _this.exec(data[equal]);
        }
      } // если ни одна переменная в yaml коде ранее не задавалась, то
      // выполняем команду поумолчанию, если таковая присутсвует


      if (!defaultFlag && data !== null && data !== void 0 && data["default"]) {
        defaultFlag = false;

        _this.exec(data["default"]);
      }
    });
  }

  var css$f = "\n\n.stream__qa{\n  display: none;\n  z-index: 8888;\n  width: 60%;\n  flex-direction: column;\n}\n\n.stream__qa--item{\n\n  color: white;\n  cursor: pointer;\n  color: wheat;\n  transition: 0.1s;\n  margin-bottom: 10px;\n  border-style: solid;\n  border-width: 3px;\n  border-color: black;\n  color: white;\n  background: grey;\n}\n.stream__qa--item:last-child{\n  margin-bottom: 0;\n}\n.stream__qa--item:hover {\n  background: rgba(100, 200, 100, 0.7);\n}\n\n.stream__qa--quetion{\n  background: rgba(0,0,0,0.7);\n  pointer-events: none;\n  text-overflow: unset;\n  height: auto;\n  white-space: unset;\n}\n.stream__qa--quetion span{\n  text-overflow: unset;\n  height: auto;\n  overflow: auto;\n  white-space: unset;\n  line-height: 28px;\n\n}\n.stream__qa--item span{\n  padding: 7px 20px;\n  display: block;\n}\n.stream__qa--item .stream__qa--name{\n  padding: unset;\n  display: none;\n}\n/*\n.stream__qa--name:after{\n  content: \" :\"\n}\n*/\n.stream__qa--reply{\n  padding: unset;\n  padding-left: 20px;\n}";
  n(css$f,{});

  var tpl$5 = "<div class=\"stream__qa component center\"></div>";

  var Score = /*#__PURE__*/_createClass(function Score() {
    _classCallCheck(this, Score);

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
  });

  function clearData() {
    if (this.current.data.score) {
      this.current.data.score = new Score();
      store.set(this.TREE.$root["package"].ISBN, this.current.data);
      this.emit('setScore');
    }
  }

  function qa () {
    var _this = this;

    if (!this.current.data.score) {
      this.current.data.score = new Score();
    }

    var $tpl = $(tpl$5);
    this.$store.$screen.append($tpl);

    var setScore = function setScore(data) {
      for (var key in data) {
        for (var param in data[key]) {
          _this.current.data.score[key][param] += data[key][param];
        }
      }

      store.set(_this.TREE.$root["package"].ISBN, _this.current.data);

      _this.emit('setScore');
    };

    this.on('оценка', function (data) {
      if (data === 'reset') {
        clearData.call(_this);
        _this.current.data.score = new Score();
      } else {
        setScore(data);
      }
    });

    var qaHandler = function qaHandler(data) {
      $tpl.empty();

      for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            label = _Object$entries$_i[0],
            menuItem = _Object$entries$_i[1];

        var str = null;

        var character = _this.getCharacterById(label);

        if (character) {
          str = "\n          <div class=\"stream__qa--item stream__qa--quetion\">\n              <span class=\"stream__qa--name\" style=\"color: ".concat(character.nameColor, ";\">").concat(character.name, "</span>\n              <span class=\"stream__qa--reply\" style=\"color: ").concat(character.replyColor, ";\">").concat(menuItem, "</span>\n          </div>");
          $('.stream__qa').append(str);
        } else {
          str = "<div class=\"stream__qa--item\" data-score=".concat(JSON.stringify(menuItem), "><span class=\"sound-hover\">").concat(label, "</span></div>");
          $('.stream__qa').append(str);
        }
      }

      $tpl.css('display', 'flex');
      var $vnjs = _this;

      function clickHundler() {
        var data = $(this).data('score');
        setScore(data);
        $('.stream__qa').off("click", clickHundler);
        $('.stream__qa').hide();
        $vnjs.exec({
          next: true
        });
      }

      $(".stream__qa").on("click", ".stream__qa--item", clickHundler);
    };

    this.on('qa', function (data) {
      if (data === 'reset') {
        clearData.call(_this);
      } else if (data) {
        qaHandler(data);
      } else {
        $(".stream__qa").hide();
      }
    });
  }

  var css$e = "#chess__vnjson{\n  display: none;\n  top: 50px;\n  left: 50%;\n  transform: translateX(-50%);\n  box-shadow: 3px 3px 5px rgba(0,0,0,0.3);\n}";
  n(css$e,{});

  function chess () {
    var _this = this;

    this.on('setTree', function () {
      if (_this.TREE.$root["package"].chess) {
        chessInit();
      }
    });

    var chessInit = function chessInit() {
      var $tpl = $('<iframe id="chess__vnjson" src="data/chess/index.html" width="500" height="500"></iframe>');

      _this.$store.$screen.append($tpl);

      _this.on('chess', function (fen) {
        if (fen) {
          $tpl.show();
          var win = document.querySelector("iframe#chess__vnjson").contentWindow;
          win.postMessage({
            fen: fen
          }, location.origin + "/data/chess/index.html");
        } else {
          $tpl.hide();
        }
      });
    };
  }

  var tpl$4 = "<div class=\"stream__set-name\">\n    <div class=\"stream__set-name-wrapper\">\n        <input type=\"text\">\n        <div class=\"stream__set-name-btn\">\n            <svg style=\"width:60px;height:60px\" viewBox=\"0 0 24 24\">\n                <path fill=\"currentColor\" d=\"M3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19M17,12L12,7V10H8V14H12V17L17,12Z\"/>\n            </svg>\n        </div>\n    </div>\n  \n</div>";

  var css$d = ".stream__set-name{\n  width: 470px;\n  height: 120px;\n  background-color: rgba(0, 0, 0, 0.7);\n  top: 250px;\n  left: 50%;\n  transform: translateX(-50%);\n  box-shadow: 3px 3px 5px rgba(0,0,0,0.5);\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  display: none;\n}\n.stream__set-name-wrapper{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stream__set-name-wrapper input{\n  caret-color: skyblue;\n  height: 47px;\n  border-radius: 4px;\n  width: 350px;\n  background-color: rgba(200,200,200,0.1);\n  font-size: 22px;\n  font-family: Minecraft;\n  color: skyblue;\n}\n\n.stream__set-name-wrapper .stream__set-name-btn{\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n}\n.stream__set-name-wrapper .stream__set-name-btn svg path{\n  fill: silver;\n  transition: 0.3s;\n\n}\n\n.stream__set-name-wrapper .stream__set-name-btn:hover svg path{\n  fill: skyblue;\n}";
  n(css$d,{});

  function setName () {
    var _this = this;

    var $tpl = $(tpl$4);
    this.$store.$screen.append($tpl);
    var cid = null;
    this.on('set-name', function (id) {
      if (id) {
        $tpl.css('display', 'flex');
        cid = id;
      } else {
        $tpl.hide();
      }
    });
    $('.stream__set-name-wrapper .stream__set-name-btn').on('click', function () {
      var input = $('.stream__set-name-wrapper input');
      $tpl.fadeOut();

      var _char = _this.TREE.$root.characters.find(function (character) {
        return character.id === cid;
      }); //this.current.data[cid] = value;


      _char.name = input.val();
      input.val('');

      _this.exec({
        next: true
      }); // this.exec({ next: true, 'set-data': { [cid]: value } });

    });
  }

  var css$c = ".stream__wiki {\n  left: 10px;\n  top: 40px;\n  width: 300px;\n  display: none;\n  height: auto;\n  padding: 10px;\n  border-radius: 4px;\n  background-color: rgba(0,0,0,0.5);\n  z-index: 7100;\n  font-size: 14px;\n}\n.stream__wiki li{\n  padding: 5px 0;\n\n  line-height: 18px;\n    \n}\n.stream__wiki-key{\n  color: wheat;\n}\n.stream__wiki-dash{\n  padding: 0 5px;\n  color: silver;\n}\n.stream__wiki-value{\n  color: darkgray;\n}";
  n(css$c,{});

  var $tpl$7 = $('<ul class="stream__wiki component"></ul>');
  function wiki () {
    var _this = this;

    this.$store.$screen.append($tpl$7);
    this.on('wiki', function (data) {
      if (data) {
        $tpl$7.html('');
        $tpl$7.fadeIn();
        var list;

        if (Array.isArray(data)) {
          list = data;
        } else {
          list = data.list;
          $tpl$7.css(data.css);
        }

        appendElements.call(_this, list);
      } else {
        $tpl$7.fadeOut();
      }
    });
  }

  function appendElements(list) {
    var wikiStore = this.TREE.$root.wiki;
    list.forEach(function (key) {
      var str;

      if (_typeof(wikiStore[key]) === 'object') {
        str = "<li><span class=\"stream__wiki-key\" style=\"color: ".concat(wikiStore[key].color, "\">").concat(key, "</span> <span class=\"stream__wiki-dash\">-</span> <span class=\"stream__wiki-value\">").concat(wikiStore[key].text, "</span></li>");
      } else {
        str = "<li><span class=\"stream__wiki-key\">".concat(key, "</span> <span class=\"stream__wiki-dash\">-</span> <span class=\"stream__wiki-value\">").concat(wikiStore[key], "</span></li>");
      }

      $tpl$7.append(str);
    });
  }

  var css$b = "\n\n#crossword{\n  top: 50px;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 0;\n  display: none;\n  box-shadow: 3px 3px 3px rgba(0,0,0,0.3);\n  background-color: antiquewhite;\n  padding: 5px;\n  border-radius: 4px;\n}\n";
  n(css$b,{});

  function crossWord () {
    var _this = this;

    this.on('setTree', function () {
      if (_this.TREE.$root["package"]['crossword']) {
        init();
      }
    });
    var $tpl = null;

    var init = function init() {
      _this.on('crossword', function (data) {
        if ($tpl) {
          $tpl.remove();
          $tpl = null;
        }

        if (data) {
          $tpl = $('<iframe id="crossword" src="data/crossword/index.html" width="975" height="500"></iframe>');

          _this.$store.$screen.append($tpl);

          setTimeout(function () {
            $tpl.show();
            var win = document.querySelector("iframe#crossword").contentWindow;
            win.postMessage(data, location.origin + "/data/crossword/index.html");
          }, 300);
        } else {
          $tpl.remove();
          $tpl = null;
        }
      });
    };
  }

  var css$a = "\n.stream__test{\n  width: 600px;\n  min-height: 250px;\n  top: 50px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: wheat;\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);\n  padding: 20px;\n  border-radius: 4px;\n\n}\n\n.stream__test-name{\n\n  border-bottom: 2px solid gray;\n  padding: 5px;\n  font-size: 24px;\n  padding-bottom: 10px;\n  color: brown;\n}\n\n.stream__test-quetions-wrapper{\n  position: relative;\n}\n\n\n.stream__test-quetion{\n\n  padding: 15px 0;\n  color: black;\n}\n\n.stream__variants-item{\n  padding: 10px;\n  margin-top: 5px;\n  background-color: darkslateblue;\n\n  color: rgba(255, 255, 255, 0.7);\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n.stream__variants-item_success{\n  background-color: darkcyan;\n  color: white;\n}\n\n.stream__variants-item_fail{\n  background-color: crimson;\n  color: white;\n}\n.stream__variants-item:hover,\n.stream__variants-item_success:hover,\n.stream__variants-item_fail:hover{\n\n  filter: brightness(110%);\n}\n\n/**\n * RESULT\n */\n.stream__test-result{\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  border-radius: 4px;\n  display: none;\n  background-color: wheat;\n  padding: 20px 0;\n}\n.stream__test-result-data{\n  height: 110px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.stream__test-result-item{\n  color: black;\n  padding: 10px 0;\n  display: flex;\n  justify-content: space-between;\n  width: 250px;\n}\n.stream__test-result-item:first-child span:last-child{\n  color: darkcyan;\n}\n.stream__test-result-item:last-child span:last-child{\n  color: crimson;\n}\n.stream__test-next-btn{\n  background-color: burlywood;\n  color: black;\n  border-radius: 4px;\n  padding: 10px 10px;\n  width: 250px;\n  text-align: center;\n  cursor: pointer;\n  margin: 0 auto;\n  box-shadow: 2px 2px 2px rgba(0,0,0,0.3);\n  /*border: 2px solid magenta;*/\n}\n.stream__test-next-btn:hover{\n  background-color:  darkslateblue;\n  color: white;\n}";
  n(css$a,{});

  var tpl$3 = "<div class=\"stream__test component\">\n    <div class=\"stream__test-name\"></div>\n    <div class=\"stream__test-quetions-wrapper\">\n        <div class=\"stream__test-quetion\"></div>\n        <div class=\"stream__test-variants\"></div>\n        <!--result-->\n        <div class=\"stream__test-result\">\n            <div class=\"stream__test-result-data\">\n                <div class=\"stream__test-result-item\">\n                      <span>Правильно</span>\n                      <span class=\"stream__test-result-item_true\">0</span>\n                </div>\n               <div class=\"stream__test-result-item\">\n                      <span>Не правильно</span>\n                      <span class=\"stream__test-result-item_false\">0</span>\n                </div>\n            </div>\n            <div class=\"stream__test-next-btn\">Продолжить</div>\n        </div>\n    </div>\n</div>";

  var $tpl$6 = $(tpl$3);
  var TEST = null;
  var answers = [];
  var qIndex = 0;
  var _trueAnswer = 0;
  var _falseAnswer = 0;
  function test () {
    var _this = this;

    $vnjs.current.data.tests = {};
    this.$store.$screen.append($tpl$6);
    this.on('test', function (data) {
      if (data) {
        $tpl$6.show();
        TEST = data;
        qIndex = 0;
        answers = [];
        _trueAnswer = 0;
        _falseAnswer = 0;
        $('.stream__test-name').html(TEST.name);
        renderQuetion.call(_this);
      } else {
        $tpl$6.hide();
      }
    });
  }
  var _quetionItem = null;

  function renderQuetion() {
    _quetionItem = TEST.quetions[qIndex];
    $('.stream__test-variants').html('');
    $('.stream__test-quetion').html(_quetionItem.quetion);

    _quetionItem.variants.map(function (item, index) {
      var tplItem = "<div class=\"stream__variants-item\" data-index=\"".concat(index, "\">").concat(item, "</div>");
      $('.stream__test-variants').append(tplItem);
    });
  }
  /**
   * @click
   */


  var click = true;
  $tpl$6.find('.stream__test-variants').on('click', '.stream__variants-item', function () {
    var index = $(this).data('index');

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

          $('.stream__variants-item').toArray().map(function (item) {
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
    setTimeout(function () {
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

  $tpl$6.find('.stream__test-next-btn').on('click', function () {
    $vnjs.exec({
      next: true,
      test: false
    });
    $('.stream__test-result').hide();
  });

  var css$9 = ".screen-stream__slide{\n  position: absolute;\n  display: none;\n  top: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.5);\n  z-index: 2000;\n}";
  n(css$9,{});

  var $tpl$5 = $("<img class=\"screen-stream__slide component\"/>");
  function slide () {
    var _this = this;

    this.$store.$screen.append($tpl$5);
    this.on('slide', function (id) {
      $tpl$5.attr('src', null);

      if (typeof id === 'string') {
        $tpl$5.attr('src', _this.getAssetByName(id).url).show();
      } else if (_typeof(id) === 'object') {
        /*
         * id.name
         * id.css
         * id.url
         */
        if (id.hasOwnProperty('css')) {
          $tpl$5.css(id.css);
          $tpl$5.attr('src', id.name).show();
        }

        if (id.hasOwnProperty('url')) {
          $tpl$5.attr('src', id.url).fadeIn();
        } else {
          $tpl$5.attr('src', _this.getAssetByName(id.name).url).show();
        }
        /*
        .css(id.css)
         */

      } else {
        $tpl$5.attr('src', null).hide();
      }
    });
  }

  var css$8 = ".stream__stage{\n  margin: 1% 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #333;\n  width: 70%;\n  padding: 5px;\n  height: 518px;\n  top: 30px;\n  overflow: auto;\n}\n.stream__stage li{\n  list-style-type: none;\n  cursor: pointer;\n  font-size: 18px;\n  display: block;\n}\n.stream__stage li:last-child{\n  margin-bottom: 0px;\n}\n.stage-children li:not(.stage-child){\n  display: none;\n}\n.stage-parent{\n  padding: 5px;\n  background: rgba(0, 0, 0, 0.1);\n  margin-bottom: 5px;\n}\n/*Том*/\n.stage-vol{\n  padding: 10px;\n  transition: 0.3s;\n  background: #000;\n  color: darkcyan;\n}\n.stage-vol:hover{\n  color: #34d1a2;\n  background: rgba(0, 0, 0, 0.7);\n}\n.stage-children{\n  padding-left: 20px;\n  display: block;\n  margin-top: 10px;\n}\n\n/*Глава*/\n.stage-child{\n  color: darkcyan;\n  padding: 10px;\n  transition: 0.3s;\n  background: #000;\n  margin-bottom: 10px;\n}\n\n.stage-child:hover{\n  color: #34d1a2;\n  background: rgba(0, 0, 0, 0.7);\n}\n";
  n(css$8,{});

  var icoContent = "data:image/jpeg;base64,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bmcAAAAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0EDQAAAAAABAAAAFo4QklNBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0nEAAAAAAACgABAAAAAAAAAAI4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQAAAAAAAACAAE4QklNBAIAAAAAAAQAAAAAOEJJTQQwAAAAAAACAQE4QklNBC0AAAAAAAYAAQAAAAI4QklNBAgAAAAAABAAAAABAAACQAAAAkAAAAAAOEJJTQQeAAAAAAAEAAAAADhCSU0EGgAAAAADSwAAAAYAAAAAAAAAAAAAADwAAAA8AAAACwQRBDUENwAgBDgEPAQ1BD0EOAAtADEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAADwAAAA8AAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAABudWxsAAAAAgAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAAA8AAAAAFJnaHRsb25nAAAAPAAAAAZzbGljZXNWbExzAAAAAU9iamMAAAABAAAAAAAFc2xpY2UAAAASAAAAB3NsaWNlSURsb25nAAAAAAAAAAdncm91cElEbG9uZwAAAAAAAAAGb3JpZ2luZW51bQAAAAxFU2xpY2VPcmlnaW4AAAANYXV0b0dlbmVyYXRlZAAAAABUeXBlZW51bQAAAApFU2xpY2VUeXBlAAAAAEltZyAAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3Ag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b3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTEtMDVUMTk6NTE6MzErMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMTEtMDVUMTk6NTE6MzErMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTExLTA1VDE5OjUxOjMxKzAzOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmMxMzJjNDExLWMwYTUtMjg0MS1iYjgxLTRjZDA2ZmZlMDU2MSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjIyZTVhYzcxLTdiYzgtMDc0YS1hMTNkLWM2MWZiMWUzYTk5NSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjFiYzdhZjBhLTUwNjktYmQ0Ni05ZmU0LWRjNmMzNDFhZDEwYyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxYmM3YWYwYS01MDY5LWJkNDYtOWZlNC1kYzZjMzQxYWQxMGMiIHN0RXZ0OndoZW49IjIwMjEtMTEtMDVUMTk6NTE6MzErMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzEzMmM0MTEtYzBhNS0yODQxLWJiODEtNGNkMDZmZmUwNTYxIiBzdEV2dDp3aGVuPSIyMDIxLTExLTA1VDE5OjUxOjMxKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPkFCOEEzMTkwMjI5NTE4Q0E5RjI4MURCNjA3RTYwRkUxPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/7gAOQWRvYmUAZEAAAAAB/9sAhAACAgICAgICAgICAwICAgMEAwICAwQFBAQEBAQFBgUFBQUFBQYGBwcIBwcGCQkKCgkJDAwMDAwMDAwMDAwMDAwMAQMDAwUEBQkGBgkNCgkKDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAA8ADwDAREAAhEBAxEB/90ABAAI/8QBogAAAAcBAQEBAQAAAAAAAAAABAUDAgYBAAcICQoLAQACAgMBAQEBAQAAAAAAAAABAAIDBAUGBwgJCgsQAAIBAwMCBAIGBwMEAgYCcwECAxEEAAUhEjFBUQYTYSJxgRQykaEHFbFCI8FS0eEzFmLwJHKC8SVDNFOSorJjc8I1RCeTo7M2F1RkdMPS4ggmgwkKGBmElEVGpLRW01UoGvLj88TU5PRldYWVpbXF1eX1ZnaGlqa2xtbm9jdHV2d3h5ent8fX5/c4SFhoeIiYqLjI2Oj4KTlJWWl5iZmpucnZ6fkqOkpaanqKmqq6ytrq+hEAAgIBAgMFBQQFBgQIAwNtAQACEQMEIRIxQQVRE2EiBnGBkTKhsfAUwdHhI0IVUmJy8TMkNEOCFpJTJaJjssIHc9I14kSDF1STCAkK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";

  var $tpl$4 = $("<ul class=\"stream__stage component\"></ul>");
  function content () {
    var _this = this;

    this.$store.$screen.append($tpl$4);
    this.on('content', function (data) {
      if (typeof data === 'string') {
        console.log('hide: ', data);
      } else if (_typeof(data) === 'object') {
        renderTree.call(_this, data);
      } else {
        $tpl$4.hide();
      }
    });
    $('.stream__hands').on('mouseover', '.stream__hand-right', function () {
      $(this).css('opacity', 0.5);
    });
    $('.stream__hands').on('mouseout', '.stream__hand-right', function () {
      $(this).css('opacity', 1);
    });
    $('.stream__hand-right').css('background-image', "url(".concat(icoContent, ")"));
    $('.stream__hands').on('click', '.stream__hand-right', function (e) {
      if (_this.TREE[_this.current.sceneName].content) {
        _this.exec({
          jump: "".concat(_this.current.sceneName, ".content")
        });
      } else if (_this.TREE.$root.content) {
        _this.exec({
          jump: "$root.content"
        });
      } else {
        console.warn('Scene: { ' + '$root.content' + ' } not found');
      }
    });
  }

  function renderTree(data) {
    var $vnjs = this;
    $tpl$4.empty();
    $tpl$4.fadeIn();
    data.map(function (item) {
      var $parent = $("<li class=\"stage-parent\"><div class=\"stage-vol stage-item sound-hover\"></div><ul class=\"stage-children\"></ul></li>");
      Object.keys(item).map(function (key, i) {
        if (i === 0) {
          $parent.find('.stage-vol').html(item[key]).attr('data-label', key);

          if (/disabled/i.test(key)) {
            $parent.addClass('disabled');
          }
        } else {
          var $str = $("<li class=\"stage-child stage-item sound-hover\" data-label=\"".concat(key, "\">").concat(item[key], "<li>"));

          if (/disabled/i.test(key)) {
            $str.addClass('disabled');
          }

          $parent.find('ul').append($str);
        }
      });
      $tpl$4.append($parent);
    });

    function clickHandler() {
      var label = $(this).data('label');
      $tpl$4.hide();

      if (label === 'next') {
        $vnjs.exec({
          next: true
        });
      } else {
        $vnjs.exec({
          jump: label
        });
      }

      $tpl$4.off('click', clickHandler);
    }

    $tpl$4.on('click', '.stage-item', clickHandler);
  }

  var icoPlay = "data:image/jpeg;base64,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AABDcHRuYm9vbAAAAAAAQ2xicmJvb2wAAAAAAFJnc01ib29sAAAAAABDcm5DYm9vbAAAAAAAQ250Q2Jvb2wAAAAAAExibHNib29sAAAAAABOZ3R2Ym9vbAAAAAAARW1sRGJvb2wAAAAAAEludHJib29sAAAAAABCY2tnT2JqYwAAAAEAAAAAAABSR0JDAAAAAwAAAABSZCAgZG91YkBv4AAAAAAAAAAAAEdybiBkb3ViQG/gAAAAAAAAAAAAQmwgIGRvdWJAb+AAAAAAAAAAAABCcmRUVW50RiNSbHQAAAAAAAAAAAAAAABCbGQgVW50RiNSbHQAAAAAAAAAAAAAAABSc2x0VW50RiNQeGxAUgAAAAAAAAAAAAp2ZWN0b3JEYXRhYm9vbAEAAAAAUGdQc2VudW0AAAAAUGdQcwAAAABQZ1BDAAAAAExlZnRVbnRGI1JsdAAAAAAAAAAAAAAAAFRvcCBVbnRGI1JsdAAAAAAAAAAAAAAAAFNjbCBVbnRGI1ByY0BZAAAAAAAAAAAAEGNyb3BXaGVuUHJpbnRpbmdib29sAAAAAA5jcm9wUmVjdEJvdHRvbWxvbmcAAAAAAAAADGNyb3BSZWN0TGVmdGxvbmcAAAAAAAAADWNyb3BSZWN0UmlnaHRsb25nAAAAAAAAAAtjcm9wUmVjdFRvcGxvbmcAAAAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0EDQAAAAAABAAAAFo4QklNBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0nEAAAAAAACgABAAAAAAAAAAI4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAA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b2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTEtMDZUMTA6NDA6MzUrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMTEtMDZUMTA6NDA6MzUrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTExLTA2VDEwOjQwOjM1KzAzOjAwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZDMxMzVjMGYtMWYyMi05ZDQ5LTgzYTAtMDFjZjMzY2YzZTUxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmQzMTM1YzBmLTFmMjItOWQ0OS04M2EwLTAxY2YzM2NmM2U1MSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQzMTM1YzBmLTFmMjItOWQ0OS04M2EwLTAxY2YzM2NmM2U1MSI+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPkFCOEEzMTkwMjI5NTE4Q0E5RjI4MURCNjA3RTYwRkUxPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDMxMzVjMGYtMWYyMi05ZDQ5LTgzYTAtMDFjZjMzY2YzZTUxIiBzdEV2dDp3aGVuPSIyMDIxLTExLTA2VDEwOjQwOjM1KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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";

  function voice () {
    var _this = this;

    var prev = null;
    this.on('voicePlay', function (data) {
      if (data) {
        if (prev) {
          _this.$store[prev].stop();
        }

        prev = data;

        _this.$store[data].play();
      } else {
        _this.$store[data].stop();
      }
    });
    this.on('$voice', function (data) {
      if (data) {
        $('.stream__hand-left').css('background-image', "url(".concat(icoPlay, ")"));
      } else {
        _this.emit('hand-left', false);

        _this.$store[prev].stop();

        prev = null;
      }

      if (prev) {
        _this.$store[prev].stop();

        prev = null;
      }

      prev = data;
    });
    this.on('exec', function (ctx) {
      var _this$ctx;

      if (!((_this$ctx = _this.ctx) !== null && _this$ctx !== void 0 && _this$ctx.$voice) && prev) {
        _this.$store[prev].stop();

        _this.emit('hand-left', false);

        prev = null;
      }
    });
    $('.stream__hands').on('mouseover', '.stream__hand-left', function () {
      $(this).css('opacity', 0.5);
    });
    $('.stream__hands').on('mouseout', '.stream__hand-left', function () {
      $(this).css('opacity', 1);
    });
    $('.stream__hands').on('click', '.stream__hand-left', function (e) {
      if (_this.ctx.$voice) {
        _this.emit('voicePlay', _this.ctx.$voice);
      }
    });
  }

  function embed () {
    var _this = this;

    this.on('postload', function () {
      var embed = _this.TREE.$root.embed;

      if (embed) {
        for (var event in embed) {
          eventRegistration$1.call(_this, event, embed[event]);
        }
      }
    });
  }

  function eventRegistration$1(event, tpl) {
    var _this2 = this;

    var $tpl = $(tpl);
    $tpl.hide().addClass("component").css('background-color', 'white');
    this.$store.$screen.append($tpl);
    this.on(event, function (data) {
      if (data) {
        $tpl.fadeIn();
      } else {
        var $src = $tpl;
        $tpl.remove();
        $src.hide();

        _this2.$store.$screen.append($tpl);
      }
    });
  }

  function html () {
    var _this = this;

    this.on('postload', function () {
      var htmlChunk = _this.TREE.$root.html;

      if (htmlChunk) {
        for (var event in htmlChunk) {
          eventRegistration.call(_this, event, htmlChunk[event]);
        }
      }
    });
  }
  function eventRegistration(event, tpl) {
    var $tpl = $(tpl);
    $tpl.hide().addClass("component").addClass('event__' + event);
    this.$store.$screen.append($tpl);
    this.on(event, function (data) {
      if (_typeof(data) === 'object') {
        $tpl.css(data.css);
        $tpl.fadeIn();
      } else if (data) {
        $tpl.fadeIn();
      } else {
        $tpl.fadeIn();
      }
    });
  }

  function discordLog () {
    var _this = this;

    var webhook;
    var avatar_url;
    this.on('postload', function () {
      if (_this.TREE.$root["package"]) {
        var discordLogParam = _this.TREE.$root["package"]['discord-log'];
        if (!discordLogParam) return;
        webhook = discordLogParam.webhook;
        avatar_url = discordLogParam.avatar_url;
      }
    });
    this.on('discord-log', function (msg) {
      var content = null;

      if (typeof msg === 'string') {
        content = _this.TREE.$root["package"].name + ' [ ' + _this.current.sceneName + '.' + _this.current.labelName + ' ]  ' + msg;
      } else {
        content = _this.TREE.$root["package"].name + ' [ ' + _this.current.sceneName + '.' + _this.current.labelName + ' ]';
      }

      var params = {
        username: $vnjs.current.data.player.name,
        avatar_url: avatar_url,
        content: content
      };
      sendMessage(params, webhook);
    });
  }

  function sendMessage(params, url) {
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(params));
  }

  var css$7 = ".status-bar{\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(0,0,0,0.7);\n  color: gray;\n  width: 100%;\n  height: 4%;\n  z-index: 9999;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 15px;\n  display: none;\n}\n.status-bar__status--ready,\n.status-bar__status--help{\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  margin-right: 10px;\n}\n.status-bar__status--ready span{\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: gray;\n  display: inline-block;\n  margin-right: 10px;\n}\n\n.status-bar__status--help span{\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: gray;\n  display: i gray;\n  margin-right: 10px;\n}\n\n.status-bar__status--ready.status-active span{\n    background-color: lightgreen;\n}\n.status-bar__status--ready.status-active {\n   color: white;\n}\n.status-bar__status--help.status-active span{\n    background-color: red;\n}\n.status-bar__status--help.status-active{\n  color: white;\n}\n/*\n.status-bar__item:hover{\n  color: white;\n}\n.status-bar__status--ready:hover span{\n    background-color: lightgreen;\n}\n.status-bar__status--help:hover span{\n    background-color: red;\n}\n*/\n\n.status-bar__image-containter{\n  position: absolute;\n  background-repeat: no-repeat;\n  background-size: contain;\n  top: 40px;\n  right: 0;\n  width: 100px;\n  height: 100px;\n}\n.status-bar__player-name{\n  padding-left: 10px;\n}\n.status-bar__player{\n  display: flex;\n  align-items: center;\n}";
  n(css$7,{});

  var tpl$2 = "<div class=\"status-bar component\">\n  <div class=\"status-bar__player\"><img id=\"status-bar__player-logo\"><span class=\"status-bar__player-name\"></span></div>\n  <div class=\"status-bar__status\">\n      <span class=\"status-bar__item status-bar__status--ready\"><span></span>Готов</span>\n      <span class=\"status-bar__item status-bar__status--help\"><span></span>Помощь</span>\n      <div class=\"status-bar__image-containter\"></div>\n  </div>\n\n</div>";

  var readyImg = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%20%20%20%3Cpath%20fill%3D%22%2300ff00%22%20d%3D%22M12%202C6.5%202%202%206.5%202%2012S6.5%2022%2012%2022%2022%2017.5%2022%2012%2017.5%202%2012%202M10%2017L5%2012L6.41%2010.59L10%2014.17L17.59%206.58L19%208L10%2017Z%22%20%2F%3E%3C%2Fsvg%3E";

  var helpImg = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%20%20%20%3Cpath%20fill%3D%22red%22%20d%3D%22M15.07%2C11.25L14.17%2C12.17C13.45%2C12.89%2013%2C13.5%2013%2C15H11V14.5C11%2C13.39%2011.45%2C12.39%2012.17%2C11.67L13.41%2C10.41C13.78%2C10.05%2014%2C9.55%2014%2C9C14%2C7.89%2013.1%2C7%2012%2C7A2%2C2%200%200%2C0%2010%2C9H8A4%2C4%200%200%2C1%2012%2C5A4%2C4%200%200%2C1%2016%2C9C16%2C9.88%2015.64%2C10.67%2015.07%2C11.25M13%2C19H11V17H13M12%2C2A10%2C10%200%200%2C0%202%2C12A10%2C10%200%200%2C0%2012%2C22A10%2C10%200%200%2C0%2022%2C12C22%2C6.47%2017.5%2C2%2012%2C2Z%22%20%2F%3E%3C%2Fsvg%3E";

  var playerImg = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%20%20%20%3Cpath%20fill%3D%22gray%22%20d%3D%22M12%2C19.2C9.5%2C19.2%207.29%2C17.92%206%2C16C6.03%2C14%2010%2C12.9%2012%2C12.9C14%2C12.9%2017.97%2C14%2018%2C16C16.71%2C17.92%2014.5%2C19.2%2012%2C19.2M12%2C5A3%2C3%200%200%2C1%2015%2C8A3%2C3%200%200%2C1%2012%2C11A3%2C3%200%200%2C1%209%2C8A3%2C3%200%200%2C1%2012%2C5M12%2C2A10%2C10%200%200%2C0%202%2C12A10%2C10%200%200%2C0%2012%2C22A10%2C10%200%200%2C0%2022%2C12C22%2C6.47%2017.5%2C2%2012%2C2Z%22%20%2F%3E%3C%2Fsvg%3E";

  function statusBar () {
    var _this = this;

    var $tpl = $(tpl$2);
    var ready = false;
    var help = false;
    this.$store.$screen.append($tpl);
    this.on('status-bar', function (param) {
      if (param) {
        $tpl.css('display', 'flex');
      } else {
        $tpl.hide();
      }
    });

    function clearStatus() {
      $('.status-bar__image-containter').css('background-image', "unset");
      $('.status-bar__item').toArray().map(function (el) {
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

        $('.status-bar__image-containter').css('background-image', "url(".concat(readyImg, ")"));
        /**
         * При клике на кнопку [ готов ] определяем стоит ли нам выполнить плагин [next] или нет
         */

        if (ready) {
          $vnjs.exec({
            next: true
          });
          setTimeout(function () {
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

        $('.status-bar__image-containter').css('background-image', "url(".concat(helpImg, ")"));
        /**
         * При клике на кнопку [ помощь ] определяем стоит ли нам выполнить плагин [next] или нет
         */

        if (help) {
          $vnjs.exec({
            next: true
          });
          setTimeout(function () {
            clearStatus();
            helpStatus = false;
          }, 1000);
        }

        help = false;
      }
    });
    this.on('player-load', function (name) {
      $('#status-bar__player-logo').attr('src', playerImg);
      $('.status-bar__player-name').html(_this.current.data.player.name);
    });
    /**
     * Следим за статусом ready и help
     */

    this.on('ready', function (e) {
      return ready = e;
    });
    this.on('help', function (e) {
      return help = e;
    });
  }

  function mcPlayer () {
    var _this = this;

    new Date().toLocaleDateString();

    try {
      window.mcefQuery({
        request: "info",
        persistent: true,
        onSuccess: function onSuccess(response) {
          _this.current.data.player = JSON.parse(response);

          _this.emit('player-load', _this.current.data.player.name);
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

  var css$6 = "#paint-board__vnjson{\n  top: 50px;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 0;\n  display: none;\n  box-shadow: 3px 3px 5px rgba(0,0,0,0.3);\n}";
  n(css$6,{});

  function paintBoard () {
    var _this = this;

    this.on('setTree', function () {
      if (_this.TREE.$root["package"]['paint-board']) {
        init();
      }
    });

    var init = function init() {
      var $tpl = $('<iframe id="paint-board__vnjson" src="data/paint-board/index.html" width="800" height="500"></iframe>');

      _this.$store.$screen.append($tpl);

      _this.on('paint-board', function (imgID) {
        if (imgID) {
          $tpl.show();

          var url = _this.getAssetByName(imgID).url.split('');

          url.shift();
          var IMG = location.protocol + '//' + location.host + url.join('');
          var win = document.querySelector("iframe#paint-board__vnjson").contentWindow;
          win.postMessage({
            IMG: IMG
          }, location.origin + "/data/paint-board/index.html");
        } else {
          $tpl.fadeOut();
        }
      });
    };
  }

  function clipBoard () {
    var _this = this;

    var $tpl = $('<textarea class="stream__clipboard" style="position: absolute; left:-99999px;top:0;"></textarea>');
    this.$store.$screen.append($tpl);
    var flag = false;
    this.on('clipboard', function (data) {
      flag = true; // получаем файл

      var dataFile = _this.getDataByName(data);

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

  var css$5 = ".stream__craftos{\n  width: 808px;\n  height: 480px;\n  padding: 25px;\n  overflow: hidden;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAygAAAHgCAYAAABO0EkBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHM2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTE0VDE2OjI1OjM3KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMy0yMVQyMToyNToxMSswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMy0yMVQyMToyNToxMSswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YjU3NzllYTEtMDk0Zi1hNTQxLWJiZmYtZTY3YTFkZWVjNzdjIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NmRlYTlhYzAtYWQ5Mi03ZjQzLTk2YWItMGUyZTFkODQ2NWViIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YTBkYTUwNjItZGM4NC0yMzRkLWExOWYtMDExMmMzOWM3N2FhIj4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjZkZWE5YWMwLWFkOTItN2Y0My05NmFiLTBlMmUxZDg0NjVlYjwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmEwZGE1MDYyLWRjODQtMjM0ZC1hMTlmLTAxMTJjMzljNzdhYSIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0xNFQxNjoyNTozNyswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphZjBkMjdiMy1jOGJkLTVlNGEtOWRiOC0yMzAyY2E2OTYxZmQiIHN0RXZ0OndoZW49IjIwMjEtMTAtMTRUMTc6NDA6MjMrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjU3NzllYTEtMDk0Zi1hNTQxLWJiZmYtZTY3YTFkZWVjNzdjIiBzdEV2dDp3aGVuPSIyMDIyLTAzLTIxVDIxOjI1OjExKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Hu0bEAAADtNJREFUeJzt3U+LZFcdx+Hfubeq/zmJcaIGoiBRslDI23DhxpVkJQgufQO+B/cuBHHjSiQq0a2CO4ngwj+IYqJBBTUjk5me7q6uvve4mKRN0lEwzq35duZ5VrdvVd1zelcfzrm32pc+/9n+za9+uX75h1erquqDN47q9eOTAgAA2KWvfO2bNbzz5MU0PYy5AAAAj7CXfvLDqqoa7t69U1VVHzjYr9ZaHZ9sHua8AACA97nee63G8fLv73//hcvj1XZ7USebTZ2en1fvvVq7/FhVG6qN693OFgAAeH+7OL/cufXWOKmqWt28ebM2m/Oa53558vxvv7887tvTqt7rLeUCAADwnh2sxnrl1km98trplddWh4cHNc/zv8/0+6Fy9pdfV1XVuH+jqk9VbbzyYQAAgP/Z/li3//56/e7l2/XUk4/X0fr+rfE3j/ZqNU1TtbesjrRxdXm8uvHk/QMrKAAAwIOyGmu9f1g3bmyrqupkO9dqM9X5NF99ildbH1we94s3bpgXJwAAwA5cCZTqvdq4qmHvqNpq/yFMCQAAeFRdDRQAAICHRKAAAAAxBAoAABBDoAAAADEECgAAEEOgAAAAMQQKAAAQQ6AAAAAxBAoAABBDoAAAADEECgAAEGO1xEV7r1qPrdbjUL36EkMAAAAPQatW22mu7dSrtQd//UUC5XBvqD/846Reee2kDtfjEkMAAAAPwel2qmc+fFSf+shRnW3nB379RQJlNbZ6/fSi/vjaaX3waFVH66FalbUUAAC4hlpr1XuvW3eO69bdTT2299H69NOPXZ9AeXOL12MHqxqHVn+6valeVQusAAEAAAvrvVdrrZ775DP17Hq/njrc1mZzXkt8w18kUN60v2p1vJ3rxd/+s6bea2ytmkwBAIBro1ev7Xaq9XqsLz7/hXru2U/Vq7/5Wd155Re1OrjxwMdbNFB6rxpa1Y298TJQAACA62U7VK1XY23OTuvO3bu13W5rGJZ5IPCigfJW4zDWyb3j2mw2i/0zAADAgzPPc+3v79f+4eHOxtxZoFRVTdO0aG0BAAAPzjzPtVrtNBl2GyittRqGQaAAAMA10XZ8m4ZSAAAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYqx2Odg8zzVNU/XedzksAADwHszzXPM873TMnQXK3Oc6PDys9XpdrbVdDQsAALxHvfdarVbV51417uY7/KKB0lqrufe6fXxSF73X3jhWa0OVBRQAALgGWm23U51tzmpvPdbc++KLDYsGyjTNtR7H+swnnq65eg1l5QQAAK6bi2mq1TjWehxrmpbd8rVooByfndXHnvpwff35z9U4DDXteP8aAADw/2t1fxPUNM11fLZZdKxFAqW1qu3U697mojYXvYbVQbVxqGHh2gIAABbQqlqv6sNcbX1YbVxVLfTgq0UC5fR8rk/cPKwnnnu6Dvb36vjll6q15uldAABwzbVhrHlzr9r6YJHrLxIoF1OvJ45W9dHH92uapjq9/dfqVe5AAQCAa673Xm1cV1utF1lFWXSL13a6uP/3+kCcAADA+8Dl9/qFdkf5JXkAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAABgZ9bjUAfrocahVe9XXxcoAADAztw521ZV1dl2qvFdakSgAAAAixtaq6qqjz9xcHnucG+88r7VO0/0zb3aa3ON++tq66sfAAAA+F+NrdXUe51s5//6viuB0vY/UJs+1E9/9ec6fPxDi00QAAB4lLSq6nXr3ra203y5ovJOVwKlquq7P/55VR1U3TpdcIIAAMCj5mA9Xt4g3+v+PSdHb2z1Wo/D1UB54Tvffte9YAAAAA/Cm0/vGlvVxfz2R3m9LVB+8IMX6j+stAAAADxQe2Ork+1cJ9upHtu/v0hyGSg/evF7tRrUCQAAsBvj0Gr9RoPc3UxV9UagfONb33p4swIAAB5J51Ovg/Xbf/mk9Xf7+UYAAICH4F/no41w/cIydwAAAABJRU5ErkJggg==);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: absolute;\n  top: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 18px;\n  line-height: 24px;\n  font-family: Minecraft; \n}\n\n\n";
  n(css$5,{});

  var $tpl$3 = $('<div class="stream__craftos component"></div>');
  var open = false;
  function craftos () {
    this.$store.$screen.append($tpl$3);
    this.on('craftos', function (data) {
      if (_typeof(data) === 'object') {
        if (!open) {
          showTerminal();
        }

        fileManager(data);
      } else if (data === true) {
        showTerminal();
      } else {
        close();
      }
    });
  }

  function close() {
    open = false;
    $tpl$3.hide();
  }

  function showTerminal() {
    open = true;
    $tpl$3.empty();
    var $iframe = $('<iframe src="data/craft-os/index.html" width="758" height="430"></iframe>');
    $tpl$3.append($iframe);
    $tpl$3.show();
  }

  var FileSystem = /*#__PURE__*/function () {
    function FileSystem() {
      _classCallCheck(this, FileSystem);

      this.files = [];
      this.currentFile = {
        attrs: {
          creation: null,
          modification: null
        }
      };
      this.readStore();
    }

    _createClass(FileSystem, [{
      key: "readStore",
      value: function readStore() {
        var files = localStorage.getItem('computer[0].files[].children');

        if (files) {
          this.files = JSON.parse(files);
        }
      }
    }, {
      key: "getKeys",
      value: function getKeys(name) {
        return {
          attrs: "computer[0].files[".concat(name, "].attributes"),
          body: "computer[0].files[".concat(name, "].b64")
        };
      }
    }, {
      key: "readFile",
      value: function readFile(name) {
        if (this.fileExist(name)) {
          var attrs = localStorage.getItem(this.getKeys(name).attrs);
          var body_b64 = localStorage.getItem(this.getKeys(name).body);
          var body = atob(body_b64);
          this.currentFile = {
            attrs: JSON.parse(attrs),
            body: body,
            name: name
          };
          return body;
        }
      }
    }, {
      key: "fileExist",
      value: function fileExist(name) {
        return this.files.find(function (file) {
          return file === name;
        });
      }
    }, {
      key: "writeFile",
      value: function writeFile(name, body) {
        if (this.fileExist(name)) return;
        this.files.push(name);
        this.createFile(name, body, false);
      }
    }, {
      key: "updateFile",
      value: function updateFile(name, body) {
        if (!this.fileExist(name)) return;
        this.createFile(name, body, true);
      }
    }, {
      key: "appendChunk",
      value: function appendChunk(name, _body) {
        if (!this.fileExist(name)) return;
        var oldBody = this.readFile(name);
        if (oldBody.includes(_body)) return;
        var body = [oldBody, _body].join('\n');
        this.createFile(name, body, true);
      }
    }, {
      key: "createFile",
      value: function createFile(name, body, isExist) {
        localStorage.setItem('computer[0].files[].children', JSON.stringify(this.files));
        this.currentFile.body = btoa(body);
        this.currentFile.attrs.modification = new Date().getTime();

        if (!isExist) {
          this.currentFile.attrs.creation = this.currentFile.attrs.modification;
        }

        localStorage.setItem(this.getKeys(name).attrs, JSON.stringify(this.currentFile.attrs));
        localStorage.setItem(this.getKeys(name).body, this.currentFile.body);
      }
    }, {
      key: "removeFile",
      value: function removeFile(name) {
        this.files = this.files.filter(function (file) {
          return file !== name;
        });
        localStorage.setItem('computer[0].files[].children', JSON.stringify(this.files));
        localStorage.removeItem(this.getKeys(name).attrs);
        localStorage.removeItem(this.getKeys(name).body);
      }
    }, {
      key: "removeAllFiles",
      value: function removeAllFiles() {
        var _this = this;

        localStorage.removeItem('computer[0].files[].children');
        this.files.forEach(function (name) {
          localStorage.removeItem(_this.getKeys(name).attrs);
          localStorage.removeItem(_this.getKeys(name).body);
        });
      }
    }]);

    return FileSystem;
  }();

  function fileManager(param) {
    var fs = new FileSystem();
    var key = Object.keys(param)[0]; // Если существует файл с именем которое передали в param[key].body
    // То данные для вставки беруться из него

    var dataFile;

    if (_typeof(param[key]) === 'object') {
      dataFile = $vnjs.getDataByName(param[key].body);
    }

    var body;

    if (dataFile) {
      body = dataFile.body;
    } else {
      body = param[key].body;
    }

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

  var css$4 = "@charset \"UTF-8\";\r\n.vjs-modal-dialog .vjs-modal-dialog-content, .video-js .vjs-modal-dialog, .vjs-button > .vjs-icon-placeholder:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.vjs-button > .vjs-icon-placeholder:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before {\r\n  text-align: center;\r\n}\r\n\r\n@font-face {\r\n  font-family: VideoJS;\r\n  src: url(data:application/font-woff;charset=utf-8;base64,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) format(\"woff\");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-play, .video-js .vjs-play-control .vjs-icon-placeholder, .video-js .vjs-big-play-button .vjs-icon-placeholder:before {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-play:before, .video-js .vjs-play-control .vjs-icon-placeholder:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before {\r\n  content: \"\\f101\";\r\n}\r\n\r\n.vjs-icon-play-circle {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-play-circle:before {\r\n  content: \"\\f102\";\r\n}\r\n\r\n.vjs-icon-pause, .video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-pause:before, .video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before {\r\n  content: \"\\f103\";\r\n}\r\n\r\n.vjs-icon-volume-mute, .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-volume-mute:before, .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before {\r\n  content: \"\\f104\";\r\n}\r\n\r\n.vjs-icon-volume-low, .video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-volume-low:before, .video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before {\r\n  content: \"\\f105\";\r\n}\r\n\r\n.vjs-icon-volume-mid, .video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-volume-mid:before, .video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before {\r\n  content: \"\\f106\";\r\n}\r\n\r\n.vjs-icon-volume-high, .video-js .vjs-mute-control .vjs-icon-placeholder {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-volume-high:before, .video-js .vjs-mute-control .vjs-icon-placeholder:before {\r\n  content: \"\\f107\";\r\n}\r\n\r\n.vjs-icon-fullscreen-enter, .video-js .vjs-fullscreen-control .vjs-icon-placeholder {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-fullscreen-enter:before, .video-js .vjs-fullscreen-control .vjs-icon-placeholder:before {\r\n  content: \"\\f108\";\r\n}\r\n\r\n.vjs-icon-fullscreen-exit, .video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-fullscreen-exit:before, .video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before {\r\n  content: \"\\f109\";\r\n}\r\n\r\n.vjs-icon-square {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-square:before {\r\n  content: \"\\f10a\";\r\n}\r\n\r\n.vjs-icon-spinner {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-spinner:before {\r\n  content: \"\\f10b\";\r\n}\r\n\r\n.vjs-icon-subtitles, .video-js .vjs-subs-caps-button .vjs-icon-placeholder,\r\n.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder,\r\n.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder,\r\n.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder,\r\n.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder, .video-js .vjs-subtitles-button .vjs-icon-placeholder {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-subtitles:before, .video-js .vjs-subs-caps-button .vjs-icon-placeholder:before,\r\n.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder:before,\r\n.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder:before,\r\n.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder:before,\r\n.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder:before, .video-js .vjs-subtitles-button .vjs-icon-placeholder:before {\r\n  content: \"\\f10c\";\r\n}\r\n\r\n.vjs-icon-captions, .video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder,\r\n.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder, .video-js .vjs-captions-button .vjs-icon-placeholder {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-captions:before, .video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder:before,\r\n.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder:before, .video-js .vjs-captions-button .vjs-icon-placeholder:before {\r\n  content: \"\\f10d\";\r\n}\r\n\r\n.vjs-icon-chapters, .video-js .vjs-chapters-button .vjs-icon-placeholder {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-chapters:before, .video-js .vjs-chapters-button .vjs-icon-placeholder:before {\r\n  content: \"\\f10e\";\r\n}\r\n\r\n.vjs-icon-share {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-share:before {\r\n  content: \"\\f10f\";\r\n}\r\n\r\n.vjs-icon-cog {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-cog:before {\r\n  content: \"\\f110\";\r\n}\r\n\r\n.vjs-icon-circle, .vjs-seek-to-live-control .vjs-icon-placeholder, .video-js .vjs-volume-level, .video-js .vjs-play-progress {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-circle:before, .vjs-seek-to-live-control .vjs-icon-placeholder:before, .video-js .vjs-volume-level:before, .video-js .vjs-play-progress:before {\r\n  content: \"\\f111\";\r\n}\r\n\r\n.vjs-icon-circle-outline {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-circle-outline:before {\r\n  content: \"\\f112\";\r\n}\r\n\r\n.vjs-icon-circle-inner-circle {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-circle-inner-circle:before {\r\n  content: \"\\f113\";\r\n}\r\n\r\n.vjs-icon-hd {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-hd:before {\r\n  content: \"\\f114\";\r\n}\r\n\r\n.vjs-icon-cancel, .video-js .vjs-control.vjs-close-button .vjs-icon-placeholder {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-cancel:before, .video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before {\r\n  content: \"\\f115\";\r\n}\r\n\r\n.vjs-icon-replay, .video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-replay:before, .video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before {\r\n  content: \"\\f116\";\r\n}\r\n\r\n.vjs-icon-facebook {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-facebook:before {\r\n  content: \"\\f117\";\r\n}\r\n\r\n.vjs-icon-gplus {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-gplus:before {\r\n  content: \"\\f118\";\r\n}\r\n\r\n.vjs-icon-linkedin {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-linkedin:before {\r\n  content: \"\\f119\";\r\n}\r\n\r\n.vjs-icon-twitter {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-twitter:before {\r\n  content: \"\\f11a\";\r\n}\r\n\r\n.vjs-icon-tumblr {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-tumblr:before {\r\n  content: \"\\f11b\";\r\n}\r\n\r\n.vjs-icon-pinterest {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-pinterest:before {\r\n  content: \"\\f11c\";\r\n}\r\n\r\n.vjs-icon-audio-description, .video-js .vjs-descriptions-button .vjs-icon-placeholder {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-audio-description:before, .video-js .vjs-descriptions-button .vjs-icon-placeholder:before {\r\n  content: \"\\f11d\";\r\n}\r\n\r\n.vjs-icon-audio, .video-js .vjs-audio-button .vjs-icon-placeholder {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-audio:before, .video-js .vjs-audio-button .vjs-icon-placeholder:before {\r\n  content: \"\\f11e\";\r\n}\r\n\r\n.vjs-icon-next-item {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-next-item:before {\r\n  content: \"\\f11f\";\r\n}\r\n\r\n.vjs-icon-previous-item {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-previous-item:before {\r\n  content: \"\\f120\";\r\n}\r\n\r\n.vjs-icon-picture-in-picture-enter, .video-js .vjs-picture-in-picture-control .vjs-icon-placeholder {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-picture-in-picture-enter:before, .video-js .vjs-picture-in-picture-control .vjs-icon-placeholder:before {\r\n  content: \"\\f121\";\r\n}\r\n\r\n.vjs-icon-picture-in-picture-exit, .video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder {\r\n  font-family: VideoJS;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.vjs-icon-picture-in-picture-exit:before, .video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder:before {\r\n  content: \"\\f122\";\r\n}\r\n\r\n.video-js {\r\n  display: block;\r\n  vertical-align: top;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  background-color: #000;\r\n  position: relative;\r\n  padding: 0;\r\n  font-size: 10px;\r\n  line-height: 1;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  word-break: initial;\r\n}\r\n.video-js:-moz-full-screen {\r\n  position: absolute;\r\n}\r\n.video-js:-webkit-full-screen {\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n}\r\n\r\n.video-js[tabindex=\"-1\"] {\r\n  outline: none;\r\n}\r\n\r\n.video-js *,\r\n.video-js *:before,\r\n.video-js *:after {\r\n  box-sizing: inherit;\r\n}\r\n\r\n.video-js ul {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n  list-style-position: outside;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.video-js.vjs-fluid,\r\n.video-js.vjs-16-9,\r\n.video-js.vjs-4-3,\r\n.video-js.vjs-9-16,\r\n.video-js.vjs-1-1 {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  height: 0;\r\n}\r\n\r\n.video-js.vjs-16-9 {\r\n  padding-top: 56.25%;\r\n}\r\n\r\n.video-js.vjs-4-3 {\r\n  padding-top: 75%;\r\n}\r\n\r\n.video-js.vjs-9-16 {\r\n  padding-top: 177.7777777778%;\r\n}\r\n\r\n.video-js.vjs-1-1 {\r\n  padding-top: 100%;\r\n}\r\n\r\n.video-js.vjs-fill {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.video-js .vjs-tech {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nbody.vjs-full-window {\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 100%;\r\n}\r\n\r\n.vjs-full-window .video-js.vjs-fullscreen {\r\n  position: fixed;\r\n  overflow: hidden;\r\n  z-index: 1000;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n.video-js.vjs-fullscreen:not(.vjs-ios-native-fs) {\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n  padding-top: 0 !important;\r\n}\r\n\r\n.video-js.vjs-fullscreen.vjs-user-inactive {\r\n  cursor: none;\r\n}\r\n\r\n.vjs-hidden {\r\n  display: none !important;\r\n}\r\n\r\n.vjs-disabled {\r\n  opacity: 0.5;\r\n  cursor: default;\r\n}\r\n\r\n.video-js .vjs-offscreen {\r\n  height: 1px;\r\n  left: -9999px;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 1px;\r\n}\r\n\r\n.vjs-lock-showing {\r\n  display: block !important;\r\n  opacity: 1 !important;\r\n  visibility: visible !important;\r\n}\r\n\r\n.vjs-no-js {\r\n  padding: 20px;\r\n  color: #fff;\r\n  background-color: #000;\r\n  font-size: 18px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  text-align: center;\r\n  width: 300px;\r\n  height: 150px;\r\n  margin: 0px auto;\r\n}\r\n\r\n.vjs-no-js a,\r\n.vjs-no-js a:visited {\r\n  color: #66A8CC;\r\n}\r\n\r\n.video-js .vjs-big-play-button {\r\n  font-size: 3em;\r\n  line-height: 1.5em;\r\n  height: 1.63332em;\r\n  width: 3em;\r\n  display: block;\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 10px;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  opacity: 1;\r\n  border: 0.06666em solid #fff;\r\n  background-color: #2B333F;\r\n  background-color: rgba(43, 51, 63, 0.7);\r\n  border-radius: 0.3em;\r\n  transition: all 0.4s;\r\n}\r\n.vjs-big-play-centered .vjs-big-play-button {\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-top: -0.81666em;\r\n  margin-left: -1.5em;\r\n}\r\n\r\n.video-js:hover .vjs-big-play-button,\r\n.video-js .vjs-big-play-button:focus {\r\n  border-color: #fff;\r\n  background-color: #73859f;\r\n  background-color: rgba(115, 133, 159, 0.5);\r\n  transition: all 0s;\r\n}\r\n\r\n.vjs-controls-disabled .vjs-big-play-button,\r\n.vjs-has-started .vjs-big-play-button,\r\n.vjs-using-native-controls .vjs-big-play-button,\r\n.vjs-error .vjs-big-play-button {\r\n  display: none;\r\n}\r\n\r\n.vjs-has-started.vjs-paused.vjs-show-big-play-button-on-pause .vjs-big-play-button {\r\n  display: block;\r\n}\r\n\r\n.video-js button {\r\n  background: none;\r\n  border: none;\r\n  color: inherit;\r\n  display: inline-block;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n  text-transform: none;\r\n  text-decoration: none;\r\n  transition: none;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n}\r\n\r\n.vjs-control .vjs-button {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.video-js .vjs-control.vjs-close-button {\r\n  cursor: pointer;\r\n  height: 3em;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0.5em;\r\n  z-index: 2;\r\n}\r\n.video-js .vjs-modal-dialog {\r\n  background: rgba(0, 0, 0, 0.8);\r\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0));\r\n  overflow: auto;\r\n}\r\n\r\n.video-js .vjs-modal-dialog > * {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.vjs-modal-dialog .vjs-modal-dialog-content {\r\n  font-size: 1.2em;\r\n  line-height: 1.5;\r\n  padding: 20px 24px;\r\n  z-index: 1;\r\n}\r\n\r\n.vjs-menu-button {\r\n  cursor: pointer;\r\n}\r\n\r\n.vjs-menu-button.vjs-disabled {\r\n  cursor: default;\r\n}\r\n\r\n.vjs-workinghover .vjs-menu-button.vjs-disabled:hover .vjs-menu {\r\n  display: none;\r\n}\r\n\r\n.vjs-menu .vjs-menu-content {\r\n  display: block;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  overflow: auto;\r\n}\r\n\r\n.vjs-menu .vjs-menu-content > * {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.vjs-scrubbing .vjs-control.vjs-menu-button:hover .vjs-menu {\r\n  display: none;\r\n}\r\n\r\n.vjs-menu li {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0.2em 0;\r\n  line-height: 1.4em;\r\n  font-size: 1.2em;\r\n  text-align: center;\r\n  text-transform: lowercase;\r\n}\r\n\r\n.vjs-menu li.vjs-menu-item:focus,\r\n.vjs-menu li.vjs-menu-item:hover,\r\n.js-focus-visible .vjs-menu li.vjs-menu-item:hover {\r\n  background-color: #73859f;\r\n  background-color: rgba(115, 133, 159, 0.5);\r\n}\r\n\r\n.vjs-menu li.vjs-selected,\r\n.vjs-menu li.vjs-selected:focus,\r\n.vjs-menu li.vjs-selected:hover,\r\n.js-focus-visible .vjs-menu li.vjs-selected:hover {\r\n  background-color: #fff;\r\n  color: #2B333F;\r\n}\r\n\r\n.video-js .vjs-menu *:not(.vjs-selected):focus:not(:focus-visible),\r\n.js-focus-visible .vjs-menu *:not(.vjs-selected):focus:not(.focus-visible) {\r\n  background: none;\r\n}\r\n\r\n.vjs-menu li.vjs-menu-title {\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  font-size: 1em;\r\n  line-height: 2em;\r\n  padding: 0;\r\n  margin: 0 0 0.3em 0;\r\n  font-weight: bold;\r\n  cursor: default;\r\n}\r\n\r\n.vjs-menu-button-popup .vjs-menu {\r\n  display: none;\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 10em;\r\n  left: -3em;\r\n  height: 0em;\r\n  margin-bottom: 1.5em;\r\n  border-top-color: rgba(43, 51, 63, 0.7);\r\n}\r\n\r\n.vjs-menu-button-popup .vjs-menu .vjs-menu-content {\r\n  background-color: #2B333F;\r\n  background-color: rgba(43, 51, 63, 0.7);\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 1.5em;\r\n  max-height: 15em;\r\n}\r\n\r\n.vjs-layout-tiny .vjs-menu-button-popup .vjs-menu .vjs-menu-content,\r\n.vjs-layout-x-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content {\r\n  max-height: 5em;\r\n}\r\n\r\n.vjs-layout-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content {\r\n  max-height: 10em;\r\n}\r\n\r\n.vjs-layout-medium .vjs-menu-button-popup .vjs-menu .vjs-menu-content {\r\n  max-height: 14em;\r\n}\r\n\r\n.vjs-layout-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content,\r\n.vjs-layout-x-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content,\r\n.vjs-layout-huge .vjs-menu-button-popup .vjs-menu .vjs-menu-content {\r\n  max-height: 25em;\r\n}\r\n\r\n.vjs-workinghover .vjs-menu-button-popup.vjs-hover .vjs-menu,\r\n.vjs-menu-button-popup .vjs-menu.vjs-lock-showing {\r\n  display: block;\r\n}\r\n\r\n.video-js .vjs-menu-button-inline {\r\n  transition: all 0.4s;\r\n  overflow: hidden;\r\n}\r\n\r\n.video-js .vjs-menu-button-inline:before {\r\n  width: 2.222222222em;\r\n}\r\n\r\n.video-js .vjs-menu-button-inline:hover,\r\n.video-js .vjs-menu-button-inline:focus,\r\n.video-js .vjs-menu-button-inline.vjs-slider-active,\r\n.video-js.vjs-no-flex .vjs-menu-button-inline {\r\n  width: 12em;\r\n}\r\n\r\n.vjs-menu-button-inline .vjs-menu {\r\n  opacity: 0;\r\n  height: 100%;\r\n  width: auto;\r\n  position: absolute;\r\n  left: 4em;\r\n  top: 0;\r\n  padding: 0;\r\n  margin: 0;\r\n  transition: all 0.4s;\r\n}\r\n\r\n.vjs-menu-button-inline:hover .vjs-menu,\r\n.vjs-menu-button-inline:focus .vjs-menu,\r\n.vjs-menu-button-inline.vjs-slider-active .vjs-menu {\r\n  display: block;\r\n  opacity: 1;\r\n}\r\n\r\n.vjs-no-flex .vjs-menu-button-inline .vjs-menu {\r\n  display: block;\r\n  opacity: 1;\r\n  position: relative;\r\n  width: auto;\r\n}\r\n\r\n.vjs-no-flex .vjs-menu-button-inline:hover .vjs-menu,\r\n.vjs-no-flex .vjs-menu-button-inline:focus .vjs-menu,\r\n.vjs-no-flex .vjs-menu-button-inline.vjs-slider-active .vjs-menu {\r\n  width: auto;\r\n}\r\n\r\n.vjs-menu-button-inline .vjs-menu-content {\r\n  width: auto;\r\n  height: 100%;\r\n  margin: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.video-js .vjs-control-bar {\r\n  display: none;\r\n  width: 100%;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 3em;\r\n  background-color: #2B333F;\r\n  background-color: rgba(43, 51, 63, 0.7);\r\n}\r\n\r\n.vjs-has-started .vjs-control-bar {\r\n  display: flex;\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transition: visibility 0.1s, opacity 0.1s;\r\n}\r\n\r\n.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\r\n  visibility: visible;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: visibility 1s, opacity 1s;\r\n}\r\n\r\n.vjs-controls-disabled .vjs-control-bar,\r\n.vjs-using-native-controls .vjs-control-bar,\r\n.vjs-error .vjs-control-bar {\r\n  display: none !important;\r\n}\r\n\r\n.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.vjs-has-started.vjs-no-flex .vjs-control-bar {\r\n  display: table;\r\n}\r\n\r\n.video-js .vjs-control {\r\n  position: relative;\r\n  text-align: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100%;\r\n  width: 4em;\r\n  flex: none;\r\n}\r\n\r\n.vjs-button > .vjs-icon-placeholder:before {\r\n  font-size: 1.8em;\r\n  line-height: 1.67;\r\n}\r\n\r\n.vjs-button > .vjs-icon-placeholder {\r\n  display: block;\r\n}\r\n\r\n.video-js .vjs-control:focus:before,\r\n.video-js .vjs-control:hover:before,\r\n.video-js .vjs-control:focus {\r\n  text-shadow: 0em 0em 1em white;\r\n}\r\n\r\n.video-js .vjs-control-text {\r\n  border: 0;\r\n  clip: rect(0 0 0 0);\r\n  height: 1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: absolute;\r\n  width: 1px;\r\n}\r\n\r\n.vjs-no-flex .vjs-control {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.video-js .vjs-custom-control-spacer {\r\n  display: none;\r\n}\r\n\r\n.video-js .vjs-progress-control {\r\n  cursor: pointer;\r\n  flex: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  min-width: 4em;\r\n  touch-action: none;\r\n}\r\n\r\n.video-js .vjs-progress-control.disabled {\r\n  cursor: default;\r\n}\r\n\r\n.vjs-live .vjs-progress-control {\r\n  display: none;\r\n}\r\n\r\n.vjs-liveui .vjs-progress-control {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.vjs-no-flex .vjs-progress-control {\r\n  width: auto;\r\n}\r\n\r\n.video-js .vjs-progress-holder {\r\n  flex: auto;\r\n  transition: all 0.2s;\r\n  height: 0.3em;\r\n}\r\n\r\n.video-js .vjs-progress-control .vjs-progress-holder {\r\n  margin: 0 10px;\r\n}\r\n\r\n.video-js .vjs-progress-control:hover .vjs-progress-holder {\r\n  font-size: 1.6666666667em;\r\n}\r\n\r\n.video-js .vjs-progress-control:hover .vjs-progress-holder.disabled {\r\n  font-size: 1em;\r\n}\r\n\r\n.video-js .vjs-progress-holder .vjs-play-progress,\r\n.video-js .vjs-progress-holder .vjs-load-progress,\r\n.video-js .vjs-progress-holder .vjs-load-progress div {\r\n  position: absolute;\r\n  display: block;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 0;\r\n}\r\n\r\n.video-js .vjs-play-progress {\r\n  background-color: #fff;\r\n}\r\n.video-js .vjs-play-progress:before {\r\n  font-size: 0.9em;\r\n  position: absolute;\r\n  right: -0.5em;\r\n  top: -0.3333333333em;\r\n  z-index: 1;\r\n}\r\n\r\n.video-js .vjs-load-progress {\r\n  background: rgba(115, 133, 159, 0.5);\r\n}\r\n\r\n.video-js .vjs-load-progress div {\r\n  background: rgba(115, 133, 159, 0.75);\r\n}\r\n\r\n.video-js .vjs-time-tooltip {\r\n  background-color: #fff;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  border-radius: 0.3em;\r\n  color: #000;\r\n  float: right;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 1em;\r\n  padding: 6px 8px 8px 8px;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  top: -3.4em;\r\n  visibility: hidden;\r\n  z-index: 1;\r\n}\r\n\r\n.video-js .vjs-progress-holder:focus .vjs-time-tooltip {\r\n  display: none;\r\n}\r\n\r\n.video-js .vjs-progress-control:hover .vjs-time-tooltip,\r\n.video-js .vjs-progress-control:hover .vjs-progress-holder:focus .vjs-time-tooltip {\r\n  display: block;\r\n  font-size: 0.6em;\r\n  visibility: visible;\r\n}\r\n\r\n.video-js .vjs-progress-control.disabled:hover .vjs-time-tooltip {\r\n  font-size: 1em;\r\n}\r\n\r\n.video-js .vjs-progress-control .vjs-mouse-display {\r\n  display: none;\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 100%;\r\n  background-color: #000;\r\n  z-index: 1;\r\n}\r\n\r\n.vjs-no-flex .vjs-progress-control .vjs-mouse-display {\r\n  z-index: 0;\r\n}\r\n\r\n.video-js .vjs-progress-control:hover .vjs-mouse-display {\r\n  display: block;\r\n}\r\n\r\n.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: visibility 1s, opacity 1s;\r\n}\r\n\r\n.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display {\r\n  display: none;\r\n}\r\n\r\n.vjs-mouse-display .vjs-time-tooltip {\r\n  color: #fff;\r\n  background-color: #000;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.video-js .vjs-slider {\r\n  position: relative;\r\n  cursor: pointer;\r\n  padding: 0;\r\n  margin: 0 0.45em 0 0.45em;\r\n  /* iOS Safari */\r\n  -webkit-touch-callout: none;\r\n  /* Safari */\r\n  -webkit-user-select: none;\r\n  /* Konqueror HTML */\r\n  /* Firefox */\r\n  -moz-user-select: none;\r\n  /* Internet Explorer/Edge */\r\n  -ms-user-select: none;\r\n  /* Non-prefixed version, currently supported by Chrome and Opera */\r\n  user-select: none;\r\n  background-color: #73859f;\r\n  background-color: rgba(115, 133, 159, 0.5);\r\n}\r\n\r\n.video-js .vjs-slider.disabled {\r\n  cursor: default;\r\n}\r\n\r\n.video-js .vjs-slider:focus {\r\n  text-shadow: 0em 0em 1em white;\r\n  box-shadow: 0 0 1em #fff;\r\n}\r\n\r\n.video-js .vjs-mute-control {\r\n  cursor: pointer;\r\n  flex: none;\r\n}\r\n.video-js .vjs-volume-control {\r\n  cursor: pointer;\r\n  margin-right: 1em;\r\n  display: flex;\r\n}\r\n\r\n.video-js .vjs-volume-control.vjs-volume-horizontal {\r\n  width: 5em;\r\n}\r\n\r\n.video-js .vjs-volume-panel .vjs-volume-control {\r\n  visibility: visible;\r\n  opacity: 0;\r\n  width: 1px;\r\n  height: 1px;\r\n  margin-left: -1px;\r\n}\r\n\r\n.video-js .vjs-volume-panel {\r\n  transition: width 1s;\r\n}\r\n.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control, .video-js .vjs-volume-panel:active .vjs-volume-control, .video-js .vjs-volume-panel:focus .vjs-volume-control, .video-js .vjs-volume-panel .vjs-volume-control:active, .video-js .vjs-volume-panel.vjs-hover .vjs-mute-control ~ .vjs-volume-control, .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  position: relative;\r\n  transition: visibility 0.1s, opacity 0.1s, height 0.1s, width 0.1s, left 0s, top 0s;\r\n}\r\n.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-horizontal, .video-js .vjs-volume-panel.vjs-hover .vjs-mute-control ~ .vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-horizontal {\r\n  width: 5em;\r\n  height: 3em;\r\n  margin-right: 0;\r\n}\r\n.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-vertical, .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical, .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical, .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical, .video-js .vjs-volume-panel.vjs-hover .vjs-mute-control ~ .vjs-volume-control.vjs-volume-vertical, .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical {\r\n  left: -3.5em;\r\n  transition: left 0s;\r\n}\r\n.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover, .video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active {\r\n  width: 10em;\r\n  transition: width 0.1s;\r\n}\r\n.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-mute-toggle-only {\r\n  width: 4em;\r\n}\r\n\r\n.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {\r\n  height: 8em;\r\n  width: 3em;\r\n  left: -3000em;\r\n  transition: visibility 1s, opacity 1s, height 1s 1s, width 1s 1s, left 1s 1s, top 1s 1s;\r\n}\r\n\r\n.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {\r\n  transition: visibility 1s, opacity 1s, height 1s 1s, width 1s, left 1s 1s, top 1s 1s;\r\n}\r\n\r\n.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {\r\n  width: 5em;\r\n  height: 3em;\r\n  visibility: visible;\r\n  opacity: 1;\r\n  position: relative;\r\n  transition: none;\r\n}\r\n\r\n.video-js.vjs-no-flex .vjs-volume-control.vjs-volume-vertical,\r\n.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {\r\n  position: absolute;\r\n  bottom: 3em;\r\n  left: 0.5em;\r\n}\r\n\r\n.video-js .vjs-volume-panel {\r\n  display: flex;\r\n}\r\n\r\n.video-js .vjs-volume-bar {\r\n  margin: 1.35em 0.45em;\r\n}\r\n\r\n.vjs-volume-bar.vjs-slider-horizontal {\r\n  width: 5em;\r\n  height: 0.3em;\r\n}\r\n\r\n.vjs-volume-bar.vjs-slider-vertical {\r\n  width: 0.3em;\r\n  height: 5em;\r\n  margin: 1.35em auto;\r\n}\r\n\r\n.video-js .vjs-volume-level {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: #fff;\r\n}\r\n.video-js .vjs-volume-level:before {\r\n  position: absolute;\r\n  font-size: 0.9em;\r\n  z-index: 1;\r\n}\r\n\r\n.vjs-slider-vertical .vjs-volume-level {\r\n  width: 0.3em;\r\n}\r\n.vjs-slider-vertical .vjs-volume-level:before {\r\n  top: -0.5em;\r\n  left: -0.3em;\r\n  z-index: 1;\r\n}\r\n\r\n.vjs-slider-horizontal .vjs-volume-level {\r\n  height: 0.3em;\r\n}\r\n.vjs-slider-horizontal .vjs-volume-level:before {\r\n  top: -0.3em;\r\n  right: -0.5em;\r\n}\r\n\r\n.video-js .vjs-volume-panel.vjs-volume-panel-vertical {\r\n  width: 4em;\r\n}\r\n\r\n.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level {\r\n  height: 100%;\r\n}\r\n\r\n.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level {\r\n  width: 100%;\r\n}\r\n\r\n.video-js .vjs-volume-vertical {\r\n  width: 3em;\r\n  height: 8em;\r\n  bottom: 8em;\r\n  background-color: #2B333F;\r\n  background-color: rgba(43, 51, 63, 0.7);\r\n}\r\n\r\n.video-js .vjs-volume-horizontal .vjs-menu {\r\n  left: -2em;\r\n}\r\n\r\n.video-js .vjs-volume-tooltip {\r\n  background-color: #fff;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  border-radius: 0.3em;\r\n  color: #000;\r\n  float: right;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 1em;\r\n  padding: 6px 8px 8px 8px;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  top: -3.4em;\r\n  visibility: hidden;\r\n  z-index: 1;\r\n}\r\n\r\n.video-js .vjs-volume-control:hover .vjs-volume-tooltip,\r\n.video-js .vjs-volume-control:hover .vjs-progress-holder:focus .vjs-volume-tooltip {\r\n  display: block;\r\n  font-size: 1em;\r\n  visibility: visible;\r\n}\r\n\r\n.video-js .vjs-volume-vertical:hover .vjs-volume-tooltip,\r\n.video-js .vjs-volume-vertical:hover .vjs-progress-holder:focus .vjs-volume-tooltip {\r\n  left: 1em;\r\n  top: -12px;\r\n}\r\n\r\n.video-js .vjs-volume-control.disabled:hover .vjs-volume-tooltip {\r\n  font-size: 1em;\r\n}\r\n\r\n.video-js .vjs-volume-control .vjs-mouse-display {\r\n  display: none;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 1px;\r\n  background-color: #000;\r\n  z-index: 1;\r\n}\r\n\r\n.video-js .vjs-volume-horizontal .vjs-mouse-display {\r\n  width: 1px;\r\n  height: 100%;\r\n}\r\n\r\n.vjs-no-flex .vjs-volume-control .vjs-mouse-display {\r\n  z-index: 0;\r\n}\r\n\r\n.video-js .vjs-volume-control:hover .vjs-mouse-display {\r\n  display: block;\r\n}\r\n\r\n.video-js.vjs-user-inactive .vjs-volume-control .vjs-mouse-display {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: visibility 1s, opacity 1s;\r\n}\r\n\r\n.video-js.vjs-user-inactive.vjs-no-flex .vjs-volume-control .vjs-mouse-display {\r\n  display: none;\r\n}\r\n\r\n.vjs-mouse-display .vjs-volume-tooltip {\r\n  color: #fff;\r\n  background-color: #000;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.vjs-poster {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  background-repeat: no-repeat;\r\n  background-position: 50% 50%;\r\n  background-size: contain;\r\n  background-color: #000000;\r\n  cursor: pointer;\r\n  margin: 0;\r\n  padding: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 100%;\r\n}\r\n\r\n.vjs-has-started .vjs-poster {\r\n  display: none;\r\n}\r\n\r\n.vjs-audio.vjs-has-started .vjs-poster {\r\n  display: block;\r\n}\r\n\r\n.vjs-using-native-controls .vjs-poster {\r\n  display: none;\r\n}\r\n\r\n.video-js .vjs-live-control {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  flex: auto;\r\n  font-size: 1em;\r\n  line-height: 3em;\r\n}\r\n\r\n.vjs-no-flex .vjs-live-control {\r\n  display: table-cell;\r\n  width: auto;\r\n  text-align: left;\r\n}\r\n\r\n.video-js:not(.vjs-live) .vjs-live-control,\r\n.video-js.vjs-liveui .vjs-live-control {\r\n  display: none;\r\n}\r\n\r\n.video-js .vjs-seek-to-live-control {\r\n  align-items: center;\r\n  cursor: pointer;\r\n  flex: none;\r\n  display: inline-flex;\r\n  height: 100%;\r\n  padding-left: 0.5em;\r\n  padding-right: 0.5em;\r\n  font-size: 1em;\r\n  line-height: 3em;\r\n  width: auto;\r\n  min-width: 4em;\r\n}\r\n\r\n.vjs-no-flex .vjs-seek-to-live-control {\r\n  display: table-cell;\r\n  width: auto;\r\n  text-align: left;\r\n}\r\n\r\n.video-js.vjs-live:not(.vjs-liveui) .vjs-seek-to-live-control,\r\n.video-js:not(.vjs-live) .vjs-seek-to-live-control {\r\n  display: none;\r\n}\r\n\r\n.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge {\r\n  cursor: auto;\r\n}\r\n\r\n.vjs-seek-to-live-control .vjs-icon-placeholder {\r\n  margin-right: 0.5em;\r\n  color: #888;\r\n}\r\n\r\n.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge .vjs-icon-placeholder {\r\n  color: red;\r\n}\r\n\r\n.video-js .vjs-time-control {\r\n  flex: none;\r\n  font-size: 1em;\r\n  line-height: 3em;\r\n  min-width: 2em;\r\n  width: auto;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n}\r\n\r\n.vjs-live .vjs-time-control {\r\n  display: none;\r\n}\r\n\r\n.video-js .vjs-current-time,\r\n.vjs-no-flex .vjs-current-time {\r\n  display: none;\r\n}\r\n\r\n.video-js .vjs-duration,\r\n.vjs-no-flex .vjs-duration {\r\n  display: none;\r\n}\r\n\r\n.vjs-time-divider {\r\n  display: none;\r\n  line-height: 3em;\r\n}\r\n\r\n.vjs-live .vjs-time-divider {\r\n  display: none;\r\n}\r\n\r\n.video-js .vjs-play-control {\r\n  cursor: pointer;\r\n}\r\n\r\n.video-js .vjs-play-control .vjs-icon-placeholder {\r\n  flex: none;\r\n}\r\n\r\n.vjs-text-track-display {\r\n  position: absolute;\r\n  bottom: 3em;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display {\r\n  bottom: 1em;\r\n}\r\n\r\n.video-js .vjs-text-track {\r\n  font-size: 1.4em;\r\n  text-align: center;\r\n  margin-bottom: 0.1em;\r\n}\r\n\r\n.vjs-subtitles {\r\n  color: #fff;\r\n}\r\n\r\n.vjs-captions {\r\n  color: #fc6;\r\n}\r\n\r\n.vjs-tt-cue {\r\n  display: block;\r\n}\r\n\r\nvideo::-webkit-media-text-track-display {\r\n  transform: translateY(-3em);\r\n}\r\n\r\n.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display {\r\n  transform: translateY(-1.5em);\r\n}\r\n\r\n.video-js .vjs-picture-in-picture-control {\r\n  cursor: pointer;\r\n  flex: none;\r\n}\r\n.video-js .vjs-fullscreen-control {\r\n  cursor: pointer;\r\n  flex: none;\r\n}\r\n.vjs-playback-rate > .vjs-menu-button,\r\n.vjs-playback-rate .vjs-playback-rate-value {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.vjs-playback-rate .vjs-playback-rate-value {\r\n  pointer-events: none;\r\n  font-size: 1.5em;\r\n  line-height: 2;\r\n  text-align: center;\r\n}\r\n\r\n.vjs-playback-rate .vjs-menu {\r\n  width: 4em;\r\n  left: 0em;\r\n}\r\n\r\n.vjs-error .vjs-error-display .vjs-modal-dialog-content {\r\n  font-size: 1.4em;\r\n  text-align: center;\r\n}\r\n\r\n.vjs-error .vjs-error-display:before {\r\n  color: #fff;\r\n  content: \"X\";\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 4em;\r\n  left: 0;\r\n  line-height: 1;\r\n  margin-top: -0.5em;\r\n  position: absolute;\r\n  text-shadow: 0.05em 0.05em 0.1em #000;\r\n  text-align: center;\r\n  top: 50%;\r\n  vertical-align: middle;\r\n  width: 100%;\r\n}\r\n\r\n.vjs-loading-spinner {\r\n  display: none;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin: -25px 0 0 -25px;\r\n  opacity: 0.85;\r\n  text-align: left;\r\n  border: 6px solid rgba(43, 51, 63, 0.7);\r\n  box-sizing: border-box;\r\n  background-clip: padding-box;\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 25px;\r\n  visibility: hidden;\r\n}\r\n\r\n.vjs-seeking .vjs-loading-spinner,\r\n.vjs-waiting .vjs-loading-spinner {\r\n  display: block;\r\n  -webkit-animation: vjs-spinner-show 0s linear 0.3s forwards;\r\n          animation: vjs-spinner-show 0s linear 0.3s forwards;\r\n}\r\n\r\n.vjs-loading-spinner:before,\r\n.vjs-loading-spinner:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  margin: -6px;\r\n  box-sizing: inherit;\r\n  width: inherit;\r\n  height: inherit;\r\n  border-radius: inherit;\r\n  opacity: 1;\r\n  border: inherit;\r\n  border-color: transparent;\r\n  border-top-color: white;\r\n}\r\n\r\n.vjs-seeking .vjs-loading-spinner:before,\r\n.vjs-seeking .vjs-loading-spinner:after,\r\n.vjs-waiting .vjs-loading-spinner:before,\r\n.vjs-waiting .vjs-loading-spinner:after {\r\n  -webkit-animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite;\r\n  animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite;\r\n}\r\n\r\n.vjs-seeking .vjs-loading-spinner:before,\r\n.vjs-waiting .vjs-loading-spinner:before {\r\n  border-top-color: white;\r\n}\r\n\r\n.vjs-seeking .vjs-loading-spinner:after,\r\n.vjs-waiting .vjs-loading-spinner:after {\r\n  border-top-color: white;\r\n  -webkit-animation-delay: 0.44s;\r\n  animation-delay: 0.44s;\r\n}\r\n\r\n@keyframes vjs-spinner-show {\r\n  to {\r\n    visibility: visible;\r\n  }\r\n}\r\n@-webkit-keyframes vjs-spinner-show {\r\n  to {\r\n    visibility: visible;\r\n  }\r\n}\r\n@keyframes vjs-spinner-spin {\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@-webkit-keyframes vjs-spinner-spin {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes vjs-spinner-fade {\r\n  0% {\r\n    border-top-color: #73859f;\r\n  }\r\n  20% {\r\n    border-top-color: #73859f;\r\n  }\r\n  35% {\r\n    border-top-color: white;\r\n  }\r\n  60% {\r\n    border-top-color: #73859f;\r\n  }\r\n  100% {\r\n    border-top-color: #73859f;\r\n  }\r\n}\r\n@-webkit-keyframes vjs-spinner-fade {\r\n  0% {\r\n    border-top-color: #73859f;\r\n  }\r\n  20% {\r\n    border-top-color: #73859f;\r\n  }\r\n  35% {\r\n    border-top-color: white;\r\n  }\r\n  60% {\r\n    border-top-color: #73859f;\r\n  }\r\n  100% {\r\n    border-top-color: #73859f;\r\n  }\r\n}\r\n.vjs-chapters-button .vjs-menu ul {\r\n  width: 24em;\r\n}\r\n\r\n.video-js .vjs-subs-caps-button + .vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder {\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  margin-bottom: -0.1em;\r\n}\r\n\r\n.video-js .vjs-subs-caps-button + .vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before {\r\n  font-family: VideoJS;\r\n  content: \"\";\r\n  font-size: 1.5em;\r\n  line-height: inherit;\r\n}\r\n\r\n.video-js .vjs-audio-button + .vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder {\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  margin-bottom: -0.1em;\r\n}\r\n\r\n.video-js .vjs-audio-button + .vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before {\r\n  font-family: VideoJS;\r\n  content: \" \";\r\n  font-size: 1.5em;\r\n  line-height: inherit;\r\n}\r\n\r\n.video-js.vjs-layout-small .vjs-current-time,\r\n.video-js.vjs-layout-small .vjs-time-divider,\r\n.video-js.vjs-layout-small .vjs-duration,\r\n.video-js.vjs-layout-small .vjs-remaining-time,\r\n.video-js.vjs-layout-small .vjs-playback-rate,\r\n.video-js.vjs-layout-small .vjs-volume-control, .video-js.vjs-layout-x-small .vjs-current-time,\r\n.video-js.vjs-layout-x-small .vjs-time-divider,\r\n.video-js.vjs-layout-x-small .vjs-duration,\r\n.video-js.vjs-layout-x-small .vjs-remaining-time,\r\n.video-js.vjs-layout-x-small .vjs-playback-rate,\r\n.video-js.vjs-layout-x-small .vjs-volume-control, .video-js.vjs-layout-tiny .vjs-current-time,\r\n.video-js.vjs-layout-tiny .vjs-time-divider,\r\n.video-js.vjs-layout-tiny .vjs-duration,\r\n.video-js.vjs-layout-tiny .vjs-remaining-time,\r\n.video-js.vjs-layout-tiny .vjs-playback-rate,\r\n.video-js.vjs-layout-tiny .vjs-volume-control {\r\n  display: none;\r\n}\r\n.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover, .video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active, .video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover, .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover, .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active, .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover, .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:hover, .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active, .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover {\r\n  width: auto;\r\n  width: initial;\r\n}\r\n.video-js.vjs-layout-x-small .vjs-progress-control, .video-js.vjs-layout-tiny .vjs-progress-control {\r\n  display: none;\r\n}\r\n.video-js.vjs-layout-x-small .vjs-custom-control-spacer {\r\n  flex: auto;\r\n  display: block;\r\n}\r\n.video-js.vjs-layout-x-small.vjs-no-flex .vjs-custom-control-spacer {\r\n  width: auto;\r\n}\r\n\r\n.vjs-modal-dialog.vjs-text-track-settings {\r\n  background-color: #2B333F;\r\n  background-color: rgba(43, 51, 63, 0.75);\r\n  color: #fff;\r\n  height: 70%;\r\n}\r\n\r\n.vjs-text-track-settings .vjs-modal-dialog-content {\r\n  display: table;\r\n}\r\n\r\n.vjs-text-track-settings .vjs-track-settings-colors,\r\n.vjs-text-track-settings .vjs-track-settings-font,\r\n.vjs-text-track-settings .vjs-track-settings-controls {\r\n  display: table-cell;\r\n}\r\n\r\n.vjs-text-track-settings .vjs-track-settings-controls {\r\n  text-align: right;\r\n  vertical-align: bottom;\r\n}\r\n\r\n@supports (display: grid) {\r\n  .vjs-text-track-settings .vjs-modal-dialog-content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr;\r\n    padding: 20px 24px 0px 24px;\r\n  }\r\n\r\n  .vjs-track-settings-controls .vjs-default-button {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .vjs-text-track-settings .vjs-track-settings-controls {\r\n    grid-column: 1/-1;\r\n  }\r\n\r\n  .vjs-layout-small .vjs-text-track-settings .vjs-modal-dialog-content,\r\n.vjs-layout-x-small .vjs-text-track-settings .vjs-modal-dialog-content,\r\n.vjs-layout-tiny .vjs-text-track-settings .vjs-modal-dialog-content {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n.vjs-track-setting > select {\r\n  margin-right: 1em;\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n.vjs-text-track-settings fieldset {\r\n  margin: 5px;\r\n  padding: 3px;\r\n  border: none;\r\n}\r\n\r\n.vjs-text-track-settings fieldset span {\r\n  display: inline-block;\r\n}\r\n\r\n.vjs-text-track-settings fieldset span > select {\r\n  max-width: 7.3em;\r\n}\r\n\r\n.vjs-text-track-settings legend {\r\n  color: #fff;\r\n  margin: 0 0 5px 0;\r\n}\r\n\r\n.vjs-text-track-settings .vjs-label {\r\n  position: absolute;\r\n  clip: rect(1px 1px 1px 1px);\r\n  clip: rect(1px, 1px, 1px, 1px);\r\n  display: block;\r\n  margin: 0 0 5px 0;\r\n  padding: 0;\r\n  border: 0;\r\n  height: 1px;\r\n  width: 1px;\r\n  overflow: hidden;\r\n}\r\n\r\n.vjs-track-settings-controls button:focus,\r\n.vjs-track-settings-controls button:active {\r\n  outline-style: solid;\r\n  outline-width: medium;\r\n  background-image: linear-gradient(0deg, #fff 88%, #73859f 100%);\r\n}\r\n\r\n.vjs-track-settings-controls button:hover {\r\n  color: rgba(43, 51, 63, 0.75);\r\n}\r\n\r\n.vjs-track-settings-controls button {\r\n  background-color: #fff;\r\n  background-image: linear-gradient(-180deg, #fff 88%, #73859f 100%);\r\n  color: #2B333F;\r\n  cursor: pointer;\r\n  border-radius: 2px;\r\n}\r\n\r\n.vjs-track-settings-controls .vjs-default-button {\r\n  margin-right: 1em;\r\n}\r\n\r\n@media print {\r\n  .video-js > *:not(.vjs-tech):not(.vjs-poster) {\r\n    visibility: hidden;\r\n  }\r\n}\r\n.vjs-resize-manager {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: none;\r\n  z-index: -1000;\r\n}\r\n\r\n.js-focus-visible .video-js *:focus:not(.focus-visible) {\r\n  outline: none;\r\n}\r\n\r\n.video-js *:focus:not(:focus-visible) {\r\n  outline: none;\r\n}\r\n";
  n(css$4,{});

  var css$3 = "\r\n.vnjson__video{\r\n  width: 100%;\r\n  height: 100%;\r\n  box-shadow: 2px 2px 5px rgba(0,0,0,0.3);\r\n}\r\n.video-js{\r\n  top: 50px;\r\n  left: 570px;\r\n  width: 400px;\r\n  height: 250px;\r\n}\r\n\r\n";
  n(css$3,{});

  var tpl$1 = "<div class=\"vnjson__video component\">\r\n    <video id=\"vnjson__video\" class=\"video-js\"></video>\r\n</div>\r\n";

  function video () {
    var _this = this;

    var $tpl = $(tpl$1);
    this.$store.$screen.append($tpl);
    var options = {
      responsive: true,
      controls: false,
      autoplay: false,
      preload: 'auto'
    };
    var player = videojs('vnjson__video', options);
    player.on('error', function (err) {
      videojs.log(err);
    });
    var onEndObj;
    player.on('ended', function () {
      $tpl.fadeOut();

      if (onEndObj) {
        _this.exec(onEndObj);
      }
    });
    this.on('video', function (param) {
      onEndObj = null;

      if (_typeof(param) === 'object') {
        var asset = _this.getAssetByName(param.name);

        player.src(asset.url);

        if (param.css) {
          $tpl.find('.video-js').css(param.css);
        }

        if (param.volume) {
          player.ready(function () {
            player.volume(param.volume);
            player.play();
          });
        }

        if (param.onEnd) {
          onEndObj = param.onEnd;
        }

        $tpl.fadeIn();
      } else if (typeof param === 'string') {
        switch (param) {
          case 'pause':
            player.pause();
            break;

          case 'play':
            player.play();
            break;

          default:
            var _asset = _this.getAssetByName(param);

            player.src(_asset.url);
            player.ready(function () {
              player.play();
            });
            $tpl.fadeIn();
        }
      } else {
        player.pause();
        $tpl.fadeOut();
      }
    });
  }

  var css$2 = ".mcap__ide-serpents{\r\n  top: 50px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  padding: 45px;\r\n  overflow: hidden;\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAygAAAHgCAYAAABO0EkBAAABb2lDQ1BpY2MAACiRdZE7SwNBFIW/REXxgYIWIhZbqIgYCApiKRG0UYsYwVezu9kkQjYuuxsk2Ao2FoKFaOOr8B9oK9gqCIIiiFj5A3w1IusdE0iQOMvs/Tgz5zJzBsJTWdP2aqNg53w3PhnT5hcWtfoXammjkQFCuuk507MTCf4dn3eEVL2NqF7/76s6mpKWZ0KoQXjEdFxfeEx4as13FG8Jd5gZPSl8KDzoygGFr5RuFPlZcbrI74rdRHwcwqqnlq5go4LNjGsL9wv32Nm8WTqPukmzlZubldolsxuPOJPE0DDIs0IWn4jUnGRW3Rf99c2wKh5T/g4FXHGkyYh3UNS8dLWkpkS35MtSULn/zdNLDQ8VuzfHoO4pCN56oX4HvreD4OsoCL6PoeYRLnJl/6rkNPoh+nZZ6zmA1g04uyxrxi6cb0Lng6O7+q9UIzOcSsHrKbQsQPsNNC4Vsyqtc3IPiXV5omvY24c+2d+6/APHSWfwJT4tSQAAAAlwSFlzAAALEwAACxMBAJqcGAAADpFJREFUeF7t3UuLZGcdx/H/qXOq+jZjJpKIiTBKwM1sXAgBdRE3bnwF2brRF+DL0DegiyhxFYy7IOLCnWBEVIQEFCMmShKSOJf09K26LlZVz3Qm6SHFXE77G/l8iupz6tTz0F278+U5p7r51jeenf/qh9+vV1/7ey099cSleueD6wUAAHCevveDF2rwyYOH4/HdxgIAAPTmN79+ZbUdHBwcrHYev7hdbTuoqzf2P20eAADAA5nP5zUcdqevX3jp5dP9bjqd1v7RUe0eHNZ0OqumOZ1W1QyqHY4KAADgYZmOj+r4eLLavzNOlroLFy7U0dG4JpPZ6cHxe2+c7jfTw2Xi1B3lAgAAcN8ujLr607+v1+tv7555r9vYGNVs9lGcrGJk6f2/nmxHOzWo2eJx5nYVAACAe9ZtdXXt/Q/qjbeu15OXdmpn2K6O7yzCpVvGSXPH6kg7HH40c/vx5YVeNbWCAgAAPCzdsLrRZm1vba5e7h1Pa3jQ1GQ2P7ss0nQbH+1Pb32jlzgBAADOwdnrtubzatquarhV89YN8gAAwPlxYwkAABBDoAAAADEECgAAEEOgAAAAMQQKAAAQQ6AAAAAxBAoAABBDoAAAADEECgAAEEOgAAAAMQQKAAAQo1s34H7M51Ub3aC2hm3NFw8AAOD/Q7N4HBxP62gyq6ZZN/re9RIoj2119ft/3qjX39mtnVEvvwIAAPgf2BtP6spTF+vZLz1WHx5O1g2/Z73UQ9c29Z+9cb159aA+s4iV7WFby7iylgIAAI+e5UrJ8iqpazf369recT2+NajR8LNVj0qgLP/4YTuonY2u2kFTb10/XMVJDytAAABAz5bn98tIuXL56XpmOKwvXBrU0dF43bT70kug3LbRNbU3ntVr7948WDcWAACI1S6e0+8+/7Wt5776lfrbn39bN/71lxps7Kybd896DZS6VVoLs5NXFlEAAOARNdvf368Pd3fraDyuwaCfLwTuN1A+7sK6AQAAQKSbdU6LDf1kDwAAwH0QKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABADIECAADEECgAAEAMgQIAAMQQKAAAQAyBAgAAxBAoAABAjPMMlL3F82DdIAAAIMq5nsN36wY8kKap+Xy+3NtZNxQAAIi0dXtntji3bxbn+H3qNVCm01l1bVsXtjb3l5nS70cBAAD6MJnOpl07aDe6bvv4eLpu+APpNVD2j8b19BOX6qffeX57tAiV8bTfDwMAADx8y4WG5YLDZBEnV3dvrhv+QHoJlOWqz/F0VvvjaR0cz2o43KpqBzUczNZNBQAA0twulGZStTi3b9pudaiPs/teAmX3cFpXPn+xPrczrK3NUX34jz+srlW7dT8KAADwiGoGbc2O9mrejnq5haOXQBlPZvX0pVE98+R2TafT2t19d1VXfXwAAADg/KxulG+HVe0iJXpYgOglUJaXeC0v7To4Hp8c6DZWm4f/5wMAAOdtdV7fQ5wsnef/QQEAAPhUAgUAAIghUAAAgBgCBQAAiCFQAACAGAIFAACIIVAAAIAYAgUAAIghUAAAgBgCBQAAiCFQAACAc7M1bGtzOKhu0NRsdvZ9gQIAAJyb928erbYH42m17dn3BQoAANC7bnCSHl9+cuf02PbobKF0nzwwOdyr7W5e7daomuHwzAQAAIB71TZNTefz2j++y3VddzgTKN3mTu1fbeqVV9+szZ2Ld5sDAABwj5rFc17v3RzXeDKrdtDcddSZQFn60S9/t/jZVh3s3+1tAACA+7LZtasb5OeL/dl8ubJStTM6yZJltJwJlB+/+OJdrwUDAAB4GOa3tss4mcxuvzrxsUD5yUsv190XWgAAAB6uzW5Q1w4ntTee1GObJ2lyGig/+/kvVkstAAAA52F5SdfwVoPcWITKUvPtb359/sWNw0+bBwAA0Ls/vr1XzeXLl59bNxAAAOA8/BfX+UoSk1jTTwAAAABJRU5ErkJggg==);\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}";
  n(css$2,{});

  var $tpl$2 = $('<div class="mcap__ide-serpents component"></div>');
  function ide () {
    var _this = this;

    this.on('postload', function () {
      if (_this.TREE.$root["package"]['ide']) {
        init$1.call(_this);
      }
    });
  }

  function init$1() {
    var _this2 = this;

    var $iframe = $('<iframe id="mcap__ide" src="data/ide/index.html" width="600" height="361"></iframe>');
    this.$store.$screen.append($tpl$2);
    $tpl$2.append($iframe);
    var load = false;
    $('#mcap__ide').on("load", function () {
      load = true;
    });
    this.on('ide', function (data) {
      if (data) {
        $tpl$2.show();

        var file = _this2.getDataByName(data);

        var win = document.querySelector("iframe#mcap__ide").contentWindow;
        var url = location.origin + "/data/ide/index.html";

        if (load) {
          win.postMessage({
            file: (file === null || file === void 0 ? void 0 : file.body) || ''
          }, url);
        } else {
          setTimeout(function () {
            win.postMessage({
              file: (file === null || file === void 0 ? void 0 : file.body) || ''
            }, url);
          }, 2000);
        }
      } else {
        $tpl$2.hide();
      }
    });
  }

  var css$1 = ".typewrite{\r\n  width: 660px;\r\n  user-select: none;\r\n  background-color: #334;\r\n  padding: 10px;\r\n  border-radius: 4px;\r\n  box-shadow: 2px 2px 3px rgba(0,0,0,0.3);\r\n  top: 50px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n/*\r\n.typewrite__status{\r\n  border: 1px dashed gray;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0 10px;\r\n  width: 100%;\r\n  border-radius: 4px;\r\n}\r\n*/\r\n.typewrite__task{\r\n  margin-top: 5px;\r\n  color: gray;\r\n  width: 100%;\r\n  height: 50px;\r\n  padding: 15px 10px;\r\n  font-size: 22px;\r\n  border-radius: 4px;\r\n  \r\n  font-family: Minecraft;\r\n  box-shadow:  2px 2px 3px rgba(0,0,0,0.1);\r\n  background-color: #445;\r\n\r\n}\r\n.typewrite__textarea{\r\n  margin-top: 20px;\r\n  font-size: 22px;\r\n  color: gray;\r\n  width: 100%;\r\n  height: 50px;\r\n  padding: 15px 10px;\r\n  background-color: #445;\r\n  outline: 0;\r\n  border: 0;\r\n  resize: none;\r\n  overflow: hidden;\r\n  caret-color: orange;\r\n  border-radius: 4px;\r\n  font-family: Minecraft;\r\n  box-shadow:  2px 2px 3px rgba(0,0,0,0.1);\r\n\r\n}\r\n\r\n.active{\r\n  color: deepskyblue;\r\n}\r\n.hot{\r\n  color: lightgreen;\r\n}\r\n@keyframes hot {\r\n  from {\r\n    margin-bottom: 10%;\r\n\r\n  }\r\n  to {\r\n    margin-bottom: 0%;\r\n  }\r\n}\r\n\r\n.typewrite__character{\r\n  \r\n}\r\n\r\n\r\n/**\r\n * keyboard\r\n */\r\n.keyboard{\r\n  border: 1px solid rgba(0, 0, 0, 0.3);\r\n  border-radius: 4px;\r\n  margin-top: 15px;\r\n}\r\n.keyboard__row{\r\n  display: flex;\r\n}\r\n\r\n.keyboard__key{\r\n  padding: 5px;\r\n  margin: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  height: 35px;\r\n  width: 35px;\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\r\n  margin: 3px;\r\n  border-radius: 4px;\r\n  font-size: 12px;\r\n  color: gray;\r\n}\r\n\r\n.keyboard__actived{\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n\r\n}\r\n.keyboard__pressed{\r\n  background-color: darkslateblue;\r\n}\r\n\r\n\r\n.keyboard__keys_2{\r\n /* font-size: 10px;*/\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: 100%;\r\n}\r\n.keyboard__keys_2 +span{\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  width: 100%;\r\n}\r\n/**\r\n * keys\r\n */\r\n.keyboard__backspace{\r\n  width: 97px;\r\n}\r\n.keyboard__enter{\r\n  width: 70px;\r\n}\r\n\r\n.keyboard__caps-lock{\r\n  width: 97px;\r\n}\r\n.keyboard__shift{\r\n  width: 107px;\r\n}\r\n.keyboard__space{\r\n  width: 53.7%;\r\n}\r\n.keyboard__tab{\r\n  width: 62px;\r\n}\r\n.keyboard__backspace,\r\n.keyboard__enter,\r\n.keyboard__tab,\r\n.keyboard__caps-lock,\r\n.keyboard__shift,\r\n.keyboard__space,\r\n.keyboard__ctrl,\r\n.keyboard__win,\r\n.keyboard__doc,\r\n.keyboard__alt{\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n\r\n}";
  n(css$1,{});

  var tpl = "<div class=\"typewrite component\">\r\n    <div class=\"typewrite__task\"></div>\r\n    <textarea class=\"typewrite__textarea\" spellcheck=\"false\"></textarea>\r\n    <div class=\"keyboard\">\r\n        <div class=\"keyboard__row\"></div>\r\n        <div class=\"keyboard__row\"></div>\r\n        <div class=\"keyboard__row\"></div>\r\n        <div class=\"keyboard__row\"></div>\r\n        <div class=\"keyboard__row\"></div>\r\n    </div>\r\n</div>";

  var keyboard = [
  /**
   * @0
   */
  [{
    keys: ['ё', '`'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['1', '1'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: ['!', '!']
  }, {
    keys: ['2', '2'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: ['"', '@']
  }, {
    keys: ['3', '3'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: ['№', '#']
  }, {
    keys: ['4', '4'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: [';', '$']
  }, {
    keys: ['5', '5'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: ['%', '%']
  }, {
    keys: ['6', '6'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: [':', '^']
  }, {
    keys: ['7', '7'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: ['?', '&']
  }, {
    keys: ['8', '8'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: ['*', '*']
  }, {
    keys: ['9', '9'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: ['(', '(']
  }, {
    keys: ['0', '0'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: [')', ')']
  }, {
    keys: ['-', '-'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: ['_', '_']
  }, {
    keys: ['=', '='],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: ['+', '+']
  }, {
    keys: ['Backspace', 'Backspace'],
    pressed: false,
    actived: false,
    "class": 'keyboard__backspace'
  }],
  /**
   * @1
   */
  [{
    keys: ['Tab', 'Tab'],
    pressed: false,
    actived: false,
    "class": 'keyboard__tab'
  }, {
    keys: ['й', 'q'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['ц', 'w'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['у', 'e'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['к', 'r'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['е', 't'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['н', 'y'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['г', 'u'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['ш', 'i'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['щ', 'o'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['з', 'p'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['х', '['],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: ['', '{']
  }, {
    keys: ['ъ', ']'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: ['', '}']
  }, {
    keys: ['Enter', 'Enter'],
    pressed: false,
    actived: false,
    "class": 'keyboard__enter'
  }],
  /**
   * @2
   */
  [{
    keys: ['Caps Lock', 'Caps Lock'],
    pressed: false,
    actived: false,
    "class": 'keyboard__caps-lock'
  }, {
    keys: ['ф', 'a'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['ы', 's'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['в', 'd'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['а', 'f'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['п', 'g'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['р', 'h'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['о', 'j'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['л', 'k'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['д', 'l'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['ж', ';'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: ['', ':']
  }, {
    keys: ['э', '\''],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: ['', '"']
  }, {
    keys: ['\\', '\\'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: ['/', '|']
  }, {
    keys: ['', ''],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }],
  /**
   * @3
   */
  [{
    keys: ['Shift', 'Shift'],
    pressed: false,
    actived: false,
    "class": 'keyboard__shift'
  }, {
    keys: ['я', 'z'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['ч', 'x'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['с', 'c'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['м', 'v'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['и', 'b'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['т', 'n'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['ь', 'm'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default'
  }, {
    keys: ['б', ','],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: ['', '<']
  }, {
    keys: ['ю', '.'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: ['', '>']
  }, {
    keys: ['.', '/'],
    pressed: false,
    actived: false,
    "class": 'keyboard__default',
    keys_2: [',', '?']
  }, {
    keys: ['Shift', 'Shift'],
    pressed: false,
    actived: false,
    "class": 'keyboard__shift'
  }],
  /**
   * @4
   */
  [{
    keys: ['Ctrl', 'Ctrl'],
    pressed: false,
    actived: false,
    "class": 'keyboard__ctrl'
  }, {
    keys: ['Win', 'Win'],
    pressed: false,
    actived: false,
    "class": 'keyboard__win'
  }, {
    keys: ['Alt', 'Alt'],
    pressed: false,
    actived: false,
    "class": 'keyboard__alt'
  }, {
    keys: ['Space', 'Space'],
    pressed: false,
    actived: false,
    "class": 'keyboard__space'
  }, {
    keys: ['Alt', 'Alt'],
    pressed: false,
    actived: false,
    "class": 'keyboard__alt'
  }, {
    keys: ['Win', 'Win'],
    pressed: false,
    actived: false,
    "class": 'keyboard__win'
  }, {
    keys: ['Doc', 'Doc'],
    pressed: false,
    actived: false,
    "class": 'keyboard__doc'
  }, {
    keys: ['Ctrl', 'Ctrl'],
    pressed: false,
    actived: false,
    "class": 'keyboard__ctrl'
  }]];

  var KeyBoard = /*#__PURE__*/function () {
    function KeyBoard() {
      _classCallCheck(this, KeyBoard);

      this.$root = document.querySelector('.keyboard');
      this.$rows = document.querySelectorAll('.keyboard__row');
      this.keys = keyboard;
      this.local = 0;
      this.langs = {
        ru: 0,
        en: 1
      };
      this.render();
    }

    _createClass(KeyBoard, [{
      key: "render",
      value: function render() {
        for (var i = 0; i < 5; i++) {
          this.createRow(i);
        }
      }
    }, {
      key: "setLocal",
      value: function setLocal() {
        var local = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ru';
        this.local = this.langs[local];
        this.render();
        return this;
      }
    }, {
      key: "createBtn",
      value: function createBtn(key) {
        var underKeys = "".concat(key.keys_2 ? '<span class="keyboard__keys_2">' + key.keys_2[this.local] + '</span>' : '');
        return "<p class=\"keyboard__key ".concat(key["class"], " ").concat(key.pressed ? 'keyboard__pressed' : '', " ").concat(key.actived ? 'keyboard__actived' : '', "\">\n                       ").concat(key.keys_2 ? underKeys : '', "\n                                  \n                       <span>").concat(key.keys[this.local], "</span>\n             </p>");
      }
    }, {
      key: "createRow",
      value: function createRow(row) {
        var _this = this;

        this.$rows[row].innerHTML = '';
        this.keys[row].map(function (key) {
          var btn = _this.createBtn(key);

          _this.$rows[row].innerHTML += btn;
        });
      }
      /**
       * @param  {String} key    Символ на клавиатуре
       * @param  {Boolean} mode   Активировать или Нажать
       * @param  {String} active  Нажать / Отжать
       */

    }, {
      key: "selectButton",
      value: function selectButton(key, mode, active) {
        var _this2 = this;

        this.keys.map(function (row, rowIndex) {
          row.map(function (btn, btnIndex) {
            var pressedKey = btn.keys.includes(key);

            if (pressedKey) {
              _this2.keys[rowIndex][btnIndex][mode] = active;

              _this2.render();
            }
          });
        });
      }
    }, {
      key: "resetActived",
      value: function resetActived() {
        var _this3 = this;

        this.keys.map(function (row, rowIndex) {
          row.map(function (btn, btnIndex) {
            _this3.keys[rowIndex][btnIndex]['actived'] = false;
          });
        });
        this.render();
      }
    }]);

    return KeyBoard;
  }();

  var TypeWrite = /*#__PURE__*/function () {
    function TypeWrite() {
      _classCallCheck(this, TypeWrite);

      this.kb = new KeyBoard();
      this.key;
      this.task;
      this.activeColor = 'skyblue';
      this.maxLetters = 44;
      this.currentArray = [];
      this.currentString = '';
      this.taskIndex = 0;
      this.characterIndex = 0;
      this.errors = 0;
      this.prevUserString = '';
      this.view = {
        task: document.querySelector('.typewrite__task'),
        textarea: document.querySelector('.typewrite__textarea')
      };
      this.init();
    }

    _createClass(TypeWrite, [{
      key: "init",
      value: function init() {
        this.view.textarea.addEventListener('input', this.keyBoardHandler.bind(this));
      }
    }, {
      key: "setTask",
      value: function setTask(task) {
        var _this = this;

        setTimeout(function () {
          _this.view.textarea.focus();
        }, 100);
        this.task = [].concat(task);
        this.setString();
      }
    }, {
      key: "setString",
      value: function setString() {
        this.currentArray = this.getSplittedTask();
        this.currentString = this.getJoinedTask();
        this.print();
      }
    }, {
      key: "print",
      value: function print() {
        this.view.task.innerHTML = this.currentString;
      }
      /**
       * Берем задание, получаем текущее и разбиваем его на отдельные символы
       */

    }, {
      key: "getSplittedTask",
      value: function getSplittedTask() {
        return this.task[this.taskIndex].split('').slice(0, this.maxLetters);
      }
      /**
       * Пробегаемся по полученному массиву символов и заворачиваем каждый символ в html тег
       */

    }, {
      key: "getJoinedTask",
      value: function getJoinedTask() {
        return this.getSplittedTask().map(function (key) {
          return "<span class=\"typewrite__character\" data-active=\"false\" data-key=\"".concat(key, "\">").concat(key, "</span>");
        }).join('');
      }
    }, {
      key: "getTaskCharacter",
      value: function getTaskCharacter() {
        return this.currentArray[this.characterIndex];
      }
      /**
       * Обработчик события @input элемента <textarea>
       * Нет возможности использовать addEventListener('keydown')
       * Так как это событие не работает в плагине для Майнкрафт WebDispalay
       */

    }, {
      key: "keyBoardHandler",
      value: function keyBoardHandler(event) {
        this.key = event.data;
        this.event = event;
        /**
         * Обработка нажатия клавиши [ backspace ] [ del]
         */

        if (event.inputType.includes('deleteContent')) {
          this.view.textarea.value = this.prevUserString;
          return;
        }
        /**
         * Что бы ползователь не мог произвольно нажимать Enter
         * и создавать ещё строки внутри <textarea> Я отрезаю от текущей строки символ
         * переноса строки
         * Элемент <input> не генерирует событие Enter потому что, у него поведение по умолчанию
         * не предусматривает перенос строки.
         */


        if (!event.data && !this.isEndString()) {
          this.view.textarea.value = this.view.textarea.value.trim();
          return;
        }
        /**
         * Если в конце строки, произошло нажатие лубой клавиши
         * кроме [Enter]
         */

        if (event.data && this.isEndString()) {
          this.view.textarea.value = this.prevUserString;
          return;
        }
        /**
         * Обработка нажатия Enter в конце строки
         */

        if (!event.data && this.isEndString()) {
          this.view.textarea.value = this.view.textarea.value.trim(); //console.log('end str')

          this.next();
          return;
        }
        /**
         * Неправильный символ
         */


        if (this.getTaskCharacter() !== this.key) {
          this.onInvalidCharacter();
          return;
        }
        /**
         * Правильный символ
         */


        if (this.getTaskCharacter() === this.key) {
          this.onValidCharater();
          return;
        }
      }
      /**
       * Когда происходит ввод символов в <textarea> по порядку
       * Происходит активирование правильных символов.
       * Если после правильного символа ввести неправильный, а следом снова правильный.
       * То в строке где отображаются правильные символы будет подсвечен следующий символ.
       * Несмотря на то, что в <textarea> символов больше. Между двумя правильными символами
       * можно напихать неправильных. При том пользователь увидет, что символы напечатаны правильно.
       * Но в <textarea> будут видны лишние напечатанные символы
       */

    }, {
      key: "checkingIndexesMatching",
      value: function checkingIndexesMatching() {
        return this.getActiveCharacters().length === this.view.textarea.value.length - 1;
      }
      /**
       * Пользователь ошибся при вводе символа
       */

    }, {
      key: "onInvalidCharacter",
      value: function onInvalidCharacter() {
        this.errors++;
        this.selectNextButton(true);
      }
      /**
       * Пользователь ввёл корректный символ
       */

    }, {
      key: "onValidCharater",
      value: function onValidCharater() {
        this.selectNextButton(false);
        /*
         * Проверяю есть ли в <textarea> между двух правильных символов неправильные
         */

        if (!this.checkingIndexesMatching()) return; // Получаю текущий актиный символ завернутый в тег

        var charNode = this.getTaskCharacterTags()[this.characterIndex];
        this.prevUserString = this.view.textarea.value; // Маркирую текущий символ как активированный.

        charNode.setAttribute('data-active', true);
        charNode.style.color = this.activeColor; // Увеличиваю индекс, что бы работать со следующим символом

        this.characterIndex++;
      }
    }, {
      key: "getTaskCharacterTags",
      value: function getTaskCharacterTags() {
        return document.querySelectorAll('.typewrite__character');
      }
    }, {
      key: "getUserIndex",
      value: function getUserIndex() {
        return this.view.textarea.value.length - 1;
      }
    }, {
      key: "isEndString",
      value: function isEndString() {
        return this.getSplittedTask().length === this.getUserIndex();
      }
    }, {
      key: "getActiveCharacters",
      value: function getActiveCharacters() {
        return document.querySelectorAll('.typewrite__character[data-active="true"]');
      }
    }, {
      key: "resetString",
      value: function resetString() {
        this.characterIndex = 0;
        this.view.textarea.value = '';
        this.prevUserString = '';
      }
    }, {
      key: "resetTask",
      value: function resetTask() {
        this.errors = 0;
        this.view.task.innerHTML = '';
        this.taskIndex = 0;
      }
    }, {
      key: "next",
      value: function next() {
        if (this.task.length - 1 === this.taskIndex) {
          this.resetString();
          this.resetTask();
          if (!this.endCallback) return;
          this.endCallback();
          return;
        }

        this.taskIndex++;
        this.resetString();
        this.setString();
      }
    }, {
      key: "onEnd",
      value: function onEnd(endCallback) {
        this.endCallback = endCallback;
      }
    }, {
      key: "setActiveColor",
      value: function setActiveColor() {
        var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'lightblue';
        this.activeColor = color;
      }
    }, {
      key: "selectNextButton",
      value: function selectNextButton(errorFlag) {
        var nextBtn = this.currentArray[this.characterIndex];
        this.kb.selectButton(nextBtn, 'pressed', errorFlag);
      }
      /*
       time
       errors
       progress
       */

    }]);

    return TypeWrite;
  }();

  var $tpl$1 = $(tpl);
  function typewrite () {
    var _this = this;

    this.$store.$screen.append($tpl$1);
    var tw = new TypeWrite();
    this.on('typewrite', function (param) {
      if (typeof param === 'string') {
        $tpl$1.show();
        tw.setTask(param);
        tw.onEnd(function () {
          $tpl$1.hide();

          _this.exec({
            next: true
          });
        });
      } else if (_typeof(param) === 'object') {
        $tpl$1.show();
        tw.kb.setLocal(param.local);

        if (param.activeKeys) {
          tw.kb.resetActived();
          param.activeKeys.split('').forEach(function (_char) {
            return tw.kb.selectButton(_char, 'actived', true);
          });
        }

        tw.setTask(param.task);

        if (param.activeColor) {
          tw.setActiveColor(param.activeColor);
        }

        tw.onEnd(function () {
          $tpl$1.hide();

          _this.exec({
            next: true
          });
        });
      } else {
        $tpl$1.hide();
      }
    });
  }

  var css = "\r\n\r\n.vnjson__area{\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 5000;\r\n}\r\n.vnjson__area-item:hover{\r\n  cursor: pointer;\r\n  background-color: rgba(0,0,0,0.1);\r\n}";
  n(css,{});

  var $tpl = $('<div class="vnjson__area component"></div>');
  function area () {
    var _this = this;

    this.$store.$screen.append($tpl);
    this.on('area', handler.bind(this));
    $tpl.on('click', function (e) {
      if (!e.target.className.includes('vnjson__area-item')) return;
      var execData = JSON.parse(e.target.dataset.exec);

      if (execData !== null && execData !== void 0 && execData.next || execData !== null && execData !== void 0 && execData.jump) {
        var _ctx = Object.assign(execData, {
          area: false
        });

        _this.exec(_ctx);
      } else {
        _this.exec(execData);
      }
    });
  }

  function handler(regions) {
    if (!regions) {
      $tpl.hide();
      return;
    }
    $tpl.empty();
    $tpl.show();
    regions.forEach(function (reg) {
      var style = "position:absolute;\n                    top:".concat(reg.top, "px;\n                    left:").concat(reg.left, "px;\n                    width:").concat(reg.width, "px;\n                    height:").concat(reg.height, "px;");

      if (reg.show) {
        style += 'border: 5px solid #11f285;';
      }

      var regTpl = "<div style=\"".concat(style, "\" class=\"vnjson__area-item\" data-exec=").concat(JSON.stringify(reg.exec), "></div>");
      $tpl.append(regTpl);
    });
  }

  /* native [jump] [next] [timeout] */
  function plugins () {
    var _this = this;

    if ($vnjs.debug) {
      this.use(debug);
      this.use(debugDialogBox);
    }

    this.use(assetsLoader);
    this.use(screen);
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
    this.use(data);
    this.use(qa);
    this.use(chess);
    this.use(setName);
    this.use(wiki);
    this.use(crossWord);
    this.use(test);
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
    this.use(video);
    this.use(ide);
    this.use(typewrite);
    this.use(area);
    this.on('next', function () {
      setTimeout(function () {
        return _this.next();
      }, 10);
    });
  }

  /**
   * Загрузка игры
   */

  fetch("scenes/vn.json?v=".concat(new Date().getTime())).then(function (r) {
    return r.json();
  }).then(function (tree) {
    return init(tree);
  })["catch"](function (err) {
    $('.debug-error').css('display', 'flex').find('.debug-error__msg').html('Невалидный <font color="skyblue">YAML</font> скрипт');
    console.error('Invalid script', err.message);
  });

  function init(tree) {
    var _tree$$root$package;

    /*
      conf: {
        debug: true,
        $: {id: '$', name: 'Автор', replyColor: 'red'} //default character
      }
     */
    window.$vnjs = new Vnjson({
      debug: (_tree$$root$package = tree.$root["package"]) === null || _tree$$root$package === void 0 ? void 0 : _tree$$root$package.debug
    });
    plugins.call($vnjs);
    $vnjs.setTree(tree);
    $vnjs.on('postload', function () {
      // ?jump=scene.label
      // ?jump=scene  //default $init
      var label = new URL(location.href).searchParams.get("jump");

      if (label) {
        var _label$split = label.split('.'),
            _label$split2 = _slicedToArray(_label$split, 3),
            sceneName = _label$split2[0],
            labelName = _label$split2[1];
            _label$split2[2];

        $vnjs.exec({
          jump: "".concat(sceneName, ".").concat(labelName)
        });
      } else {
        $vnjs.exec({
          jump: '$root.$init'
        });
      }
    });
    $vnjs.on('init', function () {
      $vnjs.exec();
    });
  }

})();
