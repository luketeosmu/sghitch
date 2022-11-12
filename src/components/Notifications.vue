<template>
        <li v-for="offer of this.offers"><a @click="change()" class="active:bg-slate-300 text-black">{{ offer.user }} {}</a></li> 
</template>

<script>
export default {
    name: "Notifications",
    data() {
        return {
            offers: [
                {
                    centerStart: {
                            lat: "1.360540",
                            lng: "103.957380"
                        },
                        centerDest: {
                            lat: "1.431630",
                            lng: "103.785590",
                        },
                        s_address: "Tampines St 45 529498",
                        datetime: "2022-11-12T12:40",
                        startNeighborhood: "Tampines",
                        pax: "3",
                        available: "1",
                        d_address: "Woodlands Ave 1 730308",
                        destNeighborhood: "Woodlands",
                        uid: "12345",
                        user: "luke",
                        vehiclePreference: "Car only",
                        vehicleType: "Car",
                        askingPrice: "10.00"
                }
            ]
        }
    }
}
</script>

<style>

</style>