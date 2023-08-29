import{a as Tn,F as Fn,j as r}from"./jsx-runtime-e6a661ac.js";import"./chunk-S4VUQJ4A-755dfdd7.js";import{D as Gn,P as Vn,A as Wn,b as Cn,d as Rn}from"./index-4ddb04c3.js";import{o as _n}from"./index-589f000d.js";import{t as Bn,d as Hn}from"./util-92af3e49.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-6426020f.js";import"../sb-preview/runtime.js";import"./react-18-0f8fd3cb.js";import"./index-2801d3c9.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./defineProperty-75c483e5.js";import"./clsx.m-1229b3e0.js";import"./index-8d47fad6.js";const Jn=`<!-- @license CC0-1.0 -->

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
- **appearance**: van de [CSS \`appearance\` property](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance) (bijvoorbeeld: \`appearance: push-button\`).

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
`,En={button:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderRadius"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}},type:"fontFamilies"},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"fontSizes"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},"inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"letter-spacing":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"lineHeights"},"margin-block-start":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-start":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-end":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"},"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | uppercase",inherits:!0}}},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},icon:{gap:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},scale:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},scale:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}}},pressed:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},"primary-action":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},scale:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},pressed:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}}},"secondary-action":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},pressed:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}}},subtle:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},pressed:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}}}}},Ln={utrecht:En},Mn={title:"React Component/Button",id:"react-button",component:_n,args:{children:"Read more..."},parameters:{tokensPrefix:"utrecht-button",tokens:Bn,tokensDefinition:Ln,docs:{page:()=>Tn(Fn,{children:[r(Gn,{children:Jn}),r(Vn,{}),r(Wn,{story:Cn}),r(Rn,{})]})}},argTypes:{appearance:{control:{type:"select"},options:[void 0,"primary-action-button","secondary-action-button","subtle-button"]},type:{control:{type:"select"},options:[void 0,"button","submit","reset"]}}},e={},s={args:{disabled:!0,children:"Read more..."}},t={args:{pressed:!1,children:"Toggle something"}},o={args:{pressed:!0,children:"Toggle something"}},a={args:{children:"Read more...",busy:!0}},i={parameters:{pseudo:{hover:!0}},args:{...e.args}},c={parameters:{pseudo:{focus:!0}},args:{...e.args}},l={parameters:{pseudo:{active:!0}},args:{...e.args}},p={parameters:{pseudo:{focusVisible:!0,focus:!0}},args:{...e.args}},u={args:{...e.args,appearance:"primary-action-button"}},d={args:{...e.args,appearance:"primary-action-button",disabled:!0}},y={args:{...e.args,appearance:"primary-action-button",pressed:!0}},m={args:{...e.args,appearance:"primary-action-button",busy:!0}},g={parameters:{pseudo:{hover:!0}},args:{...e.args,appearance:"primary-action-button"}},b={parameters:{pseudo:{focus:!0}},args:{...e.args,appearance:"primary-action-button"}},h={parameters:{pseudo:{active:!0},args:{...e.args,appearance:"primary-action-button"}}},x={parameters:{pseudo:{focusVisible:!0,focus:!0}},args:{...e.args,appearance:"primary-action-button"}},f={args:{...e.args,appearance:"secondary-action-button"}},k={args:{...e.args,appearance:"secondary-action-button",disabled:!0}},v={args:{...e.args,appearance:"secondary-action-button",pressed:!0}},$={args:{...e.args,appearance:"secondary-action-button",busy:!0}},S={parameters:{pseudo:{hover:!0}},args:{...e.args,appearance:"secondary-action-button"}},D={parameters:{pseudo:{focus:!0}},args:{...e.args,appearance:"secondary-action-button"}},A={parameters:{pseudo:{active:!0}},args:{...e.args,appearance:"secondary-action-button"}},w={parameters:{pseudo:{focusVisible:!0,focus:!0}},args:{...e.args,appearance:"secondary-action-button"}},j={args:{...e.args,appearance:"subtle-button"}},n={args:{...e.args,appearance:"subtle-button",disabled:!0}},z={args:{...e.args,appearance:"subtle-button",pressed:!0}};n.args={children:"Read more...",appearance:"subtle-button",disabled:!0};const P={args:{...e.args,appearance:"subtle-button",busy:!0}},T={parameters:{pseudo:{hover:!0}},args:{...e.args,appearance:"subtle-button"}},F={parameters:{pseudo:{focus:!0}},args:{...e.args,appearance:"subtle-button"}},G={parameters:{pseudo:{active:!0}},args:{...e.args,appearance:"subtle-button"}},V={parameters:{pseudo:{focusVisible:!0,focus:!0}},args:{...e.args,appearance:"subtle-button"}},W=Hn(Mn);var C,R,_;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(_=(R=e.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var B,H,J;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Read more...'
  }
}`,...(J=(H=s.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var E,L,M;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    pressed: false,
    children: 'Toggle something'
  }
}`,...(M=(L=t.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var N,O,I;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    pressed: true,
    children: 'Toggle something'
  }
}`,...(I=(O=o.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var U,Y,q;a.parameters={...a.parameters,docs:{...(U=a.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: 'Read more...',
    busy: true
  }
}`,...(q=(Y=a.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var K,Q,X;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  },
  args: {
    ...Default.args
  }
}`,...(X=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ne;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    ...Default.args
  }
}`,...(ne=(ee=c.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,se,te;l.parameters={...l.parameters,docs:{...(re=l.parameters)==null?void 0:re.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  },
  args: {
    ...Default.args
  }
}`,...(te=(se=l.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var oe,ae,ie;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  },
  args: {
    ...Default.args
  }
}`,...(ie=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var ce,le,pe;u.parameters={...u.parameters,docs:{...(ce=u.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'primary-action-button'
  }
}`,...(pe=(le=u.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ue,de,ye;d.parameters={...d.parameters,docs:{...(ue=d.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
    disabled: true
  }
}`,...(ye=(de=d.parameters)==null?void 0:de.docs)==null?void 0:ye.source}}};var me,ge,be;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
    pressed: true
  }
}`,...(be=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var he,xe,fe;m.parameters={...m.parameters,docs:{...(he=m.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
    busy: true
  }
}`,...(fe=(xe=m.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var ke,ve,$e;g.parameters={...g.parameters,docs:{...(ke=g.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'primary-action-button'
  }
}`,...($e=(ve=g.parameters)==null?void 0:ve.docs)==null?void 0:$e.source}}};var Se,De,Ae;b.parameters={...b.parameters,docs:{...(Se=b.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'primary-action-button'
  }
}`,...(Ae=(De=b.parameters)==null?void 0:De.docs)==null?void 0:Ae.source}}};var we,je,ze;h.parameters={...h.parameters,docs:{...(we=h.parameters)==null?void 0:we.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    },
    args: {
      ...Default.args,
      appearance: 'primary-action-button'
    }
  }
}`,...(ze=(je=h.parameters)==null?void 0:je.docs)==null?void 0:ze.source}}};var Pe,Te,Fe;x.parameters={...x.parameters,docs:{...(Pe=x.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Fe=(Te=x.parameters)==null?void 0:Te.docs)==null?void 0:Fe.source}}};var Ge,Ve,We;f.parameters={...f.parameters,docs:{...(Ge=f.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(We=(Ve=f.parameters)==null?void 0:Ve.docs)==null?void 0:We.source}}};var Ce,Re,_e;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
    disabled: true
  }
}`,...(_e=(Re=k.parameters)==null?void 0:Re.docs)==null?void 0:_e.source}}};var Be,He,Je;v.parameters={...v.parameters,docs:{...(Be=v.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
    pressed: true
  }
}`,...(Je=(He=v.parameters)==null?void 0:He.docs)==null?void 0:Je.source}}};var Ee,Le,Me;$.parameters={...$.parameters,docs:{...(Ee=$.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
    busy: true
  }
}`,...(Me=(Le=$.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var Ne,Oe,Ie;S.parameters={...S.parameters,docs:{...(Ne=S.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(Ie=(Oe=S.parameters)==null?void 0:Oe.docs)==null?void 0:Ie.source}}};var Ue,Ye,qe;D.parameters={...D.parameters,docs:{...(Ue=D.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(qe=(Ye=D.parameters)==null?void 0:Ye.docs)==null?void 0:qe.source}}};var Ke,Qe,Xe;A.parameters={...A.parameters,docs:{...(Ke=A.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(Xe=(Qe=A.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,en,nn;w.parameters={...w.parameters,docs:{...(Ze=w.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(nn=(en=w.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var rn,sn,tn;j.parameters={...j.parameters,docs:{...(rn=j.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(tn=(sn=j.parameters)==null?void 0:sn.docs)==null?void 0:tn.source}}};var on,an,cn;n.parameters={...n.parameters,docs:{...(on=n.parameters)==null?void 0:on.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button',
    disabled: true
  }
}`,...(cn=(an=n.parameters)==null?void 0:an.docs)==null?void 0:cn.source}}};var ln,pn,un;z.parameters={...z.parameters,docs:{...(ln=z.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button',
    pressed: true
  }
}`,...(un=(pn=z.parameters)==null?void 0:pn.docs)==null?void 0:un.source}}};var dn,yn,mn;P.parameters={...P.parameters,docs:{...(dn=P.parameters)==null?void 0:dn.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button',
    busy: true
  }
}`,...(mn=(yn=P.parameters)==null?void 0:yn.docs)==null?void 0:mn.source}}};var gn,bn,hn;T.parameters={...T.parameters,docs:{...(gn=T.parameters)==null?void 0:gn.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(hn=(bn=T.parameters)==null?void 0:bn.docs)==null?void 0:hn.source}}};var xn,fn,kn;F.parameters={...F.parameters,docs:{...(xn=F.parameters)==null?void 0:xn.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(kn=(fn=F.parameters)==null?void 0:fn.docs)==null?void 0:kn.source}}};var vn,$n,Sn;G.parameters={...G.parameters,docs:{...(vn=G.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(Sn=($n=G.parameters)==null?void 0:$n.docs)==null?void 0:Sn.source}}};var Dn,An,wn;V.parameters={...V.parameters,docs:{...(Dn=V.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
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
}`,...(wn=(An=V.parameters)==null?void 0:An.docs)==null?void 0:wn.source}}};var jn,zn,Pn;W.parameters={...W.parameters,docs:{...(jn=W.parameters)==null?void 0:jn.docs,source:{originalSource:"designTokenStory(meta)",...(Pn=(zn=W.parameters)==null?void 0:zn.docs)==null?void 0:Pn.source}}};const pr=["Default","DefaultDisabled","DefaultToggle","DefaultTogglePressed","DefaultBusy","DefaultHover","DefaultFocus","DefaultActive","DefaultFocusVisible","PrimaryActionDefault","PrimaryActionDisabled","PrimaryActionPressed","PrimaryActionBusy","PrimaryActionHover","PrimaryActionFocus","PrimaryActionActive","PrimaryActionFocusVisible","SecondaryActionDefault","SecondaryActionDisabled","SecondaryActionPressed","SecondaryActionBusy","SecondaryActionHover","SecondaryActionFocus","SecondaryActionActive","SecondaryActionFocusVisible","SubtleDefault","SubtleDisabled","SubtlePressed","SubtleBusy","SubtleHover","SubtleFocus","SubtleActive","SubtleFocusVisible","DesignTokens"];export{e as Default,l as DefaultActive,a as DefaultBusy,s as DefaultDisabled,c as DefaultFocus,p as DefaultFocusVisible,i as DefaultHover,t as DefaultToggle,o as DefaultTogglePressed,W as DesignTokens,h as PrimaryActionActive,m as PrimaryActionBusy,u as PrimaryActionDefault,d as PrimaryActionDisabled,b as PrimaryActionFocus,x as PrimaryActionFocusVisible,g as PrimaryActionHover,y as PrimaryActionPressed,A as SecondaryActionActive,$ as SecondaryActionBusy,f as SecondaryActionDefault,k as SecondaryActionDisabled,D as SecondaryActionFocus,w as SecondaryActionFocusVisible,S as SecondaryActionHover,v as SecondaryActionPressed,G as SubtleActive,P as SubtleBusy,j as SubtleDefault,n as SubtleDisabled,F as SubtleFocus,V as SubtleFocusVisible,T as SubtleHover,z as SubtlePressed,pr as __namedExportsOrder,Mn as default};
//# sourceMappingURL=Button.stories-12a53cbb.js.map
