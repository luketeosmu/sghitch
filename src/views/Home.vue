<template lang="">
        <Nav />
        <div class="p-3">
            <div v-if="this.user.type != 'hitcher'">
                <h3 class="font-bold text-3xl font-sans pb-5 text-red"> Hitchers Near You </h3>
                <Nearby />
            </div>
            <h3 class="font-bold text-3xl font-sans pb-5 text-red"> Favourites </h3>
            <Favourite />
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
    data() {
        return {
            user: {
                type: "driver"
            }
        }
    }
    
}
</script>
<style lang="">
    
</style>