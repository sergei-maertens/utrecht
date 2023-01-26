import"./chunk-3CDXZIO2-d7d958bf.js";import{a as d}from"./chunk-WLCP77WC-d18929a8.js";import{V as c,c as e}from"./util-44fa04bd.js";import"./_commonjsHelpers-725317a4.js";import"./vue.esm-bundler-3980e320.js";import"./index-2812c619.js";import"./chunk-MA2MUXQN-66659f83.js";import"./preload-helper-41c905a7.js";import"./index-62c31eed.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-90100987.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-eb3dc4e7.js";import"./chunk-XHUUYXNA-8149cd2a.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./_getTag-e861206b.js";import"./_baseIsEqual-4d7f9b7e.js";import"./index-8f5d6c0d.js";import"./chunk-R4NKYYJA-96bb58e6.js";const p=`<!-- @license CC0-1.0 -->

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
`,b={checkbox:{}},k={utrecht:b},a={id:"vue-checkbox",title:"Vue.js Component/Checkbox",component:c,tags:["autodocs"],argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},modelValue:{name:"modelValue",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}},value:{name:"value",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}}},args:{},render:()=>({components:{Checkbox:c},template:'<Checkbox v-bind="$props" @update:modelValue="updateModelValue"></Checkbox>',methods:{updateModelValue:d("updateModelValue")}}),parameters:{status:{type:"ALPHA"},tokens:k,tokenPrefix:"utrecht-checkbox",docs:{description:{component:p}}}},t=e(a,{name:"Checkbox",args:{checked:!0,name:"example-checkbox",value:"optional value"}}),n=e(a,{name:"Checked",args:{modelValue:"true",name:"example-checkbox",value:"optional value"}}),o=e(a,{name:"Disabled",args:{disabled:!0,name:"example-checkbox",value:"optional value"}}),r=e(a,{name:"Disabled and checked",args:{disabled:!0,modelValue:"true",name:"example-checkbox",value:"optional value"}}),s=e(a,{name:"Invalid",args:{invalid:!0,name:"example-checkbox",value:"optional value"}});var i;t.parameters={...t.parameters,storySource:{source:`createStory(meta, {
  name: 'Checkbox',
  args: {
    checked: true,
    name: 'example-checkbox',
    value: 'optional value'
  }
})`,...(i=t.parameters)==null?void 0:i.storySource}};var l;n.parameters={...n.parameters,storySource:{source:`createStory(meta, {
  name: 'Checked',
  args: {
    modelValue: 'true',
    name: 'example-checkbox',
    value: 'optional value'
  }
})`,...(l=n.parameters)==null?void 0:l.storySource}};var u;o.parameters={...o.parameters,storySource:{source:`createStory(meta, {
  name: 'Disabled',
  args: {
    disabled: true,
    name: 'example-checkbox',
    value: 'optional value'
  }
})`,...(u=o.parameters)==null?void 0:u.storySource}};var h;r.parameters={...r.parameters,storySource:{source:`createStory(meta, {
  name: 'Disabled and checked',
  args: {
    disabled: true,
    modelValue: 'true',
    name: 'example-checkbox',
    value: 'optional value'
  }
})`,...(h=r.parameters)==null?void 0:h.storySource}};var m;s.parameters={...s.parameters,storySource:{source:`createStory(meta, {
  name: 'Invalid',
  args: {
    invalid: true,
    name: 'example-checkbox',
    value: 'optional value'
  }
})`,...(m=s.parameters)==null?void 0:m.storySource}};const H=["Default","Checked","Disabled","DisabledChecked","Invalid"];export{n as Checked,t as Default,o as Disabled,r as DisabledChecked,s as Invalid,H as __namedExportsOrder,a as default};
//# sourceMappingURL=Checkbox.stories-0d966567.js.map
