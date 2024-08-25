---
slug: umg_style_guide
title: UMG Style Guide
tags: [umg]
---

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

<br/>
<br/>

# Readable Variables:  
To compensate for no comments, we want code to read like english would.   
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

<br/>

# Indentation
Use 4 spaces please.

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


<br/>
<br/>
<br/>

# Table returns:

Our goal is to maximize readability.  
As such, prefer passing/returning tables to aid readability.

If you have many return values, consider combining them in a table.
```lua

function factory()
    ...

    -- BAD!!! Unreadable
    return player, enemy, wall, ground, bg
end


function factory()
    ...

    --GOOD!! Readible
    return {
        player = player,
        enemy = enemy,
        wall = wall,
        ground = ground,
        bg = bg
    }
end
```



# Table arguments:
And for defining functions:  
If you have many arguments, consider combining them into an arguments table.
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


# Variables and Filenames Notation
Try avoid global variables as much as possible. if you really want/need to, use all uppercase
CamelCase notation for module/library/source files you require, this include classes
snake_case or camelCase for filenames


All uppercase for constant variables
  GLOBAL_VAR = "hello" --please avoid globals as much as possible
  local Library = require("my_library")
  local MyClass = {}
  local filename = "my_library_file_name"
  local PI = 3.4
  local foo = 1
  local foo_bar = 2
Requiring
localise it for every file
use the . operator as path separator instead of /
use CamelCase notation
  local Vector2 = require("modules.vector2")
  local State = require("src.state")

  --foo.lua
  local Foo = {}

  Foo.test = "I'm good and safe"
  local im_only_available_in_foo = true

  im_a_global = 1 --BOOOOOOOO!!!!!!! Get out of here!

  return Foo
Module vs. Class Structure
use the . operator for modules
use the : operator for classes
both module and class should be file-scoped and free of dependencies as much as possible, meaning every thing inside the module/class file should be inside a table or local (again, no globals!)
  --module
  local MyModule = {
      value = 1
  }

  function MyModule.load()
      print(MyModule.value)
  end

  return MyModule

  --class
  local MyClass = {
      value = 1
  }

  function MyClass:load()
      print(self.value)
  end
 
  return MyClass
Functions/Methods
local functions follow the format local function <name>() instead of local <name> = function()
class methods - use CamelCase notation for class (see previous discussion) and snake_case notation for method.
modules use the . operator for methods, only use : for classes.
  local function sum(a, b) end
  function State:load(id, some_arg) end
  function State:do_something() end
  function Vec2.new() end
Anonymous Function
anonymous functions should be avoided as much as possible. It is better to write it as a well-defined function.
  local t = {1, 2, 3}

  --instead of
  map(t, function(a) return a * 2 end)

  --prefer this
  local function double(a) return a * 2 end

  map(t, double)
passing an anonymouse function (usually as a callback) follows this format:
the function syntax should be in the same line as the function caller unless it has too many preceeding parameters in which case in a newline is OK.
the end syntax must match the indentation of the caller
  function on_click(id, on_complete)
      if id == 1 then
          on_complete()
      end
  end

  --usage
  on_click(1, function()
      print("yes")
  end)
the following are to be avoided and to be taken with caution and extreme consideration:
if somehow you are passing an anonymous function during every frame, note that it will be garbage-y.
  --totally avoid this!
  function love.update(dt)
      foo(3, function() print("this will create a lot of garbage") end)
  end
do not use function like lambda
  (function(a) print(a) end)(1, 2, 3, 4, 5)
Returning
prefer returning a variable (exemption is if returning explicit boolean)
  function test(x, y, w, h)
      --instead of
      return (x < w) and (y < h)

      --prefer this
      local result = (x < w) and (y < h)

      return result

      --exemption
      --this is OK, no need to store in a variable
      return true --or false
  end
returning multiple values are separated properly, also use the previous point
  local a = 1
  local b = a + 1 + 2
  local c = a + b + 3

  return a, b, c
if returning multiple table or data, prefer returning a table (only if all returned values are needed)
  --this is OK
  function read(string)
      local exists, content = read_file(string)

      return exists, content
  end

  function factory(id, id2, id3, id4, id5)
      local player = create_from_id(id)
      local enemy = create_from_id(id2)
      local wall = create_from_id(id3)
      local ground = create_from_id(id4)
      local bg = create_from_id(id5)

      --instead of this
      return player, enemy, wall, ground, bg

      --prefer this
      return {
          player = player,
          enemy = enemy,
          wall = wall,
          ground = ground,
          bg = bg
      }
  end
Operations
assignment operator = must have spaces around it
+, -, and * must have spaces around them
For other operators like the concat operator which in Lua is .., we also put spaces around it
  local sum = 1 + 1 --2
  local difference = 10 - 4 --6
  local product = 2 * 10 --20
  local quotient = 100/5 --20
  local hello_world = "hello " .. "world"
