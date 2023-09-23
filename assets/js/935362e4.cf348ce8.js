"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6506],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=m(a),c=i,d=u["".concat(s,".").concat(c)]||u[c]||p[c]||l;return a?n.createElement(d,r(r({ref:t},h),{},{components:a})):n.createElement(d,r({ref:t},h))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9376:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),i=(a(7294),a(3905));const l={slug:"emergence",title:"Emergence in games",tags:["gamedesign","opinion"]},r="OPINION: Emergence in games",o={permalink:"/blog/emergence",source:"@site/blog/2023-04-28_emergence.md",title:"Emergence in games",description:"Emergence is not needed for a good game. And we know this, because there are",date:"2023-04-28T00:00:00.000Z",formattedDate:"April 28, 2023",tags:[{label:"gamedesign",permalink:"/blog/tags/gamedesign"},{label:"opinion",permalink:"/blog/tags/opinion"}],readingTime:14.235,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"emergence",title:"Emergence in games",tags:["gamedesign","opinion"]},prevItem:{title:"Question buses in UMG",permalink:"/blog/buses"}},s={authorsImageUrls:[]},m=[{value:"Lets discuss the golden rule:",id:"lets-discuss-the-golden-rule",level:2},{value:"<em>Minecraft.</em>",id:"minecraft",level:2},{value:"Minecraft- Emergence in building:",id:"minecraft--emergence-in-building",level:2},{value:"Minecraft- Emergence in engineering:",id:"minecraft--emergence-in-engineering",level:2},{value:"Is Minecraft cheating?",id:"is-minecraft-cheating",level:2},{value:"Emergence in the Binding of Isaac",id:"emergence-in-the-binding-of-isaac",level:2},{value:"Emergence as a natural phenomenon",id:"emergence-as-a-natural-phenomenon",level:2},{value:"The Friendly-Fire dilemma",id:"the-friendly-fire-dilemma",level:4},{value:"Emergence in Super Auto Pets",id:"emergence-in-super-auto-pets",level:2}],h={toc:m},u="wrapper";function p(e){let{components:t,...l}=e;return(0,i.kt)(u,(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Emergence is not needed for a good game. And we know this, because there are\nplenty of successful games out there that are non-emergent.\n(Some examples being: Super Meat Boy, the whole Call of Duty franchise, Mario Kart)"),(0,i.kt)("p",null,"But as an indie developer, we are in a field where we ",(0,i.kt)("strong",{parentName:"p"},"NEED")," to put ourselves ahead by taking risks.\nIf we don't, we will be outcompeted by others similar to us."),(0,i.kt)("p",null,"Emergence offers us a way to create way more gameplay opportunities, for very little cost.\nAs an indie dev, creating extra gameplay without needing to expend vast amounts of resources\nis very useful."),(0,i.kt)("p",null,"But... what ",(0,i.kt)("em",{parentName:"p"},"IS")," Emergence in a game context?",(0,i.kt)("br",null),"\nEmergence itself is quite hard to define! "),(0,i.kt)("p",null,"So in this blog post, I'll examine a few examples of good emergence from existing games,\nand cherry pick what I think is the good stuff."),(0,i.kt)("p",null,"Keep in mind, this is all just my opinion!"),(0,i.kt)("p",null,"Before we dive into it, though; we need to do some housekeeping."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"lets-discuss-the-golden-rule"},"Lets discuss the golden rule:"),(0,i.kt)("p",null,"Chess is a highly-emergent game.",(0,i.kt)("br",null),"\nBecause of this, it has existed for thousands of years, and is one of the most popular\ngames played by people to this date."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"chess",src:a(4532).Z,width:"800",height:"800"})),(0,i.kt)("p",null,"But chess on its own is not very interesting.",(0,i.kt)("br",null),"\nImagine if you were playing 1-player chess, where you just moved the pieces around.\nWould that be very fun? (No, it's not fun. And I know it's not fun, because nobody does it.)",(0,i.kt)("br",null),'\nI\'m using this example, because I want to clarify something important, which I call\n"The golden rule":'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Emergence on its own won't cut it. You need Emergence, combined with the human mind."))),(0,i.kt)("p",null,"Suddenly, if you have another player on the other side of the board,\nplotting their moves, and attempting to discover your tactics,\nyou have a very interesting and complex game."),(0,i.kt)("p",null,'To put it elegantly, emergence in games is not about creating "cooler" or "better" rules;\nrather, it\'s about allowing the player to create their own gameplay THROUGH the rules.',(0,i.kt)("sup",{parentName:"p",id:"fnref-1-cb1e98"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1-cb1e98",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"When chess was first created, I can almost guarantee that the Fried-Liver attack did not exist.\nHumans created this gameplay element, ",(0,i.kt)("em",{parentName:"p"},"using")," the emergent ruleset of chess."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now, chess is a simple example that's easy to grasp, but also a very basic, and awkward example.\nSince a lot of the gameplay is not actually created by the player, but rather, by the opponent."),(0,i.kt)("p",null,"So lets look at another game that allows its players to create gameplay value,\nwithout the need for an opponent:"),(0,i.kt)("h2",{id:"minecraft"},(0,i.kt)("em",{parentName:"h2"},"Minecraft.")),(0,i.kt)("p",null,"Minecraft is a ground-breaking, brilliant game.\nBefore minecraft, there was no real sandbox game available to the casual gamer."),(0,i.kt)("p",null,"It was so ahead of its time, and its success kinda speaks for itself."),(0,i.kt)("p",null,"What I'd like to look at though, is its emergent game rules.\nNow, there are 2 distinct examples that I want to pick apart here;\nlets not get lost in the weeds though. The two distinct examples are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Emergence in building"),(0,i.kt)("li",{parentName:"ul"},"Emergence in engineering")),(0,i.kt)("h2",{id:"minecraft--emergence-in-building"},"Minecraft- Emergence in building:"),(0,i.kt)("p",null,"In minecraft, many players just want to build cool shit.\nI'd argue that ",(0,i.kt)("em",{parentName:"p"},"most")," players want to do this, actually."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Take a look at this image:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"minecraft",src:a(7578).Z,width:"1024",height:"576"})),(0,i.kt)("p",null,"To a minecraft player, this will look quite normal.\nIt's a little cottage, with a cute little wooden roof and windows. ",(0,i.kt)("br",null),"\nOn the right are some nice stair blocks leading to a deck."),(0,i.kt)("p",null,"But lets slow down a bit; take a look at the sloped roof.\nOn the roof of the house are ALSO stair blocks, lined up to produce a nice slope."),(0,i.kt)("p",null,"In Minecraft, the same blocks can be used in different ways to allow the builder\nto express their creativity to a higher degree."),(0,i.kt)("p",null,"Look again, at the windows, and the door. Stairs are being used AGAIN,\nthis time, to provide some depth to the walls, and to provide a rounded entrance.\nRemember: stairs are just one block type. Players only need to remember one recipe to\ncreate all this wonderful stuff. Isn't that brilliant? "),(0,i.kt)("p",null,"One block on its own does not do anything interesting, but multiple blocks\ntogether, ",(0,i.kt)("em",{parentName:"p"},"combined")," with the human mind, allows the player to create gameplay\nopportunities for themselves.",(0,i.kt)("sup",{parentName:"p",id:"fnref-1-cb1e98"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1-cb1e98",className:"footnote-ref"},"1"))),(0,i.kt)("h2",{id:"minecraft--emergence-in-engineering"},"Minecraft- Emergence in engineering:"),(0,i.kt)("p",null,"This is a more interesting aspect, but it also gives way to a more important concept that I\nwant to talk about: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Simplicity."))),(0,i.kt)("p",null,"If you are a minecraft player, you have probably seen those videos of huge industrial\nmob farms that automatically farm resources for you."),(0,i.kt)("p",null,"(If you haven't, quickly google \"efficient iron farm\" on youtube, you'll see a bunch of unique designs)"),(0,i.kt)("p",null,"For a second though, lets stop to ponder. Did the developers of minecraft intend for there\nto be massive, industrial item-farms?\nMaybe! But whatever the case, they ",(0,i.kt)("em",{parentName:"p"},"definitely")," did not conceive the designs."),(0,i.kt)("p",null,"I'll run briefly how a basic mob-farm may work, by breaking down the systems:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Water pushes entities in its flow direction"),(0,i.kt)("li",{parentName:"ul"},"Mob entities spawn in the dark"),(0,i.kt)("li",{parentName:"ul"},"Mob entities drop item entities on death"),(0,i.kt)("li",{parentName:"ul"},"Entities with health take damage if they fall a big distance")),(0,i.kt)("p",null,"With these rules, players can create a chamber that automatically spawns mobs,\npushes them to a cliff, kills the mobs, and transports the dropped items to a safe collection point."),(0,i.kt)("p",null,"(Also note that these rules are all independent of one another.\nAny one of these rules may be used in another context independently to produce gameplay.)"),(0,i.kt)("p",null,'These farms are not created because the minecraft devs wanted you to create them.\nThey are created because the players have a goal: "Get resources".\nAnd with this goal, the players can bend the world to their will, because the rules are emergent enough\nto allow it.'),(0,i.kt)("p",null,"But, we are missing something important. The vast majority of players won't build these giant,\ncomplex, intricately engineered item farms."),(0,i.kt)("p",null,"Why not?"),(0,i.kt)("p",null,"In my opinion, it all comes down to ",(0,i.kt)("em",{parentName:"p"},"simplicity."),(0,i.kt)("br",null),"\nIf the rules become too difficult to apply in a creative manner, then\na bunch of players are cut off. (either because they aren't patient enough, or they aren't willing\nto invest a lot of mental energy in the game.)\nThese massive, industrial farms are not simple to make; they require quite a deep understanding\nof the game systems, and they definitely require a lot of human creativity."),(0,i.kt)("p",null,"Remember the golden rule: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Emergence on its own won't cut it. You need Emergence, combined with the human mind."))),(0,i.kt)("p",null,"Players that aren't engaged enough to invest a bunch of time and energy\nwill fail to create these gameplay opportunities.",(0,i.kt)("sup",{parentName:"p",id:"fnref-1-cb1e98"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1-cb1e98",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"To sum it up, it's not about how ",(0,i.kt)("em",{parentName:"p"},"simple")," the rules are; rather, it's about how\n",(0,i.kt)("em",{parentName:"p"},"simply the player can work with them.")),(0,i.kt)("h2",{id:"is-minecraft-cheating"},"Is Minecraft cheating?"),(0,i.kt)("p",null,"Okay, we get it. Minecraft is a brilliant game.",(0,i.kt)("br",null),"\nAnd its success shows it."),(0,i.kt)("p",null,"But doesn't it cheat? Minecraft is a sandbox game; of course its going to be highly emergent\nwhen the player can literally alter the world."),(0,i.kt)("p",null,"Yes, that's true; sandbox games ",(0,i.kt)("em",{parentName:"p"},"are")," naturally emergent.\nBut Minecraft still does it the best, IMO.",(0,i.kt)("br",null),"\nThere are many minecraft-like games that have been no-where near as successful,\nbecause they don't provide the player with emergent gameplay opportunities like minecraft does."),(0,i.kt)("p",null,"A few examples of this are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Eden"),(0,i.kt)("li",{parentName:"ul"},"Trove"),(0,i.kt)("li",{parentName:"ul"},"Eco")),(0,i.kt)("p",null,'I\'ve hardly been able to find any "automatic farm" designs for any of these games;\n(Or at least, no designs that are out of scope of what the developer intended.)'),(0,i.kt)("p",null,"Pretty much all existing designs for stuff lay within the developer's closed vision for gameplay,\nwhich is a sign of insufficient emergence."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Okay, cool."),(0,i.kt)("p",null,"So what's an example of emergent gameplay that's NOT within a sandbox context?"),(0,i.kt)("h2",{id:"emergence-in-the-binding-of-isaac"},"Emergence in the Binding of Isaac"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"isaac",src:a(9198).Z,width:"550",height:"309"})),(0,i.kt)("p",null,"Yup yup, it's this game.\nIf you play roguelikes, you probably saw this from a mile away."),(0,i.kt)("p",null,"The Binding of Isaac has seen years and years of praise, and is (arguably) the\nmost successful indie roguelike ever."),(0,i.kt)("p",null,"But to understand what makes Isaac fun, we need quickly understand the core game:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Player starts a run with randomly generated levels"),(0,i.kt)("li",{parentName:"ul"},"Player fights her way through levels, achieving upgrades and items"),(0,i.kt)("li",{parentName:"ul"},"Player either dies, or beats the game in less than 40 minutes"),(0,i.kt)("li",{parentName:"ul"},"(Repeat, ad infinitum)")),(0,i.kt)("p",null,'A lot of the "fun" in Isaac comes from the player\'s ability to obtain synergies\nbetween items, and make an interesting/powerful combo.'),(0,i.kt)("p",null,"But how are synergies done? There are hundreds (if not thousands) of roguelikes on the\nmarket that have synergies between items.",(0,i.kt)("br",null),"\nWhat does Isaac do that's special?"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Lets create two imaginary items, ",(0,i.kt)("inlineCode",{parentName:"p"},"Item X")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Item Y"),"."),(0,i.kt)("p",null,"Now lets assume that items X, Y apply some effect to the player.\nIn this example, it doesn't matter too much what they actually do;\njust know that they do ",(0,i.kt)("em",{parentName:"p"},"something"),"."),(0,i.kt)("p",null,"As a game designer, we might want to add a synergy between ",(0,i.kt)("inlineCode",{parentName:"p"},"X")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Y"),".\nSo, lets hardcode a little rule:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"Item X synergizes with Item Y, by granting 10 attack damage\n")),(0,i.kt)("p",null,"But this is terrible.",(0,i.kt)("br",null),"\nWhy? Why is this terrible?"),(0,i.kt)("p",null,"This is terrible, because it's a very closed, non-emergent ruleset.",(0,i.kt)("br",null),"\nIf another item comes along, (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"Item Z"),") it will never be able to mesh\ncreatively with the existing synergy between ",(0,i.kt)("inlineCode",{parentName:"p"},"X")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Y"),"."),(0,i.kt)("p",null,'It would be much better to have a system that tags into mechanics instead.\nLets imagine we have a game mechanic "M".\nOur setup could look like:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'Item X: provides "M"\nItem Y: adds attack damage equal to "M"\n')),(0,i.kt)("p",null,"Suddenly, we have a more interesting ruleset on our hands, that provides\nthe ",(0,i.kt)("em",{parentName:"p"},"exact same")," synergy."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Why is this better, though?"),(0,i.kt)("br",null),"\nWell, if we create another item, ",(0,i.kt)("inlineCode",{parentName:"p"},"Item Z"),", we can mesh ",(0,i.kt)("inlineCode",{parentName:"p"},"Z")," with the existing\nmechanic ",(0,i.kt)("inlineCode",{parentName:"p"},"M"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'Item Z: doubles "M" when the player is on low health.\n')),(0,i.kt)("p",null,"Suddenly, we have potential for a synergy between ",(0,i.kt)("inlineCode",{parentName:"p"},"Item Z"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Item Y")," for free. Isn't that brilliant?",(0,i.kt)("br",null),"\nIt cost us ",(0,i.kt)("em",{parentName:"p"},"NOTHING")," to do this, we literally gained gameplay for free.",(0,i.kt)("br",null),'\nNot only this, but any other item that meshes with the existing mechanic "M" will either be a synergy/anti-synergy to ',(0,i.kt)("inlineCode",{parentName:"p"},"Item Z")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Item Y"),"."),(0,i.kt)("p",null,"The Binding of Isaac does this kind of thing really ",(0,i.kt)("em",{parentName:"p"},"really")," well,\nby having virtually all passive items tag into game mechanics and mesh with\nother items by proxy."),(0,i.kt)("p",null,"Here are some examples.",(0,i.kt)("br",null),"\nI have listed the mechanic (",(0,i.kt)("inlineCode",{parentName:"p"},"M"),") that it tags into, too."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- Host hat: immune to explosion damage\n- Kamikaze: creates a damaging explosion next to the player\n- Glitter bombs: Your explosions spawn pickups\n- MECHANIC: Explosions\n")),(0,i.kt)("p",null,"This synergy gives infinite pickups, free explosions, and a tonne of damage."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- Brimstone:  Replaces tears with a slow, massive damaging lazer beam\n- Tammys head:  releases a burst of whatever tear type is active\n- MECHANIC: Fire rate / tear type\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- Lump of coal:  Shots deal extra damage based on distance travelled\n- Tiny planet:  Shots orbit, travelling for way longer\n- MECHANIC: Shot range / shot trajectory\n")),(0,i.kt)("p",null,"Each of these examples provides a cool synergy that is good for the player."),(0,i.kt)("p",null,"What's important, is that none of these items directly interact with each other.\nRather, the items mesh with ",(0,i.kt)("em",{parentName:"p"},"an existing mechanic"),";\na mechanic that may affect (or be affected) by any other item in the game."),(0,i.kt)("h2",{id:"emergence-as-a-natural-phenomenon"},"Emergence as a natural phenomenon"),(0,i.kt)("p",null,"Sometimes, instead of programming game rules directly, it might be best\nto work backwards."),(0,i.kt)("p",null,"Take a mental note of the intended behaviour,\nand develop natural rules to produce that behaviour in the game."),(0,i.kt)("p",null,"For example, instead of doing this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"when bullet entity collides ---\x3e deal damage\n")),(0,i.kt)("p",null,"You could do this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Fast moving, sharp entities ---\x3e Deal damage\nBullets ---\x3e Are fast and sharp (so deal damage)\n")),(0,i.kt)("p",null,"Note that this is also how the real world works.",(0,i.kt)("br",null),'\nThe real world doesn\'t care if something is a "bullet", or a "train".\nIf you get hit by either one at great speeds, you will probably die.'),(0,i.kt)("p",null,"So the best way to describe this kind of idea, is representing the game\nin a more natural format."),(0,i.kt)("p",null,"This is both a bad idea, and a good idea."),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Why is natural emergence a good idea?"))),(0,i.kt)("p",null,"Well, in future, players might be able to come up with creative damage devices.\nSuch as custom mechanical cannons, or lining up shrapnel near\nexplosives to kill enemies."),(0,i.kt)("p",null,"It opens the game rules, and allows players to think outside of the developer's\nbox. Remember; it's all about allowing the player to create their own gameplay.",(0,i.kt)("sup",{parentName:"p",id:"fnref-1-cb1e98"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1-cb1e98",className:"footnote-ref"},"1")),"\nIf we provide natural, emergent rules, this is much more viable."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Why is natural emergence a bad idea?"),'\nLets talk about what I call the "Friendly-Fire dilemma".')),(0,i.kt)("h4",{id:"the-friendly-fire-dilemma"},"The Friendly-Fire dilemma"),(0,i.kt)("p",null,"Emergent systems are not without costs;",(0,i.kt)("br",null),"\nThe biggest cost of an emergent game system is the loss of developer control."),(0,i.kt)("p",null,"Lets recap on our example from before."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Fast moving, sharp entities ---\x3e Deal damage\nBullets ---\x3e Are fast and sharp (so deal damage)\n")),(0,i.kt)("p",null,"Now, lets create a quick example that could be seen in game:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Fast moving, sharp entities ---\x3e Deal damage\nBullets ---\x3e Are fast and sharp (so deal damage)\n\nPlayers shoot bullet at zombie, miss and hit friend --\x3e Player kills friend!\n")),(0,i.kt)("p",null,"Suddenly, we have a situation where players can accidentally shoot\nand kill their friends, which, (at face value,) is bad."),(0,i.kt)("p",null,'I call this the "Friendly Fire dilemma".'),(0,i.kt)("p",null,"To put it frankly, this is the cost that we pay for emergent systems.\nSometimes our rules will have unintended consequences that we cannot solve without\nfudging with the rules in an unnatural, non-emergent fashion.",(0,i.kt)("sup",{parentName:"p",id:"fnref-2-cb1e98"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2-cb1e98",className:"footnote-ref"},"2"))),(0,i.kt)("p",null,"Thankfully, these issues aren't a big deal generally; as players will actively work\n",(0,i.kt)("em",{parentName:"p"},"WITH")," the rules to achieve their goal, not against them.",(0,i.kt)("br",null),"\nIf shooting team-members hurts the chances of meeting a goal,\nplayers probably won't do it."),(0,i.kt)("p",null,"Here's a little impromptu equation that describes the whole idea quite nicely:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Emergence * DeveloperControl  =  CONSTANT\n")),(0,i.kt)("p",null,"With every unit of emergence we add, ",(0,i.kt)("em",{parentName:"p"},"by nature"),", we lose control as a developer."),(0,i.kt)("p",null,"Similar to how John Conway couldn't control the shape of Gosper's Glider gun,\nand similar to how the creators of Chess couldn't control how the Sicilian defence worked,\nas a developer, you lose control of your game when you create emergent rulesets."),(0,i.kt)("p",null,'Note that this isn\'t neccessarily a "bad" thing.',(0,i.kt)("br",null),"\nWith chess, the Sicilian defence does not hurt chess's integrity; it's just part of the game."),(0,i.kt)("p",null,"Mainly, the loss of developer control is just something to keep in mind :^)"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"emergence-in-super-auto-pets"},"Emergence in Super Auto Pets"),(0,i.kt)("p",null,"This blog post is getting quite long, but this is still a really good example that I want to cover.\nThankfully, someone else has already done a pretty good analysis on SAP's mechanics that sums up some of my thoughts."),(0,i.kt)("p",null,"So instead of doing my own analysis, I am instead going to link that blog post:\n",(0,i.kt)("a",{parentName:"p",href:"https://a327ex.com/posts/super_auto_pets_mechanics"},"Have a read if you are extra interested.")),(0,i.kt)("p",null,"One significant takeaway is that unit abilities don't operate in a closed fashion.\nSimilar to Isaac, abilities mesh with each other in an abstract fashion, which allows players to reason about the\ngame creatively and come up with their own strategies."),(0,i.kt)("p",null,"SAP is also a pretty neat example, since it completely NAILS the simplicity aspect that was\ntalked about before."),(0,i.kt)("h1",{id:"to-conclude"},"TO CONCLUDE:"),(0,i.kt)("p",null,'It\'s not about creating "more interesting" gameplay, or providing\na "more in-depth" experience for the player.'),(0,i.kt)("p",null,"Rather, it's about providing the player with sufficiently emergent rules, such that they can\ncreate their OWN gameplay."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Emergence on its own won't cut it. You need Emergence, combined with the human mind."))),(0,i.kt)("p",null,"Thanks for reading this opinion piece!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Oli")),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1-cb1e98"},'When I say that a player "Creates gameplay", I mean that the player executes actions, sets goals, or interacts with the game world in a way that the developer did not directly specify. For example, a chess player executing a discovered attack with their knight. The creators of chess did not "create" this mechanic, this mechanic was instead "created" by the players.',(0,i.kt)("a",{parentName:"li",href:"#fnref-1-cb1e98",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2-cb1e98"},"YES, we ",(0,i.kt)("em",{parentName:"li"},"could")," easily hardcode it so that bullets shot by a player don't harm players. But this kinda goes against the point of emergent rulesets in the first place. The whole point of an emergent ruleset is so that the players can mesh with the rules in a creative fashion! If we put in restrictions like this, we are closing corridors of opportunity. This situation where players can harm their allies? This can also be a GOOD situation, if you look at it a bit differently. Suddenly, friendly-fire is now a mechanic of the game; a mechanic that must be taken into account when approaching levels/situations. Also, fudging with the rules in this fashion is highly unintuitive from a player PoV. Why do my bullets not deal damage to my buddies, but crashing a car into my buddies does deal damage? If we want the player to understand our rules intuitively, fudging with rules like this is a bad idea.",(0,i.kt)("a",{parentName:"li",href:"#fnref-2-cb1e98",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},4532:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/chess-059d44a343b5993c40e2c55e7d81bcfa.jpg"},9198:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/isaac-b36f213afe8137e485aaa17a09ff53c4.jpg"},7578:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/minecraft-72da02aa21fc139f4e5a18555e39f740.jpg"}}]);