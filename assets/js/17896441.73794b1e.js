"use strict";(self.webpackChunkmhira_docs=self.webpackChunkmhira_docs||[]).push([[7918],{6487:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),l=a(7294),r=a(2802),s=a(8596),c=a(5281);const o={breadcrumbsContainer:"breadcrumbsContainer_Xlws",breadcrumbHomeIcon:"breadcrumbHomeIcon_kU5B"};var i=a(6010),d=a(9960),m=a(4996),u=a(5999);function b(e){return l.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function p(e){let{children:t,href:a,isLast:n}=e;const r="breadcrumbs__link";return n?l.createElement("span",{className:r,itemProp:"name"},t):a?l.createElement(d.Z,{className:r,href:a,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function h(e){let{children:t,active:a,index:r,addMicrodata:s}=e;return l.createElement("li",(0,n.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,l.createElement("meta",{itemProp:"position",content:String(r+1)}))}function E(){const e=(0,m.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(d.Z,{"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,i.Z)("breadcrumbs__link",o.breadcrumbsItemLink),href:e},l.createElement(b,{className:o.breadcrumbHomeIcon})))}function v(){const e=(0,r.s1)(),t=(0,s.Ns)();return e?l.createElement("nav",{className:(0,i.Z)(c.k.docs.docBreadcrumbs,o.breadcrumbsContainer),"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(E,null),e.map(((t,a)=>{const n=a===e.length-1;return l.createElement(h,{key:a,active:n,index:a,addMicrodata:!!t.href},l.createElement(p,{href:t.href,isLast:n},t.label))})))):null}},8614:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Q});var n=a(7294),l=a(6010),r=a(5214),s=a(4474),c=a(7597),o=a(5999),i=a(5281);function d(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function m(e){let{lastUpdatedBy:t}=e;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function u(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:i.k.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(d,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(m,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var b=a(7462);const p="iconEdit_dcUD";function h(e){let{className:t,...a}=e;return n.createElement("svg",(0,b.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(p,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function E(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:i.k.common.editThisPage},n.createElement(h,null),n.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var v=a(9960);const g="tag_hD8n",f="tagRegular_D6E_",Z="tagWithCount_i0QQ";function N(e){let{permalink:t,label:a,count:r}=e;return n.createElement(v.Z,{href:t,className:(0,l.Z)(g,r?Z:f)},a,r&&n.createElement("span",null,r))}const _="tags_XVD_",L="tag_JSN8";function k(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(_,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:L},n.createElement(N,{label:t,permalink:a}))}))))}const T="lastUpdated_foO9";function U(e){return n.createElement("div",{className:(0,l.Z)(i.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(k,e)))}function w(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:(0,l.Z)(i.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(E,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",T)},(a||r)&&n.createElement(u,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function y(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:s,formattedLastUpdatedAt:c,lastUpdatedBy:o,tags:d}=a,m=d.length>0,u=!!(r||s||o);return m||u?n.createElement("footer",{className:(0,l.Z)(i.k.docs.docFooter,"docusaurus-mt-lg")},m&&n.createElement(U,{tags:d}),u&&n.createElement(w,{editUrl:r,lastUpdatedAt:s,lastUpdatedBy:o,formattedLastUpdatedAt:c})):null}var C=a(1575),A=a(6043);const B="tocCollapsible_bZGK",x="tocCollapsibleContent_NNA8",I="tocCollapsibleExpanded_IqtF";var M=a(721);const D="tocCollapsibleButton_l22C",H="tocCollapsibleButtonExpanded_KeTX";function V(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,b.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",D,!t&&H,a.className)}),n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}function S(e){let{toc:t,className:a,minHeadingLevel:r,maxHeadingLevel:s}=e;const{collapsed:c,toggleCollapsed:o}=(0,A.u)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(B,!c&&I,a)},n.createElement(V,{collapsed:c,onClick:o}),n.createElement(A.z,{lazy:!0,className:x,collapsed:c},n.createElement(M.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var P=a(9649);const F="docItemContainer_vinB",R="docItemCol_DM6M",z="tocMobile_TmEX";var O=a(1944),X=a(7524),q=a(6487),J=a(5290);function G(e){const{content:t}=e,{metadata:a,frontMatter:l,assets:r}=t,{keywords:s}=l,{description:c,title:o}=a,i=r.image??l.image;return n.createElement(O.d,{title:o,description:c,keywords:s,image:i})}function K(e){const{content:t}=e,{metadata:a,frontMatter:o}=t,{hide_title:d,hide_table_of_contents:m,toc_min_heading_level:u,toc_max_heading_level:b}=o,{title:p}=a,h=!d&&void 0===t.contentTitle,E=(0,X.i)(),v=!m&&t.toc&&t.toc.length>0,g=v&&("desktop"===E||"ssr"===E);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!m&&R)},n.createElement(s.Z,null),n.createElement("div",{className:F},n.createElement("article",null,n.createElement(q.Z,null),n.createElement(c.Z,null),v&&n.createElement(S,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:b,className:(0,l.Z)(i.k.docs.docTocMobile,z)}),n.createElement("div",{className:(0,l.Z)(i.k.docs.docMarkdown,"markdown")},h&&n.createElement("header",null,n.createElement(P.Z,{as:"h1"},p)),n.createElement(J.Z,null,n.createElement(t,null))),n.createElement(y,e)),n.createElement(r.Z,{previous:a.previous,next:a.next}))),g&&n.createElement("div",{className:"col col--3"},n.createElement(C.Z,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:b,className:i.k.docs.docTocDesktop})))}function Q(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`;return n.createElement(O.FG,{className:t},n.createElement(G,e),n.createElement(K,e))}},5214:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7462),l=a(7294),r=a(5999),s=a(6010),c=a(9960);function o(e){const{permalink:t,title:a,subLabel:n,isNext:r}=e;return l.createElement(c.Z,{className:(0,s.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}function i(e){const{previous:t,next:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(o,(0,n.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&l.createElement(o,(0,n.Z)({},a,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},7597:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(5999),r=a(4477),s=a(5281),c=a(6010);function o(e){let{className:t}=e;const a=(0,r.E)();return a.badge?n.createElement("span",{className:(0,c.Z)(t,s.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},4474:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(7294),l=a(2263),r=a(9960),s=a(5999),c=a(5551),o=a(373),i=a(5281),d=a(4477),m=a(6010);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:r}}=(0,l.Z)(),{pluginId:s}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,o.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:h}=(0,c.Jo)(s),E=u??(v=h).docs.find((e=>e.id===v.mainDocId));var v;return n.createElement("div",{className:(0,m.Z)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:r,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:h.label,to:E.path,onClick:()=>d(h.name)})))}function E(e){let{className:t}=e;const a=(0,d.E)();return a.banner?n.createElement(h,{className:t,versionMetadata:a}):null}}}]);