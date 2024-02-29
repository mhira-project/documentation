"use strict";(self.webpackChunkmhira_docs=self.webpackChunkmhira_docs||[]).push([[6356],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(r),u=a,f=p["".concat(d,".").concat(u)]||p[u]||c[u]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4935:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:0},o="Overview",s={unversionedId:"guide-for-admins/overview",id:"guide-for-admins/overview",title:"Overview",description:"The following actions need to be taken by the admin to setup MHIRA.",source:"@site/docs/3-guide-for-admins/0-overview.md",sourceDirName:"3-guide-for-admins",slug:"/guide-for-admins/overview",permalink:"/docs/guide-for-admins/overview",draft:!1,editUrl:"https://github.com/mhira-project/documentation/edit/main/docs/3-guide-for-admins/0-overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Guide for admins",permalink:"/docs/category/guide-for-admins"},next:{title:"Superadmin",permalink:"/docs/guide-for-admins/superadmin"}},d={},l=[],m={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The following actions need to be taken by the admin to setup MHIRA."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Make sure to complete the setup before allowing access to non-admin users. "))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Access MHIRA with the ",(0,a.kt)("a",{parentName:"li",href:"/docs/guide-for-admins/superadmin"},"superadmin")," account."),(0,a.kt)("li",{parentName:"ol"},"Create ",(0,a.kt)("a",{parentName:"li",href:"/docs/guide-for-admins/roles"},"roles"),"."),(0,a.kt)("li",{parentName:"ol"},"Link ",(0,a.kt)("a",{parentName:"li",href:"/docs/guide-for-admins/permissions"},"permissions")," to the user roles."),(0,a.kt)("li",{parentName:"ol"},"Create ",(0,a.kt)("a",{parentName:"li",href:"/docs/guide-for-admins/departments"},"departments"),"."),(0,a.kt)("li",{parentName:"ol"},"Create ",(0,a.kt)("a",{parentName:"li",href:"/docs/guide-for-admins/users"},"users")," with assigned roles and departments."),(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("a",{parentName:"li",href:"/docs/guide-for-admins/messages-and-disclaimers"},"messages and disclaimers"),"."),(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("a",{parentName:"li",href:"/docs/guide-for-admins/patient-statuses"},"patient statuses"),"."),(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("a",{parentName:"li",href:"/docs/guide-for-admins/assessment-titles"},"assessment titles"),"."),(0,a.kt)("li",{parentName:"ol"},"Upload ",(0,a.kt)("a",{parentName:"li",href:"/docs/guide-for-admins/questionnaires"},"questionnaires"),". "),(0,a.kt)("li",{parentName:"ol"},"Set up ",(0,a.kt)("a",{parentName:"li",href:"/docs/guide-for-admins/reports"},"report-buttons"),".")))}c.isMDXComponent=!0}}]);