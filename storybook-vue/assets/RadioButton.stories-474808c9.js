import"./chunk-3CDXZIO2-d7d958bf.js";import{a as l}from"./chunk-WLCP77WC-d18929a8.js";import{Q as i,c as e}from"./util-336a407e.js";import"./_commonjsHelpers-725317a4.js";import"./vue.esm-bundler-3980e320.js";import"./index-2812c619.js";import"./chunk-MA2MUXQN-66659f83.js";import"./preload-helper-41c905a7.js";import"./index-62c31eed.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-90100987.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-eb3dc4e7.js";import"./chunk-XHUUYXNA-8149cd2a.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./_getTag-e861206b.js";import"./_baseIsEqual-4d7f9b7e.js";import"./index-8f5d6c0d.js";import"./chunk-R4NKYYJA-96bb58e6.js";const p=`<!-- @license CC0-1.0 -->

# Radio button

## Terminologie

- **radio button**: "Radio button" heeft [een Wikipedia-lemma](https://en.wikipedia.org/wiki/Radio_button), [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) noemt het ook "radio button" en "radio group".
- **checked**: [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) en HTML noemen de staat van de radio button "checked", CSS heeft de \`:checked\` pseudo-class.

## Class names

- \`.utrecht-radio-button\`

## Design tokens

Nog geen design tokens.
`,c={"radio-button":{}},b={utrecht:c},a={id:"vue-radio-button",title:"Vue.js Component/Radio button",component:i,tags:["autodocs"],argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},modelValue:{name:"modelValue",type:{name:"string",required:!1}},value:{name:"value",type:{name:"string",required:!1}}},args:{},render:()=>({components:{RadioButton:i},template:'<RadioButton v-bind="$props" @update:modelValue="updateModelValue"></RadioButton>',methods:{updateModelValue:l("updateModelValue")}}),parameters:{status:{type:"ALPHA"},tokens:b,tokenPrefix:"utrecht-radio-button",docs:{description:{component:p}}}},t=e(a,{name:"RadioButton",args:{name:"example-radio-button"}}),o=e(a,{name:"Checked",args:{name:"example-radio-button",checked:!0,value:"optional value"}}),r=e(a,{name:"Disabled",args:{name:"example-radio-button",disabled:!0,value:"optional value"}}),n=e(a,{name:"Invalid",args:{name:"example-radio-button",invalid:!0,value:"optional value"}});var m;t.parameters={...t.parameters,storySource:{source:`createStory(meta, {
  name: 'RadioButton',
  args: {
    name: 'example-radio-button'
  }
})`,...(m=t.parameters)==null?void 0:m.storySource}};var s;o.parameters={...o.parameters,storySource:{source:`createStory(meta, {
  name: 'Checked',
  args: {
    name: 'example-radio-button',
    checked: true,
    value: 'optional value'
  }
})`,...(s=o.parameters)==null?void 0:s.storySource}};var u;r.parameters={...r.parameters,storySource:{source:`createStory(meta, {
  name: 'Disabled',
  args: {
    name: 'example-radio-button',
    disabled: true,
    value: 'optional value'
  }
})`,...(u=r.parameters)==null?void 0:u.storySource}};var d;n.parameters={...n.parameters,storySource:{source:`createStory(meta, {
  name: 'Invalid',
  args: {
    name: 'example-radio-button',
    invalid: true,
    value: 'optional value'
  }
})`,...(d=n.parameters)==null?void 0:d.storySource}};const H=["Default","Checked","Disabled","Invalid"];export{o as Checked,t as Default,r as Disabled,n as Invalid,H as __namedExportsOrder,a as default};
//# sourceMappingURL=RadioButton.stories-474808c9.js.map
