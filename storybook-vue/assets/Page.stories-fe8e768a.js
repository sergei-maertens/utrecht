import{z as t,J as a,I as o,W as i,K as r,c as s}from"./util-791a0f23.js";import"./vue.esm-bundler-3980e320.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-MA2MUXQN-66659f83.js";import"./preload-helper-41c905a7.js";import"./index-62c31eed.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-90100987.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-eb3dc4e7.js";import"./chunk-XHUUYXNA-8149cd2a.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./_getTag-e861206b.js";import"./_baseIsEqual-4d7f9b7e.js";import"./index-8f5d6c0d.js";import"./chunk-R4NKYYJA-96bb58e6.js";const p=`<!-- @license CC0-1.0 -->

# Page component

Component that centers the page. The page maximizes the width of the content for large viewports, to keep the line length of texts readable and avoid large horizontal distances between related components.

Typically the contents of the page component are:

- Page Header component
- Page Content component
  - Main content
  - Complimentary content
- Page Footer component

## API

- CSS class name: \`utrecht-page\`
- Web component: \`<utrecht-page>\`
- Angular/React/Vue.js component: \`UtrechtPage\`

## CSS implementation

### Margin

To create some transparent space around the page, \`margin-inline\` CSS variables are provided. However, to automatically horizontally center the page \`margin-inline: auto\` needs to be used.

Achieving both goals is made possible by implementing the \`margin-inline\` as \`padding-inline\` on a transparent container element. The only downside to this approach is that margin collapsing won't work anymore, but that doesn't seem like anyone would ever need for a component that realistically is only used once per document.

### Padding

Padding is not applied directly in the page component itself, but in the child components such as Page Header, Page Content and Page Footer.

## Relevante WCAG regels

- [WCAG eis 2.4.1](https://www.w3.org/TR/WCAG21/#bypass-blocks): gebruik de skip link zodat gebruikers direct naar de _main page content_ kunnen gaan.
- [WCAG eis 2.4.2](https://www.w3.org/TR/WCAG21/#page-titled): de pagina moet een duidelijke titel hebben
`,l={page:{"background-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}},"margin-inline-start":{css:{syntax:"<length>",inherits:!0}},"margin-inline-end":{css:{syntax:"<length>",inherits:!0}},"max-inline-size":{css:{syntax:"<length>",inherits:!0}}}},m={utrecht:l},c={id:"vue-page",title:"Vue.js Component/Page",component:t,tags:["autodocs"],argTypes:{},args:{},render:()=>({components:{Page:t,PageHeader:a,PageContent:o,PageFooter:i,Paragraph:r},template:'<Page v-bind="$props"><slot></slot></Page>'}),parameters:{status:{type:"ALPHA"},tokens:m,tokenPrefix:"utrecht-page",docs:{component:{description:p}}}},e=s(c,{name:"Page",args:{slot:`<PageHeader>Page header</PageHeader>
<PageContent>
  <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum.</Paragraph>
</PageContent>
<PageFooter>Page footer</PageFooter>`}});var n;e.parameters={...e.parameters,storySource:{source:`createStory(meta, {
  name: 'Page',
  args: {
    slot: \`<PageHeader>Page header</PageHeader>
<PageContent>
  <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum.</Paragraph>
</PageContent>
<PageFooter>Page footer</PageFooter>\`
  }
})`,...(n=e.parameters)==null?void 0:n.storySource}};const T=["Default"];export{e as Default,T as __namedExportsOrder,c as default};
//# sourceMappingURL=Page.stories-fe8e768a.js.map
