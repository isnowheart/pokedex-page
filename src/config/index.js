import Vue from 'vue'
import router from '../router'
import store from '../store'

import filters from './filters'
Vue.use(filters)

import AudioVisual from 'vue-audio-visual'
Vue.use(AudioVisual)

import Toaster from 'v-toaster'
Vue.use(Toaster, { timeout: 5000 })

import VueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(VueSmoothScroll, {
  duration: 1000,
  updateHistory: false,
})

export default { router, store }