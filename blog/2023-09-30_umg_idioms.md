---
slug: umgidioms
title: UMG Idioms
tags: [coding, umg]
---

# UMG Idioms
A list of idioms that are common in the UMG ecosystem.

<!--truncate-->

------------------

# Base-mod Files:
These files aren't compulsory, but it is common practice to have them are generally found in most base mods:

`mod/components.md` - defines the components for this mod
`mod/mod_questions.lua` - defines the questions for this mod (see [buses](Buses))
`mod/mod_events.lua` - defines the events for this mod (see [buses](Buses))


------------------

# Runtime client/server checks:
Often, we will have code that is running on BOTH client-side AND server-side.<br/>
For example, the `onDeath` callback is called on both client and server.

However, what if we want to call a client-specific function?<br/>
Well, we can check directly what side we are on!
```lua
-- entities/my_entity.lua

-- ent definition:
return {
    onDeath = function(ent)
        -- onDeath is a function thats called on client AND server
        if server then
            -- this function is only available on client
            chat.privateMessage(ent.controller, "your player has died!")
        elseif client then
            -- a
            juice.particles("dust", ent,)
        end
    end
}

```


------------------

# Functions in components:
You may be horrified to realize that in UMG, doing this on serverside will cause a runtime error:
```lua
ent.myComponent = function() end
```
This is because in UMG, newly defined components are automatically sent over the network.<br/>
And in UMG, functions can't be serialized; so an error is thrown.

You'd get the same error doing something like this:
```lua
local Class = {}
function Class:hi()
    print("hi: ", self)
end

local obj = setmetatable({}, {__index = Class})

ent.foo = obj --  <-- this will error!
-- because function Class.hi is serialized
```
This is because UMG automatically serializes the whole data structure, no matter how deep it is.

### *How to have an OOP object as a component:*
We can use `umg.register` on BOTH serverside and clientside to register a common resource:
```lua
local Class = {}
function Class:hi()
    print("hi: ", self)
end

-- Make sure this is on BOTH clientside AND serverside!
umg.register("mod:MyClass", Class)
-- now, `Class` isn't sent across the network.
-- Instead, the serializer will use the reference string "mod:MyClass"

local obj = setmetatable({}, {__index = Class})

ent.foo = obj -- ok now! :)
```
There's also a shorthand for this, in the `objects` mod:
```lua
local MyClass = objects.Class("mod:MyClass")
-- objects.Class calls `umg.register` internally.

local obj = MyClass() -- instantiate like this!
```

------------

### *How to have functions as components:*
Use a `shared` component, and define the function in the entity-type:
```lua
-- my_mod/entities/my_entity.lua
return {
    myComponent = function() end
    -- this is ok! :)

    ...
}
```
Note that with shared-components, we cannot change the component at runtime.

Awesome, done!


--------------------


# Component-wise bus response:
Component-wise bus response is when we add a response to an event/question bus, and only respond to it if the entity has a certain component.<br/>
This setup is VERY common (and important) in UMG.

-----------------

For example:
- If an entity has the `.halo` component:
    - --> draw a circle above it.
```lua
umg.on("rendering:drawEntity", function(ent)
    if ent.halo then
        -- draw a halo above the entity!
        love.graphics.circle("line", ent.x, ent.y - 10, 5)
    end
end)
```

Another example:
```lua
umg.on("mortality:entityDeath", function(ent)
    if ent.fire then
        local explosionSize = 5
        makeExplosion(ent, explosionSize)
    end
end)
```
- If an entity is on fire when it dies:
    - --> make an explosion

--------------

Comp-wise bus response also works with question buses too:
- If an entity is covered in goo:
    - --> slow the entity
```lua
umg.answer("xy:getSpeedMultiplier", function(ent)
    if ent.goo then
        return 0.5
    end
    return 1
end)
```



# Method-Event:
When an event happens concerning an entity, it's common to do something like this:
```lua
-- ent dies!
local function die(ent)
    if ent.onDeath then
        ent:onDeath()
    end
    umg.call("mod:onDeath", ent)
end
```

This is quite flexible, since it allows for other systems to tag onto the death event, but it also allows entity-specific behaviour through our `onDeath` shared component.

Examples of this: `mortality:entityDeath`, `rendering:drawEntity`


