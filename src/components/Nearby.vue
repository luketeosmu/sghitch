<template lang="">
    <div class="flex justify-center xl:justify-end items-center">
        <div class="relative inline-block shadow-xl rounded-lg px-16 sm:px-24 xl:w-5/6 py-5 overflow-y-auto overflow-x-hidden max-h-[650px] mt-3 border border-solid border-2 border-slate-600 bg-white bg-opacity-90">
            <div class="inline-flex absolute left-0 ml-2" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <h3 class="text-2xl sm:text-3xl font-bold font-roboto text-black z-10"> Nearby</h3>
            </div>
            <div v-if='requests.length > 0' class="flex justify-center mt-10" >
                <label class="btn btn-circle btn-xs swap swap-rotate absolute top-8 right-5 xl:hidden">
  
                <!-- this hidden checkbox controls the state -->
                    <input type="checkbox" @click="minimize()"/>

                    <!-- close icon -->
                    <svg class="w-4 h-4 swap-off fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                    
                    <!-- hamburger icon -->
                    <svg class="w-4 h-4 swap-on fill-current " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                </label>
                <div id="nearby" class="mt-10">
                    <Request :requests="requests" :showDest="true" :from="'nearby'" :to="null" :userType="userType"/>
                    <!-- <button @click='showAll()' type="button" class="btn-xs sm:btn-sm btn-ghost block bg-slate-600 hover:bg-slate-500 rounded-xl text-white font-semibold absolute right-5 bottom-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-5 sm:h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button> -->
                </div>
                <div id="hide" class="inline-flex w-80 sm:w-96 hidden">
                </div>
            </div>
            <div v-else class="flex justify-center text-center py-1 mx-auto mt-10 w-80 sm:w-96 "> 
                <div class="inline-flex">
                    <h3 class="sm:text-2xl">No rides to display</h3>
                    <button @click='newReq()' type="button" class="block bg-black hover:bg-opacity-50 bg-opacity-30 p-2 sm:p-3 ml-2 sm:ml-3 rounded-2xl text-white text-sm font-semibold">Add Request</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Request from "../components/Request.vue"

export default {
    name: "Nearby",
    props: {
        requests: Array,
        userType: String
    },
    components: {
        Request,
    },
    mounted() {
        console.log(this.requests.length)
    },
    methods: {
        newReq() {
            this.$router.push('/newReq')
        },
        minimize() {
            let div = document.getElementById("nearby")
            let hide = document.getElementById("hide")
            if (div.style.display === "none") {
                div.style.display = "block"
                hide.style.display = "none"
            } else {
                div.style.display = "none"
                hide.style.display = "block"
            }
            // console.log(this.date)
            // console.log(this.time)
        },
        showAll() {
            this.$router.push('/showall/nearby')
        },
    },
    data() {
        return {
            date: "",
            time: "",
            // requests: []
            
            
            //GET array of request objects and use v-for to show individual requests
            // favourites: []
        }
    }
}
</script>
<style lang="">
    
</style>