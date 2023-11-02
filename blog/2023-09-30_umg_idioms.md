---
slug: umgidioms
title: UMG Idioms
tags: [coding, umg]
---

# UMG Idioms
A list of idioms for the UMG ecosystem.

<!--truncate-->

-----------------

# Checking if an entity has a component:
```lua
if ent.foo then
    print("entity has component foo!")
end
```
This is the same as `ent:hasComponent("foo")`

------------------

# Base-mod files:
These files aren't compulsory, but it is common practice to put them in base mods:

`mod/components.md` - defines the components for this mod, in markdown<br/>
`mod/mod_questions.lua` - where `umg.defineQuestion` is used<br/>
`mod/mod_events.lua` - where `umg.defineEvent` is used<br/>


------------------

# Runtime client/server checks:
Often, we will have code that is running on BOTH client-side AND server-side.<br/>
(For example, the `onDeath` callback)

To get server/client specific behaviour, we can check what side we are on at runtime!
```lua
local function onDeath(ent)
    -- called on client AND server.
    if server then
        -- this branch is only ran on server.
        print("I AM FROM SERVER")
    elseif client then
        -- only ran on client! :)
        print("hi from client!")
    end
end
```
You get the idea! :)

------------------

# Classes:
Lua doesn't have classes, neither does the UMG engine.<br/>
However, the `objects` base mod provides classes:
```lua
local MyClass = objects.Class("my_mod:MyClass")

function MyClass:init(...)
    -- init is a special function that is called on instantiation
    print("init!", ...)
end

function MyClass:method()
    print("method call: ", self)
end

local obj = MyClass(1,2,3)
-- prints:  init! 1 2 3
```
The reason this is better than `setmetatable`, is because `objects.Class` 
will automatically register `MyClass` with `umg.register`.

(WARNING: When defining a class, make sure to define on BOTH client AND server!!!
Else, you'll run into big bad issues.)

----------------


# Component-wise bus response:
Listen to an event/question, and only respond if the entity has a certain component:<br/>
This setup is VERY common (and important) in UMG.

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

------------------

# Entity inheritance:
Sometimes, we may want to define an entity "base class", and extend it for a bunch of similar entity-types.

We can do this by defining a function that mutates an entity definition:
```lua
-- shared/abstract_entities.lua

-- make sure its global!
function enemyType(etype)
    etype.category = "enemy",
    etype.attack = etype.attack or {
        type = "melee",
        range = MELEE_RANGE
    };
end
```
And then, when we define our entities, we can access our global function `enemyType`:
```lua
-- entities/my_enemy.lua

return enemyType({
    image = "enemy1",
    baseMaxHealth = 100,
    baseStrength = 30
})
```
You get the idea :)


------------------

# Functions in components:
You may be horrified to realize that in UMG, doing this on serverside will cause a runtime error:
```lua
ent.myComponent = function() end
```
This is because in UMG, newly defined components are automatically sent over the network.<br/>
And in UMG, functions can't be serialized; so an error is thrown.

But we *can* have functions as shared components, by defining them inside the entity type.<br/>
This is because shared-components aren't sent over the network.
```lua
-- my_mod/entities/my_entity.lua
return {
    myComponent = function() end
    -- this is ok! :)

    ...
}
```


-----------------

# Typecheck naming convention:
When using `typecheck` mod, it's common to end the typecheck function with `Tc`.<br/>
For example:
```lua
local addTc = typecheck.assert("number", "number")
```
(The `Tc` stands for "type check")

-----------------------

# Method-Event in base mods:
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

