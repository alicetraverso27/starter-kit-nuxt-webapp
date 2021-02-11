import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _16fe26f2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _30605c6d = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/it/",
    component: _16fe26f2,
    pathToRegexpOptions: {"strict":true},
    name: "index___it"
  }, {
    path: "/test-en/",
    component: _30605c6d,
    pathToRegexpOptions: {"strict":true},
    name: "test___en"
  }, {
    path: "/it/test-it/",
    component: _30605c6d,
    pathToRegexpOptions: {"strict":true},
    name: "test___it"
  }, {
    path: "/",
    component: _16fe26f2,
    pathToRegexpOptions: {"strict":true},
    name: "index___en"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
