import"./chunk-3CDXZIO2-d7d958bf.js";import{a as V}from"./chunk-WLCP77WC-d18929a8.js";import{o as m,c as e}from"./util-e681879c.js";import"./_commonjsHelpers-725317a4.js";import"./vue.esm-bundler-3980e320.js";import"./index-2812c619.js";import"./chunk-MA2MUXQN-66659f83.js";import"./preload-helper-41c905a7.js";import"./index-62c31eed.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-90100987.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-eb3dc4e7.js";import"./chunk-XHUUYXNA-8149cd2a.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./_getTag-e861206b.js";import"./_baseIsEqual-4d7f9b7e.js";import"./index-8f5d6c0d.js";import"./chunk-R4NKYYJA-96bb58e6.js";const q='<!-- @license CC0-1.0 -->\n\n# Textarea\n\n## Terminologie\n\n- **textarea**: van het `<textarea>` element in HTML.\n\n## Class names\n\n- `.utrecht-textarea`\n- `.utrecht-textarea--invalid`\n- `.utrecht-textarea--disabled`\n- `.utrecht-textarea--read-only`\n\n## Design tokens\n\n- Textarea:\n  - `--utrecht-textarea-border-bottom-width`\n  - `--utrecht-textarea-border-color`\n  - `--utrecht-textarea-border-radius`\n  - `--utrecht-textarea-border-width`\n  - `--utrecht-textarea-color`\n  - `--utrecht-textarea-font-family`\n  - `--utrecht-textarea-font-size`\n  - `--utrecht-textarea-max-inline-size`\n  - `--utrecht-textarea-padding-block-end`\n  - `--utrecht-textarea-padding-block-start`\n  - `--utrecht-textarea-padding-inline-end`\n  - `--utrecht-textarea-padding-inline-start`\n  - Modifier: `disabled`\n    - `--utrecht-textarea-disabled-border-color`\n    - `--utrecht-textarea-disabled-color`\n  - Modifier: `invalid`\n    - `--utrecht-textarea-invalid-border-color`\n    - `--utrecht-textarea-invalid-border-width`\n  - Modifier: `read-only`:\n    - `--utrecht-textarea-read-only-border-color`\n    - `--utrecht-textarea-read-only-color`\n\n## Privacy\n\nGebruik `spellcheck="false"` voor velden die gevoelige informatie kunnen bevatten, zoals berichten van klokkenluiders, over _responsible disclosure_ van beveiligsproblemen, berichten met medische gegevens, etcetera. Sommige _browser extensions_ voor spellingcontrole sturen deze informatie naar externe servers.\n',k={textarea:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-bottom-width":{css:{syntax:"<length>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},"border-radius":{css:{syntax:"<length-percentage>",inherits:!0}},"border-width":{css:{syntax:"<length>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}},"font-family":{css:{syntax:"*",inherits:!0}},"font-size":{css:{syntax:"<length>",inherits:!0}},"line-height":{css:{syntax:"<length>",inherits:!0}},"max-inline-size":{css:{syntax:"<length>",inherits:!0}},"min-block-size":{css:{syntax:"<length>",inherits:!0}},"padding-block-end":{css:{syntax:"<length>",inherits:!0}},"padding-block-start":{css:{syntax:"<length>",inherits:!0}},"padding-inline-end":{css:{syntax:"<length>",inherits:!0}},"padding-inline-start":{css:{syntax:"<length>",inherits:!0}},placeholder:{color:{css:{syntax:"<color>",inherits:!0}}},disabled:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}},focus:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},"border-width":{css:{syntax:"<length>",inherits:!0}}},invalid:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},"border-width":{css:{syntax:"<length>",inherits:!0}}},"read-only":{"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}}}},w={utrecht:k},r={id:"vue-textarea",title:"Vue.js Component/Textarea",component:m,tags:["autodocs"],argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},readonly:{name:"readonly",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},modelValue:{name:"modelValue",type:{name:"string",required:!1},table:{defaultValue:{summary:"The Quick Brown Fox Jumps Over The Lazy Dog"}}},rows:{name:"rows",type:{name:"number",required:!1}},cols:{name:"cols",type:{name:"number",required:!1}}},args:{},render:()=>({components:{Textarea:m},template:'<Textarea v-bind="$props" @update:modelValue="updateModelValue"><slots></slots></Textarea>',methods:{updateModelValue:V("updateModelValue")}}),parameters:{status:{type:"ALPHA"},tokens:w,tokenPrefix:"utrecht-textarea",docs:{description:{component:q}}}},a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",t=e(r,{name:"Textarea",args:{modelValue:a,name:"default-textarea",id:"default-textarea"}}),n=e(r,{name:"Placeholder",args:{placeholder:"Type your message here...",name:"with-placeholder-textarea",id:"with-placeholder-textarea"}}),o=e(r,{name:"Disabled",args:{modelValue:a,name:"default-textarea",id:"default-textarea",disabled:!0}}),s=e(r,{name:"Invalid",args:{modelValue:a,name:"invalid-textarea",id:"invalid-textarea",invalid:!0}}),i=e(r,{name:"Read-only",args:{modelValue:a,name:"readonly-textarea",id:"readonly-textarea",readonly:!0}}),l=e(r,{name:"Required",args:{name:"required-textarea",id:"required-textarea",required:!0,modelValue:a}}),u=e(r,{name:"Hover",args:{...t.args},parameters:{pseudo:{hover:!0}}}),d=e(r,{name:"Focus",args:{...t.args},parameters:{pseudo:{focus:!0}}}),c=e(r,{name:"Focus-visible",args:{...t.args},parameters:{pseudo:{focus:!0,focusVisible:!0}}});var p;t.parameters={...t.parameters,storySource:{source:`createStory(meta, {
  name: 'Textarea',
  args: {
    modelValue: loremIpsum,
    name: 'default-textarea',
    id: 'default-textarea'
  }
})`,...(p=t.parameters)==null?void 0:p.storySource}};var h;n.parameters={...n.parameters,storySource:{source:`createStory(meta, {
  name: 'Placeholder',
  args: {
    placeholder: 'Type your message here...',
    name: 'with-placeholder-textarea',
    id: 'with-placeholder-textarea'
  }
})`,...(h=n.parameters)==null?void 0:h.storySource}};var x;o.parameters={...o.parameters,storySource:{source:`createStory(meta, {
  name: 'Disabled',
  args: {
    modelValue: loremIpsum,
    name: 'default-textarea',
    id: 'default-textarea',
    disabled: true
  }
})`,...(x=o.parameters)==null?void 0:x.storySource}};var y;s.parameters={...s.parameters,storySource:{source:`createStory(meta, {
  name: 'Invalid',
  args: {
    modelValue: loremIpsum,
    name: 'invalid-textarea',
    id: 'invalid-textarea',
    invalid: true
  }
})`,...(y=s.parameters)==null?void 0:y.storySource}};var b;i.parameters={...i.parameters,storySource:{source:`createStory(meta, {
  name: 'Read-only',
  args: {
    modelValue: loremIpsum,
    name: 'readonly-textarea',
    id: 'readonly-textarea',
    readonly: true
  }
})`,...(b=i.parameters)==null?void 0:b.storySource}};var g;l.parameters={...l.parameters,storySource:{source:`createStory(meta, {
  name: 'Required',
  args: {
    name: 'required-textarea',
    id: 'required-textarea',
    required: true,
    modelValue: loremIpsum
  }
})`,...(g=l.parameters)==null?void 0:g.storySource}};var f;u.parameters={...u.parameters,storySource:{source:`createStory(meta, {
  name: 'Hover',
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
})`,...(f=u.parameters)==null?void 0:f.storySource}};var v;d.parameters={...d.parameters,storySource:{source:`createStory(meta, {
  name: 'Focus',
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
})`,...(v=d.parameters)==null?void 0:v.storySource}};var S;c.parameters={...c.parameters,storySource:{source:`createStory(meta, {
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
})`,...(S=c.parameters)==null?void 0:S.storySource}};const K=["Default","Placeholder","Disabled","Invalid","ReadOnly","Required","Hover","Focus","FocusVisible"];export{t as Default,o as Disabled,d as Focus,c as FocusVisible,u as Hover,s as Invalid,n as Placeholder,i as ReadOnly,l as Required,K as __namedExportsOrder,r as default};
//# sourceMappingURL=Textarea.stories-c08754a9.js.map
