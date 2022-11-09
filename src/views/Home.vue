<template lang="">
    <div class="drawer bg-no-repeat bg-cover bg-bottom bg-home-background">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
        <div class="drawer-content flex flex-col ">
            <!-- Navbar -->
            <Nav />
            
            <!-- Page content here -->
            <div class="">
                
                
                <div class="flex justify-center items-center text-center mt-10 mb-5 px-2 sm:px-0 w-[450px] sm:w-[570px] mx-auto">
                    <span class="text-center text-2xl text-black  bg-white bg-opacity-80 rounded-lg py-1 px-2 w-full">
                        <p class="font-semibold">Requests @ </p>
                        <span class="mr-5 text-5xl font-bree">{{ timeStr }}<span class=text-4xl>{{ ampm }}</span> | {{ dateStr }} </span>
                    </span>
                </div>
                <div class="text-center flex justify-center mt-10 bg-cover bg-center" >
                    <label for="time">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </label>
                    <input type="time" class="rounded-lg p-1 w-32 ml-1 mr-5 bg-slate-500 bg-opacity-90 text-white font-medium text-center text-lg cursor-pointer" id="time" v-model="time" @change="setTimeStr()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10 ml-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>
                    <input type="date" class="rounded-lg p-1 w-36 ml-1 bg-slate-500 bg-opacity-90 text-lg text-white font-medium cursor-pointer" v-model="date" @change="setDateStr()">
                </div>
                <div v-if="this.user.type == 'hitcher'" class="flex form-control w-[450px] sm:w-[570px] mx-auto mt-5">
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
                        <Nearby :requests="this.validNearbyReq" :userType="this.user.type"/>
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
                <li><a @click="home()">Home</a></li>
                <li><a @click="favourite()">Favourite</a></li>
                <li v-if="this.user.type == 'driver'" ><a  @click="change()">Switch to Hitcher</a></li>
                <li v-else><a @click="change()">Switch to Driver</a></li>
                <li><a @click="chat()">Offers</a></li>
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
    methods: {
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
        setDateStr() {
            let dateArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            let today = new Date()
            if(this.date == "") {
                // console.log(today.getMonth())
                this.dateStr = "Today"
            } else {
                // console.log(this.date)
                let str = String(this.date)
                let year = str.split("-")[0]
                let month = str.split("-")[1]
                let day = str.split("-")[2]
                today = new Date(year, month, day)
                // console.log(month)
                this.dateStr = day + " " + dateArr[(month - 1)]
            }
            this.setValidReq()
            this.setValidNearbyReq()
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
            let selectedHour = this.time.split(":")[0]
            let selectedMins = this.time.split(":")[1]
            let hour = reqTime.split(":")[0]
            let mins = reqTime.split(":")[1]
            if(hour == selectedHour && selectedMins - mins <= 30) {
                return true
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
                    console.log("yeash")
                    return true
                }
                return false
            } else {
                let selectedYear = this.date.split("-")[0]
                let selectedMonth = this.date.split("-")[1]
                let selectedDay = this.date.split("-")[2]
                console.log(month)
                if(selectedDay == day && selectedMonth == month && selectedYear == year) {
                    return true
                }
                return false
            }
            // console.log("selected date" + this.date)
            // // console.log(day + " == " + this.date.getDay())
            // // console.log(month + " == " + this.date.getMonth())
            // // console.log(year + " == " + this.date.getFullYear())
            // console.log("naesh")
            // console.log(reqDate)
            // return false
        },
        setValidReq() {
            this.validReq = []
            // console.log(this.allRequests)
            console.log("setValidReq")
            for(let request of this.allRequests) {
                // console.log(request.datetime)
                // console.log("start neighborhood: " + request.startNeighborhood)
                if(this.checkTime(request.datetime.split("T")[1]) && this.checkDate(request.datetime.split("T")[0]) && this.vehiclePreferenceIsValid(request.vehicleType) && this.auth.currentUser.uid != request.uid) {
                    this.validReq.push(request)
                    // console.log(request)
                    // console.log(request.centerStart.lat + " " + request.centerStart.lon)
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
            // console.log("hih")
            this.validNearbyReq = []
            for(let request of this.validReq) {
                if(this.getDistanceFromLatLonInKm(request.centerStart.lat, request.centerStart.lon, this.currentLat, this.currentLng) <= 5 ) {
                    this.validNearbyReq.push(request)
                    console.log(request.centerStart.lat + " " + request.centerStart.lon)
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
                console.log(lat) //can use var
                console.log(location.longitude) //can use this too
                // above gives current user lat and lng
                this.currentLat = lat
                this.currentLng = location.longitude
            }).catch((err) => {
                console.log(err)
            })
        },
        retrieveAllReq(){
            const db = getDatabase();
            const dbRef = ref(db, '/userReqs');

            onValue(dbRef, (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const childKey = childSnapshot.key; //request id
                    const childData = childSnapshot.val(); //request details
                    let request = {}
                    request[childKey] = childData
                    console.log(childData)
                    // this.allRequests.push(request) //add object to new allRequests array in data()
                    this.allRequests.push(childData)
                });
            }, {
                onlyOnce: true
            });
        }
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
            validReq: [],
            validNearbyReq: [],
            allRequests: [],
            requests: [
                    {
                        centerStart: {
                            lat: "1.431630",
                            lon: "103.785590",
                        },
                        centerDest: {
                            lat: "1.360540",
                            lon: "103.957380"
                        },
                        d_address: "Tampines St 45 529498",
                        datetime: "2022-11-09T10:00",
                        destNeighbourhood: "Tampines",
                        pax: "3",
                        available: "1",
                        s_address: "Woodlands Ave 1 730308",
                        startNeighbourhood: "Woodlands",
                        uid: "12345",
                        user: "luke",
                        vehiclePreference: "Car only",
                        vehicleType: "Motorcycle"
                    },
                    {
                        centerStart: {
                            lat: "1.360540",
                            lon: "103.957380",
                        },
                        centerDest: {
                            lat: "1.360540",
                            lon: "103.957380"
                        },
                        d_address: "Tampines St 45 529498",
                        datetime: "2022-11-09T10:00",
                        destNeighbourhood: "Tampines",
                        pax: "3",
                        available: "2",
                        s_address: "Marsiling Mrt",
                        startNeighbourhood: "Woodlands",
                        uid: "12345",
                        user: "kim jong kook",
                        vehiclePreference: "Car only",
                        vehicleType: "Car"
                    },
                    {
                        centerStart: {
                            lat: "1.439500",
                            lon: "103.775630",
                        },
                        centerDest: {
                            lat: "1.320610",
                            lon: "103.886932"
                        },
                        d_address: "Geylang Shady Place",
                        datetime: "2022-11-09T10:00",
                        destNeighbourhood: "Geylang",
                        pax: "3",
                        available: "2",
                        s_address: "Woodlands Ave 1 730308",
                        startNeighbourhood: "Woodlands",
                        uid: "12345",
                        user: "john tao",
                        vehiclePreference: "Car only",
                        vehicleType: "Car"
                    },
                    {
                        centerStart: {
                            lat: "1.289440",
                            lon: "103.849983",
                        },
                        centerDest: {
                            lat: "1.360540",
                            lon: "103.957380"
                        },
                        d_address: "Tampines St 45 529498",
                        datetime: "2022-11-09T10:00",
                        destNeighbourhood: "Tampines",
                        pax: "3",
                        available: "2",
                        s_address: "SMU",
                        startNeighbourhood: "Museum",
                        uid: "12345",
                        user: "prof kyong",
                        vehiclePreference: "Car only",
                        vehicleType: "Car"
                    },
            //         {
            //             user: "Shaun Ting",
            //             rating: 5,
            //             time: "10:00",
            //             pax: 3,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Tampines"
            //         },
            //         {
            //             user: "Ali baba",
            //             rating: 5,
            //             time: "10:10",
            //             pax: 1,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Tampines"
            //         },
            //         {
            //             user: "John Wick",
            //             rating: 5,
            //             time: "10:15",
            //             pax: 2,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Tampines"
            //         },
            //         {
            //             user: "Jennie Kim",
            //             rating: 5,
            //             time: "10:07",
            //             pax: 3,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Tampines"
            //         },
            //         {
            //             user: "KIm Jong Kook",
            //             rating: 5,
            //             time: "10:00",
            //             pax: 1,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Toa Payoh"
            //         },
            //         {
            //             user: "Kimchi Jigae",
            //             rating: 5,
            //             time: "12:00",
            //             pax: 2,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Somerset"
            //         },
            //         {
            //             user: "Buddae Jigae",
            //             rating: 5,
            //             time: "12:00",
            //             pax: 4,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Orchard"
            //         },
            //         {
            //             user: "Shaun Ting",
            //             rating: 5,
            //             time: "10:00",
            //             pax: 3,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Tampines"
            //         },
            //         {
            //             user: "Ali baba",
            //             rating: 5,
            //             time: "10:10",
            //             pax: 4,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Tampines"
            //         },
            //         {
            //             user: "John Wick",
            //             rating: 5,
            //             time: "10:15",
            //             pax: 4,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Tampines"
            //         },
            //         {
            //             user: "Jennie Kim",
            //             rating: 5,
            //             time: "10:07",
            //             pax: 4,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Tampines"
            //         },
            //         {
            //             user: "KIm Jong Kook",
            //             rating: 5,
            //             time: "12:00",
            //             pax: 4,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Raffles Place"
            //         },
            //         {
            //             user: "Kimchi Jigae",
            //             rating: 5,
            //             time: "12:00",
            //             pax: 4,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Somerset"
            //         },
            //         {
            //             user: "Buddae Jigae",
            //             rating: 5,
            //             time: "12:00",
            //             pax: 4,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Orchard"
            //         },
            //         {
            //             user: "Shaun Ting",
            //             rating: 5,
            //             time: "10:00",
            //             pax: 3,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Tampines"
            //         },
            //         {
            //             user: "Ali baba",
            //             rating: 5,
            //             time: "10:10",
            //             pax: 4,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Tampines"
            //         },
            //         {
            //             user: "John Wick",
            //             rating: 5,
            //             time: "10:15",
            //             pax: 4,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Tampines"
            //         },
            //         {
            //             user: "Jennie Kim",
            //             rating: 5,
            //             time: "10:07",
            //             pax: 4,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Tampines"
            //         },
            //         {
            //             user: "KIm Jong Kook",
            //             rating: 5,
            //             time: "12:00",
            //             pax: 4,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Raffles Place"
            //         },
            //         {
            //             user: "Kimchi Jigae",
            //             rating: 5,
            //             time: "12:00",
            //             pax: 4,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Somerset"
            //         },
            //         {
            //             user: "Buddae Jigae",
            //             rating: 5,
            //             time: "12:00",
            //             pax: 4,
            //             available: 2,
            //             from: "Woodlands",
            //             to: "Orchard"
            //         },
            ],
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
            } else {
                alert("Application encountered a severe issue. Please login again.")
                this.logout()
            }
        }).catch((error) => {
            console.error(error)
            this.logout()
        })
        this.setDateStr()
        this.setTimeStr()
        this.setValidReq()
        this.setValidNearbyReq()
        this.currentLocation()
        this.retrieveAllReq()
    }
}
</script>
<style lang="">

</style>