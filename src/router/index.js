import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import collepseProblem from '../components/WorkTest/collepseProblem.vue'
import checkboxProblem from '../components/WorkTest/checkboxProblem.vue'
import selectProblem from '../components/WorkTest/selectProblem.vue'
import validate from '../components/WorkTest/validate.vue'
import bootstrapModal from '../components/WorkTest/bootstrapModal.vue'
// 測試路由
import Test from '../components/Test.vue'

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
  {
    path: '/validate',
    name: 'validate',
    component: validate
  },
  {
    path: '/bootstrapModal',
    name: 'bootstrapModal',
    component: bootstrapModal
  },
  {
    path: '/test/:id',
    name: 'Test',
    component: Test
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
