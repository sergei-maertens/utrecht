import{a as A}from"./chunk-NX5DM7EF-03d2d5c1.js";import{b as m,c as e}from"./util-b4cb7c15.js";import"./_commonjsHelpers-725317a4.js";import"./vue.esm-bundler-e07e3e6f.js";import"./index-2812c619.js";import"./chunk-PCJTTTQV-457a1bfc.js";import"./preload-helper-41c905a7.js";import"./chunk-Y5O7ZP4P-aaefc2f2.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./index-f78bb811.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-bf486984.js";import"./chunk-RDJSMFWU-fd275764.js";import"./index-d37d4223.js";import"./index-0c05a4b7.js";import"./isSymbol-1aea413c.js";import"./index-356e4a49.js";import"./chunk-R4NKYYJA-96bb58e6.js";const E='<!-- @license CC0-1.0 -->\n\n# Textarea\n\n## Terminologie\n\n- **textarea**: van het `<textarea>` element in HTML.\n\n## Class names\n\n- `.utrecht-textarea`\n- `.utrecht-textarea--invalid`\n- `.utrecht-textarea--disabled`\n- `.utrecht-textarea--read-only`\n\n## Design tokens\n\n- Textarea:\n  - `--utrecht-textarea-border-bottom-width`\n  - `--utrecht-textarea-border-color`\n  - `--utrecht-textarea-border-radius`\n  - `--utrecht-textarea-border-width`\n  - `--utrecht-textarea-color`\n  - `--utrecht-textarea-font-family`\n  - `--utrecht-textarea-font-size`\n  - `--utrecht-textarea-max-inline-size`\n  - `--utrecht-textarea-padding-block-end`\n  - `--utrecht-textarea-padding-block-start`\n  - `--utrecht-textarea-padding-inline-end`\n  - `--utrecht-textarea-padding-inline-start`\n  - Modifier: `disabled`\n    - `--utrecht-textarea-disabled-border-color`\n    - `--utrecht-textarea-disabled-color`\n  - Modifier: `invalid`\n    - `--utrecht-textarea-invalid-border-color`\n    - `--utrecht-textarea-invalid-border-width`\n  - Modifier: `read-only`:\n    - `--utrecht-textarea-read-only-border-color`\n    - `--utrecht-textarea-read-only-color`\n\n## Privacy\n\nGebruik `spellcheck="false"` voor velden die gevoelige informatie kunnen bevatten, zoals berichten van klokkenluiders, over _responsible disclosure_ van beveiligsproblemen, berichten met medische gegevens, etcetera. Sommige _browser extensions_ voor spellingcontrole sturen deze informatie naar externe servers.\n',j={textarea:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-bottom-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},placeholder:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},invalid:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},"read-only":{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}},B={utrecht:j},r={id:"vue-textarea",title:"Vue.js Component/Textarea",component:m,tags:["autodocs"],argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},readonly:{name:"readonly",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},modelValue:{name:"modelValue",type:{name:"string",required:!1},table:{defaultValue:{summary:"The Quick Brown Fox Jumps Over The Lazy Dog"}}},rows:{name:"rows",type:{name:"number",required:!1}},cols:{name:"cols",type:{name:"number",required:!1}}},args:{},render:()=>({components:{Textarea:m},template:'<Textarea v-bind="$props" @update:modelValue="updateModelValue"><slots></slots></Textarea>',methods:{updateModelValue:A("updateModelValue")}}),parameters:{status:{type:"ALPHA"},tokens:B,tokenPrefix:"utrecht-textarea",docs:{description:{component:E}}}},a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",t=e(r,{name:"Textarea",args:{modelValue:a,name:"default-textarea",id:"default-textarea"}}),n=e(r,{name:"Placeholder",args:{placeholder:"Type your message here...",name:"with-placeholder-textarea",id:"with-placeholder-textarea"}}),s=e(r,{name:"Disabled",args:{modelValue:a,name:"default-textarea",id:"default-textarea",disabled:!0}}),o=e(r,{name:"Invalid",args:{modelValue:a,name:"invalid-textarea",id:"invalid-textarea",invalid:!0}}),i=e(r,{name:"Read-only",args:{modelValue:a,name:"readonly-textarea",id:"readonly-textarea",readonly:!0}}),l=e(r,{name:"Required",args:{name:"required-textarea",id:"required-textarea",required:!0,modelValue:a}}),d=e(r,{name:"Hover",args:{...t.args},parameters:{pseudo:{hover:!0}}}),u=e(r,{name:"Focus",args:{...t.args},parameters:{pseudo:{focus:!0}}}),c=e(r,{name:"Focus-visible",args:{...t.args},parameters:{pseudo:{focus:!0,focusVisible:!0}}});var p,y,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`createStory(meta, {
  name: 'Textarea',
  args: {
    modelValue: loremIpsum,
    name: 'default-textarea',
    id: 'default-textarea'
  }
})`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var g,h,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`createStory(meta, {
  name: 'Placeholder',
  args: {
    placeholder: 'Type your message here...',
    name: 'with-placeholder-textarea',
    id: 'with-placeholder-textarea'
  }
})`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,v,$;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`createStory(meta, {
  name: 'Disabled',
  args: {
    modelValue: loremIpsum,
    name: 'default-textarea',
    id: 'default-textarea',
    disabled: true
  }
})`,...($=(v=s.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var V,q,S;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`createStory(meta, {
  name: 'Invalid',
  args: {
    modelValue: loremIpsum,
    name: 'invalid-textarea',
    id: 'invalid-textarea',
    invalid: true
  }
})`,...(S=(q=o.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var k,w,T;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`createStory(meta, {
  name: 'Read-only',
  args: {
    modelValue: loremIpsum,
    name: 'readonly-textarea',
    id: 'readonly-textarea',
    readonly: true
  }
})`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var D,I,F;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`createStory(meta, {
  name: 'Required',
  args: {
    name: 'required-textarea',
    id: 'required-textarea',
    required: true,
    modelValue: loremIpsum
  }
})`,...(F=(I=l.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var z,R,M;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`createStory(meta, {
  name: 'Hover',
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
})`,...(M=(R=d.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var P,H,_;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`createStory(meta, {
  name: 'Focus',
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
})`,...(_=(H=u.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var C,L,O;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`createStory(meta, {
  name: 'Focus-visible',
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      focus: true,
      focusVisible: true
    }
  }
})`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const ce=["Default","Placeholder","Disabled","Invalid","ReadOnly","Required","Hover","Focus","FocusVisible"];export{t as Default,s as Disabled,u as Focus,c as FocusVisible,d as Hover,o as Invalid,n as Placeholder,i as ReadOnly,l as Required,ce as __namedExportsOrder,r as default};
//# sourceMappingURL=Textarea.stories-ff741334.js.map
