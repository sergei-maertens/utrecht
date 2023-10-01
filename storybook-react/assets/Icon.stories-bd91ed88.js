import{j as e,a as h,F as g}from"./jsx-runtime-29545a09.js";import"./chunk-S4VUQJ4A-791b6461.js";import{d as k,P as b,e as y,f as v,g as x}from"./index-dec133bd.js";import{t as S,d as f}from"./util-066ffab3.js";import{c as I}from"./clsx.m-1229b3e0.js";import{r as z}from"./index-76fb7be0.js";import"./iframe-d698d18d.js";import"../sb-preview/runtime.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./index-8d47fad6.js";const n=z.forwardRef(({children:t,className:s,...i},u)=>e("span",{"aria-hidden":"true",ref:u,className:I("utrecht-icon",s),...i,children:t}));n.displayName="Icon";try{n.displayName="Icon",n.__docgenInfo={description:"",displayName:"Icon",props:{}}}catch{}const j=`<!-- @license CC0-1.0 -->

# Iconen in code

## Iconen gebruiken als Custom Element

Eén van de makkelijkste manieren om iconen te gebruiken is door ze te includen in de web component library, zodat je ze als custom element kan gebruiken. Elk icoon is beschikbaar als custom element. De naam van van het icoon (\`utrecht-icon-...\`) is ook de naam van het custom-element. Voorbeeld:

\`\`\`html
<div>
  <utrecht-icon-loupe></utrecht-icon-loupe>
</div>
\`\`\`

Verander de kleur van het icoon via de CSS-eigenschap \`color\` op een parent element of via de custom eigenschap \`--utrecht-icon-color\`.

### \`color\` van de omgevings content

Op onderstaande manier kan je het makkelijkst de kleur aanpassen. De kleur van de bestaande tekst zal ook op het icoon toegepast worden.

\`\`\`html
<button>
  <utrecht-icon-loupe></utrecht-icon-loupe>
  Search
</button>

<style>
  button {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
</style>
\`\`\`

### \`--utrecht-icon-color\` als custom icoon kleur

Deze manier is handig als je een klein verschil wilt aanbrengen tussen de tekst kleur en de kleur van het icoon. Het gebruikt een CSS custom property \`--utrecht-icon-color\` als de kleur van het icoon.

\`\`\`html
<button>
  <utrecht-icon-loupe></utrecht-icon-loupe>
  Search
</button>

<style>
  button {
    --utrecht-icon-color: rgba(255, 255, 255, 0.75);
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
</style>
\`\`\`

### Icoon grootte aanpassen

De grootte van het icoon kan aangepast worden met de \`--utrecht-icon-size\` CSS eigenschap:

\`\`\`html
<button>
  <utrecht-icon-loupe></utrecht-icon-loupe>
  Search
</button>

<style>
  button {
    --utrecht-icon-size: 42px;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
</style>
\`\`\`

## Overzicht van icons

Wanneer het nodig is een overzicht te hebben van de beschikbare icons, gebruik dan als basis de meegeleverde JSON informatie in \`dist/index.json\`. Het bevat een array met onder andere de ID van elke icoon. Op dit moment is de naam van de custom element altijd gelijk aan de ID.
`,_={icon:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}}},"inset-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},baseline:{"inset-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},D={utrecht:_},C={title:"React Component/Icon",id:"react-icon",component:n,args:{children:e("svg",{viewBox:"0 0 1000 1000",children:e("rect",{fill:"currentColor",x:"0",y:"0",width:"1000",height:"1000"})}),color:"green",size:32},parameters:{tokensPrefix:"utrecht-icon",tokens:S,tokensDefinition:D,docs:{page:()=>h(g,{children:[e(k,{children:j}),e(b,{}),e(y,{story:v}),e(x,{})]})}},render:({color:t,size:s,...i})=>e("div",{style:{"--utrecht-icon-color":t,"--utrecht-icon-size":`${s}px`},children:e(n,{...i})})},o={},r=f(C);var a,c,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"designTokenStory(meta)",...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const M=["WithInlineSVG","DesignTokens"];export{r as DesignTokens,o as WithInlineSVG,M as __namedExportsOrder,C as default};
//# sourceMappingURL=Icon.stories-bd91ed88.js.map