Variable Declaration
when a local variable is declared without value, no need to assign it with nil
when a variable inside a table or class, it should have the nil value
multiple variables with nil as initial value is OK to be on the same line
when declaring variable(s), always separate it from usage
when setting a value inside a table as nil, that will be deleted. The purpose of writing it even though it will be deleted is for users to see clearly that such a variable or property of a table will exist (will be set later in runtime).
  --declaration
  local my_table = {
      a = 1,
 		--note that `b` will be deleted in the table, but atleast
 		--we know as readers that a property will exist during runtime
      b = nil,
      c = 2
  }
  local no_value
  local i_am_nil, me_too, i_too
  local a = 1
  local b = 2
  local c = 3

  --usage
  print(a + b + c)
  print(a - b - c)
  print(a * b * c)
Table Declaration
tables with few elements (especially for index-table) can be written in a single line
tables that behaves as a dictionary (called key-pair table) must always be separated with newline.
  local i_table = {1, 2, 3, 4, "hello", "world"}

  local kv_table = {
      a = 1,
      b = 2,
      str = "hello",
      hey = "world",
  }
Iterators
using ipairs(), if index is not needed, use _ variable name.
using pairs(), make the k, v variables with sensical names (especially if deep within a function or if it is nested)
  --using the tables we have in the previous point
  for i, v in ipairs(i_table) do
      --here we need the i
      print(i .. " = " .. v)
  end

  for _, v in ipairs(i_table) do
      --here we do not need the i
      print(v)
  end

  for k, v in pairs(kv_table) do
      --here we need both k and v
      --also this is a single loop
      print(k .. " = " .. v)
  end

  local logs = {
      byron = {"what's up", "hello", "hi"},
      brandon = {"okay", "yes", "no"},
      angel = {"apple", "orange", "grapes"},
      ralyn = {"neo", "kezia"},
  }

  --here we need the user_id, also it makes sense and is easier to see what
  --the variables are and their purpose especially in nested loops
  for name, messages in ipairs(logs) do
      for _, message in ipairs(messages) do
          print(name .. ": " .. message)
      end
  end
Table Access or Reference
if a table value/property is going to be accessed multiple times within a code block, it is better to localised it within that code block
  local my_table = {
      position = {x = 1, y = 2, z = 3}
  }

  --instead of this
  function foo()
      print(my_table.position.x)
      print(my_table.position.y)
      print(my_table.position.z)
  end

  --do this
  function bar()
      local pos = my_table.position

      print(pos.x)
      print(pos.y)
      print(pos.z)
  end
Conditionals
if checking if a variable is boolean value (note that make sure the variable is boolean)
  --instead of these:
  if correct == true then end

  if correct == false then end

  --prefer these:
  if correct then end

  if not correct then end
use () to group expressions for compound conditions
prefer using of variable rather than putting long expressions in conditionals
  local a = 1
  local result = (type(a) == "number") and (a > 0) and (a < 10)

  if result then
      print("correct!")
  end
Code Blocks
function definitions should always have a newline before and after it.
  local nothing

  function foo()
  end

  function bar()
  end
single line block of conditionals is encouraged to be in single line.
  function foo() return 1 end

  function bar(id)
      if not id then return end

      print(id)
  end
returning a value from a function is encouraged to be separated as it is the last (usually) line
  --this is a stupid function I know, just for showcasing an example.
  function foo(a, b)
      if a == 1 then
          if b == 1 then
              local c = a + b

              return c
          end
          --still a newline after a conditional block
          return 0
      end
  end
conditionals statements should always have a newline before and after it.
  local a = 10

  if a > 0 then
      print("a is positive")
  elseif a < 0 then
      print("a is negative")
  else
      print("a is zero")
  end

  print("value of a is: " .. a)
for nested conditionals like a double for-loop we can skip the newline before
  local a = {1, 2, 3}
  local b = {4, 5, 6}

  for i = 1, #a do
      for j = 1, #b do
          local sum = a[i] + b[j]

          print(sum)
      end
  end
File Structure
in order of priority:
globals (if you really want to)
modules
source files
localisation of standard libraries
local variables
callbacks/functions/methods
--globals
IS_DEV_MODE = true

--modules
local Class = require("modules.class.class")
local Timer = require("modules.timer.timer")
local Vec2 = require("modules.vec2.vec2")

--source files
local Color = require("src.color")
local Utils = require("src.utils")

--local standard librarie
local insert = table.insert
local floor = math.floor
local format = string.format

--local variables
local id = "game"
local version = "0.0.1"

--callbacks etc etc
function love.load() end

function love.update(dt) end

function love.draw() end






