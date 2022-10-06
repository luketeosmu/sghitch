<template lang="">
    <div>
        <div v-if='favourites.length != 0' v-for="favourite in favourites">
            <a class="relative mb-5 mx-3 p-3 pt-12 bg-yellow-100 rounded-2xl flex justify-center hover:bg-yellow-200 cursor-pointer" >
                <h3 class="absolute top-0 font-bold text-2xl font-sans mb-3 ml-5 text-center" id="favourite">{{ favourite }}</h3>
                <button class="btn btn-square btn-xs btn-warning absolute top-2 right-5 font-black" @click="minimize(favourite)"> X </button>
                <div :id="favourite">
                    <Request :favourite="favourite" />
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
    props: {

    },
    components: {
        Request,
    },
    data() {
        return {
            favourites: ["Woodlands to Tampines", "SMU to Woodlands"],
            
            //GET array of request objects and use v-for to show individual requests
            // favourites: []
        }
    },
    methods: {
        minimize(favourite) {
            var div = document.getElementById(favourite)
            if (div.style.display === "none") {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        }
    }
}
</script>
<style lang="">
    
</style>