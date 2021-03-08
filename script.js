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
    // const div = document.createElement('div')
    // main.appendChild(div)
    // const face = document.createElement('img')
    // face.src = `${card.images.large}`
    // div.appendChild(face)
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
  face.setAttribute('class', 'cardFace')
  const div = document.querySelector(`#${card.id}`)
  div.appendChild(face)
}

getPokemon()