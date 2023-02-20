import{j as b,c as e}from"./util-76d20c49.js";import"./vue.esm-bundler-3980e320.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-MA2MUXQN-365c1a5a.js";import"./preload-helper-41c905a7.js";import"./index-62c31eed.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-90100987.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-e4b65a34.js";import"./chunk-XHUUYXNA-8149cd2a.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./index-d37d4223.js";import"./index-c1c45d79.js";import"./isSymbol-1aea413c.js";import"./chunk-R4NKYYJA-96bb58e6.js";const f=`<!-- @license CC0-1.0 -->

# Form label

## Design

Het label moet aanklikbaar zijn om de _form input_ te activeren. Gebruik \`display: inline\` voor het label, zodat de tekst aanklikbaar is. Je wilt dat de witruimte naast de tekst niet aanklikbaar is, omdat niet duidelijk is welke actie hoort bij de witruimte.

Als je het label wilt gebruiken als onderdeel van \`display: grid\` of \`display: flex\`, gebruik dan een extra _\`<div>\` wrapper element_ om het label heen, om te voorkomen dat de label heel groot wordt.

## Terminologie

- **label**: net als \`<label>\` in HTML

## Class names

- \`utrecht-form-label\`

## Design tokens

- Form label
  - \`utrecht-form-label-font-weight\`
  - \`utrecht-form-label-font-size\`

## Relevante WCAG regels

- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de tekst van het label moet duidelijk zijn
`,h={"form-label":{color:{css:{syntax:"<color>",inherits:!0}},"font-weight":{css:{syntax:"<number>",inherits:!0}},"font-size":{css:{syntax:"<length>",inherits:!0}},checkbox:{color:{css:{syntax:"<color>",inherits:!0}},"font-weight":{css:{syntax:"<number>",inherits:!0}}},checked:{"font-weight":{css:{syntax:"<number>",inherits:!0}}},disabled:{color:{css:{syntax:"<color>",inherits:!0}}},radio:{color:{css:{syntax:"<color>",inherits:!0}},"font-weight":{css:{syntax:"<number>",inherits:!0}}}}},y={utrecht:h},t={id:"vue-form-label",title:"Vue.js Component/Form label",component:b,tags:["autodocs"],argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},for:{name:"for",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}},type:{name:"type",control:{type:"select"},options:["","checkbox","radio"],type:{required:!1},table:{defaultValue:{summary:""}}}},args:{},parameters:{status:{type:"ALPHA"},tokens:y,tokenPrefix:"utrecht-form-label",docs:{description:{component:f},source:{code:'<UtrechtFormLabel v-bind="$props"><slot></slot></UtrechtFormLabel>'}}}},r=e(t,{name:"Form label",args:{for:"idref",textContent:"Lorem ipsum"}}),o=e(t,{name:"Disabled",args:{disabled:!0,for:"idref",textContent:"Lorem ipsum"}}),a=e(t,{name:"Form label for checkbox",args:{for:"idref",textContent:"Lorem ipsum",type:"checkbox"}}),n=e(t,{name:"Form label for checked checkbox",args:{checked:!0,for:"idref",textContent:"Lorem ipsum",type:"checkbox"}}),s=e(t,{name:"Form label for radio button",args:{for:"idref",textContent:"Lorem ipsum",type:"radio"}}),i=e(t,{name:"Form label for checked radio button",args:{checked:!0,for:"idref",textContent:"Lorem ipsum",type:"radio"}});var m;r.parameters={...r.parameters,storySource:{source:`createStory(meta, {
  name: 'Form label',
  args: {
    for: 'idref',
    textContent: 'Lorem ipsum'
  }
})`,...(m=r.parameters)==null?void 0:m.storySource}};var l;o.parameters={...o.parameters,storySource:{source:`createStory(meta, {
  name: 'Disabled',
  args: {
    disabled: true,
    for: 'idref',
    textContent: 'Lorem ipsum'
  }
})`,...(l=o.parameters)==null?void 0:l.storySource}};var c;a.parameters={...a.parameters,storySource:{source:`createStory(meta, {
  name: 'Form label for checkbox',
  args: {
    for: 'idref',
    textContent: 'Lorem ipsum',
    type: 'checkbox'
  }
})`,...(c=a.parameters)==null?void 0:c.storySource}};var d;n.parameters={...n.parameters,storySource:{source:`createStory(meta, {
  name: 'Form label for checked checkbox',
  args: {
    checked: true,
    for: 'idref',
    textContent: 'Lorem ipsum',
    type: 'checkbox'
  }
})`,...(d=n.parameters)==null?void 0:d.storySource}};var u;s.parameters={...s.parameters,storySource:{source:`createStory(meta, {
  name: 'Form label for radio button',
  args: {
    for: 'idref',
    textContent: 'Lorem ipsum',
    type: 'radio'
  }
})`,...(u=s.parameters)==null?void 0:u.storySource}};var p;i.parameters={...i.parameters,storySource:{source:`createStory(meta, {
  name: 'Form label for checked radio button',
  args: {
    checked: true,
    for: 'idref',
    textContent: 'Lorem ipsum',
    type: 'radio'
  }
})`,...(p=i.parameters)==null?void 0:p.storySource}};const W=["Default","Disabled","Checkbox","CheckedCheckbox","Radio","CheckedRadio"];export{a as Checkbox,n as CheckedCheckbox,i as CheckedRadio,r as Default,o as Disabled,s as Radio,W as __namedExportsOrder,t as default};
//# sourceMappingURL=FormLabel.stories-7520621b.js.map
