"use strict";(self.webpackChunk_utrecht_storybook_css=self.webpackChunk_utrecht_storybook_css||[]).push([[9370],{"../../node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./src/StatusBadge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,Danger:()=>Danger,Default:()=>Default,DesignTokens:()=>DesignTokens,Error:()=>Error,Inactive:()=>Inactive,Invalid:()=>Invalid,Neutral:()=>Neutral,Safe:()=>Safe,Success:()=>Success,Valid:()=>Valid,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>StatusBadge_stories});var css_module=__webpack_require__("../component-library-react/dist/css-module/index.mjs");const tokens_namespaceObject=JSON.parse('{"utrecht":{"badge-status":{"letter-spacing":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"text-transform":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"inherit | uppercase","inherits":true}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),design_token_story=__webpack_require__("./src/design-token-story.tsx");const meta={title:"CSS Component/Badge/Status Badge",id:"css-status-badge",component:css_module.OE,args:{status:"neutral",children:""},argTypes:{children:{description:"Text content",control:"text"},status:{control:{type:"select"},description:"Status",options:["error","success","valid","invalid","active","inactive","neutral","danger","warning","safe"]}},parameters:{tokensPrefix:"utrecht-badge-status",status:{type:"WORK IN PROGRESS"},tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Status badge\n"}}}},StatusBadge_stories=meta,Default={args:{status:"neutral",children:"normaal"},parameters:{docs:{description:{story:"Styling via the `.utrecht-badge-status` class name."}}}},Neutral={args:{status:"neutral",children:"neutral"},name:"Neutral"},Success={args:{status:"success",children:"success"},name:"Success"},Warning={args:{status:"warning",children:"warning"},name:"Warning"},Error={args:{status:"error",children:"error"},name:"Error"},Safe={args:{status:"safe",children:"safe"},name:"Safe"},Danger={args:{status:"danger",children:"danger"},name:"Danger"},Active={args:{status:"active",children:"active"},name:"Active"},Inactive={args:{status:"inactive",children:"inactive"},name:"Inactive"},Valid={args:{status:"valid",children:"valid"},name:"Valid"},Invalid={args:{status:"invalid",children:"invalid"},name:"Invalid"},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    status: 'neutral',\n    children: 'normaal'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling via the `.utrecht-badge-status` class name.'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Neutral.parameters={...Neutral.parameters,docs:{...Neutral.parameters?.docs,source:{originalSource:"{\n  args: {\n    status: 'neutral',\n    children: 'neutral'\n  },\n  name: 'Neutral'\n}",...Neutral.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  args: {\n    status: 'success',\n    children: 'success'\n  },\n  name: 'Success'\n}",...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  args: {\n    status: 'warning',\n    children: 'warning'\n  },\n  name: 'Warning'\n}",...Warning.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    status: 'error',\n    children: 'error'\n  },\n  name: 'Error'\n}",...Error.parameters?.docs?.source}}},Safe.parameters={...Safe.parameters,docs:{...Safe.parameters?.docs,source:{originalSource:"{\n  args: {\n    status: 'safe',\n    children: 'safe'\n  },\n  name: 'Safe'\n}",...Safe.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  args: {\n    status: 'danger',\n    children: 'danger'\n  },\n  name: 'Danger'\n}",...Danger.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:"{\n  args: {\n    status: 'active',\n    children: 'active'\n  },\n  name: 'Active'\n}",...Active.parameters?.docs?.source}}},Inactive.parameters={...Inactive.parameters,docs:{...Inactive.parameters?.docs,source:{originalSource:"{\n  args: {\n    status: 'inactive',\n    children: 'inactive'\n  },\n  name: 'Inactive'\n}",...Inactive.parameters?.docs?.source}}},Valid.parameters={...Valid.parameters,docs:{...Valid.parameters?.docs,source:{originalSource:"{\n  args: {\n    status: 'valid',\n    children: 'valid'\n  },\n  name: 'Valid'\n}",...Valid.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  args: {\n    status: 'invalid',\n    children: 'invalid'\n  },\n  name: 'Invalid'\n}",...Invalid.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Neutral","Success","Warning","Error","Safe","Danger","Active","Inactive","Valid","Invalid","DesignTokens"]},"./src/design-token-story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>designTokenStory});var _utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../documentation/components/ComponentTokensSection.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const designTokenStory=meta=>({args:{tokens:meta.parameters.tokens,definition:meta.parameters.tokensDefinition,component:meta.parameters.tokensPrefix},parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:""}},status:null},render:({tokens,definition,component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__.k,{tokens,definition,component})});try{designTokenStory.displayName="designTokenStory",designTokenStory.__docgenInfo={description:"",displayName:"designTokenStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/design-token-story.tsx#designTokenStory"]={docgenInfo:designTokenStory.__docgenInfo,name:"designTokenStory",path:"src/design-token-story.tsx#designTokenStory"})}catch(__react_docgen_typescript_loader_error){}}}]);