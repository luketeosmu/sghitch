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
                    <input type="text" placeholder="Starting Point (e.g. Tampines)" required class="w-96 md:w-72 input input-ghost input-bordered bg-white bg-opacity-70 peer" v-model="from" > 
                </div>
                <div class="flex mt-3 md:mt-0 md:ml-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-3 mr-1 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>
                    <input type="text" placeholder="Destination (e.g. Woodlands)" class="w-96 md:w-72 input input-ghost input-bordered bg-white bg-opacity-70" v-on:keyup.enter="addFav()" v-model="to" > 
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
            if(this.from == "" || this.to == "") {
                this.alert = true
                return
            }
            this.alert = false
            console.log(this.from + "-" + this.to)
            let favourite = {
                from: this.from,
                to: this.to
            }
            this.favourites.push(favourite)
            this.from = ""
            this.to = ""
        },
        queryMapsStart () {
            try{
                if(this.input.s_address != "") {
                    MapsService.queryMaps(this.input.s_address)
                    .then((res) => {
                        if(res == "failed"){
                            alert("Invalid")
                        } else {
                            // this.$router.push('/')
                            console.log(res)
                        }
                    })
                } else {
                    alert("Please enter a valid location.");
                }
            } catch (error){

            }
        },
        queryMapsDest () {
            try{
                if(this.input.d_address != "") {
                    MapsService.queryMaps(this.input.d_address)
                    .then((res) => {
                        if(res == "failed"){
                            alert("Invalid")
                        } else {
                            // this.$router.push('/')
                            console.log(res)
                        }
                    })
                } else {
                    alert("Please enter a valid location.");
                }
            } catch (error){

            }
        },
    },
    data() {
        return {
            input: {
                s_address: "",
                d_address: "",
            },
            from: "",
            to: "",
            alert: false
        }
    }
}
</script>
<style lang="">
    
</style>