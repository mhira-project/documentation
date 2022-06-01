"use strict";(self.webpackChunkmhira_docs=self.webpackChunkmhira_docs||[]).push([[253],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8274:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:10},u="Activating R-Studio to test reports",c={unversionedId:"installation-guide/RStudio",id:"installation-guide/RStudio",title:"Activating R-Studio to test reports",description:"The installation comes with an rstudio docker container.",source:"@site/docs/4-installation-guide/10-RStudio.md",sourceDirName:"4-installation-guide",slug:"/installation-guide/RStudio",permalink:"/documentation/docs/installation-guide/RStudio",draft:!1,editUrl:"https://github.com/mhira-project/documentation/edit/main/docs/4-installation-guide/10-RStudio.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Admin Password Reset",permalink:"/documentation/docs/installation-guide/admin-password-reset"},next:{title:"MHIRA Reporting guide",permalink:"/documentation/docs/category/mhira-reporting-guide"}},l={},d=[],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"activating-r-studio-to-test-reports"},"Activating R-Studio to test reports"),(0,i.kt)("p",null,"The installation comes with an ",(0,i.kt)("inlineCode",{parentName:"p"},"rstudio")," docker container.\nThis container is a great way to test and develop the reports which are based on R.\nThis article describes how to activate this container. "),(0,i.kt)("p",null,"RStudio this is not enabled by default. To enabled ",(0,i.kt)("inlineCode",{parentName:"p"},"rstudio")," set the following values in your ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-env"},"# To enable `rstudio` container uncomment the following line, that enables `rstudio` profile\n#COMPOSE_PROFILES=rstudio\n\n# uncomment the following line, and change the value after the equal sign to set the secret key. \n#RSTUDIO_PASSWORD=rstudioPassword\n")),(0,i.kt)("p",null,"After setting above values run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,i.kt)("p",null,"Accessing R-studio container"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://localhost:8787 \nor \nhttps://localhost/rstudio\nor\nhttps://{{yourMHIRAurlHERE}}/rstudio\n")))}f.isMDXComponent=!0}}]);