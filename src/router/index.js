import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import collepseProblem from '../components/WorkTest/collepseProblem.vue'
import checkboxProblem from '../components/WorkTest/checkboxProblem.vue'
import selectProblem from '../components/WorkTest/selectProblem.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/collepseProblem',
    name: 'collepseProblem',
    component: collepseProblem
  },
  {
    path: '/checkboxProblem',
    name: 'checkboxProblem',
    component: checkboxProblem
  },
  {
    path: '/selectProblem',
    name: 'selectProblem',
    component: selectProblem
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
