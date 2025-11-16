var tern=function(t){"use strict";function e(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,o)},h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:p,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:g}=Object,m=globalThis,f=m.trustedTypes,v=f?f.emptyScript:"",y=m.reactiveElementPolyfillSupport,$=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>!l(t,e),x={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:_};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);o?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(s)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of e){const e=document.createElement("style"),o=i.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=s.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=s;const r=o.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,o=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??_)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[$("elementProperties")]=new Map,A[$("finalized")]=new Map,y?.({ReactiveElement:A}),(m.reactiveElementVersions??=[]).push("2.1.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const E=globalThis,w=E.trustedTypes,T=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+L,U=`<${M}>`,C=document,P=()=>C.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,k="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,j=/>/g,N=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,z=/"/g,W=/^(?:script|style|textarea|title)$/i,X=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),Y=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),q=new WeakMap,V=C.createTreeWalker(C,129);function F(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==T?T.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=O;for(let e=0;e<i;e++){const i=t[e];let a,h,l=-1,c=0;for(;c<i.length&&(n.lastIndex=c,h=n.exec(i),null!==h);)c=n.lastIndex,n===O?"!--"===h[1]?n=R:void 0!==h[1]?n=j:void 0!==h[2]?(W.test(h[2])&&(o=RegExp("</"+h[2],"g")),n=N):void 0!==h[3]&&(n=N):n===N?">"===h[0]?(n=o??O,l=-1):void 0===h[1]?l=-2:(l=n.lastIndex-h[2].length,a=h[1],n=void 0===h[3]?N:'"'===h[3]?z:B):n===z||n===B?n=N:n===R||n===j?n=O:(n=N,o=void 0);const p=n===N&&t[e+1].startsWith("/>")?" ":"";r+=n===O?i+U:l>=0?(s.push(a),i.slice(0,l)+S+i.slice(l)+L+p):i+L+(-2===l?e:p)}return[F(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[h,l]=J(t,e);if(this.el=K.createElement(h,i),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=V.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=l[r++],i=s.getAttribute(t).split(L),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(L)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(W.test(s.tagName)){const t=s.textContent.split(L),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],P()),V.nextNode(),a.push({type:2,index:++o});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===M)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(L,t+1));)a.push({type:7,index:o}),t+=L.length-1}o++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===Y)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=I(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,s)),e}let Q=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??C).importNode(e,!0);V.currentNode=s;let o=V.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new G(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(o=V.nextNode(),r++)}return V.currentNode=C,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),I(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==Y&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==D&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(F(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new K(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new G(this.O(P()),this.O(P()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=Z(this,t,e,0),r=!I(t)||t!==this._$AH&&t!==Y,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=Z(this,s[i+n],e,n),a===Y&&(a=this._$AH[n]),r||=!I(a)||a!==this._$AH[n],a===D?t=D:t!==D&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==D)}}class st extends tt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??D)===Y)return;const i=this._$AH,s=t===D&&i!==D||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==D&&(i===D||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const rt={I:G},nt=E.litHtmlPolyfillSupport;nt?.(K,G),(E.litHtmlVersions??=[]).push("3.3.1");const at=globalThis;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */let ht=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new G(e.insertBefore(P(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}};ht._$litElement$=!0,ht.finalized=!0,at.litElementHydrateSupport?.({LitElement:ht});const lt=at.litElementPolyfillSupport;lt?.({LitElement:ht}),(at.litElementVersions??=[]).push("4.2.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},pt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:_},dt=(t=pt,e,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function ut(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function gt(t){return ut({...t,state:!0,attribute:!1})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const mt=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function ft(t,e){return(e,i,s)=>mt(e,i,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const vt=2,yt=t=>(...e)=>({_$litDirective$:t,values:e});class $t{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const{I:bt}=rt,_t=()=>document.createComment(""),xt=(t,e,i)=>{const s=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=s.insertBefore(_t(),o),r=s.insertBefore(_t(),o);i=new bt(e,r,t,t.options)}else{const e=i._$AB.nextSibling,r=i._$AM,n=r!==t;if(n){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==r._$AU&&i._$AP(e)}if(e!==o||n){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;s.insertBefore(t,o),t=e}}}return i},At=(t,e,i=t)=>(t._$AI(e,i),t),Et={},wt=t=>{t._$AR(),t._$AA.remove()},Tt=(t,e,i)=>{const s=new Map;for(let o=e;o<=i;o++)s.set(t[o],o);return s},St=yt(class extends $t{constructor(t){if(super(t),t.type!==vt)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const o=[],r=[];let n=0;for(const e of t)o[n]=s?s(e,n):n,r[n]=i(e,n),n++;return{values:r,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,s]){const o=(t=>t._$AH)(t),{values:r,keys:n}=this.dt(e,i,s);if(!Array.isArray(o))return this.ut=n,r;const a=this.ut??=[],h=[];let l,c,p=0,d=o.length-1,u=0,g=r.length-1;for(;p<=d&&u<=g;)if(null===o[p])p++;else if(null===o[d])d--;else if(a[p]===n[u])h[u]=At(o[p],r[u]),p++,u++;else if(a[d]===n[g])h[g]=At(o[d],r[g]),d--,g--;else if(a[p]===n[g])h[g]=At(o[p],r[g]),xt(t,h[g+1],o[p]),p++,g--;else if(a[d]===n[u])h[u]=At(o[d],r[u]),xt(t,o[p],o[d]),d--,u++;else if(void 0===l&&(l=Tt(n,u,g),c=Tt(a,p,d)),l.has(a[p]))if(l.has(a[d])){const e=c.get(n[u]),i=void 0!==e?o[e]:null;if(null===i){const e=xt(t,o[p]);At(e,r[u]),h[u]=e}else h[u]=At(i,r[u]),xt(t,o[p],i),o[e]=null;u++}else wt(o[d]),d--;else wt(o[p]),p++;for(;u<=g;){const e=xt(t,h[g+1]);At(e,r[u]),h[u++]=e}for(;p<=d;){const t=o[p++];null!==t&&wt(t)}return this.ut=n,((t,e=Et)=>{t._$AH=e})(t,h),Y}});
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
class Lt extends $t{constructor(t){if(super(t),this.it=D,t.type!==vt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===D||null==t)return this._t=void 0,this.it=t;if(t===Y)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Lt.directiveName="unsafeHTML",Lt.resultType=1;const Mt=yt(Lt);
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Ut(t,e,i){return t?e(t):i?.(t)}function Ct(t,e=500){let i=null;return function(...s){i&&clearTimeout(i),i=setTimeout(()=>{t.apply(this,s),i=null},e)}}function Pt(t,e,i,s){const o=new XMLHttpRequest;o.open(t.method,t.action,!0);const r=new FormData;for(const[e,i]of Object.entries(t.filesList))r.append(t.name,i.file);if(o.addEventListener("load",()=>{if(o.status<200||o.status>=300)return t.filesList.forEach(t=>{t.status="error"}),s&&s(o);t.filesList.forEach(t=>{t.status="success"}),i&&i(o)}),o.addEventListener("error",()=>{t.filesList.forEach(t=>{t.status="error"}),s&&s(o)}),o.addEventListener("progress",t=>{const i=t.total>0?t.loaded/t.total*100:0;e&&e({...t,percent:i})}),t.headers)for(const[e,i]of Object.entries(t.headers))o.setRequestHeader(e,i);return o.withCredentials=t.withCredentials,o.send(r),o}t.TernVirtualList=class extends ht{constructor(){super(...arguments),this.list=[],this.itemMax=10,this.estimate=50,this.buffer=5,this.autoHeight=!1,this.itemsList=[],this.top=0,this.maxHeight=0,this.isLoading=!1,this.loadingTop=0,this.startIdx=0,this.startBuffer=0,this.posMap=new Map,this.observer=[],this.cacheScrollTop=0,this.loadingNum=1,this.fn=Ct(this.resizeObserver,100),this._scroll=Ct(this.onScroll,200),this.fnLoading=Ct(()=>{this.isLoading=!1,this.requestUpdate()},0)}connectedCallback(){super.connectedCallback(),this.getItemsList(),this.initPositions(),this.getMaxHeight(),this.getLoadingTop(0),this.initIntersectionObserver()}firstUpdated(t){this.autoHeight&&(this.resizeObserver(),this.getMaxHeight())}findStartIndex(t){const e=Array.from(this.posMap.values());let i=0,s=e.length-1;for(;i<=s;){const o=Math.floor((i+s)/2),r=e[o];if(r.top<=t&&r.bottom>t)return r.index;r.bottom<=t?i=o+1:s=o-1}return 0}getTop(t){const e=this.posMap.get(this.startIdx),i=this.startIdx>=this.buffer?this.posMap.get(this.buffer).top:e.top;this.top=t-t%e.top-i}getItemsList(){this.startBuffer=this.startIdx-this.buffer>=0?this.startIdx-this.buffer:0;const t=this.startIdx+this.itemMax+this.buffer,e=this.list.slice(this.startBuffer,t);return this.itemsList=e,this.dispatchEvent(new CustomEvent("change",{detail:{list:e,startIdx:this.startIdx}})),e}getMaxHeight(){const t=this.list.length-1||0,e=this.posMap.get(t);return this.maxHeight=e?.bottom||0,e?.bottom||0}initPositions(){this.list.forEach((t,e)=>{this.posMap.set(e,{id:e,index:e,width:this.estimate,height:this.estimate,top:e*this.estimate,bottom:(e+1)*this.estimate})})}resizeObserver(t=!0){const e=this.renderItem?this.itemEl.children:this.slotElement.assignedElements();this.observer.length&&this.observer.forEach(t=>t.disconnect()),this.observer=[],t&&Array.from(e).forEach((t,i)=>{const s=new ResizeObserver(t=>{const s=this.startIdx+i,o=t[0],r=o.target.getRootNode();if(r instanceof Document&&document.contains(o.target)||r instanceof ShadowRoot&&r.host.isConnected){const t=this.posMap.get(s-1),e=t?t.bottom:0,i=getComputedStyle(o.target),r=parseFloat(i.marginBottom);this.posMap.set(s,{id:s,index:s,width:o.borderBoxSize[0].inlineSize,height:o.borderBoxSize[0].blockSize,top:e,bottom:e+o.borderBoxSize[0].blockSize+r})}if(i>=e.length-1){const t=this.posMap.size;let e=this.posMap.get(s).top;for(let i=s+1;i<t;i++){const t=this.posMap.get(i);this.posMap.set(i,{...t,top:e,bottom:e+t.height}),e+=t.height}}});s.observe(t),this.observer.push(s)})}onScroll(t){this.isLoading=!0;const e=(t.target||this).scrollTop,i=!(this.cacheScrollTop>e);this.getLoadingTop(e),this.autoHeight?window.requestAnimationFrame(()=>{this.fn(i),this.startIdx=this.findStartIndex(e),this.getItemsList(),this.getTop(e)}):(this.startIdx=this.findStartIndex(e),this.getItemsList(),this.getTop(e)),this.getMaxHeight(),this.cacheScrollTop=e,this.isLoading=!1,this.requestUpdate()}initIntersectionObserver(){new IntersectionObserver(t=>{console.log("IntersectionObserver",t)}).observe(document.querySelector(".list-loading"))}getLoadingTop(t){const e=this.startIdx+this.itemMax+this.buffer;this.posMap.get(e),this.loadingTop=t-t%50}render(){return X`<div class="virtual-list" @scroll=${this.onScroll}>
      <div class="list-container" style="height:${this.maxHeight}px"></div>
      <div class="list-items" style="transform: translateY(${this.top}px)">
        ${Ut(this.renderItem,()=>St(this.itemsList,(t,e)=>this.startBuffer+e,(t,e)=>X`<div
                class="list-item"
                data-key="${this.startIdx+e}"
              >
                ${Mt(this.renderItem(t,this.startBuffer+e))}
              </div>`),()=>X`<slot></slot>`)}
      </div>

      <!-- <div
        class="list-loading"
        style="transform: translateY(${this.loadingTop}px);visibility:${this.isLoading?"visible":"hidden"}"
      >
        ${this.itemsList.map((t,e)=>X`<div style="height: 50px;color:red;background: yellow;">
              loading~~~~~~~~~~~
            </div>`)}
      </div> -->
    </div>`}},t.TernVirtualList.styles=a`
    :host {
      display: block;
    }
    .virtual-list {
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
    }
    .list-items {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      will-change: transform;
    }

    .list-item {
      width: 100%;
      box-sizing: border-box;
    }
    .list-loading {
      position: absolute;
      top: 0px;
      left: 0px;
    }
  `,e([ft(".virtual-list")],t.TernVirtualList.prototype,"listEl",void 0),e([ft(".list-items")],t.TernVirtualList.prototype,"itemEl",void 0),e([ft(".list-item")],t.TernVirtualList.prototype,"itemEls",void 0),e([ft("slot")],t.TernVirtualList.prototype,"slotElement",void 0),e([ut({type:Array})],t.TernVirtualList.prototype,"list",void 0),e([ut({type:Number})],t.TernVirtualList.prototype,"itemMax",void 0),e([ut({type:Number})],t.TernVirtualList.prototype,"estimate",void 0),e([ut({type:Number})],t.TernVirtualList.prototype,"buffer",void 0),e([ut({type:Boolean})],t.TernVirtualList.prototype,"autoHeight",void 0),e([ut({attribute:!1})],t.TernVirtualList.prototype,"renderItem",void 0),e([gt()],t.TernVirtualList.prototype,"itemsList",void 0),e([gt()],t.TernVirtualList.prototype,"top",void 0),e([gt()],t.TernVirtualList.prototype,"maxHeight",void 0),e([gt()],t.TernVirtualList.prototype,"loadingTop",void 0),t.TernVirtualList=e([ct("tern-virtual-list")],t.TernVirtualList),t.TernUpload=class extends ht{constructor(){super(...arguments),this.accept="image/*",this.multiple=!1,this.headers={},this.action="#",this.method="POST",this.withCredentials=!1,this.name="file",this.autoUpload=!0,this.limit=1,this.fileList=[],this._onChange=new CustomEvent("change",{detail:{fileList:this.fileList}}),this._onError=new CustomEvent("error",{detail:{fileList:this.fileList,message:"超出数量限制",limit:this.limit}})}async changeEvent(t){const e=t.target.files;if(this.fileList.length+e.length>this.limit&&this.limit>1)return this.dispatchEvent(this._onError),void(this.inputEl.value="");1===this.limit&&this.fileList.pop(),e.length&&(await Promise.allSettled(Array.from(e).map(t=>{return e=t,new Promise((t,i)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>t(s.result),s.onerror=i});var e})).then(t=>{t.forEach((t,i)=>{"fulfilled"===t.status&&this.fileList.push({uid:crypto.randomUUID(),baseURL:t.value,file:e[i],status:"waiting"})})}),this.dispatchEvent(this._onChange),this.autoUpload&&this.submit())}submit(){this.httpRequest?this.beforeUpload?this.beforeUpload(this.fileList).then(this.httpRequest):this.httpRequest(this.fileList):this.beforeUpload?this.beforeUpload(this.fileList).then(t=>Pt({headers:this.headers,action:this.action,name:this.name,method:this.method,withCredentials:this.withCredentials,filesList:t},this.httpProgress,this.httpSuccess,this.httpError)):Pt({headers:this.headers,action:this.action,name:this.name,method:this.method,withCredentials:this.withCredentials,filesList:this.fileList},this.httpProgress,this.httpSuccess,this.httpError)}render(){return X`<div class="upload" @click=${()=>this.inputEl.click()}>
      <input
        class="upload-input"
        type="file"
        accept=${this.accept}
        ?multiple=${this.multiple}
        @change=${this.changeEvent}
      />
      <slot></slot>
    </div> `}},t.TernUpload.styles=a`
    :host {
      display: inline-flex;
    }
    .upload input[type='file'] {
      display: none;
    }
  `,e([ft(".upload-input")],t.TernUpload.prototype,"inputEl",void 0),e([ut({type:String})],t.TernUpload.prototype,"accept",void 0),e([ut({type:Boolean})],t.TernUpload.prototype,"multiple",void 0),e([ut({type:Object})],t.TernUpload.prototype,"headers",void 0),e([ut({type:String})],t.TernUpload.prototype,"action",void 0),e([ut({type:String})],t.TernUpload.prototype,"method",void 0),e([ut({type:Boolean})],t.TernUpload.prototype,"withCredentials",void 0),e([ut({type:String})],t.TernUpload.prototype,"name",void 0),e([ut({type:Function})],t.TernUpload.prototype,"httpRequest",void 0),e([ut({type:Boolean})],t.TernUpload.prototype,"autoUpload",void 0),e([ut({type:Number})],t.TernUpload.prototype,"limit",void 0),e([ut({type:Function})],t.TernUpload.prototype,"httpProgress",void 0),e([ut({type:Function})],t.TernUpload.prototype,"httpSuccess",void 0),e([ut({type:Function})],t.TernUpload.prototype,"httpError",void 0),e([ut({type:Function})],t.TernUpload.prototype,"beforeUpload",void 0),e([ut({type:Array})],t.TernUpload.prototype,"fileList",void 0),t.TernUpload=e([ct("tern-upload-file")],t.TernUpload),t.TernTextArea=class extends ht{firstUpdated(t){var e;console.log("firstUpdated",this.attributes),console.log("cloneAttributes(this)",(e=this,Array.from(e.attributes).map(t=>`${t.name}="${t.value}"`).join(" ")))}render(){return X`
            <div>
                <textarea id="story" name="story" rows="2"></textarea>
            </div>
        `}},t.TernTextArea=e([ct("tern-textarea")],t.TernTextArea);let It=class extends ht{constructor(){super(...arguments),this.scale=1,this.src="",this.isShow=!1,this.page={isTouch:!1,startX:0,startY:0,moveX:0,moveY:0,x:0,y:0}}firstUpdated(){document.querySelector("body").style.overflow="hidden",setTimeout(()=>this.isShow=!0)}disconnectedCallback(){document.querySelector("body").style.overflow="",this.isShow=!1}onWheel(t){t.deltaY<0?this.scale+=.2:this.scale-=.2,this.scale=Math.min(Math.max(this.scale,.1),8)}onMouseDown(t){this.page.isTouch=!0,this.page.startX=t.clientX,this.page.startY=t.clientY,this.page.moveX=t.clientX,this.page.moveY=t.clientY}onMouseUp(t){this.page.isTouch=!1,this.page.startX=0,this.page.startY=0,this.page.moveX=0,this.page.moveY=0}onMouseMove(t){this.page.isTouch&&(this.page.x+=t.clientX-this.page.moveX,this.page.y+=t.clientY-this.page.moveY,this.page.moveX=t.clientX,this.page.moveY=t.clientY,this.imgEl.style.transform=`scale(${this.scale}) translate(${this.page.x/this.scale}px, ${this.page.y/this.scale}px)`)}close(){this.isShow=!1,setTimeout(()=>{this.remove()},0)}render(){return X`<div
      class="preview"
      @wheel=${this.onWheel}
      @mouseup=${this.onMouseUp}
      @mousemove=${this.onMouseMove}
      @mouseleave=${this.onMouseUp}
    >
      <div class="cancel" @click="${this.close}"></div>
      <img
        src="${this.src}"
        @mousedown=${this.onMouseDown}
        style="transform: scale(${this.scale}) translate(${this.page.x/this.scale}px, ${this.page.y/this.scale}px)"
      />
    </div>`}};function Ht(t,e,i){const s=e,o=i-s,r=performance.now();requestAnimationFrame(function e(n){const a=n-r;a<300?(this.page.x=function(t,e,i,s){return t/=s,t--,i*(t*t*t+1)+e}(a,s,o,300),t.style.transform=`translateX(${this.page.x}px)`,requestAnimationFrame(e.bind(this))):(t.style.transform=`translateX(${i}px)`,this.page.x=i)}.bind(this))}return It.styles=a`
    :host {
      position: fixed;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      width: 100vw;
      height: 100vh;
      z-index: 3000;
    }
    .preview {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.45);
      .cancel {
        cursor: pointer;
        position: absolute;
        top: 32px;
        right: 32px;
        width: 42px;
        height: 42px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
      }
      .cancel::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        display: block;
        width: 2px;
        height: 18px;
        background: #fff;
      }
      .cancel::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(135deg);
        display: block;
        width: 2px;
        height: 18px;
        background: #fff;
      }
      img {
        max-width: 50%;
        max-height: 50%;
        cursor: grab;
        user-select: none;
        /* user-drag: none; */
        -webkit-user-drag: none;
        pointer-events: auto;
      }
    }
  `,e([ft(".preview img")],It.prototype,"imgEl",void 0),e([ut({type:Number})],It.prototype,"scale",void 0),e([ut({type:String})],It.prototype,"src",void 0),e([gt()],It.prototype,"isShow",void 0),It=e([ct("tern-preview")],It),t.TernImage=class extends ht{constructor(){super(...arguments),this.alt="",this.src="",this.placeholder="",this.errorSrc="",this.lazy=!0,this.fit="contain",this.throttle=500,this.delay=0,this.imageState="init",this.isHover=!1}onImageLoad(){setTimeout(()=>{this.imageState="success",this.observer?.disconnect()},this.delay)}onImageError(t){this.imageState="error",this.httpError&&this.httpError(t)}onMouseenter(){this.isHover=!0}onMouseleave(t){this.isHover=!1}showPreview(){const t=document.createElement("tern-preview");t.src=this.src,document.body.appendChild(t)}firstUpdated(){this.lazy?(this.observer=new IntersectionObserver(t=>{t[0].isIntersecting?this.timeout=setTimeout(()=>this.imgEl.src=this.src,this.throttle):clearTimeout(this.timeout)}),this.observer.observe(this.contentEl)):this.imgEl.src=this.src}render(){return X`<div
      class="image"
      @mouseenter="${this.onMouseenter}"
      @mouseleave="${this.onMouseleave}"
      @click="${this.showPreview}"
    >
      ${"error"!==this.imageState?X`<img
            class="default-image"
            alt="${this.alt}"
            style="object-fit: ${this.fit}"
            @load="${this.onImageLoad}"
            @error="${this.onImageError}"
          />`:null}
      ${"init"===this.imageState||"loading"===this.imageState?Ut(this.placeholder,()=>X` <img
              class="placeholder placeholder-loading"
              src="${this.placeholder}"
              alt="${this.alt}"
              style="object-fit: ${this.fit}"
            />`,()=>X` <div class="placeholder placeholder-loading">
              <slot></slot>
            </div>`):null}
      ${"error"===this.imageState?Ut(this.errorSrc,()=>X` <img
              class="placeholder placeholder-error"
              src="${this.errorSrc}"
              alt="${this.alt}"
              style="object-fit: ${this.fit}"
            />`,()=>X`<div class="placeholder placeholder-error">
              <slot name="error"></slot>
            </div>`):null}
      ${this.isHover&&"success"===this.imageState?X` <div class="placeholder placeholder-preview">
            <slot name="preview"></slot>
          </div>`:null}
    </div>`}},t.TernImage.styles=a`
    :host {
      display: inline-block
    }
    .image {
      width: 100%;
      height: 100%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .placeholder {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  `,e([ft(".image")],t.TernImage.prototype,"contentEl",void 0),e([ft(".image .default-image")],t.TernImage.prototype,"imgEl",void 0),e([ut({type:String})],t.TernImage.prototype,"alt",void 0),e([ut({type:String})],t.TernImage.prototype,"src",void 0),e([ut({type:String})],t.TernImage.prototype,"placeholder",void 0),e([ut({type:String})],t.TernImage.prototype,"errorSrc",void 0),e([ut({type:Boolean})],t.TernImage.prototype,"lazy",void 0),e([ut({type:String})],t.TernImage.prototype,"fit",void 0),e([ut({type:Number})],t.TernImage.prototype,"throttle",void 0),e([ut({type:Number})],t.TernImage.prototype,"delay",void 0),e([ut({type:Function})],t.TernImage.prototype,"httpError",void 0),e([ut({type:String})],t.TernImage.prototype,"imageState",void 0),e([ut({type:Boolean})],t.TernImage.prototype,"isHover",void 0),t.TernImage=e([ct("tern-image")],t.TernImage),t.TernEmojiBox=class extends ht{constructor(){super(...arguments),this.emoji=["😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊","😋","😎","😍","😘","😗","😙","😚","😇","🙂","🤗","🤔"],this.emojiList=[{id:"smileys",name:"smileys",icon:"😀",list:["😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊","😋","😎","😍","😘","😗","😙","😚","😇","😐","😑","😶","😏","😣","😥","😮","😯","😪","😫","😴","😌","😛","😜","😝","😒","😓","😔","😕","👍","👎","👌","✌️","🤞","🤟","🤘","🤙","👈","👉","👆","🖕","👇","☝️","👋","🤚","🖐️","✋","🖖","👏","🙌","🤲","🤝","🙏","✍️","💅","🤳","💪","🦾","🦿","🦵","🦶","👂","🦻","👃","🧠"]},{id:"hearts",name:"hearts",icon:"❤️",list:["❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","♥️","💌","💋","💍","💎"]},{id:"animals",name:"animals",icon:"🐶",list:["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐽","🐸","🐵","🙈","🙉","🙊","🐒","🐔","🐧","🐦","🐤","🐣","🐥","🦆","🦅","🦉","🦇","🐺","🐗","🐴","🦄","🐝","🐛"]},{id:"food",name:"food",icon:"🍎",list:["🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🍈","🍒","🍑","🥭","🍍","🥥","🥝","🍅","🍆","🥑","🥦","🥬","🥒","🌶️","🌽","🥕","🧄","🧅","🥔","🍠","🥐","🍞","🥖","🥨","🧀","🥚","🍳","🧈"]},{id:"travel",name:"travel",icon:"🚗",list:["🚗","🚕","🚙","🚌","🚎","🏎️","🚓","🚑","🚒","🚐","🛻","🚚","🚛","🚜","🏍️","🛵","🚲","🛴","🛺","🚨","🚔","🚍","🚘","🚖","🚡","🚠","🚟","🚃","🚋","🚞","🚝","🚄","🚅","🚈","🚂","🚆"]}],this.mountEl="",this.index=0}mount(){if(this.mountEl){const t=document.createElement("tern-emoji-box");document.querySelector(this.mountEl).appendChild(t)}}render(){return X`<div class="emoji-box">
      <tern-scroll class='tabs' .align=${"start"}>
        ${this.emojiList.map((t,e)=>X`<div
            class="tab"
            @click=${()=>this.index=e}
          >
            <span class="icon">${t.icon}</span>
          </div>`)}
      </tern-scroll>
      <div class="list">
        ${this.emojiList[this.index].list.map(t=>X`<div class="item"><div class="icon">${t}</div></div>`)}
      </div>
    </div>`}},t.TernEmojiBox.styles=a`
    :host {
      width: 375px;
      display: block;
      user-select: none;
    }
    .emoji-box {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .tabs {
        width: 100%;
        font-size: 16px;
        background: #f4f4f5;
        padding: 2px;
        box-sizing: border-box;
        .tab {
          text-align: center;
          line-height: 34px;
          cursor: pointer;
          width: 20%;
          height: 34px;
          box-sizing: border-box;
        }
        .tern-scroll-active {
          border-radius: 4px;
          background: white;
        }
      }
      .list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
        font-size: 18px;
        flex: 1;
        overflow: auto;
        margin: 2px;
        .item {
          width: 40px;
          height: 40px;
          border-radius: 4px;
          cursor: pointer;
          &:hover {
            background: #f4f4f5;
          }
          .icon {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  `,e([ut({type:String})],t.TernEmojiBox.prototype,"mountEl",void 0),e([gt()],t.TernEmojiBox.prototype,"index",void 0),t.TernEmojiBox=e([ct("tern-emoji-box")],t.TernEmojiBox),t.TernScroll=class extends ht{constructor(){super(...arguments),this.align="none",this.page={isTouch:!1,isMove:!1,startX:0,startY:0,moveX:0,moveY:0,x:0,y:0,contentWidth:0,contentHeight:0,scrollWidth:0,scrollHeight:0,currentTaget:null},this.onMouseMove=t=>{this.page.isTouch&&(this.page.isMove=!0,this.page.x+=t.clientX-this.page.moveX,this.page.y+=t.clientY-this.page.moveY,this.page.moveX=t.clientX,this.page.moveY=t.clientY,this.contentEl.style.transform=`translateX(${this.page.x}px)`)},this.onMouseUp=()=>{this.page.isTouch=!1,this.page.startX=0,this.page.startY=0,this.page.moveX=0,this.page.moveY=0;const t=function(t){const e=t.assignedElements({flatten:!0}),i=e.length,s=e[i-1];if(s instanceof HTMLElement)return{width:s.offsetLeft+s.offsetWidth,height:s.offsetTop+s.offsetHeight};{const t=s.getBoundingClientRect();return{width:t.right,height:t.bottom}}}(this.slotEl),e={width:(i=this.scrollEl).offsetWidth,height:i.offsetHeight};var i;this.page.contentWidth=t.width,this.page.contentHeight=t.height,this.page.scrollWidth=e.width,this.page.scrollHeight=e.height,this.page.x>0?Ht.call(this,this.contentEl,this.page.x,0):this.page.x<-(this.page.contentWidth-this.page.scrollWidth)&&Ht.call(this,this.contentEl,this.page.x,-(this.page.contentWidth-this.page.scrollWidth))}}connectedCallback(){super.connectedCallback(),window.addEventListener("pointermove",this.onMouseMove),window.addEventListener("pointerup",this.onMouseUp),window.addEventListener("pointerleave",this.onMouseUp)}firstUpdated(t){Array.from(this.slotList).forEach(t=>{t.addEventListener("click",this.onClickAlign.bind(this))})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("pointermove",this.onMouseMove),window.removeEventListener("pointerup",this.onMouseUp),window.removeEventListener("pointerleave",this.onMouseUp)}onMouseDown(t){this.page.isTouch=!0,this.page.isMove=!1,this.page.startX=t.clientX,this.page.startY=t.clientY,this.page.moveX=t.clientX,this.page.moveY=t.clientY}onWheel(t){this.page.x>=0||this.page.x>=-(this.page.contentWidth-this.page.scrollWidth)||(t.deltaX<0||t.deltaY<0?this.page.x+=30:this.page.x-=30,this.contentEl.style.transform=`translateX(${this.page.x}px)`)}onClickAlign(t){const e=t.currentTarget;if(this.page.currentTaget?(this.page.currentTaget.classList.remove("tern-scroll-active"),e.classList.add("tern-scroll-active"),this.page.currentTaget=e):(e.classList.add("tern-scroll-active"),this.page.currentTaget=e),"none"!==this.align&&!this.page.isMove)if("start"===this.align)-e.offsetLeft>-(this.page.contentWidth-this.page.scrollWidth)?this.smoothScrollTo(-e.offsetLeft):this.smoothScrollTo(-(this.page.contentWidth-this.page.scrollWidth));else if("center"===this.align){const t=e.offsetLeft-this.page.scrollWidth/2+e.clientWidth/2;-t>0?this.smoothScrollTo(0):-t<-(this.page.contentWidth-this.page.scrollWidth)?this.smoothScrollTo(-(this.page.contentWidth-this.page.scrollWidth)):this.smoothScrollTo(-t)}}smoothScrollTo(t){Ht.call(this,this.contentEl,this.page.x,t)}render(){return X`<div
      class="tern-scroll"
      @wheel=${this.onWheel}
      @pointerdown=${this.onMouseDown}
    >
      <div class="scroll-content">
        <slot></slot>
      </div>
    </div>`}},t.TernScroll.styles=a`
    :host {
      display: block;
      user-select: none;
      position: relative;
    }
    .tern-scroll {
      width: 100%;
      height: 100%;
      overflow: hidden;
      .scroll-content {
        white-space: nowrap;
        ::slotted(*) {
          display: inline-block;
        }
      }
    }
  `,e([ft(".tern-scroll")],t.TernScroll.prototype,"scrollEl",void 0),e([ft(".scroll-content")],t.TernScroll.prototype,"contentEl",void 0),e([ft("slot")],t.TernScroll.prototype,"slotEl",void 0),e([function(t){return(e,i)=>{const{slot:s,selector:o}={},r="slot"+(s?`[name=${s}]`:":not([name])");return mt(e,i,{get(){const e=this.renderRoot?.querySelector(r),i=e?.assignedElements(t)??[];return void 0===o?i:i.filter(t=>t.matches(o))}})}}()],t.TernScroll.prototype,"slotList",void 0),e([ut({type:String})],t.TernScroll.prototype,"align",void 0),e([gt()],t.TernScroll.prototype,"page",void 0),t.TernScroll=e([ct("tern-scroll")],t.TernScroll),t}({});
