"use strict";(self.webpackChunkmhira_docs=self.webpackChunkmhira_docs||[]).push([[983],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),m=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,f=d["".concat(l,".").concat(c)]||d[c]||p[c]||a;return n?i.createElement(f,s(s({ref:t},u),{},{components:n})):i.createElement(f,s({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var m=2;m<a;m++)s[m]=n[m];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9312:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return p}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],o={sidebar_position:3},l="Permissions",m={unversionedId:"guide-for-admins/permissions",id:"guide-for-admins/permissions",title:"Permissions",description:"Permissions determine what information users can view and edit within the software.",source:"@site/docs/3-guide-for-admins/3-permissions.md",sourceDirName:"3-guide-for-admins",slug:"/guide-for-admins/permissions",permalink:"/documentation/docs/guide-for-admins/permissions",draft:!1,editUrl:"https://github.com/mhira-project/documentation/edit/main/docs/3-guide-for-admins/3-permissions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"User roles",permalink:"/documentation/docs/guide-for-admins/roles"},next:{title:"Departments",permalink:"/documentation/docs/guide-for-admins/departments"}},u={},p=[{value:"Permission types",id:"permission-types",level:2},{value:"Permission objects",id:"permission-objects",level:2},{value:"Examples of permissions for differnt roles",id:"examples-of-permissions-for-differnt-roles",level:2},{value:"Clinican",id:"clinican",level:3},{value:"Patient manager",id:"patient-manager",level:3},{value:"User Manager",id:"user-manager",level:3},{value:"Questionnaire Manager",id:"questionnaire-manager",level:3},{value:"Administrator",id:"administrator",level:3}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"permissions"},"Permissions"),(0,a.kt)("p",null,"Permissions determine what information users can view and edit within the software.\nThey could also be understood as the rights the user has to do and see things in the software. "),(0,a.kt)("h2",{id:"permission-types"},"Permission types"),(0,a.kt)("p",null,"MHIRA comes with a number of permissions. These permissions are often subdivided into different types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"view (read)"),(0,a.kt)("li",{parentName:"ul"},"view all (this type of permission circumvents the restriction to see certain patients or caregiver, making it possible to see all entries regardless of ",(0,a.kt)("a",{parentName:"li",href:"https://mhira-project.github.io/documentation/docs/guide-for-admins/departments"},"department"),")"),(0,a.kt)("li",{parentName:"ul"},"manage (create and update)"),(0,a.kt)("li",{parentName:"ul"},"delete ")),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Use of the delete type permissions should be strongly restricted. "))),(0,a.kt)("h2",{id:"permission-objects"},"Permission objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Patients"),(0,a.kt)("li",{parentName:"ul"},"Users"),(0,a.kt)("li",{parentName:"ul"},"Assessments"),(0,a.kt)("li",{parentName:"ul"},"Questionnaires"),(0,a.kt)("li",{parentName:"ul"},"Caregivers"),(0,a.kt)("li",{parentName:"ul"},"Settings")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},'To effectively use assessments, the permisson "view users" is required. As usermangagers need to be selected and users can be informants.'),(0,a.kt)("li",{parentName:"ul"},"Managing type permissions only work if viewing is also selected")))),(0,a.kt)("h2",{id:"examples-of-permissions-for-differnt-roles"},"Examples of permissions for differnt roles"),(0,a.kt)("h3",{id:"clinican"},"Clinican"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"view patients"),(0,a.kt)("li",{parentName:"ul"},"manage patients"),(0,a.kt)("li",{parentName:"ul"},"view assessments"),(0,a.kt)("li",{parentName:"ul"},"manage assessments"),(0,a.kt)("li",{parentName:"ul"},"view caregivers"),(0,a.kt)("li",{parentName:"ul"},"manage caregivers"),(0,a.kt)("li",{parentName:"ul"},"view users")),(0,a.kt)("h3",{id:"patient-manager"},"Patient manager"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"view all patients"),(0,a.kt)("li",{parentName:"ul"},"manage patients"),(0,a.kt)("li",{parentName:"ul"},"delete patients")),(0,a.kt)("h3",{id:"user-manager"},"User Manager"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"view users"),(0,a.kt)("li",{parentName:"ul"},"manage users"),(0,a.kt)("li",{parentName:"ul"},"view settings")),(0,a.kt)("h3",{id:"questionnaire-manager"},"Questionnaire Manager"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"view questionnaires"),(0,a.kt)("li",{parentName:"ul"},"manage questionnaires")),(0,a.kt)("h3",{id:"administrator"},"Administrator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"view settings"),(0,a.kt)("li",{parentName:"ul"},"manage settings"),(0,a.kt)("li",{parentName:"ul"},"view users"),(0,a.kt)("li",{parentName:"ul"},"manage users")))}c.isMDXComponent=!0}}]);