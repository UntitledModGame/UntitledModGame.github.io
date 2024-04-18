---
slug: umg_decoupling
title: Avoiding refactoring, and aggressive decoupling
tags: [design, coding, umg]
---

(Rambling and ideas about UMG decoupling, and avoiding future refactors)

<!--truncate-->

### Warning!! This post is quite "rambly".

---

I had a *very* interesting conversation with someone in the Love2d discord surrounding decoupling of ECS components.

His opinion was that components should be "aggressively decoupled." <br/>
For example; components that work with a position, should store their **OWN** position.   
EG:
- `sprite` component should OWN a render-position vector
- `physics` component should OWN a world-position vector

The idea then, was that an external component would come along, and "glue" them together, to 

The reason this is nice, is because if we want to do some fudging-around with the sprite's rendering position, (eg, make images bob up and down,) then that is easily doable; since the sprite component's position is not coupled to anything.  
This was a really interesting perspective to hear, and I think it opened my mind a lot.

Now admittedly, I dislike this specific example; for two reasons:
- It makes stuff more complicated
- There's no longer a single-source of truth for position

Also, in UMG, we can use question-buses within the rendering system to augment the rendering position in a stateless manner; so some of the nasty effects of `image-position` coupling are at least mitigated.

But it was still very interesting !  
And in general, I think that these *ideas* are still very useful.

---

## Overall, his ideas are summed up as so:
```
Always prefer decoupling, if possible.
Glue-code is ALWAYS better than overly-coupled systems.

Issues with high-coupling:
- hard to extend, manage, very restrictive.

Issues with glue-code:
- Forgetting to add the glue. OOPSIE! (No problem)

```
(Obviously, the issues of glue-code are WAY less significant than the issues of a overly-coupled system.)

### Downside of decoupling of components:
Now, one BIG downside with glue-code, (and aggressive-decoupling,) is that it often generates multiple sources of truth.  
This is kinda just the price we pay.

---


# Example of good-decoupling in UMG:
The `items` mod, with the `effects` mod.
Take the high-level concept: 
- "When player equips helmet, helmet gives +2 armor."

And the `helmet` entity is represented as an item:
```lua
defineItem({
	propertyEffect = {
		armor = 2
	},
	name = "Steel Helmet",
	...
})
```

Internally, entities have a list of effects:   
- `ent.effects = Effects(...)`   
And entities can also have an inventory: 
- `ent.inventory = Inventory(...)`

We would implement this in UMG like so:
```lua

--[[
    Integration with items mod:

	:onItemAdded is called when itemEnt is added to this slot.
	:onItemRemoved is called when itemEnt is removed from this slot.
	:canAddItem checks whether we can add the item.
]]
local HelmetSlot = objects.Class("...")
    :implement(items.SlotHandle)

function HelmetSlot:onItemAdded(itemEnt)
    local ent = self:getOwner()
    if ent.effects then
        ent.effects:add(ent, itemEnt)
    end
end

function HelmetSlot:onItemRemoved(itemEnt)
    local ent = self:getOwner()
    if ent.effects then
        ent.effects:remove(itemEnt)
    end
end

function HelmetSlot:canAddItem(itemEnt)
    return isHelmet(itemEnt)
end

```
<br/>

Then, inside the inventory;
```lua

local PlayerInventory = objects.Class("...")
    :implement(items.Inventory)

function PlayerInventory:init()
	self:setSlotHandle(1, HelmetSlot())
end
```


# History of UMG:
Throughout UMG's history, (across the past couple of years,) we have *CONSISTENTLY* created WAY TOO MANY bloaty components.

A good example of this is `basicUIComponent`, deployed by the `ui.basics` mod.  
`basicUIComponent` is very *meh*, and some other components within `ui.basics` are kinda bad too. These components are tightly coupled to the system that they operate in, which is bad.

As such, I'm suggesting a new philosophy:

## Let the playable-mods define the components.
# NOT the base-mods!!! 
# Base mods should be assumptionless, and pure.

It's okay if quick and dirty/hacky components are in playable mods.  
But it is NOT OKAY if dirty/hacky components are in **base** mods.

On a related note, I think that we should try to *minimize* our usage of component-projection.   
comp-projection shares the exact same issues that inheritance has; in that it creates, deep, wide, invisible hierarchies that are kindof hard to understand.

---

## Mods without components:
We should attempt to have mods/systems like `typecheck`; a mod that defines NO components. 
Or, a mod like `generation`; which also defines NO components; yet is extremely powerful and useful.
 
Instead of creating many components; focus on creating small, generic components, with *powerful* systems to go alongside them.


# Component design ethos:
Lets sum everything up:   

- Keep components small, simple, and meaningful. Components should be small and few; but the systems behind them should be powerful.

- Decoupling of components is good. Glue code is better than implicit coupling, (within reason); even if it generates multiple sources of truth.

- Its OK to define "hacky/bloaty" components in Playable mods and Addons. But not in Base mods; base-mods *must* remain clean.

- Avoid multi layered component projection in base mods, if possible; (with the obvious exception being flag-components, since they are single layered). Playable/addon mods can have hacky, large spanning projections, since cleanliness doesnt matter as much.


