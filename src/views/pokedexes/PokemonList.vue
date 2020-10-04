<template lang="pug">
.container.grid-xl
  div(v-if="pokemonsList.length")
    .columns
      .column.col-4.col-md-6.col-sm-12(v-for="pokemon in pokemonsList" :key="pokemon.name")
        row(:pokemon="pokemon")
  div(v-else)
    empty-container
      router-link.btn.btn-primary(slot="action" :to="{ name: 'home' }") Tela inicial
</template>

<script>
import { mapState, mapActions } from "vuex"
import Row from './components/Row'
import EmptyContainer from '@/components/EmptyContainer'

export default {
  computed: { 
    ...mapState('pokedexes', ['pokemonsList']),
  },

  methods: { 
      ...mapActions('pokedexes', ['fetchPokemonsInPokedexList']),
  },

  async created() {
      await this.fetchPokemonsInPokedexList(this.$route.params.pokedexName)
  },

    components: { Row, EmptyContainer},        
}
</script>