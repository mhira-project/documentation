"use strict";(self.webpackChunkmhira_docs=self.webpackChunkmhira_docs||[]).push([[6333],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),p=a,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3378:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:2},l="User roles",u={unversionedId:"guide-for-admins/roles",id:"guide-for-admins/roles",title:"User roles",description:"User roles are a way to conventiently bundle a set of permissions. By assinging a user role to a user, this user will obtain all the permissions linked to the role.",source:"@site/docs/3-guide-for-admins/2-roles.md",sourceDirName:"3-guide-for-admins",slug:"/guide-for-admins/roles",permalink:"/documentation/docs/guide-for-admins/roles",draft:!1,editUrl:"https://github.com/mhira-project/documentation/edit/main/docs/3-guide-for-admins/2-roles.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Superadmin",permalink:"/documentation/docs/guide-for-admins/superadmin"},next:{title:"Permissions",permalink:"/documentation/docs/guide-for-admins/permissions"}},c={},d=[{value:"Creating user roles",id:"creating-user-roles",level:2},{value:"Examples of roles could be:",id:"examples-of-roles-could-be",level:2}],m={toc:d};function p(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"user-roles"},"User roles"),(0,o.kt)("p",null,"User roles are a way to conventiently bundle a set of permissions. By assinging a user role to a user, this user will obtain all the permissions linked to the role. "),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"First, we will create user roles."),(0,o.kt)("li",{parentName:"ul"},"In a second step, we will link ",(0,o.kt)("a",{parentName:"li",href:"https://mhira-project.github.io/documentation/docs/guide-for-admins/permissions"},"permissions")," to these user roles. "),(0,o.kt)("li",{parentName:"ul"},"Finally, we will ",(0,o.kt)("a",{parentName:"li",href:"https://mhira-project.github.io/documentation/docs/guide-for-admins/users"},"create users")," who will get one or multiple user roles. ")))),(0,o.kt)("h2",{id:"creating-user-roles"},"Creating user roles"),(0,o.kt)("p",null,"To create user roles, please use the navigation bar\nto nagigate to the 'Roles' menu under 'Administration'."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Roles",src:r(862).Z,title:"Roles",width:"3267",height:"1198"})),(0,o.kt)("p",null,"The 'default' role is the role that users get when their account is created. By default, this role does not have any permissions and we recommend leaving it that way.\nThe other pre-existing role is ",(0,o.kt)("a",{parentName:"p",href:"https://mhira-project.github.io/documentation/docs/guide-for-admins/superadmin"},"superadmin"),"."),(0,o.kt)("p",null,"To create a new role, press the 'Create role' button."),(0,o.kt)("p",null,"Please enter a name for the role and enter a hierarchy number, then press save. "),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("h2",{parentName:"div",id:"hierarchy"},"Hierarchy"),(0,o.kt)("p",{parentName:"div"},"This  number is used for user roles that have the permission to manage other users.\nNumbers between 2 and 1000 can be selected. "),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Users can only modify users with a higher number.")," "),(0,o.kt)("p",{parentName:"div"},"Consequently, users cannot change their own profile.\nSuperadmin has the number 1 and can, thus, not be changed by any other user. "))),(0,o.kt)("p",null,"To delete a role, use right click or open the context menu from the actions button in the table rows.\nPlease note, that a deleted role is no longer available to users with this role."),(0,o.kt)("h2",{id:"examples-of-roles-could-be"},"Examples of roles could be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Psychiatrist"),(0,o.kt)("li",{parentName:"ul"},"Nurse"),(0,o.kt)("li",{parentName:"ul"},"Frontdesk (someone creating patients but without access to assessments)"),(0,o.kt)("li",{parentName:"ul"},"Usermanager"),(0,o.kt)("li",{parentName:"ul"},"Administrator")))}p.isMDXComponent=!0},862:function(e,t,r){t.Z=r.p+"assets/images/roles-f7b60e2087deb0c0e4abefc454a03053.PNG"}}]);