"use strict";(self.webpackChunk_utrecht_storybook_css=self.webpackChunk_utrecht_storybook_css||[]).push([[9553],{"../web-component-library-react/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IEm:()=>UtrechtIconChevronRight,Qkd:()=>UtrechtIconChevronLeft,ml:()=>UtrechtIconDakloos});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/typeof.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createClass.js"),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/inherits.js"),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_utrecht_web_component_library_stencil_loader__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/regenerator/index.js"),__webpack_require__("../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),__webpack_require__("../web-component-library-stencil/loader/index.js")),camelToDashCase=function camelToDashCase(str){return str.replace(/([A-Z])/g,(function(m){return"-".concat(m[0].toLowerCase())}))},getClassName=function getClassName(classList,newProps,oldProps){var newClassProp=newProps.className||newProps.class,oldClassProp=oldProps.className||oldProps.class,currentClasses=arrayToMap(classList),incomingPropClasses=arrayToMap(newClassProp?newClassProp.split(" "):[]),oldPropClasses=arrayToMap(oldClassProp?oldClassProp.split(" "):[]),finalClassNames=[];return currentClasses.forEach((function(currentClass){incomingPropClasses.has(currentClass)?(finalClassNames.push(currentClass),incomingPropClasses.delete(currentClass)):oldPropClasses.has(currentClass)||finalClassNames.push(currentClass)})),incomingPropClasses.forEach((function(s){return finalClassNames.push(s)})),finalClassNames.join(" ")},isCoveredByReact=function isCoveredByReact(eventNameSuffix){if("undefined"==typeof document)return!0;var eventName="on"+function transformReactEventName(eventNameSuffix){return"doubleclick"===eventNameSuffix?"dblclick":eventNameSuffix}(eventNameSuffix),isSupported=eventName in document;if(!isSupported){var element=document.createElement("div");element.setAttribute(eventName,"return;"),isSupported="function"==typeof element[eventName]}return isSupported},syncEvent=function syncEvent(node,eventName,newEventHandler){var eventStore=node.__events||(node.__events={}),oldEventHandler=eventStore[eventName];oldEventHandler&&node.removeEventListener(eventName,oldEventHandler),node.addEventListener(eventName,eventStore[eventName]=function handler(e){newEventHandler&&newEventHandler.call(this,e)})},arrayToMap=function arrayToMap(arr){var map=new Map;return arr.forEach((function(s){return map.set(s,s)})),map};function ownKeys$1(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread$1(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys$1(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys$1(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var mergeRefs=function mergeRefs(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(value){refs.forEach((function(ref){!function setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,value)}))}},_excluded=["children","forwardedRef","style","className","ref"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.Z)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.Z)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__.Z)(this,result)}}var createReactComponent=function createReactComponent(tagName,ReactComponentContext,manipulatePropsFunction,defineCustomElement){void 0!==defineCustomElement&&defineCustomElement();var displayName=function dashToPascalCase(str){return str.toLowerCase().split("-").map((function(segment){return segment.charAt(0).toUpperCase()+segment.slice(1)})).join("")}(tagName),ReactComponent=function(_React$Component){(0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__.Z)(ReactComponent,_React$Component);var _super=_createSuper(ReactComponent);function ReactComponent(props){var _this;return(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__.Z)(this,ReactComponent),(_this=_super.call(this,props)).setComponentElRef=function(element){_this.componentEl=element},_this}return(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__.Z)(ReactComponent,[{key:"componentDidMount",value:function componentDidMount(){this.componentDidUpdate(this.props)}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){!function attachProps(node,newProps){var oldProps=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(node instanceof Element){var className=getClassName(node.classList,newProps,oldProps);""!==className&&(node.className=className),Object.keys(newProps).forEach((function(name){if("children"!==name&&"style"!==name&&"ref"!==name&&"class"!==name&&"className"!==name&&"forwardedRef"!==name)if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){var eventName=name.substring(2),eventNameLc=eventName[0].toLowerCase()+eventName.substring(1);isCoveredByReact(eventNameLc)||syncEvent(node,eventNameLc,newProps[name])}else node[name]=newProps[name],"string"===(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4__.Z)(newProps[name])&&node.setAttribute(camelToDashCase(name),newProps[name])}))}}(this.componentEl,this.props,prevProps)}},{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,forwardedRef=_this$props.forwardedRef,style=_this$props.style;_this$props.className,_this$props.ref;var cProps=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_11__.Z)(_this$props,_excluded),propsToPass=Object.keys(cProps).reduce((function(acc,name){var value=cProps[name];if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){var eventName=name.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(eventName)&&(acc[name]=value)}else{var type=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4__.Z)(value);"string"!==type&&"boolean"!==type&&"number"!==type||(acc[camelToDashCase(name)]=value)}return acc}),{});manipulatePropsFunction&&(propsToPass=manipulatePropsFunction(this.props,propsToPass));var newProps=_objectSpread(_objectSpread({},propsToPass),{},{ref:mergeRefs(forwardedRef,this.setComponentElRef),style});return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tagName,newProps,children)}}],[{key:"displayName",get:function get(){return displayName}}]),ReactComponent}(react__WEBPACK_IMPORTED_MODULE_0__.Component);return ReactComponentContext&&(ReactComponent.contextType=ReactComponentContext),function createForwardRef(ReactComponent,displayName){var forwardRef=function forwardRef(props,ref){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReactComponent,_objectSpread$1(_objectSpread$1({},props),{},{forwardedRef:ref}))};return forwardRef.displayName=displayName,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(forwardRef)}(ReactComponent,displayName)};(0,_utrecht_web_component_library_stencil_loader__WEBPACK_IMPORTED_MODULE_3__.q4)();var UtrechtIconChevronLeft=createReactComponent("utrecht-icon-chevron-left"),UtrechtIconChevronRight=createReactComponent("utrecht-icon-chevron-right"),UtrechtIconDakloos=createReactComponent("utrecht-icon-dakloos")},"../../components/breadcrumb/README.md?raw":module=>{module.exports='\x3c!-- @license CC0-1.0 --\x3e\n\n# Breadcrumb navigation\n\nBreadcrumb navigation, ook wel "kruimelpad" genoemd, gebruik je als de pagina\'s van je site georganiseerd zijn in een boomstructuur. Als je site teveel pagina\'s heeft om naar elke pagina een link te maken op de homepage bijvoorbeeld. De eerste link is altijd naar de homepage.\n\nHet kruimelpad moet alleen links bevatten naar hogere niveau\'s of eerdere stappen. De pagina zelf is niet onderdeel van het kruimelpad. Gebruik geen breadcrumb navigation op de homepage, want die heeft geen hogere niveaus.\n\n## HTML\n\nGebruik een `nav` element, want het is handig dat het kruimelpad een _navigation landmark_ is. Het kruimelpad is zelden de enige _navigation landmark_ op de pagina en landmarks moeten wel duidelijk te onderscheiden zijn. Gebruik daarom `aria-label` of `aria-labelledby` met een duidelijk label.\n\nGebruik een heading element met `aria-labelledby`, zodat het label zichtbaar is wanneer de CSS niet geladen kan worden. Zonder stijl is het kruimelpad niet duidelijk herkenbaar, dan maakt de heading dat duidelijk.\n\nDe _breadcrumb navigation_ is niet een onderdeel dat opgezocht wordt via heading navigatie van een _screen reader_. Verberg de heading met `aria-hidden="true"` zodat de headings uit de main content sneller te vinden zijn.\n\nBijvoorbeeld:\n\n```html\n<nav aria-labelledby="breadcrumb-heading">\n  <h2 id="breadcrumb-heading" aria-hidden="true">Kruimelpad</h2>\n  ...kruimelpad...\n</nav>\n```\n\nGebruik `rel` om duidelijk te maken wat het doel is van de links. ([WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)). Gebruik [`rel="home"`](https://microformats.org/wiki/rel-home) voor de link naar de homepage (deze relatie is nog slechts een voorstel). Gebruik [`rel="up"`](https://microformats.org/wiki/rel-up) voor pagina\'s die één niveau hoger zijn in een hierarchie. Gebruik `rel="first"` voor de eerste pagina in een serie.\n\n## Hoe het niet moet\n\n### Navigatie in de verkeerde _landmark_\n\nPlaats het `<nav>` HTML-element met de breadcrumb navigation niet binnen de _main page content_, ofwel het `<main>` HTML-element.\n\nNiet:\n\n```html\n<main>\n  <nav class="breadcrumbs">\n    <a href="/">Home</a> /\n    <a href="/contact" aria-current="page">Contact</a>\n  </nav>\n  <h1>Contact</h1>\n</main>\n```\n\nWel:\n\n```html\n<nav class="breadcrumbs">\n  <a href="/">Home</a> /\n  <a href="/contact" aria-current="page">Contact</a>\n</nav>\n<main>\n  <h1>Contact</h1>\n</main>\n```\n\n## Related info\n\n- [Google Search Central - Advanced SEO - Breadcrumb](https://developers.google.com/search/docs/data-types/breadcrumb)\n- [Homepage Links Remain a Necessity — Nielsen Norman Group](https://www.nngroup.com/articles/homepage-links/)\n- [Breadcrumbs — Adobe Spectrum Design System](https://spectrum.adobe.com/page/breadcrumbs/)\n- [Exploring Markup for Breadcrumbs — Chris Coyier](https://css-tricks.com/markup-for-breadcrumbs/)\n\n## Relevante WCAG regels\n\n- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): gebruik het `<nav>` element voor de `navigation` landmark role.\n- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)\n- [WCAG eis 2.4.5](https://www.w3.org/TR/WCAG21/#multiple-ways)\n- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de `navigation` landmark maakt duidelijk dat het om het broodkruimelpad gaat. Zie ook: [Using `aria-label` to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5).\n- [WCAG eis 2.4.8](https://www.w3.org/TR/WCAG21/#location):\n  - gebruik `<a aria-current="location">` om de huidige pagina te markeren\n  - een kruimelpad is een manier om duidelijk te maken waar de gebruiker zich bevind in de context van een site met meerdere pagina\'s.\n'},"../../components/breadcrumb/_rel.md?raw":module=>{module.exports='\x3c!-- @license CC0-1.0 --\x3e\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nStel je voor: je hebt _breacrumb navigation_ op de derde pagina met zoekresultaten voor “openingstijden zwembad”.\nDe huidige URL is `https://example.com/search?q=openingstijden+zwembad?page=3`.\nDan kan het handig zijn om terug te gaan naar de eerste pagina van de zoekresultaten.\nHet kan ook handig zijn om terug te gaan naar de zoekpagina, om andere zoektermen te kiezen.\n\n- **Home**: `rel="home"`\n- **Zoeken**: `rel="up"`\n- **Pagina 1** van “openingstijden zwembad”: `rel="first"`\n'},"../../components/breadcrumb/_rtl-separator.md?raw":module=>{module.exports="\x3c!-- @license CC0-1.0 --\x3e\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nIn _right-to-left_ pagina's wijzen de iconen van pijltjes ook in de tekstrichting, dus ook van rechts naar links. Arrow of chevron iconen worden dan gespiegeld ten opzichte van _left-to-right_ pagina's.\n"},"../../components/breadcrumb/tokens.json":module=>{module.exports=JSON.parse('{"utrecht":{"breadcrumb":{"min-block-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"font-family":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true}}},"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"text-transform":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"inherit | none | uppercase","inherits":true}}},"item":{"padding-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}},"link":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"focus":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"current":{"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}}}},"disabled":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}},"separator":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"inline-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"icon":{"size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}}},"arrows":{"link":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"focus":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}}}}}}')}}]);