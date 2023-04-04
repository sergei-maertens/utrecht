import{j as u}from"./jsx-runtime-670450c2.js";import{a3 as E,a4 as K}from"./index-9c8e6906.js";import{t as N,d as Q}from"./util-d8e365e4.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-b4f9149a.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const U=`<!-- @license CC0-1.0 -->

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
`,W={select:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-bottom-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},invalid:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},X={utrecht:W},Y={title:"React Component/Select",id:"react-select",component:E,tags:["autodocs"],parameters:{tokensPrefix:"utrecht-select",tokens:N,tokensDefinition:X,docs:{description:{component:U}}},argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},noscript:{name:"noscript",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},value:{name:"value",type:{name:"string"},table:{category:"HTML attribute",defaultValue:{summary:""}}}}},e=[{value:"",label:"Select an option",disabled:!0},{value:"1",label:"Option #1"},{value:"2",label:"Option #2"},{value:"3",label:"Option #3"},{value:"4",label:"Option #4"}],n=({options:p,...P})=>u(E,{...P,children:p&&p.length>0&&p.map(({label:A,value:B,disabled:G},J)=>u(K,{value:B,disabled:G,children:A},J))}),o=n.bind({});o.args={options:e};const a=n.bind({});a.args={disabled:!0,options:e};const l=n.bind({});l.args={options:e,required:!0};const i=n.bind({});i.args={options:e,required:!0,noscript:!0};const c=n.bind({});c.args={invalid:!0,options:e};const s=n.bind({});s.args={options:e};s.parameters={pseudo:{focus:!0}};const t=n.bind({});t.args={options:e};t.parameters={pseudo:{focusVisible:!0,focus:!0}};const r=n.bind({});r.args={options:e};r.parameters={pseudo:{hover:!0}};const d=Q(Y);var m,g,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`({
  options,
  ...args
}) => <Select {...args}>
    {options && options.length > 0 && options.map(({
    label,
    value,
    disabled
  }, index) => <SelectOption key={index} value={value} disabled={disabled}>
          {label}
        </SelectOption>)}
  </Select>`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,x,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`({
  options,
  ...args
}) => <Select {...args}>
    {options && options.length > 0 && options.map(({
    label,
    value,
    disabled
  }, index) => <SelectOption key={index} value={value} disabled={disabled}>
          {label}
        </SelectOption>)}
  </Select>`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var S,v,f;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`({
  options,
  ...args
}) => <Select {...args}>
    {options && options.length > 0 && options.map(({
    label,
    value,
    disabled
  }, index) => <SelectOption key={index} value={value} disabled={disabled}>
          {label}
        </SelectOption>)}
  </Select>`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var k,O,$;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`({
  options,
  ...args
}) => <Select {...args}>
    {options && options.length > 0 && options.map(({
    label,
    value,
    disabled
  }, index) => <SelectOption key={index} value={value} disabled={disabled}>
          {label}
        </SelectOption>)}
  </Select>`,...($=(O=i.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var q,T,V;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`({
  options,
  ...args
}) => <Select {...args}>
    {options && options.length > 0 && options.map(({
    label,
    value,
    disabled
  }, index) => <SelectOption key={index} value={value} disabled={disabled}>
          {label}
        </SelectOption>)}
  </Select>`,...(V=(T=c.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var D,H,R;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`({
  options,
  ...args
}) => <Select {...args}>
    {options && options.length > 0 && options.map(({
    label,
    value,
    disabled
  }, index) => <SelectOption key={index} value={value} disabled={disabled}>
          {label}
        </SelectOption>)}
  </Select>`,...(R=(H=s.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var F,L,M;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`({
  options,
  ...args
}) => <Select {...args}>
    {options && options.length > 0 && options.map(({
    label,
    value,
    disabled
  }, index) => <SelectOption key={index} value={value} disabled={disabled}>
          {label}
        </SelectOption>)}
  </Select>`,...(M=(L=t.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var C,w,j;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`({
  options,
  ...args
}) => <Select {...args}>
    {options && options.length > 0 && options.map(({
    label,
    value,
    disabled
  }, index) => <SelectOption key={index} value={value} disabled={disabled}>
          {label}
        </SelectOption>)}
  </Select>`,...(j=(w=r.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var z,I,_;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:"designTokenStory(meta)",...(_=(I=d.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const le=["Default","Disabled","Required","RequiredServerSideRendering","Invalid","Focus","FocusVisible","Hover","DesignTokens"];export{o as Default,d as DesignTokens,a as Disabled,s as Focus,t as FocusVisible,r as Hover,c as Invalid,l as Required,i as RequiredServerSideRendering,le as __namedExportsOrder,Y as default};
//# sourceMappingURL=Select.stories-4316ee06.js.map
