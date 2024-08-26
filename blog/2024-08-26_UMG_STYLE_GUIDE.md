---
slug: umg_style_guide
title: UMG Style Guide
tags: [umg]
---

UMG Style guide.

<!--truncate-->

# THE GOLDEN RULE:
Try write code that is *as readable as possible*.

<br/>
<br/>
<br/>

# Comments
- Keep comments TERSE, not VERBOSE.
- Conciseness > Proper grammar
- Dont leave comments for simple code. 
- Use `TODO`s / `FIXME`s when appropriate

EXAMPLE FOR COMMENTS:
```lua

function doStuff(entArray)
    ...
    --[[
    The reason we don't simply loop over the entire array of entities,
    and delete each one is because they are used by the item-system 
    for when the item-drops are polled after receiving `clean` event.
    ]]
    scheduling.delay(0, function()
        for _, ent in ipairs()
            ent:delete()
        end
    end)
end

-- ^^^^ BAD BAD BAD! Explanation is too verbose!


local function doStuff(entArray)
    ...
    -- Cannot delete immediately, 
    -- item_system.lua needs them for `clean` event.
    scheduling.delay(0, function()
        for _, ent in ipairs()
            ent:delete()
        end
    end)
end

--- ^^^^ MUCH BETTER.
```
In general, be very aggressive when shortening comments.  
EG:  
- BAD: `"Looping over the itemPool array is inefficient"`
- Much better: `"looping over itemPool is slow"`

---

<br/>
<br/>
<br/>

# Readable Variables:  
To compensate for less comments, we want code to read like english would.   
Ideally you should be able to read code similar to how you would read english.

(Try to prefix boolean variables with `can` or `is` when appropriate.)   
EXAMPLE:
```lua

function doStuff2(ent)
    if (not umg.ask("items:isInventoryLocked", ent)) then
        -- ^^^ BAD! unreadable!!
        ...
    end
end


function doStuff2(ent)
    local canOpen = (not umg.ask("items:isInventoryLocked", ent))
    if canOpen then
        -- ^^^ MUCH BETTER :)))
        -- (reads well: "if canOpen then")
        ...
    end
end


-- OR, EVEN BETTER:
function doStuff3(ent)
    if canOpen(ent) then
        -- ^^^ WOW, SO READABLE :D much wow
        ...
    end
end
```

In general, localize when appropriate:
```lua
-- BAD!!!!
function foo()
    print(my_table.position.x)
    print(my_table.position.y)
    print(my_table.position.z)
end

-- better:
function foo()
    local pos = my_table.position
    print(pos.x)
    print(pos.y)
    print(pos.z)
end
```

----

<br/>
<br/>
<br/>



# Indentation
Use 4 spaces please.

----

<br/>
<br/>
<br/>


# Line spacing
In UMG, we use line-spacing to group together related bits of code, to make it more readable.  

For functions/code that do similar stuff, group them tightly together.  
Else, split them apart using newlines.

EXAMPLE:
```lua

local util = {}



function util.tryCall(f, ...)
    ...
end


-- notice the newlines here


function util.log(msg)
    ...
end


-- and here


local function newCompresser(str)
    return ...
end
-- but only one newline here!
function util.compressString(str)
    local b = newCompresser(str)
    ...
end
-- and only one here!
function util.decompressString(str)
    ...
end
```

this helps us reason about the code better,
because it is broken up implicitly into regions.

(In general, code is never really something that you read top-to-bottom like a book; but rather, more similar to a bunch of nodes connected in a big graph.)

Ideally, try to use 3 or 4 newlines between unrelated functions, and 1 newline between related functions.

*WITHIN* a function, there should be a maximum of ONE newline between statements.  
(It should follow the same rule as above; create space if the statements are unrelated)

----

<br/>
<br/>
<br/>

# Table arguments:
If you have many arguments, consider combining them into a table:
```lua

-- BAD!!! it's hard to tell what's happening
dispatchCommand(cmd, b.foo, r, r2)

-- GOOD. This is readable:
dispatchCommand({
    type = cmd,
    argumentTable = b.foo,
    viewArea = r,
    spawnArea = r2
})

-- THIS IS GOOD TOO:
dispatchCommand(cmd, {
    argumentTable = b.foo,
    viewArea = r,
    spawnArea = r2
})
```
IMPORTANT DISCLAIMER:  
Using a table is very inefficient compared to arguments, since it incurs an allocation.  
Only use a table if it won't impact performance much.

