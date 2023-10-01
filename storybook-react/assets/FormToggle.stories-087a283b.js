import{a as G,j as e,F as ee}from"./jsx-runtime-29545a09.js";import"./chunk-S4VUQJ4A-0f1f051f.js";import{d as re,P as se,e as ae,f as te,g as ne}from"./index-3a3c0629.js";import{t as oe,d as de}from"./util-066ffab3.js";import{c as ie}from"./clsx.m-1229b3e0.js";import{r as ce}from"./index-76fb7be0.js";import"./iframe-c82eed5a.js";import"../sb-preview/runtime.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./index-8d47fad6.js";const m=ce.forwardRef(({checked:u,disabled:p,invalid:g,id:b,hidden:J,required:y,role:K,tabIndex:L,className:Q,...X},Z)=>G("div",{className:ie("utrecht-form-toggle","utrecht-form-toggle--html-checkbox",{"utrecht-form-toggle--disabled":p,"utrecht-form-toggle--invalid":g,"utrecht-form-toggle--required":y},Q),hidden:J,children:[e("input",{id:b,"aria-invalid":g||void 0,type:"checkbox",className:"utrecht-form-toggle__checkbox",defaultChecked:u||void 0,disabled:p||void 0,required:y,ref:Z,role:K,tabIndex:L,...X}),e("label",{htmlFor:b,className:"utrecht-form-toggle__track",children:e("div",{className:"utrecht-form-toggle__thumb"})})]}));m.displayName="FormToggle";try{m.displayName="FormToggle",m.__docgenInfo={description:"",displayName:"FormToggle",props:{invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const le=`<!-- @license CC0-1.0 -->

# Form Toggle

## Anatomy

- **track**: genoemd naar [\`::-moz-range-track\`](https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-range-track)
- **thumb**: genoemd naar [\`::-moz-range-thumb\`](https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-range-thumb) en \`::-webkit-slider-thumb\`.
`,me={"form-toggle":{"accent-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},track:{"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},thumb:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"margin-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},disabled:{"box-shadow":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},checked:{"accent-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-style":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},ue={utrecht:me},pe={title:"React Component/Form toggle",id:"react-form-toggle",component:m,parameters:{tokensPrefix:"utrecht-form-toggle",tokens:oe,tokensDefinition:ue,docs:{page:()=>G(ee,{children:[e(re,{children:le}),e(se,{}),e(ae,{story:te}),e(ne,{})]})}},argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},name:{name:"name",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},value:{name:"value",type:{name:"string",required:!1}}}},r={args:{id:"d26299c0-d61d-460b-9278-4adab8440a28"}},s={args:{checked:!0,id:"20e01936-911e-4114-8ecb-28e0ead124df"}},a={args:{checked:!0,disabled:!0,id:"16e6432c-0617-4d4b-8137-66bf02ebc91c"}},t={args:{disabled:!0,id:"7f57a350-5885-4566-8eaa-4012d8dadfda"}},n={args:{id:"074a441b-95a1-43cd-b5ec-67ad2145b4b0",invalid:!0}},o={args:{id:"63f42fd0-0add-4fe9-9a30-46e4dd3c028a",required:!0}},d={args:{id:"1bccae3f-3444-4f6d-a266-ba81a2d76959"},parameters:{pseudo:{hover:!0}}},i={args:{id:"8082bd47-a99e-4f34-9898-d718e17b20f5"},parameters:{pseudo:{focus:!0}}},c={args:{id:"de352dc4-7a42-4314-941d-55005f948561"},parameters:{pseudo:{focusVisible:!0,focus:!0}}},l=de(pe);var f,h,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'd26299c0-d61d-460b-9278-4adab8440a28'
  }
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var k,v,S;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: '20e01936-911e-4114-8ecb-28e0ead124df'
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var $,_,q;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    id: '16e6432c-0617-4d4b-8137-66bf02ebc91c'
  }
}`,...(q=(_=a.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var F,T,C;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true,
    id: '7f57a350-5885-4566-8eaa-4012d8dadfda'
  }
}`,...(C=(T=t.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var D,V,z;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: '074a441b-95a1-43cd-b5ec-67ad2145b4b0',
    invalid: true
  }
}`,...(z=(V=n.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var N,R,w;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: '63f42fd0-0add-4fe9-9a30-46e4dd3c028a',
    required: true
  }
}`,...(w=(R=o.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var A,I,P;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: '1bccae3f-3444-4f6d-a266-ba81a2d76959'
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(P=(I=d.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var j,E,H;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: '8082bd47-a99e-4f34-9898-d718e17b20f5'
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(H=(E=i.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var O,U,W;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: 'de352dc4-7a42-4314-941d-55005f948561'
  },
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  }
}`,...(W=(U=c.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var Y,M,B;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:"designTokenStory(meta)",...(B=(M=l.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const ze=["Default","Checked","CheckedAndDisabled","Disabled","Invalid","Required","Hover","Focus","FocusVisible","DesignTokens"];export{s as Checked,a as CheckedAndDisabled,r as Default,l as DesignTokens,t as Disabled,i as Focus,c as FocusVisible,d as Hover,n as Invalid,o as Required,ze as __namedExportsOrder,pe as default};
//# sourceMappingURL=FormToggle.stories-087a283b.js.map
