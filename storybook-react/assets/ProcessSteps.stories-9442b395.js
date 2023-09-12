import{a as te,F as ne,j as x}from"./jsx-runtime-29545a09.js";import{r as i,R as o}from"./index-76fb7be0.js";import"./chunk-S4VUQJ4A-0b73d0e4.js";import{D as ae,P as se,A as oe,b as ce,d as ie}from"./index-4f7c2a42.js";import{t as de,d as le}from"./util-7fc75af6.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-ca12a699.js";import"../sb-preview/runtime.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./index-8d47fad6.js";var v=function(){return v=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},v.apply(this,arguments)};function b(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function N(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,s;r<a;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}function K(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=K(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function l(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=K(e))&&(r&&(r+=" "),r+=t);return r}var pe=function(e){var t=e.children,n=e.current,r=n===void 0?!1:n,a=e.appearance,s=a===void 0?"not-checked":a,c=b(e,["children","current","appearance"]);return o.createElement("li",v({},c,{className:l("denhaag-process-steps__step","denhaag-process-steps__step--".concat(s)),"aria-current":r?"step":void 0}),t)},Q=function(e){var t=e.className,n=e.nested,r=n===void 0?!1:n,a=e.children,s=b(e,["className","nested","children"]);return o.createElement("ol",v({},s,{className:l("denhaag-process-steps",r&&"denhaag-process-steps--nested",t)}),a)},ge=function(e){var t=e.children,n=e.className,r=b(e,["children","className"]);return o.createElement("div",v({className:l("denhaag-process-steps__step-header",n)},r),t)},A=function(e){var t=e.children,n=e.appearance,r=n===void 0?"not-checked":n,a=b(e,["children","appearance"]);return o.createElement("p",v({},a,{className:l("denhaag-process-steps__step-heading","denhaag-process-steps__step-heading--".concat(r))}),t)},he=function(e){var t=e.children,n=e.appearance,r=n===void 0?"not-checked":n;return o.createElement("li",{className:l("denhaag-process-steps__sub-step","denhaag-process-steps__sub-step--".concat(r))},t)},me=function(e){var t=e.children;return o.createElement("p",{className:"denhaag-process-steps__sub-step-heading"},t)},S=function(){return S=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},S.apply(this,arguments)};function ue(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function V(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=V(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function ve(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=V(e))&&(r&&(r+=" "),r+=t);return r}var ke=function(e){var t,n=e.className,r=e.component,a=r===void 0?"svg":r,s=e.focusable,c=s===void 0?"false":s,g=e.shapeRendering,h=g===void 0?"auto":g,m=e.useDefaultClass,k=m===void 0?!0:m,p=ue(e,["className","component","focusable","shapeRendering","useDefaultClass"]),d=ve({"denhaag-icon":k},n),f=a;return o.createElement(f,S({className:d,focusable:c,"aria-hidden":(t=p["aria-hidden"])!==null&&t!==void 0?t:!0,shapeRendering:h},p),p.children)};function fe(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var be=".denhaag-icon{fill:currentcolor;display:inline-block;flex-shrink:0;font-size:1.5rem;height:1em;transition:fill .2s cubic-bezier(.4,0,.2,1) 0ms;width:1em}";fe(be);var P;function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function ye(e){return i.createElement("svg",E({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),P||(P=i.createElement("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})))}var xe=i.memo(ye),M;function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}function _e(e){return i.createElement("svg",$({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),M||(M=i.createElement("path",{d:"M11.293 7.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L12 9.414l-5.293 5.293a1 1 0 01-1.414-1.414l6-6z",fill:"currentColor"})))}var we=i.memo(_e),D;function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}function Se(e){return i.createElement("svg",O({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),D||(D=i.createElement("path",{d:"M5.293 5.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z",fill:"currentColor"})))}var ze=i.memo(Se),T;function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}function Ee(e){return i.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},e),T||(T=i.createElement("path",{d:"M20.664 5.253a1 1 0 01.083 1.411l-10.666 12a1 1 0 01-1.495 0l-5.333-6a1 1 0 011.494-1.328l4.586 5.159 9.92-11.16a1 1 0 011.411-.082z",stroke:"currentColor",strokeWidth:1.75})))}var $e=i.memo(Ee),B;function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function Oe(e){return i.createElement("svg",j({width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),B||(B=i.createElement("g",{stroke:"currentColor",fill:"none",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},i.createElement("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0v0zM12 17h.01M12 9v4"}))))}var Ce=i.memo(Oe),y=function(e,t){return o.createElement(ke,S({component:e},t))},je=function(e){return y(xe,e)},Ne=function(e){return y(we,e)},Ae=function(e){return y(ze,e)},I=function(e){return y($e,e)},Pe=function(e){return y(Ce,e)};function Me(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var De=".denhaag-step-marker{align-items:center;background-color:var(--denhaag-step-marker-background-color);block-size:var(--denhaag-step-marker-size);border-color:var(--denhaag-step-marker-border-color,transparent);border-radius:var(--denhaag-step-marker-border-radius,50%);border-style:solid;border-width:var(--denhaag-step-marker-border-width);box-sizing:border-box;color:var(--denhaag-step-marker-color);display:flex;flex-grow:0;font-family:var(--denhaag-step-marker-font-family);font-size:var(--denhaag-step-marker-font-size);font-weight:var(--denhaag-step-marker-font-weight);inline-size:var(--denhaag-step-marker-size);justify-content:center;margin-block-end:var(--denhaag-step-marker-margin);margin-block-start:var(--denhaag-step-marker-margin);min-block-size:var(--denhaag-step-marker-min-size,var(--denhaag-step-marker-size));min-inline-size:var(--denhaag-step-marker-min-size,var(--denhaag-step-marker-size));padding-inline-end:0;position:relative;z-index:1}.denhaag-step-marker .denhaag-icon{block-size:var(--denhaag-step-marker-icon-size);inline-size:var(--denhaag-step-marker-icon-size)}.denhaag-step-marker--nested{block-size:var(--denhaag-step-marker-nested-size);border-width:var(--denhaag-step-marker-nested-border-width,var(--denhaag-step-marker-border-width));inline-size:var(--denhaag-step-marker-nested-size);margin-inline-start:calc((var(--denhaag-step-marker-size) - var(--denhaag-step-marker-nested-size))/2);min-block-size:var(--denhaag-step-marker-nested-min-size,var(--denhaag-step-marker-nested-size));min-inline-size:var(--denhaag-step-marker-nested-min-size,var(--denhaag-step-marker-nested-size))}.denhaag-step-marker--nested .denhaag-icon{block-size:var(--denhaag-step-marker-nested-icon-size);inline-size:var(--denhaag-step-marker-nested-icon-size)}.denhaag-step-marker--not-checked{background-color:var(--denhaag-step-marker-not-checked-background-color);border-color:var(--denhaag-step-marker-not-checked-border-color);color:var(--denhaag-step-marker-not-checked-color)}.denhaag-step-marker--not-checked.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-not-checked-nested-background-color,var(--denhaag-step-marker-not-checked-background-color));border-color:var(--denhaag-step-marker-not-checked-nested-border-color,var(--denhaag-step-marker-not-checked-border-color));color:var(--denhaag-step-marker-not-checked-nested-color,var(--denhaag-step-marker-not-checked-color))}.denhaag-step-marker--checked{background-color:var(--denhaag-step-marker-checked-background-color);border-color:var(--denhaag-step-marker-checked-border-color);color:var(--denhaag-step-marker-checked-color)}.denhaag-step-marker--checked.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-checked-nested-background-color,var(--denhaag-step-marker-checked-background-color));border-color:var(--denhaag-step-marker-checked-nested-border-color,var(--denhaag-step-marker-checked-border-color));color:var(--denhaag-step-marker-checked-nested-color,var(--denhaag-step-marker-checked-color))}.denhaag-step-marker--current{background-color:var(--denhaag-step-marker-current-background-color);border-color:var(--denhaag-step-marker-current-border-color);color:var(--denhaag-step-marker-current-color)}.denhaag-step-marker--current.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-current-nested-background-color,var(--denhaag-step-marker-current-background-color));border-color:var(--denhaag-step-marker-current-nested-border-color,var(--denhaag-step-marker-current-border-color));color:var(--denhaag-step-marker-current-nested-color,var(--denhaag-step-marker-current-color))}.denhaag-step-marker--disabled{background-color:var(--denhaag-step-marker-disabled-background-color);border-color:var(--denhaag-step-marker-disabled-border-color);color:var(--denhaag-step-marker-disabled-color)}.denhaag-step-marker--disabled.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-disabled-nested-background-color,var(--denhaag-step-marker-disabled-background-color));border-color:var(--denhaag-step-marker-disabled-nested-border-color,var(--denhaag-step-marker-disabled-border-color));color:var(--denhaag-step-marker-disabled-nested-color,var(--denhaag-step-marker-disabled-color))}.denhaag-step-marker--warning{background-color:var(--denhaag-step-marker-warning-background-color);border-color:var(--denhaag-step-marker-warning-border-color);color:var(--denhaag-step-marker-warning-color)}.denhaag-step-marker--warning.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-warning-nested-background-color,var(--denhaag-step-marker-warning-background-color));border-color:var(--denhaag-step-marker-warning-nested-border-color,var(--denhaag-step-marker-warning-border-color));color:var(--denhaag-step-marker-warning-nested-color,var(--denhaag-step-marker-warning-color))}.denhaag-step-marker--error{background-color:var(--denhaag-step-marker-error-background-color);border-color:var(--denhaag-step-marker-error-border-color);color:var(--denhaag-step-marker-error-color)}.denhaag-step-marker--error.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-error-nested-background-color,var(--denhaag-step-marker-error-background-color));border-color:var(--denhaag-step-marker-error-nested-border-color,var(--denhaag-step-marker-error-border-color));color:var(--denhaag-step-marker-error-nested-color,var(--denhaag-step-marker-error-color))}.denhaag-step-marker__connector{height:100%;left:calc(var(--denhaag-step-marker-size)/2);outline:var(--denhaag-step-marker-connector-width,1px) var(--denhaag-step-marker-connector-style,dashed) var(--denhaag-step-marker-connector-color);position:absolute;top:0}.denhaag-step-marker__connector--main-to-main{padding-block-end:calc(var(--denhaag-process-steps-step-distance) + var(--denhaag-step-marker-size));top:calc(var(--denhaag-step-marker-size)*-1/2)}.denhaag-step-marker__connector--main-to-nested{padding-block-end:calc(var(--denhaag-process-steps-step-distance) + var(--denhaag-step-marker-nested-size));top:calc(var(--denhaag-step-marker-size)*-1/2)}.denhaag-step-marker__connector--nested-to-nested{padding-block-end:var(--denhaag-process-steps-sub-step-distance);top:var(--denhaag-step-marker-nested-size)}.denhaag-step-marker__connector--nested-to-main{padding-block-end:var(--denhaag-process-steps-step-distance);top:var(--denhaag-step-marker-nested-size)}.denhaag-step-marker__connector--not-checked{outline-color:var(--denhaag-step-marker-connector-not-checked-outline-color,var(--denhaag-step-marker-connector-outline-color));outline-style:var(--denhaag-step-marker-connector-not-checked-outline-style,dashed);outline-width:var(--denhaag-step-marker-connector-not-checked-outline-width,var(--denhaag-step-marker-connector-outline-width,1px))}.denhaag-step-marker__connector--checked,.denhaag-step-marker__connector--current{outline-color:var(--denhaag-step-marker-connector-checked-outline-color,var(--denhaag-step-marker-connector-outline-color));outline-style:var(--denhaag-step-marker-connector-checked-outline-style,solid);outline-width:var(--denhaag-step-marker-connector-checked-outline-width,var(--denhaag-step-marker-connector-outline-width,1px))}.denhaag-step-marker__connector--warning{outline-color:var(--denhaag-step-marker-connector-warning-outline-color,var(--denhaag-step-marker-connector-outline-color));outline-style:var(--denhaag-step-marker-connector-warning-outline-style,solid);outline-width:var(--denhaag-step-marker-connector-warning-outline-width,var(--denhaag-step-marker-connector-outline-width,1px))}.denhaag-step-marker__connector--error{outline-color:var(--denhaag-step-marker-connector-error-outline-color,var(--denhaag-step-marker-connector-outline-color));outline-style:var(--denhaag-step-marker-connector-error-outline-style,solid);outline-width:var(--denhaag-step-marker-connector-error-outline-width,var(--denhaag-step-marker-connector-outline-width,1px))}";Me(De);var z=function(){return z=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},z.apply(this,arguments)};function X(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function Z(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Z(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function ee(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Z(e))&&(r&&(r+=" "),r+=t);return r}var L=function(e){var t=e.className,n=e.appearance,r=n===void 0?"not-checked":n,a=e.from,s=e.to,c=X(e,["className","appearance","from","to"]);return o.createElement("div",z({},c,{className:ee("denhaag-step-marker__connector","denhaag-step-marker__connector--".concat(r),"denhaag-step-marker__connector--".concat(a,"-to-").concat(s),t)}))},R=function(e){var t=e.children,n=e.appearance,r=n===void 0?"not-checked":n,a=e.nested,s=X(e,["children","appearance","nested"]);return o.createElement("div",z({},s,{className:ee("denhaag-step-marker","denhaag-step-marker--".concat(r),a&&"denhaag-step-marker--nested")}),t)};function Te(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var Be=".denhaag-process-steps__step{padding-block-end:0;padding-block-start:0;position:relative}.denhaag-process-steps__step+.denhaag-process-steps__step{margin-block-start:var(--denhaag-process-steps-step-distance)}.denhaag-process-steps{--denhaag-process-steps-step-distance:40px;--denhaag-process-steps-sub-step-distance:24px;font-family:var(--denhaag-process-steps-font-family);font-size:var(--denhaag-process-steps-font-size);line-height:var(--denhaag-process-steps-line-height);list-style:none;margin-block-end:0;margin-block-start:0;padding-inline-start:0;position:relative}.denhaag-process-steps__step-header{align-items:center;display:flex;gap:16px}.denhaag-process-steps__step-header-toggle{--utrecht-button-subtle-font-size:inherit;--utrecht-button-subtle-background-color:transparent;--utrecht-button-subtle-color:auto;--utrecht-button-padding-block-end:0;--utrecht-button-padding-block-start:0;--utrecht-button-padding-inline-end:0;--utrecht-button-padding-inline-start:0;--utrecht-button-icon-gap:4px;align-items:center;appearance:none;background-color:inherit;border:0;display:flex;gap:0;margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;padding-block-end:0;padding-block-start:0;padding-inline-end:0;padding-inline-start:0}.denhaag-process-steps__step-heading{align-items:center;color:var(--denhaag-process-steps-step-heading-color);display:flex;font-family:var(--denhaag-process-steps-step-heading-font-family);font-size:var(--denhaag-process-steps-step-heading-font-size);font-weight:var(--denhaag-process-steps-step-heading-font-weight);line-height:var(--denhaag-process-steps-step-heading-line-height);margin-block-end:0;margin-block-start:0;text-align:start}.denhaag-process-steps__step-heading--not-checked{color:var(--denhaag-process-steps-step-heading-not-checked-color)}.denhaag-process-steps__step-heading--checked{color:var(--denhaag-process-steps-step-heading-checked-color);font-size:var(--denhaag-process-steps-step-heading-checked-font-size,var(--denhaag-process-steps-step-heading-font-size));font-weight:var(--denhaag-process-steps-step-heading-checked-font-weight,var(--denhaag-process-steps-step-heading-font-weight))}.denhaag-process-steps__step-heading--current{color:var(--denhaag-process-steps-step-heading-current-color);font-size:var(--denhaag-process-steps-step-heading-current-font-size,var(--denhaag-process-steps-step-heading-font-size));font-weight:var(--denhaag-process-steps-step-heading-current-font-weight,var(--denhaag-process-steps-step-heading-font-weight))}.denhaag-process-steps__step-heading--warning{color:var(--denhaag-process-steps-step-heading-warning-color)}.denhaag-process-steps__step-heading--error{color:var(--denhaag-process-steps-step-heading-error-color)}.denhaag-process-steps__step-details{display:block}.denhaag-process-steps__step-details--hidden{display:none}.denhaag-process-steps__step-body{position:relative}.denhaag-process-steps__step-meta{color:var(--denhaag-process-steps-step-meta-color);font-size:var(--denhaag-process-steps-step-meta-font-size);margin-inline-start:calc(var(--denhaag-step-marker-size) + 16px);position:relative}.denhaag-process-steps__step-meta--date{color:var(--denhaag-process-steps-step-meta-date-color,var(--denhaag-process-steps-step-meta-color));font-size:var(--denhaag-process-steps-step-meta-date-font-size,var(--denhaag-process-steps-step-meta-font-size))}.denhaag-process-steps__sub-step{align-items:baseline;display:flex;flex-direction:row;gap:23px;margin-block-start:var(--denhaag-process-steps-sub-step-distance);position:relative}.denhaag-process-steps__sub-step-heading{margin-block-end:0;margin-block-start:0}";Te(Be);var Ie=function(e){var t=e.children;return o.createElement("div",{className:l("denhaag-process-steps__step-body")},t)},H=function(e){var t=e.date,n=e.children;return o.createElement("div",{className:l("denhaag-process-steps__step-meta",t&&"denhaag-process-steps__step-meta--date")},n)},Le=function(e){var t=e.id,n=e.collapsed,r=n===void 0?!1:n,a=e.children;return o.createElement("div",{id:t,className:l("denhaag-process-steps__step-details",r&&"denhaag-process-steps__step-details--hidden")},a)},Re=function(e){var t=e.children,n=e.className,r=e.ariaControls,a=e.expanded,s=e.onClick,c=b(e,["children","className","ariaControls","expanded","onClick"]);return o.createElement("button",v({"aria-controls":r,className:l("utrecht-button","utrecht-button--subtle","denhaag-process-steps__step-header-toggle",n),onClick:s},c),t,a?o.createElement(Ne,{className:l("denhaag-process-steps__step-header-toggle-icon")}):o.createElement(je,{className:l("denhaag-process-steps__step-header-toggle-icon")}))},G=function(e){var t=e.stepStatus,n=t===void 0?"not-checked":t,r=e.nextStepStatus,a=r===void 0?"not-checked":r;return n==="checked"&&a==="error"||n==="checked"&&a==="warning"||n==="current"&&a==="error"||n==="current"&&a==="warning"?"checked":a==="not-checked"?"not-checked":n},He=function(e){var t;return!!(!((t=e.steps)===null||t===void 0)&&t.length)},Ge=function(e){var t,n,r,a,s=e.step,c=e.nextStep,g=e.expanded,h=g===void 0?!0:g,m=e.toggleExpanded,k=h&&((n=(t=s.steps)===null||t===void 0?void 0:t[0])===null||n===void 0?void 0:n.status)||(c==null?void 0:c.status);return o.createElement(pe,{appearance:s.status,current:s.status==="current"},o.createElement(ge,null,o.createElement(R,{appearance:s.status},s.status==="checked"?o.createElement(I,null):s.status==="warning"?o.createElement(Pe,null):s.status==="error"?o.createElement(Ae,null):s.marker),m&&He(s)?o.createElement(Re,{ariaControls:"".concat(s.id,"--details"),expanded:h,onClick:m},o.createElement(A,{appearance:s.status},s.title)):o.createElement(A,{appearance:s.status},s.title)),o.createElement(Ie,null,c&&o.createElement(L,{from:"main",to:h?"nested":"main",appearance:G({stepStatus:s.status,nextStepStatus:k})}),s.meta&&o.createElement(H,null,s.meta),s.date&&o.createElement(H,{date:!0},s.date)),((r=s.steps)===null||r===void 0?void 0:r.length)&&o.createElement(Le,{id:"".concat(s.id,"--details"),collapsed:!h},o.createElement(Q,null,(a=s.steps)===null||a===void 0?void 0:a.map(function(p,d,f){var u=f[d+1],re=(u==null?void 0:u.status)||(c==null?void 0:c.status);return o.createElement(he,{key:d},o.createElement(R,{appearance:p.status,nested:!0},p.status==="checked"&&o.createElement(I,null)),o.createElement(me,null,p.title),(u||c)&&o.createElement(L,{from:"nested",to:u?"nested":"main",appearance:G({stepStatus:p.status,nextStepStatus:re})}))}))))},Ue=function(e,t,n){t.includes(e)?n(t.filter(function(r){return r!==e})):n(N(N([],t,!0),[e],!1))},Fe=function(e){var t=e.steps,n=t===void 0?[]:t,r=e.expandedSteps,a=r===void 0?[]:r,s=e.disabledSteps,c=s===void 0?[]:s,g=e.collapsible,h=g===void 0?!1:g,m=i.useState(a),k=m[0],p=m[1];return o.createElement(Q,null,n.map(function(d,f){var u=h&&d.collapsible!==!1;return o.createElement(Ge,{key:d.id,step:d,expanded:u?k.includes(d.id):!0,disabled:c.includes(d.id),nextStep:n[f+1],toggleExpanded:u&&function(){Ue(d.id,k,p)}})}))},We=Fe;const Ye=`<!-- @license CC0-1.0 -->

