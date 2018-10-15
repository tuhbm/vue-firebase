import Vue from 'vue';
import Router from 'vue-router';

import Hello from '../components/HelloWorld';
import Login from '../components/Login';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'hello',
            component: Hello
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})