<template lang="">
    <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <Nav />
            <!-- Page content here -->
            <div class="grid grid-cols-2 h-full justify-center items-center">
                <div class="text-center text-6xl font-bold bg-slate-300 h-full items-center justify-center">
                    <h1 class="my-auto">View Existing Requests</h1>
                </div>
                
                <div class="text-center text-6xl font-bold">Create new Request</div>
            </div>
            <!-- Page content ends here -->
        </div> 
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
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
import Nav from "../components/Nav.vue"
export default {
    name: "Chat",
    props: {},
    components: {
        Nav
    },
    methods: {
        change() {
            if(this.user.type == "driver") {
                this.user.type = "hitcher"
            } else [
                this.user.type = "driver"
            ]
            console.log(this.user.type)
        },
        home() {
            window.location.reload()
        },
        profile() {
            this.$router.push('/profile')
        },
        favourite() {
            this.$router.push('/newFav')
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
    data() {
        return {
            user: {
                type: "driver"
            }
        }
    }
}
</script>
<style lang="">
    
</style>