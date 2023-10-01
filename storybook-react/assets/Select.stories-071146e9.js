import{j as b}from"./jsx-runtime-29545a09.js";import{t as W,d as X}from"./util-83f1cb40.js";import{c as J}from"./clsx.m-1229b3e0.js";import{r as K}from"./index-76fb7be0.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const i=K.forwardRef(({busy:e,invalid:t,required:r,className:o,noscript:n,children:a,...x},U)=>b("select",{"aria-busy":e||void 0,"aria-invalid":t||void 0,required:n?r:!1,"aria-required":n?void 0:r,className:J("utrecht-select","utrecht-select--html-select",e&&"utrecht-select--busy",t&&"utrecht-select--invalid",r&&"utrecht-select--required",o),ref:U,...x,children:a}));i.displayName="Select";const Q=K.forwardRef(({disabled:e,invalid:t,value:r,children:o,className:n,...a},x)=>b("option",{...a,ref:x,disabled:e,value:r,className:J("utrecht-select__option",e&&"utrecht-select__option--disabled",t&&"utrecht-select__option--invalid",n),children:o}));Q.displayName="SelectOption";try{i.displayName="Select",i.__docgenInfo={description:"",displayName:"Select",props:{busy:{defaultValue:null,description:"",name:"busy",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},noscript:{defaultValue:null,description:"`noscript`: Don't let it affect CSS :invalid",name:"noscript",required:!1,type:{name:"boolean"}}}}}catch{}const Y=`<!-- @license CC0-1.0 -->

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
`,Z={select:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-bottom-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},invalid:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},ee={utrecht:Z},s=[{value:"",label:"Select an option",disabled:!0},{value:"1",label:"Option #1"},{value:"2",label:"Option #2"},{value:"3",label:"Option #3"},{value:"4",label:"Option #4"}],se={title:"React Component/Select",id:"react-select",component:i,parameters:{tokensPrefix:"utrecht-select",tokens:W,tokensDefinition:ee,docs:{description:{component:Y}}},argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},noscript:{name:"noscript",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},value:{name:"value",type:{name:"string"},table:{category:"HTML attribute",defaultValue:{summary:""}}}},render:({options:e,...t})=>b(i,{...t,children:e&&e.length>0&&e.map(({label:r,value:o,disabled:n},a)=>b(Q,{value:o,disabled:n,children:r},a))})},l={args:{options:s}},c={args:{disabled:!0,options:s}},u={args:{required:!0,options:s}},d={args:{required:!0,noscript:!0,options:s}},p={args:{invalid:!0,options:s}},m={args:{options:s},parameters:{pseudo:{focus:!0}}},y={args:{options:s},parameters:{pseudo:{focusVisible:!0,focus:!0}}},g={args:{options:s},parameters:{pseudo:{hover:!0}}},h=X(se);var f,v,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    options
  }
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var $,q,_;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    disabled: true,
    options
  }
}`,...(_=(q=c.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var k,V,T;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    required: true,
    options
  }
}`,...(T=(V=u.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var R,D,H;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    required: true,
    noscript: true,
    options
  }
}`,...(H=(D=d.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var O,N,w;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    invalid: true,
    options
  }
}`,...(w=(N=p.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var C,F,L;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    options
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(L=(F=m.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var M,I,j;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    options
  },
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  }
}`,...(j=(I=y.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var z,E,P;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    options
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(P=(E=g.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var A,B,G;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:"designTokenStory(meta)",...(G=(B=h.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const le=["Default","Disabled","Required","RequiredServerSideRendering","Invalid","Focus","FocusVisible","Hover","DesignTokens"];export{l as Default,h as DesignTokens,c as Disabled,m as Focus,y as FocusVisible,g as Hover,p as Invalid,u as Required,d as RequiredServerSideRendering,le as __namedExportsOrder,se as default};
//# sourceMappingURL=Select.stories-071146e9.js.map
