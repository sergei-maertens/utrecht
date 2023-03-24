import{j as d}from"./jsx-runtime-670450c2.js";import{a4 as k}from"./index-a46fd29c.js";import{t as g,d as m}from"./util-4bd81ba5.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-b4f9149a.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const c=`<!-- @license CC0-1.0 -->

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
`,u={"skip-link":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"text-decoration":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"none | underline",inherits:!0}}},"z-index":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!1}},focus:{"text-decoration":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"none | underline",inherits:!0}}}}}}},h={utrecht:u},p=i=>d("div",{style:{minHeight:"240px",minWidth:"320px",position:"relative",willChange:"transform"},children:i()});p.displayName="ExampleViewport";const b={title:"React Component/Skip link",id:"react-skip-link",component:k,href:{name:"href",type:{name:"string",required:!0},table:{category:"HTML attribute",defaultValue:{summary:""}}},decorators:[p],tags:["autodocs"],parameters:{tokensPrefix:"utrecht-skip-link",tokens:g,tokensDefinition:h,docs:{description:{component:c}}}},v=i=>d(k,{...i}),e=v.bind({});e.args={href:"#main",children:"Skip to main content"};e.parameters={pseudo:{focus:!0,focusVisible:!0}};const n=m(b);var t,s,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"args => <SkipLink {...args} />",...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var o,r,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:"designTokenStory(meta)",...(l=(r=n.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const T=["Default","DesignTokens"];export{e as Default,n as DesignTokens,T as __namedExportsOrder,b as default};
//# sourceMappingURL=SkipLink.stories-26468624.js.map
