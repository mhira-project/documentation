"use strict";(self.webpackChunkmhira_docs=self.webpackChunkmhira_docs||[]).push([[676],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9944:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},s="\ud83d\udc33 Installing MHIRA",c={unversionedId:"installation-guide/installing-mhira",id:"installation-guide/installing-mhira",title:"\ud83d\udc33 Installing MHIRA",description:"MHIRA can be installed from docker containers using docker-compose.",source:"@site/docs/4-installation-guide/1-installing-mhira.md",sourceDirName:"4-installation-guide",slug:"/installation-guide/installing-mhira",permalink:"/documentation/docs/installation-guide/installing-mhira",draft:!1,editUrl:"https://github.com/mhira-project/documentation/blob/main/docs/4-installation-guide/1-installing-mhira.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation guide",permalink:"/documentation/docs/category/installation-guide"},next:{title:"Data and Backup",permalink:"/documentation/docs/installation-guide/data-and-backup"}},p={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Docker",id:"docker",level:3},{value:"Docker-compose",id:"docker-compose",level:3},{value:"Installation",id:"installation",level:2},{value:"External access of MHIRA and HTTPS Certificates",id:"external-access-of-mhira-and-https-certificates",level:3},{value:"Updating your installation",id:"updating-your-installation",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-installing-mhira"},"\ud83d\udc33 Installing MHIRA"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"MHIRA can be installed from docker containers using docker-compose.\nThe following page will walk you through the installation process.\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mhira-project/mhira-docker"},"Here")," you fill find the github repository containing the docker-compose setup. ")),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("h3",{id:"docker"},"Docker"),(0,i.kt)("p",null,"You will need to install docker and docker-compose:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Docker installation instruction can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"here"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We strongly recommend executing the post-installation steps e.g., adding your user to a docker group. "))),(0,i.kt)("h3",{id:"docker-compose"},"Docker-compose"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For Windows and Mac this is installed along with docker. For Linux, installation instructions can be found ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"here"))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Clone ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mhira-project/mhira-docker"},"this")," repository to your machine"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/mhira-project/mhira-docker.git\n")),(0,i.kt)("p",null,"Move into the ",(0,i.kt)("inlineCode",{parentName:"p"},"mhira-docker")," folder"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd mhira-docker\n")),(0,i.kt)("p",null,"Copy example ",(0,i.kt)("inlineCode",{parentName:"p"},"environment")," file to create your own config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cp env-example .env\n")),(0,i.kt)("p",null,"Change the line ",(0,i.kt)("inlineCode",{parentName:"p"},"JWT_SECRET=changeMe")," after the equal sign to set the secret key, which is a 32 character string. Run this line in order to change it into a randomly generated key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'sed -i "s|changeMe|$(openssl rand -base64 32)|" .env\n')),(0,i.kt)("p",null,"Run docker-compose to initialize your app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose pull\ndocker-compose up --build -d\n")),(0,i.kt)("p",null,"If the above steps ran successfully, you should now be able to access the mhira application on your local machine at below address."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://localhost\n")),(0,i.kt)("h3",{id:"external-access-of-mhira-and-https-certificates"},"External access of MHIRA and HTTPS Certificates"),(0,i.kt)("p",null,"To access MHIRA software from outside of the server set ",(0,i.kt)("inlineCode",{parentName:"p"},"SITE_DOMAIN")," in your environment file to the externally accessible domain name or  IP address of the server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Site domain as domain name\nSITE_DOMAIN=mhira.myorganization.com\n\n# Or Site domain as server's external IP address\nSITE_DOMAIN=192.168.10.2\n\n# Also supports multiple domain names or combination of IP address and domains, with comma separation\nSITE_DOMAIN=mhira.myorganization.com, 10.0.0.2\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Restart your docker containers to apply the environment file changes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using a publicly accessible domain name as ",(0,i.kt)("inlineCode",{parentName:"p"},"SITE_DOMAIN"),", the bundled in ",(0,i.kt)("a",{parentName:"p",href:"https://caddyserver.com/"},"Caddy")," webserver will automatically provision a Trusted HTTPS certificate for domain.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the using an internal domain name or IP address as ",(0,i.kt)("inlineCode",{parentName:"p"},"SITE_DOMAIN"),", the webserver will provision a self-signed certificate. Users will be faced with a security warning when accessing the site using self-signed certificate, and will need to accept/trust the certificate to access the site."))),(0,i.kt)("p",null,"Accessing MHIRA using external domain or IP address"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://{{mhiradomain}} or https://{{mhiraip}}\n\neg: https://mhira.myorganization.com or https://192.168.10.2\n")),(0,i.kt)("h2",{id:"updating-your-installation"},"Updating your installation"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before updating, taking a backup is highly recommended.\nPlease consult the section on ",(0,i.kt)("a",{parentName:"p",href:"data-and-backup"},"data and backup")))),(0,i.kt)("p",null,"To update your existing installation to a newer version of MHIRA software execute following commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Pull latest docker config\ngit pull \n\n# Pull latest docker images\ndocker-compose pull  \n\n# Restart containers with updated images and config   \ndocker-compose up -d --build --remove-orphan\n")))}m.isMDXComponent=!0}}]);