import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/homeView.vue';
import mainOfSubject from '../views/mainOfSubject.vue';
import lessonMiscalculation from '../views/numericMethods/lessonMiscalculation';
//Routes
import numericMethods_routes from './numericMethods/numericMethodsRoutes.js';


// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
//component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
const routes = [
  {
    path: '/',
    pathName: 'Home',
    component: homeView,
    mainSite: true,
  },
  {
    path: '/numericMethods',
    pathName: 'Metody numeryczne',
    component: mainOfSubject,
    mainSite: false,
    children: numericMethods_routes,
    props: { subjectRoutes: numericMethods_routes },
  },
  {
    path: '/propabilistics',
    pathName: 'Propabilistyka',
    component: mainOfSubject,
    props: true,
    mainSite: false,
    children: [
      { 
        path: 'misscalculation', 
        component: lessonMiscalculation,
      }]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
