import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
window.axios = require('axios');
Vue.use(VueAxios, axios)

Vue.use(Chartkick.use(Chart))

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
