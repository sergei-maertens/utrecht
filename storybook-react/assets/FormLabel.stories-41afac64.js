import{a as L,F as R,j as e}from"./jsx-runtime-29545a09.js";import"./chunk-S4VUQJ4A-a14cf477.js";import{D as S,P as T,A as j,b as $,d as v}from"./index-4ff7af89.js";import{c as A}from"./index-c41c3c51.js";import{t as _,d as z}from"./util-3ac69f2d.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-e68bc00f.js";import"../sb-preview/runtime.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./defineProperty-75c483e5.js";import"./clsx.m-1229b3e0.js";import"./index-8d47fad6.js";const G=`<!-- @license CC0-1.0 -->

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
`,P={"form-label":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},checkbox:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},checked:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},disabled:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},radio:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}}}},q={utrecht:P},W={title:"React Component/Form Label",id:"react-form-label",component:A,argTypes:{type:{type:{name:"string",required:!1},options:[void 0,"checkbox","radio"]},checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}}},parameters:{tokensPrefix:"utrecht-form-label",tokens:_,tokensDefinition:q,docs:{description:{page:()=>L(R,{children:[e(S,{children:G}),e(T,{}),e(j,{story:$}),e(v,{})]})}}},args:{children:"Username"}},r={},s={args:{children:"Form Label Checked",type:"checkbox"}},t={args:{children:"Form Label Disabled",type:"radio"}},n={args:{children:"Form Label Checkbox",type:"checkbox"}},o={args:{children:"Form Label Radio",type:"radio"}},a=z(W);var i,l,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Form Label Checked',
    type: 'checkbox'
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,h,u;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Form Label Disabled',
    type: 'radio'
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,y,k;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Form Label Checkbox',
    type: 'checkbox'
  }
}`,...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var x,f,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Form Label Radio',
    type: 'radio'
  }
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var C,F,D;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:"designTokenStory(meta)",...(D=(F=a.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const ne=["Default","Checked","Disabled","Checkbox","Radio","DesignTokens"];export{n as Checkbox,s as Checked,r as Default,a as DesignTokens,t as Disabled,o as Radio,ne as __namedExportsOrder,W as default};
//# sourceMappingURL=FormLabel.stories-41afac64.js.map
