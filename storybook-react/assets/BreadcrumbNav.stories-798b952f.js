import{j as t}from"./jsx-runtime-670450c2.js";import{h as d,i as l}from"./index-4ba24e52.js";import{t as m,d as c}from"./util-10016f4d.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const p=`<!-- @license CC0-1.0 -->

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

## Related info

- [Google Search Central - Advanced SEO - Breadcrumb](https://developers.google.com/search/docs/data-types/breadcrumb)
- [Homepage Links Remain a Necessity — Nielsen Norman Group](https://www.nngroup.com/articles/homepage-links/)
- [Breadcrumbs — Adobe Spectrum Design System](https://spectrum.adobe.com/page/breadcrumbs/)
- [Exploring Markup for Breadcrumbs — Chris Coyier](https://css-tricks.com/markup-for-breadcrumbs/)

## Relevante WCAG regels

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): gebruik het \`<nav>\` element voor de \`navigation\` landmark role.
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de \`navigation\` landmark maakt duidelijk dat het om het broodkruimelpad gaat.
- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)
- [WCAG eis 2.4.8](https://www.w3.org/TR/WCAG21/#location): een kruimelpad is een manier om duidelijk te maken waar de gebruiker zich bevind in de context van een site met meerdere pagina's.
`,u={breadcrumb:{"block-size":{css:{syntax:"<length>",inherits:!0}},"font-family":{css:{syntax:"*",inherits:!0}},"font-size":{css:{syntax:"<length>",inherits:!0}},"text-transform":{css:{syntax:"inherit | none | uppercase",inherits:!0}},divider:{content:{css:{syntax:"*",inherits:!0}},"inline-size":{css:{syntax:"<length>",inherits:!0}}},item:{"padding-block-start":{css:{syntax:"<length>",inherits:!0}},"padding-block-end":{css:{syntax:"<length>",inherits:!0}},"padding-inline-end":{css:{syntax:"<length>",inherits:!0}},"padding-inline-start":{css:{syntax:"<length>",inherits:!0}}},link:{"background-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}},focus:{"background-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}}}}},h={utrecht:u},g={title:"React Component/Breadcrumb navigation",id:"react-breadcrumb-nav",component:d,argTypes:{items:{description:"Links",type:{name:"array",required:!0}},appearance:{description:"Appearance",control:{type:"select"},options:["","arrows"]}},tags:["autodocs"],parameters:{tokensPrefix:"utrecht-breadcrumb-nav",tokens:m,tokensDefinition:h,docs:{description:{component:p}}}},b=n=>{var r;return t(d,{appearance:n.appearance,label:n.label,children:(r=n.items)==null?void 0:r.map(i=>t(l,{...i},i.index))})},e=b.bind({});e.args={appearance:"arrows",label:"Kruimelpad",items:[{href:"/",rel:"home",index:0,children:"Home"},{href:"/a/",index:1,children:"Niveau 1"},{href:"/a/b/",rel:"up",index:2,children:"Niveau 2"}]};const a=c(g);var s;e.parameters={...e.parameters,storySource:{source:`args => <BreadcrumbNav appearance={args.appearance} label={args.label}>
    {args.items?.map(itemArgs => <BreadcrumbLink key={itemArgs.index} {...itemArgs} />)}
  </BreadcrumbNav>`,...(s=e.parameters)==null?void 0:s.storySource}};var o;a.parameters={...a.parameters,storySource:{source:"designTokenStory(meta)",...(o=a.parameters)==null?void 0:o.storySource}};const C=["Default","DesignTokens"];export{e as Default,a as DesignTokens,C as __namedExportsOrder,g as default};
//# sourceMappingURL=BreadcrumbNav.stories-798b952f.js.map
