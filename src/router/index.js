import { createRouter, createWebHistory } from "vue-router";

import HomeView from '../views/HomeView.vue'
import VueLogin from '../components/VueLogin.vue'
import VueSignup from '../components/VueSignup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/login',
      component: VueLogin
    },
    {
      path: '/join',
      component: VueSignup
    }
  ],
});

export default router;
