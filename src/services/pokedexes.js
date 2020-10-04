import api from './pokeApi'

function list(){
    return api.get('/pokedex')
}


function listPokemonsInPokedexes(pokedexName, regionName) {
    console.log('oi')
    return api.get(`/pokedex/${regionName}/${pokedexName}`)
}

export default { 
    list,
    listPokemonsInPokedexes,
 }