// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
import '@/mockjs/mock.js'; // mock数据


import formCreate from "@form-create/element-ui"
import {maker} from "@form-create/element-ui"

Vue.use(formCreate);


import store from './store/index'
// Vue.use(ElementUI);
Vue.use(ElementUI, { size: 'mini'});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



