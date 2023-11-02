---
slug: parasitic_problems
title: Parasitic problems
tags: [opinion]
---

# Parasitic problems

I feel like the best solutions are for problems that aren't known to exist.

<!--truncate-->

This was certainly the case for [question buses](../buses).<br/>
Before the creation of question buses, there was no real "problem" with having to receive data;
however, as soon as question-buses were created, the "problem" that question-buses were solving was blatantly obvious.

Today, if you asked me to create a UMG-like ecosystem *without* question-buses, I would notice their absence ALL the time.

-----------------

Problem-solving is generally hard!

But I think what's harder, is actually problem-*discovery.*

In my opinion, the hardest part is not solving problems:<br/>
It's *recognizing* the problems.<br/>
Some kinds of problems are insanely hard to recognize, because we just accept them for what they are. 

As programmers, we are highly accustomed to working within the limits and constraints of our systems.<br/>
And with this, I feel like it is very easy to mistake problems for unmoving constraints.

These kind of problems, problems that are mistaken for systemic constraints, I like to call "Parasitic problems".<br/>
Parasitic problems aren't really apparent at first glance, because our brain mistakes them for unchangable constraints of the system.<br/>
These kind of problems can affect end products *dramatically*.<br/>If we don't recognize parasitic-problems, they will sit there *FOREVER*, just beneath our code. Like a dark, invisible parasite, putting a dull tax on efficiency.<br/>
And what's frustrating, is that most of the time, we won't notice that these problems even exist, because we mistake them for systemic constraints!

--------------

# An example: Horses in the Middle ages

If you are a King in the middle ages, and you want to move your army from point-A to point-B as fast as possible, you will send them on horses.

But the issue is that horses can only move so fast!<br/>
Your horses can travel about 40 kilometers a day with equipment, but that's not fast enough to respond to an invasion force.<br/>
And we know FOR SURE that *Terry the Terrible* is plotting an invasion right as we speak. 

OK! What should we do?<br/>
We could do a few things:

- Set up a barracks closer to the settlements, and keep some armies there
- Train (and equip) the villagers so they can defend themselves
- Spread propaganda within enemy territory to prevent an invasion in the first place

Nice! Ok, these are all valid options.<br/>
But you, (Your majesty,) are missing one crucial detail: You are looking at the *solutions*, not the *problem.*<br/>
Rememember our original problem: "Our armies can't respond to invasions in time"

And our primary constraint is that our horses can only travel 40 kilometers per day.<br/>
Can we change this?

Well of course we can!<br/>
In modern-day, armies travel by air, by train, and by truck.<br/>

With this, we have re-defined our problem:<br/>
> "Our armies can't respond to invasions in time"<br/>
Gets changed to:<br/>
> "Our armies are moving too slow"

I'd like to clarify here. We are not "solving" a problem. We are RE-DEFINING the problem. With the initial problem, we *assumed* that horse-speeds were a constant constraint.<br/>
With our previous problem-statement, we didn't even LOOK for solutions to move our armies faster, since we regarded it as a constraint. This is a great example of a parasitic problem.

For years, the problem of army-movement was locked to the speed of horses. But you, benevolent King, you can change that!<br/>
All you need to do, is invent the amazing *steam engine*, and the *locomotive.*

--------------

![train_poster](images/train_poster.jpg)

--------------

## Hold up!

Simply "inventing trains" is no easy feat.<br/>
First off, how do we know that locomotives are even possible? It's easy to say "invent X, invent Y" in [hindsight](https://en.wikipedia.org/wiki/Egg_of_Columbus), since the brilliant discovery has already been done.

(And, before we go further; I'd like to point out the invention of trains is a pretty bad example to use for this.<br/>
When you and I go to solve problems in our software, we will generally solve small problems, with small scopes. Going from horses to locomotives is NOT a solution with a small scope.
I just wanted to point out- the main reason I used this example is because it's very easy to understand.)

In any case, the awkward thing about parasitic problems, is that often, you'll be stumbling around blindly.<br/>
If the problem-statement had instead been changed to: "How do we find horses that are 100x stronger?" then I'm sure that nothing would have been accomplished; since (biologically) there is so such thing.<br/>
But back then, medieval empires wouldn't have known this. It's likely that a lot of time was wasted trying to solve the "problem" of finding/creating giant horses!

-------------

![big_moose](images/giant_moose_army.png)

------------

Quite frankly, this is the trouble with "solving" parasitic-problems.<br/>
Remember that a parasitic-problem is just a constraint *redefined* as a problem. We haven't actually solved anything; and we don't know if a solution is possible.<br/>
It's entirely possible that the problem is actually a hard constraint.

-------------------

# Solving parasitic-problems accidentally:

I also think that toying around with random ideas is underrated. When I came up with the idea for question-buses, I wasn't attempting to "solve" any problem, I was just curious as to what event-buses would look like if the data flow was reversed.<br/>
And as it turned out, question-buses have completely transformed the project.

This was the same with the load-time entityType mutation API. (Ie. UMG's `@newEntityType` callback; naming may be different.)
With this, I wasn't actually looking to solve anything, I was just toying around with ideas. As soon as the API existed, the problems that it solved materialized into existance- from unseen-constraints, to a set of parasitic-problems that could be solved easily with this new setup.

-----

Thanks for reading this opinion piece!

