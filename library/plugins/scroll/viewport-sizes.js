const install = (Vue) => {
  Vue.directive('viewportSizes', {
    bind(el, binding, vnode) {
      document.body.style.setProperty(
        '--viewport-width',
        window.innerWidth + 'px'
      )
      document.body.style.setProperty(
        '--viewport-height',
        window.innerHeight + 'px'
      )
      window.addEventListener('resize', (e) => {
        document.body.style.setProperty(
          '--viewport-width',
          window.innerWidth + 'px'
        )
        document.body.style.setProperty(
          '--viewport-height',
          window.innerHeight + 'px'
        )
      })
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
