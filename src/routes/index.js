import Admin from './admin';
import { Home, Search } from '../pages';

const routes = [{
    path: '/',
    name: 'home',
    component: Home
}, {
    path: '/search',
    name: 'search',
    component: Search
}];

export default [
    ...routes,
    ...Admin
];
