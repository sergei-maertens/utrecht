import{a as G,F as J,j as s}from"./jsx-runtime-29545a09.js";import"./chunk-S4VUQJ4A-9dc52de4.js";import{D as K,P as N,A as Q,b as U,d as W}from"./index-67a51a31.js";import{y as d,z as X}from"./index-60e39fc9.js";import{t as Z,d as ee}from"./util-3f44594b.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-92a2e306.js";import"../sb-preview/runtime.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./defineProperty-75c483e5.js";import"./clsx.m-1229b3e0.js";import"./index-8d47fad6.js";const se=`<!-- @license CC0-1.0 -->

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
`,re={select:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-bottom-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},invalid:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},te={utrecht:re},e=[{value:"",label:"Select an option",disabled:!0},{value:"1",label:"Option #1"},{value:"2",label:"Option #2"},{value:"3",label:"Option #3"},{value:"4",label:"Option #4"}],ne={title:"React Component/Select",id:"react-select",component:d,parameters:{tokensPrefix:"utrecht-select",tokens:Z,tokensDefinition:te,docs:{page:()=>G(J,{children:[s(K,{children:se}),s(N,{}),s(Q,{story:U}),s(W,{})]})}},argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},noscript:{name:"noscript",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},value:{name:"value",type:{name:"string"},table:{category:"HTML attribute",defaultValue:{summary:""}}}},render:({options:u,...I})=>s(d,{...I,children:u&&u.length>0&&u.map(({label:_,value:Y,disabled:E},B)=>s(X,{value:Y,disabled:E,children:_},B))})},r={args:{options:e}},t={args:{disabled:!0,options:e}},n={args:{required:!0,options:e}},o={args:{required:!0,noscript:!0,options:e}},a={args:{invalid:!0,options:e}},i={args:{options:e},parameters:{pseudo:{focus:!0}}},l={args:{options:e},parameters:{pseudo:{focusVisible:!0,focus:!0}}},c={args:{options:e},parameters:{pseudo:{hover:!0}}},p=ee(ne);var m,y,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    options
  }
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,x,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: true,
    options
  }
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,S,$;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    required: true,
    options
  }
}`,...($=(S=n.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var v,q,k;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    required: true,
    noscript: true,
    options
  }
}`,...(k=(q=o.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var T,R,D;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    invalid: true,
    options
  }
}`,...(D=(R=a.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var V,F,H;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    options
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(H=(F=i.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var O,M,C;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    options
  },
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  }
}`,...(C=(M=l.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var L,P,j;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    options
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(j=(P=c.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var w,z,A;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:"designTokenStory(meta)",...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const ke=["Default","Disabled","Required","RequiredServerSideRendering","Invalid","Focus","FocusVisible","Hover","DesignTokens"];export{r as Default,p as DesignTokens,t as Disabled,i as Focus,l as FocusVisible,c as Hover,a as Invalid,n as Required,o as RequiredServerSideRendering,ke as __namedExportsOrder,ne as default};
//# sourceMappingURL=Select.stories-ae60bba8.js.map
