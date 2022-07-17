"use strict";(self.webpackChunkmhira_docs=self.webpackChunkmhira_docs||[]).push([[3519],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8540:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=["components"],o={sidebar_position:4},c="Patient Management",l={unversionedId:"user-manual/patient-management",id:"user-manual/patient-management",title:"Patient Management",description:"MHIRA is conceptualised as an electronic health record centred around cases (i.e., patients). By creating a patient entry, the mental health care workers can access all the information about their patient in one site. The patient-centred view can be accessed by selecting the corresponding patient from the patient overview list.  The patient-centred view contains the subsections profile, departments, case managers, departments, caregivers, assessments and reports. To create a patient, the \u201ccreate patient\u201d button needs to be clicked. This will prompt the user to fill in the patient's profile.",source:"@site/docs/2-user-manual/4-patient-management.md",sourceDirName:"2-user-manual",slug:"/user-manual/patient-management",permalink:"/documentation/docs/user-manual/patient-management",draft:!1,editUrl:"https://github.com/mhira-project/documentation/edit/main/docs/2-user-manual/4-patient-management.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Navigation",permalink:"/documentation/docs/user-manual/navigation"},next:{title:"Assessments",permalink:"/documentation/docs/user-manual/assessments"}},p={},d=[{value:"Profile",id:"profile",level:2},{value:"Case Manager",id:"case-manager",level:2},{value:"Caregivers",id:"caregivers",level:2},{value:"Patient status",id:"patient-status",level:2}],u={toc:d};function m(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"patient-management"},"Patient Management"),(0,r.kt)("p",null,"MHIRA is conceptualised as an electronic health record centred around cases (i.e., patients). By creating a patient entry, the mental health care workers can access all the information about their patient in one site. The patient-centred view can be accessed by selecting the corresponding patient from the patient overview list.  The patient-centred view contains the subsections profile, departments, case managers, departments, caregivers, assessments and reports. To create a patient, the \u201ccreate patient\u201d button needs to be clicked. This will prompt the user to fill in the patient's profile."),(0,r.kt)("h2",{id:"profile"},"Profile"),(0,r.kt)("p",null,"The profile contains identifying information about the patient as well as means to contact the patient. In our international group, we defined a number of required fields for each patient entry as a consensus: name, last name, and ID (e.g., the hospital ID or other identification number). Additionally, age and gender can be added. Finally, to complete the profile, the patient\u2019s address and contact details (phone and email) can be entered.",(0,r.kt)("br",{parentName:"p"}),"\n","Department\nEach entered patient needs to have at least one department. A patient can be assigned to multiple departments. Users can only see patients with which they share a department constituting MHIRA\u2019s system for restricting access to patient files to relevant users.  "),(0,r.kt)("h2",{id:"case-manager"},"Case Manager"),(0,r.kt)("p",null,"Casemangers can be optionally assigned to patients. This can be used to track the staff members involved in the management of the patient and clarifying responsibilities within the clinical team. In overview lists, clicking on \u201cMy patients\u201d will filter the list of patients down to those for which the user is a case manager. "),(0,r.kt)("h2",{id:"caregivers"},"Caregivers"),(0,r.kt)("p",null,"The MHIRA project is primarily aimed at child and adolescent mental health. Additionally, focus groups showed that patients in LMIC are usually accompanied by family members. It was considered important to be able to document emergency contacts and other caregivers. Under the menu caregivers on the patient-centred view, such persons can be documented for each patient. This might include family members, health professionals without access to MHIRA, legal advisors, teachers, etc. As a given caregiver can be associated with multiple patients, the caregivers are stored in a general database table and then assigned to one or multiple patients. In case contact information needs to be changed, this will come to effect for all patients with a given caregiver. The phone number of the caregiver acts as a unique identifier and can be used to search existing caregivers to assign them to more cases. For a particular patient, the relationship between the patient and the caregiver is defined by a dropdown selection (e.g. mother). Emergency contact can be set to true or false to signal that a certain caregiver should be contacted in emergency situations. Finally, a \u2018notes\u2019 field can be used to detail the specifics on the caregiver relation."),(0,r.kt)("h2",{id:"patient-status"},"Patient status"),(0,r.kt)("p",null,"A patient status can be set in the patient overview list.\nThis can help you and your team to understand which stage of the clinical process the patient is currently in. "),(0,r.kt)("p",null,"To set a patient status, use right click on the table to open the context menu."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"patient_status2",src:n(9445).Z,title:"patient_status2",width:"2558",height:"1142"})),(0,r.kt)("p",null,"Then, select a patient status and click 'OK'"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"patient_status3",src:n(4133).Z,title:"patient_status3",width:"2592",height:"1137"})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you need different status options (drop down choices), ask the person in charge of setting up MHIRA.\nThey can easily add or remove status options. "))))}m.isMDXComponent=!0},9445:function(e,t,n){t.Z=n.p+"assets/images/patient_status2-b91a3d09ed6c4f16dc5f608d2166537a.png"},4133:function(e,t,n){t.Z=n.p+"assets/images/patient_status3-84fa088d433b55c3b495298cf4f9435b.png"}}]);