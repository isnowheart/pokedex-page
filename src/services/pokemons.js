import api from './pokeApi'

function list() {
  return api.get('/pokemon')
}

function show(pokemonName) {
  return api.get(`/pokemon/${pokemonName}`)
}

export default { 
  list,
  show,
 }