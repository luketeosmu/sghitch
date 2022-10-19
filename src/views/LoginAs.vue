<template>
  <div class="h-screen flex grid grid-cols-1 sm:grid-cols-2">
      <div class="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
          <div class="card w-96 p-12 bg-yellow-50">
          <form>
            <ul class="grid grid-rows-2 grid-flow-col gap-4">
                <li class="relative">
                  <input class="sr-only peer" type="radio" value="driver" name="answer" id="driver">
                  <label class="block text-center w-full bg-yellow-300 mt-2 py-2 px-2 text-black font-semibold mb-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent" for="driver"> Sign in as Driver </label>

                  <div class="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                    
                  </div>
    
                </li>

                <li class="relative">
                  <input class="sr-only peer" type="radio" value="driver" name="answer" id="hitcher">
                  <label class="block text-center w-full bg-yellow-300 mt-2 py-2 px-2 rounded-2xl text-black font-semibold mb-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent" for="hitcher"> Sign in as Hitcher </label>

                  <div class="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                    
                  </div>
                
                </li>
              </ul>
              <button @click='login()' type="button" class="block w-full bg-yellow-300 mt-4 py-2 rounded-2xl text-black font-semibold mb-2">Next </button>
              <br>
              <span @click='backToLogin()' class="text-sm ml-2 hover:text-yellow-300 cursor-pointer">Back to Login</span>
          </form>
      </div>
      </div>
      </div>
      <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video class="min-w-full min-h-full absolute object-cover" src="../vid1.mp4" type="video/mp4" autoplay muted loop></video>
      </div>
</template>
<script>
// import UserService from '../services/UserService'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"

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
          this.$router.push('/')
        },
        backToLogin(){
          //logout
          signOut(this.auth).then(() => {
            this.$router.push('/login')
          })
      }

    }
}
</script>
<style>

</style>