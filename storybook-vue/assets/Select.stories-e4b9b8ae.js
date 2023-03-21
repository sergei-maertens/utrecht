import{a as q}from"./chunk-NX5DM7EF-03d2d5c1.js";import{Y as l,c as e}from"./util-e186a036.js";import"./_commonjsHelpers-725317a4.js";import"./vue.esm-bundler-e07e3e6f.js";import"./index-2812c619.js";import"./chunk-PCJTTTQV-457a1bfc.js";import"./preload-helper-41c905a7.js";import"./chunk-Y5O7ZP4P-aaefc2f2.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./index-f78bb811.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-bf486984.js";import"./chunk-RDJSMFWU-fd275764.js";import"./index-d37d4223.js";import"./index-0c05a4b7.js";import"./isSymbol-1aea413c.js";import"./index-356e4a49.js";import"./chunk-R4NKYYJA-96bb58e6.js";const V=`<!-- @license CC0-1.0 -->

# Form Select component

## Terminology

- **select**: like the \`<select>\` element in HTML.

## Class names

- \`.utrecht-select\`
- \`.utrecht-select--disabled\`
- \`.utrecht-select--focus\`
- \`.utrecht-select--html-input\`
- \`.utrecht-select--invalid\`
- \`.utrecht-select--read-only\`
- \`.utrecht-select--required\`
`,O={select:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-bottom-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},invalid:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},D={utrecht:O},t={id:"vue-select",title:"Vue.js Component/Select",component:l,tags:["autodocs"],argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},modelValue:{name:"modelValue",table:{defaultValue:{summary:""}}},readonly:{name:"readonly",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}}},args:{},render:()=>({components:{Select:l},template:'<Select v-bind="$props" @update:modelValue="updateModelValue"><slot></slot></Select>',methods:{updateModelValue:q("updateModelValue")}}),parameters:{status:{type:"ALPHA"},tokens:D,tokenPrefix:"utrecht-select",docs:{description:{component:V}}}},n=e(t,{name:"Select",args:{options:[{value:"",label:"Select an option",disabled:!0},{value:1,label:"Option #1"},{value:2,label:"Option #2"},{value:3,label:"Option #3"},{value:4,label:"Option #4"}]}}),s=e(t,{name:"Disabled",args:{disabled:!0}}),r=e(t,{name:"Invalid",args:{invalid:!0}}),a=e(t,{name:"Read-only",args:{readonly:!0}}),o=e(t,{name:"Required",args:{required:!0}});var i,d,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`createStory(meta, {
  name: 'Select',
  args: {
    options: [{
      value: '',
      label: 'Select an option',
      disabled: true
    }, {
      value: 1,
      label: 'Option #1'
    }, {
      value: 2,
      label: 'Option #2'
    }, {
      value: 3,
      label: 'Option #3'
    }, {
      value: 4,
      label: 'Option #4'
    }]
  }
})`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`createStory(meta, {
  name: 'Disabled',
  args: {
    // ...Default.args,
    disabled: true
  }
})`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var y,g,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`createStory(meta, {
  name: 'Invalid',
  args: {
    // ...Default.args,
    invalid: true
  }
})`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,b,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`createStory(meta, {
  name: 'Read-only',
  args: {
    // ...Default.args,
    readonly: true
  }
})`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var $,v,S;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`createStory(meta, {
  name: 'Required',
  args: {
    // ...Default.args,
    required: true
  }
})`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const N=["Default","Disabled","Invalid","ReadOnly","Required"];export{n as Default,s as Disabled,r as Invalid,a as ReadOnly,o as Required,N as __namedExportsOrder,t as default};
//# sourceMappingURL=Select.stories-e4b9b8ae.js.map
