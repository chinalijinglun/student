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
import {vueAccordion} from 'vue-accordion';
import other from './utils/other';

Vue.use(ElementUI);
Vue.use(selfComponents);
Vue.use(other);
Vue.component('Calendar', Calendar);
Vue.component('full-calendar', fullCalendar);
Vue.component('vue-accordion', vueAccordion);


function getLocalStorage(key) {
  return localStorage.getItem(key);
}


//路由配置和拦截

let requestCount = 0;

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
    'Authorization': getLocalStorage('Authorization')
  }
});

baseAxios.interceptors.request.use(config => {
  requestCount++;
  ElementUI.Loading.service({ fullscreen: true })
  return config;
}, error => {
  return Promise.reject(error);
})

baseAxios.interceptors.response.use(resp => {
  // setTimeout(_ => {
    requestCount--;
    if (requestCount <= 0) {
      ElementUI.Loading.service().close()
    }
  return resp;
  // }, 50)
}, error => {
  requestCount--;
  if (requestCount <= 0) {
    ElementUI.Loading.service().close()
  }
  return Promise.reject(error);
})

baseAxios1.interceptors.request.use(config => {
  requestCount++;
  ElementUI.Loading.service({ fullscreen: true });
  config.headers['Authorization'] = getLocalStorage('Authorization');
  return config;
}, error => {
  requestCount--;
  if (requestCount <= 0) {
    ElementUI.Loading.service().close()
  }
  return Promise.reject(error);
})
//
baseAxios1.interceptors.response.use(resp => {
  // setTimeout(_ => {
  requestCount--;
  if (requestCount <= 0) {
    ElementUI.Loading.service().close()
  }
  return resp;
  // }, 50)
}, error => {
  requestCount--;
  if (requestCount <= 0) {
    ElementUI.Loading.service().close()
  }
  return Promise.reject(error);
})

Vue.prototype.baseAxios = baseAxios;
Vue.prototype.baseAxios1 = baseAxios1;


Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
