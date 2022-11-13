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
        <div class="flex justify-center">
            <button type="button" @click="show()" class="btn bg-slate-600 btn btn-ghost hover:bg-slate-700 bg-opacity-90 text-white mb-8 mt-5 md:mt-5 md:ml-10 mr-10"> Leave a review </button>
        </div>
        <form v-show="isHidden">
            <div class="form-control mb-4 bg-white bg-opacity-90 rounded-lg ml-10 mr-10">

                <h1 class="text-center text-black text-3xl mb-4 pt-4"> Click the stars to give a rating! </h1>
                <div class="rating rating-lg flex justify-center">
                    <input v-model="item.reviewRating" v-bind:value="1" type="radio" name="rating-0" class="mask mask-star-2 bg-yellow-500" checked/>
                    <input v-model="item.reviewRating" v-bind:value="2" type="radio" name="rating-0" class="mask mask-star-2 bg-yellow-500" />
                    <input v-model="item.reviewRating" v-bind:value="3" type="radio" name="rating-0" class="mask mask-star-2 bg-yellow-500" />
                    <input v-model="item.reviewRating" v-bind:value="4" type="radio" name="rating-0" class="mask mask-star-2 bg-yellow-500" />
                    <input v-model="item.reviewRating" v-bind:value="5" type="radio" name="rating-0" class="mask mask-star-2 bg-yellow-500" />
                </div>
                <label class="label">
                    <span class="label-text text-black text-xl ml-10 mr-10">Review</span>
                </label> 
                <textarea v-model="item.reviewText" class="textarea textarea-bordered h-24 ml-10 mr-10" placeholder=""></textarea>
        
                <button type="button" @click="addReview()" class="btn bg-slate-600 btn btn-ghost hover:bg-slate-700 bg-opacity-90 text-white mb-8 mt-5 md:mt-5 md:ml-10 mr-10"> Submit Review </button>
                
            </div>
        </form>
        
        <div class="overflow-x-auto ml-10 mr-10 mb-10">
            <table v-if="reviews.length != 0" class="table w-full">
                <tbody>
                <!-- row 1 -->
                <tr v-for="review in reviews">
                    <td>
                    <div class="flex items-center space-x-3">
                        <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                                <img :src="review.photoURL"/>
                            </div>
                        </div>
                        <div>
                            <div class="font-bold">{{review.displayName}}</div>
                            <div class="text-sm opacity-50">
                                <div class="rating rating-lg">
                                    <template v-for="index in 5" :key="index">
                                        <input v-if="review.rating == index" type="radio" :name="'rating-' + index" class="mask mask-star-2 bg-yellow-500" checked/>
                                        <input v-else type="radio" :name="rating-{index}" class="mask mask-star-2 bg-yellow-500"/>
                                    </template>
                                </div>
                            </div>
                            <div class="text-sm opacity-50">{{review.reviewText}}</div>
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
import { getDatabase, ref, onValue, push, set, get, child} from "firebase/database";
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
            },
            reviews: [],
            isHidden: false
        }
    },

    methods: {
        addReview(){
            const auth = getAuth()
            const db = getDatabase()

            let review = {photoURL: auth.currentUser.photoURL, displayName: auth.currentUser.displayName, rating: this.item.reviewRating, reviewText: this.item.reviewText, reviewId: auth.currentUser.uid}

            const postListRef = ref(db, 'userReviews/' + this.item.profileUID)
            const newUID = push(postListRef)
            set(newUID, review)
            review.key = newUID.key
            this.reviews.push(review)

            this.item.reviewText = ""

            alert("Thanks for the review!")
            location.reload()
        },
        show(){
            if(this.isHidden){
                this.isHidden = false
            }else{
            this.isHidden = true
            }
        }
    },
    mounted() {
        const dbRef = ref(getDatabase())
        get(child(dbRef, `userReviews/${this.item.profileUID}`)).then((snapshot) => {
            if(snapshot.exists()) {
                snapshot.forEach((childSnapshot) => {
                    let childData = childSnapshot.val();
                    childData.key = childSnapshot.key
                    this.reviews.push(childData)
                    console.log(this.reviews)
                });
            } else {
                console.log("No data available")
            }
        }).catch((error) => {
            console.error(error)
        })
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
                this.item.imageUrl = data.photoURL
                this.item.displayName = data.displayName
            });
        }
            // this.fetchCustomers();
        }
}
</script>
<style lang="">

</style>