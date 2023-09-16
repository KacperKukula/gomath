import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/homeView.vue';
import mainOfSubject from '../views/mainOfSubject.vue';
import testVue from '../views/numericMethods/testVue';
//Routes
import numericMethods_routes from './child_routes/numericMethodsRoutes.js';


// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
//component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: homeView,
    mainSite: true,
  },
  {
    path: '/numericMethods',
    name: 'Metody numeryczne',
    component: mainOfSubject,
    mainSite: false,
    children: numericMethods_routes,
    props: { subjectRoutes: numericMethods_routes },
  },
  {
    path: '/propabilistics',
    name: 'Propabilistyka',
    component: mainOfSubject,
    props: true,
    mainSite: false,
    children: [
      { 
        path: 'misscalculation', 
        component: testVue,
        name: "Test"
      }]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
