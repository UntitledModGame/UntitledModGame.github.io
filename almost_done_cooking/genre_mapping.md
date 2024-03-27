

# Mapping out videogame genres

There are many videogame genres.<br/>
But all genres are defined separately, and hardly any of them are related.
Would it be possible to define a set of "scales" of "measures", that allows us to define all genres at once?

Lets try!


-----

## OK! How do we start? What are we doing?
To attempt to map out videogame genres, we should try discovering/creating a set of variables that exist in all games.

The simplest of these variables, is the `control` variable.<br/>
This variable dictates how the player's actions can affect the game:

## Control:

- First-person shooter: `control = single-entity`
- RTS: `control = multi-entity`
- City-builder: `control = world-interactive`
- Visual novel: `control = none`

Here, we have 4 basic control types:
```
single-entity (controls a single entity at once)
multi-entity (controls multiple entities at once)
world-interactive (edits/changes the world directly)
none (player doesn't have control over the world)
```

Note that we can have some overlap in these.<br/>
For example, many RTS genres will allow you to create buildings. This would give it something similar to the `world-interactive` control.


Here are some other direct examples from games:
- Nuclear throne: `control = single-entity`
- Conways GOL: `control = world-interactive / none`
- Call of duty: `control = single-entity`
- Chess: `control = multi-entity`
- The powder toy: `control = world-interactive`
- Stellaris: `control = multi-entity / world-interactive`
- Minecraft: `control = single-entity / world-interactive`

Cool!<br/>
Now you understand how I'm trying to categorize stuff here.<br/>
We have defined our first variable: `control`.

Lets go on to define our next thing: `progression`.

## Progression:
"Progression" defines how a player progresses through the game.

There are a few types of progression:

- One-way progression:
    - Progression goes one-way. 
    - Eg: You finish the level. You unlock a new character.
- Ephemeral progression:
    - Progression is temporary, and/or you can go backwards.
    - Eg. You die in a roguelike
- Abstract progression:
    - Progression is not well-defined, or is defined by the player
    - Eg. building a base in minecraft.


I believe that these 3 progression types, (when combined,) can be used to define the progression system in ALL games.

Each progression type has it's upsides and downsides.<br/>
I'll list my opinion below:

---


|  Progression Type: | Main Upside      | Main Downside |
| ------------------ | ------------- | -------- |
| One-way      | High developer control  | Needs more content |
| Ephemeral   | Allows for fast progression speed | Gameplay can get stale |
| Abstract   | Excellent gameplay potential | Low developer control |

---

Hopefully all of these make sense.


Note that many games can have multiple progression-types baked in.
For example- Bloons-TD-6 has Ephemeral progression in levels, (since you restart at the end of a run), but ALSO has One-way progression, since you can buy permanent upgrades for your towers.

Note that in Bloons-TD-6, you can obtain most of the towers in a SINGLE run; a run lasting less than an hour.<br/>
This is due to it's Ephemeral nature; the towers are reset at the end of the run, so the game can afford to give you many upgrades in a short amount of time, since they will be reset.<br/>
As listed, this is the main upside of Ephemeral progression.

For One-way progression, note that it doesn't neccessarily have to relate to the overarching game in itself.<br/>
Take for example, the tool-system in minecraft. Minecraft has a very linear tool-system: once you have diamond tools, there is never any reason to go back to stone tools. As such, Minecraft's tool progression is One-way.

That being said, in a broad sense, I would say that Minecraft's main progression system is Abstract.<br/>
Players can set their own goals, and achieve what they want!<br/>
And hopefully the upsides/downsides make sense now. The main upside is that the gameplay potential is *limitless.* The players set the goals, the *players define the progression.* However, the main downside is that the developer has no control over what the players do. This can lead to missed gameplay opportunities, or wasted time on the developer's behalf.

Anyway, I feel like I've been rambling a bit here.<br/>
You get the idea. Lets move on to our next variable :)

---

## Cognitive-load:

This one is pretty basic.<br/>
It's basically the amount of critical thinking required to progress in the game.

- Fruit-ninja: low cognitive load.
- Baba-is-you: high cognitive load.

The `Cognitive load` of a game often lies inversely proportional to it's pace.

For example, in an FPS game, the objective is simple:<br/>
Shoot the opponent. <br/>
FPSes are fast-paced and full of action, no time to think.

Whereas a puzzle game is slow paced, and requires a high cognitive load.

Note that some games can have both.<br/>
For example, in Risk of rain 2, there is low-cognitive-load when fighting, but high-cognitive-load when choosing your build.


----

## Sociality:

This one is basic too.<br/>
It's basically asking: "How do we interact with other players?"

There are a few types of "Sociality":
```
Cooperative 
PvP
Dynamic

No-interaction (single player game)
```

No-interaction is just for single-player games.

Cooperative and PvP are self-explanatory;<br/>
Many games have both. For example, CS:GO has BOTH cooperative AND PvP, since there are 2 opposing teams of 5 players.

But `Dynamic` is where it gets interesting!<br/>
"Dynamic" is when the relationships between the players are dependent on their own feelings, desires, or goals.

For example, in Among-Us, crewmates do not know who they are teamed up with, so different crewmates may end up trusting / working against other players depending on their feelings; (even though their actual roles are pre-determined)

A better example would a Rust server: players are generally expected to work in teams; however, players may switch allegiance at any time. There may be spies, and arbitrary alliances may be formed/broken between any players at any time.

---


## Narrative score:

The Narrative score is how much emotion the game attempts to convey through story.

For example,<br/>
- Undertale: 10/10 narrative<br/>
- Chess: 0/10 narrative

Generally, the higher the narrative score, the less emergent/abstract the game (and it's progression) can be.<br/>
This is because with emergence, (and with abstract-progression) we lose control as a developer.

To tell a compelling story, we need a lot of control.<br/>
Unfortunetely... we forfeit a lot of our control as soon as we attempt to add emergent systems.

This is why I, personally, would advocate to forfiet story-based content, and instead focus on creating good systems.

----




