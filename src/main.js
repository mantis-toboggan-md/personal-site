import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Scrollspy from 'vue2-scrollspy';
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'


Vue.use(Scrollspy);
Vue.use(SequentialEntrance);
Vue.use(Vuetify);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
