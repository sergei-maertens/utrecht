import{j as e,a as z,F as E}from"./jsx-runtime-29545a09.js";import"./chunk-S4VUQJ4A-7bbbf38c.js";import{D,P,A as _,b as M,d as O}from"./index-3a5ace7d.js";import{a8 as I,a9 as r,aa as l}from"./index-d6d1e8d0.js";import{t as U,d as F}from"./util-7a3e2898.js";import{m}from"./index.esm-e4885b3e.js";import{c as K}from"./clsx.m-1229b3e0.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-e08e7d24.js";import"../sb-preview/runtime.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./defineProperty-75c483e5.js";import"./index-8d47fad6.js";const X=`<!-- @license CC0-1.0 -->

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
`,Y={breadcrumb:{"block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | none | uppercase",inherits:!0}}},item:{"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},link:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},current:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},separator:{"inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},icon:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}}},Z={utrecht:Y},c=({children:N,className:W,...$})=>e("a",{className:K("utrecht-link","utrecht-link--html-a",W),...$,children:N});c.displayName="ExampleCustomLink";const q={title:"React Component/Breadcrumb navigation",id:"react-breadcrumb-nav",component:I,args:{label:"Kruimelpad",children:[e(r,{href:"/",rel:"home",index:0,children:"Home"}),e(r,{href:"/a/",index:1,children:"Niveau 1"}),e(r,{href:"/a/b/",rel:"up",index:2,children:"Niveau 2"})]},argTypes:{appearance:{description:"Appearance",control:{type:"select"},options:["","arrows"]}},parameters:{tokensPrefix:"utrecht-breadcrumb-nav",tokens:U,tokensDefinition:Z,docs:{page:()=>z(E,{children:[e(D,{children:X}),e(P,{}),e(_,{story:M}),e(O,{})]})}}},n={args:{appearance:"arrows"},parameters:{docs:{description:{story:'The "arrows appearance" is specific to the Municipality of Utrecht, we recommend to avoid this appearance for other organisations.'}},status:{type:"ALPHA"}}},a={},i={args:{children:[e(r,{href:"/",rel:"home",index:0,children:"Home"}),e(r,{href:"/a/",index:1,children:"Niveau 1"}),e(r,{href:"/a/b/",index:2,current:!0,children:"Huidige pagina"})]},parameters:{docs:{description:{story:'For accessibility specify the `current` property, to render `aria-current="page"`.'}},status:{type:"ALPHA"}}},t={args:{children:[e(r,{href:"/",rel:"home",index:0,children:"Home"}),e(l,{children:e(m,{})}),e(r,{href:"/a/",index:1,children:"Niveau 1"}),e(l,{children:e(m,{})}),e(r,{href:"/a/b/",index:2,current:!0,children:"Huidige pagina"})]},parameters:{status:{type:"WORK IN PROGRESS"}}},s={args:{children:[e(r,{href:"/",rel:"home",index:0,children:"Home"}),e(r,{href:"/a/",index:1,children:"Niveau 1"}),e(r,{href:"/a/b/",index:2,current:!0,disabled:!0,children:"Huidige pagina"})]},parameters:{docs:{description:{story:`
Meer informatie over disabled links:

- [Scott O'Hara in 2019: The accessibility of placeholder links](https://www.scottohara.me/note/2019/07/17/placeholder-link.html)
- [Scott O'Hara in 2021: Disabling a link](https://www.scottohara.me/blog/2021/05/28/disabled-links.html)
`}},status:{type:"ALPHA"}}},o={args:{children:[e(r,{Link:c,href:"/",rel:"home",index:0,children:"Home"}),e(r,{Link:c,href:"/a/",index:1,children:"Niveau 1"}),e(r,{Link:c,href:"/a/b/",index:2,current:!0,children:"Huidige pagina"})]},parameters:{docs:{description:{story:"The `Link` property is used to override the default link component.\nWarning: this feature is experimental.\nHelp needed: this feature "}},status:{type:"EXPERIMENTAL"}}},d=F(q);var p,u,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    appearance: 'arrows'
  },
  parameters: {
    docs: {
      description: {
        story: \`The "arrows appearance" is specific to the Municipality of Utrecht, we recommend to avoid this appearance for other organisations.\`
      }
    },
    status: {
      type: 'ALPHA'
    }
  }
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,b,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(k=(b=a.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var y,f,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbLink>, <BreadcrumbLink href="/a/" index={1}>
        Niveau 1
      </BreadcrumbLink>, <BreadcrumbLink href="/a/b/" index={2} current>
        Huidige pagina
      </BreadcrumbLink>]
  },
  parameters: {
    docs: {
      description: {
        story: \`For accessibility specify the \\\`current\\\` property, to render \\\`aria-current="page"\\\`.\`
      }
    },
    status: {
      type: 'ALPHA'
    }
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,w,L;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbLink>, <BreadcrumbSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbSeparator>, <BreadcrumbLink href="/a/" index={1}>
        Niveau 1
      </BreadcrumbLink>, <BreadcrumbSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbSeparator>, <BreadcrumbLink href="/a/b/" index={2} current>
        Huidige pagina
      </BreadcrumbLink>]
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS'
    }
  }
}`,...(L=(w=t.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var A,C,B;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbLink>, <BreadcrumbLink href="/a/" index={1}>
        Niveau 1
      </BreadcrumbLink>, <BreadcrumbLink href="/a/b/" index={2} current disabled>
        Huidige pagina
      </BreadcrumbLink>]
  },
  parameters: {
    docs: {
      description: {
        story: \`
Meer informatie over disabled links:

- [Scott O'Hara in 2019: The accessibility of placeholder links](https://www.scottohara.me/note/2019/07/17/placeholder-link.html)
- [Scott O'Hara in 2021: Disabling a link](https://www.scottohara.me/blog/2021/05/28/disabled-links.html)
\`
      }
    },
    status: {
      type: 'ALPHA'
    }
  }
}`,...(B=(C=s.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var H,S,G;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbLink Link={ExampleCustomLink} href="/" rel="home" index={0}>
        Home
      </BreadcrumbLink>, <BreadcrumbLink Link={ExampleCustomLink} href="/a/" index={1}>
        Niveau 1
      </BreadcrumbLink>, <BreadcrumbLink Link={ExampleCustomLink} href="/a/b/" index={2} current>
        Huidige pagina
      </BreadcrumbLink>]
  },
  parameters: {
    docs: {
      description: {
        story: \`The \\\`Link\\\` property is used to override the default link component.
Warning: this feature is experimental.
Help needed: this feature \`
      }
    },
    status: {
      type: 'EXPERIMENTAL'
    }
  }
}`,...(G=(S=o.parameters)==null?void 0:S.docs)==null?void 0:G.source}}};var R,T,j;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:"designTokenStory(meta)",...(j=(T=d.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const ke=["Arrows","Default","Current","Separator","CurrentDisabled","CustomLink","DesignTokens"];export{n as Arrows,i as Current,s as CurrentDisabled,o as CustomLink,a as Default,d as DesignTokens,t as Separator,ke as __namedExportsOrder,q as default};
//# sourceMappingURL=BreadcrumbNav.stories-67c0f38d.js.map
