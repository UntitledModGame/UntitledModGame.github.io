---
slug: results_orientated_gamedev
title: Results orientated gamedev, and why it's bad
tags: [design, opinion]
---


# Results orientated gamedev, and why it's bad

I think that developing games purely from a results-orientated perspective is bad.
This article will explain my reasoning, and is a successor to [my other article on emergence.](../emergence)

<!-- truncate -->

This article will discuss the difference between 2 development methods:
- "Results orientated development"
- and "Systems orientated development"


When I say a development cycle is "results orientated", I mean that the developers start with the player interactions/gameplay in mind, and develop the product from there.

------------------

Take for example, this development cycle:
- "We want gameplay where the players shoot zombies, and build fortifications to defend against zombies".

Ok.<br/>
With this goal in mind, the development cycle will continue as expected... When the cycle is finished, we will have a basic product. Players will be able to build fortifications, and use their guns to fend off the waves of undead.<br/>

But the problem with this setup is that we have (probably) created a highly one-dimensional setup.<br/>
Does it matter if we have hordes of undead to fight, if our systems aren't good?

When I talk "systems", I don't mean invisible architecture; I mean real systems that the player can observe and intuitively interact with.<br/>
The building/fortification system is great! cool! But did we implement it in a way that gives depth, *beyond* the closed scope of the development cycle?<br/>
Sure, our fortifications are great at dealing with zombies! But next update, we are adding multiplayer. Will our fortifications be able to deal with an onslaught of raiders from the other side of the server?<br/>
Maybe! But even if they *do* succeed in fending off player raiders, they weren't meant to, and we got lucky.<br/>
And this is our problem.

It would be much better if we started off with a more generic goal, and started development from a *systems orientated* perspective.

For example:
- "We want a system where the player can manipulate structures to serve their goals"

Already, this looks way more promising.<br/>
Lets ignore zombies. Lets ignore raiders. Lets just give our players the *tools* to create and manipulate structures in a comprehensive fashion. From there, whatever other systems/mechanics we may add in the future, they are guaranteed to mesh well with our building system, since we made our system open ended.

I call this, "systems orientated" development.

-----------------

# Chess!

![chess](images/chess2.jpg)

----------------

Chess is epic.<br/>
It's one of the best games to ever exist. And it's popularity proves it.

Chess was a game that was developed from a "systems orientated" perspective, as opposed to a "results orientated" perspective.

-------

Ok! Lets have a look at some of the core mechanics of chess, and lets imagine what Chess would look like if it was developed with the end-result in mind.

--------

**Forks.** <-- These things [are an important part of chess.](https://en.wikipedia.org/wiki/Fork_(chess))<br/>
However, lets stop to ponder.

The genius cavemen who created chess... did they develop chess with forks in mind? 

- **Caveman Bob:** "Hey Caveman Fred, ooga booga. You know what I want? I want a game where there are [PINS](https://en.wikipedia.org/wiki/Pin_(chess)), and [FORKS!](https://en.wikipedia.org/wiki/Fork_(chess))"
- **Caveman Fred:** "Ooga booga, that sounds like a GREAT idea!"

So I can guarantee that this never happened.<br/>
Why? Well, because forks and pins *don't exist outside of chess.*<br/>
They were created as a result of chess's amazing systems.

If we try to create truly interesting/emergent gameplay from a results-orientated perspective, we will fail. Because the most interesting game mechanics simply *don't exist*, unless the systems exist to back them up.

Consider:
- **Caveman Bob:** "How about we make a game where positional strategy is really important?"
- **Caveman Fred:** "Ooga booga! OK!"
- **Caveman Bob:** "Hmm. We need a system where pieces can link up and connect with each other."
- **Caveman Fred:** "What if pieces can capture other pieces? That way, by positioning your pieces, you can protect them."

From there, Fred and Bob would go on to create the most influential game in human history, (besides Go).

Note that they didn't start with a direct end goal in mind. They started with a vague idea for an interesting concept.<br/>
Bob and Fred developed chess from a *systems-orientated* perspective. And as a result, pins and forks were implemented for *free*, which are super important gameplay elements in chess.

And that's pretty much my main point.

I know, it feels weird. It feels dumb. My inner project-manager is enraged!<br/>
But I truly believe that developing systems, and having [systematic emergence](../emergence) in games is **way more important** than having a direct end-result that you can work towards.

---------------

Good gameplay cannot create systems, but good systems can create gameplay.<br/>
In my opinion, that sums up why I think it's good to approach gamedev from a systems-orientated perspective.

Thank you for reading! :)


