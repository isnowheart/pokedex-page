<template lang="pug">
.container.grid-xl
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      loading: false,
    }
  },

  computed: {
    ...mapState('pokemons', ['currentPokemon']),
  },

  methods: {
    ...mapActions('pokemons', ['fetchPokemon']),
  },
}
</script>