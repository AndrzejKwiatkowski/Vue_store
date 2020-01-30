import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Articeles from '../components/Articeles.vue'
import AddToBasket from '../components/AddToBasket.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/articeles',
    name: 'Articeles',
    component: Articeles
  },
  {
    path: '/basket',
    name: 'AddToBasket',
    component: AddToBasket
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
