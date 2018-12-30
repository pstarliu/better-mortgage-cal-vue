import Home from './components/Home.vue';
import Calculate from './components/Calculate.vue';
import About from './components/About.vue';
import PrivacyPolicy from './components/PrivacyPolicy.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/calculate', component: Calculate },
  { path: '/about', component: About },
  { path: '/privacy', component: PrivacyPolicy }
]
