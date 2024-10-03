import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path:'/editoras',
    component: ()=> import('layouts/MainLayout.vue'),
    children: [{
      path:'', component:()=> import('pages/EditorasPage.vue')
    }]
  },
  {
    path:'/livros',
    component: ()=> import('layouts/MainLayout.vue'),
    children: [{
      path:'', component:()=> import('pages/LivrosPage.vue')
    }]
  },
  {
    path:'/usuarios',
    component: ()=> import('layouts/MainLayout.vue'),
    children: [{
      path:'', component:()=> import('pages/UsuarioPage.vue')
    }],
  },
  {
    path:'/alugueis',
    component: ()=> import('layouts/MainLayout.vue'),
    children: [{
      path:'', component:()=> import('pages/AluguelPage.vue')
    }]
  },
  {
      path:'/salvausuario',
      component: ()=> import('layouts/MainLayout.vue'),
      props: route => ({ query: route.query.user }),
      children: [{
        path:'', component:()=> import('pages/SalvarUsuarioPage.vue'),
        name: 'saveuser',
      }],

  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
