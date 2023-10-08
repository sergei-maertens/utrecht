import{j as e}from"./jsx-runtime-29545a09.js";import{t as h,d as g}from"./util-5e11045c.js";import{c as k}from"./clsx.m-1229b3e0.js";import{r as b}from"./index-76fb7be0.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const n=b.forwardRef(({children:t,className:s,...c},p)=>e("span",{"aria-hidden":"true",ref:p,className:k("utrecht-icon",s),...c,children:t}));n.displayName="Icon";try{n.displayName="Icon",n.__docgenInfo={description:"",displayName:"Icon",props:{}}}catch{}const y=`<!-- @license CC0-1.0 -->

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
`,v={icon:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}}},"inset-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},baseline:{"inset-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},x={utrecht:v},S={title:"React Component/Icon",id:"react-icon",component:n,args:{children:e("svg",{viewBox:"0 0 1000 1000",children:e("rect",{fill:"currentColor",x:"0",y:"0",width:"1000",height:"1000"})}),color:"green",size:32},parameters:{tokensPrefix:"utrecht-icon",tokens:h,tokensDefinition:x,docs:{description:{component:y}}},render:({color:t,size:s,...c})=>e("div",{style:{"--utrecht-icon-color":t,"--utrecht-icon-size":`${s}px`},children:e(n,{...c})})},o={},r=g(S);var i,a,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var d,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"designTokenStory(meta)",...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const C=["WithInlineSVG","DesignTokens"];export{r as DesignTokens,o as WithInlineSVG,C as __namedExportsOrder,S as default};
//# sourceMappingURL=Icon.stories-927e3d79.js.map
