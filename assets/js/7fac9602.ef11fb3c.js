"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,c=u["".concat(o,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(c,s(s({ref:t},m),{},{components:n})):a.createElement(c,s({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={slug:"results_orientated_gamedev",title:"Results orientated gamedev, and why it's bad",tags:["design","opinion"]},s="Results orientated gamedev, and why it's bad",l={permalink:"/blog/results_orientated_gamedev",source:"@site/blog/2023-10-04_results_orientated.md",title:"Results orientated gamedev, and why it's bad",description:"When a lot of developers start creating their game, they probably start with the end gameplay in mind.",date:"2023-10-04T00:00:00.000Z",formattedDate:"October 4, 2023",tags:[{label:"design",permalink:"/blog/tags/design"},{label:"opinion",permalink:"/blog/tags/opinion"}],readingTime:3.96,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"results_orientated_gamedev",title:"Results orientated gamedev, and why it's bad",tags:["design","opinion"]},nextItem:{title:"UMG Idioms",permalink:"/blog/umgidioms"}},o={authorsImageUrls:[]},p=[{value:"UH OH: HOT TAKES INCOMING!",id:"uh-oh-hot-takes-incoming",level:3}],m={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When a lot of developers start creating their game, they probably start with the end gameplay in mind.",(0,r.kt)("br",null),"\nI think that this is a terrible way to design games.",(0,r.kt)("br",null),"\nThis article will explain why I think so."),(0,r.kt)("h3",{id:"uh-oh-hot-takes-incoming"},"UH OH: HOT TAKES INCOMING!"),(0,r.kt)("p",null,"This article is a successor to ",(0,r.kt)("a",{parentName:"p",href:"../emergence"},"my article on emergence.")),(0,r.kt)("p",null,'Ok. So what do I mean when I say "results orientated"?',(0,r.kt)("br",null),'\nWhen I say a development cycle is "results orientated", I mean that the developers start with the player interactions/gameplay in mind, and develop the product from there.'),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Take for example, this development cycle:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"We want gameplay where the players shoot zombies, and build fortifications to defend against zombies".')),(0,r.kt)("p",null,"Ok.",(0,r.kt)("br",null),"\nWith this goal in mind, the development cycle will continue as expected... When the cycle is finished, we will have a basic product. Players will be able to build fortifications, and use their guns to fend off the waves of undead.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"But the problem with this setup is that we have (probably) created a highly one-dimensional setup.",(0,r.kt)("br",null),"\nDoes it matter if we have hordes of undead to fight, if our systems aren't good?"),(0,r.kt)("p",null,'When I talk "systems", I don\'t mean invisible architecture; I mean real systems that the player can observe and intuitively interact with.',(0,r.kt)("br",null),"\nThe building/fortification system is great! cool! But did we implement it in a way that gives depth, ",(0,r.kt)("em",{parentName:"p"},"beyond")," the closed scope of the development cycle?",(0,r.kt)("br",null),"\nSure, our fortifications are great at dealing with zombies! But next update, we are adding multiplayer. Will our fortifications be able to deal with an onslaught of raiders from the other side of the server?",(0,r.kt)("br",null),"\nMaybe! But even if they ",(0,r.kt)("em",{parentName:"p"},"do")," succeed in fending off player raiders, they weren't meant to, and we got lucky.",(0,r.kt)("br",null),"\nAnd this is our problem."),(0,r.kt)("p",null,"It would be much better if we started off with a more generic goal, and started development from a ",(0,r.kt)("em",{parentName:"p"},"systems orientated")," perspective."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"We want a system where the player can manipulate structures to serve their goals"')),(0,r.kt)("p",null,"Already, this looks way more promising.",(0,r.kt)("br",null),"\nLets ignore zombies. Lets ignore raiders. Lets just give our players the ",(0,r.kt)("em",{parentName:"p"},"tools")," to create and manipulate structures in a comprehensive fashion. From there, whatever other systems/mechanics we may add in the future, they are guaranteed to mesh well with our building system, since we made our system open ended."),(0,r.kt)("p",null,'I call this, "systems orientated" development.'),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"chess"},"Chess!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"chess",src:n(4615).Z,width:"540",height:"360"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Chess is epic.",(0,r.kt)("br",null),"\nIt's one of the best games to ever exist. And it's popularity proves it."),(0,r.kt)("p",null,'Chess was a game that was developed from a "systems orientated" perspective, as opposed to a "results orientated" perspective.'),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Ok! Lets have a look at some of the core mechanics of chess, and lets imagine what Chess would look like if it was developed with the end-result in mind."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Forks.")," <-- These things ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fork_(chess)"},"are an important part of chess."),(0,r.kt)("br",null),"\nHowever, lets stop to ponder."),(0,r.kt)("p",null,"The genius cavemen who created chess... did they develop chess with forks in mind? "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Caveman Bob:"),' "Hey Caveman Fred, ooga booga. You know what I want? I want a game where there are ',(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Pin_(chess)"},"PINS"),", and ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Fork_(chess)"},"FORKS!"),'"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Caveman Fred:"),' "Ooga booga, that sounds like a GREAT idea!"')),(0,r.kt)("p",null,"So I can guarantee that this never happened.",(0,r.kt)("br",null),"\nWhy? Well, because forks and pins ",(0,r.kt)("em",{parentName:"p"},"don't exist outside of chess."),(0,r.kt)("br",null),"\nThey were created as a result of chess's amazing systems."),(0,r.kt)("p",null,"If we try to create truly interesting/emergent gameplay from a results-orientated perspective, we will fail. Because the most interesting game mechanics simply ",(0,r.kt)("em",{parentName:"p"},"don't exist"),", unless the systems exist to back them up."),(0,r.kt)("p",null,"Consider:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Caveman Bob:"),' "How about we make a game where positional strategy is really important?"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Caveman Fred:"),' "Ooga booga! OK!"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Caveman Bob:"),' "Hmm. We need a system where pieces can link up and connect with each other."'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Caveman Fred:"),' "What if pieces can capture other pieces? That way, by positioning your pieces, you can protect them."')),(0,r.kt)("p",null,"From there, Fred and Bob would go on to create the most influential game in human history, (besides Go)."),(0,r.kt)("p",null,"Note that they didn't start with a direct end goal in mind. They started with a vague idea for an interesting concept.",(0,r.kt)("br",null),"\nBob and Fred developed chess from a ",(0,r.kt)("em",{parentName:"p"},"systems-orientated")," perspective. And as a result, pins and forks were implemented for ",(0,r.kt)("em",{parentName:"p"},"free"),", which are super important gameplay elements in chess."),(0,r.kt)("p",null,"And that's pretty much my main point."),(0,r.kt)("p",null,"I know, it feels weird. It feels dumb. My inner project-manager is enraged!",(0,r.kt)("br",null),"\nBut I truly believe that developing systems, and having ",(0,r.kt)("a",{parentName:"p",href:"../emergence"},"systematic emergence")," in games is ",(0,r.kt)("strong",{parentName:"p"},"way more important")," than having a direct end-result that you can work towards."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Good systems create gameplay.",(0,r.kt)("br",null),"\nBut good gameplay cannot create systems."),(0,r.kt)("p",null,"Thanks for reading this opinion piece! :)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Oli")))}d.isMDXComponent=!0},4615:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chess2-3ab90b85683366c5880bd577fcdb3d24.jpg"}}]);