import{a as $}from"./chunk-AY7I2SME-c7b6cf8a.js";import{p as i}from"./component-library-vue-7f29fc47.js";import{c as e}from"./util-c8c5d082.js";import"./vue.esm-bundler-759e87b8.js";import"./chunk-S4VUQJ4A-784cce8c.js";import"./iframe-b629b9e6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-8bfd3a25.js";import"./index-356e4a49.js";const C=`<!-- @license CC0-1.0 -->

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
`,A={checkbox:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderRadius"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"},icon:{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},active:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},type:"color"}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},hover:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},disabled:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},checked:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},indeterminate:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},invalid:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}},W={utrecht:A},n={id:"vue-checkbox",title:"Vue.js Component/Checkbox",component:i,tags:["autodocs"],argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},modelValue:{name:"modelValue",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}},value:{name:"value",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}}},args:{},render:()=>({components:{Checkbox:i},template:'<Checkbox v-bind="$props" @update:modelValue="updateModelValue"></Checkbox>',methods:{updateModelValue:$("updateModelValue")}}),parameters:{status:{type:"ALPHA"},tokens:W,tokenPrefix:"utrecht-checkbox",docs:{description:{component:C}}}},t=e(n,{name:"Checkbox",args:{checked:!0,name:"example-checkbox",value:"optional value"}}),o=e(n,{name:"Checked",args:{modelValue:"true",name:"example-checkbox",value:"optional value"}}),s=e(n,{name:"Disabled",args:{disabled:!0,name:"example-checkbox",value:"optional value"}}),r=e(n,{name:"Disabled and checked",args:{disabled:!0,modelValue:"true",name:"example-checkbox",value:"optional value"}}),a=e(n,{name:"Invalid",args:{invalid:!0,name:"example-checkbox",value:"optional value"}});var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`createStory(meta, {
  name: 'Checkbox',
  args: {
    checked: true,
    name: 'example-checkbox',
    value: 'optional value'
  }
})`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,h,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`createStory(meta, {
  name: 'Checked',
  args: {
    modelValue: 'true',
    name: 'example-checkbox',
    value: 'optional value'
  }
})`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var m,y,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`createStory(meta, {
  name: 'Disabled',
  args: {
    disabled: true,
    name: 'example-checkbox',
    value: 'optional value'
  }
})`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,g,k;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`createStory(meta, {
  name: 'Disabled and checked',
  args: {
    disabled: true,
    modelValue: 'true',
    name: 'example-checkbox',
    value: 'optional value'
  }
})`,...(k=(g=r.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var f,w,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`createStory(meta, {
  name: 'Invalid',
  args: {
    invalid: true,
    name: 'example-checkbox',
    value: 'optional value'
  }
})`,...(v=(w=a.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const B=["Default","Checked","Disabled","DisabledChecked","Invalid"];export{o as Checked,t as Default,s as Disabled,r as DisabledChecked,a as Invalid,B as __namedExportsOrder,n as default};
//# sourceMappingURL=Checkbox.stories-5a8a43f4.js.map
