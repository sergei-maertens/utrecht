import{j as $}from"./jsx-runtime-670450c2.js";import{u as D}from"./index-759cefb4.js";import{t as j,d as v}from"./util-ee63c7b3.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-b4f9149a.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const S=`<!-- @license CC0-1.0 -->

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
`,R={"form-label":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},checkbox:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},checked:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},disabled:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},radio:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}}}},_={utrecht:R},z={title:"React Component/Form Label",id:"react-form-label",component:D,argTypes:{type:{type:"select",options:[void 0,"checkbox","radio"]},checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}}},tags:["autodocs"],parameters:{tokensPrefix:"utrecht-form-label",tokens:j,tokensDefinition:_,docs:{description:{component:S}}}},o=T=>$(D,{...T}),e=o.bind({});e.args={children:"Username"};const s=o.bind({});s.args={children:"Form Label Checked",type:"checkbox"};const r=o.bind({});r.args={children:"Form Label Disabled",type:"radio"};const t=o.bind({});t.args={children:"Form Label Checkbox",type:"checkbox"};const a=o.bind({});a.args={children:"Form Label Radio",type:"radio"};const n=v(z);var i,l,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"args => <FormLabel {...args} />",...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"args => <FormLabel {...args} />",...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,u,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:"args => <FormLabel {...args} />",...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,y,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"args => <FormLabel {...args} />",...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var x,f,w;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:"args => <FormLabel {...args} />",...(w=(f=a.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var C,F,L;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:"designTokenStory(meta)",...(L=(F=n.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const M=["Default","Checked","Disabled","Checkbox","Radio","DesignTokens"];export{t as Checkbox,s as Checked,e as Default,n as DesignTokens,r as Disabled,a as Radio,M as __namedExportsOrder,z as default};
//# sourceMappingURL=FormLabel.stories-7f613abf.js.map
