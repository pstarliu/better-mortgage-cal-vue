import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { routes } from './routes';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

Vue.filter('toCurrency', function (value) {
    if (typeof value !== "number") {
        return value;
    }
    // Default would be en-US, and USD I guess
    // but are are default to NZD instead
    var formatter = new Intl.NumberFormat('en-NZ', {
        style: 'currency',
        currency: 'NZD',
        minimumFractionDigits: 0
    });
    return formatter.format(value);
});

const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/better-mortgage-cal-vue/'
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
