<template lang="">
    <div>
        <div v-if='requests.length > 0'>
            <div class="relative mb-5 mx-3 p-3 py-12 bg-yellow-100 rounded-2xl flex justify-center hover:bg-yellow-200" >
                <label class="btn btn-circle btn-xs swap swap-rotate absolute top-2 right-5">
                <!-- this hidden checkbox controls the state -->
                    <input type="checkbox"  @click="minimize()"/>
                    <!-- close icon -->
                    <svg class="w-4 h-4 swap-off fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                    <!-- hamburger icon -->
                    <svg class="w-4 h-4 swap-on fill-current " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                </label>
                <div id="nearby">
                    <Request :requests="requests" :showDest="true" :id="'nearby'"/>
                    <button @click='showAll()' type="button" class="btn-sm btn-ghost block bg-slate-600 hover:bg-slate-500 rounded-xl text-white font-semibold absolute bottom-1/2 right-5 md:bottom-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                </div>
            </div>
        </div>
        <div v-else class="flex justify-center items-center"> 
            <h3 class="text-center text-2xl">No Hitchers near you at the moment</h3>
            <button @click='newReq()' type="button" class="block bg-yellow-300 p-3 ml-5 rounded-2xl text-black font-semibold" to="newReq">Add Ride Request</button>
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
        },
        showAll() {
            this.$router.push('/showall/nearby')
        }
    },
    data() {
        return {
            // requests: []
            requests: [
                    {
                        user: "Luke Teo",
                        rating: 5,
                        time: "08:00",
                        pax: 2,
                        available: 2,
                        from: "Woodlands",
                        to: "Choa Chu Kang"
                    },
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