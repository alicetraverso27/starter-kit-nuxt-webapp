import Vue from 'vue'
import LocomotiveScroll from 'library/plugins/scroll/locomotive-scroll'
import viewportSizes from 'library/plugins/scroll/viewport-sizes'
import detectHoverTouch from 'library/plugins/gesture/detect-hover-touch.js'
import Move from 'library/plugins/gesture/move.js'

Vue.use(LocomotiveScroll)
Vue.use(viewportSizes)
Vue.use(detectHoverTouch)
Vue.use(Move)
