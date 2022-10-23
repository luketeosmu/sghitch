<template lang="">
    <div>
        <div v-if="requests.length != 0" class="grid grid-rows-8">
            <div  v-for="request in requests">
                <label :for="from + to + request.user" class="relative inline-flex w-96 p-2 mx-1 my-3 bg-gray-800 text-white rounded-md border border-slate-700 shadow-md hover:bg-slate-500 cursor-pointer text-center">
                    <div class="flex flex-col text-xs sm:text-base font-light mb-2">
                        <div class="inline-flex ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-6 sm:h-6 sm:mt-1 mx-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="mt-1">{{ setTimeStr(request.time) }}</span>
                        </div>
                        <div v-if="this.user.type != 'hitcher'" class="inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-6 sm:h-6 sm:mt-1 ml-1 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <span class="mt-1">{{ request.pax }} </span>
                        </div>
                        <div v-else>Available seats: {{ request.available }} persons</div>
                    </div>
                    <div class="text-xs sm:text-xl font-base mt-3 ml-3">
                        <!-- <div>From: {{ request.from }}</div> -->
                        <div class="inline-flex ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mt-1 sm:w-6 sm:h-6 mx-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                            </svg>
                            {{ request.to }} 
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 mt-4 absolute right-5 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>

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
                <input type="checkbox" :id="from + to + request.user" class="modal-toggle" />
                <label :for="from + to + request.user" class="modal cursor-pointer">
                <label class="modal-box relative lg:w-1/3 2xl:w-1/4" for="">
                    <ul class="text-xl mb-2">
                        <div v-if="this.user.type == 'driver'" class="font-bold text-2xl">Hitcher: {{ request.user }}</div>
                        <div v-else class="font-bold text-2xl">Driver: {{ request.user }}</div>
                        <div class="font-bold text-2xl">Rating: {{ request.rating }}/5</div>
                        <div>Time: {{ request.time}}</div>
                        <div v-if="this.user.type != 'hitcher'">Pax: {{ request.pax }} persons</div>
                        <div v-else>Available seats: {{ request.available }} persons</div>
                        <div v-if="showFrom">From: {{ request.from }}</div>
                        <div v-if="showDest"> Destination: {{ request.to }} </div>
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

export default {
    name: "Request",
    props: {
        requests: Array,
        showDest: Boolean,
        showFrom: Boolean,
        from: String,
        to: String,
    },
    components: {
    },
    data() {
        return {
            user: {
                type: "driver"
            },
            validReq: []
        }
    },
    mounted() {
      
    },
    methods: {
        chat() {
            this.$router.push('/chat')
        },
        setTimeStr(time) {
            let str = String(time)
            let hours = str.split(":")[0]
            let minutes = str.split(":")[1]
            let ampm = hours >= 12 ? 'PM' : 'AM';
            let timeStr = hours + ':' + minutes + ' ' + ampm;
            return timeStr
        },
        
    }
}
</script>
<style lang="">
    
</style>