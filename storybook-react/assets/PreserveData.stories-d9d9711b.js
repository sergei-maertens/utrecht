import{j as a}from"./jsx-runtime-29545a09.js";import{t as q,d as M}from"./util-5e11045c.js";import{c as z}from"./clsx.m-1229b3e0.js";import{r as C}from"./index-76fb7be0.js";import{P as U}from"./Paragraph-e67a9fcb.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const d=C.forwardRef(({children:e,className:R,dateTime:l,value:p,...L},c)=>{const m={children:a("bdi",{translate:"no",children:e}),className:z("utrecht-preserve-data",R),...L};return typeof l<"u"?a("time",{...m,dateTime:l,ref:c}):typeof p<"u"?a("data",{...m,value:p,ref:c}):a("bdi",{translate:"no",ref:c,...m,children:e})});d.displayName="PreserveData";try{d.displayName="PreserveData",d.__docgenInfo={description:"",displayName:"PreserveData",props:{dateTime:{defaultValue:null,description:"",name:"dateTime",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}}}catch{}const B=`<!-- @license CC0-1.0 -->

# Preserve data

De _preserve data_ component is bedoeld om ingevoerde gegevens zoveel mogelijk 1-op-1 te laten zien. Dat betekent: spaties worden getoond, data wordt niet vertaald, _left-to-right_ en _right-to-left_ teksten worden met Unicode in de automatische schrijfrichting weergegeven.

Losse regels worden niet getoond, dan moet het gecombineerd worden met de _multiline data_ component.

## Variaties

Deze component krijgt geen configuratie-opties, voor het weergeven van andere types kun je gebruik maken van andere data component, of je eigen component maken. Bijvoorbeeld:

- _IBAN data_
- _number data_
- _URL data_
- _datetime_ data
- _multiline data_

## HTML

Gebruik het \`<bdi>\` HTML element voor Unicode text direction isolation. Gebruik ook het \`<data>\` element als je de \`value\` in een attribuut wilt opslaan.
`,E={"preserve-data":{}},G={utrecht:E},H={title:"React Component/Preserve data",id:"react-preserve-data",component:d,args:{children:""},argTypes:{dateTime:{name:"dateTime",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}},value:{name:"value",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}}},parameters:{tokensPrefix:"utrecht-preserve-data",tokens:q,tokensDefinition:G,docs:{description:{component:B}}},decorators:[e=>a(U,{children:e()})]},r={args:{children:" (06) 249 0420 120"}},t={args:{children:"علي,"},name:"Right-to-left"},n={args:{children:"Mees de Vos",lang:"nl"},name:"Prevent translation"},o={args:{children:"50,000",value:"50000"}},s={args:{children:"19 januari 2038 om 03:14:08",dateTime:"2038-01-19T03:14:08Z"}},i=M(H);var u,g,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: ' (06) 249 0420 120'
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,v,_;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'علي,'
  },
  name: 'Right-to-left'
}`,...(_=(v=t.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var T,k,y;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Mees de Vos',
    lang: 'nl'
  },
  name: 'Prevent translation'
}`,...(y=(k=n.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var b,D,j;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: '50,000',
    value: '50000'
  }
}`,...(j=(D=o.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var P,w,V;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: '19 januari 2038 om 03:14:08',
    dateTime: '2038-01-19T03:14:08Z'
  }
}`,...(V=(w=s.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var S,x,N;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:"designTokenStory(meta)",...(N=(x=i.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};const Q=["Default","RightToLeft","NoTranslate","Value","Time","DesignTokens"];export{r as Default,i as DesignTokens,n as NoTranslate,t as RightToLeft,s as Time,o as Value,Q as __namedExportsOrder,H as default};
//# sourceMappingURL=PreserveData.stories-d9d9711b.js.map
