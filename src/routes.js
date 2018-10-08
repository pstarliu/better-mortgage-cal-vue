import Home from './components/Home.vue';
import Calculate from './components/Calculate.vue';
import About from './components/About.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/calculate', component: Calculate },
    { path: '/about', component: About },
]
