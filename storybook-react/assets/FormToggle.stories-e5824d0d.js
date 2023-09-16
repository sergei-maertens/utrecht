import{a as W,F as Y,j as e}from"./jsx-runtime-29545a09.js";import"./chunk-S4VUQJ4A-ffc841d1.js";import{D as E,P as M,A as B,b as G,d as J}from"./index-4b85beca.js";import{a0 as K}from"./index-db302ede.js";import{t as L,d as N}from"./util-7fc75af6.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-de5b2a35.js";import"../sb-preview/runtime.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./defineProperty-75c483e5.js";import"./clsx.m-1229b3e0.js";import"./index-8d47fad6.js";const Q=`<!-- @license CC0-1.0 -->

# Form Toggle

## Anatomy

- **track**: genoemd naar [\`::-moz-range-track\`](https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-range-track)
- **thumb**: genoemd naar [\`::-moz-range-thumb\`](https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-range-thumb) en \`::-webkit-slider-thumb\`.
`,X={"form-toggle":{"accent-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},track:{"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},thumb:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"margin-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},disabled:{"box-shadow":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},checked:{"accent-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-style":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},Z={utrecht:X},ee={title:"React Component/Form toggle",id:"react-form-toggle",component:K,parameters:{tokensPrefix:"utrecht-form-toggle",tokens:L,tokensDefinition:Z,docs:{page:()=>W(Y,{children:[e(E,{children:Q}),e(M,{}),e(B,{story:G}),e(J,{})]})}},argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},name:{name:"name",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},value:{name:"value",type:{name:"string",required:!1}}}},r={args:{id:"d26299c0-d61d-460b-9278-4adab8440a28"}},s={args:{checked:!0,id:"20e01936-911e-4114-8ecb-28e0ead124df"}},a={args:{checked:!0,disabled:!0,id:"16e6432c-0617-4d4b-8137-66bf02ebc91c"}},n={args:{disabled:!0,id:"7f57a350-5885-4566-8eaa-4012d8dadfda"}},t={args:{id:"074a441b-95a1-43cd-b5ec-67ad2145b4b0",invalid:!0}},o={args:{id:"63f42fd0-0add-4fe9-9a30-46e4dd3c028a",required:!0}},d={args:{id:"1bccae3f-3444-4f6d-a266-ba81a2d76959"},parameters:{pseudo:{hover:!0}}},i={args:{id:"8082bd47-a99e-4f34-9898-d718e17b20f5"},parameters:{pseudo:{focus:!0}}},c={args:{id:"de352dc4-7a42-4314-941d-55005f948561"},parameters:{pseudo:{focusVisible:!0,focus:!0}}},l=N(ee);var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'd26299c0-d61d-460b-9278-4adab8440a28'
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,b,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: '20e01936-911e-4114-8ecb-28e0ead124df'
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,h,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    id: '16e6432c-0617-4d4b-8137-66bf02ebc91c'
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var k,S,$;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    disabled: true,
    id: '7f57a350-5885-4566-8eaa-4012d8dadfda'
  }
}`,...($=(S=n.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var v,q,D;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: '074a441b-95a1-43cd-b5ec-67ad2145b4b0',
    invalid: true
  }
}`,...(D=(q=t.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var C,F,T;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: '63f42fd0-0add-4fe9-9a30-46e4dd3c028a',
    required: true
  }
}`,...(T=(F=o.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var V,z,A;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    id: '1bccae3f-3444-4f6d-a266-ba81a2d76959'
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var R,w,P;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    id: '8082bd47-a99e-4f34-9898-d718e17b20f5'
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(P=(w=i.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var j,I,_;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: 'de352dc4-7a42-4314-941d-55005f948561'
  },
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  }
}`,...(_=(I=c.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var H,O,U;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:"designTokenStory(meta)",...(U=(O=l.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const ke=["Default","Checked","CheckedAndDisabled","Disabled","Invalid","Required","Hover","Focus","FocusVisible","DesignTokens"];export{s as Checked,a as CheckedAndDisabled,r as Default,l as DesignTokens,n as Disabled,i as Focus,c as FocusVisible,d as Hover,t as Invalid,o as Required,ke as __namedExportsOrder,ee as default};
//# sourceMappingURL=FormToggle.stories-e5824d0d.js.map
