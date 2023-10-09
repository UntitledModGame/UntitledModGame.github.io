

# Parasitic problems

I feel like the best solutions are for problems that aren't known to exist.

This was certainly the case for question buses.

Before the creation of question buses, there was no real "problem" with having to receive data;
however, as soon as the question-buses were created, the "problem" that question-buses were solving was blatantly obvious.

Today, if you asked me to create a UMG-like ecosystem *without* question-buses, I would probably be cringing constantly in their abscence.

-----------------

Problem-solving is generally hard.

But I think what's harder, is actually problem-*discovery.*

In my opinion, the hard part is not solving problems:<br/>
It's *recognizing* the problems.<br/>
And some kinds of problems are insanely hard to recognize, because we just accept them for what they are. 

As programmers, we are highly accustomed to working within the limits and constraints of our systems.<br/>
And with this, I feel like it is very easy to mistake problems for constraints.

These kind of problems, problems that are mistaken for systemic constraints, I like to call "Parasitic problems".<br/>
Parasitic problems aren't really apparent at first glance, because our brain just accepts that they exist.<br/>
But they still affect the product.<br/>If we don't find a solution to parasitic problems, they will sit there *FOREVER*, just beneath our code. Like a dark, invisible parasite, putting a dull tax on efficiency, and most of the time, we won't notice they exist because we mistake them for systemic constraints.

--------------

# An example: Rust borrow checker
Rust's [borrow checker](https://doc.rust-lang.org/1.8.0/book/references-and-borrowing.html) is a decent example of a solution that is solving a parasitic problem.<br/>
Before the borrow-checker idea existed, programming languages had a few options in managing memory:
- Manually allocate and free
- Use a garbage-collector
- Be functional
These "memory constraints" were kind of accepted for what it was. Admittedly, there [were languages](https://www.reddit.com/r/rust/comments/t9972l/did_rust_first_introduce_the_ownership_concept/) that solved these problems, but if we look at the vast majority of programming languages that have been created over the past 30 years, a vast majority of these languages are not even trying to solve the memory-problem in a way that rust has.

This is because I believe that the concept of memory-management in programming languages is a parasitic-problem. It's seen as a constraint of nature, rather than a problem that needs to be solved.



----------------------

# Basic problems in UMG:
- Syncing is fragile (hacked client potential)
    - Remove `client.send`, in favor of a well-defined packet approach
    - Added `server.definePacket` and `client.definePacket`


----------------------


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

umg.project("gun", "usable", })
--[[
    Projects component `gun` onto `usable`.

    this is basically saying:

    if an entity has `gun`:
        Then it should also have `usable` component.
    
    TODO: think about what should be in {...}
    We should be able to modify the projection nicely.

    Perhaps a bunch of functions to determine how the projection works?
    (If there is no 3rd arg, then the projection is by value)
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

CONS:
- Obfuscative / easy to abuse
- Must recompute each time accessed; potentially costly?
- `if ent.myComponent then` idiom is a bit more costly due to `__index`

------------------

## MOST IMPORTANT THING:
PLEASE OLI!!!<br>
DON'T BE BIASED.<br/>
"projected components" sounds all smart, and cool, and epic.
But dont be biased by the coolness.

Yes, it sounds cool.<br/>
But is it TRULY practical? Be honest with yourself, please.

Also, be wary of the sunk cost fallacy!!!

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
Component projections is a good idea.<br/>
But the only gain that we get from doing it at a ECS-level is a bit of memory saved, and not needing to send components over the network.

As discussed in the previous commit, `umg.project` is not without performance penalties.

I think it'd be cleaner if we allow for projection, but at a system-level instead.

IDEA: Provide a `components` base mod that does this stuff for us:
```lua
components.project("image", "drawable", true)
--[[
    internally, this creates an empty-group for `image`,
    and sets `ent.drawable = true` in the `onAdded` callback.
]]


-- we can also project onto groups:
local myGroup = group("foo", "bar")
components.project(myGroup, "foobar", 42)
--[[
    sets `ent.foobar = 42` to any entity with `foo` and `bar` components
]]



components.project("maxHeath", "health", function(ent, maxHealth)
    -- entites with `maxHealth` component automatically are given
    -- `health` component
    return maxHealth
end)




-- We can also enforce constraints too:
components.enforce("tile", "tileType")
--[[
    If an entity has `tile` component, but doesn't have
    `tileType` component,
    then throw error.
]]
--[[
    This is *kinda* a dumb way of doing things....
    because if `tile` and `tileType` require each other, shouldn't
    they just be the same component...?
    Idk, do some more thinking about whether this API is needed.
]]

```



