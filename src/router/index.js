import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import ShiLi from '../components/ShiLi.vue'
import shiYong from '../components/shiYong.vue'
import eleMent from '../components/eleMent.vue'
Vue.use(VueRouter)

const routes = [
{path:'/',component:Login},
{path:'/shili',component:ShiLi},
{path:'/shiyong',component:shiYong},
{path:'/element',component:eleMent},
]

const router = new VueRouter({
  routes
})

export default router
