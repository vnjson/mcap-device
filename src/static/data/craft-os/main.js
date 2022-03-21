/**
 * copy-cat: Copyright SquidDev 2022
 *
 * - clsx: Copyright Luke Edwards (MIT)
 *
 * @license
 */

define(['require', './persist-c5a57e09'], (function (require, persist) { 'use strict';

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		const n = Object.create(null);
		if (e) {
			for (const k in e) {
				if (k !== 'default') {
					const d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			}
		}
		n["default"] = e;
		return Object.freeze(n);
	}

	function toVal(mix) {
		var k, y, str='';

		if (typeof mix === 'string' || typeof mix === 'number') {
			str += mix;
		} else if (typeof mix === 'object') {
			if (Array.isArray(mix)) {
				for (k=0; k < mix.length; k++) {
					if (mix[k]) {
						if (y = toVal(mix[k])) {
							str && (str += ' ');
							str += y;
						}
					}
				}
			} else {
				for (k in mix) {
					if (mix[k]) {
						str && (str += ' ');
						str += k;
					}
				}
			}
		}

		return str;
	}

	function clsx () {
		var i=0, tmp, x, str='';
		while (i < arguments.length) {
			if (tmp = arguments[i++]) {
				if (x = toVal(tmp)) {
					str && (str += ' ');
					str += x;
				}
			}
		}
		return str;
	}

	/**
	 * Rather ugly wrapper for jszip which sets 'global' before loading it.
	 *
	 * Yes, it's horrible, but it's needed.
	 */
	const newZip = () => persist.__awaiter(void 0, void 0, void 0, function* () {
	    return new (yield new Promise(function (resolve, reject) { require(['jszip'], function (m) { resolve(/*#__PURE__*/_interopNamespace(m)); }, reject); })).default();
	});

	var lightTheme = "styles_lightTheme__191UM";
	var darkTheme = "styles_darkTheme__1U9nM";
	var actionButton = "styles_actionButton__2Ifbl styles_actionButton__1F016";
	var iconFont = "styles_iconFont__-Gsim styles_iconFont__3c41a";
	var infoDescription = "styles_infoDescription__pP2Bh";
	var tinyText = "styles_tinyText__2YSCs";
	var computerView = "styles_computerView__1SoV6";
	var computerSplit = "styles_computerSplit__MM2ky";
	var terminalView = "styles_terminalView__8godB";
	var editorView = "styles_editorView__35ZTj";
	var fileList = "styles_fileList__2E00A";
	var fileTree = "styles_fileTree__3tDIU";
	var fileEntryHead = "styles_fileEntryHead__3TBzg";
	var fileComputerControl = "styles_fileComputerControl__Blir9";
	var fileComputer = "styles_fileComputer__2tNY3";
	var fileComputerActions = "styles_fileComputerActions__3P9Zl";
	var active = "styles_active__1yNTI";
	var fileEntryName = "styles_fileEntryName__2WM4j";
	var fileEntryIcon = "styles_fileEntryIcon__2Exi0";
	var fileDropMarker = "styles_fileDropMarker__3W9Ik";
	var dragging = "styles_dragging__O5zNM";
	var editorPlaceholder = "styles_editorPlaceholder__3HPg1";
	var infoButtons = "styles_infoButtons__3o10Q";
	var dialogueOverlay = "styles_dialogueOverlay__19whf";
	var dialogueBox = "styles_dialogueBox__35Q4C";
	var formGroup = "styles_formGroup__fh6f8";
	var css_248z = ".styles_actionButton__1F016 {\n  background: none;\n  color: inherit;\n\n  border: none;\n  padding: 0;\n  margin: 0;\n\n  font-size: 1em;\n  font-family: inherit;\n  line-height: inherit;\n  cursor: pointer;\n}.styles_actionButton__1F016.styles_disabled__2upuz {\n  cursor: initial;\n  color: #888;\n}.styles_iconFont__3c41a {\n  height: 1em;\n  overflow: visible;\n}.styles_terminalView__10rIZ {\n  overflow-x: hidden;\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}.styles_terminalWrapper__kCZKS { }.styles_terminalCanvas__1r-GE {\n  image-rendering: optimizeSpeed;\n  image-rendering: -moz-crisp-edges;\n  image-rendering: -webkit-optimize-contrast;\n  image-rendering: -o-crisp-edges;\n  image-rendering: optimize-contrast;\n  -ms-interpolation-mode: nearest-neighbor;\n\n  display: block;\n}.styles_terminalBar__2j3wT {\n  background: #eee;\n  color: #000;\n  fill: #000;\n  font-size: 0.8em;\n}.styles_terminalInfo__FCM0y, .styles_terminalButton__3PSPO {\n  padding: 3px;\n  display: inline-block;\n}.styles_terminalButtonsRight__2ADfn {\n  float: right;\n}.styles_terminalButton__3PSPO:hover { background: #ddd; }.styles_terminalButton__3PSPO.styles_disabled__2upuz:hover { background: none; }.styles_terminalInput__2Xrix {\n  position: absolute;\n  z-index: -1000;\n  opacity: 0;\n}.styles_terminalProgress__2B7mn {\n  height: 2px;\n  background: #333;\n}\r\n\r\nhtml {\r\n  --color-dark-1: #1E1E1E;\r\n  --color-dark-2: #202020;\r\n  --color-dark-3: #292929;\r\n  --color-dark-4: #3b3b3b;\r\n  --color-dark-5: #555555;\r\n  --color-light-1: #ffffff;\r\n  --color-light-2: #eeeeee;\r\n  --color-light-3: #e7e7e7;\r\n  --color-light-4: #dddddd;\r\n  --color-light-5: #cccccc;\r\n  --color-yellow-1: #DEDE6C;\r\n}\r\n\r\n.styles_lightTheme__191UM {\r\n  --text-color: var(--color-dark-2);\r\n  --text-accent: var(--color-dark-4);\r\n  --bg-color: var(--color-light-1);\r\n  --bg-file-tree: var(--color-light-2);\r\n  --bg-file-tree-item: var(--color-light-3);\r\n  --bg-file-tree-item-highlight: var(--color-light-4);\r\n  --bg-file-tree-item-highlight-active: var(--color-light-5);\r\n  --link-color: rgb(3, 197, 197);\r\n  --bg-dialogue: var(--color-light-1);\r\n  --bg-input: var(--color-light-4);\r\n  --bg-code-block: var(--color-light-5);\r\n  --bg-button: var(--color-dark-1);\r\n}\r\n\r\n.styles_darkTheme__1U9nM {\r\n  --text-color: var(--color-light-2);\r\n  --text-accent: var(--color-light-4);\r\n  --bg-color: var(--color-dark-1);\r\n  --bg-file-tree: var(--color-dark-2);\r\n  --bg-file-tree-item: var(--color-dark-3);\r\n  --bg-file-tree-item-highlight: var(--color-dark-4);\r\n  --bg-file-tree-item-highlight-active: var(--color-dark-5);\r\n  --link-color: var(--color-yellow-1);\r\n  --bg-dialogue: var(--color-dark-2);\r\n  --bg-input: var(--color-dark-5);\r\n  --bg-code-block: var(--color-dark-5);\r\n  --bg-button: var(--color-light-1);\r\n}\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  body.styles_lightTheme__191UM {\r\n    --text-color: var(--color-light-2);\r\n    --text-accent: var(--color-light-4);\r\n    --bg-color: var(--color-dark-1);\r\n    --bg-file-tree: var(--color-dark-2);\r\n    --bg-file-tree-item: var(--color-dark-3);\r\n    --bg-file-tree-item-highlight: var(--color-dark-4);\r\n    --bg-file-tree-item-highlight-active: var(--color-dark-5);\r\n    --link-color: var(--color-yellow-1);\r\n    --bg-dialogue: var(--color-dark-2);\r\n    --bg-input: var(--color-dark-5);\r\n    --bg-button: var(--color-dark-1);\r\n  }\r\n}\r\n\r\n.styles_actionButton__2Ifbl {\r\n}\r\n\r\n.styles_iconFont__-Gsim {\r\n  fill: var(--bg-button);\r\n}\r\n\r\n.styles_infoDescription__pP2Bh {\r\n  padding: 5px 10px;\r\n}\r\n\r\n.styles_tinyText__2YSCs {\r\n  font-weight: 300;\r\n  font-size: 0.8em;\r\n  color: var(--text-accent);\r\n}\r\n\r\n.styles_errorView__2HREB {\r\n  background-color: #ffb6b6;\r\n  color: #670000;\r\n}\r\n\r\n.styles_termLine__2yWV7:before {\r\n  content: \"> \";\r\n}\r\n\r\n.styles_computerView__1SoV6 {\r\n  height: 100%;\r\n}\r\n\r\n.styles_computerSplit__MM2ky {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: space-between;\r\n}\r\n\r\n.styles_terminalView__8godB,\r\n.styles_editorView__35ZTj {\r\n  flex-grow: 1;\r\n  flex-shrink: 1;\r\n  overflow: hidden;\r\n  background: var(--bg-color);\r\n  color: var(--text-color)\r\n}\r\n\r\n\r\n.styles_fileList__2E00A {\r\n  position: relative;\r\n  flex-basis: 200px;\r\n  max-width: 200px;\r\n  background-color: var(--bg-file-tree);\r\n  color: var(--text-color);\r\n  font-size: 0.8em;\r\n  line-height: 1.4em;\r\n  overflow-y: auto;\r\n  scrollbar-width: thin;\r\n}\r\n\r\n.styles_fileTree__3tDIU {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.styles_fileEntryHead__3TBzg {\r\n  padding: 5px 15px;\r\n  cursor: pointer;\r\n  background-color: var(--bg-file-tree-item);\r\n}\r\n\r\n\r\n.styles_fileComputerControl__Blir9 {\r\n  position: relative;\r\n  background-color: var(--bg-file-tree-item);\r\n  color: var(--text-color);\r\n}\r\n\r\n.styles_fileComputer__2tNY3 {\r\n  padding: 10px 15px;\r\n  font-size: 1.3em;\r\n  cursor: pointer;\r\n  background-color: var(--bg-file-tree-item);\r\n  color: var(--text-color);\r\n}\r\n\r\n\r\n\r\n.styles_fileComputerActions__3P9Zl {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  pointer-events: none;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n\r\n.styles_fileComputerActions__3P9Zl .styles_actionButton__2Ifbl {\r\n  pointer-events: all;\r\n  width: 2em;\r\n  height: 2em;\r\n  margin: 5px;\r\n  text-align: center;\r\n}\r\n\r\n.styles_fileComputerActions__3P9Zl .styles_actionButton__2Ifbl:hover {\r\n  background: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.styles_fileEntryHead__3TBzg:hover,\r\n.styles_fileComputer__2tNY3:hover {\r\n  background: var(--bg-file-tree-item-highlight);\r\n}\r\n.styles_fileEntryHead__3TBzg.styles_active__1yNTI,\r\n.styles_fileComputer__2tNY3.styles_active__1yNTI,\r\n.styles_fileEntryHead__3TBzg.styles_active__1yNTI:hover,\r\n.styles_fileComputer__2tNY3.styles_active__1yNTI:hover {\r\n  background: var(--bg-file-tree-item-highlight-active);\r\n}\r\n\r\n\r\n.styles_fileEntryName__2WM4j {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n}\r\n\r\n.styles_fileEntryIcon__2Exi0 {\r\n  display: inline-block;\r\n  width: 1em;\r\n  padding: 0 5px;\r\n}\r\n\r\n\r\n.styles_fileDropMarker__3W9Ik {\r\n  display: none;\r\n}\r\n\r\n.styles_fileList__2E00A.styles_dragging__O5zNM .styles_fileDropMarker__3W9Ik {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n\r\n  /* Required for Chrome, as it fires dropleave events when entering children */\r\n  pointer-events: none;\r\n}\r\n\r\n.styles_fileDropMarker__3W9Ik > span {\r\n  color: white;\r\n  font-size: 2em;\r\n  padding: 10px;\r\n  text-align: center;\r\n  line-height: 1em;\r\n}\r\n\r\n.styles_editorPlaceholder__3HPg1 {\r\n  font-size: 3em;\r\n  color: #aaa;\r\n  text-align: center;\r\n  margin: 1em;\r\n}\r\n\r\n\r\n.styles_infoButtons__3o10Q {\r\n  position: fixed;\r\n  bottom: 5px;\r\n  left: 5px;\r\n  z-index: 50;\r\n}\r\n\r\n.styles_infoButtons__3o10Q > button {\r\n  opacity: 0.6;\r\n  padding: 0 3px;\r\n}\r\n\r\n.styles_infoButtons__3o10Q > button:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.styles_dialogueOverlay__19whf {\r\n  position: fixed;\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  right: 0px;\r\n\r\n  z-index: 150; /* Over notification and cogs */\r\n\r\n  background: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n\r\n.styles_dialogueBox__35Q4C {\r\n  position: relative;\r\n  top: 5vh;\r\n  margin: 0px auto;\r\n  padding: 20px;\r\n  box-sizing: border-box;\r\n  width: 90vw;\r\n  max-width: 800px;\r\n  max-height: 90vh;\r\n  overflow-y: scroll;\r\n  background: var(--bg-dialogue);\r\n  color: var(--text-color);\r\n}\r\n\r\n\r\n.styles_dialogueBox__35Q4C a {\r\n  color: var(--link-color);\r\n}\r\n\r\n.styles_formGroup__fh6f8 {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.styles_formGroup__fh6f8 > label {\r\n  flex-basis: 50%;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  font-weight: 500;\r\n}\r\n\r\n.styles_formGroup__fh6f8 .styles_tinyText__2YSCs {\r\n  overflow-wrap: anywhere;\r\n  margin: 0px;\r\n  color: var(--text-accent);\r\n}\r\n\r\n\r\n.styles_formGroup__fh6f8 input[type=\"text\"],\r\n.styles_formGroup__fh6f8 input[type=\"number\"],\r\n.styles_formGroup__fh6f8 select {\r\n  background-color: var(--bg-input);\r\n  color: var(--text-color);\r\n  margin-top: 2px;\r\n  display: block;\r\n  width: 100%;\r\n  border-style: none;\r\n  padding: 6px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.styles_formGroup__fh6f8 input[type=\"checkbox\"] {\r\n  margin: 0px 5px 0px 0px;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .styles_formGroup__fh6f8 > label {\r\n    flex-basis: 100%;\r\n  }\r\n}\r\n\r\n.styles_codeBlock__fnb1w {\r\n  background-color: var(--bg-code-block);\r\n  color: var(--text-color);\r\n  border-radius: 5px;\r\n}\r\n\r\n\r\nh1, h2, h3, p {\r\n  color: var(--text-color);\r\n}";
	persist.styleInject(css_248z);

	const mk = (child) => {
	    const node = persist.v("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1000 1000", class: iconFont }, child);
	    return () => node;
	};
	const Cog = mk(persist.v("path", { d: "M571 650q0 -59 -41 -101t-101 -42 -101 42 -42 101 42 101 101 42 101 -42 41 -101zm286 -61v124q0 7 -4 13t-11 7l-104 16q-10 30 -21 51 19 27 59 77 6 6 6 13t-5 13q-15 21 -55 61t-53 39q-7 0 -14 -5l-77 -60q-25 13 -51 21 -9 76 -16 104 -4 16 -20 16h-124q-8 0 -14 -5t-6 -12l-16 -103q-27 -9 -50 -21l-79 60q-6 5 -14 5 -8 0 -14 -6 -70 -64 -92 -94 -4 -5 -4 -13 0 -6 5 -12 8 -12 28 -37t30 -40q-15 -28 -23 -55l-102 -15q-7 -1 -11 -7t-5 -13v-124q0 -7 5 -13t10 -7l104 -16q8 -25 22 -51 -23 -32 -60 -77 -6 -7 -6 -14 0 -5 5 -12 15 -20 55 -60t53 -40q7 0 15 5l77 60q24 -13 50 -21 9 -76 17 -104 3 -16 20 -16h124q7 0 13 5t7 12l15 103q28 9 51 20l79 -59q5 -5 13 -5 7 0 14 5 72 67 92 95 4 5 4 12 0 7 -4 13 -9 12 -29 37t-30 40q15 28 23 54l102 16q7 1 12 7t4 13z" }));
	const Info = mk(persist.v("path", { d: "M571 918v-89q0 -8 -5 -13t-12 -5h-54v-286q0 -8 -5 -13t-13 -5h-178q-8 0 -13 5t-5 13v89q0 8 5 13t13 5h53v179h-53q-8 0 -13 5t-5 13v89q0 8 5 13t13 5h250q7 0 12 -5t5 -13zm-71 -500v-89q0 -8 -5 -13t-13 -5h-107q-8 0 -13 5t-5 13v89q0 8 5 13t13 5h107q8 0 13 -5t5 -13zm357 232q0 117 -57 215t-156 156 -215 58 -216 -58 -155 -156 -58 -215 58 -215 155 -156 216 -58 215 58 156 156 57 215z" }));
	const Download = mk(persist.v("path", { d: "M714 900q0 -15 -10 -25t-25 -11 -25 11 -11 25 11 25 25 11 25 -11 10 -25zm143 0q0 -15 -10 -25t-26 -11 -25 11 -10 25 10 25 25 11 26 -11 10 -25zm72 -125v179q0 22 -16 37t-38 16h-821q-23 0 -38 -16t-16 -37v-179q0 -22 16 -38t38 -16h259l75 76q33 32 76 32t76 -32l76 -76h259q22 0 38 16t16 38zm-182 -318q10 23 -8 39l-250 250q-10 11 -25 11t-25 -11l-250 -250q-17 -16 -8 -39 10 -21 33 -21h143v-250q0 -15 11 -25t25 -11h143q14 0 25 11t10 25v250h143q24 0 33 21z" }));
	const Lua = mk(persist.v("path", { d: "M882 650c0 -211 -171 -382 -382 -382s-382 171 -382 382c0 211 171 382 382 382s382 -171 382 -382m-112 -158c0 -62 -50 -112 -112 -112s-111 50 -111 112c0 61 50 112 111 112s112 -51 112 -112m224 -224c0 -62 -50 -112 -112 -112s-112 50 -112 112c0 61 51 112 112 112s112 -50 112 -112", fill: "#000080" }));
	const Text = mk(persist.v("path", { d: "M819 362q16 16 27 42t11 50v642q0 23 -15 38t-38 16h-750q-23 0 -38 -16t-16 -38v-892q0 -23 16 -38t38 -16h500q22 0 49 11t42 27zm-248 -136v210h210q-5 -17 -12 -23l-175 -175q-6 -7 -23 -12zm215 853v-572h-232q-23 0 -38 -16t-16 -37v-233h-429v858h715zm-572 -483q0 -7 5 -12t13 -5h393q8 0 13 5t5 12v36q0 8 -5 13t-13 5h-393q-8 0 -13 -5t-5 -13v-36zm411 125q8 0 13 5t5 13v36q0 8 -5 13t-13 5h-393q-8 0 -13 -5t-5 -13v-36q0 -8 5 -13t13 -5h393zm0 143q8 0 13 5t5 13v36q0 8 -5 13t-13 5h-393q-8 0 -13 -5t-5 -13v-36q0 -8 5 -13t13 -5h393z" }));
	const RightOpen = mk(persist.v("path", { d: "M618 639l-414 415q-11 10 -25 10t-25 -10l-93 -93q-11 -11 -11 -25t11 -25l296 -297 -296 -296q-11 -11 -11 -25t11 -25l93 -93q10 -11 25 -11t25 11l414 414q10 11 10 25t-10 25z" }));
	const DownOpen = mk(persist.v("path", { d: "M939 601l-414 413q-10 11 -25 11t-25 -11l-414 -413q-11 -11 -11 -26t11 -25l93 -92q10 -11 25 -11t25 11l296 296 296 -296q11 -11 25 -11t26 11l92 92q11 11 11 25t-11 26z" }));

	let monacoVal = null;
	let unique = 0;
	const modelFactory = (m, out, contents, name) => {
	    unique++; // We keep a unique id to ensure the Uri is not repeated.
	    const mode = name.endsWith(".lua") ? "luax" : undefined;
	    const text = m.editor.createModel(contents, mode, m.Uri.file(`f${unique.toString(16)}/${name}`));
	    text.updateOptions({ trimAutoWhitespace: true });
	    text.detectIndentation(true, 2);
	    const model = out;
	    model.resolved = true;
	    model.text = text;
	    model.view = null;
	    return model;
	};
	const forceModel = (model) => {
	    if (model.resolved)
	        return model;
	    const resolved = modelFactory(monacoVal, model, model.contents, model.name);
	    const old = model;
	    delete old.contents;
	    delete old.mode;
	    return resolved;
	};
	const createModel = (contents, name) => {
	    if (monacoVal)
	        return modelFactory(monacoVal, {}, contents, name);
	    const model = {
	        resolved: false, contents, name,
	        promise: new Promise(function (resolve, reject) { require(['./index-fc7f372a'], resolve, reject); }).then(m => {
	            monacoVal = m;
	            return forceModel(model);
	        }),
	    };
	    return model;
	};
	class Editor extends persist._ {
	    constructor() {
	        super(...arguments);
	        /**
	         * When the window resizes, we also need to update the editor's dimensions.
	         */
	        this.onResize = () => { var _a; return (_a = this.editor) === null || _a === void 0 ? void 0 : _a.layout(); };
	    }
	    componentDidMount() {
	        window.addEventListener("resize", this.onResize);
	        this.setupEditor();
	    }
	    setupEditor() {
	        if (!monacoVal) {
	            const promise = this.editorPromise = new Promise(function (resolve, reject) { require(['./index-fc7f372a'], resolve, reject); })
	                .then(x => {
	                monacoVal = x;
	                if (this.editorPromise !== promise)
	                    return;
	                this.setupEditor();
	            })
	                .catch(err => console.error(err));
	            // TODO: Actually decent handling.
	            return;
	        }
	        this.editorPromise = undefined;
	        // Clear the body of any elements
	        const base = this.base;
	        while (base.firstChild)
	            base.firstChild.remove();
	        this.editor = monacoVal.editor.create(base, {
	            roundedSelection: false,
	            autoIndent: "full",
	        });
	        this.editor.addAction({
	            id: "save",
	            label: "Save",
	            keybindings: [
	                monacoVal.KeyMod.CtrlCmd | monacoVal.KeyCode.KeyS,
	            ],
	            contextMenuGroupId: "file",
	            contextMenuOrder: 1.5,
	            run: editor => {
	                if (this.props.settings.trimWhitespace) {
	                    editor.getAction("editor.action.trimTrailingWhitespace").run();
	                }
	                this.props.doSave(editor.getValue());
	            },
	        });
	        this.syncOptions();
	    }
	    componentWillUnmount() {
	        window.removeEventListener("resize", this.onResize);
	        if (!this.editor)
	            return;
	        // Save the view state back to the model
	        forceModel(this.props.model).view = this.editor.saveViewState();
	        // And save the file
	        this.props.doSave(this.editor.getValue());
	        // We set a new session to prevent destroying it when losing the editor
	        this.editor.dispose();
	    }
	    componentWillUpdate() {
	        if (!this.editor)
	            return;
	        // Save the view state back to the model
	        forceModel(this.props.model).view = this.editor.saveViewState();
	    }
	    componentDidUpdate() {
	        if (!this.editor)
	            return;
	        this.syncOptions();
	    }
	    syncOptions() {
	        if (!this.editor)
	            return;
	        // No view patterns, alas.
	        const settings = this.props.settings;
	        const model = forceModel(this.props.model);
	        this.editor.setModel(model.text);
	        if (model.view)
	            this.editor.restoreViewState(model.view);
	        this.editor.updateOptions({
	            renderWhitespace: settings.showInvisible ? "boundary" : "none",
	        });
	        if (monacoVal !== null) {
	            monacoVal.editor.setTheme(settings.darkMode ? "vs-dark" : "vs");
	        }
	        // TODO: Tab size
	        if (this.props.focused)
	            this.editor.focus();
	    }
	    render() {
	        return persist.v("div", { class: editorView }, monacoVal ? undefined : persist.v("div", { class: editorPlaceholder }, "Loading..."));
	    }
	}

	const getIcon = (name, directory, expanded) => {
	    if (directory)
	        return expanded ? persist.v(DownOpen, null) : persist.v(RightOpen, null);
	    if (name.endsWith(".lua"))
	        return persist.v(Lua, null);
	    return persist.v(Text, null);
	};
	class FileEntry extends persist._ {
	    shouldComponentUpdate({ entry, depth, opened }, { expanded }) {
	        return entry !== this.props.entry || depth !== this.props.depth || opened !== this.props.opened ||
	            expanded !== this.state.expanded;
	    }
	    render({ computer, entry, name, path, depth, opened, open }, { expanded }) {
	        return persist.v("li", null,
	            persist.v("div", { class: `${fileEntryHead} ${opened === path ? active : ""}`, style: `padding-left: ${depth}em`, onClick: entry.isDirectory() ? () => this.setState({ expanded: !expanded }) : () => open(path, entry) },
	                persist.v("span", { class: fileEntryIcon }, getIcon(name, entry.isDirectory(), expanded || false)),
	                persist.v("span", { class: fileEntryName }, name)),
	            expanded
	                ? persist.v(FileTree, { computer: computer, entry: entry, path: path, depth: depth, opened: opened, open: open })
	                : null);
	    }
	}
	class FileTree extends persist._ {
	    constructor() {
	        super(...arguments);
	        this.listener = () => this.setState({ children: this.props.entry.getChildren() });
	    }
	    shouldComponentUpdate({ entry, depth, opened }, { children }) {
	        return entry !== this.props.entry || depth !== this.props.depth || children !== this.state.children ||
	            opened !== this.props.opened;
	    }
	    render({ computer, entry, path, depth, opened, open }, { children }) {
	        // Handle the case when we may have been deleted.
	        if (!entry.doesExist())
	            return "";
	        // Gather all children, and then sort them.
	        const entries = (children || entry.getChildren()).map(childName => {
	            const childPath = persist.joinName(path, childName);
	            const child = computer.getEntry(childPath);
	            return {
	                name: childName, dir: child.isDirectory(),
	                node: persist.v(FileEntry, { computer: computer, entry: child, path: childPath, name: childName, depth: depth === undefined ? 0 : depth + 1, opened: opened, open: open }),
	            };
	        });
	        entries.sort((a, b) => {
	            if (a.dir !== b.dir)
	                return a.dir ? -1 : 1;
	            return a.name < b.name ? -1 : 1;
	        });
	        return persist.v("ul", { class: fileTree }, entries.map(x => x.node));
	    }
	    componentDidMount() {
	        this.props.entry.getSemaphore().attach(this.listener);
	    }
	    componentWillUnmount() {
	        this.props.entry.getSemaphore().detach(this.listener);
	    }
	    componentDidUpdate({ entry }) {
	        if (this.props.entry !== entry) {
	            this.props.entry.getSemaphore().detach(this.listener);
	            entry.getSemaphore().attach(this.listener);
	        }
	    }
	}

	const createZip = (computer) => persist.__awaiter(void 0, void 0, void 0, function* () {
	    const zip = yield newZip();
	    const queue = [""];
	    while (true) {
	        const path = queue.pop();
	        if (path === undefined)
	            break;
	        const entry = computer.getEntry(path);
	        if (!entry)
	            continue;
	        if (entry.isDirectory()) {
	            if (path !== "")
	                zip.folder(path);
	            for (const child of entry.getChildren())
	                queue.push(persist.joinName(path, child));
	        }
	        else {
	            zip.file(path, entry.getContents().buffer);
	        }
	    }
	    return zip.generateAsync({ type: "blob" });
	});
	/**
	 * Determine if this is a simple archive - namely every child within it occurs
	 * within a directory with the same name as the archive.
	 * @param zip The zip to check.
	 * @param name The zip file's name, without the `.zip` extension.
	 * @return If this is a simple archive.
	 */
	const isSimpleZip = (zip, name) => {
	    for (const fileName in zip.files) {
	        if (!Object.prototype.hasOwnProperty.call(zip.files, fileName))
	            continue;
	        // Require every child to be in the ${name} directory.
	        if (!fileName.startsWith(name + "/"))
	            return false;
	    }
	    return true;
	};
	class Computer extends persist._ {
	    constructor(props, context) {
	        var _a;
	        super(props, context);
	        this.openFile = (path, file) => {
	            if (file.isDirectory())
	                return;
	            let entry = this.state.openFiles.get(file);
	            if (typeof entry === "undefined") {
	                const model = createModel(file.getStringContents(), path);
	                const monitor = () => {
	                    if (!file.doesExist()) {
	                        // If the file has been deleted, dispose the model and remove from the cache.
	                        if (model.resolved)
	                            model.text.dispose();
	                        file.getSemaphore().detach(monitor);
	                        this.state.openFiles.delete(file);
	                    }
	                };
	                entry = { model, monitor };
	                this.state.openFiles.set(file, entry);
	                file.getSemaphore().attach(monitor);
	            }
	            else {
	                // Update the contents from the file. Note, this may mess up the view a little - we'll have to cope.
	                const model = entry.model;
	                const contents = file.getStringContents();
	                if (model.resolved) {
	                    if (contents !== model.text.getValue())
	                        model.text.setValue(contents);
	                }
	                else {
	                    model.contents = contents;
	                }
	            }
	            this.setState({ activeFile: { file, path, model: entry.model } });
	        };
	        this.openComputer = () => {
	            this.setState({ activeFile: null });
	        };
	        this.saveZip = (e) => {
	            e.preventDefault();
	            e.stopPropagation();
	            createZip(this.state.computer)
	                .then(x => persist.saveBlob("computer", "zip", x))
	                .catch(err => console.error(err));
	        };
	        this.startDrag = (e) => {
	            e.preventDefault();
	            if (!this.state.dragging)
	                this.setState({ dragging: true });
	        };
	        this.stopDrag = () => {
	            this.setState({ dragging: false });
	        };
	        this.dropFile = (e) => {
	            e.preventDefault();
	            this.setState({ dragging: false });
	            if (!e.dataTransfer)
	                return;
	            if (e.dataTransfer.items) {
	                const items = e.dataTransfer.items;
	                // tslint:disable-next-line:prefer-for-of
	                for (let i = 0; i < items.length; i++) {
	                    const item = items[i];
	                    if (item.kind === "file")
	                        this.addFile(item.getAsFile());
	                }
	            }
	            else {
	                const files = e.dataTransfer.files;
	                // tslint:disable-next-line:prefer-for-of
	                for (let i = 0; i < files.length; i++)
	                    this.addFile(files[i]);
	            }
	        };
	        const terminal = new persist.TerminalData();
	        const terminalChanged = new persist.Semaphore();
	        const computer = new persist.ComputerAccess(new persist.StoragePersistence(0), terminal, terminalChanged, (label, on) => this.setState({ label, on }));
	        // Create a startup file if specified.
	        for (const field of window.location.search.substring(1).split("&")) {
	            const [key, value] = field.split("=");
	            if (key !== "startup")
	                continue;
	            let contents;
	            try {
	                contents = atob(value);
	            }
	            catch (e) {
	                console.error(e);
	                break;
	            }
	            contents = contents
	                .replace(/(\\|\n|")/g, "\\$1")
	                .replace("\r", "\\r").replace("\0", "\\0");
	            // We create a startup script which deletes itself, and then runs the
	            // original program. This allows it to be invisible, even in the event
	            // of syntax errors.
	            (_a = computer.createFile("startup.lua").value) === null || _a === void 0 ? void 0 : _a.setContents(`
fs.delete("startup.lua")
local fn, err = load("${contents}", "@startup.lua", nil, _ENV)
if not fn then error(err, 0) end
fn()`);
	        }
	        this.setState({
	            terminal, terminalChanged, computer,
	            activeFile: null, openFiles: new Map(),
	            id: 0, on: false, label: computer.getLabel(),
	            dragging: false,
	        });
	    }
	    componentDidMount() {
	        this.state.computer.start(this.props.computerSettings);
	    }
	    componentWillUnmount() {
	        this.state.computer.shutdown();
	        for (const [file, { model, monitor }] of this.state.openFiles) {
	            if (model.resolved)
	                model.text.dispose();
	            file.getSemaphore().detach(monitor);
	        }
	    }
	    shouldComponentUpdate({ focused, settings }, { id, label, on, activeFile, dragging }) {
	        return focused !== this.props.focused || settings !== this.props.settings ||
	            id !== this.state.id || label !== this.state.label || on !== this.state.on ||
	            activeFile !== this.state.activeFile || dragging !== this.state.dragging;
	    }
	    render({ settings, focused }, { terminal, terminalChanged, computer, activeFile, id, label, on, dragging: dragging$1 }) {
	        return persist.v("div", { class: computerView },
	            persist.v("div", { class: computerSplit },
	                persist.v("div", { class: `${fileList} ${dragging$1 ? dragging : ""}`, onDragOver: this.startDrag, onDragLeave: this.stopDrag, onDrop: this.dropFile },
	                    persist.v("div", { class: fileComputerControl },
	                        persist.v("div", { class: `${fileComputer} ${activeFile == null ? active : ""}`, onClick: this.openComputer }, id ? `Computer #${id}` : "Computer"),
	                        persist.v("div", { class: fileComputerActions },
	                            persist.v("button", { class: actionButton, type: "button", onClick: this.saveZip, title: "Download all files as a zip" },
	                                persist.v(Download, null)))),
	                    persist.v(FileTree, { computer: computer, entry: computer.getEntry(""), path: "", opened: activeFile === null ? null : activeFile.path, open: this.openFile }),
	                    persist.v("div", { class: fileDropMarker },
	                        persist.v("span", null, "Upload to your computer!"))),
	                activeFile == null
	                    ? persist.v("div", { class: terminalView },
	                        persist.v(persist.Terminal, { terminal: terminal, changed: terminalChanged, focused: focused, computer: computer, font: settings.terminalFont, id: id, label: label, on: on }))
	                    : persist.v(Editor, { model: activeFile.model, settings: settings, focused: focused, doSave: contents => activeFile.file.setContents(contents) })));
	    }
	    addOneFile(name, contents) {
	        const index = name.lastIndexOf(".");
	        const prefix = index > 0 ? name.substring(0, index) : name;
	        const suffix = index > 0 ? name.substring(index) : "";
	        // Add a number until we find a unique file. Or just give up at 100.
	        const computer = this.state.computer;
	        for (let i = 0; i < 100; i++) {
	            const uniqueName = i === 0 ? name : `${prefix}.${i}${suffix}`;
	            if (computer.getEntry(uniqueName))
	                continue;
	            const result = this.state.computer.createFile(uniqueName);
	            if (!result.value)
	                continue;
	            result.value.setContents(contents);
	            return;
	        }
	        console.warn(`Cannot write contents of ${name}.`);
	    }
	    addFile(file) {
	        if (file.name.endsWith(".zip")) {
	            // We attempt to unpack a zip file into a folder with the same name.
	            newZip()
	                .then((zip) => persist.__awaiter(this, void 0, void 0, function* () {
	                yield zip.loadAsync(file);
	                const computer = this.state.computer;
	                const zipName = file.name.substring(0, file.name.length - 4);
	                let dirName;
	                for (let i = 0; i < 100; i++) {
	                    dirName = i === 0 ? zipName : `${zipName}.${i}`;
	                    if (computer.getEntry(dirName))
	                        continue;
	                    const result = this.state.computer.createDirectory(dirName);
	                    if (result.value)
	                        break;
	                }
	                const offset = isSimpleZip(zip, zipName) ? zipName.length + 1 : 0;
	                for (const fileName in zip.files) {
	                    if (!Object.prototype.hasOwnProperty.call(zip.files, fileName) || fileName.length === offset)
	                        continue;
	                    let fullName = `${dirName}/${fileName.substr(offset)}`;
	                    const entry = zip.files[fileName];
	                    if (entry.dir) {
	                        if (fullName.endsWith("/"))
	                            fullName = fullName.substring(0, fullName.length - 1);
	                        if (!computer.createDirectory(fullName))
	                            console.warn(`Cannot create directory ${fullName}.`);
	                    }
	                    else {
	                        this.addOneFile(fullName, yield entry.async("arraybuffer"));
	                    }
	                }
	            }))
	                .catch(e => console.error(e));
	        }
	        else {
	            const reader = new FileReader();
	            reader.onload = () => this.addOneFile(file.name, reader.result);
	            reader.readAsArrayBuffer(file);
	        }
	    }
	}

	persist.v("div", { class: infoDescription },
	    persist.v("p", null,
	        "Think you've found a bug? Have a suggestion? Why not put it on ",
	        persist.v("a", { href: "https://github.com/SquidDev-CC/copy-cat", title: "The GitHub repository" }, "the GitHub repo"),
	        "?"));
	const About = () => persist.v("div", { class: dialogueBox },
	    persist.v("h2", null, "About"),
	    persist.v("p", null,
	        "Copy Cat is a web emulator for the popular Minecraft mod ",
	        persist.v("a", { href: "https://github.com/cc-tweaked/CC-Tweaked", target: "_blank", title: "CC: Tweaked's source code" }, "CC: Tweaked"),
	        " (based on ComputerCraft by Dan200). Here you can play with a ComputerCraft computer, write and test programs and experiment to your heart's desire, without having to leave your browser!"),
	    persist.v("p", null,
	        "However, due to the limitations of Javascript, some functionality may not be 100% accurate (most notably, that to do with HTTP and filesystems). For even closer emulation, I'd recommend ",
	        persist.v("a", { href: "https://emux.cc/", target: "_blank", title: "The CCEmuX emulator" }, "CCEmuX"),
	        "."),
	    persist.v("p", null,
	        "If you need help writing a program, I'd recommend checking out the ",
	        persist.v("a", { href: "https://forums.computercraft.cc/", target: "_blank", title: "The CC: Tweaked forums" }, "forums"),
	        " or ",
	        persist.v("a", { href: "https://discord.computercraft.cc", title: "The Minecraft Computer Mods Discord", target: "_blank" }, "Discord"),
	        ". ",
	        persist.v("a", { href: "https://tweaked.cc", target: "_blank", title: "The CC: Tweaked wiki" }, "The CC: Tweaked wiki"),
	        " may also be a good source of documentation."),
	    persist.v("p", null,
	        "Of course, this emulator is sure to have lots of bugs and missing features. If you've found a problem, why not put it on ",
	        persist.v("strong", null,
	            persist.v("a", { href: "https://github.com/SquidDev-CC/copy-cat/issues", title: "The Copy Cat GitHub issue tracker" }, "the GitHub repo")),
	        "?"),
	    persist.v("h3", null, "Credits"),
	    persist.v("p", null, "Copy Cat would not be possible without the help of several Open Source projects."),
	    persist.v("ul", null,
	        persist.v("li", null,
	            persist.v("a", { href: "https://github.com/konsoletyper/teavm", target: "_blank" }, "TeaVM"),
	            ": Apache 2.0"),
	        persist.v("li", null,
	            persist.v("a", { href: "https://github.com/google/guava", target: "_blank" }, "Google Guava"),
	            ": Apache 2.0"),
	        persist.v("li", null,
	            persist.v("a", { href: "https://github.com/apache/commons-lang", target: "_blank" }, "Apache Commons Lang"),
	            ": Apache 2.0, Copyright 2001-2018 The Apache Software Foundation"),
	        persist.v("li", null,
	            persist.v("a", { href: "https://github.com/SquidDev/Cobalt", target: "_blank" }, "Cobalt/LuaJ"),
	            ": MIT, Copyright (c) 2009-2011 Luaj.org. All rights reserved., modifications Copyright (c) 2015-2016 SquidDev"),
	        persist.v("li", null,
	            persist.v("a", { href: "https://github.com/cc-tweaked/CC-Tweaked", target: "_blank" }, "CC: Tweaked"),
	            ": ComputerCraft Public License"),
	        persist.v("li", null,
	            persist.v("a", { href: "https://github.com/FortAwesome/Font-Awesome/", target: "_blank" }, "Font Awesome"),
	            ": CC BY 4.0"),
	        persist.v("li", null,
	            "Numerous Javascript libraries. A full list can be found ",
	            persist.v("a", { href: "dependencies.txt", target: "_blank" }, "in the dependencies list"),
	            " or at the top of any Javascript file.")),
	    persist.v("pre", null, `This product includes software developed by Alexey Andreev (http://teavm.org).

This product includes software developed by The Apache Software Foundation (http://www.apache.org/).

This product includes software developed by Joda.org (http://www.joda.org/).`));

	/**
	 * The persisted map for settings
	 */
	class SettingStore {
	    constructor() {
	        this.data = {}; // eslint-disable-line @typescript-eslint/no-explicit-any
	        const settingJson = persist.get("settings");
	        if (settingJson !== null) {
	            try {
	                this.data = JSON.parse(settingJson);
	            }
	            catch (e) {
	                console.error("Cannot read settings", e);
	            }
	        }
	    }
	    /** Get the value of a config property under the current storage */
	    get(property) {
	        return property.id in this.data ? this.data[property.id] : property.def;
	    }
	    /** Set a value and fire any callbacks */
	    set(property, value) {
	        if (this.get(property) === value)
	            return;
	        this.data[property.id] = value;
	        property.changed(value);
	        persist.set("settings", JSON.stringify(this.data));
	    }
	}
	class ConfigGroup {
	    constructor(name, description, store) {
	        this.properties = [];
	        this.name = name;
	        this.description = description;
	        this.store = store;
	    }
	    add(property) {
	        this.properties.push(property); // FIXME: Work out an appropriate cast.
	        const value = this.store.get(property);
	        if (value !== property.def)
	            property.changed(value);
	        return property;
	    }
	    addString(id, name, def, description, changed) {
	        return this.add({ type: "string", id, name, description, def, changed });
	    }
	    addBoolean(id, name, def, description, changed) {
	        return this.add({ type: "boolean", id, name, description, def, changed });
	    }
	    addOption(id, name, def, choices, description, changed) {
	        return this.add({ type: "option", id, name, description, choices, def, changed });
	    }
	    addInt(id, name, def, min, max, description, changed) {
	        return this.add({ type: "int", id, name, description, def, min, max, changed });
	    }
	}
	function getUpdater(store, property, extract) {
	    return e => {
	        const value = extract(e.target);
	        if (value !== undefined)
	            store.set(property, value);
	    };
	}
	const getString = (x) => x.value;
	const getNumber = (x) => {
	    const v = parseInt(x.value, 10);
	    return Number.isNaN(v) ? undefined : v;
	};
	const getBool = (x) => x.checked;
	const getOption = (def, choices) => (x) => {
	    for (const { key } of choices) {
	        if (key === x.value)
	            return key;
	    }
	    return def;
	};
	const Settings = ({ store, configGroups }) => persist.v("div", { class: dialogueBox },
	    persist.v("h2", null, "Settings"),
	    configGroups.map(({ name, description, properties }) => [
	        persist.v("h3", null, name),
	        description ? persist.v("p", { class: tinyText }, description) : null,
	        persist.v("div", { class: formGroup }, properties.map(property => {
	            switch (property.type) {
	                case "string":
	                    return persist.v("label", null,
	                        property.name,
	                        persist.v("input", { type: "text", value: store.get(property), onChange: getUpdater(store, property, getString) }),
	                        persist.v("p", { class: tinyText }, property.description));
	                case "int":
	                    return persist.v("label", null,
	                        property.name,
	                        persist.v("input", { type: "number", value: store.get(property), min: property.min, max: property.max, step: 1, onChange: getUpdater(store, property, getNumber) }),
	                        persist.v("p", { class: tinyText }, property.description));
	                case "boolean":
	                    return persist.v("label", null,
	                        persist.v("input", { type: "checkbox", checked: store.get(property), onInput: getUpdater(store, property, getBool) }),
	                        property.name,
	                        persist.v("p", { class: tinyText }, property.description));
	                case "option":
	                    return persist.v("label", null,
	                        property.name,
	                        persist.v("select", { value: store.get(property), onInput: getUpdater(store, property, getOption(property.def, property.choices)) }, property.choices.map(({ key, value }) => persist.v("option", { value: key }, value))),
	                        persist.v("p", { class: tinyText }, property.description));
	            }
	        })),
	    ]));

	class Main extends persist._ {
	    constructor(props, context) {
	        super(props, context);
	        this.openSettings = () => {
	            this.setState({
	                dialogue: ({ settingStorage, configGroups }) => persist.v(Settings, { store: settingStorage, configGroups: configGroups }),
	            });
	        };
	        this.closeDialogueClick = (e) => {
	            if (e.target === e.currentTarget)
	                this.setState({ dialogue: undefined });
	        };
	        this.computerVDom = ({ settings, dialogue }) => {
	            return persist.v(Computer, { settings: settings, focused: dialogue === undefined, computerSettings: this.configFactory });
	        };
	        this.configFactory = (name, description) => {
	            const existing = this.state.configGroups.find(x => x.name === name);
	            if (existing) {
	                if (existing.description !== description) {
	                    console.warn(`Different descriptions for ${name} ("${description}" and "${existing.description}")`);
	                }
	                return existing;
	            }
	            const group = new ConfigGroup(name, description, this.state.settingStorage);
	            this.setState(s => ({ configGroups: [...s.configGroups, group] }));
	            return group;
	        };
	    }
	    componentWillMount() {
	        const settingStorage = new SettingStore();
	        const configEditor = new ConfigGroup("Editor", "Configure the built-in editor", settingStorage);
	        const configTerminal = new ConfigGroup("Terminal", "Configure the terminal display", settingStorage);
	        const configGroups = [configEditor, configTerminal];
	        const state = {
	            settingStorage, configGroups,
	            settings: {
	                showInvisible: true, trimWhitespace: true, darkMode: false,
	                terminalFont: persist.termFont,
	            },
	            currentVDom: this.computerVDom,
	        };
	        this.setState(state);
	        // Declare our settings
	        configEditor.addBoolean("editor.invisible", "Show invisible", state.settings.showInvisible, "Show invisible characters, such as spaces and tabs.", x => this.setState(s => ({ settings: Object.assign(Object.assign({}, s.settings), { showInvisible: x }) })));
	        configEditor.addBoolean("editor.trim_whitespace", "Trim whitespace", state.settings.trimWhitespace, "Trim whitespace from files when saving.", x => this.setState(s => ({ settings: Object.assign(Object.assign({}, s.settings), { trimWhitespace: x }) })));
	        configEditor.addBoolean("editor.dark", "Dark mode", state.settings.darkMode, "Enables dark mode.", x => {
	            this.setState(s => ({ settings: Object.assign(Object.assign({}, s.settings), { darkMode: x }) }));
	        });
	        const fonts = {
	            "standard": persist.termFont,
	            "hd": persist.termFontHd,
	            // Add some fallbacks for previous versions.
	            [persist.termFontHd]: persist.termFontHd, "term_font_hd.png": persist.termFontHd,
	            [persist.termFont]: persist.termFont, "term_font.png": persist.termFont
	        };
	        configTerminal.addOption("terminal.font", "Font", "standard", [
	            { key: "standard", value: "Standard font" },
	            { key: "hd", value: "High-definition font" },
	        ], "Which font the we should use within the terminal", x => this.setState(s => ({ settings: Object.assign(Object.assign({}, s.settings), { terminalFont: fonts[x] || persist.termFontHd }) })));
	    }
	    shouldComponentUpdate(_, newState) {
	        return this.state.currentVDom !== newState.currentVDom ||
	            this.state.dialogue !== newState.dialogue ||
	            this.state.settings !== newState.settings;
	    }
	    render(_, state) {
	        return persist.v("div", { class: clsx("container", { [darkTheme]: state.settings.darkMode, [lightTheme]: !state.settings.darkMode }) },
	            state.currentVDom(state),
	            persist.v("div", { class: infoButtons },
	                persist.v("button", { class: actionButton, title: "Configure how the emulator behaves", type: "button", onClick: this.openSettings },
	                    persist.v(Cog, null)),
	                persist.v("button", { class: actionButton, title: "Find out more about the emulator", type: "button", onClick: () => this.setState({ dialogue: () => persist.v(About, null) }) },
	                    persist.v(Info, null))),
	            state.dialogue ?
	                persist.v("div", { class: dialogueOverlay, onClick: this.closeDialogueClick }, state.dialogue(state)) : "");
	    }
	}
	{
	    requirejs.config({ paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.31.0/min/vs" } });
	    window.MonacoEnvironment = {
	        getWorkerUrl: (_workerId, _label) => `data:text/javascript;charset=utf-8,${encodeURIComponent(`
      self.MonacoEnvironment = {
        baseUrl: "https://cdn.jsdelivr.net/npm/monaco-editor@0.31.0/min/"
      };
      importScripts("https://cdn.jsdelivr.net/npm/monaco-editor@0.31.0/min/vs/base/worker/workerMain.js");
    `)}`,
	    };
	    // Start the window!
	    const page = document.getElementById("page");
	    persist.S(persist.v(Main, null), page, page.lastElementChild || undefined);
	}

}));
