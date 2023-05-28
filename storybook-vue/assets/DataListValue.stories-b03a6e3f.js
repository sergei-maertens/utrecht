import{v as c,h as E,y as P}from"./component-library-vue-1c2c5725.js";import{c as a}from"./util-682c1235.js";import{d as T,o as w,b as I,e as M}from"./vue.esm-bundler-e2716445.js";import"./chunk-PCJTTTQV-e11d7f08.js";import"./iframe-9f5767dd.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-e90b8e62.js";import"./index-356e4a49.js";import"./chunk-R4NKYYJA-96bb58e6.js";const $=(e,m)=>{const u=e.__vccOpts||e;for(const[i,p]of m)u[i]=p;return u},A=T({name:"UtrechtURLValue"});const G={translate:"no",class:"utrecht-url"};function H(e,m,u,i,p,N){return w(),I("bdi",G,[M(e.$slots,"default")])}const K=$(A,[["render",H]]);A.__docgenInfo={displayName:"UtrechtURLValue",exportName:"default",description:"",tags:{},slots:[{name:"default"}]};const t={title:"Vue.js Component/Data List/Value",id:"react-data-list--value",component:c,argTypes:{multiline:{type:"boolean",table:{category:"API",defaultValue:{summary:!1}}},notranslate:{type:"boolean",table:{category:"API",defaultValue:{summary:!1}}},value:{type:"string",table:{defaultValue:{summary:void 0}}}},render:e=>({components:{DataList:E,DataListItem:P,DataListValue:c},setup(){return{args:e}},template:`
      <DataList>
        <DataListItem>
          <DataListValue v-bind="$props" v-html="args.slot">
            {{ args.value }}
          </DataListValue>
        </DataListItem>
      </DataList>
    `})},r=a(t,{args:{slot:"Amsterdam",value:"Amsterdam"}}),s=a(t,{args:{notranslate:!0,slot:"Mees de Vos",value:"Mees de Vos"}}),n=a(t,{components:{URLValue:K},props:{value:{type:String,default:"https://example.fi/"}},args:{slot:"<URLValue>https://example.fi/</URLValue>",value:"<URLValue>https://example.fi/</URLValue>",notranslate:!0}}),o=a(t,{args:{slot:"<URLValue>mail@example.fi</URLValue>",value:"<URLValue>mail@example.fi</URLValue>",notranslate:!0}}),l=a(t,{args:{slot:`Tweede Kamer der Staten-Generaal
Postbus 20018
2500 EA Den Haag`,value:`Tweede Kamer der Staten-Generaal
Postbus 20018
2500 EA Den Haag`,multiline:!0}});var d,V,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`createStory(meta, {
  args: {
    slot: 'Amsterdam',
    value: 'Amsterdam'
  }
})`,...(f=(V=r.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};var g,L,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`createStory(meta, {
  args: {
    notranslate: true,
    slot: 'Mees de Vos',
    value: 'Mees de Vos'
  }
})`,...(v=(L=s.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var U,_,y;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`createStory(meta, {
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
})`,...(y=(_=n.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var R,h,S;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`createStory(meta, {
  args: {
    slot: \`<URLValue>mail@example.fi</URLValue>\`,
    value: \`<URLValue>mail@example.fi</URLValue>\`,
    notranslate: true
  }
})`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var D,x,b;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`createStory(meta, {
  args: {
    slot: 'Tweede Kamer der Staten-Generaal\\nPostbus 20018\\n2500 EA Den Haag',
    value: 'Tweede Kamer der Staten-Generaal\\nPostbus 20018\\n2500 EA Den Haag',
    multiline: true
  }
})`,...(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const Y=["Default","NoTranslate","ValueWithURL","ValueWithEmail","MultilineValue"];export{r as Default,l as MultilineValue,s as NoTranslate,o as ValueWithEmail,n as ValueWithURL,Y as __namedExportsOrder,t as default};
//# sourceMappingURL=DataListValue.stories-b03a6e3f.js.map
