import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import ShiLi from '../components/ShiLi.vue'
Vue.use(VueRouter)

const routes = [
{path:'/',component:Login},
{path:'/shili',component:ShiLi},
]

const router = new VueRouter({
  routes
})

export default router
