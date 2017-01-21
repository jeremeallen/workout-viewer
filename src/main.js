import Vue from 'vue'
import App from './App'
import router from './routes';
import store from './store';

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
