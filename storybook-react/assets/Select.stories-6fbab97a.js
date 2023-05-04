import{a as B,F as G,j as s}from"./jsx-runtime-91a467a5.js";import"./chunk-PCJTTTQV-5e9569dc.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{D as J,P as K,A as N,a as Q,S as U}from"./index-1e42f037.js";import{aa as u,ab as W}from"./index-cf95bd25.js";import{t as X,d as Z}from"./util-0a769aac.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-869120b3.js";import"../sb-preview/runtime.mjs";import"./react-18-ff2c0a32.js";import"./index-8ce4a492.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-5b183829.js";import"./index-9d29e343.js";import"./index-356e4a49.js";import"./clsx.m-59171c9b.js";import"./index-1fc0ca9a.js";const ee=`<!-- @license CC0-1.0 -->

# Form Select component

## Terminology

- **select**: like the \`<select>\` element in HTML.

## Class names

- \`.utrecht-select\`
- \`.utrecht-select--disabled\`
- \`.utrecht-select--focus\`
- \`.utrecht-select--html-input\`
- \`.utrecht-select--invalid\`
- \`.utrecht-select--read-only\`
- \`.utrecht-select--required\`
`,se={select:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-bottom-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},invalid:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},re={utrecht:se},e=[{value:"",label:"Select an option",disabled:!0},{value:"1",label:"Option #1"},{value:"2",label:"Option #2"},{value:"3",label:"Option #3"},{value:"4",label:"Option #4"}],te={title:"React Component/Select",id:"react-select",component:u,parameters:{tokensPrefix:"utrecht-select",tokens:X,tokensDefinition:re,docs:{page:()=>B(G,{children:[s(J,{children:ee}),s(K,{}),s(N,{story:Q}),s(U,{})]})}},argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},noscript:{name:"noscript",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},value:{name:"value",type:{name:"string"},table:{category:"HTML attribute",defaultValue:{summary:""}}}},render:({...I})=>s(u,{...I,children:e&&e.length>0&&e.map(({label:_,value:z,disabled:Y},E)=>s(W,{value:z,disabled:Y,children:_},E))})},r={args:{options:e}},t={args:{disabled:!0,options:e}},n={args:{required:!0,options:e}},o={args:{required:!0,noscript:!0,options:e}},a={args:{invalid:!0,options:e}},i={args:{options:e},parameters:{pseudo:{focus:!0}}},l={args:{options:e},parameters:{pseudo:{focusVisible:!0,focus:!0}}},c={args:{options:e},parameters:{pseudo:{hover:!0}}},p=Z(te);var d,m,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    options
  }
}`,...(y=(m=r.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,h,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: true,
    options
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,f,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    required: true,
    options
  }
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var $,v,q;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    required: true,
    noscript: true,
    options
  }
}`,...(q=(v=o.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};var k,T,R;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    invalid: true,
    options
  }
}`,...(R=(T=a.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var D,V,F;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    options
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(F=(V=i.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var H,O,M;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    options
  },
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  }
}`,...(M=(O=l.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var C,L,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    options
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(P=(L=c.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var j,w,A;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:"designTokenStory(meta)",...(A=(w=p.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const ke=["Default","Disabled","Required","RequiredServerSideRendering","Invalid","Focus","FocusVisible","Hover","DesignTokens"];export{r as Default,p as DesignTokens,t as Disabled,i as Focus,l as FocusVisible,c as Hover,a as Invalid,n as Required,o as RequiredServerSideRendering,ke as __namedExportsOrder,te as default};
//# sourceMappingURL=Select.stories-6fbab97a.js.map
