import{v as o,h as S,y as x,_ as b}from"./component-library-vue-aa1686f3.js";import{c as e}from"./util-aac2ad12.js";import"./vue.esm-bundler-759e87b8.js";import"./chunk-S4VUQJ4A-aea016b7.js";import"./iframe-3fa7035c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-8bfd3a25.js";import"./index-356e4a49.js";const a={title:"Vue.js Component/Data List/Value",id:"react-data-list--value",component:o,argTypes:{multiline:{type:"boolean",table:{category:"API",defaultValue:{summary:!1}}},notranslate:{type:"boolean",table:{category:"API",defaultValue:{summary:!1}}},value:{type:"string",table:{defaultValue:{summary:void 0}}}},render:D=>({components:{DataList:S,DataListItem:x,DataListValue:o},setup(){return{args:D}},template:`
      <DataList>
        <DataListItem>
          <DataListValue v-bind="$props" v-html="args.slot">
            {{ args.value }}
          </DataListValue>
        </DataListItem>
      </DataList>
    `})},t=e(a,{args:{slot:"Amsterdam",value:"Amsterdam"}}),r=e(a,{args:{notranslate:!0,slot:"Mees de Vos",value:"Mees de Vos"}}),s=e(a,{components:{URLValue:b},props:{value:{type:String,default:"https://example.fi/"}},args:{slot:"<URLValue>https://example.fi/</URLValue>",value:"<URLValue>https://example.fi/</URLValue>",notranslate:!0}}),l=e(a,{args:{slot:"<URLValue>mail@example.fi</URLValue>",value:"<URLValue>mail@example.fi</URLValue>",notranslate:!0}}),n=e(a,{args:{slot:`Tweede Kamer der Staten-Generaal
Postbus 20018
2500 EA Den Haag`,value:`Tweede Kamer der Staten-Generaal
Postbus 20018
2500 EA Den Haag`,multiline:!0}});var u,m,i;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`createStory(meta, {
  args: {
    slot: 'Amsterdam',
    value: 'Amsterdam'
  }
})`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`createStory(meta, {
  args: {
    notranslate: true,
    slot: 'Mees de Vos',
    value: 'Mees de Vos'
  }
})`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var V,L,g;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`createStory(meta, {
  components: {
    URLValue: URLValue
  },
  props: {
    value: {
      type: String,
      default: 'https://example.fi/'
    }
  },
  args: {
    // Perhaps "voorbeeld.fi" when translated from English to Dutch
    // "fi" is used so we can test rendering of ligatures is avoided
    slot: \`<URLValue>https://example.fi/</URLValue>\`,
    value: \`<URLValue>https://example.fi/</URLValue>\`,
    notranslate: true
  }
})`,...(g=(L=s.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var f,v,R;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`createStory(meta, {
  args: {
    slot: \`<URLValue>mail@example.fi</URLValue>\`,
    value: \`<URLValue>mail@example.fi</URLValue>\`,
    notranslate: true
  }
})`,...(R=(v=l.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var U,y,h;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`createStory(meta, {
  args: {
    slot: 'Tweede Kamer der Staten-Generaal\\nPostbus 20018\\n2500 EA Den Haag',
    value: 'Tweede Kamer der Staten-Generaal\\nPostbus 20018\\n2500 EA Den Haag',
    multiline: true
  }
})`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const W=["Default","NoTranslate","ValueWithURL","ValueWithEmail","MultilineValue"];export{t as Default,n as MultilineValue,r as NoTranslate,l as ValueWithEmail,s as ValueWithURL,W as __namedExportsOrder,a as default};
//# sourceMappingURL=DataListValue.stories-f5e92bc9.js.map
