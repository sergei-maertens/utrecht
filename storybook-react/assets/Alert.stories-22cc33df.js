import{j as i}from"./jsx-runtime-670450c2.js";import{A as p,H as b,P as k}from"./index-8b643457.js";import{t as v,d as y}from"./util-f18e0025.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const w=`<!-- @license CC0-1.0 -->

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
`,f={alert:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},"border-width":{css:{syntax:"<length>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}},"padding-block-start":{css:{syntax:"<length>",inherits:!0}},"padding-block-end":{css:{syntax:"<length>",inherits:!0}},"padding-inline-start":{css:{syntax:"<length>",inherits:!0}},"padding-inline-end":{css:{syntax:"<length>",inherits:!0}},"margin-block-start":{css:{syntax:"<length>",inherits:!0}},"margin-block-end":{css:{syntax:"<length>",inherits:!0}},warning:{"background-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},"border-width":{css:{syntax:"<length>",inherits:!0}}},error:{"background-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},"border-width":{css:{syntax:"<length>",inherits:!0}}},ok:{"background-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},"border-width":{css:{syntax:"<length>",inherits:!0}}},icon:{color:{css:{syntax:"<color>",inherits:!0}},error:{color:{css:{syntax:"<color>",inherits:!0}}},warning:{color:{css:{syntax:"<color>",inherits:!0}}},ok:{color:{css:{syntax:"<color>",inherits:!0}}}}}},x={utrecht:f},j={title:"React Component/Alert",id:"react-alert",component:p,tags:["autodocs"],parameters:{tokensPrefix:"utrecht-alert",tokens:v,tokensDefinition:x,docs:{description:{component:w}}}},r=h=>i(p,{...h}),e=r.bind({});e.args={children:[i(b,{children:"Lorem ipsum"}),i(k,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]};const n=r.bind({});n.args={...e.args,type:"info"};const t=r.bind({});t.args={...e.args,type:"ok"};const o=r.bind({});o.args={...e.args,type:"warning"};const a=r.bind({});a.args={...e.args,type:"error"};const s=y(j);var l;e.parameters={...e.parameters,storySource:{source:"args => <Alert {...args} />",...(l=e.parameters)==null?void 0:l.storySource}};var d;n.parameters={...n.parameters,storySource:{source:"args => <Alert {...args} />",...(d=n.parameters)==null?void 0:d.storySource}};var c;t.parameters={...t.parameters,storySource:{source:"args => <Alert {...args} />",...(c=t.parameters)==null?void 0:c.storySource}};var u;o.parameters={...o.parameters,storySource:{source:"args => <Alert {...args} />",...(u=o.parameters)==null?void 0:u.storySource}};var g;a.parameters={...a.parameters,storySource:{source:"args => <Alert {...args} />",...(g=a.parameters)==null?void 0:g.storySource}};var m;s.parameters={...s.parameters,storySource:{source:"designTokenStory(meta)",...(m=s.parameters)==null?void 0:m.storySource}};const D=["Default","Info","OK","Warning","Error","DesignTokens"];export{e as Default,s as DesignTokens,a as Error,n as Info,t as OK,o as Warning,D as __namedExportsOrder,j as default};
//# sourceMappingURL=Alert.stories-22cc33df.js.map
