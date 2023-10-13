/*! For license information please see 806b3b90.c8c988df.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[354324],{8896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=r(824246),i=r(511151);const o={id:"v1.5.0",title:"v1.5.0",description:"Backstage Release v1.5.0"},s=void 0,a={id:"releases/v1.5.0",title:"v1.5.0",description:"Backstage Release v1.5.0",source:"@site/../docs/releases/v1.5.0.md",sourceDirName:"releases",slug:"/releases/v1.5.0",permalink:"/docs/releases/v1.5.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.5.0.md",tags:[],version:"current",frontMatter:{id:"v1.5.0",title:"v1.5.0",description:"Backstage Release v1.5.0"},sidebar:"releases",previous:{title:"v1.6.0",permalink:"/docs/releases/v1.6.0"},next:{title:"v1.4.0",permalink:"/docs/releases/v1.4.0"}},c={},u=[{value:"Highlights",id:"highlights",level:2},{value:"GitHub Entity Provider",id:"github-entity-provider",level:3},{value:"Experimental Plugin Reconfiguration",id:"experimental-plugin-reconfiguration",level:3},{value:"Experimental Backend System Evolution",id:"experimental-backend-system-evolution",level:3},{value:"New plugin: <code>@aws/aws-proton-plugin-for-backstage</code>",id:"new-plugin-awsaws-proton-plugin-for-backstage",level:3},{value:"New plugin: <code>@backstage/plugin-github-issues</code>",id:"new-plugin-backstageplugin-github-issues",level:3},{value:"New plugin: <code>@backstage/plugin-sonarqube-backend</code>",id:"new-plugin-backstageplugin-sonarqube-backend",level:3},{value:"New module: <code>@backstage/plugin-catalog-backend-module-bitbucket-server</code>",id:"new-module-backstageplugin-catalog-backend-module-bitbucket-server",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",code:"code",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["These are the release notes for the v1.5.0 release of ",(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,n.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsx)(t.h3,{id:"github-entity-provider",children:"GitHub Entity Provider"}),"\n",(0,n.jsxs)(t.p,{children:["Added a new ",(0,n.jsx)(t.code,{children:"GitHubEntityProvider"})," (",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/integrations/github/discovery",children:"documentation"}),"), which allows for automatic discovery of catalog entity definition files out of your GitHub projects. This is an improvement upon the ",(0,n.jsx)(t.code,{children:"GithubDiscoveryProcessor"})," that existed before, and we recommend using entity providers rather than processors for discovery and ingestion when possible. Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/brentg-telus",children:"@brentg-telus"})," ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/12822",children:"#12822"})]}),"\n",(0,n.jsx)(t.h3,{id:"experimental-plugin-reconfiguration",children:"Experimental Plugin Reconfiguration"}),"\n",(0,n.jsxs)(t.p,{children:["This release adds an experimental API that allows plugin authors to define plugin wide options. These options can then be used by adopters of the plugin to reconfigure it to fit their app. Check out the ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/plugins/customization",children:"plugin customization"})," docs for more information on how to get started. Feedback is welcome on this new feature! Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/acierto",children:"@acierto"})," ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11404",children:"#11404"})]}),"\n",(0,n.jsx)(t.h3,{id:"experimental-backend-system-evolution",children:"Experimental Backend System Evolution"}),"\n",(0,n.jsxs)(t.p,{children:["This release adds the new ",(0,n.jsx)(t.code,{children:"@backstage/backend-defaults"})," package, part of the ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/11611",children:"evolution of the backend system"}),". This package is highly experimental and we do not recommend using it for any purpose, yet."]}),"\n",(0,n.jsxs)(t.h3,{id:"new-plugin-awsaws-proton-plugin-for-backstage",children:["New plugin: ",(0,n.jsx)(t.code,{children:"@aws/aws-proton-plugin-for-backstage"})]}),"\n",(0,n.jsxs)(t.p,{children:["Interact with AWS Proton in Backstage. Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/clareliguori",children:"@clareliguori"})," ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/12193",children:"#12193"})]}),"\n",(0,n.jsxs)(t.h3,{id:"new-plugin-backstageplugin-github-issues",children:["New plugin: ",(0,n.jsx)(t.code,{children:"@backstage/plugin-github-issues"})]}),"\n",(0,n.jsxs)(t.p,{children:["This new plugin can be used to display GitHub issues for your entities. Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/mrwolny",children:"@mrwolny"})," ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/12875",children:"#12875"})]}),"\n",(0,n.jsxs)(t.h3,{id:"new-plugin-backstageplugin-sonarqube-backend",children:["New plugin: ",(0,n.jsx)(t.code,{children:"@backstage/plugin-sonarqube-backend"})]}),"\n",(0,n.jsxs)(t.p,{children:["This new backend for ",(0,n.jsx)(t.code,{children:"@backstage/plugin-sonarqube"})," replaces the Sonarqube proxy configuration; once it is installed, you can remove the ",(0,n.jsx)(t.code,{children:"/sonarqube"})," proxy entry. For more information, see the plugin ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/sonarqube-backend/README.md",children:"README.md"}),". Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/Neemys",children:"@Neemys"})," ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11925",children:"#11925"})]}),"\n",(0,n.jsxs)(t.h3,{id:"new-module-backstageplugin-catalog-backend-module-bitbucket-server",children:["New module: ",(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-bitbucket-server"})]}),"\n",(0,n.jsxs)(t.p,{children:["This new module for the catalog backend adds the ",(0,n.jsx)(t.code,{children:"BitbucketServerEntityProvider"}),", which allows discovery of entities out of Bitbucket Server installations. Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/ONordander",children:"@ONordander"})," ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/12835",children:"#12835"})]}),"\n",(0,n.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,n.jsx)(t.p,{children:"This release does not contain any security fixes."}),"\n",(0,n.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,n.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,n.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage's ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.5.0-changelog.md",children:"Changelog"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage ",(0,n.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,n.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Sign up for our ",(0,n.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var o,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in o=Object(arguments[c]))r.call(o,u)&&(a[u]=o[u]);if(t){s=t(o);for(var l=0;l<s.length;l++)n.call(o,s[l])&&(a[s[l]]=o[s[l]])}}return a}},371426:(e,t,r)=>{r(862525);var n=r(827378),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),t.Fragment=o("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,o={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:u,ref:l,props:o,_owner:s.current}}t.jsx=u,t.jsxs=u},541535:(e,t,r)=>{var n=r(862525),i=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,a=60110,c=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;i=d("react.element"),o=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),s=d("react.provider"),a=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),u=d("react.memo"),l=d("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||f}function y(){}function m(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var v=m.prototype=new y;v.constructor=m,n(v,b.prototype),v.isPureReactComponent=!0;var k={current:null},j=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,o={},s=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];o.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:i,type:e,key:s,ref:a,props:o,_owner:k.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var E=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,r,n,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case i:case o:c=!0}}if(c)return s=s(c=e),e=""===n?"."+S(c,0):n,Array.isArray(s)?(r="",null!=e&&(r=e.replace(E,"$&/")+"/"),O(s,t,r,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),t.push(s)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+S(a=e[u],u);c+=O(a,t,r,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)c+=O(a=a.value,t,r,l=n+S(a,u++),s);else if("object"===a)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function C(e,t,r){if(null==e)return e;var n=[],i=0;return O(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(p(321));return e}var B={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},t.Component=b,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,r){if(null==e)throw Error(p(267,e));var o=n({},e.props),s=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=k.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)j.call(t,l)&&!x.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){u=Array(l);for(var d=0;d<l;d++)u[d]=arguments[d+2];o.children=u}return{$$typeof:i,type:e.type,key:s,ref:a,props:o,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return $().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,r){return $().useReducer(e,t,r)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>a,ah:()=>o});var n=r(667294);const i=n.createContext({});function o(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function a({components:e,children:t,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||s:o(e),n.createElement(i.Provider,{value:a},t)}}}]);