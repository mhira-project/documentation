"use strict";(self.webpackChunkmhira_docs=self.webpackChunkmhira_docs||[]).push([[634],{3905:function(e,s,t){t.d(s,{Zo:function(){return m},kt:function(){return p}});var n=t(7294);function i(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function r(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?r(Object(t),!0).forEach((function(s){i(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function o(e,s){if(null==e)return{};var t,n,i=function(e,s){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],s.indexOf(t)>=0||(i[t]=e[t]);return i}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var s=n.useContext(l),t=s;return e&&(t="function"==typeof e?e(s):a(a({},s),e)),t},m=function(e){var s=c(e.components);return n.createElement(l.Provider,{value:s},e.children)},u={inlineCode:"code",wrapper:function(e){var s=e.children;return n.createElement(n.Fragment,{},s)}},d=n.forwardRef((function(e,s){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(t),p=i,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||r;return t?n.createElement(f,a(a({ref:s},m),{},{components:t})):n.createElement(f,a({ref:s},m))}));function p(e,s){var t=arguments,i=s&&s.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=d;var o={};for(var l in s)hasOwnProperty.call(s,l)&&(o[l]=s[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<r;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1305:function(e,s,t){t.r(s),t.d(s,{assets:function(){return m},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=t(7462),i=t(3366),r=(t(7294),t(3905)),a=["components"],o={sidebar_position:6},l="Messages and disclaimers",c={unversionedId:"guide-for-admins/messages-and-disclaimers",id:"guide-for-admins/messages-and-disclaimers",title:"Messages and disclaimers",description:"Messages can be important to inform informants (those filling in questionnaires) and users of MHIRA.",source:"@site/docs/3-guide-for-admins/6-messages-and-disclaimers.md",sourceDirName:"3-guide-for-admins",slug:"/guide-for-admins/messages-and-disclaimers",permalink:"/documentation/docs/guide-for-admins/messages-and-disclaimers",draft:!1,editUrl:"https://github.com/mhira-project/documentation/edit/main/docs/3-guide-for-admins/6-messages-and-disclaimers.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Users",permalink:"/documentation/docs/guide-for-admins/users"},next:{title:"Patient status",permalink:"/documentation/docs/guide-for-admins/patient-statuses"}},m={},u=[{value:"Login disclaimer",id:"login-disclaimer",level:2},{value:"Assessmemt",id:"assessmemt",level:2},{value:"Messages for qustionnaire links",id:"messages-for-qustionnaire-links",level:2}],d={toc:u};function p(e){var s=e.components,o=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"messages-and-disclaimers"},"Messages and disclaimers"),(0,r.kt)("p",null,"Messages can be important to inform informants (those filling in questionnaires) and users of MHIRA.\nSometimes, they are required as legal disclaimers. "),(0,r.kt)("p",null,"You can set the messages under the 'message' menu accessible in the navigation menu under 'administration' shown in the picture"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Message3",src:t(8137).Z,title:"Message3",width:"2913",height:"1630"})),(0,r.kt)("h2",{id:"login-disclaimer"},"Login disclaimer"),(0,r.kt)("p",null,"A message will be shown at first login of every user. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Message1",src:t(7771).Z,title:"Message1",width:"2561",height:"1025"})),(0,r.kt)("h2",{id:"assessmemt"},"Assessmemt"),(0,r.kt)("p",null,"A  message is shown when informants (e.g. a patient) are filling in an assessment. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Message2",src:t(934).Z,title:"Message2",width:"1587",height:"1100"})),(0,r.kt)("h2",{id:"messages-for-qustionnaire-links"},"Messages for qustionnaire links"),(0,r.kt)("p",null,"MHIRA allows to send questionnaire links.\nThese links can be 'open for completion' in which case the questionnaires are accessed with the link. No message is needed in this case."),(0,r.kt)("p",null,"However, "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if the assessment is 'completed', the message 'Assessment completed' message will be shown. "),(0,r.kt)("li",{parentName:"ul"},"if the assessment is 'cancelled' or 'expired' the 'Assessment expired' message will be shown"),(0,r.kt)("li",{parentName:"ul"},"if the assessment is planned (not yet available because it is set for the future), the 'Assessment planned' message will be shown. After this message, the date at which the assessment becomes available is shown. ")),(0,r.kt)("p",null,"Please set these assessments according to your needs."))}p.isMDXComponent=!0},7771:function(e,s,t){s.Z=t.p+"assets/images/message1-7859720efe97f9a98e59cb79fe87ec57.png"},934:function(e,s,t){s.Z=t.p+"assets/images/message2-68487568a01851de9c069e309411101e.png"},8137:function(e,s,t){s.Z=t.p+"assets/images/message3-86e335ccb9d022320087273d42056e87.png"}}]);