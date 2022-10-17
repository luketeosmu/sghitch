<template lang="">
    <div class="sticky top-0 z-10 absolute navbar bg-yellow-300 mb-5">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost btn-circle md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a @click='home()'>Home</a></li>
                    <li><a @click='profile()'>Profile</a></li>
                    <li><a @click='newFav()'>Favourites</a></li>
                    <li><label for="my-modal-4">Your Request</label></li>
                </ul>
            </div>
            <div class="dropdown hidden md:block">
                <ul class="menu menu-horizontal p-0" tabindex="0">
                    <li><a class="btn btn-ghost bg-transparent" @click='home()'>Home</a></li>
                    <li><a class="btn btn-ghost bg-transparent" @click='profile()'>Profile</a></li>
                    <li><a class="btn btn-ghost bg-transparent" @click='newFav()'>Favourites</a></li>
                    
                </ul>
            </div>
        </div>
        <div class="navbar-center">
            <span class="font-bold text-4xl font-sans cursor-pointer" @click='home()'>Hitch.</span>
        </div>
        <div class="navbar-end">
            <label for="my-modal-4" class="hidden md:flex btn btn-ghost drawer-button bg-yellow-100 p-3 rounded-2xl text-black font-semibold mx-5 ">Your Request</label>
            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <label for="my-modal-4" class="modal cursor-pointer">
                <label class="modal-box relative w-11/12 max-w-full" for="">
                    <h3 class="text-3xl font-bold mb-5">List of Interested Hitchers</h3>
                    <div class="flex item-center justify-center">
                        <Request :requests="requests" :showDest='true' :showFrom='true' />
                    </div>
                </label>
            </label>

            <button @click='newReq()' type="button" class="btn btn-ghost block bg-yellow-100 p-1 md:p-3 rounded-2xl text-black font-semibold" to="newReq">New Request</button>
            <!-- <button class="btn btn-ghost btn-circle">
            <div class="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span class="badge badge-xs badge-success indicator-item"></span>
            </div>
            </button> -->
            <div class="dropdown dropdown-end mr-3">
                <label tabindex="0" class="md:flex btn btn-ghost p-3 rounded-2xl text-black font-semibold px-5 ml-3">My Account &nbsp<i class="bi bi-caret-down-fill"></i></label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <!-- to dynamically change -->
                    <li><a>Switch to Hitcher</a></li> 
                    <li><a>View Chats</a></li>
                    <li><a>Account Settings</a></li>
                    <hr/>
                    <li><a @click="logout()">Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Request from "../components/Request.vue"
import { getAuth, signOut } from 'firebase/auth'
export default {
    name: "Nav", 
    components: {
        Request,
    },
    props: {
        
    },
    mounted(){
        this.auth = getAuth();
    },
    data() {
        return {
            auth: null,
            requests: [
                    {
                        hitcher: "Luke Teo",
                        rating: 5,
                        time: "08:00",
                        pax: 2,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "Shaun Ting",
                        rating: 5,
                        time: "10:00",
                        pax: 3,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "Ali baba",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "John Wick",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "Jennie Kim",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "KIm Jong Kook",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "Kimchi Jigae",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "Buddae Jigae",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        from: "730308",
                        to: "529498"
                    },
            ]
        }
    },
    methods: {
        newReq() {
            this.$router.push('/newReq')
        },
        home() {
            this.$router.push('/')
        },
        profile() {
            this.$router.push('/profile')
        },
        newFav() {
            this.$router.push('/newFav')
        },
        logout(){
            signOut(this.auth).then(() => {
                this.$router.push('/login')
            })
        }
    },
}
</script>
<style lang="">
    
</style>