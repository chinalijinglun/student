import Vue from 'vue';
import Vuex from 'vuex';
import person from './person';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    person
  }
});

export default store;
