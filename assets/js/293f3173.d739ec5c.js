"use strict";(self.webpackChunkmhira_docs=self.webpackChunkmhira_docs||[]).push([[3472],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(r),u=i,g=h["".concat(l,".").concat(u)]||h[u]||p[u]||a;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8585:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={sidebar_position:1},l="Overview",c={unversionedId:"mhira-reporting-guide/overview",id:"mhira-reporting-guide/overview",title:"Overview",description:"With the flexibility regarding questionnaires, MHIRA is confronted with the challenge of flexible and adaptive reporting. MHIRA\u2019s strategy to address this issue is leveraging available data science tools like those available in the R (e.g., ggplot, tydiverse and shiny) and Python (e.g., pandas and dash) programming languages.",source:"@site/docs/5-mhira-reporting-guide/1-overview.md",sourceDirName:"5-mhira-reporting-guide",slug:"/mhira-reporting-guide/overview",permalink:"/documentation/docs/mhira-reporting-guide/overview",draft:!1,editUrl:"https://github.com/mhira-project/documentation/edit/main/docs/5-mhira-reporting-guide/1-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"MHIRA Reporting",permalink:"/documentation/docs/category/mhira-reporting"},next:{title:"GraphQL API",permalink:"/documentation/docs/mhira-reporting-guide/graphql_api"}},d={},p=[{value:"How it works",id:"how-it-works",level:2}],h={toc:p};function u(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"With the flexibility regarding questionnaires, MHIRA is confronted with the challenge of flexible and adaptive reporting. MHIRA\u2019s strategy to address this issue is leveraging available data science tools like those available in the R (e.g., ggplot, tydiverse and shiny) and Python (e.g., pandas and dash) programming languages. "),(0,a.kt)("p",null,"This flexibilty requires some knowledge about how these data science tools work. However, it also offers the possiblity to create reports which go far beyond what can be normally achieved for clinicans. The idea here is to make data science available in clinical practice. "),(0,a.kt)("p",null,"As MHIRA is installed in the form of orchestrated docker containers running different modules of the software, software used for reporting can be added to the system of containers with docker-compose. Official docker images of 'data science' software in different configurations are available at the ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub Container Image Library"),". As a first approach, we are getting started with a shiny server and the programming language R to generate our MHIRA  reports.\nThe shiny server and also a RStudio containers come as part of the package when MHIRA is ",(0,a.kt)("a",{parentName:"p",href:"https://mhira-project.github.io/documentation/docs/installation-guide/installing-mhira"},"intalled"),". "),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("img",{alt:"reporting",src:r(9998).Z,title:"Reporting",width:"631",height:"361"})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("em",{parentName:"td"},"GQL = GraphQL (query language). Non-coloured: MHIRA operations (without reporting). Coloured: Mechanism for reporting."))))),(0,a.kt)("p",null,"The figure shows a schematic and simplified overview of how reporting tools interact with the MHIRA business logic:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When using MHIRA without a report (e.g., creating a new patient) the user will interact with the MHIRA front-end. The front-end will perform the create, read, update or delete action via GraphQL queries or mutations. The MHIRA business logic will then check the user\u2019s permission to obtain information and interact with the databases. A response is then sent back to the front-end."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Reporting")," is represented in colour in the figure: The administration menu in MHIRA allows for ",(0,a.kt)("a",{parentName:"li",href:"https://mhira-project.github.io/documentation/docs/guide-for-admins/reports"},"generating buttons inside the MHIRA user interface")," which can be assigned to certain roles and be placed in different views (i.e., the dashboard and the patient centred view in the reporting tab). Pressing these buttons (e.g., by a health care worker) will open a new browser tab and send a request to an URL which needs to be defined as that under which the reporting tool can be accessed. A URL parameter points towards the patient for whom the report is requested. With this request, the reporting apps also receive a temporary authentication token which serves to identify the user from whom\u2019s session the report request was triggered. The reporting app will then request the required data from the MHIRA business logic via GraphQL query language and provide the token to authenticate the request. Once the data is obtained, the reporting apps will proceed to build the report and send it to the user\u2019s browser tab.   ")),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Only install reporting apps you trust and understand. Else, the apps could expose the private health information stored in MHIRA. "))))}u.isMDXComponent=!0},9998:function(e,t,r){t.Z=r.p+"assets/images/Reporting-0ea03002e591f05b3e8320b90281f12f.svg"}}]);