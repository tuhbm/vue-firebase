import Vue from 'vue';
import Router from 'vue-router';

import Hello from '../components/HelloWorld';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/hello',
            name: 'hello',
            component: Hello
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/signup',
            name: 'signUp',
            component: SignUp
        }
    ]
})