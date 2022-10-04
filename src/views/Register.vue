<template>
    <div class="h-screen flex grid grid-cols-1 sm:grid-cols-2">
        <div class="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
            <div class="card w-96 p-12 bg-yellow-50">
            <form>
                <h1 class="text-gray-800 font-bold font-sans text-3xl mb-7 text-center">Register</h1>
                <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 border-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input @keyup.enter='register()' v-model.lazy="input.username" class="pl-2 outline-none border-none bg-yellow-50" type="email" name="" placeholder="Email Address" />
                </div>
                <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 border-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    <input @keyup.enter='register()' v-model.lazy="input.password" class="pl-2 outline-none border-none bg-yellow-50" type="password" name="" placeholder="Password" />
                </div>
                <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 border-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    <input @keyup.enter='register()' v-model.lazy="input.confirmPassword" class="pl-2 outline-none border-none bg-yellow-50" type="password" name="" placeholder="Confirm Password" />
                </div>
                <div class="flex items-center border-2 py-2 px-3 rounded-2xl border-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-yellow-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <input @keyup.enter='register()' v-model.lazy="input.mobileNumber" class="pl-2 outline-none border-none bg-yellow-50" pattern="[0-9]{8}" type="tel" name="" placeholder="Mobile Number" />
                </div>
                <button @click='register()' type="button" class="block w-full bg-yellow-300 mt-4 py-2 rounded-2xl text-black font-semibold mb-2">Sign up</button>
                <span @click='login()' class="text-sm ml-2 hover:text-yellow-300 cursor-pointer">Already have an account? Login here </span> <br><br>
            </form>
            <p class="text-center mt-4 text-sm">By clicking on "Sign up" you agree to <br>
                <a class="underline text-black visited:text-indigo-900" href="#">Terms of Service</a> | <a class="underline text-black visited:text-indigo-900" href="#"> Privacy Policy </a>
            </p>
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
        name: "Register",
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
    
    
            login(){
                this.$router.push('/login')
            },
        }
    }
    </script>
<style>

</style>