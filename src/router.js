import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import NotFound from './pages/NotFound.vue';
import SignUp from './pages/SignUp.vue';
import LoginPage from './pages/LoginPage.vue';
import ShopPage from './pages/ShopPage.vue';
import CartPage from './pages/CartPage.vue';
import CheckoutPage from './pages/CheckoutPage.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage },
  { path: '/signup', component: SignUp },
  { path: '/login', component: LoginPage },
  { path: '/shop', component: ShopPage },
  { path: '/cart', component: CartPage },
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
