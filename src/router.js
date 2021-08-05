import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/general/HomePage.vue';
import NotFound from './pages/general/NotFound.vue';
import ShopPage from './pages/shop/ShopPage.vue';
import CartPage from './pages/shop/CartPage.vue';
import CheckoutPage from './pages/shop/CheckoutPage.vue';
import FlipBitsCampaign from './pages/campaign/FlipBitsCampaign.vue';
import AdminPage from './pages/general/AdminPage.vue';
import ForbiddenResource from './pages/general/ForbiddenResource.vue';
import SignupPage from './pages/general/SignupPage.vue';

const routes = [
  { path: '/', redirect: '/shop' },
  { path: '/home', component: HomePage },
  { path: '/shop', component: ShopPage },
  { path: '/cart', component: CartPage },
  { path: '/campaign', component: FlipBitsCampaign },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutPage
  },
  { path: '/admin', component: AdminPage },
  { path: '/restricted', component: ForbiddenResource },
  { path: '/signup', component: SignupPage },
  { path: '/:notFound(.*)', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
