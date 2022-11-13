<template>
    <div class="h-screen flex grid grid-cols-1 sm:grid-cols-2 bg-no-repeat bg-cover bg-bottom bg-home-background ">
        <div class="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <div class="card w-96 p-12 bg-slate-700 bg-opacity-95">
            <form>
                <h1 class="text-white font-bold font-sans text-3xl mb-7 text-center">Register</h1>
                <div class="flex items-center border-2 py-2 px-3 rounded-2xl border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input @keyup.enter='register()' @blur="validateEmail()" v-model.lazy="input.email" class="pl-2 outline-none border-none bg-inherit text-white font-medium" type="email" name="email" placeholder="Email Address" required/>
                </div>
                <span class="floating-placeholder text-red-400" v-if="errorMsg.email">{{errorMsg.email}}</span>

                <div class="flex items-center border-2 py-2 px-3 rounded-2xl mt-2 border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>
                    <input @keyup.enter='register()' @blur="validateFirstName()" v-model.lazy="input.firstName" class="pl-2 outline-none border-none bg-inherit text-white font-medium" type="text" name="firstname" placeholder="First Name" required/>
                </div>
                <span class="text-red-400" v-if="errorMsg.firstName">{{errorMsg.firstName}}</span>

                <div class="flex items-center border-2 py-2 px-3 rounded-2xl mt-2 border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>
                    <input @keyup.enter='register()' @blur="validateLastName()" v-model.lazy="input.lastName" class="pl-2 outline-none border-none bg-inherit text-white font-medium" type="text" name="lastname" placeholder="Last Name" required/>
                </div>
                <span class="text-red-400" v-if="errorMsg.lastName">{{errorMsg.lastName}}</span>

                <div class="flex items-center border-2 py-2 px-3 rounded-2xl mt-2 border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="black">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    <input @keyup.enter='register()' @blur="validatePassword()" v-model.lazy="input.password" class="pl-2 outline-none border-none bg-inherit text-white font-medium" type="password" name="" placeholder="Password" required/>
                </div>
                <span class="text-red-400" v-if="errorMsg.password">{{errorMsg.password}}</span>

                <div class="flex items-center border-2 py-2 px-3 rounded-2xl mt-2 border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="black">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    <input @keyup.enter='register()' @blur="validateCfmPassword()" v-model.lazy="input.confirmPassword" class="pl-2 outline-none border-none bg-inherit text-white font-medium" type="password" name="" placeholder="Confirm Password" required/>
                </div>
                <span class="text-red-400" v-if="errorMsg.confirmPassword">{{errorMsg.confirmPassword}}</span>

                <!-- <div class="flex items-center border-2 py-2 px-3 rounded-2xl border-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="h-5 w-5 text-yellow-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <input @keyup.enter='register()' v-model.lazy="input.mobileNumber" class="pl-2 outline-none border-none bg-inherit" pattern="[0-9]{8}" type="tel" name="" placeholder="Mobile Number" />
                </div> -->
                <!-- <button @click='register()' type="button" class="block w-full bg-white bg-opacity-80 mt-4 py-2 rounded-2xl text-black font-semibold mb-2">Sign up</button> -->
                <div v-show="isHidden" class="alert alert-error shadow-lg mt-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Error! There are still fields that are incomplete</span>
                    </div>
                </div>
                <button v-if="!clicked" @click='register()' type="button" class="btn w-full hover:bg-gray-400 bg-white bg-opacity-80 mt-4 py-2 rounded-2xl text-black font-semibold mb-2">Sign up</button>
                <button v-else type="button" class="btn loading w-full bg-white bg-opacity-80 mt-4 py-2 rounded-2xl text-black font-semibold mb-2">Loading</button>
                <span @click='login()' class="text-sm ml-2 hover:text-blue-300 cursor-pointer text-white">Already have an account? Login here! </span> <br><br>
            </form>
            <p class="text-center mt-4 text-sm text-white">By clicking on "Sign up" you agree to <br>
                <a class="underline text-white visited:text-indigo-300" href="#">Terms of Service</a> | <a class="underline text-white visited:text-indigo-300" href="#"> Privacy Policy </a>
            </p>
        </div>
        </div>
        </div>
        <!-- <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
            <video class="min-w-full min-h-full absolute object-cover" src="../vid2.mp4" type="video/mp4" autoplay muted loop></video>
        </div> -->
