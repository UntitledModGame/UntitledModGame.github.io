
# Potential parasitic problems in UMG:

This is my attempt at solving (what I believe) to be a parasitic problem that has been bugging me for a while.<br/>
Wish me luck!

------------

With the `useItem` event, it's impossible to tell at a glance if an item
is usable or not.

There may be multiple components that tag onto `usables:useItem`,
for example:
- `projectileLauncher` component
- `buildable` component
- `gun` component
- etc etc.

But at the top-level, we often want to instantly tell whether `item`
is usable or not.
Obviously, we could use question-buses; `umg.ask("isUsable", ent)`
but I feel like there could be a better solution.


# IDEA 1:
Perhaps we should allow for "relations" or "projections"
between components;
ie.
```lua

umg.project("gun", "usable", true)
--[[
    Projects component `gun` onto `usable`.

    this is basically saying:

    if an entity has `gun`:
        Then it should also have `usable` component.
]]

```

What could this look like:
```lua
local e = ent()

print(e.usable) -- nil
print(e.gun) -- nil

e.gun = {...}

print(e.gun) -- {...}
print(e.usable) -- true

e:isRegular("gun") -- true
e:isProjected("usable") -- true
--[[
    now, we have 3 types of components,
    regular, shared, and projected.
]]

```

Projected components PROS/CONS:

PROS:
- use no memory
- projected components are automatically updated on the fly
- will affect groups, which is super cool and beautiful
- Don't need to be sent over the network

CONS:
- Obfuscative / easy to abuse
- A bit costly to recognize existance of projected components
- `if ent.myComponent then` idiom is a bit more costly due to `__index`
----------

I guess the easiest way to test for practicality is to list places
where the component would be useful:

## Practical uses for component projections:
- `usable` component
- `effect` component (checks if something is an effect)
- `action` component (checks if something is an action)
    actions mod, NYI
- `drawable` component

Would projections be useful outside of this problem space?<br/>
If projections are solely used for checking booleans, then
it's probably not worth having them.


# IDEA 2:
Component projections are a good idea.<br/>
But the only gain that we get from doing it at a ECS-level is a bit of memory saved, and not needing to send components over the network.

As discussed in the previous commit, `umg.project` is not without performance penalties.

I think it'd be cleaner if we allow for projection, but we implement it at a system-level instead, through regular components.

IDEA: Provide a `components` base mod that does this stuff for us:
```lua
components.project("image", "drawable", true)
--[[
    internally, this creates an empty-group for `image`,
    and sets `ent.drawable = true` in the `onAdded` callback.
]]


-- we can also project onto groups:
local myGroup = umg.group("foo", "bar")
components.project(myGroup, "foobar", 42)
-- sets `ent.foobar = 42` to any entity with `foo` and `bar` components


-- We could also allow functions to mutate the component value:
components.project("maxHeath", "health", function(ent, maxHealth)
    -- entites with `maxHealth` component automatically are given
    -- `health` component
    return maxHealth
end)


-- We could also enforce constraints too:
components.enforce("x", function(ent, val)
    assert(type(val) == "number", "x component must be a number")
end)

-- etc etc.

```

Cool, I like this idea.

It's not an amazing breakthrough, but it will definitely make things slightly better within the ecosystem.

All in all, this (probably) took about 5 hours of planning, over multiple days. Worth it in the end though!

--- 

## FUTURE OLI HERE:
This was **DEFINITELY** a breakthrough.<br/>
usable, holdable, drawable, controllable; 
all of these systems were reformed because of this new paradigm.

