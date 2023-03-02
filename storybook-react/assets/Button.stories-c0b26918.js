import{j as ie}from"./jsx-runtime-670450c2.js";import{c as oe}from"./index-8b643457.js";import{t as le,d as ce}from"./util-f8579a47.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const ue=`<!-- @license CC0-1.0 -->

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
`,pe={button:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"letter-spacing":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | uppercase",inherits:!0}}},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},icon:{gap:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},scale:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},scale:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},"primary-action":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},transform:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},"secondary-action":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},subtle:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}}},de={utrecht:pe},ye={title:"React Component/Button",id:"react-button",component:oe,tags:["autodocs"],parameters:{tokensPrefix:"utrecht-button",tokens:le,tokensDefinition:de,docs:{description:{component:ue}}},argTypes:{appearance:{type:"select",options:[void 0,"primary-action-button","secondary-action-button","subtle-button"]},type:{type:"select",options:[void 0,"button","submit","reset"]}}},e=ae=>ie(oe,{...ae}),h=e.bind({});h.args={children:"Read more..."};const x=e.bind({});x.args={children:"Read more...",disabled:!0};const k=e.bind({});k.args={children:"Read more...",busy:!0};const n=e.bind({});n.args={children:"Read more..."};n.parameters={pseudo:{hover:!0}};const t=e.bind({});t.args={children:"Read more..."};t.parameters={pseudo:{focus:!0}};const r=e.bind({});r.args={children:"Read more..."};r.parameters={pseudo:{active:!0}};const s=e.bind({});s.args={children:"Read more..."};s.parameters={pseudo:{focusVisible:!0}};const S=e.bind({});S.args={children:"Read more...",appearance:"primary-action-button"};const f=e.bind({});f.args={children:"Read more...",appearance:"primary-action-button",disabled:!0};const v=e.bind({});v.args={children:"Read more...",appearance:"primary-action-button",busy:!0};const o=e.bind({});o.args={children:"Read more...",appearance:"primary-action-button"};o.parameters={pseudo:{hover:!0}};const a=e.bind({});a.args={children:"Read more...",appearance:"primary-action-button"};a.parameters={pseudo:{focus:!0}};const i=e.bind({});i.args={children:"Read more...",appearance:"primary-action-button"};i.parameters={pseudo:{active:!0}};const l=e.bind({});l.args={children:"Read more...",appearance:"primary-action-button"};l.parameters={pseudo:{focusVisible:!0}};const $=e.bind({});$.args={children:"Read more...",appearance:"secondary-action-button"};const w=e.bind({});w.args={children:"Read more...",appearance:"secondary-action-button",disabled:!0};const A=e.bind({});A.args={children:"Read more...",appearance:"secondary-action-button",busy:!0};const c=e.bind({});c.args={children:"Read more...",appearance:"secondary-action-button"};c.parameters={pseudo:{hover:!0}};const u=e.bind({});u.args={children:"Read more...",appearance:"secondary-action-button"};u.parameters={pseudo:{focus:!0}};const p=e.bind({});p.args={children:"Read more...",appearance:"secondary-action-button"};p.parameters={pseudo:{active:!0}};const d=e.bind({});d.args={children:"Read more...",appearance:"secondary-action-button"};d.parameters={pseudo:{focusVisible:!0}};const j=e.bind({});j.args={children:"Read more...",appearance:"subtle-button"};const B=e.bind({});B.args={children:"Read more...",appearance:"subtle-button",disabled:!0};const D=e.bind({});D.args={children:"Read more...",appearance:"subtle-button",busy:!0};const y=e.bind({});y.args={children:"Read more...",appearance:"subtle-button"};y.parameters={pseudo:{hover:!0}};const m=e.bind({});m.args={children:"Read more...",appearance:"subtle-button"};m.parameters={pseudo:{focus:!0}};const g=e.bind({});g.args={children:"Read more...",appearance:"subtle-button"};g.parameters={pseudo:{active:!0}};const b=e.bind({});b.args={children:"Read more...",appearance:"subtle-button"};b.parameters={pseudo:{focusVisible:!0}};const R=ce(ye);var z;h.parameters={...h.parameters,storySource:{source:"args => <Button {...args} />",...(z=h.parameters)==null?void 0:z.storySource}};var G;x.parameters={...x.parameters,storySource:{source:"args => <Button {...args} />",...(G=x.parameters)==null?void 0:G.storySource}};var P;k.parameters={...k.parameters,storySource:{source:"args => <Button {...args} />",...(P=k.parameters)==null?void 0:P.storySource}};var F;n.parameters={...n.parameters,storySource:{source:"args => <Button {...args} />",...(F=n.parameters)==null?void 0:F.storySource}};var T;t.parameters={...t.parameters,storySource:{source:"args => <Button {...args} />",...(T=t.parameters)==null?void 0:T.storySource}};var V;r.parameters={...r.parameters,storySource:{source:"args => <Button {...args} />",...(V=r.parameters)==null?void 0:V.storySource}};var _;s.parameters={...s.parameters,storySource:{source:"args => <Button {...args} />",...(_=s.parameters)==null?void 0:_.storySource}};var C;S.parameters={...S.parameters,storySource:{source:"args => <Button {...args} />",...(C=S.parameters)==null?void 0:C.storySource}};var H;f.parameters={...f.parameters,storySource:{source:"args => <Button {...args} />",...(H=f.parameters)==null?void 0:H.storySource}};var W;v.parameters={...v.parameters,storySource:{source:"args => <Button {...args} />",...(W=v.parameters)==null?void 0:W.storySource}};var J;o.parameters={...o.parameters,storySource:{source:"args => <Button {...args} />",...(J=o.parameters)==null?void 0:J.storySource}};var E;a.parameters={...a.parameters,storySource:{source:"args => <Button {...args} />",...(E=a.parameters)==null?void 0:E.storySource}};var L;i.parameters={...i.parameters,storySource:{source:"args => <Button {...args} />",...(L=i.parameters)==null?void 0:L.storySource}};var M;l.parameters={...l.parameters,storySource:{source:"args => <Button {...args} />",...(M=l.parameters)==null?void 0:M.storySource}};var N;$.parameters={...$.parameters,storySource:{source:"args => <Button {...args} />",...(N=$.parameters)==null?void 0:N.storySource}};var O;w.parameters={...w.parameters,storySource:{source:"args => <Button {...args} />",...(O=w.parameters)==null?void 0:O.storySource}};var I;A.parameters={...A.parameters,storySource:{source:"args => <Button {...args} />",...(I=A.parameters)==null?void 0:I.storySource}};var U;c.parameters={...c.parameters,storySource:{source:"args => <Button {...args} />",...(U=c.parameters)==null?void 0:U.storySource}};var q;u.parameters={...u.parameters,storySource:{source:"args => <Button {...args} />",...(q=u.parameters)==null?void 0:q.storySource}};var K;p.parameters={...p.parameters,storySource:{source:"args => <Button {...args} />",...(K=p.parameters)==null?void 0:K.storySource}};var Q;d.parameters={...d.parameters,storySource:{source:"args => <Button {...args} />",...(Q=d.parameters)==null?void 0:Q.storySource}};var X;j.parameters={...j.parameters,storySource:{source:"args => <Button {...args} />",...(X=j.parameters)==null?void 0:X.storySource}};var Y;B.parameters={...B.parameters,storySource:{source:"args => <Button {...args} />",...(Y=B.parameters)==null?void 0:Y.storySource}};var Z;D.parameters={...D.parameters,storySource:{source:"args => <Button {...args} />",...(Z=D.parameters)==null?void 0:Z.storySource}};var ee;y.parameters={...y.parameters,storySource:{source:"args => <Button {...args} />",...(ee=y.parameters)==null?void 0:ee.storySource}};var ne;m.parameters={...m.parameters,storySource:{source:"args => <Button {...args} />",...(ne=m.parameters)==null?void 0:ne.storySource}};var te;g.parameters={...g.parameters,storySource:{source:"args => <Button {...args} />",...(te=g.parameters)==null?void 0:te.storySource}};var re;b.parameters={...b.parameters,storySource:{source:"args => <Button {...args} />",...(re=b.parameters)==null?void 0:re.storySource}};var se;R.parameters={...R.parameters,storySource:{source:"designTokenStory(meta)",...(se=R.parameters)==null?void 0:se.storySource}};const ve=["Default","DefaultDisabled","DefaultBusy","DefaultHover","DefaultFocus","DefaultActive","DefaultFocusVisible","PrimaryActionDefault","PrimaryActionDisabled","PrimaryActionBusy","PrimaryActionHover","PrimaryActionFocus","PrimaryActionActive","PrimaryActionFocusVisible","SecondaryActionDefault","SecondaryActionDisabled","SecondaryActionBusy","SecondaryActionHover","SecondaryActionFocus","SecondaryActionActive","SecondaryActionFocusVisible","SubtleDefault","SubtleDisabled","SubtleBusy","SubtleHover","SubtleFocus","SubtleActive","SubtleFocusVisible","DesignTokens"];export{h as Default,r as DefaultActive,k as DefaultBusy,x as DefaultDisabled,t as DefaultFocus,s as DefaultFocusVisible,n as DefaultHover,R as DesignTokens,i as PrimaryActionActive,v as PrimaryActionBusy,S as PrimaryActionDefault,f as PrimaryActionDisabled,a as PrimaryActionFocus,l as PrimaryActionFocusVisible,o as PrimaryActionHover,p as SecondaryActionActive,A as SecondaryActionBusy,$ as SecondaryActionDefault,w as SecondaryActionDisabled,u as SecondaryActionFocus,d as SecondaryActionFocusVisible,c as SecondaryActionHover,g as SubtleActive,D as SubtleBusy,j as SubtleDefault,B as SubtleDisabled,m as SubtleFocus,b as SubtleFocusVisible,y as SubtleHover,ve as __namedExportsOrder,ye as default};
//# sourceMappingURL=Button.stories-c0b26918.js.map
