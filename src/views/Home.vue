<template lang="">
    <div class="drawer bg-no-repeat bg-cover bg-bottom bg-home-background">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
        <div class="drawer-content flex flex-col ">
            <!-- Navbar -->
            <Nav />
            
            <!-- Page content here -->
            <div class="px-3 mt-5">
                <div class="text-center">
                    <span class="text-center text-2xl sm:text-4xl text-black font-semibold bg-white bg-opacity-70 rounded-lg py-1 px-2">
                        Requests @ {{ timeStr }}, {{ dateStr }} 
                    </span>
                </div>
                <div class="text-center flex justify-center mt-5 bg-cover bg-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <input type="time" class="rounded-lg p-1 w-32 ml-1 mr-5 bg-slate-500 text-white font-medium text-center text-lg" v-model="time" @change="setTimeStr()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10 ml-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>
                    <input type="date" class="rounded-lg p-1 w-36 ml-1 bg-slate-500 text-lg text-white font-medium" v-model="date" @change="setDateStr()">
                </div>
                <!-- <hr> -->
                <div v-if="this.user.type != 'hitcher'">
                    <Nearby :requests="validReq"/>
                </div>
                
                <Favourite :requests="validReq"/>
            </div>
            <!-- Page content ends here -->
        </div> 
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                <li><a @click="home()">Home</a></li>
                <li><a @click="profile()">Profile</a></li>
                <li><a @click="favourite()">Favourite</a></li>
                <li><a @click="change()">Switch to Hitcher</a></li>
                <li><a @click="chat()">Chat</a></li>
                <li><a @click="settings()">Account Settings</a></li>
                <hr/>
                <li><a @click="logout()">Logout</a></li>
            </ul>
        </div>
    </div>
        
</template>
<script>
import Nav from "../components/Nav.vue"
import Favourite from "../components/Favourite.vue"
import Nearby from "../components/Nearby.vue"
import Request from "../components/Request.vue"
export default {
    name: "Home",
    props: {},
    components: {
        Nav,
        Favourite,
        Nearby,
        Request
    },
    methods: {
        change() {
            if(this.user.type == "driver") {
                this.user.type = "hitcher"
            } else {
                this.user.type = "driver"
            }
            console.log(this.user.type)
        },
        home() {
            window.location.reload()
        },
        profile() {
            this.$router.push('/profile')
        },
        favourite() {
            this.$router.push('/newFav')
        },
        chat() {
            this.$router.push('/chat')
        },
        settings() {
            this.$router.push('/accountsettings')
        },
        logout(){
            this.$router.push('/login')
        },
        setDateStr() {
            let dateArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            let today = new Date()
            if(this.date == "") {
                this.dateStr = today.getDate() + " " + dateArr[(today.getMonth())]
            } else {
                console.log(this.date)
                let str = String(this.date)
                let year = str.split("-")[0]
                let month = str.split("-")[1]
                let day = str.split("-")[2]
                today = new Date(year, month, day)
                this.dateStr = today.getDate() + " " + dateArr[(today.getMonth()) -1]
            }
        },
        setTimeStr() {
            let hours = ""
            let minutes = ""
            if(this.time == "") {
                let date = new Date()
                hours = date.getHours();
                minutes = date.getMinutes();
                minutes = minutes < 10 && minutes != 0 ? '0' + minutes : minutes;
            } else {
                let str = String(this.time)
                hours = str.split(":")[0]
                minutes = str.split(":")[1]
            }
            let ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            this.timeStr = hours + ':' + minutes + ' ' + ampm;
            console.log(this.time)
            this.setValidReq()
        },
        checkTime(reqTime) {
            let selectedHour = this.time.split(":")[0]
            let selectedMins = this.time.split(":")[1]
            let hour = reqTime.split(":")[0]
            let mins = reqTime.split(":")[1]
            if(hour == selectedHour && selectedMins - mins <= 30) {
                return true
            }
            return false
        },
        setValidReq() {
            this.validReq = []
            for(let request of this.requests) {
                // console.log(request)
                if(this.checkTime(request.time)) {
                    this.validReq.push(request)
                }
            }
            this.validReq.sort(function(a,b) {
                return a.time.localeCompare(b.time)
            });
        }

    },
    data() {
        return {
            user: {
                type: "driver"
            },
            timeStr: "",
            dateStr: "",
            time: "",
            date: "",
            validReq: [],
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
                        to: "Choa Chu Kang"
                    },
                    {
                        user: "John Wick",
                        rating: 5,
                        time: "12:30",
                        pax: 4,
                        available: 2,
                        from: "Woodlands",
                        to: "Bras Basah"
                    },
                    {
                        user: "Jennie Kim",
                        rating: 5,
                        time: "13:00",
                        pax: 4,
                        available: 2,
                        from: "Woodlands",
                        to: "Ang Mo Kio"
                    },
                    {
                        user: "KIm Jong Kook",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        available: 2,
                        from: "Woodlands",
                        to: "Raffles Place"
                    },
                    {
                        user: "Kimchi Jigae",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        available: 2,
                        from: "Woodlands",
                        to: "Somerset"
                    },
                    {
                        user: "Buddae Jigae",
                        rating: 5,
                        time: "12:00",
                        pax: 4,
                        available: 2,
                        from: "Woodlands",
                        to: "Orchard"
                    },
            ],
        }
    },
    mounted() {
        this.setDateStr()
        this.setTimeStr()
        for(let request of this.requests) {
            console.log(request)
            if(this.checkTime(request.time)) {
                this.validReq.push(request)
            }
        }
    }
}
</script>
<style lang="">

</style>