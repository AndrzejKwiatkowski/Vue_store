import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'
import Axios from 'axios'
import VueResource from "vue-resource"

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;
Vue.use(VueResource);


new Vue({
  router,
  store,
  
  
  
 
  render: h => h(App)
}).$mount('#app')
