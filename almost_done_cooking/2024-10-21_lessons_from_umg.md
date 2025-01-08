---
slug: lessons_from_umg
title: Lessons from 3 years of UMG
tags: [design, umg, coding]
---

Bunch of lessons and yapping after 3 years of working on UMG-engine.

<!--truncate-->


# Throughout this post, I will list a bunch of the core "lessons" I have learned from 3 years of UMG, condensed into 1 file.


## Pragmatism over Dogmatism.
*Practicality/pragmatism is WAY MORE IMPORTANT than Ideology/Dogmatism.  
**This ^^^ is the single most important lesson that I have ever learned, possibly in my entire coding career.** 

> Dogmatism (noun)
> the tendency to lay down principles as undeniably true, without consideration of evidence or the opinions of others.

^^^ Look!!! Isn't that ridiculous??  
In engineering, there is nuance to EVERYTHING. We should never discount new ideas based on ideology. Such a stance will only make us blind.

Previously, with the invention of qbuses/evbuses, I held a very dogmatic stance on UMG's future. I believed that evbuses combined with the ECS setup would be the future of the platform, and to be fair; they kinda did a great job for lootplot.  
However, that belief also blinded me to other alternative solutions, and caused me to overcomplicate a LOT of stuff; just for the sake of keeping the ecosystem "ideologically pure".

