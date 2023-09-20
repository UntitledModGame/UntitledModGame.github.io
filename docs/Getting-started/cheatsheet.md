---
sidebar_position: 5
---

# API Cheatsheet

Brief API overview for UMG.<br/>

see [love2d](https://love2d.org) for their API reference.

```lua

love -- love2d modules:
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


