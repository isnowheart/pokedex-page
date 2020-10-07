<template lang="pug">
.text-ellipsis
  .card-music(@onload="play" isPlaying=true)
    img.img-volume(@click="voldn" src="../../assets/image/voldn.png")
    img.img-trackctl(@click="prev" src="../../assets/image/prev.png")
  .card-music(@onload="play" isPlaying=true)    
    img.img-play(v-if="!isPlaying" @click="play" src="../../assets/image/play.png")
    img.img-play(v-else @click="pause" src="../../assets/image/pause.png")
  .card-music(@onload="play" isPlaying=true)    
    img.img-volume(@click="volup" src="../../assets/image/volup.png")
    img.img-trackctl(@click="next" src="../../assets/image/next.png")
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
      this.player.volume = .50
      this.player.load = true
      this.player.autoplay = true
      this.player.loop = true
  }
}
</script>

<style lang="stylus" scoped>
.text-ellipsis
  background-color #fff
  .text-dark
    text-align center

  .card-music
    display flex
    text-align center
    justify-content left
    align-items center

    .img-play
      width 10.5%
      height 100%
      border-radius: 9%;
      box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.4) 

    .img-volume
      width 5%
      height 5%
      margin-left 2px
      margin-right 2px
      border-radius 15%;
      box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.4)



    .img-trackctl
      width 5%
      height 5%
      margin-left 2px
      margin-right 2px
      border-radius 15%;
      box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.4)
</style>