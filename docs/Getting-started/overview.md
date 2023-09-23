---
sidebar_position: 1
---

# Overview

This overview is meant to be as concise as possible.<br/> 
I'm not going to waste your time.<br/>

You must be a programmer with [some experience in lua](https://learnxinyminutes.com/docs/lua/) to understand this.   
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

## [**Entities**](./entities)

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

To create an entity, we use `server.entities`.<br/>
example:
```lua
local ent = server.entities.my_entity()
```

[Read a more in-depth explanation here.](./entities)

--------------------


## Groups

Groups are what contain entities.<br/>

If you are starting out, you likely won't need to use these.<br/>
[Read more about them here.](./groups)


-------------------


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

**[Read more about them here.](./buses)**

----------------

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

