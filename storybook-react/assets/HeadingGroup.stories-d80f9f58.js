import{a as p,j as e}from"./jsx-runtime-670450c2.js";import{G as o,H as d,P as c,J as g}from"./index-4ba24e52.js";import{t as u,d as h}from"./util-b22bc3f5.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const m=`<!-- @license CC0-1.0 -->

# Heading group

De heading group bevat twee onderdelen:

1. een heading component
2. een pre-heading component of een paragraph component

## Relevante WCAG eisen

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): gebuik het \`<hgroup>\` HTML-element, met daarin een \`<h1>\`-\`<h6>\` en daarna een \`<p>\` element.
- [WCAG eis 1.3.2](https://www.w3.org/TR/WCAG21/#meaningful-sequence): plaats HTML van heading vóór de HTML van de pre-heading, de volgorde kan daarna met CSS aangepast worden.
`,l={"heading-group":{"margin-block-end":{css:{syntax:"<length>",inherits:!0}},"margin-block-start":{css:{syntax:"<length>",inherits:!0}}}},T={utrecht:l},y={title:"React Component/Heading Group",id:"react-heading-group",component:o,tags:["autodocs"],parameters:{tokensPrefix:"utrecht-heading-group",tokens:u,tokensDefinition:T,docs:{description:{component:m}}}},H=()=>p(o,{style:{"--utrecht-space-around":1},children:[e(d,{children:"The Quick Brown Fox Jumps Over The Lazy Dog"}),e(c,{children:"The Quick Brown Fox Jumps Over The Lazy Dog"})]}),n=H.bind({}),k=()=>p(o,{style:{"--utrecht-space-around":1},children:[e(d,{children:"The Quick Brown Fox Jumps Over The Lazy Dog"}),e(g,{children:"The Quick Brown Fox Jumps Over The Lazy Dog"})]}),r=k.bind({}),a=h(y);var t;n.parameters={...n.parameters,storySource:{source:`() => <HeadingGroup style={({
  '--utrecht-space-around': 1
} as any)}>
    <Heading1>The Quick Brown Fox Jumps Over The Lazy Dog</Heading1>
    <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>
  </HeadingGroup>`,...(t=n.parameters)==null?void 0:t.storySource}};var s;r.parameters={...r.parameters,storySource:{source:`() => <HeadingGroup style={({
  '--utrecht-space-around': 1
} as any)}>
    <Heading1>The Quick Brown Fox Jumps Over The Lazy Dog</Heading1>
    <PreHeading>The Quick Brown Fox Jumps Over The Lazy Dog</PreHeading>
  </HeadingGroup>`,...(s=r.parameters)==null?void 0:s.storySource}};var i;a.parameters={...a.parameters,storySource:{source:"designTokenStory(meta)",...(i=a.parameters)==null?void 0:i.storySource}};const S=["Default","WithPreHeading","DesignTokens"];export{n as Default,a as DesignTokens,r as WithPreHeading,S as __namedExportsOrder,y as default};
//# sourceMappingURL=HeadingGroup.stories-d80f9f58.js.map
