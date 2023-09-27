(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({39:"SpotlightSection-stories",255:"Alert-stories",289:"FormToggle-stories",390:"Textarea-stories",449:"PageContent-stories",520:"FormFieldTextarea-stories",796:"web-component-stories-mdx",1271:"Heading4-stories",1464:"IBANData-stories",1853:"Heading-stories",2134:"web-component-library-vue-stories-mdx",2201:"LogoButton-stories",2295:"CodeBlock-stories",2324:"Code-stories",2756:"Page-stories",2829:"FormFieldDescription-stories",2903:"BadgeStatus-stories",3674:"Icon-stories",3755:"PageHeader-stories",3917:"CustomCheckbox-stories",4248:"EidasLogo-stories",4303:"BreadcrumbNav-stories",4643:"Surface-stories",4853:"Separator-stories",4900:"Mark-stories",4962:"Table-stories",5044:"FormFieldTextbox-stories",5571:"web-component-library-react-stories-mdx",5706:"Iconset-stories",5847:"DigidLogo-stories",5897:"PageFooter-stories",5978:"FormFieldCheckbox-stories",6005:"BadgeData-stories",6130:"Article-stories",6278:"Emphasis-stories",6323:"Heading3-stories",6463:"Button-stories",6730:"Textbox-stories",6810:"URLValue-stories",6845:"Document-stories",6869:"BadgeList-stories",6878:"Checkbox-stories",6883:"SideNav-stories",7049:"Logo-stories",7124:"HTMLContent-stories",7171:"ButtonLink-stories",7302:"Backdrop-stories",7589:"Link-stories",7818:"BadgeCounter-stories",7901:"MapMarker-stories",7990:"Heading2-stories",8071:"Paragraph-stories",8100:"Heading1-stories",8704:"ColorSample-stories",8765:"Heading6-stories",8912:"ButtonGroup-stories",8960:"Heading5-stories",9179:"web-component-library-angular-stories-mdx",9270:"DigidButton-stories",9443:"Pagination-stories",9476:"NumberValue-stories",9479:"SkipLink-stories",9667:"EherkenningLogo-stories",9742:"LinkButton-stories",9851:"ContactCardTemplate-stories"}[chunkId]||chunkId)+"."+{35:"6e6af8c1",39:"a8ceb4c5",73:"9f0eea99",97:"d82231da",164:"64b8700d",210:"847cb895",255:"399ac027",289:"3d425eef",317:"48f6e37d",326:"9c3f03b0",380:"77b7e6f5",390:"2b1361a0",396:"09caa955",410:"7156f8ce",417:"01660460",431:"1391eba6",449:"eb2e4fcc",453:"035cd319",461:"a61ce752",520:"1baa82e7",608:"b6397f6c",609:"70dfba8b",616:"41dc8b83",645:"5af83dc7",717:"c3672e07",746:"34df0b1f",776:"74862f71",795:"e41a8629",796:"663b0ef5",804:"44a8f024",816:"9a1223ff",861:"e807fb4c",967:"c209807b",997:"801b0140",1002:"311a685b",1127:"483910d7",1183:"17df7bc1",1223:"9f000995",1233:"6c6ab7aa",1271:"e768911c",1290:"4e92b802",1336:"cd55525c",1397:"ef412b28",1464:"c10a1393",1477:"2c64b95b",1542:"ba948b9a",1660:"40adc260",1793:"3830fda4",1795:"8645d383",1805:"f1d8806e",1830:"98562ae0",1853:"c5fc74a8",1865:"c4e7c33d",1870:"07155d46",1884:"83922bcf",1897:"65ce3f03",1968:"0dbb9223",1994:"91b5f2d9",2058:"d81441a4",2134:"a75adca7",2138:"5814713a",2184:"003e2a40",2201:"342b9135",2295:"edfe995d",2324:"e8a4d182",2399:"47633820",2424:"7950e363",2496:"3000f902",2549:"89fc8db9",2756:"20f01591",2829:"921cd11a",2834:"ba6d81f1",2845:"0458ca95",2868:"4a5ea66d",2888:"a633b785",2903:"3d5e4e6b",2904:"9ffb7d11",2906:"c2488b61",2925:"a005c038",3001:"9364f6d8",3030:"22c45bd4",3034:"f3499f33",3083:"99cf4db3",3148:"0a017549",3188:"45a4084a",3345:"9235dde0",3376:"7adfdbe9",3456:"2a6ddc0d",3469:"f50c64a0",3493:"cfbbfd54",3537:"24d1d6eb",3545:"7ce015aa",3592:"0905e30f",3593:"898c30b9",3634:"43454586",3655:"c5b41760",3674:"65da7f3f",3721:"f7222522",3728:"f1a2865b",3732:"a415d9a4",3755:"3bb2fa64",3765:"d5fec62a",3775:"b99605bc",3793:"3030a6d1",3844:"a5470d7e",3895:"0814e72b",3901:"e45ca7d2",3917:"ae4f4e5a",3918:"23653c3b",3927:"cf81f438",3954:"6097e0b1",4022:"74342aca",4141:"ce1374ac",4160:"749ebc14",4223:"da158235",4248:"ea8fe902",4299:"f1973bc7",4303:"82cf4587",4307:"0ddf560b",4329:"69cba9f6",4342:"600c432a",4351:"72726933",4384:"b4843724",4394:"840bd4bd",4402:"d16b0688",4404:"a7650ac2",4445:"dfe140b7",4501:"33e80562",4587:"fe5b2c71",4630:"53d52ceb",4643:"f79dfe1c",4750:"550d17b2",4756:"23848c0f",4758:"df6c96f1",4828:"6ca04971",4844:"3e537438",4853:"38779cec",4881:"5b19c350",4900:"2bc5471b",4951:"38b283d4",4952:"8d3d6d54",4962:"33fb524e",4978:"f84509f6",5044:"59b05767",5048:"a6ad4bc6",5050:"36b0bb9f",5071:"0987e2f1",5076:"0ee41196",5084:"dbe60c5c",5087:"97e7046b",5117:"871e9831",5133:"3f851dc0",5157:"73726ebb",5170:"2a023d65",5269:"1942c8f3",5324:"37dee268",5364:"8b98373e",5373:"c42cb6fd",5420:"5f831175",5433:"202b19e7",5439:"5fad9def",5512:"3ea58529",5546:"8db302f0",5569:"cfa283b3",5571:"b506f2ea",5660:"6bf22ee5",5706:"31706906",5780:"6b6c784c",5788:"78309636",5792:"708b0609",5803:"4fbfbb38",5821:"db968c63",5836:"d722e38a",5841:"c4e7ee64",5845:"7472b5c0",5847:"0630fb87",5897:"c690c0e7",5920:"6ed99643",5978:"badd04ce",5982:"6a71b4ac",6005:"0b72eb54",6058:"57c91109",6063:"65560a38",6092:"5df04b43",6093:"7bcfa0f2",6100:"eb068d98",6130:"176f77a4",6176:"b86fa3de",6196:"ac5f4a13",6278:"69217f13",6287:"7596398d",6323:"7632d8d3",6342:"8f2668dc",6366:"5641deb8",6424:"58e6acc6",6450:"18cefd8c",6463:"ce2a4ee0",6466:"b3ff2cbc",6488:"2a638b2f",6500:"e615b064",6505:"b6908f49",6511:"1d3613ae",6517:"181300e6",6526:"2a7a6ae7",6540:"da20ee19",6562:"1ba8499d",6576:"c1b65dd3",6730:"28d6befa",6797:"077950d5",6810:"c5d24a0f",6845:"e5f6eda2",6869:"c18247b3",6878:"97017b41",6883:"0dd16fe1",6903:"a7151cc2",6919:"d70c5432",6962:"51145ae1",6998:"5af1eb50",7e3:"3ceb6bc8",7040:"f6f79fc9",7049:"5ade23b1",7098:"3b0ff51a",7122:"81cedaf9",7124:"b05ec247",7167:"ff7e4c7b",7171:"3d2ce4ec",7178:"2130b377",7269:"3a739997",7302:"b7eb5954",7374:"e4141c4b",7410:"1738f6e8",7457:"9ab78097",7526:"7eb592f3",7573:"b70abe30",7576:"5d210b78",7589:"e64b34dc",7615:"1aa43654",7668:"79d05ea4",7675:"f12d3da6",7680:"1e883dc4",7735:"89a12cd6",7742:"e318e188",7751:"a8b692b0",7763:"5e4d505c",7766:"2115906b",7768:"2905d5ae",7818:"14b69248",7831:"6fbaebbe",7871:"0eab1d68",7901:"76e08d2d",7939:"f5bfc361",7956:"9d96163a",7987:"890976ce",7990:"46b56ab1",8e3:"39c40443",8010:"b6b090ed",8071:"87096827",8084:"373e6aae",8088:"626b36ad",8100:"4f162124",8106:"95d87dfa",8188:"f5d7133b",8277:"d599c84a",8332:"4744df67",8392:"654335e3",8393:"16a35ef2",8565:"d59abe46",8577:"31032d79",8626:"5c398066",8702:"c8d923dd",8704:"6bae8616",8765:"8c28e04c",8795:"54bfae7e",8805:"8dd8bc55",8807:"4ea60931",8830:"4036063c",8852:"6a04275d",8854:"e02d4600",8856:"3e19ff6d",8895:"55bcbf1a",8900:"bd9c3b33",8912:"722bb995",8924:"137b24d8",8960:"d6dc0bf3",8970:"f2b8fddc",9001:"73812abc",9024:"ddbc0fdc",9074:"679e9266",9119:"64a1d94b",9127:"9d4a830b",9177:"a2465802",9179:"9ed2fada",9234:"bf600c21",9270:"912ef183",9276:"c6a2c836",9347:"0fd5a45f",9370:"4d868bd1",9377:"4e8cef34",9443:"9e6c2ac2",9476:"2e591c1d",9479:"bc192c2c",9500:"d1457183",9527:"c788e346",9545:"3df7dfd8",9630:"da225818",9667:"a85e4d88",9706:"44cf00eb",9742:"381f3cbc",9838:"4ab6d49e",9851:"365b1f7d",9901:"cc8ad8f8",9970:"c02ba16d",9999:"059ed23a"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@utrecht/storybook-web-component:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@utrecht/storybook-web-component:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();