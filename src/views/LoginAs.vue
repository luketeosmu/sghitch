<template>
      <div class="h-screen flex">
        <div class="flex flex-col w-full lg:flex-row z-30 items-center justify-center text-center my-96 ">
            <div @click="setUserType('driver')" class="grid block w-72 h-24 card text-3xl text-white font-semibold bg-slate-700 bg-opacity-70 hover:bg-opacity-90 hover:cursor-pointer rounded-box place-items-center">Sign in as Driver</div> 
            <div class="divider lg:divider-horizontal text-white">OR</div> 
            <div @click="setUserType('hitcher')" class="grid block w-72 h-24 card text-3xl text-slate-700 font-semibold bg-white bg-opacity-70 hover:bg-white hover:text-black hover:bg-opacity-80 hover:cursor-pointer rounded-box place-items-center">Sign in as Hitcher</div>
        </div>
        <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
            <video class="min-w-full min-h-full absolute object-cover" src="../vid1.mp4" type="video/mp4" autoplay muted loop></video>
        </div>
      </div>
</template>
<script>
// import UserService from '../services/UserService'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { getDatabase, ref, set, update } from 'firebase/database'

export default {
    name: "LoginAs",
    components: {
        // UserService
    },
    props: {
        
    },
    data () {
        return {
            isLoggedIn: false,
            auth: null,
            type: "hitcher"
        }
    },
    mounted(){
        // sessionStorage.removeItem("user");
        // localStorage.clear();
        this.auth = getAuth();
        onAuthStateChanged(this.auth, (user) => {
          if (user) {
            this.isLoggedIn = true
          } else {
            this.isLoggedIn = false
          }
        })
    },
    methods: {
        login (){
          const db = getDatabase()
          update(ref(db, 'userTypes/' + this.auth.currentUser.uid), {
            type: this.type
          })
          this.$router.push('/')
        },
        backToLogin(){
          //logout
          signOut(this.auth).then(() => {
            this.$router.push('/login')
          })
        },
        setUserType(type) {
          this.type = type
          this.login()
        }

    }
}
</script>
<style>

</style>