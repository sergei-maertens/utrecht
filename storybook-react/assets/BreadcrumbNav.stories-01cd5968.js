import{a as q,j as e}from"./jsx-runtime-29545a09.js";import{t as J,d as Q}from"./util-5e11045c.js";import{m as w}from"./index.esm-f86270f3.js";import{c}from"./clsx.m-1229b3e0.js";import{r as d}from"./index-76fb7be0.js";import{H as Y}from"./Heading-17db86b9.js";import{L as ee}from"./Link-040f8057.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./objectWithoutProperties-8df67654.js";import"./typeof-7fd5df1e.js";import"./getPrototypeOf-624f05c9.js";import"./index-d3ea75b5.js";import"./iframe-a7269073.js";import"../sb-preview/runtime.js";const K=({prop:n,type:a})=>({itemScope:!0,itemType:a,itemProp:n}),x=n=>({itemProp:n}),v=d.forwardRef(({appearance:n,children:a,className:t,headingLevel:i=2,label:s,...y},f)=>{const o=s?d.useId():void 0;return q("nav",{...y,ref:f,className:c("utrecht-breadcrumb-nav","utrecht-breadcrumb-nav--html-ol",{"utrecht-breadcrumb-nav--arrows":n==="arrows"},t),"aria-labelledby":o,children:[s&&e(Y,{id:o,className:"utrecht-breadcrumb-nav__heading",level:i,"aria-hidden":"true",children:s}),e("ol",{className:"utrecht-breadcrumb-nav__list utrecht-breadcrumb-nav__list--html-ol",...K({type:"https://schema.org/BreadcrumbList"}),children:a})]})});v.displayName="BreadcrumbNav";const V=d.forwardRef(({className:n,children:a,...t},i)=>e("li",{className:c("utrecht-breadcrumb-nav__item",n),...K({type:"https://schema.org/ListItem",prop:"itemListElement"}),ref:i,...t,children:a}));V.displayName="BreadcrumbNavItem";const N=d.forwardRef(({className:n,children:a,...t},i)=>e("li",{"aria-hidden":"true",hidden:!0,style:{display:"var(--_utrecht-breadcrumb-nav-separator-display, block)"},className:c("utrecht-breadcrumb-nav__separator","utrecht-breadcrumb-nav__separator--html-li",n),ref:i,...t,children:a}));N.displayName="BreadcrumbNavSeparator";const r=d.forwardRef(({children:n,disabled:a,current:t,href:i,index:s,rel:y,role:f,Link:o=ee,className:F,...X},Z)=>e(V,{children:q(o||o,{className:c("utrecht-breadcrumb-nav__link",F,{"utrecht-breadcrumb-nav__link--current":t,"utrecht-breadcrumb-nav__link--disabled":a}),href:a?void 0:i,rel:y,role:f||(a?"link":void 0),"aria-current":t&&"page","aria-disabled":a?"true":void 0,...x("item"),...X,ref:Z,children:[e("span",{className:"utrecht-breadcrumb-nav__text",...x("name"),children:n}),typeof s=="number"?e("meta",{...x("position"),content:String(s+1)}):null]})}));r.displayName="BreadcrumbNavLink";try{v.displayName="BreadcrumbNav",v.__docgenInfo={description:"",displayName:"BreadcrumbNav",props:{appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"string"}},headingLevel:{defaultValue:{value:"2"},description:"",name:"headingLevel",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode | ReactNode[]"}}}}}catch{}const re=`<!-- @license CC0-1.0 -->

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
`,ne={"breadcrumb-nav":{"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | none | uppercase",inherits:!0}}},item:{"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},link:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},focus:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},current:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},disabled:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},separator:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},icon:{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}},arrows:{link:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}}}},ae={utrecht:ne},k=({children:n,className:a,...t})=>e("a",{className:c("utrecht-link","utrecht-link--html-a",a),...t,children:n});k.displayName="ExampleCustomLink";const te={title:"React Component/Breadcrumb navigation",id:"react-breadcrumb-nav",component:v,args:{label:"Kruimelpad",children:[e(r,{href:"/",rel:"home",index:0,children:"Home"}),e(r,{href:"/a/",index:1,children:"Niveau 1"}),e(r,{href:"/a/b/",rel:"up",index:2,children:"Niveau 2"})]},argTypes:{appearance:{description:"Appearance",control:{type:"select"},options:["","arrows"]}},parameters:{tokensPrefix:"utrecht-breadcrumb-nav",tokens:J,tokensDefinition:ae,docs:{description:{component:re}}}},l={args:{appearance:"arrows"},parameters:{docs:{description:{story:'The "arrows appearance" is specific to the Municipality of Utrecht, we recommend to avoid this appearance for other organisations.'}},status:{type:"ALPHA"}}},m={},p={args:{children:[e(r,{href:"/",rel:"home",index:0,children:"Home"}),e(r,{href:"/a/",index:1,children:"Niveau 1"}),e(r,{href:"/a/b/",index:2,current:!0,children:"Huidige pagina"})]},parameters:{docs:{description:{story:'For accessibility specify the `current` property, to render `aria-current="page"`.'}},status:{type:"ALPHA"}}},u={args:{children:[e(r,{href:"/",rel:"home",index:0,children:"Home"}),e(N,{children:e(w,{})}),e(r,{href:"/a/",index:1,children:"Niveau 1"}),e(N,{children:e(w,{})}),e(r,{href:"/a/b/",index:2,current:!0,children:"Huidige pagina"})]},parameters:{status:{type:"WORK IN PROGRESS"}}},h={args:{children:[e(r,{href:"/",rel:"home",index:0,children:"Home"}),e(r,{href:"/a/",index:1,children:"Niveau 1"}),e(r,{href:"/a/b/",index:2,current:!0,disabled:!0,children:"Huidige pagina"})]},parameters:{docs:{description:{story:`
Meer informatie over disabled links:

- [Scott O'Hara in 2019: The accessibility of placeholder links](https://www.scottohara.me/note/2019/07/17/placeholder-link.html)
- [Scott O'Hara in 2021: Disabling a link](https://www.scottohara.me/blog/2021/05/28/disabled-links.html)
`}},status:{type:"ALPHA"}}},b={args:{children:[e(r,{Link:k,href:"/",rel:"home",index:0,children:"Home"}),e(r,{Link:k,href:"/a/",index:1,children:"Niveau 1"}),e(r,{Link:k,href:"/a/b/",index:2,current:!0,children:"Huidige pagina"})]},parameters:{docs:{description:{story:"The `Link` property is used to override the default link component.\nWarning: this feature is experimental.\nHelp needed: this feature "}},status:{type:"EXPERIMENTAL"}}},g=Q(te);var L,B,C;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(C=(B=l.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var _,H,A;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(A=(H=m.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var S,R,G;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="/a/" index={1}>
        Niveau 1
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="/a/b/" index={2} current>
        Huidige pagina
      </BreadcrumbNavLink>]
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
}`,...(G=(R=p.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var T,j,W;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="/a/" index={1}>
        Niveau 1
      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="/a/b/" index={2} current>
        Huidige pagina
      </BreadcrumbNavLink>]
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS'
    }
  }
}`,...(W=(j=u.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var E,z,I;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="/a/" index={1}>
        Niveau 1
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="/a/b/" index={2} current disabled>
        Huidige pagina
      </BreadcrumbNavLink>]
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
}`,...(I=(z=h.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var $,D,P;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink Link={ExampleCustomLink} href="/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink Link={ExampleCustomLink} href="/a/" index={1}>
        Niveau 1
      </BreadcrumbNavLink>, <BreadcrumbNavLink Link={ExampleCustomLink} href="/a/b/" index={2} current>
        Huidige pagina
      </BreadcrumbNavLink>]
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
}`,...(P=(D=b.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var M,O,U;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:"designTokenStory(meta)",...(U=(O=g.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const Ne=["Arrows","Default","Current","Separator","CurrentDisabled","CustomLink","DesignTokens"];export{l as Arrows,p as Current,h as CurrentDisabled,b as CustomLink,m as Default,g as DesignTokens,u as Separator,Ne as __namedExportsOrder,te as default};
//# sourceMappingURL=BreadcrumbNav.stories-01cd5968.js.map
