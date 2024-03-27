---
slug: art_of_assumptions
title: The Art of Assumptions
tags: [design, coding]
---

I am writing this post, because I don't want to make mistakes like this in the future.  
And I think that analyzing past mistakes, and attempting to understand them, are a good way to avoid them.

<!--truncate-->

For context, I have been working on UMG for about 2.5 years.  
And throughout this time, over and over, I have made the same mistake of making too many assumptions about the future.

When I say "making an assumption", I mean you make a "guess" about how code/data is going to be used.   
APIs can assume a lot, or can assume not much.  

For example: `math.distance(x, y)`  
This is a highly *assumptionless* API. 
We do not know (or CARE) where the `x,y` values are from. We just compute the euclidian distance.

Another example: `uiObject:setBorderColor(color)`  
By contrast, this is an assumption-heavy API.   
We are assuming that `uiObject` has a border.  
We are assuming that the border has a color.  
And we are also assuming that the `uiObject` can be rendered on the screen!

At face value, there is nothing "wrong" with this.  
Assumptions work really well, *IF* we guess correctly. If every `uiObject` has a border, then this is great!  
But what happens if we want a transparent image as an element?  
UH OH... This isn't ideal.

It'd be much better if `uiObject` didn't have the `:setBorderColor(color)` method, and instead, we left border-handling to some other system/object.   
This way, we wouldn't be left with a weird, bloaty method that is only used for some objects.

In OOP land, this is very similar to the [Interface segregation principle,](https://en.wikipedia.org/wiki/Interface_segregation_principle) which attempts to isolate behaviour across interfaces as much as possible.

In a way, Interface-segregation embodies exactly what I mean by "assumptionless-programming".  
By splitting things into tiny, hyper-specific interfaces; we are assuming *VERY LITTLE* about the final structure of our objects.  
We are basically admitting to the system: "I have no idea what the final objects are going to look like! Thus, I will split the interfaces up as much as possible, so when I implement the concrete classes, the interfaces will fit nicely."

---

In UMG, however, we don't *often* do OOP; most UMG code is procedural.  
So, what does procedural assumptionless-code look like?  
I have some examples up my sleeve from UMG:

## Some examples from the UMG ecosystem:

Perhaps the most relevant example as of (27/03/2024) is ui.  
With the UI mod, I (stupidly) made an assumption that all root-UI-elements should be rendered in the main-scene.   
This... was really stupid. Because I've now come across a situation where we need to render UI elements directly in the world, rather than in the upper-level main-scene.  
To fix this, we need to remove the assumption that all root-elements exist in the main-scene; and instead, give the programmer the right to choose where the elements are put.  
(I know; this seems obvious in hindsight!)

Another example is the inventory system.  
A few years ago, I assumed that all inventories would be rendered into the world.   
Think like, a chest. Or an anvil. Or a player inventory.   
All of these can be rendered... no problem, right?  
No!!! This is terrible!   
We have created an assumption about *how* the inventory should be rendered. What happens if we want a minecraft-like inventory setup, with a hotbar at the bottom?   
Uh oh... suddenly, we need *2 different renderers;* one for the hotbar, and one for the inventory. Not possible under our current setup.

----

<br/>

----

Ok, so it's probably quite obvious by now that "highly assumptionless code" is a related concept to having [low coupling.](https://en.wikipedia.org/wiki/Coupling_(computer_programming))  
Whilst I would agree with this, I think coupling is more often used when talking about the internals of a system; or a system as a whole. When writing an internal system, a lot of the time, you don't need to make assumptions about the future; because everything should be contained inside of said system.

Assumptions, then, are mostly needed when we are creating an external API, and we are predicting *how* the API is to be used.  
[UMG is truly a different beast](../umgtech), for this exact reason. With every base-mod that I write, I am *FORCED* to create assumptions about the future of the platform.  
Which sucks, because my previous code has largely sucked at making good assumptions!!  
(I will note, however; that the core UMG-API has been excellent at making no assumptions; so at least I have that haha.)

I also want to point out, a piece of software that I think has a very "lovely" assumptionless structure, is [LOVE](https://love2d.org) itself.  With LOVE, the framework doesn't care at all how you structure your game.   
There's no such thing as a gameObject. 
It doesn't care where you put logic.  
It doesn't care how you load your files, either.  
Isn't that beautiful?  
Another API that is highly assumptionless is [Raylib.](https://www.raylib.com/examples.html)

<br/>
<br/>
<br/>


# Avoiding this in the future:
Obviously, I want to avoid this shit like the plague.  
As such, I have created a lil checklist/procedure for myself to use.
Here it is:

## Checklist for systems:
- List (abstractly) all actions (`A`) that this system is doing/performing.
    - For every action `A`, can `A` be split up in any way?
        - If so, consider splitting it up.
    - Also, try make ALL `A`s independent of one another.

- List every dependency / bit of coupling `C` that this system is involved with.
    - For each `C`, could we remove this coupling whilst maintaining simplicity?

## Checklist for components:
- Attempt to list all the scenarios that this component could be used in.
    - If there are many scenarios; good. Keep it.
    - If the list is lacking, consider killing the component, or making it more generic.



<br/>
<br/>

Thanks for reading; ok, lets hope I remember to try use this thing lol.

