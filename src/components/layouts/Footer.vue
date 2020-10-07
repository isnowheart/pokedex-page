<template lang="pug">
.text-ellipsis
  audio(volume=0.5 controls autoplay loop hidden 
  src="../../assets/audio/Pokemon_Theme_on_Guitar.mp3")
  .divider
  footer.text-dark
    a(href="https://github.com/isnowheart/pokedex-page" target="_blank") Pokedex-page
      code
      small (v{{version}})
</template>

<script>
import { version } from '../../../package'
import AudioVisual from 'vue-audio-visual'


export default {
  data() {
    return {
      version,
    }
  }
}
</script>

<style lang="stylus" scoped>
.text-ellipsis
  background-color #fff
  .text-dark
    text-align right
</style>