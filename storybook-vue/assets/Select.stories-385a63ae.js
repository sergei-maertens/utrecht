import{a as q}from"./chunk-OPEUWD42-c1bb4ef7.js";import{J as l}from"./component-library-vue-73eab3d3.js";import{c as e}from"./util-3e2346ca.js";import"./vue.esm-bundler-c077df82.js";import"./chunk-PCJTTTQV-3f2f1609.js";import"./iframe-a5558eae.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-468e166b.js";import"./index-356e4a49.js";import"./chunk-R4NKYYJA-96bb58e6.js";const V=`<!-- @license CC0-1.0 -->

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
`,O={select:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-bottom-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},invalid:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},D={utrecht:O},n={id:"vue-select",title:"Vue.js Component/Select",component:l,tags:["autodocs"],argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},modelValue:{name:"modelValue",table:{defaultValue:{summary:""}}},readonly:{name:"readonly",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}}},args:{},render:()=>({components:{Select:l},template:'<Select v-bind="$props" @update:modelValue="updateModelValue"><slot></slot></Select>',methods:{updateModelValue:q("updateModelValue")}}),parameters:{status:{type:"ALPHA"},tokens:D,tokenPrefix:"utrecht-select",docs:{description:{component:V}}}},s=e(n,{name:"Select",args:{options:[{value:"",label:"Select an option",disabled:!0},{value:1,label:"Option #1"},{value:2,label:"Option #2"},{value:3,label:"Option #3"},{value:4,label:"Option #4"}]}}),t=e(n,{name:"Disabled",args:{disabled:!0}}),r=e(n,{name:"Invalid",args:{invalid:!0}}),a=e(n,{name:"Read-only",args:{readonly:!0}}),o=e(n,{name:"Required",args:{required:!0}});var i,d,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`createStory(meta, {
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
})`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,p,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`createStory(meta, {
  name: 'Disabled',
  args: {
    // ...Default.args,
    disabled: true
  }
})`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var y,g,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`createStory(meta, {
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
})`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const _=["Default","Disabled","Invalid","ReadOnly","Required"];export{s as Default,t as Disabled,r as Invalid,a as ReadOnly,o as Required,_ as __namedExportsOrder,n as default};
//# sourceMappingURL=Select.stories-385a63ae.js.map
