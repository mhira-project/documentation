"use strict";(self.webpackChunkmhira_docs=self.webpackChunkmhira_docs||[]).push([[253],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:e},l),{},{components:n})):r.createElement(m,a({ref:e},l))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8274:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:10},u="Activating R-Studio to test reports",c={unversionedId:"installation-guide/RStudio",id:"installation-guide/RStudio",title:"Activating R-Studio to test reports",description:"The installation comes with an rstudio docker container.",source:"@site/docs/4-installation-guide/10-RStudio.md",sourceDirName:"4-installation-guide",slug:"/installation-guide/RStudio",permalink:"/documentation/docs/installation-guide/RStudio",draft:!1,editUrl:"https://github.com/mhira-project/documentation/edit/main/docs/4-installation-guide/10-RStudio.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Admin Password Reset",permalink:"/documentation/docs/installation-guide/admin-password-reset"},next:{title:"MHIRA Reporting",permalink:"/documentation/docs/category/mhira-reporting"}},l={},d=[],p={toc:d};function f(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"activating-r-studio-to-test-reports"},"Activating R-Studio to test reports"),(0,i.kt)("p",null,"The installation comes with an ",(0,i.kt)("inlineCode",{parentName:"p"},"rstudio")," docker container.\nThis container is a great way to test and develop the reports which are based on R.\nThis article describes how to activate this container. "),(0,i.kt)("p",null,"RStudio this is not enabled by default. To enabled ",(0,i.kt)("inlineCode",{parentName:"p"},"rstudio")," set the following values in your ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-env"},"# To enable `rstudio` container uncomment the following line, that enables `rstudio` profile\n#COMPOSE_PROFILES=rstudio\n\n# uncomment the following line, and change the value after the equal sign to set the secret key. \n#RSTUDIO_PASSWORD=rstudioPassword\n")),(0,i.kt)("p",null,"After setting above values run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,i.kt)("p",null,"Accessing R-studio container"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://localhost:8787 \nor \nhttps://localhost/rstudio\nor\nhttps://{{yourMHIRAurlHERE}}/rstudio\n")))}f.isMDXComponent=!0}}]);