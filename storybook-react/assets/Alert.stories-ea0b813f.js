import{j as n,a as z,F as _}from"./jsx-runtime-91a467a5.js";import{D as A,P as D,A as C,a as S,S as G}from"./index-1e42f037.js";import{a as T,H as W,P as R}from"./index-cf95bd25.js";import{t as L,d as P}from"./util-0a769aac.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-869120b3.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-8ce4a492.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-5b183829.js";import"./index-9d29e343.js";import"./index-356e4a49.js";import"./clsx.m-59171c9b.js";import"./index-1fc0ca9a.js";const q=`<!-- @license CC0-1.0 -->

# Alert

De _alert component_ is er voor berichten die de gebruiker snel moet weten, omdat ze belangrijk zijn voor het uitvoeren van de huidige taak. De alert is alleen voor eenvoudige berichten. Gebruik in de alert geen buttons, geen formulier-componenten en geen complexe opmaak zoals tabellen.

Let op: de alert component gebruiken kan essentieël zijn voor gebruikers van een schermvoorlezer, maar onjuist gebruik kan heel erg vervelend zijn.

Gebruik niet een alert voor een algemene aankondiging die op meerdere pagina's staat, als het niet per se relevant is voor de huidige taak van de bezoeker. De alert wordt door schermvoorlezers als eerste voorgelezen op elke pagina waar de alert staat, het kan lastig zijn de website te gebruiken als de schermlezer elke keer wordt geblokkeerd met steeds dezelfde melding. Gebruik in die situaties de notification banner component.

## Componenten die lijken op alert

- de _alert_: wordt zo snel mogelijk aangekondigd.
- de _notification banner_: wordt ook snel aangekondigd, omdat het één van eerste onderdelen van de pagina is als je de banner plaatst aan het begin van de page header. Je kunt de banner overslaan een _skip link_.
- de _error appearance_ van de _form field description_: voor feedback in een formulier die hoort bij een form control. Wordt aangekondigd door schermlezers wanneer de form control focus heeft.

## Tekst

Schrijf een bericht voor de alert die ook duidelijk is als de gebruiker geen icoon of signaalkleur ziet.

Let op: als de tekst met een script aangepast wordt dan wordt de alert in zijn geheel nogmaals voorgelezen door een schermvoorlezer. Een tekst met een veranderend onderdeel zoals "Over 14 minuten en 59 seconden verloopt je sessie.", heeft als effect dat de schermlezer alleen nog de alert voorleest en de pagina verder onbruikbaar is.

## HTML

Het belangrijkste onderdeel van de alert is het bericht, plaats die in een \`<div role="alert">\`.

Gebruik bij voorkeur een _paragraph component_ voor de inhoud van het bericht, voor een goede \`font-size\` en \`line-height\` en zodat de alert \`margin\` heeft wanneer de CSS niet geladen kan worden.

Als je wel een button gebruikt (bijvoorbeeld om de alert te verbergen), plaats die dan nooit binnen het element met \`role="alert"\`, maar daarbuiten.

\`\`\`html
<div class="utrecht-alert">
  <div class="utrecht-alert__icon">
    <!-- optioneel: een icon -->
  </div>
  <div class="utrecht-alert__message" role="alert">
    <!-- het bericht, bijvoorbeeld: -->
    <p class="utrecht-paragraph">Let op: er is nu een storing waardoor...</p>
  </div>
  <!-- optioneel en nog niet ondersteund: een button, buiten het bericht -->
</div>
\`\`\`

## Relevante WCAG eisen

- [WCAG eis 1.1.1](https://www.w3.org/TR/WCAG21/#non-text-content): als de alert een icoon gebruikt met een bepaalde betekenis, moet de betekenis ook uit de tekst blijken.
- [WCAG eis 1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color): als de alert een signaalkleur gebruikt moet de tekst datzelfde ook duidelijk maken, bijvoorbeeld met signaalwoorden. Gebruik bijvoorbeeld "Let op:" voor een waarschuwing.
- [WCAG eis 2.2.1](https://www.w3.org/TR/WCAG21/#timing-adjustable): laat de alert niet automatisch verdwijnen na een bepaalde tijd (lees de WCAG specificatie voor enkele uitzonderingen).
`,E={alert:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},warning:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},error:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},ok:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},icon:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},error:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},warning:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},ok:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}}},O={utrecht:E},H={title:"React Component/Alert",id:"react-alert",component:T,args:{children:[n(W,{children:"Lorem ipsum"}),n(R,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]},parameters:{tokensPrefix:"utrecht-alert",tokens:L,tokensDefinition:O,docs:{page:()=>z(_,{children:[n(A,{children:q}),n(D,{}),n(C,{story:S}),n(G,{})]})}}},e={},r={args:{...e.args,type:"info"}},t={args:{...e.args,type:"ok"}},s={args:{...e.args,type:"warning"}},o={args:{...e.args,type:"error"}},i=P(H);var a,l,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'info'
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,u,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'ok'
  }
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,b,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'warning'
  }
}`,...(k=(b=s.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var x,v,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'error'
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var w,j,$;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"designTokenStory(meta)",...($=(j=i.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};const se=["Default","Info","OK","Warning","Error","DesignTokens"];export{e as Default,i as DesignTokens,o as Error,r as Info,t as OK,s as Warning,se as __namedExportsOrder,H as default};
//# sourceMappingURL=Alert.stories-ea0b813f.js.map
