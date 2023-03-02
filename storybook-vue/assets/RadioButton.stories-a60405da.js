import"./chunk-3CDXZIO2-d7d958bf.js";import{a as u}from"./chunk-WLCP77WC-d18929a8.js";import{X as a,c as e}from"./util-b1943c81.js";import"./_commonjsHelpers-725317a4.js";import"./vue.esm-bundler-3980e320.js";import"./index-2812c619.js";import"./chunk-MA2MUXQN-365c1a5a.js";import"./preload-helper-41c905a7.js";import"./index-62c31eed.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-90100987.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-e4b65a34.js";import"./chunk-XHUUYXNA-8149cd2a.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./index-d37d4223.js";import"./index-c1c45d79.js";import"./isSymbol-1aea413c.js";import"./chunk-R4NKYYJA-96bb58e6.js";const p=`<!-- @license CC0-1.0 -->

# Radio button

## Terminologie

- **radio button**: "Radio button" heeft [een Wikipedia-lemma](https://en.wikipedia.org/wiki/Radio_button), [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) noemt het ook "radio button" en "radio group".
- **checked**: [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) en HTML noemen de staat van de radio button "checked", CSS heeft de \`:checked\` pseudo-class.

## Class names

- \`.utrecht-radio-button\`
`,m={"radio-button":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},active:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},checked:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},hover:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},disabled:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},invalid:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}},y={utrecht:m},t={id:"vue-radio-button",title:"Vue.js Component/Radio button",component:a,tags:["autodocs"],argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},modelValue:{name:"modelValue",type:{name:"string",required:!1}},value:{name:"value",type:{name:"string",required:!1}}},args:{},render:()=>({components:{RadioButton:a},template:'<RadioButton v-bind="$props" @update:modelValue="updateModelValue"></RadioButton>',methods:{updateModelValue:u("updateModelValue")}}),parameters:{status:{type:"ALPHA"},tokens:y,tokenPrefix:"utrecht-radio-button",docs:{description:{component:p}}}},n=e(t,{name:"RadioButton",args:{name:"example-radio-button"}}),s=e(t,{name:"Checked",args:{name:"example-radio-button",checked:!0,value:"optional value"}}),r=e(t,{name:"Disabled",args:{name:"example-radio-button",disabled:!0,value:"optional value"}}),o=e(t,{name:"Invalid",args:{name:"example-radio-button",invalid:!0,value:"optional value"}});var i;n.parameters={...n.parameters,storySource:{source:`createStory(meta, {
  name: 'RadioButton',
  args: {
    name: 'example-radio-button'
  }
})`,...(i=n.parameters)==null?void 0:i.storySource}};var l;s.parameters={...s.parameters,storySource:{source:`createStory(meta, {
  name: 'Checked',
  args: {
    name: 'example-radio-button',
    checked: true,
    value: 'optional value'
  }
})`,...(l=s.parameters)==null?void 0:l.storySource}};var d;r.parameters={...r.parameters,storySource:{source:`createStory(meta, {
  name: 'Disabled',
  args: {
    name: 'example-radio-button',
    disabled: true,
    value: 'optional value'
  }
})`,...(d=r.parameters)==null?void 0:d.storySource}};var c;o.parameters={...o.parameters,storySource:{source:`createStory(meta, {
  name: 'Invalid',
  args: {
    name: 'example-radio-button',
    invalid: true,
    value: 'optional value'
  }
})`,...(c=o.parameters)==null?void 0:c.storySource}};const _=["Default","Checked","Disabled","Invalid"];export{s as Checked,n as Default,r as Disabled,o as Invalid,_ as __namedExportsOrder,t as default};
//# sourceMappingURL=RadioButton.stories-a60405da.js.map
