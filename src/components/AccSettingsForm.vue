<template>
    <div>
        <!-- <div class="backdrop-blur-[px]">
            <div class="container mx-auto ">
                <div class="inputs w-full max-w-2xl p-6 mx-auto mt-4 mb-4 bg-white bg-opacity-90 rounded-lg">
                    <h1 class="text-3xl text-black">Personal Info: </h1>
                    <form class="mt-6 border-t border-gray-400 pt-4">
                        <div class='flex flex-wrap -mx-3 mb-6'>
                            <div class="w-full">
                            <div class='w-full md:w-full px-3 mb-6'>
                                <label class='text-black text-xl mb-2' for='grid-text-1'>Email Address </label>
                                <input v-model="input.email" class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='email' required>
                            </div>
                            <div class='w-full md:w-full px-3 mb-6'>
                                <label class='text-black text-xl mb-2' >Display Name</label>
                                <input v-model="input.displayName" class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required>
                            </div>
                            <div class='w-full md:w-full px-3 mb-6'>
                                <label class='text-black text-xl mb-2' for='grid-text-2'>Current Password</label>
                                <input v-model="input.password" class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-2' type='password' placeholder="Enter password to make changes" required>
                            </div>

                            <div class="flex justify-end">
                                    <button class="appearance-none btn-ghost bg-slate-700 bg-opacity-50 text-white px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="button" @click="updateInfo">Save changes</button>
                            </div>
                            </div>
                        </div>
                    </form>
                    <h1 class="text-3xl text-black">Change Password: </h1>
                    <form class="mt-6 border-t border-gray-400">
                        <div class='flex flex-wrap -mx-3'>
                            <div class="personal w-full pt-4">
                                
                                <div class='w-full md:w-full px-3'>
                                    <label class='text-black text-xl mb-2'>Current Password</label>
                                    <input v-model="inputPassword.currentPassword" class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='password'  required>
                                    <span @click='forgotPassword()' class="flex justify-end text-sm mt-2 text-black hover:text-black cursor-pointer">Forgot your password? </span>
                                </div>
                                <div class='w-full md:w-full px-3 mb-6'>
                                    <label class='text-black text-xl mb-2'>New Password</label>
                                    <input v-model="inputPassword.newPassword" class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='password'  required>
                                </div>
                                <div class='w-full md:w-full px-3 mb-6'>
                                    <label class='text-black text-xl mb-2'>Confirm Password</label>
                                    <input v-model="inputPassword.confirmNewPassword" class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='password'  required>
                                </div>
                            
                                <div class="flex justify-end">
                                    <button @click="updatePassword" class="appearance-none btn-ghost bg-slate-700 bg-opacity-50 text-white px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="button">Confirm</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div> -->
        <div class="form-control flex justify-center items-center mb-5 mt-5 ">
            <span class="text-center text-3xl text-black font-roboto font-semibold bg-white bg-opacity-90 rounded-lg py-1 px-2 mb-5 max-w-lg w-full">
                Personal Info
            </span>
            <form class="bg-white bg-opacity-90 rounded-lg p-5 max-w-lg w-full">
                <label class="label">
                    <span class="label-text">Email Address </span>
                </label>
                <input v-model="input.email" type="email" class="input input-bordered w-full" required />

                <label class="label">
                    <span class="label-text">Display Name </span>
                </label>
                <input v-model="input.displayName" type="text" placeholder="Type here" class="input input-bordered w-full" required />

                <label class="label">
                    <span class="label-text">Current Password  </span>
                </label>
                <input  v-model="input.password" type="password" placeholder="Enter password to make changes" class="input input-bordered w-full" required />

                <br>
                <button type="button" @click="updateInfo" class="btn bg-slate-600 btn btn-ghost hover:bg-slate-700 bg-opacity-90 text-white mt-5 md:mt-5"> Save Changes </button>

            </form>
        </div>
        
        <div class="form-control flex justify-center items-center mb-5">
            <span class="text-center text-3xl text-black font-roboto font-semibold bg-white bg-opacity-90 rounded-lg py-1 px-2 mb-5 max-w-lg w-full">
                Change Password
            </span>
            <form class="bg-white bg-opacity-90 rounded-lg p-5 max-w-lg w-full">
                <label class="label">
                    <span class="label-text">Current Password </span>
                </label>
                <input v-model="inputPassword.currentPassword" type="password" class="input input-bordered w-full" />
                <label class="label">
                    <span class="label-text-alt"></span>
                    <a href=""><span @click='forgotPassword()' class="label-text-alt ">Forgot Password?</span></a>
                </label>

                <label class="label">
                    <span class="label-text">New Password </span>
                </label>
                <input v-model="inputPassword.newPassword" type="password" class="input input-bordered w-full" />

                <label class="label">
                    <span class="label-text">Confirm Password  </span>
                </label>
                <input v-model="inputPassword.confirmNewPassword" type="password"  class="input input-bordered w-full" />
                
                <br>
                <button  type="button" @click="updatePassword" class="btn bg-slate-600 btn btn-ghost hover:bg-slate-700 bg-opacity-90 text-white mt-5 md:mt-5" > Confirm </button>
    
            </form> 
        </div>
    </div>
