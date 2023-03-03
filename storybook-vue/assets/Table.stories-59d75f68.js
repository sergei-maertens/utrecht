import{Z as s,t,r as l,o as r,a as o,e as i,s as a,n as p,c as y}from"./util-4dbbd41c.js";import"./vue.esm-bundler-3980e320.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-MA2MUXQN-365c1a5a.js";import"./preload-helper-41c905a7.js";import"./index-62c31eed.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-90100987.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-e4b65a34.js";import"./chunk-XHUUYXNA-8149cd2a.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./index-d37d4223.js";import"./index-c1c45d79.js";import"./isSymbol-1aea413c.js";import"./chunk-R4NKYYJA-96bb58e6.js";const c=`<!-- @license CC0-1.0 -->

# Table
`,d={table:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},caption:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"text-align":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"left | right | start | end",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},header:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | uppercase",inherits:!0}}},"border-block-end-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-block-end-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},"header-cell":{"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | uppercase",inherits:!0}}}},cell:{"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},row:{"border-block-end-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-block-end-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"alternate-odd":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},"alternate-even":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}}},b={utrecht:d},m={id:"vue-table",title:"Vue.js Component/Table",component:s,tags:["autodocs"],argTypes:{},args:{},render:()=>({components:{Table:s,TableCaption:t,TableHeader:l,TableRow:r,TableHeaderCell:o,TableBody:i,TableCell:a,TableFooter:p},template:'<Table v-bind="$props"><slot></slot></Table>'}),parameters:{status:{type:"ALPHA"},tokens:b,tokenPrefix:"utrecht-table",docs:{component:{description:c}}}},e=y(m,{name:"Table",args:{slot:`<TableCaption>Table Caption</TableCaption>
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
    </TableFooter>`}});var n;e.parameters={...e.parameters,storySource:{source:`createStory(meta, {
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
})`,...(n=e.parameters)==null?void 0:n.storySource}};const Z=["Default"];export{e as Default,Z as __namedExportsOrder,m as default};
//# sourceMappingURL=Table.stories-59d75f68.js.map
