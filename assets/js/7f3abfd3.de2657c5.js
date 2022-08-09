"use strict";(self.webpackChunkmhira_docs=self.webpackChunkmhira_docs||[]).push([[3519],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(a),h=i,u=m["".concat(c,".").concat(h)]||m[h]||d[h]||r;return a?n.createElement(u,s(s({ref:t},p),{},{components:a})):n.createElement(u,s({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8540:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),s=["components"],o={sidebar_position:4},c="Patient Management",l={unversionedId:"user-manual/patient-management",id:"user-manual/patient-management",title:"Patient Management",description:"MHIRA is conceptualised as an electronic health record centred around cases (i.e., patients). By creating a patient entry, the mental health care workers can access all the information about their patient in one site.",source:"@site/docs/2-user-manual/4-patient-management.md",sourceDirName:"2-user-manual",slug:"/user-manual/patient-management",permalink:"/documentation/docs/user-manual/patient-management",draft:!1,editUrl:"https://github.com/mhira-project/documentation/edit/main/docs/2-user-manual/4-patient-management.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Navigation",permalink:"/documentation/docs/user-manual/navigation"},next:{title:"Assessments",permalink:"/documentation/docs/user-manual/assessments"}},p={},d=[{value:"Creating a new patient",id:"creating-a-new-patient",level:2},{value:"Patient overview table",id:"patient-overview-table",level:2},{value:"Deleting patients",id:"deleting-patients",level:3},{value:"Patient status",id:"patient-status",level:3},{value:"Patient-centred view",id:"patient-centred-view",level:2},{value:"Profile",id:"profile",level:3},{value:"Department",id:"department",level:3},{value:"Case Manager",id:"case-manager",level:3},{value:"Caregivers",id:"caregivers",level:3}],m={toc:d};function h(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"patient-management"},"Patient Management"),(0,r.kt)("p",null,"MHIRA is conceptualised as an electronic health record centred around cases (i.e., patients). By creating a patient entry, the mental health care workers can access all the information about their patient in one site. "),(0,r.kt)("h2",{id:"creating-a-new-patient"},"Creating a new patient"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create-patient",src:a(2251).Z,title:"create-patient",width:"2298",height:"1417"})),(0,r.kt)("p",null,"To create a patient, the \u201ccreate patient\u201d button needs to be clicked. This will prompt the user to fill in the patient's profile."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The profile contains identifying information about the patient as well as means to contact the patient. The fields marked by an asterisk (*) are mandatory. "),(0,r.kt)("li",{parentName:"ul"},"A patient needs a department to be created. ")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Only the departments of the created users can be selected. Consequently, users without any department cannot create patients."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Press the ",(0,r.kt)("strong",{parentName:"li"},"save patient")," button to create the patient.")),(0,r.kt)("h2",{id:"patient-overview-table"},"Patient overview table"),(0,r.kt)("p",null,"All registered patients can be found in the patient overview list. "),(0,r.kt)("p",null,"Left click on a patient entry in the list will bring you to the patient centred view.\nRight click will open the context menu allowing for actions like deleting the patient (permission required) or setting the current status of the patient."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"patient-overview",src:a(6326).Z,title:"patient-overview",width:"2386",height:"746"})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"the ",(0,r.kt)("strong",{parentName:"p"},"My patients")," button will reduce the table entriesto those patient for which you are assigned as ",(0,r.kt)("a",{parentName:"p",href:"/documentation/docs/user-manual/patient-management#case-manager"},"case manager")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Access to patients")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can only view patients who are assigned to your departments. If you do not find a patient, make sure that you share a department with this patient. "))),(0,r.kt)("h3",{id:"deleting-patients"},"Deleting patients"),(0,r.kt)("p",null,"To delete a patient, open the context menu (right click on the patient), then select ",(0,r.kt)("strong",{parentName:"p"},"Delete patient"),". Finally, you will need to confirm this action. A special user permission is required for this action.  "),(0,r.kt)("h3",{id:"patient-status"},"Patient status"),(0,r.kt)("p",null,"A patient status can be set in the patient overview list.\nThis can help you and your team to understand which stage of the clinical process the patient is currently in. "),(0,r.kt)("p",null,"To set a patient status, use right click on the table to open the context menu."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"patient_status2",src:a(9445).Z,title:"patient_status2",width:"2558",height:"1142"})),(0,r.kt)("p",null,"Then, select a patient status and click 'OK'"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"patient_status3",src:a(4133).Z,title:"patient_status3",width:"2592",height:"1137"})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you need different status options (drop down choices), ask the person in charge of setting up MHIRA.\nThey can easily add or remove status options. "))),(0,r.kt)("h2",{id:"patient-centred-view"},"Patient-centred view"),(0,r.kt)("p",null,"The patient-centred view can be accessed by selecting the corresponding patient from the patient-overview list (left click on the entry). "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"patient-profile",src:a(9888).Z,title:"patient-profile",width:"2379",height:"1228"})),(0,r.kt)("p",null,"The patient-centred view (or patient detail view) presents with tabs which will give access to different functionality regarding the patient:"),(0,r.kt)("h3",{id:"profile"},"Profile"),(0,r.kt)("p",null,"Here the information regarding the patients can be viewed or edited.\nUse the edit button to make changes. "),(0,r.kt)("h3",{id:"department"},"Department"),(0,r.kt)("p",null,"Each entered patient needs to have at least one department. A patient can be assigned to multiple departments. Users can only see patients with which they share a department constituting MHIRA\u2019s system for restricting access to patient files to relevant users.",(0,r.kt)("br",{parentName:"p"}),"\n","Basically, the department tab allows you to manage which users of MHIRA have access to the patient (e.g., referral to another department).\nDepartments can be removed using the context menu (right click) and added using the ",(0,r.kt)("strong",{parentName:"p"},"+")," button. "),(0,r.kt)("h3",{id:"case-manager"},"Case Manager"),(0,r.kt)("p",null,"Casemangers can be optionally assigned to a patient. This can be used to track the staff members involved in the management of the patient and clarifying responsibilities within the clinical team. In overview lists, clicking on \u201cMy patients\u201d will filter the list of patients down to those for which the user is a case manager. "),(0,r.kt)("h3",{id:"caregivers"},"Caregivers"),(0,r.kt)("p",null,"The MHIRA project is primarily aimed at child and adolescent mental health. Additionally, focus groups showed that patients in LMIC are usually accompanied by family members. It was considered important to be able to document emergency contacts and other caregivers. Under the menu caregivers on the patient-centred view, such persons can be documented for each patient. This might include family members, health professionals without access to MHIRA, legal advisors, teachers, etc.  For a particular patient, the relationship between the patient and the caregiver is defined by a dropdown selection (e.g. mother). Emergency contact can be set to true or false to signal that a certain caregiver should be contacted in emergency situations. Finally, a \u2018notes\u2019 field can be used to detail the specifics on the caregiver relation.\nThe phone number of the caregiver acts as a unique identifier and can be used to search existing caregivers to assign them to more cases."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"As a given caregiver can be associated with multiple patients, the caregivers are stored in a general database table and then assigned to one or multiple patients. In case contact information needs to be changed, this will come to effect for all patients with a given caregiver. These changes can be made in the care giver menu accessible from the navigation bar. "))))}h.isMDXComponent=!0},2251:function(e,t,a){t.Z=a.p+"assets/images/create-patient-b8fe6e82bfc14575daa398570fd35f46.png"},6326:function(e,t,a){t.Z=a.p+"assets/images/patient-overview-da9fe8e26e14ce7c9aa4f09b57aabc11.png"},9888:function(e,t,a){t.Z=a.p+"assets/images/patient-profile-6432a658ac0abb12e2545c823254a361.png"},9445:function(e,t,a){t.Z=a.p+"assets/images/patient_status2-b91a3d09ed6c4f16dc5f608d2166537a.png"},4133:function(e,t,a){t.Z=a.p+"assets/images/patient_status3-84fa088d433b55c3b495298cf4f9435b.png"}}]);