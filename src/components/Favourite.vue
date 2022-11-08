<template lang="">
    <div class=" justify-center items-center">
        <div :class="{ 'xl:w-auto': this.user.type == 'hitcher', 'xl:w-5/6': this.user.type == 'driver' }" class="inline-block shadow-xl relative rounded-lg mx-4 px-3 pt-5 overflow-y-auto max-h-[650px] mt-3 border border-solid border-2 border-slate-600 bg-white bg-opacity-90">
            <div class="inline-flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
                <h3 class="font-bold text-2xl sm:text-3xl font-roboto text-black "> Favourites </h3>
            </div>

            <div v-if='favourites.length != 0' v-for="favourite in favourites">
                <div class="flex relative mb-5 px-12 sm:px-20 pt-12 pb-10 rounded-2xl justify-center items-center shadow-xl" >
                    <div class="absolute top-0 flex items-center justify-center">
                        <div>
                            <h3 class="font-bold text-xl sm:text-2xl font-roboto mt-3 text-black" id="favourite">{{ favourite.from }}</h3>
                        </div>
                        <span>
                            <svg @click="swap(favourite)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-5 sm:h-5 mt-4 mx-2 text-center cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                            </svg>
                        </span>
                        <div>
                            <h3 class="font-bold text-xl sm:text-2xl font-roboto mt-3 text-black" id="favourite">{{ favourite.to }}</h3>
                        </div>
                    </div>
                    <div v-if="getValidReq(favourite).length != 0" class="px-1">
                        <label class="btn btn-circle btn-xs swap swap-rotate absolute top-3 right-5">
        
                            <!-- this hidden checkbox controls the state -->
                            <input type="checkbox"  @click="minimize(favourite.from + favourite.to)"/>
    
                            <!-- close icon -->
                            <svg class="w-4 h-4 swap-off fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                            
                            <!-- hamburger icon -->
                            <svg class="w-4 h-4 swap-on fill-current " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                            
                        </label>
                        <div :id="favourite.from + favourite.to">
                            <Request :requests="getValidReq(favourite)" :showDest="false" :from="favourite.from" :to="favourite.to" :userType="this.user.type"/>
                            <!-- <button @click='showAll(favourite.from, favourite.to)' type="button" class="btn-xs sm:btn-sm btn-ghost block bg-slate-600 hover:bg-slate-500 rounded-xl text-white font-semibold absolute right-5 bottom-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-5 sm:h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button> -->
                        </div>
                        <div :id="favourite.from + favourite.to + 'hide'" class="px-1 w-80 sm:w-96 hidden">
                        </div>
                    </div>
                    <div v-else class="flex justify-center items-center w-80 sm:w-96 ">
                        <h3 class="text-center text-base sm:text-2xl">No rides to display</h3>
                        <button @click='newReq()' type="button" class="block bg-black bg-opacity-30 hover:bg-opacity-50 p-2 sm:p-3 ml-2 rounded-2xl text-white text-sm font-semibold">Add Request</button>
                    </div>
                </div>
            </div>
            <div v-else > 
                <div class="flex relative mb-5 px-16 sm:px-20 py-1 justify-center" >
                    <div class="inline-flex xl:mt-48">
                        <h3 class="text-center text-base sm:text-2xl px-2">No favourites to display</h3>
                        <button @click='addFavourite()' type="button" class="block bg-black bg-opacity-30 hover:bg-opacity-50 p-2 sm:p-3 ml-2 rounded-2xl text-white text-sm font-semibold">Add Favourite</button>
                    </div>
             </div>
            </div>
        </div>
    </div>
</template>
<script>
import Request from "../components/Request.vue"
import { getDatabase, ref, query, get, child } from 'firebase/database'
import { getAuth } from 'firebase/auth'

export default {
    name: "Favourite",
    props: {
        requests: Array
    },
    components: {
        Request,
    },
    methods: {
        minimize(favourite) {
            let div = document.getElementById(favourite)
            let hide = document.getElementById(favourite + 'hide')
            if (div.style.display === "none") {
                div.style.display = "block"
                hide.style.display = "none"
            } else {
                div.style.display = "none"
                hide.style.display = "block"
            }
        },
        showAll(from, to) {
            this.$router.push('./showall/' + from + "-" + to)
        },
        swap(favourite) {
            const index = this.favourites.findIndex(obj => {
                return obj.from === favourite.from && obj.to === favourite.to
            })
            console.log(index)
            const temp = this.favourites[index].from 
            this.favourites[index].from = this.favourites[index].to
            this.favourites[index].to = temp
        },
        getValidReq(favourite) {
            let validReq = []
            for(let request of this.requests) {
                if(favourite.from == request.startNeighborhood && favourite.to == request.destNeighborhood) {
                    // console.log(request.from)
                    // console.log(request.to)
                    validReq.push(request)
                }
            }
            return validReq
        },
        addFavourite() {
            this.$router.push('./newfav')
        },
        newReq() {
            this.$router.push('./newReq')
        }
    },
    data() {
        return {
            favourites: [
            ],
            validReq: [],
            user: {
                type: ""
            },
        }
    },
    mounted() {
        const dbRef = ref(getDatabase())
        const auth = getAuth()
        get(child(dbRef, `userFavs/${auth.currentUser.uid}`)).then((snapshot) => {
            if(snapshot.exists()) {
                snapshot.forEach((childSnapshot) => {
                    let childData = childSnapshot.val();
                    childData.key = childSnapshot.key
                    this.favourites.push(childData)
                });
            } else {
                console.log("No data available")
            }
        }).catch((error) => {
            console.error(error)
        })

        get(child(dbRef, `userTypes/${auth.currentUser.uid}`)).then((snapshot) => {
            if (snapshot.exists()){
                if(snapshot.val().type == "hitcher"){
                    this.user.type = "hitcher"
                } else {
                    this.user.type = "driver"
                }
            } else {
                alert("Application encountered a severe issue. Please login again.")
                this.logout()
            }
        }).catch((error) => {
            console.error(error)
            this.logout()
        })
    }
    
}
</script>
<style lang="">
    
</style>