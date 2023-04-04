import{j as un}from"./jsx-runtime-670450c2.js";import{d as pn}from"./index-0f62e8f6.js";import{t as yn,d as mn}from"./util-d8e365e4.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-b4f9149a.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const gn=`<!-- @license CC0-1.0 -->

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
`,bn={button:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderRadius"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}},type:"fontFamilies"},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"fontSizes"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},"inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"letter-spacing":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"lineHeights"},"margin-block-start":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-start":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-end":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"},"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | uppercase",inherits:!0}}},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},icon:{gap:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},scale:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},scale:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}}},"primary-action":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},transform:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}}},"secondary-action":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}}},subtle:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}}}}},hn={utrecht:bn},xn={title:"React Component/Button",id:"react-button",component:pn,tags:["autodocs"],parameters:{tokensPrefix:"utrecht-button",tokens:yn,tokensDefinition:hn,docs:{description:{component:gn}}},argTypes:{appearance:{type:"select",options:[void 0,"primary-action-button","secondary-action-button","subtle-button"]},type:{type:"select",options:[void 0,"button","submit","reset"]}}},e=dn=>un(pn,{...dn}),h=e.bind({});h.args={children:"Read more..."};const x=e.bind({});x.args={children:"Read more...",disabled:!0};const k=e.bind({});k.args={children:"Read more...",busy:!0};const n=e.bind({});n.args={children:"Read more..."};n.parameters={pseudo:{hover:!0}};const r=e.bind({});r.args={children:"Read more..."};r.parameters={pseudo:{focus:!0}};const t=e.bind({});t.args={children:"Read more..."};t.parameters={pseudo:{active:!0}};const s=e.bind({});s.args={children:"Read more..."};s.parameters={pseudo:{focusVisible:!0}};const f=e.bind({});f.args={children:"Read more...",appearance:"primary-action-button"};const v=e.bind({});v.args={children:"Read more...",appearance:"primary-action-button",disabled:!0};const $=e.bind({});$.args={children:"Read more...",appearance:"primary-action-button",busy:!0};const o=e.bind({});o.args={children:"Read more...",appearance:"primary-action-button"};o.parameters={pseudo:{hover:!0}};const a=e.bind({});a.args={children:"Read more...",appearance:"primary-action-button"};a.parameters={pseudo:{focus:!0}};const i=e.bind({});i.args={children:"Read more...",appearance:"primary-action-button"};i.parameters={pseudo:{active:!0}};const c=e.bind({});c.args={children:"Read more...",appearance:"primary-action-button"};c.parameters={pseudo:{focusVisible:!0}};const S=e.bind({});S.args={children:"Read more...",appearance:"secondary-action-button"};const w=e.bind({});w.args={children:"Read more...",appearance:"secondary-action-button",disabled:!0};const A=e.bind({});A.args={children:"Read more...",appearance:"secondary-action-button",busy:!0};const l=e.bind({});l.args={children:"Read more...",appearance:"secondary-action-button"};l.parameters={pseudo:{hover:!0}};const p=e.bind({});p.args={children:"Read more...",appearance:"secondary-action-button"};p.parameters={pseudo:{focus:!0}};const d=e.bind({});d.args={children:"Read more...",appearance:"secondary-action-button"};d.parameters={pseudo:{active:!0}};const u=e.bind({});u.args={children:"Read more...",appearance:"secondary-action-button"};u.parameters={pseudo:{focusVisible:!0}};const j=e.bind({});j.args={children:"Read more...",appearance:"subtle-button"};const B=e.bind({});B.args={children:"Read more...",appearance:"subtle-button",disabled:!0};const z=e.bind({});z.args={children:"Read more...",appearance:"subtle-button",busy:!0};const y=e.bind({});y.args={children:"Read more...",appearance:"subtle-button"};y.parameters={pseudo:{hover:!0}};const m=e.bind({});m.args={children:"Read more...",appearance:"subtle-button"};m.parameters={pseudo:{focus:!0}};const g=e.bind({});g.args={children:"Read more...",appearance:"subtle-button"};g.parameters={pseudo:{active:!0}};const b=e.bind({});b.args={children:"Read more...",appearance:"subtle-button"};b.parameters={pseudo:{focusVisible:!0}};const D=mn(xn);var R,G,F;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:"args => <Button {...args} />",...(F=(G=h.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var P,T,W;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:"args => <Button {...args} />",...(W=(T=x.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var V,H,_;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:"args => <Button {...args} />",...(_=(H=k.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var C,J,E;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:"args => <Button {...args} />",...(E=(J=n.parameters)==null?void 0:J.docs)==null?void 0:E.source}}};var L,M,N;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:"args => <Button {...args} />",...(N=(M=r.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var O,I,U;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:"args => <Button {...args} />",...(U=(I=t.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var q,K,Q;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:"args => <Button {...args} />",...(Q=(K=s.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:"args => <Button {...args} />",...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,re;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:"args => <Button {...args} />",...(re=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var te,se,oe;$.parameters={...$.parameters,docs:{...(te=$.parameters)==null?void 0:te.docs,source:{originalSource:"args => <Button {...args} />",...(oe=(se=$.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ae,ie,ce;o.parameters={...o.parameters,docs:{...(ae=o.parameters)==null?void 0:ae.docs,source:{originalSource:"args => <Button {...args} />",...(ce=(ie=o.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,pe,de;a.parameters={...a.parameters,docs:{...(le=a.parameters)==null?void 0:le.docs,source:{originalSource:"args => <Button {...args} />",...(de=(pe=a.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ue,ye,me;i.parameters={...i.parameters,docs:{...(ue=i.parameters)==null?void 0:ue.docs,source:{originalSource:"args => <Button {...args} />",...(me=(ye=i.parameters)==null?void 0:ye.docs)==null?void 0:me.source}}};var ge,be,he;c.parameters={...c.parameters,docs:{...(ge=c.parameters)==null?void 0:ge.docs,source:{originalSource:"args => <Button {...args} />",...(he=(be=c.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var xe,ke,fe;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:"args => <Button {...args} />",...(fe=(ke=S.parameters)==null?void 0:ke.docs)==null?void 0:fe.source}}};var ve,$e,Se;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:"args => <Button {...args} />",...(Se=($e=w.parameters)==null?void 0:$e.docs)==null?void 0:Se.source}}};var we,Ae,je;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:"args => <Button {...args} />",...(je=(Ae=A.parameters)==null?void 0:Ae.docs)==null?void 0:je.source}}};var Be,ze,De;l.parameters={...l.parameters,docs:{...(Be=l.parameters)==null?void 0:Be.docs,source:{originalSource:"args => <Button {...args} />",...(De=(ze=l.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};var Re,Ge,Fe;p.parameters={...p.parameters,docs:{...(Re=p.parameters)==null?void 0:Re.docs,source:{originalSource:"args => <Button {...args} />",...(Fe=(Ge=p.parameters)==null?void 0:Ge.docs)==null?void 0:Fe.source}}};var Pe,Te,We;d.parameters={...d.parameters,docs:{...(Pe=d.parameters)==null?void 0:Pe.docs,source:{originalSource:"args => <Button {...args} />",...(We=(Te=d.parameters)==null?void 0:Te.docs)==null?void 0:We.source}}};var Ve,He,_e;u.parameters={...u.parameters,docs:{...(Ve=u.parameters)==null?void 0:Ve.docs,source:{originalSource:"args => <Button {...args} />",...(_e=(He=u.parameters)==null?void 0:He.docs)==null?void 0:_e.source}}};var Ce,Je,Ee;j.parameters={...j.parameters,docs:{...(Ce=j.parameters)==null?void 0:Ce.docs,source:{originalSource:"args => <Button {...args} />",...(Ee=(Je=j.parameters)==null?void 0:Je.docs)==null?void 0:Ee.source}}};var Le,Me,Ne;B.parameters={...B.parameters,docs:{...(Le=B.parameters)==null?void 0:Le.docs,source:{originalSource:"args => <Button {...args} />",...(Ne=(Me=B.parameters)==null?void 0:Me.docs)==null?void 0:Ne.source}}};var Oe,Ie,Ue;z.parameters={...z.parameters,docs:{...(Oe=z.parameters)==null?void 0:Oe.docs,source:{originalSource:"args => <Button {...args} />",...(Ue=(Ie=z.parameters)==null?void 0:Ie.docs)==null?void 0:Ue.source}}};var qe,Ke,Qe;y.parameters={...y.parameters,docs:{...(qe=y.parameters)==null?void 0:qe.docs,source:{originalSource:"args => <Button {...args} />",...(Qe=(Ke=y.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Xe,Ye,Ze;m.parameters={...m.parameters,docs:{...(Xe=m.parameters)==null?void 0:Xe.docs,source:{originalSource:"args => <Button {...args} />",...(Ze=(Ye=m.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var en,nn,rn;g.parameters={...g.parameters,docs:{...(en=g.parameters)==null?void 0:en.docs,source:{originalSource:"args => <Button {...args} />",...(rn=(nn=g.parameters)==null?void 0:nn.docs)==null?void 0:rn.source}}};var tn,sn,on;b.parameters={...b.parameters,docs:{...(tn=b.parameters)==null?void 0:tn.docs,source:{originalSource:"args => <Button {...args} />",...(on=(sn=b.parameters)==null?void 0:sn.docs)==null?void 0:on.source}}};var an,cn,ln;D.parameters={...D.parameters,docs:{...(an=D.parameters)==null?void 0:an.docs,source:{originalSource:"designTokenStory(meta)",...(ln=(cn=D.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};const Bn=["Default","DefaultDisabled","DefaultBusy","DefaultHover","DefaultFocus","DefaultActive","DefaultFocusVisible","PrimaryActionDefault","PrimaryActionDisabled","PrimaryActionBusy","PrimaryActionHover","PrimaryActionFocus","PrimaryActionActive","PrimaryActionFocusVisible","SecondaryActionDefault","SecondaryActionDisabled","SecondaryActionBusy","SecondaryActionHover","SecondaryActionFocus","SecondaryActionActive","SecondaryActionFocusVisible","SubtleDefault","SubtleDisabled","SubtleBusy","SubtleHover","SubtleFocus","SubtleActive","SubtleFocusVisible","DesignTokens"];export{h as Default,t as DefaultActive,k as DefaultBusy,x as DefaultDisabled,r as DefaultFocus,s as DefaultFocusVisible,n as DefaultHover,D as DesignTokens,i as PrimaryActionActive,$ as PrimaryActionBusy,f as PrimaryActionDefault,v as PrimaryActionDisabled,a as PrimaryActionFocus,c as PrimaryActionFocusVisible,o as PrimaryActionHover,d as SecondaryActionActive,A as SecondaryActionBusy,S as SecondaryActionDefault,w as SecondaryActionDisabled,p as SecondaryActionFocus,u as SecondaryActionFocusVisible,l as SecondaryActionHover,g as SubtleActive,z as SubtleBusy,j as SubtleDefault,B as SubtleDisabled,m as SubtleFocus,b as SubtleFocusVisible,y as SubtleHover,Bn as __namedExportsOrder,xn as default};
//# sourceMappingURL=Button.stories-a30e1a24.js.map
