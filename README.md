# Project Overview

## Project Name

The Poke Card Database

## Project Description

The Poke Card Database will allow users to look up cards based on their favorite pokemon or by specific sets.  It will display the cards image along with brief details regarding the cards, such as release date and rarity.  It will also include a link to purchase each card to help assist players with adding their favorites to their collections.  Condition can't be guaranteed as some of these cards would be over 20 years old at this point.  It is designed to assist new players/collectors with familiarizing themselves with the different cards and sets that are in existence.  It is my hope to include a collection side to the site as well, to help players with cataloging their cards, as a great many try to take care not to handle them too much.

## API and Data Sample
I will be using the Pokemon TCG Developers API.  https://docs.pokemontcg.io/

```json
{
    "data": [
        {
            "id": "gym2-2",
            "name": "Blaine's Charizard",
            "supertype": "Pokémon",
            "subtypes": [
                "Stage 2"
            ],
            "level": "50",
            "hp": "100",
            "types": [
                "Fire"
            ],
            "evolvesFrom": "Blaine's Charmeleon",
            "attacks": [
                {
                    "name": "Roaring Flames",
                    "cost": [
                        "Fire"
                    ],
                    "convertedEnergyCost": 1,
                    "damage": "20+",
                    "text": "Discard all Fire Energy cards attached to Blaine's Charizard. If all Energy cards attached to Blaine's Charizard provide 2 Fire Energy, discard all of them. This attack does 20 damage plus 20 more damage for each Fire Energy discarded in this way."
                },
                {
                    "name": "Flame Jet",
                    "cost": [
                        "Fire",
                        "Fire"
                    ],
                    "convertedEnergyCost": 2,
                    "damage": "",
                    "text": "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)"
                }
            ],
            "weaknesses": [
                {
                    "type": "Water",
                    "value": "×2"
                }
            ],
            "resistances": [
                {
                    "type": "Fighting",
                    "value": "-30"
                }
            ],
            "retreatCost": [
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            "convertedRetreatCost": 3,
            "set": {
                "id": "gym2",
                "name": "Gym Challenge",
                "series": "Gym",
                "printedTotal": 132,
                "total": 132,
                "legalities": {
                    "unlimited": "Legal"
                },
                "ptcgoCode": "G2",
                "releaseDate": "2000/10/16",
                "updatedAt": "2020/08/14 09:35:00",
                "images": {
                    "symbol": "https://images.pokemontcg.io/gym2/symbol.png",
                    "logo": "https://images.pokemontcg.io/gym2/logo.png"
                }
            },
            "number": "2",
            "artist": "Ken Sugimori",
            "rarity": "Rare Holo",
            "nationalPokedexNumbers": [
                6
            ],
            "legalities": {
                "unlimited": "Legal"
            },
            "images": {
                "small": "https://images.pokemontcg.io/gym2/2.png",
                "large": "https://images.pokemontcg.io/gym2/2_hires.png"
            },
            "tcgplayer": {
                "url": "https://prices.pokemontcg.io/tcgplayer/gym2-2",
                "updatedAt": "2021/03/07",
                "prices": {
                    "holofoil": {
                        "low": 284.8,
                        "mid": 450.0,
                        "high": 500.24,
                        "market": 306.7,
                        "directLow": null
                    },
                    "1stEditionHolofoil": {
                        "low": 980.0,
                        "mid": 1349.99,
                        "high": 1652.99,
                        "market": 1600.0,
                        "directLow": null
                    }
                }
            }
        },
```

## Wireframes

![Alt text](PokeCard-Info/assets/wireframe.png?raw=true)

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api 
- Render data on page 
- Allow user to choose favorites 

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add second API
- Use local storage to save user favorites

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. Students usally put in around 40+ hours into their project 1.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  