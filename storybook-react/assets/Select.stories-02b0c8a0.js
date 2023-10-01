import{j as s,a as U,F as W}from"./jsx-runtime-29545a09.js";import"./chunk-S4VUQJ4A-791b6461.js";import{d as X,P as Z,e as ee,f as se,g as re}from"./index-dec133bd.js";import{t as te,d as ne}from"./util-066ffab3.js";import{c as G}from"./clsx.m-1229b3e0.js";import{r as J}from"./index-76fb7be0.js";import"./iframe-d698d18d.js";import"../sb-preview/runtime.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./index-8d47fad6.js";const l=J.forwardRef(({busy:e,invalid:n,required:t,className:a,noscript:o,children:i,...x},Q)=>s("select",{"aria-busy":e||void 0,"aria-invalid":n||void 0,required:o?t:!1,"aria-required":o?void 0:t,className:G("utrecht-select","utrecht-select--html-select",e&&"utrecht-select--busy",n&&"utrecht-select--invalid",t&&"utrecht-select--required",a),ref:Q,...x,children:i}));l.displayName="Select";const K=J.forwardRef(({disabled:e,invalid:n,value:t,children:a,className:o,...i},x)=>s("option",{...i,ref:x,disabled:e,value:t,className:G("utrecht-select__option",e&&"utrecht-select__option--disabled",n&&"utrecht-select__option--invalid",o),children:a}));K.displayName="SelectOption";try{l.displayName="Select",l.__docgenInfo={description:"",displayName:"Select",props:{busy:{defaultValue:null,description:"",name:"busy",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},noscript:{defaultValue:null,description:"`noscript`: Don't let it affect CSS :invalid",name:"noscript",required:!1,type:{name:"boolean"}}}}}catch{}const oe=`<!-- @license CC0-1.0 -->

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
`,ae={select:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-bottom-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},invalid:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},ie={utrecht:ae},r=[{value:"",label:"Select an option",disabled:!0},{value:"1",label:"Option #1"},{value:"2",label:"Option #2"},{value:"3",label:"Option #3"},{value:"4",label:"Option #4"}],le={title:"React Component/Select",id:"react-select",component:l,parameters:{tokensPrefix:"utrecht-select",tokens:te,tokensDefinition:ie,docs:{page:()=>U(W,{children:[s(X,{children:oe}),s(Z,{}),s(ee,{story:se}),s(re,{})]})}},argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},noscript:{name:"noscript",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},value:{name:"value",type:{name:"string"},table:{category:"HTML attribute",defaultValue:{summary:""}}}},render:({options:e,...n})=>s(l,{...n,children:e&&e.length>0&&e.map(({label:t,value:a,disabled:o},i)=>s(K,{value:a,disabled:o,children:t},i))})},c={args:{options:r}},d={args:{disabled:!0,options:r}},u={args:{required:!0,options:r}},p={args:{required:!0,noscript:!0,options:r}},m={args:{invalid:!0,options:r}},y={args:{options:r},parameters:{pseudo:{focus:!0}}},g={args:{options:r},parameters:{pseudo:{focusVisible:!0,focus:!0}}},h={args:{options:r},parameters:{pseudo:{hover:!0}}},b=ne(le);var f,v,S;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    options
  }
}`,...(S=(v=c.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var $,q,_;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    disabled: true,
    options
  }
}`,...(_=(q=d.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var k,T,R;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    required: true,
    options
  }
}`,...(R=(T=u.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var V,D,O;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    required: true,
    noscript: true,
    options
  }
}`,...(O=(D=p.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var F,H,C;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    invalid: true,
    options
  }
}`,...(C=(H=m.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var M,N,w;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    options
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(w=(N=y.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var L,I,P;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    options
  },
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  }
}`,...(P=(I=g.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var j,z,A;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    options
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(A=(z=h.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var E,Y,B;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:"designTokenStory(meta)",...(B=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:B.source}}};const Te=["Default","Disabled","Required","RequiredServerSideRendering","Invalid","Focus","FocusVisible","Hover","DesignTokens"];export{c as Default,b as DesignTokens,d as Disabled,y as Focus,g as FocusVisible,h as Hover,m as Invalid,u as Required,p as RequiredServerSideRendering,Te as __namedExportsOrder,le as default};
//# sourceMappingURL=Select.stories-02b0c8a0.js.map
