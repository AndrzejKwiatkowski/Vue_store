import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import {basket} from '../store/modules/basket.js' 


export default new Vuex.Store({
  modules: {
    basket,
  }

});