</template>
<script>
// import UserService from '../services/UserService'
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'
import { doc, setDoc, getFirestore } from 'firebase/firestore'
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
                email: "",
                firstName: "",
                lastName: "",
                password: "",
                confirmPassword: "",
            },
            errorMsg: [],
            checkErrorArr: false,
            formIsValid: false,
            isHidden: false,
            clicked: false,
        }
    },
    mounted(){
        sessionStorage.removeItem("user");
        localStorage.clear();
    },

    methods: {
        register() {
            // check minimum password characters
            // check valid email format
            // check matching passwords
            this.clicked = true
            for(let msg in this.errorMsg){
                if(this.errorMsg[msg] == ""){
                    this.checkErrorArr = true
                }
                else{
                    this.checkErrorArr = false
                }
            }

            if(this.input.email != "" && this.input.firstName != "" && this.input.lastName != "" && this.input.password != "" && this.input.confirmPassword != ""){
                this.formIsValid = true
            }

            if(this.formIsValid && this.checkErrorArr){

                 //hide error box
                 this.isHidden = false

                const auth = getAuth()
                const displayName = this.input.firstName + " " + this.input.lastName

                createUserWithEmailAndPassword(getAuth(), this.input.email, this.input.password)
                .then((res) => {
                    updateProfile(auth.currentUser, {
                        displayName: displayName, photoURL: "https://firebasestorage.googleapis.com/v0/b/hitcher-9ae90.appspot.com/o/userImg%2Fhitcher.png?alt=media&token=e95fe14f-0c0c-434a-a686-30540beb0487"
                    }).then((res) => {
                        const db = getDatabase()
                        set(ref(db, 'userTypes/' + auth.currentUser.uid), {
                            type: "hitcher"
                        })
                        let user_input = {
                            email: this.input.email,
                            displayName: displayName,
                            photoURL: "https://firebasestorage.googleapis.com/v0/b/hitcher-9ae90.appspot.com/o/userImg%2Fhitcher.png?alt=media&token=e95fe14f-0c0c-434a-a686-30540beb0487",
                        }
                        set(ref(db, 'userInfo/' + auth.currentUser.uid), user_input)
                        .then(() => {
                            sendEmailVerification(auth.currentUser)
                            .then(() => {
                                this.clicked = false
                                auth.currentUser.emailVerified = false
                                this.$router.push('/login')
                            })
                        })
                    })
                })
                .catch((error) => {
                    this.clicked = false
                    console.log(error.code)
                    // alert(error.message)
                })
            } else {
                this.clicked = false
                this.isHidden = true
            }
        },

        login(){
            this.$router.push('/login')
        },

        validateEmail() {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.input.email)) {
                this.errorMsg['email'] = 'Please enter a valid email address';
            } else {
                this.errorMsg['email'] = '';
            }
        },

        validateFirstName() {
            if (!/^[A-Za-z]+$/.test(this.input.firstName) || this.input.firstName.trim().length < 3) {
                this.errorMsg['firstName'] = 'Please enter a valid first name';
            } else {
                this.errorMsg['firstName'] = '';
            }
        },

        validateLastName() {
            if (!/^[A-Za-z]+$/.test(this.input.lastName) || this.input.lastName.trim().length < 2) {
                this.errorMsg['lastName'] = 'Please enter a valid last name';
            } else {
                this.errorMsg['lastName'] = '';
            }
        },

        validatePassword() {
            if (this.input.password.trim().length < 6) {
                this.errorMsg['password'] = 'Password is too short';
            } else if (this.input.password.trim().length > 20) {
                this.errorMsg['password'] = 'Password is too long';
            } else if (this.input.password.trim().search(/\d/) == -1) {
                this.errorMsg['password'] = 'Password needs to contain at least 1 number';
            } else if (this.input.password.trim().search(/[a-zA-Z]/) == -1) {
                this.errorMsg['password'] = 'Password needs to contain at least 1 letter';
            } else if (this.input.password.trim().search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
                this.errorMsg['password'] = 'Special characters not allowed';
            } else {
                this.errorMsg['password'] = '';
            }
        },

        validateCfmPassword() {
            if (this.input.password != this.input.confirmPassword) {
                this.errorMsg['confirmPassword'] = 'The password confirmation does not match';
            } else {
                this.errorMsg['confirmPassword'] = '';
            }
            console.log(this.errorMsg)
        },
    }
}
</script>
<style>
        input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                    color: black;
                    opacity: 1; /* Firefox */
        }
</style>