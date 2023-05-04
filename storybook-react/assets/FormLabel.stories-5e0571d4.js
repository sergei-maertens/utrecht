import{a as L,F as S,j as e}from"./jsx-runtime-91a467a5.js";import"./chunk-PCJTTTQV-50c10185.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{D as R,P as T,A as j,a as $,S as v}from"./index-869848d0.js";import{K as A}from"./index-689a29f9.js";import{t as _,d as z}from"./util-2a59d28b.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b8ffe8b8.js";import"../sb-preview/runtime.mjs";import"./react-18-ff2c0a32.js";import"./index-8ce4a492.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-5b183829.js";import"./index-9d29e343.js";import"./index-356e4a49.js";import"./clsx.m-59171c9b.js";import"./index-1fc0ca9a.js";const G=`<!-- @license CC0-1.0 -->

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
`,P={"form-label":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},checkbox:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},checked:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},disabled:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},radio:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}}}},W={utrecht:P},q={title:"React Component/Form Label",id:"react-form-label",component:A,argTypes:{type:{type:"select",options:[void 0,"checkbox","radio"]},checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}}},parameters:{tokensPrefix:"utrecht-form-label",tokens:_,tokensDefinition:W,docs:{description:{page:()=>L(S,{children:[e(R,{children:G}),e(T,{}),e(j,{story:$}),e(v,{})]})}}},args:{children:"Username"}},r={},s={args:{children:"Form Label Checked",type:"checkbox"}},t={args:{children:"Form Label Disabled",type:"radio"}},n={args:{children:"Form Label Checkbox",type:"checkbox"}},o={args:{children:"Form Label Radio",type:"radio"}},a=z(q);var i,l,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Form Label Checked',
    type: 'checkbox'
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,h,u;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Form Label Disabled',
    type: 'radio'
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var y,g,k;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Form Label Checkbox',
    type: 'checkbox'
  }
}`,...(k=(g=n.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var x,f,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Form Label Radio',
    type: 'radio'
  }
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var C,F,D;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:"designTokenStory(meta)",...(D=(F=a.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const oe=["Default","Checked","Disabled","Checkbox","Radio","DesignTokens"];export{n as Checkbox,s as Checked,r as Default,a as DesignTokens,t as Disabled,o as Radio,oe as __namedExportsOrder,q as default};
//# sourceMappingURL=FormLabel.stories-5e0571d4.js.map
