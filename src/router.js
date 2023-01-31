import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import DetailsComponent from './components/DetailsComponent.vue';
import ContactComponent from './components/ContactComponent.vue';

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
    {
      path: '/contact',
      name: 'contact',
      component: ContactComponent
    },
  ]
})


export {router}