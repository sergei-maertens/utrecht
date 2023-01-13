import{O as z,c as e}from"./util-791a0f23.js";import"./vue.esm-bundler-3980e320.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-MA2MUXQN-66659f83.js";import"./preload-helper-41c905a7.js";import"./index-62c31eed.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-90100987.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-eb3dc4e7.js";import"./chunk-XHUUYXNA-8149cd2a.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./_getTag-e861206b.js";import"./_baseIsEqual-4d7f9b7e.js";import"./index-8f5d6c0d.js";import"./chunk-R4NKYYJA-96bb58e6.js";const S=`<!-- @license CC0-1.0 -->

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
`,L={link:{color:{css:{syntax:"<color>",inherits:!0}},"text-decoration":{css:{syntax:"none | underline",inherits:!0}},"text-underline-thickness":{css:{syntax:"<length>",inherits:!0}},"text-underline-offset":{css:{syntax:"<length>",inherits:!0}},active:{color:{css:{syntax:"<color>",inherits:!0}}},focus:{color:{css:{syntax:"<color>",inherits:!0}},"text-decoration":{css:{syntax:"none | underline",inherits:!0}},"text-underline-thickness":{css:{syntax:"<length>",inherits:!0}}},hover:{color:{css:{syntax:"<color>",inherits:!0}},"text-decoration":{css:{syntax:"none | underline",inherits:!0}},"text-underline-thickness":{css:{syntax:"<length>",inherits:!0}}},placeholder:{color:{css:{syntax:"<color>",inherits:!0}}},visited:{color:{css:{syntax:"<color>",inherits:!0}}},icon:{size:{css:{syntax:"<length>",inherits:!0}}}}},C={utrecht:L},n={id:"vue-link",title:"Vue.js Component/Link",component:z,tags:["autodocs"],argTypes:{external:{name:"external",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},href:{name:"href",type:{name:"string",required:!1},table:{defaultValue:{summary:!1}}},target:{type:{name:"string",required:!1}}},args:{href:"https://example.com"},parameters:{status:{type:"ALPHA"},tokens:C,tokenPrefix:"utrecht-link",docs:{description:{component:S},source:{code:'<UtrechtLink v-bind="$props"><slot></slot></UtrechtLink>'}}}},t=e(n,{name:"Link",args:{textContent:"Default"}}),r=e(n,{name:"External link",args:{external:!0,target:"_blank",rel:"noopener",textContent:"External Link"}}),a=e(n,{name:"E-mail link",args:{textContent:"Email",href:"mailto:info@example.com"}}),i=e(n,{name:"Telephone link",args:{textContent:"+31 555 385 385",href:"tel:+31555385385"}}),o=e(n,{name:"Alternate language link",args:{textContent:"EN",href:"https://example.com/en",title:"This page in English",hreflang:"en",lang:"en"}}),s=e(n,{name:"Current language link",args:{textContent:"EN",href:"https://example.com/en","aria-current":"page",title:"This page in English",hreflang:"en",lang:"en"}}),l=e(n,{name:"Hover",args:{textContent:"Interactive state: hover"},parameters:{pseudo:{hover:!0}}}),d=e(n,{name:"Focus",args:{textContent:"Interactive state: focus"},parameters:{pseudo:{focus:!0}}}),u=e(n,{name:"Focus visible",args:{textContent:"Interactive state: focus visible"},parameters:{pseudo:{focus:!0,focusVisible:!0}}}),c=e(n,{name:"Active",args:{textContent:"Interactive state: active"},parameters:{pseudo:{active:!0}}}),m=e(n,{name:"Visited",args:{textContent:"Interactive state: visited"},parameters:{pseudo:{visited:!0}}});var k;t.parameters={...t.parameters,storySource:{source:`createStory(meta, {
  name: 'Link',
  args: {
    textContent: 'Default'
  }
})`,...(k=t.parameters)==null?void 0:k.storySource}};var g;r.parameters={...r.parameters,storySource:{source:`createStory(meta, {
  name: 'External link',
  args: {
    external: true,
    target: '_blank',
    rel: 'noopener',
    textContent: 'External Link'
  }
})`,...(g=r.parameters)==null?void 0:g.storySource}};var p;a.parameters={...a.parameters,storySource:{source:`createStory(meta, {
  name: 'E-mail link',
  args: {
    textContent: 'Email',
    href: 'mailto:info@example.com'
  }
})`,...(p=a.parameters)==null?void 0:p.storySource}};var h;i.parameters={...i.parameters,storySource:{source:`createStory(meta, {
  name: 'Telephone link',
  args: {
    textContent: '+31 555 385 385',
    href: 'tel:+31555385385'
  }
})`,...(h=i.parameters)==null?void 0:h.storySource}};var v;o.parameters={...o.parameters,storySource:{source:`createStory(meta, {
  name: 'Alternate language link',
  args: {
    textContent: 'EN',
    href: 'https://example.com/en',
    title: 'This page in English',
    hreflang: 'en',
    lang: 'en'
  }
})`,...(v=o.parameters)==null?void 0:v.storySource}};var b;s.parameters={...s.parameters,storySource:{source:`createStory(meta, {
  name: 'Current language link',
  args: {
    textContent: 'EN',
    href: 'https://example.com/en',
    'aria-current': 'page',
    title: 'This page in English',
    hreflang: 'en',
    lang: 'en'
  }
})`,...(b=s.parameters)==null?void 0:b.storySource}};var f;l.parameters={...l.parameters,storySource:{source:`createStory(meta, {
  name: 'Hover',
  args: {
    textContent: 'Interactive state: hover'
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
})`,...(f=l.parameters)==null?void 0:f.storySource}};var x;d.parameters={...d.parameters,storySource:{source:`createStory(meta, {
  name: 'Focus',
  args: {
    textContent: 'Interactive state: focus'
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
})`,...(x=d.parameters)==null?void 0:x.storySource}};var y;u.parameters={...u.parameters,storySource:{source:`createStory(meta, {
  name: 'Focus visible',
  args: {
    textContent: 'Interactive state: focus visible'
  },
  parameters: {
    pseudo: {
      focus: true,
      focusVisible: true
    }
  }
})`,...(y=u.parameters)==null?void 0:y.storySource}};var w;c.parameters={...c.parameters,storySource:{source:`createStory(meta, {
  name: 'Active',
  args: {
    textContent: 'Interactive state: active'
  },
  parameters: {
    pseudo: {
      active: true
    }
  }
})`,...(w=c.parameters)==null?void 0:w.storySource}};var j;m.parameters={...m.parameters,storySource:{source:`createStory(meta, {
  name: 'Visited',
  args: {
    textContent: 'Interactive state: visited'
  },
  parameters: {
    pseudo: {
      visited: true
    }
  }
})`,...(j=m.parameters)==null?void 0:j.storySource}};const Z=["Default","ExternalLink","EmailLink","TelephoneLink","AlternateLanguageLink","CurrentLanguageLink","Hover","Focus","FocusVisible","Active","Visited"];export{c as Active,o as AlternateLanguageLink,s as CurrentLanguageLink,t as Default,a as EmailLink,r as ExternalLink,d as Focus,u as FocusVisible,l as Hover,i as TelephoneLink,m as Visited,Z as __namedExportsOrder,n as default};
//# sourceMappingURL=Link.stories-4c4b3c97.js.map
