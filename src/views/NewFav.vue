<template lang="">
    <div>
        <!-- starting point should be taken from google maps - should return a longitude/latitude -->
        <!-- when searching for requests, sort by distance away from starting point -->
        <Nav />
        <CurrFav :favourites="favourites" />
        <AddFav :favourites="favourites"/>
    </div>
</template>
<script>
import MapsService from '../services/MapsService'
import Nav from '../components/Nav.vue'
import AddFav from '../components/AddFav.vue'
import CurrFav from '../components/CurrFav.vue'

export default {
    name: "NewFav",
    components: {
        MapsService,
        Nav,
        AddFav,
        CurrFav
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
        }
    },
    mounted(){
    },
}
</script>
<style lang="">
    
</style>