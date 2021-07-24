import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/general/HomePage.vue';
import NotFound from './pages/general/NotFound.vue';
import ShopPage from './pages/shop/ShopPage.vue';
import CartPage from './pages/shop/CartPage.vue';
import CheckoutPage from './pages/shop/CheckoutPage.vue';
import FlipBitsCampaign from './pages/campaign/FlipBitsCampaign.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage },
  { path: '/shop', component: ShopPage },
  { path: '/cart', component: CartPage },
  { path: '/campaign', component: FlipBitsCampaign },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutPage
  },
  { path: '/:notFound(.*)', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
