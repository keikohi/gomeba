import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue';
// import Vuex from 'vuex'
import store from './store';

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})

Vue.use(SuiVue);
// Vue.use(Vuex)