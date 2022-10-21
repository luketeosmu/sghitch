<template lang="">
    <div class="drawer bg-slate-400">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <Nav />
            <!-- Page content here -->
            <CurrFav :favourites="favourites" />
            <AddFav :favourites="favourites"/>
            <!-- Page content ends here -->
        </div>
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
            <!-- Sidebar content here -->
            <li><a @click="home()">Home</a></li>
            <li><a @click="profile()">Profile</a></li>
            <li><a @click="favourite()">Favourite</a></li>
            <li><a @click="change()">Switch to Hitcher</a></li>
            <li><a @click="chat()">Chat</a></li>
            <li><a @click="settings()">Account Settings</a></li>
            <hr/>
            <li><a @click="logout()">Logout</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
import MapsService from '../services/MapsService'
import Nav from '../components/Nav.vue'
import AddFav from '../components/AddFav.vue'
import CurrFav from '../components/CurrFav.vue'

export default {
    name: "NewFav",
    components: {
        MapsService,
        Nav,
        AddFav,
        CurrFav
    },
    props: {},
    methods: {
        home() {
            this.$router.push('../')
        },
        profile() {
            this.$router.push('/profile')
        },
        favourite() {
            window.location.reload()
        },
        chat() {
            this.$router.push('/chat')
        },
        settings() {
            this.$router.push('/profile')
        },
        logout(){
            this.$router.push('/login')
        }
    },
    data () {
        return {
            favourites: [
                {
                    from: "ChoaChuKang",
                    to: "Tampines"
                },
                {
                    from: "SMU",
                    to: "Woodlands"
                }
            ],
        }
    },
    mounted(){
    },
}
</script>
<style lang="">
    
</style>