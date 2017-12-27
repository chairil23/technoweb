import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Signup from '@/components/Signup'
import Products from '@/components/Products'
import ProductDetail from '@/components/ProductDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/product',
      name: 'Products',
      component: Products
    },
    {
      path: '/productdetail',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
