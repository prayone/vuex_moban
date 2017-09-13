import Vue from 'vue';
import Vuex from 'vuex';
import Vuex_use from './vuex_use/';

Vue.use(Vuex);

export default new Vuex.Store({
  // 模块化
  modules: {
    Vuex_use
  }
})