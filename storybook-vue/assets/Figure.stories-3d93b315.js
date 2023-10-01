import{k as e,q as n,I as a}from"./component-library-vue-7f29fc47.js";import{c as p}from"./util-3a6de975.js";import"./vue.esm-bundler-759e87b8.js";import"./chunk-S4VUQJ4A-84885f94.js";import"./iframe-96c9be4f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-8bfd3a25.js";import"./index-356e4a49.js";const l=`<!-- @license CC0-1.0 -->

# Figure
`,c={figure:{"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},caption:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},u={utrecht:c},m={id:"vue-figure",title:"Vue.js Component/Figure",component:e,tags:["autodocs"],argTypes:{slot:{name:"slot",control:{type:"text"},type:{required:!1},table:{defaultValue:{summary:""}}},caption:{name:"caption",control:{type:"text"},type:{required:!1},table:{defaultValue:{summary:""}}}},render:i=>({setup(){return{args:i}},components:{Figure:e,FigureCaption:n,Image:a},template:'<Figure v-bind="$props"><slot></slot><FigureCaption v-html="args.caption"></FigureCaption></Figure>'}),parameters:{status:{type:"ALPHA"},tokens:u,tokenPrefix:"utrecht-emphasis",docs:{description:{component:l}}}},t=p(m,{name:"Figure",component:e,components:{Figure:e,FigureCaption:n,Image:a},args:{slot:`<Image
        src="example/photo-nijntje-vuelta.jpg"
        width="2048"
        height="1536"
        :photo="true"
        alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
      />`,caption:`Fotograaf: Gemeente Utrecht<br />
              Titel: Nijntje Vuelta<br />
              Locatie: Stadsplateau<br />
              Geplaatst: 17 augustus 2022<br />
              <Link
                title='&apos;Nijntje / Vuelta&apos; op Flickr'
                external
                href='https://www.flickr.com/photos/gemeenteutrecht/52287504255/in/dateposted-public/'>
                Bron: Flickr
              </Link>`}});var r,s,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`createStory(meta, {
  name: 'Figure',
  component: Figure,
  components: {
    Figure,
    FigureCaption,
    Image
  },
  args: {
    slot: \`<Image
        src="example/photo-nijntje-vuelta.jpg"
        width="2048"
        height="1536"
        :photo="true"
        alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
      />\`,
    caption: \`Fotograaf: Gemeente Utrecht<br />
              Titel: Nijntje Vuelta<br />
              Locatie: Stadsplateau<br />
              Geplaatst: 17 augustus 2022<br />
              <Link
                title='&apos;Nijntje / Vuelta&apos; op Flickr'
                external
                href='https://www.flickr.com/photos/gemeenteutrecht/52287504255/in/dateposted-public/'>
                Bron: Flickr
              </Link>\`
  }
})`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const V=["Default"];export{t as Default,V as __namedExportsOrder,m as default};
//# sourceMappingURL=Figure.stories-3d93b315.js.map
