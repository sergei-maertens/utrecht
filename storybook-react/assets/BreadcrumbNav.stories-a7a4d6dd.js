import{a as L,j as e,F as Z}from"./jsx-runtime-29545a09.js";import"./chunk-S4VUQJ4A-0f1f051f.js";import{d as J,P as Q,e as ee,f as re,g as ne}from"./index-3a3c0629.js";import{t as ae,d as te}from"./util-066ffab3.js";import{m as B}from"./index.esm-64b5dc97.js";import{c}from"./clsx.m-1229b3e0.js";import{r as d}from"./index-76fb7be0.js";import{H as ie}from"./Heading-17db86b9.js";import{L as se}from"./Link-040f8057.js";import"./iframe-c82eed5a.js";import"../sb-preview/runtime.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./index-8d47fad6.js";import"./objectWithoutProperties-8df67654.js";import"./typeof-7fd5df1e.js";const F=({prop:n,type:a})=>({itemScope:!0,itemType:a,itemProp:n}),x=n=>({itemProp:n}),y=d.forwardRef(({appearance:n,children:a,className:t,headingLevel:i=2,label:s,...f},v)=>{const o=s?d.useId():void 0;return L("nav",{...f,ref:v,className:c("utrecht-breadcrumb","utrecht-breadcrumb--html-ol",{"utrecht-breadcrumb--arrows":n==="arrows"},t),"aria-labelledby":o,children:[s&&e(ie,{id:o,className:"utrecht-breadcrumb__heading",level:i,"aria-hidden":"true",children:s}),e("ol",{className:"utrecht-breadcrumb__list utrecht-breadcrumb__list--html-ol",...F({type:"https://schema.org/BreadcrumbList"}),children:a})]})});y.displayName="BreadcrumbNav";const K=d.forwardRef(({className:n,children:a,...t},i)=>e("li",{className:c("utrecht-breadcrumb__item",n),...F({type:"https://schema.org/ListItem",prop:"itemListElement"}),ref:i,...t,children:a}));K.displayName="BreadcrumbItem";const w=d.forwardRef(({className:n,children:a,...t},i)=>e("li",{"aria-hidden":"true",hidden:!0,style:{display:"var(--_utrecht-breadcrumb-separator-display, block)"},className:c("utrecht-breadcrumb__separator","utrecht-breadcrumb__separator--html-li",n),ref:i,...t,children:a}));w.displayName="BreadcrumbSeparator";const r=d.forwardRef(({children:n,disabled:a,current:t,href:i,index:s,rel:f,role:v,Link:o=se,className:V,...X},Y)=>e(K,{children:L(o||o,{className:c("utrecht-breadcrumb__link",V,{"utrecht-breadcrumb__link--current":t,"utrecht-breadcrumb__link--disabled":a}),href:a?void 0:i,rel:f,role:v||(a?"link":void 0),"aria-current":t&&"page","aria-disabled":a?"true":void 0,...x("item"),...X,ref:Y,children:[e("span",{className:"utrecht-breadcrumb__text",...x("name"),children:n}),typeof s=="number"?e("meta",{...x("position"),content:String(s+1)}):null]})}));r.displayName="BreadcrumbLink";try{y.displayName="BreadcrumbNav",y.__docgenInfo={description:"",displayName:"BreadcrumbNav",props:{appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"string"}},headingLevel:{defaultValue:{value:"2"},description:"",name:"headingLevel",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode | ReactNode[]"}}}}}catch{}const oe=`<!-- @license CC0-1.0 -->

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
`,de={breadcrumb:{"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | none | uppercase",inherits:!0}}},item:{"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},link:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},focus:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},current:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},disabled:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},separator:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},icon:{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}},arrows:{link:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}}}},ce={utrecht:de},k=({children:n,className:a,...t})=>e("a",{className:c("utrecht-link","utrecht-link--html-a",a),...t,children:n});k.displayName="ExampleCustomLink";const le={title:"React Component/Breadcrumb navigation",id:"react-breadcrumb-nav",component:y,args:{label:"Kruimelpad",children:[e(r,{href:"/",rel:"home",index:0,children:"Home"}),e(r,{href:"/a/",index:1,children:"Niveau 1"}),e(r,{href:"/a/b/",rel:"up",index:2,children:"Niveau 2"})]},argTypes:{appearance:{description:"Appearance",control:{type:"select"},options:["","arrows"]}},parameters:{tokensPrefix:"utrecht-breadcrumb-nav",tokens:ae,tokensDefinition:ce,docs:{page:()=>L(Z,{children:[e(J,{children:oe}),e(Q,{}),e(ee,{story:re}),e(ne,{})]})}}},l={args:{appearance:"arrows"},parameters:{docs:{description:{story:'The "arrows appearance" is specific to the Municipality of Utrecht, we recommend to avoid this appearance for other organisations.'}},status:{type:"ALPHA"}}},m={},p={args:{children:[e(r,{href:"/",rel:"home",index:0,children:"Home"}),e(r,{href:"/a/",index:1,children:"Niveau 1"}),e(r,{href:"/a/b/",index:2,current:!0,children:"Huidige pagina"})]},parameters:{docs:{description:{story:'For accessibility specify the `current` property, to render `aria-current="page"`.'}},status:{type:"ALPHA"}}},u={args:{children:[e(r,{href:"/",rel:"home",index:0,children:"Home"}),e(w,{children:e(B,{})}),e(r,{href:"/a/",index:1,children:"Niveau 1"}),e(w,{children:e(B,{})}),e(r,{href:"/a/b/",index:2,current:!0,children:"Huidige pagina"})]},parameters:{status:{type:"WORK IN PROGRESS"}}},h={args:{children:[e(r,{href:"/",rel:"home",index:0,children:"Home"}),e(r,{href:"/a/",index:1,children:"Niveau 1"}),e(r,{href:"/a/b/",index:2,current:!0,disabled:!0,children:"Huidige pagina"})]},parameters:{docs:{description:{story:`
Meer informatie over disabled links:

- [Scott O'Hara in 2019: The accessibility of placeholder links](https://www.scottohara.me/note/2019/07/17/placeholder-link.html)
- [Scott O'Hara in 2021: Disabling a link](https://www.scottohara.me/blog/2021/05/28/disabled-links.html)
`}},status:{type:"ALPHA"}}},b={args:{children:[e(r,{Link:k,href:"/",rel:"home",index:0,children:"Home"}),e(r,{Link:k,href:"/a/",index:1,children:"Niveau 1"}),e(r,{Link:k,href:"/a/b/",index:2,current:!0,children:"Huidige pagina"})]},parameters:{docs:{description:{story:"The `Link` property is used to override the default link component.\nWarning: this feature is experimental.\nHelp needed: this feature "}},status:{type:"EXPERIMENTAL"}}},g=te(le);var C,_,H;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(H=(_=l.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var N,A,S;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(S=(A=m.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var R,G,T;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(T=(G=p.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var j,W,E;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(E=(W=u.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var P,I,z;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(z=(I=h.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var D,$,M;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(M=($=b.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var O,U,q;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:"designTokenStory(meta)",...(q=(U=g.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};const We=["Arrows","Default","Current","Separator","CurrentDisabled","CustomLink","DesignTokens"];export{l as Arrows,p as Current,h as CurrentDisabled,b as CustomLink,m as Default,g as DesignTokens,u as Separator,We as __namedExportsOrder,le as default};
//# sourceMappingURL=BreadcrumbNav.stories-a7a4d6dd.js.map
