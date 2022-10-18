<template lang="">
    <div>
        <h3 class="font-bold text-2xl sm:text-3xl font-sans px-3 text-red text-center mt-5"> Add new Favourite </h3>
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
</template>
<script>
export default {
    name: "AddFav",
    props: {
        favourites: Array
    },
    methods: {
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
    },
    data() {
        return {
            input: {
                s_address: "",
                d_address: "",
            }
        }
    }
}
</script>
<style lang="">
    
</style>