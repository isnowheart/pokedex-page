<template lang="pug">
.container.grid-xl(ref="header")
  div(v-if="!loading")
    .filter-field
    .columns
      .column.col-3.col-lg-6.col-sm-12(
        v-for="pokemon in pokemonsList",
        :key="pokemon.entry_number"
      )
        row(:pokemon="pokemon")
  .loading.loading-lg(v-else)
</template>

<script>
import { mapState, mapActions } from "vuex"
import Row from "./components/Row"
import FilterField from "@/components/FilterField"
import EmptyContainer from "@/components/EmptyContainer"

export default {
  data() {
    return {
      loading: false,
    }
  },

  components: {
    Row,
    FilterField,
    EmptyContainer,
  },

  computed: {
    ...mapState('pokemons', [
      'pokemonsList',
    ]),
  },

  async created() {
    this.fetchData()
  },
}
</script>

<style lang="stylus" scoped>
.filter-field
  display flex
  justify-content space-between

  form
    width 15rem

@media(max-width: 485px)
  .filter-field
    flex-direction column
    align-items center
</style>
