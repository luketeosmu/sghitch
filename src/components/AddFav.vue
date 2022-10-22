<template lang="">
    <div>
    <!-- <h3 class="font-bold text-2xl sm:text-3xl font-sans px-3 text-white text-center mt-5 mb-3"> Add new Favourite </h3> -->
    <!-- <div class="">
        <span class="inline-flex text-center text-4xl text-black font-semibold bg-white bg-opacity-70 rounded-lg py-1 px-2 ml-5 mt-5 mb-3">
            Add new Favourite
        </span>
    </div> -->
        <div class="form-control justify-center items-center mt-10">
            <div class="flex grid md:grid-cols-3 grid-cols-1">
                <div class="flex w-64">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-3 mr-1 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <input type="text" placeholder="Starting Point" class="w-max-lg input input-ghost input-bordered bg-white bg-opacity-70" v-model="from" > 
                </div>
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1 mt-3 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>

                    <input type="text" placeholder="Destination" class="w-max-lg input input-ghost input-bordered bg-white bg-opacity-70" v-on:keyup.enter="addFav()" v-model="to" > 
                </div>
                <div class="flex "> <button class="btn btn-ghost bg-slate-700 bg-opacity-50 text-white" @click='addFav()' >Add</button> </div>
                
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
            to: ""
        }
    }
}
</script>
<style lang="">
    
</style>