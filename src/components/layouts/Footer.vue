<template lang="pug">
.text-ellipsis
  .autoplay(@onload="play")
  card.volume.voldn(@click="voldn") – 
  card.set-track.prev(@click="prev") <
  card.play-section.play(v-if="!isPlaying" @click="play") Play
  card.play-section.play(v-else @click="pause") Pause
  card.volume.volup(@click="volup") +
  card.set-track.next(@click="next") >
  .divider
  footer.text-dark
    a(href="https://github.com/isnowheart/pokedex-page" target="_blank") Pokedex-page
      code
      small (v{{version}})
</template>

<script>
import { version } from '../../../package'
import '../../styles/_variables.styl'

export default {
  data() {
    return {
      version,
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
                {
        title: 'Original Pokemon Theme',
        artist: 'Jason Paige',
        src: require('../../assets/audio/Original_Pokemon_Theme.mp3'),
        },
        {
        title: 'Pokemon Theme on Guitar',
        artist: 'Niall Stenson',
        src: require('../../assets/audio/Pokemon_Theme_on_Guitar.mp3'),
        },
      ],
      player: new Audio()
    }
  },
  methods: {
    play(song) {
      if (typeof song.src != "undefined") {
        this.current = song

        this.player.src = this.current.src
      }

      this.player.play()
      this.isPlaying = true
    },

    pause() {
      this.player.pause()
      this.isPlaying = false
    },

    next() {
      this.index++
      if(this.index > this.songs.length - 1) {
        this.index = 0
      }

      this.current = this.songs[this.index]
      this.play(this.current)
    },

    prev() {
      this.index--
      if(this.index < 0) {
        this.index = this.songs.length - 1
      }

      this.current = this.songs[this.index]
      this.play(this.current)
    },

    voldn(){
      if(this.player.volume > 0.1){
      this.player.volume-=0.1
      }
    },

    volup(){
      if(this.player.volume < 1) {
      this.player.volume+=0.1
      }
    },
  },
  created() {
      this.current = this.songs[this.index]
      this.player.src = (this.current.src)
  }
}
</script>

<style lang="stylus" scoped>
.text-ellipsis
  background-color #fff
  .text-dark
    text-align center

  .play-section 
    justify-content center
    align-items center
    padding 0px 20px 0px 20px
    border 1px solid rgba(0, 0, 0, .4)

  .volume, .set-track
    flex-direction row
    justify-content center
    align-items center
    padding 0px 20px 0px 20px
    border 1px solid rgba(0, 0, 0, .4)
    padding-left 0
    padding-top 20px

</style>