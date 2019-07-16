import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

import Preloader from './components/Preloader'
Vue.component('m-preloader', Preloader);

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
