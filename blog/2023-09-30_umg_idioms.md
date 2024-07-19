---
slug: umgidioms
title: UMG Idioms
tags: [coding, umg]
---

# UMG Idioms
A list of idioms for the UMG ecosystem.

<!--truncate-->

-----------------
<br/>

# Checking if an entity has a component:
```lua
if ent.foo then
    print("entity has component foo!")
end
```
This is (roughly) the same as `ent:hasComponent("foo")`.<br/>
(This works because lua tables give nil when a key is missing)

------------------
<br/>

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
<br/>


# Client/server only shared components:
Sometimes, we will have an object that can only be created on client/server. (For example, a text object)  
The issue is that text objects don't exist on the server.  and we may want this object as a shared component in an ent-type definition.  
How do we fix this?    

We can avoid this with the following idiom:
```lua
umg.defineEntityType("mod:myEnt", {
    text = client and Text()
    --[[
    Due to short circuiting, Text() is only evaluated on the client here.
    if we justpdid:

    text = Text()

    Then we would get an error, because Text is not available on the server.
    ]]
})
```

-----
<br/>




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
<br/>


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
<br/>

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
<br/>

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
<br/>

# Typecheck naming convention:
When using `typecheck` mod, it's common to end the typecheck function with `Tc`.<br/>
For example:
```lua
local addTc = typecheck.assert("number", "number")
```
(The `Tc` stands for "type check")

-----------------------
<br/>

# Method-Event pattern in base mods:
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


------
<br/>

# Component-projection  +  Flag components:
In UMG, "component projection" is a concept when one component causes
another component to exist, or "creates" another component.

The `components` base mod provides a bunch of tools for this:
```lua
components.project("X", "Y")
-- Component X "projects" onto component Y.

-- (Any entities that with component `X` are given component `Y`)
```
This is most common for "flag" components; ie. components that don't do anything on their own, but cause the entity to be accepted by certain systems.<br/>
Example:
```lua

components.project("clickToBuy", "clickable")
-- any entity with `clickToBuy` will be given the `clickable` component

umg.on("control:entityClicked", function(ent)
    --[[
    The only reason this event is emitted, is because ent has the
    `clickable` component, and is being handled by the `clickable` system!

    We don't need to worry about how the clickable system works;
    we just need to listen to this callback.
    ]]
    if ent.clickToBuy then
        shop.tryBuy(ent)
    end
end)
```
The same thing is used for `drawable` and `usable`.


-----
<br/>

# Component referencing:
Sometimes, we want a component to have behaviour that depends on other (arbitrary) components.

For example, Health-Bars should depend on both `maxHealth` and `health` components.

Using component-referencing, we could implement Health-Bars using a more generic component: Progress-Bars!
```lua
-- We create a healthBar,
-- USING the progressBar component:
ent.progressBar = {
    value = "health", -- value of the progressBar
    maxValue = "maxHealth", -- max-value of the progressBar

    color = RED
}
```
Here, the system that manages the `progressBar` component will notice that we want the *value* of the progressBar to be determined by `ent.maxHealth` and `ent.health`.

This is *really* beautiful, since we can reuse progressBars to represent other stuff.<br/>
For example, a timer:
```lua
-- A timer! :)
ent.progressBar = {
    value = "timeRemaining",
    maxValue = "totalTime"
}
-- Using `ent.totalTime` and `ent.timeRemaining` components.
```
We could then combine this with component projection to make a proper `healthBar` component:
```lua
components.project("healthBar", "progressBar", function(ent)
    --[[
        healthBar component projects ONTO progressBar component
        (healthBar --> progressBar)
    ]]
    local hBar = ent.healthBar

    local progressBar = {
        value = "health",
        maxValue = "maxHealth",
        color = RED,
        width = hBar.width,
        height = hBar.height
    }
    return progressBar
end)
```
Awesome, right??? :D


----
<br/>

