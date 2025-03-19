import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import boke from '@/views/modules/boke/list'
    import bokeCollection from '@/views/modules/bokeCollection/list'
    import bokeLiuyan from '@/views/modules/bokeLiuyan/list'
    import dictionary from '@/views/modules/dictionary/list'
    import fangwu from '@/views/modules/fangwu/list'
    import fangwuCollection from '@/views/modules/fangwuCollection/list'
    import fangwuLiuyan from '@/views/modules/fangwuLiuyan/list'
    import fangwuOrder from '@/views/modules/fangwuOrder/list'
    import fangwuTousu from '@/views/modules/fangwuTousu/list'
    import yonghu from '@/views/modules/yonghu/list'
    import shangjia from '@/views/modules/shangjia/list'
    import config from '@/views/modules/config/list'
    import dictionaryBoke from '@/views/modules/dictionaryBoke/list'
    import dictionaryBokeCollection from '@/views/modules/dictionaryBokeCollection/list'
    import dictionaryFangwu from '@/views/modules/dictionaryFangwu/list'
    import dictionaryFangwuChaoxiang from '@/views/modules/dictionaryFangwuChaoxiang/list'
    import dictionaryFangwuCollection from '@/views/modules/dictionaryFangwuCollection/list'
    import dictionaryFangwuOrderYesno from '@/views/modules/dictionaryFangwuOrderYesno/list'
    import dictionaryFangwuTousu from '@/views/modules/dictionaryFangwuTousu/list'
    import dictionaryFangwuTousuChuli from '@/views/modules/dictionaryFangwuTousuChuli/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangjiaShiyong from '@/views/modules/dictionaryShangjiaShiyong/list'
    import dictionaryShangjiaXingji from '@/views/modules/dictionaryShangjiaXingji/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryYonghuShiyong from '@/views/modules/dictionaryYonghuShiyong/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryBoke',
        name: '博客类型',
        component: dictionaryBoke
    }
    ,{
        path: '/dictionaryBokeCollection',
        name: '收藏表类型',
        component: dictionaryBokeCollection
    }
    ,{
        path: '/dictionaryFangwu',
        name: '房屋类型',
        component: dictionaryFangwu
    }
    ,{
        path: '/dictionaryFangwuChaoxiang',
        name: '房屋朝向',
        component: dictionaryFangwuChaoxiang
    }
    ,{
        path: '/dictionaryFangwuCollection',
        name: '收藏表类型',
        component: dictionaryFangwuCollection
    }
    ,{
        path: '/dictionaryFangwuOrderYesno',
        name: '预约状态',
        component: dictionaryFangwuOrderYesno
    }
    ,{
        path: '/dictionaryFangwuTousu',
        name: '房屋投诉类型',
        component: dictionaryFangwuTousu
    }
    ,{
        path: '/dictionaryFangwuTousuChuli',
        name: '是否处理',
        component: dictionaryFangwuTousuChuli
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangjiaShiyong',
        name: '账户状态',
        component: dictionaryShangjiaShiyong
    }
    ,{
        path: '/dictionaryShangjiaXingji',
        name: '商家信用类型',
        component: dictionaryShangjiaXingji
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryYonghuShiyong',
        name: '账户状态',
        component: dictionaryYonghuShiyong
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/boke',
        name: '博客',
        component: boke
      }
    ,{
        path: '/bokeCollection',
        name: '博客收藏',
        component: bokeCollection
      }
    ,{
        path: '/bokeLiuyan',
        name: '博客留言',
        component: bokeLiuyan
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/fangwu',
        name: '房屋',
        component: fangwu
      }
    ,{
        path: '/fangwuCollection',
        name: '房屋收藏',
        component: fangwuCollection
      }
    ,{
        path: '/fangwuLiuyan',
        name: '房屋留言',
        component: fangwuLiuyan
      }
    ,{
        path: '/fangwuOrder',
        name: '预约看房',
        component: fangwuOrder
      }
    ,{
        path: '/fangwuTousu',
        name: '房屋投诉',
        component: fangwuTousu
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/shangjia',
        name: '商家',
        component: shangjia
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
