---
sidebar_position: 1
---

# Overview

This overview is meant to be as concise as possible.<br/> 
I'm not going to waste your time.<br/>

You must be a programmer with some experience in lua to understand this.   
Also, experience in [love2d](https://love2d.org) helps.

# Table of Contents:
- Basics:
    - [Folder structure](#mod-folder-structure)
- ECS Architecture:
    - [Entities](#entities)
    - [Groups](#groups)
    - [Buses](#buses)
    - [Client-server communication](#client-server-communication)
- Cheatsheet:
    - [General API reference](#general-api-reference)


## Mod folder structure:
Each mod has a folder structure as follows:
```lua

assets/
    sounds/ -- sounds and images go here.
    images/ -- they are automatically loaded on clientside.
-- images are automatically put in the texture atlas (graphics.atlas) for auto-batching.

server/
    file1.lua -- these files are automatically loaded
    blah.lua  -- on serverside

client/
    cl_file.lua -- these files are auto-loaded on clientside.
    nested/
        abc.lua -- nested directories work fine. `abc.lua` is loaded.

shared/
    -- these files are auto-loaded on BOTH serverside and clientside
    shared_file.lua 

-- entities are defined here.
-- entities are loaded on both client and server.
entities/  
    ball.lua -- ball entity definition file
    player.lua
    enemy.lua

mod_config.json  -- config file
```

:::info
**All Files and folders starting with `_` are ignored.**
:::

----------------------------------------------------------

# ECS Architecture:
This project uses something that resembles an Entity Component System.<br/>
(Almost) Everything in the world is just an entity.

--------------------

## [**Entities**](../modding-basics/entities.md)

An entity is just a glorified lua table, pretty much.<br/>
They contain "components", which are just key-values in the table.

We can give entitys components:
```lua
ent.myComponent = {}
ent.other = 2 -- can be any lua type.
```
And we access components normally too:
```lua
print(ent.other)
```

To define an entity type, we create a new file in `entities/` folder.

To create an entity, we use `server.entities`:
example:
```lua
local ent = server.entities.my_entity()
```

[Read a more in-depth explanation here.](../modding-basics/entities.md)

--------------------


## Groups

Groups are what contain entities.<br/>

If you are starting out, you likely won't need to use these.<br/>
[Read more about them here.](../modding-basics/groups.md)



## Buses
Event buses and Question buses are the *heart* of UMG.<br/>
Without them, UMG would be worthless.

Event buses: 
- Dispatch events with `umg.call`
- When we dispatch information, we don't care who responds
- Respond to events with `umg.on`
- (Similar to pub-sub design pattern)

Question buses: 
- Request information with `umg.ask`
- When we gather information, we don't care who gives it
- Provide information with `umg.answer`
- (Similar to pub-sub design pattern, but in reverse)

Example of event bus usage:
```lua

-- `rendering:drawEntity` is an event defined by the `rendering` mod.
umg.on("rendering:drawEntity", function(ent)
    -- draw a circle around all low-health entities:
    if ent.health and ent.health < 50 then
        love.graphics.circle("line", ent.x, ent.y, 50)
    end
end)
--[[
Try this code yourself! Paste this in a clientside file,
and see what happens to entities.
]]
```

Example of question bus usage:
```lua

umg.answer("xy:getSpeedMultiplier", function(ent)
    if ent.health and ent.health < 50 then
        -- entities below 50 health move twice as fast!
        return 2
    end
end)
--[[
try this code yourself!
Make sure this code is loaded on clientside AND serverside,
or else it may look glitchy.
(i.e. put this script in `shared/` folder)
]]

```



We can also create our own events.<br/>
Example:
```lua
umg.defineEvent("my_mod:hello")

umg.on("my_mod:hello", function(...)
    -- creates a function that listens to `hello` events
    print("Hello one: ", ...)
end)


umg.on("my_mod:hello", function(...)
    -- creates another function that listens to `hello` events
    print("Hello two: ", ...)
end)


-- emits a `hello` event:
umg.call("my_mod:hello", 1, 2, 3)
--[[ 
OUTPUT:

Hello one: 1 2 3
Hello two: 1 2 3
]]
```


## Client-Server communication

In UMG, there isn't automatic syncing; lots has to be done by mods.

**What IS synced:**
- creation of entities, (and their component values directly upon creation)
- deletion of entities
- joining / leaving of players

**What ISN'T synced:**
- entity component values
- local events

It's important to note, though, that a lot of syncing is done by base mods.
For example, the `inventory` mod automatically syncs entity inventories.<br/>
Likewise, the `xy` mod will automatically sync entity positions/velocities


Client-server communication also uses callbacks:

Server side:
```lua
-- broadcasts `message1` to all clients.
-- you can send any lua data you want, even tables!
server.broadcast("message1",   ent, 2, 3, "blah data")
-- entities are sent over by id, efficiently.


-- Same as broadcast, but it only sends to the client called `playerUsername`.
server.unicast(playerUsername, "message1",   1.0545, 2.9, -5, "data :)")


-- listens to `moveTo` messages sent by clients
server.on("moveTo", {
    arguments = {checkString}, -- add typecheckers here.
    handler = function(sender_username, msg, ...) 
        print("message from", sender_username)
        print("data:", msg, ...)
    end
})

```

Client side:
```lua
-- send a message to the server.  
-- (same as server.broadcast, but clientside)
client.send("moveTo", x, y) 


-- listens to `message1` from the server
client.on("message1", function(x, y, z, blah)
    print("received message1 from server:  ", x, y, z, blah)
end)

```

Any data can be sent across the network, except for functions and userdata.
If a table is sent across, all nested tables will be serialized and sent across.
If an entity is sent across, it will be efficiently serialized by id.
Sending tables across is the most expensive. Try to only send numbers, strings, and entities across the network for best performance.

If you need to send a metatable across, take a look at the `register` function.
(Remember; functions can't be serialized!)

## Cheatsheet:
These are all the functions/modules that can be used whilst modding:  
```lua

love -- love2d modules:
    -- umg supports the love2d api by default
    love.graphics
    love.keyboard
    love.mouse
    love.audio
    love.physics
    love.timer
    love.data



server.entities
-- entities are accessed and spawned by this table!
-- (only available serverside.)
local ent = server.entities.my_entity()
ent:addComponent("compName", 10) -- adds component
ent:removeComponent("compName")

ent:hasComponent("compName") -- false
ent:isShared("foo") -- checks if `foo` is a shared component
ent:isRegular("bar") -- checks if `bar` is a regular component


umg.exists(ent)
-- returns `true` if `ent` is an active entity, false otherwise


-- use `umg.group` to create a group:
local mygroup = umg.group("comp1", "comp2", ...)  -- gets an entity group.

-- group methods:
mygroup:onAdded(function(ent) print("ent has been spawned!") end)
mygroup:onRemoved(function(ent) print("ent deleted :(") end)
mygroup:has(ent) -- true/false, whether the group contains `ent`



umg.extend("parent_ent", ent_def) 
-- deepcopies all data from entity `parent_ent` into table `ent_def`.
-- useful for doing OOP-like inheritance in entity definitions.


-- event buses:
umg.defineEvent("modname:my_event")
-- events must be defined before they can be used.
umg.on("modname:my_event", func) -- listens to a local event
umg.call("modname:my_event", ...) -- broadcasts a local event


-- question buses:
umg.defineQuestion("modname:my_question", math.max)
-- questions must be defined before they can be used.
umg.answer("modname:my_question", reducer)
umg.ask("modname:my_question", ...)



umg.register(name, alias) -- registers a resource for serialization

local data = umg.serialize(obj) -- NOTE: If obj involves an entity, the entity id is set to nil.
local obj, err = umg.deserialize(data) -- deserializes data.


umg.expose("var", value) -- exports `var` to the global mod namespace.
-- Now, all other mods can access `value` through the `var` global.


client  -- Client-side api
    client.send(event_name, ...) -- sends a message to server
    client.on(event_name, func) -- listens to a message from server
    client.lazySend(event_name, ...) --lazy send: arrival not guaranteed

    client.atlas -- access to global texture atlas
    -- Images are automatically put in the texture atlas,
    -- and are auto-batched.
    client.atlas:draw(quad, x,y, r, sx,sy, ox,oy) -- draws quad.
    
    client.getUsername() -- gets client username

    client.getMasterVolume() -- volume:
    client.getSFXVolume()
    client.getMusicVolume()

    client.assets  -- ( holds image and sound assets )
        client.assets.images  -- ( where quads are loaded )
            assets.images["modname:asset_name"] = love2d_quad, -- OR:
            assets.images["asset_name"] = love2d_quad
        client.assets.sounds  -- ( where sounds are loaded )
            assets.sounds["modname:sound_name"] = love2d_source,  -- OR:
            assets.sounds["sound_name"] = love2d_source


server -- Server-side api
    server.broadcast(event_name, ...) -- broadcasts an event to clients
    server.unicast(username, event_name, ...) -- unicasts to one client
    server.lazyBroadcast(event_name, ...) -- lazy broadcast: efficient, arrival not guaranteed
    server.lazyUnicast(username, event_name, ...) -- lazy unicast: efficient, arrival not guaranteed 

    server.save(name, data) -- saves data to string `name`, (relative to world)
    server.load(name) -- loads data from string `name` (relative to world)


math 
    -- extra math functions:
    math.vec2(x,y) -- vector2 class
    math.vec3(x,y) -- vector3 class
    math.clamp(x, lower, upper)
    math.round(x)
    math.lerp(...)
    math.distance(x, y, [z]) -- z is optional argument. Gets euclidean distance


```

Most lua functions can be used as well, such as `setmetatable`, `rawget`, `pairs`, `require`, etc etc.    
`os`, `io`, `ffi` and `debug` modules have been disabled.


