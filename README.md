# Project Overview

## Project Name

The Poke Card Database

## Project Description

The Poke Card Database will allow users to look up cards based on their favorite pokemon or by specific sets.  It will display the cards image along with brief details regarding the cards, such as release date and rarity.  It will also include a link to purchase each card to help assist players with adding their favorites to their collections.  Condition can't be guaranteed as some of these cards would be over 20 years old at this point.  It is designed to assist new players/collectors with familiarizing themselves with the different cards and sets that are in existence.  It is my hope to include a collection side to the site as well, to help players with cataloging their cards, as a great many try to take care not to handle them too much.

### [Pokecard Database](https://pages.git.generalassemb.ly/craignavarro/PokeCard-Info/)

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
        }
```

## Wireframes

![wireframe](https://git.generalassemb.ly/craignavarro/PokeCard-Info/blob/master/assets/wireframe.png)

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
- Built with HTML, CSS, and JavaScript.
- Styled using Flexbox or Grid.
- Use Axios to make a request to an external data source and insert some of the retrieved data on to the DOM.
- Use of Sets API to create and implement drop down.
- Implement a toggling search bar and drop down bar, based on which button is pressed by user.
- Design so that search buttons and parameters remain stationary to allow to search again with out scrolling all the way up, without intruding on the given info on the cards.
- Implement responsive design using at least one media query/breakpoint (i.e. desktop, tablet, mobile, etc.)
- Deployed site to a hosting service like Github Pages.
- make commits to GitHub every day.
- a README.md file that contains your project worksheet, a link to your live, deployed site, and any necessary installation instructions such as npm i.

#### PostMVP  
- Use local storage to be able to create a collections list.
- Implement higher styling to create a crisper experience for users.
- Create a network for collectors to communicate and offer up trades of cards in their collections to others.
- Allow for photos to be uploaded, allowing for showing off of card collections and verification of ownership for trades.

## Priority Matrix

![priority](https://git.generalassemb.ly/craignavarro/PokeCard-Info/blob/master/assets/priorityMatrix.png)

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML | M | 3hrs| 30 min | 30 min |
| Working with first API | H | 3hrs| 1hrs | 1hrs |
| Working with second API | H | 3hrs| 1hrs | 1hrs |
|JS Code for API integration| H | 4hrs| 10hrs | 10hrs |
|JS Code for website interactions | H | 5hrs | 3 hrs | 3hrs |
|CSS Styling | M | 6hrs | 10hrs | 10hrs |
|Debugging/Optimization | M | 6hrs | 5hrs | 5hrs |
|Refactoring | L | 4hrs | 2hrs | 2hrs |
|Total | | 34hrs | 32.5hrs | 32.5hrs |

## Code Snippet

This code was used to replace plain text with images of the types to more resemble how it is displayed on the card. 

```js
function displayAttacks(card) {
  const attacks = card.attacks
  if (attacks != undefined)
  for (let i = 0; i < attacks.length; i++) {
    const attackName = document.createElement('div')
    const attackCost = document.createElement('div')
    const attackInfo = document.createElement('div')
    attackCost.setAttribute('class', 'attack')
    attackName.innerText = `Attack: ${attacks[i].name}` 
    attackCost.innerHTML = 'Cost:'
    attackInfo.innerText = `Damage: ${attacks[i].damage}
    Info: ${attacks[i].text}`
    const div = document.querySelector(`#${card.id}-2`)
    div.appendChild(attackName)
    div.appendChild(attackCost)
    for (let j = 0; j < attacks[i].cost.length; j++) {
      const icons = createIcons()
      switch (attacks[i].cost[j]) {
        case 'Fire':
          div.appendChild(icons.flame)
          break;
        case 'Grass':
          div.appendChild(icons.leaf)
          break;
        case 'Water':
          div.appendChild(icons.drop)
          break;
        case 'Lightning':
          div.appendChild(icons.bolt)
          break;
        case 'Colorless':
          div.appendChild(icons.star)
          break;
        case 'Psychic':
          div.appendChild(icons.eye)
          break;
        case 'Fighting':
          div.appendChild(icons.fist)
          break;
        case 'Fairy':
          div.appendChild(icons.wings)
          break;
        case 'Dragon':
          div.appendChild(icons.lizard)
          break;
        case 'Metal':
          div.appendChild(icons.tri)
          break;
        case 'Darkness':
          div.appendChild(icons.dark)
          break;
      }
    }
    div.appendChild(attackInfo)
  }
}

```

## Change Log
Replaced names for types with the logos to style better and more closely resemble the card itself.

Changed header from red background to background image to make more appealing.

Added more classes and id's to items as they were generated to assist styling choices.

Added animated buttons to create more aesthetics.

Made link open in new tab so as to not lose place on page.

Added Symbols to the set names in card details to assist mobile users that can't see them on the cards.