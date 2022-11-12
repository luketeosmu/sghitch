<template lang="">
    <div class="drawer bg-no-repeat bg-cover bg-bottom bg-home-background">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
        <div class="drawer-content flex flex-col ">
            <!-- Navbar -->
            <Nav :userType="this.user.type"/>
            <!-- Page content here -->
            <div class="">
                <div class="flex justify-center items-center text-center mt-10 mb-5 px-2 sm:px-0 w-auto max-w-[360px] sm:w-[570px] sm:max-w-[570px] mx-auto">
                    <span class="text-center text-2xl text-black  bg-white bg-opacity-80 rounded-lg py-1 px-2 w-full">
                        <p class="font-semibold"><span v-if="this.user.type == 'driver'">Hitcher </span><span v-else>Driver </span>Requests @ </p>
                        <span class="mr-5 text-5xl font-bree">{{ timeStr }}<span class=text-4xl>{{ ampm }}</span> | {{ dateStr }} </span>
                    </span>
                </div>
                <div class="text-center flex justify-center mt-10 bg-cover bg-center" >
                    <label for="time">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-8 h-8 sm:w-10 sm:h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </label>
                    <input type="time" class="rounded-lg p-1 w-32 ml-1 mr-2 sm:mr-5 bg-slate-500 bg-opacity-90 text-white font-medium text-center text-lg cursor-pointer" id="time" v-model="time" @change="setTimeStr()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-8 h-8 sm:w-10 sm:h-10 sm:ml-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>
                    <input type="date" class="rounded-lg p-1 w-32 ml-1 mr-1 bg-slate-500 bg-opacity-90 text-lg text-white font-medium cursor-pointer" v-model="date" @change="setDateStr()">
                </div>
                <div v-if="this.user.type == 'hitcher'" class="flex form-control w-[350px] sm:w-[590px] mx-auto mt-5">
                      <label class="label">
                          <span class="label-text text-black bg-slate-300 bg-opacity-80 px-2 rounded-lg">Preferred Vehicle Type</span>
                      </label>
                      <select class="select select-bordered bg-opacity-90" v-model="vehiclePreference" @change="setValidReq()">
                          <option selected>All Vehicles</option>
                          <option>Car Only</option>
                          <option>Car, Lorry & Van Only</option>
                          <option>Car & Motorcycle Only</option>
                      </select>
                </div>
                <!-- <hr> -->
                <div v-if="this.user.type != 'hitcher'" class="grid xl:grid-cols-2 xl:gap-10">
                    <div>
                        <Nearby :distance="store.distance" @change-foo="changeFoo" :requests="this.validNearbyReq" :userType="this.user.type"/>
                    </div>
                    <Favourite :requests="this.validReq" class="flex xl:inline-block"/>
                </div>
                <div v-else >
                    <Favourite :requests="this.validReq" class="flex"/>
                </div>
            </div>
            
            <!-- Page content ends here -->
        </div> 
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                <li>
                    <a @click="home()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        Home
                    </a>
                </li>
                <li>
                    <a @click="newReq()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        New Request
                    </a>
                </li>
                <li>
                    <a @click="favourite()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        Edit Favourites
                    </a>
                </li>
                <li v-if="this.user.type == 'driver'" >
                    <a  @click="change()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>
                        Switch to Hitcher
                    </a>
                </li>
                <li v-else>
                    <a @click="change()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>
                        Switch to Driver
                    </a>
                </li>
                <li>
                    <a @click="settings()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Account Settings
                    </a>
                </li>
                <hr/>
                <li>
                    <a @click="logout()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    </div>
        
