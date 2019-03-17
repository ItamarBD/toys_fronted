import Vue from 'vue'
import Router from 'vue-router'
import ToyApp from './views/Toy-App.vue'
import toyDetails from './views/toy-details.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Toy-App',
      component: ToyApp
    },
    {
      path: '/toy/:toyId',
      name: 'Toy-Details',
      component: toyDetails
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
/*
import bugApp from './pages/bug-app.cmp.js';
import bugDetails from './pages/bug-details.cmp.js';
import bugEdit from './pages/bug-edit.cmp.js';
import home from './pages/home.cmp.js';
import users from './pages/users.js';
import registration from './pages/register.cmp.js';

const routes = [
    {path: '/', component: home},
    {path: '/registration', component: registration},
    {path: '/bug', component: bugApp},
    {path: '/bug/users', component: users},
    {path: '/bug/edit/:bugId?', component: bugEdit},
    {path: '/bug/:bugId', component: bugDetails},
]


export default routes;
*/