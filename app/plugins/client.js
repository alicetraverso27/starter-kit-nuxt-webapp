import Vue from 'vue'
import locomotiveScroll from 'library/plugins/locomotive-scroll'
import viewportSizes from 'library/plugins/viewport-sizes'
import detectHoverTouch from 'library/plugins/detect-hover-touch'
import pointerMove from 'library/plugins/pointer-move'

Vue.use(locomotiveScroll)
Vue.use(viewportSizes)
Vue.use(detectHoverTouch)
Vue.use(pointerMove)