<template lang="">
    <div class="shadow-xl rounded-2xl p-3 mx-3 mt-5 border border-solid border-2 border-slate-600">
        <div class="inline-flex mx-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
            <h3 class="font-bold text-2xl sm:text-3xl font-sans text-black mx-3 "> Favourites </h3>
        </div>

        <div v-if='favourites.length != 0' v-for="favourite in favourites">
            <div class="relative mb-5 p-3 pt-12 rounded-2xl flex justify-center shadow-xl " >
                <div class="absolute top-0 flex">
                    <div>
                        <h3 class="font-bold text-xl sm:text-2xl font-sans mt-3 text-black" id="favourite">{{ favourite.from }}</h3>
                    </div>
                    <div>
                        <svg @click="swap(favourite)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-5 sm:h-5 mt-5 mx-2 text-center cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>
                    </div>
                    <div>
                        <h3 class="font-bold text-xl sm:text-2xl font-sans mt-3 text-black" id="favourite">{{ favourite.to }}</h3>
                    </div>
                </div>
                <label class="btn btn-circle btn-xs swap swap-rotate absolute top-3 right-5">
  
                    <!-- this hidden checkbox controls the state -->
                    <input type="checkbox"  @click="minimize(favourite.from + favourite.to)"/>

                    <!-- close icon -->
                    <svg class="w-4 h-4 swap-off fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                    
                    <!-- hamburger icon -->
                    <svg class="w-4 h-4 swap-on fill-current " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                    
                </label>
                <div :id="favourite.from + favourite.to">
                    <Request :requests="requests" :showDest="false" :from="favourite.from" :to="favourite.to"/>
                    <button @click='showAll(favourite.from, favourite.to)' type="button" class="btn-xs sm:btn-sm btn-ghost block bg-slate-600 hover:bg-slate-500 rounded-xl text-white font-semibold absolute right-5 bottom-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-5 sm:h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
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
        }
    },
    data() {
        return {
            favourites: [
                {
                    from: "Woodlands",
                    to: "Tampines"
                },
                {
                    from: "Choa Chu Kang",
                    to: "Bras Basar"
                }
            ],
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
        }
    },
    
}
</script>
<style lang="">
    
</style>