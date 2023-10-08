

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

As programmers, we are *very* used to working within the limits and constraints of our systems.<br/>
And with this, I feel like it is very easy to mistake problems for constraints.

These kind of problems, problems that are mistaken for systemic constraints, I like to call "Parisitic problems".<br/>
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


## IDEA:
Perhaps we should allow for "relations" or "projections"
between components;
ie.
```lua

umg.project("gun", "usable", {...})
--[[
    Projects component `gun` onto `usable`.

    this is basically saying:

    if an entity has `gun`:
        Then it should also have `usable` component.
    
    TODO: think about what should be in {...}
    We should be able to modify the projection nicely.
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

DO SOME MORE THINKING!

The clear, obvious downside of this approach is obfuscation.
It makes stuff less clear and harder to maintain.




