import{a as te}from"./chunk-NX5DM7EF-03d2d5c1.js";import{d as b,c as e}from"./util-b4cb7c15.js";import"./_commonjsHelpers-725317a4.js";import"./vue.esm-bundler-e07e3e6f.js";import"./index-2812c619.js";import"./chunk-PCJTTTQV-457a1bfc.js";import"./preload-helper-41c905a7.js";import"./chunk-Y5O7ZP4P-aaefc2f2.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./index-f78bb811.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-bf486984.js";import"./chunk-RDJSMFWU-fd275764.js";import"./index-d37d4223.js";import"./index-0c05a4b7.js";import"./isSymbol-1aea413c.js";import"./index-356e4a49.js";import"./chunk-R4NKYYJA-96bb58e6.js";const ne='<!-- @license CC0-1.0 -->\n\n# Text box\n\n## Metadata van veelgebruikte formuliervelden\n\n| Data type                | `autocomplete`                                   | `spellcheck` | `translate` | value component |\n| ------------------------ | ------------------------------------------------ | ------------ | ----------- | --------------- |\n| Naam                     | `name`                                           | `false`      | `no`        | `bdi`           |\n| Voornaam (1 of meerdere) | `given-name`                                     | `false`      | `no`        | `bdi`           |\n| Voorvoegsel              |                                                  | `false`      | `no`        | `bdi`           |\n| Achternaam               | `family-name`                                    | `false`      | `no`        | `bdi`           |\n| Adresregel 1             | `address-line1`                                  |              | `no`        | -               |\n| Adresregel 2             | `address-line2`                                  |              | `no`        | -               |\n| Adresregel 3             | `address-line3`                                  |              | `no`        | -               |\n| Postcode                 | `postal-code`                                    | `false`      | `no`        | -               |\n| Straatnaam               |                                                  |              | `no`        | -               |\n| Huisnummer               |                                                  |              | `no`        | -               |\n| Huisletter               |                                                  |              | `no`        | -               |\n| Huisnummer toevoeging    |                                                  | `false`      | `no`        | -               |\n| Woonplaats               |                                                  |              |             | -               |\n| Burgerservicenummer      |                                                  | `false`      | `no`        | -               |\n| E-mailadres              | `email`                                          | `false`      | `no`        | `URLValue`      |\n| Website                  | `url`                                            | `false`      | `no`        | `URLValue`      |\n| Bestandsnaam             |                                                  |              | `no`        | `URLValue`      |\n| Wachtwoord               | `password` / `new-password` / `current-password` | `false`      | `no`        | `URLValue`      |\n| Geboortedatum            | `bday`                                           |              |             |                 |\n| Kenteken                 |                                                  | `false`      |             |                 |\n\n_Let op:_\n\n- Straatnaam moet niet `autocomplete="street-address"` gebruiken, `street-address` is voor een textarea.\n\n## Terminologie\n\n- **textbox**: [`role="textbox"` in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/#textbox), [Text box lemma op Wikipedia](https://en.wikipedia.org/wiki/Text_box). HTML noemt het "text control" en text edit control". [MDN noemt het](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text) "text field" en "text input".\n- **invalid**: ...\n- **disabled**: ...\n- **read-only**: ...\n\n## Class names\n\n- `.utrecht-textbox`\n- `.utrecht-textbox--invalid`\n- `.utrecht-textbox--disabled`\n- `.utrecht-textbox--read-only`\n\n## Design Tokens\n\n- Textbox:\n  - `--utrecht-textbox-border-bottom-width`\n  - `--utrecht-textbox-border-color`\n  - `--utrecht-textbox-border-radius`\n  - `--utrecht-textbox-border-width`\n  - `--utrecht-textbox-color`\n  - `--utrecht-textbox-font-family`\n  - `--utrecht-textbox-font-size`\n  - `--utrecht-textbox-max-inline-size`\n  - `--utrecht-textbox-padding-block-end`\n  - `--utrecht-textbox-padding-block-start`\n  - `--utrecht-textbox-padding-inline-end`\n  - `--utrecht-textbox-padding-inline-start`\n  - Modifier: `disabled`\n    - `--utrecht-textbox-disabled-border-color`\n    - `--utrecht-textbox-disabled-color`\n  - Modifier: `invalid`\n    - `--utrecht-textbox-invalid-border-color`\n    - `--utrecht-textbox-invalid-border-width`\n  - Modifier: `read-only`:\n    - `--utrecht-textbox-read-only-border-color`\n    - `--utrecht-textbox-read-only-color`\n\n## Privacy\n\nGebruik `spellcheck="false"` voor velden die gevoelige informatie kunnen bevatten, zoals wachtwoorden en persoonsgegevens. Sommige _browser extensions_ voor spellingcontrole sturen deze informatie naar externe servers.\n',re={textbox:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-bottom-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},placeholder:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},invalid:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},"read-only":{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}},oe={utrecht:re},t={id:"vue-textbox",title:"Vue.js Component/Textbox",component:b,tags:["autodocs"],argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},readonly:{name:"readonly",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},modelValue:{name:"modelValue",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}},type:{name:"type",type:{name:"select",required:!1},options:["text","email","password","number","tel","url"],table:{defaultValue:{summary:"text"}}},updateModelValue:{action:"updateModelValue"},updateInput:{action:"updateInput"}},args:{},render:()=>({components:{Textbox:b},template:'<Textbox v-bind="$props" @update:modelValue="updateModelValue"></Textbox>',methods:{updateModelValue:te("updateModelValue")}}),parameters:{status:{type:"ALPHA"},tokens:oe,tokenPrefix:"utrecht-textbox",docs:{description:{component:ne}}}},n=e(t,{name:"Textbox",args:{name:"default-textbox",id:"default-textbox",modelValue:"The Quick Brown Fox Jumps Over The Lazy Dog"}}),r=e(t,{name:"Email",args:{name:"textbox-email",id:"textbox-email",type:"email",modelValue:"info@example.com"}}),o=e(t,{name:"Password",args:{name:"textbox-password",id:"textbox-password",type:"password",modelValue:"@*4xcRQjbZ8c*sEE@.G_nmsxakdX6vgJny_mYff4v!"}}),s=e(t,{name:"Number",args:{name:"textbox-number",id:"textbox-number",type:"number",modelValue:"42"}}),a=e(t,{name:"URL",args:{name:"textbox-url",id:"textbox-url",type:"url",modelValue:"https://example.com/"}}),i=e(t,{name:"Telephone number",args:{name:"textbox-tel",id:"textbox-tel",modelValue:"+31 555 385 385"}}),l=e(t,{name:"Disabled",args:{name:"textbox-disabled",id:"textbox-disabled",disabled:!0}}),d=e(t,{name:"Invalid",args:{name:"textbox-invalid",id:"textbox-invalid",invalid:!0}}),m=e(t,{name:"Read-only",args:{name:"textbox-readonly",id:"textbox-readonly",readonly:!0,value:"Textbox Read-only"}}),u=e(t,{name:"Required",args:{name:"textbox-required",id:"textbox-required",required:!0,modelValue:""}}),c=e(t,{name:"Hover",args:{...n.args},parameters:{pseudo:{hover:!0}}}),x=e(t,{name:"Focus",args:{...n.args},parameters:{pseudo:{focus:!0}}}),p=e(t,{name:"Focus visible",args:{...n.args},parameters:{pseudo:{focus:!0,focusVisible:!0}}});var y,g,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`createStory(meta, {
  name: 'Textbox',
  args: {
    name: 'default-textbox',
    id: 'default-textbox',
    modelValue: 'The Quick Brown Fox Jumps Over The Lazy Dog'
  }
})`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,v,V;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`createStory(meta, {
  name: 'Email',
  args: {
    name: 'textbox-email',
    id: 'textbox-email',
    type: 'email',
    modelValue: 'info@example.com'
  }
})`,...(V=(v=r.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var w,T,S;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`createStory(meta, {
  name: 'Password',
  args: {
    name: 'textbox-password',
    id: 'textbox-password',
    type: 'password',
    modelValue: '@*4xcRQjbZ8c*sEE@.G_nmsxakdX6vgJny_mYff4v!'
  }
})`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var $,k,R;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`createStory(meta, {
  name: 'Number',
  args: {
    name: 'textbox-number',
    id: 'textbox-number',
    type: 'number',
    modelValue: '42'
  }
})`,...(R=(k=s.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var q,D,L;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`createStory(meta, {
  name: 'URL',
  args: {
    name: 'textbox-url',
    id: 'textbox-url',
    type: 'url',
    modelValue: 'https://example.com/'
  }
})`,...(L=(D=a.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var M,E,_;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`createStory(meta, {
  name: 'Telephone number',
  args: {
    name: 'textbox-tel',
    id: 'textbox-tel',
    modelValue: '+31 555 385 385'
  }
})`,...(_=(E=i.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var F,H,z;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`createStory(meta, {
  name: 'Disabled',
  args: {
    name: 'textbox-disabled',
    id: 'textbox-disabled',
    disabled: true
  }
})`,...(z=(H=l.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var A,U,I;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`createStory(meta, {
  name: 'Invalid',
  args: {
    name: 'textbox-invalid',
    id: 'textbox-invalid',
    invalid: true
  }
})`,...(I=(U=d.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var P,N,W;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`createStory(meta, {
  name: 'Read-only',
  args: {
    name: 'textbox-readonly',
    id: 'textbox-readonly',
    readonly: true,
    value: 'Textbox Read-only'
  }
})`,...(W=(N=m.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var O,B,C;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`createStory(meta, {
  name: 'Required',
  args: {
    name: 'textbox-required',
    id: 'textbox-required',
    required: true,
    modelValue: ''
  }
})`,...(C=(B=u.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var G,J,Q;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`createStory(meta, {
  name: 'Hover',
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
})`,...(Q=(J=c.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var j,X,Y;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`createStory(meta, {
  name: 'Focus',
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
})`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,K,ee;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`createStory(meta, {
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
})`,...(ee=(K=p.parameters)==null?void 0:K.docs)==null?void 0:ee.source}}};const ke=["Default","Email","Password","NumberTextbox","URLTextbox","TelephoneTextbox","Disabled","Invalid","ReadOnly","Required","Hover","Focus","FocusVisible"];export{n as Default,l as Disabled,r as Email,x as Focus,p as FocusVisible,c as Hover,d as Invalid,s as NumberTextbox,o as Password,m as ReadOnly,u as Required,i as TelephoneTextbox,a as URLTextbox,ke as __namedExportsOrder,t as default};
//# sourceMappingURL=Textbox.stories-0054dcc4.js.map
