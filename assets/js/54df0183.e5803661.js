"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),f=a,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="Groups",p={unversionedId:"Getting-started/groups",id:"Getting-started/groups",title:"Groups",description:'"Groups" are what contains entities.',source:"@site/docs/Getting-started/groups.md",sourceDirName:"Getting-started",slug:"/Getting-started/groups",permalink:"/docs/Getting-started/groups",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entities",permalink:"/docs/Getting-started/entities"}},s={},l=[],u={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"groups"},"Groups"),(0,a.kt)("p",null,'"Groups" are what contains entities.',(0,a.kt)("br",null),"\nTo get a group, use ",(0,a.kt)("inlineCode",{parentName:"p"},"umg.group"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local drawGroup = umg.group("x", "y", "image")\n')),(0,a.kt)("p",null,"Groups are automatically populated with entities.",(0,a.kt)("br",null),"\nThis one takes entities with ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"y"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," components.",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("p",null,"We can also do other stuff:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'drawGroup:onAdded(function(ent)\n    print("entity added to drawGroup! :) ")\nend)\n\ndrawGroup:onRemoved(function(ent)\n    print("aww, entity removed from drawGroup")\n    -- happens when an entity is deleted, or when components are removed\nend)\n\n\nlocal function draw()\n    -- iteration is the same as a regular lua table:\n    for i, ent in ipairs(drawGroup) do\n        ...\n    end\nend\n\n\ndrawGroup:len() -- gets length of a group\n\ndrawGroup:has(ent) -- returns true if `ent` is in drawGroup, false otherwise.\n\n')),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"doesn't matter if the components are shared or regular, as long as the entity has all of them.",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);