<template lang="">
    <div>
        <div class="avatar flex justify-center mt-8">
            <div class="w-40 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                <img v-if="item.imageUrl" :src="item.imageUrl" contain style="width:100%;height:100%;object-fit:cover"/>
                <img v-else src="https://placeimg.com/192/192/people" />
            </div>
        </div>
        <div class="flex justify-center">
            <span class="text-center text-3xl text-black font-roboto font-semibold bg-white bg-opacity-90 rounded-lg py-1 px-2 mb-4 max-w-xs w-full mt-4">
                {{ item.displayName }}
            </span>              
        </div>
        <div class="flex justify-center mb-4">
            <button type="button" @click="browse()" class="btn bg-slate-600 btn btn-ghost hover:bg-slate-700 bg-opacity-90 text-white mr-6"> Browse </button>
            <input style="display:none" ref="input" type="file" accept="image/*" @change="onChange" />
            <button type="button" @click="onUpload()" class="btn bg-slate-600 btn btn-ghost hover:bg-slate-700 bg-opacity-90 text-white"> Upload </button>
        </div> 
        <div class="overflow-x-auto w-full">
            <table class="table w-full">
                <!-- head -->
                <thead>
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" class="checkbox" />
                    </label>
                    </th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <!-- row 1 -->
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" class="checkbox" />
                    </label>
                    </th>
                    <td>
                    <div class="flex items-center space-x-3">
                        <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            
                        </div>
                        </div>
                        <div>
                        <div class="font-bold">Hart Hagerty</div>
                        <div class="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                    </td>
                    <td>
                    Zemlak, Daniel and Leannon
                    <br/>
                    <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
                    </td>
                    <td>Purple</td>
                    <th>
                    <button class="btn btn-ghost btn-xs">details</button>
                    </th>
                </tr>
                </tbody>
                <!-- foot -->
                <tfoot>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                </tr>
                </tfoot>
                
            </table>
        </div>
    </div>
</template>
<script>
import { getAuth, updateProfile } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
export default {
    name: "ProfileForm",

    data() {
        return {
            item:{
                //...
                displayName: null,
                image : null,
                imageUrl: null
            }
        }
    },

    methods: {

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

            // Upload file and metadata to the object 'images/mountains.jpg'
            
            const imgRef = ref(storage, 'userImg/' + 'ProfileImg_' + userId);
            
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
    mounted() {
        const auth = getAuth()
        this.item.imageUrl = auth.currentUser.photoURL
        this.item.displayName = auth.currentUser.displayName
    },
    created: function(){
        if (this.$route.params.uid) {
            const uid = this.$route.params.uid
            console.log(uid)
        }
            // this.fetchCustomers();
        }
}
</script>
<style lang="">

</style>