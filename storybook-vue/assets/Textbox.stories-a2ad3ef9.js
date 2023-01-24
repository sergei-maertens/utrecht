import"./chunk-3CDXZIO2-d7d958bf.js";import{a as L}from"./chunk-WLCP77WC-d18929a8.js";import{a as p,c as e}from"./util-336a407e.js";import"./_commonjsHelpers-725317a4.js";import"./vue.esm-bundler-3980e320.js";import"./index-2812c619.js";import"./chunk-MA2MUXQN-66659f83.js";import"./preload-helper-41c905a7.js";import"./index-62c31eed.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-90100987.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-eb3dc4e7.js";import"./chunk-XHUUYXNA-8149cd2a.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./_getTag-e861206b.js";import"./_baseIsEqual-4d7f9b7e.js";import"./index-8f5d6c0d.js";import"./chunk-R4NKYYJA-96bb58e6.js";const M='<!-- @license CC0-1.0 -->\n\n# Text box\n\n## Metadata van veelgebruikte formuliervelden\n\n| Data type                | `autocomplete`                                   | `spellcheck` | `translate` | value component |\n| ------------------------ | ------------------------------------------------ | ------------ | ----------- | --------------- |\n| Naam                     | `name`                                           | `false`      | `no`        | `bdi`           |\n| Voornaam (1 of meerdere) | `given-name`                                     | `false`      | `no`        | `bdi`           |\n| Voorvoegsel              |                                                  | `false`      | `no`        | `bdi`           |\n| Achternaam               | `family-name`                                    | `false`      | `no`        | `bdi`           |\n| Adresregel 1             | `address-line1`                                  |              | `no`        | -               |\n| Adresregel 2             | `address-line2`                                  |              | `no`        | -               |\n| Adresregel 3             | `address-line3`                                  |              | `no`        | -               |\n| Postcode                 | `postal-code`                                    | `false`      | `no`        | -               |\n| Straatnaam               |                                                  |              | `no`        | -               |\n| Huisnummer               |                                                  |              | `no`        | -               |\n| Huisletter               |                                                  |              | `no`        | -               |\n| Huisnummer toevoeging    |                                                  | `false`      | `no`        | -               |\n| Woonplaats               |                                                  |              |             | -               |\n| Burgerservicenummer      |                                                  | `false`      | `no`        | -               |\n| E-mailadres              | `email`                                          | `false`      | `no`        | `URLValue`      |\n| Website                  | `url`                                            | `false`      | `no`        | `URLValue`      |\n| Bestandsnaam             |                                                  |              | `no`        | `URLValue`      |\n| Wachtwoord               | `password` / `new-password` / `current-password` | `false`      | `no`        | `URLValue`      |\n| Geboortedatum            | `bday`                                           |              |             |                 |\n| Kenteken                 |                                                  | `false`      |             |                 |\n\n_Let op:_\n\n- Straatnaam moet niet `autocomplete="street-address"` gebruiken, `street-address` is voor een textarea.\n\n## Terminologie\n\n- **textbox**: [`role="textbox"` in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/#textbox), [Text box lemma op Wikipedia](https://en.wikipedia.org/wiki/Text_box). HTML noemt het "text control" en text edit control". [MDN noemt het](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text) "text field" en "text input".\n- **invalid**: ...\n- **disabled**: ...\n- **read-only**: ...\n\n## Class names\n\n- `.utrecht-textbox`\n- `.utrecht-textbox--invalid`\n- `.utrecht-textbox--disabled`\n- `.utrecht-textbox--read-only`\n\n## Design Tokens\n\n- Textbox:\n  - `--utrecht-textbox-border-bottom-width`\n  - `--utrecht-textbox-border-color`\n  - `--utrecht-textbox-border-radius`\n  - `--utrecht-textbox-border-width`\n  - `--utrecht-textbox-color`\n  - `--utrecht-textbox-font-family`\n  - `--utrecht-textbox-font-size`\n  - `--utrecht-textbox-max-inline-size`\n  - `--utrecht-textbox-padding-block-end`\n  - `--utrecht-textbox-padding-block-start`\n  - `--utrecht-textbox-padding-inline-end`\n  - `--utrecht-textbox-padding-inline-start`\n  - Modifier: `disabled`\n    - `--utrecht-textbox-disabled-border-color`\n    - `--utrecht-textbox-disabled-color`\n  - Modifier: `invalid`\n    - `--utrecht-textbox-invalid-border-color`\n    - `--utrecht-textbox-invalid-border-width`\n  - Modifier: `read-only`:\n    - `--utrecht-textbox-read-only-border-color`\n    - `--utrecht-textbox-read-only-color`\n\n## Privacy\n\nGebruik `spellcheck="false"` voor velden die gevoelige informatie kunnen bevatten, zoals wachtwoorden en persoonsgegevens. Sommige _browser extensions_ voor spellingcontrole sturen deze informatie naar externe servers.\n',E={textbox:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-bottom-width":{css:{syntax:"<length>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},"border-radius":{css:{syntax:"<length-percentage>",inherits:!0}},"border-width":{css:{syntax:"<length>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}},"font-family":{css:{syntax:"*",inherits:!0}},"font-size":{css:{syntax:"<length>",inherits:!0}},"max-inline-size":{css:{syntax:"<length>",inherits:!0}},"padding-block-end":{css:{syntax:"<length>",inherits:!0}},"padding-block-start":{css:{syntax:"<length>",inherits:!0}},"padding-inline-end":{css:{syntax:"<length>",inherits:!0}},"padding-inline-start":{css:{syntax:"<length>",inherits:!0}},placeholder:{color:{css:{syntax:"<color>",inherits:!0}}},disabled:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}},focus:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},"border-width":{css:{syntax:"<length>",inherits:!0}}},invalid:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},"border-width":{css:{syntax:"<length>",inherits:!0}}},"read-only":{"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}}}},_={utrecht:E},t={id:"vue-textbox",title:"Vue.js Component/Textbox",component:p,tags:["autodocs"],argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},readonly:{name:"readonly",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},modelValue:{name:"modelValue",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}},type:{name:"type",type:{name:"select",required:!1},options:["text","email","password","number","tel","url"],table:{defaultValue:{summary:"text"}}},updateModelValue:{action:"updateModelValue"},updateInput:{action:"updateInput"}},args:{},render:()=>({components:{Textbox:p},template:'<Textbox v-bind="$props" @update:modelValue="updateModelValue"></Textbox>',methods:{updateModelValue:L("updateModelValue")}}),parameters:{status:{type:"ALPHA"},tokens:_,tokenPrefix:"utrecht-textbox",docs:{description:{component:M}}}},r=e(t,{name:"Textbox",args:{name:"default-textbox",id:"default-textbox",modelValue:"The Quick Brown Fox Jumps Over The Lazy Dog"}}),a=e(t,{name:"Email",args:{name:"textbox-email",id:"textbox-email",type:"email",modelValue:"info@example.com"}}),o=e(t,{name:"Password",args:{name:"textbox-password",id:"textbox-password",type:"password",modelValue:"@*4xcRQjbZ8c*sEE@.G_nmsxakdX6vgJny_mYff4v!"}}),n=e(t,{name:"Number",args:{name:"textbox-number",id:"textbox-number",type:"number",modelValue:"42"}}),s=e(t,{name:"URL",args:{name:"textbox-url",id:"textbox-url",type:"url",modelValue:"https://example.com/"}}),l=e(t,{name:"Telephone number",args:{name:"textbox-tel",id:"textbox-tel",modelValue:"+31 555 385 385"}}),i=e(t,{name:"Disabled",args:{name:"textbox-disabled",id:"textbox-disabled",disabled:!0}}),d=e(t,{name:"Invalid",args:{name:"textbox-invalid",id:"textbox-invalid",invalid:!0}}),u=e(t,{name:"Read-only",args:{name:"textbox-readonly",id:"textbox-readonly",readonly:!0,value:"Textbox Read-only"}}),m=e(t,{name:"Required",args:{name:"textbox-required",id:"textbox-required",required:!0,modelValue:""}}),x=e(t,{name:"Hover",args:{...r.args},parameters:{pseudo:{hover:!0}}}),c=e(t,{name:"Focus",args:{...r.args},parameters:{pseudo:{focus:!0}}}),b=e(t,{name:"Focus visible",args:{...r.args},parameters:{pseudo:{focus:!0,focusVisible:!0}}});var y;r.parameters={...r.parameters,storySource:{source:`createStory(meta, {
  name: 'Textbox',
  args: {
    name: 'default-textbox',
    id: 'default-textbox',
    modelValue: 'The Quick Brown Fox Jumps Over The Lazy Dog'
  }
})`,...(y=r.parameters)==null?void 0:y.storySource}};var h;a.parameters={...a.parameters,storySource:{source:`createStory(meta, {
  name: 'Email',
  args: {
    name: 'textbox-email',
    id: 'textbox-email',
    type: 'email',
    modelValue: 'info@example.com'
  }
})`,...(h=a.parameters)==null?void 0:h.storySource}};var g;o.parameters={...o.parameters,storySource:{source:`createStory(meta, {
  name: 'Password',
  args: {
    name: 'textbox-password',
    id: 'textbox-password',
    type: 'password',
    modelValue: '@*4xcRQjbZ8c*sEE@.G_nmsxakdX6vgJny_mYff4v!'
  }
})`,...(g=o.parameters)==null?void 0:g.storySource}};var f;n.parameters={...n.parameters,storySource:{source:`createStory(meta, {
  name: 'Number',
  args: {
    name: 'textbox-number',
    id: 'textbox-number',
    type: 'number',
    modelValue: '42'
  }
})`,...(f=n.parameters)==null?void 0:f.storySource}};var v;s.parameters={...s.parameters,storySource:{source:`createStory(meta, {
  name: 'URL',
  args: {
    name: 'textbox-url',
    id: 'textbox-url',
    type: 'url',
    modelValue: 'https://example.com/'
  }
})`,...(v=s.parameters)==null?void 0:v.storySource}};var S;l.parameters={...l.parameters,storySource:{source:`createStory(meta, {
  name: 'Telephone number',
  args: {
    name: 'textbox-tel',
    id: 'textbox-tel',
    modelValue: '+31 555 385 385'
  }
})`,...(S=l.parameters)==null?void 0:S.storySource}};var V;i.parameters={...i.parameters,storySource:{source:`createStory(meta, {
  name: 'Disabled',
  args: {
    name: 'textbox-disabled',
    id: 'textbox-disabled',
    disabled: true
  }
})`,...(V=i.parameters)==null?void 0:V.storySource}};var w;d.parameters={...d.parameters,storySource:{source:`createStory(meta, {
  name: 'Invalid',
  args: {
    name: 'textbox-invalid',
    id: 'textbox-invalid',
    invalid: true
  }
})`,...(w=d.parameters)==null?void 0:w.storySource}};var T;u.parameters={...u.parameters,storySource:{source:`createStory(meta, {
  name: 'Read-only',
  args: {
    name: 'textbox-readonly',
    id: 'textbox-readonly',
    readonly: true,
    value: 'Textbox Read-only'
  }
})`,...(T=u.parameters)==null?void 0:T.storySource}};var k;m.parameters={...m.parameters,storySource:{source:`createStory(meta, {
  name: 'Required',
  args: {
    name: 'textbox-required',
    id: 'textbox-required',
    required: true,
    modelValue: ''
  }
})`,...(k=m.parameters)==null?void 0:k.storySource}};var R;x.parameters={...x.parameters,storySource:{source:`createStory(meta, {
  name: 'Hover',
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
})`,...(R=x.parameters)==null?void 0:R.storySource}};var q;c.parameters={...c.parameters,storySource:{source:`createStory(meta, {
  name: 'Focus',
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
})`,...(q=c.parameters)==null?void 0:q.storySource}};var D;b.parameters={...b.parameters,storySource:{source:`createStory(meta, {
  name: 'Focus visible',
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      focus: true,
      focusVisible: true
    }
  }
})`,...(D=b.parameters)==null?void 0:D.storySource}};const te=["Default","Email","Password","NumberTextbox","URLTextbox","TelephoneTextbox","Disabled","Invalid","ReadOnly","Required","Hover","Focus","FocusVisible"];export{r as Default,i as Disabled,a as Email,c as Focus,b as FocusVisible,x as Hover,d as Invalid,n as NumberTextbox,o as Password,u as ReadOnly,m as Required,l as TelephoneTextbox,s as URLTextbox,te as __namedExportsOrder,t as default};
//# sourceMappingURL=Textbox.stories-a2ad3ef9.js.map
