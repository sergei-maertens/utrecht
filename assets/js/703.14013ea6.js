"use strict";(self.webpackChunk_utrecht_docusaurus=self.webpackChunk_utrecht_docusaurus||[]).push([[703],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(t),m=r,g=f["".concat(s,".").concat(m)]||f[m]||d[m]||o;return t?i.createElement(g,a(a({ref:n},l),{},{components:t})):i.createElement(g,a({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(7294);function r(e){var n=e.children,t=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(7462),r=t(7294),o=t(2389),a=t(3725),u=t(6010),s="tabItem_LplD";function c(e){var n,t,o,c=e.lazy,l=e.block,d=e.defaultValue,f=e.values,m=e.groupId,g=e.className,p=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:p.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,a.lx)(h,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(n=null!=d?d:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=p[0])?void 0:o.props.value;if(null!==w&&!h.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,a.UB)(),y=v.tabGroupChoices,O=v.setTabGroupChoices,k=(0,r.useState)(w),x=k[0],M=k[1],z=[],E=(0,a.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=y[m];null!=T&&T!==x&&h.some((function(e){return e.value===T}))&&M(T)}var I=function(e){var n=e.currentTarget,t=z.indexOf(n),i=h[t].value;i!==x&&(E(n),M(i),null!=m&&O(m,i))},R=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=z.indexOf(e.currentTarget)+1;t=z[i]||z[0];break;case"ArrowLeft":var r=z.indexOf(e.currentTarget)-1;t=z[r]||z[z.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},g)},h.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return z.push(e)},onKeyDown:R,onFocus:I,onClick:I},o,{className:(0,u.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),c?(0,r.cloneElement)(p.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},p.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function l(e){var n=(0,o.Z)();return r.createElement(c,(0,i.Z)({key:String(n)},e))}},6649:function(e,n,t){var i=t(5697),r=t.n(i),o=t(7294);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}var s,c,l=(s=function(e){!function(n){if("undefined"!=typeof window){var t,i=0,r=!1,o=!1,a="message".length,u="[iFrameSizer]",s=u.length,c=null,l=window.requestAnimationFrame,d={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},f={},m=null,g={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){x("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}},p={};window.jQuery&&((t=window.jQuery).fn?t.fn.iFrameResize||(t.fn.iFrameResize=function(e){return this.filter("iframe").each((function(n,t){H(t,e)})).end()}):k("","Unable to bind to jQuery, it is not fully loaded.")),e.exports=V(),window.iFrameResize=window.iFrameResize||V()}function h(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function b(e,n,t){e.addEventListener(n,t,!1)}function w(e,n,t){e.removeEventListener(n,t,!1)}function v(e){return u+"["+function(e){var n="Host page: "+e;return window.top!==window.self&&(n=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e),n}(e)+"]"}function y(e){return f[e]?f[e].log:r}function O(e,n){M("log",e,n,y(e))}function k(e,n){M("info",e,n,y(e))}function x(e,n){M("warn",e,n,!0)}function M(e,n,t,i){!0===i&&"object"==typeof window.console&&console[e](v(n),t)}function z(e){function n(){r("Height"),r("Width"),N((function(){P(D),F(B),v("onResized",D)}),D,"init")}function t(e){return"border-box"!==e.boxSizing?0:(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function i(e){return"border-box"!==e.boxSizing?0:(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function r(e){var n=Number(f[B]["max"+e]),t=Number(f[B]["min"+e]),i=e.toLowerCase(),r=Number(D[i]);O(B,"Checking "+i+" is in range "+t+"-"+n),r<t&&(r=t,O(B,"Set "+i+" to min value")),r>n&&(r=n,O(B,"Set "+i+" to max value")),D[i]=""+r}function o(e){return L.substr(L.indexOf(":")+a+e)}function l(e,n){var t,i,r;t=function(){var t,i;W("Send Page Info","pageInfo:"+(t=document.body.getBoundingClientRect(),i=D.iframe.getBoundingClientRect(),JSON.stringify({iframeHeight:i.height,iframeWidth:i.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(i.top-t.top,10),offsetLeft:parseInt(i.left-t.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})),e,n)},i=32,p[r=n]||(p[r]=setTimeout((function(){p[r]=null,t()}),i))}function d(e){var n=e.getBoundingClientRect();return R(B),{x:Math.floor(Number(n.left)+Number(c.x)),y:Math.floor(Number(n.top)+Number(c.y))}}function m(e){var n=e?d(D.iframe):{x:0,y:0},t={x:Number(D.width)+n.x,y:Number(D.height)+n.y};O(B,"Reposition requested from iFrame (offset x:"+n.x+" y:"+n.y+")"),window.top!==window.self?window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](t.x,t.y):x(B,"Unable to scroll to requested position, window.parentIFrame not found"):(c=t,g(),O(B,"--"))}function g(){!1!==v("onScroll",c)?F(B):C()}function h(e){v(e,{iframe:D.iframe,screenX:D.width,screenY:D.height,type:D.type})}function v(e,n){return E(B,e,n)}var y,M,z,T,H,A,L=e.data,D={},B=null;"[iFrameResizerChild]Ready"===L?function(){for(var e in f)W("iFrame requested init",S(e),f[e].iframe,e)}():u===(""+L).substr(0,s)&&L.substr(s).split(":")[0]in f?(z=L.substr(s).split(":"),T=z[1]?parseInt(z[1],10):0,H=f[z[0]]&&f[z[0]].iframe,A=getComputedStyle(H),D={iframe:H,id:z[0],height:T+t(A)+i(A),width:z[2],type:z[3]},B=D.id,f[B]&&(f[B].loaded=!0),(M=D.type in{true:1,false:1,undefined:1})&&O(B,"Ignoring init message from meta parent page"),!M&&function(e){var n=!0;return f[e]||(n=!1,x(D.type+" No settings for "+e+". Message was: "+L)),n}(B)&&(O(B,"Received: "+L),y=!0,null===D.iframe&&(x(B,"IFrame ("+D.id+") not found"),y=!1),y&&function(){var n,t=e.origin,i=f[B]&&f[B].checkOrigin;if(i&&""+t!="null"&&!(i.constructor===Array?function(){var e=0,n=!1;for(O(B,"Checking connection is from allowed list of origins: "+i);e<i.length;e++)if(i[e]===t){n=!0;break}return n}():(n=f[B]&&f[B].remoteHost,O(B,"Checking connection is from: "+n),t===n)))throw new Error("Unexpected message received from: "+t+" for "+D.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){switch(f[B]&&f[B].firstRun&&f[B]&&(f[B].firstRun=!1),D.type){case"close":I(D.iframe);break;case"message":a=o(6),O(B,"onMessage passed: {iframe: "+D.iframe.id+", message: "+a+"}"),v("onMessage",{iframe:D.iframe,message:JSON.parse(a)}),O(B,"--");break;case"mouseenter":h("onMouseEnter");break;case"mouseleave":h("onMouseLeave");break;case"autoResize":f[B].autoResize=JSON.parse(o(9));break;case"scrollTo":m(!1);break;case"scrollToOffset":m(!0);break;case"pageInfo":l(f[B]&&f[B].iframe,B),function(){function e(e,i){function r(){f[t]?l(f[t].iframe,t):n()}["scroll","resize"].forEach((function(n){O(t,e+n+" listener for sendPageInfo"),i(window,n,r)}))}function n(){e("Remove ",w)}var t=B;e("Add ",b),f[t]&&(f[t].stopPageInfo=n)}();break;case"pageInfoStop":f[B]&&f[B].stopPageInfo&&(f[B].stopPageInfo(),delete f[B].stopPageInfo);break;case"inPageLink":t=o(9).split("#")[1]||"",i=decodeURIComponent(t),(r=document.getElementById(i)||document.getElementsByName(i)[0])?(e=d(r),O(B,"Moving to in page link (#"+t+") at x: "+e.x+" y: "+e.y),c={x:e.x,y:e.y},g(),O(B,"--")):window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(t):O(B,"In page link #"+t+" not found and window.parentIFrame not found"):O(B,"In page link #"+t+" not found");break;case"reset":j(D);break;case"init":n(),v("onInit",D.iframe);break;default:n()}var e,t,i,r,a}())):k(B,"Ignored: "+L)}function E(e,n,t){var i=null,r=null;if(f[e]){if("function"!=typeof(i=f[e][n]))throw new TypeError(n+" on iFrame["+e+"] is not a function");r=i(t)}return r}function T(e){var n=e.id;delete f[n]}function I(e){var n=e.id;if(!1!==E(n,"onClose",n)){O(n,"Removing iFrame: "+n);try{e.parentNode&&e.parentNode.removeChild(e)}catch(t){x(t)}E(n,"onClosed",n),O(n,"--"),T(e)}else O(n,"Close iframe cancelled by onClose event")}function R(e){null===c&&O(e,"Get page position: "+(c={x:window.pageXOffset!==n?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==n?window.pageYOffset:document.documentElement.scrollTop}).x+","+c.y)}function F(e){null!==c&&(window.scrollTo(c.x,c.y),O(e,"Set page position: "+c.x+","+c.y),C())}function C(){c=null}function j(e){O(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),R(e.id),N((function(){P(e),W("reset","reset",e.iframe,e.id)}),e,"reset")}function P(e){function n(n){o||"0"!==e[n]||(o=!0,O(i,"Hidden iFrame detected, creating visibility listener"),function(){function e(){function e(e){function n(n){return"0px"===(f[e]&&f[e].iframe.style[n])}function t(e){return null!==e.offsetParent}f[e]&&t(f[e].iframe)&&(n("height")||n("width"))&&W("Visibility change","resize",f[e].iframe,e)}Object.keys(f).forEach((function(n){e(n)}))}function n(n){O("window","Mutation observed: "+n[0].target+" "+n[0].type),A(e,16)}function t(){var e=document.querySelector("body"),t={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};new i(n).observe(e,t)}var i=h();i&&t()}())}function t(t){!function(n){e.id?(e.iframe.style[n]=e[n]+"px",O(e.id,"IFrame ("+i+") "+n+" set to "+e[n]+"px")):O("undefined","messageData id not set")}(t),n(t)}var i=e.iframe.id;f[i]&&(f[i].sizeHeight&&t("height"),f[i].sizeWidth&&t("width"))}function N(e,n,t){t!==n.type&&l&&!window.jasmine?(O(n.id,"Requesting animation frame"),l(e)):e()}function W(e,n,t,i,r){var o,a=!1;i=i||t.id,f[i]&&(t&&"contentWindow"in t&&null!==t.contentWindow?(o=f[i]&&f[i].targetOrigin,O(i,"["+e+"] Sending msg to iframe["+i+"] ("+n+") targetOrigin: "+o),t.contentWindow.postMessage(u+n,o)):x(i,"["+e+"] IFrame("+i+") not found"),r&&f[i]&&f[i].warningTimeout&&(f[i].msgTimeout=setTimeout((function(){!f[i]||f[i].loaded||a||(a=!0,x(i,"IFrame has not responded within "+f[i].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}),f[i].warningTimeout)))}function S(e){return e+":"+f[e].bodyMarginV1+":"+f[e].sizeWidth+":"+f[e].log+":"+f[e].interval+":"+f[e].enablePublicMethods+":"+f[e].autoResize+":"+f[e].bodyMargin+":"+f[e].heightCalculationMethod+":"+f[e].bodyBackground+":"+f[e].bodyPadding+":"+f[e].tolerance+":"+f[e].inPageLinks+":"+f[e].resizeFrom+":"+f[e].widthCalculationMethod}function H(e,t){function o(e){var n=e.split("Callback");if(2===n.length){var t="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[t]=this[e],delete this[e],x(s,"Deprecated: '"+e+"' has been renamed '"+t+"'. The old method will be removed in the next major version.")}}var a,u,s=function(n){var o;return""===n&&(e.id=(o=t&&t.id||g.id+i++,null!==document.getElementById(o)&&(o+=i++),n=o),r=(t||{}).log,O(n,"Added missing iframe ID: "+n+" ("+e.src+")")),n}(e.id);s in f&&"iFrameResizer"in e?x(s,"Ignored iFrame, already setup."):(function(n){var t;n=n||{},f[s]={firstRun:!0,iframe:e,remoteHost:e.src&&e.src.split("/").slice(0,3).join("/")},function(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}(n),Object.keys(n).forEach(o,n),function(e){for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&(f[s][n]=Object.prototype.hasOwnProperty.call(e,n)?e[n]:g[n])}(n),f[s]&&(f[s].targetOrigin=!0===f[s].checkOrigin?""===(t=f[s].remoteHost)||null!==t.match(/^(about:blank|javascript:|file:\/\/)/)?"*":t:"*")}(t),function(){switch(O(s,"IFrame scrolling "+(f[s]&&f[s].scrolling?"enabled":"disabled")+" for "+s),e.style.overflow=!1===(f[s]&&f[s].scrolling)?"hidden":"auto",f[s]&&f[s].scrolling){case"omit":break;case!0:e.scrolling="yes";break;case!1:e.scrolling="no";break;default:e.scrolling=f[s]?f[s].scrolling:"no"}}(),function(){function n(n){1/0!==f[s][n]&&0!==f[s][n]&&(e.style[n]=f[s][n]+"px",O(s,"Set "+n+" = "+f[s][n]+"px"))}function t(e){if(f[s]["min"+e]>f[s]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}t("Height"),t("Width"),n("maxHeight"),n("minHeight"),n("maxWidth"),n("minWidth")}(),"number"!=typeof(f[s]&&f[s].bodyMargin)&&"0"!==(f[s]&&f[s].bodyMargin)||(f[s].bodyMarginV1=f[s].bodyMargin,f[s].bodyMargin=f[s].bodyMargin+"px"),a=S(s),(u=h())&&function(n){e.parentNode&&new n((function(n){n.forEach((function(n){Array.prototype.slice.call(n.removedNodes).forEach((function(n){n===e&&I(e)}))}))})).observe(e.parentNode,{childList:!0})}(u),b(e,"load",(function(){var t,i;W("iFrame.onload",a,e,n,!0),t=f[s]&&f[s].firstRun,i=f[s]&&f[s].heightCalculationMethod in d,!t&&i&&j({iframe:e,height:0,width:0,type:"init"})})),W("init",a,e,n,!0),f[s]&&(f[s].iframe.iFrameResizer={close:I.bind(null,f[s].iframe),removeListeners:T.bind(null,f[s].iframe),resize:W.bind(null,"Window resize","resize",f[s].iframe),moveToAnchor:function(e){W("Move to anchor","moveToAnchor:"+e,f[s].iframe,s)},sendMessage:function(e){W("Send Message","message:"+(e=JSON.stringify(e)),f[s].iframe,s)}}))}function A(e,n){null===m&&(m=setTimeout((function(){m=null,e()}),n))}function L(){"hidden"!==document.visibilityState&&(O("document","Trigger event: Visiblity change"),A((function(){D("Tab Visable","resize")}),16))}function D(e,n){Object.keys(f).forEach((function(t){(function(e){return f[e]&&"parent"===f[e].resizeFrom&&f[e].autoResize&&!f[e].firstRun})(t)&&W(e,n,f[t].iframe,t)}))}function B(){b(window,"message",z),b(window,"resize",(function(){var e;O("window","Trigger event: "+(e="resize")),A((function(){D("Window "+e,"resize")}),16)})),b(document,"visibilitychange",L),b(document,"-webkit-visibilitychange",L)}function V(){function e(e,n){n&&(function(){if(!n.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==n.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+n.tagName+">")}(),H(n,e),t.push(n))}var t;return function(){var e,n=["moz","webkit","o","ms"];for(e=0;e<n.length&&!l;e+=1)l=window[n[e]+"RequestAnimationFrame"];l?l=l.bind(window):O("setup","RequestAnimationFrame not supported")}(),B(),function(i,r){switch(t=[],function(e){e&&e.enablePublicMethods&&x("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}(i),typeof r){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(r||"iframe"),e.bind(n,i));break;case"object":e(i,r);break;default:throw new TypeError("Unexpected data type ("+typeof r+")")}return t}}}()},s(c={exports:{}},c.exports),c.exports),d=function(){},f=d,m=function(e){var n=e.title,t=e.forwardRef,i=u(e,["title","forwardRef"]),r=function(e){return e.autoResize,e.bodyBackground,e.bodyMargin,e.bodyPadding,e.checkOrigin,e.inPageLinks,e.heightCalculationMethod,e.interval,e.log,e.maxHeight,e.maxWidth,e.minHeight,e.minWidth,e.resizeFrom,e.scrolling,e.sizeHeight,e.sizeWidth,e.warningTimeout,e.tolerance,e.widthCalculationMethod,e.onClosed,e.onInit,e.onMessage,e.onMouseEnter,e.onMouseLeave,e.onResized,u(e,["autoResize","bodyBackground","bodyMargin","bodyPadding","checkOrigin","inPageLinks","heightCalculationMethod","interval","log","maxHeight","maxWidth","minHeight","minWidth","resizeFrom","scrolling","sizeHeight","sizeWidth","warningTimeout","tolerance","widthCalculationMethod","onClosed","onInit","onMessage","onMouseEnter","onMouseLeave","onResized"])}(i),s=(0,o.useRef)(null),c=function(){return f(!s.current,"[iframeSizerReact]["+(s&&s.current&&s.current.id)+"] Close event ignored, to remove the iframe update your React component"),!s.current};return(0,o.useEffect)((function(){var e=s.current;return l(a({},i,{onClose:c}),e),function(){return e.iFrameResizer&&e.iFrameResizer.removeListeners()}}),[]),(0,o.useImperativeHandle)(t,(function(){return{resize:function(){return s.current.iFrameResizer.resize()},moveToAnchor:function(e){return s.current.iFrameResizer.moveToAnchor(e)},sendMessage:function(e,n){s.current.iFrameResizer.sendMessage(e,n)}}})),o.createElement("iframe",a({title:n},r,{ref:s}))};m.defaultProps={title:"iframe"},m.propTypes={title:r().string},n.Z=m}}]);