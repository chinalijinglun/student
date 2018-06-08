import Vue from 'vue'
import Router from 'vue-router'
import useEmail from '@/pages/regist/email'
import usePhone from '@/pages/regist/phone'
import login from '@/pages/login'
import main from '@/pages/main';

import center from './center';

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
      // 主页
      title:'首页',
      path: '/main',
      name: 'main',
      component: main,
    },
    {
      title: '个人中心',
      path: '/center',
      component: main,
      name: 'center',
      children: center
    },
  ]
})
