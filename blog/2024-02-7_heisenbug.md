---
slug: heisenbug
title: Heisenbug in UMG!
tags: [umg, coding]
---

# Heisenbug in UMG!!!

**Note: This lil rant was written a long time ago; nearly 2 years ago.**
**I'm deploying on this blog because its funni.**<br/>

<!--truncate-->

---

So I was happily programming away one day, refactoring my networking
code, when suddenly, my entity spawning code stopped working.

Oh no! I probably screwed something up.

Well, since I can't see anything obvious, and I haven't touched this code
in a while, lets start from the roots.
I checked the client-side, and to no surprise, the entity spawn events
were not being received.
Okay- lets have a look at where the event is supposed to be emitted.

This is the code on the server that is responsible for sending entities across:
```lua
-- on creation of a new entity:
local pckrdata = cy.serialize_entity(ent)
seen[ent] = true
connection.broadcast("ent_spawn", pckrdata)
```

Okay, well, is this code even being ran? 
Lets check by putting a print in there:
```lua
-- on creation of a new entity:
local pckrdata = cy.serialize_entity(ent)
print("SENDING ENT SPAWN")
seen[ent] = true
connection.broadcast("ent_spawn", pckrdata)
```
I run the code, and see a bunch of `SENDING ENT SPAWN` messages in the console.
Okay, cool.... 

BUT WAIT: Now the entities are spawning just fine. The game is literally working.
What??? What did I change?
I go back and delete the print, and the entities stop spawning, and no messages
appear in the console.

*(This code doesn't spawn any entities.)*
```lua
-- on creation of a new entity:
local pckrdata = cy.serialize_entity(ent)
-- print("SENDING ENT SPAWN")
seen[ent] = true
connection.broadcast("ent_spawn", pckrdata)
```

What is this black magic?!?!?<br/>
When the print is there, the entities spawn.<br/>
When the print is not there, the entities *STOP SPAWNING*.

<br/>


![heisenbug](images/HEISENBUG_2.png)

## Oh *no.*
It looks like we are dealing with a notorious [heisenbug!](https://en.wikipedia.org/wiki/Heisenbug)

Thankfully, it wasn't too hard to discover.<br/>
Had the bug been non-deterministic, I would have been screwed. 

In the end, the solution was "somewhat" simple... but it requires a bit of background knowledge.

For context, I'm using [luaJIT](wiki.luajit.org) alongside [ENet](https://leafo.net/lua-enet/) for my networking.
When I call `print`, luaJIT hits a [NYI function](https://web.archive.org/web/20220717120825/http://wiki.luajit.org/NYI), which causes it to hit a slow path and fall back to interpreted mode *for the entire surrounding trace.*
(Note that for luaJIT 2.1 and beyond, a [trace stitching](https://github.com/LuaJIT/LuaJIT/issues/13) feature is introduced, which prevents this, but lets not get beyond ourselves- in the version I was using, `print` breaks JIT for the whole trace.)<br/>
If we pair that with the fact that `print` is pretty slow anyway, then we can be confident that `print` is slowing down our code a lot.

I then took a look at the packet frequency per tick on the clientside, and for testing, varied the frequency of packets manually.<br/>
Results were so: any more than a few thousands unique packets per frame caused the ENet client to drop the packets.

Aha! This must be our solution, right? 
- print breaks JIT
- surrounding code cannot be JIT-ed...
- Packets are more spaced out, since the server takes longer to complete a tick
- Therefore client receives less packets, which the ENet client can handle!

To double check this, I replaced `print` with `io.write`, which happens to keep
the JIT active: I see a bunch of `SENDING ENT SPAWN` in the console, but no
entities spawn.

Great- we have our issue. What a funny bug!

To solve this in the end, I wrote code that concatenates packets to reduce the
packet frequency.
this seems to work well, and I can send thousands more events across
per frame which is nice.

I also set up some better tick infrastructure so packets aren't being spammed across.

It is a bit sad that the packets are dropped silently though. I'll have to bare this in mind for the future- I could see this becoming an issue for a second time if the server is put under a lot of stress.


