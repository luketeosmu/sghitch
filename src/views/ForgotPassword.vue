<template>
    <div class="h-screen flex grid grid-cols-1 sm:grid-cols-2">
        <div class="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
            <div class="card w-96 p-12 bg-yellow-50">
            <form>
                <h1 class="text-gray-800 font-bold font-sans text-3xl mb-7 text-center">Forgot Password</h1>
                <h3 class="text-gray-800 font-sans text-m mb-7 text-center">Enter your email and we'll send you a link to reset your password </h3>
                <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 border-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input @keyup.enter='register()' v-model.lazy="input.username" class="pl-2 outline-none border-none bg-yellow-50" type="email" name="" placeholder="Email Address" />
                </div>
                <button @click='login()' type="button" class="block w-full bg-yellow-300 mt-4 py-2 rounded-2xl text-black font-semibold mb-2">Reset Password</button>
                <br>
                <span @click='register()' class="text-sm ml-2 hover:text-yellow-300 cursor-pointer">Create an Account</span> 
                <br><br>
                <span @click='backToLogin()' class="text-sm ml-2 hover:text-yellow-300 cursor-pointer">Back to login </span> 

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
    name: "ForgotPassword",
    components: {
        // UserService
    },
    props: {
        
    },
    data () {
        return {
            readMore: false,
            input: {
                email: "",
            }
        }
    },
    mounted(){
        sessionStorage.removeItem("user");
        localStorage.clear();
    },
    methods: {
        register(){
            this.$router.push('/register')
        },
        backToLogin(){
            this.$router.push('/login')
        }
    }
}
</script>
<style>

</style>