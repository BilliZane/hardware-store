import Vue from 'vue'
import VueTippy, { TippyComponent } from 'vue-tippy'

// Vue.use(VueTippy)
// or
Vue.use(VueTippy, {
  directive: 'tippy',
  flipDuration: 2,
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: true,
      }
    }
  }
})
