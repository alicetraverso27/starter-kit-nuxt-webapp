import alias from './configuration/alias.js'
import apollo from './configuration/apollo/'
import axios from './configuration/axios.js'
import build from './configuration/build.js'
import components from './configuration/components.js'
import css from './configuration/css.js'
import dev from './configuration/dev.js'
import dir from './configuration/dir.js'
import env from './configuration/env.js'
import generate from './configuration/generate.js'
import gtm from './configuration/google-tag-manager.js'
import head from './configuration/head/'
import i18n from './configuration/i18n.js'
import loading from './configuration/loading.js'
import modules from './configuration/modules.js'
import modulesDir from './configuration/modulesDir.js'
import pageTransition from './configuration/pageTransition.js'
import plugins from './configuration/plugins.js'
import pwa from './configuration/pwa.js'
import router from './configuration/router.js'
import runtimeConfig from './configuration/runtimeConfig.js'
import server from './configuration/server.js'
import sitemap from './configuration/sitemap.js'
import srcDir from './configuration/srcDir.js'
import styleResources from './configuration/styleResources.js'
import target from './configuration/target.js'

export default {
  ...alias,
  ...apollo,
  ...axios,
  ...build,
  ...components,
  ...css,
  ...dev,
  ...dir,
  ...env,
  ...generate,
  ...gtm,
  ...head,
  ...i18n,
  ...loading,
  ...modules,
  ...modulesDir,
  ...pageTransition,
  ...plugins,
  ...pwa,
  ...router,
  ...runtimeConfig,
  ...server,
  ...sitemap,
  ...srcDir,
  ...styleResources,
  ...target,
}
