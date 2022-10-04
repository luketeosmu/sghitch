<template lang="">
    <div>
        <!-- starting point should be taken from google maps - should return a longitude/latitude -->
        <!-- when searching for requests, sort by distance away from starting point -->
        <Nav/>
        <div class="container mx-auto">
            <form>
                <div className="flex form-control text-center mb-10">
                    <div className="justify-center">
                        <input v-model.lazy="input.s_address" type="text" placeholder="Starting Point e.g. Tampines" className="input input-bordered input-warning w-full max-w-md mt-5" />
                    </div>
                    <div class="justify-center">
                        <input v-model.lazy="input.d_address" type="text" placeholder="Destination e.g. Woodlands" className="input input-bordered input-warning w-full max-w-md mt-5" />
                    </div>
                </div>
                <div class="text-center">
                    <button type="button" @click='queryMapsStart()' class="btn btn-warning bg-yellow-300 text-black">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import MapsService from '../services/MapsService'
import Nav from '../components/Nav.vue'

export default {
    name: "NewReq",
    components: {
        MapsService,
        Nav
    },
    props: {},
    data () {
        return {
            input: {
                s_address: "",
                d_address: "",
            }
        }
    },
    mounted(){
    },
    methods: {
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