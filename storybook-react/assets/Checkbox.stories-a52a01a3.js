import{j as L}from"./jsx-runtime-670450c2.js";import{C as F}from"./index-a46fd29c.js";import{t as V,d as j}from"./util-4bd81ba5.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-b4f9149a.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const B=`<!-- @license CC0-1.0 -->

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
`,E={checkbox:{}},q={utrecht:E},M={title:"React Component/Checkbox",id:"react-checkbox",component:F,tags:["autodocs"],parameters:{tokensPrefix:"utrecht-checkbox",tokens:V,tokensDefinition:q,docs:{description:{component:B}}},argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},value:{name:"value",type:{name:"string",required:!1}}}},e=H=>L(F,{...H}),c=e.bind({}),o=e.bind({});o.args={checked:!0};const t=e.bind({});t.args={checked:!0,disabled:!0};const a=e.bind({});a.args={disabled:!0};const n=e.bind({});n.parameters={pseudo:{hover:!0}};const s=e.bind({});s.parameters={pseudo:{focus:!0}};const r=e.bind({});r.parameters={pseudo:{focusVisible:!0}};const i=j(M);var l,h,d;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Checkbox {...args} />",...(d=(h=c.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var u,b,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Checkbox {...args} />",...(m=(b=o.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var p,k,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Checkbox {...args} />",...(g=(k=t.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var f,x,w;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"args => <Checkbox {...args} />",...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var y,C,A;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:"args => <Checkbox {...args} />",...(A=(C=n.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var v,T,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:"args => <Checkbox {...args} />",...(S=(T=s.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var D,I,W;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:"args => <Checkbox {...args} />",...(W=(I=r.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var R,G,z;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:"designTokenStory(meta)",...(z=(G=i.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};const X=["Default","Checked","CheckedAndDisabled","Disabled","Hover","Focus","FocusVisible","DesignTokens"];export{o as Checked,t as CheckedAndDisabled,c as Default,i as DesignTokens,a as Disabled,s as Focus,r as FocusVisible,n as Hover,X as __namedExportsOrder,M as default};
//# sourceMappingURL=Checkbox.stories-a52a01a3.js.map
