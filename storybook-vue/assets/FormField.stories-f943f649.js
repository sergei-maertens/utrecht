import{b as m,h as D,q as j,j as q,n as A}from"./component-library-vue-59f1c9b6.js";import{t as I,r as P}from"./tokens-48808061.js";import{c as e}from"./util-2647953d.js";import"./vue.esm-bundler-eab5bada.js";import"./chunk-PCJTTTQV-12fd966d.js";import"./iframe-87517707.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-e90b8e62.js";import"./index-356e4a49.js";import"./chunk-R4NKYYJA-96bb58e6.js";const a={id:"vue-form-field",title:"Vue.js Component/Form field",component:m,tags:["autodocs"],argTypes:{type:{name:"type",control:{type:"select"},options:["","checkbox","radio"],type:{required:!1},table:{defaultValue:{summary:""}}}},args:{},render:()=>({components:{Checkbox:D,FormField:m,FormLabel:j,RadioButton:q,Textbox:A},template:'<FormField v-bind="$props"><slot></slot></FormField>'}),parameters:{status:{type:"ALPHA"},tokens:I,tokenPrefix:"utrecht-form-field",docs:{description:{component:P}}}},o=e(a,{name:"Form field with textbox",args:{slot:'<FormLabel for="92eb76ee-c52f-4dc2-b3db-257ab2cba897">Value</FormLabel> <Textbox id="92eb76ee-c52f-4dc2-b3db-257ab2cba897"/>'}}),r=e(a,{name:"Form field with disabled textbox",args:{slot:'<FormLabel for="d846e136-295d-486d-b939-e4e6126873c5" disabled>Value</FormLabel> <Textbox id="d846e136-295d-486d-b939-e4e6126873c5" disabled/>'}}),t=e(a,{name:"Form field with invalid textbox",args:{invalid:!0,slot:'<FormLabel for="d846e136-295d-486d-b939-e4e6126873c5">Value</FormLabel> <Textbox id="d846e136-295d-486d-b939-e4e6126873c5" invalid/>'}}),d=e(a,{name:"Form field with checkbox",args:{slot:'<Checkbox id="8592b5a5-588a-49d9-a14b-f25bc4d58714"/> <FormLabel for="8592b5a5-588a-49d9-a14b-f25bc4d58714" type="checkbox">Value</FormLabel>'}}),b=e(a,{name:"Form field with checked checkbox",args:{slot:'<Checkbox id="9e3eebbf-724f-438b-9466-50e2fa8e3c59" checked /> <FormLabel for="9e3eebbf-724f-438b-9466-50e2fa8e3c59" type="checkbox" checked>Value</FormLabel>'}}),c=e(a,{name:"Form field with radio button",args:{slot:'<RadioButton id="666b0cb1-1e87-4b21-aeaa-0028ba4508a8"/> <FormLabel for="666b0cb1-1e87-4b21-aeaa-0028ba4508a8" type="radio">Value</FormLabel>'}}),s=e(a,{name:"Form field with checked radio button",args:{slot:'<RadioButton id="5a6db203-684b-43bb-8d15-5178952c7a8f" checked /> <FormLabel for="5a6db203-684b-43bb-8d15-5178952c7a8f" type="radio" checked>Value</FormLabel>'}});var i,l,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`createStory(meta, {
  name: 'Form field with textbox',
  args: {
    slot: '<FormLabel for="92eb76ee-c52f-4dc2-b3db-257ab2cba897">Value</FormLabel> <Textbox id="92eb76ee-c52f-4dc2-b3db-257ab2cba897"/>'
  }
})`,...(n=(l=o.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var p,f,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`createStory(meta, {
  name: 'Form field with disabled textbox',
  args: {
    slot: '<FormLabel for="d846e136-295d-486d-b939-e4e6126873c5" disabled>Value</FormLabel> <Textbox id="d846e136-295d-486d-b939-e4e6126873c5" disabled/>'
  }
})`,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var h,F,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`createStory(meta, {
  name: 'Form field with invalid textbox',
  args: {
    invalid: true,
    slot: '<FormLabel for="d846e136-295d-486d-b939-e4e6126873c5">Value</FormLabel> <Textbox id="d846e136-295d-486d-b939-e4e6126873c5" invalid/>'
  }
})`,...(x=(F=t.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var k,y,L;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`createStory(meta, {
  name: 'Form field with checkbox',
  args: {
    slot: '<Checkbox id="8592b5a5-588a-49d9-a14b-f25bc4d58714"/> <FormLabel for="8592b5a5-588a-49d9-a14b-f25bc4d58714" type="checkbox">Value</FormLabel>'
  }
})`,...(L=(y=d.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var g,S,V;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`createStory(meta, {
  name: 'Form field with checked checkbox',
  args: {
    slot: '<Checkbox id="9e3eebbf-724f-438b-9466-50e2fa8e3c59" checked /> <FormLabel for="9e3eebbf-724f-438b-9466-50e2fa8e3c59" type="checkbox" checked>Value</FormLabel>'
  }
})`,...(V=(S=b.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var w,C,v;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`createStory(meta, {
  name: 'Form field with radio button',
  args: {
    slot: '<RadioButton id="666b0cb1-1e87-4b21-aeaa-0028ba4508a8"/> <FormLabel for="666b0cb1-1e87-4b21-aeaa-0028ba4508a8" type="radio">Value</FormLabel>'
  }
})`,...(v=(C=c.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var B,R,T;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`createStory(meta, {
  name: 'Form field with checked radio button',
  args: {
    slot: '<RadioButton id="5a6db203-684b-43bb-8d15-5178952c7a8f" checked /> <FormLabel for="5a6db203-684b-43bb-8d15-5178952c7a8f" type="radio" checked>Value</FormLabel>'
  }
})`,...(T=(R=s.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const W=["Default","Disabled","Invalid","CheckboxStory","CheckboxCheckedStory","RadioButtonStory","RadioButtonCheckedStory"];export{b as CheckboxCheckedStory,d as CheckboxStory,o as Default,r as Disabled,t as Invalid,s as RadioButtonCheckedStory,c as RadioButtonStory,W as __namedExportsOrder,a as default};
//# sourceMappingURL=FormField.stories-f943f649.js.map
