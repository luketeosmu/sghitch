<template lang="">
    <div>
        <div v-if="requests.length > 0" class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            <div v-for="request in requests">
                <label :for="from + to + this.count" class="card relative p-2 mx-1 my-3 w-44 text-xs sm:w-64 h-30 bg-slate-700 text-white rounded-lg border border-slate-700 shadow-md hover:bg-slate-500 justify-center text-center items-center cursor-pointer">
                    <ul class="text-xs sm:text-lg font-bold mb-2">
                        <li>Time: {{ request.time}}</li>
                        <li v-if="this.user.type != 'hitcher'">Pax: {{ request.pax }} persons</li>
                        <li v-else>Available seats: {{ request.available }} persons</li>
                        <li v-if="showFrom">From: {{ request.from }}</li>
                        <li v-if="showDest"> Destination: {{ request.to }} </li>
                    </ul>
                    <!-- <div class="inline-flex items-center mb-2">
                        <button href="#" class= " py-2 px-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    From: {{ request.from }}
                        </button>
                        <svg aria-hidden="true" class="mx-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <button href="#" class= " py-2 px-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                To: {{ request.to }}
                        </button>
                    </div> -->
                </label>
                <input type="checkbox" :id="from + to + this.count" class="modal-toggle" />
                <label :for="from + to + this.count++" class="modal cursor-pointer">
                <label class="modal-box relative lg:w-1/3 2xl:w-1/4" for="">
                    <ul class="text-xl mb-2">
                        <li v-if="this.user.type == 'driver'" class="font-bold text-2xl">Hitcher: {{ request.user }}</li>
                        <li v-else class="font-bold text-2xl">Driver: {{ request.user }}</li>
                        <li class="font-bold text-2xl">Rating: {{ request.rating }}/5</li>
                        <li>Time: {{ request.time}}</li>
                        <li v-if="this.user.type != 'hitcher'">Pax: {{ request.pax }} persons</li>
                        <li v-else>Available seats: {{ request.available }} persons</li>
                        <li v-if="showFrom">From: {{ request.from }}</li>
                        <li v-if="showDest"> Destination: {{ request.to }} </li>
                    </ul>
                    <button @click='chat()' type="button" class="btn btn-ghost block bg-slate-600 hover:bg-slate-500 px-3 rounded-xl text-white font-semibold absolute right-5 bottom-5 ">Chat</button>
                </label>
                </label>
            </div>
        </div>
        <div v-else class="text-center justify-center items-center">
            <span class="text-center text-xl">No current ride requests</span>
        </div>
    </div>
</template>
<script>
// import { request } from 'http';

export default {
    name: "Request",
    props: {
        requests: Array,
        showDest: Boolean,
        showFrom: Boolean,
        from: String,
        to: String
    },
    components: {
    },
    data() {
        return {
            user: {
                type: "driver"
            },
            count: 0
        }
    },
    methods: {
        chat() {
            this.$router.push('/chat')
        }
        // chat(id) {
        //     if(window.location.pathname == "/showall/nearby") {
        //         this.$router.push('../chat/' + id)
        //     } else {
        //         this.$router.push('./chat/' + id)
        //     }
        // }
    }
}
</script>
<style lang="">
    
</style>