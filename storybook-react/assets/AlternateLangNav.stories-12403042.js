import{j as e,F as u,a as p}from"./jsx-runtime-670450c2.js";import{L as o,d as m,B as f,e as C}from"./index-4b8344d7.js";import{t as L}from"./tokens-e97a859d.js";import{t as T,d as G}from"./util-36ba316b.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const N=`<!-- @license CC0-1.0 -->

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
`;const A={title:"React Component/Alternate language navigation",id:"react-alternate-lang-nav",component:o,tags:["autodocs"],parameters:{tokensPrefix:"utrecht-alternate-lang-nav",tokens:T,tokensDefinition:L,docs:{description:{component:N}}}},y=()=>{const i={heading:"Taal kiezen",headingId:"0103ec04-5ef6-41e6-b5f7-2fa7f60b0ed9",headingLevel:2},{heading:r,headingId:a,headingLevel:l}=i;return p("nav",{className:"utrecht-alternate-lang-nav","aria-labelledby":a,children:[e(m,{level:l,className:"utrecht-alternate-lang-nav__heading",id:a,children:r}),e(o,{"aria-current":"page",className:"utrecht-link--current-lang",href:"https://example.com/en",hrefLang:"en",lang:"en",title:"This page in English",children:"EN"}),e("span",{"aria-hidden":"true",children:" | "}),e(o,{className:"utrecht-link--alternate-lang",href:"https://example.com/nl",hrefLang:"nl",lang:"nl",rel:"alternate",title:"Deze pagina in Nederlands",children:"NL"})]})},z=()=>{const i={heading:"Taal kiezen",headingId:"0103ec04-5ef6-41e6-b5f7-2fa7f60b0ed9",headingLevel:2,items:[{label:"This page in English",lang:"en",current:!0,textContent:"EN"},{label:"Deze pagina in Nederlands",lang:"nl",current:!1,textContent:"NL"}]},{heading:r,headingId:a,headingLevel:l,items:k}=i;return p("section",{className:"utrecht-alternate-lang-nav","aria-labelledby":a,children:[e(m,{level:l,className:"utrecht-alternate-lang-nav__heading",id:a,children:r}),e(f,{children:k.map(({current:v,label:b,lang:g,textContent:w})=>e(C,{inline:!0,pressed:v,lang:g,"aria-label":b,children:w},g))})]})},n=y.bind({});n.args={children:e(u,{})};const t=z.bind({});t.args={children:e(u,{})};const s=G(A);var d;n.parameters={...n.parameters,storySource:{source:`() => {
  const args = {
    heading: 'Taal kiezen',
    headingId: '0103ec04-5ef6-41e6-b5f7-2fa7f60b0ed9',
    headingLevel: 2
  };
  const {
    heading,
    headingId,
    headingLevel
  } = args;
  return <nav className="utrecht-alternate-lang-nav" aria-labelledby={headingId}>
      <Heading level={headingLevel} className="utrecht-alternate-lang-nav__heading" id={headingId}>
        {heading}
      </Heading>
      <Link aria-current="page" className="utrecht-link--current-lang" href="https://example.com/en" hrefLang="en" lang="en" title="This page in English">
        EN
      </Link>
      <span aria-hidden="true">{' | '}</span>
      <Link className="utrecht-link--alternate-lang" href="https://example.com/nl" hrefLang="nl" lang="nl" rel="alternate" title="Deze pagina in Nederlands">
        NL
      </Link>
    </nav>;
}`,...(d=n.parameters)==null?void 0:d.storySource}};var h;t.parameters={...t.parameters,storySource:{source:`() => {
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
}`,...(h=t.parameters)==null?void 0:h.storySource}};var c;s.parameters={...s.parameters,storySource:{source:"designTokenStory(meta)",...(c=s.parameters)==null?void 0:c.storySource}};const D=["Default","ButtonGroupStory","DesignTokens"];export{t as ButtonGroupStory,n as Default,s as DesignTokens,D as __namedExportsOrder,A as default};
//# sourceMappingURL=AlternateLangNav.stories-12403042.js.map
