import{r as s,k as e,j as u}from"./index.esm-1a0316d1.js";import{c as i}from"./clsx.m-9f200cc0-1229b3e0.js";import"./defineProperty-a128c648.js";import"./getPrototypeOf-5b183829.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./iframe-092a0af9.js";import"../sb-preview/runtime.mjs";const h=`.utrecht-checkbox{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;cursor:var(--utrecht-action-activate-cursor, revert);-webkit-user-select:none;user-select:none}.utrecht-checkbox--disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)
    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-checkbox--html-input:disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--html-input:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)
    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-checkbox--html-input:focus:not(:focus-visible){box-shadow:none;outline-style:revert}:host{display:block}:host([hidden]){display:none !important}`,n=class{constructor(r){s(this,r),this.utrechtBlur=e(this,"utrechtBlur",7),this.utrechtChange=e(this,"utrechtChange",7),this.utrechtFocus=e(this,"utrechtFocus",7),this.utrechtInput=e(this,"utrechtInput",7),this.disabled=!1,this.readOnly=!1,this.checked=!1,this.value=""}render(){const{checked:r,disabled:o,value:c}=this;return u("input",{class:i("utrecht-checkbox"),type:"checkbox",checked:r,disabled:o,value:c,onBlur:t=>this.utrechtBlur.emit(t),onChange:t=>this.utrechtChange.emit(t),onFocus:t=>this.utrechtFocus.emit(t),onInput:t=>{this.checked=t.target.checked,this.utrechtInput.emit(t)}})}};n.style=h;export{n as utrecht_checkbox};
//# sourceMappingURL=utrecht-checkbox.entry-b5af1495.js.map
