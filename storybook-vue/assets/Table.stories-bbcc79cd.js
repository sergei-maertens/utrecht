import{Y as s,s as r,t as o,B as i,L as a,Z as p,a0 as y,a1 as c}from"./component-library-vue-73eab3d3.js";import{c as d}from"./util-1156dc8f.js";import"./vue.esm-bundler-c077df82.js";import"./chunk-PCJTTTQV-a82b575c.js";import"./iframe-b3a5754b.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-468e166b.js";import"./index-356e4a49.js";import"./chunk-R4NKYYJA-96bb58e6.js";const b=`<!-- @license CC0-1.0 -->

# Table
`,g={table:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},caption:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"text-align":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"left | right | start | end",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},header:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | uppercase",inherits:!0}}},"border-block-end-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-block-end-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},"header-cell":{"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | uppercase",inherits:!0}}}},cell:{"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},row:{"border-block-end-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-block-end-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"alternate-odd":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},"alternate-even":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}}},h={utrecht:g},m={id:"vue-table",title:"Vue.js Component/Table",component:s,tags:["autodocs"],argTypes:{},args:{},render:()=>({components:{Table:s,TableCaption:r,TableHeader:o,TableRow:i,TableHeaderCell:a,TableBody:p,TableCell:y,TableFooter:c},template:'<Table v-bind="$props"><slot></slot></Table>'}),parameters:{status:{type:"ALPHA"},tokens:h,tokenPrefix:"utrecht-table",docs:{component:{description:b}}}},e=d(m,{name:"Table",args:{slot:`<TableCaption>Table Caption</TableCaption>
    <TableHeader>
      <TableRow>
          <TableHeaderCell scope="col">Column header cell 1</TableHeaderCell>
          <TableHeaderCell scope="col">Column header cell 2</TableHeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableHeaderCell scope="row">Row header cell</TableHeaderCell>
        <TableCell>Cell</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
       <TableCell>Footer cell 1</TableCell>
       <TableCell>Footer cell 2</TableCell>
      </TableRow>
    </TableFooter>`}});var n,t,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`createStory(meta, {
  name: 'Table',
  args: {
    slot: \`<TableCaption>Table Caption</TableCaption>
    <TableHeader>
      <TableRow>
          <TableHeaderCell scope="col">Column header cell 1</TableHeaderCell>
          <TableHeaderCell scope="col">Column header cell 2</TableHeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableHeaderCell scope="row">Row header cell</TableHeaderCell>
        <TableCell>Cell</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
       <TableCell>Footer cell 1</TableCell>
       <TableCell>Footer cell 2</TableCell>
      </TableRow>
    </TableFooter>\`
  }
})`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,m as default};
//# sourceMappingURL=Table.stories-bbcc79cd.js.map
