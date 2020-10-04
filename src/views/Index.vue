<template lang="pug">
.container.grid-lg
  filter-field(@search="filterList")
  .columns
    .column.col-4.col-md-6.col-sm-12(v-for="region in filteredRegionsList.results" :key="region.name")
      region-row(:region="region")
</template>

<script>
import { mapState, mapActions } from "vuex"
import RegionRow from './components/RegionRow'
import PokedexRow from './components/PokedexRow'
import FilterField from '@/components/FilterField'

export default {
  computed: { 
    ...mapState('regions', ['filteredRegionsList']),
    ...mapState('pokedexes', ['filteredPokedexesList']),
  },

    methods: { 
        ...mapActions('regions', ['fetchRegionsList', 'filterRegionsList']),
        ...mapActions('pokedexes', ['fetchPokedexesList', 'filterPokedexesList']),

      filterList(textToFilter) {
        this.filterRegionsList(textToFilter)
        this.filterPokedexesList(textToFilter)

          },
        },

    async created() {
        await this.fetchRegionsList()
        await this.fetchPokedexesList()

    },

    components: { RegionRow, PokedexRow, FilterField},        
}
</script>
