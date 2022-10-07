<template lang="">
    <div>
        <div v-if='requests.length > 0'>
            <a class="relative mb-5 mx-3 p-3 pt-12 bg-yellow-100 rounded-2xl flex justify-center hover:bg-yellow-200 cursor-pointer" >
                <button class="btn btn-square btn-xs btn-warning absolute top-2 right-5 font-black" @click="minimize()"> X </button>
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