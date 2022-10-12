<template>
    <div class="h-screen flex grid grid-cols-1 sm:grid-cols-2">
        <div class="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
            <div class="card w-96 p-12 bg-yellow-50">
            <form>
              <ul class="grid grid-rows-3 grid-flow-col gap-4">
                  <li class="relative">
                    <input class="sr-only peer" type="radio" value="driver" name="answer" id="driver">
                    <label class="block text-center w-full bg-yellow-300 mt-2 py-2 px-2 text-black font-semibold mb-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent" for="driver"> Sign up as Driver </label>
  
                    <div class="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                      
                    </div>
      
                  </li>
  
                  <li class="relative">
                    <input class="sr-only peer" type="radio" value="driver" name="answer" id="hitcher">
                    <label class="block text-center w-full bg-yellow-300 mt-2 py-2 px-2 rounded-2xl text-black font-semibold mb-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent" for="hitcher"> Sign up as Hitcher </label>
  
                    <div class="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                      
                    </div>
                  
                  </li>

                  <li class="relative">
                    <input class="sr-only peer" type="radio" value="both" name="answer" id="both">
                    <label class="block text-center w-full bg-yellow-300 mt-2 py-2 px-2 rounded-2xl text-black font-semibold mb-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent" for="both"> Sign up as Both </label>
  
                    <div class="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                      
                    </div>
                  
                  </li>
                </ul>
                <button @click='next()' type="button" class="block w-full bg-yellow-300 mt-4 py-2 rounded-2xl text-black font-semibold mb-2">Next </button>
                <br>
                <span @click='backToRegister()' class="text-sm ml-2 hover:text-yellow-300 cursor-pointer">Back to register</span>
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
            next() {
                this.$router.push('/registerOTP')
            },
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
            this.$router.push('/register')
        }
    
        }
    }
    </script>
  <style>
  
  </style>