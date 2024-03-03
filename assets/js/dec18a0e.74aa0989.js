"use strict";(self.webpackChunkmhira_docs=self.webpackChunkmhira_docs||[]).push([[2350],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return l}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(n),l=a,h=m["".concat(c,".").concat(l)]||m[l]||p[l]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function l(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},c="Superadmin",d={unversionedId:"guide-for-admins/superadmin",id:"guide-for-admins/superadmin",title:"Superadmin",description:"When MHIRA is installed, it has one user role and one user account pre-intalled.",source:"@site/docs/3-guide-for-admins/1-superadmin.md",sourceDirName:"3-guide-for-admins",slug:"/guide-for-admins/superadmin",permalink:"/docs/guide-for-admins/superadmin",draft:!1,editUrl:"https://github.com/mhira-project/documentation/edit/main/docs/3-guide-for-admins/1-superadmin.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/guide-for-admins/overview"},next:{title:"User roles",permalink:"/docs/guide-for-admins/roles"}},u={},p=[],m={toc:p};function l(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"superadmin"},"Superadmin"),(0,i.kt)("p",null,"When MHIRA is installed, it has one user role and one user account pre-intalled.\nYou will need to use this account to create access for other roles and users. "),(0,i.kt)("p",null,"The person installing MHIRA (",(0,i.kt)("a",{parentName:"p",href:"https://mhira-project.github.io/documentation/docs/category/installation-guide"},"see intallation guide"),"), will set a password during this installation. You will need this password for your first login to MHIRA."),(0,i.kt)("p",null,"Using your internet browser, navigate to the URL (address entered into the browser, e.g., ",(0,i.kt)("a",{parentName:"p",href:"https://mhira.myhospital.com"},"https://mhira.myhospital.com"),") under which MHIRA is accessible for you.\nThis will be take you to a ",(0,i.kt)("a",{parentName:"p",href:"https://mhira-project.github.io/documentation/docs/user-manual/access"},"login screen"),".\nEnter the username: ",(0,i.kt)("em",{parentName:"p"},"superadmin")," and the password. "),(0,i.kt)("p",null,"Now, the software will force you to change the password for the superadmin.\nMake sure  that the password is strong.\nAlso make sure to save this password in a secure location or to remember it.\nIn case you lose this password, there is a ",(0,i.kt)("a",{parentName:"p",href:"https://mhira-project.github.io/documentation/docs/installation-guide/admin-password-reset"},"recovery procedure")," but it will need access to the command line of the server. "),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The superadmin account has all the permissions you can have in MHIRA.\nHowever, it can not be changed.\nThus, the superadmin cannot be assigned to any ",(0,i.kt)("a",{parentName:"p",href:"https://mhira-project.github.io/documentation/docs/guide-for-admins/departments"},"department"),". Consequently, you cannot create patients with this account. "))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We recommend only using the superadmin account to create other (e.g., administration) accounts and set initial roles and persmissions.\nUse accounts with more restricted access for daily activities."))))}l.isMDXComponent=!0}}]);