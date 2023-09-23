import{a as te}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as b}from"./component-library-vue-aa1686f3.js";import{c as e}from"./util-49c6044d.js";import"./vue.esm-bundler-759e87b8.js";import"./chunk-S4VUQJ4A-ee3e1c13.js";import"./iframe-8be79902.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-8bfd3a25.js";import"./index-356e4a49.js";const ne='<!-- @license CC0-1.0 -->\n\n# Text box\n\n## Metadata van veelgebruikte formuliervelden\n\n| Data type                                        | `autocomplete`                                   | `spellcheck` | `translate` | value component | input direction |\n| ------------------------------------------------ | ------------------------------------------------ | ------------ | ----------- | --------------- | --------------- |\n| Naam                                             | `name`                                           | `false`      | `no`        | `bdi`           | `auto`          |\n| Voornaam (1 of meerdere)                         | `given-name`                                     | `false`      | `no`        | `bdi`           | leeg of `auto`  |\n| Voorvoegsel                                      |                                                  | `false`      | `no`        | `bdi`           | `auto`          |\n| Achternaam                                       | `family-name`                                    | `false`      | `no`        | `bdi`           | `auto`          |\n| Adresregel 1                                     | `address-line1`                                  |              | `no`        | -               | -               |\n| Adresregel 2                                     | `address-line2`                                  |              | `no`        | -               | -               |\n| Adresregel 3                                     | `address-line3`                                  |              | `no`        | -               | -               |\n| Postcode                                         | `postal-code`                                    | `false`      | `no`        | -               | -               |\n| Straatnaam                                       |                                                  |              | `no`        | -               | -               |\n| Huisnummer                                       |                                                  |              | `no`        | -               | -               |\n| Huisletter                                       |                                                  |              | `no`        | -               | -               |\n| Huisnummer toevoeging                            |                                                  | `false`      | `no`        | -               | -               |\n| Woonplaats                                       |                                                  |              |             | -               | -               |\n| Burgerservicenummer                              |                                                  | `false`      | `no`        | -               | -               |\n| E-mailadres                                      | `email`                                          | `false`      | `no`        | `URLValue`      | `ltr`           |\n| Website                                          | `url`                                            | `false`      | `no`        | `URLValue`      | `ltr`           |\n| Bestandsnaam                                     |                                                  |              | `no`        | `URLValue`      | -               |\n| Wachtwoord                                       | `password` / `new-password` / `current-password` | `false`      | `no`        | `URLValue`      | -               |\n| Geboortedatum                                    | `bday`                                           |              |             |                 | -               |\n| Telefoonnummer (Europa en internationaal)        | `tel`                                            | `false`      |             |                 | `ltr`           |\n| Mobiel telefoonnummer (Europa en internationaal) | `mobile tel`                                     | `false`      |             |                 | `ltr`           |\n| Telefoonnummer thuis (Europa en internationaal)  | `home tel`                                       | `false`      |             |                 | `ltr`           |\n| Telefoonnummer werk (Europa en internationaal)   | `work tel`                                       | `false`      |             |                 | `ltr`           |\n| Faxnummer (Europa en internationaal)             | `fax tel`                                        | `false`      |             |                 | `ltr`           |\n| Telefoonnummer binnen Nederland                  | `tel-national`                                   | `false`      |             |                 | `ltr`           |\n| Mobiel telefoonnummer binnen Nederland           | `mobile tel-national`                            | `false`      |             |                 | `ltr`           |\n| Telefoonnummer thuis binnen Nederland            | `home tel-national`                              | `false`      |             |                 | `ltr`           |\n| Telefoonnummer werk binnen Nederland             | `work tel-national`                              | `false`      |             |                 | `ltr`           |\n| Faxnummer binnen Nederland                       | `fax tel-national`                               | `false`      |             |                 | `ltr`           |\n| Kenteken                                         |                                                  | `false`      |             |                 | -               |\n\n_Let op:_\n\n- Straatnaam moet niet `autocomplete="street-address"` gebruiken, `street-address` is voor een textarea.\n\n## Terminologie\n\n- **textbox**: [`role="textbox"` in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/#textbox), [Text box lemma op Wikipedia](https://en.wikipedia.org/wiki/Text_box). HTML noemt het "text control" en text edit control". [MDN noemt het](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text) "text field" en "text input".\n- **invalid**: ...\n- **disabled**: ...\n- **read-only**: ...\n\n## Class names\n\n- `.utrecht-textbox`\n- `.utrecht-textbox--invalid`\n- `.utrecht-textbox--disabled`\n- `.utrecht-textbox--read-only`\n\n## Design Tokens\n\n- Textbox:\n  - `--utrecht-textbox-border-bottom-width`\n  - `--utrecht-textbox-border-color`\n  - `--utrecht-textbox-border-radius`\n  - `--utrecht-textbox-border-width`\n  - `--utrecht-textbox-color`\n  - `--utrecht-textbox-font-family`\n  - `--utrecht-textbox-font-size`\n  - `--utrecht-textbox-max-inline-size`\n  - `--utrecht-textbox-padding-block-end`\n  - `--utrecht-textbox-padding-block-start`\n  - `--utrecht-textbox-padding-inline-end`\n  - `--utrecht-textbox-padding-inline-start`\n  - Modifier: `disabled`\n    - `--utrecht-textbox-disabled-border-color`\n    - `--utrecht-textbox-disabled-color`\n  - Modifier: `invalid`\n    - `--utrecht-textbox-invalid-border-color`\n    - `--utrecht-textbox-invalid-border-width`\n  - Modifier: `read-only`:\n    - `--utrecht-textbox-read-only-border-color`\n    - `--utrecht-textbox-read-only-color`\n\n## Privacy\n\nGebruik `spellcheck="false"` voor velden die gevoelige informatie kunnen bevatten, zoals wachtwoorden en persoonsgegevens. Sommige _browser extensions_ voor spellingcontrole sturen deze informatie naar externe servers.\n',re={textbox:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-bottom-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}},type:"borderRadius"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}},type:"fontFamilies"},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"fontSizes"},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"lineHeights"},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},placeholder:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},invalid:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}},"read-only":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}}}},oe={utrecht:re},t={id:"vue-textbox",title:"Vue.js Component/Textbox",component:b,tags:["autodocs"],argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},readonly:{name:"readonly",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},modelValue:{name:"modelValue",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}},type:{name:"type",type:{name:"select",required:!1},options:["text","email","password","number","tel","url"],table:{defaultValue:{summary:"text"}}},updateModelValue:{action:"updateModelValue"},updateInput:{action:"updateInput"}},args:{},render:()=>({components:{Textbox:b},template:'<Textbox v-bind="$props" @update:modelValue="updateModelValue"></Textbox>',methods:{updateModelValue:te("updateModelValue")}}),parameters:{status:{type:"ALPHA"},tokens:oe,tokenPrefix:"utrecht-textbox",docs:{description:{component:ne}}}},n=e(t,{name:"Textbox",args:{name:"default-textbox",id:"default-textbox",modelValue:"The Quick Brown Fox Jumps Over The Lazy Dog"}}),r=e(t,{name:"Email",args:{name:"textbox-email",id:"textbox-email",type:"email",modelValue:"info@example.com"}}),o=e(t,{name:"Password",args:{name:"textbox-password",id:"textbox-password",type:"password",modelValue:"@*4xcRQjbZ8c*sEE@.G_nmsxakdX6vgJny_mYff4v!"}}),s=e(t,{name:"Number",args:{name:"textbox-number",id:"textbox-number",type:"number",modelValue:"42"}}),a=e(t,{name:"URL",args:{name:"textbox-url",id:"textbox-url",type:"url",modelValue:"https://example.com/"}}),l=e(t,{name:"Telephone number",args:{name:"textbox-tel",id:"textbox-tel",modelValue:"+31 555 385 385"}}),i=e(t,{name:"Disabled",args:{name:"textbox-disabled",id:"textbox-disabled",disabled:!0}}),d=e(t,{name:"Invalid",args:{name:"textbox-invalid",id:"textbox-invalid",invalid:!0}}),m=e(t,{name:"Read-only",args:{name:"textbox-readonly",id:"textbox-readonly",readonly:!0,value:"Textbox Read-only"}}),c=e(t,{name:"Required",args:{name:"textbox-required",id:"textbox-required",required:!0,modelValue:""}}),u=e(t,{name:"Hover",args:{...n.args},parameters:{pseudo:{hover:!0}}}),p=e(t,{name:"Focus",args:{...n.args},parameters:{pseudo:{focus:!0}}}),x=e(t,{name:"Focus visible",args:{...n.args},parameters:{pseudo:{focus:!0,focusVisible:!0}}});var y,g,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`createStory(meta, {
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
})`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var k,$,R;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`createStory(meta, {
  name: 'Number',
  args: {
    name: 'textbox-number',
    id: 'textbox-number',
    type: 'number',
    modelValue: '42'
  }
})`,...(R=($=s.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var q,E,D;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`createStory(meta, {
  name: 'URL',
  args: {
    name: 'textbox-url',
    id: 'textbox-url',
    type: 'url',
    modelValue: 'https://example.com/'
  }
})`,...(D=(E=a.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var L,M,F;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`createStory(meta, {
  name: 'Telephone number',
  args: {
    name: 'textbox-tel',
    id: 'textbox-tel',
    modelValue: '+31 555 385 385'
  }
})`,...(F=(M=l.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var z,H,N;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`createStory(meta, {
  name: 'Disabled',
  args: {
    name: 'textbox-disabled',
    id: 'textbox-disabled',
    disabled: true
  }
})`,...(N=(H=i.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var _,A,U;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`createStory(meta, {
  name: 'Invalid',
  args: {
    name: 'textbox-invalid',
    id: 'textbox-invalid',
    invalid: true
  }
})`,...(U=(A=d.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var W,I,P;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`createStory(meta, {
  name: 'Read-only',
  args: {
    name: 'textbox-readonly',
    id: 'textbox-readonly',
    readonly: true,
    value: 'Textbox Read-only'
  }
})`,...(P=(I=m.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var O,B,C;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`createStory(meta, {
  name: 'Required',
  args: {
    name: 'textbox-required',
    id: 'textbox-required',
    required: true,
    modelValue: ''
  }
})`,...(C=(B=c.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var G,J,Q;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`createStory(meta, {
  name: 'Hover',
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
})`,...(Q=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var j,X,Y;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`createStory(meta, {
  name: 'Focus',
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
})`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,K,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`createStory(meta, {
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
})`,...(ee=(K=x.parameters)==null?void 0:K.docs)==null?void 0:ee.source}}};const ye=["Default","Email","Password","NumberTextbox","URLTextbox","TelephoneTextbox","Disabled","Invalid","ReadOnly","Required","Hover","Focus","FocusVisible"];export{n as Default,i as Disabled,r as Email,p as Focus,x as FocusVisible,u as Hover,d as Invalid,s as NumberTextbox,o as Password,m as ReadOnly,c as Required,l as TelephoneTextbox,a as URLTextbox,ye as __namedExportsOrder,t as default};
//# sourceMappingURL=Textbox.stories-f850a9eb.js.map
