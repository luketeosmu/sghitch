<template lang="">
    <div>
        <h3 class="font-bold text-3xl font-sans mt-5 pb-5 px-3 pb-3 text-center text-white"> Current Favourites </h3>
            <div class="flex overflow-x-auto mx-auto justify-center items-center ">
                
                <table class="table w-full max-w-md z-0 ">
                    <thead  class="bg-slate-700">
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="favourite in favourites" :id="favourite.from + '-' + favourite.to">
                        <td>{{ favourite.from }}</td>
                        <td>{{ favourite.to }}</td>
                        <td>
                            <button class="btn btn-ghost btn-xs" @click="removeFav(favourite.from + '-' + favourite.to)"> Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
    </div>
</template>
<script>
import { remove, getDatabase, ref } from 'firebase/database'
import { getAuth } from 'firebase/auth'
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
                    this.favourites.splice(i, 1)
                    const auth = getAuth()
                    const db = getDatabase()
                    remove(ref(db, 'userFavs/' + auth.currentUser.uid + '/' + favourite.key))
                    // remove()
                }
            }
        },
    }
}
</script>
<style lang="">
    
</style>