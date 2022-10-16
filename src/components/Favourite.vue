<template lang="">
    <div>
        <div v-if='favourites.length != 0' v-for="favourite in favourites">
            <a class="relative mb-5 mx-3 p-3 pt-12 bg-yellow-100 rounded-2xl flex justify-center hover:bg-yellow-200 cursor-pointer" >
                <h3 class="absolute top-0 font-bold text-2xl font-sans mb-3 ml-5 text-center" id="favourite">{{ favourite }}</h3>
                <!-- <button class="btn btn-square btn-xs btn-warning absolute top-2 right-5 font-black" @click="minimize(favourite)"> X </button> -->
                <label class="btn btn-circle btn-xs swap swap-rotate absolute top-2 right-5">
  
                    <!-- this hidden checkbox controls the state -->
                    <input type="checkbox"  @click="minimize(favourite)"/>

                    <!-- close icon -->
                    <svg class="w-4 h-4 swap-off fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                    
                    <!-- hamburger icon -->
                    <svg class="w-4 h-4 swap-on fill-current " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                    
                </label>
                <div :id="favourite">
                    <Request :requests="requests" :showDest="false"/>
                    <button @click='showAll(favourite)' type="button" class="btn-sm btn-ghost block bg-yellow-300 rounded-xl text-black font-semibold absolute bottom-1/2 right-5 md:bottom-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </a>
        </div>
        <div v-else class="flex justify-center items-center"> 
            <h3 class="text-center text-2xl">No favourites to display</h3>
            <button @click='addFavourite()' type="button" class="block bg-yellow-300 p-3 ml-5 rounded-2xl text-black font-semibold" to="newReq">Add Favourite</button>
        </div>
    </div>
</template>
<script>
import Request from "../components/Request.vue"

export default {
    name: "Favourite",
    props: {},
    components: {
        Request,
    },
    methods: {
        minimize(favourite) {
            var div = document.getElementById(favourite)
            if (div.style.display === "none") {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        },
        showAll(favourite) {
            this.$router.push('./showall/' + favourite)
        }
    },
    data() {
        return {
            favourites: ["Woodlands to Tampines", "SMU to Woodlands"],
            requests: [
                    {
                        hitcher: "Luke Teo",
                        rating: 5,
                        time: "08:00",
                        pax: 2,
                        available: 2,
                        from: "Woodlands",
                        to: "Tampines"
                    },
                    {
                        hitcher: "Shaun Ting",
                        rating: 5,
                        time: "10:00",
                        pax: 3,
                        available: 2,
                        from: "Woodlands",
                        to: "Tampines"
                    },
                    {
                        hitcher: "Ali baba",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        available: 2,
                        from: "Woodlands",
                        to: "Tampines"
                    },
                    {
                        hitcher: "John Wick",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        available: 2,
                        from: "Woodlands",
                        to: "Tampines"
                    },
                    {
                        hitcher: "Jennie Kim",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        available: 2,
                        from: "Woodlands",
                        to: "Tampines"
                    },
                    {
                        hitcher: "KIm Jong Kook",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        available: 2,
                        from: "Woodlands",
                        to: "Tampines"
                    },
                    {
                        hitcher: "Kimchi Jigae",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        available: 2,
                        from: "Woodlands",
                        to: "Tampines"
                    },
                    {
                        hitcher: "Buddae Jigae",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        available: 2,
                        from: "Woodlands",
                        to: "Tampines"
                    },
            ]
            // favourites: []
            
        }
    },
    
}
</script>
<style lang="">
    
</style>