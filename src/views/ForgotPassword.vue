<template>
    <div class="h-screen flex grid grid-cols-1 sm:grid-cols-2 bg-no-repeat bg-cover bg-bottom bg-home-background">
        <div class="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
            <div class="card w-96 p-12 bg-slate-700 bg-opacity-95">
            <form>
                <h1 class="text-white font-bold font-sans text-3xl mb-7 text-center">Forgot Password</h1>
                <h3 class="text-white font-sans text-m mb-7 text-center">Enter your email and we'll send you a link to reset your password </h3>
                <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input @blur="validateEmail()" @keyup.enter='forgotPassword()' v-model.lazy="input.email" class="pl-2 outline-none border-none bg-inherit font-medium text-white" type="email" name="" placeholder="Email Address" />
                </div>
                <span class="floating-placeholder text-red-400" v-if="errorMsg.email">{{errorMsg.email}}</span>
                <button @click='forgotPassword()' type="button" class="block w-full bg-white bg-opacity-80 mt-4 py-2 rounded-2xl text-black font-semibold mb-2">Reset Password</button>
                <br>
                <span @click='register()' class="text-white text-sm ml-2 hover:text-blue-300 cursor-pointer">Create an Account</span> 
                <br><br>
                <span @click='backToLogin()' class="text-white text-sm ml-2 hover:text-blue-300 cursor-pointer">Back to Login </span> 

            </form>
        </div>
        </div>
        </div>
        <!-- <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
            <video class="min-w-full min-h-full absolute object-cover" src="../vid2.mp4" type="video/mp4" autoplay muted loop></video>
        </div> -->
</template>
<script>
// import UserService from '../services/UserService'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

export default {
    name: "ForgotPassword",
    components: {
        // UserService
    },
    props: {
        
    },
    data () {
        return {
            errorMsg: [],
            readMore: false,
            input: {
                email: "",
            }
        }
    },
    mounted(){
        
    },
    methods: {
        register(){
            this.$router.push('/register')
        },
        forgotPassword(){
            let auth = getAuth();
            sendPasswordResetEmail(auth, this.input.email)
            .then(() => {
                // alert("Email successfully sent!")
                this.$router.push('/login')
            })
            .catch((error) => {
                console.log(error.code)
                alert(error.message)
            })
        },
        backToLogin(){
            this.$router.push('/login')
        },
        validateEmail() {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.input.email)) {
                this.errorMsg['email'] = 'Please enter a valid email address';
            } else {
                this.errorMsg['email'] = '';
            }
        },
    }
}
</script>
<style>

</style>