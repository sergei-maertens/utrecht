"use strict";(self.webpackChunk_utrecht_docusaurus=self.webpackChunk_utrecht_docusaurus||[]).push([[621],{621:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Le});var a=n(2784),l=n(8162),r=n(6335);const s=a.createContext(null);function o(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(s.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(s);if(null===e)throw new r.i6("DocProvider");return e}function i(){var e;const{metadata:t,frontMatter:n,assets:r}=c();return a.createElement(l.d,{title:t.title,description:t.description,keywords:n.keywords,image:null!=(e=r.image)?e:n.image})}var d=n(6277),m=n(7963),u=n(7896),v=n(1077),h=n(9817);function b(e){const{permalink:t,title:n,subLabel:l,isNext:r}=e;return a.createElement(h.Z,{className:(0,d.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}function p(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(b,(0,u.Z)({},t,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(b,(0,u.Z)({},n,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function f(){const{metadata:e}=c();return a.createElement(p,{previous:e.previous,next:e.next})}var E=n(7614),g=n(1215),L=n(211),N=n(7949),_=n(5663);const k={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function Z(e){const t=k[e.versionMetadata.banner];return a.createElement(t,e)}function C(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(h.Z,{to:n,onClick:l},a.createElement(v.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function T(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,E.Z)(),{pluginId:r}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:s}=(0,N.J)(r),{latestDocSuggestion:o,latestVersionSuggestion:c}=(0,g.Jo)(r),i=null!=o?o:(m=c).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.Z)(t,L.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(Z,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(C,{versionLabel:c.label,to:i.path,onClick:()=>s(c.name)})))}function x(e){let{className:t}=e;const n=(0,_.E)();return n.banner?a.createElement(T,{className:t,versionMetadata:n}):null}function H(e){let{className:t}=e;const n=(0,_.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,L.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function y(e){let{lastUpdatedBy:t}=e;return a.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:L.k.common.lastUpdated},a.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(U,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(y,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const w="iconEdit_UohW";function M(e){let{className:t,...n}=e;return a.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(w,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function I(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:L.k.common.editThisPage},a.createElement(M,null),a.createElement(v.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const B="tag_qE9H",S="tagRegular_aHXt",O="tagWithCount_UC8q";function P(e){let{permalink:t,label:n,count:l}=e;return a.createElement(h.Z,{href:t,className:(0,d.Z)(B,l?O:S)},n,l&&a.createElement("span",null,l))}const V="tags_q74f",D="tag_lSC7";function R(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(v.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,d.Z)(V,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:D},a.createElement(P,{label:t,permalink:n}))}))))}const q="lastUpdated_T23F";function z(e){return a.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(R,e)))}function F(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(I,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",q)},(n||l)&&a.createElement(A,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function j(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:s}=e,o=s.length>0,i=!!(t||n||r);return o||i?a.createElement("footer",{className:(0,d.Z)(L.k.docs.docFooter,"docusaurus-mt-lg")},o&&a.createElement(z,{tags:s}),i&&a.createElement(F,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var J=n(8698),Y=n(6986);const Q="tocCollapsibleButton_htYj",W="tocCollapsibleButtonExpanded_pAh7";function G(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",Q,!t&&W,n.className)}),a.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const X="tocCollapsible_O_Qc",K="tocCollapsibleContent_SlnY",$="tocCollapsibleExpanded_klrc";function ee(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:s,toggleCollapsed:o}=(0,J.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(X,!s&&$,n)},a.createElement(G,{collapsed:s,onClick:o}),a.createElement(J.z,{lazy:!0,className:K,collapsed:s},a.createElement(Y.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const te="tocMobile_tjDr";function ne(){const{toc:e,frontMatter:t}=c();return a.createElement(ee,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(L.k.docs.docTocMobile,te)})}var ae=n(8188);function le(){const{toc:e,frontMatter:t}=c();return a.createElement(ae.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:L.k.docs.docTocDesktop})}var re=n(3109),se=n(5480);function oe(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(L.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(re.Z,{as:"h1"},n)),a.createElement(se.Z,null,t))}var ce=n(8350),ie=n(7661),de=n(77);function me(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const ue={breadcrumbsContainer:"breadcrumbsContainer_zCmv",breadcrumbHomeIcon:"breadcrumbHomeIcon_tMMf"};function ve(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(h.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function he(e){let{children:t,active:n,index:l,addMicrodata:r}=e;return a.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function be(){const e=(0,de.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(h.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",ue.breadcrumbsItemLink),href:e},a.createElement(me,{className:ue.breadcrumbHomeIcon})))}function pe(){const e=(0,ce.s1)(),t=(0,ie.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(L.k.docs.docBreadcrumbs,ue.breadcrumbsContainer),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(be,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(he,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(ve,{href:t.href,isLast:l},t.label))})))):null}const fe="docItemContainer_Rv5Z",Ee="docItemCol_YAwJ";function ge(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(ne,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(le,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&Ee)},a.createElement(x,null),a.createElement("div",{className:fe},a.createElement("article",null,a.createElement(pe,null),a.createElement(H,null),n.mobile,a.createElement(oe,null,t),a.createElement(j,null)),a.createElement(f,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function Le(e){const t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return a.createElement(o,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(i,null),a.createElement(ge,null,a.createElement(n,null))))}},5480:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(2784),l=n(876),r=n(821);function s(e){let{children:t}=e;return a.createElement(l.Zo,{components:r.Z},t)}},8188:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7896),l=n(2784),r=n(6277),s=n(6986);const o="tableOfContents_TN1Q";function c(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar",t)},l.createElement(s.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},6986:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7896),l=n(2784),r=n(7683);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function i(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>c(e).top>=a));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:s}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),c=i(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const v=l.memo(u);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u,...h}=e;const b=(0,r.L)(),p=null!=d?d:b.tableOfContents.minHeadingLevel,f=null!=u?u:b.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>o({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:f});return m((0,l.useMemo)((()=>{if(c&&i)return{linkClassName:c,linkActiveClassName:i,minHeadingLevel:p,maxHeadingLevel:f}}),[c,i,p,f])),l.createElement(v,(0,a.Z)({toc:E,className:n,linkClassName:c},h))}},5663:(e,t,n)=>{n.d(t,{E:()=>o,q:()=>s});var a=n(2784),l=n(6335);const r=a.createContext(null);function s(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function o(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);