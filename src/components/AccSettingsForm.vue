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
            <button v-if="!loading" type="button" @click="onUpload()" class="btn bg-slate-600 btn btn-ghost hover:bg-slate-700 bg-opacity-90 text-white"> Save </button>
            <button v-else type="button" class="btn loading bg-slate-600 btn btn-ghost hover:bg-slate-700 bg-opacity-90 text-white"> Saving... </button>
        </div> 
        <div class="form-control flex justify-center items-center mb-5 mt-5 mx-5">
            <span class="text-center text-3xl text-black font-roboto font-semibold bg-white bg-opacity-90 rounded-lg py-1 px-2 mb-5 max-w-lg w-full">
                Personal Info
            </span>
            <form class="bg-white bg-opacity-90 rounded-lg p-5 max-w-lg w-full">
                <label class="label">
                    <span class="label-text">Email Address </span>
                </label>
                <input @blur="validateEmail()" v-model="input.email" type="email" class="input input-bordered w-full" required />
                <span class="floating-placeholder text-red-400" v-if="errorMsg.email">{{errorMsg.email}}</span>

                <label class="label">
                    <span class="label-text">Display Name </span>
                </label>
                <input @blur="validateDisplayName()" v-model="input.displayName" type="text" placeholder="Type here" class="input input-bordered w-full" required />
                <span class="floating-placeholder text-red-400" v-if="errorMsg.displayName">{{errorMsg.displayName}}</span>

                <label class="label">
                    <span class="label-text">Current Password  </span>
                </label>
                <input v-model="input.password" type="password" placeholder="Enter password to make changes" class="input input-bordered w-full" required />
                
                <div v-show="isHidden" class="alert alert-error shadow-lg mt-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Error! Fields are either unchanged or incomplete</span>
                    </div>
                </div>

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
                <input @blur="validatePassword()" v-model="inputPassword.newPassword" type="password" class="input input-bordered w-full" />
                <span class="text-red-400" v-if="errorMsg_2.password">{{errorMsg_2.password}}</span>

                <label class="label">
                    <span class="label-text">Confirm Password  </span>
                </label>
                <input @blur="validateCfmPassword()" v-model="inputPassword.confirmNewPassword" type="password" class="input input-bordered w-full" />
                <span class="text-red-400" v-if="errorMsg_2.confirmPassword">{{errorMsg_2.confirmPassword}}</span>

                <div v-show="isHidden_2" class="alert alert-error shadow-lg mt-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Error! Fields are either unchanged or incomplete</span>
                    </div>
                </div>
                
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

            for(let msg in this.errorMsg){
                if(this.errorMsg[msg] == ""){
                    this.checkErrorArr = true
                }
                else{
                    this.checkErrorArr = false
                }
            }

            if(this.input.email != "" && this.input.displayName != "" && this.input.currentPassword != ""){
                this.formIsValid = true
            }

            if(this.formIsValid && this.checkErrorArr){

                //hide error box
                this.isHidden = false

                const auth = getAuth()
                const db = getDatabase()

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
                            let user_input = {
                                email: this.input.email,
                                displayName: this.input.displayName,
                                photoURL: auth.currentUser.photoURL
                            }
                            set(ref_database(db, 'userInfo/' + auth.currentUser.uid), user_input)
                            .then(() => {
                                location.reload()
                            })
                        })
                    })
                }).catch((error) => {
                    console.log(error.code)
                    console.log(error.message)
                    console.log(error)
                })
            }else{
                this.clicked = false
                this.isHidden = true
            }
        },
        updatePassword(){

            for(let msg in this.errorMsg_2){
                if(this.errorMsg_2[msg] == ""){
                    this.checkErrorArr_2 = true
                }
                else{
                    this.checkErrorArr_2 = false
                }
            }

            if(this.inputPassword.currentPassword != "" && this.inputPassword.newPassword != "" && this.inputPassword.confirmNewPassword != ""){
                this.formIsValid_2 = true
            }

            if(this.formIsValid_2 && this.checkErrorArr_2){

                //hide error box
                this.isHidden_2 = false

                if(this.inputPassword.newPassword == this.inputPassword.confirmNewPassword){
                    const auth = getAuth()
                    const credential = EmailAuthProvider.credential(
                        auth.currentUser.email,
                        this.inputPassword.currentPassword
                    )
                    reauthenticateWithCredential(auth.currentUser, credential).then(() => {
                        updatePassword(auth.currentUser, this.inputPassword.newPassword)
                        .then(() => {
                            location.reload()
                        })
                    }).catch((error) => {
                        console.log(error.code)
                        console.log(error.message)
                        console.log(error)
                    })
                } else {
                }
            }else{
                this.clicked_2 = false
                this.isHidden_2 = true
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
            this.loading = true
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
                                this.loading = false
                                location.reload()
                            }).catch((error) => {
                                this.loading = false
                                console.log(error.code)
                                console.log(error.message)
                                console.log(error)  
                            });
                    });
                }
            );  
        },

        validateEmail() {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.input.email)) {
                this.errorMsg['email'] = 'Please enter a valid email address';
            } else {
                this.errorMsg['email'] = '';
            }
        },

        validateDisplayName() {
            if (!/^[A-Za-z\s]+$/.test(this.input.displayName) || this.input.displayName.length < 4) {
                this.errorMsg['displayName'] = 'Please enter a valid display name';
            } else {
                this.errorMsg['displayName'] = '';
            }
        },
        
        validatePassword() {
            if (this.inputPassword.newPassword.trim().length < 6) {
                this.errorMsg_2['password'] = 'Password is too short';
            } else if (this.inputPassword.newPassword.trim().length > 20) {
                this.errorMsg_2['password'] = 'Password is too long';
            } else if (this.inputPassword.newPassword.trim().search(/\d/) == -1) {
                this.errorMsg_2['password'] = 'Password needs to contain at least 1 number';
            } else if (this.inputPassword.newPassword.trim().search(/[a-zA-Z]/) == -1) {
                this.errorMsg_2['password'] = 'Password needs to contain at least 1 letter';
            } else if (this.inputPassword.newPassword.trim().search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
                this.errorMsg_2['password'] = 'Special characters not allowed';
            } else {
                this.errorMsg_2['password'] = '';
            }
        },
        
        validateCfmPassword() {
            if (this.inputPassword.newPassword != this.inputPassword.confirmNewPassword) {
                this.errorMsg_2['confirmPassword'] = 'The password confirmation does not match';
            } else {
                this.errorMsg_2['confirmPassword'] = '';
            }
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
            },

            errorMsg: [],
            checkErrorArr: false,
            formIsValid: false,
            isHidden: false,
            clicked: false,

            errorMsg_2: [],
            checkErrorArr_2: false,
            formIsValid_2: false,
            isHidden_2: false,
            clicked_2: false,

            loading: false,
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