</template>
<script>
import Nav from "../components/Nav.vue"
import Favourite from "../components/Favourite.vue"
import Nearby from "../components/Nearby.vue"
import Request from "../components/Request.vue"
import { getAuth, signOut } from 'firebase/auth'
import { getDatabase, ref, child, get, update, onValue } from 'firebase/database';
export default {
    name: "Home",
    props: {},
    components: {
        Nav,
        Favourite,
        Nearby,
        Request
    },
    data() {
        return {
            user: {
                type: ""
            },
            timeStr: "",
            dateStr: "",
            ampm: "",
            time: "",
            date: "",
            currentLat: "",
            currentLng: "",
            store: "store",
            inputDistance: 5,
            validReq: [],
            validNearbyReq: [],
            allRequests: [],
            // requests: [
            //         {
            //             centerStart: {
            //                 lat: "1.360540",
            //                 lng: "103.957380"
            //             },
            //             centerDest: {
            //                 lat: "1.431630",
            //                 lng: "103.785590",
            //             },
            //             s_address: "Tampines St 45 529498",
            //             datetime: "2022-11-13T06:49",
            //             startNeighborhood: "Tampines",
            //             pax: "3",
            //             available: "1",
            //             d_address: "Woodlands Ave 1 730308",
            //             destNeighborhood: "Woodlands",
            //             uid: "12345",
            //             user: "luke",
            //             vehiclePreference: "Car, Lorry & Van Only",
            //             vehicleType: "Motorcycle",
            //             askingPrice: "10.00",
            //             rid: "12345"
            //         },
            //         {
            //             centerStart: {
            //                 lat: "1.431630",
            //                 lng: "103.785591",
            //             },
            //             centerDest: {
            //                 lat: "1.360540",
            //                 lng: "103.957380"
            //             },
            //             d_address: "Tampines St 45 529498",
            //             datetime: "2022-11-13T06:50",
            //             destNeighborhood: "Tampines",
            //             pax: "3",
            //             available: "2",
            //             s_address: "Marsiling Mrt",
            //             startNeighborhood: "Woodlands",
            //             uid: "12345",
            //             user: "kim jong kook",
            //             vehiclePreference: "Car only",
            //             vehicleType: "Car",
            //             askingPrice: "10.00",
            //             rid: "52321"
            //         },
            //         {
            //             centerStart: {
            //                 lat: "1.360540",
            //                 lon: "103.957380",
            //             },
            //             centerDest: {
            //                 lat: "1.360540",
            //                 lon: "103.957380"
            //             },
            //             d_address: "Tampines St 45 529498",
            //             datetime: "2022-11-12T20:00",
            //             destNeighborhood: "Tampines",
            //             pax: "3",
            //             available: "2",
            //             s_address: "Marsiling Mrt",
            //             startNeighborhood: "Woodlands",
            //             uid: "12345",
            //             user: "kim jong kook",
            //             vehiclePreference: "Car only",
            //             vehicleType: "Car",
            //             askingPrice: "10.00"
            //         },
            //         {
            //             centerStart: {
            //                 lat: "1.439500",
            //                 lon: "103.775630",
            //             },
            //             centerDest: {
            //                 lat: "1.320610",
            //                 lon: "103.886932"
            //             },
            //             d_address: "Geylang Shady Place",
            //             datetime: "2022-11-12T20:00",
            //             destNeighborhood: "Geylang",
            //             pax: "3",
            //             available: "2",
            //             s_address: "Woodlands Ave 1 730308",
            //             startNeighborhood: "Woodlands",
            //             uid: "12345",
            //             user: "john tao",
            //             vehiclePreference: "Car only",
            //             vehicleType: "Car",
            //             askingPrice: "10.00"
            //         },
            //         {
            //             centerStart: {
            //                 lat: "1.289440",
            //                 lon: "103.849983",
            //             },
            //             centerDest: {
            //                 lat: "1.360540",
            //                 lon: "103.957380"
            //             },
            //             d_address: "Tampines St 45 529498",
            //             datetime: "2022-11-12T22:25",
            //             destNeighborhood: "Tampines",
            //             vehicleNo: "ABC 123",
            //             pax: "3",
            //             available: "2",
            //             s_address: "SMU",
            //             startNeighborhood: "Museum",
            //             uid: "12345",
            //             user: "prof kyong",
            //             vehiclePreference: "Car only",
            //             vehicleType: "Car",
            //             askingPrice: "10.00",
            //             rid: "rid123"
            //         },
            // ],
            vehiclePreference: "All Vehicles"
        }
    },
    mounted() {
        this.auth = getAuth();
        this.dbRef = ref(getDatabase())
        get(child(this.dbRef, `userTypes/${this.auth.currentUser.uid}`)).then((snapshot) => {
            if (snapshot.exists()){
                if(snapshot.val().type == "hitcher"){
                    this.user.type = "hitcher"
                } else {
                    this.user.type = "driver"
                }
                this.retrieveAllReq()
            } else {
                alert("Application encountered a severe issue. Please login again.")
                this.logout()
            }
        }).catch((error) => {
            console.error(error)
            this.logout()
        })
        this.setDefaultDate()
        this.setDefaultTime()
        this.setDateStr()
        this.setTimeStr()
        this.currentLocation()
        // this.
    },
    methods: {
        changeFoo(foo){
            this.inputDistance = foo
        },
        change() {
            const db = getDatabase()
            if(this.user.type == "driver"){
                this.user.type = "hitcher"
                update(ref(db, 'userTypes/' + this.auth.currentUser.uid), {
                    type: this.user.type
                })
            } else {
                this.user.type = "driver"
                update(ref(db, 'userTypes/' + this.auth.currentUser.uid), {
                    type: this.user.type
                })
            }
            location.reload()
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
            signOut(this.auth).then(() => {
                this.$router.push('/login')
            })
        },
        newReq() {
            this.$router.push('/newReq')
        },
        setDefaultTime() {
            let today = new Date()
            let mins = ""
            if(today.getMinutes() < 10) {
                mins = "0" + today.getMinutes()
            } else {
                mins = today.getMinutes()
            }
            // console.log("curr min: " + today.getMinutes())
            let hours = ""
            if(today.getHours() < 10) {
                hours = "0"  + today.getHours() 
            } else {
                hours = today.getHours()
            }
            this.time = hours + ":" + mins
            // console.log("NOW TIME: " + this.time)
        },
        setDefaultDate() {
            let today = new Date()
            let month = today.getMonth() + 1
            this.date = today.getFullYear() + "-" + month + "-" + today.getDate()
        },
        setDateStr() {
            // console.log("setDateStr")
            let dateArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            let today = new Date()

            let currMonth = today.getMonth() + 1
            let currDay = today.getDate()
            let currYear = today.getFullYear()
            let str = String(this.date)
            let year = str.split("-")[0]
            let month = str.split("-")[1]
            let day = str.split("-")[2]
            // console.log(currMonth + ":" + month)
            // console.log(currYear + ":" + year)
            // console.log(currDay + ":" + day)
            if(year == currYear && currMonth == month && currDay == day) {
                this.dateStr = "Today"
            } else {
                this.dateStr = day + " " + dateArr[(month - 1)]
            }
            this.setValidReq()
            this.setValidNearbyReq()

            // today = new Date(year, month, day)
            // console.log(month)
        },
        setTimeStr() {
            let hours = ""
            let minutes = ""
            if(this.time == "") {
                let date = new Date()
                hours = date.getHours();
                minutes = date.getMinutes();
                minutes = minutes < 10 ? '0' + minutes : minutes;
            } else {
                let str = String(this.time)
                hours = str.split(":")[0]
                minutes = str.split(":")[1]
            }
            this.ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            this.timeStr = hours + ':' + minutes
            this.setValidReq()
            this.setValidNearbyReq()
        },
        checkTime(reqTime) {
            // console.log("CHECKTIME")
            // console.log("this time: " + this.time)
            let selectedHour = 0
            let selectedMins = 0
            selectedHour = parseInt(this.time.split(":")[0])
            selectedMins = parseInt(this.time.split(":")[1])
            let hour = parseInt(reqTime.split(":")[0])
            let mins = parseInt(reqTime.split(":")[1])
            let timeDiff = selectedMins - mins                      // for same hour
            let diff = 60 - mins + selectedMins                     // for hour + 1 (e.g. request time: 9:40pm, current time: 10:05pm)
            if(hour == selectedHour && (timeDiff <= 30 && timeDiff >= -15) ) {
                // console.log("true")
                return true
            } else if(hour + 1 == selectedHour) {
                if(diff <= 30) {
                    return true
                }
            }
            return false
        },
        checkDate(reqDate) {
            // console.log("DATEEE" + reqDate)
            let reqDateSplit = reqDate.split("-")
            let year = reqDateSplit[0]
            let month = reqDateSplit[1]
            let day = reqDateSplit[2]
            let today = new Date()
            if(this.date == "") {
                // console.log(new Date().getMonth() + 1)
                // console.log(today.getDay() + "" + today.getMonth() + "" + today.getFullYear())
                if(today.getDate() == day && today.getMonth() + 1 == month && today.getFullYear() == year) {
                    // console.log("yeash")
                    return true
                }
                return false
            } else {
                let selectedYear = this.date.split("-")[0]
                let selectedMonth = this.date.split("-")[1]
                let selectedDay = this.date.split("-")[2]
                // console.log("selectedDay: " + selectedDay)
                // console.log("selectedMonth: " + selectedMonth)
                // console.log("selectedYear: " + selectedYear)
                // console.log(month)
                if(selectedDay == day && selectedMonth == month && selectedYear == year) {
                    // console.log("yeash")
                    return true
                }
                return false
            }
        },
        setValidReq() {
            this.validReq = []
            // console.log("setvalidreq")
            //change to this.allRequests
            for(let request of this.allRequests) {
                // console.log(request.rid)
                if(request.uid != this.auth.currentUser.uid && this.checkTime(request.datetime.split("T")[1]) && this.checkDate(request.datetime.split("T")[0])) {
                    // console.log(request.d_address)
                    console.log("everything true, valid req")
                    this.validReq.push(request)
                }
            }
            this.validReq.sort(function(a,b) {
                return a.datetime.split("T")[1].localeCompare(b.datetime.split("T")[1])
            });
            // console.log(this.allRequests)
            // for(let request of this.allRequests) {
            //     console.log(Object.values(request)[0].datetime)
            // }
        },
        vehiclePreferenceIsValid(vehicleType) {
            switch(this.vehiclePreference) {
                case "All Vehicles":
                    return true
                case "Car Only":
                    if(vehicleType == "Car") {
                        return true
                    }
                    return false
                case "Car, Lorry & Van Only":
                    if(vehicleType == "Car" || vehicleType == "Lorry" || vehicleType == "Van") {
                        return true
                    }
                    return false
                case "Car & Motorcycle Only":
                    if(vehicleType == "Car" || vehicleType == "Motorcycle") {
                        return true
                    }
                    return false
            } 
        },
        setValidNearbyReq() {
            this.validNearbyReq = []
            for(let request of this.validReq) {
                console.log("SETVALIDNEARBY")
                console.log(request.centerStart.lat)
                console.log(request.centerStart.lng)
                console.log(this.currentLat)
                console.log(this.currentLng)
                console.log(request.user)
                console.log("distance is= " + this.getDistanceFromLatLonInKm(request.centerStart.lat, request.centerStart.lng, this.currentLat, this.currentLng))
                console.log(this.inputDistance)
                console.log("END")
                if(this.getDistanceFromLatLonInKm(request.centerStart.lat, request.centerStart.lng, this.currentLat, this.currentLng) <= this.inputDistance ) { //change this 
                    console.log(request.centerStart.lat + " " + request.centerStart.lng)
                    this.validNearbyReq.push(request)
                }
            }
            this.validNearbyReq.sort(function(a,b) {
                return a.datetime.split("T")[1].localeCompare(b.datetime.split("T")[1])
            });
        },
        getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) { //run this for each, and display if met
            var R = 6371; // Radius of the earth in km
            var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
            var dLon = this.deg2rad(lon2-lon1);  //need this.?
            var a = 
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
                Math.sin(dLon/2) * Math.sin(dLon/2)
                ; 
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            var d = R * c; // Distance in km
            return d;
        },
        deg2rad(deg) {
            return deg * (Math.PI/180)
        },
        currentLocation(){
            let lat = 0
            let long = 0
            let getLocationPromise = new Promise((resolve, reject) => {
                if(navigator.geolocation) {
                    // console.log(this.currentLat)
                    // console.log(this.currentLng)
                    navigator.geolocation.getCurrentPosition(function (position) {
                        lat = position.coords.latitude
                        long = position.coords.longitude

                        resolve({latitude: lat, 
                                longitude: long})
                    })
                } else {
                    console.log("your browser doesn't support geolocation API")
                }
            })

            getLocationPromise.then((location) => {
                // console.log(lat) //can use var
                // console.log(location.longitude) //can use this too
                // above gives current user lat and lng
                this.currentLat = lat
                this.currentLng = location.longitude
            }).catch((err) => {
                console.log(err)
            })
        },
        retrieveAllReq(){
            const db = getDatabase();
            if(this.user.type == 'driver') {
                console.log("hi i am driver")
                const dbRef = ref(db, '/hitcherReqs');
                onValue(dbRef, (snapshot) => {
                    snapshot.forEach((childSnapshot) => {
                        const childKey = childSnapshot.key; //request id
                        const childData = childSnapshot.val(); //request details
                        // let request = {}
                        // request[childKey] = childData
                        // console.log(childData)
                        // this.allRequests.push(request) //add object to new allRequests array in data()
                        childData["rid"] = childKey         //add request ID to request object
                        this.allRequests.push(childData)
                        console.log(childData)
                        this.setValidReq()
                        this.setValidNearbyReq()
                    });
                }, {
                    onlyOnce: true
                });
            } else {
                console.log("hi i am hitcher")
                const dbRef = ref(db, '/driverReqs');
                onValue(dbRef, (snapshot) => {
                    snapshot.forEach((childSnapshot) => {
                        const childKey = childSnapshot.key; //request id
                        const childData = childSnapshot.val(); //request details
                        // let request = {}
                        // request[childKey] = childData
                        // console.log(childData)
                        // this.allRequests.push(request) //add object to new allRequests array in data()
                        childData["rid"] = childKey         //add request ID to request object
                        this.allRequests.push(childData)
                        console.log(childData)
                        this.setValidReq()
                        this.setValidNearbyReq()
                    });
                }, {
                    onlyOnce: true
                });
            }
        }
    },
    
}
</script>
<style lang="">

</style>