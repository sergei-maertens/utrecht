import{j as e,a as l,F as g}from"./jsx-runtime-670450c2.js";import"./chunk-PCJTTTQV-8a033c10.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{D as d,P as h,A as u,a as y,S as f}from"./index-d13ef923.js";import{a4 as P}from"./index-a14f4abd.js";import{t as b,d as k}from"./util-c6db6005.js";import{Default as n}from"./PageContent.stories-5535324c.js";import{Default as r}from"./PageFooter.stories-3403e5bc.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-0e33defa.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-1e419f15.js";import"./chunk-RDJSMFWU-eb6ed6e5.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-195fbef2.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-5b183829.js";import"./index-b3b2312b.js";import"./isSymbol-69229716.js";import"./index-356e4a49.js";import"./clsx.m-b4f9149a.js";import"./index-4d501b15.js";const x=`<!-- @license CC0-1.0 -->

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
`,C={page:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"margin-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}},w={utrecht:C},S={title:"React Component/Page",id:"react-page",component:P,subcomponents:{PageContent:n,PageFooter:r,PageHeader:n},args:{children:[e(n,{...n.args}),e(n,{...n.args}),e(r,{...r.args})]},parameters:{tokensPrefix:"utrecht-page",tokens:b,tokensDefinition:w,docs:{page:()=>l(g,{children:[e(d,{children:x}),e(h,{}),e(u,{story:y}),e(f,{})]})}}},t={},o=k(S);var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,m,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"designTokenStory(meta)",...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const ne=["Default","DesignTokens"];export{t as Default,o as DesignTokens,ne as __namedExportsOrder,S as default};
//# sourceMappingURL=Page.stories-e6db5df1.js.map
