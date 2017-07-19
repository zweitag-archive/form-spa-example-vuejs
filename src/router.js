import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/app/Hello.tmp';
import Wrapper from '@/signup/Wrapper';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello,
        },
        {
            path: '/signup',
            name: 'Wrapper',
            component: Wrapper,
        },
    ],
});
