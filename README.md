## Project Description 
> Getting data on monster from the dnd 5e API, and rendering it into readable info on the chosen monster.

## Link to the API you plan to use
> https://www.dnd5eapi.co/api/

## Example data response you plan to use
```"index": "gelatinous-cube",
    "name": "Gelatinous Cube",
    "size": "Large",
    "type": "ooze",
    "subtype": null,
    "alignment": "unaligned",
    "armor_class": 6,
    "hit_points": 84,
    "hit_dice": "8d10",
    "speed": {
        "walk": "15 ft."
    },
    "strength": 14,
    "dexterity": 3,
    "constitution": 20,
    "intelligence": 1,
    "wisdom": 6,
    "charisma": 1,
    "proficiencies": [],
    "damage_vulnerabilities": [],
    "damage_resistances": [],
    "damage_immunities": [],
```
there are like 70 more lines of nerd data per monster, the API has data on monsters, races, magical items, all sorts of stuff. No shortage of content that I could render. 

## Visual of your component hierarchy

![component wireframe](https://media.git.generalassemb.ly/user/32278/files/0e75a100-551b-11eb-9c00-33f5a63f5d65)


## Wire Frames
> 
![app wireframe](https://media.git.generalassemb.ly/user/32278/files/146b8200-551b-11eb-951a-de57c49457e3)


## User Stories

-  As a bored person, I want to click the random monster button and read all sorts of stuff about the random monster that shows up.

- As a DM I want to be able to type in the monster name and get pertinent game data.
 
- As a player, I want to be able to type in the monster name and get a description of the monster, and see just how hard they are going to kill my player character.



### MVP Goals
API that calls data from the dnd5e API and renders information about monsters into a readable format and displays concise, pertinent data to the user.

### Stretch Goals
Maybe add other information, about magic items, or spells? Player classes or other D&D info. 
