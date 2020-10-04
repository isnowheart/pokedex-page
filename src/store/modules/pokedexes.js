import pokedexesServices from '@/services/pokedexes'
import { deepClone } from 'paliari-js-utils'

const state = { pokedexesList: {}, filteredPokedexesList: {}, pokemonsList: [] }

const actions = { 
    async fetchPokedexesList({ commit }){
        const { data } = await pokedexesServices.list()

        commit('setPokedexesList', data)
    },

    async fetchPokemonsInPokedexList({ commit }, pokedexName) {
        const { data } = await pokedexesServices.listPokemonsInPokedexes(pokedexName)
        commit('setPokemonsList', data.pokemons)
    },
}

const mutations = {
    setPokedexesList(state, payload) {
        state.pokedexesList = payload
        state.filteredPokedexesList = deepClone(state.pokedexesList)
    },

    filterPokedexesList(state, payload) {
        if (payload) {
          const regExp = new RegExp(payload.toLowerCase(), 'g')
          const originalList = deepClone(state.pokedexesList)
          state.filteredPokedexesList.pokemon_entries.entry_number = originalList.pokemon_entries.entry_number.filter(pokedex => !regExp[Symbol.search](pokedex.name.toLowerCase()))
          return
        }
    
        state.filteredPokedexesList.pokemon_entries.entry_number = state.pokedexesList.pokemon_entries.entry_number
      },

    setPokemonsList(state, payload) {
        state.pokemonsList = payload
    },
}

export default { namespaced: true, state, actions, mutations }