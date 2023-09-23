"use strict";(self.webpackChunk_utrecht_storybook_css=self.webpackChunk_utrecht_storybook_css||[]).push([[7171],{"./src/ButtonLink.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,IconAfter:()=>IconAfter,IconBefore:()=>IconBefore,Next:()=>Next,Placeholder:()=>Placeholder,Previous:()=>Previous,PrimaryAction:()=>PrimaryAction,SecondaryAction:()=>SecondaryAction,Subtle:()=>Subtle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ButtonLink_stories});var index_esm=__webpack_require__("../component-library-react/dist/index.esm.js");const tokens_namespaceObject=JSON.parse('{"utrecht":{"button-link":{}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),icon_dist=__webpack_require__("../../components/icon/dist/index.json"),clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),design_token_story=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/design-token-story.tsx")),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ButtonLinkStory=({active,children,hover,focus,focusVisible,keyboardSupport,placeholder,IconBefore,IconAfter,...restProps})=>(0,jsx_runtime.jsxs)(index_esm.ZP,{role:keyboardSupport?"button":placeholder?"link":void 0,placeholder,className:(0,clsx_m.Z)({"utrecht-button-link--active":active,"utrecht-button-link--hover":hover,"utrecht-button-link--focus":focus,"utrecht-button-link--focus-visible":focusVisible}),...restProps,children:[IconBefore&&(0,jsx_runtime.jsx)(IconBefore,{}),children,IconAfter&&(0,jsx_runtime.jsx)(IconAfter,{})]});ButtonLinkStory.displayName="ButtonLinkStory";const meta={title:"CSS Component/Link that looks like a button",id:"css-button-link",component:ButtonLinkStory,argTypes:{appearance:{description:"Appearance",control:{type:"select"},options:["","button","primary-action-button","secondary-action-button","subtle-button"]},active:{description:"Active",control:"boolean"},external:{description:"External",control:"boolean"},children:{description:"Link text",type:{name:"string",required:!0}},hover:{description:"Hover",control:"boolean"},focus:{description:"Focus",control:"boolean"},keyboardSupport:{description:"Supports activation using both Enter and Space",control:"boolean"},focusVisible:{description:"Focus visible",control:"boolean"},href:{description:"Target URL",type:{name:"string",required:!0}},placeholder:{description:"Placeholder for a link",control:"boolean"},IconBefore:{description:"Icon before textContent",control:{type:"select"},options:["",...icon_dist.map((({id})=>id))]},IconAfter:{description:"Icon after textContent",control:{type:"select"},options:["",...icon_dist.map((({id})=>id))]}},args:{active:!1,appearance:"",external:!1,hover:!1,href:"",focus:!1,focusVisible:!1,keyboardSupport:!1,placeholder:!1,children:"",IconBefore:"",IconAfter:""},parameters:{tokensPrefix:"utrecht-button-link",status:{type:"WORK IN PROGRESS"},tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Button link: link die er uit ziet als button\n\nEen link die er uitziet als een button, om gebruikers aan te sporen op de link te klikken en actie te gaan ondernemen.\n\n## Toepassing\n\nEen link button mag alleen gebruikt worden voor navigatie naar een pagina waar je een actie uitvoert, de link klikken mag niet gelijk een _side-effect_ hebben.\n\nWel:\n\n- Log in met eIDAS (navigeert naar formulier voor inloggen)\n- Maak een afspraak (navigeert naar formulier)\n\nNiet:\n\n- Uitloggen (logt direct uit)\n- Stop de parkeermeter (je mag hierna niet meer parkeren)\n\n## Activeren\n\nEen link button moet op dezelfde manier geactiveerd kunnen worden als een button:\n\n- Klikken\n- `Enter` op toetsenbord\n- `Space` op toetsenbord\n\nEen HTML `a` element wordt standaard niet geactiveerd met `Space`, daarvoor is ondersteunende JavaScript nodig. Gebruik `role="button"` alleen wanneer je door extra JavaScript ook met `Space` de link activeert.\n\n## States\n\n- hover\n- focus\n- focus-visible\n\nDe link button heeft geen disabled state, net als de normale link: die heeft ook geen disabled state.\n\nDe link button heeft geen `visited` state zoals normale links, maar ziet er altijd hetzelfde uit zoals een normale button.\n'}}}},ButtonLink_stories=meta,Default={args:{href:"https://example.com/",children:"Start je aanvraag"},parameters:{docs:{description:{story:"Styling met de `.utrecht-button-link` class naam"}}}},PrimaryAction={args:{...Default.args,appearance:"primary-action-button"},parameters:{docs:{description:{story:"Styling met de `.utrecht-button-link--primary-action` class naam"}}}},SecondaryAction={args:{...Default.args,appearance:"secondary-action-button"},parameters:{docs:{description:{story:"Styling met de `.utrecht-button-link--secondary-action` class naam"}}}},Subtle={args:{...Default.args,appearance:"subtle-button"},parameters:{docs:{description:{story:"Styling met de `.utrecht-button-link--subtle` class naam"}}}},IconAfter={args:{href:"https://example.com/",IconAfter:"utrecht-icon-chevron-right",rel:"next",children:"Next"},name:"Icon after label"},IconBefore={args:{href:"https://example.com/",IconBefore:"utrecht-icon-language",children:"Taal kiezen"},name:"Icon before label"},Next={args:{href:"https://example.com/",IconAfter:"utrecht-icon-chevron-right",rel:"next",children:"Next"},name:"Next"},Previous={args:{href:"https://example.com/",IconBefore:"utrecht-icon-chevron-left",rel:"prev",children:"Previous"},name:"Previous"},Placeholder={args:{children:"Start je aanvraag",href:"https://example.com/",placeholder:!0},parameters:{docs:{description:{story:"Styling met de `utrecht-button-link--placeholder` class naam"}}}},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    href: 'https://example.com/',\n    children: 'Start je aanvraag'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling met de `.utrecht-button-link` class naam'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},PrimaryAction.parameters={...PrimaryAction.parameters,docs:{...PrimaryAction.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    appearance: 'primary-action-button'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling met de `.utrecht-button-link--primary-action` class naam'\n      }\n    }\n  }\n}",...PrimaryAction.parameters?.docs?.source}}},SecondaryAction.parameters={...SecondaryAction.parameters,docs:{...SecondaryAction.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    appearance: 'secondary-action-button'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling met de `.utrecht-button-link--secondary-action` class naam'\n      }\n    }\n  }\n}",...SecondaryAction.parameters?.docs?.source}}},Subtle.parameters={...Subtle.parameters,docs:{...Subtle.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    appearance: 'subtle-button'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling met de `.utrecht-button-link--subtle` class naam'\n      }\n    }\n  }\n}",...Subtle.parameters?.docs?.source}}},IconAfter.parameters={...IconAfter.parameters,docs:{...IconAfter.parameters?.docs,source:{originalSource:"{\n  args: {\n    href: 'https://example.com/',\n    IconAfter: 'utrecht-icon-chevron-right',\n    rel: 'next',\n    children: 'Next'\n  },\n  name: 'Icon after label'\n}",...IconAfter.parameters?.docs?.source}}},IconBefore.parameters={...IconBefore.parameters,docs:{...IconBefore.parameters?.docs,source:{originalSource:"{\n  args: {\n    href: 'https://example.com/',\n    IconBefore: 'utrecht-icon-language',\n    children: 'Taal kiezen'\n  },\n  name: 'Icon before label'\n}",...IconBefore.parameters?.docs?.source}}},Next.parameters={...Next.parameters,docs:{...Next.parameters?.docs,source:{originalSource:"{\n  args: {\n    href: 'https://example.com/',\n    IconAfter: 'utrecht-icon-chevron-right',\n    rel: 'next',\n    children: 'Next'\n  },\n  name: 'Next'\n}",...Next.parameters?.docs?.source}}},Previous.parameters={...Previous.parameters,docs:{...Previous.parameters?.docs,source:{originalSource:"{\n  args: {\n    href: 'https://example.com/',\n    IconBefore: 'utrecht-icon-chevron-left',\n    rel: 'prev',\n    children: 'Previous'\n  },\n  name: 'Previous'\n}",...Previous.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Start je aanvraag',\n    href: 'https://example.com/',\n    placeholder: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling met de `utrecht-button-link--placeholder` class naam'\n      }\n    }\n  }\n}",...Placeholder.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","PrimaryAction","SecondaryAction","Subtle","IconAfter","IconBefore","Next","Previous","Placeholder","DesignTokens"]}}]);