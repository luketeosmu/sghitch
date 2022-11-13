<template lang="">
    <div>
        <div v-if="requests.length != 0" class="grid grid-rows-8">
            <div v-for="request in requests">
                <label :for="from + to + request.rid" class="relative inline-flex w-80 sm:w-96 p-2 my-3 bg-gray-800 text-white rounded-md border border-slate-700 shadow-md hover:bg-slate-500 cursor-pointer text-center">
                    <div class="flex flex-col text-xs sm:text-base font-light mb-2">
                        <div class="inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-6 sm:h-6 mt-1 mx-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="mt-1">{{ setTimeStr(request.datetime.split("T")[1]) }}</span>
                        </div>
                        <div v-if="this.userType == 'driver'" class="inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-6 sm:h-6 mt-1 ml-1 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <span class="mt-1">{{ request.pax }} </span>
                        </div>
                        <div v-else class="inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-6 sm:h-6 mt-1 ml-1 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <span class="mt-1">{{ request.pax }} </span>
                        </div>
                        <div v-if="this.userType == 'hitcher'" class="inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-6 sm:h-6 mt-1 ml-1 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                            <span class="mt-1">{{ request.vehicleType }} </span>
                        </div>
                        <!-- <div v-if="this.userType == 'driver'" class="inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-6 sm:h-6 mt-1 ml-1 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                            <span class="mt-1">{{ request.vehiclePreference }} </span>
                        </div> -->
                        
                    </div>
                    <!-- <div class="text-base sm:text-lg font-base my-auto inline-block">
                        <div class="inline-flex">
                            {{ request.startNeighborhood }} 
                        </div>
                        <div class="inline-flex ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 sm:w-6 sm:h-6 ml-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                            </svg>
                            {{ request.destNeighborhood }} 
                        </div>
                    </div> -->
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 mt-4 absolute right-5 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg> -->
                    
                    <div class="inline-flex items-center ml-5 text-sm sm:text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-6 sm:h-6 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {{ request.startNeighborhood }}
                        <!-- <button href="#" class= " py-2 px-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        </button> -->
                        <svg aria-hidden="true" class="mx-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        {{ request.destNeighborhood }}
                        <!-- <button href="#" class= " py-2 px-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        </button> -->
                    </div>
                </label>
                <input type="checkbox" :id="from + to + request.rid" class="modal-toggle" />
                <label :for="from + to + request.rid" class="modal cursor-pointer">
                <label class="modal-box relative w-auto sm:min-w-[400px] bg-gray-800 text-white overflow-x-hidden" for="">
                    <ul class="text-sm sm:text-lg mb-2 font-light ml-3 mr-3">
                        <div v-if="this.userType == 'driver'" class="inline-flex">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="lightgray" class="w-6 h-6 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg> -->
                        
                            <div class="avatar mr-2">
                                <div @click='view(request.uid)' class="w-12 hover:w-16 hover:cursor-pointer rounded-full">
                                    <!-- <img :src="item.imageUrl" contain style="width:100%;height:100%;object-fit:cover"/> -->
                                    <img :src="requestImg(request.uid)" contain style="width:100%;height:100%;object-fit:cover"/>
                                </div>
                            </div>
                            <span style="display: flex; align-items: center;">{{ request.user }}</span>
                            
                        </div>
                        <div v-else class="inline-flex">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="lightgray" class="w-6 h-6 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg> -->
                            <div class="avatar mr-2">
                                <div @click='view(request.uid)' class="w-12 hover:w-16 hover:cursor-pointer rounded-full">
                                    <!-- <img :src="item.imageUrl" contain style="width:100%;height:100%;object-fit:cover"/> -->
                                    <img :src="requestImg(request.uid)" contain style="width:100%;height:100%;object-fit:cover"/>
                                </div>
                            </div>
                            <span style="display: flex; align-items: center;">{{ request.user }}</span>
                        </div>
                            
                        <br>
                        <!-- <div class="font-bold text-2xl">Rating: {{ request.rating }}/5</div> -->
                        <div class="inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="lightgray" class="w-6 h-6 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {{ setTimeStr(request.datetime.split("T")[1]) }}
                        </div>
                        <br>
                        <div class="inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="lightgray" class="w-6 h-6 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                            <span>
                                {{ request.pax }} persons 
                            </span>
                            <button v-if="this.userType == 'hitcher'" class="btn absolute bottom-5 right-5" @click="makeHitcherOffer(request.rid)">Make Offer</button>
                        </div>
                        <br>
                        <div class="inline-flex" v-if="this.userType == 'driver'">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="lightgray" class="w-6 h-6 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            ${{ request.askingPrice }}
                        </div>
                        <br v-if="this.userType == 'driver'">
                        <div class="inline-flex" v-if="this.userType == 'driver'">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="lightgray" class="w-6 h-6 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            {{ request.s_address }} 
                            <svg aria-hidden="true" class="mx-2 w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        {{ request.d_address }} 
                        </div>
                        <br v-if="this.userType == 'driver'">
                        <div v-if="this.userType == 'driver'" class="grid sm:grid-cols-2 gap-x-3">
                            <div class="flex form-control mt-3 sm:mt-0 ">
                                <!-- <div class="tooltip " data-tip="This is the asking price you can provide to other users for them to gauge how much to offer you"> -->
                                <label class="label">
                                    <span class="label-text text-black bg-slate-300 bg-opacity-80 px-2 rounded-lg ">Vehicle Registration Number</span>
                                </label>
                                <!-- </div> -->
                                <input v-model="vehicleNo" type="text" placeholder="e.g. SLPxxxxA" :className="invalidVehicleNo ? 'input input-bordered w-auto sm:w-full text-black bg-opacity-90 border-red-400 border-2' : 'input input-bordered text-black w-auto sm:w-full bg-opacity-90'" />
                            </div>
                            <div class="flex form-control mt-3 sm:mt-0">
                                <div class="tooltip " data-tip="This is the asking price you can provide to other users for them to gauge how much to offer you">
                                <label class="label">
                                    <span class="label-text text-black bg-slate-300 bg-opacity-80 px-2 rounded-lg">Offer Price</span>
                                </label>
                                </div>
                                <input v-model="offerPrice" type="number" placeholder="0.00" :className="invalidPrice ? 'input input-bordered w-auto sm:w-full bg-opacity-90 text-black border-red-400 border-2' : 'input input-bordered text-black w-auto sm:w-full bg-opacity-90'" />
                            </div>
                        </div>
                        <!-- <div v-if="this.userType == 'hitcher'" class="form-control mt-3 mr-5">
                            <div class="input-group text-black">
                                <input v-model="offerPrice" placeholder="$0.00" type="number" className="input input-bordered w-full bg-opacity-90 " />
                            </div>
                        </div> -->
                        <!-- <div class="flex form-control mt-3 sm:mt-0">
                            <div class="tooltip " data-tip="This is the asking price you can provide to other users for them to gauge how much to offer you">
                                <label class="label">
                                    <span class="label-text text-black bg-slate-300 bg-opacity-80 px-2 rounded-lg">Asking Price</span>
                                </label>
                            </div>
                            <input v-model="offerPrice" type="number" placeholder="0.00" :className="invalidPrice ? 'input input-bordered w-auto sm:w-full bg-opacity-90 text-black border-red-400 border-2' : 'input input-bordered text-black w-auto sm:w-full bg-opacity-90'" />
                        </div> -->
                        <div class="flex items-end justify-end text-end">
                            <!-- <button v-if="this.userType == 'hitcher'" @click='makeHitcherOffer()' type="button"  class="btn btn-ghost mt-5 block bg-slate-600 hover:bg-slate-500 px-3 rounded-xl text-white font-semibold">Make Offer</button> -->
                            <button v-if="this.userType == 'driver'"  class="btn btn-sm sm:btn mt-5" @click="makeOffer(request)">Make Offer</button>
                            <!-- <button class="btn" @click="makeHitcherOffer()">Make Offer</button> -->
                        </div>
                    </ul>
                </label>
                </label>
            </div>
        </div>
        <div v-else class="text-center justify-center items-center">
            <span class="text-center text-xl">No current ride requests</span>
        </div>
    </div>
