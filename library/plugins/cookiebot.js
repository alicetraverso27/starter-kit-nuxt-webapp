const loadScript = (el, options = {}) => {
  const script = document.createElement('script')
  Object.keys(options).forEach((key) => {
    script[key] = options[key]
  })
  el.append(script)
}

const install = (Vue, options) => {
  // Load Cookiebot into the header
  loadScript(document.head, options)

  // Append policy on the selected element
  Vue.directive('cookiebot-policy', {
    inserted(el, binding, vnode) {
      loadScript(el, binding.value.options)
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
