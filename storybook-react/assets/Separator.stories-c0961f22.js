import{j as i}from"./jsx-runtime-670450c2.js";import{a1 as o}from"./index-c1e58cc6.js";import{t as s,d as c}from"./util-b22bc3f5.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const d=`<!-- @license CC0-1.0 -->

# Separator

Scheidingslijnen worden gebruikt om de scanbaarheid van een lange contentpagina te vergroten.

## Terminologie

- **separator**, van de ARIA \`role="separator"\`. "hr" van \`<hr>\` uit HTML is te onduidelijk buiten de context van code, "horizontal rule" te specifieke beschrijving van de originele rendering in HTML. De "separator" zou er ook heel anders uit kunnen zien dan een "rule" (lijn), en bovendien kan er voor andere tekstrichtingen wel eens een verticale variant komen.

"Divider" is ook een vaak gehoorde term hiervoor, misschien moet deze voor vindbaarheid ook genoemd worden in de documentatie.

## Class names

- \`utrecht-separator\`

## Variant

- horizontaal

## Design tokens

We hebben de volgende CSS variabelen:

- \`utrecht-separator-color\`
- \`utrecht-separator-width\` - "width" is misschien verwarrend, voor de horizontale variant is "height" logischer. Wat zou een schrijf-richting-agnostische term hiervoor kunnen zijn?
- \`utrecht-separator-margin-block-start\`
- \`utrecht-separator-margin-block-end\`

## Visueel design Utrecht

8px dikke grijze lijn.
`,h={separator:{color:{css:{syntax:"<color>",inherits:!0}},"block-size":{css:{syntax:"<length>",inherits:!0}},"margin-block-end":{css:{syntax:"<length>",inherits:!0}},"margin-block-start":{css:{syntax:"<length>",inherits:!0}}}},m={utrecht:h},p={title:"React Component/Separator",id:"react-separator",component:o,tags:["autodocs"],parameters:{tokensPrefix:"utrecht-separator",tokens:s,tokensDefinition:m,docs:{description:{component:d}}}},l=a=>i(o,{...a}),e=l.bind({}),n=c(p);var r;e.parameters={...e.parameters,storySource:{source:"args => <Separator {...args} />",...(r=e.parameters)==null?void 0:r.storySource}};var t;n.parameters={...n.parameters,storySource:{source:"designTokenStory(meta)",...(t=n.parameters)==null?void 0:t.storySource}};const x=["Default","DesignTokens"];export{e as Default,n as DesignTokens,x as __namedExportsOrder,p as default};
//# sourceMappingURL=Separator.stories-c0961f22.js.map
