import{r as t,c as e,h as r}from"./p-9bc062fc.js";import{c as o}from"./p-4345d76d.js";const c=".utrecht-checkbox{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;cursor:var(--utrecht-action-activate-cursor, revert);-webkit-user-select:none;user-select:none}.utrecht-checkbox--disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-checkbox--html-input:disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--html-input:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-checkbox--html-input:focus:not(:focus-visible){box-shadow:none;outline-style:revert}:host{display:block}:host([hidden]){display:none !important}";const s=class{constructor(r){t(this,r);this.utrechtBlur=e(this,"utrechtBlur",7);this.utrechtChange=e(this,"utrechtChange",7);this.utrechtFocus=e(this,"utrechtFocus",7);this.utrechtInput=e(this,"utrechtInput",7);this.disabled=false;this.readOnly=false;this.checked=false;this.value=""}render(){const{checked:t,disabled:e,value:c}=this;return r("input",{class:o("utrecht-checkbox"),type:"checkbox",checked:t,disabled:e,value:c,onBlur:t=>this.utrechtBlur.emit(t),onChange:t=>this.utrechtChange.emit(t),onFocus:t=>this.utrechtFocus.emit(t),onInput:t=>{this.checked=t.target.checked;this.utrechtInput.emit(t)}})}};s.style=c;export{s as utrecht_checkbox};
//# sourceMappingURL=p-ae873a2f.entry.js.map