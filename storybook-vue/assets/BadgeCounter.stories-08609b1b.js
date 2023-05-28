import{c as t}from"./component-library-vue-1c2c5725.js";import{c as a}from"./util-682c1235.js";import"./vue.esm-bundler-e2716445.js";import"./chunk-PCJTTTQV-e11d7f08.js";import"./iframe-9f5767dd.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-e90b8e62.js";import"./index-356e4a49.js";import"./chunk-R4NKYYJA-96bb58e6.js";const i=`<!-- @license CC0-1.0 -->

# Counter badge
`,c={"badge-counter":{"background-color":{comment:"Default background color for badge components",$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-radius":{comment:"Default corner radius for badge components",$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}},type:"borderRadius"},color:{comment:"Default text color for badge components",$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"fontSizes"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},"padding-block":{comment:"Default block padding for badge components",$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-inline":{comment:"Default inline padding color for badge components",$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"}}},p={utrecht:c},m={id:"vue-badge-counter",title:"Vue.js Component/Badge Counter",component:t,tags:["autodocs"],args:{value:"42"},argTypes:{name:"Value",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}},parameters:{status:{type:"ALPHA"},tokenPrefix:"utrecht-badge-counter",tokens:p,docs:{description:{component:i}}},render:r=>({components:{BadgeCounter:t},setup(){return{args:r}},template:`
      <BadgeCounter v-bind="$props">
        <slot></slot>
      </BadgeCounter>
    `})},e=a(m,{args:{slot:"42"}});var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`createStory(meta, {
  args: {
    slot: '42'
  }
})`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,m as default};
//# sourceMappingURL=BadgeCounter.stories-08609b1b.js.map
