<template>
    <div>
        <div class="avatar flex justify-center mt-8 mb-4">
            <div class="w-40 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                <img :src="item.imageUrl" contain style="width:100%;height:100%;object-fit:cover"/>
            </div>
        </div>
        <div class="flex justify-center mb-4">
            <button type="button" @click="browse()" class="btn bg-slate-600 btn btn-ghost hover:bg-slate-700 bg-opacity-90 text-white mr-4"> Browse </button>
            <input style="display:none" ref="input" type="file" accept="image/*" @change="onChange" />
            <button type="button" @click="onUpload()" class="btn bg-slate-600 btn btn-ghost hover:bg-slate-700 bg-opacity-90 text-white"> Save </button>
        </div> 
        <div class="form-control flex justify-center items-center mb-5 mt-5 mx-5">
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
        <div class="alert alert-success shadow-lg" v-if="this.updateSuccess">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Your purchase has been confirmed!</span>
            </div>
        </div>
        <div class="form-control flex justify-center items-center mb-5 mx-5">
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
import { getStorage, ref as ref_storage, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { getDatabase, ref as ref_database, set } from 'firebase/database'
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
        },
        
        browse() {
            this.$refs.input.click()  
        },

        onChange(e) {
            const file = e.target.files[0]
            this.image = file
            this.item.imageUrl = URL.createObjectURL(file)
        },

        onUpload(){

            const auth = getAuth()
            const storage = getStorage()
            const userId = auth.currentUser.uid
            
            //read file
            const file = document.querySelector('input[type=file]').files[0]

            // Create the file metadata
            /** @type {any} */
            const metadata = {
                contentType: 'image/jpeg'
            };
            
            const imgRef = ref_storage(storage, 'userImg/' + 'ProfileImg_' + userId);
            
            const uploadTask = uploadBytesResumable(imgRef, file, metadata);

            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                }
            }, 
            (error) => {
                switch (error.code) { 
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;
                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
                }
            }, 
            () => {
                // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        updateProfile(auth.currentUser, {
                        photoURL: downloadURL
                        }).then(() => { 
                            const db = getDatabase()
                            let user_input = {
                            email: auth.currentUser.email,
                            displayName: auth.currentUser.displayName,
                            photoURL: downloadURL,
                        }
                        set(ref_database(db, 'userInfo/' + auth.currentUser.uid), user_input)
                            }).then (() => {
                                alert("Successfully updated details!")
                                location.reload()
                            }).catch((error) => {
                                console.log(error.code)
                                console.log(error.message)
                                console.log(error)
                                alert("Failed to update details. Please try again.")    
                            });
                            console.log('File available at', downloadURL);
                    });
                }
            );      
        },
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
            },
            updateSuccess: false,
            item:{
                image : null,
                imageUrl: null
            }
        }
    },
    mounted() {
        const auth = getAuth()
        this.input.email = auth.currentUser.email
        this.input.displayName = auth.currentUser.displayName
        this.item.imageUrl = auth.currentUser.photoURL
    },
}


</script>

<style>

</style>