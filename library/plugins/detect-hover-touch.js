const detectTouch =
  'ontouchstart' in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0

const install = (Vue) => {
  Vue.directive('detectHoverTouch', {
    bind(el, binding, vnode) {
      if (detectTouch) {
        document.documentElement.classList.add('touch-device')
      } else {
        document.documentElement.classList.add('pointer-device')
      }
    },
  })
}

export default install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}
