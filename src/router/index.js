import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Signup from '@/components/Signup'
import ProductDetail from '@/components/ProductDetail'
// import Cart from '@/components/Cart'
import Transaction from '@/components/Transaction'
import Profile from '@/components/Profile'
import Informasi from '@/components/InformasiProfile'
import Alamat from '@/components/Alamat'
import Pesanan from '@/components/Pesanan'
import RegFreelance from '@/components/RegFreelance'
import Message from '@/components/Message'
import Test from '@/components/test'
import Description from '@/components/detail/Description'
import FeedBack from '@/components/detail/FeedBack'
import ProductList from '@/components/detail/ProductList'
import Products from '@/components/Products'
import Subcategory from '@/components/ProductsSub'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          name: 'Default',
          component: Products
        },
        {
          path: 'subcategory/:id',
          name: 'subcategory',
          component: Subcategory
        }
      ]
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      props: true
    },
    {
      path: '/product',
      name: 'Products',
      component: Products
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetail,
      children: [
        {
          path: '',
          name: 'Default',
          component: Description
        },
        {
          path: '#feedback',
          name: 'feedback',
          component: FeedBack
        },
        {
          path: '#productlist',
          name: 'productlist',
          component: ProductList
        }
      ]
    },
    {
      path: '/cart',
      name: 'Transaction',
      component: Transaction
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      children: [
        {
          path: '/informasi',
          name: 'Informasi',
          component: Informasi
        },
        {
          path: '/alamat',
          name: 'Alamat',
          component: Alamat
        },
        {
          path: '/pesanan',
          name: 'Pesanan',
          component: Pesanan
        },
        {
          path: '/freelance',
          name: 'Freelance',
          component: RegFreelance
        }
      ]
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
