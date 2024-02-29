"use strict";(self.webpackChunkmhira_docs=self.webpackChunkmhira_docs||[]).push([[4983],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>c});var n=i(7294);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,s=function(e,t){if(null==e)return{};var i,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var l=n.createContext({}),m=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(i),c=s,v=d["".concat(l,".").concat(c)]||d[c]||u[c]||a;return i?n.createElement(v,r(r({ref:t},p),{},{components:i})):n.createElement(v,r({ref:t},p))}));function c(e,t){var i=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=i.length,r=new Array(a);r[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var m=2;m<a;m++)r[m]=i[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},9312:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var n=i(7462),s=(i(7294),i(3905));const a={sidebar_position:3},r="Permissions",o={unversionedId:"guide-for-admins/permissions",id:"guide-for-admins/permissions",title:"Permissions",description:"Permissions determine what information users can view and edit within the software.",source:"@site/docs/3-guide-for-admins/3-permissions.md",sourceDirName:"3-guide-for-admins",slug:"/guide-for-admins/permissions",permalink:"/docs/guide-for-admins/permissions",draft:!1,editUrl:"https://github.com/mhira-project/documentation/edit/main/docs/3-guide-for-admins/3-permissions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"User roles",permalink:"/docs/guide-for-admins/roles"},next:{title:"Departments",permalink:"/docs/guide-for-admins/departments"}},l={},m=[{value:"Permission types",id:"permission-types",level:2},{value:"Permission objects",id:"permission-objects",level:2},{value:"Linking permissions to user roles",id:"linking-permissions-to-user-roles",level:2},{value:"Examples of permissions for differnt roles",id:"examples-of-permissions-for-differnt-roles",level:2},{value:"Clinician",id:"clinician",level:3},{value:"Patient manager",id:"patient-manager",level:3},{value:"User Manager",id:"user-manager",level:3},{value:"Questionnaire Manager",id:"questionnaire-manager",level:3},{value:"Administrator",id:"administrator",level:3}],p={toc:m};function u(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"permissions"},"Permissions"),(0,s.kt)("p",null,"Permissions determine what information users can view and edit within the software.\nThey could also be understood as the rights the user has to do and see things in the software. "),(0,s.kt)("h2",{id:"permission-types"},"Permission types"),(0,s.kt)("p",null,"MHIRA comes with a number of permissions. These permissions are often subdivided into different types:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"view (read)"),(0,s.kt)("li",{parentName:"ul"},"view all (this type of permission circumvents the restriction to see certain patients or caregiver, making it possible to see all entries regardless of ",(0,s.kt)("a",{parentName:"li",href:"https://mhira-project.github.io/documentation/docs/guide-for-admins/departments"},"department"),")"),(0,s.kt)("li",{parentName:"ul"},"manage (create and update)"),(0,s.kt)("li",{parentName:"ul"},"delete ")),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Use of the delete type permissions should be strongly restricted. "))),(0,s.kt)("h2",{id:"permission-objects"},"Permission objects"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Patients: Access the list of patients and access the patient detail view"),(0,s.kt)("li",{parentName:"ul"},"Users: Access the list of users and user detail view"),(0,s.kt)("li",{parentName:"ul"},"Assessments: Access assessment list and assessment detail view"),(0,s.kt)("li",{parentName:"ul"},"Questionnaires: Access questionnaire list and questionnaire detail view"),(0,s.kt)("li",{parentName:"ul"},"Caregivers: Access caregiver list"),(0,s.kt)("li",{parentName:"ul"},"Settings: Access all settings under the administration menu (roles, permissions, departments, patient statuses, assessment titles, disclaimers, reports)")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},'To effectively use assessments, the permisson "view users" is required. This is because assessment mangagers need to be selected and users can be informants of the assessments.'),(0,s.kt)("li",{parentName:"ul"},"Addtionally, it is required to 'view patients' and to 'view questionnaires'to plan assessments. "),(0,s.kt)("li",{parentName:"ul"},"Managing type permissions only work if viewing is also selected")))),(0,s.kt)("h2",{id:"linking-permissions-to-user-roles"},"Linking permissions to ",(0,s.kt)("a",{parentName:"h2",href:"https://mhira-project.github.io/documentation/docs/guide-for-admins/roles"},"user roles")),(0,s.kt)("p",null,"Permissions are set via the menu 'Permission Matrix' accessible from the navigation menu under administration."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The roles you created in the previous step will show up as colums."),(0,s.kt)("li",{parentName:"ul"},"The permissions are shown in the rows. ")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"To link a permission to a role, click on the cell at the intersection of the role and the permisson"),"\nA tick mark will apprear to indicate that the permission has been linked to the role. "),(0,s.kt)("h2",{id:"examples-of-permissions-for-differnt-roles"},"Examples of permissions for differnt ",(0,s.kt)("a",{parentName:"h2",href:"https://mhira-project.github.io/documentation/docs/guide-for-admins/roles"},"roles")),(0,s.kt)("h3",{id:"clinician"},"Clinician"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"view patients"),(0,s.kt)("li",{parentName:"ul"},"manage patients"),(0,s.kt)("li",{parentName:"ul"},"view assessments"),(0,s.kt)("li",{parentName:"ul"},"manage assessments"),(0,s.kt)("li",{parentName:"ul"},"view caregivers"),(0,s.kt)("li",{parentName:"ul"},"manage caregivers"),(0,s.kt)("li",{parentName:"ul"},"view users"),(0,s.kt)("li",{parentName:"ul"},"view questionnaires")),(0,s.kt)("h3",{id:"patient-manager"},"Patient manager"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"view all patients"),(0,s.kt)("li",{parentName:"ul"},"manage patients"),(0,s.kt)("li",{parentName:"ul"},"delete patients")),(0,s.kt)("h3",{id:"user-manager"},"User Manager"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"view users"),(0,s.kt)("li",{parentName:"ul"},"manage users"),(0,s.kt)("li",{parentName:"ul"},"view settings")),(0,s.kt)("h3",{id:"questionnaire-manager"},"Questionnaire Manager"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"view questionnaires"),(0,s.kt)("li",{parentName:"ul"},"manage questionnaires")),(0,s.kt)("h3",{id:"administrator"},"Administrator"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"view settings"),(0,s.kt)("li",{parentName:"ul"},"manage settings"),(0,s.kt)("li",{parentName:"ul"},"view users"),(0,s.kt)("li",{parentName:"ul"},"manage users")))}u.isMDXComponent=!0}}]);