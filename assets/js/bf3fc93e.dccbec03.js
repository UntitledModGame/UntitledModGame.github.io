"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={slug:"ent_propagation",title:"Entity propagation",tags:["design","umg"]},i=void 0,p={permalink:"/blog/ent_propagation",source:"@site/blog/2024-06-17_propagation.md",title:"Entity propagation",description:"This post explains entity propagation behavior in umg.",date:"2024-06-17T00:00:00.000Z",formattedDate:"June 17, 2024",tags:[{label:"design",permalink:"/blog/tags/design"},{label:"umg",permalink:"/blog/tags/umg"}],readingTime:1.235,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"ent_propagation",title:"Entity propagation",tags:["design","umg"]},prevItem:{title:"The Zen of UMG",permalink:"/blog/zen_of_umg"},nextItem:{title:"UMG Piping idiom",permalink:"/blog/piping_idiom"}},l={authorsImageUrls:[]},s=[{value:"Nested propagation",id:"nested-propagation",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This post explains entity propagation behavior in umg."),(0,r.kt)("p",null,"in UMG, deletion and cloning are propagated to other entities through components."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"ent.foo = otherEnt\n-- `ent` references `otherEnt` through component foo\n\nent:clone()\n-- otherEnt is cloned too...\n\nent:delete()\n-- otherEnt is deleted too!\n")),(0,r.kt)("p",null,'This concept is known as "propagation".',(0,r.kt)("br",{parentName:"p"}),"\n","But... why are the clone and delete operations propagated?  "),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Consider the following scenario:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- Save and delete the ent:\nlocal data = serialize(ent)\nent:delete()\n\n-- Now load the saved ent:\nlocal ent = load(data)\n")),(0,r.kt)("p",null,"This operation could happen when we are saving a world."),(0,r.kt)("p",null,"The big question is: what should happen to ",(0,r.kt)("inlineCode",{parentName:"p"},"otherEnt"),"?",(0,r.kt)("br",{parentName:"p"}),"\n","It obviously needs to be saved alongside ",(0,r.kt)("inlineCode",{parentName:"p"},"ent"),"... Or else ",(0,r.kt)("inlineCode",{parentName:"p"},"ent")," will lose component data.   "),(0,r.kt)("p",null,"What about deletion though?",(0,r.kt)("br",{parentName:"p"}),"\n","The simple solution is to keep ",(0,r.kt)("inlineCode",{parentName:"p"},"otherEnt")," alive.",(0,r.kt)("br",{parentName:"p"}),"\n","Let's consider this."),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"ent")," is saved, a copy of ",(0,r.kt)("inlineCode",{parentName:"p"},"otherEnt")," is serialized and saved to ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),". This is because it is referenced inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," component.  "),(0,r.kt)("p",null,"Therefore when the data is loaded, a copy of ",(0,r.kt)("inlineCode",{parentName:"p"},"otherEnt")," is also loaded."),(0,r.kt)("p",null,"Aha! And that's the big problem.",(0,r.kt)("br",{parentName:"p"}),"\n","If we didn't delete ",(0,r.kt)("inlineCode",{parentName:"p"},"otherEnt"),", then we would have two copies of it in the ECS.",(0,r.kt)("br",{parentName:"p"}),"\n","In order to have entities within components, we need propagation."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"nested-propagation"},"Nested propagation"),(0,r.kt)("p",null,"Propagation is applied through entities, as well as through data structures.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"ent.abc = {\n    hi = {ent_1, ent_2}\n    -- These are propagated.\n    -- (So is anything that these entities reference)\n}\n")))}c.isMDXComponent=!0}}]);