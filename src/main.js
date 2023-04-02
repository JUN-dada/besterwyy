import Vue from 'vue'
import App from './App.vue'
import store from "@/store/main";
import router from "./router/index";
import './css/index.css';
import axios from "axios";
import VueRouter from "vue-router";
import Vuex from "vuex";



Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex);
Vue.use(store);
const vm= new Vue({
  store,
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus=this;
  }
}).$mount('#app')
