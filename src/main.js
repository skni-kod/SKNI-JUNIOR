import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import baner from './components/Baner.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.component('baner', baner)
Vue.component('Navbar', Navbar)
Vue.component('Footer', Footer)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
