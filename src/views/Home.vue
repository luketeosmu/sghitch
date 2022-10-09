<template lang="">
    <div>
        <Nav />
        <div class="p-3">
            <h3 class="font-bold text-3xl font-sans pb-5 text-red"> Hitchers Near You </h3>
            <Nearby />
            <h3 class="font-bold text-3xl font-sans pb-5 text-red"> Favourites </h3>
            <Favourite />
        </div>
    </div>
</template>
<script>
import Nav from "../components/Nav.vue"
import Favourite from "../components/Favourite.vue"
import Nearby from "../components/Nearby.vue"
export default {
    name: "Home",
    props: {},
    components: {
        Nav,
        Favourite,
        Nearby,
    }
}
</script>
<style lang="">
    
</style>