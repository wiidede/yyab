import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
  {path: '/', name: 'Home',  component: () => import('/@/views/Home.vue')},
  {path: '/lexicon', name: 'Lexicon', component: () => import('/@/views/Lexicon.vue')},
  {path: '/settings', name: 'Settings', component: () => import('/@/views/Settings/index.vue')},
  {path: '/settings/about', name: 'About', component: () => import('/@/views/Settings/About.vue')},
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
