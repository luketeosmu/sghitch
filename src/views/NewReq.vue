<template lang="">
    <div>
        <!-- starting point should be taken from google maps - should return a longitude/latitude -->
        <!-- when searching for requests, sort by distance away from starting point -->
        <Nav/>
        <div class="container mx-auto">
            <!-- query autocomplete api, maps sdk api -->
            <form>
                <div className="flex form-control text-center mb-10">
                    <div className="justify-center">
                        <input v-model.lazy="input.s_address" type="text" placeholder="Starting Point e.g. Tampines" className="input input-bordered input-warning w-full max-w-md mt-5" />
                        <button type="button" @click='queryMapsStart()' class="btn btn-warning bg-yellow-300 text-black ml-4">Search</button>
                    </div>
                    <div v-if="seenStart" className="mx-auto">
                        <GMapMap
                            :center="center"
                            :zoom="20"
                            map-type-id="terrain"
                            style="width: 50vw; height: 20rem"
                        >
                            <GMapMarker
                                :key="index"
                                v-for="(m, index) in markers"
                                :position="m.position"
                            />
                        </GMapMap>
                    </div>
                    <div class="justify-center">
                        <input v-model.lazy="input.d_address" type="text" placeholder="Destination e.g. Woodlands" className="input input-bordered input-warning w-full max-w-md mt-5" />
                        <button type="button" @click='queryMapsDest()' class="btn btn-warning bg-yellow-300 text-black ml-4">Search</button>
                    </div>
                </div>
                <div class="text-center">
                    <button type="button" class="btn btn-warning bg-yellow-300 text-black">Submit Request</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import MapsService from "../services/MapsService";
import Nav from "../components/Nav.vue";
// import './maps.css'

export default {
  name: "NewReq",
  components: {
    MapsService,
    Nav,
  },
  props: {},
  data() {
    return {
      input: {
        s_address: "",
        d_address: "",
      },
      center: { 
        lat: 0.0, lng: 0.0 
      },
      markers: [
        {
            position: {
                lat: 0.0, lng: 0.0
            }
        }
      ],
      seenStart: false
    };
  },
  mounted() {},
  methods: {
    queryMapsStart() {
      try {
        if (this.input.s_address != "") {
          MapsService.queryMaps(this.input.s_address).then((res) => {
            if (res == "failed") {
              alert("Invalid");
            } else {
              // this.$router.push('/')
              console.log(res.data.results[0].geometry.location);
              let address = res.data.results[0].address_components;
              let neighborhood = "";
              for (let component of address) {
                if (component.types.includes("neighborhood")) {
                  neighborhood = component.long_name;
                  break;
                }
              }
              if (neighborhood != "") {
                //display map
                this.center.lat = res.data.results[0].geometry.location.lat
                this.center.lng = res.data.results[0].geometry.location.lng
                this.markers[0].position.lat = res.data.results[0].geometry.location.lat
                this.markers[0].position.lng = res.data.results[0].geometry.location.lng
                
                this.seenStart = true
              } else {
                this.input.s_address = "";
                alert("Invalid address, please try again");
              }
              // this.initMap()
            }
          });
        } else {
          alert("Please enter a valid location.");
        }
      } catch (error) {}
    },
    queryMapsDest() {
      try {
        if (this.input.d_address != "") {
          MapsService.queryMaps(this.input.d_address).then((res) => {
            if (res == "failed") {
              alert("Invalid");
            } else {
              // this.$router.push('/')
              console.log(res);
            }
          });
        } else {
          alert("Please enter a valid location.");
        }
      } catch (error) {}
    },
    initMap() {},

    //todo: Load the map using Google Maps API

    getLoc(action) {
      //todo: Read the user input; make an Async request to load the address/postcode; and re-center the map
      //Hint: you can use function encodeURI to generate an encoded address string from the user input.
    },
  },
};
</script>
<style lang="">
</style>