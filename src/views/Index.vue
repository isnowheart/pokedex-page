<template lang="pug">
.container.grid-xl
  .header.my-3
    h1.text-center Bem-vindo à Pokedex-page!
    h5.text-center Explore o aplicativo escolhendo um dos menus abaixo.
  .columns
    .column.col-4.col-md-6.col-sm-12(v-for="item in indexItems" :key="item.title")
      menu-row(:item="item")
  br
  br
</template>

<script>
import MenuRow from './components/MenuRow'
import indexItems from '@/config/IndexItems'

export default {
  data() {
    return {
      indexItems
    }
  },

  components: { MenuRow },
}
</script>

<style lang="stylus" scoped>
.my-3
  margin 30px 0
</style>