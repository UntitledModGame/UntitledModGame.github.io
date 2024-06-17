---
slug: entity_propagation
title: Entity propagation
tags: [design, umg]
---

This post explains entity propagation behavior in umg.

<!--truncate-->

in UMG, deletion and cloning are propagated to other entities through components.

For example:
```lua
ent.foo = otherEnt
-- `ent` references `otherEnt` through component foo

ent:clone()
-- otherEnt is cloned too...

ent:delete()
-- otherEnt is deleted too!
```

This concept is known as "propagation".  
But... why are the clone and delete operations propagated?  

---

Consider the following scenario:
```lua
-- Save and delete the ent:
local data = serialize(ent)
ent:delete()

-- Now load the saved ent:
local ent = load(data)
```
This operation could happen when we are saving a world.

The big question is: what should happen to `otherEnt`?  
It obviously needs to be saved alongside `ent`... Or else `ent` will lose component data.   

What about deletion though?  
The simple solution is to keep `otherEnt` alive.  
Let's consider this.

When `ent` is saved, a copy of `otherEnt` is serialized and saved to `data`. This is because it is referenced inside the `foo` component.  

Therefore when the data is loaded, a copy of `otherEnt` is also loaded.

Aha! And that's the big problem.   
If we didn't delete `otherEnt`, then we would have two copies of it in the ECS.   
In order to have entities within components, we need propagation.

---

## Nested propagation

Propagation is applied through entities, as well as through data structures.
For example:
```lua
ent.abc = {
    hi = {ent_1, ent_2}
    -- These are propagated.
    -- (So is anything that these entities reference)
}
```