// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import './style/index.css';
import axios from 'axios';
import selfComponents from './components';
import fullCalendar from 'vue-fullcalendar';
import './style/default.css';
import Calendar from 'vue2-event-calendar';

Vue.use(ElementUI);
Vue.use(selfComponents);
Vue.component('Calendar', Calendar)
Vue.component('full-calendar', fullCalendar)

Vue.config.productionTip = false;

//路由配置和拦截

const baseAxios = axios.create({
  baseURL: 'http://39.106.143.18:5000',
  headers: {
    'Content-Type': 'application/json'
  }
});

const baseAxios1 = axios.create({
  baseURL: 'http://39.106.143.18:5000',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('Authorization')
  }
});

Vue.prototype.baseAxios = baseAxios;
Vue.prototype.baseAxios1 = baseAxios1;

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
