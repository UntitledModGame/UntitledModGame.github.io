---
slug: piping_idiom
title: UMG Piping idiom
tags: [design, umg]
---

This is a bit too big for the UMG-idioms file, so imma put it here.

<!--truncate-->

# UMG Piping idiom:

"Piping" in UMG is when we construct an object/entity, and shove it through an [evbus](../umg_terminology), with the expectation that the event-listeners will mutate/setup the object.

It provides [DELS](../DELS) when creating new objects.

## Example in Chat mod:

Using the Chat-mod, we may want to have different-looking messages.  

For example, the DOOM mod may want all messages to be red, to stick with the theme.  
The CleanUI mod may want nice borders around messages.  
And the AdminTools mod may want to make all host-messages yellow.

We can achieve this by creating a `MessageObject`, shoving it through a `pipe`, and having mods setup the object directly.


```lua
--[[
    Base chat mod:
]]
local msgObject = MessageObject(msgString)
umg.call("chat:pipeMessageObject", msgObject, clientId)
```


```lua
-- DOOM mod:
local ORDER = -10 -- lower priority, since it applies to ALL messages
umg.on("chat:pipeMessageObject", function(msgObj)
    msgObj:setColor(RED)
end)


-- CleanUI mod:
umg.on("chat:pipeMessageObject", function(msgObj)
    local oldRen = msgObj.onRender
    -- wrapping methods:
    function msgObj:onRender(x,y,w,h)
        oldRen(self.text, x,y,w,h)

        -- custom rendering here:
        drawBorder(self.text, x,y,w,h) 
    end
end)

-- AdminTools mod:
umg.on("chat:pipeMessageObject", function(msgObj, clientId)
    if isHost(clientId)
        msgObj:setColor(YELLOW)
    end
end)
```

<br/>
<br/>


# Examples of piping in UMG:
Entities and Entity-Types are both piped in UMG!

Probably the best example of piping in UMG is Entity-Types:
```lua
umg.on("@defineEntityType", function(entityType)
    if entityType.item then
        -- adds to item pool
        itemGen:add(entityType)
    elseif entityType.enemy then
        enemyGen:add(entityType)
    end
end)


local function generateItem()
    -- generates a random item!
    local etype = itemGen:getRandom()
    return etype()
end

```
In this example, we are checking for the `.item` or `.enemy` [shcomp](../umg_terminology)s.  
If the etype has either, then it will be added to the array;
and will be a selection candidate when we do procedural-generation.


<br/>
<br/>
<br/>

# When is piping GOOD?
Piping is especially good with temporary-objects.

With temp-objects, we can be more aggressive in what we change, because the object will be disposed of anyway.  
(Ie. If we change some state that will drastically affect the future of the object, it won't matter much, since it's only a temporary object anyway.)


<br/>

# When is piping BAD?
Piping should ONLY be used when the object has JUST been created.

If the object is old, then other (unrelated) systems may have already changed/mutated the object.  
We want to ensure that we aren't undoing/overwriting their work.  




