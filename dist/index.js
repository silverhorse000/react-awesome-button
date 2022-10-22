/*! For license information please see index.js.LICENSE.txt */
!function webpackUniversalModuleDefinition(n,i){"object"==typeof exports&&"object"==typeof module?module.exports=i(require("react")):"function"==typeof define&&define.amd?define(["react"],i):"object"==typeof exports?exports["react-awesome-button"]=i(require("react")):n["react-awesome-button"]=i(n.React)}(this,(n=>(()=>{var i={251:(n,i,l)=>{"use strict";var a=l(787),u=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,f=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function q(n,i,l){var a,s={},p=null,h=null;for(a in void 0!==l&&(p=""+l),void 0!==i.key&&(p=""+i.key),void 0!==i.ref&&(h=i.ref),i)d.call(i,a)&&!v.hasOwnProperty(a)&&(s[a]=i[a]);if(n&&n.defaultProps)for(a in i=n.defaultProps)void 0===s[a]&&(s[a]=i[a]);return{$$typeof:u,type:n,key:p,ref:h,props:s,_owner:f.current}}i.jsx=q,i.jsxs=q},893:(n,i,l)=>{"use strict";n.exports=l(251)},115:function(n){n.exports=function(n){var i={};function t(l){if(i[l])return i[l].exports;var a=i[l]={i:l,l:!1,exports:{}};return n[l].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=n,t.c=i,t.d=function(n,i,l){t.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:l})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,i){if(1&i&&(n=t(n)),8&i)return n;if(4&i&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&i&&"string"!=typeof n)for(var a in n)t.d(l,a,function(i){return n[i]}.bind(null,a));return l},t.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(i,"a",i),i},t.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},t.p="",t(t.s=0)}([function(n,i,l){"use strict";function o(n,i){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=l.tolerance,u=void 0===a?0:a,s=l.propertyName;return new Promise((function(l){if(n){var a=null,d=i.charAt(0).toUpperCase()+i.slice(1),f=0;void 0!==n.style["Webkit"+d]&&(a="webkit"+d+"End"),void 0!==n.style.OTransition&&(a="o"+i+"End"),void 0!==n.style[i]&&(a=i+"end"),n.clearCssEndEvent&&n.clearCssEndEvent(),n.clearCssEndEvent=function(){n.removeEventListener(a,c)},n.addEventListener(a,c)}else l(!1);function c(i){if((i.srcElement||i.target)===n){if(f>=u){if(s&&s!==i.propertyName)return;n.removeEventListener(a,c),l(i)}f+=1}}}))}function r(n){window&&window.requestAnimationFrame((function(){window.requestAnimationFrame(n)}))}Object.defineProperty(i,"__esModule",{value:!0}),i.setCssEndEvent=o,i.beforeCssLayout=function(n){window&&window.requestAnimationFrame(n)},i.beforeNextCssLayout=r,i.beforeFutureCssLayout=function(n,i){!function e(n,i){window&&n&&Number.isInteger(n)&&n>0?window.requestAnimationFrame((function(){e(n-1,i)})):i()}(n+1,i)},i.onceNextCssLayout=function(){return new Promise((function(n){r(n)}))},i.onceTransitionEnd=function(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(l){o(n,"transition",i).then(l)}))},i.onceAnimationEnd=function(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(l){o(n,"animation",i).then(l)}))}}])},787:i=>{"use strict";i.exports=n}},l={};function __webpack_require__(n){var a=l[n];if(void 0!==a)return a.exports;var u=l[n]={exports:{}};return i[n].call(u.exports,u,u.exports,__webpack_require__),u.exports}__webpack_require__.d=(n,i)=>{for(var l in i)__webpack_require__.o(i,l)&&!__webpack_require__.o(n,l)&&Object.defineProperty(n,l,{enumerable:!0,get:i[l]})},__webpack_require__.o=(n,i)=>Object.prototype.hasOwnProperty.call(n,i),__webpack_require__.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var a={};return(()=>{"use strict";__webpack_require__.r(a),__webpack_require__.d(a,{AwesomeButton:()=>components_AwesomeButton,AwesomeButtonProgress:()=>components_AwesomeButtonProgress,AwesomeButtonSocial:()=>components_AwesomeButtonSocial});var n=__webpack_require__(893),i=__webpack_require__(787),l=__webpack_require__(115),u=["middle","left","right"];function serialize(n,i){return void 0===i&&(i="&"),Object.entries(n).map((function(n){var i=n[0],l=n[1];return"".concat(i,"=").concat(l)})).join(i)}function classToModules(n,i){if(void 0===n&&(n=[]),!i)return n.join(" ").trim();for(var l=[],a=n.length;a--;)i[n[a]]&&l.push(i[n[a]]);return l.join(" ").trim()}function getClassName(n,i){return void 0===n&&(n=""),i&&i[n]||n}function toggleMoveClasses(n){var i,l=n.element,a=n.root,s=n.cssModule,d=void 0===s?null:s,f=n.state,v=void 0===f?null:f;if(!(null===(i=null==l?void 0:l.classList)||void 0===i?void 0:i.remove))return!1;if(!v)return[classToModules(["".concat(a,"--").concat(u[0])],d),classToModules(["".concat(a,"--").concat(u[1])],d),classToModules(["".concat(a,"--").concat(u[2])],d)].forEach((function(n){n&&l.classList.remove(n)})),!1;for(var p=u.filter((function(n){return n!==v})),h=p.length;h--;){var m=classToModules(["".concat(a,"--").concat(p[h])],d);m&&l.classList.remove(m)}var b=classToModules(["".concat(a,"--").concat(v)],d);return b&&l.classList.add(b),!0}var __assign=function(){return __assign=Object.assign||function(n){for(var i,l=1,a=arguments.length;l<a;l++)for(var u in i=arguments[l])Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u]);return n},__assign.apply(this,arguments)},s="undefined"!=typeof window,d=s&&"ontouchstart"in window||"undefined"!=typeof window&&navigator.maxTouchPoints>0,Anchor=function(i){return(0,n.jsx)("a",__assign({},i))},Button=function(i){return(0,n.jsx)("button",__assign({},i))};const components_AwesomeButton=function(a){var u=a.active,f=void 0!==u&&u,v=a.after,p=void 0===v?null:v,h=a.before,m=void 0===h?null:h,b=a.between,w=void 0!==b&&b,g=a.children,y=void 0===g?null:g,_=a.className,M=void 0===_?null:_,C=a.containerProps,E=void 0===C?{}:C,x=a.cssModule,L=void 0===x?null:x,j=a.disabled,z=void 0!==j&&j,O=a.element,S=void 0===O?null:O,P=a.extra,k=void 0===P?null:P,T=a.href,R=void 0===T?null:T,N=a.moveEvents,A=void 0===N||N,F=a.onMouseDown,H=void 0===F?null:F,V=a.onMouseUp,D=void 0===V?null:V,W=a.onPress,I=void 0===W?null:W,B=a.onPressed,U=void 0===B?null:B,Y=a.onReleased,X=void 0===Y?null:Y,G=a.placeholder,$=void 0===G||G,J=a.ripple,K=void 0!==J&&J,Q=a.rootElement,Z=void 0===Q?"aws-btn":Q,ee=a.size,te=void 0===ee?null:ee,ne=a.style,ce=void 0===ne?{}:ne,re=a.type,oe=void 0===re?"primary":re,ie=a.visible,le=void 0===ie||ie,ae=i.useState(z||$&&!y),ue=ae[0],se=ae[1],de=i.useState(null),fe=de[0],ve=de[1],pe=i.useRef(null),he=i.useRef(null),me=i.useRef(null),be=i.useRef(null),we=i.useRef(!1),ge=i.useRef(0),ye=i.useRef(null),_e=i.useRef(0),Me=S||(R?Anchor:Button),Ce={href:R};i.useEffect((function(){return(null==pe?void 0:pe.current)&&(me.current=pe.current.parentNode),function(){(null==ye?void 0:ye.current)&&clearTimeout(ye.current)}}),[]);i.useEffect((function(){null!==fe&&!1===f&&clearPress({force:!0})}),[f]);i.useEffect((function(){!0!==$||y?ue!==z&&se(z):se(!0)}),[$,y,z]);var Ee,clearPressCallback=function(){ge.current=0,X&&X(me.current)},clearPress=function(n){var i,a=void 0===n?{}:n,u=a.force,s=void 0!==u&&u,d=a.leave,v=void 0!==d&&d;if(toggleMoveClasses({element:me.current,root:Z,cssModule:L}),!0!==v||0!==ge.current){var p=f&&!s?"".concat(Z,"--active"):null;(null===(i=null==he?void 0:he.current)||void 0===i?void 0:i.clearCssEvent)&&he.current.clearCssEvent(),null===p&&(null==fe?void 0:fe.match(/active/gim))&&(0,l.setCssEndEvent)(he.current,"transition",{tolerance:1}).then(clearPressCallback),ve(p)}},createRipple=function(n){!function createRippleEffect(n){var i=n.event,a=n.button,u=n.content,s=n.className,d=a.getBoundingClientRect(),f=window.pageYOffset||document.documentElement.scrollTop||0,v=document.createElement("span"),p=d.width<50?3*d.width:2*d.width;v.className=s,v.style.top="-".concat(p/2-(i.pageY-d.top-f),"px"),v.style.left="-".concat(p/2-(i.pageX-d.left),"px"),v.style.width="".concat(p,"px"),v.style.height="".concat(p,"px"),(0,l.setCssEndEvent)(v,"animation").then((function(){window.requestAnimationFrame((function(){u.removeChild(v)}))})),window.requestAnimationFrame((function(){u.appendChild(v)}))}({event:n,button:pe.current,content:he.current,className:getClassName("".concat(Z,"__bubble"),L)})},pressIn=function(n){!0!==ue&&2!==ge.current&&(ge.current=1,(0,l.setCssEndEvent)(he.current,"transition",{tolerance:1}).then((function(){U&&U(n)})),ve("".concat(Z,"--active")))},pressOut=function(n){if(!0!==ue&&1===ge.current){if(ye.current&&clearTimeout(ye.current),!0===K&&createRipple(n),s&&pe.current){var i=new Event("btn-press");pe.current.dispatchEvent(i)}handleAction(n),!0!==f?clearPress():ge.current=2}},handleAction=function(n){me.current&&I&&I(n)};return(0,n.jsx)(Me,__assign({style:ce,className:i.useMemo((function(){var n=[Z,oe&&"".concat(Z,"--").concat(oe),te&&"".concat(Z,"--").concat(te),le&&"".concat(Z,"--visible"),w&&"".concat(Z,"--between"),$&&!y&&"".concat(Z,"--placeholder")||null];return!0===ue&&n.push("".concat(Z,"--disabled")),fe&&n.push(fe),M&&n.push.apply(n,M.split(" ")),L&&L["aws-btn"]?classToModules(n,L):n.join(" ").trim().replace(/[\s]+/gi," ")}),[Z,oe,te,le,w,$,y,ue,fe,M,L]),role:"button",ref:me},E,Ce,(Ee={onClick:function(n){R&&ue&&n.preventDefault()}},d?(Ee.onTouchStart=function(n){var i,l;H&&H(n),_e.current=null===(l=null===(i=null==n?void 0:n.changedTouches)||void 0===i?void 0:i[0])||void 0===l?void 0:l.clientY,pressIn(n)},Ee.onTouchEnd=function(n){var i,l;D&&D(n),(_e.current&&(null===(l=null===(i=null==n?void 0:n.changedTouches)||void 0===i?void 0:i[0])||void 0===l?void 0:l.clientY)?Math.abs(_e.current-n.changedTouches[0].clientY):0)>pe.current.offsetHeight?clearPress({force:!0}):pressOut(n)},Ee):(Ee.onMouseLeave=function(){we.current=!1,!0!==f||2===ge.current?clearPress({leave:!0}):clearPress({force:!0})},Ee.onMouseDown=function(n){var i;H&&H(n),0===(null===(i=null==n?void 0:n.nativeEvent)||void 0===i?void 0:i.button)&&pressIn(n)},Ee.onMouseUp=function(n){D&&D(n),!0!==ue?pressOut(n):n.preventDefault()},!0===A?(Ee.onMouseMove=function(n){if(!0!==ue){we.current=!0;var i=pe.current,l=i.getBoundingClientRect().left,a=i.offsetWidth,u=n.pageX<l+.3*a?"left":n.pageX>l+.65*a?"right":"middle";toggleMoveClasses({element:me.current,root:Z,cssModule:L,state:u})}},Ee):(Ee.onMouseEnter=function(){we.current=!0,toggleMoveClasses({element:me.current,root:Z,cssModule:L,state:"middle"})},Ee))),{children:(0,n.jsxs)("span",__assign({ref:pe,className:getClassName("".concat(Z,"__wrapper"),L)},{children:[(0,n.jsxs)("span",__assign({ref:he,className:getClassName("".concat(Z,"__content"),L)},{children:[m,(0,n.jsx)("span",__assign({ref:be},{children:y})),p]})),k]}))}))};var sharer_assign=function(){return sharer_assign=Object.assign||function(n){for(var i,l=1,a=arguments.length;l<a;l++)for(var u in i=arguments[l])Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u]);return n},sharer_assign.apply(this,arguments)};function Sharer(n){var i=n.url,l=n.message,a=n.title,u=n.image,s=n.user,d=n.type,f=n.phone,v=n.width,p=n.height,h={},m={};switch(d){case"facebook":m.u=encodeURIComponent(i),h.url="https://www.facebook.com/sharer.php?".concat(serialize(m,"&")),h.title="Facebook Sharer";break;case"twitter":m.text=l,m.url=i,h.height=250,h.url="https://twitter.com/share?".concat(serialize(m,"&")),h.title="Twitter Sharer";break;case"pinterest":m.url=i,u&&(m.media=u),h.url="https://pinterest.com/pin/create/button/?".concat(serialize(m,"&")),h.title="Pinterest Sharer";break;case"google":case"gplus":m.url=i,h.url="https://plus.google.com/share?".concat(serialize(m,"&")),h.title="Google+ Sharer",h.width=400;break;case"linkedin":m.mini=!0,m.url=i,m.title=l||a,h.url="https://www.linkedin.com/shareArticle?".concat(serialize(m,"&")),h.title="Linkedin Sharer";break;case"reddit":m.url=i,m.title=l||a,h.url="https://www.reddit.com/submit?".concat(serialize(m,"&")),h.title="",h.width=850;break;case"whatsapp":m.phone=null==f?void 0:f.replace(/\+|(|)/gim,""),m.title=l||a,h.url="https://api.whatsapp.com/send?".concat(serialize(m,"&")),h.title="Whatsapp Message",h.width=850;break;case"messenger":h.url="https://m.me/".concat(s),h.title="Messenger Message",h.width=850;break;case"mail":h.url="mailto:".concat(i),h.title="_self";break;case"instagram":h.url=i,h.title="_self";break;default:return h}return h.extra=serialize(sharer_assign({width:"".concat(h.width||v,"px"),height:"".concat(h.height||p,"px")},function centerWindow(n,i){if("undefined"==typeof window)return{top:0,left:0};var l=window.screenLeft,a=void 0===l?0:l,u=window.screenTop,s=void 0===u?0:u,d=window.innerWidth,f=window.innerHeight,v=d||(document.documentElement.clientWidth?document.documentElement.clientWidth:0);return{top:(f||(document.documentElement.clientHeight?document.documentElement.clientHeight:0))/2-i/2+s,left:v/2-n/2+a}}(h.width||v,h.height||p)),","),h}var icons_assign=function(){return icons_assign=Object.assign||function(n){for(var i,l=1,a=arguments.length;l<a;l++)for(var u in i=arguments[l])Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u]);return n},icons_assign.apply(this,arguments)},f={youtube:"M38.1,23H11.9c-4.1,0-7.6,3.4-7.6,7.6v6.1c0,4.1,3.4,7.6,7.6,7.6h26.3c4.1,0,7.6-3.4,7.6-7.6v-6.1C45.8,26.4,42.4,23,38.1,23z M17.4,27.7h-2.5v12.2h-2.4V27.7h-2.5v-2h7.3V27.7z M24.3,39.9h-2.1v-1.2c-0.4,0.4-0.8,0.8-1.2,0.9c-0.4,0.3-0.8,0.3-1.2,0.3c-0.5,0-0.8-0.2-1.1-0.5c-0.3-0.3-0.3-0.8-0.3-1.4v-8.6h2.1v8c0,0.3,0.1,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.4,0.2c0.2,0,0.3-0.1,0.6-0.3c0.3-0.2,0.4-0.3,0.7-0.6v-7.9h2.1v10.6H24.3z M31.9,37.7c0,0.8-0.2,1.4-0.5,1.7C31,39.8,30.5,40,29.9,40c-0.4,0-0.8-0.1-1.1-0.3c-0.3-0.2-0.6-0.4-0.9-0.7v0.8h-2.1V25.7h2.1v4.6c0.3-0.3,0.6-0.6,0.9-0.8c0.3-0.2,0.7-0.3,0.9-0.3c0.7,0,1.2,0.3,1.5,0.7s0.5,1.1,0.5,1.9L31.9,37.7L31.9,37.7z M39.2,34.9h-4v1.9c0,0.6,0.1,0.9,0.2,1.2c0.2,0.3,0.3,0.3,0.7,0.3c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.2-0.6,0.2-1.2v-0.5h2.2v0.5c0,1.1-0.3,1.9-0.8,2.5c-0.5,0.5-1.3,0.8-2.4,0.8c-0.9,0-1.7-0.3-2.2-0.8C33.3,38.8,33,38,33,37v-4.7c0-0.9,0.3-1.7,0.9-2.2c0.6-0.6,1.4-0.8,2.3-0.8c0.9,0,1.7,0.3,2.2,0.8c0.5,0.5,0.8,1.3,0.8,2.3V34.9z M36.1,30.9c-0.3,0-0.6,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.9v1.1H37v-1.1c0-0.4-0.1-0.8-0.3-0.9C36.6,31.1,36.4,30.9,36.1,30.9z M28.8,30.9c-0.2,0-0.3,0-0.4,0.1c-0.2,0.1-0.3,0.2-0.4,0.3v6.5c0.2,0.2,0.3,0.3,0.5,0.3c0.2,0.1,0.3,0.1,0.5,0.1c0.3,0,0.4-0.1,0.6-0.3c0.1-0.2,0.2-0.4,0.2-0.8v-5.4c0-0.3-0.1-0.6-0.3-0.8C29.4,31,29.1,30.9,28.8,30.9z M15.3,19.4h2.6v-6.5l3.1-9.1h-2.7L16.7,10h-0.2l-1.7-6.3h-2.7l3.2,9.5V19.4z M24.6,19.6c1.1,0,1.9-0.3,2.5-0.8s0.9-1.4,0.9-2.4v-6c0-0.8-0.3-1.6-0.9-2.2s-1.4-0.8-2.4-0.8c-1.1,0-1.9,0.3-2.5,0.8c-0.7,0.5-0.9,1.3-0.9,2.1v6c0,1,0.3,1.8,0.9,2.4C22.8,19.4,23.6,19.6,24.6,19.6z M23.7,10.3c0-0.3,0.1-0.4,0.3-0.6c0.2-0.2,0.4-0.3,0.7-0.3c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.3,0.3,0.6v6.3c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.4,0.3-0.8,0.3s-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.4-0.3-0.8L23.7,10.3L23.7,10.3z M31.6,19.5c0.4,0,0.9-0.1,1.4-0.3c0.5-0.3,0.9-0.6,1.4-1.1v1.3h2.4V7.8h-2.4v8.8c-0.3,0.3-0.4,0.4-0.8,0.6c-0.3,0.2-0.5,0.3-0.7,0.3c-0.3,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.6V7.8h-2.4v9.6c0,0.7,0.2,1.2,0.4,1.5C30.7,19.4,31.1,19.5,31.6,19.5z",mail:"M4.9,14L25,30.5L45.1,14v-3.7H4.9V14z M4.9,36.4l9.9-11l-9.9-8.9C4.9,16.6,4.9,36.4,4.9,36.4zM45.1,36.7L34.9,25.5L45,16.7L45.1,36.7L45.1,36.7z M25,33.7l-8.2-6.8L4.9,39.6h40.2L33.2,26.8L25,33.7z",facebook:"M31.6,44.5V25.7h8l1.3-8h-9.4v-4c0-2.7,1.3-4,4-4h4V1.5c-1.3,0-4.3,0-6.7,0c-6.7,0-9.4,4-9.4,10.7v5.4h-8v8h8v18.8L31.6,44.5L31.6,44.5z",whatsapp:"M2.5,46.6c0.6-1.9,1.2-3.6,1.8-5.4c0.6-1.7,1.1-3.5,1.8-5.2c0.3-0.9,0.2-1.5-0.2-2.3c-2.4-4.4-3.1-9.1-2.3-14c0.7-4.2,2.5-7.8,5.3-11c4.7-5.1,10.6-7.6,17.5-7.3c5.1,0.2,9.6,2.1,13.4,5.4c3.6,3.1,5.9,7,7,11.6c0.9,3.7,0.8,7.4-0.3,11.1c-1.4,4.6-4,8.5-7.8,11.4c-5.4,4.1-11.4,5.3-18,4c-2-0.4-3.9-1.1-5.6-2c-0.3-0.2-0.5-0.2-0.9-0.1c-3.4,1.1-6.7,2.2-10.1,3.2C3.7,46.2,3.2,46.4,2.5,46.6z M8.3,40.9c0.2,0,0.3-0.1,0.3-0.1c2.1-0.7,4.2-1.3,6.3-2c0.2-0.1,0.5,0,0.7,0.1c0.9,0.5,1.8,1,2.7,1.4c3.9,1.6,7.9,1.9,11.9,0.8c4.8-1.3,8.5-4.2,11-8.6c2.2-3.7,2.9-7.7,2.2-11.9C42.7,15.2,39.9,11,35.4,8c-3.9-2.6-8.3-3.5-12.9-2.7c-4,0.6-7.4,2.5-10.2,5.4c-2.4,2.5-4,5.5-4.7,8.8c-1,4.9-0.3,9.5,2.4,13.7c0.5,0.8,0.5,1.5,0.2,2.3C9.5,37.3,8.9,39.1,8.3,40.9z M36.8,29.8c0,1.7-0.9,3.1-2.5,3.9c-1.6,0.8-3.3,1-5,0.4c-1.5-0.6-3.1-1.2-4.6-1.9c-2-1-3.6-2.4-5-4c-1.6-1.8-3-3.7-4.1-5.9c-0.8-1.5-1.3-3.1-1.1-4.8c0.2-1.8,1-3.3,2.5-4.4c0.3-0.2,0.7-0.3,1.1-0.4c0.5,0,1,0,1.4,0.1c0.4,0,0.6,0.3,0.8,0.6c0.4,0.9,0.7,1.7,1,2.6c0.2,0.6,0.4,1.2,0.7,1.8c0.3,0.7,0.1,1.3-0.3,1.8c-0.4,0.5-0.8,0.9-1.2,1.3C20,21.2,20,21.6,20.2,22c1,1.9,2.3,3.5,4,4.9c1.1,0.9,2.3,1.5,3.6,2.2c0.4,0.2,0.7,0.2,1-0.2c0.6-0.7,1.3-1.4,1.9-2.1c0.4-0.5,0.6-0.6,1.1-0.3c1.5,0.8,3.1,1.6,4.6,2.4C36.8,29,36.9,29.3,36.8,29.8z",messenger:"M27.5,30l-5.4-5.7L11.7,30l11.5-12.2l5.5,5.7L39,17.8L27.5,30z M25.5,3.8c-11.6,0-21.1,8.7-21.1,19.5c0,6.1,3.1,11.6,7.9,15.2v7.4l7.2-3.9c1.9,0.5,3.9,0.8,6,0.8c11.6,0,21.1-8.7,21.1-19.5S37.1,3.8,25.5,3.8z",instagram:"M25,13.3c-5.8,0-10.6,4.7-10.6,10.6S19.1,34.6,25,34.6S35.6,29.8,35.6,24S30.8,13.3,25,13.3z M25,30.7c-3.7,0-6.8-3.1-6.8-6.8s3.1-6.8,6.8-6.8s6.8,3.1,6.8,6.8S28.7,30.7,25,30.7z M36.1,10.6c1.3,0,2.4,1.1,2.4,2.4s-1.1,2.4-2.4,2.4c-1.3,0-2.4-1.1-2.4-2.4S34.7,10.6,36.1,10.6z M42.3,6.8c-2.2-2.2-5.2-3.4-8.7-3.4H16.4c-7.2,0-12,4.8-12,12v17c0,3.6,1.2,6.7,3.5,8.9c2.2,2.2,5.2,3.2,8.6,3.2h17c3.6,0,6.6-1.2,8.7-3.2c2.2-2.2,3.4-5.2,3.4-8.8V15.4C45.6,11.9,44.5,8.9,42.3,6.8z M42,32.6c0,2.6-0.9,4.7-2.4,6.1s-3.6,2.2-6.1,2.2h-17c-2.5,0-4.6-0.7-6.1-2.2s-2.2-3.6-2.2-6.2v-17c0-2.5,0.7-4.6,2.2-6.1C11.8,8,14,7.2,16.5,7.2h17.1c2.5,0,4.6,0.7,6.1,2.2c1.4,1.5,2.2,3.6,2.2,6v17.2H42z",twitter:"M49.3,9.1c-1.8,0.8-3.6,1.3-5.6,1.5c2-1.2,3.6-3.1,4.3-5.4c-1.9,1.1-4,1.9-6.2,2.4c-1.8-1.9-4.3-3.1-7.1-3.1c-5.4,0-9.8,4.4-9.8,9.8c0,0.8,0.1,1.5,0.3,2.2C17,16.1,9.8,12.2,5,6.3c-0.8,1.4-1.3,3.1-1.3,4.9c0,3.4,1.7,6.4,4.3,8.1c-1.6-0.1-3.1-0.5-4.4-1.2v0.1c0,4.7,3.4,8.7,7.8,9.6c-0.8,0.2-1.7,0.3-2.6,0.3c-0.6,0-1.2-0.1-1.8-0.2c1.2,3.9,4.9,6.7,9.1,6.8c-3.3,2.6-7.6,4.2-12.1,4.2c-0.8,0-1.6,0-2.3-0.1c4.3,2.8,9.5,4.4,15,4.4c18,0,27.8-14.9,27.8-27.8c0-0.4,0-0.8,0-1.3C46.4,12.7,48,11,49.3,9.1z",github:"M25,2.5C12.2,2.5,1.9,12.8,1.9,25.6c0,10.2,6.6,18.9,15.8,21.9c1.2,0.2,1.5-0.5,1.5-1.1c0-0.5,0-2.1,0-4c-6.4,1.4-7.8-3-7.8-3c-1-2.7-2.6-3.4-2.6-3.4C6.7,34.6,9,34.6,9,34.6c2.3,0.2,3.5,2.4,3.5,2.4c2.1,3.5,5.4,2.5,6.7,1.9c0.2-1.5,0.8-2.5,1.5-3.1c-5.1-0.6-10.5-2.6-10.5-11.4c0-2.5,0.9-4.6,2.4-6.2c-0.2-0.6-1-2.9,0.2-6.1c0,0,1.9-0.6,6.3,2.4c1.8-0.5,3.8-0.8,5.8-0.8s3.9,0.3,5.8,0.8c4.4-3,6.3-2.4,6.3-2.4c1.3,3.2,0.5,5.5,0.2,6.1c1.5,1.6,2.4,3.7,2.4,6.2c0,8.9-5.4,10.8-10.5,11.4c0.8,0.7,1.6,2.1,1.6,4.3c0,2.9,0,5.6,0,6.4c0,0.6,0.4,1.3,1.5,1.1C41.4,44.5,48,35.9,48,25.7C48.1,12.8,37.8,2.5,25,2.5z",linkedin:"M13.8,41.7H5.4V13.6h8.4C13.8,13.6,13.8,41.7,13.8,41.7z M44.7,41.7h-8.4v-15c0-3.9-1.4-5.9-4.2-5.9c-2.2,0-3.6,1.1-4.3,3.3c0,3.5,0,17.6,0,17.6h-8.4c0,0,0.1-25.3,0-28.1h6.7l0.5,5.6h0.2c1.7-2.8,4.5-4.7,8.3-4.7c2.9,0,5.2,0.8,7,2.8s2.7,4.7,2.7,8.5L44.7,41.7L44.7,41.7z M9.6,2.3C12,2.3,14,4.2,14,6.5s-2,4.2-4.4,4.2S5.2,8.8,5.2,6.5C5.3,4.2,7.2,2.3,9.6,2.3z",gplus:"M29.9,5.2c0,0-9.1,0-12.2,0C12.2,5.2,6.9,9.1,6.9,14c0,5,3.8,8.8,9.5,8.8c0.4,0,0.7-0.1,1.1-0.1c-0.4,0.7-0.7,1.5-0.7,2.3c0,1.4,0.7,2.5,1.7,3.4c-0.7,0-1.4,0-2.1,0c-6.9,0-12.2,4.4-12.2,8.9c0,4.5,5.9,7.4,12.7,7.4c7.9,0,12.2-4.5,12.2-8.9c0-3.6-1-5.8-4.4-8.1c-1.1-0.8-3.3-2.7-3.3-3.9c0-1.3,0.4-2,2.4-3.5c2-1.6,3.5-3.5,3.5-6.1c0-3.2-1.3-7-4-7H28L29.9,5.2z M25.8,35c0.1,0.4,0.2,0.8,0.2,1.3c0,3.6-2.3,6.5-9,6.5c-4.7,0-8.2-3-8.2-6.6c0-3.5,4.3-6.5,9-6.4c1.1,0,2.1,0.2,3.1,0.5C23.5,32,25.3,33,25.8,35z M18.2,21.5c-3.2-0.1-6.2-3.6-6.8-7.8s1.6-7.4,4.8-7.4c3.2,0.1,6.2,3.4,6.8,7.7C23.6,18.2,21.4,21.6,18.2,21.5z M39.8,21v-6h-3.9v6h-6v4h6v6h3.9v-6h6v-3.9L39.8,21L39.8,21z",pinterest:"M7.6,17.7c0,3.3,1.1,6.6,3.3,8.5c0.5,0.4,1.7,1.3,2.6,1.3c0.7,0,0.8-0.8,1-1.4c1-3.3,0.1-1.9-1.1-4.7c-1.3-2.8-0.4-7.3,1.1-9.6c2.9-4.4,6.2-6,11.6-6c3.1,0,5.4,1.1,7.1,2.6c6.1,5.2,1.9,21.8-5.6,20.9c-7.5-0.8-1.4-10-1.4-14c0-6.2-8.5-5.2-8.5,2.7c0,2.7,1.1,3.5,0.9,4.2c-1.1,3.8-1.9,8.2-2.9,12.2c-1.1,4.1-1,7.5-0.6,11.7c0,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.2,0,0.3-0.1c2.9-2.9,4.8-7.7,5.5-10.5c0.4-1.5,0.9-3.3,1.2-4.8c0.1-0.3,0.7,0.6,1.1,1c3.1,2.8,8.4,2.2,11.8,0.1c6.6-4,9.4-15.4,5.9-22.2c-1-1.9-2-2.8-3.4-4.3C31.8-0.1,19.3,0.2,13.2,6C9.9,9.1,7.6,12.7,7.6,17.7L7.6,17.7z",reddit:"M48.9,18.6L48.9,18.6c0,0.1,0,0.2,0,0.3c0,1.2-0.4,2.4-1,3.3s-1.4,1.7-2.4,2.2c0.1,0.5,0.1,1,0.1,1.4c0,2.6-0.9,5.1-2.4,7.2l0,0l0,0c-2.8,3.8-7.2,6.1-11.6,7.2l0,0l0,0c-2.3,0.6-4.8,0.9-7.2,0.9c-3.6,0-7.2-0.7-10.6-2l0,0l0,0C10.3,37.7,7,35.4,5,32c-1.1-1.8-1.7-3.9-1.7-6.1c0-0.5,0-1,0.1-1.4c-0.9-0.5-1.7-1.3-2.3-2.1c-0.6-1-1-2.1-1.1-3.2l0,0l0,0l0,0c0-1.6,0.7-3.2,1.8-4.4s2.6-1.9,4.2-1.9h0.1c0.2,0,0.3,0,0.5,0c0.8,0,1.6,0.1,2.4,0.4l0,0l0,0c0.7,0.3,1.3,0.6,1.9,1.1c0.2-0.1,0.4-0.2,0.6-0.3c3.5-2.1,7.6-2.9,11.6-3.2c0-2,0.3-4.1,1.2-5.9c0.8-1.5,2.2-2.7,3.9-3.1l0,0l0,0c0.6-0.1,1.3-0.2,1.9-0.2c1.7,0,3.4,0.4,4.9,1c0.7-1.1,1.7-1.9,2.8-2.3l0,0l0,0c0.7-0.2,1.4-0.3,2.1-0.3c0.8,0,1.5,0.1,2.2,0.5l0,0l0,0l0,0c1,0.4,1.9,1.1,2.5,2.1c0.6,0.9,1,2,1,3.2c0,0.2,0,0.4,0,0.6l0,0l0,0c-0.1,1.5-0.9,2.8-1.9,3.7c-1.1,0.9-2.4,1.5-3.8,1.5c-0.2,0-0.4,0-0.7,0c-1.4-0.1-2.7-0.8-3.6-1.8c-1-1-1.6-2.4-1.6-3.8C34,6,34,6,34,5.9c-1.3-0.6-2.7-1.1-4.1-1.1c-0.2,0-0.4,0-0.6,0l0,0c-1,0.1-2,0.8-2.4,1.7l0,0l0,0c-0.7,1.4-0.8,3-0.9,4.6c3.9,0.3,7.9,1.2,11.4,3.2l0,0l0,0c0.1,0,0.2,0.1,0.3,0.2c0.2-0.2,0.5-0.4,0.8-0.6c1.1-0.7,2.3-1.1,3.5-1.1c0.6,0,1.1,0.1,1.6,0.2l0,0l0,0l0,0l0,0c1.3,0.3,2.4,1.1,3.3,2.1C48.2,15.9,48.8,17.2,48.9,18.6L48.9,18.6L48.9,18.6z M42.5,26c0-1.8-0.6-3.6-1.7-5c-2.1-2.9-5.2-4.8-8.5-5.8l0,0c-0.6-0.2-1.3-0.4-1.9-0.5c-1.9-0.4-3.9-0.7-5.9-0.7c-2.7,0-5.3,0.4-7.9,1.2c-3.3,1.1-6.5,2.9-8.5,5.8l0,0c-1,1.4-1.6,3.2-1.6,5c0,0.7,0.1,1.3,0.3,2l0,0c0.4,1.4,1.1,2.7,2,3.8c0.9,1.1,2.1,2.1,3.3,2.9c0.3,0.2,0.5,0.3,0.8,0.5c3.5,2,7.6,2.9,11.6,2.9c0.7,0,1.4,0,2-0.1c4.1-0.3,8.2-1.6,11.5-4l0,0c1.1-0.8,2-1.7,2.8-2.8s1.3-2.3,1.6-3.6l0,0l0,0C42.5,27,42.5,26.5,42.5,26zM37.3,5.5c0,0.1,0,0.1,0,0.2l0,0l0,0c0,0.7,0.3,1.3,0.8,1.8s1.1,0.8,1.8,0.8l0,0l0,0H40c0.7,0,1.3-0.3,1.8-0.8s0.8-1.1,0.9-1.8l0,0l0,0c0-0.1,0-0.1,0-0.2c0-0.7-0.3-1.4-0.9-1.9c-0.5-0.5-1.2-0.8-1.9-0.8c-0.2,0-0.4,0-0.7,0.1l0,0l0,0c-0.6,0.1-1.1,0.5-1.5,1C37.5,4.4,37.3,4.9,37.3,5.5z M8.2,16.2c-0.5-0.2-1.1-0.4-1.6-0.4c-0.1,0-0.2,0-0.3,0l0,0l0,0c-0.8,0-1.6,0.4-2.1,0.9c-0.6,0.5-1,1.3-1,2.1l0,0l0,0c0,0.1,0,0.1,0,0.2c0,0.5,0.2,1,0.4,1.4C3.8,20.7,4,21,4.3,21.3C5.2,19.3,6.6,17.6,8.2,16.2zM45.7,18.9c0-0.4-0.1-0.9-0.3-1.3l0,0l0,0c-0.3-0.6-0.7-1-1.3-1.4c-0.5-0.3-1.2-0.5-1.8-0.5s-1.1,0.1-1.7,0.4c1.6,1.4,3,3.1,3.9,5.1c0.3-0.3,0.5-0.6,0.7-0.9C45.6,19.9,45.7,19.4,45.7,18.9z M32.9,29.2c-0.2-0.1-0.5-0.2-0.8-0.2c-0.2,0-0.5,0.1-0.7,0.2c-2.1,1.1-4.6,1.7-7.1,1.7c-1.9,0-3.7-0.3-5.4-1.1l0,0l0,0c-0.3-0.1-0.5-0.3-0.9-0.5c-0.2-0.1-0.3-0.2-0.5-0.2C17.3,29,17.1,29,16.9,29s-0.4,0-0.6,0.1l0,0l0,0c-0.3,0.1-0.5,0.3-0.7,0.5s-0.2,0.5-0.2,0.7s0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.4,0.6,0.5c2.4,1.4,5.2,2.1,8.1,2.1c2.6,0,5.2-0.5,7.5-1.5l0,0l0,0c0.3-0.2,0.7-0.3,1.1-0.5c0.2-0.1,0.4-0.2,0.5-0.4c0.2-0.2,0.3-0.4,0.4-0.6l0,0c0-0.1,0-0.2,0-0.3c0-0.2-0.1-0.4-0.1-0.5C33.3,29.5,33.1,29.3,32.9,29.2zM16.8,19.8c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1C19.9,21.1,18.5,19.8,16.8,19.8z M32.1,19.8c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1C35.1,21.1,33.8,19.8,32.1,19.8z"};const v=function getIcon(i){var l=i.type,a=i.width,u=i.height,s=i.color;return(0,n.jsx)("svg",icons_assign({version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 50 50",width:a,height:u},{children:(0,n.jsx)("path",{fill:s,d:f[l]})}))};var AwesomeButtonSocial_assign=function(){return AwesomeButtonSocial_assign=Object.assign||function(n){for(var i,l=1,a=arguments.length;l<a;l++)for(var u in i=arguments[l])Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u]);return n},AwesomeButtonSocial_assign.apply(this,arguments)},__rest=function(n,i){var l={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&i.indexOf(a)<0&&(l[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var u=0;for(a=Object.getOwnPropertySymbols(n);u<a.length;u++)i.indexOf(a[u])<0&&Object.prototype.propertyIsEnumerable.call(n,a[u])&&(l[a[u]]=n[a[u]])}return l};const components_AwesomeButtonSocial=function(l){var a=l.onPress,u=void 0===a?null:a,s=l.children,d=void 0===s?null:s,f=l.icon,p=void 0===f||f,h=l.sharer,m=void 0===h?{}:h,b=l.dimensions,w=void 0===b?{width:640,height:480}:b,g=l.type,y=__rest(l,["onPress","children","icon","sharer","dimensions","type"]),_="undefined"!=typeof window,M=i.useRef(function isMobile(){var n;return"undefined"!=typeof navigator&&(null===(n=null===navigator||void 0===navigator?void 0:navigator.userAgent)||void 0===n?void 0:n.match(/iPhone|iPad|iPod|Android/i))}()).current,getMessage=function(){if(null==m?void 0:m.message)return m.message;if(_){var n=document.querySelector("title");if(null==n?void 0:n.innerHTML)return n.innerHTML}return null},getImage=function(){if(null==m?void 0:m.image)return m.image;if(null!==_){var n=document.querySelector('meta[property="og:image"]');if(n)return n.getAttribute("content")}return null};return(0,n.jsx)(components_AwesomeButton,AwesomeButtonSocial_assign({type:g,onPress:function(n){if(u)u(n);else if(!y.href){var i=Sharer({height:null==w?void 0:w.height,width:null==w?void 0:w.width,url:(null==m?void 0:m.url)?m.url:_?window.location.href:null,message:getMessage(),image:getImage(),type:g,user:m.user,phone:m.phone});(null==i?void 0:i.url)&&((null===navigator||void 0===navigator?void 0:navigator.share)&&M?navigator.share({url:i.url,text:i.text,title:i.title}):_&&window.open(i.url,i.title,i.extra))}}},y,{before:p?v({type:g,width:!0===p?24:p.width||24,height:!0===p?24:p.height||24,color:y.disabled?"rgba(255,255,255,0.35)":"#FFF"}):null},{children:d}))};var AwesomeButtonProgress_assign=function(){return AwesomeButtonProgress_assign=Object.assign||function(n){for(var i,l=1,a=arguments.length;l<a;l++)for(var u in i=arguments[l])Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u]);return n},AwesomeButtonProgress_assign.apply(this,arguments)},__awaiter=function(n,i,l,a){return new(l||(l=Promise))((function(u,s){function fulfilled(n){try{step(a.next(n))}catch(n){s(n)}}function rejected(n){try{step(a.throw(n))}catch(n){s(n)}}function step(n){n.done?u(n.value):function adopt(n){return n instanceof l?n:new l((function(i){i(n)}))}(n.value).then(fulfilled,rejected)}step((a=a.apply(n,i||[])).next())}))},__generator=function(n,i){var l,a,u,s,d={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return s={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function verb(s){return function(f){return function step(s){if(l)throw new TypeError("Generator is already executing.");for(;d;)try{if(l=1,a&&(u=2&s[0]?a.return:s[0]?a.throw||((u=a.return)&&u.call(a),0):a.next)&&!(u=u.call(a,s[1])).done)return u;switch(a=0,u&&(s=[2&s[0],u.value]),s[0]){case 0:case 1:u=s;break;case 4:return d.label++,{value:s[1],done:!1};case 5:d.label++,a=s[1],s=[0];continue;case 7:s=d.ops.pop(),d.trys.pop();continue;default:if(!(u=d.trys,(u=u.length>0&&u[u.length-1])||6!==s[0]&&2!==s[0])){d=0;continue}if(3===s[0]&&(!u||s[1]>u[0]&&s[1]<u[3])){d.label=s[1];break}if(6===s[0]&&d.label<u[1]){d.label=u[1],u=s;break}if(u&&d.label<u[2]){d.label=u[2],d.ops.push(s);break}u[2]&&d.ops.pop(),d.trys.pop();continue}s=i.call(n,d)}catch(n){s=[6,n],a=0}finally{l=u=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,f])}}},AwesomeButtonProgress_rest=function(n,i){var l={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&i.indexOf(a)<0&&(l[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var u=0;for(a=Object.getOwnPropertySymbols(n);u<a.length;u++)i.indexOf(a[u])<0&&Object.prototype.propertyIsEnumerable.call(n,a[u])&&(l[a[u]]=n[a[u]])}return l},p="undefined"!=typeof window;const components_AwesomeButtonProgress=function(a){var u=a.onPress,s=void 0===u?null:u,d=a.rootElement,f=void 0===d?null:d,v=a.loadingLabel,h=void 0===v?"Wait..":v,m=a.resultLabel,b=void 0===m?"Success!":m,w=(a.disabled,a.cssModule),g=void 0===w?null:w,y=a.children,_=void 0===y?null:y,M=a.size,C=void 0===M?null:M,E=a.type,x=void 0===E?null:E,L=a.releaseDelay,j=void 0===L?500:L,z=AwesomeButtonProgress_rest(a,["onPress","rootElement","loadingLabel","resultLabel","disabled","cssModule","children","size","type","releaseDelay"]),O=f||"aws-btn",S=i.useRef(null),P=i.useRef(null),k=function(n){var l=i.useState(n),a=l[0],u=l[1],s=i.useRef(n);return[a,function(n){var i=AwesomeButtonProgress_assign(AwesomeButtonProgress_assign({},s.current),n);s.current=i,u(i)},s.current]}({loadingEnd:!1,loadingStart:!1,loadingError:!1,errorLabel:null,active:!1}),T=(k[0],k[1]),R=k[2];i.useEffect((function(){return function(){(null==S?void 0:S.current)&&clearTimeout(S.current)}}),[]);var N,A,F,endLoading=function(n,i){void 0===n&&(n=!0),void 0===i&&(i=null),T({loadingEnd:!0,loadingError:!n,errorLabel:i})},clearStagedWrapperAnimation=function(){S.current=setTimeout((function(){p&&(0,l.beforeFutureCssLayout)(2,(function(){var n;n=function(){T({loadingError:!1,errorLabel:null})},T({loadingStart:!1,loadingEnd:!1,active:!1}),(0,l.beforeFutureCssLayout)(2,n)}))}),j)},H=i.useCallback((function(){T({active:!0})}),[T]),V=R.active,D=R.errorLabel;return(0,n.jsx)(components_AwesomeButton,AwesomeButtonProgress_assign({size:C,type:x,className:(N=R.loadingStart,A=R.loadingEnd,F=R.loadingError,[N&&"".concat(O,"--start")||null,A&&"".concat(O,"--end")||null,F&&"".concat(O,"--errored")||null,"".concat(O,"--progress")].join(" ").trim().replace(/[\s]+/gi," ")),onPress:function(n){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(i){switch(i.label){case 0:return!0===(null==R?void 0:R.loadingStart)?[2]:((0,l.beforeFutureCssLayout)(4,(function(){T({loadingStart:!0})})),[4,(0,l.onceTransitionEnd)(P.current)]);case 1:return i.sent(),s&&s(n,endLoading),(0,l.setCssEndEvent)(P.current,"transition",{tolerance:3}).then(clearStagedWrapperAnimation),[2]}}))}))},onMouseDown:H,cssModule:g,active:V,extra:(0,n.jsx)("span",{children:(0,n.jsx)("span",{ref:P,"data-loading":h||null,"data-status":D||b||null,className:getClassName("".concat(O,"__progress"),g)})})},z,{children:(0,n.jsx)("span",{children:_})}))}})(),a})()));