import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios);

Vue.use(Vuex);

import {basket} from '../store/modules/basket.js' 


export default new Vuex.Store({
  modules: {
    basket,
  }

});
