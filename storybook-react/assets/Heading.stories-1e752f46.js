import{a as R,F,j as n}from"./jsx-runtime-91a467a5.js";import"./chunk-PCJTTTQV-ac2f1fd2.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{D as I,P as M,A as O,a as _,S as $}from"./index-b5cded2d.js";import{e as B}from"./index-6592553e.js";import{t as Y,d as E}from"./util-2a59d28b.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-8b144b24.js";import"../sb-preview/runtime.mjs";import"./react-18-ff2c0a32.js";import"./index-8ce4a492.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-5b183829.js";import"./index-9d29e343.js";import"./index-356e4a49.js";import"./clsx.m-59171c9b.js";import"./index-1fc0ca9a.js";const J='<!-- @license CC0-1.0 -->\n\n# Gebruik en toegankelijkheid van headings (koppen)\n\n- Gebruik altijd maar één H1 heading op een pagina met digitale content.\n- Gebruik alleen een heading als er content onder staat.\n- Gebruikers van screenreaders gebruiken headings vaak om een indruk te krijgen van de structuur van een pagina.\n- Gebruik headings niet voor de opmaak maar alleen voor tekstuele hiërarchie van de content.\n- Sla geen niveaus over met het gebruik van headings, bijvoorbeeld geen H3 gebruiken zonder dat er een voorgaande H2 is.\n- Beperk het aantal headings op een pagina. In de meeste gevallen hebben teksten niet meer dan `<h2>` koppen nodig en heel soms een `<h3>`. Alleen voor uitzonderlijk lange of complexe pagina\'s zouden `<h5>` en `<h6>` nodig zijn.\n\n## Terminologie\n\n- **heading**: [de HTML specificatie van `h1`/`h2`/`h3`/`h4`/`h5`/`h6`](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements). "h1" is nogal kortaf, daarom beschrijven we de token als "heading-1".\n\nIn HTML wordt de term "heading" gebruikt, niet "header" (dat is ook iets anders). Let dus op om niet per ongeluk "header" te schrijven in plaats van "heading".\n',Q={heading:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}}},q={utrecht:Q},K={title:"React Component/Heading",id:"react-heading",component:B,argTypes:{level:{description:"Heading level",control:{type:"select"},options:[1,2,3,4,5,6]},appearance:{description:"Appearance",control:{type:"select"},options:[void 0,"utrecht-heading-1","utrecht-heading-2","utrecht-heading-3","utrecht-heading-4","utrecht-heading-5","utrecht-heading-6"]}},parameters:{tokensPrefix:"utrecht-heading",tokens:Y,tokensDefinition:q,docs:{page:()=>R(F,{children:[n(I,{children:J}),n(M,{}),n(O,{story:_}),n($,{})]})}}},e={children:"The Quick Brown Fox Jumps Over The Lazy Dog"},r={name:"Heading Level 1",args:{level:1,...e}},a={args:{level:2,...e}},s={args:{level:3,...e}},t={args:{level:4,...e}},o={args:{level:5,...e}},i={args:{level:6,...e}},c={args:{...e,appearance:"utrecht-heading-4",level:2}},p=E(K);var d,l,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Heading Level 1',
  args: {
    level: 1,
    ...exampleArgs
  }
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var m,h,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    level: 2,
    ...exampleArgs
  }
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var v,k,H;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    level: 3,
    ...exampleArgs
  }
}`,...(H=(k=s.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var x,y,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    level: 4,
    ...exampleArgs
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var L,f,A;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    level: 5,
    ...exampleArgs
  }
}`,...(A=(f=o.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var S,T,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    level: 6,
    ...exampleArgs
  }
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var D,w,z;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...exampleArgs,
    appearance: 'utrecht-heading-4',
    level: 2
  }
}`,...(z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var G,C,P;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:"designTokenStory(meta)",...(P=(C=p.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const he=["Default","HeadingLevel2","HeadingLevel3","HeadingLevel4","HeadingLevel5","HeadingLevel6","HeadingAppearance","DesignTokens"];export{r as Default,p as DesignTokens,c as HeadingAppearance,a as HeadingLevel2,s as HeadingLevel3,t as HeadingLevel4,o as HeadingLevel5,i as HeadingLevel6,he as __namedExportsOrder,K as default};
//# sourceMappingURL=Heading.stories-1e752f46.js.map
