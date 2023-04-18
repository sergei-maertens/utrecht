import{a as pn,F as un,j as r}from"./jsx-runtime-670450c2.js";import"./chunk-PCJTTTQV-8a033c10.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{D as dn,P as yn,A as mn,a as gn,S as bn}from"./index-d13ef923.js";import{d as hn}from"./index-83331488.js";import{t as xn,d as fn}from"./util-cec01095.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-0e33defa.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-1e419f15.js";import"./chunk-RDJSMFWU-eb6ed6e5.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-195fbef2.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-5b183829.js";import"./index-b3b2312b.js";import"./isSymbol-69229716.js";import"./index-356e4a49.js";import"./clsx.m-b4f9149a.js";import"./index-4d501b15.js";const kn=`<!-- @license CC0-1.0 -->

# Button

De button component gebruik je zodat de gebruiker acties kan uit te voeren en de _user interface_ kan bedienen.

Vaak gebruik je een button in combinatie met de _button group_ component: plaats de button in een _button group_ als je ruimte tussen de button en andere componenten wilt.

## Toepassing

### Gebruik je een button of link?

Sommige ontwerpen hebben een button om naar een andere pagina te gaan. Sommige ontwerpen hebben link in een formulier om naar de vorige pagina te gaan, terwijl de gegevens wel tussentijds verstuurd en opgeslagen worden. Het is belangrijk dat je het goede HTML-element gebruikt dat past bij de actie, in plaats van het HTML-element kiest dat past bij het ontwerp.

Om deze patronen te gebruiken zijn er vier componenten nodig:

- link
- link die eruit ziet als button
- button
- button die eruit ziet als link

