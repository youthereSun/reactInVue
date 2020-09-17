import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VuePlugin } from 'vuera'


import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

Vue.use(VuePlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
