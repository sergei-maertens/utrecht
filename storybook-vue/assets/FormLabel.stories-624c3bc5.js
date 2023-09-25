import{x as $}from"./component-library-vue-753b3a02.js";import{c as e}from"./util-6fd51a42.js";import"./vue.esm-bundler-759e87b8.js";import"./chunk-S4VUQJ4A-da11cc16.js";import"./iframe-12e156ce.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-8bfd3a25.js";import"./index-356e4a49.js";const v=`<!-- @license CC0-1.0 -->

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
`,D={"form-label":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},checkbox:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},checked:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},disabled:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},radio:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}}}},j={utrecht:D},r={id:"vue-form-label",title:"Vue.js Component/Form label",component:$,tags:["autodocs"],argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},for:{name:"for",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}},type:{name:"type",control:{type:"select"},options:["","checkbox","radio"],type:{name:"string",required:!1},table:{defaultValue:{summary:""}}}},args:{},parameters:{status:{type:"ALPHA"},tokens:j,tokenPrefix:"utrecht-form-label",docs:{description:{component:v},source:{code:'<UtrechtFormLabel v-bind="$props"><slot></slot></UtrechtFormLabel>'}}}},t=e(r,{name:"Form label",args:{for:"idref",textContent:"Lorem ipsum"}}),o=e(r,{name:"Disabled",args:{disabled:!0,for:"idref",textContent:"Lorem ipsum"}}),n=e(r,{name:"Form label for checkbox",args:{for:"idref",textContent:"Lorem ipsum",type:"checkbox"}}),s=e(r,{name:"Form label for checked checkbox",args:{checked:!0,for:"idref",textContent:"Lorem ipsum",type:"checkbox"}}),a=e(r,{name:"Form label for radio button",args:{for:"idref",textContent:"Lorem ipsum",type:"radio"}}),i=e(r,{name:"Form label for checked radio button",args:{checked:!0,for:"idref",textContent:"Lorem ipsum",type:"radio"}});var l,m,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`createStory(meta, {
  name: 'Form label',
  args: {
    for: 'idref',
    textContent: 'Lorem ipsum'
  }
})`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,p,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`createStory(meta, {
  name: 'Disabled',
  args: {
    disabled: true,
    for: 'idref',
    textContent: 'Lorem ipsum'
  }
})`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,f,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`createStory(meta, {
  name: 'Form label for checkbox',
  args: {
    for: 'idref',
    textContent: 'Lorem ipsum',
    type: 'checkbox'
  }
})`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,x,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`createStory(meta, {
  name: 'Form label for checked checkbox',
  args: {
    checked: true,
    for: 'idref',
    textContent: 'Lorem ipsum',
    type: 'checkbox'
  }
})`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var k,C,w;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`createStory(meta, {
  name: 'Form label for radio button',
  args: {
    for: 'idref',
    textContent: 'Lorem ipsum',
    type: 'radio'
  }
})`,...(w=(C=a.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var L,F,S;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`createStory(meta, {
  name: 'Form label for checked radio button',
  args: {
    checked: true,
    for: 'idref',
    textContent: 'Lorem ipsum',
    type: 'radio'
  }
})`,...(S=(F=i.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const P=["Default","Disabled","Checkbox","CheckedCheckbox","Radio","CheckedRadio"];export{n as Checkbox,s as CheckedCheckbox,i as CheckedRadio,t as Default,o as Disabled,a as Radio,P as __namedExportsOrder,r as default};
//# sourceMappingURL=FormLabel.stories-624c3bc5.js.map
