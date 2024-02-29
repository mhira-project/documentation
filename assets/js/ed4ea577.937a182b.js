"use strict";(self.webpackChunkmhira_docs=self.webpackChunkmhira_docs||[]).push([[6240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||s;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:5},i="Users",o={unversionedId:"guide-for-admins/users",id:"guide-for-admins/users",title:"Users",description:"Users will need an account to access MHIRA.",source:"@site/docs/3-guide-for-admins/5-users.md",sourceDirName:"3-guide-for-admins",slug:"/guide-for-admins/users",permalink:"/documentation/docs/guide-for-admins/users",draft:!1,editUrl:"https://github.com/mhira-project/documentation/edit/main/docs/3-guide-for-admins/5-users.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Departments",permalink:"/documentation/docs/guide-for-admins/departments"},next:{title:"Messages and disclaimers",permalink:"/documentation/docs/guide-for-admins/messages-and-disclaimers"}},c={},l=[{value:"Creating user accounts",id:"creating-user-accounts",level:2},{value:"User settings",id:"user-settings",level:2}],d={toc:l};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"users"},"Users"),(0,a.kt)("p",null,"Users will need an account to access MHIRA.\nThese cannot be created by the user themselves. However, they need to be created by a user with permission to manage users.\nThis procedure was selected to allow a maximum of control over who has access to the platform. "),(0,a.kt)("h2",{id:"creating-user-accounts"},"Creating user accounts"),(0,a.kt)("p",null,"The user accounts are set up from the 'User Management' menu accessible from the nagigation sidebar.\nThe nagivation menu contains the entry 'New User' which can be used to start creating a new user.\nAlternatively, the process can be triggered from the user list using the '+' button. "),(0,a.kt)("p",null,"In a first step, the user's profile needs to be filled in.\nFields with a * are mandatory.\nAfter filling in these fields, the 'save' button becomes available. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create_user_1",src:n(2574).Z,title:"create_user_1",width:"2016",height:"1153"})),(0,a.kt)("p",null,"The password needs to be repeated. The set password is temporary as the user will be forced to reset his/her password at first login.\nThe password needs to be communicated to the user by a channel outside of MHIRA, e.g., a paper printout, via telephone or by email. "),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Some browsers have the possiblity to auto-generate strong passwords. "))),(0,a.kt)("p",null,"After filling in the required fields, the 'save' button becomes available. Once pressed, the user account has been created. "),(0,a.kt)("h2",{id:"user-settings"},"User settings"),(0,a.kt)("p",null,"In a next step, some settings need to be made.\nBy default, the user can access mhira but he will not have any permissions or access rights."),(0,a.kt)("p",null,"To grant permissions, one or more user roles need to be selected. We recommend unchecking the default user role.\nAdditionally, one or more departments can be selected, depending on whether the user needs access to patient entries or not.  "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create_user_2",src:n(3096).Z,title:"create_user_2",width:"2744",height:"1304"})),(0,a.kt)("p",null,"Additionally, the user manager can force a password reset by setting a new password.\nIt is also possible to deactivate the account.\nFinally, an account can be deleted. "),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Sometimes, options are not available (they appear greyed out):")),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"The 'manage users' permission is required. "),(0,a.kt)("li",{parentName:"ul"},"Without the permission to delete users, the delete button is not accessible. "),(0,a.kt)("li",{parentName:"ul"},"User roles with a lower or equal hierarchy to the own value cannot be given to other users."),(0,a.kt)("li",{parentName:"ul"},"User accounts with a lower hierarchy value cannot be modified. ")))))}u.isMDXComponent=!0},2574:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create_user1-fbac79f953119c63b121c1f0940312fa.png"},3096:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create_user2-5dbd9776cfa6e0367774d26786b115cb.png"}}]);