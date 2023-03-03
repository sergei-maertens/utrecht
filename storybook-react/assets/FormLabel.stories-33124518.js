import{j as y}from"./jsx-runtime-670450c2.js";import{t as b}from"./index-8b643457.js";import{t as h,d as g}from"./util-cccc7565.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const k=`<!-- @license CC0-1.0 -->

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
`,x={"form-label":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},checkbox:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},checked:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},disabled:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},radio:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}}}},f={utrecht:x},w={title:"React Component/Form Label",id:"react-form-label",component:b,argTypes:{type:{type:"select",options:[void 0,"checkbox","radio"]},checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}}},tags:["autodocs"],parameters:{tokensPrefix:"utrecht-form-label",tokens:h,tokensDefinition:f,docs:{description:{component:k}}}},e=u=>y(b,{...u}),r=e.bind({});r.args={children:"Username"};const t=e.bind({});t.args={children:"Form Label Checked",type:"checkbox"};const s=e.bind({});s.args={children:"Form Label Disabled",type:"radio"};const n=e.bind({});n.args={children:"Form Label Checkbox",type:"checkbox"};const o=e.bind({});o.args={children:"Form Label Radio",type:"radio"};const a=g(w);var i;r.parameters={...r.parameters,storySource:{source:"args => <FormLabel {...args} />",...(i=r.parameters)==null?void 0:i.storySource}};var l;t.parameters={...t.parameters,storySource:{source:"args => <FormLabel {...args} />",...(l=t.parameters)==null?void 0:l.storySource}};var m;s.parameters={...s.parameters,storySource:{source:"args => <FormLabel {...args} />",...(m=s.parameters)==null?void 0:m.storySource}};var c;n.parameters={...n.parameters,storySource:{source:"args => <FormLabel {...args} />",...(c=n.parameters)==null?void 0:c.storySource}};var d;o.parameters={...o.parameters,storySource:{source:"args => <FormLabel {...args} />",...(d=o.parameters)==null?void 0:d.storySource}};var p;a.parameters={...a.parameters,storySource:{source:"designTokenStory(meta)",...(p=a.parameters)==null?void 0:p.storySource}};const v=["Default","Checked","Disabled","Checkbox","Radio","DesignTokens"];export{n as Checkbox,t as Checked,r as Default,a as DesignTokens,s as Disabled,o as Radio,v as __namedExportsOrder,w as default};
//# sourceMappingURL=FormLabel.stories-33124518.js.map
