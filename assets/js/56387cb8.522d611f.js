/*! For license information please see 56387cb8.522d611f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[463146],{64110:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=t(824246),o=t(511151);const s={id:"plugin-auth-node.authproviderroutehandlers",title:"AuthProviderRouteHandlers",description:"API reference for AuthProviderRouteHandlers"},i=void 0,a={unversionedId:"reference/plugin-auth-node.authproviderroutehandlers",id:"reference/plugin-auth-node.authproviderroutehandlers",title:"AuthProviderRouteHandlers",description:"API reference for AuthProviderRouteHandlers",source:"@site/../docs/reference/plugin-auth-node.authproviderroutehandlers.md",sourceDirName:"reference",slug:"/reference/plugin-auth-node.authproviderroutehandlers",permalink:"/docs/reference/plugin-auth-node.authproviderroutehandlers",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-node.authproviderroutehandlers.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-node.authproviderroutehandlers",title:"AuthProviderRouteHandlers",description:"API reference for AuthProviderRouteHandlers"}},u={},c=[{value:"Methods",id:"methods",level:2}];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-node",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-auth-node"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.authproviderroutehandlers",children:(0,n.jsx)(r.code,{children:"AuthProviderRouteHandlers"})})]}),"\n",(0,n.jsx)(r.p,{children:"Any Auth provider needs to implement this interface which handles the routes in the auth backend. Any auth API requests from the frontend reaches these methods."}),"\n",(0,n.jsx)(r.p,{children:"The routes in the auth backend API are tied to these methods like below"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"/auth/[provider]/start -> start"})," ",(0,n.jsx)(r.code,{children:"/auth/[provider]/handler/frame -> frameHandler"})," ",(0,n.jsx)(r.code,{children:"/auth/[provider]/refresh -> refresh"})," ",(0,n.jsx)(r.code,{children:"/auth/[provider]/logout -> logout"})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export interface AuthProviderRouteHandlers \n"})}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Method"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.authproviderroutehandlers.framehandler",children:"frameHandler(req, res)"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.p,{children:"Once the user signs in or consents in the OAuth screen, the auth provider redirects to the callbackURL which is handled by this method."}),(0,n.jsx)(r.p,{children:"Request - to contain a nonce cookie and a 'state' query parameter Response - postMessage to the window with a payload that contains accessToken, expiryInSeconds?, idToken? and scope. - sets a refresh token cookie if the auth provider supports refresh tokens"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.authproviderroutehandlers.logout",children:"logout(req, res)?"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"(Optional)"})," (Optional) Handles sign out requests"]}),(0,n.jsx)(r.p,{children:"Response - removes the refresh token cookie"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.authproviderroutehandlers.refresh",children:"refresh(req, res)?"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"(Optional)"})," (Optional) If the auth provider supports refresh tokens then this method handles requests to get a new access token."]}),(0,n.jsx)(r.p,{children:"Other types of providers may also use this method to implement its own logic to create new sessions upon request. For example, this can be used to create a new session for a provider that handles requests from an authenticating proxy."}),(0,n.jsx)(r.p,{children:"Request - to contain a refresh token cookie and scope (Optional) query parameter. Response - payload with accessToken, expiryInSeconds?, idToken?, scope and user profile information."})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.authproviderroutehandlers.start",children:"start(req, res)"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.p,{children:"Handles the start route of the API. This initiates a sign in request with an auth provider."}),(0,n.jsx)(r.p,{children:"Request - scopes for the auth request (Optional) Response - redirect to the auth provider for the user to sign in or consent. - sets a nonce cookie and also pass the nonce as 'state' query parameter in the redirect request"})]})]})]})]})]})}const d=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var s,i,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in s=Object(arguments[u]))t.call(s,c)&&(a[c]=s[c]);if(r){i=r(s);for(var l=0;l<i.length;l++)n.call(s,i[l])&&(a[i[l]]=s[i[l]])}}return a}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),r.Fragment=s("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,s={},c=null,l=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,n)&&!u.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:c,ref:l,props:s,_owner:i.current}}r.jsx=c,r.jsxs=c},541535:(e,r,t)=>{var n=t(862525),o=60103,s=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var i=60109,a=60110,u=60112;r.Suspense=60113;var c=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),s=d("react.portal"),r.Fragment=d("react.fragment"),r.StrictMode=d("react.strict_mode"),r.Profiler=d("react.profiler"),i=d("react.provider"),a=d("react.context"),u=d("react.forward_ref"),r.Suspense=d("react.suspense"),c=d("react.memo"),l=d("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function v(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||p}function m(){}function j(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||p}v.prototype.isReactComponent={},v.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,r,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=v.prototype;var g=j.prototype=new m;g.constructor=j,n(g,v.prototype),g.isPureReactComponent=!0;var x={current:null},b=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,t){var n,s={},i=null,a=null;if(null!=r)for(n in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(i=""+r.key),r)b.call(r,n)&&!_.hasOwnProperty(n)&&(s[n]=r[n]);var u=arguments.length-2;if(1===u)s.children=t;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];s.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===s[n]&&(s[n]=u[n]);return{$$typeof:o,type:e,key:i,ref:a,props:s,_owner:x.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function P(e,r,t,n,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case s:u=!0}}if(u)return i=i(u=e),e=""===n?"."+R(u,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(O,"$&/")+"/"),P(i,r,t,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),r.push(i)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=n+R(a=e[c],c);u+=P(a,r,t,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(a=e.next()).done;)u+=P(a=a.value,r,t,l=n+R(a,c++),i);else if("object"===a)throw r=""+e,Error(f(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return u}function S(e,r,t){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function A(){var e=E.current;if(null===e)throw Error(f(321));return e}var q={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:S,forEach:function(e,r,t){S(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return S(e,(function(){r++})),r},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(f(143));return e}},r.Component=v,r.PureComponent=j,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,r.cloneElement=function(e,r,t){if(null==e)throw Error(f(267,e));var s=n({},e.props),i=e.key,a=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,u=x.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in r)b.call(r,l)&&!_.hasOwnProperty(l)&&(s[l]=void 0===r[l]&&void 0!==c?c[l]:r[l])}var l=arguments.length-2;if(1===l)s.children=t;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}return{$$typeof:o,type:e.type,key:i,ref:a,props:s,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:a,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:c,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return A().useCallback(e,r)},r.useContext=function(e,r){return A().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return A().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return A().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return A().useLayoutEffect(e,r)},r.useMemo=function(e,r){return A().useMemo(e,r)},r.useReducer=function(e,r,t){return A().useReducer(e,r,t)},r.useRef=function(e){return A().useRef(e)},r.useState=function(e){return A().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>a,ah:()=>s});var n=t(667294);const o=n.createContext({});function s(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function a({components:e,children:r,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||i:s(e),n.createElement(o.Provider,{value:a},r)}}}]);