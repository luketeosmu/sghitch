<template>
  <div class="h-screen flex grid grid-cols-1 sm:grid-cols-2">
      <div class="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
          <div class="card w-96 p-12 bg-yellow-50">
          <form>
            <h1 class="text-gray-800 font-bold font-sans text-2xl mb-7 text-center"> We've sent a verification code to your email </h1>
            <div class="flex items-center border-2 py-2 px-3 mb-5 rounded-2xl border-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                <input @keyup.enter='login()' v-model.lazy="input.password" class="pl-2 outline-none border-none bg-yellow-50" type="password" name="" placeholder="Enter OTP" />
            </div>
              <button @click='' type="button" class="block w-full bg-yellow-300 mt-4 py-2 rounded-2xl text-black font-semibold mb-2"> Submit </button>
              <br>
              <span @click='backToRegister()' class="text-sm ml-2 hover:text-yellow-300 cursor-pointer">Back </span>
          </form>
      </div>
      </div>
      </div>
      <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video class="min-w-full min-h-full absolute object-cover" src="../vid.mp4" type="video/mp4" autoplay muted loop></video>
      </div>
</template>
<script>
  // import UserService from '../services/UserService'
  
  export default {
      name: "RegisterAs",
      components: {
          // UserService
      },
      props: {
          
      },
      data () {
          return {
              input: {
                  username: "",
                  password: "",
                  confirmPassword: "",
                  mobileNumber: "",
              }
          }
      },
      mounted(){
          sessionStorage.removeItem("user");
          localStorage.clear();
      },
      methods: {
          register() {},
          // login(){
          //     try{
          //         if(this.input.username != "" && this.input.password != "") {
          //             // localStorage.setItem("user", this.input);
          //             // this.$router.push('/');
          //             UserService.authenticate(this.input)
          //             .then((res) => {
          //                 if(res == "failed"){
          //                     alert("Incorrect username/password. Please try again.")
          //                 } else {
          //                     this.$router.push('/')
          //                 }
          //             })
          //         } else {
          //             alert("A username and password must be present. Please try again.");
          //         }
          //     } catch (error){
  
          //     }
          // },

          backToRegister(){
          this.$router.push('/registerAs')
      }
  
      }
  }
  </script>
<style>

</style>