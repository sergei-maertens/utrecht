import{j as e,a as t,F as f}from"./jsx-runtime-29545a09.js";import{t as F,d as E}from"./util-5e11045c.js";import{c as m}from"./clsx.m-1229b3e0.js";import{r as y}from"./index-76fb7be0.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const _=y.forwardRef(({busy:n,children:i,className:o,...s},c)=>e("table",{"aria-busy":n,...s,ref:c,className:m("utrecht-table",{"utrecht-table--busy":n},o),children:i}));_.displayName="Table";try{_.displayName="Table",_.__docgenInfo={description:"",displayName:"Table",props:{busy:{defaultValue:null,description:"",name:"busy",required:!1,type:{name:"boolean"}}}}}catch{}const d=y.forwardRef(({children:n,className:i,...o},s)=>e("tbody",{...o,ref:s,className:m("utrecht-table__body",i),children:n}));d.displayName="TableBody";try{d.displayName="TableBody",d.__docgenInfo={description:"",displayName:"TableBody",props:{}}}catch{}const r=y.forwardRef(({children:n,className:i,numericColumn:o,selected:s,...c},h)=>e("td",{"aria-selected":s?!0:void 0,...c,ref:h,className:m("utrecht-table__cell",{"utrecht-table__cell--selected":s,"utrecht-table__cell--numeric-column":o},i),children:n}));r.displayName="TableCell";try{r.displayName="TableCell",r.__docgenInfo={description:"",displayName:"TableCell",props:{numericColumn:{defaultValue:null,description:"",name:"numericColumn",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const x=y.forwardRef(({children:n,className:i,sticky:o,...s},c)=>e("tfoot",{...s,ref:c,className:m("utrecht-table__footer",{"utrecht-table__footer--sticky":o},i),children:n}));x.displayName="TableFooter";try{x.displayName="TableFooter",x.__docgenInfo={description:"",displayName:"TableFooter",props:{sticky:{defaultValue:null,description:"",name:"sticky",required:!1,type:{name:"boolean"}}}}}catch{}const p=y.forwardRef(({children:n,className:i,sticky:o,...s},c)=>e("thead",{...s,ref:c,className:m("utrecht-table__header",{"utrecht-table__header--sticky":o},i),children:n}));p.displayName="TableHeader";try{p.displayName="TableHeader",p.__docgenInfo={description:"",displayName:"TableHeader",props:{sticky:{defaultValue:null,description:"",name:"sticky",required:!1,type:{name:"boolean"}}}}}catch{}const l=y.forwardRef(({children:n,className:i,numericColumn:o,selected:s,sticky:c,scope:h,...j},A)=>e("th",{"aria-selected":s?!0:void 0,scope:h,...j,ref:A,className:m("utrecht-table__header-cell",{"utrecht-table__header-cell--numeric-column":o,"utrecht-table__header-cell--selected":s,"utrecht-table__header-cell--sticky-inline":c&&h==="row","utrecht-table__header-cell--sticky-block":c&&h==="col"},i),children:n}));l.displayName="TableHeaderCell";try{l.displayName="TableHeaderCell",l.__docgenInfo={description:"",displayName:"TableHeaderCell",props:{numericColumn:{defaultValue:null,description:"",name:"numericColumn",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},sticky:{defaultValue:null,description:"",name:"sticky",required:!1,type:{name:"boolean"}}}}}catch{}const a=y.forwardRef(({children:n,className:i,selected:o,...s},c)=>e("tr",{"aria-selected":o?!0:void 0,...s,ref:c,className:m("utrecht-table__row",{"utrecht-table__row--selected":o},i),children:n}));a.displayName="TableRow";try{a.displayName="TableRow",a.__docgenInfo={description:"",displayName:"TableRow",props:{active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const O=`<!-- @license CC0-1.0 -->

# Table

De _table_ component wordt nog aangewerkt. We doen met de NL Design System community onderzoek welke tabel varianten in omloop zijn, hoe we elke variant toegankelijk kunnen maken en wat het visueel ontwerp moet worden.

De tabellen in Storybook hier zijn allemaal **WORK IN PROGRESS**, tenzij anders aangegeven.
`,P={table:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},caption:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"text-align":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"left | right | start | end",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},header:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | uppercase",inherits:!0}}},"border-block-end-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-block-end-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},"header-cell":{"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | uppercase",inherits:!0}}}},cell:{"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},icon:{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}},row:{"border-block-end-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-block-end-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"alternate-odd":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},"alternate-even":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}}},W={utrecht:P},G={title:"React Component/Table",id:"react-table",component:_,args:{children:t(f,{children:[e(p,{children:t(a,{children:[e(l,{scope:"col",children:"Column A"}),e(l,{scope:"col",children:"Column B"}),e(l,{scope:"col",children:"Column C"})]})}),e(d,{children:t(a,{children:[e(l,{scope:"row",children:"Item 1"}),e(r,{children:"Data"}),e(r,{children:"More data"})]})}),e(x,{children:t(a,{children:[e(r,{children:"More data"}),e(r,{children:"More data"}),e(r,{children:"More data"})]})})]})},parameters:{tokensPrefix:"utrecht-table",tokens:F,tokensDefinition:W,docs:{description:{component:O}}}},b={},u={args:{children:t(f,{children:[e(p,{children:t(a,{children:[e(l,{scope:"col",children:"Column A"}),e(l,{scope:"col",children:"Column B"}),e(l,{scope:"col",children:"Column C"})]})}),t(d,{children:[t(a,{selected:!0,children:[e(l,{scope:"row",children:"Item 1"}),e(r,{children:"Data"}),e(r,{children:"More data"})]}),t(a,{children:[e(l,{scope:"row",children:"Item"}),e(r,{children:"Data"}),e(r,{children:"More data"})]})]})]})}},T={args:{children:t(f,{children:[e(p,{children:t(a,{children:[e(l,{scope:"col",children:"Column A"}),e(l,{scope:"col",children:"Column B"}),e(l,{scope:"col",children:"Column C"})]})}),t(d,{children:[t(a,{children:[e(l,{scope:"row",children:"Item 1"}),e(r,{selected:!0,children:"Data"}),e(r,{children:"More data"})]}),t(a,{children:[e(l,{scope:"row",children:"Item"}),e(r,{children:"Data"}),e(r,{children:"More data"})]})]})]})}},g={args:{children:t(f,{children:[e(p,{children:t(a,{children:[e(l,{scope:"col",children:"Column A"}),e(l,{scope:"col",selected:!0,children:"Column B"}),e(l,{scope:"col",children:"Column C"})]})}),t(d,{children:[t(a,{children:[e(l,{scope:"row",children:"Item 1"}),e(r,{selected:!0,children:"Data"}),e(r,{children:"More data"})]}),t(a,{children:[e(l,{scope:"row",children:"Item"}),e(r,{selected:!0,children:"Data"}),e(r,{children:"More data"})]})]})]})}},C=E(G);var w,H,k;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(k=(H=b.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var $,R,N;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(N=(R=u.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var D,I,B;T.parameters={...T.parameters,docs:{...(D=T.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(B=(I=T.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var S,M,q;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(q=(M=g.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var v,V,z;C.parameters={...C.parameters,docs:{...(v=C.parameters)==null?void 0:v.docs,source:{originalSource:"designTokenStory(meta)",...(z=(V=C.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const Y=["Default","SelectedRow","SelectedCell","SelectedColumn","DesignTokens"];export{b as Default,C as DesignTokens,T as SelectedCell,g as SelectedColumn,u as SelectedRow,Y as __namedExportsOrder,G as default};
//# sourceMappingURL=Table.stories-8f309729.js.map
