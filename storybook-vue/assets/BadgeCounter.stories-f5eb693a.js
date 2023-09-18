import{a3 as t}from"./component-library-vue-aa1686f3.js";import{c as a}from"./util-483afb05.js";import"./vue.esm-bundler-759e87b8.js";import"./chunk-S4VUQJ4A-85661bb1.js";import"./iframe-934deca8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-8bfd3a25.js";import"./index-356e4a49.js";const i=`<!-- @license CC0-1.0 -->

# Counter badge
`,c={"badge-counter":{"background-color":{comment:"Default background color for badge components",$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-radius":{comment:"Default corner radius for badge components",$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}},type:"borderRadius"},color:{comment:"Default text color for badge components",$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"fontSizes"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},"padding-block":{comment:"Default block padding for badge components",$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-inline":{comment:"Default inline padding color for badge components",$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"}}},p={utrecht:c},l={id:"vue-badge-counter",title:"Vue.js Component/Badge Counter",component:t,tags:["autodocs"],args:{value:"42"},argTypes:{value:{name:"Value",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}}},parameters:{status:{type:"ALPHA"},tokenPrefix:"utrecht-badge-counter",tokens:p,docs:{description:{component:i}}},render:r=>({components:{BadgeCounter:t},setup(){return{args:r}},template:`
      <BadgeCounter v-bind="$props">
        <slot></slot>
      </BadgeCounter>
    `})},e=a(l,{args:{slot:"42"}});var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`createStory(meta, {
  args: {
    slot: '42'
  }
})`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const $=["Default"];export{e as Default,$ as __namedExportsOrder,l as default};
//# sourceMappingURL=BadgeCounter.stories-f5eb693a.js.map
