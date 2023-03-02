import"./chunk-3CDXZIO2-d7d958bf.js";import{a as m}from"./chunk-WLCP77WC-d18929a8.js";import{Y as l,c as e}from"./util-b1943c81.js";import"./_commonjsHelpers-725317a4.js";import"./vue.esm-bundler-3980e320.js";import"./index-2812c619.js";import"./chunk-MA2MUXQN-365c1a5a.js";import"./preload-helper-41c905a7.js";import"./index-62c31eed.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-90100987.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-e4b65a34.js";import"./chunk-XHUUYXNA-8149cd2a.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./index-d37d4223.js";import"./index-c1c45d79.js";import"./isSymbol-1aea413c.js";import"./chunk-R4NKYYJA-96bb58e6.js";const y=`<!-- @license CC0-1.0 -->

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
`,g={select:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-bottom-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},invalid:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},h={utrecht:g},t={id:"vue-select",title:"Vue.js Component/Select",component:l,tags:["autodocs"],argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},modelValue:{name:"modelValue",table:{defaultValue:{summary:""}}},readonly:{name:"readonly",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}}},args:{},render:()=>({components:{Select:l},template:'<Select v-bind="$props" @update:modelValue="updateModelValue"><slot></slot></Select>',methods:{updateModelValue:m("updateModelValue")}}),parameters:{status:{type:"ALPHA"},tokens:h,tokenPrefix:"utrecht-select",docs:{description:{component:y}}}},n=e(t,{name:"Select",args:{options:[{value:"",label:"Select an option",disabled:!0},{value:1,label:"Option #1"},{value:2,label:"Option #2"},{value:3,label:"Option #3"},{value:4,label:"Option #4"}]}}),s=e(t,{name:"Disabled",args:{disabled:!0}}),r=e(t,{name:"Invalid",args:{invalid:!0}}),o=e(t,{name:"Read-only",args:{readonly:!0}}),a=e(t,{name:"Required",args:{required:!0}});var i;n.parameters={...n.parameters,storySource:{source:`createStory(meta, {
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
})`,...(i=n.parameters)==null?void 0:i.storySource}};var d;s.parameters={...s.parameters,storySource:{source:`createStory(meta, {
  name: 'Disabled',
  args: {
    // ...Default.args,
    disabled: true
  }
})`,...(d=s.parameters)==null?void 0:d.storySource}};var c;r.parameters={...r.parameters,storySource:{source:`createStory(meta, {
  name: 'Invalid',
  args: {
    // ...Default.args,
    invalid: true
  }
})`,...(c=r.parameters)==null?void 0:c.storySource}};var u;o.parameters={...o.parameters,storySource:{source:`createStory(meta, {
  name: 'Read-only',
  args: {
    // ...Default.args,
    readonly: true
  }
})`,...(u=o.parameters)==null?void 0:u.storySource}};var p;a.parameters={...a.parameters,storySource:{source:`createStory(meta, {
  name: 'Required',
  args: {
    // ...Default.args,
    required: true
  }
})`,...(p=a.parameters)==null?void 0:p.storySource}};const Y=["Default","Disabled","Invalid","ReadOnly","Required"];export{n as Default,s as Disabled,r as Invalid,o as ReadOnly,a as Required,Y as __namedExportsOrder,t as default};
//# sourceMappingURL=Select.stories-232a065f.js.map
