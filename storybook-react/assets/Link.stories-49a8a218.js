import{j as H}from"./jsx-runtime-670450c2.js";import{L as T}from"./index-4ba24e52.js";import{t as G,d as A}from"./util-10016f4d.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const D=`<!-- @license CC0-1.0 -->

# Link

## Gebruik van links in tekst

Links moeten duidelijk, gemakkelijk te begrijpen en voorspelbaar zijn. Gebruikers moeten een duidelijke verwachting hebben wat er gebeurt als er interactie is met een link d.m.v. een muis, vinger, spraak of ogen.

Gebruikers met ondersteunende technologie, zoals een schermlezer of braillebalk, horen/voelen vaak als eerste alle links in de content om hen te helpen snel te kunnen navigeren door de content. Er kan ook behoefte zijn om de de content vergroot te willen bekijken, zodat de gebruikers alleen de linktekst en een paar woorden eromheen tegelijkertijd kan zien.

Vermijd onduidelijke tekten in een link zoals 'hier' of 'lees meer' als link tekst hebben.

### Links in een zin

Links moeten nooit een hele zin in beslag nemen, maar alleen de tekst die beschrijft waar de gebruikers naar toe gaan als ze op de link klikken.

### Buttons versus links

Links worden vooral gebruikt om te navigeren en verschijnen dan ook in of direct na een zin.

Buttons worden gebruikt voor acties, zoals 'toevoegen', 'sluiten' of 'opslaan'.

### Do's

- Plaats links aan het einde van een zin als dat mogelijk is.
- Maak duidelijk waar de link je naar toe brengt.
- Gebruik het meest relevante woord van de link aan het begin van de link tekst. Bezoekers lezen niet verder dan de eerste twee woorden van een link.
- Zorg dat de link ook begrijpelijk is zonder dat je de zinnen er omheen gelezen hebt.

### Don'ts

- Gebruik geen buttons waar je een link kan gebruiken.
- Gebruik geen vage of te algemene termen voor de link tekst. Help de gebruiker met voorspellen waar hij naar toe gaat.
- Open interne links niet in een nieuwe tab. Hiermee schakel je één navigatiemanier uit om terug te gaan naar eerdere pagina's, de terug knop van de brower.

### Referenties

