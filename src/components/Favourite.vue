<template lang="">
    <div>
        <a href="#" class="relative mx-3 p-3 pt-12 bg-yellow-100 rounded-2xl flex justify-center hover:bg-yellow-200">
                <h3 class="absolute top-0 font-bold text-2xl font-sans mb-3 ml-5 text-center">{{ favourites[0] }}</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                    <Request />
                    <Request />
                    <Request />
                    <Request />
                    <Request />
                    <Request />
                    <Request />
                    <Request />
                </div>
            </a>
    </div>
</template>
<script>
import Request from "../components/Request.vue"

export default {
    name: "Favourite",
    props: {

    },
    components: {
        Request,

    },
    data() {
        return {
            favourites: ["Woodlands to Tampines"]
        }
    }
}
</script>
<style lang="">
    
</style>