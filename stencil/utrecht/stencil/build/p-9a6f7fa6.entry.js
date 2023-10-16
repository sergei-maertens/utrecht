import{r as t,h as n}from"./p-2d1f0646.js";import{c as e}from"./p-4345d76d.js";const r=".utrecht-pagination__page-link:focus,.utrecht-pagination__relative-link:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-pagination__page-link:focus:not(:focus-visible),.utrecht-pagination__relative-link:focus:not(:focus-visible){box-shadow:none;outline-style:revert}.utrecht-pagination{font-family:var(--utrecht-pagination-font-family, var(--utrecht-document-font-family));font-size:var(--utrecht-pagination-font-size, var(--utrecht-document-font-family));margin-block-end:calc(var(--utrecht-space-around, 0) * var(--utrecht-pagination-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0) * var(--utrecht-pagination-margin-block-start, 0))}.utrecht-pagination--distanced{--utrecht-space-around:1}.utrecht-pagination__relative-link{background-color:var(--utrecht-pagination-relative-link-background-color);border-color:var(--utrecht-pagination-relative-link-border-color);border-radius:var(--utrecht-pagination-relative-link-border-radius);border-style:solid;border-width:var(--utrecht-pagination-relative-link-border-width, 0);color:var(--utrecht-pagination-relative-link-color);display:inline-block;font-weight:var(--utrecht-pagination-relative-link-font-weight);padding-block-end:var(--utrecht-pagination-relative-link-padding-block-end);padding-block-start:var(--utrecht-pagination-relative-link-padding-block-start);padding-inline-end:var(--utrecht-pagination-relative-link-padding-inline-end);padding-inline-start:var(--utrecht-pagination-relative-link-padding-inline-start);text-decoration:var(--utrecht-pagination-relative-link-text-decoration);text-transform:var(--utrecht-pagination-relative-link-text-transform)}.utrecht-pagination__relative-link--next{margin-inline-start:var(--utrecht-pagination-relative-link-distanced-margin-inline-start)}.utrecht-pagination__relative-link--prev{margin-inline-end:var(--utrecht-pagination-relative-link-distanced-margin-inline-end)}.utrecht-pagination__relative-link--disabled{background-color:var(--utrecht-pagination-relative-link-disabled-background-color, var(--utrecht-pagination-relative-link-background-color));color:var(--utrecht-pagination-relative-link-disabled-color, var(--utrecht-pagination-relative-link-color))}.utrecht-pagination__relative-link--hover,.utrecht-pagination__relative-link:hover{background-color:var(--utrecht-pagination-relative-link-hover-background-color, var(--utrecht-pagination-relative-link-background-color));border-color:var(--utrecht-pagination-relative-link-hover-border-color, var(--utrecht-pagination-relative-link-border-color));color:var(--utrecht-pagination-relative-link-hover-color, var(--utrecht-pagination-relative-link-color))}.utrecht-pagination__page-link{background-color:var(--utrecht-pagination-page-link-background-color);border-color:var(--utrecht-pagination-page-link-border-color, 0);border-radius:var(--utrecht-pagination-page-link-border-radius);border-style:solid;border-width:var(--utrecht-pagination-page-link-border-width);color:var(--utrecht-pagination-page-link-color);display:inline-block;font-weight:var(--utrecht-pagination-page-link-font-weight);padding-block-end:var(--utrecht-pagination-page-link-padding-block-end);padding-block-start:var(--utrecht-pagination-page-link-padding-block-start);padding-inline-end:var(--utrecht-pagination-page-link-padding-inline-end);padding-inline-start:var(--utrecht-pagination-page-link-padding-inline-start);text-decoration:var(--utrecht-pagination-page-link-text-decoration)}.utrecht-pagination__page-link--current{--utrecht-pagination-page-link-background-color:var(--utrecht-pagination-page-link-current-background-color);--utrecht-pagination-page-link-border-color:var(--utrecht-pagination-page-link-current-border-color);--utrecht-pagination-page-link-color:var(--utrecht-pagination-page-link-current-color)}.utrecht-pagination__page-link~.utrecht-pagination__page-link{margin-inline-start:var(--utrecht-pagination-page-link-distanced-margin-inline-start)}.utrecht-pagination__page-link--hover,.utrecht-pagination__page-link:hover{background-color:var(--utrecht-pagination-page-link-hover-background-color, var(--utrecht-pagination-page-link-background-color));border-color:var(--utrecht-pagination-page-link-hover-border-color, var(--utrecht-pagination-page-link-border-color));color:var(--utrecht-pagination-page-link-hover-color, var(--utrecht-pagination-page-link-color))}.utrecht-pagination__page-link:focus,.utrecht-pagination__relative-link:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-pagination__page-link:focus:not(:focus-visible),.utrecht-pagination__relative-link:focus:not(:focus-visible){box-shadow:none;outline-style:revert}:host{display:block}:host([hidden]){display:none !important}";const i=class{constructor(n){t(this,n);this.links=undefined;this.next=undefined;this.prev=undefined;this.currentIndex=undefined}render(){const{currentIndex:t}=this;const r=typeof this.links==="string"?JSON.parse(this.links):null;const i=typeof this.next==="string"?JSON.parse(this.next):null;const a=typeof this.prev==="string"?JSON.parse(this.next):null;const o=({disabled:t=false,href:r="",rel:i=null,textContent:a="",title:o=""})=>t?n("span",{class:e("utrecht-pagination__relative-link",t&&"utrecht-pagination__relative-link--disabled",i==="next"&&"utrecht-pagination__relative-link--next",i==="prev"&&"utrecht-pagination__relative-link--prev"),"aria-label":o||null},a):n("a",{href:r,class:e("utrecht-pagination__relative-link",t&&"utrecht-pagination__relative-link--disabled",i==="next"&&"utrecht-pagination__relative-link--next",i==="prev"&&"utrecht-pagination__relative-link--prev"),rel:i,"aria-label":o||null},a);const l=({current:t=false,href:r="",rel:i=null,textContent:a=""})=>n("a",{class:e("utrecht-pagination__page-link",t&&"utrecht-pagination__page-link--current"),href:r,"aria-current":t?"true":null,rel:i},a);return n("nav",{class:"utrecht-pagination"},n("span",{class:"utrecht-pagination__before"},a?o(Object.assign(Object.assign({},a),{rel:"prev",textContent:"Vorige"})):""),n("span",{role:"group",class:"utrecht-pagination__pages"},r.sort(((t,n)=>t.index===n.index?0:t.index>n.index?1:-1)).map(((n,e)=>{const r=typeof n.index==="number"?n.index:e;return Object.assign({index:r,current:typeof t==="number"&&r===t,rel:typeof t==="number"?r===t+1?"next":r===t-1?"prev":null:null,textContent:n.index||r},n)})).map((t=>l(t)))),n("span",{class:"utrecht-pagination__before"},i?o(Object.assign(Object.assign({},i),{rel:"next",textContent:"Volgende"})):""))}};i.style=r;export{i as utrecht_pagination};
//# sourceMappingURL=p-9a6f7fa6.entry.js.map