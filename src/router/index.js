import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/homeView.vue';
import mainOfSubject from '../views/mainOfSubject.vue'
import lessonMiscalculation from '../views/numericMethods/lessonMiscalculation';


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
    children: [
      { path: 'misscalculation', component: lessonMiscalculation, },
      { path: 'misscalculation', component: lessonMiscalculation, },
      { path: 'misscalculation', component: lessonMiscalculation, },
      { path: 'misscalculation', component: lessonMiscalculation, },
      { path: 'misscalculation', component: lessonMiscalculation, },
    ]
  },
  {
    path: '/propabilistics',
    name: 'Propabilistyka',
    component: mainOfSubject,
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
