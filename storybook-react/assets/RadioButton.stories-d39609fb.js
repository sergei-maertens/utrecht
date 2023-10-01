import{t as Z,d as J}from"./util-83f1cb40.js";import{j as K}from"./jsx-runtime-29545a09.js";import{c as Q}from"./clsx.m-1229b3e0.js";import{r as U}from"./index-76fb7be0.js";import{F as X}from"./FormLabel-6d569a5a.js";import{F as Y}from"./FormField-29196f12.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const l=U.forwardRef(({disabled:u,required:P,className:W,invalid:p,...G},O)=>K("input",{type:"radio","aria-invalid":p||void 0,disabled:u,required:P,ref:O,className:Q("utrecht-radio-button","utrecht-radio-button--html-input",u&&"utrecht-radio-button--disabled",p&&"utrecht-radio-button--invalid",W),...G}));l.displayName="RadioButton";try{l.displayName="RadioButton",l.__docgenInfo={description:"",displayName:"RadioButton",props:{invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const ee=`<!-- @license CC0-1.0 -->

# Radio button

## Design

Zorg dat de radio button herkenbaar is, doordat die lijkt op radio buttons op andere websites. Maak niet heel bijzonder ontwerp dat onduidelijk is voor veel gebruikers.

- Een radio button is rond, niet een vierkant of een ruit.
- Een radio button heeft een ronde cirkel als _checked_ icoon.
- Gebruik voor de radio button geen checkmark icoon (een vinkje), dat zou verwarrend zijn. Door een checkmark lijkt het alsof je meerdere opties kunt selecteren, terwijl dat niet zo is.

## Terminologie

- **radio button**: "Radio button" heeft [een Wikipedia-lemma](https://en.wikipedia.org/wiki/Radio_button), [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) noemt het ook "radio button" en "radio group".
- **checked**: [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) en HTML noemen de staat van de radio button "checked", CSS heeft de \`:checked\` pseudo-class.

## Class names

- \`.utrecht-radio-button\`
`,se={"radio-button":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<percentage>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},icon:{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},active:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},checked:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},active:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},hover:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},hover:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},disabled:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},invalid:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}},re={utrecht:se},te={title:"React Component/Radio Button",id:"react-radio-button",component:l,subcomponents:{FormLabel:X,FormField:Y},parameters:{tokensPrefix:"utrecht-radio-button",tokens:Z,tokensDefinition:re,docs:{description:{component:ee}}},argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1},category:"HTML attribute"}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1},category:"HTML attribute"}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1},category:"HTML attribute"}},value:{name:"value",type:{name:"string",required:!1},table:{category:"HTML attribute"}}}},s={},r={parameters:{pseudo:{hover:!0}}},t={parameters:{pseudo:{focus:!0}}},n={parameters:{pseudo:{focusVisible:!0}}},e={args:{checked:!0,value:"checked"}};e.args={checked:!0,value:"checked"};const o={args:{checked:!0,disabled:!0}},i={args:{disabled:!0}},a={args:{invalid:!0}},c={args:{required:!0}},d=J(te);var y,m,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,x,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var k,$,f;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(f=($=t.parameters)==null?void 0:$.docs)==null?void 0:f.source}}};var v,w,R;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focusVisible: true
    }
  }
}`,...(R=(w=n.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var S,T,_;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    checked: true,
    value: 'checked'
  }
}`,...(_=(T=e.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var q,D,j;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(j=(D=o.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var A,C,F;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(F=(C=i.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var V,H,I;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(I=(H=a.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var z,L,M;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var B,E,N;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:"designTokenStory(meta)",...(N=(E=d.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const pe=["Default","Hover","Focus","FocusVisible","Checked","CheckedAndDisabled","Disabled","Invalid","Required","DesignTokens"];export{e as Checked,o as CheckedAndDisabled,s as Default,d as DesignTokens,i as Disabled,t as Focus,n as FocusVisible,r as Hover,a as Invalid,c as Required,pe as __namedExportsOrder,te as default};
//# sourceMappingURL=RadioButton.stories-d39609fb.js.map
