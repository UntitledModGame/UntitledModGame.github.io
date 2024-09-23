---
slug: premature_systems
title: Premature event listeners
tags: [design, umg]
---

Premature event listeners in UMG, and why we should try to avoid them in the future.

<!--truncate-->

In UMG, qbuses and evbuses have been a complete godsend.  
They have allowed us to create behaviour, and [delay the semantics](./2024-04-22_DELS.md) to future systems, so future systems can have more of a say.

Simplified example of this-  
Rendering system:  
```lua
-- rendering mod:
umg.on("@draw", function()
    for _, ent in sortedEntities(cameraDimension) do
        umg.call("rendering:drawEntity", ent, x, y)
    end
end)
```

And what's super-cool about this, is that we can extend the drawing
of entities by simply tagging onto the emitted event:
```lua
-- lootplot mod:
umg.on("rendering:drawEntity", function(ent, x, y)
    if ent.slot and isHovered(ent) then
        drawIndicator(ent, x, y)
    end
end)
```
---

# But wait! Something about this is dumb!
The `rendering:drawEntity` event is fine...   
The issue is actually the `@draw` event. (For context, `@draw` is an event that is emitted globally once per frame.)  

Why is tagging onto `@draw` bad?  
Well, 2 reasons:

### Reason 1: Future systems cannot control as much.
Lets imagine that we had a "lobby/menu" screen; where the player isn't actually in the game; but rather, exists within a menu.  
With this, we ideally dont WANT to render the world-entities. But we are forced to, because the system is responding to the `@draw` event prematurely, and in a global-fashion.

### Reason 2:
The game as a whole is slightly harder to understand; since events are sprawled out globally.

# A simple alternative:
Just expose the function:
```lua
function rendering.drawEntities()
    for _, ent in sortedEntities(cameraDimension) do
        umg.call("rendering:drawEntity", ent, x, y)
    end
end
```
And then just call it directly whenever, and *wherever*.  
EG:
```lua
function GameState:draw()
    rendering.drawEntities()
end
```
And this is amazing too, because we can also apply shaders, do fancy transformations, and do whatever pre/post-processing that we want; since *we control the call-site:*  
```lua
function GameState:draw()
    applyShader()
    doPreProcessing()
    rendering.drawEntities()
    doPostProcessing()
end
```
Amazing.

Currently in UMG, most systems are not implemented like this.

But they *definitely should be*, and it was a mistake not to have them be like this.  
Although a big global event tree is minimalistic, elegant, and beautiful at first-sight; yielding extra control to the future-mods is SO VERY IMPORTANT in UMG.

## FOR ALL FUTURE SYSTEMS, TRY TO AVOID DEFINING EVENT-LISTENERS PREMATURELY.



