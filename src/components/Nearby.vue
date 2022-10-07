<template lang="">
    <div>
        <div v-if='requests.length > 0'>
            <a class="relative mb-5 mx-3 p-3 pt-12 bg-yellow-100 rounded-2xl flex justify-center hover:bg-yellow-200 cursor-pointer" >
                <!-- <button class="btn btn-square btn-xs btn-warning absolute top-2 right-5 font-black" @click="minimize()"> X </button> -->

                <label class="btn btn-circle btn-xs swap swap-rotate absolute top-2 right-5">
                <!-- this hidden checkbox controls the state -->
                    <input type="checkbox"  @click="minimize(favourite)"/>
                    <!-- close icon -->
                    <svg class="w-4 h-4 swap-off fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                    <!-- hamburger icon -->
                    <svg class="w-4 h-4 swap-on fill-current " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                </label>
                <div id="nearby">
                    <Request :requests="requests"/>
                </div>
            </a>
        </div>
        <div v-else class="flex justify-center items-center"> 
            <h3 class="text-center text-2xl">No hitchers near you at the moment</h3>
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
    data() {
        return {
            // requests: []
            requests: [
                    {
                        hitcher: "Luke Teo",
                        rating: 5,
                        time: "08:00",
                        pax: 2,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "Shaun Ting",
                        rating: 5,
                        time: "10:00",
                        pax: 3,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "Ali baba",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "John Wick",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "Jennie Kim",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "KIm Jong Kook",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "Kimchi Jigae",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "Buddae Jigae",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        from: "730308",
                        to: "529498"
                    },
            ]
            
            //GET array of request objects and use v-for to show individual requests
            // favourites: []
        }
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
        }
    }
}
</script>
<style lang="">
    
</style>