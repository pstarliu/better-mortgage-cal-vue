import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { routes } from './routes';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'
import * as Sentry from '@sentry/browser'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

Vue.filter('toCurrency', function (value) {
    if (typeof value !== "number") {
        return value;
    }
    // Default would be en-US, and USD I guess
    // but we are default to NZD instead
    var formatter = new Intl.NumberFormat('en-NZ', {
        style: 'currency',
        currency: 'NZD',
        minimumFractionDigits: 0
    });
    return formatter.format(value);
});

Sentry.init({
  dsn: 'https://b6741af7be5e462a942474db654c102f@sentry.io/1364817',
  integrations: [new Sentry.Integrations.Vue({ Vue })]
})

const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/better-mortgage-cal-vue/'
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBRHOYV07pvQaS43qbG9CNJutFwnW6Tv70",
  authDomain: "better-morgate-cal.firebaseapp.com",
  databaseURL: "https://better-morgate-cal.firebaseio.com",
  projectId: "better-morgate-cal",
  storageBucket: "better-morgate-cal.appspot.com",
  messagingSenderId: "1014458930263"
};
firebase.initializeApp(config);

