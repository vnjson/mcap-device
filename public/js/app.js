(function () {
  'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");

    return _classApplyDescriptorGet(receiver, descriptor);
  }

  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");

    _classApplyDescriptorSet(receiver, descriptor, value);

    return value;
  }

  function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }

    return privateMap.get(receiver);
  }

  function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }

    return descriptor.value;
  }

  function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }

      descriptor.value = value;
    }
  }

  function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }

  function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);

    privateMap.set(obj, value);
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

  var css$z = "\n.debug-error{\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  font-size: 20px;\n  z-index: 9999;  \n  background-color: #334;\n  display: none;\n  font-family: Consolas;\n  user-select: all;\n}\n.debug-error__status{\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 10px;\n  background-color: brown;\n  border-radius: 8px 8px 0 0;\n}\n.debug-error__modal{\n  background-color: #181818;\n  border-radius: 8px;\n  padding: 20px;\n  width: 80%;\n  height: 60%;\n  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.5);\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.debug-error__msg{\n  color: brown;\n  line-height: 28px;\n  word-break: break-all;\n  overflow: auto;\n  max-height: 100%;\n}\n\n\n.debug-error__path{\n  color: #cfa4ff;\n}\n.debug-error__pos{\n  color: skyblue;\n}\n.debug-error__code{\n  color: #e2aa53;\n  height: 290px;\n  overflow: auto;\n}\n";
  n(css$z,{});

  var tpl$f = "<div class=\"debug-error\">\r\n                        \r\n    <div class=\"debug-error__modal\">\r\n        <div class=\"debug-error__status\"></div>\r\n        <code> <pre class=\"debug-error__msg\"></pre></code>\r\n        <p class=\"debug-error__path\"></p>\r\n        <p class=\"debug-error__pos\"></p>\r\n        <pre class=\"debug-error__code\"></pre>\r\n    </div>\r\n</div>";

  var $modal = $(tpl$f);
  $("#screen").append($modal);

  var ErrorHandler = /*#__PURE__*/function () {
    function ErrorHandler() {
      var local = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "en";

      _classCallCheck(this, ErrorHandler);

      this.local = local;
      this.url = "/socket.io/socket.io.js";
      this.init();
    }

    _createClass(ErrorHandler, [{
      key: "init",
      value: function init() {
        var _this = this;

        this.dynamicallyLoadScript(this.url, function () {
          var socket = io();
          socket.on("yaml-error", function (err, sceneName, labelName) {
            if (err) {
              var path = "".concat(sceneName, ".").concat(labelName.replace(/.ya?ml/i, ""));
              var pos = "line ".concat(err.mark.line, " column ").concat(err.mark.column);
              var msg = ErrorHandler.getMessage(_this.local, err.reason);
              ErrorHandler.showModal(msg, path, err.mark.snippet, pos);

              _this.saveError({
                msg: msg,
                path: path,
                snippet: err.mark.snippet,
                pos: pos
              });

              return;
            } else {
              ErrorHandler.hideModal(); // перезагрузка браузера при сохранении файла

              location.reload();
            }
          }); //socket.on("disconnect", () => {})
        });
      }
    }, {
      key: "saveError",
      value: function saveError(err) {
        console.log(err);
        localStorage.setItem("vnjson.yamlError", JSON.stringify(err));
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
        $modal.find(".debug-error__msg").html("");
        $modal.find(".debug-error__path").html("");
        $modal.find(".debug-error__pos").html("");
        $modal.find(".debug-error__code").html("");
        $modal.hide();
      }
    }, {
      key: "showModal",
      value: function showModal() {
        var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var snippet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var pos = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
        $modal.find(".debug-error__msg").html(msg);
        $modal.find(".debug-error__path").html(path);
        $modal.find(".debug-error__pos").html(pos);
        $modal.find(".debug-error__code").html(snippet);
        $modal.show();
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
        return jsyaml.dump(ctx);
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
        var local = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ru";
        var codeError = arguments.length > 1 ? arguments[1] : undefined;
        var data = arguments.length > 2 ? arguments[2] : undefined;

        if (vnjs.errors[local].hasOwnProperty(codeError)) {
          var message = vnjs.errors[local][codeError].replace(/{.{0,}}/gi, data);
          return message;
        }

        return codeError;
      }
    }]);

    return ErrorHandler;
  }();
  $modal.on("mousedown", function (e) {
    if (!$(e.target).hasClass("debug-error")) return;
    ErrorHandler.hideModal();
  });

  vnjs._loadError = function () {
    var err = localStorage.getItem("vnjson.yamlError");

    if (err) {
      return JSON.parse(err);
    }

    return null;
  };

  var errors = {
    en: {
      pluginNotFound: 'Plugin <font color="deepskyblue">{ data }</font> not found',
      assetNotFound: 'Asset <font color="deepskyblue">{ data }</font> not found',
      menuOrJumpLeadsNowhere: 'Plugin  <font color="deepskyblue">menu</font>  or <font color="deepskyblue">jump</font>  leads nowhere',
      // yamljs errors
      'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line': 'Incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line',
      'end of the stream or a document separator is expected': 'End of the stream or a document separator is expected',
      'bad indentation of a mapping entry': 'Bad indentation of a mapping entry',
      'bad indentation of a sequence entry': 'Bad indentation of a sequence entry',
      'can not read a block mapping entry; a multiline key may not be an implicit key': 'Can not read a block mapping entry; a multiline key may not be an implicit key',
      'duplicated mapping key': 'Duplicated mapping key',
      'can not read an implicit mapping pair; a colon is missed': 'Can not read an implicit mapping pair; a colon is missed'
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

  function debug () {
    var _this = this;

    vnjs.errors = errors;
    /**
     * Блокировка контекстного меню, если не debug
     */

    /*     if (!vnjs.$root.package.debug) {
            $("body").attr("oncontextmenu", "return false;");
            return;
        } */

    this.local = "ru";
    new ErrorHandler(this.local);
    vnjs.on("vnjson.exec", function (ctx) {
      /**
       * Добавляем параметры в URI
       */
      // убрал сцену по умолчанию, потому что на неё постоянно прыгало

      /*
      if(this.state.sceneName!==''){
          history.pushState(null, null, `?jump=${this.state.sceneName}.${this.state.labelName}`);
      }
      */

      /**
       * Проверяем существует ли плагин с таким именем
       * Исключая выражения - null | -false | - Hello world!
       */
      if (!ctx) return;

      if (_typeof(ctx) === "object") {
        Object.keys(ctx).forEach(function (event) {
          if (!/^_/gi.test(event) && !vnjs.events[event]) {
            vnjs.emit("error", "pluginNotFound", event);
          }
        });
      }
    });
    vnjs.on("error", function (codeError, data) {
      // style
      $(".debug-error__status").css("background-color", "brown");
      $(".debug-error__msg").css("color", "brown");

      if (_typeof(codeError) === "object") {
        var message = codeError[_this.local];
        var path = "".concat(_this.state.sceneName, ".").concat(_this.state.labelName);
        var snippet = ErrorHandler.getSnippetFromCtx(_this.ctx);
        ErrorHandler.showModal(message, path, snippet);
      } else {
        var _message = ErrorHandler.getMessage(_this.local, codeError, data);

        var _path = "".concat(_this.state.sceneName, ".").concat(_this.state.labelName);

        var _snippet = ErrorHandler.getSnippetFromCtx(_this.ctx);

        ErrorHandler.showModal(_message, _path, _snippet);
      }
    });
    vnjs.on("warn", function (codeError, data) {
      var codes = {
        NoWayOutOfTheLabel: "No way out of the label [ ".concat(_this.state.labelName, " ]")
      };
      console.log(codes[codeError]);
    });
    vnjs.on("vnjson.info", function (msg) {
      // style
      $(".debug-error__status").css("background-color", "darkcyan");
      $(".debug-error__msg").css("color", "gray");
      ErrorHandler.showModal(msg);
    });
    vnjs.on("vnjson.error", function (msg) {
      // style
      $(".debug-error__status").css("background-color", "brown");
      $(".debug-error__msg").css("color", "brown");
      ErrorHandler.showModal(msg);
    });
  }

  var css$y = ".debug__dialog-box-controls{\n  background-color: wheat;\n  padding: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 120px;\n  font-size: 14px;\n  width: 1024px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n\n.debug__dialog-box-controls >div{\n  display: flex;\n  flex-direction: column;\n  border-radius: 4px;\n  height: 100%;\n  border: 1px solid #ccc;\n  padding: 5px;\n}\n\n.debug__controls-left{\n  width: 500px;\n}\n\n.debug__character{\n  width: 40px;\n}\n\n.debug__dialog-box-controls .debug__controls-center{\n  width: 510px;\n  flex-direction: row;\n}\n\n.debug__mc-exec{\n  width: 50px;\n}\n.debug__controls-btns{\n  display: flex;\n  justify-content: space-between;\n  height: 30px;\n\n}\n\n\n.debug__dialog-box-controls .debug__input-text{\n  flex: 1 0 auto;\n  color: black;\n  background-color: burlywood;\n  border-radius: 4px;\n  padding: 3px 5px;\n  text-align: left;\n \n  \n}\n/* убираю стрелочки */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    /* display: none; <- Crashes Chrome on hover */\n    -webkit-appearance: none;\n    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */\n}\n\ninput[type=number] {\n    -moz-appearance:textfield; /* Firefox */\n    outline: 0;\n    border: 0;\n}\n/*delay*/\n.debug__delay-wrapper{\n  display: flex;\n  align-items: center;\n  background-color: burlywood;\n  border-radius: 4px;\n  margin-left: 5px;\n  padding-left: 5px;\n}\n.debug__delay-img{\n  width: 20px;\n  height: 20px;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjNzc4IiBkPSJNMTIsMjBBOCw4IDAgMCwwIDIwLDEyQTgsOCAwIDAsMCAxMiw0QTgsOCAwIDAsMCA0LDEyQTgsOCAwIDAsMCAxMiwyME0xMiwyQTEwLDEwIDAgMCwxIDIyLDEyQTEwLDEwIDAgMCwxIDEyLDIyQzYuNDcsMjIgMiwxNy41IDIsMTJBMTAsMTAgMCAwLDEgMTIsMk0xMi41LDdWMTIuMjVMMTcsMTQuOTJMMTYuMjUsMTYuMTVMMTEsMTNWN0gxMi41WiIgLz4NCjwvc3ZnPg==);\n  background-position: center;\n}\n/*alpha*/\n.debug__alpha-wrapper{\n  display: flex;\n  align-items: center;\n  background-color: burlywood;\n  border-radius: 4px;\n  margin-left: 5px;\n  padding-left: 5px;\n}\n.debug__alpha-img{\n  width: 20px;\n  height: 20px;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjNzc4IiBkPSJNMTEsN0gxM0EyLDIgMCAwLDEgMTUsOVYxN0gxM1YxM0gxMVYxN0g5VjlBMiwyIDAgMCwxIDExLDdNMTEsOVYxMUgxM1Y5SDExTTEyLDIwQTgsOCAwIDAsMCAyMCwxMkE4LDggMCAwLDAgMTIsNEE4LDggMCAwLDAgNCwxMkE4LDggMCAwLDAgMTIsMjBNMTIsMkExMCwxMCAwIDAsMSAyMiwxMkExMCwxMCAwIDAsMSAxMiwyMkExMCwxMCAwIDAsMSAyLDEyQTEwLDEwIDAgMCwxIDEyLDJaIiAvPg0KPC9zdmc+);\n  background-position: center;\n}\n.debug__dialog-box-controls .debug__alpha{\n  width: 40px;\n  text-align: center;\n  flex: 0 0 auto;\n}\n\n.debug__btn-screenshot{\n  width: 20px;\n  height: 20px;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjNzc4IiBkPSJNMTksMTlINVY1SDE5TTE5LDNINUEyLDIgMCAwLDAgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVY1QTIsMiAwIDAsMCAxOSwzTTEzLjk2LDEyLjI5TDExLjIxLDE1LjgzTDkuMjUsMTMuNDdMNi41LDE3SDE3LjVMMTMuOTYsMTIuMjlaIiAvPg0KPC9zdmc+);\n  background-position: center;\n}\n\n\n\n.debug__dialog-box-controls .debug__delay{\n  width: 40px;\n  text-align: center;\n  flex: 0 0 auto;\n}\n\n.debug__btn{\n  background-color: burlywood;\n  border-radius: 4px;\n  padding: 5px 5px;\n  cursor: pointer;\n  color: black;\n  width: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 5px;\n\n}\n.debug__btn-img{\n  width: 20px;\n  height: 20px;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjNzc4IiBkPSJNNiA3LjI0TDE1LjUzIDEyTDYgMTYuNzZWNy4yNE00IDRWMjBMMjAgMTJMNCA0WiIgLz4NCjwvc3ZnPg==);\n  background-position: center;\n  background-repeat: no-repeat;\n  margin-left: 5px;\n}\n.debug__show-dbh{\n  margin-top: 5px;\n\n}\n.debug__btn-img--dbs{\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjNzc4IiAgZD0iTTIwLDRBMiwyIDAgMCwxIDIyLDZWMThBMiwyIDAgMCwxIDIwLDIwSDRBMiwyIDAgMCwxIDIsMThWNkEyLDIgMCAwLDEgNCw0SDIwTTExLDEzSDlWMTVIMTFWMTNNMTksMTNIMTNWMTVIMTlWMTNNNyw5SDVWMTFIN1Y5TTE5LDlIOVYxMUgxOVY5WiIgLz4NCjwvc3ZnPg==);\n  margin-left: 0;\n}\n\n\n.debug__btn:hover{\n  background-color: rgba(0,0,0,0.3);\n}\n\n.debug__textarea{\n  width: 100%;\n  flex: 1 0 auto;\n  color: black;\n  background-color: burlywood;\n  border-radius: 4px;\n  padding: 3px 5px;\n  resize: unset;\n  border: unset;\n  outline: unset;\n  caret-color: deepskyblue;\n  margin-top: 5px;\n\n}\n.debug__output{\n  background-color: burlywood;\n  border-radius: 4px;\n  padding: 3px 5px;\n  width: 100%;\n  flex: 1 0 auto;\n  overflow: auto;\n  height: 100%;\n  user-select: all;\n}\n\n.debug__checkbox-wrapper{\n  display: flex;\n  align-items: center;\n\n  background-color: burlywood;\n  border-radius: 4px;\n  margin-left: 5px;\n  padding: 5px;\n  padding-right: 10px;\n  justify-content: center;\n}\n.debug__mcexec-type{\n  margin-top: 5px;\n  margin-right: 5px;\n}\n/*\n * color picker  \n */\n.vnjson__debug-color-picker{\n  border-radius: 4px;\n  overflow: hidden;\n  margin-left: 5px;\n  width: 65px;\n}\n#debug__color-picker{\n  background-color: burlywood;\n  padding: 5px;\n  width: 90px;\n\n  outline: none;\n  border: 0;\n  height: 100%;\n  cursor: pointer;\n}\n\n\n\n.debug-plugin__topbar{\n  display: flex;\n  flex-direction: column;\n  height: 30px;\n}\n\n.debug-plugin__select{\n  width: 35%;\n  overflow: auto;\n}\n\n.debug-plugin__right{\n  width: 64%;\n  display: flex;\n  margin-left: 2px;\n}\n.debug__plugin--value{\n  margin-top: 0;\n  flex: unset;\n  white-space: nowrap;\n}\n.debug-plugin__params{\n  display: flex;\n}\n\n.debug-plugin__params{\n  display: flex;\n  height: 100%;\n}\n.debug__plugin-param{\n  width: 50%;\n\n}\n.debug__plugin--data{\n  margin-right: 2.5px;\n}\n.debug__plugin--value{\n  margin-left: 2.5px;\n}\n.debug-btn--value{\n  margin-top: 5px;\n}\n.debug-plugin__name{\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  margin-bottom: 5px;\n  padding: 1px 5px;\n  cursor: pointer;\n  margin-right: 5px;\n  display: block;\n}\n.debug-plugin__name--active{\n  color: cadetblue;\n  border-color: cadetblue;\n}\n.debug-plugin__name--dev{\n  color: brown;\n}\n.debug-plugin__name:hover{\n  color: cadetblue;\n  border-color: cadetblue;\n}\n.debug-plugin__value{\n  max-width: 155px;\n  margin-left: 5px;\n}";
  n(css$y,{});

  var tpl$e = "<div class=\"debug__dialog-box-controls\">\r\n  <!--left-->\r\n  <div class=\"debug__controls-left\">\r\n      <div class=\"debug__controls-btns\">\r\n          <input class=\"debug__input-text debug__character\" type=\"text\" value=\"$\" title=\"character\">\r\n          <div class=\"debug__btn debug-btn--character-snipet\" style=\"color: #778;font-weight: 600\" title=\"snipet\">{..}</div>\r\n        <!--\r\n          <div class=\"debug__btn debug__inner-screenshot\" title=\"Скриншот\"> \r\n                <div class=\"debug__btn-screenshot\"></div>\r\n          </div>\r\n        -->\r\n          <div class=\"debug__delay-wrapper\" title=\"dialog-box delay\">\r\n                <div class=\"debug__delay-img\"></div>\r\n                <input class=\"debug__input-text debug__delay\" type=\"number\">\r\n          </div>\r\n          <div class=\"debug__alpha-wrapper\" title=\"dialog-box alpha\">\r\n                <div class=\"debug__alpha-img\"></div>\r\n                <input class=\"debug__input-text debug__alpha\" type=\"number\">\r\n          </div>\r\n\r\n          <div class=\"debug__btn debug__inner-reply\" title=\"Показать\"> \r\n                <div class=\"debug__btn-img\"></div>\r\n          </div>\r\n          <div class=\"vnjson__debug-color-picker\">\r\n                <input id=\"debug__color-picker\" readonly=\"1\">\r\n          </div>\r\n\r\n      </div>\r\n      <textarea class=\"debug__textarea debug__reply\" placeholder=\"param\" title=\"Реплика\" spellcheck=\"false\"></textarea>\r\n  </div>\r\n  <!--img-->\r\n  <div class=\"debug__controls-center\">\r\n        <!--left-->\r\n        <div class=\"debug-plugin__select\">\r\n\r\n         </div>\r\n\r\n        <!--right-->\r\n        <div class=\"debug-plugin__right\">\r\n            <textarea class=\"debug__textarea debug__plugin--value\" placeholder=\"param\" spellcheck=\"false\"></textarea>\r\n            <div class=\"debug-plugin__topbar\">\r\n                <div class=\"debug__btn debug__show-asset\" title=\"Выполнить\"> \r\n                    <div class=\"debug__btn-img\"></div>\r\n                </div>\r\n\r\n                <div class=\"debug__btn debug-btn--value\" style=\"color: #778;font-weight: 600\" title=\"snipet\">{..}</div>\r\n                <div class=\"debug__btn debug__show-dbh\" title=\"dialog-box: false\"> \r\n                    <div class=\"debug__btn-img debug__btn-img--dbs\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n";

  var css$x = ".sp-container{position:absolute;top:0;left:0;display:inline-block;z-index:9999994;overflow:hidden}.sp-original-input-container{position:relative;display:inline-flex}.sp-original-input-container input{margin:0!important}.sp-original-input-container .sp-add-on{width:40px;border-top-right-radius:0!important;border-bottom-right-radius:0!important}input.spectrum.with-add-on{border-top-left-radius:0;border-bottom-left-radius:0;border-left:0}.sp-original-input-container .sp-add-on .sp-colorize{height:100%;width:100%;border-radius:inherit}.sp-colorize-container{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='%23ccc' fill-opacity='1'%3E%3Crect x='0' y='0' width='6' height='6' /%3E%3Crect x='6' y='6' width='6' height='6' /%3E%3C/svg%3E\")}.sp-container.sp-flat{position:relative}.sp-container,.sp-container *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.sp-top{position:relative;width:100%;display:inline-block}.sp-top-inner{position:absolute;top:0;left:0;bottom:0;right:0}.sp-color{position:absolute;top:0;left:0;bottom:0;right:20px!important}.sp-hue{position:absolute;top:0;right:0;bottom:0;width:12px;height:100%;left:initial!important}.sp-clear-enabled .sp-hue{top:15%;height:85%}.sp-fill{padding-top:80%}.sp-sat,.sp-val{position:absolute;top:0;left:0;right:0;bottom:0}.sp-alpha-enabled .sp-top{margin-bottom:28px!important}.sp-alpha-enabled .sp-alpha{display:block}.sp-alpha-handle{position:absolute;top:-3px;cursor:pointer;height:16px;border-radius:50%;width:16px;margin-right:5px;left:-2px;right:0;background:#f9f9f9;box-shadow:0 0 2px 0 #3a3a3a}.sp-alpha{display:none;position:absolute;bottom:-18px;right:0;left:0;height:10px}.sp-alpha-inner{border-radius:4px}.sp-clear{display:none}.sp-clear.sp-clear-display{background-position:center}.sp-clear-enabled .sp-clear{display:block;position:absolute;top:3px;right:0;bottom:0;cursor:pointer;left:initial;height:14px;width:14px}.sp-alpha,.sp-alpha-handle,.sp-clear,.sp-container,.sp-container button,.sp-container.sp-dragging .sp-input,.sp-dragger,.sp-preview,.sp-replacer,.sp-slider{-webkit-user-select:none;-moz-user-select:-moz-none;-o-user-select:none;user-select:none}.sp-container.sp-input-disabled .sp-input-container{display:none}.sp-container.sp-buttons-disabled .sp-button-container{display:none}.sp-container.sp-palette-buttons-disabled .sp-palette-button-container{display:none}.sp-palette-only .sp-picker-container{display:none}.sp-palette-disabled .sp-palette-container{display:none}.sp-initial-disabled .sp-initial{display:none}.sp-sat{background-image:-webkit-gradient(linear,0 0,100% 0,from(#fff),to(rgba(204,154,129,0)));background-image:-webkit-linear-gradient(left,#fff,rgba(204,154,129,0));background-image:-moz-linear-gradient(left,#fff,rgba(204,154,129,0));background-image:-o-linear-gradient(left,#fff,rgba(204,154,129,0));background-image:-ms-linear-gradient(left,#fff,rgba(204,154,129,0));background-image:linear-gradient(to right,#fff,rgba(204,154,129,0))}.sp-val{border-radius:4px;background-image:-webkit-gradient(linear,0 100%,0 0,from(#000),to(rgba(204,154,129,0)));background-image:-webkit-linear-gradient(bottom,#000,rgba(204,154,129,0));background-image:-moz-linear-gradient(bottom,#000,rgba(204,154,129,0));background-image:-o-linear-gradient(bottom,#000,rgba(204,154,129,0));background-image:-ms-linear-gradient(bottom,#000,rgba(204,154,129,0));background-image:linear-gradient(to top,#000,rgba(204,154,129,0))}.sp-hue{background:-moz-linear-gradient(top,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%);background:-ms-linear-gradient(top,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%);background:-o-linear-gradient(top,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%);background:-webkit-gradient(linear,left top,left bottom,from(red),color-stop(.17,#ff0),color-stop(.33,#0f0),color-stop(.5,#0ff),color-stop(.67,#00f),color-stop(.83,#f0f),to(red));background:-webkit-linear-gradient(top,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%);background:linear-gradient(to bottom,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.sp-1{height:17%}.sp-2{height:16%}.sp-3{height:17%}.sp-4{height:17%}.sp-5{height:16%}.sp-6{height:17%}.sp-hidden{display:none!important}.sp-cf:after,.sp-cf:before{content:\"\";display:table}.sp-cf:after{clear:both}@media (max-device-width:480px){.sp-color{right:40%}.sp-hue{left:63%}.sp-fill{padding-top:60%}}.sp-dragger{border-radius:5px;height:10px;width:10px;border:1px solid #fff;cursor:pointer;position:absolute;top:0;left:0;margin-left:3px;margin-top:3px;box-shadow:0 0 2px 1px rgba(0,0,0,.2)}.sp-slider{position:absolute;top:0;cursor:pointer;height:16px;border-radius:50%;width:16px;left:-2px;background:#f9f9f9;box-shadow:0 0 2px 0 #3a3a3a;margin-top:8px}.sp-container{display:inline-flex;border-radius:0;background-color:#fff;padding:0;border-radius:4px;color:#000;box-shadow:0 0 0 1px rgba(99,114,130,.16),0 8px 16px rgba(27,39,51,.08)}.sp-clear,.sp-color,.sp-container,.sp-container button,.sp-container input,.sp-hue{font-size:12px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}.sp-top{margin-bottom:10px}.sp-clear,.sp-color,.sp-hue,.sp-sat,.sp-val{border-radius:3px}.sp-input-container{margin-top:-5px}.sp-button-container.sp-cf,.sp-initial.sp-thumb.sp-cf,.sp-input-container.sp-cf{height:25px}.sp-picker-container .sp-cf{margin-bottom:10px}.sp-palette-row-initial>span:first-child{cursor:pointer}.sp-initial-disabled .sp-input-container{width:100%}.sp-input{padding:0 5px!important;margin:0;width:100%;box-shadow:none!important;height:100%!important;background:0 0;color:#3a3a3a;border-radius:2px!important;border:1px solid #e0e0e0!important;text-align:center;font-family:monospace;font-size:inherit!important}.sp-input:focus{border:1px solid orange}.sp-input.sp-validation-error{border:1px solid red;background:#fdd}.sp-palette-container,.sp-picker-container{position:relative;padding:10px}.sp-picker-container{width:200px;padding-bottom:0}.sp-palette-container{border-right:solid 1px #ccc}.sp-palette-only .sp-palette-container{border:0}.sp-palette .sp-thumb-el{display:block;position:relative;float:left;width:24px;height:15px;margin:3px;cursor:pointer;border:solid 2px transparent}.sp-palette .sp-thumb-el.sp-thumb-active,.sp-palette .sp-thumb-el:hover{border-color:orange}.sp-thumb-el{position:relative}.sp-initial{float:left}.sp-initial span{width:30px;height:25px;border:none;display:block;float:left;margin:0}.sp-initial .spe-thumb-el.sp-thumb-active{border-radius:0 5px 5px 0}.sp-initial .spe-thumb-el{border-radius:5px 0 0 5px}.sp-initial .sp-clear-display{background-position:center}.sp-button-container{float:right}.sp-palette-button-container{margin-top:10px}.sp-replacer{position:relative;overflow:hidden;cursor:pointer;display:inline-block;border-radius:3px;border:1px solid #aaa;color:#666;transition:border-color .3s;vertical-align:middle;width:3rem;height:1.5rem}.sp-replacer.sp-active,.sp-replacer:hover{border:1px solid #666;color:#000}.sp-replacer.sp-disabled{cursor:default;border-color:silver;color:silver}.sp-dd{position:absolute;font-size:10px;right:0;top:0;bottom:0;padding:0 2px;line-height:1.6rem;background-color:#fff}.sp-preview{position:relative;width:100%;height:100%;float:left;z-index:0}.sp-preview-inner{transition:background-color .2s}.sp-preview-inner.sp-clear-display{display:none}.sp-palette .sp-thumb-el{width:16px;height:16px;margin:3px;border:none;border-radius:3px}.sp-container button{border-radius:3px;border:none;background:0 0;line-height:1;padding:0 8px;height:25px;text-transform:capitalize;text-align:center;vertical-align:middle;cursor:pointer;color:#606c72;font-weight:700}.sp-container button.sp-choose{background-color:#3cab3b;color:#fff;margin-left:5px}.sp-container button:hover{opacity:.8}.sp-container button.sp-palette-toggle{width:100%;background-color:#f3f3f3;margin:0}.sp-palette span.sp-thumb-active,.sp-palette span:hover{border-color:#000}.sp-alpha,.sp-preview,.sp-thumb-el{position:relative;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='%23ccc' fill-opacity='1'%3E%3Crect x='0' y='0' width='6' height='6' /%3E%3Crect x='6' y='6' width='6' height='6' /%3E%3C/svg%3E\")}.sp-alpha-inner,.sp-preview-inner,.sp-thumb-inner{display:block;position:absolute;top:0;left:0;bottom:0;right:0}.sp-palette .sp-thumb-inner{border-radius:3px;background-position:50% 50%;background-repeat:no-repeat}.sp-palette .sp-thumb-light.sp-thumb-active .sp-thumb-inner{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIVJREFUeNpiYBhsgJFMffxAXABlN5JruT4Q3wfi/0DsT64h8UD8HmpIPCWG/KemIfOJCUB+Aoacx6EGBZyHBqI+WsDCwuQ9mhxeg2A210Ntfo8klk9sOMijaURm7yc1UP2RNCMbKE9ODK1HM6iegYLkfx8pligC9lCD7KmRof0ZhjQACDAAceovrtpVBRkAAAAASUVORK5CYII=);background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='18' height='18'%3E%3Cpath d='M9 16.172l10.594-10.594 1.406 1.406-12 12-5.578-5.578 1.406-1.406z' fill='%23000'%3E%3C/path%3E%3C/svg%3E\")}.sp-palette .sp-thumb-dark.sp-thumb-active .sp-thumb-inner{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAMdJREFUOE+tkgsNwzAMRMugEAahEAahEAZhEAqlEAZhEAohEAYh81X2dIm8fKpEspLGvudPOsUYpxE2BIJCroJmEW9qJ+MKaBFhEMNabSy9oIcIPwrB+afvAUFoK4H0tMaQ3XtlrggDhOVVMuT4E5MMG0FBbCEYzjYT7OxLEvIHQLY2zWwQ3D+9luyOQTfKDiFD3iUIfPk8VqrKjgAiSfGFPecrg6HN6m/iBcwiDAo7WiBeawa+Kwh7tZoSCGLMqwlSAzVDhoK+6vH4G0P5wdkAAAAASUVORK5CYII=);background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='18' height='18'%3E%3Cpath d='M9 16.172l10.594-10.594 1.406 1.406-12 12-5.578-5.578 1.406-1.406z' fill='%23fff'%3E%3C/path%3E%3C/svg%3E\")}.sp-clear-display{background-repeat:no-repeat;background-position:center;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABe0lEQVQokYXSsUtcQRTF4d8Jj+VhHSxkEQuLsEUKK0nhTBFTmLSSUhBCMCAWsmgIwWrBLk0akfwLCaSQKBJmtrIIISwpRFKIhViETScphGMzysMtvOVwvpm5d0bGNCuGWAOPgYdl6S8wSDn9b+bUhDHEKWAdeAFMANg+l/TV9ofcz6cjMIbYBvaBMds7QCqZ58CmpBNgPuV0DvAAIMyFGugWtJr7eTv38xEwkPRPErY7QDeG2LqFkjrAgu0dSd/KDVqSNmxvAZ8lfbS9AHRuYemnLWkv5XRVBrQMbAI/gTXgEzAJtJuwBVS2L2OIle03QA/4Lmkl5XQBXEqqbFcAVYFDYChpFngiqWf7l6TXKaezMt2Zkhk24THwG+jZriX9AFZvUAyxLbRke2D75O5zPAO+ADXwEtizjaRHwDvbTyUtppwOmicCHAJvbXcl9YA1SQDjtseA97YPRz7ATcUQp2y/kjRdevsjaTfldNrMjcDGBjXA3T96L7yvrgFzP69+0Ao/HAAAAABJRU5ErkJggg==);background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='14' height='14'%3E%3Cpath d='M12 20.016q3.281 0 5.648-2.367t2.367-5.648q0-2.672-1.734-4.922l-11.203 11.203q2.25 1.734 4.922 1.734zM3.984 12q0 2.672 1.734 4.922l11.203-11.203q-2.25-1.734-4.922-1.734-3.281 0-5.648 2.367t-2.367 5.648zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z' fill='%23000'%3E%3C/path%3E%3C/svg%3E\")}\r\n\r\n\r\n.sp-original-input-container{\r\n    height: 100%;\r\n}\r\n\r\n.sp-colorize{\r\n    border-radius: 4px 0 0 4px !important;\r\n}";
  n(css$x,{});

  !function (e) {

    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e(require("jquery")) : e(jQuery);
  }(function (Ne, De) {

    var e,
        qe = {
      beforeShow: a,
      move: a,
      change: a,
      show: a,
      hide: a,
      color: !1,
      flat: !1,
      type: "",
      showInput: !1,
      allowEmpty: !0,
      showButtons: !0,
      clickoutFiresChange: !0,
      showInitial: !1,
      showPalette: !0,
      showPaletteOnly: !1,
      hideAfterPaletteSelect: !1,
      togglePaletteOnly: !1,
      showSelectionPalette: !0,
      localStorageKey: !1,
      appendTo: "body",
      maxSelectionSize: 8,
      locale: "en",
      cancelText: "cancel",
      chooseText: "choose",
      togglePaletteMoreText: "more",
      togglePaletteLessText: "less",
      clearText: "Clear Color Selection",
      noColorSelectedText: "No Color Selected",
      preferredFormat: "name",
      className: "",
      containerClassName: "",
      replacerClassName: "",
      showAlpha: !0,
      theme: "sp-light",
      palette: [["#000000", "#444444", "#5b5b5b", "#999999", "#bcbcbc", "#eeeeee", "#f3f6f4", "#ffffff"], ["#f44336", "#744700", "#ce7e00", "#8fce00", "#2986cc", "#16537e", "#6a329f", "#c90076"], ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"], ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"], ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"], ["#cc0000", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"], ["#990000", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"], ["#660000", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]],
      selectionPalette: [],
      disabled: !1,
      offset: null
    },
        Ie = [],
        Ve = !!/msie/i.exec(window.navigator.userAgent),
        We = ((e = document.createElement("div").style).cssText = "background-color:rgba(0,0,0,.5)", t(e.backgroundColor, "rgba") || t(e.backgroundColor, "hsla")),
        Be = ["<div class='sp-replacer'>", "<div class='sp-preview'><div class='sp-preview-inner'></div></div>", "<div class='sp-dd'>&#9660;</div>", "</div>"].join(""),
        Ke = function () {
      var e = "";
      if (Ve) for (var t = 1; t <= 6; t++) {
        e += "<div class='sp-" + t + "'></div>";
      }
      return ["<div class='sp-container sp-hidden'>", "<div class='sp-palette-container'>", "<div class='sp-palette sp-thumb sp-cf'></div>", "<div class='sp-palette-button-container sp-cf'>", "<button type='button' class='sp-palette-toggle'></button>", "</div>", "</div>", "<div class='sp-picker-container'>", "<div class='sp-top sp-cf'>", "<div class='sp-fill'></div>", "<div class='sp-top-inner'>", "<div class='sp-color'>", "<div class='sp-sat'>", "<div class='sp-val'>", "<div class='sp-dragger'></div>", "</div>", "</div>", "</div>", "<div class='sp-clear sp-clear-display'>", "</div>", "<div class='sp-hue'>", "<div class='sp-slider'></div>", e, "</div>", "</div>", "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>", "</div>", "<div class='sp-input-container sp-cf'>", "<input class='sp-input' type='text' spellcheck='false'  />", "</div>", "<div class='sp-initial sp-thumb sp-cf'></div>", "<div class='sp-button-container sp-cf'>", "<button class='sp-cancel' href='#'></button>", "<button type='button' class='sp-choose'></button>", "</div>", "</div>", "</div>"].join("");
    }();

    function t(e, t) {
      return !!~("" + e).indexOf(t);
    }

    function $e(e, t, a, o) {
      for (var r = [], n = 0; n < e.length; n++) {
        var s = e[n];

        if (s) {
          var i = tinycolor(s),
              l = i.toHsl().l < .5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
          l += tinycolor.equals(t, s) ? " sp-thumb-active" : "";
          var c = i.toString(o.preferredFormat || "rgb"),
              u = We ? "background-color:" + i.toRgbString() : "filter:" + i.toFilter();
          r.push('<span title="' + c + '" data-color="' + i.toRgbString() + '" class="' + l + '"><span class="sp-thumb-inner" style="' + u + ';"></span></span>');
        } else r.push('<span class="sp-thumb-el sp-clear-display" ><span class="sp-clear-palette-only" style="background-color: transparent;"></span></span>');
      }

      return "<div class='sp-cf " + a + "'>" + r.join("") + "</div>";
    }

    function n(e, t) {
      var a,
          o,
          n,
          h = function (e, t) {
        e.locale = e.locale || window.navigator.language, e.locale && (e.locale = e.locale.split("-")[0].toLowerCase()), "en" != e.locale && Ne.spectrum.localization[e.locale] && (e = Ne.extend({}, Ne.spectrum.localization[e.locale], e));
        var a = Ne.extend({}, qe, e);
        return a.callbacks = {
          move: Ye(a.move, t),
          change: Ye(a.change, t),
          show: Ye(a.show, t),
          hide: Ye(a.hide, t),
          beforeShow: Ye(a.beforeShow, t)
        }, a;
      }(t, e),
          s = h.type,
          d = "flat" == s,
          i = h.showSelectionPalette,
          l = h.localStorageKey,
          c = h.theme,
          u = h.callbacks,
          f = (a = Oe, function () {
        var e = this,
            t = arguments;
        n || (n = setTimeout(function () {
          n = null, a.apply(e, t);
        }, o));
      }),
          p = !(o = 10),
          g = !1,
          b = 0,
          m = 0,
          v = 0,
          x = 0,
          y = 0,
          T = 0,
          w = 0,
          _ = 0,
          k = 0,
          P = 0,
          C = 1,
          S = [],
          M = [],
          z = {},
          j = h.selectionPalette.slice(0),
          A = h.maxSelectionSize,
          R = "sp-dragging",
          F = !1,
          H = null,
          L = e.ownerDocument,
          O = (L.body, Ne(e)),
          Q = !1,
          E = Ne(Ke, L).addClass(c),
          N = E.find(".sp-picker-container"),
          D = E.find(".sp-color"),
          q = E.find(".sp-dragger"),
          I = E.find(".sp-hue"),
          V = E.find(".sp-slider"),
          W = E.find(".sp-alpha-inner"),
          B = E.find(".sp-alpha"),
          K = E.find(".sp-alpha-handle"),
          $ = E.find(".sp-input"),
          X = E.find(".sp-palette"),
          Y = E.find(".sp-initial"),
          G = E.find(".sp-cancel"),
          U = E.find(".sp-clear"),
          J = E.find(".sp-choose"),
          Z = E.find(".sp-palette-toggle"),
          ee = O.is("input"),
          te = (ee && "color" === O.attr("type") && Ue(), ee && "color" == s),
          ae = te ? Ne(Be).addClass(c).addClass(h.className).addClass(h.replacerClassName) : Ne([]),
          oe = te ? ae : O,
          re = ae.find(".sp-preview-inner"),
          ne = h.color || ee && O.val(),
          se = !1,
          ie = h.preferredFormat,
          le = !h.showButtons || h.clickoutFiresChange,
          ce = !ne,
          ue = h.allowEmpty,
          fe = null,
          he = null,
          de = null,
          pe = null,
          ge = O.attr("id");

      if (ge !== De && 0 < ge.length) {
        var be = Ne('label[for="' + ge + '"]');
        be.length && be.on("click", function (e) {
          return e.preventDefault(), O.spectrum("show"), !1;
        });
      }

      function me() {
        if (h.showPaletteOnly && (h.showPalette = !0), Z.text(h.showPaletteOnly ? h.togglePaletteMoreText : h.togglePaletteLessText), h.palette) {
          S = h.palette.slice(0), M = Array.isArray(S[0]) ? S : [S], z = {};

          for (var e = 0; e < M.length; e++) {
            for (var t = 0; t < M[e].length; t++) {
              var a = tinycolor(M[e][t]).toRgbString();
              z[a] = !0;
            }
          }

          h.showPaletteOnly && !ne && (ne = "" === S[0][0] ? S[0][0] : Object.keys(z)[0]);
        }

        E.toggleClass("sp-flat", d), E.toggleClass("sp-input-disabled", !h.showInput), E.toggleClass("sp-alpha-enabled", h.showAlpha), E.toggleClass("sp-clear-enabled", ue), E.toggleClass("sp-buttons-disabled", !h.showButtons), E.toggleClass("sp-palette-buttons-disabled", !h.togglePaletteOnly), E.toggleClass("sp-palette-disabled", !h.showPalette), E.toggleClass("sp-palette-only", h.showPaletteOnly), E.toggleClass("sp-initial-disabled", !h.showInitial), E.addClass(h.className).addClass(h.containerClassName), Oe();
      }

      function ve() {
        if (l) {
          try {
            var e = window.localStorage,
                t = e[l].split(",#");
            1 < t.length && (delete e[l], Ne.each(t, function (e, t) {
              xe(t);
            }));
          } catch (e) {}

          try {
            j = window.localStorage[l].split(";");
          } catch (e) {}
        }
      }

      function xe(e) {
        if (i) {
          var t = tinycolor(e).toRgbString();
          if (!z[t] && -1 === Ne.inArray(t, j)) for (j.push(t); j.length > A;) {
            j.shift();
          }
          if (l) try {
            window.localStorage[l] = j.join(";");
          } catch (e) {}
        }
      }

      function ye() {
        var a = Ae(),
            e = Ne.map(M, function (e, t) {
          return $e(e, a, "sp-palette-row sp-palette-row-" + t, h);
        });
        ve(), j && e.push($e(function () {
          var e = [];
          if (h.showPalette) for (var t = 0; t < j.length; t++) {
            var a = tinycolor(j[t]).toRgbString();
            z[a] || e.push(j[t]);
          }
          return e.reverse().slice(0, h.maxSelectionSize);
        }(), a, "sp-palette-row sp-palette-row-selection", h)), X.html(e.join(""));
      }

      function Te() {
        if (h.showInitial) {
          var e = se,
              t = Ae();
          Y.html($e([e, t], t, "sp-palette-row-initial", h));
        }
      }

      function we() {
        (m <= 0 || b <= 0 || x <= 0) && Oe(), g = !0, E.addClass(R), H = null, O.trigger("dragstart.spectrum", [Ae()]);
      }

      function _e() {
        g = !1, E.removeClass(R), O.trigger("dragstop.spectrum", [Ae()]);
      }

      function ke(e) {
        if (F) F = !1;else if (null !== e && "" !== e || !ue) {
          var t = tinycolor(e);
          t.isValid() ? (je(t), Re(), Le()) : $.addClass("sp-validation-error");
        } else je(null), Re(), Le();
      }

      function Pe() {
        var e = Ne.Event("beforeShow.spectrum");
        p ? Oe() : (O.trigger(e, [Ae()]), !1 === u.beforeShow(Ae()) || e.isDefaultPrevented() || (function () {
          for (var e = 0; e < Ie.length; e++) {
            Ie[e] && Ie[e].hide();
          }
        }(), p = !0, Ne(L).on("keydown.spectrum", Ce), Ne(L).on("click.spectrum", Se), Ne(window).on("resize.spectrum", f), ae.addClass("sp-active"), E.removeClass("sp-hidden"), Oe(), Fe(), se = Ae(), Te(), u.show(se), O.trigger("show.spectrum", [se])));
      }

      function Ce(e) {
        27 === e.keyCode && Me();
      }

      function Se(e) {
        2 != e.button && (g || (le ? Le(!0) : ze(), Me()));
      }

      function Me() {
        p && !d && (p = !1, Ne(L).off("keydown.spectrum", Ce), Ne(L).off("click.spectrum", Se), Ne(window).off("resize.spectrum", f), ae.removeClass("sp-active"), E.addClass("sp-hidden"), u.hide(Ae()), O.trigger("hide.spectrum", [Ae()]));
      }

      function ze() {
        je(se, !0), Le(!0);
      }

      function je(e, t) {
        var a, o;
        tinycolor.equals(e, Ae()) ? Fe() : (e && e !== De || !ue ? (ce = !1, o = (a = tinycolor(e)).toHsv(), _ = o.h % 360 / 360, k = o.s, P = o.v, C = o.a) : ce = !0, Fe(), a && a.isValid() && !t && (ie = h.preferredFormat || a.getFormat()));
      }

      function Ae(e) {
        return e = e || {}, ue && ce ? null : tinycolor.fromRatio({
          h: _,
          s: k,
          v: P,
          a: Math.round(1e3 * C) / 1e3
        }, {
          format: e.format || ie
        });
      }

      function Re() {
        Fe(), u.move(Ae()), O.trigger("move.spectrum", [Ae()]);
      }

      function Fe() {
        $.removeClass("sp-validation-error"), He();
        var e = tinycolor.fromRatio({
          h: _,
          s: 1,
          v: 1
        });
        D.css("background-color", e.toHexString());
        var t = ie;
        C < 1 && (0 !== C || "name" !== t) && ("hex" !== t && "hex3" !== t && "hex6" !== t && "name" !== t || (t = "rgb"));
        var a = Ae({
          format: t
        }),
            o = "";
        if (re.removeClass("sp-clear-display"), re.css("background-color", "transparent"), !a && ue) re.addClass("sp-clear-display");else {
          var r = a.toHexString(),
              n = a.toRgbString();

          if (We || 1 === a.alpha ? re.css("background-color", n) : (re.css("background-color", "transparent"), re.css("filter", a.toFilter())), h.showAlpha) {
            var s = a.toRgb();
            s.a = 0;
            var i = tinycolor(s).toRgbString(),
                l = "linear-gradient(left, " + i + ", " + r + ")";
            Ve ? W.css("filter", tinycolor(i).toFilter({
              gradientType: 1
            }, r)) : (W.css("background", "-webkit-" + l), W.css("background", "-moz-" + l), W.css("background", "-ms-" + l), W.css("background", "linear-gradient(to right, " + i + ", " + r + ")"));
          }

          o = a.toString(t);
        }

        if (h.showInput && $.val(o), O.val(o), "text" == h.type || "component" == h.type) {
          var c = a;

          if (c && he) {
            var u = c.isLight() || c.getAlpha() < .4 ? "black" : "white";
            he.css("background-color", c.toRgbString()).css("color", u);
          } else he.css("background-color", pe).css("color", de);
        }

        h.showPalette && ye(), Te();
      }

      function He() {
        var e = k,
            t = P;
        if (ue && ce) K.hide(), V.hide(), q.hide();else {
          K.show(), V.show(), q.show();
          var a = e * b,
              o = m - t * m;
          a = Math.max(-v, Math.min(b - v, a - v)), o = Math.max(-v, Math.min(m - v, o - v)), q.css({
            top: o + "px",
            left: a + "px"
          });
          var r = C * y;
          K.css({
            left: r - T / 2 + "px"
          });
          var n = _ * x;
          V.css({
            top: n - w + "px"
          });
        }
      }

      function Le(e) {
        var t = Ae(),
            a = !tinycolor.equals(t, se);
        t && (t.toString(ie), xe(t)), e && a && (u.change(t), F = !0, O.trigger("change", [t]));
      }

      function Oe() {
        var e, t, a, o, r, n, s, i, l, c, u, f;
        p && (b = D.width(), m = D.height(), v = q.height(), I.width(), x = I.height(), w = V.height(), y = B.width(), T = K.width(), d || (E.css("position", "absolute"), h.offset ? E.offset(h.offset) : E.offset((t = oe, a = (e = E).outerWidth(), o = e.outerHeight(), r = t.outerHeight(), n = e[0].ownerDocument, s = n.documentElement, i = s.clientWidth + Ne(n).scrollLeft(), l = s.clientHeight + Ne(n).scrollTop(), c = t.offset(), u = c.left, f = c.top, f += r, u -= Math.min(u, i < u + a && a < i ? Math.abs(u + a - i) : 0), {
          top: f -= Math.min(f, l < f + o && o < l ? Math.abs(+(o + r)) : 0),
          bottom: c.bottom,
          left: u,
          right: c.right,
          width: c.width,
          height: c.height
        }))), He(), h.showPalette && ye(), O.trigger("reflow.spectrum"));
      }

      function Qe() {
        Me(), Q = !0, O.attr("disabled", !0), oe.addClass("sp-disabled");
      }

      !function () {
        if (Ve && E.find("*:not(input)").attr("unselectable", "on"), me(), fe = Ne('<span class="sp-original-input-container"></span>'), ["margin"].forEach(function (e) {
          fe.css(e, O.css(e));
        }), "block" == O.css("display") && fe.css("display", "flex"), te) O.after(ae).hide();else if ("text" == s) fe.addClass("sp-colorize-container"), O.addClass("spectrum sp-colorize").wrap(fe);else if ("component" == s) {
          O.addClass("spectrum").wrap(fe);
          var e = Ne(["<div class='sp-colorize-container sp-add-on'>", "<div class='sp-colorize'></div> ", "</div>"].join(""));
          e.width(O.outerHeight() + "px").css("border-radius", O.css("border-radius")).css("border", O.css("border")), O.addClass("with-add-on").before(e);
        }
        if (he = O.parent().find(".sp-colorize"), de = he.css("color"), pe = he.css("background-color"), ue || U.hide(), d) O.after(E).hide();else {
          var t = "parent" === h.appendTo ? O.parent() : Ne(h.appendTo);
          1 !== t.length && (t = Ne("body")), t.append(E);
        }

        function a(e) {
          return e.data && e.data.ignore ? (je(Ne(e.target).closest(".sp-thumb-el").data("color")), Re()) : (je(Ne(e.target).closest(".sp-thumb-el").data("color")), Re(), h.hideAfterPaletteSelect ? (Le(!0), Me()) : Le()), !1;
        }

        ve(), oe.on("click.spectrum touchstart.spectrum", function (e) {
          Q || Pe(), e.stopPropagation(), Ne(e.target).is("input") || e.preventDefault();
        }), !O.is(":disabled") && !0 !== h.disabled || Qe(), E.on("click", Xe), [$, O].forEach(function (t) {
          t.on("change", function () {
            ke(t.val());
          }), t.on("paste", function () {
            setTimeout(function () {
              ke(t.val());
            }, 1);
          }), t.on("keydown", function (e) {
            13 == e.keyCode && (ke(Ne(t).val()), t == O && Me());
          });
        }), G.text(h.cancelText), G.on("click.spectrum", function (e) {
          e.stopPropagation(), e.preventDefault(), ze(), Me();
        }), U.attr("title", h.clearText), U.on("click.spectrum", function (e) {
          e.stopPropagation(), e.preventDefault(), ce = !0, Re(), d && Le(!0);
        }), J.text(h.chooseText), J.on("click.spectrum", function (e) {
          e.stopPropagation(), e.preventDefault(), Ve && $.is(":focus") && $.trigger("change"), $.hasClass("sp-validation-error") || (Le(!0), Me());
        }), Z.text(h.showPaletteOnly ? h.togglePaletteMoreText : h.togglePaletteLessText), Z.on("click.spectrum", function (e) {
          e.stopPropagation(), e.preventDefault(), h.showPaletteOnly = !h.showPaletteOnly, h.showPaletteOnly || d || E.css("left", "-=" + (N.outerWidth(!0) + 5)), me();
        }), Ge(B, function (e, t, a) {
          C = e / y, ce = !1, a.shiftKey && (C = Math.round(10 * C) / 10), Re();
        }, we, _e), Ge(I, function (e, t) {
          _ = parseFloat(t / x), ce = !1, h.showAlpha || (C = 1), Re();
        }, we, _e), Ge(D, function (e, t, a) {
          if (a.shiftKey) {
            if (!H) {
              var o = k * b,
                  r = m - P * m,
                  n = Math.abs(e - o) > Math.abs(t - r);
              H = n ? "x" : "y";
            }
          } else H = null;

          var s = !H || "y" === H;
          H && "x" !== H || (k = parseFloat(e / b)), s && (P = parseFloat((m - t) / m)), ce = !1, h.showAlpha || (C = 1), Re();
        }, we, _e), ne ? (je(ne), Fe(), ie = tinycolor(ne).format || h.preferredFormat, xe(ne)) : ("" === ne && je(ne), Fe()), d && Pe();
        var o = Ve ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
        X.on(o, ".sp-thumb-el", a), Y.on(o, ".sp-thumb-el:nth-child(1)", {
          ignore: !0
        }, a);
      }();
      var Ee = {
        show: Pe,
        hide: Me,
        toggle: function toggle() {
          (p ? Me : Pe)();
        },
        reflow: Oe,
        option: function option(e, t) {
          return e === De ? Ne.extend({}, h) : t === De ? h[e] : (h[e] = t, "preferredFormat" === e && (ie = h.preferredFormat), void me());
        },
        enable: function enable() {
          Q = !1, O.attr("disabled", !1), oe.removeClass("sp-disabled");
        },
        disable: Qe,
        offset: function offset(e) {
          h.offset = e, Oe();
        },
        set: function set(e) {
          je(e), Le();
        },
        get: Ae,
        destroy: function destroy() {
          O.show().removeClass("spectrum with-add-on sp-colorize"), oe.off("click.spectrum touchstart.spectrum"), E.remove(), ae.remove(), he && he.css("background-color", pe).css("color", de);
          var e = O.closest(".sp-original-input-container");
          0 < e.length && e.after(O).remove(), Ie[Ee.id] = null;
        },
        container: E
      };
      return Ee.id = Ie.push(Ee) - 1, Ee;
    }

    function a() {}

    function Xe(e) {
      e.stopPropagation();
    }

    function Ye(e, t) {
      var a = Array.prototype.slice,
          o = a.call(arguments, 2);
      return function () {
        return e.apply(t, o.concat(a.call(arguments)));
      };
    }

    function Ge(s, i, t, e) {
      i = i || function () {}, t = t || function () {}, e = e || function () {};
      var l = document,
          c = !1,
          u = {},
          f = 0,
          h = 0,
          d = ("ontouchstart" in window),
          a = {};

      function p(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(), e.returnValue = !1;
      }

      function o(e) {
        if (c) {
          if (Ve && l.documentMode < 9 && !e.button) return g();
          var t = e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0],
              a = t && t.pageX || e.pageX,
              o = t && t.pageY || e.pageY,
              r = Math.max(0, Math.min(a - u.left, h)),
              n = Math.max(0, Math.min(o - u.top, f));
          d && p(e), i.apply(s, [r, n, e]);
        }
      }

      function g() {
        c && (Ne(l).off(a), Ne(l.body).removeClass("sp-dragging"), setTimeout(function () {
          e.apply(s, arguments);
        }, 0)), c = !1;
      }

      a.selectstart = p, a.dragstart = p, a["touchmove mousemove"] = o, a["touchend mouseup"] = g, Ne(s).on("touchstart mousedown", function (e) {
        (e.which ? 3 == e.which : 2 == e.button) || c || !1 !== t.apply(s, arguments) && (c = !0, f = Ne(s).height(), h = Ne(s).width(), u = Ne(s).offset(), Ne(l).on(a), Ne(l.body).addClass("sp-dragging"), o(e), p(e));
      });
    }

    function Ue() {
      return Ne.fn.spectrum.inputTypeColorSupport();
    }

    var s = "spectrum.id";
    Ne.fn.spectrum = function (a, e) {
      if ("string" != typeof a) return this.spectrum("destroy").each(function () {
        var e = Ne.extend({}, Ne(this).data(), a);
        Ne(this).is("input") ? e.flat || "flat" == e.type ? e.type = "flat" : "color" == Ne(this).attr("type") ? e.type = "color" : e.type = e.type || "component" : e.type = "noInput";
        var t = n(this, e);
        Ne(this).data(s, t.id);
      });
      var o = this,
          r = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var e = Ie[Ne(this).data(s)];

        if (e) {
          var t = e[a];
          if (!t) throw new Error("Spectrum: no such method: '" + a + "'");
          "get" == a ? o = e.get() : "container" == a ? o = e.container : "option" == a ? o = e.option.apply(e, r) : "destroy" == a ? (e.destroy(), Ne(this).removeData(s)) : t.apply(e, r);
        }
      }), o;
    }, Ne.fn.spectrum.load = !0, Ne.fn.spectrum.loadOpts = {}, Ne.fn.spectrum.draggable = Ge, Ne.fn.spectrum.defaults = qe, Ne.fn.spectrum.inputTypeColorSupport = function e() {
      if (void 0 === e._cachedResult) {
        var t = Ne("<input type='color'/>")[0];
        e._cachedResult = "color" === t.type && "" !== t.value;
      }

      return e._cachedResult;
    }, Ne.spectrum = {}, Ne.spectrum.localization = {}, Ne.spectrum.palettes = {}, Ne.fn.spectrum.processNativeColorInputs = function () {
      var e = Ne("input[type=color]");
      e.length && !Ue() && e.spectrum({
        preferredFormat: "hex6"
      });
    }, function () {
      var n = /^[\s,#]+/,
          s = /\s+$/,
          o = 0,
          c = Math,
          i = c.round,
          u = c.min,
          f = c.max,
          e = c.random,
          h = function h(e, t) {
        if (t = t || {}, (e = e || "") instanceof h) return e;
        if (!(this instanceof h)) return new h(e, t);

        var a = function (e) {
          var t = {
            r: 0,
            g: 0,
            b: 0
          },
              a = 1,
              o = !1,
              r = !1;
          "string" == typeof e && (e = function (e) {
            e = e.replace(n, "").replace(s, "").toLowerCase();
            var t,
                a = !1;
            if (C[e]) e = C[e], a = !0;else if ("transparent" == e) return {
              r: 0,
              g: 0,
              b: 0,
              a: 0,
              format: "name"
            };
            if (t = Q.rgb.exec(e)) return {
              r: t[1],
              g: t[2],
              b: t[3]
            };
            if (t = Q.rgba.exec(e)) return {
              r: t[1],
              g: t[2],
              b: t[3],
              a: t[4]
            };
            if (t = Q.hsl.exec(e)) return {
              h: t[1],
              s: t[2],
              l: t[3]
            };
            if (t = Q.hsla.exec(e)) return {
              h: t[1],
              s: t[2],
              l: t[3],
              a: t[4]
            };
            if (t = Q.hsv.exec(e)) return {
              h: t[1],
              s: t[2],
              v: t[3]
            };
            if (t = Q.hsva.exec(e)) return {
              h: t[1],
              s: t[2],
              v: t[3],
              a: t[4]
            };
            if (t = Q.hex8.exec(e)) return {
              a: function (e) {
                return A(e) / 255;
              }(t[1]),
              r: A(t[2]),
              g: A(t[3]),
              b: A(t[4]),
              format: a ? "name" : "hex8"
            };
            if (t = Q.hex6.exec(e)) return {
              r: A(t[1]),
              g: A(t[2]),
              b: A(t[3]),
              format: a ? "name" : "hex"
            };
            if (t = Q.hex3.exec(e)) return {
              r: A(t[1] + "" + t[1]),
              g: A(t[2] + "" + t[2]),
              b: A(t[3] + "" + t[3]),
              format: a ? "name" : "hex"
            };
            return !1;
          }(e));
          "object" == _typeof(e) && (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b") ? (t = function (e, t, a) {
            return {
              r: 255 * z(e, 255),
              g: 255 * z(t, 255),
              b: 255 * z(a, 255)
            };
          }(e.r, e.g, e.b), o = !0, r = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : e.hasOwnProperty("h") && e.hasOwnProperty("s") && e.hasOwnProperty("v") ? (e.s = F(e.s), e.v = F(e.v), t = function (e, t, a) {
            e = 6 * z(e, 360), t = z(t, 100), a = z(a, 100);
            var o = c.floor(e),
                r = e - o,
                n = a * (1 - t),
                s = a * (1 - r * t),
                i = a * (1 - (1 - r) * t),
                l = o % 6;
            return {
              r: 255 * [a, s, n, n, i, a][l],
              g: 255 * [i, a, a, s, n, n][l],
              b: 255 * [n, n, i, a, a, s][l]
            };
          }(e.h, e.s, e.v), o = !0, r = "hsv") : e.hasOwnProperty("h") && e.hasOwnProperty("s") && e.hasOwnProperty("l") && (e.s = F(e.s), e.l = F(e.l), t = function (e, t, a) {
            var o, r, n;

            function s(e, t, a) {
              return a < 0 && (a += 1), 1 < a && --a, a < 1 / 6 ? e + 6 * (t - e) * a : a < .5 ? t : a < 2 / 3 ? e + (t - e) * (2 / 3 - a) * 6 : e;
            }

            if (e = z(e, 360), t = z(t, 100), a = z(a, 100), 0 === t) o = r = n = a;else {
              var i = a < .5 ? a * (1 + t) : a + t - a * t,
                  l = 2 * a - i;
              o = s(l, i, e + 1 / 3), r = s(l, i, e), n = s(l, i, e - 1 / 3);
            }
            return {
              r: 255 * o,
              g: 255 * r,
              b: 255 * n
            };
          }(e.h, e.s, e.l), o = !0, r = "hsl"), e.hasOwnProperty("a") && (a = e.a));
          return a = M(a), {
            ok: o,
            format: e.format || r,
            r: u(255, f(t.r, 0)),
            g: u(255, f(t.g, 0)),
            b: u(255, f(t.b, 0)),
            a: a
          };
        }(e);

        this._originalInput = e, this._r = a.r, this._g = a.g, this._b = a.b, this._a = a.a, this._roundA = i(1e3 * this._a) / 1e3, this._format = t.format || a.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = i(this._r)), this._g < 1 && (this._g = i(this._g)), this._b < 1 && (this._b = i(this._b)), this._ok = a.ok, this._tc_id = o++;
      };

      function r(e, t, a) {
        e = z(e, 255), t = z(t, 255), a = z(a, 255);
        var o,
            r,
            n = f(e, t, a),
            s = u(e, t, a),
            i = (n + s) / 2;
        if (n == s) o = r = 0;else {
          var l = n - s;

          switch (r = .5 < i ? l / (2 - n - s) : l / (n + s), n) {
            case e:
              o = (t - a) / l + (t < a ? 6 : 0);
              break;

            case t:
              o = (a - e) / l + 2;
              break;

            case a:
              o = (e - t) / l + 4;
          }

          o /= 6;
        }
        return {
          h: o,
          s: r,
          l: i
        };
      }

      function l(e, t, a) {
        e = z(e, 255), t = z(t, 255), a = z(a, 255);
        var o,
            r,
            n = f(e, t, a),
            s = u(e, t, a),
            i = n,
            l = n - s;
        if (r = 0 === n ? 0 : l / n, n == s) o = 0;else {
          switch (n) {
            case e:
              o = (t - a) / l + (t < a ? 6 : 0);
              break;

            case t:
              o = (a - e) / l + 2;
              break;

            case a:
              o = (e - t) / l + 4;
          }

          o /= 6;
        }
        return {
          h: o,
          s: r,
          v: i
        };
      }

      function t(e, t, a, o) {
        var r = [R(i(e).toString(16)), R(i(t).toString(16)), R(i(a).toString(16))];
        return o && r[0].charAt(0) == r[0].charAt(1) && r[1].charAt(0) == r[1].charAt(1) && r[2].charAt(0) == r[2].charAt(1) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
      }

      function d(e, t, a, o) {
        var r;
        return [R((r = o, Math.round(255 * parseFloat(r)).toString(16))), R(i(e).toString(16)), R(i(t).toString(16)), R(i(a).toString(16))].join("");
      }

      function a(e, t) {
        t = 0 === t ? 0 : t || 10;
        var a = h(e).toHsl();
        return a.s -= t / 100, a.s = j(a.s), h(a);
      }

      function p(e, t) {
        t = 0 === t ? 0 : t || 10;
        var a = h(e).toHsl();
        return a.s += t / 100, a.s = j(a.s), h(a);
      }

      function g(e) {
        return h(e).desaturate(100);
      }

      function b(e, t) {
        t = 0 === t ? 0 : t || 10;
        var a = h(e).toHsl();
        return a.l += t / 100, a.l = j(a.l), h(a);
      }

      function m(e, t) {
        t = 0 === t ? 0 : t || 10;
        var a = h(e).toRgb();
        return a.r = f(0, u(255, a.r - i(-t / 100 * 255))), a.g = f(0, u(255, a.g - i(-t / 100 * 255))), a.b = f(0, u(255, a.b - i(-t / 100 * 255))), h(a);
      }

      function v(e, t) {
        t = 0 === t ? 0 : t || 10;
        var a = h(e).toHsl();
        return a.l -= t / 100, a.l = j(a.l), h(a);
      }

      function x(e, t) {
        var a = h(e).toHsl(),
            o = (i(a.h) + t) % 360;
        return a.h = o < 0 ? 360 + o : o, h(a);
      }

      function y(e) {
        var t = h(e).toHsl();
        return t.h = (t.h + 180) % 360, h(t);
      }

      function T(e) {
        var t = h(e).toHsl(),
            a = t.h;
        return [h(e), h({
          h: (a + 120) % 360,
          s: t.s,
          l: t.l
        }), h({
          h: (a + 240) % 360,
          s: t.s,
          l: t.l
        })];
      }

      function w(e) {
        var t = h(e).toHsl(),
            a = t.h;
        return [h(e), h({
          h: (a + 90) % 360,
          s: t.s,
          l: t.l
        }), h({
          h: (a + 180) % 360,
          s: t.s,
          l: t.l
        }), h({
          h: (a + 270) % 360,
          s: t.s,
          l: t.l
        })];
      }

      function _(e) {
        var t = h(e).toHsl(),
            a = t.h;
        return [h(e), h({
          h: (a + 72) % 360,
          s: t.s,
          l: t.l
        }), h({
          h: (a + 216) % 360,
          s: t.s,
          l: t.l
        })];
      }

      function k(e, t, a) {
        t = t || 6, a = a || 30;
        var o = h(e).toHsl(),
            r = 360 / a,
            n = [h(e)];

        for (o.h = (o.h - (r * t >> 1) + 720) % 360; --t;) {
          o.h = (o.h + r) % 360, n.push(h(o));
        }

        return n;
      }

      function P(e, t) {
        t = t || 6;

        for (var a = h(e).toHsv(), o = a.h, r = a.s, n = a.v, s = [], i = 1 / t; t--;) {
          s.push(h({
            h: o,
            s: r,
            v: n
          })), n = (n + i) % 1;
        }

        return s;
      }

      h.prototype = {
        isDark: function isDark() {
          return this.getBrightness() < 128;
        },
        isLight: function isLight() {
          return !this.isDark();
        },
        isValid: function isValid() {
          return this._ok;
        },
        getOriginalInput: function getOriginalInput() {
          return this._originalInput;
        },
        getFormat: function getFormat() {
          return this._format;
        },
        getAlpha: function getAlpha() {
          return this._a;
        },
        getBrightness: function getBrightness() {
          var e = this.toRgb();
          return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
        },
        setAlpha: function setAlpha(e) {
          return this._a = M(e), this._roundA = i(1e3 * this._a) / 1e3, this;
        },
        toHsv: function toHsv() {
          var e = l(this._r, this._g, this._b);
          return {
            h: 360 * e.h,
            s: e.s,
            v: e.v,
            a: this._a
          };
        },
        toHsvString: function toHsvString() {
          var e = l(this._r, this._g, this._b),
              t = i(360 * e.h),
              a = i(100 * e.s),
              o = i(100 * e.v);
          return 1 == this._a ? "hsv(" + t + ", " + a + "%, " + o + "%)" : "hsva(" + t + ", " + a + "%, " + o + "%, " + this._roundA + ")";
        },
        toHsl: function toHsl() {
          var e = r(this._r, this._g, this._b);
          return {
            h: 360 * e.h,
            s: e.s,
            l: e.l,
            a: this._a
          };
        },
        toHslString: function toHslString() {
          var e = r(this._r, this._g, this._b),
              t = i(360 * e.h),
              a = i(100 * e.s),
              o = i(100 * e.l);
          return 1 == this._a ? "hsl(" + t + ", " + a + "%, " + o + "%)" : "hsla(" + t + ", " + a + "%, " + o + "%, " + this._roundA + ")";
        },
        toHex: function toHex(e) {
          return t(this._r, this._g, this._b, e);
        },
        toHexString: function toHexString(e) {
          return "#" + this.toHex(e);
        },
        toHex8: function toHex8() {
          return d(this._r, this._g, this._b, this._a);
        },
        toHex8String: function toHex8String() {
          return "#" + this.toHex8();
        },
        toRgb: function toRgb() {
          return {
            r: i(this._r),
            g: i(this._g),
            b: i(this._b),
            a: this._a
          };
        },
        toRgbString: function toRgbString() {
          return 1 == this._a ? "rgb(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ")" : "rgba(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ", " + this._roundA + ")";
        },
        toPercentageRgb: function toPercentageRgb() {
          return {
            r: i(100 * z(this._r, 255)) + "%",
            g: i(100 * z(this._g, 255)) + "%",
            b: i(100 * z(this._b, 255)) + "%",
            a: this._a
          };
        },
        toPercentageRgbString: function toPercentageRgbString() {
          return 1 == this._a ? "rgb(" + i(100 * z(this._r, 255)) + "%, " + i(100 * z(this._g, 255)) + "%, " + i(100 * z(this._b, 255)) + "%)" : "rgba(" + i(100 * z(this._r, 255)) + "%, " + i(100 * z(this._g, 255)) + "%, " + i(100 * z(this._b, 255)) + "%, " + this._roundA + ")";
        },
        toName: function toName() {
          return 0 === this._a ? "transparent" : !(this._a < 1) && (S[t(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function toFilter(e) {
          var t = "#" + d(this._r, this._g, this._b, this._a),
              a = t,
              o = this._gradientType ? "GradientType = 1, " : "";
          e && (a = h(e).toHex8String());
          return "progid:DXImageTransform.Microsoft.gradient(" + o + "startColorstr=" + t + ",endColorstr=" + a + ")";
        },
        toString: function toString(e) {
          var t = !!e;
          e = e || this._format;
          var a = !1,
              o = this._a < 1 && 0 <= this._a;
          return t || !o || "hex" !== e && "hex6" !== e && "hex3" !== e && "name" !== e ? ("rgb" === e && (a = this.toRgbString()), "prgb" === e && (a = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (a = this.toHexString()), "hex3" === e && (a = this.toHexString(!0)), "hex8" === e && (a = this.toHex8String()), "name" === e && (a = this.toName()), "hsl" === e && (a = this.toHslString()), "hsv" === e && (a = this.toHsvString()), a || this.toHexString()) : "name" === e && 0 === this._a ? this.toName() : this.toRgbString();
        },
        _applyModification: function _applyModification(e, t) {
          var a = e.apply(null, [this].concat([].slice.call(t)));
          return this._r = a._r, this._g = a._g, this._b = a._b, this.setAlpha(a._a), this;
        },
        lighten: function lighten() {
          return this._applyModification(b, arguments);
        },
        brighten: function brighten() {
          return this._applyModification(m, arguments);
        },
        darken: function darken() {
          return this._applyModification(v, arguments);
        },
        desaturate: function desaturate() {
          return this._applyModification(a, arguments);
        },
        saturate: function saturate() {
          return this._applyModification(p, arguments);
        },
        greyscale: function greyscale() {
          return this._applyModification(g, arguments);
        },
        spin: function spin() {
          return this._applyModification(x, arguments);
        },
        _applyCombination: function _applyCombination(e, t) {
          return e.apply(null, [this].concat([].slice.call(t)));
        },
        analogous: function analogous() {
          return this._applyCombination(k, arguments);
        },
        complement: function complement() {
          return this._applyCombination(y, arguments);
        },
        monochromatic: function monochromatic() {
          return this._applyCombination(P, arguments);
        },
        splitcomplement: function splitcomplement() {
          return this._applyCombination(_, arguments);
        },
        triad: function triad() {
          return this._applyCombination(T, arguments);
        },
        tetrad: function tetrad() {
          return this._applyCombination(w, arguments);
        }
      }, h.fromRatio = function (e, t) {
        if ("object" == _typeof(e)) {
          var a = {};

          for (var o in e) {
            e.hasOwnProperty(o) && (a[o] = "a" === o ? e[o] : F(e[o]));
          }

          e = a;
        }

        return h(e, t);
      }, h.equals = function (e, t) {
        return !(!e || !t) && h(e).toRgbString() == h(t).toRgbString();
      }, h.random = function () {
        return h.fromRatio({
          r: e(),
          g: e(),
          b: e()
        });
      }, h.mix = function (e, t, a) {
        a = 0 === a ? 0 : a || 50;
        var o,
            r = h(e).toRgb(),
            n = h(t).toRgb(),
            s = a / 100,
            i = 2 * s - 1,
            l = n.a - r.a,
            c = 1 - (o = ((o = i * l == -1 ? i : (i + l) / (1 + i * l)) + 1) / 2),
            u = {
          r: n.r * o + r.r * c,
          g: n.g * o + r.g * c,
          b: n.b * o + r.b * c,
          a: n.a * s + r.a * (1 - s)
        };
        return h(u);
      }, h.readability = function (e, t) {
        var a = h(e),
            o = h(t),
            r = a.toRgb(),
            n = o.toRgb(),
            s = a.getBrightness(),
            i = o.getBrightness(),
            l = Math.max(r.r, n.r) - Math.min(r.r, n.r) + Math.max(r.g, n.g) - Math.min(r.g, n.g) + Math.max(r.b, n.b) - Math.min(r.b, n.b);
        return {
          brightness: Math.abs(s - i),
          color: l
        };
      }, h.isReadable = function (e, t) {
        var a = h.readability(e, t);
        return 125 < a.brightness && 500 < a.color;
      }, h.mostReadable = function (e, t) {
        for (var a = null, o = 0, r = !1, n = 0; n < t.length; n++) {
          var s = h.readability(e, t[n]),
              i = 125 < s.brightness && 500 < s.color,
              l = s.brightness / 125 * 3 + s.color / 500;
          (i && !r || i && r && o < l || !i && !r && o < l) && (r = i, o = l, a = h(t[n]));
        }

        return a;
      };

      var C = h.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
      },
          S = h.hexNames = function (e) {
        var t = {};

        for (var a in e) {
          e.hasOwnProperty(a) && (t[e[a]] = a);
        }

        return t;
      }(C);

      function M(e) {
        return e = parseFloat(e), (isNaN(e) || e < 0 || 1 < e) && (e = 1), e;
      }

      function z(e, t) {
        var a;
        "string" == typeof (a = e) && -1 != a.indexOf(".") && 1 === parseFloat(a) && (e = "100%");
        var o,
            r = "string" == typeof (o = e) && -1 != o.indexOf("%");
        return e = u(t, f(0, parseFloat(e))), r && (e = parseInt(e * t, 10) / 100), c.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t);
      }

      function j(e) {
        return u(1, f(0, e));
      }

      function A(e) {
        return parseInt(e, 16);
      }

      function R(e) {
        return 1 == e.length ? "0" + e : "" + e;
      }

      function F(e) {
        return e <= 1 && (e = 100 * e + "%"), e;
      }

      var H,
          L,
          O,
          Q = (L = "[\\s|\\(]+(" + (H = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + H + ")[,|\\s]+(" + H + ")\\s*\\)?", O = "[\\s|\\(]+(" + H + ")[,|\\s]+(" + H + ")[,|\\s]+(" + H + ")[,|\\s]+(" + H + ")\\s*\\)?", {
        rgb: new RegExp("rgb" + L),
        rgba: new RegExp("rgba" + O),
        hsl: new RegExp("hsl" + L),
        hsla: new RegExp("hsla" + O),
        hsv: new RegExp("hsv" + L),
        hsva: new RegExp("hsva" + O),
        hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      });
      window.tinycolor = h;
    }(), Ne(function () {
      Ne.fn.spectrum.load && Ne.fn.spectrum.processNativeColorInputs();
    });
  }), jQuery.spectrum.localization.ar = {
    cancelText: "إلغاء",
    chooseText: "إختار",
    clearText: "إرجاع الألوان على ما كانت",
    noColorSelectedText: "لم تختار أي لون",
    togglePaletteMoreText: "أكثر",
    togglePaletteLessText: "أقل"
  }, jQuery.spectrum.localization.ca = {
    cancelText: "Cancel·lar",
    chooseText: "Escollir",
    clearText: "Esborrar color seleccionat",
    noColorSelectedText: "Cap color seleccionat",
    togglePaletteMoreText: "Més",
    togglePaletteLessText: "Menys"
  }, jQuery.spectrum.localization.cs = {
    cancelText: "zrušit",
    chooseText: "vybrat",
    clearText: "Resetovat výběr barev",
    noColorSelectedText: "Žádná barva nebyla vybrána",
    togglePaletteMoreText: "více",
    togglePaletteLessText: "méně"
  }, jQuery.spectrum.localization.de = {
    cancelText: "Abbrechen",
    chooseText: "Wählen",
    clearText: "Farbauswahl zurücksetzen",
    noColorSelectedText: "Keine Farbe ausgewählt",
    togglePaletteMoreText: "Mehr",
    togglePaletteLessText: "Weniger"
  }, jQuery.spectrum.localization.dk = {
    cancelText: "annuller",
    chooseText: "Vælg"
  }, jQuery.spectrum.localization.es = {
    cancelText: "Cancelar",
    chooseText: "Elegir",
    clearText: "Borrar color seleccionado",
    noColorSelectedText: "Ningún color seleccionado",
    togglePaletteMoreText: "Más",
    togglePaletteLessText: "Menos"
  }, jQuery.spectrum.localization.et = {
    cancelText: "Katkesta",
    chooseText: "Vali",
    clearText: "Tühista värvivalik",
    noColorSelectedText: "Ühtki värvi pole valitud",
    togglePaletteMoreText: "Rohkem",
    togglePaletteLessText: "Vähem"
  }, jQuery.spectrum.localization.fa = {
    cancelText: "لغو",
    chooseText: "انتخاب",
    clearText: "تنظیم مجدد رنگ",
    noColorSelectedText: "هیچ رنگی انتخاب نشده است!",
    togglePaletteMoreText: "بیشتر",
    togglePaletteLessText: "کمتر"
  }, jQuery.spectrum.localization.fi = {
    cancelText: "Kumoa",
    chooseText: "Valitse"
  }, jQuery.spectrum.localization.fr = {
    cancelText: "Annuler",
    chooseText: "Valider",
    clearText: "Effacer couleur sélectionnée",
    noColorSelectedText: "Aucune couleur sélectionnée",
    togglePaletteMoreText: "Plus",
    togglePaletteLessText: "Moins"
  }, jQuery.spectrum.localization.gr = {
    cancelText: "Ακύρωση",
    chooseText: "Επιλογή",
    clearText: "Καθαρισμός επιλεγμένου χρώματος",
    noColorSelectedText: "Δεν έχει επιλεχθεί κάποιο χρώμα",
    togglePaletteMoreText: "Περισσότερα",
    togglePaletteLessText: "Λιγότερα"
  }, jQuery.spectrum.localization.he = {
    cancelText: "בטל בחירה",
    chooseText: "בחר צבע",
    clearText: "אפס בחירה",
    noColorSelectedText: "לא נבחר צבע",
    togglePaletteMoreText: "עוד צבעים",
    togglePaletteLessText: "פחות צבעים"
  }, jQuery.spectrum.localization.hr = {
    cancelText: "Odustani",
    chooseText: "Odaberi",
    clearText: "Poništi odabir",
    noColorSelectedText: "Niti jedna boja nije odabrana",
    togglePaletteMoreText: "Više",
    togglePaletteLessText: "Manje"
  }, jQuery.spectrum.localization.hu = {
    cancelText: "Mégsem",
    chooseText: "Mentés",
    clearText: "A színválasztás visszaállítása",
    noColorSelectedText: "Nincs szín kijelölve",
    togglePaletteMoreText: "Több",
    togglePaletteLessText: "Kevesebb"
  }, jQuery.spectrum.localization.id = {
    cancelText: "Batal",
    chooseText: "Pilih",
    clearText: "Hapus Pilihan Warna",
    noColorSelectedText: "Warna Tidak Dipilih",
    togglePaletteMoreText: "tambah",
    togglePaletteLessText: "kurangi"
  }, jQuery.spectrum.localization.it = {
    cancelText: "annulla",
    chooseText: "scegli",
    clearText: "Annulla selezione colore",
    noColorSelectedText: "Nessun colore selezionato"
  }, jQuery.spectrum.localization.ja = {
    cancelText: "中止",
    chooseText: "選択"
  }, jQuery.spectrum.localization.ko = {
    cancelText: "취소",
    chooseText: "선택",
    clearText: "선택 초기화",
    noColorSelectedText: "선택된 색상 없음",
    togglePaletteMoreText: "더보기",
    togglePaletteLessText: "줄이기"
  }, jQuery.spectrum.localization.lt = {
    cancelText: "Atšaukti",
    chooseText: "Pasirinkti",
    clearText: "Išvalyti pasirinkimą",
    noColorSelectedText: "Spalva nepasirinkta",
    togglePaletteMoreText: "Daugiau",
    togglePaletteLessText: "Mažiau"
  }, jQuery.spectrum.localization["nb-no"] = {
    cancelText: "Avbryte",
    chooseText: "Velg",
    clearText: "Tilbakestill",
    noColorSelectedText: "Farge er ikke valgt",
    togglePaletteMoreText: "Mer",
    togglePaletteLessText: "Mindre"
  }, jQuery.spectrum.localization["nl-nl"] = {
    cancelText: "Annuleer",
    chooseText: "Kies",
    clearText: "Wis kleur selectie",
    togglePaletteMoreText: "Meer",
    togglePaletteLessText: "Minder"
  }, jQuery.spectrum.localization.pl = {
    cancelText: "Anuluj",
    chooseText: "Wybierz",
    clearText: "Usuń wybór koloru",
    noColorSelectedText: "Nie wybrano koloru",
    togglePaletteMoreText: "Więcej",
    togglePaletteLessText: "Mniej"
  }, jQuery.spectrum.localization["pt-br"] = {
    cancelText: "Cancelar",
    chooseText: "Escolher",
    clearText: "Limpar cor selecionada",
    noColorSelectedText: "Nenhuma cor selecionada",
    togglePaletteMoreText: "Mais",
    togglePaletteLessText: "Menos"
  }, jQuery.spectrum.localization["pt-pt"] = {
    cancelText: "Cancelar",
    chooseText: "Escolher",
    clearText: "Limpar cor seleccionada",
    noColorSelectedText: "Nenhuma cor seleccionada",
    togglePaletteMoreText: "Mais",
    togglePaletteLessText: "Menos"
  }, jQuery.spectrum.localization.ru = {
    cancelText: "Отмена",
    chooseText: "Выбрать",
    clearText: "Сбросить",
    noColorSelectedText: "Цвет не выбран",
    togglePaletteMoreText: "Ещё",
    togglePaletteLessText: "Скрыть"
  }, jQuery.spectrum.localization.sv = {
    cancelText: "Avbryt",
    chooseText: "Välj"
  }, jQuery.spectrum.localization.tr = {
    cancelText: "iptal",
    chooseText: "tamam"
  }, jQuery.spectrum.localization["zh-cn"] = {
    cancelText: "取消",
    chooseText: "选择",
    clearText: "清除",
    togglePaletteMoreText: "更多选项",
    togglePaletteLessText: "隐藏",
    noColorSelectedText: "尚未选择任何颜色"
  }, jQuery.spectrum.localization["zh-tw"] = {
    cancelText: "取消",
    chooseText: "選擇",
    clearText: "清除",
    togglePaletteMoreText: "更多選項",
    togglePaletteLessText: "隱藏",
    noColorSelectedText: "尚未選擇任何顏色"
  };

  /**
   * clipboard
   */
  function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text; // Avoid scrolling to bottom

    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
  }

  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }

    navigator.clipboard.writeText(text).then(function () {
      console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

  var pluginsSnipet = {
    'scene': false,
    'left': false,
    'center': false,
    'right': false,
    'leftimg': "name: null\ncss:\n  width: 200px\n  height: 200px\n  top: 0px\n  left: 0px",
    'centerimg': "name: null\ncss:\n  width: 200px\n  height: 200px\n  top: 0px\n  left: 0px",
    'rightimg': "name: null\ncss:\n  width: 200px\n  height: 200px\n  top: 0px\n  left: 0px",
    'audio': "name: null\naction: play\nspeed: 1\nvolume: 1\nloop: true",
    'blocks': "- id: null\n  image: null\n  z-index: 0\n  timeout: 0\n  width: 100px\n  height: 100px\n  top: 100px\n  left: 100px\n  animation: \n    type: showLeft\n    duration: 1000",
    'blocks-step': "id: null\nimage: null\nz-index: 0\nanimation: \n  type: moveTo\n  duration: 2000\n  left: 300px\n  top: 300px",
    'audio-sprite': "name: null\nvolume: 1\nsprite:\n  sound_1:\n    - 1:08\n    - 0:06\n  sound_2: \n    - 2:05\n    - 0:03",

    /**
     * CHARACTER
     */
    'character': "reply: null\navatar: null\ninfo: null\nborderColor: \"#57f704\"",

    /**
     * MENU
     */
    'menu': "- $init: \u041D\u0430\u0447\u0430\u043B\u043E\n  icon: p1\n- $root.$init: \u041D\u0430\u0447\u0430\u043B\u043E 2\n- next: \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",

    /**
     * VIDEO
     */
    'video': "name: null\nvolume: 0.7\ncss:\n  top: 50px\n  left: 50px\n  width: 500px\n  height: 300px",

    /**
     * execute
     */
    'execute': "- ...\n- ...",

    /**
     * DEV
     */
    'img-size': "null",

    /**
     * minecraft cmd
     */
    'cmd-player': "executeCMD\ngive @p dirt 1",
    'cmd-server': "executeCMD\nsay TEST",
    'cmd-mc-get': "request: PLAYER #BLOCK #SLOT #ENTITY\nslot: 0\npost: [0, 0, 0]",

    /**
     * DATA
     */
    'data': "true"
  };

  var ScreenShot = /*#__PURE__*/function () {
    function ScreenShot() {
      _classCallCheck(this, ScreenShot);

      _defineProperty(this, "WEB_HOOK", 'https://discord.com/api/webhooks/1013006725558829126/JCPnV-jnWmNHuLaBg5F7bAvAub-9n56EgF2PJJ22uSRVAREvHh_7BNlGLaiKO5zAQqyT');

      _defineProperty(this, "HOST", null);

      _defineProperty(this, "avatar_url", "https://avatars.githubusercontent.com/u/17809187?s=200&v=4");

      _defineProperty(this, "content", "");

      _defineProperty(this, "username", "Vnjson");

      _defineProperty(this, "imageData", null);

      _defineProperty(this, "extName", "jpeg");
    }

    _createClass(ScreenShot, [{
      key: "imageURL",
      get: function get() {
        return "".concat(this.HOST, "/screenshots/").concat(this.imageName);
      }
    }, {
      key: "URL",
      get: function get() {
        return "".concat(this.HOST, "/api/vnjson/screenshot");
      }
    }, {
      key: "nodeToCanvas",
      value: function nodeToCanvas() {
        var _this = this;

        html2canvas(vnjs.store.screen.get(0)).then(function (canvas) {
          //this.sendToDiscord(canvas.toDataURL())
          canvas.toBlob(function (blob) {
            _this.sendToDiscord(blob); // this.saveImageToServer(blob)

          }, "image/".concat(_this.extName));
        });
      }
    }, {
      key: "imageName",
      get: function get() {
        return String(new Date().getTime()) + "." + this.extName;
      }
    }, {
      key: "saveImageToServer",
      value: function saveImageToServer(blob) {
        var _this2 = this;

        //this.HOST = 'http://localhost:8081'
        var formData = new FormData();
        formData.append("image", blob, this.imageName);
        fetch(this.URL, {
          method: "POST",
          body: formData
        }).then(function (r) {
          console.log(r);
        })["catch"](function (err) {
          console.error(err);
          vnjs.emit("error", {
            ru: "\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 <font color=\"deepskyblue\">".concat(_this2.HOST, "</font>"),
            en: "Server not responding <font color=\"deepskyblue\">".concat(_this2.HOST, "</font>")
          });
        });
      }
    }, {
      key: "sendToDiscord",
      value: function sendToDiscord(blob) {
        var _this3 = this;

        var body = {
          avatar_url: this.avatar_url,
          content: this.content,
          username: this.username,
          embeds: [{
            description: "$html('.pop-up-discord__textarea').value",
            image: {
              url: this.avatar_url // type: 'image/png'

            }
          }]
        };
        var params = {
          method: "POST",
          headers: {
            //"Content-type": "application/json",
            "Content-Type": "multipart/form-data"
          },
          body: JSON.stringify(body)
        };
        fetch(this.WEB_HOOK, params).then(function (res) {})["catch"](function (err) {
          console.error(err);
          vnjs.emit("error", {
            ru: "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A webhook <font color=\"deepskyblue\">".concat(_this3.WEB_HOOK, "</font>"),
            en: "No access to <font color=\"deepskyblue\">".concat(_this3.WEB_HOOK, "</font>")
          });
        });
      }
    }]);

    return ScreenShot;
  }();

  var screenShot = new ScreenShot();

  function getImageSize (asset) {
    var _vnjs = this;

    this.getCharacters()[0];

    if (asset) {
      var img = new Image();

      img.onload = function () {
        var str = "image: ".concat(asset, "<br>width: ").concat(this.width, "px<br>height: ").concat(this.height, "px");

        _vnjs.emit('vnjson.info', str);
      };

      img.src = vnjs.getAssetByName(asset).url;
    }
  }

  /**
   * Выполняет консольную команду в MineCraft
   */
  function callback$2(data) {
    vnjs.emit('vnjson.error', data);
  }

  function cmdPlayerPlugin (param) {
    var arr = param.split(' ');
    var data = param.replace(arr[0], '');
    var plugins = {
      'mc-exec': {
        action: arr[0],
        data: data,
        type: 'player',
        callback: callback$2.bind(this)
      }
    };
    this.exec(plugins);
  }

  /**
   * Выполняет консольную команду в MineCraft
   */
  function callback$1(data) {
    vnjs.emit('vnjson.error', data);
  }

  function cmdServerPlugin (param) {
    /**
     * .split('\n') .split(':') почему то не работает
     * или у меня крыша поехала
     */
    var arr = param.split(' ');
    var data = param.replace(arr[0], '');
    var plugins = {
      'mc-exec': {
        action: arr[0],
        data: data,
        type: 'server',
        callback: callback$1.bind(this)
      }
    };
    this.exec(plugins);
  }

  /**
   * Выполняет консольную команду в MineCraft
   */
  function callback(res) {
    var _res = JSON.parse(res);

    _res.data = JSON.parse(_res.data);
    var outputData = JSON.stringify(_res, null, 2);
    vnjs.emit('vnjson.info', outputData);
  }

  function queryGetPlugin (param) {
    param.callback = callback.bind(this);
    var plugins = {
      'mc-get': param
    };
    this.exec(plugins);
  }

  var exclude = ["score", "player", "pushStore"];
  function outputDataPlugin (asset) {
    var data = {};

    for (var key in this.state.data) {
      if (!exclude.includes(key)) {
        data[key] = this.state.data[key];
      }
    }

    var _data = jsyaml.dump(data);

    vnjs.emit("vnjson.info", _data);
  }

  /**
   * INIT
   */

  var cid = "$";
  function debugUtils () {
    var _this = this;

    var $tpl = $(tpl$e);
    $(".game").append($tpl);
    $(".debug__inner-reply").on("click", function () {
      cid = $(".debug__character").val();
      var reply = $(".debug__reply").val().trim();
      var objReply = jsyaml.load(reply);
      if (cid === "") cid = "$";

      _this.exec(_defineProperty({}, cid, objReply));
    });
    /*
     * delay
     */

    vnjs.on("postload", function () {
      var _this$package;

      // delay
      var dBox = (_this$package = _this["package"]) === null || _this$package === void 0 ? void 0 : _this$package["dialog-box"];
      $(".debug__delay").val((dBox === null || dBox === void 0 ? void 0 : dBox.delay) || 0);
      $(".debug__alpha").val((dBox === null || dBox === void 0 ? void 0 : dBox.alpha) || 1); // screenshot

      screenShot.WEBHOOK = "";
      screenShot.HOST = _this["package"].publish.host;
    });
    $(".debug__delay").on("change", function () {
      vnjs.plugins["dialog-box"].delay = $(this).val();
    });
    $(".debug__alpha").on("change", function () {
      vnjs.plugins["dialog-box"].alpha = $(this).val();
    });
    /**
     * color-picker
     */

    $("#debug__color-picker").on("change", function () {
      var value = $(this).val();
      copyTextToClipboard(value);
    });
    $("#debug__color-picker").spectrum({
      color: "#d8dfe3",
      type: "text"
    });
    /**
     * Клик по снипету в реплике
     */

    $(".debug-btn--character-snipet").on("click", function () {
      var val = pluginsSnipet["character"];
      $(".debug__reply").val(val);
    });
    var $pluginValue = $(".debug__plugin--value");
    /**
     * degug plugins
     */

    var devPlugins = ["img-size", "cmd-player", "cmd-server", "cmd-mc-get", "data"];
    /**
     * Выводим список плагинов
     */

    var $pluginSelect = $(".debug-plugin__select");
    Object.keys(pluginsSnipet).forEach(function (pluginItem, index) {
      var isDev = devPlugins.includes(pluginItem);
      var tpl = null;

      if (isDev) {
        tpl = "<code class=\"debug-plugin__name debug-plugin__name--dev\" data-plugin=\"vnjson.".concat(pluginItem, "\">\n                            ").concat(pluginItem, "\n                      </code>");
      } else {
        tpl = "<code class=\"debug-plugin__name ".concat(index === 0 ? "debug-plugin__name--active" : "", "\" data-plugin=\"").concat(pluginItem, "\">\n                            ").concat(pluginItem, "\n                      </code>");
      }

      $pluginSelect.append(tpl);
    });
    /**
     * выбираем название плагина
     */

    var pluginName = "scene";

    var resetActivePluginName = function resetActivePluginName() {
      $(".debug-plugin__select .debug-plugin__name").each(function (node) {
        $(this).removeClass("debug-plugin__name--active");
      });
      $pluginValue.val("");
    };

    $pluginSelect.on("click", ".debug-plugin__name", function () {
      resetActivePluginName();
      $(this).addClass("debug-plugin__name--active");
      pluginName = $(this).data("plugin");
    });
    /**
     * кликаем по кнопке snippet
     */

    $(".debug-btn--value").on("click", function () {
      var snippet = pluginsSnipet[pluginName.replace('vnjson.', "")];
      $pluginValue.val(snippet);
    });
    /**
     * Кликаем по кнопке [ выполнить плагин ]
     */

    $(".debug__show-asset").on("click", function () {
      var pluginValue = jsyaml.load($pluginValue.val().trim());
      vnjs.exec(_defineProperty({}, pluginName, pluginValue));
    });
    /**
     * Показываем и скрываем [ dialog-box ]
     */

    var flagDB = 0;
    $(".debug__show-dbh").on("click", function () {
      switch (flagDB) {
        case 0:
          vnjs.exec({
            "dialog-box": 'fullscreen'
          });
          flagDB = 1;
          break;

        case 1:
          vnjs.exec({
            "dialog-box": false
          });
          flagDB = 2;
          break;

        case 2:
          vnjs.exec({
            "dialog-box": 'classic'
          });
          flagDB = 0;
          break;
      }
    });
    /**
     * Screenshot
     */
    //$(".debug__inner-screenshot").on("click", () => screenShot.nodeToCanvas());

    /**
     * PLUGINS
     */

    /**
     * get original image size plugin
     */

    vnjs.on("vnjson.img-size", getImageSize);
    /**
     * Minecraft CMD client
     */

    vnjs.on("vnjson.cmd-player", cmdPlayerPlugin);
    /**
     * Minecraft CMD server
     */

    vnjs.on("vnjson.cmd-server", cmdServerPlugin);
    /**
     * Minecraft query GET
     */

    vnjs.on("vnjson.cmd-mc-get", queryGetPlugin);
    /**
     * Output data
     */

    vnjs.on("vnjson.data", outputDataPlugin);
  }

  var css$w = ".vnjson-loader {\n  background: black;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: white;\n  display: none;\n  align-items: center;\n  justify-content: center;\n}\n.vnjson-loader__progress{\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  background-color: #334;\n\n}\n.vnjson-loader__progress--load{\n  width: 0%;\n  height: 20px;\n  background-color: #223;\n  font-size: 12px;\n  padding: 5px 5px;\n  color: #556;\n  text-align: right;\n}\n.vnjson-loader__status {\n  color: wheat;\n  font-family: Consolas, Menlo, Monaco, monospace;\n  font-weight: bold;\n  font-size: 100px;\n  opacity: 0.8;\n}\n.vnjson-loader__status span {\n  display: inline-block;\n  animation: pulse 0.4s alternate infinite ease-in-out;\n}\n.vnjson-loader__status span:nth-child(2) {\n  animation-delay: 0.4s;\n}\n\n@keyframes pulse {\n  to {\n    transform: scale(0.8);\n    opacity: 0.5; \n  } \n}\n";
  n(css$w,{});

  var tpl$d = "<div class=\"vnjson-loader\">\n    <div class=\"vnjson-loader__progress\">\n        <div class=\"vnjson-loader__progress--load\"></div>\n    </div>\n    <div class=\"vnjson-loader__status\"><span>{</span><span>}</span></div>\n</div>";

  var Loader = /*#__PURE__*/function () {
    function Loader() {
      _classCallCheck(this, Loader);

      _defineProperty(this, "asset", null);

      _defineProperty(this, "index", 0);

      _defineProperty(this, "assets", []);
    }

    _createClass(Loader, [{
      key: "start",
      value: function start(assets) {
        vnjs.store.audio = {};
        vnjs.emit('preload');
        this.assets = assets;
        this.assetsLength = this.assets.length;
        this.load();
      }
    }, {
      key: "next",
      value: function next() {
        this.index++; //console.log(this.index +'/'+this.assetsLength, this.asset)

        vnjs.emit("load", this.asset, this.assetsLength, this.index);
        this.load();
      }
    }, {
      key: "load",
      value: function load() {
        if (this.index < this.assetsLength) {
          this.asset = this.assets[this.index];

          if (/\.png|\.jpg|\.jpeg|\.webp|\.gif/i.test(this.asset.url)) {
            this.loadImage();
          } else if (/\.mp3|\.wav|\.ogg/i.test(this.asset.url)) {
            this.loadAudio();
          } else {
            /**
             * Пропускаем неизвестные файлы
             */
            // console.warn(this.asset.url +' Resource does not support preload')
            this.next();
          }
        } else {
          //console.log('Данные загружены')
          vnjs.emit('postload');
        }
      }
    }, {
      key: "loadImage",
      value: function loadImage() {
        var _this = this;

        var img = new Image();

        img.onerror = function () {
          vnjs.emit("load", _this.asset, _this.assets.length, _this.index);
          console.error("Image not found", _this.asset);

          _this.next();
        };

        img.onload = function () {
          return _this.next();
        };

        img.src = this.asset.url;
      }
    }, {
      key: "loadAudio",
      value: function loadAudio() {
        var _this2 = this;

        var sound = new Howl({
          src: this.asset.url
        });
        sound.on("end", function () {
          vnjs.emit("loader.audio-onend");
        });
        sound.on("load", function () {
          vnjs.store[_this2.asset.name] = sound;
          vnjs.emit("load", _this2.asset, _this2.assets.length, _this2.index);

          _this2.next();
        });
        sound.on("loaderror", function () {
          console.error('Audio not found', _this2.asset);

          _this2.next();
        });
      }
    }]);

    return Loader;
  }();

  var loader = new Loader();

  var $tpl$h = $(tpl$d);
  function assetsLoader () {
    $("#screen").append($tpl$h);
  }
  /**
   * Получили vn.json
   */

  vnjs.on("vnjson.mount", concatAssets);

  function concatAssets() {
    for (var _i = 0, _Object$entries = Object.entries(vnjs.tree); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2);
          _Object$entries$_i[0];
          var body = _Object$entries$_i[1];

      vnjs.state.assets = vnjs.state.assets.concat(body.assets);
    }
    /**
     * Загрузка ресурсов происходит только тогда, когда есть ресурсы
     */


    if (vnjs.state.assets.length > 0) {
      loader.start(vnjs.state.assets);
    } else {
      /**
       * Если ресурсов нет, то эмулируем событыия, будто ресурсы есть
       * [ postlaod ] - Является важным событием, так как первый прыжок совершается
       * после этого события. Так же для коректной работы некоторых плагинов.
       * Которым требуются загруженные ресурсы.
       */
      setTimeout(function () {
        vnjs.emit("preload");
        vnjs.emit("load");
        vnjs.emit("postload");
      }, 0);
    }
  }
  /**
   * Отображаем прелоэдер
   */

  vnjs.on("preload", function () {
    return $tpl$h.css("display", "flex");
  });
  var loadProgress = $tpl$h.find('.vnjson-loader__progress--load');
  vnjs.on("load", function (asset, len, i) {
    var width = i / (len - 1) * 100;
    var roundWidth = Math.ceil(width);
    loadProgress.css({
      width: "".concat(roundWidth, "%")
    });
    loadProgress.text("".concat(roundWidth, "%"));
  });
  vnjs.on("postload", function () {
    return $tpl$h.fadeOut(300);
  });

  function screen () {
    vnjs.store.screen = $("#screen");
  }

  function fontFamily () {}
  /**
   * font setup
   */

  vnjs.on("preload", function () {
    var fontName = vnjs["package"]["font-family"];
    fontLoad(fontName, '#screen');
  });

  function fontLoad(fontName, selector) {
    var fontAsset = vnjs.state.assets.find(function (asset) {
      return asset.name === fontName;
    });
    /**
     * Если шрифт не найден в папке /asset
     * То это может означать, что это системный шрифт
     */

    if (!fontAsset) {
      document.querySelector(selector).style.fontFamily = "\"".concat(fontName, "\", Arial");
      return;
    }
    /**
     * Загружаю шрифт
     */


    var junction_font = new FontFace(fontAsset.name, "url(".concat(fontAsset.url, ")"));
    junction_font.load().then(function (loaded_face) {
      document.fonts.add(loaded_face);
      document.querySelector(selector).style.fontFamily = "\"".concat(fontAsset.name, "\", Arial");
    })["catch"](function (error) {
      return console.error(error);
    });
  }

  vnjs.plugins['font-load'] = fontLoad;

  var css$v = ".dialog-box {\n  z-index: 1000;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  line-height: 32px;\n  font-size: 22px;\n  height: 200px;\n  cursor: pointer;\n  display: block;\n  padding-top: 10px;\n  padding-left: 10px;\n  word-spacing: 10px;\n  display: none;\n  top: unset;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n\n.dialog-box__name {\n  color: wheat;\n  width: 100%;\n  font-weight: bold;\n  padding-left: 10px;\n  padding-bottom: 10px;\n}\n\n.dialog-box__reply {\n  color: wheat;\n  padding-left: 10px;\n  width: 100%; \n  /*\n  display: flex;\n  flex-wrap: wrap;\n  */\n}\n.dialog-box__reply-append{\n  padding-left: 8px;\n}\n.dialog-box__reply-end-point{\n  display: inline-block;\n}\n.dialog-box__reply-end-point::before{\n  content: '';\n  position: absolute;\n  left: 10px;\n  width: 7px;\n  height: 7px;\n  background-color: silver;\n  opacity: 0.7;\n  animation-duration: 0.7s;\n  animation-name: end-point;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n@keyframes end-point {\n  from {\n    top: -10px;\n    opacity: 0.1;\n  }\n  to {\n    top: -20px;\n    opacity: 0.7;\n  }\n}\n\n.dialog-box__container{\n  display: flex; \n  height: 100%; \n}\n.dialog-box__avatar{\n  margin-top: 15px;\n  min-width: 150px;\n  width: 150px;\n  height: 150px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  display: none;\n}\n.dialog-box__avatar--show{\n  display: block;\n}\n\n\n.dialog-box__reply-wrapper{\n  position: relative;\n  max-width: 99%;\n  min-width: 75%;\n}\n";
  n(css$v,{});

  var tpl$c = "<div class=\"dialog-box component\">\n  <div class=\"dialog-box__container\">\n        <div class=\"dialog-box__avatar\"></div>\n        <div class=\"dialog-box__reply-wrapper\">\n          <div class=\"dialog-box__name\"></div>\n          <div class=\"dialog-box__reply\"></div>\n        </div>\n  </div>\n</div>";

  var _reply = /*#__PURE__*/new WeakMap();

  var DialogBox = /*#__PURE__*/function () {
    function DialogBox(param) {
      _classCallCheck(this, DialogBox);

      _classPrivateFieldInitSpec(this, _reply, {
        writable: true,
        value: ""
      });

      _defineProperty(this, "replyStringTag", null);

      _defineProperty(this, "prevReplyStringTag", null);

      _defineProperty(this, "MODE", "classic");

      /*Tags*/
      this.dialogBoxTag = document.querySelector(param.dialogBoxSelector);
      this.characterNameTag = document.querySelector(param.characterNameOutputSelector);
      this.replyTag = document.querySelector(param.replyOutputSelector);
      this.characterAvatarTag = document.querySelector(param.characterAvatarSelector);
      this.replyWrapperTag = document.querySelector(param.replyWrapperSelector);
      this.replyContaiterTag = document.querySelector(param.replyContaiterSelector);
      /**/

      this.classNameEndPoint = param.classNameEndPoint;
      this.classNameLetter = param.classNameLetter;
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
      key: "show",
      value: function show() {
        /**
         * Прозрачость убирает изображение, что бы его восстановить
         * необходимо его задать заново
         */
        this.setImage();
        this.dialogBoxTag.style.display = "block";
      }
    }, {
      key: "hide",
      value: function hide() {
        this.dialogBoxTag.style.display = "none";
      }
    }, {
      key: "setMode",
      value: function setMode(MODE) {
        this.MODE = MODE;

        if (this.MODE === "mode-classic") {
          this.dialogBoxTag.style.height = 200 + "px";
          this.replyContaiterTag.style["padding-right"] = 0 + "px";
        }

        if (this.MODE === "mode-fullscreen") {
          this.dialogBoxTag.style.height = vnjs.config.height + "px";
          this.replyContaiterTag.style["padding-right"] = 10 + "px";
        }

        this.setImage();
        vnjs.emit("dialog-box.mode", this.MODE);
      }
    }, {
      key: "setImage",
      value: function setImage() {
        var url = vnjs.getAssetByName(vnjs["package"]["dialog-box"][this.MODE]).url;
        this.dialogBoxTag.style["background-image"] = "url(".concat(url, ")");
      }
    }, {
      key: "transparent",
      value: function transparent() {
        this.dialogBoxTag.style["background-image"] = "unset";
      }
    }, {
      key: "update",
      value: function update() {
        this.print(this.character, _classPrivateFieldGet(this, _reply));
      }
    }, {
      key: "print",
      value: function print(character) {
        var reply = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var append = arguments.length > 2 ? arguments[2] : undefined;

        if (append) {
          this.forcePrintPrevReply();
        }

        vnjs.emit("dialog-box.print");
        this.reset();
        this.character = character;

        _classPrivateFieldSet(this, _reply, reply); //проверяем сущесвуют ли внутри реплики ссылки на персонажей


        _classPrivateFieldSet(this, _reply, this.replaceCharacterLink(_classPrivateFieldGet(this, _reply)));

        this.reply = this.replaceDataTemplate(_classPrivateFieldGet(this, _reply)); //вырезаем пустые теги
        //this.reply = this.reply.replaceAll(/<.{0,}><\/.{0,}>/gi, '')
        // Если скорость вывода символов равна нулю, то строка не разбивается на символы

        if (this.delay > 0) {
          this.replyOutputBySingleLetter(); // выводим готовый реузльтат

          this.outputToHTML(append); // Запускаем посимвольное изменение прозрачности

          this.startOutputReplyByLetter();
        } else {
          this.outputToHTML(append);
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
        this.reply = this.reply.replaceAll("<", " <").split(""); // Убираем лишние пробелы.
        // Из за того, что  встречается несколько пробелов вывод символов идёт рвано
        // Так как затрачивается время на отрисовку пробелов завернутых в <span>
        // А визуально их не видно. Так как браузер обычные пробелы съедает

        this.reply = this.reply.join("").replaceAll(/ {2,}/gi, " ")
        /*убираем пробелы больше одного подряд*/
        .replaceAll(' </span>', '</span>')
        /*убираем проел в конце имени*/
        .split(""); // пробигаемся по массиву символов методом map
        // И соеденяем массив полученных символов завёрнутых в <span> в одну реплику

        this.reply = this.reply.map(this.parse.bind(this)).join("");
      }
    }, {
      key: "outputToHTML",
      value: function outputToHTML(append) {
        /**
         * Определяем, есть ли у текущего персонажа аватар
         * Если есть, то отображаем его
         */
        if (this.character.avatar) {
          this.characterAvatarTag.style.backgroundImage = "url('".concat(vnjs.getAssetByName(this.character.avatar).url, "')");
          this.characterAvatarTag.classList.add("dialog-box__avatar--show");
          this.replyWrapperTag.style.width = "84.5%";
        } else {
          this.replyWrapperTag.style.width = "99%";
          this.characterAvatarTag.classList.remove("dialog-box__avatar--show");
        } // output character name


        this.characterNameTag.style.color = this.character.nameColor;
        this.characterNameTag.innerHTML = this.character.name; // output reply

        this.replyTag.style.color = this.character.replyColor;
        /**
         * append - флаг указывающий на то, должена ли реплика
         * выводиться с начала или добавиться к существующей фразе
         */

        this.replyStringTag = document.createElement("span");
        this.replyStringTag.classList.add("dialog-box__reply-str");
        this.replyStringTag.innerHTML = this.reply;
        this.prevReplyStringTag = this.replyStringTag;

        if (append) {
          this.replyStringTag.classList.add("dialog-box__reply-append");
          this.replyTag.appendChild(this.replyStringTag); //.innerHTML += this.reply;
        } else {
          this.replyTag.innerHTML = "";
          this.replyTag.appendChild(this.replyStringTag); //innerHTML = this.reply;
        }
      }
      /**
       * Заменяем ссылку на персонажа его именем
       */

    }, {
      key: "replaceCharacterLink",
      value: function replaceCharacterLink(reply) {
        var _newReply = reply; // проверяем есть ли ссылка на персонажа в реплике

        var characterAliaces = _newReply.match(/@\w+|@\$?[^$]\w+|@\$/gi);

        if (characterAliaces) {
          var len = characterAliaces.length;

          for (var i = 0; i < len; i++) {
            var id = characterAliaces[i]; // получаем id персонажа

            var cid = id.replace("@", "").trim(); // получаем персонажа по id

            var character = vnjs.getCharacterById(cid);

            if (character) {
              // заменяем ссылку на персонажа именем персонажа
              _newReply = _newReply.replace(id, character.name);
            }
          }
        }

        return _newReply.trim();
      }
      /**
       * {{data}} Подставляем данные в реплику из this.state.data
       */

    }, {
      key: "replaceDataTemplate",
      value: function replaceDataTemplate(reply) {
        var _newReply = reply;
        var variables = reply.match(/{{.+?}}/g);
        if (!variables) return _newReply;
        variables.forEach(function (varItem) {
          var dataKey = varItem.replaceAll('{{', '').replaceAll('}}', '').trim();
          _newReply = _newReply.replaceAll(varItem, vnjs.state.data[dataKey] || '');
        });
        return _newReply;
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
        // this.letterExlude = false
        if (letter === "<") {
          this.letterInclude = false;
        } else if (letter === ">") {
          this.letterExlude = true;
        } else {
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
      key: "startOutputReplyByLetter",
      value: function startOutputReplyByLetter() {
        var _this = this;

        this.deleteEndPoint(); // получаем все теги в которые обёрныты отдельные символы

        var letters = this.replyStringTag.querySelectorAll("." + this.classNameLetter);
        var len = letters.length; // отображаем каждый символ по отдельности

        this.interval = setInterval(function () {
          if (_this.index >= len) {
            _this.onEndOutputReply();
          }

          if (letters.length > 0) {
            vnjs.emit("dialog-box:letter", letters[_this.index].innerHTML);
            letters[_this.index].style.opacity = 1;
            _this.index++;
          }
        }, this.delay);
      }
    }, {
      key: "onEndOutputReply",
      value: function onEndOutputReply() {
        if (this.endPoint) {
          this.addEndPoint();
        }

        this.reset();
        vnjs.emit("dialog-box:endOutputReply");
      }
    }, {
      key: "addEndPoint",
      value: function addEndPoint() {
        this.replyTag.innerHTML += "<span class=\"".concat(this.classNameEndPoint, "\"></span>");
      }
    }, {
      key: "deleteEndPoint",
      value: function deleteEndPoint() {
        /**
         * При посимвольном выводе текста и использовании плагина [ + ]
         * метод .remove() пытается удалить не существующий тег и вываливается ошибка
         */
        try {
          this.replyTag.querySelector("." + this.classNameEndPoint).remove();
        } catch (err) {}
      }
    }, {
      key: "clear",
      value: function clear() {
        this.characterNameTag.innerHTML = "";
        this.replyTag.innerHTML = "";
        this.characterAvatarTag.style.backgroundImage = "unset";
      }
    }, {
      key: "disabled",
      value: function disabled(flag) {
        if (flag) {
          this.dialogBoxTag.style["pointer-events"] = "none";
        } else {
          this.dialogBoxTag.style["pointer-events"] = "all";
        }
      }
    }, {
      key: "reset",
      value: function reset() {
        clearInterval(this.interval);
        this.index = 0;
        this.reply = "";

        _classPrivateFieldSet(this, _reply, "");
      }
      /**
       * Для работы плагина + необходимо отобразить предыдущий кусок реплики сразу
       * Когда реплика начинает выводиться посимвольно и пользователь решил кликнуть
       * А следующим плагином вызывается + , то предыдущая реплика прекатиться выводиться
       */

    }, {
      key: "forcePrintPrevReply",
      value: function forcePrintPrevReply() {
        var letters = null;

        if (this.prevReplyStringTag) {
          letters = this.prevReplyStringTag.querySelectorAll("." + this.classNameLetter);
          letters.forEach(function ($letter) {
            $letter.style.opacity = 1;
          });
        }
      }
    }]);

    return DialogBox;
  }();

  /**
   * $root/package.yaml 
   * ERROR snippet
   */
  var errorSnippet = "# \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0432 $root/package.yaml\n\ndialog-box:\n  #delay: 60\n  #alpha: 0.3\n  #endPoint: true\n  mode-classic: dialog-box # \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 1024 x 200\n  mode-fullscreen: dialog-box-full # \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 1024 x 768";

  var $tpl$g = $(tpl$c);
  /**
   * DialogBox
   */

  /**
   * setup
   */

  var dBox = null;
  function dialogBox () {
    vnjs.store.screen.append($tpl$g);
    dBox = new DialogBox({
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
      classNameEndPoint: "dialog-box__reply-end-point"
    }); // при клике по диалоговому окну, продвигаемся дальше по yaml скрипту

    $tpl$g.find(".dialog-box__reply-wrapper").on("mousedown", function (e) {
      vnjs.emit("dialog-box.click");
      vnjs.next();
    });
    vnjs.plugins["dialog-box"] = dBox;
    /**
     * DELAY
     */

    vnjs.on("postload", onPostload);
    /**
     * SHOW HIDE DIALOG-BOX
     */

    vnjs.on("dialog-box", handler$4);
  }
  /**
   * @ character native event
   */

  vnjs.on("vnjson.character", function (_character, args, append) {
    var character = _objectSpread2({}, _character);

    if (_typeof(args) === "object") {
      if (args.nameColor) character.nameColor = args.nameColor;
      if (args.replyColor) character.replyColor = args.replyColor;
      if (args.avatar) character.avatar = args.avatar;
      dBox.print(character, String(args.reply), append);
    } else {
      dBox.print(character, String(args), append);
    }
  });
  /**
   * append reply
   */

  /*
  vnjs.on("+", (reply) => {
      let character = vnjs.state.character;
      if(!character) {
          vnjs.state.character = vnjs.tree.$root.characters[0]
      }

      dBox.print(character, String(reply), true);
  });*/

  /**
   * handler
   */

  function handler$4(args) {
    var key = null;
    key = String(args);

    if (_typeof(args) === "object") {
      key = "object";
    }

    var controller = {
      object: function object() {
        for (var _key in args) {
          dBox[_key] = args[_key];
        }

        dBox.show();
      },
      "true": function _true() {
        dBox.disabled(false);
        dBox.show();
      },
      "false": function _false() {
        dBox.hide();
      },
      clear: function clear() {
        dBox.disabled(false);
        dBox.clear();
      },
      disabled: function disabled() {
        dBox.disabled(true);
      },
      transparent: function transparent() {
        dBox.transparent();
      },
      classic: function classic() {
        dBox.disabled(false);
        dBox.setMode("mode-classic");
        dBox.show();
      },
      fullscreen: function fullscreen() {
        dBox.disabled(false);
        dBox.setMode("mode-fullscreen");
        dBox.show();
      }
    };
    controller[key]();
  }

  function onPostload() {
    var _vnjs$package;

    var conf = (_vnjs$package = vnjs["package"]) === null || _vnjs$package === void 0 ? void 0 : _vnjs$package["dialog-box"];

    if (conf) {
      for (var key in conf) {
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
            vnjs.plugins['font-load'](conf["font-family"], '.dialog-box');
            break;

          case "font-size":
            $tpl$g.css("font-size", conf["font-size"]);
            break;

          case "line-height":
            $tpl$g.css("line-height", conf["line-height"]);
            break;

          default:
            vnjs.emit("error", {
              ru: "\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 <font color=\"deepskyblue\">".concat(key, "</font>"),
              en: "Invalid argsetr <font color=\"deepskyblue\">".concat(key, "</font>")
            }
            /*, jsyaml.dump(conf) */
            );
        }
      }
    } else {
      vnjs.emit("vnjson.error", errorSnippet);
    }
  }

  var css$u = ".vnjson__hands {\n    position: absolute;\n    opacity: 0.8;\n    top: unset;\n    right: 0;\n    bottom: 10px;\n    display: none; \n    height: 185px;\n  }\n.vnjson__hands .vnjson__hand {\n    width: 95px;\n    height: 95px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGZmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTExLTA1VDEyOjM5OjM0KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTExLTA1VDEyOjM5OjM0KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMS0wNVQxMjozOTozNCswMzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0ZDZhODRkYi1kYWE5LTE3NDYtOWYxZS1iMjE4ODRiZDRmNTkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphMmY2NzgyMy03MTY2LTRhNGYtOGMyMC04N2FlNzQ5YzJmZTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MmI1MTYxMC1kMjQ0LTkzNGYtYjBmNS1jMjk1ZjJlNzY5OTQiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MmI1MTYxMC1kMjQ0LTkzNGYtYjBmNS1jMjk1ZjJlNzY5OTQiIHN0RXZ0OndoZW49IjIwMjEtMTEtMDVUMTI6Mzk6MzQrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGQ2YTg0ZGItZGFhOS0xNzQ2LTlmMWUtYjIxODg0YmQ0ZjU5IiBzdEV2dDp3aGVuPSIyMDIxLTExLTA1VDEyOjM5OjM0KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZWIwNzk3Mi1hMTdlLTA0NGYtYWIxYi04MDExN2JmYWYzODM8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6BgqWgAAAF1klEQVR4nOVb247TMBA9YzvOZcWyVYWQeOEBxHfzA7zwzCfwD0gIgQQS0E1308Q3Hrr2Ote2CFiSHqlSktpJ5oxnMh57yDmHcwZ76Bd4aJw9ASI+efPmjcvzHF++fMHV1RX8sZQSQtw35Zxju91is9mAcw4iAgAYY7BarXBxcQHnHL5//46qqsA5B2OHuT7VHKfaExGUUrDWIs9zvH//HsYYEBFev35NgwTc3t7CWou6rlvHl5eXLQKEEFBKIUmSlnDGGGRZhjzP4ZxDmqYwxoBzDs75bwvknAMR9f4P5wQQqPVfrJQkSaC1hlIqXB8kgDEGxhiIqHX89evXlgCcc1RVhZubmyC8cw7GGBhjUJYlnHMoyxK73e4o4aeI8MITUUsAay2IAGcBh+E+ngTfd5IArz0pJd6+fRu03u1krYWUEmmawjmHpmnQNE1o5x+cJEl4aF3X0FqDiFqEGGPCsb/uyfTP5pzDOQchBGQqQz+jNRhjaGqFRjUtxRljsF6vkec5rLXh3pMExMM+TVMwxiCEQJqmrU7OOUgpkSQJAKBpGtR13WPYmwcRYbfbQd+9cOwPrLXhuDua/DXGWCAgzdJAgFZqkgD/foyx000AAKSU2G63+PjxY48AIUQYIUqpoN3u/Twp3iHFgk4REJuBJ4BzDpGI0M8aAyIGrTS00YEAf48XL15gvV4HwQ+agJQyaJaIUBQFPnz4gHfv3mGOWK1WeP78OTabTU+5HqMjwDc81YH9TyAiaK3vnCUNfopbBNzc3EBrjd1uB2stjDEnf5v/Jwghwqg2xqBpmh4JLQJ+/PgBKSWur6+D04htdG5IkgRZlu0d5p1iuyO6Nya8xofsZW7wznRKia0R8OjRI6RpCqVUGP5zNoEYQggkSTJtAo8fP0ZRFKiqahEExM58jIBRE3DOwdl5ExDDK7MrT2sEbDabMBHK8gwyu4/25o6jCNhut6jrGlVVIU1TyLQ9DZ4zxghomQDnHEKIEHpiGaN/Ei0C9gwBzlk0dY26rqGUeqh3+6PwUe5BJwjsidBaQysFY/Q/ecG/jbHJ0GieaqzD0tAjYC8vdX7LwEkj4Fxw9gQs4yN/BBhjrRR+uP5A7/PPcfJX4FzQMgHPjk9FH7ui878i1vpYTnC+0v0hLJ6AQ8Fc7yvgG1trYa2ddT4gyzIURRGSO03THM4JLgmxLxvDogkwxkApBaXU6EhedCB0fX2Nb9++oSzLsDw2mRCJMZZBmROOkWE0KbqEOMCHv/GyexctE/DLYcD9XoE5J0WllOErQESDCyQHTWDuONkEloqj9gcc02FecOG3nw9wMHZGOcFjZBgcAT4r7Le+zBXeqd/vc9in/WO0CPDOwm+Umvu6QKxE54bnNYv2AXF+wzkbtsrEWHQo7CdDRAQpUwy5vIUTwMC5ABGDlBk474u7+Djg3u5d53yPnhNcSgR4Dwei/WbOeDuvxyABS4RSCnVdH7c6vET4zPBZZYXjT/kZL4xMr3CPEuAzwnOPBGObHwrqek7QR0tXV1cQQuDVq1d49uzZXcUGcGi/wH6YhbPJh8fPJSKkaRoSF3ESo7sVn4hCkYZzDhcXFyiKIrT1iY+nT5+iLEsAe4Wqu/qCUQL8yzDGQpHEer3Gy5cvAwFtQfpC/S4BjDEURdETeqjQgTGGqqpwe3sL5xxWqxUuLy+DkL59WZao6xpCiOO2yeV5DiFEYJExBqVUqAH62wTEWvdC+NR2l4DdbhcIEEK0+vn21tqw6y1JEhhjpkfAkydPQqmc1vpuFuXw8+fPAUH3oaYXYKiiq7XlLkK8DT/O03lNMcYg5b42SGsdynHie8cJ28+fP+PTp09B6O7zfNWY7ztKQFwz5Bv7ffbdgqi4AKH7UL/VTko5SEBsp3HRlM/beyJ826qqegT4oi0AYeo+Nspih350xUis1aHvZ3yt/x/gHBvs1yVvqDYoDliGAphuHWE86xuKZON79d51qaHvsTiDQGgaZ0/ALy4XCMLKcyfBAAAAAElFTkSuQmCC);\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    z-index: 100;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n.vnjson__hands .vnjson__hand-left {\n    width: 60px;\n    height: 60px;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat; \n}\n.vnjson__hands .vnjson__hand-right {\n    width: 60px;\n    height: 60px;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat; \n}\n\n";
  n(css$u,{});

  var tpl$b = "<div class=\"vnjson__hands component\">\n    <div class=\"vnjson__hand\">\n        <div class=\"vnjson__hand-left\"></div>\n    </div>\n    <div class=\"vnjson__hand\">\n        <div class=\"vnjson__hand-right\"></div>\n    </div>\n</div>";

  var $tpl$f = $(tpl$b);
  var show$1 = false;
  function hands () {
    vnjs.store.screen.append($tpl$f);
    vnjs.on("hands", function (args) {
      return handler$3(args);
    });
    vnjs.on("hand-left", function (args) {
      return leftHandler(args);
    });
    vnjs.on("hand-right", function (args) {
      return rightHandler(args);
    });
    /**
     * Когда  dialog-box скрыт, то и плагин hands нужно скрыть
     */

    vnjs.on("dialog-box.false", function () {
      return vnjs.emit("hands", false);
    });
    /**
     * При выводе реплик проверяем, есть ли у персонажа свойство avatar
     * Если есть, то ширину блока с репликой необходимо уменьшить
     * Так же, стили необходимо восстановить, если встретился персонаж без аватара
     */

    vnjs.on("vnjson.character", function (character) {
      setTimeout(function () {
        characterHandler(vnjs.state.character);
      }, 50);
    });
  }

  function handler$3(args) {
    if (args) {
      show$1 = true;
      $tpl$f.show();
    } else {
      show$1 = false;
      $tpl$f.hide();
    }
  }

  function leftHandler(args) {
    if (args) {
      show$1 = true;
      $tpl$f.show();
      $tpl$f.find(".vnjson__hand-left").css("background-image", "url('".concat(vnjs.getAssetByName(args).url, "')"));
    } else {
      $tpl$f.find(".vnjson__hand-left").css("background-image", "unset");
    }
  }

  function rightHandler(args) {
    if (args) {
      show$1 = true;
      $tpl$f.show();
      $tpl$f.find(".vnjson__hand-right").css("background-image", "url('".concat(vnjs.getAssetByName(args).url, "')"));
    } else {
      $tpl$f.find(".vnjson__hand-right").css("background-image", "unset");
    }
  }

  function characterHandler(character) {
    var replyWrapper = $(".dialog-box__reply-wrapper"); // если нет ни аватара ни рук

    if (!character.avatar && !show$1) {
      replyWrapper.css("width", "99%");
    } // если есть аватар, но руки не отображаются


    if (character.avatar && !show$1) {
      replyWrapper.css("width", "84.5%");
    } // если аватар есть и руки отображены


    if (character.avatar && show$1) {
      replyWrapper.css("width", "76%");
    } // Если аватара нет, но показывает руки


    if (!character.avatar && show$1) {
      replyWrapper.css("width", "90%");
    }
  }

  var AudioControl = /*#__PURE__*/function () {
    function AudioControl() {
      _classCallCheck(this, AudioControl);

      _defineProperty(this, "timeOutId", null);

      _defineProperty(this, "soundArgs", null);

      // не помню зачем это, но вроде раньше от чего то помогало
      this.stopAll();
    }

    _createClass(AudioControl, [{
      key: "isAudioExist",
      value: function isAudioExist(name) {
        if (!vnjs.store[name] && !vnjs.store.sprites[name]) {
          vnjs.emit("error", "assetNotFound", name);
          return false;
        }

        return true;
      }
    }, {
      key: "handler",
      value: function handler(args) {
        /**
         * BOOLEAN
         */
        if (typeof args === "boolean") {
          this.stopAll();
          clearTimeout(this.timeOutId);
        } else if (typeof args === "string") {
          /**
           * STRING
           */
          if (!this.isAudioExist(args)) return;
          var soundName = vnjs.store.sprites[args];

          if (soundName) {
            vnjs.store[soundName].stop();
            vnjs.store[soundName].rate(1);
            vnjs.store[soundName].loop(false);
            vnjs.store[soundName].volume(1);
            vnjs.store[soundName].play(args);
          } else {
            vnjs.store[args].stop();
            vnjs.store[args].rate(1);
            vnjs.store[args].loop(false);
            vnjs.store[args].volume(1);
            vnjs.store[args].play();
          }
        } else if (_typeof(args) === "object") {
          /**
           * OBJECT
           */
          if (!this.isAudioExist(args.name)) return;
          var _soundName = vnjs.store.sprites[args.name];
          var sound = null;

          if (_soundName) {
            sound = vnjs.store[_soundName];
          } else {
            sound = vnjs.store[args.name];
          }

          sound.stop(); //sound.off('play')

          sound.rate(args.speed || 1);

          if (args.loop === true) {
            sound.loop(true);
          }

          if (!args.loop) {
            sound.loop(false);
          }

          sound.volume(args.volume || 1);
          /**
           * fadeIn
           */

          if (args.fadeIn) {
            sound.fade(0, 1, args.fadeIn);
          }
          /*sound.on('play', () => {
          if(args.fadeOut&&soundName){
              const delay =  ((sound.duration() - sound.seek())  * 1000 ) - args.fadeOut
            this.timeOutId = setTimeout(() => {
                    sound.fade(1, 0, args.fadeOut);
            }, delay)
             }
            })*/


          if (_soundName) {
            sound[args.action](args.name);
          } else {
            sound[args.action]();
          }

          this.soundArgs = args;
        }
      }
    }, {
      key: "stopAll",
      value: function stopAll() {
        Object.values(vnjs.store).map(function (asset) {
          if (asset.hasOwnProperty("_muted")) {
            asset.stop();
          }
        });
      }
      /**
       *
       * @param {String} time [ 2:53 ]
       */

    }, {
      key: "formatTime",
      value: function formatTime(time) {
        var t = String(time).split(":");

        if (!String(time).includes(":")) {
          var errorBody = {
            en: "Invalid time <font color=\"deepskyblue\">".concat(time, "</font>"),
            ru: "\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 <font color=\"deepskyblue\">".concat(time, "</font>")
          };
          vnjs.emit("error", errorBody);
          return 0;
        }

        var min = 0;
        var sec = 0;

        if (t.length === 2) {
          min = Number(t[0]);
          sec = Number(t[1]);
        } else {
          var _errorBody = {
            en: "Invalid time <font color=\"deepskyblue\">".concat(time, "</font>"),
            ru: "\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 <font color=\"deepskyblue\">".concat(time, "</font>")
          };
          vnjs.emit("error", _errorBody);
          return 0;
        }

        return (0 * 60 + min * 60 + sec) * 1000;
      }
    }, {
      key: "regSprites",
      value: function regSprites(args) {
        for (var spriteID in args.sprite) {
          var startTime = this.formatTime(args.sprite[spriteID][0]);
          var endTime = this.formatTime(args.sprite[spriteID][1]);
          var timeRange = [startTime, endTime];
          vnjs.store.sprites[spriteID] = args.name;
          vnjs.store[args.name]._sprite[spriteID] = timeRange;
          vnjs.store[args.name].volume(args.volume || 1);
        }
      }
    }]);

    return AudioControl;
  }();

  /**
   * setup
   */

  function audio () {
    vnjs.store.sprites = {};
  }
  var audioControl = new AudioControl();
  var repeat = 0;
  vnjs.on("audio", function (args) {
    repeat = 0;
    audioControl.handler(args);
  });
  vnjs.on("audio-sprite", function (args) {
    return audioControl.regSprites(args);
  });
  vnjs.on("loader.audio-onend", function () {
    var _audioControl$soundAr;

    if (!audioControl.soundArgs) {
      return;
    }

    if (((_audioControl$soundAr = audioControl.soundArgs) === null || _audioControl$soundAr === void 0 ? void 0 : _audioControl$soundAr.loop) === true) {
      var _audioControl$soundAr2;

      if ((_audioControl$soundAr2 = audioControl.soundArgs) !== null && _audioControl$soundAr2 !== void 0 && _audioControl$soundAr2.onLoop) {
        vnjs.exec(audioControl.soundArgs.onLoop);
      }
    } else if (typeof audioControl.soundArgs.loop === "number") {
      repeater();
    } else {
      if (audioControl.soundArgs.onEnd) {
        vnjs.exec(audioControl.soundArgs.onEnd);
      }
    }
  });

  function repeater() {
    var _audioControl$soundAr3;

    if (repeat < audioControl.soundArgs.loop - 1) {
      audioControl.handler(audioControl.soundArgs);
      repeat++;
    }

    if ((_audioControl$soundAr3 = audioControl.soundArgs) !== null && _audioControl$soundAr3 !== void 0 && _audioControl$soundAr3.onLoop) {
      vnjs.exec(audioControl.soundArgs.onLoop);
    }

    if (repeat === audioControl.soundArgs.loop - 1) {
      setTimeout(function () {
        vnjs.exec(audioControl.soundArgs.onEnd);
      }, 300);
    }
  }

  var Menu$1 = /*#__PURE__*/function () {
    function Menu($view, vnjs, config) {
      _classCallCheck(this, Menu);

      _defineProperty(this, "items", []);

      _defineProperty(this, "itemClickParam", null);

      _defineProperty(this, "audio", null);

      this.$view = $view;
      this.__vnjs = vnjs;
      this.itemQuetionClassName = config.itemQuetionClassName;
      this.itemClassName = config.itemClassName;
    }

    _createClass(Menu, [{
      key: "setData",
      value: function setData(param) {
        var _this = this;

        this.reset();
        this.items = param;
        this.items.forEach(function (menuItem) {
          var item = _this.prepareMenuItem(menuItem);

          _this.createMenuItem(item);
        });
      }
    }, {
      key: "show",
      value: function show() {
        this.$view.show();
      }
    }, {
      key: "hide",
      value: function hide() {
        this.$view.hide();
      }
    }, {
      key: "prepareMenuItem",
      value: function prepareMenuItem(menuItem) {
        var objData = {};

        for (var _key in menuItem) {
          var key = _key;
          /**
           * Определяем есть ли среди параметров меню ID персонажа
           * Если есть, то вопрос от имени персонажа встраиваем в меню
           */

          var character = this.__vnjs.getCharacterById(_key);

          if (character) {
            key = 'character';
          }

          var value = menuItem[_key];

          switch (key) {
            case 'disabled':
              objData.disabled = value;
              break;

            case 'character':
              objData.character = {
                character: character,
                value: value
              };
              break;

            case 'onClick':
              objData.onClick = value;
              break;

            case 'icon':
              objData.icon = value;
              break;

            case 'css':
              objData.css = value;
              break;

            /**
             * ROUTE
             */

            default:
              objData.route = {
                path: key,
                value: value
              };
          }
        }

        return objData;
      }
    }, {
      key: "getIconTpl",
      value: function getIconTpl(value) {
        var icon = this.__vnjs.getAssetByName(value).url;

        return "<img alt=\"\" class=\"menu-item__icon\" src=\"".concat(icon, "\"/>");
      }
    }, {
      key: "createMenuItem",
      value: function createMenuItem(item) {
        var tpl = null;

        if (item.character) {
          var _item$character = item.character,
              character = _item$character.character,
              value = _item$character.value;
          tpl = "<div class=\"".concat(this.itemQuetionClassName, "\">\n                        <span style='color:").concat(character.nameColor, "; padding-right: 20px;'>").concat(character.name, ":</span>\n                        <span style='color:").concat(character.replyColor, "; '>").concat(value, "</span>\n                   </div>");
        }

        if (item.route) {
          tpl = "<div data-label=\"".concat(item.route.path, "\" class=\"").concat(this.itemClassName, " ").concat(item.disabled ? 'disabled' : '', "\">\n                            ").concat(item.icon ? this.getIconTpl(item.icon) : '', "\n                            <span>").concat(item.route.value, "</span>\n                      </div>");
        }

        if (item.css) {
          this.$view.css(item.css);
        }

        if (item.onClick) {
          this.itemClickParam = item.onClick;
        }

        this.$view.append(tpl);
      }
    }, {
      key: "clickItemHundler",
      value: function clickItemHundler(label) {
        this.hide();

        if (label === 'next') {
          setTimeout(function () {
            vnjs.exec({
              next: true
            });
          }, 0);
        } else {
          if (this.itemClickParam) {
            vnjs.exec(this.itemClickParam);
          }

          setTimeout(function () {
            vnjs.exec({
              jump: label
            });
          }, 0);
        }

        if (this.audio) {
          this.audio.play();
        }
      }
    }, {
      key: "reset",
      value: function reset() {
        this.$view.empty();
        this.itemClickParam = false;
      }
    }]);

    return Menu;
  }();

  var css$t = ".vnjson__menu-menu {\n  width: 80%;\n  padding: 10px;\n  background: rgba(0,0,0,0.5);\n  flex-direction: column;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 200px;\n  display: none;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\n  overflow: auto;\n  max-height: 95%;\n  color: wheat;\n  border-radius: 4px;\n}\n  .vnjson__menu-menu .vnjson__menu-quetion {\n    background: rgba(70, 70, 70, 0.7);\n    width: 100%;\n    min-height: 40px;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    padding: 10px 20px;\n    transition: 0.1s;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-bottom: 10px;\n    border-radius: 4px;\n  }\n  .vnjson__menu-menu .vnjson__menu-item {\n    margin-bottom: 10px;\n    background: rgba(120, 120, 120, 0.7);\n    width: 100%;\n    min-height: 40px;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    transition: 0.1s;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; \n    border-radius: 4px;\n}\n    .vnjson__menu-menu .vnjson__menu-item span {\n      padding: 10px 20px;\n      display: flex;\n      flex: 1; }\n    .vnjson__menu-menu .vnjson__menu-item:hover {\n      cursor: pointer;\n      background: rgba(200, 100, 100, 0.8); }\n    .vnjson__menu-menu .vnjson__menu-item span {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n.vnjson__menu-menu .vnjson__menu-item:last-child{\n  margin-bottom: 0;\n}\n\n\n.vnjson__menu-menu .menu-item__icon{\n  width: 32px;\n  height: 32px;\n  margin-left: 15px;\n}\n.vnjson__menu-menu .menu-item__icon+span{\n  /*padding-left: 20px;*/\n}";
  n(css$t,{});

  var tpl$a = "<div class=\"vnjson__menu-menu component\"></div>";

  var $tpl$e = $(tpl$a);
  function menu () {
    var _this = this;

    var config = {
      itemQuetionClassName: 'vnjson__menu-quetion',
      itemClassName: 'vnjson__menu-item'
    };
    var menu = new Menu$1($tpl$e, this, config);
    /**
     * Навешиваем click на пункты меню
     */

    $tpl$e.on("click", ".vnjson__menu-item", function () {
      var label = $(this).data('label');
      menu.clickItemHundler(label);
    });
    vnjs.store.screen.append($tpl$e);
    /**
     * аудио
     */

    vnjs.on('postload', function () {
      var menuConf = _this["package"].menu;

      if (menuConf) {
        var audioUrl = vnjs.getAssetByName(menuConf.audio).url;
        menu.audio = new Howl({
          src: audioUrl,
          volume: menuConf.volume || 1
        });
      }
    });
    /**
     * Храним предыдущее значение меню. Это нужно для того,
     * если пользователь захочет скрыть меню menu: false 
     * А после снова отобразить, то же меню menu: true
     */

    var prevParam = null;
    /**
     * @event
     */

    vnjs.on('menu', function (param) {
      if (param === true) {
        menu.setData(prevParam);
        menu.show();
      } else if (param) {
        prevParam = param;
        menu.setData(param);
        menu.show();
      } else {
        menu.hide();
      }
    });
  }

  var Menu = /*#__PURE__*/function () {
    function Menu($view, vnjs, config) {
      _classCallCheck(this, Menu);

      _defineProperty(this, "items", []);

      _defineProperty(this, "itemClickParam", null);

      _defineProperty(this, "audio", null);

      this.$view = $view;
      this.__vnjs = vnjs;
      this.itemQuetionClassName = config.itemQuetionClassName;
      this.itemClassName = config.itemClassName;
    }

    _createClass(Menu, [{
      key: "setData",
      value: function setData(param) {
        var _this = this;

        this.reset();
        this.items = param;
        this.items.forEach(function (menuItem) {
          var item = _this.prepareMenuItem(menuItem);

          _this.createMenuItem(item);
        });
      }
    }, {
      key: "show",
      value: function show() {
        this.$view.show();
      }
    }, {
      key: "hide",
      value: function hide() {
        this.$view.hide();
      }
    }, {
      key: "prepareMenuItem",
      value: function prepareMenuItem(menuItem) {
        var objData = {};

        for (var _key in menuItem) {
          var key = _key;
          /**
           * Определяем есть ли среди параметров меню ID персонажа
           * Если есть, то вопрос от имени персонажа встраиваем в меню
           */

          var character = this.__vnjs.getCharacterById(_key);

          if (character) {
            key = 'character';
          }

          var value = menuItem[_key];

          switch (key) {
            case 'disabled':
              objData.disabled = value;
              break;

            case 'character':
              objData.character = {
                character: character,
                value: value
              };
              break;

            case 'onClick':
              objData.onClick = value;
              break;

            case 'icon':
              objData.icon = value;
              break;

            case 'info':
              objData.info = value;
              break;

            case 'css':
              objData.css = value;
              break;

            /**
             * ROUTE
             */

            default:
              objData.route = {
                path: key,
                value: value
              };
          }
        }

        return objData;
      }
    }, {
      key: "getIconTpl",
      value: function getIconTpl(value) {
        var icon = this.__vnjs.getAssetByName(value).url;

        return "<img alt=\"\" class=\"menu-item__icon\" src=\"".concat(icon, "\"/>");
      }
    }, {
      key: "createMenuItem",
      value: function createMenuItem(item) {
        var tpl = null;

        if (item.character) {
          var _item$character = item.character,
              character = _item$character.character,
              value = _item$character.value;
          tpl = "<div class=\"".concat(this.itemQuetionClassName, "\">\n                        <span style='color:").concat(character.nameColor, "; padding-right: 20px;'>").concat(character.name, ":</span>\n                        <span style='color:").concat(character.replyColor, "; '>").concat(value, "</span>\n                   </div>");
        }

        if (item.route) {
          tpl = "<div data-label=\"".concat(item.route.path, "\" class=\"").concat(this.itemClassName, " ").concat(item.disabled ? 'disabled' : '', "\">\n                            ").concat(item.icon ? this.getIconTpl(item.icon) : '', "\n                            <div class=\"main-menu__item-wrapper\">\n                                <span class=\"main-menu__item-text\">").concat(item.route.value, "</span>\n                                ").concat(item.info ? "<div class=\"main-menu__item-info\">".concat(item.info, "</div>") : '', "\n                            </div>\n                            \n                            \n                      </div>");
        }

        if (item.css) {
          this.$view.css(item.css);
        }

        if (item.onClick) {
          this.itemClickParam = item.onClick;
        }

        this.$view.append(tpl);
      }
    }, {
      key: "clickItemHundler",
      value: function clickItemHundler(label) {
        this.hide();

        if (label === 'next') {
          setTimeout(function () {
            vnjs.exec({
              next: true
            });
          }, 0);
        } else {
          if (this.itemClickParam) {
            vnjs.exec(this.itemClickParam);
          }

          setTimeout(function () {
            vnjs.exec({
              jump: label
            });
          }, 0);
        }

        if (this.audio) {
          this.audio.play();
        }
      }
    }, {
      key: "reset",
      value: function reset() {
        this.$view.empty();
        this.itemClickParam = false;
      }
    }]);

    return Menu;
  }();

  var css$s = ".main-menu {\n  width: 50%;\n  padding: 10px;\n  background-color: transparent;\n  left: 50%;\n  transform: translateX(-50%);\n  flex-direction: column;\n  display: none;\n  /*box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);*/\n  overflow: auto;\n  max-height: 95%;\n  top: 200px;\n  color: #34d1a2;\n  border-radius: 4px;\n}\n  .main-menu__item--quetion {\n    background: rgba(70, 70, 70, 0.7);\n    width: 100%;\n    min-height: 50px;\n    font-size: 22px;\n    display: flex;\n    align-items: center;\n    padding: 10px 20px;\n    color: white;\n    transition: 0.1s;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-bottom: 7px;\n    box-shadow: 0 0 8px rgba(0,0,0,0.5);\n    border-radius: 4px;\n  }\n  .main-menu__item {\n    padding: 10px;\n    margin-bottom: 15px;\n    background-color: #333;\n    width: 100%;\n    min-height: 50px;\n    font-size: 22px;\n    display: flex;\n    align-items: center;\n    transition: 0.1s;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    box-shadow: 0 0 8px rgba(0,0,0,0.7);\n    border-radius: 4px;\n\n  }\n\n.main-menu__item:hover {\n  cursor: pointer;\n  color: darkcyan;\n  background: rgba(0, 0, 0, 0.7); \n}\n\n.main-menu__item:last-child{\n  margin-bottom: 0;\n}\n\n.main-menu__item.disabled{\n  opacity: 0.6;\n}\n.main-menu__item-wrapper{\n  padding-left: 15px;\n}\n.main-menu__item-text{\n \n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.main-menu .menu-item__icon{\n  width: 80px;\n  height: 80px;\n}\n\n.main-menu__item-info{\n  font-size: 16px;\n  white-space: break-spaces;\n  padding-top: 10px;\n  line-height: 18px;\n  color: gray;\n}";
  n(css$s,{});

  var tpl$9 = "<div class=\"main-menu component\"></div>";

  var $tpl$d = $(tpl$9);
  function mainMenu () {
    var _this = this;

    var config = {
      itemQuetionClassName: 'main-menu__item--quetion',
      itemClassName: 'main-menu__item'
    };
    var menu = new Menu($tpl$d, this, config);
    /**
     * Навешиваем click на пункты меню
     */

    $tpl$d.on("click", ".main-menu__item", function () {
      var label = $(this).data('label');
      menu.clickItemHundler(label);
    });
    vnjs.store.screen.append($tpl$d);
    /**
     * аудио
     */

    vnjs.on('postload', function () {
      var menuConf = _this["package"]['main-menu'];

      if (menuConf) {
        var audioUrl = vnjs.getAssetByName(menuConf.audio).url;
        menu.audio = new Howl({
          src: audioUrl,
          volume: menuConf.volume || 1
        });
      }
    });
    /**
     * Храним предыдущее значение меню. Это нужно для того,
     * если пользователь захочет скрыть меню menu: false 
     * А после снова отобразить, то же меню menu: true
     */

    var prevParam = null;
    /**
     * @event
     */

    vnjs.on('main-menu', function (param) {
      if (param === true) {
        menu.setData(prevParam);
        menu.show();
      } else if (param) {
        prevParam = param;
        menu.setData(param);
        menu.show();
      } else {
        menu.hide();
      }
    });
  }

  var css$r = ".vnjson__term-board {\n  width: 808px;\n  height: 480px;\n  padding: 25px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAygAAAHgCAYAAABO0EkBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHM2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTE0VDE2OjI1OjM3KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMy0yMVQyMToyNToxMSswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMy0yMVQyMToyNToxMSswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YjU3NzllYTEtMDk0Zi1hNTQxLWJiZmYtZTY3YTFkZWVjNzdjIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NmRlYTlhYzAtYWQ5Mi03ZjQzLTk2YWItMGUyZTFkODQ2NWViIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YTBkYTUwNjItZGM4NC0yMzRkLWExOWYtMDExMmMzOWM3N2FhIj4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjZkZWE5YWMwLWFkOTItN2Y0My05NmFiLTBlMmUxZDg0NjVlYjwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmEwZGE1MDYyLWRjODQtMjM0ZC1hMTlmLTAxMTJjMzljNzdhYSIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0xNFQxNjoyNTozNyswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphZjBkMjdiMy1jOGJkLTVlNGEtOWRiOC0yMzAyY2E2OTYxZmQiIHN0RXZ0OndoZW49IjIwMjEtMTAtMTRUMTc6NDA6MjMrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjU3NzllYTEtMDk0Zi1hNTQxLWJiZmYtZTY3YTFkZWVjNzdjIiBzdEV2dDp3aGVuPSIyMDIyLTAzLTIxVDIxOjI1OjExKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Hu0bEAAADtNJREFUeJzt3U+LZFcdx+Hfubeq/zmJcaIGoiBRslDI23DhxpVkJQgufQO+B/cuBHHjSiQq0a2CO4ngwj+IYqJBBTUjk5me7q6uvve4mKRN0lEwzq35duZ5VrdvVd1zelcfzrm32pc+/9n+za9+uX75h1erquqDN47q9eOTAgAA2KWvfO2bNbzz5MU0PYy5AAAAj7CXfvLDqqoa7t69U1VVHzjYr9ZaHZ9sHua8AACA97nee63G8fLv73//hcvj1XZ7USebTZ2en1fvvVq7/FhVG6qN693OFgAAeH+7OL/cufXWOKmqWt28ebM2m/Oa53558vxvv7887tvTqt7rLeUCAADwnh2sxnrl1km98trplddWh4cHNc/zv8/0+6Fy9pdfV1XVuH+jqk9VbbzyYQAAgP/Z/li3//56/e7l2/XUk4/X0fr+rfE3j/ZqNU1TtbesjrRxdXm8uvHk/QMrKAAAwIOyGmu9f1g3bmyrqupkO9dqM9X5NF99ildbH1we94s3bpgXJwAAwA5cCZTqvdq4qmHvqNpq/yFMCQAAeFRdDRQAAICHRKAAAAAxBAoAABBDoAAAADEECgAAEEOgAAAAMQQKAAAQQ6AAAAAxBAoAABBDoAAAADEECgAAEGO1xEV7r1qPrdbjUL36EkMAAAAPQatW22mu7dSrtQd//UUC5XBvqD/846Reee2kDtfjEkMAAAAPwel2qmc+fFSf+shRnW3nB379RQJlNbZ6/fSi/vjaaX3waFVH66FalbUUAAC4hlpr1XuvW3eO69bdTT2299H69NOPXZ9AeXOL12MHqxqHVn+6valeVQusAAEAAAvrvVdrrZ775DP17Hq/njrc1mZzXkt8w18kUN60v2p1vJ3rxd/+s6bea2ytmkwBAIBro1ev7Xaq9XqsLz7/hXru2U/Vq7/5Wd155Re1OrjxwMdbNFB6rxpa1Y298TJQAACA62U7VK1XY23OTuvO3bu13W5rGJZ5IPCigfJW4zDWyb3j2mw2i/0zAADAgzPPc+3v79f+4eHOxtxZoFRVTdO0aG0BAAAPzjzPtVrtNBl2GyittRqGQaAAAMA10XZ8m4ZSAAAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYqx2Odg8zzVNU/XedzksAADwHszzXPM873TMnQXK3Oc6PDys9XpdrbVdDQsAALxHvfdarVbV51417uY7/KKB0lqrufe6fXxSF73X3jhWa0OVBRQAALgGWm23U51tzmpvPdbc++KLDYsGyjTNtR7H+swnnq65eg1l5QQAAK6bi2mq1TjWehxrmpbd8rVooByfndXHnvpwff35z9U4DDXteP8aAADw/2t1fxPUNM11fLZZdKxFAqW1qu3U697mojYXvYbVQbVxqGHh2gIAABbQqlqv6sNcbX1YbVxVLfTgq0UC5fR8rk/cPKwnnnu6Dvb36vjll6q15uldAABwzbVhrHlzr9r6YJHrLxIoF1OvJ45W9dHH92uapjq9/dfqVe5AAQCAa673Xm1cV1utF1lFWXSL13a6uP/3+kCcAADA+8Dl9/qFdkf5JXkAACCGQAEAAGIIFAAAIIZAAQAAYggUAAAghkABAABiCBQAACCGQAEAAGIIFAAAIIZAAQAAYggUAABgZ9bjUAfrocahVe9XXxcoAADAztw521ZV1dl2qvFdakSgAAAAixtaq6qqjz9xcHnucG+88r7VO0/0zb3aa3ON++tq66sfAAAA+F+NrdXUe51s5//6viuB0vY/UJs+1E9/9ec6fPxDi00QAAB4lLSq6nXr3ra203y5ovJOVwKlquq7P/55VR1U3TpdcIIAAMCj5mA9Xt4g3+v+PSdHb2z1Wo/D1UB54Tvffte9YAAAAA/Cm0/vGlvVxfz2R3m9LVB+8IMX6j+stAAAADxQe2Ork+1cJ9upHtu/v0hyGSg/evF7tRrUCQAAsBvj0Gr9RoPc3UxV9UagfONb33p4swIAAB5J51Ovg/Xbf/mk9Xf7+UYAAICH4F/no41w/cIydwAAAABJRU5ErkJggg==);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: absolute;\n  top: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: none; }\n  .vnjson__term-board pre {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    margin: 0; }\n    .vnjson__term-board pre code {\n      padding: 25px;\n      font-size: 24px;\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      top: 0;\n      overflow-x: auto;\n       }\n      .vnjson__term-board pre code img {\n        height: 100%; }\n\n\n\n/* term theme */\n\n.vnjson__term-board pre code{\n  font-size: 18px;\n  line-height: 24px;\n}\n";
  n(css$r,{});

  var css$q = "pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#a9b7c6;background:#282b2e}.hljs-bullet,.hljs-literal,.hljs-number,.hljs-symbol{color:#6897bb}.hljs-deletion,.hljs-keyword,.hljs-selector-tag{color:#cc7832}.hljs-link,.hljs-template-variable,.hljs-variable{color:#629755}.hljs-comment,.hljs-quote{color:grey}.hljs-meta{color:#bbb529}.hljs-addition,.hljs-attribute,.hljs-string{color:#6a8759}.hljs-section,.hljs-title,.hljs-type{color:#ffc66d}.hljs-name,.hljs-selector-class,.hljs-selector-id{color:#e8bf6a}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}";
  n(css$q,{});

  var tpl$8 = "<div class=\"vnjson__term-board component\">\n    <pre><code></code></pre>\n</div>\n";

  var map = {
    "js": "javascript",
    "lua": "lua",
    "py": "python"
  };

  document.addEventListener("DOMContentLoaded", function () {
    hljs.highlightAll();
  });
  /**/

  function term () {
    var _this = this;

    var $tpl = $(tpl$8);
    vnjs.store.screen.append($tpl);
    vnjs.on("term", function (param) {
      if (param === true) {
        $tpl.fadeIn();
      } else if (param) {
        var data = _this.getDataByName(param);

        if (/\./.test(param)) {
          if (!data) {
            console.error("Data file not found");
            console.warn(_this.state.sceneName + "." + _this.state.labelName + "." + _this.state.index);
          } else {
            $tpl.find("pre code").removeAttr("class");
            var str = param.split(".");
            var langName = str[1];
            var val = map[langName];

            if (val) {
              langName = val;
            }

            $tpl.find("pre code").css({
              overflow: "auto",
              padding: 10
            });
            $tpl.find("pre code").addClass("language-" + langName).addClass("hljs");
            var html = hljs.highlight(data.body, {
              language: langName
            }).value;
            $tpl.find("pre code").html(html); // yaml reply from Norrator

            $tpl.find("pre code .hljs-string").toArray().map(function (str) {
              if ($(str).html() === "$:") {
                $(str).addClass("hljs-reply");
              }
            });
            $tpl.fadeIn();
          }
        } else {
          if (param === "clear") {
            $tpl.find("pre code").empty();
          } else {
            var img = $("<img src=".concat(vnjs.getAssetByName(param).url, " />"));
            $tpl.find("pre code").empty();
            $tpl.find("pre code").css("overflow", "hidden");
            $tpl.find("pre code").append(img);
            $tpl.fadeIn();
          }
        }
      } else {
        $tpl.hide();
        $tpl.find("pre code").removeAttr("class");
      }
    });
  }

  var css$p = ".vnjson__show-left {\n  position: absolute;\n  left: 50px;\n  bottom: 210px;\n  top: unset;\n  width: 260px;\n  height: 450px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  z-index: 2000 \n}\n\n.vnjson__show-center {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 210px;\n  top: unset;\n  width: 260px;\n  height: 450px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  z-index: 2000;\n}\n\n.vnjson__show-right {\n  position: absolute;\n  right: 50px;\n  bottom: 210px;\n  top: unset;\n  width: 260px;\n  height: 450px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  z-index: 2000;\n}\n";
  n(css$p,{});

  function show () {
    var $left = $('<div class="vnjson__show-left component"></div>');
    var $right = $('<div class="vnjson__show-right component"></div>');
    var $center = $('<div class="vnjson__show-center component"></div>');
    var $show = $('<div class="vnjson__show-show component"></div>');
    vnjs.store.screen.append($left);
    vnjs.store.screen.append($right);
    vnjs.store.screen.append($center);
    /*
    .vnjson__show-show.component
    */

    vnjs.on("left", function (id) {
      if (id) {
        $left.hide();
        $left.css("background-image", "url('".concat(vnjs.getAssetByName(id).url, "')")).fadeIn();
      } else {
        $left.fadeOut();
      }
    });
    vnjs.on("center", function (id) {
      if (id) {
        $center.hide();
        $center.css("background-image", "url('".concat(vnjs.getAssetByName(id).url, "')")).fadeIn();
      } else {
        $center.fadeOut();
      }
    });
    vnjs.on("right", function (id) {
      if (id) {
        $right.hide();
        $right.css("background-image", "url('".concat(vnjs.getAssetByName(id).url, "')")).fadeIn();
      } else {
        $right.fadeOut();
      }
    });
    vnjs.on("show", function (param) {
      if (param) {
        $show.css("background-image", "url('".concat(vnjs.getAssetByName(id).url, "')")).css(param.css).fadeIn();
      } else {
        $show.fadeOut();
      }
    });
  }

  var css$o = ".vnjson__show-auto-left {\n  position: absolute;\n  left: 50px;\n  bottom: 210px;\n  top: unset;\n  z-index: 2000;\n}\n\n.vnjson__show-auto-center {\n  position: absolute;\n  bottom: 210px;\n  top: unset;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 2000;\n\n}\n\n.vnjson__show-auto-right {\n  position: absolute;\n  right: 50px;\n  bottom: 210px;\n  top: unset;\n  z-index: 2000;\n\n}\n.vnjson__show-auto-sprite{\n\n  background-repeat: no-repeat;\n}";
  n(css$o,{});

  var $left = $('<img alt="" src="" class="vnjson__show-auto-left component"/>');
  var $center = $('<img alt="" src="" class="vnjson__show-auto-center component"/>');
  var $right = $('<img alt="" src="" class="vnjson__show-auto-right component"/>');
  var $sprite = $('<div  class="vnjson__show-auto-sprite component"></div>');
  /**
   * setup
   */

  function showAuto () {
    vnjs.store.screen.append($left);
    vnjs.store.screen.append($center);
    vnjs.store.screen.append($right);
    vnjs.store.screen.append($sprite);
  }
  vnjs.on("leftimg", function (id) {
    if (id) {
      $left.hide();

      if (_typeof(id) === "object") {
        $left.attr("src", vnjs.getAssetByName(id.name).url);

        if (id.css) {
          $left.css(id.css);
        }
      } else {
        $left.attr("src", vnjs.getAssetByName(id).url);
      }

      $left.fadeIn();
    } else {
      $left.fadeOut();
    }
  });
  vnjs.on("centerimg", function (id) {
    if (id) {
      $center.hide();

      if (_typeof(id) === "object") {
        $center.attr("src", vnjs.getAssetByName(id.name).url);

        if (id.css) {
          $center.css(id.css);
        }
      } else {
        $center.attr("src", vnjs.getAssetByName(id).url);
      }

      $center.fadeIn();
    } else {
      $center.fadeOut();
    }
  });
  vnjs.on("rightimg", function (id) {
    if (id) {
      $right.hide();

      if (_typeof(id) === "object") {
        $right.attr("src", vnjs.getAssetByName(id.name).url);

        if (id.css) {
          $right.css(id.css);
        }
      } else {
        $right.attr("src", vnjs.getAssetByName(id).url);
      }

      $right.fadeIn();
    } else {
      $right.fadeOut();
    }
  });
  vnjs.on("spriteimg", function (args) {
    if (args) {
      $sprite.css({
        'background-image': "url(".concat(vnjs.getAssetByName(args.name).url, ")"),
        'background-position': "-".concat(args['frame-left'], " -").concat(args['frame-top']),
        'width': args.width,
        'height': args.height,
        'top': args.top,
        'left': args.left
      });
      $sprite.show();
    } else {
      $sprite.hide();
    }
  });

  var css$n = ".vnjson-scene{\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    z-index: 0;\r\n    width: 100%;\r\n    height: 100%\r\n}";
  n(css$n,{});

  var $tpl$c = $('<div class="vnjson-scene component"></div>');
  function scene () {
    vnjs.store.screen.append($tpl$c);
    vnjs.on("scene", function (id) {
      vnjs.emit('image.update', $tpl$c, {
        plugin: 'scene',
        prop: 'background-image'
      });

      if (_typeof(id) === "object") {
        $tpl$c.css({
          "background-image": "url(".concat(id.url, ")")
        });
        $tpl$c.fadeIn();
      } else if (typeof id === "string") {
        $tpl$c.css({
          "background-image": "url('".concat(vnjs.getAssetByName(id).url, "')")
        });
        $tpl$c.fadeIn();
      } else {
        $tpl$c.fadeOut();
        $tpl$c.css({
          "background-image": "unset"
        });
      }
    });
  }

  var css$m = "\n.vnjson__table{\n  left: 50%;\n  top: 0%;\n  transform: translateX(-50%);\n  flex-direction: column;\n}\n.table-row{\n  overflow: hidden;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n\n}\n.table__cell{\n  transition: all 0.2s linear;\n  overflow: hidden;\n  border: 2px solid transparent;\n  border-radius: 2px;\n}\n\n.table__img-wrapper{\n  border: 2px solid transparent;\n  overflow: hidden;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  border-radius: 2px;\n  margin: 0 5px;\n}\n.table__cell-text{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  color: wheat;\n  margin: 0 5px;\n}\n\n.table__cell[data-jump]{\n  cursor: pointer;\n}\n.table__cell[data-jump]:hover{\n  filter: brightness(150%);\n}\n\n.table__cell-text[data-jump]{\n  cursor: pointer;\n}\n.table-row .table__cell.table__cell-text[data-jump]:hover{\n  opacity: 0.7;\n}";
  n(css$m,{});

  /**
  * {{data}} Подставляем данные в реплику из this.state.data
  */

  function replaceDataTemplate(reply) {
    var _newReply = reply;
    var variables = reply.match(/{{.+?}}/g);
    if (!variables) return _newReply;
    variables.forEach(function (varItem) {
      var dataKey = varItem.replaceAll('{{', '').replaceAll('}}', '').trim();
      _newReply = _newReply.replaceAll(varItem, vnjs.state.data[dataKey] || '');
    });
    return "<span> ".concat(_newReply, " </span>");
  }

  function table () {
    var $table = $('<div class="vnjson__table component"></div>');
    vnjs.store.screen.append($table);
    var _tableData = null;
    $table.on('click', '.table__cell', function () {
      var indexRow = $(this).data('row');
      var indexCell = $(this).data('cell');
      var cellType = $(this).data('type');
      var cell = _tableData[indexRow].row[indexCell][cellType];

      if (cell.exec) {
        vnjs.exec(cell.exec);
      }
    });
    vnjs.on('table', function (tableData) {
      _tableData = tableData;

      if (tableData) {
        $table.html('');
        $table.css('display', 'flex');
        tableData.filter(function (item) {
          return item.hasOwnProperty('border');
        })[0];
        var rows = tableData.filter(function (item) {
          return item.hasOwnProperty('row');
        });
        rows.map(function (item, indexRow) {
          var $row = $("<div class=\"table-row\"></div>");
          var height = 30;
          item.row.map(function (cell, indexCell) {
            var _cell$TYPE, _cell$TYPE2;

            var TYPE = null;
            var $cell = null; // HEIGHT

            if (cell.hasOwnProperty('height')) {
              height = cell.height;
            } // IMAGE


            if (cell.hasOwnProperty('image')) {
              TYPE = 'image';
              $cell = $("<div class=\"table__img-wrapper\"><img class=\"table__cell\" style=\"width: ".concat(cell.image.width, "px\" data-row=\"").concat(indexRow, "\" data-cell=\"").concat(indexCell, "\" data-type=\"").concat(TYPE, "\" src=\"").concat(vnjs.getAssetByName(cell.image.name).url, "\"/></div>"));

              if (cell.image.hasOwnProperty('exec')) {
                $cell.css('cursor', 'pointer');
              } else {
                $cell.css('cursor', 'unset');
              }
            } // TEXT


            if (cell.hasOwnProperty('text')) {
              TYPE = 'text';
              var text = null;
              text = replaceDataTemplate(cell.text.content);
              $cell = $("<span class=\"table__cell table__cell-text\" data-row=\"".concat(indexRow, "\" data-cell=\"").concat(indexCell, "\" data-type=\"").concat(TYPE, "\" >").concat(text, "</span>"));
              $cell.css({
                width: cell.text.width + 'px',
                'font-size': cell.text.size + 'px',
                'line-height': cell.text.size + 4 + 'px'
              });

              if (cell.text.hasOwnProperty('exec')) {
                $cell.css('cursor', 'pointer');
              } else {
                $cell.css('cursor', 'unset');
              }

              if (cell.text['color-background']) {
                $cell.css('background-color', cell.text['color-background']);
              }
              /**
               * ALIGN
               */


              if (cell.text['align-h']) {
                switch (cell.text['align-h']) {
                  case 'left':
                    $cell.css('justify-content', 'flex-start');
                    break;

                  case 'center':
                    $cell.css('justify-content', 'center');
                    break;

                  case 'right':
                    $cell.css('justify-content', 'flex-end');
                    break;
                }
              }

              if (cell.text['align-v']) {
                switch (cell.text['align-v']) {
                  case 'top':
                    $cell.css('align-items', 'flex-start');
                    break;

                  case 'center':
                    $cell.css('align-items', 'center');
                    break;

                  case 'bottom':
                    $cell.css('align-items', 'flex-end');
                    break;
                }
              }
            }

            $row.append($cell);
            /**
             * border
             */

            if (!cell[TYPE]) return;

            if (((_cell$TYPE = cell[TYPE]) === null || _cell$TYPE === void 0 ? void 0 : _cell$TYPE.border) === true) {
              $cell.css('border-color', 'white');
            } else if (typeof ((_cell$TYPE2 = cell[TYPE]) === null || _cell$TYPE2 === void 0 ? void 0 : _cell$TYPE2.border) === 'string') {
              $cell.css('border-color', cell[TYPE].border);
            } else {
              $cell.css('border-color', 'transparent');
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

    vnjs.on('clear', function (param) {
      if (param === 'all') {
        $('.component').toArray().map(function (component) {
          $(component).hide();
        });

        _this.exec({
          scene: false,
          'dialog-box': 'clear'
        });

        Object.values(vnjs.store).map(function (asset) {
          if (asset.hasOwnProperty("_muted")) {
            asset.stop();
          }
        });
      }
    });
  }

  var Controller = /*#__PURE__*/function () {
    function Controller() {
      _classCallCheck(this, Controller);

      _defineProperty(this, "token", null);
    }

    _createClass(Controller, [{
      key: "load",
      value: function load(token) {
        this.token = token;
        var data = localStorage.getItem(this.token);

        if (data) {
          vnjs.state.data = JSON.parse(data);
        } else {
          vnjs.state.data = {};
        }
      }
    }, {
      key: "save",
      value: function save(data) {
        localStorage.setItem(this.token, JSON.stringify(data));
      }
      /**
       * localStorage.remove()
       */

    }, {
      key: "clear",
      value: function clear(args) {
        if (args === true) {
          localStorage.removeItem(this.token);
          vnjs.state.data = {
            score: vnjs.state.data.score,
            player: vnjs.state.data.player
          };
        } else if (Array.isArray(args)) {
          args.forEach(function (item) {
            delete vnjs.state.data[item];
          });
          this.save(vnjs.state.data);
        }
      }
    }, {
      key: "set",
      value: function set(data) {
        for (var key in data) {
          var value = String(data[key]);

          if (value.includes("+=")) {
            var val = value.replace("+=", "");
            this.valueIncrement(key, val);
          } else if (value.includes("-=")) {
            var _val2 = value.replace("-=", "");

            this.valueDecrement(key, _val2);
          } else {
            if (isNaN(value)) {
              vnjs.state.data[key] = value;
            } else {
              vnjs.state.data[key] = Number(value);
            }
          }
        }

        this.save(vnjs.state.data);
      }
    }, {
      key: "valueIncrement",
      value: function valueIncrement(key, val) {
        var _val = Number(val);

        if (isNaN(_val)) {
          _val = val;
        }

        if (vnjs.state.data[key]) {
          vnjs.state.data[key] = vnjs.state.data[key] + _val;
        } else {
          vnjs.state.data[key] = _val;
        }
      }
    }, {
      key: "valueDecrement",
      value: function valueDecrement(key, val) {
        var _val = Number(val);

        if (isNaN(_val)) {
          _val = val;

          if (vnjs.state.data[key]) {
            vnjs.state.data[key] = vnjs.state.data[key].replace(_val, "");
          } else {
            vnjs.state.data[key] = "";
          }

          return;
        }

        if (vnjs.state.data[key]) {
          vnjs.state.data[key] = vnjs.state.data[key] - _val;
        } else {
          vnjs.state.data[key] = -_val;
        }
      }
    }]);

    return Controller;
  }();

  var controller$1 = new Controller();

  function data () {}
  /**
   * events
   */

  vnjs.on("postload", function () {
    controller$1.load(vnjs["package"].publish.token);
  });
  vnjs.on("data-set", function (args) {
    return controller$1.set(args);
  });
  vnjs.on("data-clear", function (args) {
    return controller$1.clear(args);
  });
  vnjs.on("data-save", function () {
    controller$1.save(vnjs.state.data);
  });
  /**
   * deprecated
   */

  vnjs.on("set-data", function (args) {
    console.warn("[set-data] is deprecated. Use [data-set]");
    controller$1.set(args);
  });
  vnjs.on("clear-data", function () {
    console.warn("[clear-data] is deprecated. Use [data-clear]");
    controller$1.clear();
  });

  var controller = {
    '===': function _(dataValue, value, execData) {
      if (dataValue === value) {
        vnjs.exec(execData);
      }
    },
    '>': function _(dataValue, value, execData) {
      if (dataValue > value) {
        vnjs.exec(execData);
      }
    },
    '<': function _(dataValue, value, execData) {
      if (dataValue < value) {
        vnjs.exec(execData);
      }
    },
    '!==': function _(dataValue, value, execData) {
      if (dataValue !== value) {
        vnjs.exec(execData);
      }
    },
    '<=': function _(dataValue, value, execData) {
      if (dataValue < value) {
        vnjs.exec(execData);
      }
    },
    '>=': function _(dataValue, value, execData) {
      if (dataValue >= value) {
        vnjs.exec(execData);
      }
    },
    '[]': function _(dataValue, value, execData) {
      if (dataValue.includes(value)) {
        vnjs.exec(execData);
      }
    },
    '][': function _(dataValue, value, execData) {
      if (!dataValue.includes(value)) {
        vnjs.exec(execData);
      }
    }
  };

  var Switch = /*#__PURE__*/function () {
    function Switch() {
      _classCallCheck(this, Switch);

      _defineProperty(this, "operators", ["===", "<", ">", ">=", "<=", "!==", "\\[\\]", "\\]\\[" //'default'
      ]);

      _defineProperty(this, "dataValue", null);

      _defineProperty(this, "value", null);

      _defineProperty(this, "OPERATOR", null);

      _defineProperty(this, "equal", null);

      _defineProperty(this, "PLUGIN_DATA", null);
    }

    _createClass(Switch, [{
      key: "parse",
      value: function parse(data) {
        this.PLUGIN_DATA = data;
        /**
         * Пробегаемся по всем условиям
         */

        for (var equal in this.PLUGIN_DATA) {
          this.equal = equal;
          /**
           * Определяем какой оператор используется в пользовательских данных
           */

          for (var i = 0; i < this.operators.length; i++) {
            var operator = this.operators[i];
            var isOperator = new RegExp(operator).test(this.equal);

            if (isOperator) {
              this.OPERATOR = operator;
            }
          }

          if (this.OPERATOR === null) {
            vnjs.emit("error", {
              ru: "\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 <font color=\"deepskyblue\">".concat(this.equal, "</font><br>\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u044B <font color=\"lightgreen\">").concat(this.operators.join("  ").replaceAll("\\", ""), "</font>"),
              en: "Invalid operator <font color=\"deepskyblue\">".concat(this.equal, "</font><br>ValidoOperators <font color=\"lightgreen\">").concat(this.operators.join("  ").replaceAll("\\", ""), "</font>")
            });
            return;
          }

          if (this.OPERATOR.includes("\\")) {
            this.OPERATOR = this.OPERATOR.replaceAll("\\", "");
          }

          var _this$equal$split = this.equal.split(this.OPERATOR),
              _this$equal$split2 = _slicedToArray(_this$equal$split, 2),
              key = _this$equal$split2[0],
              val = _this$equal$split2[1];

          this.dataValue = vnjs.state.data[key.trim()];

          if (isNaN(+val)) {
            this.value = val.trim(); // false

            if (this.value === "false") {
              this.value = undefined;
            }

            if (this.value === "undefined") {
              this.value = undefined;
            }

            if (this.value === "null") {
              this.value = undefined;
            }
          } else {
            this.value = Number(val);
          }

          var execData = this.PLUGIN_DATA[this.equal];
          controller[this.OPERATOR](this.dataValue, this.value, execData);
        }
      }
    }]);

    return Switch;
  }();

  function switchVnjson () {
    var _switch = new Switch(this);

    vnjs.on('switch', function (data) {
      return _switch.parse(data);
    });
  }

  var css$l = "\n\n.vnjson__qa{\n  display: none;\n  width: 60%;\n  flex-direction: column;\n}\n\n.vnjson__qa--item{\n\n  color: white;\n  cursor: pointer;\n  color: wheat;\n  transition: 0.1s;\n  margin-bottom: 10px;\n  border-style: solid;\n  border-width: 3px;\n  border-color: black;\n  color: white;\n  background: grey;\n}\n.vnjson__qa--item:last-child{\n  margin-bottom: 0;\n}\n.vnjson__qa--item:hover {\n  background: rgba(100, 200, 100, 0.7);\n}\n\n.vnjson__qa--quetion{\n  background: rgba(0,0,0,0.7);\n  pointer-events: none;\n  text-overflow: unset;\n  height: auto;\n  white-space: unset;\n}\n.vnjson__qa--quetion span{\n  text-overflow: unset;\n  height: auto;\n  overflow: auto;\n  white-space: unset;\n  line-height: 28px;\n\n}\n.vnjson__qa--item span{\n  padding: 7px 20px;\n  display: block;\n}\n.vnjson__qa--item .vnjson__qa--name{\n  padding: unset;\n  display: none;\n}\n/*\n.vnjson__qa--name:after{\n  content: \" :\"\n}\n*/\n.vnjson__qa--reply{\n  padding: unset;\n  padding-left: 20px;\n}";
  n(css$l,{});

  var tpl$7 = "<div class=\"vnjson__qa component center\"></div>";

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
    if (this.state.data.score) {
      this.state.data.score = new Score(); //store.set(this.package.ISBN, this.state.data)

      vnjs.emit('setScore');
    }
  }

  function qa () {
    var _this = this;

    if (!this.state.data.score) {
      this.state.data.score = new Score();
    }

    var $tpl = $(tpl$7);
    vnjs.store.screen.append($tpl);

    var setScore = function setScore(data) {
      for (var key in data) {
        for (var param in data[key]) {
          _this.state.data.score[key][param] += data[key][param];
        }
      } //store.set(this.package.ISBN, this.state.data)


      vnjs.emit('setScore');
    };

    vnjs.on('оценка', function (data) {
      if (data === 'reset') {
        clearData.call(_this);
        _this.state.data.score = new Score();
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
          str = "\n          <div class=\"vnjson__qa--item vnjson__qa--quetion\">\n              <span class=\"vnjson__qa--name\" style=\"color: ".concat(character.nameColor, ";\">").concat(character.name, "</span>\n              <span class=\"vnjson__qa--reply\" style=\"color: ").concat(character.replyColor, ";\">").concat(menuItem, "</span>\n          </div>");
          $('.vnjson__qa').append(str);
        } else {
          str = "<div class=\"vnjson__qa--item\" data-score=".concat(JSON.stringify(menuItem), "><span class=\"sound-hover\">").concat(label, "</span></div>");
          $('.vnjson__qa').append(str);
        }
      }

      $tpl.css('display', 'flex');
      var vnjs = _this;

      function clickHundler() {
        var data = $(this).data('score');
        setScore(data);
        $('.vnjson__qa').off("click", clickHundler);
        $('.vnjson__qa').hide();
        vnjs.exec({
          next: true
        });
      }

      $(".vnjson__qa").on("click", ".vnjson__qa--item", clickHundler);
    };

    vnjs.on('qa', function (data) {
      if (data === 'reset') {
        clearData.call(_this);
      } else if (data) {
        qaHandler(data);
      } else {
        $(".vnjson__qa").hide();
      }
    });
  }

  var css$k = ".chess__vnjson{\n  top: 50px;\n  left: 50%;\n  transform: translateX(-50%);\n\n}";
  n(css$k,{});

  function chess () {
    var _this = this;

    vnjs.on("vnjson.mount", function () {
      if (_this["package"].chess) {
        chessInit();
      }
    });

    var chessInit = function chessInit() {
      var $tpl = $('<iframe class="chess__vnjson component" src="data/chess/index.html" width="500" height="500"></iframe>');
      vnjs.store.screen.append($tpl);
      vnjs.on("chess", function (fen) {
        if (fen) {
          $tpl.show();
          var win = document.querySelector("iframe.chess__vnjson").contentWindow;
          win.postMessage({
            fen: fen
          }, location.origin + "/data/chess/index.html");
        } else {
          $tpl.hide();
        }
      });
    };
  }

  var tpl$6 = "<div class=\"vnjson__input component\">\n    <div class=\"vnjson__input-wrapper\">\n        <input type=\"text\">\n        <div class=\"vnjson__input-btn\">\n            <svg style=\"width:60px;height:60px\" viewBox=\"0 0 24 24\">\n                <path fill=\"currentColor\" d=\"M3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19M17,12L12,7V10H8V14H12V17L17,12Z\"/>\n            </svg>\n        </div>\n    </div>\n  \n</div>";

  var css$j = ".vnjson__input{\r\n    width: 470px;\r\n    height: 120px;\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    top: 250px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);\r\n    border-radius: 4px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    display: none;\r\n  }\r\n  .vnjson__input-wrapper{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .vnjson__input-wrapper input{\r\n    caret-color: skyblue;\r\n    height: 47px;\r\n    border-radius: 4px;\r\n    width: 350px;\r\n    background-color: rgba(200,200,200,0.1);\r\n    font-size: 22px;\r\n    \r\n    color: skyblue;\r\n  }\r\n  \r\n  .vnjson__input-wrapper .vnjson__input-btn{\r\n    width: 60px;\r\n    height: 60px;\r\n    cursor: pointer;\r\n  }\r\n  .vnjson__input-wrapper .vnjson__input-btn svg path{\r\n    fill: silver;\r\n    transition: 0.3s;\r\n  \r\n  }\r\n  \r\n  .vnjson__input-wrapper .vnjson__input-btn:hover svg path{\r\n    fill: skyblue;\r\n  }";
  n(css$j,{});

  var $tpl$b = $(tpl$6);
  var input = $tpl$b.find(".vnjson__input-wrapper input");
  var _args$2 = null;
  var character = null;
  /**
   * setup
   */

  function input$1 () {
    vnjs.store.screen.append($tpl$b);
    /**
     * click
     */

    $tpl$b.find(".vnjson__input-btn").on("click", function () {
      return clickHandler$1();
    });
  }
  vnjs.on("input-name", handler$2);
  vnjs.on("input-data", handler$2);
  /**
   * deprecated
   */

  vnjs.on("set-name", function (args) {
    console.warn("[set-name] is deprecated. Use [input-name]");
    handler$2(args);
  });
  /**
   * event handler
   */

  function handler$2(args) {
    character = vnjs.getCharacterById(args);

    if (args) {
      _args$2 = args;

      if (character) {
        input.val(character.name);
      } else {
        var _varData = vnjs.state.data[args];
        input.val(_varData);
      }

      $tpl$b.css("display", "flex");
    } else {
      $tpl$b.hide();
    }
  }
  /**
   * Обработка клика по кнопке ввода текста
   */


  function clickHandler$1() {
    $tpl$b.fadeOut();

    if (character) {
      character.name = input.val();
    } else {
      vnjs.emit("data-set", _defineProperty({}, _args$2, input.val()));
    }

    input.val("");
    vnjs.emit('next', true);
  }

  var css$i = ".vnjson__wiki {\n  left: 10px;\n  top: 40px;\n  width: 300px;\n  height: 400px;\n  display: none;\n  padding: 10px;\n  border-radius: 4px;\n  background-color: rgba(0,0,0,0.5);\n  font-size: 14px;\n  overflow: auto;\n}\n.vnjson__wiki li{\n  padding: 5px 0;\n\n  line-height: 18px;\n    \n}\n.vnjson__wiki-key{\n  color: wheat;\n}\n.vnjson__wiki-dash{\n  padding: 0 5px;\n  color: silver;\n}\n.vnjson__wiki-value{\n  color: darkgray;\n}";
  n(css$i,{});

  var $tpl$a = $('<ul class="vnjson__wiki component"></ul>');
  function wiki () {
    var _this = this;

    vnjs.store.screen.append($tpl$a);
    vnjs.on("wiki", function (data) {
      if (data) {
        $tpl$a.html("");
        $tpl$a.fadeIn();
        var list;

        if (Array.isArray(data)) {
          list = data;
        } else {
          list = data.list;

          if (data.css) {
            $tpl$a.css(data.css);
          }
        }

        appendElements.call(_this, list);
      } else {
        $tpl$a.fadeOut();
      }
    });
  }

  function appendElements(list) {
    var wikiStore = this.tree.$root.wiki;
    list.forEach(function (key) {
      var str;

      if (_typeof(wikiStore[key]) === "object") {
        str = "<li><span class=\"vnjson__wiki-key\" style=\"color: ".concat(wikiStore[key].color, "\">").concat(key, "</span> <span class=\"vnjson__wiki-dash\">-</span> <span class=\"vnjson__wiki-value\">").concat(wikiStore[key].text, "</span></li>");
      } else {
        str = "<li><span class=\"vnjson__wiki-key\">".concat(key, "</span> <span class=\"vnjson__wiki-dash\">-</span> <span class=\"vnjson__wiki-value\">").concat(wikiStore[key], "</span></li>");
      }

      $tpl$a.append(str);
    });
  }

  var css$h = "\n\n#crossword{\n  top: 50px;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 0;\n  display: none;\n  box-shadow: 3px 3px 3px rgba(0,0,0,0.3);\n  background-color: antiquewhite;\n  padding: 5px;\n  border-radius: 4px;\n}\n";
  n(css$h,{});

  function crossWord () {
    var _this = this;

    vnjs.on('vnjson.mount', function () {
      if (_this["package"]['crossword']) {
        init();
      }
    });
    var $tpl = null;

    var init = function init() {
      vnjs.on('crossword', function (data) {
        if ($tpl) {
          $tpl.remove();
          $tpl = null;
        }

        if (data) {
          $tpl = $('<iframe id="crossword" src="data/crossword/index.html" width="975" height="500"></iframe>');
          vnjs.store.screen.append($tpl);
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

  var css$g = "\n.vnjson__test{\n  width: 600px;\n  top: 50px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: wheat;\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);\n  padding: 20px;\n  border-radius: 4px;\n  min-height: 300px;\n\n}\n\n.vnjson__test-name{\n  border-bottom: 2px solid gray;\n  padding: 5px;\n  font-size: 16px;\n  padding-left: 0;\n  padding-bottom: 10px;\n  color: brown;\n}\n\n.vnjson__test-quetions-wrapper{\n  position: relative;\n}\n\n\n.vnjson__test-quetion{\n  display: flex;\n}\n.vnjson__test-quetion-img{\n  display: none;\n  width: 250px;\n  height: 250px;\n  min-width: 250px;\n  margin: 10px 10px 10px 0;\n}\n.vnjson__test-quetion-val{\n  padding: 15px 0;\n  color: black;\n}\n.vnjson__variants-item{\n  padding: 10px;\n  margin-top: 5px;\n  background-color: darkslateblue;\n\n  color: rgba(255, 255, 255, 0.7);\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n.vnjson__variants-item_success{\n  background-color: darkcyan;\n  color: white;\n}\n\n.vnjson__variants-item_fail{\n  background-color: crimson;\n  color: white;\n}\n.vnjson__variants-item:hover,\n.vnjson__variants-item_success:hover,\n.vnjson__variants-item_fail:hover{\n\n  filter: brightness(110%);\n}\n\n/**\n * RESULT\n */\n.vnjson__test-result{\n  width: 100%;\n  height: 200px;\n  top: 0;\n  left: 0;\n  position: absolute;\n  border-radius: 4px;\n  display: none;\n  background-color: wheat;\n  padding: 20px 0;\n}\n.vnjson__test-result-data{\n  height: 110px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n}\n.vnjson__test-result-item{\n  color: black;\n  padding: 10px 0;\n  display: flex;\n  justify-content: space-between;\n  width: 250px;\n}\n.vnjson__test-result-item:first-child span:last-child{\n  color: darkcyan;\n}\n.vnjson__test-result-item:last-child span:last-child{\n  color: crimson;\n}\n.vnjson__test-next-btn{\n  background-color: burlywood;\n  color: rgba(255, 255, 255, 0.7);\n  border-radius: 4px;\n  padding: 10px 10px;\n  width: 250px;\n  text-align: center;\n  cursor: pointer;\n  box-shadow: 2px 2px 2px rgba(0,0,0,0.3);\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.vnjson__test-next-btn:hover{\n  background-color:  darkslateblue;\n  color: white;\n}";
  n(css$g,{});

  var tpl$5 = "<div class=\"vnjson__test component\">\n    <div class=\"vnjson__test-name\"></div>\n    <div class=\"vnjson__test-quetions-wrapper\">\n        <div class=\"vnjson__test-quetion\">\n                <img class=\"vnjson__test-quetion-img\">\n                <div class=\"vnjson__test-quetion-val\"></div>\n        </div>\n        <div class=\"vnjson__test-variants\"></div>\n        <!--result-->\n        <div class=\"vnjson__test-result\">\n            <div class=\"vnjson__test-result-data\">\n                <div>\n                    <div class=\"vnjson__test-result-item\">\n                        <span class=\"vnjson__test-result-item_true--text\">Правильно</span>\n                        <span class=\"vnjson__test-result-item_true\">0</span>\n                  </div>\n                 <div class=\"vnjson__test-result-item vnjson__test-result-item--2\">\n                        <span>Не правильно</span>\n                        <span class=\"vnjson__test-result-item_false\">0</span>\n                  </div>\n                </div>\n            </div>\n            <div class=\"vnjson__test-next-btn\">Продолжить</div>\n        </div>\n    </div>\n</div>";

  var $tpl$9 = $(tpl$5);
  var TEST = null;
  var answers = [];
  var qIndex = 0;
  var _trueAnswer = 0;
  var _falseAnswer = 0;
  /**
   * STYLES
   */

  function reset() {
    qIndex = 0;
    answers = [];
    _trueAnswer = 0;
    _falseAnswer = 0;
    vnjs.state.data.trueAnswer = 0;
    vnjs.state.data.falseAnswer = 0;
    vnjs.state.data.summTest = 0;
    vnjs.state.data.textTest = "Результат";
    $(".vnjson__test").css("background-color", "wheat");
    $(".vnjson__variants-item").css("background-color", "unset");
    $(".vnjson__test-next-btn").css("background-color", "black");
    $(".vnjson__variants-item_success").css("background-color", "unset");
    $(".vnjson__variants-item_fail").css("background-color", "unset");
    $(".vnjson__test-result").css("background-color", "wheat");
  }

  function applyStyles() {
    $(".vnjson__test").css("background-color", TEST["color-background"]);
    $(".vnjson__variants-item").css("background-color", TEST["color-item"]);
    $(".vnjson__test-next-btn").css("background-color", TEST["color-item"]);
    $(".vnjson__variants-item_success").css("background-color", TEST["color-item-correct"]);
    $(".vnjson__variants-item_fail").css("background-color", TEST["color-item-incorrect"]);
    $(".vnjson__test-result").css("background-color", TEST["color-result"]);
  }

  function test () {
    var _this = this;

    vnjs.store.screen.append($tpl$9);
    vnjs.on("test", function (data) {
      if (data) {
        reset();
        $tpl$9.show();
        TEST = data;
        renderQuetion.call(_this);
      } else {
        $tpl$9.hide();
      }
    });
  }
  var _quetionItem = null;

  function renderQuetion() {
    var _quetionItem2;

    _quetionItem = TEST.quetions[qIndex];
    $(".vnjson__test-name").html(TEST.name);
    var $imageContaner = $(".vnjson__test-quetion-img"); // AUDIO

    if ((_quetionItem2 = _quetionItem) !== null && _quetionItem2 !== void 0 && _quetionItem2.audio) {
      vnjs.emit("audio", _quetionItem.audio);
    }

    $(".vnjson__test-variants").html("");

    if (_quetionItem.image) {
      var url = vnjs.getAssetByName(_quetionItem.image).url;
      $imageContaner.attr("src", url).show();
    } else {
      $imageContaner.hide();
    }

    $(".vnjson__test-quetion-val").html(_quetionItem.quetion);

    _quetionItem.variants.map(function (item, index) {
      var $tplItem = $("<div class=\"vnjson__variants-item\" data-index=\"".concat(index, "\"></div>"));

      if (_typeof(item) === "object") {
        for (var key in item) {
          $tplItem.attr('data-point', item[key]);
          $tplItem.html(key);
        }
      } else {
        $tplItem.html(item);
      }

      $(".vnjson__test-variants").append($tplItem);
    });

    applyStyles();
  }
  /**
   * @click
   */


  var click = true;
  $tpl$9.find(".vnjson__test-variants").on("click", ".vnjson__variants-item", function () {
    var index = $(this).data("index");
    var point = $(this).data("point");

    if (point) {
      vnjs.state.data.summTest = vnjs.state.data.summTest + point;
    }

    if (click) {
      if (index === _quetionItem.correct - 1) {
        if (TEST["self-control"]) {
          $(this).addClass("vnjson__variants-item_success");
        }

        ++_trueAnswer;
        answers.push({
          answer: true,
          quetion: _quetionItem
        });
      } else {
        if (TEST["self-control"]) {
          $(this).addClass("vnjson__variants-item_fail"); // навешиваем класс на правильный ответ

          $(".vnjson__variants-item").toArray().map(function (item) {
            if ($(item).data("index") === TEST.quetions[qIndex].correct - 1) {
              $(item).addClass("vnjson__variants-item_success");
            }
          });
          applyStyles();
        }

        ++_falseAnswer;
        answers.push({
          answer: false,
          quetion: _quetionItem
        });
      }

      click = false;
      applyStyles();
      nextStep();
    }
  });

  function nextStep() {
    var timer = typeof TEST["self-control"] === "number" ? TEST["self-control"] : 100;
    setTimeout(function () {
      click = true;
      ++qIndex;

      if (qIndex === TEST.quetions.length) {
        onEnd();
      } else {
        renderQuetion();
      }
    }, timer);
  }

  $tpl$9.find(".vnjson__test-next-btn").on("click", function () {
    vnjs.exec({
      next: true,
      test: false
    });
    $(".vnjson__test-result").hide();
  });

  function onEnd() {
    vnjs.state.data.trueAnswer = _trueAnswer;
    vnjs.state.data.falseAnswer = _falseAnswer;

    if (TEST.type === 'SummText') {
      $('.vnjson__test-result-item--2').hide();

      if (TEST.onEnd) {
        vnjs.exec(TEST.onEnd);
      }

      $('.vnjson__test-result-item_true--text').html(vnjs.state.data.textTest);
      $(".vnjson__test-result-item_true").html(vnjs.state.data.summTest);
    }

    if (TEST.type === 'TrueFalse') {
      if (TEST.onEnd) {
        vnjs.exec(TEST.onEnd);
      }

      $(".vnjson__test-result-item_true").html(_trueAnswer);
      $(".vnjson__test-result-item_false").html(_falseAnswer);
      $('.vnjson__test-result-item--2').show();
    }

    $(".vnjson__test-result").show();
  }

  var css$f = ".screen-vnjson__slide{\n  position: absolute;\n  display: none;\n  top: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.5);\n  z-index: 2000;\n}";
  n(css$f,{});

  var $tpl$8 = $("<img class=\"screen-vnjson__slide component\"/>");
  function slide () {
    vnjs.store.screen.append($tpl$8);
    vnjs.on('slide', function (id) {
      $tpl$8.attr('src', null);

      if (typeof id === 'string') {
        $tpl$8.attr('src', vnjs.getAssetByName(id).url).show();
      } else if (_typeof(id) === 'object') {
        /*
         * id.name
         * id.css
         * id.url
         */
        if (id.hasOwnProperty('css')) {
          $tpl$8.css(id.css);
          $tpl$8.attr('src', id.name).show();
        }

        if (id.hasOwnProperty('url')) {
          $tpl$8.attr('src', id.url).fadeIn();
        } else {
          $tpl$8.attr('src', vnjs.getAssetByName(id.name).url).show();
        }
        /*
        .css(id.css)
         */

      } else {
        $tpl$8.attr('src', null).hide();
      }
    });
  }

  var css$e = ".vnjson__stage{\n  margin: 1% 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #333;\n  width: 70%;\n  padding: 5px;\n  height: 518px;\n  top: 30px;\n  overflow: auto;\n  border-radius: 4px;\n}\n.vnjson__stage li{\n  list-style-type: none;\n  cursor: pointer;\n  font-size: 18px;\n  display: block;\n  border-radius: 4px;\n}\n.vnjson__stage li:last-child{\n  margin-bottom: 0px;\n}\n.stage-children li:not(.stage-child){\n  display: none;\n}\n.stage-parent{\n  padding: 5px;\n  background: rgba(0, 0, 0, 0.1);\n  margin-bottom: 5px;\n\n}\n/*Том*/\n.stage-vol{\n  padding: 10px;\n\n  background: #000;\n  color: darkcyan;\n  border-radius: 4px;\n}\n.stage-vol:hover{\n  color: #34d1a2;\n  background: rgba(0, 0, 0, 0.7);\n}\n.stage-children{\n  padding-left: 20px;\n  display: block;\n  margin-top: 10px;\n  border-radius: 4px;\n}\n\n/*Глава*/\n.stage-child{\n  color: darkcyan;\n  padding: 10px;\n\n  background: #000;\n  margin-bottom: 10px;\n}\n\n.stage-child:hover{\n  color: #34d1a2;\n  background: rgba(0, 0, 0, 0.7);\n}\n";
  n(css$e,{});

  var icoContent = "data:image/jpeg;base64,/9j/4QcjRXhpZgAATU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAfAAAAcgEyAAIAAAAUAAAAkYdpAAQAAAABAAAAqAAAANQACvyAAAAnEAAK/IAAACcQQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpADIwMjE6MTE6MDUgMTk6NTE6MzEAAAAAAAOgAQADAAAAAf//AACgAgAEAAAAAQAAADygAwAEAAAAAQAAADwAAAAAAAAABgEDAAMAAAABAAYAAAEaAAUAAAABAAABIgEbAAUAAAABAAABKgEoAAMAAAABAAIAAAIBAAQAAAABAAABMgICAAQAAAABAAAF6QAAAAAAAABIAAAAAQAAAEgAAAAB/9j/7QAMQWRvYmVfQ00AAv/uAA5BZG9iZQBkgAAAAAH/2wCEAAwICAgJCAwJCQwRCwoLERUPDAwPFRgTExUTExgRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBDQsLDQ4NEA4OEBQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIADwAPAMBIgACEQEDEQH/3QAEAAT/xAE/AAABBQEBAQEBAQAAAAAAAAADAAECBAUGBwgJCgsBAAEFAQEBAQEBAAAAAAAAAAEAAgMEBQYHCAkKCxAAAQQBAwIEAgUHBggFAwwzAQACEQMEIRIxBUFRYRMicYEyBhSRobFCIyQVUsFiMzRygtFDByWSU/Dh8WNzNRaisoMmRJNUZEXCo3Q2F9JV4mXys4TD03Xj80YnlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vY3R1dnd4eXp7fH1+f3EQACAgECBAQDBAUGBwcGBTUBAAIRAyExEgRBUWFxIhMFMoGRFKGxQiPBUtHwMyRi4XKCkkNTFWNzNPElBhaisoMHJjXC0kSTVKMXZEVVNnRl4vKzhMPTdePzRpSkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2JzdHV2d3h5ent8f/2gAMAwEAAhEDEQA/AOKSSW06npXS8XFOXjHOycusXODnljWsMfQ2z79U4BgzZxj4RwynOZqEIVcuH1S+bhi4qXHPK2cjo2PZm4Iw3OZjdRG5jXGSyNbG7v6qWRldBxbn41fTTeKXFnquuc1ziPpEta17UaYhzsZcPt455JSjxmMeGJxx4vb9fuSh+m4qdav7U6L/AOVA/wC33f8ApNGxbeh9QyGYR6e7FdedldrLS4hx+iXNc1qVeKpc3OIMpcvljGIuUrxS4YjrUcjiJImTQcfItx3HcanuZu8dvtQ0Gzxx4OO/TXFf9X5rf//Q4qVqY/W6xjV4udiV5raBFLnuLHNHZvtDvaso6AnwE/cugvyG9GwcIYmPVYcmv1bMi1m/c4/4Jv7qeGnzhgfbgcfuTnI+36vZ4TGPFKXu/o+lzcrq+Vk5dWUIpOPAoYwe1gb+a37vcrT+t9PvcbcnplVlztbHtscwOP7+1rXKzldPw8jqXTC5gxxngOvpGgH9n+Wh5nXb8PKtxasWiiul5Yyt9YLoaYDtzkWqDiyjHHDgPFGBOmT7vwQ4+CUfcx/zn6yKH9qdH/8AKln/AG8//wAgnZ13Cxz6mF06ui/8y0vc7aTpuDXNTf8AObM/0WP/ANtBWendXt6lmV4eTi0203nY8Mr2lo/f3fyfpJKnhlCEpZMEjCIMpj71kn6R83ol8zgve973PeSXvJc4nuT3TIuXUynKupYdzK3ua0+QOiEm9XS44+3xfocPFt+jw9n/0eKWx0jK6+Mc1YNZyMdh0DmB7Wn+S56xzwfhoukvq6lldMwD0UuNDKg2yulwaW2/nuskhPDR5+cRGEJRxkTl8+f+ax8MeL1f1pfouJm5GfbmG3Mc/wC0tI5EFsfRDGwtunL+tT6mu+ytuBH85ZU3cfvc1LPsoZ1Xpbc9zbMipo+2ukEbv8Hv/lNcodRwfrPZmXPrN1lbnE1OrsAYWH6GxocxFqTywyxwxljwYhwGUZZx+r0lwcOD5P76X1/rV/3Aq/7ab/5NCycv6010vc/GGOyPc+utoIH9ZrlW/Zv1q/cyP+3P/UiudKw/rFRm12ZZtqxWmbza8OZsj3Dbud9JJjlHDCJnfJT4RxcEfmnw/ox9c/U83M6zPn4zyki5bqX5Vz6BFLrHmsDiJQk3q7PF+r4+E/LxcH6Xy8XC/wD/0uKlSrtuqJNVjq552Etn7lFJOWyqvVXD/W+VRMySA4nmdfy/SRG5WUwBrLrGtGgaHuA/AoaSOq2XBQ4uGunFt/zk323M/wBPb/nu/vUX5OTYNtlr3NPILiQUNJLVaPYvT278OFSSSSDK/wD/2f/tDz5QaG90b3Nob3AgMy4wADhCSU0EJQAAAAAAEAAAAAAAAAAAAAAAAAAAAAA4QklNBDoAAAAAAPcAAAAQAAAAAQAAAAAAC3ByaW50T3V0cHV0AAAABQAAAABQc3RTYm9vbAEAAAAASW50ZWVudW0AAAAASW50ZQAAAABJbWcgAAAAD3ByaW50U2l4dGVlbkJpdGJvb2wAAAAAC3ByaW50ZXJOYW1lVEVYVAAAAAEAAAAAAA9wcmludFByb29mU2V0dXBPYmpjAAAAFQQfBDAEQAQwBDwENQRCBEAESwAgBEYEMgQ1BEIEPgQ/BEAEPgQxBEsAAAAAAApwcm9vZlNldHVwAAAAAQAAAABCbHRuZW51bQAAAAxidWlsdGluUHJvb2YAAAAJcHJvb2ZDTVlLADhCSU0EOwAAAAACLQAAABAAAAABAAAAAAAScHJpbnRPdXRwdXRPcHRpb25zAAAAFwAAAABDcHRuYm9vbAAAAAAAQ2xicmJvb2wAAAAAAFJnc01ib29sAAAAAABDcm5DYm9vbAAAAAAAQ250Q2Jvb2wAAAAAAExibHNib29sAAAAAABOZ3R2Ym9vbAAAAAAARW1sRGJvb2wAAAAAAEludHJib29sAAAAAABCY2tnT2JqYwAAAAEAAAAAAABSR0JDAAAAAwAAAABSZCAgZG91YkBv4AAAAAAAAAAAAEdybiBkb3ViQG/gAAAAAAAAAAAAQmwgIGRvdWJAb+AAAAAAAAAAAABCcmRUVW50RiNSbHQAAAAAAAAAAAAAAABCbGQgVW50RiNSbHQAAAAAAAAAAAAAAABSc2x0VW50RiNQeGxAUgAAAAAAAAAAAAp2ZWN0b3JEYXRhYm9vbAEAAAAAUGdQc2VudW0AAAAAUGdQcwAAAABQZ1BDAAAAAExlZnRVbnRGI1JsdAAAAAAAAAAAAAAAAFRvcCBVbnRGI1JsdAAAAAAAAAAAAAAAAFNjbCBVbnRGI1ByY0BZAAAAAAAAAAAAEGNyb3BXaGVuUHJpbnRpbmdib29sAAAAAA5jcm9wUmVjdEJvdHRvbWxvbmcAAAAAAAAADGNyb3BSZWN0TGVmdGxvbmcAAAAAAAAADWNyb3BSZWN0UmlnaHRsb25nAAAAAAAAAAtjcm9wUmVjdFRvcGxvbmcAAAAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0EDQAAAAAABAAAAFo4QklNBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0nEAAAAAAACgABAAAAAAAAAAI4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQAAAAAAAACAAE4QklNBAIAAAAAAAQAAAAAOEJJTQQwAAAAAAACAQE4QklNBC0AAAAAAAYAAQAAAAI4QklNBAgAAAAAABAAAAABAAACQAAAAkAAAAAAOEJJTQQeAAAAAAAEAAAAADhCSU0EGgAAAAADSwAAAAYAAAAAAAAAAAAAADwAAAA8AAAACwQRBDUENwAgBDgEPAQ1BD0EOAAtADEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAADwAAAA8AAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAABudWxsAAAAAgAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAAA8AAAAAFJnaHRsb25nAAAAPAAAAAZzbGljZXNWbExzAAAAAU9iamMAAAABAAAAAAAFc2xpY2UAAAASAAAAB3NsaWNlSURsb25nAAAAAAAAAAdncm91cElEbG9uZwAAAAAAAAAGb3JpZ2luZW51bQAAAAxFU2xpY2VPcmlnaW4AAAANYXV0b0dlbmVyYXRlZAAAAABUeXBlZW51bQAAAApFU2xpY2VUeXBlAAAAAEltZyAAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3Ag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b3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTEtMDVUMTk6NTE6MzErMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMTEtMDVUMTk6NTE6MzErMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTExLTA1VDE5OjUxOjMxKzAzOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmMxMzJjNDExLWMwYTUtMjg0MS1iYjgxLTRjZDA2ZmZlMDU2MSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjIyZTVhYzcxLTdiYzgtMDc0YS1hMTNkLWM2MWZiMWUzYTk5NSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjFiYzdhZjBhLTUwNjktYmQ0Ni05ZmU0LWRjNmMzNDFhZDEwYyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxYmM3YWYwYS01MDY5LWJkNDYtOWZlNC1kYzZjMzQxYWQxMGMiIHN0RXZ0OndoZW49IjIwMjEtMTEtMDVUMTk6NTE6MzErMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzEzMmM0MTEtYzBhNS0yODQxLWJiODEtNGNkMDZmZmUwNTYxIiBzdEV2dDp3aGVuPSIyMDIxLTExLTA1VDE5OjUxOjMxKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPkFCOEEzMTkwMjI5NTE4Q0E5RjI4MURCNjA3RTYwRkUxPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/7gAOQWRvYmUAZEAAAAAB/9sAhAACAgICAgICAgICAwICAgMEAwICAwQFBAQEBAQFBgUFBQUFBQYGBwcIBwcGCQkKCgkJDAwMDAwMDAwMDAwMDAwMAQMDAwUEBQkGBgkNCgkKDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAA8ADwDAREAAhEBAxEB/90ABAAI/8QBogAAAAcBAQEBAQAAAAAAAAAABAUDAgYBAAcICQoLAQACAgMBAQEBAQAAAAAAAAABAAIDBAUGBwgJCgsQAAIBAwMCBAIGBwMEAgYCcwECAxEEAAUhEjFBUQYTYSJxgRQykaEHFbFCI8FS0eEzFmLwJHKC8SVDNFOSorJjc8I1RCeTo7M2F1RkdMPS4ggmgwkKGBmElEVGpLRW01UoGvLj88TU5PRldYWVpbXF1eX1ZnaGlqa2xtbm9jdHV2d3h5ent8fX5/c4SFhoeIiYqLjI2Oj4KTlJWWl5iZmpucnZ6fkqOkpaanqKmqq6ytrq+hEAAgIBAgMFBQQFBgQIAwNtAQACEQMEIRIxQQVRE2EiBnGBkTKhsfAUwdHhI0IVUmJy8TMkNEOCFpJTJaJjssIHc9I14kSDF1STCAkK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";

  var routeError = {
    en: "Plugin  <font color=\"deepskyblue\">content</font> leads nowhere",
    ru: "\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u043B\u0430\u0433\u0438\u043D\u0430 <font color=\"deepskyblue\">content</font>. \u041C\u0430\u0440\u0448\u0440\u0443\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"
  };

  var Content = /*#__PURE__*/function () {
    function Content(vnjs, $view) {
      _classCallCheck(this, Content);

      _defineProperty(this, "open", false);

      _defineProperty(this, "data", null);

      this.__vnjs = vnjs;
      this.$view = $view;
    }

    _createClass(Content, [{
      key: "getData",
      value: function getData() {
        var sceneName = this.__vnjs.state.sceneName;
        var currentContent = this.__vnjs.tree[sceneName].content;

        if (currentContent) {
          return currentContent;
        }

        var globalontent = this.__vnjs.tree.$root.content;

        if (globalontent) {
          return globalontent;
        } else {
          this.__vnjs.emit('error', {
            en: "File <font color=\"cyan\">$root/content.yaml</font> is missing",
            ru: "\u0424\u0430\u0439\u043B <font color=\"cyan\">$root/content.yaml</font> \u043E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442"
          });
        }
      }
    }, {
      key: "reset",
      value: function reset() {
        this.$view.empty();
      }
    }, {
      key: "show",
      value: function show() {
        this.$view.show();
        this.open = true;
      }
    }, {
      key: "hide",
      value: function hide() {
        this.$view.hide();
        this.open = false;
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        this.reset();
        this.data = this.getData();
        this.data.forEach(function (item, parentIndex) {
          var $parent = $("<li class=\"stage-parent state-parent-".concat(parentIndex, "\"><div class=\"stage-vol stage-item\"></div><ul class=\"stage-children\"></ul></li>"));
          /**
           * disabled
           */

          if (item.disabled) {
            _this.disabled(item.disabled, $parent);
          }
          /**
           * children
           */


          if (item.children) {
            item.children.forEach(function (child, childIndex) {
              var $str = $("<li class=\"stage-child stage-child-".concat(childIndex, " stage-item\"><li>"));

              if (child.disabled) {
                _this.disabled(child.disabled, $str);
              }
              /*
              * children route
              */


              var childRoute = Object.keys(child).filter(function (obj) {
                if (obj !== 'disabled' && obj !== 'children') return true;
              });
              $str.attr('data-label', childRoute).html(child[childRoute]);
              $parent.find('ul').append($str);
            });
          }
          /**
           * route
           */


          var parentRoute = Object.keys(item).filter(function (obj) {
            if (obj !== 'disabled' && obj !== 'children') return true;
          });
          $parent.find('.stage-vol.stage-item').attr('data-label', parentRoute).html(item[parentRoute]);

          _this.$view.append($parent);
        });
      }
      /**
       * disabled = !disabled
       */

    }, {
      key: "switchItem",
      value: function switchItem(data) {
        var level = String(data.item).split(' ');

        if (level.length === 1) {
          this.__vnjs.tree.$root.content[level[0]].disabled = data.disabled;
        }

        if (level.length === 2) {
          this.__vnjs.tree.$root.content[level[0]].children[level[1]].disabled = data.disabled;
        }
      }
    }, {
      key: "selectItem",
      value: function selectItem(label) {
        if (!this.__vnjs.isRouteExist(label)) {
          this.__vnjs.emit('error', routeError);

          return;
        } else {
          this.hide();

          this.__vnjs.exec({
            jump: label
          });
        }
      }
    }, {
      key: "disabled",
      value: function disabled(obj, $node) {
        if (_typeof(obj) === 'object') {
          for (var key in obj) {
            var _data = this.__vnjs.state.data[key];

            var _obj$key = _slicedToArray(obj[key], 2),
                min = _obj$key[0],
                max = _obj$key[1];

            if (Array.isArray(obj[key])) {
              if (min <= _data && _data <= max) {
                $node.addClass('disabled');
              }
            }

            if (typeof obj[key] === 'string') {
              if (obj[key] === _data) {
                $node.addClass('disabled');
              }
            }
          }
        } else {
          $node.addClass('disabled');
        }
      }
    }]);

    return Content;
  }();

  var $tpl$7 = $("<ul class=\"vnjson__stage component\"></ul>");
  function content () {
    var content = new Content(this, $tpl$7);
    vnjs.store.screen.append($tpl$7);
    /**
     * @ content
     */

    vnjs.on('content', function (data) {
      if (data) {
        content.render();
        content.show();
      } else {
        content.hide();
      }
    });
    /**
     * @ content-switch
     */

    vnjs.on('content-switch', function (data) {
      content.switchItem(data);
    });
    /**
     * BTN MOUSEOVER
     */

    $('.vnjson__hands').on('mouseover', '.vnjson__hand-right', function () {
      $(this).css('opacity', 0.5);
    });
    $('.vnjson__hands').on('mouseout', '.vnjson__hand-right', function () {
      $(this).css('opacity', 1);
    });
    /**
     * SET BTN ICON
     */

    $('.vnjson__hand-right').css('background-image', "url(".concat(icoContent, ")"));
    /**
     * BTN CLICK
     */

    $('.vnjson__hands').on('click', '.vnjson__hand-right', function (e) {
      if (content.open) {
        vnjs.emit('content', false);
        content.open = false;
      } else {
        vnjs.emit('content', true);
        content.open = true;
      }
    });
    $tpl$7.on('click', '.stage-item', function () {
      var label = $(this).data('label');
      content.selectItem(label);
    });
    vnjs.on('dialog-box.click', function () {
      content.hide();
    });
  }

  var icoPlay = "data:image/jpeg;base64,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AABDcHRuYm9vbAAAAAAAQ2xicmJvb2wAAAAAAFJnc01ib29sAAAAAABDcm5DYm9vbAAAAAAAQ250Q2Jvb2wAAAAAAExibHNib29sAAAAAABOZ3R2Ym9vbAAAAAAARW1sRGJvb2wAAAAAAEludHJib29sAAAAAABCY2tnT2JqYwAAAAEAAAAAAABSR0JDAAAAAwAAAABSZCAgZG91YkBv4AAAAAAAAAAAAEdybiBkb3ViQG/gAAAAAAAAAAAAQmwgIGRvdWJAb+AAAAAAAAAAAABCcmRUVW50RiNSbHQAAAAAAAAAAAAAAABCbGQgVW50RiNSbHQAAAAAAAAAAAAAAABSc2x0VW50RiNQeGxAUgAAAAAAAAAAAAp2ZWN0b3JEYXRhYm9vbAEAAAAAUGdQc2VudW0AAAAAUGdQcwAAAABQZ1BDAAAAAExlZnRVbnRGI1JsdAAAAAAAAAAAAAAAAFRvcCBVbnRGI1JsdAAAAAAAAAAAAAAAAFNjbCBVbnRGI1ByY0BZAAAAAAAAAAAAEGNyb3BXaGVuUHJpbnRpbmdib29sAAAAAA5jcm9wUmVjdEJvdHRvbWxvbmcAAAAAAAAADGNyb3BSZWN0TGVmdGxvbmcAAAAAAAAADWNyb3BSZWN0UmlnaHRsb25nAAAAAAAAAAtjcm9wUmVjdFRvcGxvbmcAAAAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0EDQAAAAAABAAAAFo4QklNBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0nEAAAAAAACgABAAAAAAAAAAI4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAA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b2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTEtMDZUMTA6NDA6MzUrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMTEtMDZUMTA6NDA6MzUrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTExLTA2VDEwOjQwOjM1KzAzOjAwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZDMxMzVjMGYtMWYyMi05ZDQ5LTgzYTAtMDFjZjMzY2YzZTUxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmQzMTM1YzBmLTFmMjItOWQ0OS04M2EwLTAxY2YzM2NmM2U1MSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQzMTM1YzBmLTFmMjItOWQ0OS04M2EwLTAxY2YzM2NmM2U1MSI+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPkFCOEEzMTkwMjI5NTE4Q0E5RjI4MURCNjA3RTYwRkUxPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDMxMzVjMGYtMWYyMi05ZDQ5LTgzYTAtMDFjZjMzY2YzZTUxIiBzdEV2dDp3aGVuPSIyMDIxLTExLTA2VDEwOjQwOjM1KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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";

  function voice () {
    var _this = this;

    var prev = null;
    var INDEX = null;
    vnjs.on('$voice', function (data) {
      if (data) {
        $('.vnjson__hand-left').css('background-image', "url(".concat(icoPlay, ")"));
        _this.store.$voice = data;
        INDEX = _this.state.index;
        prev = data;
      } else {
        vnjs.emit('hand-left', false);

        _this.store[prev].stop();

        prev = null;
      }

      if (prev) {
        _this.store[prev].stop();

        prev = null;
      }
    });
    vnjs.on("vnjson.character", function (ctx) {
      if (INDEX) {
        var name = _this.getCurrentLabelBody()[INDEX].$voice;

        _this.store[name].stop();

        vnjs.emit('hand-left', false);
        prev = null;
        INDEX = null;
      }
    });
    vnjs.on('voicePlay', function (data) {
      if (INDEX) {
        if (prev) {
          _this.store[prev].stop();
        }

        var name = _this.getCurrentLabelBody()[INDEX].$voice;

        _this.store[name].play();
      } else {
        //const name = this.getCurrentLabelBody()[INDEX].$voice
        //this.store[name].stop()
        prev = null;
      }
    });
    $('.vnjson__hands').on('mouseover', '.vnjson__hand-left', function () {
      $(this).css('opacity', 0.5);
    });
    $('.vnjson__hands').on('mouseout', '.vnjson__hand-left', function () {
      $(this).css('opacity', 1);
    });
    $('.vnjson__hands').on('click', '.vnjson__hand-left', function (e) {
      if (INDEX === _this.state.index) {
        vnjs.emit('voicePlay');
      }
    });
  }

  function html () {
    var _this = this;

    vnjs.on('postload', function () {
      var htmlChunk = _this.tree.$root.html;

      if (htmlChunk) {
        for (var event in htmlChunk) {
          eventRegistration$1.call(_this, event, htmlChunk[event]);
        }
      }
    });
  }
  function eventRegistration$1(event, tpl) {
    var $tpl = $(tpl);
    $tpl.hide().addClass("component").addClass('event__' + event);
    vnjs.store.screen.append($tpl);
    vnjs.on(event, function (data) {
      if (_typeof(data) === 'object') {
        $tpl.css(data.css);
        $tpl.fadeIn();
      } else if (data) {
        $tpl.fadeIn();
      } else {
        var $src = $tpl;
        $tpl.remove();
        $src.hide();
        vnjs.store.screen.append($tpl);
      }
    });
  }

  function discordLog () {
    var _this = this;

    var webhook;
    var avatar_url = 'https://avatars.githubusercontent.com/u/17809187?s=200&v=4';
    vnjs.on('postload', function () {
      if (_this["package"]) {
        var discordLogParam = _this["package"]['discord-log'];
        if (!discordLogParam) return;
        webhook = discordLogParam.webhook; //avatar_url = discordLogParam.avatar_url
      }
    });
    vnjs.on('discord-log', function (msg) {
      var content = null;

      if (typeof msg === 'string') {
        content = _this["package"].name + ' [ ' + _this.state.sceneName + '.' + _this.state.labelName + ' ]  ' + msg;
      } else {
        content = _this["package"].name + ' [ ' + _this.state.sceneName + '.' + _this.state.labelName + ' ]';
      }

      var params = {
        username: vnjs.state.data.player.name,
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

  var css$d = ".status-bar{\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(0,0,0,0.7);\n  color: gray;\n  width: 100%;\n  height: 4%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 15px;\n  display: none;\n  z-index: 4000;\n}\n.status-bar__status--ready,\n.status-bar__status--help{\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  margin-right: 10px;\n}\n.status-bar__status--ready span{\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: gray;\n  display: inline-block;\n  margin-right: 10px;\n}\n\n.status-bar__status--help span{\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: gray;\n  display: i gray;\n  margin-right: 10px;\n}\n\n.status-bar__status--ready.status-active span{\n    background-color: lightgreen;\n}\n.status-bar__status--ready.status-active {\n   color: white;\n}\n.status-bar__status--help.status-active span{\n    background-color: red;\n}\n.status-bar__status--help.status-active{\n  color: white;\n}\n\n\n.status-bar__image-containter{\n  position: absolute;\n  top: 40px;\n  right: 0;\n  display: flex;\n\n}\n.status-bar__image{\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100px;\n  height: 100px;\n}\n.status-bar__image:hover{\n  cursor: pointer;\n}\n\n/*\n * PLAYER\n */\n\n.status-bar__player-name{\n  padding-left: 10px;\n}\n.status-bar__player{\n  display: flex;\n  align-items: center;\n}\n.status-bar__logo-wrapper{\n  border: 2px solid gray;\n  border-radius: 50%;\n  width: 26px;\n  height: 26px;\n}\n#status-bar__player-logo{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-48.0%, -50.5%);\n  width: 24px;\n  height: 24px;\n}\n";
  n(css$d,{});

  var tpl$4 = "<div class=\"status-bar component\">\n  <div class=\"status-bar__player\">\n    <div class=\"status-bar__logo-wrapper\"><img id=\"status-bar__player-logo\"></div>\n    <span class=\"status-bar__player-name\"></span>\n  </div>\n  <div class=\"status-bar__status\">\n      <span class=\"status-bar__item status-bar__status--ready\"><span></span>Готов</span>\n      <span class=\"status-bar__item status-bar__status--help\"><span></span>Помощь</span>\n      <div class=\"status-bar__image-containter\">\n          <div class=\"status-bar__image status-bar__image--first\"></div>\n          <div class=\"status-bar__image status-bar__image--last\"></div>\n      </div>\n  </div>\n\n</div>";

  var playerImg = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%20%20%20%3Cpath%20fill%3D%22gray%22%20d%3D%22M12%2C19.2C9.5%2C19.2%207.29%2C17.92%206%2C16C6.03%2C14%2010%2C12.9%2012%2C12.9C14%2C12.9%2017.97%2C14%2018%2C16C16.71%2C17.92%2014.5%2C19.2%2012%2C19.2M12%2C5A3%2C3%200%200%2C1%2015%2C8A3%2C3%200%200%2C1%2012%2C11A3%2C3%200%200%2C1%209%2C8A3%2C3%200%200%2C1%2012%2C5M12%2C2A10%2C10%200%200%2C0%202%2C12A10%2C10%200%200%2C0%2012%2C22A10%2C10%200%200%2C0%2022%2C12C22%2C6.47%2017.5%2C2%2012%2C2Z%22%20%2F%3E%3C%2Fsvg%3E";

  var readyImg = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%20%20%20%3Cpath%20fill%3D%22%2300ff00%22%20d%3D%22M12%202C6.5%202%202%206.5%202%2012S6.5%2022%2012%2022%2022%2017.5%2022%2012%2017.5%202%2012%202M10%2017L5%2012L6.41%2010.59L10%2014.17L17.59%206.58L19%208L10%2017Z%22%20%2F%3E%3C%2Fsvg%3E";

  var helpImg = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%20%20%20%3Cpath%20fill%3D%22red%22%20d%3D%22M15.07%2C11.25L14.17%2C12.17C13.45%2C12.89%2013%2C13.5%2013%2C15H11V14.5C11%2C13.39%2011.45%2C12.39%2012.17%2C11.67L13.41%2C10.41C13.78%2C10.05%2014%2C9.55%2014%2C9C14%2C7.89%2013.1%2C7%2012%2C7A2%2C2%200%200%2C0%2010%2C9H8A4%2C4%200%200%2C1%2012%2C5A4%2C4%200%200%2C1%2016%2C9C16%2C9.88%2015.64%2C10.67%2015.07%2C11.25M13%2C19H11V17H13M12%2C2A10%2C10%200%200%2C0%202%2C12A10%2C10%200%200%2C0%2012%2C22A10%2C10%200%200%2C0%2022%2C12C22%2C6.47%2017.5%2C2%2012%2C2Z%22%20%2F%3E%3C%2Fsvg%3E";

  var checkImg = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2023.6%2023.6%22%3E%20%20%20%3Cpath%20fill%3D%22%23fcc23c%22%20d%3D%22M13%2C13H11V7H13M13%2C17H11V15H13M12%2C2A10%2C10%200%200%2C0%202%2C12A10%2C10%200%200%2C0%2012%2C22A10%2C10%200%200%2C0%2022%2C12A10%2C10%200%200%2C0%2012%2C2Z%22%20%2F%3E%3C%2Fsvg%3E";

  var StatusBar = /*#__PURE__*/function () {
    function StatusBar($view) {
      _classCallCheck(this, StatusBar);

      _defineProperty(this, "PLUGIN_DATA", null);

      _defineProperty(this, "flag", false);

      _defineProperty(this, "MODE", null);

      this.$view = $view;
    }

    _createClass(StatusBar, [{
      key: "show",
      value: function show() {
        this.$view.css('display', 'flex');
        this.flag = true;
        this.controlDBoxPadding(this.MODE);
      }
    }, {
      key: "hide",
      value: function hide() {
        this.$view.hide();
        this.flag = false;
        this.controlDBoxPadding(this.MODE);
      }
    }, {
      key: "handler",
      value: function handler() {
        var isReady = $('.status-bar__image--last').hasClass('status-bar__ready');

        if (!isReady) {
          this.showHelp(false);

          if (this.PLUGIN_DATA.onHelp) {
            vnjs.exec(this.PLUGIN_DATA.onHelp);
          }
        } else {
          this.showReady(false);
          this.showCheck(false);

          if (this.PLUGIN_DATA.onReady) {
            vnjs.exec(this.PLUGIN_DATA.onReady);
          }
        }
      }
    }, {
      key: "checkHandler",
      value: function checkHandler() {
        if (this.PLUGIN_DATA.onCheck) {
          vnjs.exec(this.PLUGIN_DATA.onCheck);
        }

        this.showReady(false);
        this.showCheck(false);
      }
      /**
       * SHOW
       */

    }, {
      key: "showReady",
      value: function showReady(flag) {
        if (vnjs.state.data.readyСheck) {
          this.showCheck(true);
        }

        if (flag) {
          $('.status-bar__image--last').css('background-image', "url(".concat(readyImg, ")")).addClass('status-bar__ready');
        } else {
          $('.status-bar__image--last').css('background-image', 'unset').removeClass('status-bar__ready');
        }
      }
    }, {
      key: "showCheck",
      value: function showCheck(flag) {
        if (flag) {
          $('.status-bar__image--first').css('background-image', "url(".concat(checkImg, ")"));
        } else {
          $('.status-bar__image--first').css('background-image', 'unset');
        }
      }
    }, {
      key: "showHelp",
      value: function showHelp(flag) {
        if (flag) {
          this.showCheck(false);
          $('.status-bar__image--last').css('background-image', "url(".concat(helpImg, ")")).removeClass('status-bar__ready');
        } else {
          $('.status-bar__image--last').css('background-image', 'unset');
        }
      }
    }, {
      key: "controlDBoxPadding",
      value: function controlDBoxPadding(MODE) {
        var _this = this;

        this.MODE = MODE;
        /**
         * Если плагин dialog-box и плагин status-bar находятся в одном объекте
         * - dialog-box: fullscreen
         *   status-bar: true
         * Плагин dialog-box отработает быстрее, чем плагин status-bar
         * Поэтому переменная flag будет равна изначальному значению false
         * Но, небольшая задержка исправит это
         */

        setTimeout(function () {
          if (_this.MODE === 'mode-fullscreen' && _this.flag) {
            $('.dialog-box').css('padding-top', '30px');
          } else {
            $('.dialog-box').css('padding-top', '10px');
          }
        }, 100);
      }
    }]);

    return StatusBar;
  }();

  function statusBar () {
    var _this = this;

    this.state.data.readyСheck = false;
    var $tpl = $(tpl$4);
    vnjs.store.screen.append($tpl);
    var statusBar = new StatusBar($tpl);
    /**
     * @ event
     */

    vnjs.on('status-bar', function (param) {
      if (param === 'clear') {
        statusBar.showReady(false);
        statusBar.showHelp(false);
        statusBar.showCheck(false);
      } else if (param) {
        statusBar.PLUGIN_DATA = param;
        statusBar.show();
      } else {
        _this.state.data.readyСheck = false;
        statusBar.hide();
      }
    });
    /**
     * Player
     */

    vnjs.on('player-load', function (name) {
      $('#status-bar__player-logo').attr('src', playerImg);
      $('.status-bar__player-name').html(_this.state.data.player.name);
    });
    /**
     * help | ready
     */

    $('.status-bar__status--ready').on('click', function () {
      statusBar.showReady(true);
    });
    $('.status-bar__status--help').on('click', function () {
      return statusBar.showHelp(true);
    });
    $('.status-bar__image--first').on('click', function () {
      return statusBar.checkHandler();
    });
    $('.status-bar__image--last').on('click', function () {
      return statusBar.handler();
    });
    vnjs.on('dialog-box.mode', function (MODE) {
      return statusBar.controlDBoxPadding(MODE);
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
          _this.state.data.player = JSON.parse(response);
          vnjs.emit('player-load', _this.state.data.player.name);
        }
      });
    } catch (err) {
      this.state.data.player = {
        name: 'mcap_uknown',
        uuid: new Date().toLocaleString()
      };
      vnjs.emit('player-load', this.state.data.player.name);
    }
  }

  function query$1(request) {
    return new Promise(function (resolve, reject) {
      try {
        window.mcefQuery({
          request: request,
          persistent: true,
          onSuccess: function onSuccess(response) {
            resolve(JSON.parse(response));
          },
          onFailure: function onFailure(errCode, errMsg) {
            reject(JSON.parse(errMsg));
          }
        });
      } catch (err) {
        reject(JSON.parse(err));
      }
    });
  }

  function getTime() {
    return Math.floor(new Date().getTime() / 1000);
  }

  function mcExec () {
    vnjs.on('mc-exec', function (param) {
      var data = {
        "data": param.data,
        "action": param.action,
        "uuid": "",
        "type": param.type,
        "dts": getTime(),
        "ars": true,
        "player": ""
      };
      var str = "CMD_".concat(JSON.stringify(data));
      query$1(str).then(function (res) {
        var data = JSON.stringify(res, null, 2);
        console.log(data);
        /*
        if(param.callback){
            param.callback(data)
        }
        */
      })["catch"](function (err) {
        var data = JSON.stringify(err, null, 2);
        console.log(data);

        if (param.callback) {
          param.callback(data);
        }
      });
    });
  }

  var blockHandler = {
    /*
    isMinecraft (){
        if(!vnjs.store.MINECRAFT?.BLOCK){
            vnjs.emit('vnjson.error', `Плагин работает только внутри Minecraft`)
            return false
        }
        return true
    },*/
    "mc-get-block": function mcGetBlock(args) {
      var block = vnjs.store.MINECRAFT.BLOCK;
      var flag = false;

      for (var key in args) {
        if (key === block.data.id) {
          flag = true;
          vnjs.exec(args[key]);
        }
      }

      if (!flag) {
        if (args["default"]) {
          vnjs.exec(args["default"]);
        }
      }
    },
    handler: function handler(args, prop) {
      var block = vnjs.store.MINECRAFT.BLOCK;
      var flag = false;

      for (var key in args) {
        var _key$split = key.split('.'),
            _key$split2 = _slicedToArray(_key$split, 2),
            id = _key$split2[0],
            param = _key$split2[1];

        var blockParam = null;

        for (var blockKey in block.data.state) {
          if (blockKey.includes("name=".concat(prop))) {
            blockParam = block.data.state[blockKey].toLowerCase();
          }
        }

        if (id === block.data.id && blockParam === param) {
          flag = true;
          vnjs.exec(args[key]);
        }
      }

      if (!flag) {
        if (args["default"]) {
          vnjs.exec(args["default"]);
        }
      }
    }
  };

  function query(request) {
    return new Promise(function (resolve, reject) {
      try {
        window.mcefQuery({
          request: request,
          persistent: true,
          onSuccess: function onSuccess(response) {
            resolve(JSON.parse(response));
          },
          onFailure: function onFailure(errCode, errMsg) {
            reject(JSON.parse(errMsg));
          }
        });
      } catch (err) {
        reject(JSON.parse(err));
      }
    });
  }

  function mcGet () {
    vnjs.on("mc-get", function (param) {
      var _param$pos = _slicedToArray(param.pos, 3),
          x = _param$pos[0],
          y = _param$pos[1],
          z = _param$pos[2];

      var data = {
        request: param.request,
        slot: param.slot || 0,
        posX: x || 0,
        posY: y || 0,
        posZ: z || 0,
        data: ""
      };
      var str = "GET_".concat(JSON.stringify(data));
      query(str).then(function (res) {
        res.data = JSON.parse(res.data);
        console.log(res);
        vnjs.store.MINECRAFT = vnjs.store.MINECRAFT || {};
        vnjs.store.MINECRAFT[param.request] = res;

        if (param.callback) {
          param.callback(response);
        }
      })["catch"](function (err) {
        if (param.callback) {
          param.callback(err);
        }
      });
    });
  }
  /*
  function blockHandler (prop){
      const block = vnjs.store.MINECRAFT.BLOCK;
      let propValue = null;
      for (let key in block.data.state) {
          if (key.includes(`name=${prop}`)) {
              propValue = block.data.state[key].toLowerCase();
          }
      }
      if (args.id === block.data.id && args[prop] === propValue) {
          vnjs.exec(args.exec);
      }
  }*/

  /**
   * сравнение по ID
   */

  vnjs.on("mc-get-block", function (args) {
    setTimeout(function () {
      blockHandler["mc-get-block"](args);
    }, 100);
  });
  /**
   * сравнение по цвету
   */

  vnjs.on("mc-get-block-color", function (args) {
    setTimeout(function () {
      blockHandler.handler(args, "color");
    }, 100);
  });
  /**
   * сравнение по типу
   */

  vnjs.on("mc-get-block-variant", function (args) {
    setTimeout(function () {
      blockHandler.handler(args, "variant");
    }, 100);
  });
  /**
   * сравнение по направлению раположения
   */

  vnjs.on("mc-get-block-axis", function (args) {
    setTimeout(function () {
      blockHandler.handler(args, "axis");
    }, 100);
  });
  /**
   * куда смотрит предмет
   */

  vnjs.on("mc-get-block-facing", function (args) {
    setTimeout(function () {
      blockHandler.handler(args, "facing");
    }, 100);
  });

  function mcCheck () {
    var _this = this;

    vnjs.on('mc-check', function (data) {
      if (window.mcefQuery) {
        _this.exec(data["true"]);
      } else {
        _this.exec(data["false"]);
      }
    });
  }

  var css$c = "#paint-board__vnjson{\n  top: 50px;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 0;\n  display: none;\n  box-shadow: 3px 3px 5px rgba(0,0,0,0.3);\n}";
  n(css$c,{});

  function paintBoard () {
    var _this = this;

    vnjs.on('vnjson.mount', function () {
      if (_this["package"]['paint-board']) {
        init();
      }
    });

    var init = function init() {
      var $tpl = $('<iframe id="paint-board__vnjson" src="data/paint-board/index.html" width="800" height="500"></iframe>');
      vnjs.store.screen.append($tpl);
      vnjs.on('paint-board', function (imgID) {
        if (imgID) {
          $tpl.show();
          var url = vnjs.getAssetByName(imgID).url;
          var IMG = "".concat(location.protocol, "//").concat(location.host, "/").concat(url);
          var win = document.querySelector("iframe#paint-board__vnjson").contentWindow;
          win.postMessage({
            IMG: IMG
          }, location.origin + "/data/paint-board/index.html");
        } else {
          $tpl.hide();
        }
      });
    };
  }

  function clipBoard () {
    var _this = this;

    var $tpl = $('<textarea class="vnjson__clipboard" style="position: absolute; left:-99999px;top:0;"></textarea>');
    vnjs.store.screen.append($tpl);
    var flag = false;
    vnjs.on('clipboard', function (data) {
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
        copyToClipboard(document.querySelector('.vnjson__clipboard'));
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

  var css$b = "@charset \"UTF-8\";\n.vjs-modal-dialog .vjs-modal-dialog-content, .video-js .vjs-modal-dialog, .vjs-button > .vjs-icon-placeholder:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.vjs-button > .vjs-icon-placeholder:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before {\n  text-align: center;\n}\n\n@font-face {\n  font-family: VideoJS;\n  src: url(data:application/font-woff;charset=utf-8;base64,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) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-play, .video-js .vjs-play-control .vjs-icon-placeholder, .video-js .vjs-big-play-button .vjs-icon-placeholder:before {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-play:before, .video-js .vjs-play-control .vjs-icon-placeholder:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before {\n  content: \"\\f101\";\n}\n\n.vjs-icon-play-circle {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-play-circle:before {\n  content: \"\\f102\";\n}\n\n.vjs-icon-pause, .video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-pause:before, .video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before {\n  content: \"\\f103\";\n}\n\n.vjs-icon-volume-mute, .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-volume-mute:before, .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before {\n  content: \"\\f104\";\n}\n\n.vjs-icon-volume-low, .video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-volume-low:before, .video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before {\n  content: \"\\f105\";\n}\n\n.vjs-icon-volume-mid, .video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-volume-mid:before, .video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before {\n  content: \"\\f106\";\n}\n\n.vjs-icon-volume-high, .video-js .vjs-mute-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-volume-high:before, .video-js .vjs-mute-control .vjs-icon-placeholder:before {\n  content: \"\\f107\";\n}\n\n.vjs-icon-fullscreen-enter, .video-js .vjs-fullscreen-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-fullscreen-enter:before, .video-js .vjs-fullscreen-control .vjs-icon-placeholder:before {\n  content: \"\\f108\";\n}\n\n.vjs-icon-fullscreen-exit, .video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-fullscreen-exit:before, .video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before {\n  content: \"\\f109\";\n}\n\n.vjs-icon-square {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-square:before {\n  content: \"\\f10a\";\n}\n\n.vjs-icon-spinner {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-spinner:before {\n  content: \"\\f10b\";\n}\n\n.vjs-icon-subtitles, .video-js .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder, .video-js .vjs-subtitles-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-subtitles:before, .video-js .vjs-subs-caps-button .vjs-icon-placeholder:before,\n.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder:before, .video-js .vjs-subtitles-button .vjs-icon-placeholder:before {\n  content: \"\\f10c\";\n}\n\n.vjs-icon-captions, .video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder, .video-js .vjs-captions-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-captions:before, .video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder:before, .video-js .vjs-captions-button .vjs-icon-placeholder:before {\n  content: \"\\f10d\";\n}\n\n.vjs-icon-chapters, .video-js .vjs-chapters-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-chapters:before, .video-js .vjs-chapters-button .vjs-icon-placeholder:before {\n  content: \"\\f10e\";\n}\n\n.vjs-icon-share {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-share:before {\n  content: \"\\f10f\";\n}\n\n.vjs-icon-cog {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-cog:before {\n  content: \"\\f110\";\n}\n\n.vjs-icon-circle, .vjs-seek-to-live-control .vjs-icon-placeholder, .video-js .vjs-volume-level, .video-js .vjs-play-progress {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-circle:before, .vjs-seek-to-live-control .vjs-icon-placeholder:before, .video-js .vjs-volume-level:before, .video-js .vjs-play-progress:before {\n  content: \"\\f111\";\n}\n\n.vjs-icon-circle-outline {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-circle-outline:before {\n  content: \"\\f112\";\n}\n\n.vjs-icon-circle-inner-circle {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-circle-inner-circle:before {\n  content: \"\\f113\";\n}\n\n.vjs-icon-hd {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-hd:before {\n  content: \"\\f114\";\n}\n\n.vjs-icon-cancel, .video-js .vjs-control.vjs-close-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-cancel:before, .video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before {\n  content: \"\\f115\";\n}\n\n.vjs-icon-replay, .video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-replay:before, .video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before {\n  content: \"\\f116\";\n}\n\n.vjs-icon-facebook {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-facebook:before {\n  content: \"\\f117\";\n}\n\n.vjs-icon-gplus {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-gplus:before {\n  content: \"\\f118\";\n}\n\n.vjs-icon-linkedin {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-linkedin:before {\n  content: \"\\f119\";\n}\n\n.vjs-icon-twitter {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-twitter:before {\n  content: \"\\f11a\";\n}\n\n.vjs-icon-tumblr {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-tumblr:before {\n  content: \"\\f11b\";\n}\n\n.vjs-icon-pinterest {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-pinterest:before {\n  content: \"\\f11c\";\n}\n\n.vjs-icon-audio-description, .video-js .vjs-descriptions-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-audio-description:before, .video-js .vjs-descriptions-button .vjs-icon-placeholder:before {\n  content: \"\\f11d\";\n}\n\n.vjs-icon-audio, .video-js .vjs-audio-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-audio:before, .video-js .vjs-audio-button .vjs-icon-placeholder:before {\n  content: \"\\f11e\";\n}\n\n.vjs-icon-next-item {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-next-item:before {\n  content: \"\\f11f\";\n}\n\n.vjs-icon-previous-item {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-previous-item:before {\n  content: \"\\f120\";\n}\n\n.vjs-icon-picture-in-picture-enter, .video-js .vjs-picture-in-picture-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-picture-in-picture-enter:before, .video-js .vjs-picture-in-picture-control .vjs-icon-placeholder:before {\n  content: \"\\f121\";\n}\n\n.vjs-icon-picture-in-picture-exit, .video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-picture-in-picture-exit:before, .video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder:before {\n  content: \"\\f122\";\n}\n\n.video-js {\n  display: block;\n  vertical-align: top;\n  box-sizing: border-box;\n  color: #fff;\n  background-color: #000;\n  position: relative;\n  padding: 0;\n  font-size: 10px;\n  line-height: 1;\n  font-weight: normal;\n  font-style: normal;\n  font-family: Arial, Helvetica, sans-serif;\n  word-break: initial;\n}\n.video-js:-moz-full-screen {\n  position: absolute;\n}\n.video-js:-webkit-full-screen {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.video-js[tabindex=\"-1\"] {\n  outline: none;\n}\n\n.video-js *,\n.video-js *:before,\n.video-js *:after {\n  box-sizing: inherit;\n}\n\n.video-js ul {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  list-style-position: outside;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.video-js.vjs-fluid,\n.video-js.vjs-16-9,\n.video-js.vjs-4-3,\n.video-js.vjs-9-16,\n.video-js.vjs-1-1 {\n  width: 100%;\n  max-width: 100%;\n  height: 0;\n}\n\n.video-js.vjs-16-9 {\n  padding-top: 56.25%;\n}\n\n.video-js.vjs-4-3 {\n  padding-top: 75%;\n}\n\n.video-js.vjs-9-16 {\n  padding-top: 177.7777777778%;\n}\n\n.video-js.vjs-1-1 {\n  padding-top: 100%;\n}\n\n.video-js.vjs-fill {\n  width: 100%;\n  height: 100%;\n}\n\n.video-js .vjs-tech {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody.vjs-full-window {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\n\n.vjs-full-window .video-js.vjs-fullscreen {\n  position: fixed;\n  overflow: hidden;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.video-js.vjs-fullscreen:not(.vjs-ios-native-fs) {\n  width: 100% !important;\n  height: 100% !important;\n  padding-top: 0 !important;\n}\n\n.video-js.vjs-fullscreen.vjs-user-inactive {\n  cursor: none;\n}\n\n.vjs-hidden {\n  display: none !important;\n}\n\n.vjs-disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n\n.video-js .vjs-offscreen {\n  height: 1px;\n  left: -9999px;\n  position: absolute;\n  top: 0;\n  width: 1px;\n}\n\n.vjs-lock-showing {\n  display: block !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n\n.vjs-no-js {\n  padding: 20px;\n  color: #fff;\n  background-color: #000;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  width: 300px;\n  height: 150px;\n  margin: 0px auto;\n}\n\n.vjs-no-js a,\n.vjs-no-js a:visited {\n  color: #66A8CC;\n}\n\n.video-js .vjs-big-play-button {\n  font-size: 3em;\n  line-height: 1.5em;\n  height: 1.63332em;\n  width: 3em;\n  display: block;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 0;\n  cursor: pointer;\n  opacity: 1;\n  border: 0.06666em solid #fff;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  border-radius: 0.3em;\n  transition: all 0.4s;\n}\n.vjs-big-play-centered .vjs-big-play-button {\n  top: 50%;\n  left: 50%;\n  margin-top: -0.81666em;\n  margin-left: -1.5em;\n}\n\n.video-js:hover .vjs-big-play-button,\n.video-js .vjs-big-play-button:focus {\n  border-color: #fff;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n  transition: all 0s;\n}\n\n.vjs-controls-disabled .vjs-big-play-button,\n.vjs-has-started .vjs-big-play-button,\n.vjs-using-native-controls .vjs-big-play-button,\n.vjs-error .vjs-big-play-button {\n  display: none;\n}\n\n.vjs-has-started.vjs-paused.vjs-show-big-play-button-on-pause .vjs-big-play-button {\n  display: block;\n}\n\n.video-js button {\n  background: none;\n  border: none;\n  color: inherit;\n  display: inline-block;\n  font-size: inherit;\n  line-height: inherit;\n  text-transform: none;\n  text-decoration: none;\n  transition: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.vjs-control .vjs-button {\n  width: 100%;\n  height: 100%;\n}\n\n.video-js .vjs-control.vjs-close-button {\n  cursor: pointer;\n  height: 3em;\n  position: absolute;\n  right: 0;\n  top: 0.5em;\n  z-index: 2;\n}\n.video-js .vjs-modal-dialog {\n  background: rgba(0, 0, 0, 0.8);\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0));\n  overflow: auto;\n}\n\n.video-js .vjs-modal-dialog > * {\n  box-sizing: border-box;\n}\n\n.vjs-modal-dialog .vjs-modal-dialog-content {\n  font-size: 1.2em;\n  line-height: 1.5;\n  padding: 20px 24px;\n  z-index: 1;\n}\n\n.vjs-menu-button {\n  cursor: pointer;\n}\n\n.vjs-menu-button.vjs-disabled {\n  cursor: default;\n}\n\n.vjs-workinghover .vjs-menu-button.vjs-disabled:hover .vjs-menu {\n  display: none;\n}\n\n.vjs-menu .vjs-menu-content {\n  display: block;\n  padding: 0;\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  overflow: auto;\n}\n\n.vjs-menu .vjs-menu-content > * {\n  box-sizing: border-box;\n}\n\n.vjs-scrubbing .vjs-control.vjs-menu-button:hover .vjs-menu {\n  display: none;\n}\n\n.vjs-menu li {\n  list-style: none;\n  margin: 0;\n  padding: 0.2em 0;\n  line-height: 1.4em;\n  font-size: 1.2em;\n  text-align: center;\n  text-transform: lowercase;\n}\n\n.vjs-menu li.vjs-menu-item:focus,\n.vjs-menu li.vjs-menu-item:hover,\n.js-focus-visible .vjs-menu li.vjs-menu-item:hover {\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n}\n\n.vjs-menu li.vjs-selected,\n.vjs-menu li.vjs-selected:focus,\n.vjs-menu li.vjs-selected:hover,\n.js-focus-visible .vjs-menu li.vjs-selected:hover {\n  background-color: #fff;\n  color: #2B333F;\n}\n\n.video-js .vjs-menu *:not(.vjs-selected):focus:not(:focus-visible),\n.js-focus-visible .vjs-menu *:not(.vjs-selected):focus:not(.focus-visible) {\n  background: none;\n}\n\n.vjs-menu li.vjs-menu-title {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1em;\n  line-height: 2em;\n  padding: 0;\n  margin: 0 0 0.3em 0;\n  font-weight: bold;\n  cursor: default;\n}\n\n.vjs-menu-button-popup .vjs-menu {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  width: 10em;\n  left: -3em;\n  height: 0em;\n  margin-bottom: 1.5em;\n  border-top-color: rgba(43, 51, 63, 0.7);\n}\n\n.vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  position: absolute;\n  width: 100%;\n  bottom: 1.5em;\n  max-height: 15em;\n}\n\n.vjs-layout-tiny .vjs-menu-button-popup .vjs-menu .vjs-menu-content,\n.vjs-layout-x-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n  max-height: 5em;\n}\n\n.vjs-layout-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n  max-height: 10em;\n}\n\n.vjs-layout-medium .vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n  max-height: 14em;\n}\n\n.vjs-layout-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content,\n.vjs-layout-x-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content,\n.vjs-layout-huge .vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n  max-height: 25em;\n}\n\n.vjs-workinghover .vjs-menu-button-popup.vjs-hover .vjs-menu,\n.vjs-menu-button-popup .vjs-menu.vjs-lock-showing {\n  display: block;\n}\n\n.video-js .vjs-menu-button-inline {\n  transition: all 0.4s;\n  overflow: hidden;\n}\n\n.video-js .vjs-menu-button-inline:before {\n  width: 2.222222222em;\n}\n\n.video-js .vjs-menu-button-inline:hover,\n.video-js .vjs-menu-button-inline:focus,\n.video-js .vjs-menu-button-inline.vjs-slider-active,\n.video-js.vjs-no-flex .vjs-menu-button-inline {\n  width: 12em;\n}\n\n.vjs-menu-button-inline .vjs-menu {\n  opacity: 0;\n  height: 100%;\n  width: auto;\n  position: absolute;\n  left: 4em;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  transition: all 0.4s;\n}\n\n.vjs-menu-button-inline:hover .vjs-menu,\n.vjs-menu-button-inline:focus .vjs-menu,\n.vjs-menu-button-inline.vjs-slider-active .vjs-menu {\n  display: block;\n  opacity: 1;\n}\n\n.vjs-no-flex .vjs-menu-button-inline .vjs-menu {\n  display: block;\n  opacity: 1;\n  position: relative;\n  width: auto;\n}\n\n.vjs-no-flex .vjs-menu-button-inline:hover .vjs-menu,\n.vjs-no-flex .vjs-menu-button-inline:focus .vjs-menu,\n.vjs-no-flex .vjs-menu-button-inline.vjs-slider-active .vjs-menu {\n  width: auto;\n}\n\n.vjs-menu-button-inline .vjs-menu-content {\n  width: auto;\n  height: 100%;\n  margin: 0;\n  overflow: hidden;\n}\n\n.video-js .vjs-control-bar {\n  display: none;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 3em;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n}\n\n.vjs-has-started .vjs-control-bar {\n  display: flex;\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.1s, opacity 0.1s;\n}\n\n.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  visibility: visible;\n  opacity: 0;\n  pointer-events: none;\n  transition: visibility 1s, opacity 1s;\n}\n\n.vjs-controls-disabled .vjs-control-bar,\n.vjs-using-native-controls .vjs-control-bar,\n.vjs-error .vjs-control-bar {\n  display: none !important;\n}\n\n.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  opacity: 1;\n  visibility: visible;\n}\n\n.vjs-has-started.vjs-no-flex .vjs-control-bar {\n  display: table;\n}\n\n.video-js .vjs-control {\n  position: relative;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 4em;\n  flex: none;\n}\n\n.vjs-button > .vjs-icon-placeholder:before {\n  font-size: 1.8em;\n  line-height: 1.67;\n}\n\n.vjs-button > .vjs-icon-placeholder {\n  display: block;\n}\n\n.video-js .vjs-control:focus:before,\n.video-js .vjs-control:hover:before,\n.video-js .vjs-control:focus {\n  text-shadow: 0em 0em 1em white;\n}\n\n.video-js .vjs-control-text {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.vjs-no-flex .vjs-control {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.video-js .vjs-custom-control-spacer {\n  display: none;\n}\n\n.video-js .vjs-progress-control {\n  cursor: pointer;\n  flex: auto;\n  display: flex;\n  align-items: center;\n  min-width: 4em;\n  touch-action: none;\n}\n\n.video-js .vjs-progress-control.disabled {\n  cursor: default;\n}\n\n.vjs-live .vjs-progress-control {\n  display: none;\n}\n\n.vjs-liveui .vjs-progress-control {\n  display: flex;\n  align-items: center;\n}\n\n.vjs-no-flex .vjs-progress-control {\n  width: auto;\n}\n\n.video-js .vjs-progress-holder {\n  flex: auto;\n  transition: all 0.2s;\n  height: 0.3em;\n}\n\n.video-js .vjs-progress-control .vjs-progress-holder {\n  margin: 0 10px;\n}\n\n.video-js .vjs-progress-control:hover .vjs-progress-holder {\n  font-size: 1.6666666667em;\n}\n\n.video-js .vjs-progress-control:hover .vjs-progress-holder.disabled {\n  font-size: 1em;\n}\n\n.video-js .vjs-progress-holder .vjs-play-progress,\n.video-js .vjs-progress-holder .vjs-load-progress,\n.video-js .vjs-progress-holder .vjs-load-progress div {\n  position: absolute;\n  display: block;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  width: 0;\n}\n\n.video-js .vjs-play-progress {\n  background-color: #fff;\n}\n.video-js .vjs-play-progress:before {\n  font-size: 0.9em;\n  position: absolute;\n  right: -0.5em;\n  top: -0.3333333333em;\n  z-index: 1;\n}\n\n.video-js .vjs-load-progress {\n  background: rgba(115, 133, 159, 0.5);\n}\n\n.video-js .vjs-load-progress div {\n  background: rgba(115, 133, 159, 0.75);\n}\n\n.video-js .vjs-time-tooltip {\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 0.3em;\n  color: #000;\n  float: right;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  padding: 6px 8px 8px 8px;\n  pointer-events: none;\n  position: absolute;\n  top: -3.4em;\n  visibility: hidden;\n  z-index: 1;\n}\n\n.video-js .vjs-progress-holder:focus .vjs-time-tooltip {\n  display: none;\n}\n\n.video-js .vjs-progress-control:hover .vjs-time-tooltip,\n.video-js .vjs-progress-control:hover .vjs-progress-holder:focus .vjs-time-tooltip {\n  display: block;\n  font-size: 0.6em;\n  visibility: visible;\n}\n\n.video-js .vjs-progress-control.disabled:hover .vjs-time-tooltip {\n  font-size: 1em;\n}\n\n.video-js .vjs-progress-control .vjs-mouse-display {\n  display: none;\n  position: absolute;\n  width: 1px;\n  height: 100%;\n  background-color: #000;\n  z-index: 1;\n}\n\n.vjs-no-flex .vjs-progress-control .vjs-mouse-display {\n  z-index: 0;\n}\n\n.video-js .vjs-progress-control:hover .vjs-mouse-display {\n  display: block;\n}\n\n.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 1s, opacity 1s;\n}\n\n.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display {\n  display: none;\n}\n\n.vjs-mouse-display .vjs-time-tooltip {\n  color: #fff;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.video-js .vjs-slider {\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n  margin: 0 0.45em 0 0.45em;\n  /* iOS Safari */\n  -webkit-touch-callout: none;\n  /* Safari */\n  -webkit-user-select: none;\n  /* Konqueror HTML */\n  /* Firefox */\n  -moz-user-select: none;\n  /* Internet Explorer/Edge */\n  -ms-user-select: none;\n  /* Non-prefixed version, currently supported by Chrome and Opera */\n  user-select: none;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n}\n\n.video-js .vjs-slider.disabled {\n  cursor: default;\n}\n\n.video-js .vjs-slider:focus {\n  text-shadow: 0em 0em 1em white;\n  box-shadow: 0 0 1em #fff;\n}\n\n.video-js .vjs-mute-control {\n  cursor: pointer;\n  flex: none;\n}\n.video-js .vjs-volume-control {\n  cursor: pointer;\n  margin-right: 1em;\n  display: flex;\n}\n\n.video-js .vjs-volume-control.vjs-volume-horizontal {\n  width: 5em;\n}\n\n.video-js .vjs-volume-panel .vjs-volume-control {\n  visibility: visible;\n  opacity: 0;\n  width: 1px;\n  height: 1px;\n  margin-left: -1px;\n}\n\n.video-js .vjs-volume-panel {\n  transition: width 1s;\n}\n.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control, .video-js .vjs-volume-panel:active .vjs-volume-control, .video-js .vjs-volume-panel:focus .vjs-volume-control, .video-js .vjs-volume-panel .vjs-volume-control:active, .video-js .vjs-volume-panel.vjs-hover .vjs-mute-control ~ .vjs-volume-control, .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active {\n  visibility: visible;\n  opacity: 1;\n  position: relative;\n  transition: visibility 0.1s, opacity 0.1s, height 0.1s, width 0.1s, left 0s, top 0s;\n}\n.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-horizontal, .video-js .vjs-volume-panel.vjs-hover .vjs-mute-control ~ .vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-horizontal {\n  width: 5em;\n  height: 3em;\n  margin-right: 0;\n}\n.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-vertical, .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical, .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical, .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical, .video-js .vjs-volume-panel.vjs-hover .vjs-mute-control ~ .vjs-volume-control.vjs-volume-vertical, .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical {\n  left: -3.5em;\n  transition: left 0s;\n}\n.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover, .video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active {\n  width: 10em;\n  transition: width 0.1s;\n}\n.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-mute-toggle-only {\n  width: 4em;\n}\n\n.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {\n  height: 8em;\n  width: 3em;\n  left: -3000em;\n  transition: visibility 1s, opacity 1s, height 1s 1s, width 1s 1s, left 1s 1s, top 1s 1s;\n}\n\n.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {\n  transition: visibility 1s, opacity 1s, height 1s 1s, width 1s, left 1s 1s, top 1s 1s;\n}\n\n.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {\n  width: 5em;\n  height: 3em;\n  visibility: visible;\n  opacity: 1;\n  position: relative;\n  transition: none;\n}\n\n.video-js.vjs-no-flex .vjs-volume-control.vjs-volume-vertical,\n.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {\n  position: absolute;\n  bottom: 3em;\n  left: 0.5em;\n}\n\n.video-js .vjs-volume-panel {\n  display: flex;\n}\n\n.video-js .vjs-volume-bar {\n  margin: 1.35em 0.45em;\n}\n\n.vjs-volume-bar.vjs-slider-horizontal {\n  width: 5em;\n  height: 0.3em;\n}\n\n.vjs-volume-bar.vjs-slider-vertical {\n  width: 0.3em;\n  height: 5em;\n  margin: 1.35em auto;\n}\n\n.video-js .vjs-volume-level {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: #fff;\n}\n.video-js .vjs-volume-level:before {\n  position: absolute;\n  font-size: 0.9em;\n  z-index: 1;\n}\n\n.vjs-slider-vertical .vjs-volume-level {\n  width: 0.3em;\n}\n.vjs-slider-vertical .vjs-volume-level:before {\n  top: -0.5em;\n  left: -0.3em;\n  z-index: 1;\n}\n\n.vjs-slider-horizontal .vjs-volume-level {\n  height: 0.3em;\n}\n.vjs-slider-horizontal .vjs-volume-level:before {\n  top: -0.3em;\n  right: -0.5em;\n}\n\n.video-js .vjs-volume-panel.vjs-volume-panel-vertical {\n  width: 4em;\n}\n\n.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level {\n  height: 100%;\n}\n\n.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level {\n  width: 100%;\n}\n\n.video-js .vjs-volume-vertical {\n  width: 3em;\n  height: 8em;\n  bottom: 8em;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n}\n\n.video-js .vjs-volume-horizontal .vjs-menu {\n  left: -2em;\n}\n\n.video-js .vjs-volume-tooltip {\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 0.3em;\n  color: #000;\n  float: right;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  padding: 6px 8px 8px 8px;\n  pointer-events: none;\n  position: absolute;\n  top: -3.4em;\n  visibility: hidden;\n  z-index: 1;\n}\n\n.video-js .vjs-volume-control:hover .vjs-volume-tooltip,\n.video-js .vjs-volume-control:hover .vjs-progress-holder:focus .vjs-volume-tooltip {\n  display: block;\n  font-size: 1em;\n  visibility: visible;\n}\n\n.video-js .vjs-volume-vertical:hover .vjs-volume-tooltip,\n.video-js .vjs-volume-vertical:hover .vjs-progress-holder:focus .vjs-volume-tooltip {\n  left: 1em;\n  top: -12px;\n}\n\n.video-js .vjs-volume-control.disabled:hover .vjs-volume-tooltip {\n  font-size: 1em;\n}\n\n.video-js .vjs-volume-control .vjs-mouse-display {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background-color: #000;\n  z-index: 1;\n}\n\n.video-js .vjs-volume-horizontal .vjs-mouse-display {\n  width: 1px;\n  height: 100%;\n}\n\n.vjs-no-flex .vjs-volume-control .vjs-mouse-display {\n  z-index: 0;\n}\n\n.video-js .vjs-volume-control:hover .vjs-mouse-display {\n  display: block;\n}\n\n.video-js.vjs-user-inactive .vjs-volume-control .vjs-mouse-display {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 1s, opacity 1s;\n}\n\n.video-js.vjs-user-inactive.vjs-no-flex .vjs-volume-control .vjs-mouse-display {\n  display: none;\n}\n\n.vjs-mouse-display .vjs-volume-tooltip {\n  color: #fff;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.vjs-poster {\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: contain;\n  background-color: #000000;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n}\n\n.vjs-has-started .vjs-poster {\n  display: none;\n}\n\n.vjs-audio.vjs-has-started .vjs-poster {\n  display: block;\n}\n\n.vjs-using-native-controls .vjs-poster {\n  display: none;\n}\n\n.video-js .vjs-live-control {\n  display: flex;\n  align-items: flex-start;\n  flex: auto;\n  font-size: 1em;\n  line-height: 3em;\n}\n\n.vjs-no-flex .vjs-live-control {\n  display: table-cell;\n  width: auto;\n  text-align: left;\n}\n\n.video-js:not(.vjs-live) .vjs-live-control,\n.video-js.vjs-liveui .vjs-live-control {\n  display: none;\n}\n\n.video-js .vjs-seek-to-live-control {\n  align-items: center;\n  cursor: pointer;\n  flex: none;\n  display: inline-flex;\n  height: 100%;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  font-size: 1em;\n  line-height: 3em;\n  width: auto;\n  min-width: 4em;\n}\n\n.vjs-no-flex .vjs-seek-to-live-control {\n  display: table-cell;\n  width: auto;\n  text-align: left;\n}\n\n.video-js.vjs-live:not(.vjs-liveui) .vjs-seek-to-live-control,\n.video-js:not(.vjs-live) .vjs-seek-to-live-control {\n  display: none;\n}\n\n.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge {\n  cursor: auto;\n}\n\n.vjs-seek-to-live-control .vjs-icon-placeholder {\n  margin-right: 0.5em;\n  color: #888;\n}\n\n.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge .vjs-icon-placeholder {\n  color: red;\n}\n\n.video-js .vjs-time-control {\n  flex: none;\n  font-size: 1em;\n  line-height: 3em;\n  min-width: 2em;\n  width: auto;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n\n.vjs-live .vjs-time-control {\n  display: none;\n}\n\n.video-js .vjs-current-time,\n.vjs-no-flex .vjs-current-time {\n  display: none;\n}\n\n.video-js .vjs-duration,\n.vjs-no-flex .vjs-duration {\n  display: none;\n}\n\n.vjs-time-divider {\n  display: none;\n  line-height: 3em;\n}\n\n.vjs-live .vjs-time-divider {\n  display: none;\n}\n\n.video-js .vjs-play-control {\n  cursor: pointer;\n}\n\n.video-js .vjs-play-control .vjs-icon-placeholder {\n  flex: none;\n}\n\n.vjs-text-track-display {\n  position: absolute;\n  bottom: 3em;\n  left: 0;\n  right: 0;\n  top: 0;\n  pointer-events: none;\n}\n\n.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display {\n  bottom: 1em;\n}\n\n.video-js .vjs-text-track {\n  font-size: 1.4em;\n  text-align: center;\n  margin-bottom: 0.1em;\n}\n\n.vjs-subtitles {\n  color: #fff;\n}\n\n.vjs-captions {\n  color: #fc6;\n}\n\n.vjs-tt-cue {\n  display: block;\n}\n\nvideo::-webkit-media-text-track-display {\n  transform: translateY(-3em);\n}\n\n.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display {\n  transform: translateY(-1.5em);\n}\n\n.video-js .vjs-picture-in-picture-control {\n  cursor: pointer;\n  flex: none;\n}\n.video-js .vjs-fullscreen-control {\n  cursor: pointer;\n  flex: none;\n}\n.vjs-playback-rate > .vjs-menu-button,\n.vjs-playback-rate .vjs-playback-rate-value {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.vjs-playback-rate .vjs-playback-rate-value {\n  pointer-events: none;\n  font-size: 1.5em;\n  line-height: 2;\n  text-align: center;\n}\n\n.vjs-playback-rate .vjs-menu {\n  width: 4em;\n  left: 0em;\n}\n\n.vjs-error .vjs-error-display .vjs-modal-dialog-content {\n  font-size: 1.4em;\n  text-align: center;\n}\n\n.vjs-error .vjs-error-display:before {\n  color: #fff;\n  content: \"X\";\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 4em;\n  left: 0;\n  line-height: 1;\n  margin-top: -0.5em;\n  position: absolute;\n  text-shadow: 0.05em 0.05em 0.1em #000;\n  text-align: center;\n  top: 50%;\n  vertical-align: middle;\n  width: 100%;\n}\n\n.vjs-loading-spinner {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -25px 0 0 -25px;\n  opacity: 0.85;\n  text-align: left;\n  border: 6px solid rgba(43, 51, 63, 0.7);\n  box-sizing: border-box;\n  background-clip: padding-box;\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  visibility: hidden;\n}\n\n.vjs-seeking .vjs-loading-spinner,\n.vjs-waiting .vjs-loading-spinner {\n  display: block;\n  -webkit-animation: vjs-spinner-show 0s linear 0.3s forwards;\n          animation: vjs-spinner-show 0s linear 0.3s forwards;\n}\n\n.vjs-loading-spinner:before,\n.vjs-loading-spinner:after {\n  content: \"\";\n  position: absolute;\n  margin: -6px;\n  box-sizing: inherit;\n  width: inherit;\n  height: inherit;\n  border-radius: inherit;\n  opacity: 1;\n  border: inherit;\n  border-color: transparent;\n  border-top-color: white;\n}\n\n.vjs-seeking .vjs-loading-spinner:before,\n.vjs-seeking .vjs-loading-spinner:after,\n.vjs-waiting .vjs-loading-spinner:before,\n.vjs-waiting .vjs-loading-spinner:after {\n  -webkit-animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite;\n  animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite;\n}\n\n.vjs-seeking .vjs-loading-spinner:before,\n.vjs-waiting .vjs-loading-spinner:before {\n  border-top-color: white;\n}\n\n.vjs-seeking .vjs-loading-spinner:after,\n.vjs-waiting .vjs-loading-spinner:after {\n  border-top-color: white;\n  -webkit-animation-delay: 0.44s;\n  animation-delay: 0.44s;\n}\n\n@keyframes vjs-spinner-show {\n  to {\n    visibility: visible;\n  }\n}\n@-webkit-keyframes vjs-spinner-show {\n  to {\n    visibility: visible;\n  }\n}\n@keyframes vjs-spinner-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes vjs-spinner-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes vjs-spinner-fade {\n  0% {\n    border-top-color: #73859f;\n  }\n  20% {\n    border-top-color: #73859f;\n  }\n  35% {\n    border-top-color: white;\n  }\n  60% {\n    border-top-color: #73859f;\n  }\n  100% {\n    border-top-color: #73859f;\n  }\n}\n@-webkit-keyframes vjs-spinner-fade {\n  0% {\n    border-top-color: #73859f;\n  }\n  20% {\n    border-top-color: #73859f;\n  }\n  35% {\n    border-top-color: white;\n  }\n  60% {\n    border-top-color: #73859f;\n  }\n  100% {\n    border-top-color: #73859f;\n  }\n}\n.vjs-chapters-button .vjs-menu ul {\n  width: 24em;\n}\n\n.video-js .vjs-subs-caps-button + .vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder {\n  vertical-align: middle;\n  display: inline-block;\n  margin-bottom: -0.1em;\n}\n\n.video-js .vjs-subs-caps-button + .vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before {\n  font-family: VideoJS;\n  content: \"\";\n  font-size: 1.5em;\n  line-height: inherit;\n}\n\n.video-js .vjs-audio-button + .vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder {\n  vertical-align: middle;\n  display: inline-block;\n  margin-bottom: -0.1em;\n}\n\n.video-js .vjs-audio-button + .vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before {\n  font-family: VideoJS;\n  content: \" \";\n  font-size: 1.5em;\n  line-height: inherit;\n}\n\n.video-js.vjs-layout-small .vjs-current-time,\n.video-js.vjs-layout-small .vjs-time-divider,\n.video-js.vjs-layout-small .vjs-duration,\n.video-js.vjs-layout-small .vjs-remaining-time,\n.video-js.vjs-layout-small .vjs-playback-rate,\n.video-js.vjs-layout-small .vjs-volume-control, .video-js.vjs-layout-x-small .vjs-current-time,\n.video-js.vjs-layout-x-small .vjs-time-divider,\n.video-js.vjs-layout-x-small .vjs-duration,\n.video-js.vjs-layout-x-small .vjs-remaining-time,\n.video-js.vjs-layout-x-small .vjs-playback-rate,\n.video-js.vjs-layout-x-small .vjs-volume-control, .video-js.vjs-layout-tiny .vjs-current-time,\n.video-js.vjs-layout-tiny .vjs-time-divider,\n.video-js.vjs-layout-tiny .vjs-duration,\n.video-js.vjs-layout-tiny .vjs-remaining-time,\n.video-js.vjs-layout-tiny .vjs-playback-rate,\n.video-js.vjs-layout-tiny .vjs-volume-control {\n  display: none;\n}\n.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover, .video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active, .video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover, .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover, .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active, .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover, .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:hover, .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active, .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover {\n  width: auto;\n  width: initial;\n}\n.video-js.vjs-layout-x-small .vjs-progress-control, .video-js.vjs-layout-tiny .vjs-progress-control {\n  display: none;\n}\n.video-js.vjs-layout-x-small .vjs-custom-control-spacer {\n  flex: auto;\n  display: block;\n}\n.video-js.vjs-layout-x-small.vjs-no-flex .vjs-custom-control-spacer {\n  width: auto;\n}\n\n.vjs-modal-dialog.vjs-text-track-settings {\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.75);\n  color: #fff;\n  height: 70%;\n}\n\n.vjs-text-track-settings .vjs-modal-dialog-content {\n  display: table;\n}\n\n.vjs-text-track-settings .vjs-track-settings-colors,\n.vjs-text-track-settings .vjs-track-settings-font,\n.vjs-text-track-settings .vjs-track-settings-controls {\n  display: table-cell;\n}\n\n.vjs-text-track-settings .vjs-track-settings-controls {\n  text-align: right;\n  vertical-align: bottom;\n}\n\n@supports (display: grid) {\n  .vjs-text-track-settings .vjs-modal-dialog-content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    padding: 20px 24px 0px 24px;\n  }\n\n  .vjs-track-settings-controls .vjs-default-button {\n    margin-bottom: 20px;\n  }\n\n  .vjs-text-track-settings .vjs-track-settings-controls {\n    grid-column: 1/-1;\n  }\n\n  .vjs-layout-small .vjs-text-track-settings .vjs-modal-dialog-content,\n.vjs-layout-x-small .vjs-text-track-settings .vjs-modal-dialog-content,\n.vjs-layout-tiny .vjs-text-track-settings .vjs-modal-dialog-content {\n    grid-template-columns: 1fr;\n  }\n}\n.vjs-track-setting > select {\n  margin-right: 1em;\n  margin-bottom: 0.5em;\n}\n\n.vjs-text-track-settings fieldset {\n  margin: 5px;\n  padding: 3px;\n  border: none;\n}\n\n.vjs-text-track-settings fieldset span {\n  display: inline-block;\n}\n\n.vjs-text-track-settings fieldset span > select {\n  max-width: 7.3em;\n}\n\n.vjs-text-track-settings legend {\n  color: #fff;\n  margin: 0 0 5px 0;\n}\n\n.vjs-text-track-settings .vjs-label {\n  position: absolute;\n  clip: rect(1px 1px 1px 1px);\n  clip: rect(1px, 1px, 1px, 1px);\n  display: block;\n  margin: 0 0 5px 0;\n  padding: 0;\n  border: 0;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n}\n\n.vjs-track-settings-controls button:focus,\n.vjs-track-settings-controls button:active {\n  outline-style: solid;\n  outline-width: medium;\n  background-image: linear-gradient(0deg, #fff 88%, #73859f 100%);\n}\n\n.vjs-track-settings-controls button:hover {\n  color: rgba(43, 51, 63, 0.75);\n}\n\n.vjs-track-settings-controls button {\n  background-color: #fff;\n  background-image: linear-gradient(-180deg, #fff 88%, #73859f 100%);\n  color: #2B333F;\n  cursor: pointer;\n  border-radius: 2px;\n}\n\n.vjs-track-settings-controls .vjs-default-button {\n  margin-right: 1em;\n}\n\n@media print {\n  .video-js > *:not(.vjs-tech):not(.vjs-poster) {\n    visibility: hidden;\n  }\n}\n.vjs-resize-manager {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n  z-index: -1000;\n}\n\n.js-focus-visible .video-js *:focus:not(.focus-visible) {\n  outline: none;\n}\n\n.video-js *:focus:not(:focus-visible) {\n  outline: none;\n}\n";
  n(css$b,{});

  var css$a = "\n.vnjson__video{\n  width: 100%;\n  height: 100%;\n  box-shadow: 2px 2px 5px rgba(0,0,0,0.3);\n}\n.video-js{\n  top: 0px;\n  left: 0px;\n  width: 400px;\n  height: 250px;\n}\n\n";
  n(css$a,{});

  var tpl$3 = "<div class=\"vnjson__video component\">\n    <video id=\"vnjson__video\" class=\"video-js\"></video>\n</div>\n";

  function video () {
    var _this = this;

    var $tpl = $(tpl$3);
    vnjs.store.screen.append($tpl);
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
    vnjs.on('video', function (param) {
      onEndObj = null;

      if (_typeof(param) === 'object') {
        var asset = vnjs.getAssetByName(param.name);
        player.src(asset.url);

        if (param.css) {
          $tpl.find('.video-js').css(param.css);
        }

        if (param.volume <= 0) {
          player.volume(param.volume);
        }

        player.ready(function () {
          player.play();
        });

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

          case 'stop':
            hide();
            break;

          default:
            var _asset = vnjs.getAssetByName(param);

            player.src(_asset.url);
            player.ready(function () {
              player.play();
            });
            $tpl.fadeIn();
        }
      } else {
        hide();
      }
    });

    function hide() {
      player.pause();
      $tpl.fadeOut();
    }
  }

  var css$9 = ".typewrite{\n  width: 660px;\n  user-select: none;\n  background-color: #334;\n  padding: 10px;\n  border-radius: 4px;\n  box-shadow: 2px 2px 3px rgba(0,0,0,0.3);\n  top: 50px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n/*\n.typewrite__status{\n  border: 1px dashed gray;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 10px;\n  width: 100%;\n  border-radius: 4px;\n}\n*/\n.typewrite__task{\n  margin-top: 5px;\n  color: gray;\n  width: 100%;\n  height: 50px;\n  padding: 15px 10px;\n  font-size: 22px;\n  border-radius: 4px;\n  \n  \n  box-shadow:  2px 2px 3px rgba(0,0,0,0.1);\n  background-color: #445;\n\n}\n.typewrite__textarea{\n  margin-top: 20px;\n  font-size: 22px;\n  color: gray;\n  width: 100%;\n  height: 50px;\n  padding: 15px 10px;\n  background-color: #445;\n  outline: 0;\n  border: 0;\n  resize: none;\n  overflow: hidden;\n  caret-color: orange;\n  border-radius: 4px;\n  \n  box-shadow:  2px 2px 3px rgba(0,0,0,0.1);\n\n}\n\n.active{\n  color: deepskyblue;\n}\n.hot{\n  color: lightgreen;\n}\n@keyframes hot {\n  from {\n    margin-bottom: 10%;\n\n  }\n  to {\n    margin-bottom: 0%;\n  }\n}\n\n.typewrite__character{\n  \n}\n\n\n/**\n * keyboard\n */\n.keyboard{\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  margin-top: 15px;\n}\n.keyboard__row{\n  display: flex;\n}\n\n.keyboard__key{\n  padding: 5px;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 35px;\n  width: 35px;\n  background-color: rgba(0, 0, 0, 0.1);\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n  margin: 3px;\n  border-radius: 4px;\n  font-size: 12px;\n  color: gray;\n}\n\n.keyboard__actived{\n  background-color: rgba(0, 0, 0, 0.3);\n\n}\n.keyboard__pressed{\n  background-color: darkslateblue;\n}\n\n\n.keyboard__keys_2{\n /* font-size: 10px;*/\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n}\n.keyboard__keys_2 +span{\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n}\n/**\n * keys\n */\n.keyboard__backspace{\n  width: 97px;\n}\n.keyboard__enter{\n  width: 70px;\n}\n\n.keyboard__caps-lock{\n  width: 97px;\n}\n.keyboard__shift{\n  width: 107px;\n}\n.keyboard__space{\n  width: 53.7%;\n}\n.keyboard__tab{\n  width: 62px;\n}\n.keyboard__backspace,\n.keyboard__enter,\n.keyboard__tab,\n.keyboard__caps-lock,\n.keyboard__shift,\n.keyboard__space,\n.keyboard__ctrl,\n.keyboard__win,\n.keyboard__doc,\n.keyboard__alt{\n  background-color: rgba(0, 0, 0, 0.1);\n\n}";
  n(css$9,{});

  var tpl$2 = "<div class=\"typewrite component\">\n    <div class=\"typewrite__task\"></div>\n    <textarea class=\"typewrite__textarea\" spellcheck=\"false\"></textarea>\n    <div class=\"keyboard\">\n        <div class=\"keyboard__row\"></div>\n        <div class=\"keyboard__row\"></div>\n        <div class=\"keyboard__row\"></div>\n        <div class=\"keyboard__row\"></div>\n        <div class=\"keyboard__row\"></div>\n    </div>\n</div>";

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
          vnjs.onInvalidCharacter();
          return;
        }
        /**
         * Правильный символ
         */


        if (this.getTaskCharacter() === this.key) {
          vnjs.onValidCharater();
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

  var $tpl$6 = $(tpl$2);
  function typewrite () {
    var _this = this;

    vnjs.store.screen.append($tpl$6);
    var tw = new TypeWrite();
    vnjs.on('typewrite', function (param) {
      if (typeof param === 'string') {
        $tpl$6.show();
        tw.setTask(param);
        tw.onEnd(function () {
          $tpl$6.hide();

          _this.exec({
            next: true
          });
        });
      } else if (_typeof(param) === 'object') {
        $tpl$6.show();
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
          $tpl$6.hide();

          _this.exec({
            next: true
          });
        });
      } else {
        $tpl$6.hide();
      }
    });
  }

  var css$8 = "\n\n.vnjson__area{\n  z-index: 700;\n  width: 100%;\n  height: 570px;\n}\n.vnjson__area-item:hover{\n  cursor: pointer;\n /* background-color: rgba(0,0,0,0.1);*/\n}";
  n(css$8,{});

  var $tpl$5 = $('<div class="vnjson__area component"></div>');
  var _regions = null;
  var onClickData = null;
  function area () {
    var _this = this;

    vnjs.store.screen.append($tpl$5);
    vnjs.on("area", handler$1.bind(this));
    $tpl$5.on("click", function (e) {
      if (!e.target.className.includes("vnjson__area-item")) return;
      var regIndex = JSON.parse(e.target.dataset.index);

      _this.exec(_regions[regIndex].exec);
    });
  }

  function handler$1(regions) {
    if (!regions) {
      onClickData = null;
      $tpl$5.hide();
      return;
    }

    _regions = regions;
    $tpl$5.empty();
    $tpl$5.show();
    regions.forEach(function (reg, index) {
      var $regTpl = $("<div  class=\"vnjson__area-item\" data-index=\"".concat(index, "\"></div>"));

      if (reg.onClick) {
        onClickData = reg.onClick;
        return;
      }

      $regTpl.css({
        position: "absolute",
        top: "".concat(reg.top, "px"),
        left: "".concat(reg.left, "px"),
        width: "".concat(reg.width, "px"),
        height: "".concat(reg.height, "px")
      });

      if (reg.show) {
        if (reg.show === true) {
          $regTpl.css('border', '5px solid #11f285');
        }

        if (typeof reg.show === "string") {
          $regTpl.css('border', "5px solid ".concat(reg.show));
        }
      }

      if (onClickData) {
        $regTpl.on('click', function () {
          return vnjs.exec(onClickData);
        });
      }

      $tpl$5.append($regTpl);
    });
  }

  var css$7 = ".select-word{\n  width: 100%;\n  height: 100%;\n}\n\n.select-word__quetion{\n  display: flex;\n  background-color: #334;\n  padding: 20px;\n  border-radius: 8px;\n  position: absolute;\n  top: 100px;\n  left: 30px;\n  display: flex;\n  align-items: center;\n\n}\n.select-word__text{\n  color: lightgreen;\n  font-size: 26px;\n\n}\n.select-word__dropzone{\n  background-color: #445;\n  border-radius: 8px;\n  min-width: 170px;\n  height: 40px;\n  color: magenta;\n  cursor: pointer;\n  margin-left: 10px;\n}\n.select-word__dropzone .select-word__item{\n  height: 40px;\n}\n.select-word__dropzone--active{\n  background-color: #556;\n}\n.select-word__dropzone--disable{\n  pointer-events: none;\n  border: unset;\n}\n.select-word__variants{\n  background-color: #334;\n  position: absolute;\n  top: 270px;\n  left: 700px;\n  padding: 20px;\n  border-radius: 8px;\n}\n/*\n.select-word__variants--disable{\n  pointer-events: none;\n}\n*/\n.select-word__item{\n  color: skyblue;\n  padding: 10px 20px;\n  border-radius: 8px;\n  background-color: #223;\n  margin-bottom: 10px;\n  font-size: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.select-word__item::last-child{\n  margin-bottom: 0;\n}\n.select-word__item:hover{\n  color: deepskyblue;\n  background-color: #112;\n  cursor: pointer;\n}\n\n.select-word__item--active{\n  background-color: #112;\n  color: deepskyblue;\n}";
  n(css$7,{});

  var tpl$1 = "<div class=\"select-word component\">\n  <div class=\"select-word__quetion\">\n    <div class=\"select-word__text\"></div>\n    <div class=\"select-word__dropzone\"></div>\n  </div>\n\n  <div class=\"select-word__variants\"></div>\n\n</div>";

  var $tpl$4 = $(tpl$1);
  var correct = null;
  var _scriptData = false;
  function selectWord () {
    var _this = this;

    vnjs.store.screen.append($tpl$4);
    var $dropZone = $tpl$4.find(".select-word__dropzone");
    var indexItem = 0;
    vnjs.on("select-word", function (data) {
      _scriptData = data;
      $dropZone.removeClass("select-word__dropzone--disable");
      $dropZone.empty();
      handler(data);
    });
    $tpl$4.find(".select-word__variants").on("click", ".select-word__item", function (e) {
      correct = _scriptData.answers.correct - 1; // удаляю активный класс

      $(this).parent().find(".select-word__item").toArray().forEach(function (node) {
        return $(node).removeClass("select-word__item--active");
      }); // вешаю активный класс на выбранный элемент

      $(this).addClass("select-word__item--active"); // подсвечиваю дропзону

      $dropZone.addClass("select-word__dropzone--active");
      indexItem = Number(this.dataset.index);
    });
    $dropZone.on("click", function () {
      if (correct === null) return;
      $dropZone.addClass("select-word__dropzone--disable"); //$tpl.find('.select-word__variants').removeClass('select-word__variants--disable')

      var answerItemHTML = $("<div class=\"select-word__item\">".concat(_scriptData.answers.variants[indexItem], "</div>"));
      $dropZone.html(answerItemHTML); // проверяю на правильность ответ пользователя

      if (indexItem === correct) {
        setTimeout(function () {
          _this.exec(_scriptData.onSuccess);

          _this.exec({
            "select-word": false
          });
        }, 1000);
      } else {
        setTimeout(function () {
          _this.exec(_scriptData.onFailure);

          _this.exec({
            "select-word": false
          });
        }, 1000);
      }
    });
  }

  function handler(scriptData) {
    if (scriptData) {
      $tpl$4.show();
      var quetion = scriptData.quetion,
          answers = scriptData.answers;

      if (quetion !== null && quetion !== void 0 && quetion.css) {
        $tpl$4.find(".select-word__quetion").css(quetion.css);
      }

      if (answers !== null && answers !== void 0 && answers.css) {
        $tpl$4.find(".select-word__variants").css(answers.css);
      }

      $tpl$4.find(".select-word__text").html(quetion.text);
      $tpl$4.find(".select-word__variants").empty(); //$tpl.find('.select-word__variants').removeClass('select-word__variants--disable')

      answers.variants.forEach(function (item, index) {
        var str = $("<div class=\"select-word__item\" data-index=\"".concat(index, "\">").concat(item, "</div>"));
        $tpl$4.find(".select-word__variants").append(str);
      });
    } else {
      $tpl$4.hide();
      correct = null;
    }
  }

  var css$6 = "\n.drag-items{\n  width: 100%;\n  height: 570px;\n  z-index: 500;\n}\n\n.drag-items__item{\n  color: skyblue;\n  padding: 7px 15px;\n  font-size: 25px;\n  border-radius: 8px;\n  background-color: rgba(0,0,0,0.85);\n  margin-bottom: 10px;\n  position: relative;\n  cursor: pointer;\n  position: absolute;\n\n}\n.drag-items__item::before{\n  content: \"\";\n  position: absolute;\n  top: 3px;\n  width: 5px;\n  height: 5px;\n  left: 3px;\n  border-radius: 50%;\n  background-color: darkslategray;\n}\n.drag-items__item:hover{\n  color: deepskyblue;\n}";
  n(css$6,{});

  var $tpl$3 = $('<div class="drag-items component"></div>');
  var selectedElement = null;
  function dragItems () {
    var _this = this;

    vnjs.store.screen.append($tpl$3);
    vnjs.on('drag-items', function (data) {
      if (data) {
        $tpl$3.show();
        renderItems.call(_this, data);
      } else {
        $tpl$3.hide();
      }
    });
    $tpl$3.on('mousedown', function (e) {
      if (selectedElement === null) return;
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      $(selectedElement).css({
        top: y - 4 + 'px',
        left: x - 4 + 'px'
      });
      selectedElement = null;
    });
  }

  function renderItems(data) {
    $tpl$3.empty();
    var top = data.top;
    var left = data.left;
    var nodeHeight = 50;

    var _data = _toConsumableArray(data.items); // not mutable


    var maxLength = _data.sort(function (a, b) {
      return b.length - a.length;
    })[0].length;

    var maxWidth = 17 * maxLength;
    data.items.forEach(function (item, index) {
      var str = $("<div class=\"drag-items__item\">".concat(item, "</div>"));
      str.css({
        top: "".concat(top + index * nodeHeight, "px"),
        left: left + 'px',
        width: maxWidth + 'px'
      });
      str.on('click', function (e) {
        selectedElement = this;
      });
      $tpl$3.append(str);
    });
  }

  function consoleVnjson () {
    var _this = this;

    var port = 8080;
    var $tpl = $("<iframe class=\"vnjson__console component\" src=\"\" width=\"1024\" height=\"570\"></iframe>");
    $tpl.css({
      backgroundColor: '#000000'
    });
    vnjs.on('postload', function () {
      if (_this["package"]['console-port']) {
        port = _this["package"]['console-port'];
      }

      var src = "http://localhost:".concat(port);
      $tpl.attr('src', src);
    });
    var once = true;
    vnjs.on('console', function (data) {
      /**
       * once - почему то iframe не хочет загрузаться, если не прибегнуть
       * к такому решению
       */
      if (once) {
        vnjs.store.screen.append($tpl);
        once = false;
      }

      if (data) {
        $tpl.show();
      } else {
        $tpl.hide();
      }
    });
  }

  var css$5 = ".vnjson__blocks{\n  z-index: 500;\n}\n.vnjson__blocks-item{\n  overflow: hidden;\n  z-index: 0;\n}\n\n.vnjson__blocks-wrapper-item{\n  position: absolute;\n  overflow: hidden;\n  display: flex;\n\n}\n.vnjson__blocks-wrapper-item img{\n  position: relative;\n}";
  n(css$5,{});

  var bgIMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAABbmlDQ1BpY2MAACiRdZE7SwNBFIW/JIohRlNoIWKRIoqFgiiIpUQwjVokEYzaZDcvIRuX3Q0SbAUbC8FCtPFV+A+0FWwVBEERRKz8Ab4akfWOK0TEzDJ7P87MucycAf9UWTfspiEwKo6VTMSjc5n5aMsTQUK0EyCc1W1zOjWZpuF4v8Gn6vWg6tV437+jNZe3dfAFhUd103KEx4WnVhxT8YZwp17K5oT3hQcsOaDwhdI1jx8VFz1+VWylkxPgVz2jxV+s/WK9ZBnC/cIxo1zVf86jbhLOV2ZTUrtl9mCTJEGcKBpVlijjMCi1Ipn97xv69s2wLB5d/iY1LHEUKYl3QNSqdM1LLYiel69MTeX+N0+7MDLsdQ/HofnBdV96oWULPjdd9+PAdT8PIXAPZ5W6f1lyGnsTfbOuxfYgsgYn53VN24bTdei6M7NW9lsKyPQXCvB8DG0Z6LiC0IKX1c86R7eQXpUnuoSdXeiT/ZHFL47dZ9Y0nzKJAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAC0lEQVQIW2NgAAIAAAUAAR4f7BQAAAAASUVORK5CYII=";

  var $tpl$2 = $('<div class="vnjson__blocks component"></div>');
  var stepsArray = [];
  var vnjs$1 = null;
  function blocks () {
    var _this = this;

    vnjs$1 = this;
    vnjs$1.store.screen.append($tpl$2);
    vnjs$1.on("blocks", function (param) {
      stepsArray = param;
      blocksHandler.call(_this, stepsArray);
    });
    vnjs$1.on("blocks-step", blocksStepHandler);
  }

  function getImage(item) {
    if (item.image) {
      return vnjs$1.getAssetByName(item.image).url;
    }

    return bgIMG;
  }

  function blocksHandler(param) {
    if (param) {
      $tpl$2.show();
      param.forEach(function (item) {
        var $imgWrapper = $("\n                        <div class=\"vnjson__blocks-item component vnjson__blocks--".concat(item.id, "\" >\n                                <div class=\"vnjson__blocks-wrapper-item vnjson__blocks-wrapper--").concat(item.id, "\">\n                                    <img alt=\"\"  src=\"").concat(getImage(item), "\">\n                                </div>\n                        </div>"));
        $imgWrapper.css({
          width: item.width,
          height: item.height,
          left: item.left,
          top: item.top,
          display: "block"
        });
        var $img = $imgWrapper.find("img");
        var $imgBox = $imgWrapper.find(".vnjson__blocks-wrapper--".concat(item.id));
        $img.css({
          display: "none",
          width: item.width,
          height: item.height,
          left: 0,
          top: 0,
          opacity: 0
        });
        $tpl$2.append($imgWrapper);
        /**
         * item.animation
         */

        setTimeout(function () {
          if (item["z-index"]) {
            $imgWrapper.css("z-index", item["z-index"]);
          }

          if (item.animation) {
            animationType($imgWrapper, $img, $imgBox, item);
          } else {
            $img.css({
              opacity: "1",
              display: "block"
            });
          }
        }, item.timeout + 100);
      });
    } else {
      $tpl$2.hide();
      $tpl$2.empty();
    }
  }

  function animationType($imgWrapper, $img, $imgBox, item, _isStep) {
    switch (item.animation.type) {
      /**
       * slide
       */
      case "slideUp":
        $img.css({
          display: "block"
        });
        $imgBox.css({
          top: "-100%"
        });
        $img.animate({
          opacity: 1
        }, item.animation.duration);
        $imgBox.animate({
          top: "0%"
        }, item.animation.duration, function () {
          if (item.animation.onEnd) {
            vnjs$1.exec(item.animation.onEnd);
          }
        });
        break;

      case "slideDown":
        $img.css({
          display: "block"
        });
        $imgBox.css({
          top: "100%"
        });
        $img.animate({
          opacity: 1
        }, item.animation.duration);
        $imgBox.animate({
          top: "0%"
        }, item.animation.duration, function () {
          if (item.animation.onEnd) {
            vnjs$1.exec(item.animation.onEnd);
          }
        });
        break;

      case "slideLeft":
        $img.css({
          display: "block"
        });
        $imgBox.css({
          left: "-100%"
        });
        $img.animate({
          opacity: 1
        }, item.animation.duration);
        $imgBox.animate({
          left: "0%"
        }, item.animation.duration, function () {
          if (item.animation.onEnd) {
            vnjs$1.exec(item.animation.onEnd);
          }
        });
        break;

      case "slideRight":
        $img.css({
          display: "block"
        });
        $imgBox.css({
          left: "100%"
        });
        $img.animate({
          opacity: 1
        }, item.animation.duration);
        $imgBox.animate({
          left: "0%"
        }, item.animation.duration, function () {
          if (item.animation.onEnd) {
            vnjs$1.exec(item.animation.onEnd);
          }
        });
        break;

      /**
       * show
       */

      case "showUp":
        $img.css({
          opacity: 1,
          display: "block"
        });
        $imgBox.css({
          height: "0px",
          top: "0px",
          bottom: "unset",
          "align-items": "flex-start"
        });
        $imgBox.animate({
          height: item.height
        }, item.animation.duration, function () {
          if (item.animation.onEnd) {
            vnjs$1.exec(item.animation.onEnd);
          }
        });
        break;

      case "showDown":
        $img.css({
          opacity: 1,
          display: "block"
        });
        $imgBox.css({
          height: "0px",
          top: "unset",
          bottom: "0px",
          "align-items": "flex-end"
        });
        $imgBox.animate({
          height: item.height
        }, item.animation.duration, function () {
          if (item.animation.onEnd) {
            vnjs$1.exec(item.animation.onEnd);
          }
        });
        break;

      case "showLeft":
        $img.css({
          opacity: 1,
          display: "block"
        });
        $imgBox.css({
          width: "0px",
          left: "0px",
          right: "unset",
          "justify-content": "flex-start"
        });
        $imgBox.animate({
          width: item.width
        }, item.animation.duration, function () {
          if (item.animation.onEnd) {
            vnjs$1.exec(item.animation.onEnd);
          }
        });
        break;

      case "showRight":
        $img.css({
          opacity: 1,
          display: "block"
        });
        $imgBox.css({
          width: "0px",
          right: "0px",
          left: "unset",
          "justify-content": "flex-end"
        });
        $imgBox.animate({
          width: item.width
        }, item.animation.duration, function () {
          if (item.animation.onEnd) {
            vnjs$1.exec(item.animation.onEnd);
          }
        });
        break;

      /**
       * move
       */

      case "moveTo":
        $img.css({
          display: "block",
          opacity: 1
        });
        var animationData = {};

        if (item.animation.left) {
          animationData.left = item.animation.left.replaceAll(" ", "");
        }

        if (item.animation.top) {
          animationData.top = item.animation.top.replaceAll(" ", "");
        }

        $imgWrapper.animate(animationData, item.animation.duration, function () {
          if (item.animation.onEnd) {
            vnjs$1.exec(item.animation.onEnd);
          }
        });
        break;

      /**
       * zoom
       */

      case "zoom":
        $img.css({
          display: "block",
          opacity: 1
        });
        var animationData2 = {
          transform: "scale(".concat(item.animation.value, ")"),
          transition: "".concat(item.animation.duration / 1000, "s")
        };
        $imgWrapper.css(animationData2);

        if (item.animation.onEnd) {
          setTimeout(function () {
            vnjs$1.exec(item.animation.onEnd);
          }, item.animation.duration);
        }

        break;

      /**
       * fade
       */

      case "fadeIn":
        $img.css({
          display: "block"
        });
        $img.animate({
          opacity: 1
        }, item.animation.duration, function () {
          if (item.animation.onEnd) {
            vnjs$1.exec(item.animation.onEnd);
          }
        });
        break;

      case "fadeOut":
        $img.css({
          opacity: 1,
          display: "block"
        });
        $img.animate({
          opacity: 0
        }, item.animation.duration, function () {
          if (item.animation.onEnd) {
            vnjs$1.exec(item.animation.onEnd);
          }
        });
        break;

      /**
       * zoom
       */

      case "sizeTo":
        $img.css({
          display: "block",
          opacity: 1
        });
        var data = {
          width: item.animation.width || item.width,
          height: item.animation.height || item.height
        };
        $imgWrapper.animate(data, item.animation.duration);
        $img.animate(data, item.animation.duration, function () {
          if (item.animation.onEnd) {
            vnjs$1.exec(item.animation.onEnd);
          }
        });
        break;

      default:
        vnjs$1.emit('vnjson.error', "<font color=\"red\">\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0442\u0438\u043F \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438 ".concat(JSON.stringify(item.animation.type), "</font>"));
    }
  }

  function blocksStepHandler(item) {
    var $imgWrapper = $(".vnjson__blocks--".concat(item.id));
    var $img = $imgWrapper.find("img");
    var $imgBox = $imgWrapper.find(".vnjson__blocks-wrapper--".concat(item.id));

    if (!item.timeout) {
      item.timeout = 0;
    }

    setTimeout(function () {
      if (item.image !== undefined) {
        $img.attr("src", getImage(item));
      }

      if (item["z-index"]) {
        $imgWrapper.css("z-index", item["z-index"]);
      }

      if (item.animation) {
        animationType($imgWrapper, $img, $imgBox, item);
      } else {
        $img.css({
          opacity: "1",
          display: "block"
        });
      }
    }, item.timeout + 100);
  }

  var css$4 = ".vnjson__static-app{\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  top: 50px;\r\n  width: 750px;\r\n  height: 500px;\r\n\r\n}";
  n(css$4,{});

  function staticApp () {
    var _this = this;

    fetch('apps/modules.json').then(function (r) {
      return r.json();
    }).then(function (res) {
      if (res) {
        for (var event in res) {
          eventRegistration.call(_this, event, res[event]);
        }
      }
    });
  }

  function eventRegistration(event) {
    var src = "apps/".concat(event, "/index.html");
    var tpl = "<iframe src=\"".concat(src, "\" class=\"vnjson__").concat(event, " vnjson__static-app component\" ></iframe>");
    var $tpl = $(tpl);
    vnjs.store.screen.append($tpl);
    vnjs.on(event, function (data) {
      if (data) {
        $tpl.show();
      } else {
        $tpl.hide();
      }
    });
  }

  var css$3 = ".vnjson-hud{\r\n    width: 480px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    top: unset;\r\n    bottom: 210px;\r\n    z-index: 4000;\r\n}\r\n.vnjson-hud__indicators{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding-bottom: 7px;\r\n}\r\n.vnjson-hud__indicator{\r\n    width: 235px;\r\n    height: 20px;\r\n    border-radius: 2px;\r\n    border: 2px solid black;\r\n    background-color: rgba(0,0,0,0.8);\r\n}\r\n.vnjson-hud__left{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%; \r\n    background-color: crimson;\r\n    border-radius: 2px;\r\n}\r\n\r\n.vnjson-hud__right{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: lightgreen; \r\n    border-radius: 2px;\r\n}\r\n/**\r\n * INV\r\n */\r\n.vnjson-hud__inv{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.vnjson-hud__slot{\r\n    width: 60px;\r\n    height: 60px;\r\n    background-image: url(data:image/png;base64,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);\r\n    background-size: 109%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.vnjson-hud__item{\r\n    width: 40px;\r\n    height: 40px;  \r\n   /* background-image: url(./assets/slot.png);*/\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    transition: 0.3s;\r\n}";
  n(css$3,{});

  var tpl = "<div class=\"vnjson-hud component\">\r\n    <div class=\"vnjson-hud__indicators\">\r\n        <div class=\"vnjson-hud__indicator\">\r\n            <div class=\"vnjson-hud__left\"></div>\r\n        </div>\r\n        <div class=\"vnjson-hud__indicator\">\r\n            <div class=\"vnjson-hud__right\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"vnjson-hud__inv\">\r\n        <div class=\"vnjson-hud__slot\" data-index=\"1\">\r\n          <div class=\"vnjson-hud__item vnjson-hud__item--1\"></div>\r\n        </div>\r\n        <div class=\"vnjson-hud__slot\" data-index=\"2\">\r\n          <div class=\"vnjson-hud__item vnjson-hud__item--2\"></div>\r\n        </div>\r\n        <div class=\"vnjson-hud__slot\" data-index=\"3\">\r\n          <div class=\"vnjson-hud__item vnjson-hud__item--3\"></div>\r\n        </div>\r\n        <div class=\"vnjson-hud__slot\" data-index=\"4\">\r\n          <div class=\"vnjson-hud__item vnjson-hud__item--4\"></div>\r\n        </div>\r\n        <div class=\"vnjson-hud__slot\" data-index=\"5\">\r\n          <div class=\"vnjson-hud__item vnjson-hud__item--5\"></div>\r\n        </div>\r\n        <div class=\"vnjson-hud__slot\" data-index=\"6\">\r\n          <div class=\"vnjson-hud__item vnjson-hud__item--6\"></div>\r\n        </div>\r\n        <div class=\"vnjson-hud__slot\" data-index=\"7\">\r\n          <div class=\"vnjson-hud__item vnjson-hud__item--7\"></div>\r\n        </div>\r\n    </div>\r\n</div>";

  var $tpl$1 = $(tpl);
  var $hudLeft = $tpl$1.find(".vnjson-hud__left");
  var $hudRight = $tpl$1.find(".vnjson-hud__right");
  var $invTag = $tpl$1.find(".vnjson-hud__inv");
  var slotData = null;
  function HUD () {
    vnjs.store.screen.append($tpl$1);
  }
  vnjs.on("hud", function (args) {
    if (args) {
      $tpl$1.show();
    } else {
      $tpl$1.hide();
    }
  });
  vnjs.on("hud-left", function (args) {
    var width = null;

    if (vnjs.state.data[args]) {
      width = vnjs.state.data[args];
    } else {
      width = args;
    }

    $hudLeft.animate({
      width: width
    }, 300);
  });
  vnjs.on("hud-right", function (args) {
    var width = null;

    if (vnjs.state.data[args]) {
      width = vnjs.state.data[args];
    } else {
      width = args;
    }

    $hudRight.animate({
      width: width
    }, 300);
  });
  vnjs.on("hud-inv", function (args) {
    return hudInvHandler(args);
  }); //const _this = this

  $invTag.on("click", ".vnjson-hud__slot", function () {
    clickSlotHandler($(this));
  });
  /**
   * Если режим диалогового окна полноэкранный. То hud прижимаем к низу
   */

  vnjs.on("dialog-box.mode", function (mode) {
    if (mode === "mode-classic") {
      $tpl$1.css({
        bottom: "210px"
      });
    }

    if (mode === "mode-fullscreen") {
      $tpl$1.css({
        bottom: "10px"
      });
    }
  });

  function hudInvHandler(args) {
    var $slot = $tpl$1.find(".vnjson-hud__item--".concat(args.slot));

    if (args.icon) {
      slotData = args;
      $slot.css({
        "background-image": "url(".concat(vnjs.getAssetByName(args.icon).url, ")")
      });
    } else {
      slotData = null;
      $slot.css({
        "background-image": "unset"
      });
    }

    if (args.exec) {
      $slot.css("cursor", "pointer");
    } else {
      $slot.css("cursor", "unset");
    }
  }

  function clickSlotHandler(target) {
    if (!slotData) return;
    if (!slotData.exec) return;

    if (slotData.slot === $(target).data('index')) {
      vnjs.exec(slotData.exec);
    }
  }

  // character.info
  var Info = /*#__PURE__*/function () {
    function Info($info, $avatar) {
      _classCallCheck(this, Info);

      _defineProperty(this, "openModal", false);

      this.$info = $info;
      this.$avatar = $avatar;
      this.$text = this.$info.find(".dialog-box__info-text");
      this.mount();
    }

    _createClass(Info, [{
      key: "mount",
      value: function mount() {
        var _this = this;

        this.$info.on("mousedown", function () {
          return _this.close();
        });
      }
    }, {
      key: "open",
      value: function open() {
        if (this.$text.text() === "") return;
        if (this.$text.text() === "undefined") return;
        this.$info.css("display", "flex");
        this.openModal = true;
        this.hideBorder();
      }
    }, {
      key: "close",
      value: function close() {
        this.$info.hide();
        this.openModal = false;
      }
    }, {
      key: "hideBorder",
      value: function hideBorder() {
        this.$avatar.css("border-color", "transparent");
      }
    }, {
      key: "toggle",
      value: function toggle() {
        if (this.openModal) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: "print",
      value: function print(data) {
        this.$text.html(data);
      }
    }, {
      key: "addBorder",
      value: function addBorder(borderColor) {
        this.$avatar.css("border-color", borderColor);
        this.$info.css("border-color", borderColor);
      }
    }, {
      key: "removeBorder",
      value: function removeBorder() {
        this.$avatar.css("border-color", "transparent");
        this.$info.css("border-color", "transparent");
        this.close();
      }
    }, {
      key: "controlPadding",
      value: function controlPadding(MODE) {
        if (MODE === "mode-classic") {
          this.$info.css("bottom", "205px");
        } else {
          this.$info.css("bottom", "5px");
        }
      }
    }]);

    return Info;
  }();

  var css$2 = "\r\n\r\n.dialog-box__avatar{\r\n    border: 3px solid transparent;\r\n    border-radius: 4px;\r\n\r\n}\r\n\r\n.dialog-box__info{\r\n    position: absolute;\r\n    bottom: 205px;\r\n    left: 5px;\r\n    min-width: 200px;\r\n    max-width: 400px;\r\n    border-radius: 6px;\r\n    background-color: rgba(0,0,0,0.8);\r\n    display: none;\r\n    border: 4px solid gray;\r\n    padding: 5px;\r\n    z-index: 5000;\r\n  }\r\n  .dialog-box__info-icon{\r\n    width: 30px;\r\n    height: 30px;\r\n    min-width: 30px;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    margin-right: 10px;\r\n}\r\n.dialog-box__info-text{\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n    word-spacing: 10px;\r\n    color: gray;\r\n    display: flex;\r\n    align-items: center;\r\n}";
  n(css$2,{});

  function dialogBoxInfo () {
    var $tpl = $("<div class=\"dialog-box__info\">\n                        <div class=\"dialog-box__info-icon\"></div>\n                        <div class=\"dialog-box__info-text\"></div>\n                  </div>");
    vnjs.store.screen.append($tpl);
    /**
     * INFO
     */

    var $info = $(".dialog-box__info");
    var $avatar = $(".dialog-box__avatar");
    var info = new Info($info, $avatar);
    vnjs.on("dialog-box.print", function () {
      return info.close();
    });
    var _param = null;
    vnjs.on("vnjson.character", function (character, param) {
      if (_typeof(param) === "object") {
        if (param.info) {
          info.print(String(param.info)); // addBorder

          if (param.borderColor) {
            info.addBorder(param.borderColor);
          }

          var $icon = $tpl.find(".dialog-box__info-icon");

          if (param.icon) {
            var url = vnjs.getAssetByName(param.icon).url;
            $icon.show();
            $icon.css("background-image", "url(".concat(url, ")"));
          } else {
            $icon.css("background-image", "unset");
            $icon.hide();
          }

          _param = true;
          return;
        } else {
          info.$info.find(".dialog-box__info-text").text("");
        }
      }

      _param = false;
    });
    $avatar.on("mousedown", function () {
      if (_param) {
        info.toggle();
      }

      vnjs.emit("dialog-box.avatar-click");
    });
    vnjs.on("dialog-box.click", function () {
      return info.removeBorder();
    });
    vnjs.on("dialog-box.mode", function (MODE) {
      return info.controlPadding(MODE);
    });
  }

  function executeVnjson () {
    var _this = this;

    vnjs.on('execute', function (data) {
      if (Array.isArray(data)) {
        data.forEach(function (plugin) {
          var key = null;

          for (var _key in plugin) {
            key = _key;
          }

          if (key !== 'execute') {
            _this.exec(plugin);
          } else {
            vnjs.emit('error', {
              ru: 'Нельзя использовать вложенный <font color="deepskyblue">execute</font> внутри <font color="deepskyblue">execute</font>',
              en: 'Сan not use <font color="deepskyblue">execute</font> into <font color="deepskyblue">execute</font>'
            });
          }
        });
      } else {
        vnjs.emit('error', {
          ru: 'Плагин  <font color="deepskyblue">execute</font> принимает в качестве аргумента, только список плагинов',
          en: 'Plugin <font color="deepskyblue">execute</font> takes as an argument, only a list of plugins'
        });
      }
    });
  }

  var css$1 = ".vnjson__sprites-animate{\r\n    background-repeat: no-repeat;\r\n}";
  n(css$1,{});

  var SritesAnimation = /*#__PURE__*/function () {
    function SritesAnimation(args) {
      _classCallCheck(this, SritesAnimation);

      this.id = args.id;
      this.className = "vnjson__sprites-animate-".concat(this.id);
      this.src = vnjs.getAssetByName(args.name).url;
      this.delay = args.delay;
      this.width = +args.width.replace("px", "");
      this.height = +args.height.replace("px", "");
      this.top = args.top;
      this.left = args.left;
      this.cols = args.cols;
      this.rows = args.rows;
      this.loop = args.loop;
      this.x = 0;
      this.y = 0;
      this.canvas = null;
      this.ctx = null;
      this.currentFrame = 0;
      this.intervalID = null;
      this.img = null;
      this.n = 0;
      this.frameCol = 0;
      this.frameRow = 0;
      this.scale = args.scale || "unset";
      this.maxFrame = 0;
      this.create();
    }

    _createClass(SritesAnimation, [{
      key: "create",
      value: function create() {
        this.canvas = document.createElement("canvas");
        this.canvas.classList.add(this.className);
        this.canvas.classList.add("component");
        vnjs.store.screen.get(0).append(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.display = "block";
        this.style();
      }
    }, {
      key: "remove",
      value: function remove() {
        clearInterval(this.intervalID);
        vnjs.emit("sprite-animation.end", this.id);
        this.canvas.remove();
      }
    }, {
      key: "style",
      value: function style() {
        Object.assign(this.canvas.style, {
          top: this.top,
          left: this.left,
          transform: "scale(".concat(this.scale, ")")
        });
      }
    }, {
      key: "start",
      value: function start() {
        this.loadImage();
      }
    }, {
      key: "loadImage",
      value: function loadImage() {
        var _this = this;

        this.img = new Image();

        this.img.onload = function () {
          _this.startAnimate();
        };

        this.img.src = this.src;
      }
    }, {
      key: "startAnimate",
      value: function startAnimate() {
        var _this2 = this;

        this.update();
        this.intervalID = setInterval(function () {
          _this2.update();
        }, this.delay);
      }
    }, {
      key: "draw",
      value: function draw() {
        //console.log(`frame: ${this.currentFrame+1}  / ${this.maxFrame}  col: ${this.frameCol+1} / ${this.cols} row: ${ this.frameRow+1} / ${this.rows}`)
        var origin = {
          w: this.frameCol * this.width,
          h: this.frameRow * this.height,
          x: this.width,
          y: this.height
        };
        var frame = {
          w: this.width,
          h: this.height,
          x: 0,
          y: 0
        };
        this.ctx.drawImage(this.img, origin.w, origin.h, this.width, this.height, frame.x, frame.y, frame.w, frame.h);
      }
    }, {
      key: "update",
      value: function update() {
        this.frameCol = this.currentFrame % this.cols;
        this.frameRow = Math.floor(this.currentFrame / this.cols);
        this.maxFrame = this.cols * this.rows - 1;

        if (this.currentFrame > this.maxFrame) {
          this.currentFrame = 0;
          this.onLoop();
        } else {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.draw();
          this.currentFrame++;
        }
      }
    }, {
      key: "onLoop",
      value: function onLoop() {
        vnjs.emit("sprite-animation.loop", this.id, this.n);

        if (this.loop === true) ; else if (typeof this.loop === "number") {
          console.log(this.n, this.loop);

          if (this.n === this.loop - 1) {
            this.remove();
          } else {
            this.n++;
          } //this.repeat(this.loop);

        } else {
          this.remove();
        }
      }
    }]);

    return SritesAnimation;
  }();

  function spriteAnimate () {}
  var animation = null;
  var _args$1 = null;
  var storeAnimation = {};
  vnjs.on("sprite-animate", function (args) {
    _args$1 = args;

    if (_typeof(args) === 'object') {
      animation = new SritesAnimation(args);
      animation.start();
      storeAnimation[animation.id] = animation;
    } else {
      vnjs.emit('vnjson.error', "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u0434\u0430\u043D\u043D\u044B\u0445 <font color=\"deepskyblue\"> ".concat(args, "</font> === <font color=\"magenta\">").concat(_typeof(args), "</font><br>\u041F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E object"));
    }
  });
  vnjs.on("sprite-animate-remove", function (args) {
    if (storeAnimation[args]) {
      storeAnimation[args].remove();
    } else {
      vnjs.emit('vnjson.error', "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0438\u043D\u0434\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438 <font color=\"deepskyblue\">".concat(args, "</font>"));
    }
  });
  vnjs.on('sprite-animation.loop', function (id, n) {
    if (_args$1.onLoop) {
      vnjs.exec(_args$1.onLoop);
    }
  });
  vnjs.on('sprite-animation.end', function (id) {
    if (_args$1.onEnd) {
      vnjs.exec(_args$1.onEnd);
    }
  });
  vnjs.on('sprite-animate-move', function (args) {
    if (storeAnimation[args.id]) {
      $(storeAnimation[args.id].canvas).animate({
        top: args.top.replace(' ', ''),
        left: args.left.replace(' ', '')
      }, args.duration);
    } else {
      vnjs.emit('error', {
        ru: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0438\u043D\u0434\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438 <font color=\"deepskyblue\">".concat(args.id, "</font>"),
        en: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0438\u043D\u0434\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438 <font color=\"deepskyblue\">".concat(args.id, "</font>")
      }, jsyaml.dump(vnjs.ctx));
    }
  });

  var css = ".status-bar-push{\r\n    top: 40px;\r\n    left: 8px;\r\n    background-color: rgba(0,0,0,0.7);\r\n    border: 2px solid gray;\r\n    border-radius: 4px;\r\n    max-height: 215px;\r\n    width: 400px;\r\n    min-height: 50px;\r\n    padding: 5px;\r\n    flex-direction: column;\r\n    overflow: auto;\r\n}\r\n\r\n\r\n.status-bar__player-logo--status {\r\n    cursor: pointer;\r\n    animation-duration: 0.5s;\r\n    animation-name: push-status;\r\n    animation-iteration-count: infinite;\r\n    animation-direction: alternate;\r\n\r\n}\r\n.status-bar__player-logo--status:hover{\r\n    animation-name: unset;\r\n    border-color: deepskyblue;\r\n}\r\n@keyframes push-status {\r\n    from {\r\n        border-color: gray;\r\n        opacity: 0.1;\r\n    }\r\n    to {\r\n        border-color: deepskyblue;\r\n        opacity: 1;\r\n    }\r\n}\r\n.status-bar__push-status{\r\n    margin: 5px 0px;\r\n    border: 1px solid gray;\r\n    border-radius: 4px;\r\n    padding: 5px 5px;\r\n    display: flex;\r\n    align-items: center;\r\n\r\n}\r\n.status-bar__push-status--open{\r\n\r\n    cursor: pointer;\r\n}\r\n.status-bar__push-status--open:active{\r\n    border-color: magenta;\r\n}\r\n.status-bar-push__icon{\r\n    width: 30px;\r\n    height: 30px;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    min-width: 30px;\r\n    align-self: flex-start;\r\n\r\n}\r\n.status-bar-push__info{\r\n    line-height: 26px;\r\n    color: gray;\r\n    padding-left: 10px;\r\n}";
  n(css,{});

  var $tpl = $("<div class=\"status-bar-push component\"></div>");
  var $logo = null;
  var openList = false;
  var _args = null;
  function statusBarPush () {
    this.store.screen.append($tpl);
    $logo = $('.status-bar__logo-wrapper');
    vnjs.on('push', function (args) {
      return pushHandler(args);
    });
    $logo.on('click', function () {
      return clickHandler();
    });
  }

  function pushHandler(args) {
    _args = args;
    vnjs.state.data['pushStore'] = vnjs.state.data['pushStore'] || [];

    if (!args) {
      vnjs.state['pushStore'] = [];
      $tpl.empty();
      $tpl.close();
    } else {
      var message = _objectSpread2({}, args);
      /**
       * Проверяю существует ли запись с таким id
       */


      setTimeout(function () {
        outputMessages();
      }, 100);
      var itemExist = vnjs.state.data['pushStore'].find(function (item) {
        return item.id === _args.id;
      });
      if (itemExist) return;
      vnjs.state.data['pushStore'].push(message);
      updateStatus();
    }

    vnjs.emit('data-save', true);
  }

  function updateStatus() {
    $logo.addClass('status-bar__player-logo--status');

    if (vnjs["package"].push) {
      vnjs.emit('audio', vnjs["package"].push);
    }
  }

  function outputMessages() {
    $tpl.empty();
    var pushStore = vnjs.state.data.pushStore.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }

      if (a.id < b.id) {
        return -1;
      }

      return 0;
    }).reverse();
    /**
     * Перебираем массив с записями
     */

    pushStore.forEach(function (msg, index) {
      var $str = $("<div class=\"status-bar__push-status\">\n                            <div class=\"status-bar-push__icon\"></div>\n                            <div class=\"status-bar-push__info\">".concat(msg.info, "</div>       \n                      </div>"));
      var $icon = $str.find('.status-bar-push__icon');

      if (msg.icon) {
        var url = vnjs.getAssetByName(msg.icon).url;

        if (url) {
          $icon.css('background-image', "url(".concat(url, ")"));
          $icon.show();
        }
      } else {
        $icon.hide();
        $icon.css('background-image', "unset");
      }

      $tpl.append($str);
    });
  }

  function clickHandler() {
    $logo.removeClass('status-bar__player-logo--status');

    if (openList) {
      close();
    } else {
      if ($tpl.html() === "") return;
      open();
    }
  }

  function close() {
    $logo.removeClass('status-bar__push-status--open');
    $tpl.hide();
    openList = false;
  }

  function open() {
    $logo.addClass('status-bar__push-status--open');
    $tpl.css('display', 'flex');
    openList = true;
    $tpl.animate({
      scrollTop: $tpl.height()
    }, 500);
  }
  vnjs.on('dialog-box.click', function () {
    return close();
  });

  function evalVnjson () {
    vnjs.on('eval', function (str) {
      window.eval(str);
    });
  }

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
  vnjs.use(term);
  vnjs.use(table);
  vnjs.use(clear);
  vnjs.use(dialogBox);
  vnjs.use(hands);
  vnjs.use(data);
  vnjs.use(switchVnjson);
  vnjs.use(qa);
  vnjs.use(chess);
  vnjs.use(input$1);
  vnjs.use(wiki);
  vnjs.use(crossWord);
  vnjs.use(test);
  vnjs.use(slide);
  vnjs.use(content);
  vnjs.use(voice);
  vnjs.use(html);
  vnjs.use(discordLog);
  vnjs.use(statusBar); // minecraft

  vnjs.use(mcPlayer);
  vnjs.use(mcCheck);
  vnjs.use(mcExec);
  vnjs.use(mcGet); //

  vnjs.use(paintBoard);
  vnjs.use(clipBoard);
  vnjs.use(video);
  vnjs.use(typewrite);
  vnjs.use(area);
  vnjs.use(selectWord);
  vnjs.use(dragItems);
  vnjs.use(consoleVnjson);
  vnjs.use(blocks);
  vnjs.use(staticApp);
  vnjs.use(HUD);
  vnjs.use(dialogBoxInfo);
  vnjs.use(executeVnjson); //vnjs.use(filter);

  vnjs.use(spriteAnimate);
  vnjs.use(statusBarPush);
  vnjs.use(evalVnjson);
  /**
   * LOAD scenes
   */

  function showError(err) {
    var $errorWindow = $(".debug-error");
    $errorWindow.show();
    var $errorMessageContainer = $errorWindow.find(".debug-error__msg");

    var yamlError = vnjs._loadError();

    if (yamlError) {
      $errorMessageContainer.html(yamlError.msg);
      $errorWindow.find('.debug-error__path').html(yamlError.path);
      $errorWindow.find('.debug-error__pos').html(yamlError.pos);
      $errorWindow.find('.debug-error__code').html(yamlError.snippet);
    } else {
      $errorMessageContainer.html("Невалидный скрипт " + err.message);
    }
  }

  fetch("scenes/vn.json?v=".concat(new Date().getTime())).then(function (r) {
    return r.json();
  }).then(function (tree) {
    vnjs.mount(tree);

    if (tree.$root["package"].debug) {
      vnjs.use(debug);
      vnjs.use(debugUtils);
    }
  })["catch"](function (err) {
    showError(err);
    console.error("Invalid script", err.message);
  });
  vnjs.on("postload", function () {
    vnjs.config = {
      debug: vnjs["package"].debug,
      width: 1024,
      height: 768
    }; // ?jump=scene.label
    // ?jump=scene  //default $init

    var label = new URL(location.href).searchParams.get("jump");

    if (label) {
      var _label$split = label.split("."),
          _label$split2 = _slicedToArray(_label$split, 2),
          sceneName = _label$split2[0],
          labelName = _label$split2[1];

      vnjs.exec({
        jump: "".concat(sceneName, ".").concat(labelName)
      });
    } else {
      vnjs.exec({
        jump: "$root.$init"
      });
    }
  });

})();
//# sourceMappingURL=app.js.map