# Process Steps

Deze component is gebaseerd op de white-label component die bij Gemeente Den Haag is ontwikkeld. Als je een verandering wilt doorvoeren in bijvoorbeeld de CSS, dan kun je terecht in de [Git repository van Den Haag](https://github.com/nl-design-system/denhaag) met hun NL Design System componenten.

Gemeente Utrecht heeft de design tokens aangepast op de eigen huisstijl.

## BEM anatomie

BEM block: \`.denhaag-process-steps\`

BEM elementen:

- _Step list_: \`.denhaag-process-steps\` (root of component)
- _Step_ (1 of meerdere): \`.denhaag-process-steps__step\`
- _Step header_: \`.denhaag-process-steps__header\`
- _Step marker_: \`.denhaag-process-steps__marker\`
- _Sub step list_: \`.denhaag-process-steps__sub-step-list\`
- _Sub step_ (1 of meerdere): \`.denhaag-process-steps__sub-step\`
- _Sub step marker_: \`.denhaag-process-steps__sub-step-marker\`
`,qe={"process-steps":{"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"step-heading":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},current:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},checked:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},"not-checked":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},warning:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},"step-marker":{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},current:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},checked:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},warning:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},"sub-step-marker":{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},current:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},checked:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},"not-checked":{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},warning:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},"step-line":{"stroke-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},checked:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},warning:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},"step-metadata":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},"step-description":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},"sub-step":{},"sub-step-heading":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}}}},Je={denhaag:qe};const Ke={title:"React Component/Process steps",id:"react-process-steps",component:We,args:{expandedSteps:["deelname","onderzoek"],steps:[{id:"deelname",marker:1,status:"checked",steps:[{id:"1",status:"checked",title:"Aanmelding ontvangen"}],title:"Deelname aan geluidsonderzoek"},{id:"onderzoek",marker:2,status:"current",steps:[{id:"2",status:"checked",title:"Afspraak meten geluidsoverlast gemaakt"},{id:"3",status:"checked",title:"Geluidsoverlast gemeten"},{id:"4",status:"checked",title:"Onderzoek resultaten verwerkt"}],title:"Onderzoek naar geluidsoverlast"},{id:"uitvoeren",marker:3,title:"Uitvoeren van maatregelen"},{id:"klaar",marker:4,title:"Maatregelen zijn uitgevoerd"}]},parameters:{tokensPrefix:"denhaag-process-steps",tokens:de,tokensDefinition:Je,docs:{page:()=>te(ne,{children:[x(ae,{children:Ye}),x(se,{}),x(oe,{story:ce}),x(ie,{})]})}}},_={},w=le(Ke);var U,F,W;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:"{}",...(W=(F=_.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var Y,q,J;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:"designTokenStory(meta)",...(J=(q=w.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const gr=["Default","DesignTokens"];export{_ as Default,w as DesignTokens,gr as __namedExportsOrder,Ke as default};
//# sourceMappingURL=ProcessSteps.stories-9442b395.js.map
