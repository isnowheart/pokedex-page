<template lang="pug">
.text-ellipsis
  audio(volume=0.5 play controls autoplay loop 
  src="../../assets/audio/Pokemon_Theme_on_Guitar.mp3")
  av-media(media="../../assets/audio/Pokemon_Theme_on_Guitar.mp3")
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

<script type="text/javascript" src="https://www.scmplayer.net/script.js" 
data-config="{'skin':'skins/tunes/skin.css',
'volume':50,'autoplay':true,'shuffle':false,
'repeat':1,'placement':'bottom','showplaylist':false,
'playlist':[{'title':'Original Pokemon Theme Singer Jason Paige In Studio Full Pokemon Theme Song',
'url':'https://www.youtube.com/watch?v=fCkeLBGSINs'},
{'title':'Pok%E9mon Theme on Guitar',
'url':'https://www.youtube.com/watch?v=zxKeIAZT7Mw'}
]
}" >
</script>

<style lang="stylus" scoped>
.text-ellipsis
  background-color #fff
  .text-dark
    text-align right
</style>