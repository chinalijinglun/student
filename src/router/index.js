import Vue from 'vue'
import Router from 'vue-router'
import useEmail from '@/pages/regist/email'
import usePhone from '@/pages/regist/phone'
import login from '@/pages/login'
import main from '@/pages/main';
import perfect from '@/pages/perfect';
import fillInformation from '@/pages/fillInformation';
import index from '@/pages/static/index';
import sztd from '@/pages/static/sztd';
import kctx from '@/pages/static/kctx';
import jxfw from '@/pages/static/jxfw';
import zsrx from '@/pages/static/zsrx';
import gywm from '@/pages/static/gywm';

import center from './center';
import data from './data';
import preview from './preview';
import homework from './homework';
import timetable from './timetable';
import course from './course';
import order from './order';
import report from './report';
import schedule from './schedule';

import iframe from '@/pages/iframe';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      title: '首页',
      path: '/index',
      name: 'index',
      component: index
    },
    {
      title: '师资团队',
      path: '/sztd',
      name: 'sztd',
      component: sztd
    },
    {
      title: '课程体系',
      path: '/kctx',
      name: 'kctx',
      component: kctx
    },
    {
      title: '教学服务',
      path: '/jxfw',
      name: 'jxfw',
      component: jxfw
    },
    {
      title: '招生入学',
      path: '/zsrx',
      name: 'zsrx',
      component: zsrx
    },
    {
      title: '招生入学',
      path: '/gywm',
      name: 'gywm',
      component: gywm
    },
    //注册
    //邮箱注册
    {
      title:'注册页',
      path: '/useEmail',
      name: 'useEmail',
      component: useEmail
    },
    {
      title:'iframe',
      path: '/iframe',
      name: 'iframe',
      component: iframe
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
      //完善信息
      title: '完善信息',
      path: '/perfect',
      name: 'perfect',
      component: perfect
    },
    {
      //填写资料
      title: '填写资料',
      path: '/fillInformation',
      name: 'fillInformation',
      component: fillInformation
    },
    {
      title: '个人中心',
      path: '/center',
      component: main,
      name: 'center',
      children: center
    },
    {
      title: '填写资料',
      path: '/data',
      component: main,
      name: 'data',
      children: data
    },
    {
      title: '课前预习',
      path: '/preview',
      component: main,
      name: 'preview',
      children: preview
    },
    {
      title: '课后作业',
      path: '/homework',
      component: main,
      name: 'homework',
      children: homework
    },
    {
      title: '我的课表',
      path: '/timetable',
      component: main,
      name: 'timetable',
      children: timetable
    },
    {
      title: '我的课程',
      path: '/course',
      component: main,
      name: 'course',
      children: course
    },
    {
      title: '我的订单',
      path: '/order',
      component: main,
      name: 'order',
      children: order
    },
    {
      title: '成长报告',
      path: '/report',
      component: main,
      name: 'report',
      children: report
    },
    {
      title: '课程表',
      path: '/schedule',
      component: main,
      name: 'schedule',
      children: schedule
    },
    // 404 page
    {path: '*', component: login}
  ]
})
