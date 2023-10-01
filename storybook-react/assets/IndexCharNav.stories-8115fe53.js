import{a as pn,F as dn,j as r}from"./jsx-runtime-29545a09.js";import{D as un,P as hn,A as kn,b as gn,d as Cn}from"./index-f87bc25e.js";import{I as bn}from"./index.esm-813c862d.js";import{t as Ln,d as xn}from"./util-83f1cb40.js";import{r as yn}from"./index-76fb7be0.js";import"./iframe-c69de5d0.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./defineProperty-75c483e5.js";import"./clsx.m-1229b3e0.js";import"./index-8d47fad6.js";const vn=`<!-- @license CC0-1.0 -->

# Index character navigation

Navigate using sorted [index characters](https://cldr.unicode.org/development/development-process/design-proposals/index-characters). Index characters have differences between locales, because the characters or the alphabetical order can be different.
`,Dn={"index-char-nav":{"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},gap:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},link:{current:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}}}}},An={utrecht:Dn},sn="A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",cn="Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω",mn="А	Б	В	Г	Ґ	Д	Е	Є	Ж	З	И І	Ї	Й	К	Л	М	Н	О	П	Р	С Т	У	Ф	Х	Ц	Ч	Ш	Щ	Ь	Ю	Я",b=n=>n.trim().split(/\s+/g).map(a=>({char:a,href:`./${a.toLocaleLowerCase()}/`})),e=b(sn),fn=b(cn),Sn=b(mn),L=n=>n.map(({...a})=>({...a,disabled:!0})),x=n=>n.map(({...a},ln)=>({...a,disabled:ln%3===0})),wn={title:"React Component/Index character navigation",id:"react-index-char-nav",component:bn,argTypes:{onLinkClick:{control:null,description:"Function to handle character click and return the navigation URL."},currentChar:{control:"text",description:"The current character."},characters:{control:{type:"radio"},description:"The characters with data for each character.",options:{[sn]:e,[cn]:fn,[mn]:Sn}},component:{options:["link","button"],control:{type:"radio"},description:"The component to use for the navigation."},Link:{control:null,description:"Custom component to use for navigation."}},args:{onLinkClick:n=>n},tags:["autodocs"],parameters:{status:{type:"ALPHA"},tokensPrefix:"utrecht-index-char-nav",tokens:Ln,tokensDefinition:An,docs:{page:()=>pn(dn,{children:[r(un,{children:vn}),r(hn,{}),r(kn,{story:gn}),r(Cn,{})]})}}},t=yn.forwardRef((n,a)=>r("a",{ref:a,...n}));t.displayName="DemoLinkComponent";const o={args:{characters:e,component:"link"},name:"Link"},s={args:{characters:e,component:"link",currentChar:"A"},name:"Current page"},i={args:{availability:"none",characters:L(e),component:"link"},name:"Disabled link"},c={args:{availability:"mixed",characters:x(e),component:"link"},name:"Links with mixed availability"},m={args:{characters:e,component:"button",onLinkClick:n=>n},name:"Button"},l={args:{currentChar:"A",characters:e,component:"button"},name:"Pressed button"},p={args:{availability:"mixed",characters:x(e),component:"button",onLinkClick:n=>n},name:"Buttons with mixed availability"},d={args:{availability:"none",characters:L(e),component:"button"},name:"Disabled button"},u={args:{characters:e,component:"link",Link:t},name:"Custom Link component"},h={args:{characters:e,component:"link",Link:t,currentChar:"A"},name:"Custom Link component with current char"},k={args:{characters:L(e),component:"link",Link:t},name:"Custom disabled Link component"},g={args:{characters:x(e),component:"link",Link:t},name:"Custom Link component with mixed availability"},C=xn(wn);var y,v,D;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    characters: latinCharacters,
    component: 'link'
  },
  name: 'Link'
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var A,f,S;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    characters: latinCharacters,
    component: 'link',
    currentChar: 'A'
  },
  name: 'Current page'
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var w,B,T;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    availability: 'none',
    characters: noAvailability(latinCharacters),
    component: 'link'
  },
  name: 'Disabled link'
}`,...(T=(B=i.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var P,M,I;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    availability: 'mixed',
    characters: mixedAvailability(latinCharacters),
    component: 'link'
  },
  name: 'Links with mixed availability'
}`,...(I=(M=c.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var R,$,F;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    characters: latinCharacters,
    component: 'button',
    onLinkClick: char => char
  },
  name: 'Button'
}`,...(F=($=m.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var N,j,E;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    currentChar: 'A',
    characters: latinCharacters,
    component: 'button'
  },
  name: 'Pressed button'
}`,...(E=(j=l.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var O,Y,_;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    availability: 'mixed',
    characters: mixedAvailability(latinCharacters),
    component: 'button',
    onLinkClick: char => char
  },
  name: 'Buttons with mixed availability'
}`,...(_=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var H,U,G;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    availability: 'none',
    characters: noAvailability(latinCharacters),
    component: 'button'
  },
  name: 'Disabled button'
}`,...(G=(U=d.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    characters: latinCharacters,
    component: 'link',
    Link: DemoLinkComponent
  },
  name: 'Custom Link component'
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,W,X;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    characters: latinCharacters,
    component: 'link',
    Link: DemoLinkComponent,
    currentChar: 'A'
  },
  name: 'Custom Link component with current char'
}`,...(X=(W=h.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,q,z;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    characters: noAvailability(latinCharacters),
    component: 'link',
    Link: DemoLinkComponent
  },
  name: 'Custom disabled Link component'
}`,...(z=(q=k.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var nn,en,an;g.parameters={...g.parameters,docs:{...(nn=g.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  args: {
    characters: mixedAvailability(latinCharacters),
    component: 'link',
    Link: DemoLinkComponent
  },
  name: 'Custom Link component with mixed availability'
}`,...(an=(en=g.parameters)==null?void 0:en.docs)==null?void 0:an.source}}};var rn,tn,on;C.parameters={...C.parameters,docs:{...(rn=C.parameters)==null?void 0:rn.docs,source:{originalSource:"designTokenStory(meta)",...(on=(tn=C.parameters)==null?void 0:tn.docs)==null?void 0:on.source}}};const Jn=["Default","LinkCurrent","LinkDisabled","LinkMixed","Button","ButtonPressed","ButtonMixed","ButtonDisabled","CustomLink","CustomLinkCurrentChar","CustomLinkDisabled","CustomLinkMixed","DesignTokens"];export{m as Button,d as ButtonDisabled,p as ButtonMixed,l as ButtonPressed,u as CustomLink,h as CustomLinkCurrentChar,k as CustomLinkDisabled,g as CustomLinkMixed,o as Default,C as DesignTokens,s as LinkCurrent,i as LinkDisabled,c as LinkMixed,Jn as __namedExportsOrder,wn as default};
//# sourceMappingURL=IndexCharNav.stories-8115fe53.js.map
