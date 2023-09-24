---
slug: luaidioms
title: Common lua idioms
tags: [coding]
---

# Common lua idioms

I have been using lua for a while. (About 4 years as of writing this!)<br/>
It's a language that I kinda grew up on, and I've learned to love.<br/>
This article will contain a list of idioms that are common to see in lua.<br/>
Lets go!

<!--truncate-->

## Default values with `or`
```lua
local x = obj.x or 15
-- in lua, accessing an undefined table value defaults to `nil`.
-- `nil` and `false` are falsey values,
-- So in this example,
-- If `obj` doesnt have the `.x`, then it will fall back to 15.

-- another common use case:
obj.x = obj.x or 0

```

----------------

## Optional arguments:

In lua, passing less or more arguments doesn't error.
```lua
local function f(x)
    print(x)
end

f(1,2,3) -- this is fine. output: 1
f() -- this is fine. output: nil
```

We can use this to have optional arguments:
```lua
-- euclidean distance:
local function distance(x, y, z)
    z = z or 0 -- z is an optional argument!
    local dx, dy, dz = x*x, y*y, z*z
    return (dx+dy+dz) ^ 0.5
end


print(distance(3,4)) -- 5
print(distance(3,4,5)) -- 7.071
```

---------------

## Error on undefined access

In lua, if you access an undefined variable, that variable returns nil.
Example:
```lua
print(undefined_variable_34389439) -- nil
-- no error!
```
This is a bit weird, and some people don't like it.<br/>
But we can change this with `__index` and `setmetatable`.

In lua, `_G` is the special table that holds all the globals.
```lua
local function err(t,k,v)
    error("Accessed an undefined variable: " .. tostring(k))
end
setmetatable(_G, {
    __index = err
})
```
Now, if we access an undefined variable:
```lua
print(undefined_variable_34389439)
-- Error: main.lua:4:
-- Accessed an undefined variable: undefined_variable_34389439
```

You can do the same with `__newindex` if you want to stop pollution of the global namespace on accident.

------------------

## Private class methods
For the OOP folks out there, who want private methods.

Often in lua, you'll see a class setup like so:

```lua
local MyClass = Class()

function Class:init()
    self.x = 0; self.y = 0
end

function Class:privateHi()
    -- ugh, I wish this could be private!
    print(self)
end

function Class:hi()
    self:privateHi()
    print("hiiii")
end
```
Private methods can be done like so.
```lua

local function privateHi(self)
    -- yay, now i am private!
    print(self)
end

function Class:hi()
    privateHi(self)
    print("hiiii")
end
```
At first, you may feel uneasy doing it this way, or you may feel cheated.<br/>
Realize though, that all functions in lua are anonymous and first-class. `privateHi` has the exact same bytecode as `Class:privateHi`:
```
0000	FUNCF    4 
0001	GGET     1   0      ; "print"
0002	MOV      3   0
0003	CALL     1   1   2
0004	RET0     0   1
```
The only difference is that one is inside a table, and one is a local.

----------------------



