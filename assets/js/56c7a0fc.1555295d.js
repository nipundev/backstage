/*! For license information please see 56c7a0fc.1555295d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[490386],{30622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(824246),i=n(511151);const o={id:"provider",title:"GitLab Authentication Provider",sidebar_label:"GitLab",description:"Adding GitLab OAuth as an authentication provider in Backstage"},a=void 0,c={id:"auth/gitlab/provider",title:"GitLab Authentication Provider",description:"Adding GitLab OAuth as an authentication provider in Backstage",source:"@site/../docs/auth/gitlab/provider.md",sourceDirName:"auth/gitlab",slug:"/auth/gitlab/provider",permalink:"/docs/auth/gitlab/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/gitlab/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"GitLab Authentication Provider",sidebar_label:"GitLab",description:"Adding GitLab OAuth as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"GitHub",permalink:"/docs/auth/github/provider"},next:{title:"Google",permalink:"/docs/auth/google/provider"}},s={},l=[{value:"Create an OAuth App on GitLab",id:"create-an-oauth-app-on-gitlab",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}];function u(e){const t=Object.assign({p:"p",code:"code",h2:"h2",a:"a",ol:"ol",li:"li",ul:"ul",input:"input",pre:"pre"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The Backstage ",(0,r.jsx)(t.code,{children:"core-plugin-api"})," package comes with a GitLab authentication\nprovider that can authenticate users using GitLab OAuth."]}),"\n",(0,r.jsx)(t.h2,{id:"create-an-oauth-app-on-gitlab",children:"Create an OAuth App on GitLab"}),"\n",(0,r.jsxs)(t.p,{children:["To support GitLab authentication, you must create an Application from the\n",(0,r.jsx)(t.a,{href:"https://gitlab.com/-/profile/applications",children:"GitLab settings"}),". The ",(0,r.jsx)(t.code,{children:"Redirect URI"}),"\nshould point to your Backstage backend auth handler."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Set Application Name to ",(0,r.jsx)(t.code,{children:"backstage-dev"})," or something along those lines."]}),"\n",(0,r.jsxs)(t.li,{children:["The Authorization Callback URL should match the redirect URI set in Backstage.\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Set this to ",(0,r.jsx)(t.code,{children:"http://localhost:7007/api/auth/gitlab/handler/frame"})," for local development."]}),"\n",(0,r.jsxs)(t.li,{children:["Set this to ",(0,r.jsx)(t.code,{children:"http://{APP_FQDN}:{APP_BACKEND_PORT}/api/auth/gitlab/handler/frame"})," for non-local deployments."]}),"\n",(0,r.jsxs)(t.li,{children:["Select the following scopes from the list:\n",(0,r.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,r.jsx)(t.code,{children:"read_user"})," Grants read-only access to the authenticated user's profile through the /user API endpoint, which includes username, public email, and full name. Also grants access to read-only API endpoints under /users."]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,r.jsx)(t.code,{children:"read_repository"})," Grants read-only access to repositories on private projects using Git-over-HTTP (not using the API)."]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,r.jsx)(t.code,{children:"write_repository"})," Grants read-write access to repositories on private projects using Git-over-HTTP (not using the API)."]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,r.jsx)(t.code,{children:"openid"})," Grants permission to authenticate with GitLab using OpenID Connect. Also gives read-only access to the user's profile and group memberships."]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,r.jsx)(t.code,{children:"profile"})," Grants read-only access to the user's profile data using OpenID Connect."]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,r.jsx)(t.code,{children:"email"})," Grants read-only access to the user's primary email address using OpenID Connect."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.p,{children:["The provider configuration can then be added to your ",(0,r.jsx)(t.code,{children:"app-config.yaml"})," under the\nroot ",(0,r.jsx)(t.code,{children:"auth"})," configuration:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"auth:\n  environment: development\n  providers:\n    gitlab:\n      development:\n        clientId: ${AUTH_GITLAB_CLIENT_ID}\n        clientSecret: ${AUTH_GITLAB_CLIENT_SECRET}\n        ## uncomment if using self-hosted GitLab\n        # audience: https://gitlab.company.com\n        ## uncomment if using a custom redirect URI\n        # callbackUrl: https://${BASE_URL}/api/auth/gitlab/handler/frame\n"})}),"\n",(0,r.jsx)(t.p,{children:"The GitLab provider is a structure with three configuration keys:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"clientId"}),": The Application ID that you generated on GitLab, e.g.\n",(0,r.jsx)(t.code,{children:"4928c033ab3d592845c044a653bc20583baf84f2e67b954c6fdb32a532ab76c9"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"clientSecret"}),": The Application secret"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"audience"})," (optional): The base URL for the self-hosted GitLab instance, e.g.\n",(0,r.jsx)(t.code,{children:"https://gitlab.company.com"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"callbackUrl"})," (optional): The URL matching the Redirect URI registered when creating your GitLab OAuth App, e.g.\n",(0,r.jsx)(t.code,{children:"https://$backstage.acme.corp/api/auth/gitlab/handler/frame"}),"\nNote: Due to a peculiarity with GitLab OAuth, ensure there is no trailing ",(0,r.jsx)(t.code,{children:"/"})," after 'frame' in the URL."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,r.jsxs)(t.p,{children:["To add the provider to the frontend, add the ",(0,r.jsx)(t.code,{children:"gitlabAuthApi"})," reference and\n",(0,r.jsx)(t.code,{children:"SignInPage"})," component as shown in\n",(0,r.jsx)(t.a,{href:"/docs/auth/#adding-the-provider-to-the-sign-in-page",children:"Adding the provider to the sign-in page"}),"."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var o,a,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in o=Object(arguments[s]))n.call(o,l)&&(c[l]=o[l]);if(t){a=t(o);for(var u=0;u<a.length;u++)r.call(o,a[u])&&(c[a[u]]=o[a[u]])}}return c}},371426:(e,t,n)=>{n(862525);var r=n(827378),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),t.Fragment=o("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:u,props:o,_owner:a.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),i=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,c=60110,s=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;i=d("react.element"),o=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),a=d("react.provider"),c=d("react.context"),s=d("react.forward_ref"),t.Suspense=d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var v=m.prototype=new y;v.constructor=m,r(v,b.prototype),v.isPureReactComponent=!0;var j={current:null},x=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,o={},a=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,r)&&!_.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:i,type:e,key:a,ref:c,props:o,_owner:j.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var O=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case i:case o:s=!0}}if(s)return a=a(s=e),e=""===r?"."+w(s,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),C(a,t,n,"",(function(e){return e}))):null!=a&&(A(a)&&(a=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),t.push(a)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+w(c=e[l],l);s+=C(c,t,n,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(c=e.next()).done;)s+=C(c=c.value,t,n,u=r+w(c,l++),a);else if("object"===c)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function S(e,t,n){if(null==e)return e;var r=[],i=0;return C(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function L(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function R(){var e=P.current;if(null===e)throw Error(h(321));return e}var E={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:S,forEach:function(e,t,n){S(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return S(e,(function(){t++})),t},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!A(e))throw Error(h(143));return e}},t.Component=b,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),a=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)x.call(t,u)&&!_.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];o.children=l}return{$$typeof:i,type:e.type,key:a,ref:c,props:o,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=A,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:L}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>o});var r=n(667294);const i=r.createContext({});function o(e){const t=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||a:o(e),r.createElement(i.Provider,{value:c},t)}}}]);