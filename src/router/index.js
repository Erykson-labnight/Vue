import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';  // Usa el nuevo nombre del componente

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage  
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
