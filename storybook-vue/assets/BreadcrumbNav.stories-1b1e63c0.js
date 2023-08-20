import{e as r,i as u,l as p}from"./component-library-vue-73eab3d3.js";import{c as l}from"./util-f233846d.js";import"./vue.esm-bundler-c077df82.js";import"./chunk-PCJTTTQV-c386667a.js";import"./iframe-67c35294.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-e90b8e62.js";import"./index-356e4a49.js";import"./chunk-R4NKYYJA-96bb58e6.js";const h=`<!-- @license CC0-1.0 -->

# Breadcrumb navigation

Breadcrumb navigation, ook wel "kruimelpad" genoemd, gebruik je als de pagina's van je site georganiseerd zijn in een boomstructuur. Als je site teveel pagina's heeft om naar elke pagina een link te maken op de homepage bijvoorbeeld. De eerste link is altijd naar de homepage.

Het kruimelpad moet alleen links bevatten naar hogere niveau's of eerdere stappen. De pagina zelf is niet onderdeel van het kruimelpad. Gebruik geen breadcrumb navigation op de homepage, want die heeft geen hogere niveaus.

## HTML

Gebruik een \`nav\` element, want het is handig dat het kruimelpad een _navigation landmark_ is. Het kruimelpad is zelden de enige _navigation landmark_ op de pagina en landmarks moeten wel duidelijk te onderscheiden zijn. Gebruik daarom \`aria-label\` of \`aria-labelledby\` met een duidelijk label.

Gebruik een heading element met \`aria-labelledby\`, zodat het label zichtbaar is wanneer de CSS niet geladen kan worden. Zonder stijl is het kruimelpad niet duidelijk herkenbaar, dan maakt de heading dat duidelijk.

De _breadcrumb navigation_ is niet een onderdeel dat opgezocht wordt via heading navigatie van een _screen reader_. Verberg de heading met \`aria-hidden="true"\` zodat de headings uit de main content sneller te vinden zijn.

Bijvoorbeeld:

\`\`\`html
<nav aria-labelledby="breadcrumb-heading">
  <h2 id="breadcrumb-heading" aria-hidden="true">Kruimelpad</h2>
  ...kruimelpad...
</nav>
\`\`\`

Gebruik \`rel\` om duidelijk te maken wat het doel is van de links. ([WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)). Gebruik [\`rel="home"\`](https://microformats.org/wiki/rel-home) voor de link naar de homepage (deze relatie is nog slechts een voorstel). Gebruik [\`rel="up"\`](https://microformats.org/wiki/rel-up) voor pagina's die één niveau hoger zijn in een hierarchie. Gebruik \`rel="first"\` voor de eerste pagina in een serie.

## Hoe het niet moet

### Navigatie in de verkeerde _landmark_

Plaats het \`<nav>\` HTML-element met de breadcrumb navigation niet binnen de _main page content_, ofwel het \`<main>\` HTML-element.

Niet:

\`\`\`html
<main>
  <nav class="breadcrumbs">
    <a href="/">Home</a> /
    <a href="/contact" aria-current="page">Contact</a>
  </nav>
  <h1>Contact</h1>
</main>
\`\`\`

Wel:

\`\`\`html
<nav class="breadcrumbs">
  <a href="/">Home</a> /
  <a href="/contact" aria-current="page">Contact</a>
</nav>
<main>
  <h1>Contact</h1>
</main>
\`\`\`

## Related info

- [Google Search Central - Advanced SEO - Breadcrumb](https://developers.google.com/search/docs/data-types/breadcrumb)
- [Homepage Links Remain a Necessity — Nielsen Norman Group](https://www.nngroup.com/articles/homepage-links/)
- [Breadcrumbs — Adobe Spectrum Design System](https://spectrum.adobe.com/page/breadcrumbs/)
- [Exploring Markup for Breadcrumbs — Chris Coyier](https://css-tricks.com/markup-for-breadcrumbs/)

## Relevante WCAG regels

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): gebruik het \`<nav>\` element voor de \`navigation\` landmark role.
- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)
- [WCAG eis 2.4.5](https://www.w3.org/TR/WCAG21/#multiple-ways)
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de \`navigation\` landmark maakt duidelijk dat het om het broodkruimelpad gaat. Zie ook: [Using \`aria-label\` to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5).
- [WCAG eis 2.4.8](https://www.w3.org/TR/WCAG21/#location):
  - gebruik \`<a aria-current="location">\` om de huidige pagina te markeren
  - een kruimelpad is een manier om duidelijk te maken waar de gebruiker zich bevind in de context van een site met meerdere pagina's.
`,b={breadcrumb:{"block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | none | uppercase",inherits:!0}}},divider:{content:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},item:{"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},link:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}}},g={utrecht:b},m={id:"vue-breadcrumb-nav",title:"Vue.js Component/Breadcrumb Nav",component:r,tags:["autodocs"],args:{appearance:"arrows",label:"Kruimelpad"},argTypes:{appearance:{description:"Appearance",control:{type:"select"},options:["","arrows"]}},parameters:{status:{type:"ALPHA"},tokenPrefix:"utrecht-breadcrumb-nav",tokens:g,docs:{description:{component:h}}},render:c=>({components:{BreadcrumbLink:u,BreadcrumbNav:r,Heading:p},setup(){return{args:c}},template:`
      <BreadcrumbNav v-bind="$props">
        <slot></slot>
      </BreadcrumbNav>
    `})},e=l(m,{args:{slot:`<BreadcrumbLink href="/" :rel="home" :index="0">Home</BreadcrumbLink>
      <BreadcrumbLink href="/a/" :index="1">Niveau 1</BreadcrumbLink>
      <BreadcrumbLink href="/a/b/" :rel="up" :index="2">Niveau 2</BreadcrumbLink>`}}),n=l(m,{args:{slot:`<BreadcrumbLink href="/" :rel="home" :index="0">Home</BreadcrumbLink>
      <BreadcrumbLink href="/a/" :index="1">Niveau 1</BreadcrumbLink>
      <BreadcrumbLink href="/a/b/" :rel="up" :index="2">Niveau 2</BreadcrumbLink>
      <BreadcrumbLink href="/a/b/this-page" :index="3" :current="true">This page</BreadcrumbLink>`}});var a,i,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`createStory(meta, {
  args: {
    slot: \`<BreadcrumbLink href="/" :rel="home" :index="0">Home</BreadcrumbLink>
      <BreadcrumbLink href="/a/" :index="1">Niveau 1</BreadcrumbLink>
      <BreadcrumbLink href="/a/b/" :rel="up" :index="2">Niveau 2</BreadcrumbLink>\`
  }
})`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var s,o,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`createStory(meta, {
  args: {
    slot: \`<BreadcrumbLink href="/" :rel="home" :index="0">Home</BreadcrumbLink>
      <BreadcrumbLink href="/a/" :index="1">Niveau 1</BreadcrumbLink>
      <BreadcrumbLink href="/a/b/" :rel="up" :index="2">Niveau 2</BreadcrumbLink>
      <BreadcrumbLink href="/a/b/this-page" :index="3" :current="true">This page</BreadcrumbLink>\`
  }
})`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const N=["Default","Current"];export{n as Current,e as Default,N as __namedExportsOrder,m as default};
//# sourceMappingURL=BreadcrumbNav.stories-1b1e63c0.js.map