Gebruik alleen een \`<a>\` element wanneer er geen gevolgen zijn. Gebruik een \`<button>\` element als je niet de browser back button kan gebruiken om het effect ongedaan te maken.

Enkele voorbeelden waar je een link gebruikt:

- een _call to action_ om te registreren: een link.
- een knop om naar het loginformulier te gaan: een link
- dezelfde pagina in een andere taal bekijken: een link.

Enkele voorbeelden waar je een button gebruikt:

- Uitloggen: button. Log niet uit met een link! Je navigatie moet het ondersteunen om zowel links als button dezelfde stijl te geven.
- de voorkeurstaal aanpassen en dezelfde pagina in een andere taal bekijken: een button.

## Anatomie

### Terminologie

- **button**: van het \`<button>\` HTML element, \`role="button"\` in ARIA.

### States

- \`normal\`
- \`active\`: de gebruiker activeert de button op dit moment. Bijvoorbeeld door er op te klikken. De \`active\` state duurt maar heel kort.
- \`pressed\`: een ingedrukte button, bijvoorbeeld de _bold button_ in een toolbar van een rich text editor, of de button van een date picker popup. Een button kan lange tijd \`pressed\` zijn, in tegenstelling tot \`active\`.
- \`hover\`: de gebruiker heeft de aanwijzer boven de button. Bijvoorbeeld door met de muiscursor er over te 'zweven'.
- \`focus\`
- \`focus\` en \`focus-visible\`: de link heeft de focus door de \`Tab\` knop van het keyboard.
- \`disabled\`
- \`disabled\` en \`focus-visible\`: als een button disabled is (zeker een _primary action button_), dan moet wel duidelijk zijn dat de button er is en wat je kunt doen om verder te komen. Screen reader gebruikers moeten daarom focus kunnen hebben op een disabled button, om de bijbehorende uitleg te horen.

## Design

Maak elke button 44×44px of groter ([WCAG 2.5.5](https://www.w3.org/TR/WCAG21/#target-size)).

## HTML

Gebruik het \`<button type="button">\` element in HTML om een button te maken.

Een alternatief op \`<button>\` is bijvoorbeeld \`<input type="button">\`, maar die heeft minder mogelijkheden voor de inhoud van de button. Je kunt er bijvoorbeeld geen SVG icon in plaatsen. Nog een alternatief is \`<div role="button" tabindex="0">\`, maar \`<button>\` heeft het voordeel dat die ook werkt zonder CSS en zonder JavaScript.

### Formulieren verzenden

Voor formulieren verzenden gebruik je \`<button type="submit">\`. Gebruik ook de \`submit\` event van een formulier en niet alleen de \`click\` event van de button, zodat je ook vanuit een formulierveld op \`Enter\` kan drukken om het formulier te verzenden.

## Hoe het niet moet

### Geen koppeling met uitleg over button

Niet:

\`\`\`html
<p>
  <label for="upload">Bijlage:</label>
  <input type="file" id="upload" />
</p>
<p>Je mag een JPG of een PDF uploaden.</p>
\`\`\`

Wel:

\`\`\`html
<p>
  <label for="upload">Bijlage:</label>
  <input type="file" id="upload" aria-describedby="upload-description" />
</p>
<p id="upload-description">Je mag een JPG of een PDF uploaden.</p>
\`\`\`

---

Niet:

\`\`\`html
<p>
  <button type="submit">Verzenden</button>
</p>
<p>Door het formulier te verzenden ga je akkoord met de algemene voorwaarden.</p>
\`\`\`

Wel:

\`\`\`html
<p>
  <button type="submit" aria-describedby="submit-description">Verzenden</button>
</p>
<p id="submit-description">Door het formulier te verzenden ga je akkoord met de algemene voorwaarden.</p>
\`\`\`

### Geen koppeling met foutmelding bij een button

Niet:

\`\`\`html
<p>
  <button type="submit">Opslaan</button>
</p>
<p class="error">Je bent uitgelogd. Log opnieuw in om je wijzigingen op te slaan.</p>
\`\`\`

Wel:

\`\`\`html
<p>
  <label for="upload">Bijlage:</label>
  <input type="file" id="upload" aria-describedby="upload-description" />
</p>
<p id="upload-description" class="error">Je mag een JPG of een PDF uploaden.</p>
\`\`\`

## Relevante WCAG regels

- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): je kan de button activeren met \`Enter\` of \`Space\`, en het is mogelijk met \`Tab\` de button te focussen. \`Space\` gebruiken heeft dan niet het effect dat de pagina scrollt.
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de button moet duidelijk zijn
- [WCAG eis 2.5.2](https://www.w3.org/TR/WCAG21/#pointer-cancellation):
  - gebruik niet de \`mousedown\` event om de button te activeren, gebruik liever de \`click\` event
  - \`mousedown\` mag alleen gebruikt worden als \`mouseup\` het effect weer ongedaan maakt, bijvoorbeeld een "_fast foward_" button om audio of video door te spoelen.
- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): de button moet groot genoeg zijn om aan te klikken, en kleine buttons moeten niet te dicht op een andere button staan.
`,vn={button:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderRadius"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}},type:"fontFamilies"},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"fontSizes"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},"inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"letter-spacing":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"lineHeights"},"margin-block-start":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-start":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-end":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"},"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | uppercase",inherits:!0}}},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},icon:{gap:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},scale:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},scale:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}}},"primary-action":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},transform:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}}},"secondary-action":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}}},subtle:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}}}}},$n={utrecht:vn},Sn={title:"React Component/Button",id:"react-button",component:hn,args:{children:"Read more..."},parameters:{tokensPrefix:"utrecht-button",tokens:xn,tokensDefinition:$n,docs:{page:()=>pn(un,{children:[r(dn,{children:kn}),r(yn,{}),r(mn,{story:gn}),r(bn,{})]})}},argTypes:{appearance:{type:"select",options:[void 0,"primary-action-button","secondary-action-button","subtle-button"]},type:{type:"select",options:[void 0,"button","submit","reset"]}}},e={},t={args:{disabled:!0,children:"Read more..."}},s={args:{children:"Read more...",busy:!0}},o={parameters:{pseudo:{hover:!0}},args:{...e.args}},a={parameters:{pseudo:{focus:!0}},args:{...e.args}},i={parameters:{pseudo:{active:!0}},args:{...e.args}},c={parameters:{pseudo:{focusVisible:!0,focus:!0}},args:{...e.args}},l={args:{...e.args,appearance:"primary-action-button"}},p={args:{...e.args,appearance:"primary-action-button",disabled:!0}},u={args:{...e.args,appearance:"primary-action-button",busy:!0}},d={parameters:{pseudo:{hover:!0}},args:{...e.args,appearance:"primary-action-button"}},y={parameters:{pseudo:{focus:!0}},args:{...e.args,appearance:"primary-action-button"}},m={parameters:{pseudo:{active:!0},args:{...e.args,appearance:"primary-action-button"}}},g={parameters:{pseudo:{focusVisible:!0,focus:!0}},args:{...e.args,appearance:"primary-action-button"}},b={args:{...e.args,appearance:"secondary-action-button"}},h={args:{...e.args,appearance:"secondary-action-button",disabled:!0}},x={args:{...e.args,appearance:"secondary-action-button",busy:!0}},f={parameters:{pseudo:{hover:!0}},args:{...e.args,appearance:"secondary-action-button"}},k={parameters:{pseudo:{focus:!0}},args:{...e.args,appearance:"secondary-action-button"}},v={parameters:{pseudo:{active:!0}},args:{...e.args,appearance:"secondary-action-button"}},$={parameters:{pseudo:{focusVisible:!0,focus:!0}},args:{...e.args,appearance:"secondary-action-button"}},S={args:{...e.args,appearance:"subtle-button"}},n={args:{...e.args,appearance:"subtle-button",disabled:!0}};n.args={children:"Read more...",appearance:"subtle-button",disabled:!0};const D={args:{...e.args,appearance:"subtle-button",busy:!0}},w={parameters:{pseudo:{hover:!0}},args:{...e.args,appearance:"subtle-button"}},A={parameters:{pseudo:{focus:!0}},args:{...e.args,appearance:"subtle-button"}},j={parameters:{pseudo:{active:!0}},args:{...e.args,appearance:"subtle-button"}},z={parameters:{pseudo:{focusVisible:!0,focus:!0}},args:{...e.args,appearance:"subtle-button"}},P=fn(Sn);var F,G,T;e.parameters={...e.parameters,docs:{...(F=e.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(T=(G=e.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var V,W,R;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Read more...'
  }
}`,...(R=(W=t.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var _,B,C;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Read more...',
    busy: true
  }
}`,...(C=(B=s.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var H,J,E;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  },
  args: {
    ...Default.args
  }
}`,...(E=(J=o.parameters)==null?void 0:J.docs)==null?void 0:E.source}}};var L,M,N;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    ...Default.args
  }
}`,...(N=(M=a.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var O,I,Y;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  },
  args: {
    ...Default.args
  }
}`,...(Y=(I=i.parameters)==null?void 0:I.docs)==null?void 0:Y.source}}};var U,q,K;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  },
  args: {
    ...Default.args
  }
}`,...(K=(q=c.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,X,Z;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'primary-action-button'
  }
}`,...(Z=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,re;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
    disabled: true
  }
}`,...(re=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var te,se,oe;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
    busy: true
  }
}`,...(oe=(se=u.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ae,ie,ce;d.parameters={...d.parameters,docs:{...(ae=d.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'primary-action-button'
  }
}`,...(ce=(ie=d.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,pe,ue;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'primary-action-button'
  }
}`,...(ue=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var de,ye,me;m.parameters={...m.parameters,docs:{...(de=m.parameters)==null?void 0:de.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    },
    args: {
      ...Default.args,
      appearance: 'primary-action-button'
    }
  }
}`,...(me=(ye=m.parameters)==null?void 0:ye.docs)==null?void 0:me.source}}};var ge,be,he;g.parameters={...g.parameters,docs:{...(ge=g.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'primary-action-button'
  }
}`,...(he=(be=g.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var xe,fe,ke;b.parameters={...b.parameters,docs:{...(xe=b.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(ke=(fe=b.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var ve,$e,Se;h.parameters={...h.parameters,docs:{...(ve=h.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
    disabled: true
  }
}`,...(Se=($e=h.parameters)==null?void 0:$e.docs)==null?void 0:Se.source}}};var De,we,Ae;x.parameters={...x.parameters,docs:{...(De=x.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
    busy: true
  }
}`,...(Ae=(we=x.parameters)==null?void 0:we.docs)==null?void 0:Ae.source}}};var je,ze,Pe;f.parameters={...f.parameters,docs:{...(je=f.parameters)==null?void 0:je.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(Pe=(ze=f.parameters)==null?void 0:ze.docs)==null?void 0:Pe.source}}};var Fe,Ge,Te;k.parameters={...k.parameters,docs:{...(Fe=k.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(Te=(Ge=k.parameters)==null?void 0:Ge.docs)==null?void 0:Te.source}}};var Ve,We,Re;v.parameters={...v.parameters,docs:{...(Ve=v.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(Re=(We=v.parameters)==null?void 0:We.docs)==null?void 0:Re.source}}};var _e,Be,Ce;$.parameters={...$.parameters,docs:{...(_e=$.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(Ce=(Be=$.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};var He,Je,Ee;S.parameters={...S.parameters,docs:{...(He=S.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(Ee=(Je=S.parameters)==null?void 0:Je.docs)==null?void 0:Ee.source}}};var Le,Me,Ne;n.parameters={...n.parameters,docs:{...(Le=n.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button',
    disabled: true
  }
}`,...(Ne=(Me=n.parameters)==null?void 0:Me.docs)==null?void 0:Ne.source}}};var Oe,Ie,Ye;D.parameters={...D.parameters,docs:{...(Oe=D.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button',
    busy: true
  }
}`,...(Ye=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:Ye.source}}};var Ue,qe,Ke;w.parameters={...w.parameters,docs:{...(Ue=w.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(Ke=(qe=w.parameters)==null?void 0:qe.docs)==null?void 0:Ke.source}}};var Qe,Xe,Ze;A.parameters={...A.parameters,docs:{...(Qe=A.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(Ze=(Xe=A.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var en,nn,rn;j.parameters={...j.parameters,docs:{...(en=j.parameters)==null?void 0:en.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(rn=(nn=j.parameters)==null?void 0:nn.docs)==null?void 0:rn.source}}};var tn,sn,on;z.parameters={...z.parameters,docs:{...(tn=z.parameters)==null?void 0:tn.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(on=(sn=z.parameters)==null?void 0:sn.docs)==null?void 0:on.source}}};var an,cn,ln;P.parameters={...P.parameters,docs:{...(an=P.parameters)==null?void 0:an.docs,source:{originalSource:"designTokenStory(meta)",...(ln=(cn=P.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};const Xn=["Default","DefaultDisabled","DefaultBusy","DefaultHover","DefaultFocus","DefaultActive","DefaultFocusVisible","PrimaryActionDefault","PrimaryActionDisabled","PrimaryActionBusy","PrimaryActionHover","PrimaryActionFocus","PrimaryActionActive","PrimaryActionFocusVisible","SecondaryActionDefault","SecondaryActionDisabled","SecondaryActionBusy","SecondaryActionHover","SecondaryActionFocus","SecondaryActionActive","SecondaryActionFocusVisible","SubtleDefault","SubtleDisabled","SubtleBusy","SubtleHover","SubtleFocus","SubtleActive","SubtleFocusVisible","DesignTokens"];export{e as Default,i as DefaultActive,s as DefaultBusy,t as DefaultDisabled,a as DefaultFocus,c as DefaultFocusVisible,o as DefaultHover,P as DesignTokens,m as PrimaryActionActive,u as PrimaryActionBusy,l as PrimaryActionDefault,p as PrimaryActionDisabled,y as PrimaryActionFocus,g as PrimaryActionFocusVisible,d as PrimaryActionHover,v as SecondaryActionActive,x as SecondaryActionBusy,b as SecondaryActionDefault,h as SecondaryActionDisabled,k as SecondaryActionFocus,$ as SecondaryActionFocusVisible,f as SecondaryActionHover,j as SubtleActive,D as SubtleBusy,S as SubtleDefault,n as SubtleDisabled,A as SubtleFocus,z as SubtleFocusVisible,w as SubtleHover,Xn as __namedExportsOrder,Sn as default};
//# sourceMappingURL=Button.stories-9b697951.js.map
