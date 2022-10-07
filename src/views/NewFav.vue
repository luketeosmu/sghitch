<template lang="">
    <div>
        <!-- starting point should be taken from google maps - should return a longitude/latitude -->
        <!-- when searching for requests, sort by distance away from starting point -->
        <Nav/>
        <div class="container mx-auto">
            <h3 class="font-bold text-3xl font-sans pb-5 px-3 py-3 text-red text-center"> Current Favourites </h3>
            <div class="flex overflow-x-auto mx-auto justify-center items-center ">
                <table class="table w-full max-w-md">
                    <!-- head -->
                    <thead>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- row 1 -->
                    <tr v-for="favourite in favourites" :id="favourite.from + '-' + favourite.to">
                        <td>{{ favourite.from }}</td>
                        <td>{{ favourite.to }}</td>
                        <td @click="removeFav(favourite.from + '-' + favourite.to)"><a href="#">Delete</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <h3 class="font-bold text-3xl font-sans px-3 text-red text-center mt-5"> Add new Favourite </h3>
            <form>
                <div className="flex form-control text-center mb-10">
                    <div className="justify-center">
                        <input v-model.lazy="input.s_address" type="text" placeholder="Starting Point e.g. Tampines" className="input input-bordered input-warning w-full max-w-md mt-5" id="from"/>
                    </div>
                    <div class="justify-center">
                        <input v-model.lazy="input.d_address" type="text" placeholder="Destination e.g. Woodlands" className="input input-bordered input-warning w-full max-w-md mt-5" id="to"/>
                    </div>
                </div>
                <div class="text-center">
                    <button type="button" @click='addFav()' class="btn btn-warning bg-yellow-300 text-black">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import MapsService from '../services/MapsService'
import Nav from '../components/Nav.vue'

export default {
    name: "NewFav",
    components: {
        MapsService,
        Nav
    },
    props: {},
    data () {
        return {
            favourites: [
                {
                    from: "ChoaChuKang",
                    to: "Tampines"
                },
                {
                    from: "SMU",
                    to: "Woodlands"
                }
            ],
            // favourites: ["Woodlands to Tampines", "SMU to Woodlands"],
            input: {
                s_address: "",
                d_address: "",
            }
        }
    },
    mounted(){
    },
    methods: {
        removeFav(value) {
            // console.log(value)
            let locations = value.split("-")
            for(var i = 0; i < this.favourites.length; i++) {
                var favourite = this.favourites[i]
                if(favourite.from == locations[0] && favourite.to == locations[1]) {
                    console.log(value)
                    console.log(i)
                    this.favourites.splice(this.favourites.indexOf(i), 1)
                }
            }
        },
        addFav() {
            var fromVal = document.getElementById("from").value.replace(/\s/g,'')
            var toVal = document.getElementById("to").value.replace(/\s/g,'')
            console.log(from + "-" + to)
            var favourite = {
                from: fromVal,
                to: toVal
            }
            this.favourites.push(favourite)
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
    }
}
</script>
<style lang="">
    
</style>