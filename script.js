const setSearchURL = 'https://api.pokemontcg.io/v2/sets'
const pokemonName = 'charizard'
const cardSearchURL = `https://api.pokemontcg.io/v2/cards?q=name:`
const code = '81ef3d57-7b3c-4e91-9eb6-81cb3adbfb06'
const nav = document.querySelector('nav')
const pokemon = document.querySelector('#pokemon')
const set = document.querySelector('#set')
const main = document.querySelector('main')

async function getPokemon() {
  try {
    const pokemon = await axios.get(`${cardSearchURL}${pokemonName}` ,
    {
      headers: {
        'X-Api-Key': `${code}`
      }
      })
    console.log(pokemon.data.data)
    generateCards(pokemon.data.data)
  } catch (error) {
  }
}

async function getSet() {
  // const setList = []
  try {
    const sets = await axios.get(`${setSearchURL}` ,
      {
        headers: {
          'X-Api-Key': `${code}`
        }
    })
    populateDropDown(sets.data.data)
  } catch (error) {
    console.log(error.message)
  }
}

pokemon.addEventListener('click', searchGenerate)

set.addEventListener('click', dropDownGenerate)

function removeInput() {
  const navList = nav.childNodes
  while (navList.length > 4) {
    nav.removeChild(nav.lastChild)
  }
}

function dropDownGenerate() {
  removeInput()
  createDropDown()
}

function createDropDown() {
  const drop = document.createElement('select')
  const value = document.createElement('option')
  value.innerText = 'Please Choose Set'
  nav.appendChild(drop)
  drop.appendChild(value)
  getSet()
}

function populateDropDown(sets) {
  const down = document.querySelector('select')
  sets.forEach((set) => {
    const opt = document.createElement('option')
    opt.innerText = `${set.name}`
    down.appendChild(opt)
  })
}

function searchGenerate() {
  removeInput()
  createSearch()
}

function createSearch() {
  const search = document.createElement('input')
  search.setAttribute('type', 'search')
  search.setAttribute('placeholder', 'Pokemon')
  nav.appendChild(search)
}

function generateCards(list) {
  list.forEach((card) => {
    createDiv(card)
    displayCard(card)
    displayName(card)
    displaySet(card)
    displayFlavor(card)
    displayAbilities(card)
    displayAttacks(card)
    displayWeakness(card)
    displayResistance(card)
    displayRetreat(card)
    displayRarity(card)
    displayNumber(card)
    displayLink(card)
  })
}

function createDiv(card) {
  const div = document.createElement('div')
  div.setAttribute('id', `${card.id}`)
  main.appendChild(div)
}

function displayCard(card) {
  const face = document.createElement('img')
  face.src = `${card.images.large}`
  const div = document.querySelector(`#${card.id}`)
  div.appendChild(face)
}

function displayName(card) {
  const name = document.createElement('h3')
  name.innerText = `Name: ${card.name}`
  const div = document.querySelector(`#${card.id}`)
  div.appendChild(name)
}

function displaySet(card) {
  const set = document.createElement('p')
  set.innerText = `Set: ${card.set.name}`
  const div = document.querySelector(`#${card.id}`)
  div.appendChild(set)
}

function displayFlavor(card) {
  if (card.flavorText != undefined) {
  const flavor = document.createElement('p')
  flavor.innerText = `${card.flavorText}`
  const div = document.querySelector(`#${card.id}`)
  div.appendChild(flavor)
  }
}

function displayAbilities(card) {
  if (card.abilities != undefined) {
    const ability = document.createElement('p')
    ability.innerText = `Ability: ${card.abilities[0].name}: ${card.abilities[0].text}`
    const div = document.querySelector(`#${card.id}`)
    div.appendChild(ability)
  }
}

function displayAttacks(card) {
  const attacks = card.attacks
  for (let i = 0; i < attacks.length; i++) {
    const attack = document.createElement('p')
    attack.innerText = `Attack: ${attacks[i].name} 
    Cost: ${attacks[i].cost} 
    Damage: ${attacks[i].damage}
    Info: ${attacks[i].text}`
    const div = document.querySelector(`#${card.id}`)
    div.appendChild(attack)
  }
}

function displayWeakness(card) {
  const weak = card.weaknesses
  if (weak != undefined) {
    for (let i = 0; i < weak.length; i++) {
      const weakness = document.createElement('p')
      weakness.innerText = `Weakness: ${weak[i].type} ${weak[i].value}`
      const div = document.querySelector(`#${card.id}`)
      div.appendChild(weakness)
    }
  } else {
    const weakness = document.createElement('p')
    weakness.innerText = `Weakness: None`
    const div = document.querySelector(`#${card.id}`)
    div.appendChild(weakness)
  }
}

function displayResistance(card) {
  const resist = card.resistances
  if (resist != undefined) {
    for (let i = 0; i < resist.length; i++) {
      const strong = document.createElement('p')
      strong.innerText = `Resistance: ${resist[i].type} ${resist[i].value}`
      const div = document.querySelector(`#${card.id}`)
      div.appendChild(strong)
    }
  } else {
    const strong = document.createElement('p')
    strong.innerText = `Resistance: None`
    const div = document.querySelector(`#${card.id}`)
    div.appendChild(strong)
  }
}

function displayRetreat(card) {
  const retreat = card.retreatCost
  if (retreat != undefined) {
      const run = document.createElement('p')
      run.innerText = `Retreat Cost: ${retreat}`
      const div = document.querySelector(`#${card.id}`)
      div.appendChild(run)
  } else {
    const run = document.createElement('p')
    run.innerText = `Retreat Cost: None`
    const div = document.querySelector(`#${card.id}`)
    div.appendChild(run)
  }
}

function displayRarity(card) {
  const rarity = document.createElement('p')
  rarity.innerText = `Rarity: ${card.rarity}`
  const div = document.querySelector(`#${card.id}`)
  div.appendChild(rarity)
}

function displayNumber(card) {
  const num = document.createElement('p')
  num.innerText = `Number: ${card.number} out of ${card.set.printedTotal} listed/${card.set.total} actual`
  const div = document.querySelector(`#${card.id}`)
  div.appendChild(num)
}

function displayLink(card) {
  const link = document.createElement('p')
  const hyperlink = document.createElement('a')
  hyperlink.innerText = `Purchasing Site`
  hyperlink.setAttribute('href', `${card.tcgplayer.url}`)
  const div = document.querySelector(`#${card.id}`)
  div.appendChild(link)
  link.appendChild(hyperlink)
}

getPokemon()