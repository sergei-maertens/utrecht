import{a as V,j as c,F as O}from"./jsx-runtime-29545a09.js";import{t as U,d as K}from"./util-c59842d4.js";import{r as u}from"./index-76fb7be0.js";import{c as b}from"./clsx.m-1229b3e0.js";import{B as Z}from"./Button-e950cc69.js";import{H as B}from"./Heading-17db86b9.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const J=e=>e.length>=1?e[0]:void 0,Q=e=>e.length>=1?e[e.length-1]:void 0,X=(e,o)=>{const n=o?e.indexOf(o):-1;return n>=0&&n+1<=e.length-1?e[n+1]:void 0},Y=(e,o)=>{const n=o?e.indexOf(o):-1;return n>=0&&n-1<=e.length-1?e[n-1]:void 0},A=u.forwardRef(({id:e,label:o,headingLevel:n=1,expanded:i=!1,disabled:t,section:r,children:d,buttonRef:l,onActivate:s,onButtonBlur:g,onButtonFocus:h},p)=>{const y={className:b("utrecht-accordion__panel",{"utrecht-accordion__panel--expanded":i}),hidden:!i,"aria-hidden":!i},f="utrecht-accordion",_=e||u.useId(),a=`${f}${_}-button`,m=`${f}${_}-panel`;return V("div",{className:b("utrecht-accordion__section"),id:e,ref:p,children:[c(B,{level:n,className:b("utrecht-accordion__header"),children:c(Z,{className:b("utrecht-accordion__button"),appearance:"subtle-button","aria-expanded":i===!0,"aria-controls":m,disabled:t,id:a,onClick:()=>typeof s=="function"&&s(p),onFocus:()=>typeof h=="function"&&h(p),onBlur:()=>typeof g=="function"&&g(p),ref:l,children:o})}),r?c("section",{id:m,"aria-labelledby":a,...y,children:d}):c("div",{...y,children:d})]})});A.displayName="AccordionSection";const E=u.forwardRef(({children:e,group:o,headingLevel:n,heading:i,...t},r)=>{const d=u.useId();return V(O,{children:[!!i&&typeof n=="number"&&c(B,{level:n,children:i}),c("div",{className:b("utrecht-accordion"),role:o?"group":void 0,"aria-labelledby":o?d:void 0,...t,ref:r,children:e})]})});E.displayName="Accordion";const ee=(e,o)=>{console.log("useAccordion");const n=e.map(t=>u.useRef(null)),i=e.map(t=>u.useRef(null));return{ref:o,refs:n,buttonRefs:i,activeElement:null,sections:e,focusNextSection:t=>{var s;const r=n.indexOf(t),d=r>=0?i[r]:void 0,l=d?X(i,d):void 0;(s=l==null?void 0:l.current)==null||s.focus()},focusFirstSection:()=>{var r;const t=J(i);console.log(n),(r=t==null?void 0:t.current)==null||r.focus()},focusPreviousSection:t=>{var s;const r=n.indexOf(t),d=r>=0?i[r]:void 0,l=d?Y(i,d):void 0;(s=l==null?void 0:l.current)==null||s.focus()},focusLastSection:()=>{var r;const t=Q(i);(r=t==null?void 0:t.current)==null||r.focus()}}},j=({sections:e})=>{const o=u.useRef(null),{refs:n,buttonRefs:i,focusNextSection:t,focusFirstSection:r,focusLastSection:d,focusPreviousSection:l}=ee(e,o),[s,g]=u.useState(null),[h,p]=u.useState(e),y=a=>{g(a)},f=a=>{g(null)};return c(E,{onKeyDown:a=>{if(a.code==="End")d();else if(a.code==="Home")r();else if(a.code==="ArrowDown")s&&t(s);else if(a.code==="ArrowUp")s&&l(s);else return;a.preventDefault()},ref:o,children:h.map((a,m)=>{const H=F=>{const N=n.indexOf(F);p(h.map((q,M)=>M===N?{...q,expanded:!q.expanded}:q))};return u.createElement(A,{...a,ref:n[m],buttonRef:i[m],key:m,onButtonFocus:y,onButtonBlur:f,onActivate:H},a.body)})})};j.displayName="AccordionProvider";try{A.displayName="AccordionSection",A.__docgenInfo={description:"",displayName:"AccordionSection",props:{headingLevel:{defaultValue:{value:"1"},description:"",name:"headingLevel",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"any"}},expanded:{defaultValue:{value:"false"},description:"",name:"expanded",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},section:{defaultValue:null,description:"",name:"section",required:!1,type:{name:"boolean"}},onActivate:{defaultValue:null,description:"",name:"onActivate",required:!1,type:{name:"Function"}},onButtonFocus:{defaultValue:null,description:"",name:"onButtonFocus",required:!1,type:{name:"Function"}},onButtonBlur:{defaultValue:null,description:"",name:"onButtonBlur",required:!1,type:{name:"Function"}},buttonRef:{defaultValue:null,description:"",name:"buttonRef",required:!1,type:{name:"RefObject<HTMLButtonElement>"}}}}}catch{}const ne=`<!-- @license CC0-1.0 -->

