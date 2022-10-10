<template lang="">
        <!-- The button to open modal -->

        <!-- Put this part before </body> tag -->

        <!-- MODAL CONTENT FOR SMALL SCREEN -->
        <!-- <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <label for="my-modal-4" class="modal cursor-pointer">
            <label class="modal-box relative w-11/12 max-w-full" for="">
                <h3 class="text-3xl font-bold mb-5">List of Interested Hitchers</h3>
                <Request :requests="requests"/>
            </label>
        </label> -->
        <Nav />
        <!-- Page content here -->
        <div class="p-3">
            <h3 class="font-bold text-3xl font-sans pb-5 text-red"> Hitchers Near You </h3>
            <Nearby />
            <h3 class="font-bold text-3xl font-sans pb-5 text-red"> Favourites </h3>
            <Favourite />
        </div>

        <!-- DRAWER CONTENT FOR NEDIUM SCREEN -->
        <!-- <div class="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
            </div> 
            <div class="drawer-side">
                <label for="my-drawer-4" class="drawer-overlay"></label>
                <div class="menu p-4 w-1/2 bg-yellow-50 text-base-content">
                <Request :requests="requests" />
                </div>
            </div>
        </div> -->
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
    
}
</script>
<style lang="">
    
</style>