- [Waarom 'klik hier'niet werkt. Artikel van de Interaction Design Foundation.](https://www.interaction-design.org/literature/article/tips-for-better-hyperlink-ux)
- [Best practicesrondom links, Artikel op Prototypr.](https://blog.prototypr.io/a-guide-to-designing-perfect-links-in-ux-414558f35730)
- Interessante Do's en don'ts over Web Design, onder andere over links. [Artikel van UX Planet over links.](https://uxplanet.org/dos-and-don-ts-of-web-design-8c9d6a5de7c6)
- Hoe schrijf je goede links? [Uitgebreid artikel over links van de NN Group.](https://www.nngroup.com/articles/writing-links/)

## States

We beschrijven de volgende states van een link:

- **normal**: geen van de onderstaande states is van toepassing op de link. Deze state is gewoon de \`:link\` class in de code, maar we beschrijven hem hier om aan te geven dat de link 'normaal' is zonder een andere state. We gebruiken \`normal\` in plaats
- **active**: de link wordt actief gebruikt door de gebruiker. Bijvoorbeeld door er op te klikken.
- **hover**: de gebruiker pauzeert boven de link. Bijvoorbeeld door met de muiscursor er over te 'zweven'.
- **focus**: de link heeft de focus doordat er op geklikt of getapt is. Denk ook aan voice of eye-tracking.
- **focus-visible**: de link heeft de focus door de 'tab' knop van het keyboard.
- **visited**: de link is eerder gebruikt door de gebruiker.

### States Referenties

- [Website over: Hover, focus, active, door Wunder](https://wunder.io/wunderpedia/accessibility/accessible-uis/hover-focus-active/)
- [Richtlijnen over het visualiseren van links, door NN group](https://www.nngroup.com/articles/guidelines-for-visualizing-links/)

## Link in plaats van \`<a>\`

Voor de component naam hebben we voor "\`link\`" gekozen, en niet voor "\`a\`" zoals de [\`<a>\`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element) in HTML. Buiten de context van HTML-code (bijvoorbeeld in Figma) is \`a\`niet duidelijk genoeg, en we verwachten niet dat er grote verwarring ontstaat met het [\`<link>\`](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element) element van HTML.

## HTML

- Gebruik het \`<a>\` element om links aan te maken.
- Gebruik nooit een \`<button>\` of een ander element met een \`click\` event om zelf een link na te maken.
- Gebruik \`aria-current="page"\` wanneer de link verwijst naar de huidige pagina. Voor consistente navigatie ([WCAG eis 3.2.3](https://www.w3.org/TR/WCAG21/#consistent-navigation)) is het beter om links in de navigatie te laten staan dan om geen \`<a>\` te gebruiken voor de huidige pagina.
- Vermijd het gebruik van \`href="#"\`. Dit brengt de focus naar het begin van de pagina en dat is nooit wensbaar.
- Gebruik nooit \`tabindex="0"\` bij het \`<a>\` element. Links kunnen al standaard focus ontvangen.
- Vermijd onnodig gebruik van \`tabindex="-1"\`, er zijn weinig situaties waar het nodig is.

### \`tabindex="-1"\`

Gebruik \`tabindex="-1"\` in zeldzame gevallen dat het gebruiksvriendelijker is om een link weg te halen uit tabvolgorde. Toetsenbordgebruikers moeten toegang hebben tot dezelfde links als gebruikers van een muis.

Als het nodig is twee identieke links kort na elkaar te plaatsen, dan is het onnodig en onhandig dat dezelfde link twee keer na elkaar focus krijgt. In dat geval is het beter om één van de links uit de tabvolgorde te verwijderen.

Bijvoorbeeld:

\`\`\`html
<article>
  <h2 id="heading-puppy-geboren"><a href="/nieuws/monster-puppy">Puppy met zes poten</a></h2>
  <p>
    In de gemeente Monster is een puppy geboren met zes poten.
    <a href="/nieuws/monster-puppy" tabindex="-1" aria-labelledby="heading-puppy-geboren">Lees verder...</a>
  </p>
</article>
\`\`\`

## Privacy

Als de \`visited\` een ander visueel ontwerp heeft dan een normale link, dan kunnen anderen zien welke pagina's zijn bekeken. Gebruik daarom liever geen \`visited\` design tokens voor websites waar de privacy van de gebruiker in gevaar komt.

Als je een linkt maakt naar een externe website, dan kan die website zien op welke pagina de bezoeker op dat moment was. Dit is slecht voor de privacy, gebruik daarom altijd gebruik van de "externe link" code om deze informatie af te schermen.
`,M={link:{color:{css:{syntax:"<color>",inherits:!0}},"text-decoration":{css:{syntax:"none | underline",inherits:!0}},"text-decoration-color":{css:{syntax:"<color>",inherits:!0}},"text-decoration-thickness":{css:{syntax:"<length>",inherits:!0}},"text-underline-offset":{css:{syntax:"<length>",inherits:!0}},active:{color:{css:{syntax:"<color>",inherits:!0}}},focus:{color:{css:{syntax:"<color>",inherits:!0}},"text-decoration":{css:{syntax:"none | underline",inherits:!0}},"text-decoration-thickness":{css:{syntax:"<length>",inherits:!0}}},hover:{color:{css:{syntax:"<color>",inherits:!0}},"text-decoration":{css:{syntax:"none | underline",inherits:!0}},"text-decoration-thickness":{css:{syntax:"<length>",inherits:!0}}},placeholder:{color:{css:{syntax:"<color>",inherits:!0}}},visited:{color:{css:{syntax:"<color>",inherits:!0}}},icon:{size:{css:{syntax:"<length>",inherits:!0}}}}},E={utrecht:M},P={title:"React Component/Link",id:"react-link",component:T,tags:["autodocs"],parameters:{tokensPrefix:"utrecht-link",tokens:G,tokensDefinition:E,docs:{description:{component:D}}},argTypes:{external:{name:"external",type:{name:"boolean",required:!1},table:{category:"API",defaultValue:{summary:!1}}},href:{name:"href",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},"aria-current":{name:"aria-current",type:{name:"string",required:!1},options:[void 0,"page","step","location","date","time","true","false"],table:{category:"HTML attribute",defaultValue:{summary:"false"}}},hrefLang:{name:"hrefLang",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},lang:{name:"lang",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},placeholder:{name:"placeholder",type:{name:"boolean",required:!1},table:{category:"API",defaultValue:{summary:!1}}},rel:{name:"rel",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},target:{name:"target",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}}}},e=V=>H(T,{...V}),n=e.bind({});n.args={children:"Read more",href:"https://www.example.com"};const o=e.bind({});o.args={children:"Watch video on YouTube",href:"https://www.example.com",external:!0};const l=e.bind({});l.args={children:"Step 5: Review your submission",href:"https://www.example.com",placeholder:!0};const d=e.bind({});d.args={href:"mailto:info@example.com",children:"info@example.com"};const u=e.bind({});u.args={href:"tel:+31555385385",children:"+31 555 385 385"};const c=e.bind({});c.args={href:"https://example.com/en",title:"This page in English",hrefLang:"en",lang:"en",rel:"alternate",children:"EN"};const g=e.bind({});g.args={href:"https://example.com/en",title:"This page in English",hrefLang:"en",lang:"en",children:"EN","aria-current":"page"};const r=e.bind({});r.args={...n.args};r.parameters={pseudo:{hover:!0}};const t=e.bind({});t.args={...n.args};t.parameters={pseudo:{focus:!0}};const a=e.bind({});a.args={...n.args};a.parameters={pseudo:{focusVisible:!0}};const i=e.bind({});i.args={...n.args};i.parameters={pseudo:{active:!0}};const s=e.bind({});s.args={...n.args};s.parameters={pseudo:{visited:!0}};const m=A(P);var k;n.parameters={...n.parameters,storySource:{source:"args => <Link {...args} />",...(k=n.parameters)==null?void 0:k.storySource}};var p;o.parameters={...o.parameters,storySource:{source:"args => <Link {...args} />",...(p=o.parameters)==null?void 0:p.storySource}};var h;l.parameters={...l.parameters,storySource:{source:"args => <Link {...args} />",...(h=l.parameters)==null?void 0:h.storySource}};var b;d.parameters={...d.parameters,storySource:{source:"args => <Link {...args} />",...(b=d.parameters)==null?void 0:b.storySource}};var v;u.parameters={...u.parameters,storySource:{source:"args => <Link {...args} />",...(v=u.parameters)==null?void 0:v.storySource}};var f;c.parameters={...c.parameters,storySource:{source:"args => <Link {...args} />",...(f=c.parameters)==null?void 0:f.storySource}};var y;g.parameters={...g.parameters,storySource:{source:"args => <Link {...args} />",...(y=g.parameters)==null?void 0:y.storySource}};var w;r.parameters={...r.parameters,storySource:{source:"args => <Link {...args} />",...(w=r.parameters)==null?void 0:w.storySource}};var x;t.parameters={...t.parameters,storySource:{source:"args => <Link {...args} />",...(x=t.parameters)==null?void 0:x.storySource}};var j;a.parameters={...a.parameters,storySource:{source:"args => <Link {...args} />",...(j=a.parameters)==null?void 0:j.storySource}};var L;i.parameters={...i.parameters,storySource:{source:"args => <Link {...args} />",...(L=i.parameters)==null?void 0:L.storySource}};var z;s.parameters={...s.parameters,storySource:{source:"args => <Link {...args} />",...(z=s.parameters)==null?void 0:z.storySource}};var S;m.parameters={...m.parameters,storySource:{source:"designTokenStory(meta)",...(S=m.parameters)==null?void 0:S.storySource}};const O=["Default","External","Placeholder","Email","Telephone","AlternateLanguage","CurrentLanguage","Hover","Focus","FocusVisible","Active","Visited","DesignTokens"];export{i as Active,c as AlternateLanguage,g as CurrentLanguage,n as Default,m as DesignTokens,d as Email,o as External,t as Focus,a as FocusVisible,r as Hover,l as Placeholder,u as Telephone,s as Visited,O as __namedExportsOrder,P as default};
//# sourceMappingURL=Link.stories-49a8a218.js.map
