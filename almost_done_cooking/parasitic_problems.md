

# Parasitic problems

I feel like the best solutions are for problems that aren't known to exist.

This was certainly the case for question buses.

Before the creation of question buses, there was no real "problem" with having to receive data;
however, as soon as question-buses were created, the "problem" that question-buses were solving was blatantly obvious.

Today, if you asked me to create a UMG-like ecosystem *without* question-buses, I would notice their absence ALL the time.

-----------------

Problem-solving is generally hard.

But I think what's harder, is actually problem-*discovery.*

In my opinion, the hardest part is not solving problems:<br/>
It's *recognizing* the problems.<br/>
Some kinds of problems are insanely hard to recognize, because we just accept them for what they are. 

As programmers, we are highly accustomed to working within the limits and constraints of our systems.<br/>
And with this, I feel like it is very easy to mistake problems for constraints.

These kind of problems, problems that are mistaken for systemic constraints, I like to call "Parasitic problems".<br/>
Parasitic problems aren't really apparent at first glance, because our brain mistakes them for unchangable constraints of the system.<br/>
These kind of problems can affect end products *dramatically*.<br/>If we don't recognize parasitic problems, they will sit there *FOREVER*, just beneath our code. Like a dark, invisible parasite, putting a dull tax on efficiency.<br/>
And what's frustrating, is that most of the time, we won't notice they even exist, because we mistake them for systemic constraints!

--------------

# An example: Horses in the Middle ages

If you are a King in the middle ages, and you want to move your army from point-A to point-B as fast as possible, you will send them on horses.

But the issue is that horses can only move so fast!<br/>
Your horses can travel about 40 kilometers a day with equipment, but that's not fast enough to respond to an invasion force.<br/>
And we know FOR SURE that *Terry the Terrible* is plotting an invasion right as we speak. 

OK! What should we do?<br/>
We could do a few things:

- Set up a barracks closer to the settlements, and keep some armies there
- Train (and equip) the villagers so they can defend themselves
- Spread propaganda within enemy territory to prevent an invasion in the first place

Nice! Ok, these are all valid options.<br/>
But you, (Your majesty,) are missing one crucial detail: You are looking at the *solutions*, not the *problem.*<br/>
Rememember our original problem: Our armies can't respond to invasions in time!

And our primary constraint is that our horses can only travel 40 kilometers per day.
Can we change this?

Well of course we can!<br/>
In modern-day, armies travel by air, by train, and by truck.<br/>
Would it be too unrealistic to assume that a medieval empire could have invented trains for military purposes? (No, it's not unrealistic, [because it *actually occured.*](https://en.wikipedia.org/wiki/History_of_rail_transport))

With this, we have re-defined our problem:<br/>
"Our armies can't respond to invasions in time"<br/>
Gets changed to:<br/>
"Our armies are moving too slow"

I'd like to clarify here. We are not "solving" a problem. We are RE-DEFINING the problem. With the initial problem, we *assumed* that horse-speeds were a constant constraint.<br/>
We didn't even LOOK for solutions to move our armies faster, since we regarded it has a constraint. This is a great example of a parasitic problem.

For years, the problem of army-movement was locked to the speed of horses. But you, benevolent tyrant, you can change that!<br/>
All you need to do, is invent the amazing *locomotive*.

![train_poster](images/train_poster)

## Hold up!

Simply "inventing trains" is no easy feat.<br/>
First off, how do we know that creating trains are even possible? It's easy to say "invent X, invent Y" in [hindsight](https://en.wikipedia.org/wiki/Egg_of_Columbus), since the brilliant discovery has already been done.

That's the awkward thing about parasitic problems, is that often, you'll be groping around blindly.<br/>
If the problem had instead been: "How do we make our horses 10x stronger?" then I'm sure that nothing would have been accomplished, since there is no easy way to do that kind of thing.<br/>
We know in modern-day, that the strength of horses is a hard constraint. There is no magic you can do to make them 10x bigger.<br/>
But back then, medieval empires wouldn't have known this. It's likely that a lot of time was wasted trying to solve this.

Quite frankly, this is the trouble with "solving" parasitic

-------------------

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

I think it'd be cleaner if we allow for projection, but we implement it at a system-level instead, through `regular` components.

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
--[[
    Stuff like this would work great.
]]

```



