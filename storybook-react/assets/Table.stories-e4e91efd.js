import{j as e,a as r,F as b}from"./jsx-runtime-29545a09.js";import"./chunk-S4VUQJ4A-18a70951.js";import{D as F,P,A as O,b as E,d as W}from"./index-e4c14306.js";import{t as Y,d as G}from"./util-3ac69f2d.js";import{c as m}from"./clsx.m-1229b3e0.js";import{r as y}from"./index-76fb7be0.js";import"./iframe-4960b80c.js";import"../sb-preview/runtime.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./index-8d47fad6.js";const x=y.forwardRef(({busy:n,children:i,className:o,...s},c)=>e("table",{"aria-busy":n,...s,ref:c,className:m("utrecht-table",{"utrecht-table--busy":n},o),children:i}));x.displayName="Table";try{x.displayName="Table",x.__docgenInfo={description:"",displayName:"Table",props:{busy:{defaultValue:null,description:"",name:"busy",required:!1,type:{name:"boolean"}}}}}catch{}const d=y.forwardRef(({children:n,className:i,...o},s)=>e("tbody",{...o,ref:s,className:m("utrecht-table__body",i),children:n}));d.displayName="TableBody";try{d.displayName="TableBody",d.__docgenInfo={description:"",displayName:"TableBody",props:{}}}catch{}const t=y.forwardRef(({children:n,className:i,numericColumn:o,selected:s,...c},h)=>e("td",{"aria-selected":s?!0:void 0,...c,ref:h,className:m("utrecht-table__cell",{"utrecht-table__cell--selected":s,"utrecht-table__cell--numeric-column":o},i),children:n}));t.displayName="TableCell";try{t.displayName="TableCell",t.__docgenInfo={description:"",displayName:"TableCell",props:{numericColumn:{defaultValue:null,description:"",name:"numericColumn",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const f=y.forwardRef(({children:n,className:i,sticky:o,...s},c)=>e("tfoot",{...s,ref:c,className:m("utrecht-table__footer",{"utrecht-table__footer--sticky":o},i),children:n}));f.displayName="TableFooter";try{f.displayName="TableFooter",f.__docgenInfo={description:"",displayName:"TableFooter",props:{sticky:{defaultValue:null,description:"",name:"sticky",required:!1,type:{name:"boolean"}}}}}catch{}const p=y.forwardRef(({children:n,className:i,sticky:o,...s},c)=>e("thead",{...s,ref:c,className:m("utrecht-table__header",{"utrecht-table__header--sticky":o},i),children:n}));p.displayName="TableHeader";try{p.displayName="TableHeader",p.__docgenInfo={description:"",displayName:"TableHeader",props:{sticky:{defaultValue:null,description:"",name:"sticky",required:!1,type:{name:"boolean"}}}}}catch{}const l=y.forwardRef(({children:n,className:i,numericColumn:o,selected:s,sticky:c,scope:h,...z},j)=>e("th",{"aria-selected":s?!0:void 0,scope:h,...z,ref:j,className:m("utrecht-table__header-cell",{"utrecht-table__header-cell--numeric-column":o,"utrecht-table__header-cell--selected":s,"utrecht-table__header-cell--sticky-inline":c&&h==="row","utrecht-table__header-cell--sticky-block":c&&h==="col"},i),children:n}));l.displayName="TableHeaderCell";try{l.displayName="TableHeaderCell",l.__docgenInfo={description:"",displayName:"TableHeaderCell",props:{numericColumn:{defaultValue:null,description:"",name:"numericColumn",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},sticky:{defaultValue:null,description:"",name:"sticky",required:!1,type:{name:"boolean"}}}}}catch{}const a=y.forwardRef(({children:n,className:i,selected:o,...s},c)=>e("tr",{"aria-selected":o?!0:void 0,...s,ref:c,className:m("utrecht-table__row",{"utrecht-table__row--selected":o},i),children:n}));a.displayName="TableRow";try{a.displayName="TableRow",a.__docgenInfo={description:"",displayName:"TableRow",props:{active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const K=`<!-- @license CC0-1.0 -->

# Table

De _table_ component wordt nog aangewerkt. We doen met de NL Design System community onderzoek welke tabel varianten in omloop zijn, hoe we elke variant toegankelijk kunnen maken en wat het visueel ontwerp moet worden.

De tabellen in Storybook hier zijn allemaal **WORK IN PROGRESS**, tenzij anders aangegeven.
`,L={table:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},caption:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"text-align":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"left | right | start | end",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},header:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | uppercase",inherits:!0}}},"border-block-end-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-block-end-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},"header-cell":{"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | uppercase",inherits:!0}}}},cell:{"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},icon:{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}},row:{"border-block-end-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-block-end-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"alternate-odd":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},"alternate-even":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}}},J={utrecht:L},Q={title:"React Component/Table",id:"react-table",component:x,args:{children:r(b,{children:[e(p,{children:r(a,{children:[e(l,{scope:"col",children:"Column A"}),e(l,{scope:"col",children:"Column B"}),e(l,{scope:"col",children:"Column C"})]})}),e(d,{children:r(a,{children:[e(l,{scope:"row",children:"Item 1"}),e(t,{children:"Data"}),e(t,{children:"More data"})]})}),e(f,{children:r(a,{children:[e(t,{children:"More data"}),e(t,{children:"More data"}),e(t,{children:"More data"})]})})]})},parameters:{tokensPrefix:"utrecht-table",tokens:Y,tokensDefinition:J,docs:{page:()=>r(b,{children:[e(F,{children:K}),e(P,{}),e(O,{story:E}),e(W,{})]})}}},u={},T={args:{children:r(b,{children:[e(p,{children:r(a,{children:[e(l,{scope:"col",children:"Column A"}),e(l,{scope:"col",children:"Column B"}),e(l,{scope:"col",children:"Column C"})]})}),r(d,{children:[r(a,{selected:!0,children:[e(l,{scope:"row",children:"Item 1"}),e(t,{children:"Data"}),e(t,{children:"More data"})]}),r(a,{children:[e(l,{scope:"row",children:"Item"}),e(t,{children:"Data"}),e(t,{children:"More data"})]})]})]})}},g={args:{children:r(b,{children:[e(p,{children:r(a,{children:[e(l,{scope:"col",children:"Column A"}),e(l,{scope:"col",children:"Column B"}),e(l,{scope:"col",children:"Column C"})]})}),r(d,{children:[r(a,{children:[e(l,{scope:"row",children:"Item 1"}),e(t,{selected:!0,children:"Data"}),e(t,{children:"More data"})]}),r(a,{children:[e(l,{scope:"row",children:"Item"}),e(t,{children:"Data"}),e(t,{children:"More data"})]})]})]})}},C={args:{children:r(b,{children:[e(p,{children:r(a,{children:[e(l,{scope:"col",children:"Column A"}),e(l,{scope:"col",selected:!0,children:"Column B"}),e(l,{scope:"col",children:"Column C"})]})}),r(d,{children:[r(a,{children:[e(l,{scope:"row",children:"Item 1"}),e(t,{selected:!0,children:"Data"}),e(t,{children:"More data"})]}),r(a,{children:[e(l,{scope:"row",children:"Item"}),e(t,{selected:!0,children:"Data"}),e(t,{children:"More data"})]})]})]})}},_=G(Q);var w,H,k;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(k=(H=u.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var R,$,N;T.parameters={...T.parameters,docs:{...(R=T.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow selected>
            <TableHeaderCell scope="row">Item 1</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Item</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableBody>
      </>
  }
}`,...(N=($=T.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var D,I,S;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Item 1</TableHeaderCell>
            <TableCell selected>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Item</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableBody>
      </>
  }
}`,...(S=(I=g.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var B,M,q;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col" selected>
              Column B
            </TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Item 1</TableHeaderCell>
            <TableCell selected>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Item</TableHeaderCell>
            <TableCell selected>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableBody>
      </>
  }
}`,...(q=(M=C.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var v,A,V;_.parameters={..._.parameters,docs:{...(v=_.parameters)==null?void 0:v.docs,source:{originalSource:"designTokenStory(meta)",...(V=(A=_.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};const he=["Default","SelectedRow","SelectedCell","SelectedColumn","DesignTokens"];export{u as Default,_ as DesignTokens,g as SelectedCell,C as SelectedColumn,T as SelectedRow,he as __namedExportsOrder,Q as default};
//# sourceMappingURL=Table.stories-e4e91efd.js.map
