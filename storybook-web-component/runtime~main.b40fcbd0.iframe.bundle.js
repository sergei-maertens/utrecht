(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({39:"SpotlightSection-stories",255:"Alert-stories",289:"FormToggle-stories",390:"Textarea-stories",449:"PageContent-stories",520:"FormFieldTextarea-stories",796:"web-component-stories-mdx",1212:"NumberData-stories",1271:"Heading4-stories",1464:"IBANData-stories",1853:"Heading-stories",2134:"web-component-library-vue-stories-mdx",2201:"LogoButton-stories",2295:"CodeBlock-stories",2324:"Code-stories",2756:"Page-stories",2829:"FormFieldDescription-stories",2903:"BadgeStatus-stories",3674:"Icon-stories",3755:"PageHeader-stories",3917:"CustomCheckbox-stories",4066:"DataList-stories",4248:"EidasLogo-stories",4303:"BreadcrumbNav-stories",4643:"Surface-stories",4853:"Separator-stories",4900:"Mark-stories",4962:"Table-stories",5044:"FormFieldTextbox-stories",5322:"ColumnLayout-stories",5571:"web-component-library-react-stories-mdx",5706:"Iconset-stories",5847:"DigidLogo-stories",5897:"PageFooter-stories",5978:"FormFieldCheckbox-stories",6005:"BadgeData-stories",6130:"Article-stories",6278:"Emphasis-stories",6323:"Heading3-stories",6372:"LogoImage-stories",6463:"Button-stories",6730:"Textbox-stories",6845:"Document-stories",6869:"BadgeList-stories",6878:"Checkbox-stories",6883:"SideNav-stories",6886:"FormFieldErrorMessage-stories",7049:"Logo-stories",7124:"HTMLContent-stories",7171:"ButtonLink-stories",7302:"Backdrop-stories",7525:"URLData-stories",7589:"Link-stories",7818:"BadgeCounter-stories",7901:"MapMarker-stories",7990:"Heading2-stories",8071:"Paragraph-stories",8100:"Heading1-stories",8704:"ColorSample-stories",8765:"Heading6-stories",8912:"ButtonGroup-stories",8960:"Heading5-stories",9179:"web-component-library-angular-stories-mdx",9270:"DigidButton-stories",9443:"Pagination-stories",9479:"SkipLink-stories",9667:"EherkenningLogo-stories",9742:"LinkButton-stories",9851:"ContactCardTemplate-stories"}[chunkId]||chunkId)+"."+{35:"958e9fbc",39:"a8ceb4c5",73:"e886ae8f",97:"2ccd8c4a",164:"cf86dffa",210:"d99921dc",255:"399ac027",289:"3d425eef",317:"c145a0be",326:"e340bd96",380:"77b7e6f5",390:"2b1361a0",396:"09caa955",410:"f1fecfb3",417:"01660460",431:"b6808cc9",449:"eb2e4fcc",453:"073bf659",461:"a61ce752",520:"1baa82e7",608:"0a228811",609:"1ea0875d",616:"32eccb3d",645:"4608d856",717:"04334d98",746:"34df0b1f",776:"9755affd",795:"9ec242c4",796:"663b0ef5",804:"0715f65b",816:"4e8fe5da",861:"e807fb4c",967:"84c157db",997:"8a38c1da",1002:"ee2e348f",1127:"a1b3f9b5",1183:"6ade4683",1212:"3f7ffe4f",1223:"daeacb16",1233:"a62284be",1271:"e768911c",1290:"130b526a",1336:"795f4388",1397:"ef412b28",1464:"c10a1393",1477:"b8d20bfd",1542:"e3de92ee",1660:"e1019bf2",1793:"2a19f060",1795:"c32eef69",1805:"6d198e83",1830:"32df0932",1853:"c5fc74a8",1865:"5edac87b",1870:"2f2ad9f4",1884:"84896bc1",1897:"b0dc8ef8",1968:"c7f39cc0",1994:"f9a0aa9d",2058:"f70bfe04",2134:"a75adca7",2138:"52368c17",2184:"003e2a40",2201:"342b9135",2295:"edfe995d",2324:"e8a4d182",2399:"8505dbdd",2424:"00cbfeeb",2496:"89cc76aa",2520:"63f93f43",2549:"89fc8db9",2592:"432ac3fa",2756:"20f01591",2829:"921cd11a",2834:"31752bdc",2845:"30bab9d7",2868:"b429909a",2888:"f4032e12",2903:"3d5e4e6b",2904:"9ffb7d11",2906:"782dff86",2925:"a005c038",3001:"e6f28cc9",3030:"7e0722a7",3034:"f3499f33",3083:"da414f76",3148:"0599ffa6",3188:"124b8fcb",3345:"9235dde0",3376:"c07dca69",3456:"2a6ddc0d",3469:"63c5f40d",3493:"5661a67b",3537:"0901f316",3545:"616640be",3592:"ed476006",3593:"2be7b973",3634:"7257e11d",3655:"c5b41760",3674:"65da7f3f",3721:"09190471",3728:"ae46bd68",3732:"a7c8dcf4",3755:"3bb2fa64",3765:"0b9c43e5",3771:"75b3b40c",3775:"96ab6d99",3793:"72853fee",3822:"31de1680",3844:"d3f6b12a",3895:"f63c4894",3901:"2d61b103",3917:"ae4f4e5a",3918:"6363230c",3927:"f56ce854",3954:"148b25fd",4022:"f8db259e",4066:"4733123a",4141:"f5b23e8e",4160:"7661720d",4223:"4412c51c",4248:"ea8fe902",4284:"05b6f497",4299:"9165af9b",4303:"0b6e1aaa",4307:"9b0d1ad5",4329:"debb6253",4342:"7e27a99d",4351:"a3736f84",4384:"10248a80",4394:"eb0e194e",4402:"1eab632f",4404:"a7650ac2",4445:"dfe140b7",4468:"372ed0d7",4501:"470db0f0",4587:"fe5b2c71",4630:"1a20b4bf",4643:"f79dfe1c",4750:"550d17b2",4756:"5d9aa9bd",4758:"735864bb",4828:"49ab3540",4844:"d9822bde",4853:"38779cec",4881:"1d6f5073",4900:"2bc5471b",4951:"28f1f5f1",4952:"cbc1389c",4962:"33fb524e",4978:"39afb146",5019:"0faf4732",5044:"59b05767",5048:"19fb2712",5050:"792f7e16",5071:"1fe08625",5076:"0ee41196",5084:"b12b2043",5087:"e5612ef8",5117:"ff87ef12",5133:"94ee9896",5157:"a4465e55",5170:"2a023d65",5269:"da4c4881",5322:"0f0208ac",5324:"ecf655dd",5364:"f34dea14",5373:"ac3a6797",5420:"e02ba056",5433:"202b19e7",5439:"b5dccaf9",5512:"dbac2397",5546:"146d9f36",5569:"9ff53212",5571:"b506f2ea",5660:"46cf994c",5706:"31706906",5780:"3fb967c7",5788:"1a8681b0",5792:"2888b156",5803:"91987b62",5821:"db217bd7",5836:"027befe1",5841:"537825f6",5845:"294e6e2c",5847:"0630fb87",5897:"c690c0e7",5920:"03a30e0d",5978:"badd04ce",5982:"5bac7639",6005:"0b72eb54",6058:"d495ddd0",6063:"65560a38",6066:"48e83197",6092:"5df04b43",6093:"1d57f8ea",6100:"b43e66db",6130:"176f77a4",6176:"a914a77a",6196:"a83bd6fb",6278:"69217f13",6287:"ecc49eba",6323:"7632d8d3",6342:"8f2668dc",6366:"5641deb8",6372:"2b977580",6424:"69fb1f30",6450:"830c3a4b",6463:"ce2a4ee0",6466:"9a68cea7",6488:"4c168e2d",6500:"e32f59ec",6505:"984f7e71",6511:"f2f197dd",6517:"5096cd8a",6526:"0d563d0f",6540:"44ed06ce",6562:"2854adb4",6576:"c1b65dd3",6730:"7b2b3850",6797:"077950d5",6845:"e5f6eda2",6869:"c18247b3",6878:"97017b41",6883:"0dd16fe1",6886:"877e5282",6903:"ecbc9c01",6919:"3aec08b4",6962:"ea554ca6",6998:"693cd04c",7e3:"36a66f88",7002:"0c117203",7040:"40375ad2",7049:"c3de1d13",7098:"5afa7bfa",7122:"145ea03e",7124:"b05ec247",7125:"7834db0b",7167:"b74ec976",7171:"3d2ce4ec",7178:"e353d061",7269:"51e36580",7302:"b7eb5954",7374:"cced9987",7410:"1738f6e8",7457:"5edc400b",7525:"2aa9e678",7526:"7eb592f3",7573:"82fb2fa9",7576:"31b8e602",7589:"e64b34dc",7615:"872dc25e",7668:"d83fe4d4",7675:"3b8ead2c",7680:"365c2d0d",7735:"92d51579",7742:"3fa4a506",7751:"a8b692b0",7763:"b2db0a3d",7766:"19a0b752",7768:"791fd90a",7797:"948662c8",7818:"14b69248",7831:"ec5a9b00",7871:"1069ad97",7901:"76e08d2d",7939:"cd005629",7956:"0b866d49",7987:"19e2ca7e",7990:"46b56ab1",8e3:"dd5790db",8010:"b6b090ed",8071:"87096827",8088:"626b36ad",8100:"4f162124",8106:"d9067bdc",8188:"72f30ff7",8277:"9d0f1a68",8281:"b6a9c5be",8332:"30b3b36b",8392:"07c80feb",8393:"b0702235",8565:"5196eff0",8577:"f7a23639",8626:"f8868e12",8702:"3035de71",8704:"6bae8616",8765:"8c28e04c",8805:"9e139579",8807:"847b326b",8830:"bd305ab3",8852:"18648949",8854:"ab401848",8856:"84b4421b",8895:"f6ff7df3",8900:"8020a1ff",8912:"722bb995",8924:"7b2405ca",8960:"d6dc0bf3",8970:"f2b8fddc",9001:"3865079d",9024:"f13e6e20",9074:"679e9266",9119:"5dceb380",9127:"2853decd",9177:"a9e93ee4",9179:"9ed2fada",9194:"1e79f14a",9234:"83b1dcbc",9270:"912ef183",9276:"089d57f5",9347:"608ced1f",9370:"dc26b1ef",9377:"0fe0a875",9443:"9e6c2ac2",9479:"bc192c2c",9500:"96542f19",9527:"862fb788",9545:"c941b9ec",9630:"e2434064",9667:"a85e4d88",9706:"9d5ccdc4",9742:"381f3cbc",9838:"84e4e06c",9851:"365b1f7d",9901:"df39f646",9970:"bef4103c",9999:"a3e6e181"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@utrecht/storybook-web-component:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@utrecht/storybook-web-component:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();