import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './registerServiceWorker'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import VueMindmap from 'vue-mindmap'
import 'vue-mindmap/dist/vue-mindmap.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueMindmap)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
