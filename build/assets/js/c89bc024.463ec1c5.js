"use strict";(self.webpackChunkmhira_docs=self.webpackChunkmhira_docs||[]).push([[480],{3905:function(t,e,n){n.d(e,{Zo:function(){return h},kt:function(){return d}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},h=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,h=p(t,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||l[d]||o;return n?r.createElement(m,a(a({ref:e},h),{},{components:n})):r.createElement(m,a({ref:e},h))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=u;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4764:function(t,e,n){n.r(e),n.d(e,{assets:function(){return h},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],p={sidebar_position:3},s="Shiny patient reporting tool",c={unversionedId:"mhira-reporting-guide/patient-report-shiny-app",id:"mhira-reporting-guide/patient-report-shiny-app",title:"Shiny patient reporting tool",description:"This documenation refers to this repository",source:"@site/docs/5-mhira-reporting-guide/patient-report-shiny-app.md",sourceDirName:"5-mhira-reporting-guide",slug:"/mhira-reporting-guide/patient-report-shiny-app",permalink:"/documentation/docs/mhira-reporting-guide/patient-report-shiny-app",draft:!1,editUrl:"https://github.com/mhira-project/documentation/edit/main/docs/5-mhira-reporting-guide/patient-report-shiny-app.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"MHIRA Reporting guide",permalink:"/documentation/docs/category/mhira-reporting-guide"},next:{title:"License and contributors",permalink:"/documentation/docs/category/license-and-contributors"}},h={},l=[{value:"How it works",id:"how-it-works",level:2},{value:"Troubleshooting of the shiny app in the shiny container",id:"troubleshooting-of-the-shiny-app-in-the-shiny-container",level:2}],u={toc:l};function d(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shiny-patient-reporting-tool"},"Shiny patient reporting tool"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This documenation refers to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mhira-project/patient-report"},"this repository")))),(0,o.kt)("p",null,"This is a shiny app which serves as a patient data reporting tool for the Mental Health Information Reporting Assisitant (MHIRA).",(0,o.kt)("br",{parentName:"p"}),"\n","MHIRA allows for the connection of external apps for reporting by adding these apps to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"docker setup")," in which MHIRA is shipped.\nIn this case, reporting is done with ",(0,o.kt)("a",{parentName:"p",href:"https://www.rstudio.com/products/shiny/shiny-server/"},"shiny"),"."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mhira-project/mhira-docker"},"MHIRA docker installation")," comes with a shiny server in a ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/rocker/shiny-verse"},"docker container"),"."),(0,o.kt)("p",null,"When installing MHIRA, settings can be modified in the .env file (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mhira-project/mhira-docker"},"MHIRA installation reporitory"),").\nThe .env file contains the setting for the data save path. "),(0,o.kt)("p",null,"After installation of MHIRA, you will find a folder called 'shiny' under the data save path. Under the default settings, this will be: '.mhira-docker/data/shiny' in your home directory.\nFor the app in the current repository to work, you need to copy it to the 'apps' folder inside this folder."),(0,o.kt)("p",null,"It should then look like this: "),(0,o.kt)("p",null,"'.mhira-docker/data/shiny/apps/patient-report'"),(0,o.kt)("p",null,"A good way to achive this is to navigate to '.mhira-docker/data/shiny/apps/' and then to clone the current repository"),(0,o.kt)("p",null,"For example\n'git clone ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mhira-project/patient-report.git'"},"https://github.com/mhira-project/patient-report.git'")),(0,o.kt)("p",null,"Now the shiny app should be available under the url 'localhost/shiny' which you can enter to your local browser. "),(0,o.kt)("p",null,"The app will not yet work, because it expects addtional parameters in the url. "),(0,o.kt)("p",null,"You can start the shiny app from within MHIRA pressing the connected reporting button. This will redirect you to the shiny app you just installed. "),(0,o.kt)("h2",{id:"troubleshooting-of-the-shiny-app-in-the-shiny-container"},"Troubleshooting of the shiny app in the shiny container"),(0,o.kt)("p",null,"If you want to see output from the shiny app you can attach the container to your terminal using "),(0,o.kt)("p",null,"Intructions can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/logs/"},"here")))}d.isMDXComponent=!0}}]);