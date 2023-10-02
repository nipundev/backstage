/*! For license information please see c7526628.0c0a8aba.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[900280],{248375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(824246),o=n(511151);const i={id:"adrs-adr002",title:"ADR002: Default Software Catalog File Format",description:"Architecture Decision Record (ADR) log on Default Software Catalog File Format"},s=void 0,a={unversionedId:"architecture-decisions/adrs-adr002",id:"architecture-decisions/adrs-adr002",title:"ADR002: Default Software Catalog File Format",description:"Architecture Decision Record (ADR) log on Default Software Catalog File Format",source:"@site/../docs/architecture-decisions/adr002-default-catalog-file-format.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/adrs-adr002",permalink:"/docs/architecture-decisions/adrs-adr002",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/architecture-decisions/adr002-default-catalog-file-format.md",tags:[],version:"current",frontMatter:{id:"adrs-adr002",title:"ADR002: Default Software Catalog File Format",description:"Architecture Decision Record (ADR) log on Default Software Catalog File Format"},sidebar:"docs",previous:{title:"ADR001: Architecture Decision Record (ADR) log",permalink:"/docs/architecture-decisions/adrs-adr001"},next:{title:"ADR003: Avoid Default Exports and Prefer Named Exports",permalink:"/docs/architecture-decisions/adrs-adr003"}},c={},l=[{value:"Background",id:"background",level:2},{value:"Inspiration",id:"inspiration",level:3},{value:"Core Concepts",id:"core-concepts",level:3},{value:"Format",id:"format",level:2},{value:"Envelope",id:"envelope",level:2},{value:"<code>apiVersion</code> and <code>kind</code>",id:"apiversion-and-kind",level:3},{value:"<code>metadata</code>",id:"metadata",level:3},{value:"<code>spec</code>",id:"spec",level:3},{value:"Metadata",id:"metadata-1",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>namespace</code>",id:"namespace",level:3},{value:"<code>description</code>",id:"description",level:3},{value:"<code>labels</code>",id:"labels",level:3},{value:"<code>annotations</code>",id:"annotations",level:3},{value:"Component",id:"component",level:2}];function d(e){const t=Object.assign({h2:"h2",p:"p",h3:"h3",a:"a",code:"code",pre:"pre",em:"em",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,r.jsx)(t.p,{children:"Backstage comes with a software catalog functionality, that you can use to track\nall your software components and more. It can be powered by data from various\nsources, and one of them that is included with the package, is a custom database\nbacked catalog. It has the ability to keep itself updated automatically based on\nthe contents of little descriptor files in your version control system of\nchoice. Developers create these files and maintain them side by side with their\ncode, and the catalog system reacts accordingly."}),"\n",(0,r.jsx)(t.p,{children:"This ADR describes the default format of these descriptor files."}),"\n",(0,r.jsx)(t.h3,{id:"inspiration",children:"Inspiration"}),"\n",(0,r.jsx)(t.p,{children:"Internally at Spotify, a homegrown software catalog system is used heavily and\nforms a core part of Backstage and other important pieces of the infrastructure.\nThe user experience, learnings and certain pieces of metadata from that catalog\nare being carried over to the open source effort."}),"\n",(0,r.jsxs)(t.p,{children:["The file format described herein, also draws heavy inspiration from the\n",(0,r.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/",children:"kubernetes object format"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"core-concepts",children:"Core Concepts"}),"\n",(0,r.jsx)(t.p,{children:"There are a number of descriptor files, all of whose locations (e.g. within a\nversion control system) are registered with the software catalog. The method of\nregistration is not covered in this document; it could happen either manually\ninside Backstage, or by push events from a CI/CD pipelines, or by webhook\ntriggers from the version control system, etc."}),"\n",(0,r.jsxs)(t.p,{children:["Each file describes one or more entities in accordance with the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/390",children:"Backstage System Model"}),". All\nof these entities have a common structure and nomenclature, and they are stored\nin the software catalog from which they then can be queried."]}),"\n",(0,r.jsx)(t.p,{children:"Entities have distinct names, and they may reference each other by those names."}),"\n",(0,r.jsx)(t.h2,{id:"format",children:"Format"}),"\n",(0,r.jsxs)(t.p,{children:["Descriptor files use the ",(0,r.jsx)(t.a,{href:"https://yaml.org/spec/1.2/spec.html",children:"YAML"})," format.\nThey may be written by hand, or created using automated tools. Each file may\nconsist of several YAML documents (separated by ",(0,r.jsx)(t.code,{children:"---"}),"), where each document\ndescribes a single entity."]}),"\n",(0,r.jsx)(t.p,{children:"This is an example entity definition with some mocked data."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"---\napiVersion: backstage.io/v1alpha1\nkind: Component\nmetadata:\n  name: frobs-awesome\n  description: |\n    Backend service that implements the Frobs API, as defined\n    in [the Frobs RFC](https://example.com/spec/frob.html).\n  labels:\n    system: frobs\n    lifecycle: production\n    example.com/service-discovery-name: frobsawesome\n  annotations:\n    circleci.com/project-slug: github/example-org/frobs-awesome\nspec:\n  type: service\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The root fields ",(0,r.jsx)(t.code,{children:"apiVersion"}),", ",(0,r.jsx)(t.code,{children:"kind"}),", ",(0,r.jsx)(t.code,{children:"metadata"}),", and ",(0,r.jsx)(t.code,{children:"spec"})," are part of the\n",(0,r.jsx)(t.em,{children:"envelope"}),", defining the overall structure of all kinds of entity. Likewise, the\n",(0,r.jsx)(t.code,{children:"name"}),", ",(0,r.jsx)(t.code,{children:"namespace"}),", ",(0,r.jsx)(t.code,{children:"labels"}),", and ",(0,r.jsx)(t.code,{children:"annotations"})," metadata fields are of special\nsignificance and have reserved purposes and distinct shapes."]}),"\n",(0,r.jsx)(t.p,{children:"See below for details about these fields."}),"\n",(0,r.jsx)(t.h2,{id:"envelope",children:"Envelope"}),"\n",(0,r.jsx)(t.p,{children:"The root envelope object has the following structure."}),"\n",(0,r.jsxs)(t.h3,{id:"apiversion-and-kind",children:[(0,r.jsx)(t.code,{children:"apiVersion"})," and ",(0,r.jsx)(t.code,{children:"kind"})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"kind"})," is the high level entity type being described, typically from the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/390",children:"Backstage system model"}),". The\nfirst versions of the catalog will focus on the ",(0,r.jsx)(t.code,{children:"Component"})," kind."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"apiVersion"}),"is the version of specification format for that particular\nentity that this file is written against. The version is used for being able to\nevolve the format, and the tuple of ",(0,r.jsx)(t.code,{children:"apiVersion"})," and ",(0,r.jsx)(t.code,{children:"kind"})," should be enough for\na parser to know how to interpret the contents of the rest of the document."]}),"\n",(0,r.jsxs)(t.p,{children:["Backstage specific entities have an ",(0,r.jsx)(t.code,{children:"apiVersion"})," that is prefixed with\n",(0,r.jsx)(t.code,{children:"backstage.io/"}),", to distinguish them from other types of object that share the\nsame type of structure. This may be relevant when co-hosting these\nspecifications with e.g. kubernetes object manifests."]}),"\n",(0,r.jsxs)(t.p,{children:["Early versions of the catalog will be using alpha/beta versions, e.g.\n",(0,r.jsx)(t.code,{children:"backstage.io/v1alpha1"}),", to signal that the format may still change. After that,\nwe will be using ",(0,r.jsx)(t.code,{children:"backstage.io/v1"})," and up."]}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:(0,r.jsx)(t.code,{children:"metadata"})}),"\n",(0,r.jsx)(t.p,{children:"A structure that contains metadata about the entity, i.e. things that aren't\ndirectly part of the entity specification itself. See below for more details\nabout this structure."}),"\n",(0,r.jsx)(t.h3,{id:"spec",children:(0,r.jsx)(t.code,{children:"spec"})}),"\n",(0,r.jsx)(t.p,{children:"The actual specification data that describes the entity."}),"\n",(0,r.jsxs)(t.p,{children:["The precise structure of the ",(0,r.jsx)(t.code,{children:"spec"})," depends on the ",(0,r.jsx)(t.code,{children:"apiVersion"})," and ",(0,r.jsx)(t.code,{children:"kind"}),"\ncombination, and some kinds may not even have a ",(0,r.jsx)(t.code,{children:"spec"})," at all. See further down\nin this document for the specification structure of specific kinds."]}),"\n",(0,r.jsx)(t.h2,{id:"metadata-1",children:"Metadata"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"metadata"})," root field has the following nested structure."]}),"\n",(0,r.jsx)(t.h3,{id:"name",children:(0,r.jsx)(t.code,{children:"name"})}),"\n",(0,r.jsx)(t.p,{children:"The name of the entity. This name is both meant for human eyes to recognize the\nentity, and for machines and other components to reference the entity (e.g. in\nURLs or from other entity specification files)."}),"\n",(0,r.jsx)(t.p,{children:"Names must be unique per kind, within a given namespace (if specified), at any\npoint in time. This uniqueness constraint is also case insensitive. Names may be\nreused at a later time, after an entity is deleted from the registry."}),"\n",(0,r.jsx)(t.p,{children:"Names are required to follow a certain format. Entities that do not follow those\nrules will not be accepted for registration in the catalog. The ruleset is\nconfigurable to fit your organization's needs, but the default behavior is as\nfollows."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Strings of length at least 1, and at most 63"}),"\n",(0,r.jsxs)(t.li,{children:["Must consist of sequences of ",(0,r.jsx)(t.code,{children:"[a-z0-9A-Z]"})," possibly separated by one of\n",(0,r.jsx)(t.code,{children:"[-_.]"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Example: ",(0,r.jsx)(t.code,{children:"visits-tracking-service"}),", ",(0,r.jsx)(t.code,{children:"CircleciBuildsDs_avro_gcs"})]}),"\n",(0,r.jsx)(t.h3,{id:"namespace",children:(0,r.jsx)(t.code,{children:"namespace"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"name"})," of a namespace that the entity belongs to. This field is optional,\nand currently has no special semantics apart from bounding the name uniqueness\nconstraint if specified. It is reserved for future use and may get broader\nsemantic implication."]}),"\n",(0,r.jsxs)(t.p,{children:["Namespaces may also be part of the catalog, and are ",(0,r.jsx)(t.code,{children:"v1"})," / ",(0,r.jsx)(t.code,{children:"Namespace"})," entities,\ni.e. not Backstage specific but the same as in Kubernetes."]}),"\n",(0,r.jsx)(t.h3,{id:"description",children:(0,r.jsx)(t.code,{children:"description"})}),"\n",(0,r.jsx)(t.p,{children:"A human readable description of the entity, to be shown in Backstage. Should be\nkept short and informative, suitable to give an overview of the entity's purpose\nat a glance. More detailed explanations and documentation should be placed\nelsewhere."}),"\n",(0,r.jsx)(t.h3,{id:"labels",children:(0,r.jsx)(t.code,{children:"labels"})}),"\n",(0,r.jsxs)(t.p,{children:["Labels are optional key/value pairs of that are attached to the entity, and\ntheir use is identical to\n",(0,r.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",children:"kubernetes object labels"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Their main purpose is for references to other entities, and for information that\nis in one way or another classifying for the current entity. They are often used\nas values in queries or filters."}),"\n",(0,r.jsx)(t.p,{children:"Both the key and the value are strings, subject to the following restrictions."}),"\n",(0,r.jsxs)(t.p,{children:["Keys have an optional prefix followed by a slash, and then the name part which\nis required. The prefix must be a valid lowercase domain name, at most 253\ncharacters in total. The name part must be sequences of ",(0,r.jsx)(t.code,{children:"[a-zA-Z0-9]"})," separated\nby any of ",(0,r.jsx)(t.code,{children:"[-_.]"}),", at most 63 characters in total."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"backstage.io/"})," prefix is reserved for use by Backstage core components.\nSome keys such as ",(0,r.jsx)(t.code,{children:"system"})," also have predefined semantics."]}),"\n",(0,r.jsxs)(t.p,{children:["Values are strings that follow the same restrictions as ",(0,r.jsx)(t.code,{children:"name"})," above."]}),"\n",(0,r.jsx)(t.h3,{id:"annotations",children:(0,r.jsx)(t.code,{children:"annotations"})}),"\n",(0,r.jsxs)(t.p,{children:["An object with arbitrary non-identifying metadata attached to the entity,\nidentical in use to\n",(0,r.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/",children:"kubernetes object annotations"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Their purpose is mainly, but not limited, to reference into external systems.\nThis could for example be a reference to the git ref the entity was ingested\nfrom, to monitoring and logging systems, to pagerduty schedules, etc."}),"\n",(0,r.jsx)(t.p,{children:"Both the key and the value are strings, subject to the following restrictions."}),"\n",(0,r.jsxs)(t.p,{children:["Keys have an optional prefix followed by a slash, and then the name part which\nis required. The prefix must be a valid lowercase domain name, at most 253\ncharacters in total. The name part must be sequences of ",(0,r.jsx)(t.code,{children:"[a-zA-Z0-9]"})," separated\nby any of ",(0,r.jsx)(t.code,{children:"[-_.]"}),", at most 63 characters in total."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"backstage.io/"})," prefix is reserved for use by Backstage core components."]}),"\n",(0,r.jsx)(t.p,{children:"Values can be of any length, but are limited to being strings."}),"\n",(0,r.jsx)(t.h2,{id:"component",children:"Component"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"apiVersion"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"backstage.io/v1alpha1"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"kind"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Component"})})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"spec"})," object for this kind is as follows:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"type"})}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsxs)(t.td,{children:["The type of component, e.g. ",(0,r.jsx)(t.code,{children:"service"}),"."]})]})})]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))n.call(i,l)&&(a[l]=i[l]);if(t){s=t(i);for(var d=0;d<s.length;d++)r.call(i,s[d])&&(a[s[d]]=i[s[d]])}}return a}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:d,props:i,_owner:s.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,a=60110,c=60112;t.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var h=Symbol.for;o=h("react.element"),i=h("react.portal"),t.Fragment=h("react.fragment"),t.StrictMode=h("react.strict_mode"),t.Profiler=h("react.profiler"),s=h("react.provider"),a=h("react.context"),c=h("react.forward_ref"),t.Suspense=h("react.suspense"),l=h("react.memo"),d=h("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}function j(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=y.prototype;var x=b.prototype=new j;x.constructor=b,r(x,y.prototype),x.isPureReactComponent=!0;var v={current:null},g=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,i={},s=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)g.call(t,r)&&!w.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:o,type:e,key:s,ref:a,props:i,_owner:v.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,n,r,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return s=s(c=e),e=""===r?"."+S(c,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),T(s,t,n,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(C,"$&/")+"/")+e)),t.push(s)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=r+S(a=e[l],l);c+=T(a,t,n,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(a=e.next()).done;)c+=T(a=a.value,t,n,d=r+S(a,l++),s);else if("object"===a)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function R(e,t,n){if(null==e)return e;var r=[],o=0;return T(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var O={current:null};function A(){var e=O.current;if(null===e)throw Error(f(321));return e}var D={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(f(143));return e}},t.Component=y,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,n){if(null==e)throw Error(f(267,e));var i=r({},e.props),s=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=v.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)g.call(t,d)&&!w.hasOwnProperty(d)&&(i[d]=void 0===t[d]&&void 0!==l?l[d]:t[d])}var d=arguments.length-2;if(1===d)i.children=n;else if(1<d){l=Array(d);for(var h=0;h<d;h++)l[h]=arguments[h+2];i.children=l}return{$$typeof:o,type:e.type,key:s,ref:a,props:i,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return A().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,n){return A().useReducer(e,t,n)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:a},t)}}}]);