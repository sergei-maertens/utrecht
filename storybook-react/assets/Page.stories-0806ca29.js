import{j as n}from"./jsx-runtime-670450c2.js";import{X as i}from"./index-51eeb0e4.js";import{t as p,d as m}from"./util-36ba316b.js";import{Default as e}from"./PageContent.stories-433ed6e3.js";import{Default as o}from"./PageFooter.stories-45c7c204.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const g=`<!-- @license CC0-1.0 -->

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
`,l={page:{"background-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}},"margin-inline-start":{css:{syntax:"<length>",inherits:!0}},"margin-inline-end":{css:{syntax:"<length>",inherits:!0}},"max-inline-size":{css:{syntax:"<length>",inherits:!0}}}},d={utrecht:l},h={title:"React Component/Page",id:"react-page",component:i,subcomponents:{PageContent:e,PageFooter:o,PageHeader:e},tags:["autodocs"],parameters:{tokensPrefix:"utrecht-page",tokens:p,tokensDefinition:d,docs:{description:{component:g}}}},u=c=>n(i,{...c}),t=u.bind({});t.args={children:[n(e,{...e.args}),n(e,{...e.args}),n(o,{...o.args})]};const a=m(h);var r;t.parameters={...t.parameters,storySource:{source:"args => <Page {...args} />",...(r=t.parameters)==null?void 0:r.storySource}};var s;a.parameters={...a.parameters,storySource:{source:"designTokenStory(meta)",...(s=a.parameters)==null?void 0:s.storySource}};const D=["Default","DesignTokens"];export{t as Default,a as DesignTokens,D as __namedExportsOrder,h as default};
//# sourceMappingURL=Page.stories-0806ca29.js.map
