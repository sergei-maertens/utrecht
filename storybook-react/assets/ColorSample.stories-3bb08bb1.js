import{t as k,d as h}from"./util-83f1cb40.js";import{j as b}from"./jsx-runtime-29545a09.js";import{c as y}from"./clsx.m-1229b3e0.js";import{r as f}from"./index-76fb7be0.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const r=f.forwardRef(({children:n,className:p,color:t,style:m,...g},u)=>b("data",{ref:u,className:y("utrecht-color-sample",p),style:{...m,color:t},value:t,...g,children:n}));r.displayName="ColorSample";try{r.displayName="ColorSample",r.__docgenInfo={description:"",displayName:"ColorSample",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}const v=`<!-- @license CC0-1.0 -->

# Color sample

Gebruik _color sample_ component om een voorbeeld te geven van een kleur. Gebruik deze component bijvoorbeeld voor:

- Legenda van de kleuren in landkaarten, grafieken of van data badges.
- Overzicht van kleuren in een huisstijl.
- Kleur-optie in een _color input_ component.

## Toegankelijkheid

### Tekstlabels voor kleuren

Gebruik ook een tekstlabel om de kleur te beschrijven. Bijvoorbeeld: "rood", "lichtrood", etcetera.

Een gebruiker die geen kleuren ziet kan het met een andere gebruiker over de "rode lijn" hebben, als het tekstlabel goed is. Vervang daarom de kleur in het tekstlabel niet door de bedoeling van de kleur: "hoog water", "laag water". Combineer de kleur met de bedoeling: "blauw, hoog water" en "geel, laag water".

### Forced colors mode

Bij sommige gebruikers worden kleuren in CSS zoals \`background-color\` vervangen of genegeerd, omdat ze een bepaald kleurenpalet nodig hebben. Voor datavisualisatie-kleuren kan dit functionaliteit kapot maken, terwijl voor decoratieve huisstijl kleuren het meestal geen probleem is.

Gebruik \`forced-color-adjust: none\` om te voorkomen dat de kleur wordt aangepast, zodat de betekenis duidelijk blijft. Lees meer hierover op deze Microsoft blog post: [Styling for Windows high contrast with new standards for forced colors](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/).

## WCAG eisen

- [WCAG eis 3.2.4](https://www.w3.org/TR/WCAG21/#consistent-identification): gebruik hetzelfde label voor de kleur in de _color sample_ van de legenda als in de landkaart of grafiek.
`,w={"color-sample":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},dark:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},light:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}},x={utrecht:w},_={title:"React Component/Color sample",id:"react-color-sample",component:r,args:{color:"#007DAD"},argTypes:{color:{name:"Color",control:{type:"color"},type:{name:"string",required:!0},table:{category:"API"}}},parameters:{tokensPrefix:"utrecht-color-sample",tokens:k,tokensDefinition:x,docs:{description:{component:v}}}},e={},o=h(_);var s,a,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var i,d,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"designTokenStory(meta)",...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const D=["Default","DesignTokens"];export{e as Default,o as DesignTokens,D as __namedExportsOrder,_ as default};
//# sourceMappingURL=ColorSample.stories-3bb08bb1.js.map
