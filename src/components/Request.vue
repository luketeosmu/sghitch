<template lang="">
    <div>
        <div v-if="requests.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            <div  v-for="request in requests">
                <a class="card relative p-6 mx-5 mb-5 w-72 h-44 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-red-200">
                    <ul class="text-lg font-bold mb-3">
                        <li>Time: {{ request.time}}</li>
                        <li>Pax: {{ request.pax }} persons</li>
                        <li class="font-normal text-sm">Hitcher: {{ request.hitcher }}</li>
                    </ul>
                    <div class="inline-flex items-center mb-5">
                        <button href="#" class= " py-2 px-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    From: {{ request.from }}
                        </button>
                        <svg aria-hidden="true" class="mx-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <button href="#" class= " py-2 px-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                To: {{ request.to }}
                        </button>
                    </div>
                </a>
            </div>
        </div>
        <div v-else class="text-center justify-center items-center">
            <span class="text-center text-xl">No current ride requests</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "Request",
    props: {
        favourite: String
    },
    components: {
    },
    data() {
        return {
            //use Favourite to GET all request from "Woodlands to Tampines"
            // requests: [],
            requests: [
                    {
                        hitcher: "Luke Teo",
                        time: "08:00",
                        pax: 2,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "Shaun Ting",
                        time: "10:00",
                        pax: 3,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "Ali baba",
                        time: "12:00",
                        pax: 4,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "John Wick",
                        time: "12:00",
                        pax: 4,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "Jennie Kim",
                        time: "12:00",
                        pax: 4,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "KIm Jong Kook",
                        time: "12:00",
                        pax: 4,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "Kimchi Jigae",
                        time: "12:00",
                        pax: 4,
                        from: "730308",
                        to: "529498"
                    },
                    {
                        hitcher: "Buddae Jigae",
                        time: "12:00",
                        pax: 4,
                        from: "730308",
                        to: "529498"
                    },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>