const setSearchURL = 'https://api.pokemontcg.io/v2/sets'
const pokemonName = 'charizard'
const cardSearchURL = `https://api.pokemontcg.io/v2/cards?q=name:`
const code = '81ef3d57-7b3c-4e91-9eb6-81cb3adbfb06'
const nav = document.querySelector('nav')
const pokemon = document.querySelector('#pokemon')
const set = document.querySelector('#set')

async function getPokemon() {
  try {
    const pokemon = await axios.get(`${cardSearchURL}${pokemonName}` ,
      {
        headers: {
          'X-Api-Key': `${code}`
        }
    })
    console.log(pokemon.data)
  } catch (error) {
    console.log(error.message)
  }
}

async function getSet() {
  try {
    const sets = await axios.get(`${setSearchURL}` ,
      {
      'X-Api-Key': `${code}`
    })
    console.log(sets.data.data)
  } catch (error) {
    console.log(error.message)
  }
}

function searchGenerate() {
  removeInput()
  createSearch()
}

function removeInput() {
  const navList = nav.childNodes
  console.log(navList)
  while (navList.length > 4) {
    nav.removeChild(nav.lastChild)
  }
  console.log(navList)
}

pokemon.addEventListener('click', searchGenerate)

function createSearch() {
  const search = document.createElement('input')
  search.setAttribute('type', 'search')
  search.setAttribute('placeholder', 'Pokemon')
  nav.appendChild(search)
}