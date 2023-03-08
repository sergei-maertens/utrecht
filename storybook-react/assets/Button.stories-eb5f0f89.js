import{j as pn}from"./jsx-runtime-670450c2.js";import{c as dn}from"./index-8b643457.js";import{t as mn,d as gn}from"./util-cccc7565.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const yn=`<!-- @license CC0-1.0 -->

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
`,bn={button:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"letter-spacing":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-start":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-end":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | uppercase",inherits:!0}}},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},icon:{gap:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},scale:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},scale:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},"primary-action":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},transform:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},"secondary-action":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},subtle:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}}},hn={utrecht:bn},xn={title:"React Component/Button",id:"react-button",component:dn,tags:["autodocs"],parameters:{tokensPrefix:"utrecht-button",tokens:mn,tokensDefinition:hn,docs:{description:{component:yn}}},argTypes:{appearance:{type:"select",options:[void 0,"primary-action-button","secondary-action-button","subtle-button"]},type:{type:"select",options:[void 0,"button","submit","reset"]}}},e=un=>pn(dn,{...un}),h=e.bind({});h.args={children:"Read more..."};const x=e.bind({});x.args={children:"Read more...",disabled:!0};const k=e.bind({});k.args={children:"Read more...",busy:!0};const n=e.bind({});n.args={children:"Read more..."};n.parameters={pseudo:{hover:!0}};const s=e.bind({});s.args={children:"Read more..."};s.parameters={pseudo:{focus:!0}};const r=e.bind({});r.args={children:"Read more..."};r.parameters={pseudo:{active:!0}};const t=e.bind({});t.args={children:"Read more..."};t.parameters={pseudo:{focusVisible:!0}};const f=e.bind({});f.args={children:"Read more...",appearance:"primary-action-button"};const v=e.bind({});v.args={children:"Read more...",appearance:"primary-action-button",disabled:!0};const $=e.bind({});$.args={children:"Read more...",appearance:"primary-action-button",busy:!0};const o=e.bind({});o.args={children:"Read more...",appearance:"primary-action-button"};o.parameters={pseudo:{hover:!0}};const a=e.bind({});a.args={children:"Read more...",appearance:"primary-action-button"};a.parameters={pseudo:{focus:!0}};const i=e.bind({});i.args={children:"Read more...",appearance:"primary-action-button"};i.parameters={pseudo:{active:!0}};const c=e.bind({});c.args={children:"Read more...",appearance:"primary-action-button"};c.parameters={pseudo:{focusVisible:!0}};const S=e.bind({});S.args={children:"Read more...",appearance:"secondary-action-button"};const w=e.bind({});w.args={children:"Read more...",appearance:"secondary-action-button",disabled:!0};const A=e.bind({});A.args={children:"Read more...",appearance:"secondary-action-button",busy:!0};const l=e.bind({});l.args={children:"Read more...",appearance:"secondary-action-button"};l.parameters={pseudo:{hover:!0}};const d=e.bind({});d.args={children:"Read more...",appearance:"secondary-action-button"};d.parameters={pseudo:{focus:!0}};const u=e.bind({});u.args={children:"Read more...",appearance:"secondary-action-button"};u.parameters={pseudo:{active:!0}};const p=e.bind({});p.args={children:"Read more...",appearance:"secondary-action-button"};p.parameters={pseudo:{focusVisible:!0}};const j=e.bind({});j.args={children:"Read more...",appearance:"subtle-button"};const B=e.bind({});B.args={children:"Read more...",appearance:"subtle-button",disabled:!0};const D=e.bind({});D.args={children:"Read more...",appearance:"subtle-button",busy:!0};const m=e.bind({});m.args={children:"Read more...",appearance:"subtle-button"};m.parameters={pseudo:{hover:!0}};const g=e.bind({});g.args={children:"Read more...",appearance:"subtle-button"};g.parameters={pseudo:{focus:!0}};const y=e.bind({});y.args={children:"Read more...",appearance:"subtle-button"};y.parameters={pseudo:{active:!0}};const b=e.bind({});b.args={children:"Read more...",appearance:"subtle-button"};b.parameters={pseudo:{focusVisible:!0}};const R=gn(xn);var z,G,P;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:"args => <Button {...args} />",...(P=(G=h.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var F,T,V;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:"args => <Button {...args} />",...(V=(T=x.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var _,C,H;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:"args => <Button {...args} />",...(H=(C=k.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var W,J,E;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:"args => <Button {...args} />",...(E=(J=n.parameters)==null?void 0:J.docs)==null?void 0:E.source}}};var L,M,N;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:"args => <Button {...args} />",...(N=(M=s.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var O,I,U;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:"args => <Button {...args} />",...(U=(I=r.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var q,K,Q;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:"args => <Button {...args} />",...(Q=(K=t.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:"args => <Button {...args} />",...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,se;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:"args => <Button {...args} />",...(se=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,te,oe;$.parameters={...$.parameters,docs:{...(re=$.parameters)==null?void 0:re.docs,source:{originalSource:"args => <Button {...args} />",...(oe=(te=$.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ae,ie,ce;o.parameters={...o.parameters,docs:{...(ae=o.parameters)==null?void 0:ae.docs,source:{originalSource:"args => <Button {...args} />",...(ce=(ie=o.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,de,ue;a.parameters={...a.parameters,docs:{...(le=a.parameters)==null?void 0:le.docs,source:{originalSource:"args => <Button {...args} />",...(ue=(de=a.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,me,ge;i.parameters={...i.parameters,docs:{...(pe=i.parameters)==null?void 0:pe.docs,source:{originalSource:"args => <Button {...args} />",...(ge=(me=i.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ye,be,he;c.parameters={...c.parameters,docs:{...(ye=c.parameters)==null?void 0:ye.docs,source:{originalSource:"args => <Button {...args} />",...(he=(be=c.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var xe,ke,fe;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:"args => <Button {...args} />",...(fe=(ke=S.parameters)==null?void 0:ke.docs)==null?void 0:fe.source}}};var ve,$e,Se;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:"args => <Button {...args} />",...(Se=($e=w.parameters)==null?void 0:$e.docs)==null?void 0:Se.source}}};var we,Ae,je;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:"args => <Button {...args} />",...(je=(Ae=A.parameters)==null?void 0:Ae.docs)==null?void 0:je.source}}};var Be,De,Re;l.parameters={...l.parameters,docs:{...(Be=l.parameters)==null?void 0:Be.docs,source:{originalSource:"args => <Button {...args} />",...(Re=(De=l.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var ze,Ge,Pe;d.parameters={...d.parameters,docs:{...(ze=d.parameters)==null?void 0:ze.docs,source:{originalSource:"args => <Button {...args} />",...(Pe=(Ge=d.parameters)==null?void 0:Ge.docs)==null?void 0:Pe.source}}};var Fe,Te,Ve;u.parameters={...u.parameters,docs:{...(Fe=u.parameters)==null?void 0:Fe.docs,source:{originalSource:"args => <Button {...args} />",...(Ve=(Te=u.parameters)==null?void 0:Te.docs)==null?void 0:Ve.source}}};var _e,Ce,He;p.parameters={...p.parameters,docs:{...(_e=p.parameters)==null?void 0:_e.docs,source:{originalSource:"args => <Button {...args} />",...(He=(Ce=p.parameters)==null?void 0:Ce.docs)==null?void 0:He.source}}};var We,Je,Ee;j.parameters={...j.parameters,docs:{...(We=j.parameters)==null?void 0:We.docs,source:{originalSource:"args => <Button {...args} />",...(Ee=(Je=j.parameters)==null?void 0:Je.docs)==null?void 0:Ee.source}}};var Le,Me,Ne;B.parameters={...B.parameters,docs:{...(Le=B.parameters)==null?void 0:Le.docs,source:{originalSource:"args => <Button {...args} />",...(Ne=(Me=B.parameters)==null?void 0:Me.docs)==null?void 0:Ne.source}}};var Oe,Ie,Ue;D.parameters={...D.parameters,docs:{...(Oe=D.parameters)==null?void 0:Oe.docs,source:{originalSource:"args => <Button {...args} />",...(Ue=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:Ue.source}}};var qe,Ke,Qe;m.parameters={...m.parameters,docs:{...(qe=m.parameters)==null?void 0:qe.docs,source:{originalSource:"args => <Button {...args} />",...(Qe=(Ke=m.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Xe,Ye,Ze;g.parameters={...g.parameters,docs:{...(Xe=g.parameters)==null?void 0:Xe.docs,source:{originalSource:"args => <Button {...args} />",...(Ze=(Ye=g.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var en,nn,sn;y.parameters={...y.parameters,docs:{...(en=y.parameters)==null?void 0:en.docs,source:{originalSource:"args => <Button {...args} />",...(sn=(nn=y.parameters)==null?void 0:nn.docs)==null?void 0:sn.source}}};var rn,tn,on;b.parameters={...b.parameters,docs:{...(rn=b.parameters)==null?void 0:rn.docs,source:{originalSource:"args => <Button {...args} />",...(on=(tn=b.parameters)==null?void 0:tn.docs)==null?void 0:on.source}}};var an,cn,ln;R.parameters={...R.parameters,docs:{...(an=R.parameters)==null?void 0:an.docs,source:{originalSource:"designTokenStory(meta)",...(ln=(cn=R.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};const Bn=["Default","DefaultDisabled","DefaultBusy","DefaultHover","DefaultFocus","DefaultActive","DefaultFocusVisible","PrimaryActionDefault","PrimaryActionDisabled","PrimaryActionBusy","PrimaryActionHover","PrimaryActionFocus","PrimaryActionActive","PrimaryActionFocusVisible","SecondaryActionDefault","SecondaryActionDisabled","SecondaryActionBusy","SecondaryActionHover","SecondaryActionFocus","SecondaryActionActive","SecondaryActionFocusVisible","SubtleDefault","SubtleDisabled","SubtleBusy","SubtleHover","SubtleFocus","SubtleActive","SubtleFocusVisible","DesignTokens"];export{h as Default,r as DefaultActive,k as DefaultBusy,x as DefaultDisabled,s as DefaultFocus,t as DefaultFocusVisible,n as DefaultHover,R as DesignTokens,i as PrimaryActionActive,$ as PrimaryActionBusy,f as PrimaryActionDefault,v as PrimaryActionDisabled,a as PrimaryActionFocus,c as PrimaryActionFocusVisible,o as PrimaryActionHover,u as SecondaryActionActive,A as SecondaryActionBusy,S as SecondaryActionDefault,w as SecondaryActionDisabled,d as SecondaryActionFocus,p as SecondaryActionFocusVisible,l as SecondaryActionHover,y as SubtleActive,D as SubtleBusy,j as SubtleDefault,B as SubtleDisabled,g as SubtleFocus,b as SubtleFocusVisible,m as SubtleHover,Bn as __namedExportsOrder,xn as default};
//# sourceMappingURL=Button.stories-eb5f0f89.js.map
