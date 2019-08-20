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
const StoreAuth = r => require.ensure([], () => r(require('../components/StoreAuth')), 'index')
const Information  = r => require.ensure([], () => r(require('../components/Information')), 'index')
const Wealthcenter =  r => require.ensure([], () => r(require('../components/Wealthcenter')), 'index')
const Discountrecord =  r => require.ensure([], () => r(require('../components/Discountrecord')), 'index')
const Invitedpeople =  r => require.ensure([], () => r(require('../components/Invitedpeople')), 'index')
const Goodsdetails = r => require.ensure([], () => r(require('../pages/home/Goodsdetails')), 'index')
const Myselection = r => require.ensure([], () => r(require('../components/myselection/index')), 'index')
const Oneclickshop = r => require.ensure([], () => r(require('../components/oneclickshop/index')), 'index')
const EditorPrice = r => require.ensure([], () => r(require('../components/myselection/editorPrice')), 'index')

const Addmaterial = r => require.ensure([], () => r(require('../components/myselection/addmaterial')), 'index')
const router= new Router({
  routes: [
    {
      path: '/',
      redirect: '/user',
    },
    //首页
    {
      path: '/home',
      name: 'Home',
      component: Home,     
      redirect: '/index',
      meta: {
        title: '首页'
      },
      children:[
        {
          path: '/index',
          name: 'index',
          component: Index,
          meta: {
            title: '首页'
          }
        }, 
        {
          path: '/order',
          name: 'Order',
          component: Order,
          meta: {
            title: '订单'
          }
        },  
        {
          path: '/user',
          name: 'User',
          component: User,
          meta: {
            title: '我的'
          }
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
        isLogin: false,
        title: '登入'
      }
    },
    //注册
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        isLogin: false,
        title: '注册'
      }
    },
    //店铺授权
    {
      path: '/storeAuth',
      name: 'StoreAuth',
      component: StoreAuth,
      meta: {
        isLogin: false,
        title: '店铺授权'
      }
    },
    //完善资质信息
    {
      path: '/information',
      name: 'Information',
      component: Information,
      meta: {
        isLogin: false,
        title: '完善资质信息'
      }
    },
    //财富中心
    {
      path: '/wealthcenter',
      name: 'Wealthcenter',
      component: Wealthcenter,
      meta: {
        isLogin: false,
        title: '财富中心'
      }

    },
    //提现记录
    {
      path: '/discountrecord',
      name: 'Discountrecord',
      component: Discountrecord,
      meta: {
        isLogin: false,
        title: '提现记录'
      }
    },
     // 邀请的供应商//网红
     {
      path: '/invitedpeople',
      name: 'Invitedpeople',
      component: Invitedpeople,
      meta: {
        isLogin: false,
        title: '邀请的供应商'
      }
    },
    // 商品详情
    {
      path: '/goodsdetails',
      name: 'Goodsdetails',
      component: Goodsdetails,
      meta: {
        isLogin: false,
        title: '商品详情'
      }
    },
    // 我的选品
    {
    path: '/myselection',
    name: 'Myselection',
    component: Myselection,
    meta: {
      isLogin: false,
      title: '雀信'
    }
  },
     // 一键铺货
     {
      path: '/oneclickshop',
      name: 'Oneclickshop',
      component: Oneclickshop,
      meta: {
        isLogin: false,
        title: '雀信'
      }
    },
     // 编辑售价
     {
      path: '/editorPrice',
      name: 'EditorPrice',
      component: EditorPrice,
      meta: {
        isLogin: false,
        title: '雀信'
      }
    },
       // 编辑增加素材
       {
        path: '/addmaterial',
        name: 'Addmaterial',
        component: Addmaterial,
        meta: {
          isLogin: false,
          title: '雀信'
        }
      }
   
  ],
  mode:"history"
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

export default router