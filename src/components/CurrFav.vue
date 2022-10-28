<template lang="">
    <div>
        <div class="flex justify-center items-center text-center mt-10 mb-5 px-2 sm:px-0">
            <span v-if="favourites.length != 0" class="text-center text-3xl text-black font-semibold bg-white bg-opacity-80 rounded-lg py-1 px-2 max-w-lg w-full">
                Current Favourites
            </span>
        </div>
        <!-- <span class="justify-center items-center font-bold text-3xl font-sans mt-5 pb-5 px-3 pb-3 bg-white text-center text-black"> Current Favourites </span> -->
            <div class="flex overflow-x-auto mx-auto justify-center items-center px-2 sm:px-0">
                
                <table v-if="favourites.length != 0" class="table w-full max-w-lg z-0">
                    <thead>
                    <tr >
                        <th class="bg-slate-300 bg-opacity-90">From</th>
                        <th class="bg-slate-300 bg-opacity-90">To</th>
                        <th class="bg-slate-300 bg-opacity-90"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="favourite in favourites" :id="favourite.from + '-' + favourite.to">
                        <td class="bg-opacity-90">{{ favourite.from }}</td>
                        <td class="bg-opacity-90">{{ favourite.to }}</td>
                        <td class="bg-opacity-90">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 hover:cursor-pointer" @click="removeFav(favourite.from + '-' + favourite.to)">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>

                            <!-- <button class="btn btn-ghost btn-xs" @click="removeFav(favourite.from + '-' + favourite.to)"> Delete</button> -->
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