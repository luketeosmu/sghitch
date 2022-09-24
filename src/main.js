import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login.vue'
import './style.css'


// import './index.css'


const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})  

createApp(App).use(router).mount('#app')