import{a as G,F as K,j as r}from"./jsx-runtime-670450c2.js";import{D as N,P as U,A as W,a as Q,S as X}from"./chunk-PCJTTTQV-4db98054.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{l as Z}from"./index-9c8e6906.js";import{t as $,d as ee}from"./util-d8e365e4.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./index-3947726d.js";import"./index-96c5f47c.js";import"./isSymbol-69229716.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-0e33defa.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-1e419f15.js";import"./chunk-RDJSMFWU-eb6ed6e5.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-195fbef2.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-5b183829.js";import"./index-356e4a49.js";import"./clsx.m-b4f9149a.js";import"./index-4d501b15.js";const re=`<!-- @license CC0-1.0 -->

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
`,ae={"button-link":{}},te={utrecht:ae},ne={title:"React Component/Link that looks like a button",id:"react-button-link",component:Z,parameters:{tokensPrefix:"utrecht-button-link",tokens:$,tokensDefinition:te,docs:{page:()=>G(K,{children:[r(N,{children:re}),r(U,{}),r(W,{story:Q}),r(X,{})]})}},args:{children:"Read more...",href:"#"},argTypes:{appearance:{description:"Appearance",control:{type:"select"},options:["","button","primary-action-button","secondary-action-button","subtle-button"],table:{category:"API",defaultValue:{summary:""}}},external:{type:"boolean",table:{category:"API",defaultValue:{summary:!1}}},placeholder:{name:"placeholder",type:"boolean",table:{category:"API",defaultValue:{summary:!1}}},href:{type:"string",table:{category:"API",defaultValue:{summary:"",required:!0}}}}},e={},a={args:{children:"Read more...",href:"https://example.com/",external:!0}},t={args:{...e.args,placeholder:!0}},n={name:"Primary",args:{...e.args,appearance:"primary-action-button"}},o={args:{...e.args,appearance:"secondary-action-button"}},s={args:{...e.args,appearance:"subtle-button"}},i={args:{...e.args,appearance:"subtle-button"},parameters:{pseudo:{hover:!0}}},c={args:{...e.args},parameters:{pseudo:{focus:!0}}},p={args:{...e.args},parameters:{pseudo:{active:!0}}},u={args:{...e.args},parameters:{pseudo:{focusVisible:!0,focus:!0}}},m=ee(ne);var l,d,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(d=e.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var b,k,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Read more...',
    href: 'https://example.com/',
    external: true
  }
}`,...(f=(k=a.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var h,y,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    placeholder: true
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var v,D,P;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Primary',
  args: {
    ...Default.args,
    appearance: 'primary-action-button'
  }
}`,...(P=(D=n.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var x,A,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(T=(A=o.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var j,E,F;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(F=(E=s.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var L,V,z;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(z=(V=i.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var R,I,w;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(w=(I=c.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var _,B,C;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      active: true
    }
  }
}`,...(C=(B=p.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var H,M,J;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  }
}`,...(J=(M=u.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};var O,Y,q;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:"designTokenStory(meta)",...(q=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};const Ve=["Default","External","PlaceholderForLink","PrimaryButtonLink","Secondary","Subtle","Hover","Focus","Active","FocusVisible","DesignTokens"];export{p as Active,e as Default,m as DesignTokens,a as External,c as Focus,u as FocusVisible,i as Hover,t as PlaceholderForLink,n as PrimaryButtonLink,o as Secondary,s as Subtle,Ve as __namedExportsOrder,ne as default};
//# sourceMappingURL=ButtonLink.stories-7ba2c57f.js.map
