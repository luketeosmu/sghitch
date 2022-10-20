<template lang="">
    <div class="navbar sticky top-0 z-10 absolute bg-yellow-300">
        <div class="navbar-start">
            <!-- <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost btn-circle md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a @click='home()'>Home</a></li>
                    <li><a @click='profile()'>Profile</a></li>
                    <li><a @click='newFav()'>Favourites</a></li>
                </ul>
            </div> -->
            <div class="dropdown hidden md:block">
                <ul class="menu menu-horizontal p-0" tabindex="0">
                    <li><a class="btn btn-ghost bg-transparent" @click='home()'>Home</a></li>
                    <li><a class="btn btn-ghost bg-transparent" @click='profile()'>Profile</a></li>
                    <li><a class="btn btn-ghost bg-transparent" @click='newFav()'>Favourites</a></li>
                    
                </ul>
            </div>
            <div class="flex-none md:hidden">
                    <label for="my-drawer-3" class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
            </div> 
        </div>
        <div class="navbar-center">
            <span class="font-bold text-4xl font-sans cursor-pointer text-black" @click='home()'>Hitch.</span>
            <div v-if="this.user.type == 'driver'">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 mx-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
            </div>
            <div v-else>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 mx-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                </svg>
            </div>
        </div>
        <div class="navbar-end">
            <button @click='newReq()' type="button" class="btn btn-ghost block p-1 md:p-3 rounded-2xl font-semibold" to="newReq">New Request</button>
            <!-- <button class="btn btn-ghost btn-circle">
            <div class="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span class="badge badge-xs badge-success indicator-item"></span>
            </div>
            </button> -->
            <div class="dropdown dropdown-end mr-3 hidden md:block">
                <label tabindex="0" class="md:flex btn btn-ghost p-3 rounded-2xl font-semibold px-1 ml-3">My Account &nbsp<i class="bi bi-caret-down-fill"></i></label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <!-- to dynamically change -->
                    <li v-if="this.user.type == 'driver'"><a @click="change()">Switch to Hitcher</a></li> 
                    <li v-else><a @click="change()">Switch to Driver</a></li> 
                    <li><a>View Chats</a></li>
                    <li><a @click="accountSettings()">Account Settings</a></li>
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
            user: {
                type: "driver"
            },
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
        },
        change() {
            if(this.user.type == "driver") {
                this.user.type = "hitcher"
            } else [
                this.user.type = "driver"
            ]
            console.log(this.user.type)
        },
        accountSettings(){
            this.$router.push('/accountsettings')
        }
    },
}
</script>
<style lang="">
    
</style>