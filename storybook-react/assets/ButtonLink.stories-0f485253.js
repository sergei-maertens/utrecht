import{j as x}from"./jsx-runtime-670450c2.js";import{j as B}from"./index-d82b8dab.js";import{t as A,d as P}from"./util-8f23c9d9.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const j=`<!-- @license CC0-1.0 -->

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
`,D={"button-link":{}},E={utrecht:D},T={title:"React Component/Link that looks like a button",id:"react-button-link",component:B,tags:["autodocs"],parameters:{tokensPrefix:"utrecht-button-link",tokens:A,tokensDefinition:E,docs:{description:{component:j}}},argTypes:{appearance:{description:"Appearance",control:{type:"select"},options:["","button","primary-action-button","secondary-action-button","subtle-button"],table:{category:"API",defaultValue:{summary:""}}},external:{type:"boolean",table:{category:"API",defaultValue:{summary:!1}}},placeholder:{name:"placeholder",type:"boolean",table:{category:"API",defaultValue:{summary:!1}}},href:{type:"string",table:{category:"API",defaultValue:{summary:"",required:!0}}}}},e=R=>x(B,{...R}),o=e.bind({});o.args={children:"Read more...",href:"#"};const s=e.bind({});s.args={children:"Read more...",href:"https://example.com/",external:!0};const i=e.bind({});i.args={children:"Read more...",href:"#",placeholder:!0};const c=e.bind({});c.args={children:"Read more...",href:"#",appearance:"primary-action-button"};const u=e.bind({});u.args={children:"Read more...",href:"#",appearance:"secondary-action-button"};const l=e.bind({});l.args={children:"Read more...",href:"#",appearance:"subtle-button"};const r=e.bind({});r.args={children:"Read more...",href:"#"};r.parameters={pseudo:{hover:!0}};const t=e.bind({});t.args={children:"Read more...",href:"#"};t.parameters={pseudo:{focus:!0}};const a=e.bind({});a.args={children:"Read more...",href:"#"};a.parameters={pseudo:{active:!0}};const n=e.bind({});n.args={children:"Read more...",href:"#"};n.parameters={pseudo:{focusVisible:!0}};const m=P(T);var p;o.parameters={...o.parameters,storySource:{source:"args => <ButtonLink {...args} />",...(p=o.parameters)==null?void 0:p.storySource}};var d;s.parameters={...s.parameters,storySource:{source:"args => <ButtonLink {...args} />",...(d=s.parameters)==null?void 0:d.storySource}};var g;i.parameters={...i.parameters,storySource:{source:"args => <ButtonLink {...args} />",...(g=i.parameters)==null?void 0:g.storySource}};var k;c.parameters={...c.parameters,storySource:{source:"args => <ButtonLink {...args} />",...(k=c.parameters)==null?void 0:k.storySource}};var b;u.parameters={...u.parameters,storySource:{source:"args => <ButtonLink {...args} />",...(b=u.parameters)==null?void 0:b.storySource}};var y;l.parameters={...l.parameters,storySource:{source:"args => <ButtonLink {...args} />",...(y=l.parameters)==null?void 0:y.storySource}};var f;r.parameters={...r.parameters,storySource:{source:"args => <ButtonLink {...args} />",...(f=r.parameters)==null?void 0:f.storySource}};var h;t.parameters={...t.parameters,storySource:{source:"args => <ButtonLink {...args} />",...(h=t.parameters)==null?void 0:h.storySource}};var S;a.parameters={...a.parameters,storySource:{source:"args => <ButtonLink {...args} />",...(S=a.parameters)==null?void 0:S.storySource}};var v;n.parameters={...n.parameters,storySource:{source:"args => <ButtonLink {...args} />",...(v=n.parameters)==null?void 0:v.storySource}};var L;m.parameters={...m.parameters,storySource:{source:"designTokenStory(meta)",...(L=m.parameters)==null?void 0:L.storySource}};const J=["Default","External","PlaceholderForLink","Primary","Secondary","Subtle","Hover","Focus","Active","FocusVisible","DesignTokens"];export{a as Active,o as Default,m as DesignTokens,s as External,t as Focus,n as FocusVisible,r as Hover,i as PlaceholderForLink,c as Primary,u as Secondary,l as Subtle,J as __namedExportsOrder,T as default};
//# sourceMappingURL=ButtonLink.stories-0f485253.js.map
