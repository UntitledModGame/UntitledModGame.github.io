

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

Cool!<br/>
Now you understand how I'm trying to categorize stuff here.<br/>
We have defined our first variable: `control`.

Lets go on to define our next thing: `progression`.

## Progression:
"Progression" defines how a player progresses through the game.

However, I don't think we can simply define progression as one variable.<br/>
There can be many different types of "progression" within videogames...<br/>
progression within levels, within the player character, or even meta-progression that trancends across the whole game.

We could use multiple variables instead:

```
Progression ephemerality: 
    How often (or how harshly) is progression reset across a game session?
    0 = never reset,  10 = fully reset

Progression importance:
    How important is progression to the gameplay?
    0 = not important,  10 = very important

Progression autonomy:
    How much autonomy does the player have in progressing?
    0 = no autonomy,  10 = full autonomy
```

Ok! Awesome.<br/>
As you can see, we have rated all of these variables on a scale from 0-10.

Lets map out some games:

```
BINDING OF ISAAC:
P-ephemerality: 9 (Items and stats reset across runs)
P-importance: 8 (A core part of the )
P-autonomy: 5 (Items and pickups are pre-determined per the seed)
```

```
MINECRAFT:
P-ephemerality: 0 (worlds are persistent)
P-importance: 2 (the player can be a lazy bumb, and it won't affect gameplay)
P-autonomy: 10 (the player sets their own goals and chooses how to progress)
```

```
CHESS:
P-ephemerality: 10 (Reset fully after runs)
P-importance: 10 ()
P-autonomy: 5 (50% of progression determined by each player)
```

##

