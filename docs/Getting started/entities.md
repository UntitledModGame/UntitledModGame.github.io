

# Entities

An entity is just a glorified lua table, pretty much.<br/>
They contain "components", which are just key-values in the table.

First, lets understand the types of components.<br/>
There are 2 component types, "shared" and "regular":

| **Component:**   | Shared component | Regular component |
|------------------|------------------|-------------------|
| **Ownership:** | Shared between entities of the same type | Each entity has unique copy |
| **Takes space?** | No | Yes |
| **Modifiable?** | No(t really) | Yes |
| **Removable?** | No | Yes |
| **Saved per entity?** | No | Yes |
| **Overridable?** | Yes; turns into Regular component | No |

Other than this, Regular components and Shared components affect entities in the same way.<br/>
Lets see an example!

-----------

Before we create an entity though, we must define an entity-type!<br/>
(Think of this like a "class" in OOP)<br/>
To define an entity type, return a table from a file inside of `entities/`.<br/>
UMG will automatically load the entity-type, and put a constructor inside of the `server.entities` table.

-----------------

Lets see an example of an entity-type:
```lua
-- entities/bullet.lua
return {
    projectile = {
        damage = 30 -- does 30 dmg
    },
    light = {size = 40} -- size of light = 40px
}
```
The stuff you see inside the table are "Shared components".<br/>
If we want to add "Regular components", we need to make an actual entity.<br/>
Example:

```lua

local entity = server.entities.bullet()
-- Ok! Lets add some Regular components to our bullet entity:

entity:addComponent("x", 10) -- adds regular component, x=10

entity.y = 5 -- same as entity:addComponent("y", 5)
entity.randomComponent4834 = "foo!!!!" -- etc etc

-- now, our entity has some Regular components:
print(entity.x) -- 10
print(entity.y) -- 5
print(entity.randomComponent4834) -- "foo!!!!"

-- We can access shared components in the same way:
print(entity.light) -- {size = 40}    
print(entity.projectile) -- {damage = 30}

```

There are some methods we can call, too:
```lua

ent:delete() -- deletes an entity.
-- (This can only be used serverside!)
-- Deleting an entity will automatically delete it for all clients next tick.

ent:type() -- example_mod:my_entity
-- returns the type of the entity.

ent:hasComponent("x")
-- returns true if entity has component `x`, false otherwise

ent:isRegular("compName")
-- returns true if "compName" is a regular component in ent, false otherwise

ent:isShared("compName2") 
-- returns true if compName2 is a shared component in ent, false otherwise
```