"use strict";(self.webpackChunkmhira_docs=self.webpackChunkmhira_docs||[]).push([[94],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9503:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:4},c="Patient Management",l={unversionedId:"user-manual/reports",id:"user-manual/reports",title:"Patient Management",description:"MHIRA is conceptualised as an electronic health record centred around cases (i.e., patients). By creating a patient entry, the mental health care workers can access all the information about their patient in one site. The patient-centred view can be accessed by selecting the corresponding patient from the patient overview list.  The patient-centred view contains the subsections profile, departments, case managers, departments, caregivers, assessments and reports. To create a patient, the \u201ccreate patient\u201d button needs to be clicked. This will prompt the user to fill in the patient's profile.",source:"@site/docs/2-user-manual/6-reports.md",sourceDirName:"2-user-manual",slug:"/user-manual/reports",permalink:"/documentation/docs/user-manual/reports",draft:!1,editUrl:"https://github.com/mhira-project/documentation/docs/2-user-manual/6-reports.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Patient Management",permalink:"/documentation/docs/user-manual/assessments"},next:{title:"Guide for admins",permalink:"/documentation/docs/category/guide-for-admins"}},p={},d=[{value:"Profile",id:"profile",level:2},{value:"Case Manager",id:"case-manager",level:2},{value:"Caregivers",id:"caregivers",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"patient-management"},"Patient Management"),(0,i.kt)("p",null,"MHIRA is conceptualised as an electronic health record centred around cases (i.e., patients). By creating a patient entry, the mental health care workers can access all the information about their patient in one site. The patient-centred view can be accessed by selecting the corresponding patient from the patient overview list.  The patient-centred view contains the subsections profile, departments, case managers, departments, caregivers, assessments and reports. To create a patient, the \u201ccreate patient\u201d button needs to be clicked. This will prompt the user to fill in the patient's profile."),(0,i.kt)("h2",{id:"profile"},"Profile"),(0,i.kt)("p",null,"The profile contains identifying information about the patient as well as means to contact the patient. In our international group, we defined a number of required fields for each patient entry as a consensus: name, last name, and ID (e.g., the hospital ID or other identification number). Additionally, age and gender can be added. Finally, to complete the profile, the patient\u2019s address and contact details (phone and email) can be entered.",(0,i.kt)("br",{parentName:"p"}),"\n","Department\nEach entered patient needs to have at least one department. A patient can be assigned to multiple departments. Users can only see patients with which they share a department constituting MHIRA\u2019s system for restricting access to patient files to relevant users.  "),(0,i.kt)("h2",{id:"case-manager"},"Case Manager"),(0,i.kt)("p",null,"Casemangers can be optionally assigned to patients. This can be used to track the staff members involved in the management of the patient and clarifying responsibilities within the clinical team. In overview lists, clicking on \u201cMy patients\u201d will filter the list of patients down to those for which the user is a case manager. "),(0,i.kt)("h2",{id:"caregivers"},"Caregivers"),(0,i.kt)("p",null,"The MHIRA project is primarily aimed at child and adolescent mental health. Additionally, focus groups showed that patients in LMIC are usually accompanied by family members. It was considered important to be able to document emergency contacts and other caregivers. Under the menu caregivers on the patient-centred view, such persons can be documented for each patient. This might include family members, health professionals without access to MHIRA, legal advisors, teachers, etc. As a given caregiver can be associated with multiple patients, the caregivers are stored in a general database table and then assigned to one or multiple patients. In case contact information needs to be changed, this will come to effect for all patients with a given caregiver. The phone number of the caregiver acts as a unique identifier and can be used to search existing caregivers to assign them to more cases. For a particular patient, the relationship between the patient and the caregiver is defined by a dropdown selection (e.g. mother). Emergency contact can be set to true or false to signal that a certain caregiver should be contacted in emergency situations. Finally, a \u2018notes\u2019 field can be used to detail the specifics on the caregiver relation."))}m.isMDXComponent=!0}}]);