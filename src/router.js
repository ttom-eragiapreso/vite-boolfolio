import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import DetailsComponent from './components/DetailsComponent.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/detail/:slug',
      name: 'detail',
      component: DetailsComponent
    },
  ]
})


export {router}