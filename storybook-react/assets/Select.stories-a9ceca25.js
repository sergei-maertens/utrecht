import{j as p}from"./jsx-runtime-670450c2.js";import{$ as k,a0 as H}from"./index-4c4c2035.js";import{t as R,d as F}from"./util-88302b45.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const L=`<!-- @license CC0-1.0 -->

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
`,M={select:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-bottom-width":{css:{syntax:"<length>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},"border-radius":{css:{syntax:"<length-percentage>",inherits:!0}},"border-width":{css:{syntax:"<length>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}},"font-family":{css:{syntax:"*",inherits:!0}},"font-size":{css:{syntax:"<length>",inherits:!0}},"max-inline-size":{css:{syntax:"<length>",inherits:!0}},"padding-block-end":{css:{syntax:"<length>",inherits:!0}},"padding-block-start":{css:{syntax:"<length>",inherits:!0}},"padding-inline-end":{css:{syntax:"<length>",inherits:!0}},"padding-inline-start":{css:{syntax:"<length>",inherits:!0}},disabled:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}},focus:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}},invalid:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},"border-width":{css:{syntax:"<length>",inherits:!0}}}}},C={utrecht:M},w={title:"React Component/Select",id:"react-select",component:k,tags:["autodocs"],parameters:{tokensPrefix:"utrecht-select",tokens:R,tokensDefinition:C,docs:{description:{component:L}}},argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},noscript:{name:"noscript",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},value:{name:"value",type:{name:"string"},table:{category:"HTML attribute",defaultValue:{summary:""}}}}},e=[{value:"",label:"Select an option",disabled:!0},{value:"1",label:"Option #1"},{value:"2",label:"Option #2"},{value:"3",label:"Option #3"},{value:"4",label:"Option #4"}],t=({options:d,...O})=>p(k,{...O,children:d&&d.length>0&&d.map(({label:q,value:T,disabled:V},D)=>p(H,{value:T,disabled:V,children:q},D))}),a=t.bind({});a.args={options:e};const o=t.bind({});o.args={disabled:!0,options:e};const l=t.bind({});l.args={options:e,required:!0};const i=t.bind({});i.args={options:e,required:!0,noscript:!0};const c=t.bind({});c.args={invalid:!0,options:e};const n=t.bind({});n.args={options:e};n.parameters={pseudo:{focus:!0}};const s=t.bind({});s.args={options:e};s.parameters={pseudo:{focusVisible:!0,focus:!0}};const r=t.bind({});r.args={options:e};r.parameters={pseudo:{hover:!0}};const u=F(w);var b;a.parameters={...a.parameters,storySource:{source:`({
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
  </Select>`,...(b=a.parameters)==null?void 0:b.storySource}};var m;o.parameters={...o.parameters,storySource:{source:`({
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
  </Select>`,...(m=o.parameters)==null?void 0:m.storySource}};var y;l.parameters={...l.parameters,storySource:{source:`({
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
  </Select>`,...(y=l.parameters)==null?void 0:y.storySource}};var g;i.parameters={...i.parameters,storySource:{source:`({
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
  </Select>`,...(g=i.parameters)==null?void 0:g.storySource}};var S;c.parameters={...c.parameters,storySource:{source:`({
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
  </Select>`,...(S=c.parameters)==null?void 0:S.storySource}};var h;n.parameters={...n.parameters,storySource:{source:`({
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
  </Select>`,...(h=n.parameters)==null?void 0:h.storySource}};var v;s.parameters={...s.parameters,storySource:{source:`({
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
  </Select>`,...(v=s.parameters)==null?void 0:v.storySource}};var x;r.parameters={...r.parameters,storySource:{source:`({
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
  </Select>`,...(x=r.parameters)==null?void 0:x.storySource}};var f;u.parameters={...u.parameters,storySource:{source:"designTokenStory(meta)",...(f=u.parameters)==null?void 0:f.storySource}};const B=["Default","Disabled","Required","RequiredServerSideRendering","Invalid","Focus","FocusVisible","Hover","DesignTokens"];export{a as Default,u as DesignTokens,o as Disabled,n as Focus,s as FocusVisible,r as Hover,c as Invalid,l as Required,i as RequiredServerSideRendering,B as __namedExportsOrder,w as default};
//# sourceMappingURL=Select.stories-a9ceca25.js.map
