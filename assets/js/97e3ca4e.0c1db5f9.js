/*! For license information please see 97e3ca4e.0c1db5f9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[578036],{921513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(824246),o=n(511151);const i={id:"flightcontrol",title:"Deploying with Flightcontrol",sidebar_label:"AWS Fargate via Flightcontrol",description:"Deploying Backstage to AWS Fargate via Flightcontrol"},l=void 0,c={unversionedId:"deployment/flightcontrol",id:"deployment/flightcontrol",title:"Deploying with Flightcontrol",description:"Deploying Backstage to AWS Fargate via Flightcontrol",source:"@site/../docs/deployment/flightcontrol.md",sourceDirName:"deployment",slug:"/deployment/flightcontrol",permalink:"/docs/deployment/flightcontrol",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/deployment/flightcontrol.md",tags:[],version:"current",frontMatter:{id:"flightcontrol",title:"Deploying with Flightcontrol",sidebar_label:"AWS Fargate via Flightcontrol",description:"Deploying Backstage to AWS Fargate via Flightcontrol"},sidebar:"docs",previous:{title:"Koyeb",permalink:"/docs/deployment/koyeb"},next:{title:"AWS Lightsail",permalink:"/docs/deployment/backstage-deploy/aws-lightsail"}},a={},s=[{value:"Troubleshooting",id:"troubleshooting",level:2}];function u(e){const t=Object.assign({p:"p",a:"a",h1:"h1",ol:"ol",li:"li",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",h2:"h2",ul:"ul"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This guide explains how to deploy Backstage to ",(0,r.jsx)(t.a,{href:"https://www.flightcontrol.dev?ref=backstage",children:"Flightcontrol"}),", a platform that fully automates deployments to Amazon Web Services (AWS). Flightcontrol supports git-driven and image registry deployments."]}),"\n",(0,r.jsxs)(t.p,{children:["Before you begin, make sure you have a ",(0,r.jsx)(t.a,{href:"https://app.flightcontrol.dev/signup?ref=backstage",children:"Flightcontrol account"})," and a ",(0,r.jsx)(t.a,{href:"https://github.com/login",children:"Github account"})," to follow this guide."]}),"\n",(0,r.jsx)(t.h1,{id:"deployment-via-dashboard",children:"Deployment Via Dashboard"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Create a new project from the Flightcontrol Dashboard"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Select the GitHub repo for your Backstage project"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Select ",(0,r.jsx)(t.code,{children:"GUI"})," as the config type:"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Then, choose ",(0,r.jsx)(t.code,{children:"+ Add Web Server (Fargate)"})," under Services before entering the following server information:"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field Name"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Build Type"}),(0,r.jsx)(t.td,{children:"Custom Dockerfile"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Health Check Path"}),(0,r.jsx)(t.td,{children:"/catalog"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Port"}),(0,r.jsx)(t.td,{children:"7007"})]})]})]}),"\n",(0,r.jsxs)(t.ol,{start:"5",children:["\n",(0,r.jsxs)(t.li,{children:["Click ",(0,r.jsx)(t.code,{children:"Create Project"})," and complete any required steps (like linking your AWS account)."]}),"\n"]}),"\n",(0,r.jsx)(t.h1,{id:"deployment-via-code",children:"Deployment via Code"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Create a new project from the Flightcontrol Dashboard"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Select the GitHub repo for your Backstage project"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Select the ",(0,r.jsx)(t.code,{children:"flightcontrol.json"})," Config Type."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'filename="flightcontrol.json"',children:'{\n  "$schema": "https://app.flightcontrol.dev/schema.json",\n  "environments": [\n    {\n      "id": "backstage",\n      "name": "Backstage",\n      "region": "us-west-2",\n      "source": {\n        "branch": "main"\n      },\n      "services": [\n        {\n          "id": "backstage",\n          "name": "Backstage",\n          "type": "fargate",\n          "buildType": "docker",\n          "dockerfilePath": "Dockerfile",\n          "dockerContext": ".",\n          "healthCheckPath": "/catalog",\n          "cpu": 0.5,\n          "memory": 1,\n          "domain": "backstage.yourapp.com",\n          "port": 7007,\n          "minInstances": 1,\n          "maxInstances": 1\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(t.h1,{id:"databases-and-redis",children:"Databases and Redis"}),"\n",(0,r.jsxs)(t.p,{children:["If you need a database or Redis for your Backstage plugins, you can easily add those to your Flightcontrol deployment. For more information, see ",(0,r.jsx)(t.a,{href:"https://www.flightcontrol.dev/docs/guides/flightcontrol/using-code?ref=backstage#redis",children:"the flightcontrol docs"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.flightcontrol.dev/docs?ref=backstage",children:"Flightcontrol Documentation"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.flightcontrol.dev/docs/troubleshooting?ref=backstage",children:"Troubleshooting"})}),"\n"]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,l,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var s in i=Object(arguments[a]))n.call(i,s)&&(c[s]=i[s]);if(t){l=t(i);for(var u=0;u<l.length;u++)r.call(i,l[u])&&(c[l[u]]=i[l[u]])}}return c}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,i={},s=null,u=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:u,props:i,_owner:l.current}}t.jsx=s,t.jsxs=s},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var l=60109,c=60110,a=60112;t.Suspense=60113;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),l=f("react.provider"),c=f("react.context"),a=f("react.forward_ref"),t.Suspense=f("react.suspense"),s=f("react.memo"),u=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||p}function m(){}function j(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var b=j.prototype=new m;b.constructor=j,r(b,g.prototype),b.isPureReactComponent=!0;var v={current:null},x=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,i={},l=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(l=""+t.key),t)x.call(t,r)&&!k.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:o,type:e,key:l,ref:c,props:i,_owner:v.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,r,l){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case i:a=!0}}if(a)return l=l(a=e),e=""===r?"."+C(a,0):r,Array.isArray(l)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),O(l,t,n,"",(function(e){return e}))):null!=l&&(w(l)&&(l=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(S,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=r+C(c=e[s],s);a+=O(c,t,n,u,l)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(c=e.next()).done;)a+=O(c=c.value,t,n,u=r+C(c,s++),l);else if("object"===c)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function F(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function R(){var e=P.current;if(null===e)throw Error(h(321));return e}var $={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:F,forEach:function(e,t,n){F(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return F(e,(function(){t++})),t},toArray:function(e){return F(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(h(143));return e}},t.Component=g,t.PureComponent=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var i=r({},e.props),l=e.key,c=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,a=v.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)x.call(t,u)&&!k.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];i.children=s}return{$$typeof:o,type:e.type,key:l,ref:c,props:i,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||l:i(e),r.createElement(o.Provider,{value:c},t)}}}]);