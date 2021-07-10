import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import NotFound from './pages/NotFound.vue';
import SignUp from './pages/SignUp.vue';
import Login from './pages/Login.vue';
import Dashboard from './pages/Dashboard.vue';
import Shop from './pages/Shop.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage },
  { path: '/signup', component: SignUp },
  { path: '/login', component: Login },
  { path: '/progress', component: Dashboard },
  { path: '/shop', component: Shop },
  { path: '/:notFound(.*)', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
