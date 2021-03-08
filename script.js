const cardSearchURL = `https://api.pokemontcg.io/v2/cards?q=name:charizard`
const name = 'charizard'
const code = '81ef3d57-7b3c-4e91-9eb6-81cb3adbfb06'


async function getPokemon() {
  try {
    const pokemon = await axios.get(`https://api.pokemontcg.io/v2/cards?q=name:charizard`,
      {
      'X-Api-Key': `81ef3d57-7b3c-4e91-9eb6-81cb3adbfb06`
    })
    console.log(pokemon.data)
  } catch (error) {
    console.log(error.message)
  }
}

getPokemon()