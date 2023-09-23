"use strict";(self.webpackChunk_utrecht_storybook_css=self.webpackChunk_utrecht_storybook_css||[]).push([[9742],{"./src/LinkButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,Default:()=>Default,DesignTokens:()=>DesignTokens,Disabled:()=>Disabled,DisabledActive:()=>DisabledActive,DisabledFocus:()=>DisabledFocus,DisabledFocusVisible:()=>DisabledFocusVisible,DisabledHover:()=>DisabledHover,Focus:()=>Focus,FocusVisible:()=>FocusVisible,Hover:()=>Hover,IconBefore:()=>IconBefore,Inline:()=>Inline,InlineIcon:()=>InlineIcon,InlineText:()=>InlineText,Pressed:()=>Pressed,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LinkButton_stories});var index_esm=__webpack_require__("../component-library-react/dist/index.esm.js");const tokens_namespaceObject=JSON.parse('{"utrecht":{"link-button":{}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),icon_dist=__webpack_require__("../../components/icon/dist/index.json"),clsx_m=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js")),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const LinkButtonStory=({active,children,focus,focusVisible,hover,IconAfter,IconBefore,...restProps})=>(0,jsx_runtime.jsxs)(index_esm.Qj,{className:(0,clsx_m.Z)({"utrecht-link-button--active":active,"utrecht-link-button--focus":focus,"utrecht-link-button--focus-visible":focusVisible,"utrecht-link-button--hover":hover}),...restProps,children:[IconBefore&&(0,jsx_runtime.jsx)(IconBefore,{}),children,IconAfter&&(0,jsx_runtime.jsx)(IconAfter,{})]});LinkButtonStory.displayName="LinkButtonStory";try{LinkButtonStory.displayName="LinkButtonStory",LinkButtonStory.__docgenInfo={description:"",displayName:"LinkButtonStory",props:{active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},focus:{defaultValue:null,description:"",name:"focus",required:!1,type:{name:"boolean"}},focusVisible:{defaultValue:null,description:"",name:"focusVisible",required:!1,type:{name:"boolean"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:"boolean"}},IconBefore:{defaultValue:null,description:"",name:"IconBefore",required:!1,type:{name:"string"}},IconAfter:{defaultValue:null,description:"",name:"IconAfter",required:!1,type:{name:"string"}},inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},pressed:{defaultValue:null,description:"",name:"pressed",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/LinkButton.tsx#LinkButtonStory"]={docgenInfo:LinkButtonStory.__docgenInfo,name:"LinkButtonStory",path:"src/LinkButton.tsx#LinkButtonStory"})}catch(__react_docgen_typescript_loader_error){}var design_token_story=__webpack_require__("./src/design-token-story.tsx");const paragraphDecorator=Story=>(0,jsx_runtime.jsxs)(index_esm.nv,{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",Story()," Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]});paragraphDecorator.displayName="paragraphDecorator";const meta={title:"CSS Component/Button that looks like a link",id:"css-link-button",component:LinkButtonStory,args:{active:!1,disabled:!1,focus:!1,focusVisible:!1,hover:!1,inline:!1,children:"",pressed:!1},argTypes:{active:{description:"Active",control:"boolean"},disabled:{description:"Disabled",control:"boolean"},focus:{description:"Focus",control:"boolean"},focusVisible:{description:"Focus visible",control:"boolean"},hover:{description:"Hover",control:"boolean"},children:{description:"Button content",control:"text"},pressed:{description:"Pressed",control:{type:"select"},options:["",!1,!0],type:{required:!1}},IconBefore:{description:"Icon before label",control:{type:"select"},options:["",...icon_dist.map((({id})=>id))]},IconAfter:{description:"Icon after label",control:{type:"select"},options:["",...icon_dist.map((({id})=>id))]}},parameters:{tokensPrefix:"utrecht-link-button",status:{type:"WORK IN PROGRESS"},tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Link button: button met uiterlijk van een link\n\nEen button met het uiterlijk van een link gebruik je binnen formulieren en applicaties, wanneer de gebruiker moet kunnen navigeren naar een andere pagina, en je op die plaats in de user interface normaalgesproken een button gebruikt. Bijvoorbeeld: een button om naar de vorige stap in een formulier te gaan, terwijl de ingevulde informatie van de huidige stap wel opgeslagen wordt.\n\nGebruik deze component niet op standaard informatieve webpagina's, gebruik dan een gewone link.\n\n## States\n\n- active\n- hover\n- focus\n- focus visible\n\nEr is geen `visited` state, want buttons hebben geen visited state.\n\nEr is geen `disabled` state, want links hebben geen disabled state.\n\n## Design tokens\n\nVoor de layout van de component worden de design tokens van `utrecht-button` gebruikt, voor de kleur en het uiterlijk van inhoud en interactieve states worden de design tokens van `utrecht-link` gebruikt. Op dit moment heeft `utrecht-link-button` nog geen eigen design tokens.\n"}}}},LinkButton_stories=meta,Default={args:{children:"Terug"},parameters:{docs:{description:{story:"Styling met de `.utrecht-button-link` class naam."}}}},Hover={args:{...Default.args,hover:!0},name:"Hover",parameters:{docs:{description:{story:"Styling met de `.utrecht-link-button--hover` class naam of als state op link met `.utrecht-link-button:hover`."}}}},Focus={args:{...Default.args,focus:!0},name:"Focus",parameters:{docs:{description:{story:"Styling met de `.utrecht-link-button--focus` class naam of als state op link met `.utrecht-link-button:focus`."}}}},FocusVisible={args:{...Default.args,focus:!0,focusVisible:!0},name:"Focus-visible",parameters:{docs:{description:{story:"Styling met de `.utrecht-link-button--focus-visible` class naam of als status op `.utrecht-link-button:focus-visible`."}}}},Active={args:{...Default.args,active:!0},name:"Active",parameters:{docs:{description:{story:"Styling met de `.utrecht-link-button--active` class naam of als status op `.utrecht-link-button:active`."}}}},Pressed={args:{...Default.args,pressed:!0},name:"Pressed",parameters:{docs:{description:{story:"Styling met de `.utrecht-link-button--pressed` class naam."}}}},Disabled={args:{...Default.args,disabled:!0},name:"Disabled",parameters:{docs:{description:{story:"Styling met de `.utrecht-link-button--disabled` class naam."}}}},DisabledHover={args:{...Default.args,disabled:!0,hover:!0},name:"Disabled and hover"},DisabledFocus={args:{...Default.args,disabled:!0,focus:!0},name:"Disabled and focus"},DisabledFocusVisible={args:{...Default.args,disabled:!0,tabIndex:0,focus:!0,focusVisible:!0},name:"Disabled with focus-visible"},DisabledActive={args:{...Default.args,active:!0,disabled:!0},name:"Disabled and active"},IconBefore={args:{children:[(0,jsx_runtime.jsx)(index_esm.JO,{children:(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,jsx_runtime.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"}),(0,jsx_runtime.jsx)("path",{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"}),(0,jsx_runtime.jsx)("path",{d:"M16 5l3 3"})]})}),"Edit"]},name:"Inline with icon"},Inline={args:{children:"Edit",inline:!0},name:"Inline",parameters:{docs:{description:{story:"Styling via the `.utrecht-link-button--inline` class name."}}}},InlineIcon={args:{children:[(0,jsx_runtime.jsx)(index_esm.JO,{children:(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,jsx_runtime.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"}),(0,jsx_runtime.jsx)("path",{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"}),(0,jsx_runtime.jsx)("path",{d:"M16 5l3 3"})]})}),"Edit"],inline:!0},name:"Inline with icon"},InlineText={args:{children:[(0,jsx_runtime.jsx)(index_esm.JO,{children:(0,jsx_runtime.jsx)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",children:(0,jsx_runtime.jsx)("path",{d:"M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"})})}),"Citation needed",(0,jsx_runtime.jsx)(index_esm.JO,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48",children:(0,jsx_runtime.jsx)("path",{d:"M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z"})})})],inline:!0},name:"Inline in text",decorators:[paragraphDecorator],parameters:{docs:{description:{story:"Styling via the `.utrecht-link-button--inline` class name."}}}},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Terug'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling met de `.utrecht-button-link` class naam.'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Hover.parameters={...Hover.parameters,docs:{...Hover.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    hover: true\n  },\n  name: 'Hover',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling met de `.utrecht-link-button--hover` class naam of als state op link met `.utrecht-link-button:hover`.'\n      }\n    }\n  }\n}",...Hover.parameters?.docs?.source}}},Focus.parameters={...Focus.parameters,docs:{...Focus.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    focus: true\n  },\n  name: 'Focus',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling met de `.utrecht-link-button--focus` class naam of als state op link met `.utrecht-link-button:focus`.'\n      }\n    }\n  }\n}",...Focus.parameters?.docs?.source}}},FocusVisible.parameters={...FocusVisible.parameters,docs:{...FocusVisible.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    focus: true,\n    focusVisible: true\n  },\n  name: 'Focus-visible',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling met de `.utrecht-link-button--focus-visible` class naam of als status op `.utrecht-link-button:focus-visible`.'\n      }\n    }\n  }\n}",...FocusVisible.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    active: true\n  },\n  name: 'Active',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling met de `.utrecht-link-button--active` class naam of als status op `.utrecht-link-button:active`.'\n      }\n    }\n  }\n}",...Active.parameters?.docs?.source}}},Pressed.parameters={...Pressed.parameters,docs:{...Pressed.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    pressed: true\n  },\n  name: 'Pressed',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling met de `.utrecht-link-button--pressed` class naam.'\n      }\n    }\n  }\n}",...Pressed.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    disabled: true\n  },\n  name: 'Disabled',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling met de `.utrecht-link-button--disabled` class naam.'\n      }\n    }\n  }\n}",...Disabled.parameters?.docs?.source}}},DisabledHover.parameters={...DisabledHover.parameters,docs:{...DisabledHover.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    disabled: true,\n    hover: true\n  },\n  name: 'Disabled and hover'\n}",...DisabledHover.parameters?.docs?.source}}},DisabledFocus.parameters={...DisabledFocus.parameters,docs:{...DisabledFocus.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    disabled: true,\n    focus: true\n  },\n  name: 'Disabled and focus'\n}",...DisabledFocus.parameters?.docs?.source}}},DisabledFocusVisible.parameters={...DisabledFocusVisible.parameters,docs:{...DisabledFocusVisible.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    disabled: true,\n    tabIndex: 0,\n    focus: true,\n    focusVisible: true\n  },\n  name: 'Disabled with focus-visible'\n}",...DisabledFocusVisible.parameters?.docs?.source}}},DisabledActive.parameters={...DisabledActive.parameters,docs:{...DisabledActive.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    active: true,\n    disabled: true\n  },\n  name: 'Disabled and active'\n}",...DisabledActive.parameters?.docs?.source}}},IconBefore.parameters={...IconBefore.parameters,docs:{...IconBefore.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: [<Icon>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">\n          <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n          <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />\n          <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />\n          <path d="M16 5l3 3" />\n        </svg>\n      </Icon>, \'Edit\']\n  },\n  name: \'Inline with icon\'\n}',...IconBefore.parameters?.docs?.source}}},Inline.parameters={...Inline.parameters,docs:{...Inline.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Edit',\n    inline: true\n  },\n  name: 'Inline',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling via the `.utrecht-link-button--inline` class name.'\n      }\n    }\n  }\n}",...Inline.parameters?.docs?.source}}},InlineIcon.parameters={...InlineIcon.parameters,docs:{...InlineIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: [<Icon>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">\n          <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n          <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />\n          <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />\n          <path d="M16 5l3 3" />\n        </svg>\n      </Icon>, \'Edit\'],\n    inline: true\n  },\n  name: \'Inline with icon\'\n}',...InlineIcon.parameters?.docs?.source}}},InlineText.parameters={...InlineText.parameters,docs:{...InlineText.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: [<Icon>\n        <svg width="48" height="48" viewBox="0 0 48 48">\n          <path d="M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"></path>\n        </svg>\n      </Icon>, \'Citation needed\', <Icon>\n        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">\n          <path d="M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z" />\n        </svg>\n      </Icon>],\n    inline: true\n  },\n  name: \'Inline in text\',\n  decorators: [paragraphDecorator],\n  parameters: {\n    docs: {\n      description: {\n        story: \'Styling via the `.utrecht-link-button--inline` class name.\'\n      }\n    }\n  }\n}',...InlineText.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Hover","Focus","FocusVisible","Active","Pressed","Disabled","DisabledHover","DisabledFocus","DisabledFocusVisible","DisabledActive","IconBefore","Inline","InlineIcon","InlineText","DesignTokens"]}}]);