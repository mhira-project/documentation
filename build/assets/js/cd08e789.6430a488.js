"use strict";(self.webpackChunkmhira_docs=self.webpackChunkmhira_docs||[]).push([[253],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8274:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],u={sidebar_position:10},l="R-Studio to test reports",s={unversionedId:"installation-guide/RStudio",id:"installation-guide/RStudio",title:"R-Studio to test reports",description:"The installation comes with bundled in rstudio container.",source:"@site/docs/4-installation-guide/10-RStudio.md",sourceDirName:"4-installation-guide",slug:"/installation-guide/RStudio",permalink:"/mhira-manual/docs/installation-guide/RStudio",draft:!1,editUrl:"https://github.com/mhira-project/mhira-manual/docs/4-installation-guide/10-RStudio.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Admin Password Reset",permalink:"/mhira-manual/docs/installation-guide/admin-password-reset"},next:{title:"License and contributors",permalink:"/mhira-manual/docs/category/license-and-contributors"}},c={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"r-studio-to-test-reports"},"R-Studio to test reports"),(0,i.kt)("p",null,"The installation comes with bundled in ",(0,i.kt)("inlineCode",{parentName:"p"},"rstudio")," container."),(0,i.kt)("p",null,"The RStudio container may be useful for purposes of creating/editing custom reporting scripts using R."),(0,i.kt)("p",null,"RStudio this is not enabled by default. To enabled ",(0,i.kt)("inlineCode",{parentName:"p"},"rstudio")," set following values in your ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-env"},"# To enable `rstudio` container uncomment the following line, that enables `rstudio` profile\n#COMPOSE_PROFILES=rstudio\n\n# uncomment the following line, and change the value after the equal sign to set the secret key. \n#RSTUDIO_PASSWORD=rstudioPassword\n")),(0,i.kt)("p",null,"After setting above values run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,i.kt)("p",null,"Accessing R-studio container"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://localhost:8787 \nor \nhttps://localhost/rstudio\n")))}m.isMDXComponent=!0}}]);