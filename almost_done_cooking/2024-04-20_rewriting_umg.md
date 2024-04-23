---
slug: rewriting_umg_api
title: If I had to rewrite the UMG API...
tags: [design, umg, coding]
---

If I had to fully re-write the UMG API right now, what would I change?  
What would a new version look like?

<!--truncate-->

- Ergonomic, powerful, assumptionless
- rules applied in a global fashion
- Event-driven
- Custom data-structures for entities
- Delayed-structuring


I guess the main awkward thing, is that evbuses and qbuses are kinda attempting to "solve" the *exact* same problem as delayed-structuring.

Also: delayed-structuring isn't even an idiom/pattern!  
It's just a fakken IDEA!!!  
In fact, ev/q buses ARE providing delayed-structuring!!!  
That is *literally* what their purpose is.

(For the remainder of this document, lets refer to "Delayed structuring" as "DELS".)  
So we definitely want to keep ev/q buses around, because they provide DELS in a really straightforward, ergonomic, and powerful manner.

----

# Entity-storage:
Personally, I would change this to a more generic, "view" API:
```lua
local view = umg.view("x", "y")

view:onAdded(f)
view:onRemoved(f)
```
This would be really beautiful, as you could create groups *from* views.

---

# Events, Questions: 
These provide amazing DELS within a system. 
We *need* this stuff.
```lua
umg.defineEvent(...)
umg.defineQuestion(...)

umg.call(...)
umg.on(...)
umg.ask(...)
umg.answer(...)
```


# Rule:
A "Rule" is a monolithic object, that provides DELS for a singleton-like system.
```lua
local r = umg.rule()
```


# Antirule:

