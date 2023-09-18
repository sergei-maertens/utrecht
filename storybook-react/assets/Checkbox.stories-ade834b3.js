import{a as G,F,j as e}from"./jsx-runtime-29545a09.js";import"./chunk-S4VUQJ4A-5c09df8d.js";import{D as V,P as j,A as H,b as L,d as P}from"./index-19fcf018.js";import{C as B}from"./index-d6d1e8d0.js";import{t as E,d as M}from"./util-7a3e2898.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8f7ce0a1.js";import"../sb-preview/runtime.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./defineProperty-75c483e5.js";import"./clsx.m-1229b3e0.js";import"./index-8d47fad6.js";const q=`<!-- @license CC0-1.0 -->

# Checkbox

## Terminologie

- **checkbox**: \`type="checkbox"\` in HTML, [\`role="checkbox"\`](https://www.w3.org/TR/wai-aria-1.2/#checkbox) in WAI-ARIA 1.2, "checkbox" in [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.2/#checkbox).
- **checked**: \`checked\` attribuut in HTML, \`aria-checked="true"\` in [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/#aria-checked), \`:checked\` pseudo-class in CSS.

## Class names

- \`utrecht-checkbox\`

## Introduction

Checkboxes are usually used to provide a way for users to make a range of selections (zero, one or more). They can also be used to tell users that they agree to specific terms.

## When to use

Checkboxes are used for multiple choices, not for mutually exclusive choices. Each checkbox works independently from other checkboxes in the list, therefore checking an additional box does not affect any other selections.

### Forms

Can be used in forms on a full page or in modals.

### Terms and conditions

Turning the checkbox input on or off can indicate whether you agree to the terms.

## Alternatives and related components

Use radio buttons to display a list of options where users can only make one choice.

## Anatomy

The checkbox consists of:

1. Label (optional): indicates what should be selected below.
2. Checkbox input: a checkbox input that indicates the correct status. By default it is not active.
3. Checkbox label: describes the information you can select or deselect.
4. Helper text (optional): displays more information about the checkboxes

## (Interactive) states

The checkbox contains the states normal, hover, disabled, error and focus.

## Accessibility

Screen readers automatically report the status of the check box.

### Labeling

### External links

### Keyboard support

- Move focus to each checkbox using the tab key (or shift + tab when tabbing backwards)
- Activate or deactivate checkboxes with the space key

## Content guidelines

### Checkbox labels

Checkbox labels must:

- Start with a capital letter
- Not end in punctuation if it’s a single sentence, word, or a fragment
- In case the checkbox asks to agree to the terms and conditions, use the first person

## Best practices

### Do's

Checkboxes must:

- Work independently of each other: selecting a checkbox may not change the selection status of another checkbox in the list.
- Be positively boxed: for example “Enable notifications” instead of “Disable notifications”.
- Always have a label handy when you use it to turn a setting on or off.
- Use label tags as click targets.
- Be arranged in a logical order, whether alphabetical, numeric, time-based or some other clear system.
- Link to more information or have a subtitle for more explanation. Don't rely on tooltips to explain a checkbox.
- If they are too long, run over the second line. This is preferable than truncation.
- If they are too long, they will be aligned left
- If they are too long, let the text flow under the checkbox so that the control and label are aligned at the top.

### Don'ts

Checkboxes must:

- Not cut with an omit task if the label is too long and run over 2 lines.

## Relevante WCAG eisen

- [WCAG eis 1.3.5](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html):
  - Gebruik \`aria-controls\` als de checkbox een regio zichtbaar of onzichtbaar maakt.
- [WCAG eis 2.4.7](https://www.w3.org/TR/WCAG21/#focus-visible): focus moet zichtbaar zijn.
- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): de checkbox moet groot genoeg zijn om aan te klikken, ten minste 44×44px.

## References

- [https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)
- [https://uxplanet.org/checkbox-and-toggle-in-forms-f0de6086ac41](https://uxplanet.org/checkbox-and-toggle-in-forms-f0de6086ac41)
`,U={checkbox:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderRadius"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"},icon:{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},active:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},type:"color"}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},hover:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},disabled:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},checked:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},indeterminate:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},invalid:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}},_={utrecht:U},N={title:"React Component/Checkbox",id:"react-checkbox",component:B,parameters:{tokensPrefix:"utrecht-checkbox",tokens:E,tokensDefinition:_,docs:{page:()=>G(F,{children:[e(V,{children:q}),e(j,{}),e(H,{story:L}),e(P,{})]})}},argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},value:{name:"value",type:{name:"string",required:!1}}}},s={},t={args:{checked:!0}},n={args:{checked:!0,disabled:!0}},o={args:{disabled:!0}},r={parameters:{pseudo:{hover:!0}}},i={parameters:{pseudo:{focus:!0}}},a={parameters:{pseudo:{focusVisible:!0,focus:!0}}},c=M(N);var l,d,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,u,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var m,b,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var g,k,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var w,$,C;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(C=($=r.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var A,v,T;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var W,S,D;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  }
}`,...(D=(S=a.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var R,I,z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:"designTokenStory(meta)",...(z=(I=c.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};const he=["Default","Checked","CheckedAndDisabled","Disabled","Hover","Focus","FocusVisible","DesignTokens"];export{t as Checked,n as CheckedAndDisabled,s as Default,c as DesignTokens,o as Disabled,i as Focus,a as FocusVisible,r as Hover,he as __namedExportsOrder,N as default};
//# sourceMappingURL=Checkbox.stories-ade834b3.js.map
