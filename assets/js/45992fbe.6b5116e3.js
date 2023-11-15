"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,d=m["".concat(s,".").concat(c)]||m[c]||h[c]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={slug:"problem_discovery",title:"Problem discovery",tags:["opinion"]},i="Problem discovery",l={permalink:"/blog/problem_discovery",source:"@site/blog/2023-10-28_problem_solving.md",title:"Problem discovery",description:"Problem solving is hard! But what I think is harder, is actually problem discovery.",date:"2023-10-28T00:00:00.000Z",formattedDate:"October 28, 2023",tags:[{label:"opinion",permalink:"/blog/tags/opinion"}],readingTime:4.535,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"problem_discovery",title:"Problem discovery",tags:["opinion"]},prevItem:{title:"OOP vs The Noobs",permalink:"/blog/OOP_vs_the_noobs"},nextItem:{title:"Results orientated gamedev, and why it's bad",permalink:"/blog/results_orientated_gamedev"}},s={authorsImageUrls:[]},p=[{value:"Hold up!",id:"hold-up",level:2}],u={toc:p},m="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Problem solving is hard! But what I think is harder, is actually ",(0,a.kt)("em",{parentName:"p"},"problem discovery."),(0,a.kt)("br",null),"\nThis article will be a bunch of rambling about how I like to approach creativity in an engineering context."),(0,a.kt)("p",null,"In my opinion, the hard part is not solving problems:",(0,a.kt)("br",null),"\nThe hard part is ",(0,a.kt)("em",{parentName:"p"},"recognizing")," the problems.",(0,a.kt)("br",null),"\nSome kinds of problems are insanely hard to recognize, because we just accept them for what they are. "),(0,a.kt)("p",null,"This is especially apparent for programmers.",(0,a.kt)("br",null),"\nAs programmers, we are highly accustomed to working within the limits and constraints of our systems.",(0,a.kt)("br",null),"\nAnd with this, I feel like it is very easy to mistake problems for unmoving constraints."),(0,a.kt)("p",null,'These kind of problems, problems that are mistaken for systemic constraints, I like to call "Parasitic problems".',(0,a.kt)("br",null),"\nParasitic problems aren't really apparent at first glance, because our brain mistakes them for unchangable constraints of the system.",(0,a.kt)("br",null),"\nThese kind of problems can affect end products ",(0,a.kt)("em",{parentName:"p"},"dramatically"),".",(0,a.kt)("br",null),"If we don't recognize parasitic-problems, they will sit there ",(0,a.kt)("em",{parentName:"p"},"FOREVER"),", just beneath our code. Like a dark, invisible parasite, putting a dull tax on efficiency.",(0,a.kt)("br",null),"\nAnd what's frustrating, is that most of the time, we won't notice that these problems even exist, because we mistake them for systemic constraints!"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"an-example-horses-in-the-middle-ages"},"An example: Horses in the Middle ages"),(0,a.kt)("p",null,"If you are a King in the middle ages, and you want to move your army from point-A to point-B as fast as possible, you will send them on horses."),(0,a.kt)("p",null,"But the issue is that horses can only move so fast!",(0,a.kt)("br",null),"\nYour horses can travel about 40 kilometers a day with equipment, but that's not fast enough to respond to an invasion force.",(0,a.kt)("br",null),"\nAnd we know FOR SURE that ",(0,a.kt)("em",{parentName:"p"},"Terry the Terrible")," is plotting an invasion right as we speak. "),(0,a.kt)("p",null,"OK! What should we do?",(0,a.kt)("br",null),"\nWe could do a few things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set up a barracks closer to the settlements, and keep some armies there"),(0,a.kt)("li",{parentName:"ul"},"Train (and equip) the villagers so they can defend themselves"),(0,a.kt)("li",{parentName:"ul"},"Spread propaganda within enemy territory to prevent an invasion in the first place")),(0,a.kt)("p",null,"Nice! Ok, these are all valid options.",(0,a.kt)("br",null),"\nBut you, (Your majesty,) are missing one crucial detail: You are looking at the ",(0,a.kt)("em",{parentName:"p"},"solutions"),", not the ",(0,a.kt)("em",{parentName:"p"},"problem."),(0,a.kt)("br",null),'\nRememember our original problem: "Our armies can\'t respond to invasions in time"'),(0,a.kt)("p",null,"And our primary constraint is that our horses can only travel 40 kilometers per day.",(0,a.kt)("br",null),"\nCan we change this?"),(0,a.kt)("p",null,"Well of course we can!",(0,a.kt)("br",null),"\nIn modern-day, armies travel by air, by train, and by truck.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"With this, we have re-defined our problem:",(0,a.kt)("br",null)),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"Our armies can\'t respond to invasions in time"',(0,a.kt)("br",null),"\nGets changed to:",(0,a.kt)("br",null),'\n"Our armies are moving too slow"')),(0,a.kt)("p",null,'I\'d like to clarify here. We are not "solving" a problem. We are RE-DEFINING the problem. With the initial problem, we ',(0,a.kt)("em",{parentName:"p"},"assumed")," that horse-speeds were a constant constraint.",(0,a.kt)("br",null),"\nWith our previous problem-statement, we didn't even LOOK for solutions to move our armies faster, since we regarded it as a constraint. This is a great example of a parasitic problem."),(0,a.kt)("p",null,"For years, the problem of army-movement was locked to the speed of horses. But you, benevolent King, you can change that!",(0,a.kt)("br",null),"\nAll you need to do, is invent the amazing ",(0,a.kt)("em",{parentName:"p"},"steam engine"),", and the ",(0,a.kt)("em",{parentName:"p"},"locomotive.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"train_poster",src:n(5863).Z,width:"883",height:"1140"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"hold-up"},"Hold up!"),(0,a.kt)("p",null,'Simply "inventing trains" is no easy feat.',(0,a.kt)("br",null),'\nFirst off, how do we know that locomotives are even possible? It\'s easy to say "invent X, invent Y" in ',(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Egg_of_Columbus"},"hindsight"),", since the brilliant discovery has already been done."),(0,a.kt)("p",null,"(And, before we go further; I'd like to point out the invention of trains is a pretty bad example to use for this.",(0,a.kt)("br",null),"\nWhen you and I go to solve problems in our software, we will generally solve small problems, with small scopes. Going from horses to locomotives is NOT a solution with a small scope.\nI just wanted to point out- the main reason I used this example is because it's very easy to understand.)"),(0,a.kt)("p",null,"In any case, the awkward thing about parasitic problems, is that often, you'll be stumbling around blindly.",(0,a.kt)("br",null),'\nIf the problem-statement had instead been changed to: "How do we find horses that are 100x stronger?" then I\'m sure that nothing would have been accomplished; since (biologically) there is so such thing.',(0,a.kt)("br",null),"\nBut back then, medieval empires wouldn't have known this. It's likely that a lot of time was wasted trying to solve the \"problem\" of finding/creating giant horses!"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"big_moose",src:n(1323).Z,width:"487",height:"327"})),(0,a.kt)("hr",null),(0,a.kt)("p",null,'Quite frankly, this is the trouble with "solving" parasitic-problems.',(0,a.kt)("br",null),"\nRemember that a parasitic-problem is just a constraint ",(0,a.kt)("em",{parentName:"p"},"redefined")," as a problem. We haven't actually solved anything; and we don't know if a solution is possible.",(0,a.kt)("br",null),"\nIt's entirely possible that the problem is actually a hard constraint."),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"solving-parasitic-problems-accidentally"},"Solving parasitic-problems accidentally:"),(0,a.kt)("p",null,"I also think that toying around with random ideas is underrated. When I came up with the idea for ",(0,a.kt)("a",{parentName:"p",href:"../buses"},"question buses"),', I wasn\'t attempting to "solve" any problem, I was just curious as to what event-buses would look like if the data flow was reversed.',(0,a.kt)("br",null),"\nAnd as it turned out, question-buses have completely transformed the project."),(0,a.kt)("p",null,"This was the same with the load-time entityType mutation API. (Ie. UMG's ",(0,a.kt)("inlineCode",{parentName:"p"},"@newEntityType")," callback; naming may be different.)\nWith this, I wasn't actually looking to solve anything, I was just toying around with ideas. As soon as the API existed, the problems that it solved materialized into existance- from unseen-constraints, to a set of parasitic-problems that could be solved easily with this new setup."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Thanks for reading this opinion piece!"))}h.isMDXComponent=!0},1323:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/giant_moose_army-f16a53b92431ec79babdc4dfe9fa5f53.png"},5863:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/train_poster-eea95e46c8d1b836656347baa52d4c31.jpg"}}]);