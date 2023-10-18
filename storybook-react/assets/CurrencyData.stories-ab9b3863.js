import{j as C}from"./jsx-runtime-29545a09.js";import{t as V,d as q}from"./util-c59842d4.js";import{c as x}from"./clsx.m-1229b3e0.js";import{r as F}from"./index-76fb7be0.js";import{P as L}from"./Paragraph-e67a9fcb.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const P=(r,t,a)=>new Intl.NumberFormat(r,{style:"currency",currency:t,minimumFractionDigits:Number.isInteger(a)?0:void 0,useGrouping:!1}).format(a).replace(/[\s]+/g,"").replace("-","−"),I=(r,t,a)=>{let e=new Intl.NumberFormat(r,{style:"currency",currency:t}).format(a);return e=e.replace(/-/,"−"),(r==="nl"||r==="nl-NL")&&/\u2212/.test(e)&&(e=e.replace(/(.+)\u2212(.+)/,"− $1$2")),e=e.replace(/ /g," "),e},m=F.forwardRef(({children:r,currency:t="EUR",amount:a,locale:e="nl-NL",className:R,...D},S)=>{const n=typeof a=="string"?parseFloat(a):a,k=P(e,t,n),E=I(e,t,n);return C("data",{...D,ref:S,value:`${t} ${a}`,className:x("utrecht-currency-data",n<0&&"utrecht-currency-data--negative",n>0&&"utrecht-currency-data--positive",R),"aria-label":k,children:r||E})});m.displayName="CurrencyData";try{m.displayName="CurrencyData",m.__docgenInfo={description:"",displayName:"CurrencyData",props:{currency:{defaultValue:{value:"EUR"},description:"",name:"currency",required:!1,type:{name:"string"}},amount:{defaultValue:null,description:"",name:"amount",required:!0,type:{name:"string | number"}},locale:{defaultValue:{value:"nl-NL"},description:"",name:"locale",required:!1,type:{name:"string"}}}}}catch{}const T=`<!-- @license CC0-1.0 -->

# Currency data
`,U={"currency-data":{}},$={utrecht:U},w={title:"React Component/Currency data",id:"react-currency-data",component:m,args:{amount:"0",currency:"EUR",locale:"nl-NL"},argTypes:{amount:{name:"amount",type:{name:"string",required:!0},table:{defaultValue:{summary:""}}},currency:{name:"amount",type:{name:"string",required:!0},table:{defaultValue:{summary:"EUR"}}},locale:{name:"locale",type:{name:"string",required:!1},table:{defaultValue:{summary:"nl-NL"}}}},parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-currency-data",tokens:V,tokensDefinition:$,docs:{description:{component:T}}},decorators:[r=>C(L,{children:r()})]},s={args:{amount:"42.42"}},o={args:{amount:"-42.42"}},c={args:{amount:"1212121"}},u=q(w);var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    amount: '42.42'
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,y,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    amount: '-42.42'
  }
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,N,b;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    amount: '1212121'
  }
}`,...(b=(N=c.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var v,h,_;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:"designTokenStory(meta)",...(_=(h=u.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const A=["Positive","Negative","Million","DesignTokens"];export{u as DesignTokens,c as Million,o as Negative,s as Positive,A as __namedExportsOrder,w as default};
//# sourceMappingURL=CurrencyData.stories-ab9b3863.js.map
