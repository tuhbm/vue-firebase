import Vue from 'vue';
import Router from 'vue-router';

import Hello from '../components/HelloWorld';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import firebase from 'firebase';

Vue.use(Router);

let router =  new Router({
    mode:'history',
    routes: [
        {
            path: '*',
            redirect: '/login'
        },
        {
            path: '/',
            name: 'login',
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
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    
    if(requiresAuth && !currentUser) next('login');
    else if (!requiresAuth && currentUser) next('hello');
    else next()
});

export default router