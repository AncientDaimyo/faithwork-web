import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../views/Shared/controllers/MainPage.vue'
import AboutUs from '../views/Content/controllers/AboutUs.vue'
import ContactUs from '../views/Content/controllers/ContactUs.vue'
import Delivery from '../views/Content/controllers/Delivery.vue'
import GoodsExchangeAndReturn from '../views/Content/controllers/GoodsExchangeAndReturn.vue'
import ProductCare from '../views/Content/controllers/ProductCare.vue'
import SizeGuide from '../views/Content/controllers/SizeGuide.vue'
import SingleProductPage from '../views/Product/controllers/SingleProductPage.vue'
import ShopPage from '../views/Product/controllers/ShopPage.vue'
// import Account from '../views/User/controllers/Account.vue'
import Cart from '../views/Checkout/controllers/Cart.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/info/about_us',
    name: 'aboutUs',
    component: AboutUs
  },
  {
    path: '/info/contact_us',
    name: 'contactUs',
    component: ContactUs
  },
  {
    path: '/info/delivery',
    name: 'delivery',
    component: Delivery
  },
  {
    path: '/info/goods_exchange_and_return',
    name: 'goodsExchangeAndReturn',
    component: GoodsExchangeAndReturn
  },
  {
    path: '/info/product_care',
    name: 'productCare',
    component: ProductCare
  },
  {
    path: '/info/size_guide',
    name: 'sizeGuide',
    component: SizeGuide
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopPage
  },
  {
    path: '/shop/:id',
    name: 'singleProduct',
    component: SingleProductPage
  },
  // {
  //   path: '/account',
  //   name: 'account',
  //   component: Account
  // },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
