

# Groups

"Groups" are what contains entities.<br/>
To get a group, use `umg.group`:


```lua
local drawGroup = umg.group("x", "y", "image")
```
Groups are automatically populated with entities.<br/>
This one takes entities with `x`, `y`, and `image` components.[^1]

We can also do other stuff:
```lua
drawGroup:onAdded(function(ent)
    print("entity added to drawGroup! :) ")
end)

drawGroup:onRemoved(function(ent)
    print("aww, entity removed from drawGroup")
    -- happens when an entity is deleted, or when components are removed
end)


local function draw()
    -- iteration is the same as a regular lua table:
    for i, ent in ipairs(drawGroup) do
        ...
    end
end


drawGroup:len() -- gets length of a group

drawGroup:has(ent) -- returns true if `ent` is in drawGroup, false otherwise.

```

[^1]: doesn't matter if the components are shared or regular, as long as the entity has all of them.

