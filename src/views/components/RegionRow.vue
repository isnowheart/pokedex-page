<template lang="pug">
router-link.card.card-text-color(:to="{ name: 'regions.pokemonsList', params: { regionName: region.name }}")
  .card-header {{region.name | capitalize}}
</template>

<script>
export default {
  props: {
    region: {
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