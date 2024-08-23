---
slug: zen_of_umg
title: The Zen of UMG
tags: [design, umg]
---

Some quick guidelines that summarizes the current UMG design philosophy.<br/>

<!--truncate-->

<br/>

# NOTE: all of this is subject to change!
## If you disagree with something, or have a counterexample, let me know.

<br/>
<br/>

## UMG High-Level Philosophy:

- Follow the 80/20 rule

- Less code > more code

- Elegance > efficiency (Unless it's really bad)

- Simple and assumptionless > Complex and flexible

- Bloat is the greatest evil

- State is an evil neccessity:
    - Try to keep the program state inside of components. 
    - If that's not possible, immutable and short-lived state is 2nd-best.

- Regular data and functions > Objects and classes


---

## Systems and Emergence:
<details><summary>show</summary>

- DO embrace chaotic, interacting systems

- DONT fight existing systems to achieve something. Instead:
    - Find another way to achieve a similar result
    - ALTERNATIVELY; go back, and ask what the user is gaining from this feature

- If something is unnatural to implement, try avoid implementing it

</details>

---
## Mod Cohesion:
<details><summary>show</summary>

- The purpose of base-mods is to provide cohesion/connections within the ecosystem; 
    - NOT JUST to reuse code!

- Mods shouldn't break other mods just by coexisting.

- Its OK for playable/addon mods to be hacky/poorly designed. 

- Its NOT OKAY for base mods to be hacky/poorly designed. 

</details>




---

## Component design:
<details><summary>show</summary>

## What types should components be? 
Components (usually) shouldn't contain functions.  
They should mostly be plain data.  

## Unifying components:

Components should never have co-dependencies.  
Example:
```lua
ent.uiElement = Element()
ent.uiRegion = {x,y,w,h}
--[[
When an entity has these two components, 
they are rendered as a UI element on screen.
]]
```
But... this is dumb.  
Why not just have a singular component?
```lua
ent.ui = {
    element = Element(),
    region = {x,y,w,h}
} 
```
This is so much better, because:
- It tells the modder that they need BOTH `region` and `element`
- It is less bloated

## Splitting up components:
Ideally, components should have ONE well-defined purpose.

If we think a component is doing too much, 
we might want to decouple/split it up.

For example:
```lua
ent.playerControl = {
    clientId = "30943434343043",
    type = 
}
```

</details>


---

<br/>
<br/>
<br/>

# And lastly, but not least:
- Everything has nuance; don't take any of these guidelines as absolute truth!
