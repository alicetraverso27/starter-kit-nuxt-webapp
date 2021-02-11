export { default as MyComponent } from '../../components/MyComponent.vue'

export const LazyMyComponent = import('../../components/MyComponent.vue' /* webpackChunkName: "components/my-component" */).then(c => c.default || c)
