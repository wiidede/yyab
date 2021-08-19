import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
  {path: '/', name: 'Home',  component: () => import('/@/views/Home.vue')},
  {path: '/settings', name: 'Settings', component: () => import('/@/views/Settings/index.vue')},
  {path: '/lexicon', name: 'Lexicon', component: () => import('/@/views/Lexicon.vue')},
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
