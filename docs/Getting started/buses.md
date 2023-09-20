
# Buses

Event buses and Question buses are the *heart* of UMG.<br/>
Without them, UMG would be worthless.

Event buses: 
- Dispatch events with `call`
- When we dispatch information, we don't care who responds
- Respond to events with `on`
- (Similar to pub-sub design pattern)

Question buses: 
- Request information with `ask`
- When we gather information, we don't care who gives it
- Provide information with `answer`
- (Similar to pub-sub design pattern, but in reverse)

Remember that in UMG, we have clientside AND serverside.<br/>
Buses are not synced across the network.
Both client and server have their own buses.

# Example usage:
```lua

-- `rendering:drawEntity` is an event being emitted by the `rendering` mod.
umg.on("rendering:drawEntity", function(ent)
    -- draw a circle around all drawn entities:
    love.graphics.circle("line", ent.x, ent.y, 50)
end)
```

Example of question bus usage:
```lua

umg.answer("xy:getSpeedMultiplier", function(ent)
    if ent.health and ent.health < 50 then
        -- entities below 50 health move twice as fast!
        return 2
    end
end)

```


# Creating our own events:

We can also create our own events:
```lua
umg.defineEvent("my_mod:hello")

umg.on("my_mod:hello", function(a,b,c)
    -- creates a function that listens to `hello` events
    print("Hello one: ", a,b,c)
end)


umg.on("my_mod:hello", function(a,b,c)
    -- creates another function that listens to `hello` events
    print("Hello two: ", a,b,c)
end)


-- emits a `hello` event:
umg.call("my_mod:hello", 1, "ent", {})
--[[ 
OUTPUT:

Hello one: 1 "ent" {}
Hello two: 1 "ent" {}
]]
```


Some callback events are emitted automatically by the engine:
```lua
load() -- called when the mods and entities are done loading
update ( dt )   -- called every frame (like love.update)
draw  () -- CLIENTSIDE: when stuff should get drawn (like love.draw)
keypressed ( key, scancode, isrepeat )  -- CLIENTSIDE: when a key is pressed (like love.keypressed)
mousepressed (x, y, button, istouch, presses) -- CLIENTSIDE: when mouse is clicked (like love.mousepressed)

tick  ( dt ) -- called every game tick
playerJoin (username) -- called when `username` joins the server
playerLeave (username) -- called when `username` leaves the server
```

Here some other example callbacks that are defined by mods:
```lua
drawEntity ( ent ) -- an entity is getting drawn
entityDeath ( ent ) -- an entity dies
```

