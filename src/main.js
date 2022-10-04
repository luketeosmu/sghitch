import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Profile from './views/Profile.vue'
import './style.css'


// import './index.css'


const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: Profile
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})  

createApp(App).use(router).mount('#app')