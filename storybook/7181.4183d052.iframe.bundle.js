/*! For license information please see 7181.4183d052.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[7181],{"../../components/checkbox/css/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PG:()=>argTypes,XZ:()=>Checkbox,_O:()=>defaultArgs});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const argTypes={checked:{description:"Checked",control:"boolean",table:{category:"HTML attribute",defaultValue:{summary:!1}}},disabled:{description:"Disabled",control:"boolean",table:{category:"HTML attribute",defaultValue:{summary:!1}}},id:{description:"ID",control:"text",table:{category:"HTML attribute",defaultValue:{summary:""}}},indeterminate:{name:"indeterminate",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},name:{description:"Name",control:"text",table:{category:"HTML attribute",defaultValue:{summary:""}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1},category:"HTML attribute"}},value:{description:"Value",control:"text",table:{category:"HTML attribute",defaultValue:{summary:""}}}},defaultArgs={checked:!1,disabled:!1,id:"",indeterminate:!1,invalid:!1,name:"",required:!1,value:""},Checkbox=({checked=defaultArgs.checked,className,custom=!1,disabled=defaultArgs.disabled,id=defaultArgs.id,indeterminate=defaultArgs.indeterminate,invalid=defaultArgs.invalid,name=defaultArgs.name,required=defaultArgs.required,value=defaultArgs.value,...restProps})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{"aria-invalid":invalid||void 0,className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("utrecht-checkbox","utrecht-checkbox--html-input",custom&&"utrecht-checkbox--custom",checked&&"utrecht-checkbox--checked",disabled&&"utrecht-checkbox--disabled",className),defaultChecked:checked,disabled,id:id||void 0,indeterminate:!!indeterminate,name:name||void 0,required:!!required,type:"checkbox",value:value||void 0,...restProps});Checkbox.displayName="Checkbox"},"../../components/form-field-description/css/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ue:()=>FormFieldDescription});var clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),html_react_parser__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/html-react-parser@3.0.16_react@18.2.0/node_modules/html-react-parser/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const defaultArgs_id=null,defaultArgs_innerHTML="",defaultArgs_status="",defaultArgs_distanced=!1,FormFieldDescription=({id=defaultArgs_id,innerHTML=defaultArgs_innerHTML,status=defaultArgs_status,distanced=defaultArgs_distanced,className,children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{id,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("utrecht-form-field-description",distanced&&"utrecht-form-field-description--distanced","invalid"===status&&"utrecht-form-field-description--invalid","valid"===status&&"utrecht-form-field-description--valid","warning"===status&&"utrecht-form-field-description--warning",className),children:[children,(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(innerHTML)]});FormFieldDescription.displayName="FormFieldDescription"},"../../components/form-field/css/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{sP:()=>FormFieldCheckbox,at:()=>FormFieldCheckboxGroup,h4:()=>FormFieldExample,Po:()=>FormFieldRadioGroup,Rj:()=>FormFieldTextbox,KV:()=>arabicDecorator,PG:()=>form_field_css_story_template_argTypes,_O:()=>form_field_css_story_template_defaultArgs,sS:()=>form_field_css_story_template_exampleArgs});var clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),story_template=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../components/checkbox/css/story-template.jsx")),css_story_template=__webpack_require__("../../components/form-field-description/css/story-template.jsx"),html_react_parser=__webpack_require__("../../node_modules/.pnpm/html-react-parser@3.0.16_react@18.2.0/node_modules/html-react-parser/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const defaultArgs_div=!1,defaultArgs_innerHTML="",defaultArgs_invalid=!1,defaultArgs_legend="",defaultArgs_role="",defaultArgs_section=!1,FormFieldsetLegend=({children,disabled=!1,div=defaultArgs_div,id})=>div?(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("utrecht-form-fieldset__legend",{"utrecht-form-fieldset__legend--disabled":disabled}),id,children}):(0,jsx_runtime.jsx)("legend",{className:(0,clsx_m.Z)("utrecht-form-fieldset__legend","utrecht-form-fieldset__legend--html-legend",{"utrecht-form-fieldset__legend--disabled":disabled}),children}),FormFieldset=({className,children,disabled=!1,div=defaultArgs_div,id,innerHTML=defaultArgs_innerHTML,invalid=defaultArgs_invalid,legend=defaultArgs_legend,role=defaultArgs_role,section=defaultArgs_section,...restProps})=>{const labelId=id&&`${id}-legend`,content=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[legend&&(0,jsx_runtime.jsx)(FormFieldsetLegend,{div,id:labelId,children:legend}),children,(0,html_react_parser.ZP)(innerHTML)]});return div?(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("utrecht-form-fieldset",{"utrecht-form-fieldset--invalid":invalid,"utrecht-form-fieldset--section":section,className}),"aria-disabled":disabled?"true":void 0,"aria-invalid":invalid?"true":void 0,role:role||"group","aria-labelledby":labelId,...restProps,children:content}):(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("utrecht-form-fieldset",{"utrecht-form-fieldset--invalid":invalid,"utrecht-form-fieldset--section":section,className}),children:(0,jsx_runtime.jsx)("fieldset",{className:(0,clsx_m.Z)("utrecht-form-fieldset__fieldset","utrecht-form-fieldset__fieldset--html-fieldset"),"aria-invalid":invalid?"true":void 0,disabled,role:role||void 0,...restProps,children:content})})},story_template_defaultArgs_checked=!1,story_template_defaultArgs_disabled=!1,story_template_defaultArgs_textContent="",story_template_defaultArgs_type=null,FormLabel=({checked=story_template_defaultArgs_checked,disabled=story_template_defaultArgs_disabled,textContent=story_template_defaultArgs_textContent,type=story_template_defaultArgs_type,className,children,...restProps})=>(0,jsx_runtime.jsxs)("label",{...restProps,className:(0,clsx_m.Z)("utrecht-form-label","checkbox"===type&&"utrecht-form-label--checkbox",checked&&"utrecht-form-label--checked",disabled&&"utrecht-form-label--disabled","radio"===type&&"utrecht-form-label--radio",className),children:[textContent,children]});FormLabel.displayName="FormLabel";const css_story_template_defaultArgs_textContent="",css_story_template_defaultArgs_distanced=!1,Heading1=({children,textContent=css_story_template_defaultArgs_textContent,distanced=css_story_template_defaultArgs_distanced,...restProps})=>(0,jsx_runtime.jsxs)("h1",{className:(0,clsx_m.Z)("utrecht-heading-1",{"utrecht-heading-1--distanced":distanced}),...restProps,children:[children,textContent]});Heading1.displayName="Heading1";const heading_2_css_story_template_defaultArgs_textContent="",heading_2_css_story_template_defaultArgs_distanced=!1,Heading2=({children,textContent=heading_2_css_story_template_defaultArgs_textContent,distanced=heading_2_css_story_template_defaultArgs_distanced,...restProps})=>(0,jsx_runtime.jsxs)("h2",{className:(0,clsx_m.Z)("utrecht-heading-2",{"utrecht-heading-2--distanced":distanced}),...restProps,children:[children,textContent]});Heading2.displayName="Heading2";const heading_3_css_story_template_defaultArgs_textContent="",heading_3_css_story_template_defaultArgs_distanced=!1,Heading3=({children,textContent=heading_3_css_story_template_defaultArgs_textContent,distanced=heading_3_css_story_template_defaultArgs_distanced,...restProps})=>(0,jsx_runtime.jsxs)("h3",{className:(0,clsx_m.Z)("utrecht-heading-3",{"utrecht-heading-3--distanced":distanced}),...restProps,children:[children,textContent]});Heading3.displayName="Heading3";const heading_4_css_story_template_defaultArgs_textContent="",heading_4_css_story_template_defaultArgs_distanced=!1,Heading4=({children,textContent=heading_4_css_story_template_defaultArgs_textContent,distanced=heading_4_css_story_template_defaultArgs_distanced,...restProps})=>(0,jsx_runtime.jsxs)("h4",{className:(0,clsx_m.Z)("utrecht-heading-4",{"utrecht-heading-4--distanced":distanced}),...restProps,children:[children,textContent]});Heading4.displayName="Heading4";const heading_5_css_story_template_defaultArgs_textContent="",heading_5_css_story_template_defaultArgs_distanced=!1,Heading5=({children,textContent=heading_5_css_story_template_defaultArgs_textContent,distanced=heading_5_css_story_template_defaultArgs_distanced,...restProps})=>(0,jsx_runtime.jsxs)("h5",{className:(0,clsx_m.Z)("utrecht-heading-5",{"utrecht-heading-5--distanced":distanced}),...restProps,children:[children,textContent]});Heading5.displayName="Heading5";const heading_6_css_story_template_defaultArgs_textContent="",heading_6_css_story_template_defaultArgs_distanced=!1,Heading6=({children,textContent=heading_6_css_story_template_defaultArgs_textContent,distanced=heading_6_css_story_template_defaultArgs_distanced,...restProps})=>(0,jsx_runtime.jsxs)("h6",{className:(0,clsx_m.Z)("utrecht-heading-6",{"utrecht-heading-6--distanced":distanced}),...restProps,children:[children,textContent]});Heading6.displayName="Heading6";const radio_button_css_story_template_defaultArgs={checked:!1,disabled:!1,active:!1,hover:!1,focus:!1,invalid:!1,name:"",id:""},RadioButton=({checked=radio_button_css_story_template_defaultArgs.checked,disabled=radio_button_css_story_template_defaultArgs.disabled,active=radio_button_css_story_template_defaultArgs.active,hover=radio_button_css_story_template_defaultArgs.hover,focus=radio_button_css_story_template_defaultArgs.focus,focusVisible=radio_button_css_story_template_defaultArgs.focusVisible,invalid=radio_button_css_story_template_defaultArgs.invalid,name=radio_button_css_story_template_defaultArgs.name,id=radio_button_css_story_template_defaultArgs.id})=>(0,jsx_runtime.jsx)("input",{type:"radio",defaultChecked:checked||null,disabled:disabled||null,className:(0,clsx_m.Z)("utrecht-radio-button","utrecht-radio-button--html-input",checked&&"utrecht-radio-button--checked",disabled&&"utrecht-radio-button--disabled",active&&"utrecht-radio-button--active",hover&&"utrecht-radio-button--hover",focus&&"utrecht-radio-button--focus",focusVisible&&"utrecht-radio-button--focus-visible",invalid&&"utrecht-radio-button--invalid"),name:name||void 0,id:id||void 0});RadioButton.displayName="RadioButton";var textarea_css_story_template=__webpack_require__("../../components/textarea/css/story-template.jsx");const textbox_css_story_template_defaultArgs={autoComplete:"",dir:"auto",disabled:!1,focus:!1,invalid:!1,readOnly:!1,required:!1,placeholder:"",spellcheck:null,type:"",value:"",minLength:0},Textbox=({autoComplete=textbox_css_story_template_defaultArgs.autoComplete,dir=textbox_css_story_template_defaultArgs.dir,disabled=textbox_css_story_template_defaultArgs.disabled,focus=textbox_css_story_template_defaultArgs.focus,invalid=textbox_css_story_template_defaultArgs.invalid,placeholder=textbox_css_story_template_defaultArgs.placeholder,placeholderDir=textbox_css_story_template_defaultArgs.placeholderDir,readOnly=textbox_css_story_template_defaultArgs.readOnly,required=textbox_css_story_template_defaultArgs.required,spellcheck=textbox_css_story_template_defaultArgs.spellcheck,type=textbox_css_story_template_defaultArgs.type,value=textbox_css_story_template_defaultArgs.value,minLength=textbox_css_story_template_defaultArgs.minLength,className,...restProps})=>(0,jsx_runtime.jsx)("input",{...restProps,className:(0,clsx_m.Z)("utrecht-textbox","utrecht-textbox--html-input",disabled&&"utrecht-textbox--disabled",focus&&"utrecht-textbox--focus utrecht-textbox--focus-visible",invalid&&"utrecht-textbox--invalid",readOnly&&"utrecht-textbox--readonly",required&&"utrecht-textbox--required","ltr"===placeholderDir&&"utrecht-textbox--placeholder-ltr","rtl"===placeholderDir&&"utrecht-textbox--placeholder-rtl",className),minLength:!minLength||1===minLength&&required?void 0:minLength,autoComplete:autoComplete||null,disabled:disabled||null,"aria-invalid":invalid||null,dir:dir||null,placeholder:placeholder||null,readOnly:readOnly||null,required:required||null,spellCheck:spellcheck||null,type:type||null,defaultValue:value||null});Textbox.displayName="Textbox";const form_field_css_story_template_argTypes={invalid:{description:"Invalid",control:"boolean"},label:{description:"Set the content of the label",control:"text"},headingLevel:{description:"Heading level",control:{type:"select"},options:["","1","2","3","4","5","6"]},type:{description:"Type",control:{type:"select"},options:["","checkbox","radio","text"]}},form_field_css_story_template_defaultArgs={invalid:!1,label:"",headingLevel:"",type:""},form_field_css_story_template_exampleArgs={name:"subject",label:"Onderwerp"},Heading=({children,level})=>{const HeadingComponent=1===level?Heading1:2===level?Heading2:3===level?Heading3:4===level?Heading4:5===level?Heading5:6===level?Heading6:Heading1;return(0,jsx_runtime.jsx)(HeadingComponent,{children})};Heading.displayName="Heading";const FormField=({children,id,invalid,type})=>(0,jsx_runtime.jsx)("div",{id,className:(0,clsx_m.Z)("utrecht-form-field",{"utrecht-form-field--invalid":invalid,"utrecht-form-field--checkbox":"checkbox"===type,"utrecht-form-field--radio":"radio"===type,"utrecht-form-field--text":!type||"text"===type}),children});FormField.displayName="FormField";const FormFieldTextbox=({id=form_field_css_story_template_defaultArgs.id,name=form_field_css_story_template_defaultArgs.name,label=form_field_css_story_template_defaultArgs.label,value=form_field_css_story_template_defaultArgs.value,description=form_field_css_story_template_defaultArgs.description,invalid=form_field_css_story_template_defaultArgs.invalid,invalidDescription=form_field_css_story_template_defaultArgs.invalidDescription,headingLevel=null,FormComponent=Textbox,autoComplete,inputMode,dir,placeholder,placeholderDir,type})=>{const descriptionId=description?`${id}-description`:null,invalidDescriptionId=invalidDescription?`${id}-invalid-description`:null;return(0,jsx_runtime.jsxs)(FormField,{invalid,type:"textbox",children:[headingLevel?(0,jsx_runtime.jsx)(Heading,{level:headingLevel,className:"utrecht-form-field__label",htmlFor:id,children:(0,jsx_runtime.jsx)(FormLabel,{htmlFor:id,children:label})}):(0,jsx_runtime.jsx)(FormLabel,{className:"utrecht-form-field__label",htmlFor:id,children:label}),description?(0,jsx_runtime.jsx)(css_story_template.ue,{id:descriptionId,className:"utrecht-form-field__description",children:description}):void 0,invalidDescription?(0,jsx_runtime.jsx)(css_story_template.ue,{id:invalidDescriptionId,status:"invalid",className:"utrecht-form-field__description",children:invalidDescription}):void 0,(0,jsx_runtime.jsx)(FormComponent,{className:"utrecht-form-field__input",id,value,name,autoComplete,type,inputMode,dir,placeholder,placeholderDir,"aria-describedby":[descriptionId,invalidDescriptionId].filter(Boolean).join(" ")||null})]})};FormFieldTextbox.displayName="FormFieldTextbox";const FormFieldCheckbox=({id=form_field_css_story_template_defaultArgs.id,invalid=form_field_css_story_template_defaultArgs.invalid,name=form_field_css_story_template_defaultArgs.name,label=form_field_css_story_template_defaultArgs.label,required=form_field_css_story_template_defaultArgs.required,value=form_field_css_story_template_defaultArgs.value,description=form_field_css_story_template_defaultArgs.description,implicitLabel=!0,invalidDescription=form_field_css_story_template_defaultArgs.invalidDescription})=>{const descriptionId=description?`${id}-description`:null,invalidDescriptionId=invalidDescription?`${id}-invalid-description`:null,checkbox=(0,jsx_runtime.jsx)(story_template.XZ,{"aria-describedby":[descriptionId,invalidDescriptionId].filter(Boolean).join(" ")||null,className:"utrecht-form-field__input",custom:!0,id,invalid,required,name,value});return(0,jsx_runtime.jsxs)(FormField,{invalid,type:"checkbox",children:[(0,jsx_runtime.jsx)("p",{className:"utrecht-form-field__label utrecht-form-field__label--checkbox",children:(0,jsx_runtime.jsxs)(FormLabel,{type:"checkbox",htmlFor:id,children:[implicitLabel&&checkbox,label]})}),description?(0,jsx_runtime.jsx)(css_story_template.ue,{id:descriptionId,className:"utrecht-form-field__description",children:description}):void 0,invalidDescription?(0,jsx_runtime.jsx)(css_story_template.ue,{id:invalidDescriptionId,status:"invalid",className:"utrecht-form-field__description",children:invalidDescription}):void 0,!implicitLabel&&checkbox]})};FormFieldCheckbox.displayName="FormFieldCheckbox";const FormFieldCheckboxGroup=({groupId,groupLabel,groupDescription,groupInvalidDescription=form_field_css_story_template_defaultArgs.invalidDescription,groupName,invalid=form_field_css_story_template_defaultArgs.invalid,implicitLabel=!0,options=[],headingLevel})=>{const groupDescriptionId=groupId&&groupDescription?`${groupId}-description`:null,groupInvalidDescriptionId=groupInvalidDescription?`${groupId}-invalid-description`:null,groupDescribedByIds=[groupDescriptionId,groupInvalidDescriptionId].filter(Boolean).join(" ");return(0,jsx_runtime.jsxs)(FormFieldset,{id:groupId,"aria-describedby":groupDescribedByIds,invalid,children:[(0,jsx_runtime.jsx)(FormFieldsetLegend,{children:headingLevel?(0,jsx_runtime.jsx)(Heading,{level:headingLevel,children:groupLabel}):groupLabel}),groupDescriptionId?(0,jsx_runtime.jsx)(css_story_template.ue,{id:groupDescriptionId,children:groupDescription}):void 0,groupInvalidDescriptionId?(0,jsx_runtime.jsx)(css_story_template.ue,{id:groupInvalidDescriptionId,status:"invalid",children:groupInvalidDescription}):void 0,options.map((({description,checked,id,invalid,invalidDescription,label,name,value})=>{const descriptionId=`${id}-description`,invalidDescriptionId=invalid?`${id}-invalid-description`:null,checkbox=(0,jsx_runtime.jsx)(story_template.XZ,{className:"utrecht-form-field__input",id,value,name:name||groupName,defaultChecked:checked,custom:!0,"aria-describedby":[descriptionId,invalidDescriptionId].filter(Boolean).join(" ")||null});return(0,jsx_runtime.jsxs)(FormField,{invalid,type:"checkbox",children:[(0,jsx_runtime.jsx)("p",{className:"utrecht-form-field__label utrecht-form-field__label--checkbox",children:(0,jsx_runtime.jsxs)(FormLabel,{type:"checkbox",htmlFor:id,children:[implicitLabel&&checkbox,label]})}),description?(0,jsx_runtime.jsx)(css_story_template.ue,{id:descriptionId,className:"utrecht-form-field__description",children:description}):void 0,invalidDescription?(0,jsx_runtime.jsx)(css_story_template.ue,{id:invalidDescriptionId,status:"invalid",className:"utrecht-form-field__description",children:invalidDescription}):void 0,!implicitLabel&&checkbox]},id)}))]})};FormFieldCheckboxGroup.displayName="FormFieldCheckboxGroup";const FormFieldRadioGroup=({name=form_field_css_story_template_defaultArgs.name,groupId=form_field_css_story_template_defaultArgs.id,groupLabel,groupDescription,invalid=form_field_css_story_template_defaultArgs.invalid,groupInvalidDescription,implicitLabel=!0,options,headingLevel})=>{const groupDescriptionId=groupDescription?`${groupId}-description`:null,groupInvalidDescriptionId=groupInvalidDescription?`${groupId}-invalid-description`:null,groupDescribedByIds=[groupDescriptionId,groupInvalidDescriptionId].filter(Boolean),groupDescribedBy=groupDescribedByIds.length?groupDescribedByIds.join(" "):void 0;return(0,jsx_runtime.jsxs)(FormFieldset,{role:"radiogroup",id:groupId,"aria-describedby":groupDescribedBy,invalid,children:[(0,jsx_runtime.jsx)(FormFieldsetLegend,{children:headingLevel?(0,jsx_runtime.jsx)(Heading,{level:headingLevel,children:groupLabel}):groupLabel}),groupDescription?(0,jsx_runtime.jsx)(css_story_template.ue,{id:groupDescriptionId,children:groupDescription}):void 0,groupInvalidDescription?(0,jsx_runtime.jsx)(css_story_template.ue,{status:"invalid",id:groupInvalidDescriptionId,children:groupInvalidDescription}):void 0,options.map((({id,label,description,invalidDescription,value})=>{const descriptionId=description?`${id}-description`:null,invalidDescriptionId=invalidDescription?`${id}-invalid-description`:null,input=(0,jsx_runtime.jsx)(RadioButton,{className:"utrecht-form-field__input",id,value,name,custom:!0,"aria-describedby":[descriptionId,invalidDescriptionId].filter(Boolean).join(" ")||null});return(0,jsx_runtime.jsxs)(FormField,{type:"radio",children:[(0,jsx_runtime.jsx)("p",{className:"utrecht-form-field__label utrecht-form-field__label--radio",children:(0,jsx_runtime.jsxs)(FormLabel,{type:"radio",htmlFor:id,children:[implicitLabel&&input,label]})}),description?(0,jsx_runtime.jsx)(css_story_template.ue,{id:descriptionId,className:"utrecht-form-field__description",children:description}):void 0,invalidDescription?(0,jsx_runtime.jsx)(css_story_template.ue,{id:invalidDescriptionId,status:"invalid",className:"utrecht-form-field__description",children:invalidDescription}):void 0,!implicitLabel&&input]},id)}))]})};FormFieldRadioGroup.displayName="FormFieldRadioGroup";const FormFieldExample=({control,...restProps})=>{if("text"===control||"textarea"===control){let component="textarea"===control?textarea_css_story_template.gx:Textbox;return FormFieldTextbox({...restProps,component})}return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})},arabicDecorator=Story=>(0,jsx_runtime.jsx)("div",{dir:"rtl",lang:"ar",children:Story()});arabicDecorator.displayName="arabicDecorator"},"../../components/textarea/css/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gx:()=>Textarea});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const defaultArgs_disabled=!1,defaultArgs_focus=!1,defaultArgs_hover=!1,defaultArgs_invalid=!1,defaultArgs_placeholder="",defaultArgs_readOnly=!1,defaultArgs_required=!1,defaultArgs_spellcheck="",defaultArgs_textContent="",Textarea=({dir=defaultArgs_disabled,disabled=defaultArgs_disabled,focus=defaultArgs_focus,hover=defaultArgs_hover,invalid=defaultArgs_invalid,placeholder=defaultArgs_placeholder,readOnly=defaultArgs_readOnly,required=defaultArgs_required,spellcheck=defaultArgs_spellcheck,textContent=defaultArgs_textContent})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("utrecht-textarea","utrecht-textarea--html-textarea",disabled&&"utrecht-textarea--disabled",focus&&"utrecht-textarea--focus utrecht-textarea--focus-visible",hover&&"utrecht-textarea--hover",invalid&&"utrecht-textarea--invalid",readOnly&&"utrecht-textarea--readonly",required&&"utrecht-textarea--required"),defaultValue:textContent,dir:dir||null,disabled:disabled||null,"aria-invalid":invalid||null,placeholder:placeholder||null,readOnly:readOnly||null,spellcheck:spellcheck||null,required:required||null});Textarea.displayName="Textarea"}}]);