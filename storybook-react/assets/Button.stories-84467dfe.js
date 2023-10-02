import{t as Pn,d as Tn}from"./util-fcd246a3.js";import{B as Gn}from"./Button-e950cc69.js";import"./jsx-runtime-29545a09.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";import"./clsx.m-1229b3e0.js";const Fn=`<!-- @license CC0-1.0 -->

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
`,Vn={button:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderRadius"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}},type:"fontFamilies"},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"fontSizes"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},"inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"lineHeights"},"margin-block-start":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-start":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-end":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"},"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | uppercase",inherits:!0}}},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},icon:{gap:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},scale:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},scale:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}}},pressed:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},"primary-action":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},scale:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},pressed:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}}},"secondary-action":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},pressed:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}}},subtle:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},pressed:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}}}}},Wn={utrecht:Vn},Bn={title:"React Component/Button",id:"react-button",component:Gn,args:{children:"Read more..."},parameters:{tokensPrefix:"utrecht-button",tokens:Pn,tokensDefinition:Wn,docs:{description:{component:Fn}}},argTypes:{appearance:{control:{type:"select"},options:[void 0,"primary-action-button","secondary-action-button","subtle-button"]},type:{control:{type:"select"},options:[void 0,"button","submit","reset"]}}},e={},r={args:{disabled:!0,children:"Read more..."}},s={args:{pressed:!1,children:"Toggle something"}},t={args:{pressed:!0,children:"Toggle something"}},o={args:{children:"Read more...",busy:!0}},a={parameters:{pseudo:{hover:!0}},args:{...e.args}},i={parameters:{pseudo:{focus:!0}},args:{...e.args}},c={parameters:{pseudo:{active:!0}},args:{...e.args}},l={parameters:{pseudo:{focusVisible:!0,focus:!0}},args:{...e.args}},p={args:{...e.args,appearance:"primary-action-button"}},u={args:{...e.args,appearance:"primary-action-button",disabled:!0}},d={args:{...e.args,appearance:"primary-action-button",pressed:!0}},y={args:{...e.args,appearance:"primary-action-button",busy:!0}},m={parameters:{pseudo:{hover:!0}},args:{...e.args,appearance:"primary-action-button"}},g={parameters:{pseudo:{focus:!0}},args:{...e.args,appearance:"primary-action-button"}},b={parameters:{pseudo:{active:!0},args:{...e.args,appearance:"primary-action-button"}}},h={parameters:{pseudo:{focusVisible:!0,focus:!0}},args:{...e.args,appearance:"primary-action-button"}},x={args:{...e.args,appearance:"secondary-action-button"}},f={args:{...e.args,appearance:"secondary-action-button",disabled:!0}},k={args:{...e.args,appearance:"secondary-action-button",pressed:!0}},v={args:{...e.args,appearance:"secondary-action-button",busy:!0}},$={parameters:{pseudo:{hover:!0}},args:{...e.args,appearance:"secondary-action-button"}},S={parameters:{pseudo:{focus:!0}},args:{...e.args,appearance:"secondary-action-button"}},D={parameters:{pseudo:{active:!0}},args:{...e.args,appearance:"secondary-action-button"}},w={parameters:{pseudo:{focusVisible:!0,focus:!0}},args:{...e.args,appearance:"secondary-action-button"}},A={args:{...e.args,appearance:"subtle-button"}},n={args:{...e.args,appearance:"subtle-button",disabled:!0}},j={args:{...e.args,appearance:"subtle-button",pressed:!0}};n.args={children:"Read more...",appearance:"subtle-button",disabled:!0};const z={args:{...e.args,appearance:"subtle-button",busy:!0}},P={parameters:{pseudo:{hover:!0}},args:{...e.args,appearance:"subtle-button"}},T={parameters:{pseudo:{focus:!0}},args:{...e.args,appearance:"subtle-button"}},G={parameters:{pseudo:{active:!0}},args:{...e.args,appearance:"subtle-button"}},F={parameters:{pseudo:{focusVisible:!0,focus:!0}},args:{...e.args,appearance:"subtle-button"}},V=Tn(Bn);var W,B,C;e.parameters={...e.parameters,docs:{...(W=e.parameters)==null?void 0:W.docs,source:{originalSource:"{}",...(C=(B=e.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var H,_,R;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Read more...'
  }
}`,...(R=(_=r.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var J,E,L;s.parameters={...s.parameters,docs:{...(J=s.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    pressed: false,
    children: 'Toggle something'
  }
}`,...(L=(E=s.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var M,N,O;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    pressed: true,
    children: 'Toggle something'
  }
}`,...(O=(N=t.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var U,I,q;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: 'Read more...',
    busy: true
  }
}`,...(q=(I=o.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var K,Q,X;a.parameters={...a.parameters,docs:{...(K=a.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  },
  args: {
    ...Default.args
  }
}`,...(X=(Q=a.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    ...Default.args
  }
}`,...(ee=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,re,se;c.parameters={...c.parameters,docs:{...(ne=c.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  },
  args: {
    ...Default.args
  }
}`,...(se=(re=c.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,oe,ae;l.parameters={...l.parameters,docs:{...(te=l.parameters)==null?void 0:te.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  },
  args: {
    ...Default.args
  }
}`,...(ae=(oe=l.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ie,ce,le;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'primary-action-button'
  }
}`,...(le=(ce=p.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var pe,ue,de;u.parameters={...u.parameters,docs:{...(pe=u.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
    disabled: true
  }
}`,...(de=(ue=u.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var ye,me,ge;d.parameters={...d.parameters,docs:{...(ye=d.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
    pressed: true
  }
}`,...(ge=(me=d.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var be,he,xe;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
    busy: true
  }
}`,...(xe=(he=y.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var fe,ke,ve;m.parameters={...m.parameters,docs:{...(fe=m.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'primary-action-button'
  }
}`,...(ve=(ke=m.parameters)==null?void 0:ke.docs)==null?void 0:ve.source}}};var $e,Se,De;g.parameters={...g.parameters,docs:{...($e=g.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'primary-action-button'
  }
}`,...(De=(Se=g.parameters)==null?void 0:Se.docs)==null?void 0:De.source}}};var we,Ae,je;b.parameters={...b.parameters,docs:{...(we=b.parameters)==null?void 0:we.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    },
    args: {
      ...Default.args,
      appearance: 'primary-action-button'
    }
  }
}`,...(je=(Ae=b.parameters)==null?void 0:Ae.docs)==null?void 0:je.source}}};var ze,Pe,Te;h.parameters={...h.parameters,docs:{...(ze=h.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Te=(Pe=h.parameters)==null?void 0:Pe.docs)==null?void 0:Te.source}}};var Ge,Fe,Ve;x.parameters={...x.parameters,docs:{...(Ge=x.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(Ve=(Fe=x.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}};var We,Be,Ce;f.parameters={...f.parameters,docs:{...(We=f.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
    disabled: true
  }
}`,...(Ce=(Be=f.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};var He,_e,Re;k.parameters={...k.parameters,docs:{...(He=k.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
    pressed: true
  }
}`,...(Re=(_e=k.parameters)==null?void 0:_e.docs)==null?void 0:Re.source}}};var Je,Ee,Le;v.parameters={...v.parameters,docs:{...(Je=v.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
    busy: true
  }
}`,...(Le=(Ee=v.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var Me,Ne,Oe;$.parameters={...$.parameters,docs:{...(Me=$.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(Oe=(Ne=$.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};var Ue,Ie,qe;S.parameters={...S.parameters,docs:{...(Ue=S.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(qe=(Ie=S.parameters)==null?void 0:Ie.docs)==null?void 0:qe.source}}};var Ke,Qe,Xe;D.parameters={...D.parameters,docs:{...(Ke=D.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(Xe=(Qe=D.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ye,Ze,en;w.parameters={...w.parameters,docs:{...(Ye=w.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(en=(Ze=w.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,rn,sn;A.parameters={...A.parameters,docs:{...(nn=A.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(sn=(rn=A.parameters)==null?void 0:rn.docs)==null?void 0:sn.source}}};var tn,on,an;n.parameters={...n.parameters,docs:{...(tn=n.parameters)==null?void 0:tn.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button',
    disabled: true
  }
}`,...(an=(on=n.parameters)==null?void 0:on.docs)==null?void 0:an.source}}};var cn,ln,pn;j.parameters={...j.parameters,docs:{...(cn=j.parameters)==null?void 0:cn.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button',
    pressed: true
  }
}`,...(pn=(ln=j.parameters)==null?void 0:ln.docs)==null?void 0:pn.source}}};var un,dn,yn;z.parameters={...z.parameters,docs:{...(un=z.parameters)==null?void 0:un.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button',
    busy: true
  }
}`,...(yn=(dn=z.parameters)==null?void 0:dn.docs)==null?void 0:yn.source}}};var mn,gn,bn;P.parameters={...P.parameters,docs:{...(mn=P.parameters)==null?void 0:mn.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(bn=(gn=P.parameters)==null?void 0:gn.docs)==null?void 0:bn.source}}};var hn,xn,fn;T.parameters={...T.parameters,docs:{...(hn=T.parameters)==null?void 0:hn.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(fn=(xn=T.parameters)==null?void 0:xn.docs)==null?void 0:fn.source}}};var kn,vn,$n;G.parameters={...G.parameters,docs:{...(kn=G.parameters)==null?void 0:kn.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...($n=(vn=G.parameters)==null?void 0:vn.docs)==null?void 0:$n.source}}};var Sn,Dn,wn;F.parameters={...F.parameters,docs:{...(Sn=F.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(wn=(Dn=F.parameters)==null?void 0:Dn.docs)==null?void 0:wn.source}}};var An,jn,zn;V.parameters={...V.parameters,docs:{...(An=V.parameters)==null?void 0:An.docs,source:{originalSource:"designTokenStory(meta)",...(zn=(jn=V.parameters)==null?void 0:jn.docs)==null?void 0:zn.source}}};const Mn=["Default","DefaultDisabled","DefaultToggle","DefaultTogglePressed","DefaultBusy","DefaultHover","DefaultFocus","DefaultActive","DefaultFocusVisible","PrimaryActionDefault","PrimaryActionDisabled","PrimaryActionPressed","PrimaryActionBusy","PrimaryActionHover","PrimaryActionFocus","PrimaryActionActive","PrimaryActionFocusVisible","SecondaryActionDefault","SecondaryActionDisabled","SecondaryActionPressed","SecondaryActionBusy","SecondaryActionHover","SecondaryActionFocus","SecondaryActionActive","SecondaryActionFocusVisible","SubtleDefault","SubtleDisabled","SubtlePressed","SubtleBusy","SubtleHover","SubtleFocus","SubtleActive","SubtleFocusVisible","DesignTokens"];export{e as Default,c as DefaultActive,o as DefaultBusy,r as DefaultDisabled,i as DefaultFocus,l as DefaultFocusVisible,a as DefaultHover,s as DefaultToggle,t as DefaultTogglePressed,V as DesignTokens,b as PrimaryActionActive,y as PrimaryActionBusy,p as PrimaryActionDefault,u as PrimaryActionDisabled,g as PrimaryActionFocus,h as PrimaryActionFocusVisible,m as PrimaryActionHover,d as PrimaryActionPressed,D as SecondaryActionActive,v as SecondaryActionBusy,x as SecondaryActionDefault,f as SecondaryActionDisabled,S as SecondaryActionFocus,w as SecondaryActionFocusVisible,$ as SecondaryActionHover,k as SecondaryActionPressed,G as SubtleActive,z as SubtleBusy,A as SubtleDefault,n as SubtleDisabled,T as SubtleFocus,F as SubtleFocusVisible,P as SubtleHover,j as SubtlePressed,Mn as __namedExportsOrder,Bn as default};
//# sourceMappingURL=Button.stories-84467dfe.js.map
