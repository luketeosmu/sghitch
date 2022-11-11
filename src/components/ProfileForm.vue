<template lang="">
    <div>
        <div class="avatar flex justify-center mt-8">
            <div class="w-40 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                <img v-if="item.imageUrl" :src="item.imageUrl" contain style="width:100%;height:100%;object-fit:cover"/>
                <img v-else src="https://placeimg.com/192/192/people" />
            </div>
        </div>
        <div class="flex justify-center mb-4">
            <span class="text-center text-3xl text-black font-roboto font-semibold bg-white bg-opacity-90 rounded-lg py-1 px-2 mb-4 max-w-xs w-full mt-4">
                {{ item.displayName }}
            </span>              
        </div>
        <form>
            <div class="form-control mb-4">
                
                <h1 class="text-center text-white text-3xl mb-4"> Leave a review </h1>
                <div class="rating rating-lg flex justify-center">
                    <input type="radio" name="rating-9" class="rating-hidden" />
                    <input type="radio" name="rating-9" class="mask mask-star-2 bg-yellow-500" />
                    <input type="radio" name="rating-9" class="mask mask-star-2 bg-yellow-500"  checked />
                    <input type="radio" name="rating-9" class="mask mask-star-2 bg-yellow-500" />
                    <input type="radio" name="rating-9" class="mask mask-star-2 bg-yellow-500" />
                    <input type="radio" name="rating-9" class="mask mask-star-2 bg-yellow-500" />
                </div>
                <label class="label">
                    <span class="label-text text-white text-xl ml-10 mr-10">Review</span>
                </label> 
                <textarea v-model="reviewText" class="textarea textarea-bordered h-30 ml-10 mr-10" placeholder=""></textarea>
        
                <button type="button" @click="addReview()" class="btn bg-slate-600 btn btn-ghost hover:bg-slate-700 bg-opacity-90 text-white mb-8 mt-5 md:mt-5 md:ml-10 mr-10"> Submit Review </button>
                
            </div>
        </form>
        
        <div class="overflow-x-auto md:ml-10 mr-10">
            <table class="table w-full">
                <tbody>
                <!-- row 1 -->
                <tr>
                    <td>
                    <div class="flex items-center space-x-3">
                        <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                                <!-- IMG --> Image
                            </div>
                        </div>
                        <div>
                            <div class="font-bold">Display Name</div>
                            <div class="text-sm opacity-50">
                                <div class="rating rating-lg">
                                    <input v-model="reviewRating" v-bind:value="0" type="radio" name="rating-10" class="rating-hidden" checked/>
                                    <input v-model="reviewRating" v-bind:value="1" type="radio" name="rating-10" class="mask mask-star-2 bg-yellow-500" />
                                    <input v-model="reviewRating" v-bind:value="2" type="radio" name="rating-10" class="mask mask-star-2 bg-yellow-500" />
                                    <input v-model="reviewRating" v-bind:value="3" type="radio" name="rating-10" class="mask mask-star-2 bg-yellow-500" />
                                    <input v-model="reviewRating" v-bind:value="4" type="radio" name="rating-10" class="mask mask-star-2 bg-yellow-500" />
                                    <input v-model="reviewRating" v-bind:value="5" type="radio" name="rating-10" class="mask mask-star-2 bg-yellow-500" />
                                </div>
                            </div>
                            <div class="text-sm opacity-50">Review</div>
                        </div>
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import { getAuth, updateProfile } from 'firebase/auth';
import { getDatabase, ref, onValue, push, set} from "firebase/database";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
export default {
    name: "ProfileForm",

    props: {
        reviews: Array
    },

    data() {
        return {
            item:{
                displayName: "",
                image : null,
                imageUrl: null,
                reviewRating: "",
                reviewText: "",
                profileUID: "",
            }
        }
    },

    methods: {
        addReview(){
            const auth = getAuth()
            const db = getDatabase()

            let review = {photoURL: auth.currentUser.photoURL, rating: "test", reviewText: this.item.reviewText, reviewId: auth.currentUser.uid}

            const postListRef = ref(db, 'userReviews/' + this.item.profileUID)
            const newUID = push(postListRef)
            set(newUID, review)
            review.key = newUID.key
            this.reviews.push(review)

            this.item.reviewText = ""
        }
    },
    mounted() {
        // const auth = getAuth()
        // this.item.imageUrl = auth.currentUser.photoURL
        // this.item.displayName = auth.currentUser.displayName
    },
    created: function(){
        if (this.$route.params.uid) {
            const uid = this.$route.params.uid
            this.item.profileUID = uid
            console.log(uid)

            const db = getDatabase();
            const userObj = ref(db, 'userInfo/' + uid);
            onValue(userObj, (snapshot) => {
                const data = snapshot.val();
                this.item.imageUrl = data.email
                this.item.displayName = data.displayName
            });
        }
            // this.fetchCustomers();
        }
}
</script>
<style lang="">

</style>