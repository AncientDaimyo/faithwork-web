import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Shared/controllers/MainPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/info/about_us',
    name: 'aboutUs',
    component: () => import('../views/Content/controllers/AboutUs.vue')
  },
  {
    path: '/info/contact_us',
    name: 'contactUs',
    component: () => import('../views/Content/controllers/ContactUs.vue')
  },
  {
    path: '/info/delivery',
    name: 'delivery',
    component: () => import('../views/Content/controllers/Delivery.vue')
  },
  {
    path: '/info/goods_exchange_and_return',
    name: 'goodsExchangeAndReturn',
    component: () => import('../views/Content/controllers/GoodsExchangeAndReturn.vue')
  },
  {
    path: '/info/product_care',
    name: 'productCare',
    component: () => import('../views/Content/controllers/ProductCare.vue')
  },
  {
    path: '/info/size_guide',
    name: 'sizeGuide',
    component: () => import('../views/Content/controllers/SizeGuide.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/Product/controllers/ShopPage.vue')
  },
  {
    path: '/shop/:id',
    name: 'singleProduct',
    component: () => import('../views/Product/controllers/SingleProductPage.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/User/controllers/Account.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Checkout/controllers/Cart.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
