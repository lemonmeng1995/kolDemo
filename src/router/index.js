import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'; 

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(Mint);

const Login = r => require.ensure([], () => r(require('../LoginPage/Login')), 'index')
const Register = r => require.ensure([], () => r(require('../LoginPage/Register')), 'index')
const Index= r => require.ensure([], () => r(require('../pages/home/Home')), 'index')
const Order = r => require.ensure([], () => r(require('../pages/order/Order')), 'index')
const User = r => require.ensure([], () => r(require('../pages/user/User')), 'index')
const Home = r => require.ensure([], () => r(require('../pages/index')), 'index')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    //首页
    {
      path: '/home',
      name: 'Home',
      component: Home,     
      redirect: '/index',
      children:[
        {
          path: '/index',
          name: 'index',
          component: Index,
        }, 
        {
          path: '/order',
          name: 'Order',
          component: Order,
        },  
        {
          path: '/user',
          name: 'User',
          component: User,
        }
      ],
      // meta: {
      //   isLogin: true
      // }
    },
    //登入
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        isLogin: false
      }
    },
    //注册
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        isLogin: false
      }
    },
   
  ]
})
