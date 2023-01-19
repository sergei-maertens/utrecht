import"./chunk-3CDXZIO2-d7d958bf.js";import{a as p}from"./chunk-WLCP77WC-d18929a8.js";import{X as l,c as e}from"./util-b9d5cebb.js";import"./_commonjsHelpers-725317a4.js";import"./vue.esm-bundler-3980e320.js";import"./index-2812c619.js";import"./chunk-MA2MUXQN-66659f83.js";import"./preload-helper-41c905a7.js";import"./index-62c31eed.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-90100987.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-eb3dc4e7.js";import"./chunk-XHUUYXNA-8149cd2a.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./_getTag-e861206b.js";import"./_baseIsEqual-4d7f9b7e.js";import"./index-8f5d6c0d.js";import"./chunk-R4NKYYJA-96bb58e6.js";const y=`<!-- @license CC0-1.0 -->

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
`,h={select:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-bottom-width":{css:{syntax:"<length>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},"border-radius":{css:{syntax:"<length-percentage>",inherits:!0}},"border-width":{css:{syntax:"<length>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}},"font-family":{css:{syntax:"*",inherits:!0}},"font-size":{css:{syntax:"<length>",inherits:!0}},"max-inline-size":{css:{syntax:"<length>",inherits:!0}},"padding-block-end":{css:{syntax:"<length>",inherits:!0}},"padding-block-start":{css:{syntax:"<length>",inherits:!0}},"padding-inline-end":{css:{syntax:"<length>",inherits:!0}},"padding-inline-start":{css:{syntax:"<length>",inherits:!0}},disabled:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}},focus:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}},invalid:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},"border-width":{css:{syntax:"<length>",inherits:!0}}}}},b={utrecht:h},t={id:"vue-select",title:"Vue.js Component/Select",component:l,tags:["autodocs"],argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},modelValue:{name:"modelValue",table:{defaultValue:{summary:""}}},readonly:{name:"readonly",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}}},args:{},render:()=>({components:{Select:l},template:'<Select v-bind="$props" @update:modelValue="updateModelValue"><slot></slot></Select>',methods:{updateModelValue:p("updateModelValue")}}),parameters:{status:{type:"ALPHA"},tokens:b,tokenPrefix:"utrecht-select",docs:{description:{component:y}}}},r=e(t,{name:"Select",args:{options:[{value:"",label:"Select an option",disabled:!0},{value:1,label:"Option #1"},{value:2,label:"Option #2"},{value:3,label:"Option #3"},{value:4,label:"Option #4"}]}}),a=e(t,{name:"Disabled",args:{disabled:!0}}),n=e(t,{name:"Invalid",args:{invalid:!0}}),s=e(t,{name:"Read-only",args:{readonly:!0}}),o=e(t,{name:"Required",args:{required:!0}});var i;r.parameters={...r.parameters,storySource:{source:`createStory(meta, {
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
})`,...(i=r.parameters)==null?void 0:i.storySource}};var c;a.parameters={...a.parameters,storySource:{source:`createStory(meta, {
  name: 'Disabled',
  args: {
    // ...Default.args,
    disabled: true
  }
})`,...(c=a.parameters)==null?void 0:c.storySource}};var u;n.parameters={...n.parameters,storySource:{source:`createStory(meta, {
  name: 'Invalid',
  args: {
    // ...Default.args,
    invalid: true
  }
})`,...(u=n.parameters)==null?void 0:u.storySource}};var d;s.parameters={...s.parameters,storySource:{source:`createStory(meta, {
  name: 'Read-only',
  args: {
    // ...Default.args,
    readonly: true
  }
})`,...(d=s.parameters)==null?void 0:d.storySource}};var m;o.parameters={...o.parameters,storySource:{source:`createStory(meta, {
  name: 'Required',
  args: {
    // ...Default.args,
    required: true
  }
})`,...(m=o.parameters)==null?void 0:m.storySource}};const _=["Default","Disabled","Invalid","ReadOnly","Required"];export{r as Default,a as Disabled,n as Invalid,s as ReadOnly,o as Required,_ as __namedExportsOrder,t as default};
//# sourceMappingURL=Select.stories-6a1358ae.js.map
