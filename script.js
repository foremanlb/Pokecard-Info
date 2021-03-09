const setSearchURL = 'https://api.pokemontcg.io/v2/sets'
const cardSearchURL = `https://api.pokemontcg.io/v2/cards?q=`
const code = '81ef3d57-7b3c-4e91-9eb6-81cb3adbfb06'
const form = document.querySelector('form')
const pokemon = document.querySelector('#pokemon')
const set = document.querySelector('#set')
const main = document.querySelector('main')

async function getPokemon(name) {
  try {
    const poke = await axios.get(`${cardSearchURL}name:${name}` ,
    {
      headers: {
        'X-Api-Key': `${code}`
      }
      })
    generateCards(poke.data.data)
  } catch (error) {
    console.log(error.message)
  }
}

async function getPokemonBySet(name) {
  try {
    const poke = await axios.get(`${cardSearchURL}set.id:${name}` ,
    {
      headers: {
        'X-Api-Key': `${code}`
      }
      })
    generateCards(poke.data.data)
  } catch (error) {
    console.log(error.message)
  }
}

async function getSet() {
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

form.addEventListener('submit', submitSearch)

function removeInput() {
  const formList = form.childNodes
  while (formList.length > 4) {
    form.removeChild(form.lastChild)
  }
}

function dropDownGenerate() {
  removeInput()
  createDropDown()
}

function createDropDown() {
  const drop = document.createElement('select')
  const value = document.createElement('option')
  drop.setAttribute('id', 'search')
  value.innerText = 'Please Choose Set'
  form.appendChild(drop)
  drop.appendChild(value)
  getSet()
  drop.addEventListener('change', findSet)
}

function populateDropDown(sets) {
  const down = document.querySelector('select')
  sets.forEach((set) => {
    const opt = document.createElement('option')
    opt.innerText = `${set.name}`
    opt.setAttribute('value', set.id)
    down.appendChild(opt)
  })
}

function searchGenerate() {
  removeInput()
  createSearch()
  createSubmit()
}

function createSearch() {
  const search = document.createElement('input')
  search.setAttribute('type', 'search')
  search.setAttribute('placeholder', 'Pokemon')
  search.setAttribute('id', 'search')
  form.appendChild(search)
}

function createSubmit() {
  const submit = document.createElement('input')
  submit.setAttribute('type', 'submit')
  submit.setAttribute('id', 'submit')
  form.appendChild(submit)
}

function submitSearch(event) {
  event.preventDefault()
  removeOldSearch()
  const search = document.querySelector('#search')
  getPokemon(search.value)
  search.value = ''
}

function findSet(event) {
  removeOldSearch()
  const chosenSet = event.target.value
  getPokemonBySet(chosenSet)
}

function removeOldSearch() {
  while (main.firstChild) {
    main.removeChild(main.firstChild)
  }
}

function generateCards(list) {
  list.forEach((card) => {
    createDiv(card)
    displayCard(card)
    createDiv2(card)
    displayName(card)
    displaySet(card)
    displayFlavor(card)
    displayRules(card)
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

function createDiv2(card) {
  const div2 = document.createElement('div')
  div2.setAttribute('id', `${card.id}-2`)
  main.appendChild(div2)
}


function displayName(card) {
  const name = document.createElement('h3')
  name.innerText = `Name: ${card.name}`
  const div = document.querySelector(`#${card.id}-2`)
  div.appendChild(name)
}

function displaySet(card) {
  const set = document.createElement('p')
  set.innerText = `Set: ${card.set.name}`
  const div = document.querySelector(`#${card.id}-2`)
  div.appendChild(set)
}

function displayFlavor(card) {
  if (card.flavorText != undefined) {
  const flavor = document.createElement('p')
  flavor.innerText = `${card.flavorText}`
  const div = document.querySelector(`#${card.id}-2`)
  div.appendChild(flavor)
  }
}

function displayRules(card) {
  if (card.rules != undefined) {
  const rules = document.createElement('p')
  rules.innerText = `${card.rules}`
  const div = document.querySelector(`#${card.id}-2`)
  div.appendChild(rules)
  }
}

function displayAbilities(card) {
  const abilities = card.abilities
  if (abilities != undefined) {
    for (let i = 0; i < abilities.length; i++) {
      const ability = document.createElement('p')
      ability.innerText = `Ability: ${card.abilities[i].name}: ${card.abilities[i].text}`
      const div = document.querySelector(`#${card.id}-2`)
      div.appendChild(ability)
    }
  }
}

function displayAttacks(card) {
  const attacks = card.attacks
  if (attacks != undefined)
  for (let i = 0; i < attacks.length; i++) {
    const attack = document.createElement('p')
    attack.innerText = `Attack: ${attacks[i].name} 
    Cost: ${attacks[i].cost} 
    Damage: ${attacks[i].damage}
    Info: ${attacks[i].text}`
    const div = document.querySelector(`#${card.id}-2`)
    div.appendChild(attack)
  }
}

function displayWeakness(card) {
  const weak = card.weaknesses
  if (weak != undefined) {
    for (let i = 0; i < weak.length; i++) {
      const weakness = document.createElement('p')
      weakness.innerText = `Weakness: ${weak[i].type} ${weak[i].value}`
      const div = document.querySelector(`#${card.id}-2`)
      div.appendChild(weakness)
    }
  } else {
    const weakness = document.createElement('p')
    weakness.innerText = `Weakness: None`
    const div = document.querySelector(`#${card.id}-2`)
    div.appendChild(weakness)
  }
}

function displayResistance(card) {
  const resist = card.resistances
  if (resist != undefined) {
    for (let i = 0; i < resist.length; i++) {
      const strong = document.createElement('p')
      strong.innerText = `Resistance: ${resist[i].type} ${resist[i].value}`
      const div = document.querySelector(`#${card.id}-2`)
      div.appendChild(strong)
    }
  } else {
    const strong = document.createElement('p')
    strong.innerText = `Resistance: None`
    const div = document.querySelector(`#${card.id}-2`)
    div.appendChild(strong)
  }
}

function displayRetreat(card) {
  const retreat = card.retreatCost
  if (retreat != undefined) {
      const run = document.createElement('p')
      run.innerText = `Retreat Cost: ${retreat}`
      const div = document.querySelector(`#${card.id}-2`)
      div.appendChild(run)
  } else {
    const run = document.createElement('p')
    run.innerText = `Retreat Cost: None`
    const div = document.querySelector(`#${card.id}-2`)
    div.appendChild(run)
  }
}

function displayRarity(card) {
  const rarity = document.createElement('p')
  rarity.innerText = `Rarity: ${card.rarity}`
  const div = document.querySelector(`#${card.id}-2`)
  div.appendChild(rarity)
}

function displayNumber(card) {
  const num = document.createElement('p')
  num.innerText = `Number: ${card.number} out of ${card.set.printedTotal} listed/${card.set.total} actual`
  const div = document.querySelector(`#${card.id}-2`)
  div.appendChild(num)
}

function displayLink(card) {
  if (card.tcgplayer != undefined) {
    const link = document.createElement('p')
    const hyperlink = document.createElement('a')
    hyperlink.innerText = `Purchasing Site`
    hyperlink.setAttribute('href', `${card.tcgplayer.url}`)
    const div = document.querySelector(`#${card.id}-2`)
    div.appendChild(link)
    link.appendChild(hyperlink)
  }
}