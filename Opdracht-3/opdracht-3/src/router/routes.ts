import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'page', component: () => import('pages/NewPage.vue') },
    ],
  },

  {
    path: '/tweede',
    component: () => import('layouts/TweedeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AnotherPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
