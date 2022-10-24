<template lang="">
    <div>
        <div v-if="requests.length != 0" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7">
            <div  v-for="request in requests">
                <label :for="from + to + request.user" class="card relative p-2 mx-1 my-3 w-32 text-xs sm:w-48 h-30 bg-slate-700 text-white rounded-md border border-slate-700 shadow-md hover:bg-slate-500 justify-center items-center cursor-pointer">
                    <ul class="text-xs sm:text-lg font-semibold mb-2">
                        <li v-if="showFrom">From: {{ request.from }}</li>
                        <li v-if="showDest">
                            <div class="inline-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 sm:w-4 sm:h-4 mt-1 sm:mt-2 mx-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                                </svg>
                                {{ request.to }} 
                            </div></li>
                        <li class="inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-5 sm:h-5 sm:mt-1 mx-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {{ request.time}}
                        </li>
                        <li v-if="this.user.type != 'hitcher'" class="inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-5 sm:h-5 sm:mt-1 ml-2 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            {{ request.pax }} 
                        </li>
                        <li v-else>Available seats: {{ request.available }} persons</li>
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
                <input type="checkbox" :id="from + to + request.user" class="modal-toggle" />
                <label :for="from + to + request.user" class="modal cursor-pointer">
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
import { getAuth } from 'firebase/auth'
import { reactive, onMounted, ref } from 'vue';
import { getDatabase, set, push, ref as storageRef, onValue} from "firebase/database";

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
        }
    },
    methods: {
        chat() {
            const auth = getAuth();
            const userId = auth.currentUser.uid
            const theirId = 'XrddKQnIdZf6ey6H2nf27LvYAkD2'

            // XrddKQnIdZf6ey6H2nf27LvYAkD2
            // ricktan@gmail.com
            const db = getDatabase()
            const input = {
                members: {
                    myUser: userId,
                    theirUser: theirId
                }
            }
            const chatRef = storageRef(db, 'chats')
            const newChatID = push(chatRef)
            set(newChatID, input)

            const temp = {
                valid: true
            }

            // add chatUID retrieved to each userUID under userChats
            const userChatRef = storageRef(db, 'userChats/' + userId + '/' + newChatID.key)
            set(userChatRef, temp)

            const theirChatRef = storageRef(db, 'userChats/' + theirId + '/' + newChatID.key)
            set(theirChatRef, temp)
            
            // once pushed, send an 'im interested!' with new messageUID to the chatUID retrieved from the above input, under chatMessages
            const messageRef = storageRef(db, 'chatMessages/' + newChatID.key)
            const newMessageID = push(messageRef)
            const messageInput = {
                message: "I'm interested!",
                sentBy: userId
            }
            set(newMessageID, messageInput);

            this.$router.push('/chat')
        },
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