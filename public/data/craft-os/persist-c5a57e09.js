/**
 * copy-cat: Copyright SquidDev 2022
 *
 * - @squid-dev/cc-web-term: Copyright SquidDev (BSD-3-Clause)
 * - clsx: Copyright Luke Edwards (MIT)
 * - d3-array: Copyright Mike Bostock (ISC)
 * - d3-time: Copyright Mike Bostock (ISC)
 * - d3-time-format: Copyright Mike Bostock (ISC)
 * - preact: Copyright  (MIT)
 * - setimmediate: Copyright YuzuJS (MIT)
 * - style-inject: Copyright EGOIST (MIT)
 * - tslib: Copyright Microsoft Corp. (0BSD)
 *
 * @license
 */

define(['require', 'exports'], (function (require, exports) { 'use strict';

    const termFont = "term_font-7d20694439125422.png";

    const termFontHd = "term_font_hd-0506b6efe5f7feae.png";

    var n,l,u,t,r,o,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n);}function v(l,u,i){var t,r,o,f={};for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===f[o]&&(f[o]=l.defaultProps[o]);return y(l,f,t,r,null)}function y(n,i,t,r,o){var f={type:n,props:i,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u:o};return null==o&&null!=l.vnode&&l.vnode(f),f}function d(n){return n.children}function _(n,l){this.props=n,this.context=l;}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(g);}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,r,o;n.__d&&(r=(t=(l=n).__v).__e,(o=l.__P)&&(u=[],(i=a({},t)).__v=t.__v+1,j(o,t,i,l.__n,void 0!==o.ownerSVGElement,null!=t.__h?[r]:null,u,null==r?k(t):r,t.__h),z(u,t),t.__e!=r&&b(t)));});}function w(n,l,u,i,t,r,o,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null;}j(n,_,p=p||e,t,r,o,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k(p));}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M(g[h],g[++h],g[++h]);}function x(n,l,u){for(var i,t=n.__k,r=0;t&&r<t.length;r++)(i=t[r])&&(i.__=n,l="function"==typeof i.type?x(i,l,u):P(u,i,i,t,i.__e,l));return l}function P(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else {for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,r),o=r;}return void 0!==o?o:t.nextSibling}function C(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||H(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||H(n,r,l[r],u[r],i);}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s.test(l)?u:u+"px";}function H(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?T:I,r):n.removeEventListener(l,r?T:I,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I(n){this.l[n.type+!1](l.event?l.event(n):n);}function T(n){this.l[n.type+!0](l.event?l.event(n):n);}function j(n,u,i,t,r,o,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k);});}h.context=x,h.props=m,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a(a({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w(n,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,r,o,f,c);(s=l.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l.__e(n,u,i);}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l.__e(n,u.__v);}});}function L(l,u,i,t,r,o,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(r=!0),null!=o)for(;_<o.length;_++)if((s=o[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,o[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),o=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(o=o&&n.call(l.childNodes),a=(y=i.props||e).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=o)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C(l,p,y,r,c),v)u.__k=[];else if(_=u.props.children,w(l,Array.isArray(_)?_:[_],u,i,t,r&&"foreignObject"!==d,o,f,o?o[0]:i.__k&&k(i,0),c),null!=o)for(_=o.length;_--;)null!=o[_]&&h(o[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==y.value||_!==l.value||"progress"===d&&!_)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1));}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l.__e(n,i);}}function N(n,u,i){var t,r;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l.__e(n,u);}t.base=t.__P=null;}if(t=n.__k)for(r=0;r<t.length;r++)t[r]&&N(t[r],u,"function"!=typeof n.type);i||null==n.__e||h(n.__e),n.__e=n.__d=void 0;}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var r,o,f;l.__&&l.__(u,i),o=(r="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j(i,u=(!r&&t||i).__k=v(d,null,[u]),o||e,e,void 0!==i.ownerSVGElement,!r&&t?[t]:o?null:i.firstChild?n.call(i.childNodes):null,f,!r&&t?t:o?o.__e:i.firstChild,r),z(f,u);}n=c.slice,l={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n}},u=0,_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this));},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this));},_.prototype.render=d,t=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    class Semaphore {
        constructor() {
            this.listeners = new Set();
        }
        attach(listener) {
            this.listeners.add(listener);
        }
        detach(listener) {
            this.listeners.delete(listener);
        }
        signal() {
            for (const listener of this.listeners)
                listener();
        }
    }

    const debug = window.location.protocol === "file:" || window.location.hostname === "localhost";
    /* eslint-disable no-console */
    const logger = debug
        ? (name) => (msg) => console.log(`[${name}] ${msg}`)
        : () => () => 0;

    const gifWorker = "gif.worker-8b0d4d4953c887a3.js";

    /*
     * The MIT License (MIT)
     *
     * Copyright (c) 2013-2018 Johan Nordberg
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    const log$1 = logger("GIF encoding");
    const defaults = {
        workers: 2,
        repeat: 0,
        background: "#fff",
        quality: 10,
        transparent: null,
        dither: false, // see GIFEncoder.js for dithering options
    };
    const frameDefaults = {
        delay: 500, // ms
    };
    class GIF {
        constructor(options) {
            this.running = false;
            this.frames = [];
            this.freeWorkers = [];
            this.activeWorkers = [];
            this.nextFrame = 0;
            this.finishedFrames = 0;
            this.globalPalette = true;
            this.options = Object.assign(Object.assign({}, defaults), options);
        }
        addFrame(image, options) {
            let data;
            if (image instanceof ImageData) {
                data = image.data;
            }
            else if (image instanceof CanvasRenderingContext2D) {
                data = this.getContextData(image);
            }
            else {
                throw new Error("Invalid image");
            }
            this.frames.push(Object.assign(Object.assign(Object.assign({}, frameDefaults), options), { transparent: this.options.transparent, data }));
        }
        render() {
            if (this.running)
                throw new Error("Already rendering");
            this.running = true;
            this.nextFrame = 0;
            this.finishedFrames = 0;
            this.imageParts = this.frames.map(() => null);
            const numWorkers = this.spawnWorkers();
            // We need to wait for the palette
            if (this.globalPalette === true) {
                this.renderNextFrame();
            }
            else {
                for (let i = 0; i < numWorkers; i++)
                    this.renderNextFrame();
            }
            if (this.onProgress)
                this.onProgress(0);
        }
        abort() {
            while (true) {
                const worker = this.activeWorkers.shift();
                if (worker == null)
                    break;
                log$1("Killing active worker");
                worker.terminate();
            }
            this.running = false;
            if (this.onAbort)
                this.onAbort();
        }
        spawnWorkers() {
            const numWorkers = Math.min(this.options.workers, this.frames.length);
            for (let i = this.freeWorkers.length; i < numWorkers; i++) {
                log$1(`Spawning worker ${i}`);
                const worker = new Worker(gifWorker);
                worker.onmessage = (event) => {
                    this.activeWorkers.splice(this.activeWorkers.indexOf(worker), 1);
                    this.freeWorkers.push(worker);
                    return this.frameFinished(event.data);
                };
                this.freeWorkers.push(worker);
            }
            return numWorkers;
        }
        frameFinished(frame) {
            if (!this.imageParts)
                throw new Error("No image data!");
            log$1(`Frame ${frame.index} finished - ${this.activeWorkers.length} active`);
            this.finishedFrames++;
            if (this.onProgress)
                this.onProgress(this.finishedFrames / this.frames.length);
            this.imageParts[frame.index] = frame;
            // Remember calculated palette, spawn the rest of the workers
            if (this.globalPalette === true) {
                this.globalPalette = frame.globalPalette;
                log$1("Global palette analyzed");
                if (this.frames.length > 2) {
                    for (let i = 1; i < this.freeWorkers.length; i++)
                        this.renderNextFrame();
                }
            }
            if (this.imageParts.indexOf(null) >= 0) {
                return this.renderNextFrame();
            }
            else {
                return this.finishRendering();
            }
        }
        finishRendering() {
            if (!this.imageParts)
                throw new Error("No image data!");
            const imageParts = this.imageParts;
            let len = 0;
            for (const frame of imageParts) {
                len += (frame.data.length - 1) * frame.pageSize + frame.cursor;
            }
            const lastFrame = imageParts[this.frames.length - 1];
            len += lastFrame.pageSize - lastFrame.cursor;
            log$1(`Rendering finished - filesize ${Math.round(len / 1000)}kb`);
            const data = new Uint8Array(len);
            let offset = 0;
            for (const frame of imageParts) {
                for (let i = 0; i < frame.data.length; i++) {
                    data.set(frame.data[i], offset);
                    offset += i === frame.data.length - 1 ? frame.cursor : frame.pageSize;
                }
            }
            if (this.onFinished)
                this.onFinished(new Blob([data], { type: "image/gif" }));
        }
        renderNextFrame() {
            if (this.freeWorkers.length === 0)
                throw new Error("No free workers");
            if (this.nextFrame >= this.frames.length)
                return;
            const worker = this.freeWorkers.shift();
            const task = this.getTask(this.nextFrame++);
            log$1(`Starting frame ${task.index + 1} of ${this.frames.length}`);
            this.activeWorkers.push(worker);
            return worker.postMessage(task);
        }
        getContextData(ctx) {
            return ctx.getImageData(0, 0, this.options.width, this.options.height).data;
        }
        getTask(index) {
            const frame = this.frames[index];
            return {
                index,
                data: frame.data,
                last: index === (this.frames.length - 1),
                delay: frame.delay,
                dispose: -1,
                transparent: frame.transparent,
                width: this.options.width,
                height: this.options.height,
                quality: this.options.quality,
                dither: this.options.dither,
                globalPalette: this.globalPalette,
                repeat: this.options.repeat,
                canTransfer: true,
            };
        }
    }

    const pad$1 = (val, len) => {
        const str = val.toString();
        return str.length >= len ? str : "0".repeat(len - str.length) + str;
    };
    /**
     * Save a Blob to a file
     *
     * @param prefix The file's prefix
     * @param extension The appropriate extension
     * @param blob The blob to save to
     */
    const saveBlob = (prefix, extension, blob) => {
        if (!blob)
            return;
        // Somewhat inspired by https://github.com/eligrey/FileSaver.js/blob/master/src/FileSaver.js
        // Goodness knows how well this works on non-modern browsers.
        const element = document.createElement("a");
        const url = URL.createObjectURL(blob);
        const now = new Date();
        element.download = `${prefix}-${now.getFullYear()}-${pad$1(now.getMonth() + 1, 2)}-${pad$1(now.getDate(), 2)}_` +
            `${pad$1(now.getHours(), 2)}-${pad$1(now.getMinutes(), 2)}.${extension}`;
        element.rel = "noopener";
        element.href = url;
        setTimeout(() => URL.revokeObjectURL(url), 60e3);
        setTimeout(() => {
            try {
                element.dispatchEvent(new MouseEvent("click"));
            }
            catch (e) {
                const mouseEvent = document.createEvent("MouseEvents");
                mouseEvent.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
                element.dispatchEvent(mouseEvent);
            }
        }, 0);
    };

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var actionButton = "styles_actionButton__3xs3X";
    var iconFont = "styles_iconFont__1_Va-";
    var terminalView = "styles_terminalView__1GLM4";
    var terminalWrapper = "styles_terminalWrapper__2h9UN";
    var terminalCanvas = "styles_terminalCanvas__z3bOI";
    var terminalBar = "styles_terminalBar__34fml";
    var terminalInfo = "styles_terminalInfo__4UlYr";
    var terminalButton = "styles_terminalButton__2Zt5N";
    var terminalButtonsRight = "styles_terminalButtonsRight__2AnBf";
    var terminalInput = "styles_terminalInput__2Xwdi";
    var terminalProgress = "styles_terminalProgress__3EyVi";
    var css_248z = ".styles_actionButton__3xs3X {\n  background: none;\n  color: inherit;\n\n  border: none;\n  padding: 0;\n  margin: 0;\n\n  font-size: 1em;\n  font-family: inherit;\n  line-height: inherit;\n  cursor: pointer;\n}\n\n.styles_actionButton__3xs3X.styles_disabled__12ZBD {\n  cursor: initial;\n  color: #888;\n}\n\n.styles_iconFont__1_Va- {\n  height: 1em;\n  overflow: visible;\n}\n\n.styles_terminalView__1GLM4 {\n  overflow-x: hidden;\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.styles_terminalWrapper__2h9UN { }\n\n.styles_terminalCanvas__z3bOI {\n  image-rendering: optimizeSpeed;\n  image-rendering: -moz-crisp-edges;\n  image-rendering: -webkit-optimize-contrast;\n  image-rendering: -o-crisp-edges;\n  image-rendering: optimize-contrast;\n  -ms-interpolation-mode: nearest-neighbor;\n\n  display: block;\n}\n\n.styles_terminalBar__34fml {\n  background: #eee;\n  color: #000;\n  fill: #000;\n  font-size: 0.8em;\n}\n\n.styles_terminalInfo__4UlYr, .styles_terminalButton__2Zt5N {\n  padding: 3px;\n  display: inline-block;\n}\n\n.styles_terminalButtonsRight__2AnBf {\n  float: right;\n}\n\n.styles_terminalButton__2Zt5N:hover { background: #ddd; }\n.styles_terminalButton__2Zt5N.styles_disabled__12ZBD:hover { background: none; }\n\n.styles_terminalInput__2Xwdi {\n  position: absolute;\n  z-index: -1000;\n  opacity: 0;\n}\n\n.styles_terminalProgress__3EyVi {\n  height: 2px;\n  background: #333;\n}\n";
    styleInject(css_248z);

    const mk = (child, viewbox) => {
        const node = v("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: viewbox !== null && viewbox !== void 0 ? viewbox : "0 0 1000 1000", class: iconFont }, child);
        return () => node;
    };
    const power = "M857 650q0 87 -34 166t-91 137 -137 92 -166 34 -167 -34 -136 -92 -92 -137 -34 -166q0 -102 45 -191t126 -151q24 -18 54 -14t46 28q18 23 14 53t-28 47q-54 41 -84 101t-30 127q0 58 23 111t61 91 91 61 111 23 110 -23 92 -61 61 -91 22 -111q0 -68 -30 -127t-84 -101q-23 -18 -28 -47t14 -53q17 -24 47 -28t53 14q81 61 126 151t45 191zm-357 -429v358q0 29 -21 50t-50 21 -51 -21 -21 -50v-358q0 -29 21 -50t51 -21 50 21 21 50z";
    const video = "M1000 346v608q0 23 -22 32 -7 3 -14 3 -15 0 -25 -10l-225 -225v92q0 67 -47 114t-113 47h-393q-67 0 -114 -47t-47 -114v-392q0 -67 47 -114t114 -47h393q66 0 113 47t47 114v92l225 -225q10 -10 25 -10 7 0 14 2 22 10 22 33z";
    const NoEntry = mk(v("path", { d: "M679 686v-72q0 -14 -11 -25t-25 -10h-429q-14 0 -25 10t-10 25v72q0 14 10 25t25 10h429q14 0 25 -10t11 -25zm178 -36q0 117 -57 215t-156 156 -215 58 -216 -58 -155 -156 -58 -215 58 -215 155 -156 216 -58 215 58 156 156 57 215z" }), "0 200 870 870");
    const Off = mk(v("path", { d: power }));
    const On = mk(v("path", { d: power, fill: "green" }));
    const Camera = mk(v("path", { d: "M536 525q66 0 113 47t47 114 -47 113 -113 47 -114 -47 -47 -113 47 -114 114 -47zm393 -232q59 0 101 42t41 101v500q0 59 -41 101t-101 42h-786q-59 0 -101 -42t-42 -101v-500q0 -59 42 -101t101 -42h125l28 -76q11 -27 39 -47t58 -20h286q29 0 57 20t39 47l29 76h125zm-393 643q103 0 176 -74t74 -176 -74 -177 -176 -73 -177 73 -73 177 73 176 177 74z" }), "0 0 1100 1100");
    const Videocam = mk(v("path", { d: video }), "0 100 1000 1000");
    const VideocamRecording = mk(v("path", { d: video, fill: "red" }), "0 100 1000 1000");
    const Fullscreen = mk(v("path", { d: "M421 261q0-7-5-13l-185-185 80-81q10-10 10-25t-10-25-25-11h-250q-15 0-25 11t-11 25v250q0 15 11 25t25 11 25-11l80-80 186 185q5 6 12 6t13-6l64-63q5-6 5-13z m436 482v-250q0-15-10-25t-26-11-25 11l-80 80-185-185q-6-6-13-6t-13 6l-64 64q-5 5-5 12t5 13l186 185-81 81q-10 10-10 25t10 25 25 11h250q15 0 26-11t10-25z" }), "0 -100 900 900");

    const convertMouseButton = (btn) => {
        switch (btn) {
            case 0: return 1; // Left
            case 1: return 3; // Middle
            case 2: return 2; // Right
            default: return undefined;
        }
    };
    const convertMouseButtons = (btn) => {
        if ((btn & 1) !== 0)
            return 1; // Left
        if ((btn & 2) !== 0)
            return 2; // Right
        if ((btn & 4) !== 0)
            return 3; // Middle
        return undefined;
    };
    /**
     * Mapping of KeyboardEvent.code and KeyboardEvent.key
     *
     * @see https://www.w3.org/TR/uievents-key/
     * @see https://www.w3.org/TR/uievents-code/
     */
    const keyboardCodes = {
        "Digit1": 0 /* One */, "1": 0 /* One */,
        "Digit2": 1 /* Two */, "2": 1 /* Two */,
        "Digit3": 2 /* Three */, "3": 2 /* Three */,
        "Digit4": 3 /* Four */, "4": 3 /* Four */,
        "Digit5": 4 /* Five */, "5": 4 /* Five */,
        "Digit6": 5 /* Six */, "6": 5 /* Six */,
        "Digit7": 6 /* Seven */, "7": 6 /* Seven */,
        "Digit8": 7 /* Eight */, "8": 7 /* Eight */,
        "Digit9": 8 /* Nine */, "9": 8 /* Nine */,
        "Digit0": 9 /* Zero */, "0": 9 /* Zero */,
        "Minus": 10 /* Minus */, "-": 10 /* Minus */,
        "Equal": 11 /* Equals */,
        "Backspace": 12 /* Backspace */,
        "Tab": 13 /* Tab */,
        "KeyQ": 30 /* Q */, "Q": 30 /* Q */,
        "KeyW": 36 /* W */, "W": 36 /* W */,
        "KeyE": 18 /* E */, "E": 18 /* E */,
        "KeyR": 31 /* R */, "R": 31 /* R */,
        "KeyT": 33 /* T */, "T": 33 /* T */,
        "KeyY": 38 /* Y */, "Y": 38 /* Y */,
        "KeyU": 34 /* U */, "U": 34 /* U */,
        "KeyI": 22 /* I */, "I": 22 /* I */,
        "KeyO": 28 /* O */, "O": 28 /* O */,
        "KeyP": 29 /* P */, "P": 29 /* P */,
        "BracketLeft": 40 /* LeftBracket */, "(": 40 /* LeftBracket */,
        "BracketRight": 41 /* RightBracket */, ")": 41 /* RightBracket */,
        "Enter": 42 /* Enter */,
        "ControlLeft": 43 /* LeftCtrl */, "Control": 43 /* LeftCtrl */,
        "KeyA": 14 /* A */, "A": 14 /* A */,
        "KeyS": 32 /* S */, "S": 32 /* S */,
        "KeyD": 17 /* D */, "D": 17 /* D */,
        "KeyF": 19 /* F */, "F": 19 /* F */,
        "KeyG": 20 /* G */, "G": 20 /* G */,
        "KeyH": 21 /* H */, "H": 21 /* H */,
        "KeyJ": 23 /* J */, "J": 23 /* J */,
        "KeyK": 24 /* K */, "K": 24 /* K */,
        "KeyL": 25 /* L */, "L": 25 /* L */,
        "Semicolon": 44 /* SemiColon */, ";": 44 /* SemiColon */,
        "Quote": 45 /* Apostrophe */, "'": 45 /* Apostrophe */,
        "Backquote": 46 /* Grave */, "`": 46 /* Grave */,
        "ShiftLeft": 47 /* LeftShift */, "Shift": 47 /* LeftShift */,
        "IntlBackslash": 48 /* Backslash */,
        "KeyZ": 39 /* Z */, "Z": 39 /* Z */,
        "KeyX": 37 /* X */, "X": 37 /* X */,
        "KeyC": 16 /* C */, "C": 16 /* C */,
        "KeyV": 35 /* V */, "V": 35 /* V */,
        "KeyB": 15 /* B */, "B": 15 /* B */,
        "KeyN": 27 /* N */, "N": 27 /* N */,
        "KeyM": 26 /* M */, "M": 26 /* M */,
        "Comma": 49 /* Comma */, ",": 49 /* Comma */,
        "Period": 50 /* Period */, ".": 50 /* Period */,
        "Slash": 51 /* Slash */, "/": 51 /* Slash */,
        "ShiftRight": 52 /* RightShift */,
        "NumpadMultiply": 53 /* Multiply */,
        "AltLeft": 54 /* LeftAlt */, "Alt": 54 /* LeftAlt */,
        "Space": 55 /* Space */, " ": 55 /* Space */,
        "CapsLock": 56 /* CapsLock */,
        "F1": 57 /* F1 */,
        "F2": 58 /* F2 */,
        "F3": 59 /* F3 */,
        "F4": 60 /* F4 */,
        "F5": 61 /* F5 */,
        "F6": 62 /* F6 */,
        "F7": 63 /* F7 */,
        "F8": 64 /* F8 */,
        "F9": 65 /* F9 */,
        "F10": 66 /* F10 */,
        "NumLock": 72 /* NumLock */,
        "ScollLock": 73 /* ScrollLock */,
        "Numpad7": 81 /* NumPad7 */,
        "Numpad8": 82 /* NumPad8 */,
        "Numpad9": 83 /* NumPad9 */,
        "NumpadSubtract": 84 /* NumPadSubtract */,
        "Numpad4": 78 /* NumPad4 */,
        "Numpad5": 79 /* NumPad5 */,
        "Numpad6": 80 /* NumPad6 */,
        "NumpadAdd": 85 /* NumPadAdd */,
        "Numpad1": 75 /* NumPad1 */,
        "Numpad2": 76 /* NumPad2 */,
        "Numpad3": 77 /* NumPad3 */,
        "Numpad0": 74 /* NumPad0 */,
        "NumpadDecimal": 86 /* NumPadDecimal */,
        "F11": 67 /* F11 */,
        "F12": 68 /* F12 */,
        "F13": 69 /* F13 */,
        "F14": 70 /* F14 */,
        "F15": 71 /* F15 */,
        // I have absolutely no clue about these. If someone has a keyboard with these
        // on, please confim that they're right.
        "KanaMode": 87 /* Kana */,
        "Convert": 88 /* Convert */,
        "NonConvert": 89 /* Noconvert */,
        "IntlYen": 90 /* Yen */,
        "NumpadEqual": 91 /* NumPadEquals */,
        "Cirmcumflex": 92 /* Circumflex */,
        "At": 93 /* At */,
        "Colon": 94 /* Colon */,
        "Underscore": 95 /* Underscore */,
        "Kanji": 96 /* Kanji */,
        "Stop": 97 /* Stop */,
        "Ax": 98 /* Ax */,
        "NumpadEnter": 99 /* NumPadEnter */,
        "ControlRight": 100 /* RightCtrl */,
        "NumpadComma": 101 /* NumPadComma */,
        "NumpadDivide": 102 /* NumPadDivide */,
        "AltRight": 103 /* RightAlt */,
        "Pause": 104 /* Pause */,
        "Home": 105 /* Home */,
        "ArrowUp": 106 /* Up */,
        "PageUp": 107 /* PageUp */,
        "ArrowLeft": 108 /* Left */,
        "ArrowRight": 109 /* Right */,
        "End": 110 /* End */,
        "ArrowDown": 111 /* Down */,
        "PageDown": 112 /* PageDown */,
        "Insert": 113 /* Insert */,
        "Delete": 114 /* Delete */,
    };
    const convertKey = (key) => keyboardCodes[key];
    const lwjgl3Codes = [
        49 /* one */, 50 /* two */, 51 /* three */, 52 /* four */, 53 /* five */, 54 /* six */, 55 /* seven */, 56 /* eight */, 57 /* nine */, 48 /* zero */,
        45 /* minus */,
        61 /* equals */,
        259 /* backspace */,
        258 /* tab */,
        65 /* a */, 66 /* b */, 67 /* c */, 68 /* d */, 69 /* e */, 70 /* f */, 71 /* g */, 72 /* h */, 73 /* i */, 74 /* j */, 75 /* k */, 76 /* l */, 77 /* m */, 78 /* n */, 79 /* o */, 80 /* p */, 81 /* q */, 82 /* r */, 83 /* s */, 84 /* t */, 85 /* u */, 86 /* v */, 87 /* w */, 88 /* x */, 89 /* y */, 90 /* z */,
        91 /* leftBracket */,
        93 /* rightBracket */,
        257 /* enter */,
        341 /* leftCtrl */,
        -1 /* semiColon */,
        39 /* apostrophe */,
        96 /* grave */,
        340 /* leftShift */,
        92 /* backslash */,
        44 /* comma */,
        46 /* period */,
        47 /* slash */,
        344 /* rightShift */,
        -1 /* multiply */,
        342 /* leftAlt */,
        32 /* space */,
        280 /* capsLock */,
        290 /* f1 */, 291 /* f2 */, 292 /* f3 */, 293 /* f4 */, 294 /* f5 */, 295 /* f6 */, 296 /* f7 */, 297 /* f8 */, 298 /* f9 */, 299 /* f10 */, 300 /* f11 */, 301 /* f12 */, 302 /* f13 */, 303 /* f14 */, 304 /* f15 */,
        282 /* numLock */,
        281 /* scrollLock */,
        320 /* numPad0 */, 321 /* numPad1 */, 322 /* numPad2 */, 323 /* numPad3 */, 324 /* numPad4 */, 325 /* numPad5 */, 326 /* numPad6 */, 327 /* numPad7 */, 328 /* numPad8 */, 329 /* numPad9 */,
        333 /* numPadSubtract */,
        334 /* numPadAdd */,
        330 /* numPadDecimal */,
        -1 /* kana */,
        -1 /* convert */,
        -1 /* noconvert */,
        -1 /* yen */,
        -1 /* numPadEquals */,
        -1 /* circumflex */,
        -1 /* at */,
        -1 /* colon */,
        -1 /* underscore */,
        -1 /* kanji */,
        -1 /* stop */,
        -1 /* ax */,
        335 /* numPadEnter */,
        345 /* rightCtrl */,
        -1 /* numPadComma */,
        331 /* numPadDivide */,
        346 /* rightAlt */,
        284 /* pause */,
        268 /* home */,
        265 /* up */,
        266 /* pageUp */,
        263 /* left */,
        262 /* right */,
        269 /* end */,
        264 /* down */,
        267 /* pageDown */,
        260 /* insert */,
        261 /* delete */,
    ];
    const lwjgl3Code = (key) => {
        const result = lwjgl3Codes[key];
        return result < 0 ? undefined : result;
    };

    const defaultPalette = {
        0: "rgb(240,240,240)",
        1: "rgb(242,178,51)",
        2: "rgb(229,127,216)",
        3: "rgb(153,178,242)",
        4: "rgb(222,222,108)",
        5: "rgb(127,204,25)",
        6: "rgb(242,178,204)",
        7: "rgb(76,76,76)",
        8: "rgb(153,153,153)",
        9: "rgb(76,153,178)",
        a: "rgb(178,102,229)",
        b: "rgb(17,17,17)",//
        c: "rgb(127,102,76)",
        d: "rgb(87,166,78)",
        e: "rgb(204,76,76)",
        f: "rgb(17,17,17)", // Black
    };
    class TerminalData {
        constructor() {
            this.palette = defaultPalette;
            this.currentFore = "0";
            this.sizeX = 0;
            this.sizeY = 0;
            this.cursorX = 0;
            this.cursorY = 0;
            this.cursorBlink = false;
            this.text = [];
            this.fore = [];
            this.back = [];
        }
        resize(width, height) {
            this.sizeX = width;
            this.sizeY = height;
            this.text = new Array(height);
            this.fore = new Array(height);
            this.back = new Array(height);
            let baseText = "";
            let baseFore = "";
            let baseBack = "";
            for (let x = 0; x < width; x++) {
                baseText += " ";
                baseFore += this.currentFore;
                baseBack += "f";
            }
            for (let y = 0; y < height; y++) {
                this.text[y] = baseText;
                this.fore[y] = baseFore;
                this.back[y] = baseBack;
            }
        }
    }

    const cellWidth = 6;
    const cellHeight = 9;
    const terminalMargin = 4;
    const fonts = {};
    const loadPalette = ({ image, paletteCache }, colour) => {
        const cached = paletteCache[colour];
        if (cached)
            return cached;
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = image.width;
        canvas.height = image.height;
        context.globalCompositeOperation = "destination-atop";
        context.fillStyle = colour;
        context.globalAlpha = 1.0;
        context.fillRect(0, 0, image.width, image.height);
        context.drawImage(image, 0, 0);
        paletteCache[colour] = canvas;
        return canvas;
    };
    const loadFont = (path) => {
        const cached = fonts[path];
        if (cached)
            return cached;
        const image = new Image();
        image.src = path;
        const font = fonts[path] = {
            path,
            image,
            scale: 1,
            margin: 1,
            paletteCache: {},
        };
        font.promise = new Promise(resolve => {
            image.onload = () => {
                for (const key in defaultPalette) {
                    if (!Object.prototype.hasOwnProperty.call(defaultPalette, key))
                        continue;
                    loadPalette(font, defaultPalette[key]);
                }
                font.scale = font.margin = image.width / 256;
                font.promise = undefined;
                resolve(font);
            };
        });
        return font;
    };
    const background = (ctx, x, y, color, scale, width, height, palette) => {
        let actualWidth = cellWidth * scale;
        let actualHeight = cellHeight * scale;
        let cellX = x * actualWidth + terminalMargin;
        let cellY = y * actualHeight + terminalMargin;
        if (x === 0) {
            cellX -= terminalMargin;
            actualWidth += terminalMargin;
        }
        if (x === width - 1) {
            actualWidth += terminalMargin;
        }
        if (y === 0) {
            cellY -= terminalMargin;
            actualHeight += terminalMargin;
        }
        if (y === height - 1) {
            actualHeight += terminalMargin;
        }
        ctx.beginPath();
        ctx.rect(cellX, cellY, actualWidth, actualHeight);
        ctx.fillStyle = palette[color] || palette["f"];
        ctx.fill();
    };
    const foreground = (ctx, x, y, color, chr, palette, scale, font) => {
        if (font.promise)
            return;
        const actualWidth = cellWidth * scale;
        const actualHeight = cellHeight * scale;
        const cellX = x * actualWidth + terminalMargin;
        const cellY = y * actualHeight + terminalMargin;
        const charcode = chr.charCodeAt(0);
        const imageW = cellWidth * font.scale;
        const imageH = cellHeight * font.scale;
        const imgX = font.margin + (charcode % 16) * (imageW + font.margin * 2);
        const imgY = font.margin + Math.floor(charcode / 16) * (imageH + font.margin * 2);
        ctx.drawImage(loadPalette(font, palette[color] || palette["0"]), imgX, imgY, imageW, imageH, cellX, cellY, cellWidth * scale, cellHeight * scale);
    };
    const terminal = (ctx, term, blink, scale, font) => {
        const sizeX = term.sizeX;
        const sizeY = term.sizeY;
        for (let y = 0; y < sizeY; y++) {
            for (let x = 0; x < sizeX; x++) {
                background(ctx, x, y, term.back[y].charAt(x), scale, term.sizeX, term.sizeY, term.palette);
                foreground(ctx, x, y, term.fore[y].charAt(x), term.text[y].charAt(x), term.palette, scale, font);
            }
        }
        if (blink && term.cursorBlink &&
            term.cursorX >= 0 && term.cursorX < sizeX &&
            term.cursorY >= 0 && term.cursorY < sizeY) {
            foreground(ctx, term.cursorX, term.cursorY, term.currentFore, "_", term.palette, scale, font);
        }
    };
    const bsod = (ctx, width, height, text, scale, font) => {
        ctx.beginPath();
        ctx.rect(0, 0, width * cellWidth * scale + terminalMargin * 2, height * cellHeight * scale + terminalMargin * 2);
        ctx.fillStyle = defaultPalette.b;
        ctx.fill();
        /*const startX = Math.floor((width - text.length) / 2);
        const startY = Math.floor((height - 1) / 2);
        for (let x = 0; x < text.length; x++) {
            foreground(ctx, startX + x, startY, "0", text.charAt(x), defaultPalette, scale, font);
        }*/
    };

    const log = logger("Terminal");
    const clamp = (value, min, max) => {
        if (value < min)
            return min;
        if (value > max)
            return max;
        return value;
    };
    const labelElement = (id, label) => {
        if (id === null && label === null)
            return "Unlabeled computer";
        if (id === null)
            return `${label}`;
        if (label === null)
            return `Computer #${id}`;
        return `${label} (Computer #${id})`;
    };
    class Terminal extends _ {
        constructor(props, context) {
            super(props, context);
            this.changed = false;
            this.lastBlink = false;
            this.mounted = false;
            this.drawQueued = false;
            this.lastX = -1;
            this.lastY = -1;
            this.gif = null;
            this.lastGifFrame = null;
            this.onResized = () => {
                this.changed = true;
                this.queueDraw();
            };
            this.onPaste = (event) => {
                this.onEventDefault(event);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this.paste((event.clipboardData || window.clipboardData));
            };
            this.onMouse = (event) => {
                this.onEventDefault(event);
                if (!this.canvasElem)
                    return;
                // If we"re a mouse move and nobody is pressing anything, let"s
                // skip for now.
                if (event.type === "mousemove" && event.buttons === 0)
                    return;
                const { x, y } = this.convertMousePos(event);
                switch (event.type) {
                    case "mousedown": {
                        const button = convertMouseButton(event.button);
                        if (button) {
                            this.props.computer.queueEvent("mouse_click", [button, x, y]);
                            this.lastX = x;
                            this.lastY = y;
                        }
                        break;
                    }
                    case "mouseup": {
                        const button = convertMouseButton(event.button);
                        if (button) {
                            this.props.computer.queueEvent("mouse_up", [button, x, y]);
                            this.lastX = x;
                            this.lastY = y;
                        }
                        break;
                    }
                    case "mousemove": {
                        const button = convertMouseButtons(event.buttons);
                        if (button && (x !== this.lastX || y !== this.lastY)) {
                            this.props.computer.queueEvent("mouse_drag", [button, x, y]);
                            this.lastX = x;
                            this.lastY = y;
                        }
                    }
                }
            };
            this.onMouseWheel = (event) => {
                this.onEventDefault(event);
                if (!this.canvasElem)
                    return;
                const { x, y } = this.convertMousePos(event);
                if (event.deltaY !== 0) {
                    this.props.computer.queueEvent("mouse_scroll", [Math.sign(event.deltaY), x, y]);
                }
            };
            this.onEventDefault = (event) => {
                event.preventDefault();
                if (this.inputElem)
                    this.inputElem.focus();
            };
            this.onKey = (event) => {
                if (!this.canvasElem)
                    return;
                // Handle pasting. Might be worth adding shift+insert support too.
                // Note this is needed as we block the main paste event.
                if (event.type === "keydown" && (event.ctrlKey && event.code === "KeyV")) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const data = window.clipboardData;
                    if (data) {
                        this.paste(data);
                        this.onEventDefault(event);
                    }
                    return;
                }
                // Try to pull the key number from the event. We first try the key code
                // (ideal, as it's independent of layout), then the key itself, or the
                // uppercase key (tacky shortcut to handle 'a' and 'A').
                let code = convertKey(event.code);
                if (code === undefined)
                    code = convertKey(event.key);
                if (code === undefined)
                    code = convertKey(event.key.toUpperCase());
                if (code !== undefined || event.key.length === 1)
                    this.onEventDefault(event);
                if (event.type === "keydown") {
                    if (code !== undefined)
                        this.props.computer.keyDown(code, event.repeat);
                    if (!event.altKey && !event.ctrlKey && event.key.length === 1) {
                        this.props.computer.queueEvent("char", [event.key]);
                    }
                }
                else if (event.type === "keyup") {
                    if (code !== undefined)
                        this.props.computer.keyUp(code);
                }
            };
            this.onInput = (event) => {
                const target = event.target;
                this.onEventDefault(event);
                // Some browsers (*cough* Chrome *cough*) don't provide
                // KeyboardEvent.{code, key} for printable characters. Let's scrape it from
                // the input instead.
                const value = target.value;
                if (!value)
                    return;
                target.value = "";
                this.props.computer.queueEvent(value.length === 1 ? "char" : "paste", [value]);
            };
            this.onTerminate = (event) => {
                this.onEventDefault(event);
                this.props.computer.queueEvent("terminate", []);
            };
            this.onChanged = () => {
                this.changed = true;
                this.queueDraw();
            };
            this.onPowerOff = (event) => {
                this.onEventDefault(event);
                this.props.computer.shutdown();
            };
            this.onPowerOn = (event) => {
                this.onEventDefault(event);
                this.props.computer.turnOn();
            };
            this.onScreenshot = (event) => {
                this.onEventDefault(event);
                if (!this.canvasElem)
                    return;
                this.canvasElem.toBlob(blob => saveBlob("computer", "png", blob), "image/png", 1);
            };
            this.onRecord = (event) => {
                this.onEventDefault(event);
                if (!this.canvasElem)
                    return;
                switch (this.state.recording) {
                    // Skip the cases when we've got no data
                    case 2 /* Rendering */:
                        break;
                    // If we're not recording, start recording.
                    case 0 /* None */:
                        this.gif = new GIF({
                            width: this.canvasElem.width,
                            height: this.canvasElem.height,
                            quality: 10,
                        });
                        this.lastGifFrame = Date.now();
                        this.setState({ recording: 1 /* Recording */ });
                        break;
                    case 1 /* Recording */:
                        if (!this.gif) {
                            this.setState({ recording: 0 /* None */ });
                            return;
                        }
                        this.setState({ recording: 2 /* Rendering */ });
                        this.addGifFrame(true);
                        this.gif.onFinished = blob => {
                            this.setState({ recording: 0 /* None */ });
                            saveBlob("computer", "gif", blob);
                        };
                        this.gif.onProgress = progress => this.setState({ progress });
                        this.gif.onAbort = () => {
                            this.setState({ recording: 0 /* None */ });
                            console.error("Rendering GIF failed");
                        };
                        this.gif.render();
                        this.gif = null;
                        this.lastGifFrame = null;
                }
            };
            this.makeFullscreen = (event) => {
                var _a;
                this.onEventDefault(event);
                (_a = this.base) === null || _a === void 0 ? void 0 : _a.requestFullscreen().catch(e => {
                    console.error("Cannot make full-screen", e);
                });
            };
            this.setState({
                recording: 0 /* None */,
                progress: 0,
            });
            this.vdom = [
                v("canvas", { class: terminalCanvas, onMouseDown: this.onMouse, onMouseUp: this.onMouse, onMouseMove: this.onMouse, onWheel: this.onMouseWheel, onContextMenu: this.onEventDefault }),
                v("input", { type: "text", class: terminalInput, onPaste: this.onPaste, onKeyDown: this.onKey, onKeyUp: this.onKey, onInput: this.onInput }),
            ];
        }
        componentDidMount() {
            // Fetch the "key" elements
            const base = this.base;
            this.canvasElem = base.querySelector(`.${terminalCanvas}`);
            this.canvasContext = this.canvasElem.getContext("2d");
            this.inputElem = base.querySelector(`.${terminalInput}`);
            this.wrapperElem = base.querySelector(`.${terminalWrapper}`);
            // Subscribe to some events to allow us to shedule a redraw
            window.addEventListener("resize", this.onResized);
            this.props.changed.attach(this.onChanged);
            // Set some key properties
            this.changed = true;
            this.lastBlink = false;
            this.mounted = true;
            // Focus on the input element
            if (this.props.focused)
                this.inputElem.focus();
            // And let's draw!
            this.queueDraw();
        }
        componentWillUnmount() {
            this.canvasElem = undefined;
            this.canvasContext = undefined;
            this.inputElem = undefined;
            this.props.changed.detach(this.onChanged);
            window.removeEventListener("resize", this.onResized);
            this.lastBlink = false;
            this.mounted = false;
            this.drawQueued = false;
        }
        render({ id, label, on }, { recording, progress }) {
            const recordingDisabled = recording === 2 /* Rendering */;
            return v("div", { class: terminalView },
                v("div", { class: terminalWrapper },
                    this.vdom,
                    v("div", { class: terminalBar },
                        v("button", { class: `${actionButton} ${terminalButton}`, type: "button", title: on ? "Turn this computer off" : "Turn this computer on", onClick: on ? this.onPowerOff : this.onPowerOn }, on ? v(On, null) : v(Off, null)),
                        v("span", { class: terminalInfo }, labelElement(id, label)),
                        v("span", { class: terminalButtonsRight },
                            v("button", { class: `${actionButton} ${terminalButton}`, type: "button", title: "Take a screenshot of the terminal.", onClick: this.onScreenshot },
                                v(Camera, null)),
                            v("button", { class: `${actionButton} ${terminalButton} ${recordingDisabled ? "disabled" : ""}`, type: "button", title: "Record the terminal to a GIF.", onClick: this.onRecord }, recording === 1 /* Recording */ ? v(VideocamRecording, null) : v(Videocam, null)),
                            v("button", { class: `${actionButton} ${terminalButton}`, type: "button", title: "Make the terminal full-screen", onClick: this.makeFullscreen },
                                v(Fullscreen, null)),
                            v("button", { class: `${actionButton} ${terminalButton}`, type: "button", title: "Send a `terminate' event to the computer.", onClick: this.onTerminate },
                                v(NoEntry, null)))),
                    v("div", { class: terminalProgress, style: `width: ${recording === 2 /* Rendering */ ? progress * 100 : 0}%` })));
        }
        componentDidUpdate() {
            this.changed = true;
            this.queueDraw();
            if (this.props.focused && this.inputElem)
                this.inputElem.focus();
        }
        queueDraw() {
            if (this.mounted && !this.drawQueued) {
                this.drawQueued = true;
                window.requestAnimationFrame(time => {
                    this.drawQueued = false;
                    if (!this.mounted)
                        return;
                    // We push the previous frame before drawing the next one.
                    this.addGifFrame();
                    this.draw(time);
                    // Schedule another redraw to handle the cursor blink
                    if (this.props.terminal.cursorBlink)
                        this.queueDraw();
                });
            }
        }
        draw(time) {
            if (!this.canvasElem || !this.canvasContext || !this.wrapperElem)
                return;
            const { terminal: terminal$1, font: fontPath } = this.props;
            const sizeX = terminal$1.sizeX || 51;
            const sizeY = terminal$1.sizeY || 19;
            const font = loadFont(fontPath);
            if (font.promise) {
                font.promise.then(() => this.queueDraw());
                return;
            }
            const blink = Math.floor(time / 400) % 2 === 0;
            const changed = this.changed;
            if (!changed && (!terminal$1.cursorBlink || this.lastBlink === blink ||
                terminal$1.cursorX < 0 || terminal$1.cursorX >= sizeX ||
                terminal$1.cursorY < 0 || terminal$1.cursorY >= sizeY)) {
                return;
            }
            this.lastBlink = blink;
            this.changed = false;
            // Calculate terminal scaling to fit the screen
            const actualWidth = this.wrapperElem.parentElement.clientWidth - terminalMargin * 2;
            /* [Note 'Padding']: 70px = 30px top-padding + action-bar + arbitrary bottom-padding. See styles.css too. */
            const actualHeight = this.wrapperElem.parentElement.clientHeight - terminalMargin * 2 - 40;
            const width = sizeX * cellWidth;
            const height = sizeY * cellHeight;
            // The scale has to be an integer (though converted within the renderer) to ensure pixels are integers.
            // Otherwise you get texture issues.
            const scale = Math.max(1, Math.min(Math.floor(actualHeight / height), Math.floor(actualWidth / width)));
            const ctx = this.canvasContext;
            // If we"re just redrawing the cursor. We"ve aborted earlier if the cursor is not visible/
            // out of range and hasn"t changed.
            if (!changed) {
                if (blink) {
                    foreground(ctx, terminal$1.cursorX, terminal$1.cursorY, terminal$1.currentFore, "_", terminal$1.palette, scale, font);
                }
                else {
                    const x = terminal$1.cursorX;
                    const y = terminal$1.cursorY;
                    background(ctx, x, y, terminal$1.back[y].charAt(x), scale, sizeX, sizeY, terminal$1.palette);
                    foreground(ctx, x, y, terminal$1.fore[y].charAt(x), terminal$1.text[y].charAt(x), terminal$1.palette, scale, font);
                }
                return;
            }
            // Actually update the canvas dimensions.
            const canvasWidth = width * scale + terminalMargin * 2;
            const canvasHeight = height * scale + terminalMargin * 2;
            if (this.canvasElem.height !== canvasHeight || this.canvasElem.width !== canvasWidth) {
                this.canvasElem.height = canvasHeight;
                this.canvasElem.width = canvasWidth;
                this.canvasElem.style.height = `${canvasHeight}px`;
                this.wrapperElem.style.width = this.canvasElem.style.width = `${canvasWidth}px`;
            }
            // Prevent blur when up/down-scaling
            ctx.imageSmoothingEnabled = false;
            /* eslint-disable @typescript-eslint/no-explicit-any */
            ctx.oImageSmoothingEnabled = false;
            ctx.webkitImageSmoothingEnabled = false;
            ctx.mozImageSmoothingEnabled = false;
            ctx.msImageSmoothingEnabled = false;
            /* eslint-enable @typescript-eslint/no-explicit-any */
            // And render!
            if (terminal$1.sizeX === 0 && terminal$1.sizeY === 0) {
                bsod(ctx, sizeX, sizeY, "No terminal output", scale, font);
            }
            else {
                terminal(ctx, terminal$1, blink, scale, font);
            }
        }
        paste(clipboard) {
            if (!clipboard)
                return;
            let content = clipboard.getData("text");
            if (!content)
                return;
            // Limit to allowed characters (actually slightly more generous but
            // there you go).
            content = content.replace(/[^\x20-\xFF]/gi, "");
            // Strip to the first newline
            content = content.replace(/[\r\n].*/, "");
            // Limit to 512 characters
            content = content.substr(0, 512);
            // Abort if we"re empty
            if (!content)
                return;
            this.props.computer.queueEvent("paste", [content]);
        }
        addGifFrame(force) {
            if (!this.gif || !this.canvasContext)
                return;
            if (!this.lastGifFrame) {
                console.error("Pushing a frame, but no previous frame!!");
                return;
            }
            // We limit ourselves to 20fps, just so we're not producing an insane number
            // of frames.
            const now = Date.now();
            if (!force && now - this.lastGifFrame < 50)
                return;
            log(`Adding frame for ${now - this.lastGifFrame} seconds`);
            this.gif.addFrame(this.canvasContext, { delay: now - this.lastGifFrame });
            this.lastGifFrame = now;
        }
        convertMousePos(event) {
            if (!this.canvasElem)
                throw "impossible";
            const box = this.canvasElem.getBoundingClientRect();
            const x = clamp(Math.floor((event.clientX - box.left - terminalMargin)
                / (this.canvasElem.width - 2 * terminalMargin) * this.props.terminal.sizeX) + 1, 1, this.props.terminal.sizeX);
            const y = clamp(Math.floor((event.clientY - box.top - terminalMargin)
                / (this.canvasElem.height - 2 * terminalMargin) * this.props.terminal.sizeY) + 1, 1, this.props.terminal.sizeY);
            return { x, y };
        }
    }

    var t0 = new Date,
        t1 = new Date;

    function newInterval(floori, offseti, count, field) {

      function interval(date) {
        return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
      }

      interval.floor = function(date) {
        return floori(date = new Date(+date)), date;
      };

      interval.ceil = function(date) {
        return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
      };

      interval.round = function(date) {
        var d0 = interval(date),
            d1 = interval.ceil(date);
        return date - d0 < d1 - date ? d0 : d1;
      };

      interval.offset = function(date, step) {
        return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
      };

      interval.range = function(start, stop, step) {
        var range = [], previous;
        start = interval.ceil(start);
        step = step == null ? 1 : Math.floor(step);
        if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
        do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
        while (previous < start && start < stop);
        return range;
      };

      interval.filter = function(test) {
        return newInterval(function(date) {
          if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
        }, function(date, step) {
          if (date >= date) {
            if (step < 0) while (++step <= 0) {
              while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
            } else while (--step >= 0) {
              while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
            }
          }
        });
      };

      if (count) {
        interval.count = function(start, end) {
          t0.setTime(+start), t1.setTime(+end);
          floori(t0), floori(t1);
          return Math.floor(count(t0, t1));
        };

        interval.every = function(step) {
          step = Math.floor(step);
          return !isFinite(step) || !(step > 0) ? null
              : !(step > 1) ? interval
              : interval.filter(field
                  ? function(d) { return field(d) % step === 0; }
                  : function(d) { return interval.count(0, d) % step === 0; });
        };
      }

      return interval;
    }

    var millisecond = newInterval(function() {
      // noop
    }, function(date, step) {
      date.setTime(+date + step);
    }, function(start, end) {
      return end - start;
    });

    // An optimized implementation for this simple case.
    millisecond.every = function(k) {
      k = Math.floor(k);
      if (!isFinite(k) || !(k > 0)) return null;
      if (!(k > 1)) return millisecond;
      return newInterval(function(date) {
        date.setTime(Math.floor(date / k) * k);
      }, function(date, step) {
        date.setTime(+date + step * k);
      }, function(start, end) {
        return (end - start) / k;
      });
    };

    const durationSecond = 1000;
    const durationMinute = durationSecond * 60;
    const durationHour = durationMinute * 60;
    const durationDay = durationHour * 24;
    const durationWeek = durationDay * 7;

    newInterval(function(date) {
      date.setTime(date - date.getMilliseconds());
    }, function(date, step) {
      date.setTime(+date + step * durationSecond);
    }, function(start, end) {
      return (end - start) / durationSecond;
    }, function(date) {
      return date.getUTCSeconds();
    });

    newInterval(function(date) {
      date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
    }, function(date, step) {
      date.setTime(+date + step * durationMinute);
    }, function(start, end) {
      return (end - start) / durationMinute;
    }, function(date) {
      return date.getMinutes();
    });

    newInterval(function(date) {
      date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
    }, function(date, step) {
      date.setTime(+date + step * durationHour);
    }, function(start, end) {
      return (end - start) / durationHour;
    }, function(date) {
      return date.getHours();
    });

    var day = newInterval(
      date => date.setHours(0, 0, 0, 0),
      (date, step) => date.setDate(date.getDate() + step),
      (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
      date => date.getDate() - 1
    );

    function weekday(i) {
      return newInterval(function(date) {
        date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
        date.setHours(0, 0, 0, 0);
      }, function(date, step) {
        date.setDate(date.getDate() + step * 7);
      }, function(start, end) {
        return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
      });
    }

    var sunday = weekday(0);
    var monday = weekday(1);
    weekday(2);
    weekday(3);
    var thursday = weekday(4);
    weekday(5);
    weekday(6);

    newInterval(function(date) {
      date.setDate(1);
      date.setHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setMonth(date.getMonth() + step);
    }, function(start, end) {
      return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
    }, function(date) {
      return date.getMonth();
    });

    var year = newInterval(function(date) {
      date.setMonth(0, 1);
      date.setHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setFullYear(date.getFullYear() + step);
    }, function(start, end) {
      return end.getFullYear() - start.getFullYear();
    }, function(date) {
      return date.getFullYear();
    });

    // An optimized implementation for this simple case.
    year.every = function(k) {
      return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
        date.setFullYear(Math.floor(date.getFullYear() / k) * k);
        date.setMonth(0, 1);
        date.setHours(0, 0, 0, 0);
      }, function(date, step) {
        date.setFullYear(date.getFullYear() + step * k);
      });
    };

    newInterval(function(date) {
      date.setUTCSeconds(0, 0);
    }, function(date, step) {
      date.setTime(+date + step * durationMinute);
    }, function(start, end) {
      return (end - start) / durationMinute;
    }, function(date) {
      return date.getUTCMinutes();
    });

    newInterval(function(date) {
      date.setUTCMinutes(0, 0, 0);
    }, function(date, step) {
      date.setTime(+date + step * durationHour);
    }, function(start, end) {
      return (end - start) / durationHour;
    }, function(date) {
      return date.getUTCHours();
    });

    var utcDay = newInterval(function(date) {
      date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setUTCDate(date.getUTCDate() + step);
    }, function(start, end) {
      return (end - start) / durationDay;
    }, function(date) {
      return date.getUTCDate() - 1;
    });

    function utcWeekday(i) {
      return newInterval(function(date) {
        date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
        date.setUTCHours(0, 0, 0, 0);
      }, function(date, step) {
        date.setUTCDate(date.getUTCDate() + step * 7);
      }, function(start, end) {
        return (end - start) / durationWeek;
      });
    }

    var utcSunday = utcWeekday(0);
    var utcMonday = utcWeekday(1);
    utcWeekday(2);
    utcWeekday(3);
    var utcThursday = utcWeekday(4);
    utcWeekday(5);
    utcWeekday(6);

    newInterval(function(date) {
      date.setUTCDate(1);
      date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setUTCMonth(date.getUTCMonth() + step);
    }, function(start, end) {
      return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
    }, function(date) {
      return date.getUTCMonth();
    });

    var utcYear = newInterval(function(date) {
      date.setUTCMonth(0, 1);
      date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setUTCFullYear(date.getUTCFullYear() + step);
    }, function(start, end) {
      return end.getUTCFullYear() - start.getUTCFullYear();
    }, function(date) {
      return date.getUTCFullYear();
    });

    // An optimized implementation for this simple case.
    utcYear.every = function(k) {
      return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
        date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
        date.setUTCMonth(0, 1);
        date.setUTCHours(0, 0, 0, 0);
      }, function(date, step) {
        date.setUTCFullYear(date.getUTCFullYear() + step * k);
      });
    };

    function ascending(a, b) {
      return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }

    function bisector(f) {
      let delta = f;
      let compare1 = f;
      let compare2 = f;

      if (f.length !== 2) {
        delta = (d, x) => f(d) - x;
        compare1 = ascending;
        compare2 = (d, x) => ascending(f(d), x);
      }

      function left(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
          if (compare1(x, x) !== 0) return hi;
          do {
            const mid = (lo + hi) >>> 1;
            if (compare2(a[mid], x) < 0) lo = mid + 1;
            else hi = mid;
          } while (lo < hi);
        }
        return lo;
      }

      function right(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
          if (compare1(x, x) !== 0) return hi;
          do {
            const mid = (lo + hi) >>> 1;
            if (compare2(a[mid], x) <= 0) lo = mid + 1;
            else hi = mid;
          } while (lo < hi);
        }
        return lo;
      }

      function center(a, x, lo = 0, hi = a.length) {
        const i = left(a, x, lo, hi - 1);
        return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
      }

      return {left, center, right};
    }

    function number(x) {
      return x === null ? NaN : +x;
    }

    bisector(ascending);
    bisector(number).center;

    function localDate(d) {
      if (0 <= d.y && d.y < 100) {
        var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
        date.setFullYear(d.y);
        return date;
      }
      return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
    }

    function utcDate(d) {
      if (0 <= d.y && d.y < 100) {
        var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
        date.setUTCFullYear(d.y);
        return date;
      }
      return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
    }

    function newDate(y, m, d) {
      return {y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0};
    }

    function formatLocale(locale) {
      var locale_dateTime = locale.dateTime,
          locale_date = locale.date,
          locale_time = locale.time,
          locale_periods = locale.periods,
          locale_weekdays = locale.days,
          locale_shortWeekdays = locale.shortDays,
          locale_months = locale.months,
          locale_shortMonths = locale.shortMonths;

      var periodRe = formatRe(locale_periods),
          periodLookup = formatLookup(locale_periods),
          weekdayRe = formatRe(locale_weekdays),
          weekdayLookup = formatLookup(locale_weekdays),
          shortWeekdayRe = formatRe(locale_shortWeekdays),
          shortWeekdayLookup = formatLookup(locale_shortWeekdays),
          monthRe = formatRe(locale_months),
          monthLookup = formatLookup(locale_months),
          shortMonthRe = formatRe(locale_shortMonths),
          shortMonthLookup = formatLookup(locale_shortMonths);

      var formats = {
        "a": formatShortWeekday,
        "A": formatWeekday,
        "b": formatShortMonth,
        "B": formatMonth,
        "c": null,
        "d": formatDayOfMonth,
        "e": formatDayOfMonth,
        "f": formatMicroseconds,
        "g": formatYearISO,
        "G": formatFullYearISO,
        "H": formatHour24,
        "I": formatHour12,
        "j": formatDayOfYear,
        "L": formatMilliseconds,
        "m": formatMonthNumber,
        "M": formatMinutes,
        "p": formatPeriod,
        "q": formatQuarter,
        "Q": formatUnixTimestamp,
        "s": formatUnixTimestampSeconds,
        "S": formatSeconds,
        "u": formatWeekdayNumberMonday,
        "U": formatWeekNumberSunday,
        "V": formatWeekNumberISO,
        "w": formatWeekdayNumberSunday,
        "W": formatWeekNumberMonday,
        "x": null,
        "X": null,
        "y": formatYear,
        "Y": formatFullYear,
        "Z": formatZone,
        "%": formatLiteralPercent
      };

      var utcFormats = {
        "a": formatUTCShortWeekday,
        "A": formatUTCWeekday,
        "b": formatUTCShortMonth,
        "B": formatUTCMonth,
        "c": null,
        "d": formatUTCDayOfMonth,
        "e": formatUTCDayOfMonth,
        "f": formatUTCMicroseconds,
        "g": formatUTCYearISO,
        "G": formatUTCFullYearISO,
        "H": formatUTCHour24,
        "I": formatUTCHour12,
        "j": formatUTCDayOfYear,
        "L": formatUTCMilliseconds,
        "m": formatUTCMonthNumber,
        "M": formatUTCMinutes,
        "p": formatUTCPeriod,
        "q": formatUTCQuarter,
        "Q": formatUnixTimestamp,
        "s": formatUnixTimestampSeconds,
        "S": formatUTCSeconds,
        "u": formatUTCWeekdayNumberMonday,
        "U": formatUTCWeekNumberSunday,
        "V": formatUTCWeekNumberISO,
        "w": formatUTCWeekdayNumberSunday,
        "W": formatUTCWeekNumberMonday,
        "x": null,
        "X": null,
        "y": formatUTCYear,
        "Y": formatUTCFullYear,
        "Z": formatUTCZone,
        "%": formatLiteralPercent
      };

      var parses = {
        "a": parseShortWeekday,
        "A": parseWeekday,
        "b": parseShortMonth,
        "B": parseMonth,
        "c": parseLocaleDateTime,
        "d": parseDayOfMonth,
        "e": parseDayOfMonth,
        "f": parseMicroseconds,
        "g": parseYear,
        "G": parseFullYear,
        "H": parseHour24,
        "I": parseHour24,
        "j": parseDayOfYear,
        "L": parseMilliseconds,
        "m": parseMonthNumber,
        "M": parseMinutes,
        "p": parsePeriod,
        "q": parseQuarter,
        "Q": parseUnixTimestamp,
        "s": parseUnixTimestampSeconds,
        "S": parseSeconds,
        "u": parseWeekdayNumberMonday,
        "U": parseWeekNumberSunday,
        "V": parseWeekNumberISO,
        "w": parseWeekdayNumberSunday,
        "W": parseWeekNumberMonday,
        "x": parseLocaleDate,
        "X": parseLocaleTime,
        "y": parseYear,
        "Y": parseFullYear,
        "Z": parseZone,
        "%": parseLiteralPercent
      };

      // These recursive directive definitions must be deferred.
      formats.x = newFormat(locale_date, formats);
      formats.X = newFormat(locale_time, formats);
      formats.c = newFormat(locale_dateTime, formats);
      utcFormats.x = newFormat(locale_date, utcFormats);
      utcFormats.X = newFormat(locale_time, utcFormats);
      utcFormats.c = newFormat(locale_dateTime, utcFormats);

      function newFormat(specifier, formats) {
        return function(date) {
          var string = [],
              i = -1,
              j = 0,
              n = specifier.length,
              c,
              pad,
              format;

          if (!(date instanceof Date)) date = new Date(+date);

          while (++i < n) {
            if (specifier.charCodeAt(i) === 37) {
              string.push(specifier.slice(j, i));
              if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
              else pad = c === "e" ? " " : "0";
              if (format = formats[c]) c = format(date, pad);
              string.push(c);
              j = i + 1;
            }
          }

          string.push(specifier.slice(j, i));
          return string.join("");
        };
      }

      function newParse(specifier, Z) {
        return function(string) {
          var d = newDate(1900, undefined, 1),
              i = parseSpecifier(d, specifier, string += "", 0),
              week, day$1;
          if (i != string.length) return null;

          // If a UNIX timestamp is specified, return it.
          if ("Q" in d) return new Date(d.Q);
          if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

          // If this is utcParse, never use the local timezone.
          if (Z && !("Z" in d)) d.Z = 0;

          // The am-pm flag is 0 for AM, and 1 for PM.
          if ("p" in d) d.H = d.H % 12 + d.p * 12;

          // If the month was not specified, inherit from the quarter.
          if (d.m === undefined) d.m = "q" in d ? d.q : 0;

          // Convert day-of-week and week-of-year to day-of-year.
          if ("V" in d) {
            if (d.V < 1 || d.V > 53) return null;
            if (!("w" in d)) d.w = 1;
            if ("Z" in d) {
              week = utcDate(newDate(d.y, 0, 1)), day$1 = week.getUTCDay();
              week = day$1 > 4 || day$1 === 0 ? utcMonday.ceil(week) : utcMonday(week);
              week = utcDay.offset(week, (d.V - 1) * 7);
              d.y = week.getUTCFullYear();
              d.m = week.getUTCMonth();
              d.d = week.getUTCDate() + (d.w + 6) % 7;
            } else {
              week = localDate(newDate(d.y, 0, 1)), day$1 = week.getDay();
              week = day$1 > 4 || day$1 === 0 ? monday.ceil(week) : monday(week);
              week = day.offset(week, (d.V - 1) * 7);
              d.y = week.getFullYear();
              d.m = week.getMonth();
              d.d = week.getDate() + (d.w + 6) % 7;
            }
          } else if ("W" in d || "U" in d) {
            if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
            day$1 = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
            d.m = 0;
            d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day$1 + 5) % 7 : d.w + d.U * 7 - (day$1 + 6) % 7;
          }

          // If a time zone is specified, all fields are interpreted as UTC and then
          // offset according to the specified time zone.
          if ("Z" in d) {
            d.H += d.Z / 100 | 0;
            d.M += d.Z % 100;
            return utcDate(d);
          }

          // Otherwise, all fields are in local time.
          return localDate(d);
        };
      }

      function parseSpecifier(d, specifier, string, j) {
        var i = 0,
            n = specifier.length,
            m = string.length,
            c,
            parse;

        while (i < n) {
          if (j >= m) return -1;
          c = specifier.charCodeAt(i++);
          if (c === 37) {
            c = specifier.charAt(i++);
            parse = parses[c in pads ? specifier.charAt(i++) : c];
            if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
          } else if (c != string.charCodeAt(j++)) {
            return -1;
          }
        }

        return j;
      }

      function parsePeriod(d, string, i) {
        var n = periodRe.exec(string.slice(i));
        return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
      }

      function parseShortWeekday(d, string, i) {
        var n = shortWeekdayRe.exec(string.slice(i));
        return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
      }

      function parseWeekday(d, string, i) {
        var n = weekdayRe.exec(string.slice(i));
        return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
      }

      function parseShortMonth(d, string, i) {
        var n = shortMonthRe.exec(string.slice(i));
        return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
      }

      function parseMonth(d, string, i) {
        var n = monthRe.exec(string.slice(i));
        return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
      }

      function parseLocaleDateTime(d, string, i) {
        return parseSpecifier(d, locale_dateTime, string, i);
      }

      function parseLocaleDate(d, string, i) {
        return parseSpecifier(d, locale_date, string, i);
      }

      function parseLocaleTime(d, string, i) {
        return parseSpecifier(d, locale_time, string, i);
      }

      function formatShortWeekday(d) {
        return locale_shortWeekdays[d.getDay()];
      }

      function formatWeekday(d) {
        return locale_weekdays[d.getDay()];
      }

      function formatShortMonth(d) {
        return locale_shortMonths[d.getMonth()];
      }

      function formatMonth(d) {
        return locale_months[d.getMonth()];
      }

      function formatPeriod(d) {
        return locale_periods[+(d.getHours() >= 12)];
      }

      function formatQuarter(d) {
        return 1 + ~~(d.getMonth() / 3);
      }

      function formatUTCShortWeekday(d) {
        return locale_shortWeekdays[d.getUTCDay()];
      }

      function formatUTCWeekday(d) {
        return locale_weekdays[d.getUTCDay()];
      }

      function formatUTCShortMonth(d) {
        return locale_shortMonths[d.getUTCMonth()];
      }

      function formatUTCMonth(d) {
        return locale_months[d.getUTCMonth()];
      }

      function formatUTCPeriod(d) {
        return locale_periods[+(d.getUTCHours() >= 12)];
      }

      function formatUTCQuarter(d) {
        return 1 + ~~(d.getUTCMonth() / 3);
      }

      return {
        format: function(specifier) {
          var f = newFormat(specifier += "", formats);
          f.toString = function() { return specifier; };
          return f;
        },
        parse: function(specifier) {
          var p = newParse(specifier += "", false);
          p.toString = function() { return specifier; };
          return p;
        },
        utcFormat: function(specifier) {
          var f = newFormat(specifier += "", utcFormats);
          f.toString = function() { return specifier; };
          return f;
        },
        utcParse: function(specifier) {
          var p = newParse(specifier += "", true);
          p.toString = function() { return specifier; };
          return p;
        }
      };
    }

    var pads = {"-": "", "_": " ", "0": "0"},
        numberRe = /^\s*\d+/, // note: ignores next directive
        percentRe = /^%/,
        requoteRe = /[\\^$*+?|[\]().{}]/g;

    function pad(value, fill, width) {
      var sign = value < 0 ? "-" : "",
          string = (sign ? -value : value) + "",
          length = string.length;
      return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
    }

    function requote(s) {
      return s.replace(requoteRe, "\\$&");
    }

    function formatRe(names) {
      return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
    }

    function formatLookup(names) {
      return new Map(names.map((name, i) => [name.toLowerCase(), i]));
    }

    function parseWeekdayNumberSunday(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 1));
      return n ? (d.w = +n[0], i + n[0].length) : -1;
    }

    function parseWeekdayNumberMonday(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 1));
      return n ? (d.u = +n[0], i + n[0].length) : -1;
    }

    function parseWeekNumberSunday(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.U = +n[0], i + n[0].length) : -1;
    }

    function parseWeekNumberISO(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.V = +n[0], i + n[0].length) : -1;
    }

    function parseWeekNumberMonday(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.W = +n[0], i + n[0].length) : -1;
    }

    function parseFullYear(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 4));
      return n ? (d.y = +n[0], i + n[0].length) : -1;
    }

    function parseYear(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
    }

    function parseZone(d, string, i) {
      var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
      return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
    }

    function parseQuarter(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 1));
      return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
    }

    function parseMonthNumber(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
    }

    function parseDayOfMonth(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.d = +n[0], i + n[0].length) : -1;
    }

    function parseDayOfYear(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 3));
      return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
    }

    function parseHour24(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.H = +n[0], i + n[0].length) : -1;
    }

    function parseMinutes(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.M = +n[0], i + n[0].length) : -1;
    }

    function parseSeconds(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.S = +n[0], i + n[0].length) : -1;
    }

    function parseMilliseconds(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 3));
      return n ? (d.L = +n[0], i + n[0].length) : -1;
    }

    function parseMicroseconds(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 6));
      return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
    }

    function parseLiteralPercent(d, string, i) {
      var n = percentRe.exec(string.slice(i, i + 1));
      return n ? i + n[0].length : -1;
    }

    function parseUnixTimestamp(d, string, i) {
      var n = numberRe.exec(string.slice(i));
      return n ? (d.Q = +n[0], i + n[0].length) : -1;
    }

    function parseUnixTimestampSeconds(d, string, i) {
      var n = numberRe.exec(string.slice(i));
      return n ? (d.s = +n[0], i + n[0].length) : -1;
    }

    function formatDayOfMonth(d, p) {
      return pad(d.getDate(), p, 2);
    }

    function formatHour24(d, p) {
      return pad(d.getHours(), p, 2);
    }

    function formatHour12(d, p) {
      return pad(d.getHours() % 12 || 12, p, 2);
    }

    function formatDayOfYear(d, p) {
      return pad(1 + day.count(year(d), d), p, 3);
    }

    function formatMilliseconds(d, p) {
      return pad(d.getMilliseconds(), p, 3);
    }

    function formatMicroseconds(d, p) {
      return formatMilliseconds(d, p) + "000";
    }

    function formatMonthNumber(d, p) {
      return pad(d.getMonth() + 1, p, 2);
    }

    function formatMinutes(d, p) {
      return pad(d.getMinutes(), p, 2);
    }

    function formatSeconds(d, p) {
      return pad(d.getSeconds(), p, 2);
    }

    function formatWeekdayNumberMonday(d) {
      var day = d.getDay();
      return day === 0 ? 7 : day;
    }

    function formatWeekNumberSunday(d, p) {
      return pad(sunday.count(year(d) - 1, d), p, 2);
    }

    function dISO(d) {
      var day = d.getDay();
      return (day >= 4 || day === 0) ? thursday(d) : thursday.ceil(d);
    }

    function formatWeekNumberISO(d, p) {
      d = dISO(d);
      return pad(thursday.count(year(d), d) + (year(d).getDay() === 4), p, 2);
    }

    function formatWeekdayNumberSunday(d) {
      return d.getDay();
    }

    function formatWeekNumberMonday(d, p) {
      return pad(monday.count(year(d) - 1, d), p, 2);
    }

    function formatYear(d, p) {
      return pad(d.getFullYear() % 100, p, 2);
    }

    function formatYearISO(d, p) {
      d = dISO(d);
      return pad(d.getFullYear() % 100, p, 2);
    }

    function formatFullYear(d, p) {
      return pad(d.getFullYear() % 10000, p, 4);
    }

    function formatFullYearISO(d, p) {
      var day = d.getDay();
      d = (day >= 4 || day === 0) ? thursday(d) : thursday.ceil(d);
      return pad(d.getFullYear() % 10000, p, 4);
    }

    function formatZone(d) {
      var z = d.getTimezoneOffset();
      return (z > 0 ? "-" : (z *= -1, "+"))
          + pad(z / 60 | 0, "0", 2)
          + pad(z % 60, "0", 2);
    }

    function formatUTCDayOfMonth(d, p) {
      return pad(d.getUTCDate(), p, 2);
    }

    function formatUTCHour24(d, p) {
      return pad(d.getUTCHours(), p, 2);
    }

    function formatUTCHour12(d, p) {
      return pad(d.getUTCHours() % 12 || 12, p, 2);
    }

    function formatUTCDayOfYear(d, p) {
      return pad(1 + utcDay.count(utcYear(d), d), p, 3);
    }

    function formatUTCMilliseconds(d, p) {
      return pad(d.getUTCMilliseconds(), p, 3);
    }

    function formatUTCMicroseconds(d, p) {
      return formatUTCMilliseconds(d, p) + "000";
    }

    function formatUTCMonthNumber(d, p) {
      return pad(d.getUTCMonth() + 1, p, 2);
    }

    function formatUTCMinutes(d, p) {
      return pad(d.getUTCMinutes(), p, 2);
    }

    function formatUTCSeconds(d, p) {
      return pad(d.getUTCSeconds(), p, 2);
    }

    function formatUTCWeekdayNumberMonday(d) {
      var dow = d.getUTCDay();
      return dow === 0 ? 7 : dow;
    }

    function formatUTCWeekNumberSunday(d, p) {
      return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
    }

    function UTCdISO(d) {
      var day = d.getUTCDay();
      return (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
    }

    function formatUTCWeekNumberISO(d, p) {
      d = UTCdISO(d);
      return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
    }

    function formatUTCWeekdayNumberSunday(d) {
      return d.getUTCDay();
    }

    function formatUTCWeekNumberMonday(d, p) {
      return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
    }

    function formatUTCYear(d, p) {
      return pad(d.getUTCFullYear() % 100, p, 2);
    }

    function formatUTCYearISO(d, p) {
      d = UTCdISO(d);
      return pad(d.getUTCFullYear() % 100, p, 2);
    }

    function formatUTCFullYear(d, p) {
      return pad(d.getUTCFullYear() % 10000, p, 4);
    }

    function formatUTCFullYearISO(d, p) {
      var day = d.getUTCDay();
      d = (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
      return pad(d.getUTCFullYear() % 10000, p, 4);
    }

    function formatUTCZone() {
      return "+0000";
    }

    function formatLiteralPercent() {
      return "%";
    }

    function formatUnixTimestamp(d) {
      return +d;
    }

    function formatUnixTimestampSeconds(d) {
      return Math.floor(+d / 1000);
    }

    var locale;
    var timeFormat;

    defaultLocale({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });

    function defaultLocale(definition) {
      locale = formatLocale(definition);
      timeFormat = locale.format;
      return locale;
    }

    (function (global, undefined$1) {

        if (global.setImmediate) {
            return;
        }

        var nextHandle = 1; // Spec says greater than zero
        var tasksByHandle = {};
        var currentlyRunningATask = false;
        var doc = global.document;
        var registerImmediate;

        function setImmediate(callback) {
          // Callback can either be a function or a string
          if (typeof callback !== "function") {
            callback = new Function("" + callback);
          }
          // Copy function arguments
          var args = new Array(arguments.length - 1);
          for (var i = 0; i < args.length; i++) {
              args[i] = arguments[i + 1];
          }
          // Store and register the task
          var task = { callback: callback, args: args };
          tasksByHandle[nextHandle] = task;
          registerImmediate(nextHandle);
          return nextHandle++;
        }

        function clearImmediate(handle) {
            delete tasksByHandle[handle];
        }

        function run(task) {
            var callback = task.callback;
            var args = task.args;
            switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined$1, args);
                break;
            }
        }

        function runIfPresent(handle) {
            // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
            // So if we're currently running a task, we'll need to delay this invocation.
            if (currentlyRunningATask) {
                // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
                // "too much recursion" error.
                setTimeout(runIfPresent, 0, handle);
            } else {
                var task = tasksByHandle[handle];
                if (task) {
                    currentlyRunningATask = true;
                    try {
                        run(task);
                    } finally {
                        clearImmediate(handle);
                        currentlyRunningATask = false;
                    }
                }
            }
        }

        function installNextTickImplementation() {
            registerImmediate = function(handle) {
                process.nextTick(function () { runIfPresent(handle); });
            };
        }

        function canUsePostMessage() {
            // The test against `importScripts` prevents this implementation from being installed inside a web worker,
            // where `global.postMessage` means something completely different and can't be used for this purpose.
            if (global.postMessage && !global.importScripts) {
                var postMessageIsAsynchronous = true;
                var oldOnMessage = global.onmessage;
                global.onmessage = function() {
                    postMessageIsAsynchronous = false;
                };
                global.postMessage("", "*");
                global.onmessage = oldOnMessage;
                return postMessageIsAsynchronous;
            }
        }

        function installPostMessageImplementation() {
            // Installs an event handler on `global` for the `message` event: see
            // * https://developer.mozilla.org/en/DOM/window.postMessage
            // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

            var messagePrefix = "setImmediate$" + Math.random() + "$";
            var onGlobalMessage = function(event) {
                if (event.source === global &&
                    typeof event.data === "string" &&
                    event.data.indexOf(messagePrefix) === 0) {
                    runIfPresent(+event.data.slice(messagePrefix.length));
                }
            };

            if (global.addEventListener) {
                global.addEventListener("message", onGlobalMessage, false);
            } else {
                global.attachEvent("onmessage", onGlobalMessage);
            }

            registerImmediate = function(handle) {
                global.postMessage(messagePrefix + handle, "*");
            };
        }

        function installMessageChannelImplementation() {
            var channel = new MessageChannel();
            channel.port1.onmessage = function(event) {
                var handle = event.data;
                runIfPresent(handle);
            };

            registerImmediate = function(handle) {
                channel.port2.postMessage(handle);
            };
        }

        function installReadyStateChangeImplementation() {
            var html = doc.documentElement;
            registerImmediate = function(handle) {
                // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                var script = doc.createElement("script");
                script.onreadystatechange = function () {
                    runIfPresent(handle);
                    script.onreadystatechange = null;
                    html.removeChild(script);
                    script = null;
                };
                html.appendChild(script);
            };
        }

        function installSetTimeoutImplementation() {
            registerImmediate = function(handle) {
                setTimeout(runIfPresent, 0, handle);
            };
        }

        // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
        var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
        attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

        // Don't get fooled by e.g. browserify environments.
        if ({}.toString.call(global.process) === "[object process]") {
            // For Node.js before 0.9
            installNextTickImplementation();

        } else if (canUsePostMessage()) {
            // For non-IE10 modern browsers
            installPostMessageImplementation();

        } else if (global.MessageChannel) {
            // For web workers, where supported
            installMessageChannelImplementation();

        } else if (doc && "onreadystatechange" in doc.createElement("script")) {
            // For IE 6–8
            installReadyStateChangeImplementation();

        } else {
            // For older browsers
            installSetTimeoutImplementation();
        }

        attachTo.setImmediate = setImmediate;
        attachTo.clearImmediate = clearImmediate;
    }(typeof self === "undefined" ? typeof global === "undefined" ? window : global : self));

    let loaded = false;
    let doAddComputer = null;
    class Callbacks {
        constructor(config) {
            this.config = config;
        }
        setup(addComputer) {
            doAddComputer = addComputer;
        }
        setInterval(callback, delay) {
            setInterval(callback, delay);
        }
        setImmediate(callback) {
            // Bodge, as there's no types for 'setImmediate'
            window.setImmediate(callback); // eslint-disable-line @typescript-eslint/no-explicit-any
        }
        strftime(format, time) {
            return timeFormat(format)(time);
        }
    }
    const start = (computer, config) => __awaiter(void 0, void 0, void 0, function* () {
        if (loaded) {
            if (!doAddComputer)
                throw new Error("Failed to load computer (see previous errors for a possible reason");
            return doAddComputer(computer);
        }
        const classes = yield new Promise(function (resolve, reject) { require(['./classes-9c136fbd'], resolve, reject); });
        if (loaded) {
            if (!doAddComputer)
                throw new Error("Failed to load computer (see previous errors for a possible reason");
            return doAddComputer(computer);
        }
        loaded = true;
        classes.default(new Callbacks(config));
        if (!doAddComputer)
            throw new Error("Callbacks.setup was never called");
        return doAddComputer(computer);
    });

    const colours = "0123456789abcdef";
    const splitName = (file) => {
        const lastIndex = file.lastIndexOf("/");
        if (lastIndex < 0)
            return ["", file];
        return [file.substring(0, lastIndex), file.substring(lastIndex + 1)];
    };
    const joinName = (parent, child) => parent === "" ? child : `${parent}/${child}`;
    const empty$1 = new Int8Array(0);
    const decoder = new TextDecoder("UTF-8", { fatal: false });
    const encoder = new TextEncoder();
    class FileSystemEntry {
        constructor(persistance, path, children, contents, attributes) {
            this.exists = true;
            this.persistance = persistance;
            this.path = path;
            this.children = children;
            this.contents = contents;
            this.attributes = attributes === null ? { modification: 0, creation: 0 } : attributes;
        }
        static create(persistance, path, directory) {
            const now = Date.now();
            const instance = new FileSystemEntry(persistance, path, directory ? [] : null, directory ? null : empty$1, { creation: now, modification: now });
            instance.save();
            return instance;
        }
        isDirectory() {
            return this.children != null;
        }
        getChildren() {
            if (this.children === null)
                throw Error("Not a directory");
            return this.children;
        }
        setChildren(children) {
            if (this.children === null)
                throw Error("Not a directory");
            this.children = children;
            if (this.semaphore)
                this.semaphore.signal();
            this.save();
        }
        getContents() {
            if (this.contents !== null)
                return this.contents;
            if (this.children !== null)
                throw Error("Not a file");
            return this.contents = this.persistance.getContents(this.path);
        }
        getStringContents() {
            return decoder.decode(this.getContents());
        }
        setContents(contents) {
            if (this.children !== null)
                throw Error("Not a file");
            if (!this.exists)
                return { error: "File has been deleted", value: null };
            this.attributes.modification = Date.now();
            if (typeof contents === "string") {
                const encoded = encoder.encode(contents);
                this.contents = new Int8Array(encoded);
            }
            else {
                this.contents = contents instanceof Int8Array ? contents : new Int8Array(contents);
            }
            this.save();
            if (this.semaphore)
                this.semaphore.signal();
            return { value: true };
        }
        delete() {
            this.exists = false;
            if (this.children === null) {
                this.persistance.removeContents(this.path);
            }
            else {
                this.persistance.removeChildren(this.path);
            }
            this.persistance.removeAttributes(this.path);
            if (this.semaphore)
                this.semaphore.signal();
        }
        save() {
            if (this.children !== null)
                this.persistance.setChildren(this.path, this.children);
            if (this.contents !== null)
                this.persistance.setContents(this.path, this.contents);
            this.persistance.setAttributes(this.path, this.attributes);
        }
        getSemaphore() {
            return this.semaphore || (this.semaphore = new Semaphore());
        }
        doesExist() {
            return this.exists;
        }
        getAttributes() {
            const directory = this.isDirectory();
            return Object.assign({ directory, size: directory ? 0 : this.getContents().length }, this.attributes);
        }
    }
    class ComputerAccess {
        constructor(persistance, terminal, semaphore, stateChange) {
            this.filesystem = new Map();
            this.callbacks = [];
            this.removed = false;
            this.persistance = persistance;
            this.terminal = terminal;
            this.semaphore = semaphore;
            this.stateChanged = stateChange;
            this.label = persistance.getLabel();
            const queue = [""];
            while (true) {
                const path = queue.pop();
                if (path === undefined)
                    break;
                const children = persistance.getChildren(path);
                const attributes = persistance.getAttributes(path);
                if (children !== null) {
                    this.filesystem.set(path, new FileSystemEntry(persistance, path, children, null, attributes));
                    for (const child of children)
                        queue.push(joinName(path, child));
                }
                else if (path === "") {
                    // Create a new entry
                    this.filesystem.set("", new FileSystemEntry(persistance, "", [], null, attributes));
                }
                else {
                    // Assume it's a file
                    this.filesystem.set(path, new FileSystemEntry(persistance, path, null, null, attributes));
                }
            }
        }
        getLabel() {
            return this.label;
        }
        setState(label, on) {
            if (this.label !== label) {
                this.label = label;
                this.persistance.setLabel(label);
            }
            this.stateChanged(label, on);
        }
        updateTerminal(width, height, x, y, blink, cursorColour) {
            this.terminal.resize(width, height);
            this.terminal.cursorX = x;
            this.terminal.cursorY = y;
            this.terminal.cursorBlink = blink;
            this.terminal.currentFore = colours.charAt(cursorColour);
        }
        setTerminalLine(line, text, fore, back) {
            this.terminal.text[line] = text;
            this.terminal.fore[line] = fore;
            this.terminal.back[line] = back;
        }
        setPaletteColour(colour, r, g, b) {
            this.terminal.palette[colours.charAt(colour)] =
                `rgb(${(r * 0xFF) & 0xFF},${(g * 0xFF) & 0xFF},${(b * 0xFF) & 0xFF})`;
        }
        flushTerminal() {
            this.semaphore.signal();
        }
        getEntry(path) {
            return this.filesystem.get(path) || null;
        }
        createDirectory(path) {
            const entry = this.filesystem.get(path);
            if (!entry) {
                const [parentName, fileName] = splitName(path);
                const parent = this.createDirectory(parentName);
                if (parent.value === null)
                    return parent;
                const file = FileSystemEntry.create(this.persistance, path, true);
                parent.value.setChildren([...parent.value.getChildren(), fileName]);
                this.filesystem.set(path, file);
                return { value: file };
            }
            else if (entry.isDirectory()) {
                return { value: entry };
            }
            else {
                return { error: `/${path}: File exists`, value: null };
            }
        }
        createFile(path) {
            const entry = this.filesystem.get(path);
            if (!entry) {
                const [parentName, fileName] = splitName(path);
                const parent = this.filesystem.get(parentName);
                if (parent == null || !parent.isDirectory())
                    return { error: `/${path}: Access denied`, value: null };
                const file = FileSystemEntry.create(this.persistance, path, false);
                parent.setChildren([...parent.getChildren(), fileName]);
                this.filesystem.set(path, file);
                return { value: file };
            }
            else if (entry.isDirectory()) {
                return { error: `/${path}: Cannot write to directory`, value: null };
            }
            else {
                return { value: entry };
            }
        }
        deleteEntry(path) {
            const pathEntry = this.filesystem.get(path);
            if (!pathEntry)
                return pathEntry;
            // Remove from the parent
            const [parentName, fileName] = splitName(path);
            const parent = this.filesystem.get(parentName);
            parent.setChildren(parent.getChildren().filter(x => x !== fileName));
            // And delete any children
            const queue = [path];
            while (true) {
                const file = queue.pop();
                if (file === undefined)
                    break;
                const entry = this.filesystem.get(file);
                if (!entry)
                    continue;
                this.filesystem.delete(file);
                entry.delete();
                if (!entry.isDirectory())
                    continue;
                for (const child of entry.getChildren())
                    queue.push(joinName(file, child));
            }
        }
        start(config, options) {
            start(this, config)
                .then(computer => {
                this.handlers = computer;
                if (this.removed)
                    computer.dispose();
                const { width, height, label } = options || {};
                if (typeof width === "number" && typeof height === "number")
                    computer.resize(width, height);
                if (typeof this.label === "string")
                    computer.setLabel(this.label);
                else if (typeof label === "string")
                    computer.setLabel(label);
                for (const callback of this.callbacks)
                    callback(computer);
            })
                .catch(e => console.error("Cannot start computer", e));
        }
        queueEvent(event, args) {
            if (this.handlers !== undefined)
                this.handlers.event(event, args.map(x => JSON.stringify(x)));
        }
        keyDown(key, repeat) {
            const code = lwjgl3Code(key);
            if (code !== undefined)
                this.queueEvent("key", [code, repeat]);
        }
        keyUp(key) {
            const code = lwjgl3Code(key);
            if (code !== undefined)
                this.queueEvent("key_up", [code]);
        }
        turnOn() {
            var _a;
            if (this.handlers)
                (_a = this.handlers) === null || _a === void 0 ? void 0 : _a.turnOn();
        }
        shutdown() {
            var _a;
            if (this.handlers)
                (_a = this.handlers) === null || _a === void 0 ? void 0 : _a.shutdown();
        }
        reboot() {
            var _a;
            if (this.handlers)
                (_a = this.handlers) === null || _a === void 0 ? void 0 : _a.reboot();
        }
        dispose() {
            var _a;
            this.removed = true;
            if (this.handlers)
                (_a = this.handlers) === null || _a === void 0 ? void 0 : _a.dispose();
        }
        setPeripheral(side, kind) {
            if (this.handlers) {
                this.handlers.setPeripheral(side, kind);
            }
            else {
                this.callbacks.push(handler => handler.setPeripheral(side, kind));
            }
        }
    }

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    // Use a lookup table to find the index.
    const lookup = new Uint8Array(256);
    for (let i = 0; i < chars.length; i++)
        lookup[chars.charCodeAt(i)] = i;
    const encode = (buffer) => {
        const bytes = new Uint8Array(buffer);
        const len = bytes.length;
        let base64 = "";
        for (let i = 0; i < len; i += 3) {
            base64 += chars[bytes[i] >> 2];
            base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
            base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
            base64 += chars[bytes[i + 2] & 63];
        }
        if ((len % 3) === 2) {
            base64 = base64.substring(0, base64.length - 1) + "=";
        }
        else if (len % 3 === 1) {
            base64 = base64.substring(0, base64.length - 2) + "==";
        }
        return base64;
    };
    const decode = (base64) => {
        let bufferLength = base64.length * 0.75;
        const len = base64.length;
        if (base64[base64.length - 1] === "=") {
            bufferLength--;
            if (base64[base64.length - 2] === "=") {
                bufferLength--;
            }
        }
        const arraybuffer = new ArrayBuffer(bufferLength);
        const bytes = new Uint8Array(arraybuffer);
        let p = 0;
        for (let i = 0; i < len; i += 4) {
            const encoded1 = lookup[base64.charCodeAt(i)];
            const encoded2 = lookup[base64.charCodeAt(i + 1)];
            const encoded3 = lookup[base64.charCodeAt(i + 2)];
            const encoded4 = lookup[base64.charCodeAt(i + 3)];
            bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
            bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
            bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
        }
        return arraybuffer;
    };

    let enabled = true;
    const get = (key) => {
        if (!enabled)
            return null;
        try {
            return localStorage.getItem(key);
        }
        catch (e) {
            console.error("Error reading from storage, disabling all further access.", e);
            enabled = false;
            return null;
        }
    };
    const set = (key, value) => {
        if (!enabled)
            return;
        try {
            localStorage.setItem(key, value);
        }
        catch (e) {
            console.error("Error writing to localStorage, disabling all further access.", e);
            enabled = false;
        }
    };
    const remove = (key) => {
        if (!enabled)
            return;
        try {
            localStorage.removeItem(key);
        }
        catch (e) {
            console.error("Error writing to storage, disabling all further access.", e);
            enabled = false;
        }
    };

    const empty = new Int8Array(0);
    /**
     * A persistance instance which saves nothing, useful for temporary file systems.
     */
    class VoidPersistence {
        getLabel() { return null; }
        setLabel() { }
        getContents() { return empty; }
        setContents() { }
        removeContents() { }
        getChildren() { return null; }
        setChildren() { }
        removeChildren() { }
        getAttributes() { return null; }
        setAttributes() { }
        removeAttributes() { }
    }
    /**
     * Persistance instance which saves to storage.
     */
    class StoragePersistence {
        constructor(id) {
            this.prefix = `computer[${id}]`;
        }
        getLabel() {
            return get(`${this.prefix}.label`);
        }
        setLabel(label) {
            if (label === null) {
                remove(`${this.prefix}.label`);
            }
            else {
                set(`${this.prefix}.label`, label);
            }
        }
        getContents(path) {
            const contents = get(`${this.prefix}.files[${path}].b64`);
            return contents ? new Int8Array(decode(contents)) : empty;
        }
        setContents(path, contents) {
            set(`${this.prefix}.files[${path}].b64`, encode(contents));
        }
        removeContents(path) {
            remove(`${this.prefix}.files[${path}].b64`);
        }
        getChildren(path) {
            const children = get(`${this.prefix}.files[${path}].children`);
            if (children === null)
                return null;
            try {
                return JSON.parse(children);
            }
            catch (e) {
                console.error(`Error loading path "${path}"`);
                return null;
            }
        }
        setChildren(path, children) {
            set(`${this.prefix}.files[${path}].children`, JSON.stringify(children));
        }
        removeChildren(path) {
            remove(`${this.prefix}.files[${path}].children`);
        }
        getAttributes(path) {
            const attributes = get(`${this.prefix}.files[${path}].attributes`);
            if (attributes === null)
                return null;
            try {
                return JSON.parse(attributes);
            }
            catch (e) {
                console.error(`Error loading attributes for "${path}"`);
                return null;
            }
        }
        setAttributes(path, attr) {
            set(`${this.prefix}.files[${path}].attributes`, JSON.stringify(attr));
        }
        removeAttributes(path) {
            remove(`${this.prefix}.files[${path}].attributes`);
        }
    }

    exports.ComputerAccess = ComputerAccess;
    exports.S = S;
    exports.Semaphore = Semaphore;
    exports.StoragePersistence = StoragePersistence;
    exports.Terminal = Terminal;
    exports.TerminalData = TerminalData;
    exports.VoidPersistence = VoidPersistence;
    exports._ = _;
    exports.__awaiter = __awaiter;
    exports.get = get;
    exports.joinName = joinName;
    exports.saveBlob = saveBlob;
    exports.set = set;
    exports.splitName = splitName;
    exports.styleInject = styleInject;
    exports.termFont = termFont;
    exports.termFontHd = termFontHd;
    exports.v = v;

}));
