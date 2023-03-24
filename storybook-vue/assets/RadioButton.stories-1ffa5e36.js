import{a as $}from"./chunk-NX5DM7EF-03d2d5c1.js";import{X as a,c as r}from"./util-fbdbeb62.js";import"./_commonjsHelpers-725317a4.js";import"./vue.esm-bundler-e07e3e6f.js";import"./index-2812c619.js";import"./chunk-PCJTTTQV-457a1bfc.js";import"./preload-helper-41c905a7.js";import"./chunk-Y5O7ZP4P-aaefc2f2.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./index-f78bb811.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-bf486984.js";import"./chunk-RDJSMFWU-fd275764.js";import"./index-d37d4223.js";import"./index-0c05a4b7.js";import"./isSymbol-1aea413c.js";import"./index-356e4a49.js";import"./chunk-R4NKYYJA-96bb58e6.js";const v=`<!-- @license CC0-1.0 -->

# Radio button

## Terminologie

- **radio button**: "Radio button" heeft [een Wikipedia-lemma](https://en.wikipedia.org/wiki/Radio_button), [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) noemt het ook "radio button" en "radio group".
- **checked**: [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) en HTML noemen de staat van de radio button "checked", CSS heeft de \`:checked\` pseudo-class.

## Class names

- \`.utrecht-radio-button\`
`,k={"radio-button":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},active:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},checked:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},hover:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},disabled:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},invalid:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}},f={utrecht:k},o={id:"vue-radio-button",title:"Vue.js Component/Radio button",component:a,tags:["autodocs"],argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},modelValue:{name:"modelValue",type:{name:"string",required:!1}},value:{name:"value",type:{name:"string",required:!1}}},args:{},render:()=>({components:{RadioButton:a},template:'<RadioButton v-bind="$props" @update:modelValue="updateModelValue"></RadioButton>',methods:{updateModelValue:$("updateModelValue")}}),parameters:{status:{type:"ALPHA"},tokens:f,tokenPrefix:"utrecht-radio-button",docs:{description:{component:v}}}},e=r(o,{name:"RadioButton",args:{name:"example-radio-button"}}),t=r(o,{name:"Checked",args:{name:"example-radio-button",checked:!0,value:"optional value"}}),s=r(o,{name:"Disabled",args:{name:"example-radio-button",disabled:!0,value:"optional value"}}),n=r(o,{name:"Invalid",args:{name:"example-radio-button",invalid:!0,value:"optional value"}});var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`createStory(meta, {
  name: 'RadioButton',
  args: {
    name: 'example-radio-button'
  }
})`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`createStory(meta, {
  name: 'Checked',
  args: {
    name: 'example-radio-button',
    checked: true,
    value: 'optional value'
  }
})`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,y,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`createStory(meta, {
  name: 'Disabled',
  args: {
    name: 'example-radio-button',
    disabled: true,
    value: 'optional value'
  }
})`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var g,x,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`createStory(meta, {
  name: 'Invalid',
  args: {
    name: 'example-radio-button',
    invalid: true,
    value: 'optional value'
  }
})`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const O=["Default","Checked","Disabled","Invalid"];export{t as Checked,e as Default,s as Disabled,n as Invalid,O as __namedExportsOrder,o as default};
//# sourceMappingURL=RadioButton.stories-1ffa5e36.js.map
