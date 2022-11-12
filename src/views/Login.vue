<template>
    <div class="h-screen flex grid grid-cols-1 sm:grid-cols-2">
        <div class="relative z-30 flex justify-center items-end sm:items-center bg-white-100/20">
            <div v-if="!readMore" class="transition duration-300 delay-150">
                <h1 class=" text-white font-bold text-4xl mt-6 sm:text-6xl font-sans mb-4 ml-4">Welcome to Hitch</h1>
                <div class="grid grid-cols-2 sm:grid-cols-1">
                    <div class="text-white mt-1 ml-4">Book your ride now!</div>
                    <div>
                        <button @click="toggleReadMore()" type="submit" class="block w-28 bg-white bg-opacity-80 text-black py-1 rounded-2xl font-bold ml-4 sm:m-4 sm:py-2">Read More</button>
                    </div>
                </div>
            </div>
            <div v-else class="transition duration-300 delay-150">
                <h1 class=" text-white font-bold text-4xl mt-1 sm:text-6xl font-sans mb-4">Who are we?</h1>
                <p class="text-black mt-1 bg-yellow-50 p-2 rounded-2xl mb-4 border-gray-500 font-sans sm:bg-inherit sm:text-white">We serve as a platform to connect hitchers and drivers.<br> We aim to provide you a cheap ride to your destinations <br> and also to help drivers to save cost on their fuel</p>
                <button @click="toggleReadMore()" type="submit" class="block w-28 bg-white bg-opacity-60 mt-4 py-2 rounded-2xl font-bold mb-2">Back</button>
            </div>
        </div>
        <div class="relative z-30 flex justify-center items-start py-10 sm:items-center bg-white-100/20 mt:5">
            <div class="card w-96 p-10 bg-slate-700 bg-opacity-80">
            <form>
                <h1 class="text-white font-bold font-sans text-3xl mb-7 text-center ">Login</h1>
                <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input @keyup.enter='login()' v-model.lazy="input.email" class="pl-2 outline-none border-none bg-inherit font-medium text-white" type="email" name="" placeholder="Email Address" />
                </div>
                <div class="flex items-center border-2 py-2 px-3 rounded-2xl border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="black">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    <input @keyup.enter='login()' v-model.lazy="input.password" class="pl-2 outline-none border-none bg-inherit font-medium text-white" type="password" name="" placeholder="Password" />
                </div>
                <div>
                    <p v-if="errMsg" className="mt-2 text-red-500">{{ errMsg }}</p>
                </div>
                <!-- <button @click='login()' type="button" class="block w-full bg-white bg-opacity-80 mt-4 py-2 rounded-2xl text-black font-semibold mb-2">Sign in</button> -->
                <button v-if="!clicked" @click='login()' class="btn w-full bg-white hover:bg-gray-400 bg-opacity-80 mt-4 py-2 rounded-2xl text-black font-semibold mb-2">Sign in</button>
                <button v-else class="btn loading w-full bg-white bg-opacity-80 text-black font-semibold rounded-2xl mt-4 mb-2 py-2">Loading</button>
                <span @click='forgotPassword()' class="text-sm ml-2 hover:text-blue-300 cursor-pointer text-white">Forgot Password?</span><br><br>
                <span @click='register()' class="text-sm ml-2  hover:text-blue-300 cursor-pointer text-white">Create an Account</span>
            </form>
            <p class="text-center mt-4 text-sm text-white">By clicking on "Sign in" you agree to <br>
                <a class="underline text-white visited:text-indigo-400" href="#">Terms of Service</a> | <a class="underline text-white visited:text-indigo-400" href="#"> Privacy Policy </a>
            </p>
        </div>
        </div>
        <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
            <video class="min-w-full min-h-full absolute object-cover" src="../vid1.mp4" type="video/mp4" autoplay muted loop></video>
        </div>
    </div>
</template>
<script>
// import UserService from '../services/UserService'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'

export default {
    name: "Login",
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
                password: "",
            },
            errMsg: "",
            clicked: false,
        }
    },
    mounted(){
    },
    methods: {
        login() {
            // check minimum password characters
            // check valid email format
            // check matching passwords
            this.clicked = true
            const db = getDatabase()
            signInWithEmailAndPassword(getAuth(), this.input.email, this.input.password)
            .then((data) => {
                console.log("Successfully signed in!")
                console.log(getAuth().currentUser.displayName)
                // console.log(auth.currentUser)
                this.clicked = true
                this.$router.push('/loginAs')
            })
            .catch((error) => {
                this.clicked = false
                console.log(error.code)
                switch (error.code) {
                    case "auth/invalid-email":
                        this.errMsg = "Invalid email, try again.";
                        break;
                    case "auth/user-not-found":
                        this.errMsg = "Account does not exist, please register an account.";
                        break;
                    case "auth/wrong-password":
                        this.errMsg = "Incorrect password, try again.";
                        break;
                    default:
                        this.errMsg = "Email or password was incorrect";
                        break;
                }
            })
        },

        register(){
            this.$router.push('/register')
        },
        toggleReadMore(){
            this.readMore = !this.readMore
        },
        forgotPassword(){
            this.$router.push('/forgotpassword')
        }
    }
}
</script>
<style>
    input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: black;
            opacity: 1; /* Firefox */
    }
</style>