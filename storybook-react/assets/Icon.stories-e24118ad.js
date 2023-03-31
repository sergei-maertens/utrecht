import{j as t}from"./jsx-runtime-670450c2.js";import{Q as l}from"./index-e7ab9131.js";import{t as h,d as p}from"./util-caba24dc.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-b4f9149a.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const g=`<!-- @license CC0-1.0 -->

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
`,k={icon:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}}},"inset-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},baseline:{"inset-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},b={utrecht:k},v={title:"React Component/Icon",id:"react-icon",component:l,parameters:{tokensPrefix:"utrecht-icon",tokens:h,tokensDefinition:b,docs:{description:{component:g}}}},y=({color:u,size:d,...m})=>t("div",{style:{"--utrecht-icon-color":u,"--utrecht-icon-size":`${d}px`},children:t(l,{...m})}),e=y.bind({});e.args={children:t("svg",{viewBox:"0 0 1000 1000",children:t("rect",{fill:"currentColor",x:"0",y:"0",width:"1000",height:"1000"})}),color:"green",size:32};const n=p(v);var o,r,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
  color,
  size,
  ...args
}) => <div style={{
  '--utrecht-icon-color': color,
  '--utrecht-icon-size': \`\${size}px\`
}}>
    <Icon {...args} />
  </div>`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var i,c,a;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"designTokenStory(meta)",...(a=(c=n.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const w=["WithInlineSVG","DesignTokens"];export{n as DesignTokens,e as WithInlineSVG,w as __namedExportsOrder,v as default};
//# sourceMappingURL=Icon.stories-e24118ad.js.map
