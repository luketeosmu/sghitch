<template lang="">
    <div>
        
        <div v-if='requests.length > 0' class="shadow-xl rounded-lg  mx-3 p-3 relative mt-3 border border-solid border-2 border-slate-600 bg-white bg-opacity-60">
            <div class="inline-flex mx-3 " >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <h3 class="font-bold text-2xl sm:text-3xl font-sans text-black mx-3"> Nearby</h3>

            </div>
            <div class="flex justify-center p-3 " >
                <label class="btn btn-circle btn-xs swap swap-rotate absolute top-3 right-5">
  
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox"  @click="minimize()"/>

                <!-- close icon -->
                <svg class="w-4 h-4 swap-off fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                
                <!-- hamburger icon -->
                <svg class="w-4 h-4 swap-on fill-current " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                
                </label>
                <div id="nearby">
                    <Request :requests="requests" :showDest="true" :from="'nearby'" :to="null"/>
                    <button @click='showAll()' type="button" class="btn-xs sm:btn-sm btn-ghost block bg-slate-600 hover:bg-slate-500 rounded-xl text-white font-semibold absolute right-5 bottom-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-5 sm:h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div v-else class="flex justify-center items-center"> 
            <h3 class="text-lg sm:text-2xl ml-5">No Hitchers near you at the moment</h3>
            <button @click='newReq()' type="button" class="block bg-yellow-300 p-2 sm:p-3 ml-1 sm:ml-5 rounded-2xl text-black text-sm font-semibold" to="newReq">Add Request</button>
        </div>
    </div>
</template>
<script>
import Request from "../components/Request.vue"

export default {
    name: "Nearby",
    props: {

    },
    components: {
        Request,
    },
    methods: {
        newReq() {
            this.$router.push('/newReq')
        },
        minimize() {
            let div = document.getElementById("nearby")
            if (div.style.display === "none") {
                div.style.display = "block"
            } else {
                div.style.display = "none";
            }
            // console.log(this.date)
            // console.log(this.time)
        },
        showAll() {
            this.$router.push('/showall/nearby')
        }
    },
    data() {
        return {
            date: "",
            time: "",
            // requests: []
            requests: [
                    {
                        user: "Shaun Ting",
                        rating: 5,
                        time: "10:00",
                        pax: 3,
                        available: 2,
                        from: "Woodlands",
                        to: "Tampines"
                    },
                    {
                        user: "Ali baba",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        available: 2,
                        from: "Woodlands",
                        to: "Tampines"
                    },
                    {
                        user: "John Wick",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        available: 2,
                        from: "Woodlands",
                        to: "Tampines"
                    },
                    {
                        user: "Jennie Kim",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        available: 2,
                        from: "Woodlands",
                        to: "Tampines"
                    },
                    {
                        user: "KIm Jong Kook",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        available: 2,
                        from: "Woodlands",
                        to: "Tampines"
                    },
                    {
                        user: "Kimchi Jigae",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        available: 2,
                        from: "Woodlands",
                        to: "Tampines"
                    },
                    {
                        user: "Buddae Jigae",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        available: 2,
                        from: "Woodlands",
                        to: "Tampines"
                    },
            ],
            
            //GET array of request objects and use v-for to show individual requests
            // favourites: []
        }
    }
}
</script>
<style lang="">
    
</style>