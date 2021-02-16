const move = (e) => {
  const x = e.touches ? e.touches[0].clientX : e.clientX
  const y = e.touches ? e.touches[0].clientY : e.clientY
  return { x, y }
}

const onMove = (e, context) => {
  if (typeof context.$store._mutations['app/setMove'] !== 'undefined') {
    context.$store.commit('app/setMove', move(e))
  }
}

const install = (Vue) => {
  Vue.directive('move', {
    bind(el, binding, vnode) {
      if ('ontouchstart' in window) {
        el.addEventListener('touchmove', (e) => onMove(e, vnode.context))
      } else {
        el.addEventListener('mousemove', (e) => onMove(e, vnode.context))
      }
    },
    unbind(el, binding, vnode) {
      if ('ontouchstart' in window) {
        el.addEventListener('touchmove', (e) => onMove(e, vnode.context), {
          capture: false,
        })
      } else {
        el.addEventListener('mousemove', (e) => onMove(e, vnode.context), {
          capture: false,
        })
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