</template>
<script>
// import { request } from 'http';
import { reactive, onMounted, ref } from 'vue';
import { getAuth, signOut } from 'firebase/auth'
import { getDatabase, child, get, update, set, push, ref as storageRef, onValue} from "firebase/database";
// import { } from 'firebase/database';
import { getFirestore, getDoc, setDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore'
export default {
    name: "Request",
    props: {
        requests: Array,
        showDest: Boolean,
        showFrom: Boolean,
        from: String,
        to: String,
        userType: String,
    },
    components: {
    },
    data() {
        return {
            validReq: [],
            offerPrice: "",
            vehicleNo: "",
            invalidPrice: false,
            invalidVehicleNo: false,
            item:{
                imageUrl: null
            },
        }
    },
    mounted() {
    },
    methods: {
        requestImg(uid){
            const db = getDatabase();
            const userObj = storageRef(db, 'userInfo/' + uid);
            onValue(userObj, (snapshot) => {
                const data = snapshot.val();
                this.item.imageUrl = data.photoURL
            });
            return this.item.imageUrl
        },
        makeHitcherOffer(id) {
            // console.log(id)
            this.$router.push('./makeOffer/' + id) 
        },
        setTimeStr(time) {
            let hours = ""
            let minutes = ""
            hours = time.split(":")[0]
            minutes = time.split(":")[1]
            let ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            let timeStr = hours + ':' + minutes + ampm
            return timeStr
        },
        view(uid){
            this.$router.push({name:'Profile', params: { uid }})
        },
        makeOffer(request) {
            // console.log(this.offerPrice)
            //current uid
            //current user displayname
            //time
            //vehicle registration number
            //amount
            if(this.offerPrice == ""){
                this.invalidPrice = true
                return
            } else {
                this.invalidPrice = false
            }
            if(this.vehicleNo.length < 3){
                this.invalidVehicleNo = true
                return
            } else {
                this.invalidVehicleNo = false
            }
            const auth = getAuth()
            let offer = {}
            offer['datetime'] = request.datetime
            offer['vehicleNo'] = this.vehicleNo.toUpperCase()
            offer['uid'] = auth.currentUser.uid
            offer['displayName'] = auth.currentUser.displayName
            offer['askingPrice'] = this.offerPrice
            offer['rid'] = request.rid
            offer['status'] = 'pending'
            offer['requesterId'] = request.uid
            offer['driverName'] = request.user

            // console.log(offer)
            // console.log(request.uid)
            const db = getDatabase();
            const postListRef = storageRef(db, 'hitcherOffers/' + request.uid);
            // console.log(postListRef)
            const newPostRef = push(postListRef);
            // console.log(newPostRef)
            set(newPostRef, offer)
            .then(() => {
                // this.$router.push('/')
                location.reload()
            })
        }
    }
}
</script>
<style lang="">
    
</style>