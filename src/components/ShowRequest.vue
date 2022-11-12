<template>
  <div>
    {{ this.request.s_address }} to {{ this.request.d_address }}
  </div>
</template>

<script>
export default {
    name: "ShowRequest", 
    data() {
        return {
            request: {
                        centerStart: {
                            lat: "1.360540",
                            lng: "103.957380"
                        },
                        centerDest: {
                            lat: "1.431630",
                            lng: "103.785590",
                        },
                        s_address: "Tampines St 45 529498",
                        datetime: "2022-11-12T00:40",
                        startNeighborhood: "Tampines",
                        pax: "3",
                        available: "1",
                        d_address: "Woodlands Ave 1 730308",
                        destNeighborhood: "Woodlands",
                        uid: "12345",
                        user: "luke",
                        vehiclePreference: "Car only",
                        vehicleType: "Car",
                        askingPrice: "10.00",
                        status: "pending"
                    },
        }
    }
}
</script>

<style>

</style>