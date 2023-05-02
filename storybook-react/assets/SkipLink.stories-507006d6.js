import{a as p,F as k,j as e}from"./jsx-runtime-670450c2.js";import"./chunk-PCJTTTQV-8a033c10.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{D as m,P as g,A as c,a as u,S as h}from"./index-d13ef923.js";import{ac as b}from"./index-ae53ab28.js";import{t as v,d as y}from"./util-25c8c1a6.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-0e33defa.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-1e419f15.js";import"./chunk-RDJSMFWU-eb6ed6e5.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-195fbef2.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-5b183829.js";import"./index-b3b2312b.js";import"./isSymbol-69229716.js";import"./index-356e4a49.js";import"./clsx.m-b4f9149a.js";import"./index-4d501b15.js";const j=`<!-- @license CC0-1.0 -->

# Skip link

_Skip links_ zijn belangrijk om te gebruiken op de meeste websites omdat voor sommige gebruikers het hierdoor niet onnodig veel tijd kost om je website te gebruiken. Met een _skip link_ ga je naar een andere plek op dezelfde pagina, zodat je bijvoorbeeld gelijk een artikel kan lezen en links daarin kunt aanklikken, zonder tijd te besteden aan de hoofdnavigatie.

_Skip links_ zijn onzichtbaar als je de pagina opent, maar ze zijn wel makkelijk vindbaar voor deze gebruikers. Met het toetsenbord vindt je een _skip link_ door op \`Tab\` te drukken wanneer je de pagina hebt geladen. (Voor macOS gebruikers is het nodig om de standaard-instellingen aan te passen voordat dit werkt.)

Maak skip links naar de drie belangrijkste onderdelen op de pagina, in deze volgorde:

1. _main content_: vaak een link naar een \`<main>\` of \`<article>\` element
2. _main navigation_: als je een _main navigation component_ hebt, link dan hier naar als je het niet al de volgende link is in de tabvolgorde.
3. _search form_: als je een zoekveld hebt om vanuit deze pagina de zoeken, gebruik deze _skip link_ als laatste.

Als je de skip link gaat gebruiken op een website, begin dan consistent elke pagina met de skip link zodat de navigatie op een voorspelbare manier werkt ([WCAG 3.2.3](https://www.w3.org/TR/WCAG21/#consistent-navigation)).

Skip links zijn niet nodig op een simpele pagina waar alleen tekst staat en geen navigatie. Een startpagina van een zoekmachine heeft bijvoorbeeld wel een navigatie én een zoekformulier, maar door het gebruik van \`autofocus\` voor het zoekveld heeft het geen zin om een skip link te gebruiken.

## HTML

- plaats de _skip link_ als allereerste interactieve element van de pagina, bijvoorbeeld als eerste HTML-element in \`<body>\`.
- plaats de _skip link_ voor landmarks zoals het \`<header>\` element van de _page header component_.
- gebruik een \`<div>\` of \`<p>\` om de link in de plaatsen, gebruik niet een losse \`<a>\`, zodat de link ook duidelijk is als CSS niet geladen is.
- gebruik geen \`<nav>\` element voor skip links.

## Hoe het niet moet

### Skip links onnodig in een \`<nav>\` HTML-element

Het is belangrijk dan gebruikers snel bij de _navigation landmark_ voor het hoofdmenu komen kunnen komen, het zou niet handig zijn als je altijd eerst de _navigation landmark_ met skip links moet overslaan.

Niet:

\`\`\`html
<nav class="skip-links">…</nav>
\`\`\`

Wel:

\`\`\`html
<div class="skip-links">…</div>
\`\`\`

De pagina is beter leesbaar wanneer de CSS niet is geladen als je een _block-level_ HTML-element gebruikt zoals \`div\` of \`p\` met daarin de skip links, dan komt de HTML die volgt na de skip links netjes op een eigen regel te staan.

### Skip link onleesbaar door overlap met achtergrond

Als je de skip link een vaste locatie geeft met CSS \`position\`, dan kan de link over de inhoud van de pagina heen staan. Gebruik daarom een achtergrondkleur voor de _skip link_, zodat de link-tekst altijd leesbaar is.

### Onnodig scrollen bij focus

Niet:

\`\`\`css
.utrecht-skip-link {
  position: absolute;
  /* … */
}
\`\`\`

Wel:

\`\`\`css
.utrecht-skip-link {
  position: fixed;
  /* … */
}
\`\`\`

## Links

- [WCAG 3.2.3](https://www.w3.org/TR/WCAG21/#consistent-navigation)
`,_={"skip-link":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"text-decoration":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"none | underline",inherits:!0}}},"z-index":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!1}},focus:{"text-decoration":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"none | underline",inherits:!0}}}}}}},x={utrecht:_},f=d=>e("div",{style:{minHeight:"240px",minWidth:"320px",position:"relative",willChange:"transform"},children:d()}),z={title:"React Component/Skip link",id:"react-skip-link",component:b,argTypes:{href:{name:"href",type:{name:"string",required:!0},table:{category:"HTML attribute",defaultValue:{summary:""}}}},decorators:[f],args:{href:"#main",children:"Skip to main content"},parameters:{pseudo:{focus:!0,focusVisible:!0},tokensPrefix:"utrecht-skip-link",tokens:v,tokensDefinition:x,docs:{page:()=>p(k,{children:[e(m,{children:j}),e(g,{}),e(c,{story:u}),e(h,{})]})}}},n={},i=y(z);var t,s,a;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(a=(s=n.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var o,r,l;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:"designTokenStory(meta)",...(l=(r=i.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const Z=["Default","DesignTokens"];export{n as Default,i as DesignTokens,Z as __namedExportsOrder,z as default};
//# sourceMappingURL=SkipLink.stories-507006d6.js.map
