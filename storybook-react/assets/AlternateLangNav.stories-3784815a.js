import{j as e,F as h,a as d}from"./jsx-runtime-91a467a5.js";import"./chunk-PCJTTTQV-77870092.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{D as W,P as L,A as N,a as x,S as y}from"./index-f6eb1462.js";import{L as s,e as C,B as j,f as R}from"./index-1aa9c429.js";import{t as I}from"./tokens-72779522.js";import{t as _,d as S}from"./util-fd84dc86.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-80770ad5.js";import"../sb-preview/runtime.mjs";import"./react-18-ff2c0a32.js";import"./index-8ce4a492.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-5b183829.js";import"./index-9d29e343.js";import"./index-356e4a49.js";import"./defineProperty-a128c648.js";import"./clsx.m-1229b3e0.js";import"./index-1fc0ca9a.js";const D=`<!-- @license CC0-1.0 -->

# Alternate Language Navigation

## HTML

Use the \`<nav>\` with \`<a>\` element approach for hyperlinks to alternate languages. Use the button group with toggle button approach (\`role="region"\` with \`<button aria-pressed="true">\`) for single page apps where language is replaced using client-side scripting.

- Use \`aria-current="page"\` to annotate the link to the page the use is on currently.

- Use a word separator between the links to keep the links comprehensible without CSS, so do not write \`<a>EN</a><a>NL</a>\`.

- The links are best discoverable inside a [navigation landmark region](https://www.w3.org/TR/wai-aria-1.1/#navigation), so inside a \`role="navigation"\` or \`<nav>\` element.

- The buttons are best discoverable inside a \`role="region"\` landmark. Provide a label for the landmark, for example by using \`aria-label\`. <!-- Hmm... isn't <section> + <h2> preferable to using ARIA? -->

- Since it is not possible to provide alternate content for every language, it can help users that only understand other languages to use automatic translation tools such as [Google Translate](https://translate.google.com/). Ensure the language of the [current page is declared](https://www.w3.org/International/questions/qa-html-language-declarations.en) using \`<html lang="…">\`, so the browser can recognize the page is in a foreign language and suggest to enable automatic translation. Provide server side-rendering to improve the ability of those tools to retrieve the text content for translation.

## UX

- For users that don't understand the language of the current page, it should be simple to discover if the page is available in alternate languages. Provide the links as part of the page header or the page footer, or both.
- Do not use [flags as symbol for a language](https://en.wikipedia.org/wiki/Flag_icons_for_languages), this design pattern is discouraged: [W3C Internationalization Best Practices: "Do not use flag icons to indicate languages"](https://www.w3.org/International/geo/html-tech/tech-lang.html#ri20040808.173208643)

## Relevante WCAG eisen

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): de heading van de landmark gebruikt de juiste _heading level_.
- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)
  - de \`hreflang\` maakt duidelijk dat de link verwijst naar een pagina in een andere taal
  - \`rel="alternate"\` maakt duidelijk dat het om dezelfde informatie gaat op een andere pagina
  - \`aria-current\` maakt duidelijk welke pagina op dit moment wordt weergegeven
  - maak duidelijk dat je kunt navigeren naar alternatieve versies door het plaatsen van deze links in een \`navigation\` landmark (\`<nav>\`)
- [WCAG eis 2.4.4](https://www.w3.org/TR/WCAG21/#link-purpose-in-context): met alleen de naam van de taal als label ("English") is het doel van de link duidelijk in de context van een navigation landmark
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): alle labels moeten duidelijk zijn:
  - het label van de landmark (de heading in de \`nav\` of \`section\`)
  - het zichtbare label van de links of buttons
  - het langere label van de link of button (in \`aria-label\` of \`title\`)
- [WCAG eis 2.4.9](https://www.w3.org/TR/WCAG21/#link-purpose-link-only): gebruik een label als "This page in English" zodat het doel van de link ook duidelijk is zonder context.
- [WCAG eis 2.5.3](https://www.w3.org/TR/WCAG21/#label-in-name): door een afkorting te gebruiken als link-tekst, wordt het moeilijk om met een gesproken instructie de link te activeren.
- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): de link moet groot genoeg zijn om aan te klikken, en kleine links moeten niet te dicht op een andere link staan.
- [WCAG eis 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts): voor de bezoeker die de huidige taal niet kan lezen, is het handig om voor de linktekst juist de andere taal te gebruiken. Gebruik het \`lang\` attribuut om aan te geven dat deze linktekst in een andere taal is geschreven.
- [WCAG eis 3.1.4](https://www.w3.org/TR/WCAG21/#abbreviations): als de taal wordt weergegeven als afkorting, dan moet de volledige naam in het \`title\` attribuut beschikbaar zijn.
- [WCAG eis 3.2.3](https://www.w3.org/TR/WCAG21/#consistent-navigation): de links naar alternatieve talen moeten op alle pagina's op dezelfde plek staan.
`;const E={title:"React Component/Alternate language navigation",id:"react-alternate-lang-nav",component:s,args:{heading:"Taal kiezen",headingId:"0103ec04-5ef6-41e6-b5f7-2fa7f60b0ed9",headingLevel:2,children:e(h,{})},parameters:{tokensPrefix:"utrecht-alternate-lang-nav",tokens:_,tokensDefinition:I,docs:{page:()=>d(h,{children:[e(W,{children:D}),e(L,{}),e(N,{story:x}),e(y,{})]})}},render:()=>{const r={heading:"Taal kiezen",headingId:"0103ec04-5ef6-41e6-b5f7-2fa7f60b0ed9",headingLevel:2},{heading:o,headingId:a,headingLevel:l}=r;return d("nav",{className:"utrecht-alternate-lang-nav","aria-labelledby":a,children:[e(C,{level:l,className:"utrecht-alternate-lang-nav__heading",id:a,children:o}),e(s,{"aria-current":"page",className:"utrecht-link--current-lang",href:"https://example.com/en",hrefLang:"en",lang:"en",title:"This page in English",children:"EN"}),e("span",{"aria-hidden":"true",children:" | "}),e(s,{className:"utrecht-link--alternate-lang",href:"https://example.com/nl",hrefLang:"nl",lang:"nl",rel:"alternate",title:"Deze pagina in Nederlands",children:"NL"})]})}},n={},t={render:()=>{const r={heading:"Taal kiezen",headingId:"0103ec04-5ef6-41e6-b5f7-2fa7f60b0ed9",headingLevel:2,items:[{label:"This page in English",lang:"en",current:!0,textContent:"EN"},{label:"Deze pagina in Nederlands",lang:"nl",current:!1,textContent:"NL"}]},{heading:o,headingId:a,headingLevel:l,items:T}=r;return d("section",{className:"utrecht-alternate-lang-nav","aria-labelledby":a,children:[e(C,{level:l,className:"utrecht-alternate-lang-nav__heading",id:a,children:o}),e(j,{children:T.map(({current:A,label:G,lang:g,textContent:z})=>e(R,{inline:!0,pressed:A,lang:g,"aria-label":G,children:z},g))})]})}},i=S(E);var p,c,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,k,w;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const args = {
      heading: 'Taal kiezen',
      headingId: '0103ec04-5ef6-41e6-b5f7-2fa7f60b0ed9',
      headingLevel: 2,
      items: [{
        label: 'This page in English',
        lang: 'en',
        current: true,
        textContent: 'EN'
      }, {
        label: 'Deze pagina in Nederlands',
        lang: 'nl',
        current: false,
        textContent: 'NL'
      }]
    };
    const {
      heading,
      headingId,
      headingLevel,
      items
    } = args;
    return <section className="utrecht-alternate-lang-nav" aria-labelledby={headingId}>
        <Heading level={headingLevel} className="utrecht-alternate-lang-nav__heading" id={headingId}>
          {heading}
        </Heading>
        <ButtonGroup>
          {items.map(({
          current,
          label,
          lang,
          textContent
        }) => <LinkButton inline pressed={current} lang={lang} aria-label={label} key={lang}>
              {textContent}
            </LinkButton>)}
        </ButtonGroup>
      </section>;
  }
}`,...(w=(k=t.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var b,v,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"designTokenStory(meta)",...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const oe=["Default","ButtonGroupStory","DesignTokens"];export{t as ButtonGroupStory,n as Default,i as DesignTokens,oe as __namedExportsOrder,E as default};
//# sourceMappingURL=AlternateLangNav.stories-3784815a.js.map
