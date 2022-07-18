"use strict";(self.webpackChunkmhira_docs=self.webpackChunkmhira_docs||[]).push([[4232],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7899:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:2},l="Installing MHIRA",c={unversionedId:"installation-guide/installing-mhira",id:"installation-guide/installing-mhira",title:"Installing MHIRA",description:"MHIRA can be installed from docker containers using docker-compose.",source:"@site/docs/4-installation-guide/2-installing-mhira.md",sourceDirName:"4-installation-guide",slug:"/installation-guide/installing-mhira",permalink:"/documentation/docs/installation-guide/installing-mhira",draft:!1,editUrl:"https://github.com/mhira-project/documentation/edit/main/docs/4-installation-guide/2-installing-mhira.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/documentation/docs/installation-guide/requirements"},next:{title:"Data and Backup",permalink:"/documentation/docs/installation-guide/data-and-backup"}},d={},p=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Docker",id:"docker",level:3},{value:"Docker-compose",id:"docker-compose",level:3},{value:"Installation of MHIRA",id:"installation-of-mhira",level:2},{value:"Cloning the docker setup from github",id:"cloning-the-docker-setup-from-github",level:3},{value:"Creating the environment (.env) file",id:"creating-the-environment-env-file",level:3},{value:"Setting the JWT Secret in the .env file",id:"setting-the-jwt-secret-in-the-env-file",level:3},{value:"Settings passwords for the databases",id:"settings-passwords-for-the-databases",level:3},{value:"Setting access of MHIRA and HTTPS Certificates in the .env file",id:"setting-access-of-mhira-and-https-certificates-in-the-env-file",level:3},{value:"Initialising MHIRA",id:"initialising-mhira",level:3},{value:"Updating your installation",id:"updating-your-installation",level:2}],m={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-mhira"},"Installing MHIRA"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"MHIRA can be installed from docker containers using docker-compose.\nThe following page will walk you through the installation process.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mhira-project/mhira-docker"},"Here")," you fill find the github repository containing the docker-compose setup. ")),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"You will need to install docker and docker-compose:"),(0,o.kt)("h3",{id:"docker"},"Docker"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Docker installation instruction can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"here"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We  recommend executing the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/linux-postinstall/"},"post-installation steps")," e.g., adding your user to a docker group and setting docker to re-start automatically. "))),(0,o.kt)("h3",{id:"docker-compose"},"Docker-compose"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For Windows and Mac this is installed along with docker.\nYou can check whether you already have docker compose with:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker compose version\n")))),(0,o.kt)("p",null,"In case docker compose is not installed, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"installation instructions can be found here")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To avoid issues, check whether your docker and docker-compose versions are up to date. "))),(0,o.kt)("h2",{id:"installation-of-mhira"},"Installation of MHIRA"),(0,o.kt)("h3",{id:"cloning-the-docker-setup-from-github"},"Cloning the docker setup from github"),(0,o.kt)("p",null,"Clone ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mhira-project/mhira-docker"},"this")," repository to your machine"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/mhira-project/mhira-docker.git\n")),(0,o.kt)("h3",{id:"creating-the-environment-env-file"},"Creating the environment (.env) file"),(0,o.kt)("p",null,"Navigate into the ",(0,o.kt)("inlineCode",{parentName:"p"},"mhira-docker")," folder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd mhira-docker\n")),(0,o.kt)("p",null,"Copy example ",(0,o.kt)("inlineCode",{parentName:"p"},"environment")," file to create your own config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cp env-example .env\n")),(0,o.kt)("h3",{id:"setting-the-jwt-secret-in-the-env-file"},"Setting the JWT Secret in the .env file"),(0,o.kt)("p",null,"Change the line ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT_SECRET=changeMe")," after the equal sign to set the secret key, which is a 32 character string. Run this line in order to change it into a randomly generated key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sed -i "s|changeMe|$(openssl rand -base64 32)|" .env\n')),(0,o.kt)("h3",{id:"settings-passwords-for-the-databases"},"Settings passwords for the databases"),(0,o.kt)("p",null,"For mongodb"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```dockerfile\n### MONGODB ############################################################################################################\n\nMONGODB_PORT=27017\nMONGODB_CONNECTION_STRING=mongodb://mongo:27017/questionnaireDB\n```\n")),(0,o.kt)("p",null,"For postgres (contains patient identifying information and user information)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```dockerfile\n### POSTGRES ###########################################################################################################\n\nPOSTGRES_HOST=postgres\nPOSTGRES_DB=default\nPOSTGRES_USER=default\nPOSTGRES_PASSWORD=secret\nPOSTGRES_PORT=5432\n```\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Not setting the database passwords can compromise the security of the application. Please use strong passwords. "))),(0,o.kt)("h3",{id:"setting-access-of-mhira-and-https-certificates-in-the-env-file"},"Setting access of MHIRA and HTTPS Certificates in the .env file"),(0,o.kt)("p",null,"To access MHIRA software from outside of the server, set ",(0,o.kt)("inlineCode",{parentName:"p"},"SITE_DOMAIN")," in your environment file to the externally accessible domain name or IP address of the server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Site domain as domain name\nSITE_DOMAIN=mhira.myorganization.com\n\n# Or Site domain as server's external IP address\nSITE_DOMAIN=192.168.10.2\n\n# Also supports multiple domain names or combination of IP address and domains, with comma separation\nSITE_DOMAIN=mhira.myorganization.com, 10.0.0.2\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If using a publicly accessible domain name as ",(0,o.kt)("inlineCode",{parentName:"p"},"SITE_DOMAIN"),", the bundled in ",(0,o.kt)("a",{parentName:"p",href:"https://caddyserver.com/"},"Caddy")," webserver will automatically provision a trusted HTTPS certificate for the domain.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If using an internal domain name or IP address as ",(0,o.kt)("inlineCode",{parentName:"p"},"SITE_DOMAIN"),", the webserver will provision a self-signed certificate. Users will be faced with a security warning when accessing the site using self-signed certificate, and will need to accept/trust the certificate to access the site."))))),(0,o.kt)("h3",{id:"initialising-mhira"},"Initialising MHIRA"),(0,o.kt)("p",null,"After setting up the .env file, start docker compose to initialize MHIRA"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker compose pull\ndocker compose up --build -d\n")),(0,o.kt)("p",null,"If the above steps ran successfully, you should now be able to access the mhira application under the url(s) set as ",(0,o.kt)("inlineCode",{parentName:"p"},"SITE_DOMAIN"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"e.g., https://localhost, https://mhira.myorganization.com or https://192.168.10.2\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Later changes to the .env file come into effect by restarting the containers "),(0,o.kt)("p",{parentName:"div"},"   docker compose stop\ndocker compose up -d"))),(0,o.kt)("h2",{id:"updating-your-installation"},"Updating your installation"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Before updating, taking a backup is highly recommended.\nPlease consult the section on ",(0,o.kt)("a",{parentName:"p",href:"data-and-backup"},"data and backup")))),(0,o.kt)("p",null,"To update your existing installation to a newer version of MHIRA software, execute following commands (you need to be in the folder with the docker compose .yml file)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Pull latest docker config\ngit pull\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The .env example file might have changed with the update, potentially leading to missing or superflous environment variables.\nIf a variable is missing, docker compose will output the corresponding error.\nPlease compare your old and the new environment variables for discrepancies."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Pull latest docker images\ndocker compose pull  \n\n# It is recommended to first stop the containers\ndocker compose stop \n\n# Restart containers with updated images and config   \ndocker compose up -d --build --remove-orphan\n")))}u.isMDXComponent=!0}}]);