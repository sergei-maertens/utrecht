"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[8586],{"../web-component-library-stencil/dist/esm/clsx.m-071989db.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function toVal(mix){var k,y,str="";if("string"==typeof mix||"number"==typeof mix)str+=mix;else if("object"==typeof mix)if(Array.isArray(mix))for(k=0;k<mix.length;k++)mix[k]&&(y=toVal(mix[k]))&&(str&&(str+=" "),str+=y);else for(k in mix)mix[k]&&(str&&(str+=" "),str+=k);return str}function clsx(){for(var tmp,x,i=0,str="";i<arguments.length;)(tmp=arguments[i++])&&(x=toVal(tmp))&&(str&&(str+=" "),str+=x);return str}__webpack_require__.d(__webpack_exports__,{c:()=>clsx})},"../web-component-library-stencil/dist/esm/utrecht-custom-checkbox.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{utrecht_custom_checkbox:()=>CustomCheckbox});var _index_b6f2699c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-component-library-stencil/dist/esm/index-b6f2699c.js"),_clsx_m_071989db_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-component-library-stencil/dist/esm/clsx.m-071989db.js");const CustomCheckbox=class{constructor(hostRef){(0,_index_b6f2699c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.utrechtBlur=(0,_index_b6f2699c_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"utrechtBlur",7),this.utrechtChange=(0,_index_b6f2699c_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"utrechtChange",7),this.utrechtFocus=(0,_index_b6f2699c_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"utrechtFocus",7),this.utrechtInput=(0,_index_b6f2699c_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"utrechtInput",7),this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.invalid=!1,this.required=!1}render(){const{checked,disabled,indeterminate,invalid,required}=this,toggleInteraction=()=>{this.disabled||(this.checked=!this.checked,this.utrechtInput.emit(this),this.utrechtChange.emit(this))};return(0,_index_b6f2699c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"utrecht-custom-checkbox",role:"checkbox",tabIndex:disabled?null:0,"aria-checked":indeterminate?"mixed":checked?"true":"false","aria-disabled":disabled?"true":null,"aria-invalid":invalid?"true":null,"aria-required":required?"true":null,onClick:()=>{toggleInteraction()},onKeyPress:evt=>{"Space"!==evt.code&&" "!==evt.key||evt.preventDefault()},onKeyUp:evt=>{"Space"!==evt.code&&" "!==evt.key||toggleInteraction()}},(0,_index_b6f2699c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:(0,_clsx_m_071989db_js__WEBPACK_IMPORTED_MODULE_1__.c)("utrecht-custom-checkbox__box",!1,checked&&"utrecht-custom-checkbox__box--checked",!checked&&"utrecht-custom-checkbox__box--not-checked",disabled&&"utrecht-custom-checkbox__box--disabled",invalid&&"utrecht-custom-checkbox__box--invalid",indeterminate&&"utrecht-custom-checkbox__box--indeterminate")},checked&&(0,_index_b6f2699c_js__WEBPACK_IMPORTED_MODULE_0__.h)("utrecht-icon-checkmark",{class:"utrecht-custom-checkbox__icon"},"✔"),indeterminate&&(0,_index_b6f2699c_js__WEBPACK_IMPORTED_MODULE_0__.h)("utrecht-icon-indeterminate",{class:"utrecht-custom-checkbox__icon"},"■")))}};CustomCheckbox.style=".utrecht-checkbox{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0}.utrecht-checkbox--disabled{cursor:var(--utrecht-action-disabled-cursor)}.utrecht-checkbox--focus-visible{box-shadow:0 0 0 var(--utrecht-focus-box-shadow-spread-radius, 0) var(--utrecht-focus-box-shadow-color, transparent);outline-color:var(--utrecht-focus-outline-color, transparent);outline-offset:var(--utrecht-focus-outline-offset, 0);outline-style:var(--utrecht-focus-outline-style, solid);outline-width:var(--utrecht-focus-outline-width, 0)}.utrecht-checkbox--html-input:disabled{cursor:var(--utrecht-action-disabled-cursor)}.utrecht-checkbox--html-input:focus{box-shadow:0 0 0 var(--utrecht-focus-box-shadow-spread-radius, 0) var(--utrecht-focus-box-shadow-color, transparent);outline-color:var(--utrecht-focus-outline-color, transparent);outline-offset:var(--utrecht-focus-outline-offset, 0);outline-style:var(--utrecht-focus-outline-style, solid);outline-width:var(--utrecht-focus-outline-width, 0)}.utrecht-checkbox--html-input:focus:not(:focus-visible){box-shadow:none;outline-style:none}.utrecht-checkbox{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0}.utrecht-checkbox--disabled{cursor:var(--utrecht-action-disabled-cursor)}.utrecht-checkbox--focus-visible{box-shadow:0 0 0 var(--utrecht-focus-box-shadow-spread-radius, 0) var(--utrecht-focus-box-shadow-color, transparent);outline-color:var(--utrecht-focus-outline-color, transparent);outline-offset:var(--utrecht-focus-outline-offset, 0);outline-style:var(--utrecht-focus-outline-style, solid);outline-width:var(--utrecht-focus-outline-width, 0)}.utrecht-checkbox--html-input:disabled{cursor:var(--utrecht-action-disabled-cursor)}.utrecht-checkbox--html-input:focus{box-shadow:0 0 0 var(--utrecht-focus-box-shadow-spread-radius, 0) var(--utrecht-focus-box-shadow-color, transparent);outline-color:var(--utrecht-focus-outline-color, transparent);outline-offset:var(--utrecht-focus-outline-offset, 0);outline-style:var(--utrecht-focus-outline-style, solid);outline-width:var(--utrecht-focus-outline-width, 0)}.utrecht-checkbox--html-input:focus:not(:focus-visible){box-shadow:none;outline-style:none}.utrecht-custom-checkbox{--utrecht-icon-size:var(--utrecht-custom-checkbox-icon-size, calc(0.75 * var(--utrecht-custom-checkbox-size)));display:inline-block;height:var(--utrecht-custom-checkbox-size);position:relative;width:var(--utrecht-custom-checkbox-size)}.utrecht-custom-checkbox__input{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;height:var(--utrecht-custom-checkbox-size);left:0;opacity:0%;position:absolute;top:0;width:var(--utrecht-custom-checkbox-size);z-index:10}.utrecht-custom-checkbox__box{align-items:center;background-color:var(--utrecht-custom-checkbox-background-color);border-color:var(--utrecht-custom-checkbox-border-color, var(--utrecht-form-input-border-color));border-radius:var(--utrecht-custom-checkbox-border-radius, var(--utrecht-form-input-border-radius));border-style:solid;border-width:var(--utrecht-custom-checkbox-border-width, var(--utrecht-form-input-border-width));box-sizing:border-box;color:var(--utrecht-custom-checkbox-color);display:flex;height:var(--utrecht-custom-checkbox-size);justify-content:center;left:0;pointer-events:none;position:absolute;top:0;width:var(--utrecht-custom-checkbox-size);z-index:1000}.utrecht-custom-checkbox__box--checked{background-color:var(--utrecht-custom-checkbox-checked-background-color, var(--utrecht-custom-checkbox-background-color));border-color:var(--utrecht-custom-checkbox-checked-border-color, var(--utrecht-custom-checkbox-border-color));border-width:var(--utrecht-custom-checkbox-checked-border-width, var(--utrecht-custom-checkbox-border-width));color:var(--utrecht-custom-checkbox-checked-color, var(--utrecht-custom-checkbox-color))}.utrecht-custom-checkbox__box--disabled{background-color:var(--utrecht-custom-checkbox-disabled-background-color, var(--utrecht-custom-checkbox-background-color));border-color:var(--utrecht-custom-checkbox-disabled-border-color, var(--utrecht-custom-checkbox-border-color));border-width:var(--utrecht-custom-checkbox-disabled-border-width, var(--utrecht-custom-checkbox-border-width));color:var(--utrecht-custom-checkbox-disabled-color, var(--utrecht-custom-checkbox-color));cursor:var(--utrecht-action-disabled-cursor)}.utrecht-custom-checkbox__box--indeterminate{color:var(--utrecht-custom-checkbox-indeterminate-color, var(--utrecht-custom-checkbox-color))}.utrecht-custom-checkbox__box--invalid{background-color:var(--utrecht-custom-checkbox-invalid-background-color, var(--utrecht-custom-checkbox-background-color));border-color:var(--utrecht-custom-checkbox-invalid-border-color, var(--utrecht-custom-checkbox-border-color));border-width:var(--utrecht-custom-checkbox-invalid-border-width, var(--utrecht-custom-checkbox-border-width));color:var(--utrecht-custom-checkbox-invalid-color, var(--utrecht-custom-checkbox-color))}.utrecht-custom-checkbox__box--active{background-color:var(--utrecht-custom-checkbox-active-background-color, var(--utrecht-custom-checkbox-background-color));border-color:var(--utrecht-custom-checkbox-active-border-color, var(--utrecht-custom-checkbox-border-color));border-width:var(--utrecht-custom-checkbox-active-border-width, var(--utrecht-custom-checkbox-border-width));color:var(--utrecht-custom-checkbox-active-color, var(--utrecht-custom-checkbox-color))}.utrecht-custom-checkbox__box--focus{background-color:var(--utrecht-custom-checkbox-focus-background-color, var(--utrecht-custom-checkbox-background-color));border-color:var(--utrecht-custom-checkbox-focus-border-color, var(--utrecht-custom-checkbox-border-color));border-width:var(--utrecht-custom-checkbox-focus-border-width, var(--utrecht-custom-checkbox-border-width));color:var(--utrecht-custom-checkbox-focus-color, var(--utrecht-custom-checkbox-color))}.utrecht-custom-checkbox__box--focus-visible{box-shadow:0 0 0 var(--utrecht-focus-box-shadow-spread-radius, 0) var(--utrecht-focus-box-shadow-color, transparent);outline-color:var(--utrecht-focus-outline-color, transparent);outline-offset:var(--utrecht-focus-outline-offset, 0);outline-style:var(--utrecht-focus-outline-style, solid);outline-width:var(--utrecht-focus-outline-width, 0)}.utrecht-custom-checkbox__input:indeterminate~.utrecht-custom-checkbox__box{color:var(--utrecht-custom-checkbox-indeterminate-color, var(--utrecht-custom-checkbox-color))}.utrecht-custom-checkbox__input:focus~.utrecht-custom-checkbox__box{background-color:var(--utrecht-custom-checkbox-focus-background-color, var(--utrecht-custom-checkbox-background-color));border-color:var(--utrecht-custom-checkbox-focus-border-color, var(--utrecht-custom-checkbox-border-color));border-width:var(--utrecht-custom-checkbox-focus-border-width, var(--utrecht-custom-checkbox-border-width));color:var(--utrecht-custom-checkbox-focus-color, var(--utrecht-custom-checkbox-color));box-shadow:0 0 0 var(--utrecht-focus-box-shadow-spread-radius, 0) var(--utrecht-focus-box-shadow-color, transparent);outline-color:var(--utrecht-focus-outline-color, transparent);outline-offset:var(--utrecht-focus-outline-offset, 0);outline-style:var(--utrecht-focus-outline-style, solid);outline-width:var(--utrecht-focus-outline-width, 0)}.utrecht-custom-checkbox__input:focus:not(:focus-visible)~.utrecht-custom-checkbox__box{box-shadow:none;outline-style:none}.utrecht-custom-checkbox__icon--checked,.utrecht-custom-checkbox__icon--indeterminate{display:none}.utrecht-custom-checkbox__box--checked .utrecht-custom-checkbox__icon--checked{display:block}.utrecht-custom-checkbox__box--indeterminate .utrecht-custom-checkbox__icon--indeterminate{display:block}:host{display:block}:host([hidden]){display:none !important}"}}]);