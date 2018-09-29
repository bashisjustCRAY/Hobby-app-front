import Vue from 'vue'
import Router from 'vue-router'
import Hobbies from './components/Hobbies.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/hobbies',
            name: 'hobbies',
            component: Hobbies
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        }
    ]
})