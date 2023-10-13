/*! For license information please see 23a635a6.115915a0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[644761],{60740:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=n(824246),s=n(511151);const a={id:"plugin-git-release-manager.internals.helpers",title:"internals.helpers",description:"API reference for internals.helpers"},i=void 0,o={id:"reference/plugin-git-release-manager.internals.helpers",title:"internals.helpers",description:"API reference for internals.helpers",source:"@site/../docs/reference/plugin-git-release-manager.internals.helpers.md",sourceDirName:"reference",slug:"/reference/plugin-git-release-manager.internals.helpers",permalink:"/docs/reference/plugin-git-release-manager.internals.helpers",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-git-release-manager.internals.helpers.md",tags:[],version:"current",frontMatter:{id:"plugin-git-release-manager.internals.helpers",title:"internals.helpers",description:"API reference for internals.helpers"}},l={},c=[{value:"Functions",id:"functions",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function u(e){const r=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-git-release-manager",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-git-release-manager"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-git-release-manager.internals",children:(0,t.jsx)(r.code,{children:"internals"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-git-release-manager.internals.helpers",children:(0,t.jsx)(r.code,{children:"helpers"})})]}),"\n",(0,t.jsx)(r.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Function"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-git-release-manager.internals.helpers.getbumpedsemvertagparts",children:"getBumpedSemverTagParts(tagParts, semverBumpLevel)"})}),(0,t.jsx)(r.td,{children:"Calculates the next semantic version, taking into account whether or not it's a minor or patch"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-git-release-manager.internals.helpers.getbumpedtag",children:"getBumpedTag(options)"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.p,{children:"Calculates the next version for the project"}),(0,t.jsx)(r.p,{children:"For calendar versioning this means a bump in patch"}),(0,t.jsxs)(r.p,{children:["For semantic versioning this means either a minor or a patch bump depending on the value of ",(0,t.jsx)(r.code,{children:"bumpLevel"})]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-git-release-manager.internals.helpers.getcalvertagparts",children:"getCalverTagParts(tag)"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-git-release-manager.internals.helpers.getsemvertagparts",children:"getSemverTagParts(tag)"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-git-release-manager.internals.helpers.getshortcommithash",children:"getShortCommitHash(hash)"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-git-release-manager.internals.helpers.gettagparts",children:"getTagParts(options)"})}),(0,t.jsx)(r.td,{children:"Tag parts are the individual parts of a version, e.g. [major].[minor].[patch] are the parts of a semantic version"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-git-release-manager.internals.helpers.iscalvertagparts",children:"isCalverTagParts(project, _tagParts)"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-git-release-manager.internals.helpers.isprojectvalid",children:"isProjectValid(project)"})}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Variable"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-git-release-manager.internals.helpers.calverregexp",children:"calverRegexp"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-git-release-manager.internals.helpers.semverregexp",children:"semverRegexp"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-git-release-manager.internals.helpers.validatetagname",children:"validateTagName"})}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Type Alias"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-git-release-manager.internals.helpers.calvertagparts",children:"CalverTagParts"})}),(0,t.jsx)(r.td,{})]})})]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,s.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(s){return!1}}()?Object.assign:function(e,s){for(var a,i,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in a=Object(arguments[l]))n.call(a,c)&&(o[c]=a[c]);if(r){i=r(a);for(var u=0;u<i.length;u++)t.call(a,i[u])&&(o[i[u]]=a[i[u]])}}return o}},371426:(e,r,n)=>{n(862525);var t=n(827378),s=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;s=a("react.element"),r.Fragment=a("react.fragment")}var i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,a={},c=null,u=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)o.call(r,t)&&!l.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:s,type:e,key:c,ref:u,props:a,_owner:i.current}}r.jsx=c,r.jsxs=c},541535:(e,r,n)=>{var t=n(862525),s=60103,a=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var i=60109,o=60110,l=60112;r.Suspense=60113;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;s=f("react.element"),a=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),i=f("react.provider"),o=f("react.context"),l=f("react.forward_ref"),r.Suspense=f("react.suspense"),c=f("react.memo"),u=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,r,n){this.props=e,this.context=r,this.refs=g,this.updater=n||h}function m(){}function y(e,r,n){this.props=e,this.context=r,this.refs=g,this.updater=n||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,r,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=j.prototype;var v=y.prototype=new m;v.constructor=y,t(v,j.prototype),v.isPureReactComponent=!0;var x={current:null},b=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,n){var t,a={},i=null,o=null;if(null!=r)for(t in void 0!==r.ref&&(o=r.ref),void 0!==r.key&&(i=""+r.key),r)b.call(r,t)&&!_.hasOwnProperty(t)&&(a[t]=r[t]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(t in l=e.defaultProps)void 0===a[t]&&(a[t]=l[t]);return{$$typeof:s,type:e,key:i,ref:o,props:a,_owner:x.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var O=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function P(e,r,n,t,i){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case s:case a:l=!0}}if(l)return i=i(l=e),e=""===t?"."+C(l,0):t,Array.isArray(i)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),P(i,r,n,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,r){return{$$typeof:s,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),r.push(i)),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=t+C(o=e[c],c);l+=P(o,r,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(o=e.next()).done;)l+=P(o=o.value,r,n,u=t+C(o,c++),i);else if("object"===o)throw r=""+e,Error(p(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return l}function S(e,r,n){if(null==e)return e;var t=[],s=0;return P(e,t,"","",(function(e){return r.call(n,e,s++)})),t}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(p(321));return e}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:S,forEach:function(e,r,n){S(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return S(e,(function(){r++})),r},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(p(143));return e}},r.Component=j,r.PureComponent=y,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error(p(267,e));var a=t({},e.props),i=e.key,o=e.ref,l=e._owner;if(null!=r){if(void 0!==r.ref&&(o=r.ref,l=x.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in r)b.call(r,u)&&!_.hasOwnProperty(u)&&(a[u]=void 0===r[u]&&void 0!==c?c[u]:r[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){c=Array(u);for(var f=0;f<u;f++)c[f]=arguments[f+2];a.children=c}return{$$typeof:s,type:e.type,key:i,ref:o,props:a,_owner:l}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:o,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:c,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return $().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,n){return $().useReducer(e,r,n)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>o,ah:()=>a});var t=n(667294);const s=t.createContext({});function a(e){const r=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function o({components:e,children:r,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:a(e),t.createElement(s.Provider,{value:o},r)}}}]);