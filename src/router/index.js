import Vue from 'vue'
import Router from 'vue-router'
import useEmail from '@/pages/regist/email'
import usePhone from '@/pages/regist/phone'
import login from '@/pages/login'
import main from '@/pages/main';

Vue.use(Router)

export default new Router({
  routes: [
    //注册
    //邮箱注册
    {
      title:'注册页',
      path: '/useEmail',
      name: 'useEmail',
      component: useEmail
    },
    //手机注册
    {
      title:'注册页',
      path: '/usePhone',
      name: 'usePhone',
      component: usePhone
    },
    //登录
    {
      title:'登录',
      path: '/login',
      name: 'login',
      component: login
    },
    {
      // 个人中心
      title:'首页',
      path: '/main',
      name: 'main',
      component: main,
    },
  ]
})