# Accordion

Je kunt een accordion gebruiken lange pagina's korter te maken zodat de gebruiker niet lang moet scrollen om de relevante informatie te vinden.

De inhoud verbergen heeft als nadeel dat "zoeken in pagina" geen resultaten oplevert de inhoud die verborgen is. Als je weet op welke zoekterm de gebruiker heeft gezocht om op de pagina met accordion te komen, dan kun je de sections die de zoekterm bevatten automatisch _expanded_ maken.

## Tekst

Het is belangrijk duidelijke koppen te hebben, omdat de gebruiker niet de verborgen inhoud kan "scannen" om relevante informatie te vinden.

## HTML

Gebruik een \`<button>\` element waarmee je de inhoud van de section kunt weergeven en verbergen. Gebruik altijd het \`aria-expanded\` attribuut zodat duidelijk wat het effect is van de button activeren. Gebruik \`aria-expanded="true"\` wanneer de inhoud beschikbaar is, gebruik \`aria-expanded="false"\` wanneer de inhoud verborgen is.

Plaats de button in de heading, zodat gebruikers die via een overzicht van headings door de pagina navigeren de informatie makkelijk kunnen vinden.

Plaats de inhoud van de _expandable region_ in een \`<section>\` element, zodat gebruikers die via een overzicht van _landmarks_ door de pagina navigeren de informatie makkelijk kunnen vinden (het \`section\` element maakt een \`region\` landmark). Gebruik \`aria-labelledby\` om de \`section\` te koppelen aan de heading, omdat het is belangrijk dat de landmark een duidelijk label heeft. Zonder label is de _landmark navigation_ onduidelijk omdat er meerdere regions zijn zonder naam, waarvan niet duidelijk is wat de inhoud is.

Zelfs de inhoud van een verborgen _expandable region_ moet in de HTML-code staan, wanneer je _server-side rendering_ gebruikt zodat zoekmachines dan toch toegang hebben tot de volledige inhoud. De inhoud van een verborgen _expandable region_ kan met CSS onzichtbaar gemaakt worden.

Wanneer je accordion heel veel onderdelen heeft, dan kunnen gebruikers van _landmark navigation_ moeilijker andere landmarks in de pagina vinden. Om bij de \`contentinfo\` landmark te komen (de page footer), moet de gebruiker eerst alle accordion onderdelen overslaan. Gebruik voor een accordion met heel veel onderdelen een \`<div>\` of \`<section role="presentation">\` element in plaats van het \`<section>\` element zodat het geen landmark wordt. Gebruikers kunnen de informatie dan nog wel vinden via _heading navigation_.

### Zo moet het niet

Verwijder het \`aria-expanded\` attribuut niet, want \`aria-expanded="false"\` is niet hetzelfde als geen \`aria-expanded\` attribuut hebben. "_Boolean attributes_" van ARIA werken niet hetzelfde als _boolean attributes_ van HTML. ([Boolean attributes in HTML and ARIA: what's the difference? — Hidde de Vries](https://hidde.blog/boolean-attributes-in-html-and-aria-whats-the-difference/)).

Plaats niet de heading in de button in plaats van andersom, omdat de heading dan niet toegankelijk is voor hulpmiddelen die een overzicht maken van alle headings op een pagina.

Wacht niet met het plaatsen van de inhoud van de _expandable region_ tot de gebruiker de button activeert, want zoekmachines gebruiken alleen de initiële inhoud van de pagina zonder op buttons te gebruiken.

## Visueel ontwerp

De icoon plaatsen vóór de heading is meest duidelijk. Als het icoon voor _expanded_ of _not expanded_ uitgelijnd is aan het eind van de regel, dan is het minder duidelijk dat de heading een button is die voor inklappen en uitklappen zorgt. Sommige gebruikers met een beperkt gezichtsveld kunnen het icoon bijvoorbeeld niet zien wanneer ze naar naar de heading kijken, als er grote afstand zit tussen de heading en het icoon.

## Relevante WCAG eisen

De WCAG eisen voor de button component en de heading component gelden ook voor de accordion header.

Let extra op voor deze onderdelen:

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): de _heading level_ van de accordion sections is afhankelijk van waar in de pagina de accordion is geplaatst, dit kan per pagina verschillen.
- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose): gebruik \`aria-controls\` voor de button, en gebruik een \`region\` landmark voor de _expandable region_ (gebruik daarvoor het HTML-element \`<section>\`)
- [WCAG eis 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum): contrast tussen tekst en achtergrond en tussen icoon en achtergrond is voldoende in alle varianten, alle interactieve statussen en alle mogelijke combinaties.
- [WCAG eis 3.2.1](https://www.w3.org/TR/WCAG21/#on-focus): maak de accordion niet automatisch _expanded_ als de button focus krijgt.
- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): ondersteun ook de optionele toetsen: \`Down Arrow\`, \`Up Arrow\`, \`Home\` en \`End\`. \`Space\` moet de button activeren, niet de pagina scrollen (gebruik \`keypressEvt.preventDefault()\`).
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de tekst die zowel wordt gebruikt als heading en als label voor de button moet duidelijk zijn, omdat de inhoud niet altijd zichtbaar is.
- [WCAG eis 2.4.10](https://www.w3.org/TR/WCAG21/#section-headings): accordions die onderdeel vormen van de lopende tekst moeten section headings gebruiken.

## Relevante info

- [Accordion (Sections With Show/Hide Functionality) - W3C ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
`,te={accordion:{button:{"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},icon:{"arrow-down":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<url>",inherits:!0}}},"arrow-up":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<url>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}},panel:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},oe={utrecht:te},ie=({expanded:e,label:o,body:n})=>c(j,{sections:[{expanded:e,label:o,body:n}]}),re={title:"React Component/Accordion",id:"react-accordion",args:{label:"",body:"",expandedAccordion:!1},argTypes:{label:{name:"label",type:{name:"string",required:!0},table:{defaultValue:{summary:""},category:"API"}},body:{name:"body",type:{name:"string",required:!0},table:{defaultValue:{summary:""},category:"API"}},expandedAccordion:{name:"expandedAccordion",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1},category:"API"}}},parameters:{tokensPrefix:"utrecht-accordion",tokens:U,tokensDefinition:oe,docs:{description:{component:ne}}},render:ie},v={args:{label:"Lorem ipsum",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,expandedAccordion:!0}},ae=[{label:"Lorem ipsum 1",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,expandedAccordion:!0},{label:"Lorem ipsum 2",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,expandedAccordion:!1},{label:"Lorem ipsum 3",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,expandedAccordion:!1}],k={render:()=>c(j,{sections:ae})},x={args:{label:'ما هو "لوريم إيبسوم" ؟',body:' المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.'},decorators:[e=>c("div",{lang:"ar",dir:"rtl",children:e()})],name:"Right-to-left"},w=K(re);var z,R,$;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Lorem ipsum',
    body: \`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.\`,
    expandedAccordion: true
  }
}`,...($=(R=v.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var S,L,D;k.parameters={...k.parameters,docs:{...(S=k.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <AccordionProvider sections={accordionData} />
}`,...(D=(L=k.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var G,C,I;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'ما هو "لوريم إيبسوم" ؟',
    body: ' المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.'
  },
  decorators: [Story => <div lang="ar" dir="rtl">
        {Story()}
      </div>],
  name: 'Right-to-left'
}`,...(I=(C=x.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var T,W,P;w.parameters={...w.parameters,docs:{...(T=w.parameters)==null?void 0:T.docs,source:{originalSource:"designTokenStory(meta)",...(P=(W=w.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};const he=["Default","Multiple","RTL","DesignTokens"];export{v as Default,w as DesignTokens,k as Multiple,x as RTL,he as __namedExportsOrder,re as default};
//# sourceMappingURL=Accordion.stories-64372ce7.js.map
