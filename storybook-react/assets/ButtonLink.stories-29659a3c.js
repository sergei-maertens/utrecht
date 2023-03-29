import{j as U}from"./jsx-runtime-670450c2.js";import{m as N}from"./index-a5237a52.js";import{t as W,d as Q}from"./util-b52d2a59.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-b4f9149a.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const X=`<!-- @license CC0-1.0 -->

# Button link: link die er uit ziet als button

Een link die er uitziet als een button, om gebruikers aan te sporen op de link te klikken en actie te gaan ondernemen.

## Toepassing

Een link button mag alleen gebruikt worden voor navigatie naar een pagina waar je een actie uitvoert, de link klikken mag niet gelijk een _side-effect_ hebben.

Wel:

- Log in met eIDAS (navigeert naar formulier voor inloggen)
- Maak een afspraak (navigeert naar formulier)

Niet:

- Uitloggen (logt direct uit)
- Stop de parkeermeter (je mag hierna niet meer parkeren)

## Activeren

Een link button moet op dezelfde manier geactiveerd kunnen worden als een button:

- Klikken
- \`Enter\` op toetsenbord
- \`Space\` op toetsenbord

Een HTML \`a\` element wordt standaard niet geactiveerd met \`Space\`, daarvoor is ondersteunende JavaScript nodig. Gebruik \`role="button"\` alleen wanneer je door extra JavaScript ook met \`Space\` de link activeert.

## States

- hover
- focus
- focus-visible

De link button heeft geen disabled state, net als de normale link: die heeft ook geen disabled state.

De link button heeft geen \`visited\` state zoals normale links, maar ziet er altijd hetzelfde uit zoals een normale button.
`,Y={"button-link":{}},Z={utrecht:Y},$={title:"React Component/Link that looks like a button",id:"react-button-link",component:N,tags:["autodocs"],parameters:{tokensPrefix:"utrecht-button-link",tokens:W,tokensDefinition:Z,docs:{description:{component:X}}},argTypes:{appearance:{description:"Appearance",control:{type:"select"},options:["","button","primary-action-button","secondary-action-button","subtle-button"],table:{category:"API",defaultValue:{summary:""}}},external:{type:"boolean",table:{category:"API",defaultValue:{summary:!1}}},placeholder:{name:"placeholder",type:"boolean",table:{category:"API",defaultValue:{summary:!1}}},href:{type:"string",table:{category:"API",defaultValue:{summary:"",required:!0}}}}},e=O=>U(N,{...O}),o=e.bind({});o.args={children:"Read more...",href:"#"};const s=e.bind({});s.args={children:"Read more...",href:"https://example.com/",external:!0};const i=e.bind({});i.args={children:"Read more...",href:"#",placeholder:!0};const c=e.bind({});c.args={children:"Read more...",href:"#",appearance:"primary-action-button"};const d=e.bind({});d.args={children:"Read more...",href:"#",appearance:"secondary-action-button"};const u=e.bind({});u.args={children:"Read more...",href:"#",appearance:"subtle-button"};const r=e.bind({});r.args={children:"Read more...",href:"#"};r.parameters={pseudo:{hover:!0}};const a=e.bind({});a.args={children:"Read more...",href:"#"};a.parameters={pseudo:{focus:!0}};const t=e.bind({});t.args={children:"Read more...",href:"#"};t.parameters={pseudo:{active:!0}};const n=e.bind({});n.args={children:"Read more...",href:"#"};n.parameters={pseudo:{focusVisible:!0}};const l=Q($);var m,p,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"args => <ButtonLink {...args} />",...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var k,b,f;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:"args => <ButtonLink {...args} />",...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,S,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:"args => <ButtonLink {...args} />",...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var v,L,B;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:"args => <ButtonLink {...args} />",...(B=(L=c.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var R,x,A;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:"args => <ButtonLink {...args} />",...(A=(x=d.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var P,D,E;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:"args => <ButtonLink {...args} />",...(E=(D=u.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var T,j,z;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:"args => <ButtonLink {...args} />",...(z=(j=r.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var V,F,w;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:"args => <ButtonLink {...args} />",...(w=(F=a.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var I,_,C;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:"args => <ButtonLink {...args} />",...(C=(_=t.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var H,J,M;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:"args => <ButtonLink {...args} />",...(M=(J=n.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var q,G,K;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:"designTokenStory(meta)",...(K=(G=l.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const ce=["Default","External","PlaceholderForLink","Primary","Secondary","Subtle","Hover","Focus","Active","FocusVisible","DesignTokens"];export{t as Active,o as Default,l as DesignTokens,s as External,a as Focus,n as FocusVisible,r as Hover,i as PlaceholderForLink,c as Primary,d as Secondary,u as Subtle,ce as __namedExportsOrder,$ as default};
//# sourceMappingURL=ButtonLink.stories-29659a3c.js.map
