<template lang="pug">
#app
  header-component
  router-view
  music-controller-component
  .footer
    footer-component
</template>

<script>
import HeaderComponent from '@/components/layouts/header/Header'
import FooterComponent from '@/components/layouts/Footer'
import MusicControllerComponent from '@/components/layouts/MusicController';

export default {
  components: { HeaderComponent, FooterComponent, MusicControllerComponent }
}
</script>

<style lang="stylus" scoped>
#app
  background-image url('./assets/image/grey-pokeball.png')
  background-repeat no-repeat
  background-position center
  background-attachment fixed
  background-size auto
  min-height 100vh
  padding-bottom 41px
  position relative
  .footer
    position fixed
    bottom 0
    width 100%
</style>