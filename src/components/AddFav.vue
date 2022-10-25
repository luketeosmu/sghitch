<template lang="">
    <div>
    <!-- <h3 class="font-bold text-2xl sm:text-3xl font-sans px-3 text-white text-center mt-5 mb-3"> Add new Favourite </h3> -->
    <!-- <div class="">
        <span class="inline-flex text-center text-4xl text-black font-semibold bg-white bg-opacity-70 rounded-lg py-1 px-2 ml-5 mt-5 mb-3">
            Add new Favourite
        </span>
    </div> -->
        <div class="form-control text-center justify-center items-center mt-10 ">
            <div class="inline-block md:inline-flex">
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-3 mr-1 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <!-- <input type="text" placeholder="Starting Point (e.g. Tampines)" required class="w-96 md:w-72 input input-ghost input-bordered bg-white bg-opacity-70 peer" v-model="from" >  -->
                    <select v-model="from" class = "w-96 md:w-72 input input-ghost input-bordered bg-white bg-opacity-70 peer">
                        <option disabled selected>Starting Point (e.g. Tampines)</option>
                        <option disabled>---Central---</option>
                        <option v-for="neighborhood in neighborhoods.central">{{ neighborhood }}</option>
                        <option disabled>---East---</option>
                        <option v-for="neighborhood in neighborhoods.east">{{ neighborhood }}</option>
                        <option disabled>---North---</option>
                        <option v-for="neighborhood in neighborhoods.north">{{ neighborhood }}</option>
                        <option disabled>---North East---</option>
                        <option v-for="neighborhood in neighborhoods.northeast">{{ neighborhood }}</option>
                        <option disabled>---West---</option>
                        <option v-for="neighborhood in neighborhoods.west">{{ neighborhood }}</option>
                    </select>
                </div>
                <div class="flex mt-3 md:mt-0 md:ml-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-3 mr-1 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>
                    <!-- <input type="text" placeholder="Destination (e.g. Woodlands)" class="w-96 md:w-72 input input-ghost input-bordered bg-white bg-opacity-70" v-on:keyup.enter="addFav()" v-model="to" >  -->
                    <select v-model="to" class= "w-96 md:w-72 input input-ghost input-bordered bg-white bg-opacity-70 peer">
                        <option disabled>Destination (e.g. Woodlands)</option>
                        <option disabled>---Central---</option>
                        <option v-for="neighborhood in neighborhoods.central">{{ neighborhood }}</option>
                        <option disabled>---East---</option>
                        <option v-for="neighborhood in neighborhoods.east">{{ neighborhood }}</option>
                        <option disabled>---North---</option>
                        <option v-for="neighborhood in neighborhoods.north">{{ neighborhood }}</option>
                        <option disabled>---North East---</option>
                        <option v-for="neighborhood in neighborhoods.northeast">{{ neighborhood }}</option>
                        <option disabled>---West---</option>
                        <option v-for="neighborhood in neighborhoods.west">{{ neighborhood }}</option>
                    </select>
                </div>
                <div>
                    <button class="btn btn-ghost bg-slate-700 bg-opacity-50 text-white ml-5 mt-5 md:mt-0" @click='addFav()' >Add</button>
                </div>
            </div>
            <div v-if="alert" class="flex alert bg-red-700 bg-opacity-80 shadow-lg text-white w-96 justify-center items-center text-center mt-5 ">
                <div>
                    <span>Starting Point and Destination cannot be empty</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getDatabase, ref, push, set, get, child } from 'firebase/database'
import { getAuth } from 'firebase/auth'
export default {
    name: "AddFav",
    props: {
        favourites: Array
    },
    methods: {
        addFav() {
            //.value.replace(/\s/g,'')
            // let fromVal = document.getElementById("from").value
            // let toVal = document.getElementById("to").value
            if(this.from == "" || this.to == "" || this.from == "Starting Point (e.g. Tampines)" || this.to == "Destination (e.g. Woodlands)") {
                this.alert = true
                return
            }
            this.alert = false
            console.log(this.from + "-" + this.to)
            let favourite = {
                from: this.from,
                to: this.to
            }

            const auth = getAuth()
            const db = getDatabase()
            const postListRef = ref(db, 'userFavs/' + auth.currentUser.uid)
            const newUID = push(postListRef)
            set(newUID, favourite)
            favourite.key = newUID.key
            this.favourites.push(favourite)
            // this.favourites.push(favourite)

            this.from = "Starting Point (e.g. Tampines)"
            this.to = "Destination (e.g. Woodlands)"
        },
    },
    data() {
        return {
            from: "Starting Point (e.g. Tampines)",
            to: "Destination (e.g. Woodlands)",
            alert: false,
            neighborhoods: {
                central: [
                    'Bishan',
                    'Bukit Merah',
                    'Bukit Timah',
                    'Downtown Core',
                    'Geylang',
                    'Kallang',
                    'Marina East',
                    'Marina South',
                    'Marine Parade',
                    'Museum',
                    'Newton',
                    'Novena',
                    'Orchard',
                    'Outram',
                    'Queenstown',
                    'River Valley',
                    'Rochor',
                    'Singapore River',
                    'Southern Islands',
                    'Straits View',
                    'Tanglin',
                    'Toa Payoh'
                ],
                east: [
                    'Bedok',
                    'Changi',
                    'Changi Bay',
                    'Pasir Ris',
                    'Paya Lebar',
                    'Tampines'
                ],
                north: [
                    'Central Water Catchment',
                    'Lim Chu Kang',
                    'Mandai',
                    'Sembawang',
                    'Simpang',
                    'Sungei Kadut',
                    'Woodlands',
                    'Yishun'
                ],
                northeast: [
                    'Ang Mo Kio',
                    'Hougang',
                    'North-Eastern Islands',
                    'Punggol',
                    'Seletar',
                    'Sengkang',
                    'Serangoon'
                ],
                west: [
                    'Boon Lay',
                    'Bukit Batok',
                    'Bukit Panjang',
                    'Choa Chu Kang',
                    'Clementi',
                    'Jurong East',
                    'Jurong West',
                    'Pioneer',
                    'Tengah',
                    'Tuas',
                    'Western Islands',
                    'Western Water Catchment'
                ]
            },
        }
    }
}
</script>
<style lang="">
</style>