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
    alert('Pokemon Card does not exist.')
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
    console.log(poke.data.data)
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
  drop.setAttribute('id', 'setList')
  value.innerText = 'Choose Set'
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
  face.setAttribute('class', 'card')
  const div = document.querySelector(`#${card.id}`)
  div.appendChild(face)
}

function createDiv2(card) {
  const div2 = document.createElement('div')
  div2.setAttribute('id', `${card.id}-2`)
  div2.setAttribute('class', 'cardDetails')
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
    const attackName = document.createElement('div')
    const attackCost = document.createElement('div')
    const attackInfo = document.createElement('div')
    attackCost.setAttribute('class', 'attack')
    attackName.innerText = `Attack: ${attacks[i].name}` 
    attackCost.innerHTML = 'Cost:'
    attackInfo.innerText = `Damage: ${attacks[i].damage}
    Info: ${attacks[i].text}`
    console.log(attacks[i].cost)
    const div = document.querySelector(`#${card.id}-2`)
    div.appendChild(attackName)
    div.appendChild(attackCost)
    for (let j = 0; j < attacks[i].cost.length; j++) {
      const icons = createIcons()
      console.log(icons)
      // const fire = document.createElement('img')
      // const grass = document.createElement('img')
      // const water = document.createElement('img')
      // const lightning = document.createElement('img')
      // const colorless = document.createElement('img')
      // const psychic = document.createElement('img')
      // const fighting = document.createElement('img')
      // const fairy = document.createElement('img')
      // const dragon = document.createElement('img')
      // const metal = document.createElement('img')
      // const darkness = document.createElement('img')
      // fire.src = 'assets/fire.png'
      // grass.src = 'assets/grass.png'
      // water.src = 'assets/water.png'
      // lightning.src = 'assets/electric.png'
      // colorless.src = 'assets/colorless.png'
      // psychic.src = 'assets/psychic.png'
      // fighting.src = 'assets/fighting.png'
      // fairy.src = 'assets/fairy.png'
      // dragon.src = 'assets/dragon.png'
      // metal.src = 'assets/metal.png'
      // darkness.src = 'assets/dark.png'
      // div.appendChild(img)
    }
    div.appendChild(attackInfo)
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

function createIcons() {
  const fire = document.createElement('img')
  const grass = document.createElement('img')
  const water = document.createElement('img')
  const lightning = document.createElement('img')
  const colorless = document.createElement('img')
  const psychic = document.createElement('img')
  const fighting = document.createElement('img')
  const fairy = document.createElement('img')
  const dragon = document.createElement('img')
  const metal = document.createElement('img')
  const darkness = document.createElement('img')
  fire.src = 'assets/fire.png'
  grass.src = 'assets/grass.png'
  water.src = 'assets/water.png'
  lightning.src = 'assets/electric.png'
  colorless.src = 'assets/colorless.png'
  psychic.src = 'assets/psychic.png'
  fighting.src = 'assets/fighting.png'
  fairy.src = 'assets/fairy.png'
  dragon.src = 'assets/dragon.png'
  metal.src = 'assets/metal.png'
  darkness.src = 'assets/dark.png'
  return {
    flame: fire,
    leaf: grass,
    drop: water,
    bolt: lightning,
    star: colorless,
    eye: psychic,
    fist: fighting,
    wings: fairy,
    lizard: dragon,
    tri: metal,
    dark: darkness
  }
}