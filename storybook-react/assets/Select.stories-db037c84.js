import{j as u}from"./jsx-runtime-670450c2.js";import{a0 as k,a1 as D}from"./index-8b643457.js";import{t as H,d as R}from"./util-cccc7565.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const F=`<!-- @license CC0-1.0 -->

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
`,L={select:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-bottom-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},invalid:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},M={utrecht:L},C={title:"React Component/Select",id:"react-select",component:k,tags:["autodocs"],parameters:{tokensPrefix:"utrecht-select",tokens:H,tokensDefinition:M,docs:{description:{component:F}}},argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},noscript:{name:"noscript",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},value:{name:"value",type:{name:"string"},table:{category:"HTML attribute",defaultValue:{summary:""}}}}},e=[{value:"",label:"Select an option",disabled:!0},{value:"1",label:"Option #1"},{value:"2",label:"Option #2"},{value:"3",label:"Option #3"},{value:"4",label:"Option #4"}],n=({options:d,...O})=>u(k,{...O,children:d&&d.length>0&&d.map(({label:$,value:q,disabled:T},V)=>u(D,{value:q,disabled:T,children:$},V))}),o=n.bind({});o.args={options:e};const a=n.bind({});a.args={disabled:!0,options:e};const l=n.bind({});l.args={options:e,required:!0};const i=n.bind({});i.args={options:e,required:!0,noscript:!0};const c=n.bind({});c.args={invalid:!0,options:e};const s=n.bind({});s.args={options:e};s.parameters={pseudo:{focus:!0}};const t=n.bind({});t.args={options:e};t.parameters={pseudo:{focusVisible:!0,focus:!0}};const r=n.bind({});r.args={options:e};r.parameters={pseudo:{hover:!0}};const p=R(C);var y;o.parameters={...o.parameters,storySource:{source:`({
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
  </Select>`,...(y=o.parameters)==null?void 0:y.storySource}};var m;a.parameters={...a.parameters,storySource:{source:`({
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
  </Select>`,...(m=a.parameters)==null?void 0:m.storySource}};var b;l.parameters={...l.parameters,storySource:{source:`({
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
  </Select>`,...(b=l.parameters)==null?void 0:b.storySource}};var g;i.parameters={...i.parameters,storySource:{source:`({
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
  </Select>`,...(g=i.parameters)==null?void 0:g.storySource}};var x;c.parameters={...c.parameters,storySource:{source:`({
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
  </Select>`,...(x=c.parameters)==null?void 0:x.storySource}};var S;s.parameters={...s.parameters,storySource:{source:`({
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
  </Select>`,...(S=s.parameters)==null?void 0:S.storySource}};var h;t.parameters={...t.parameters,storySource:{source:`({
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
  </Select>`,...(h=t.parameters)==null?void 0:h.storySource}};var v;r.parameters={...r.parameters,storySource:{source:`({
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
  </Select>`,...(v=r.parameters)==null?void 0:v.storySource}};var f;p.parameters={...p.parameters,storySource:{source:"designTokenStory(meta)",...(f=p.parameters)==null?void 0:f.storySource}};const B=["Default","Disabled","Required","RequiredServerSideRendering","Invalid","Focus","FocusVisible","Hover","DesignTokens"];export{o as Default,p as DesignTokens,a as Disabled,s as Focus,t as FocusVisible,r as Hover,c as Invalid,l as Required,i as RequiredServerSideRendering,B as __namedExportsOrder,C as default};
//# sourceMappingURL=Select.stories-db037c84.js.map
