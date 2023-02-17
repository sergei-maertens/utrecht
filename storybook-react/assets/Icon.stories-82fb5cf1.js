import{j as n}from"./jsx-runtime-670450c2.js";import{M as c}from"./index-18349e3e.js";import{t as l,d as u}from"./util-36ba316b.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const d=`<!-- @license CC0-1.0 -->

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
`,h={icon:{color:{css:{syntax:"<color>",inherits:!0}},size:{css:{syntax:"<length-percentage>",inherits:!0}},"inset-block-start":{css:{syntax:"<length>",inherits:!0}},baseline:{"inset-block-start":{css:{syntax:"<length>",inherits:!0}}}}},m={utrecht:h},p={title:"React Component/Icon",id:"react-icon",component:c,parameters:{tokensPrefix:"utrecht-icon",tokens:l,tokensDefinition:m,docs:{description:{component:d}}}},g=({color:i,size:s,...a})=>n("div",{style:{"--utrecht-icon-color":i,"--utrecht-icon-size":`${s}px`},children:n(c,{...a})}),e=g.bind({});e.args={children:n("svg",{viewBox:"0 0 1000 1000",children:n("rect",{fill:"currentColor",x:"0",y:"0",width:"1000",height:"1000"})}),color:"green",size:32};const t=u(p);var o;e.parameters={...e.parameters,storySource:{source:`({
  color,
  size,
  ...args
}) => <div style={{
  '--utrecht-icon-color': color,
  '--utrecht-icon-size': \`\${size}px\`
}}>
    <Icon {...args} />
  </div>`,...(o=e.parameters)==null?void 0:o.storySource}};var r;t.parameters={...t.parameters,storySource:{source:"designTokenStory(meta)",...(r=t.parameters)==null?void 0:r.storySource}};const I=["WithInlineSVG","DesignTokens"];export{t as DesignTokens,e as WithInlineSVG,I as __namedExportsOrder,p as default};
//# sourceMappingURL=Icon.stories-82fb5cf1.js.map
