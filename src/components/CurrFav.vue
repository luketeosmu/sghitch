<template lang="">
    <div>
        <h3 class="font-bold text-2xl sm:text-3xl font-sans pb-5 px-3 pb-3 text-center"> Current Favourites </h3>
            <div class="flex overflow-x-auto mx-auto justify-center items-center ">
                <table class="table w-full max-w-md z-0">
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
    </div>
</template>
<script>
export default {
    name: "CurrFav",
    props: {
        favourites: Array
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
    }
}
</script>
<style lang="">
    
</style>