Dogmatism is useful, since our brain is free to dive deeper into more complex concepts, since we can dismiss entire ideas without analyzing them. (Ideas that don't align with our ideology.)  
I think this is why dogmatism was such a trap for me, was because it made problem-solving easier, and allowed me to delve deeper.

In reality though, being blind is never a good thing.  
It's very easy to be dogmatic, but it's less easy to be pragmatic.  

**Instead of being dogmatic, be pragmatic.**   
Be open to new ideas! Simplicity is king.

---

<br/>
<br/>


## Lets talk about "flexibility."
When I started, a core goal of UMG was "flexibility".  
I changed my mind on this, and now, I think that a more practical goal is to have high cohesion between mods instead.  

When writing code, you can never write code that accounts for everyone's use case. That's just not realistic.  
I often found that, whilst trying to aim for great-flexibility, I would just end up making premature abstractions that ended up adding useless complexity to the system.  
"Oh, but it's flexible! Oh wow, it's so generic!!!"  
No. Shuddup!  
We don't want complex abstractions. The more abstract something is, the harder it is to work with in a practical sense.

A much better goal, is to prioritize making good assumptions about stuff instead.  
**Be diligant, don't be scared to draw a hard line.**

For example, in minecraft, a good assumption is that you can't place blocks that are midway between 2 positions.  
"Oh no! But... but... now we can't make more complex structures!"  
^^^ *That's fine.* That's now a limitation of the system.
It sounds bad, but such a limitation allows other systems to be more powerful, efficient, well-defined, and robust.  
AND most importantly; this assumption *it doesn't harm the integrity of the game; it becomes part of the game.*  

In general, our goal should be to create hard, well-defined *assumptions* about systems, rather than trying to shoehorn in a one-size-fits-all approach that just ends up getting nowhere, and doing nothing useful.

---

<br/>
<br/>

## Hard limitations are good

At face value, limitations sound objectively bad.  
But, like with many things, there is always nuance:

If a system has more limitations, then we can reason about it more effectively.  
Simple example: `foo variable is a number` 
^^^ This is a big limitation. But this "limitation" gives us great value.  
What value do we get? Lets see!
```
[foo is a number]
- we can add,subtract,multiply,divide by foo
- we can plug it into functions
- we can set the value of it robustly
- DOWNSIDE: we cant represent more exotic types in foo

[foo is any type]
- It's flexible
- DOWNSIDE: We lose ALL of the above benefits
```
This is a kinda weird/contrived example, but it demonstrats the idea.  
Limitations can be good, when chosen well!! It's all about *execution.*

- Good limitation, is *very good*.
- Bad limitation, is VERY, VERY BAD.

**EXAMPLE: Revival vs NO Revival of entities:**
```mermaid
graph LR;
    Entity_Unincorporated -- incorporate --> Entity
    Entity --destroy--> Dead_Entity
    Dead_Entity -- revive! --> Entity
```
```mermaid
graph LR;
    Entity_Unincorporated -- incorporate --> Entity
    Entity --destroy--> Dead_Entity
```

At a glance, it may seem like these two setups are pretty much identical.  

BUT **NO!!!** The second one has a hard limitation: "Dead entities will NEVER be revived."  
This limitation gives us *so much more power.*  

Systems that receive a dead-entity can be 100% sure that it will never exist again. So, they can dispose of it happily.  
The server doesn't need to worry about syncing, and systems that have a hold on the entity-id can happily recycle the ent-id for other stuff.

Limitations can often provide good value.  
What's really important is choosing the *right* limitations, and not putting limits on stuff if there is no clear gain.

---

<br/>
<br/>


## SSOTs are great (But beware of SSOT/coupling tradeoff)
Not much needs to be said here honestly.

If we have data as a SSOT, there is less opportunity for desyncs.  
There are less moving parts, and the system is more robust.

One downside though:  
Having a SSOT *does* introduce coupling, (originating from the module that is responsible for providing the SSOT.)  

So just be wary of this. Be pragmatic.

---

<br/>
<br/>



## Simplicity is paramount
This goes without saying.  
The less moving parts, the better.  
Try to plan ahead. Try to make each part of the system do one SMALL thing.

"But what if we need a complex feature??"   
That's fine; wrap simple-bits in more complex wrappers.  
Reuse the complex wrappers whereever you want.

---

<br/>
<br/>

## Explicit > Implicit
The engine shouldn't do stuff under the hood.  
In legacy-umg, we synced entities automatically.  
We buffered entities to the ECS automatically.  
We added entities to groups automatically after creation.   

Implicit code is bad, because it can restrict what the programmers can do,
and it makes it so some code ends up being written as a "hack" around the implicit systems that exist.

It's also makes the system harder to reason about as a whole.

Next time, make stuff explicit please.

---

<br/>
<br/>

## Load-time validation is great
We should attempt to verify as much stuff as possible at load time.
Whether that be name-conflicts, data-integrity issues, or misuse of APIs.

Good example:  
We should have a new function: `umg.defineComponent(compName)`  
If two mods try to define the same component, we should throw an error.

Likewise, if a mod tries to define a non-existant shcomp on an entity,
then we also should throw an error

---

<br/>
<br/>

## Hybrid OO-ECS works really well.
Pure-ECS has no entity-specific behaviour. Entities cannot contain functions in pure-ECS, they can only contain data.
(This is in contrast to OOP, where functions can exist on objects, and be completely custom)  

In reality, sometimes we just *need* entity-specific shit.  
The `onActivate` function shcomp in lootplot was a complete GODSEND.  
We need more of that for future versions. It was just amazing, really.

In future, put more thought into how we can allow for better function-shcomps in the future.


---

<br/>
<br/>

## Custom entity data structures
`group:onAdded(func)` was amazing, since it provided us with custom data-structures to store entities in.  
More of this please. I think we can do a bit better, too.   
Maybe create a helper-wrapper?  
```lua
function newEntityGrid(components...)
    local g = umg.group(...)
    local grid = Grid()

    g:onAdded(function(ent)
        grid:add(ent)
    end)
    g:onRemoved(function(ent)
        grid:remove(ent)
    end)

    return grid
end

local myGrid = newEntityGrid("fire", "burnable")
```
More importantly, tho, we should aim to provide better features to enable this sort of flexible programming.  
Maybe something to do with archetypes in the future?


---

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


---

# Things that worked really well in UMG:

## GOOD MOD STUFF:
- `sync.proxyEventToClient` this was amazing, simple, and super helpful
- `sync.autoSyncComponent` for simple components, this was amazing
- `typecheck` mod was DAMN AWESOME.
- `onActivate` component (and in general, function shcomps) were great
- wrapping `umg.defineEntityType` was super cool. (eg `defineFood`)

<br/>

## GOOD UMG-API STUFF:
- evbuses, qbuses were pretty good (kinda)

I was a bit unhappy with how events/questions were defined.
I would like strong-type-lints in the next version, maybe.  
Something like:
```lua
local e = Event()

e:call(1,2,3)

e:on(function(x,y,z)
    -- do stuff
end)
```
^^^ this would allow LuaLS to work.   
Do the same for questions.