</template>

<script>
import { getAuth, EmailAuthProvider, reauthenticateWithCredential, updateProfile, updateEmail, updatePassword } from 'firebase/auth'
import { doc, updateDoc, getFirestore } from "firebase/firestore";
export default {
    name: "AccSettingsForm",
    methods: {
        forgotPassword(){
            this.$router.push('/forgotpassword')
        },
        async updateInfo(){
            const auth = getAuth()
            const credential = EmailAuthProvider.credential(
                auth.currentUser.email,
                this.input.password
            )
            //if empty string or invalid email reject

            reauthenticateWithCredential(auth.currentUser, credential).then(() => {
                updateProfile(auth.currentUser, {
                    displayName: this.input.displayName
                }).then(() => {
                    updateEmail(auth.currentUser, this.input.email)
                    .then(() => {
                        const fs = getFirestore()
                        const dbRef = doc(fs, "users", auth.currentUser.uid);
                        updateDoc(dbRef, {
                            displayName: this.input.displayName,
                            email: this.input.email,
                        }).then(() => {
                            let user_input = {
                                email: this.input.email,
                                displayName: this.input.displayName,
                            }
                            set(ref(db, 'userInfo/' + auth.currentUser.uid), user_input)
                            .then(() => {
                                alert("Successfully updated details!")
                                location.reload()
                            })
                        })
                    })
                })
            }).catch((error) => {
                console.log(error.code)
                console.log(error.message)
                console.log(error)
                alert("Failed to update details. Please try again.")
            })

        },
        updatePassword(){
            if(this.inputPassword.newPassword == this.inputPassword.confirmNewPassword){
                const auth = getAuth()
                const credential = EmailAuthProvider.credential(
                    auth.currentUser.email,
                    this.input.password
                )
                reauthenticateWithCredential(auth.currentUser, credential).then(() => {
                    updatePassword(auth.currentUser, this.inputPassword.newPassword)
                    .then(() => {
                        alert("Successfully updated password!")
                        location.reload()
                    })
                }).catch((error) => {
                    console.log(error.code)
                    console.log(error.message)
                    console.log(error)
                    alert("Failed to update password. Please try again.")
                })
            } else {
                alert("Passwords do not match. Please try again.")
            }
        }
    },
    data () {
        return{
            input: {
                email: "",
                displayName: "",
                password: ""
            },
            inputPassword: {
                currentPassword: "",
                newPassword: "",
                confirmNewPassword: ""
            }
        }
    },
    mounted() {
        const auth = getAuth()
        this.input.email = auth.currentUser.email
        this.input.displayName = auth.currentUser.displayName
    }
}


</script>

<style>

</style>