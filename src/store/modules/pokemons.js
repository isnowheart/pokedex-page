import pokedexesServices from '@/services/pokedexes'
import pokemonsServices from '@/services/pokemons'
import { deepClone } from 'paliari-js-utils'

const state = { pokemonsList: [], filteredPokemonsList: [] }

const actions = {
  async fetchPokemonsList({ commit }) {
    const { data } = await pokemonsServices.list()
    commit('setPokemonsList', data.results)
  },

  async fetchPokemonsListInPokedex({ commit }, pokedexName) {
    const { data } = await pokedexesServices.listInPokedex(pokedexName)

    commit('setPokemonsList', data.pokemon_entries)
  },
}

const mutations = {
  setPokemonsList(state, payload) {
    state.pokemonsList = payload
    state.filteredPokemonsList = deepClone(state.pokemonsList)
  },

  filterPokemonsList(state, payload) {
    const originalList = deepClone(state.pokemonsList)
    if (payload) {
      const regExp = new RegExp(payload.toLowerCase(), 'g')
      state.filteredPokemonsList = originalList.filter(pokemon => !regExp[Symbol.search](pokemon.pokemon_species.name.toLowerCase()))
      return
    }

    state.filteredPokemonsList = originalList
  },
}

export default { namespaced: true, state, actions, mutations }