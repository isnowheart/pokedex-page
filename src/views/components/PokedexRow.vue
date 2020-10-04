<template lang="pug">
router-link.card.card-text-color(:to="{ name: 'pokedexes.pokemonsList', params: { pokedexName: pokedex.name }}")
  .card-header {{pokedex.name | capitalize}}
</template>

<script>
export default {
  props: {
    pokedex: {
      type: Object,
      default: null,
    }
  }    
}
</script>

<style lang="stylus" scoped>
.card
  margin-top 10px
  margin-bottom 10px
</style>