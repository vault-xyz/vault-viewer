import VueRouter from 'vue-router';
import { Home, Search } from './pages';

const routes = [{
    path: '/',
    name: 'home',
    component: Home
}, {
    path: '/search',
    name: 'search',
    component: Search
}];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;