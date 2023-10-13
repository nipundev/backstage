/*! For license information please see f1bed9bd.cd5ec2c8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[107644],{104391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(824246),a=t(511151);const o={id:"configuring-plugin-databases",title:"Configuring Plugin Databases",description:"Guide on how to configure Backstage databases."},i=void 0,s={id:"tutorials/configuring-plugin-databases",title:"Configuring Plugin Databases",description:"Guide on how to configure Backstage databases.",source:"@site/../docs/tutorials/configuring-plugin-databases.md",sourceDirName:"tutorials",slug:"/tutorials/configuring-plugin-databases",permalink:"/docs/tutorials/configuring-plugin-databases",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tutorials/configuring-plugin-databases.md",tags:[],version:"current",frontMatter:{id:"configuring-plugin-databases",title:"Configuring Plugin Databases",description:"Guide on how to configure Backstage databases."},sidebar:"docs",previous:{title:"Migrating away from @backstage/core",permalink:"/docs/tutorials/migrating-away-from-core"},next:{title:"Switching Backstage from SQLite to PostgreSQL",permalink:"/docs/tutorials/switching-sqlite-postgres"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Minimal In-Memory Configuration",id:"minimal-in-memory-configuration",level:3},{value:"PostgreSQL",id:"postgresql",level:3},{value:"Custom Database Name Prefix",id:"custom-database-name-prefix",level:3},{value:"Connection Configuration Per Plugin",id:"connection-configuration-per-plugin",level:3},{value:"PostgreSQL and SQLite 3",id:"postgresql-and-sqlite-3",level:3},{value:"Check Your Databases",id:"check-your-databases",level:2},{value:"Privileges",id:"privileges",level:3}];function u(e){const n=Object.assign({p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre",strong:"strong"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This guide covers a variety of production persistence use cases which are\nsupported out of the box by Backstage. The database manager allows the developer\nto set the client and database connection details on a per plugin basis in\naddition to the base client and connection configuration. This means that you\ncan use a SQLite 3 in-memory database for a specific plugin whilst using\nPostgreSQL for everything else and so on."}),"\n",(0,r.jsxs)(n.p,{children:["By default, Backstage uses automatically created databases for each plugin whose\nnames follow the ",(0,r.jsx)(n.code,{children:"backstage_plugin_<pluginId>"})," pattern, e.g.\n",(0,r.jsx)(n.code,{children:"backstage_plugin_auth"}),". You can configure a different database name prefix for\nuse cases where you have multiple deployments running on a shared database\ninstance or cluster."]}),"\n",(0,r.jsxs)(n.p,{children:["With infrastructure defined as code or data (Terraform, AWS CloudFormation,\netc.), you may have database credentials which lack permissions to create new\ndatabases or you do not have control over the database names. In these\ninstances, you can set the database connection configuration on a\n",(0,r.jsx)(n.a,{href:"#connection-configuration-per-plugin",children:"per plugin basis"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Backstage supports all of these use cases with the ",(0,r.jsx)(n.code,{children:"DatabaseManager"})," provided by\n",(0,r.jsx)(n.code,{children:"@backstage/backend-common"}),". We will now cover how to use and configure\nBackstage's databases."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,r.jsxs)(n.p,{children:["Please ensure the appropriate database drivers are installed in your ",(0,r.jsx)(n.code,{children:"backend"}),"\npackage. If you intend to use both PostgreSQL and SQLite, you can install\nboth of them."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# From your Backstage root directory\n# install pg if you need PostgreSQL\nyarn add --cwd packages/backend pg\n\n# install SQLite 3 if you intend to set it as the client\nyarn add --cwd packages/backend better-sqlite3\n"})}),"\n",(0,r.jsx)(n.p,{children:"From an operational perspective, you only need to install drivers for clients\nthat are actively used."}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You should set the base database client and connection information in your\n",(0,r.jsx)(n.code,{children:"app-config.yaml"})," (or equivalent) file. The base client and configuration is\nused as the default which is extended for each plugin with the same or unset\nclient type. If a client type is specified for a specific plugin which does not\nmatch the base client, the configuration set for the plugin will be used as is\nwithout extending the base configuration."]}),"\n",(0,r.jsxs)(n.p,{children:["Client type and configuration for plugins need to be defined under\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"backend.database.plugin.<pluginId>"})}),". As an example, ",(0,r.jsx)(n.code,{children:"catalog"})," is the\n",(0,r.jsx)(n.code,{children:"pluginId"})," for the catalog plugin and any configuration defined under that block\nis specific to that plugin. We will now explore more detailed example\nconfigurations below."]}),"\n",(0,r.jsx)(n.h3,{id:"minimal-in-memory-configuration",children:"Minimal In-Memory Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["In the example below, we are using ",(0,r.jsx)(n.code,{children:"better-sqlite3"})," in-memory databases for all\nplugins. You may want to use this configuration for testing or other non-durable\nuse cases."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"backend:\n  database:\n    client: better-sqlite3\n    connection: ':memory:'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"postgresql",children:"PostgreSQL"}),"\n",(0,r.jsxs)(n.p,{children:["The example below uses PostgreSQL (",(0,r.jsx)(n.code,{children:"pg"}),") as the database client for all plugins.\nThe ",(0,r.jsx)(n.code,{children:"auth"})," plugin uses a user defined database name instead of the automatically\ngenerated one which would have been ",(0,r.jsx)(n.code,{children:"backstage_plugin_auth"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"backend:\n  database:\n    client: pg\n    connection:\n      host: some.example-pg-instance.tld\n      user: postgres\n      password: password\n      port: 5432\n    plugin:\n      auth:\n        connection:\n          database: pg_auth_set_by_user\n"})}),"\n",(0,r.jsx)(n.h3,{id:"custom-database-name-prefix",children:"Custom Database Name Prefix"}),"\n",(0,r.jsxs)(n.p,{children:["The configuration below uses ",(0,r.jsx)(n.code,{children:"example_prefix_"})," as the database name prefix\ninstead of ",(0,r.jsx)(n.code,{children:"backstage_plugin_"}),". Plugins such as ",(0,r.jsx)(n.code,{children:"auth"})," and ",(0,r.jsx)(n.code,{children:"catalog"})," will use\ndatabases named ",(0,r.jsx)(n.code,{children:"example_prefix_auth"})," and ",(0,r.jsx)(n.code,{children:"example_prefix_catalog"})," respectively."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"backend:\n  database:\n    client: pg\n    connection:\n      host: some.example-pg-instance.tld\n      user: postgres\n      password: password\n      port: 5432\n    prefix: 'example_prefix_'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"connection-configuration-per-plugin",children:"Connection Configuration Per Plugin"}),"\n",(0,r.jsxs)(n.p,{children:["Both ",(0,r.jsx)(n.code,{children:"auth"})," and ",(0,r.jsx)(n.code,{children:"catalog"})," use connection configuration with different\ncredentials and database names. This type of configuration can be useful for\nenvironments with infrastructure as code or data which may provide randomly\ngenerated credentials and/or database names."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"backend:\n  database:\n    client: pg\n    connection: 'postgresql://some.example-pg-instance.tld:5432'\n    plugin:\n      auth:\n        connection: 'postgresql://fort:knox@some.example-pg-instance.tld:5432/unwitting_fox_jumps'\n      catalog:\n        connection: 'postgresql://bank:reserve@some.example-pg-instance.tld:5432/shuffle_ransack_playback'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"postgresql-and-sqlite-3",children:"PostgreSQL and SQLite 3"}),"\n",(0,r.jsxs)(n.p,{children:["The example below uses PostgreSQL (",(0,r.jsx)(n.code,{children:"pg"}),") as the database client for all plugins\nexcept the ",(0,r.jsx)(n.code,{children:"auth"})," plugin which uses ",(0,r.jsx)(n.code,{children:"better-sqlite3"}),". As the ",(0,r.jsx)(n.code,{children:"auth"})," plugin's client\ntype is different from the base client type, the connection configuration for\n",(0,r.jsx)(n.code,{children:"auth"})," is used verbatim without extending the base configuration for PostgreSQL."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"backend:\n  database:\n    client: pg\n    connection: 'postgresql://foo:bar@some.example-pg-instance.tld:5432'\n    plugin:\n      auth:\n        client: better-sqlite3\n        connection: ':memory:'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"check-your-databases",children:"Check Your Databases"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"DatabaseManager"})," will attempt to create the databases if they do not exist.\nIf you have set credentials per plugin because the credentials in the base\nconfiguration do not have permissions to create databases, you must ensure they\nexist before starting the service. The service will not be able to create them,\nit can only use them."]}),"\n",(0,r.jsx)(n.h3,{id:"privileges",children:"Privileges"}),"\n",(0,r.jsx)(n.p,{children:"As Backstage attempts to check if the database exists, you may need to grant\nprivileges to list or show databases for a given user. For PostgreSQL, you would\ngrant the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-postgres",children:"GRANT SELECT ON pg_database TO some_user;\n"})}),"\n",(0,r.jsx)(n.p,{children:"MySQL:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mysql",children:"GRANT SHOW DATABASES ON *.* TO some_user;\n"})}),"\n",(0,r.jsx)(n.p,{children:"The mechanisms in this guide should help you tackle different database\ndeployment situations. Good luck!"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,a){for(var o,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in o=Object(arguments[c]))t.call(o,l)&&(s[l]=o[l]);if(n){i=n(o);for(var u=0;u<i.length;u++)r.call(o,i[u])&&(s[i[u]]=o[i[u]])}}return s}},371426:(e,n,t)=>{t(862525);var r=t(827378),a=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),n.Fragment=o("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,o={},l=null,u=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:a,type:e,key:l,ref:u,props:o,_owner:i.current}}n.jsx=l,n.jsxs=l},541535:(e,n,t)=>{var r=t(862525),a=60103,o=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var i=60109,s=60110,c=60112;n.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;a=d("react.element"),o=d("react.portal"),n.Fragment=d("react.fragment"),n.StrictMode=d("react.strict_mode"),n.Profiler=d("react.profiler"),i=d("react.provider"),s=d("react.context"),c=d("react.forward_ref"),n.Suspense=d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||h}function y(){}function b(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var x=b.prototype=new y;x.constructor=b,r(x,m.prototype),x.isPureReactComponent=!0;var v={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function _(e,n,t){var r,o={},i=null,s=null;if(null!=n)for(r in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(i=""+n.key),n)j.call(n,r)&&!w.hasOwnProperty(r)&&(o[r]=n[r]);var c=arguments.length-2;if(1===c)o.children=t;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:a,type:e,key:i,ref:s,props:o,_owner:v.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var S=/\/+/g;function P(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function C(e,n,t,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case o:c=!0}}if(c)return i=i(c=e),e=""===r?"."+P(c,0):r,Array.isArray(i)?(t="",null!=e&&(t=e.replace(S,"$&/")+"/"),C(i,n,t,"",(function(e){return e}))):null!=i&&(k(i)&&(i=function(e,n){return{$$typeof:a,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(S,"$&/")+"/")+e)),n.push(i)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+P(s=e[l],l);c+=C(s,n,t,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=C(s=s.value,n,t,u=r+P(s,l++),i);else if("object"===s)throw n=""+e,Error(f(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return c}function O(e,n,t){if(null==e)return e;var r=[],a=0;return C(e,r,"","",(function(e){return n.call(t,e,a++)})),r}function E(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var q={current:null};function L(){var e=q.current;if(null===e)throw Error(f(321));return e}var T={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:O,forEach:function(e,n,t){O(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return O(e,(function(){n++})),n},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(f(143));return e}},n.Component=m,n.PureComponent=b,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,n.cloneElement=function(e,n,t){if(null==e)throw Error(f(267,e));var o=r({},e.props),i=e.key,s=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,c=v.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in n)j.call(n,u)&&!w.hasOwnProperty(u)&&(o[u]=void 0===n[u]&&void 0!==l?l[u]:n[u])}var u=arguments.length-2;if(1===u)o.children=t;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];o.children=l}return{$$typeof:a,type:e.type,key:i,ref:s,props:o,_owner:c}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:s,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=_,n.createFactory=function(e){var n=_.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=k,n.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:E}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return L().useCallback(e,n)},n.useContext=function(e,n){return L().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return L().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return L().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return L().useLayoutEffect(e,n)},n.useMemo=function(e,n){return L().useMemo(e,n)},n.useReducer=function(e,n,t){return L().useReducer(e,n,t)},n.useRef=function(e){return L().useRef(e)},n.useState=function(e){return L().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>o});var r=t(667294);const a=r.createContext({});function o(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||i:o(e),r.createElement(a.Provider,{value:s},n)}}}]);