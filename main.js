// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/'

new Vue({
  router,
  store,
  render: h => h(App),
  data:{
    // 空的实例放到根组件下，所有的子组件都能调用(非父子间通信)   
    Bus: new Vue() 
  }
}).$mount('#app-box')

