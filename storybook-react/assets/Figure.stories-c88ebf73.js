import{j as t,a as c}from"./jsx-runtime-670450c2.js";import{F as o,I as p,L as u,q as l}from"./index-4c4c2035.js";import{t as m,d as h}from"./util-88302b45.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const g=`<!-- @license CC0-1.0 -->

# Figure
`,d={figure:{"margin-block-end":{css:{syntax:"<length>",inherits:!0}},"margin-block-start":{css:{syntax:"<length>",inherits:!0}},caption:{color:{css:{syntax:"<color>",inherits:!0}},"font-size":{css:{syntax:"<length>",inherits:!0}},"line-height":{css:{syntax:"<length>",inherits:!0}}}}},f={utrecht:d},k={title:"React Component/Figure",id:"react-figure",component:o,argTypes:{caption:{type:{name:"string",required:!0}}},tags:["autodocs"],parameters:{tokensPrefix:"utrecht-figure",tokens:m,tokensDefinition:f,docs:{description:{component:g}}}},j=({caption:i,children:a})=>c(o,{children:[a,t(l,{children:i})]}),e=j.bind({});e.args={children:t(p,{src:"example/photo-nijntje-vuelta.jpg",width:2048,height:1536,photo:!0,alt:"Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"}),caption:["Fotograaf: Gemeente Utrecht",t("br",{}),"Titel: Nijntje Vuelta",t("br",{}),"Locatie: Stadsplateau",t("br",{}),"Geplaatst: 17 augustus 2022",t("br",{}),t(u,{href:"https://www.flickr.com/photos/gemeenteutrecht/52287504255/in/dateposted-public/",external:!0,title:"'Nijntje / Vuelta' op Flickr",children:"Bron: Flickr"})]};const r=h(k);var n;e.parameters={...e.parameters,storySource:{source:`({
  caption,
  children
}) => <Figure>
    {children}
    <FigureCaption>{caption}</FigureCaption>
  </Figure>`,...(n=e.parameters)==null?void 0:n.storySource}};var s;r.parameters={...r.parameters,storySource:{source:"designTokenStory(meta)",...(s=r.parameters)==null?void 0:s.storySource}};const w=["Default","DesignTokens"];export{e as Default,r as DesignTokens,w as __namedExportsOrder,k as default};
//# sourceMappingURL=Figure.stories-c88ebf73.js.map
