<template lang="">
    <!-- starting point should be taken from google maps - should return a longitude/latitude -->
    <!-- when searching for requests, sort by distance away from starting point -->
    <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
    <div class="drawer-content flex flex-col">
        <!-- Navbar -->
        <Nav />
        <!-- Page content here -->
        <div class="container mx-auto">
            <!-- query autocomplete api, maps sdk api -->
            <form>
                <div className="flex form-control text-center mb-10">
                    <div className="justify-center">
                        <input v-model.lazy="input.s_address" type="text" placeholder="Starting Point Address" className="input input-bordered input-warning w-full max-w-md mt-5" />
                        <button type="button" @click='queryMapsStart()' class="btn btn-warning bg-yellow-300 text-black ml-4">Search</button>
                    </div>
                    <div v-if="seenStart" className="mx-auto mt-3">
                      <p>{{ startNeighborhood }}</p>
                        <GMapMap
                            :center="centerStart"
                            :zoom="18"
                            map-type-id="terrain"
                            style="width: 30vw; height: 20rem"
                        >
                            <GMapMarker
                                :key="index"
                                v-for="(m, index) in markersStart"
                                :position="m.position"
                            />
                        </GMapMap>
                    </div>
                    <div class="justify-center">
                        <input v-model.lazy="input.d_address" type="text" placeholder="Destination Point Address" className="input input-bordered input-warning w-full max-w-md mt-5" />
                        <button type="button" @click='queryMapsDest()' class="btn btn-warning bg-yellow-300 text-black ml-4">Search</button>
                    </div>
                    <div v-if="seenDest" className="mx-auto mt-3">
                      <p>{{ destNeighborhood }}</p>
                        <GMapMap
                            :center="centerDest"
                            :zoom="18"
                            map-type-id="terrain"
                            style="width: 30vw; height: 20rem"
                        >
                            <GMapMarker
                                :key="index"
                                v-for="(m, index) in markersDest"
                                :position="m.position"
                            />
                        </GMapMap>
                    </div>
                </div>
                <div class="text-center">
                    <button type="button" class="btn btn-warning bg-yellow-300 text-black mb-5">Submit Request</button>
                </div>
            </form>
        </div>
        <!-- Page content ends here -->
        </div> 
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
              <li><a @click="home()">Home</a></li>
              <li><a @click="profile()">Profile</a></li>
              <li><a @click="favourite()">Favourite</a></li>
              <li><a @click="change()">Switch to Hitcher</a></li>
              <li><a @click="chat()">Chat</a></li>
              <li><a @click="settings()">Account Settings</a></li>
              <hr/>
              <li><a @click="logout()">Logout</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
import MapsService from "../services/MapsService";
import Nav from "../components/Nav.vue";
import { getDatabase, ref, set } from 'firebase/database'
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
      centerStart: { 
        lat: 0.0, lng: 0.0 
      },
      centerDest: { 
        lat: 0.0, lng: 0.0 
      },
      markersStart: [
        {
            position: {
                lat: 0.0, lng: 0.0
            }
        }
      ],
      markersDest: [
        {
            position: {
                lat: 0.0, lng: 0.0
            }
        }
      ],
      seenStart: false,
      seenDest: false,
      startNeighborhood: "",
      destNeighborhood: "",
    };
  },
  mounted() {},
  methods: {
    queryMapsStart() {
      try {
        if (this.input.s_address != "") {
          MapsService.queryMaps(this.input.s_address).then((res) => {
            if (res.data.status == "ZERO_RESULTS") {
              alert("Unable to locate, please try again.");
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
                this.input.s_address = res.data.results[0].formatted_address
                this.writeReqData(this.input.s_address)
                this.centerStart.lat = res.data.results[0].geometry.location.lat
                this.centerStart.lng = res.data.results[0].geometry.location.lng
                this.markersStart[0].position.lat = res.data.results[0].geometry.location.lat
                this.markersStart[0].position.lng = res.data.results[0].geometry.location.lng
                this.startNeighborhood = neighborhood
                this.seenStart = true
              } else {
                this.input.s_address = "";
                alert("Invalid address (no neighborhood), please try again.");
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
            if (res.data.status == "ZERO_RESULTS") {
              alert("Unable to locate, please try again.");
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
                this.input.d_address = res.data.results[0].formatted_address
                this.writeReqData(this.input.d_address)
                this.centerDest.lat = res.data.results[0].geometry.location.lat
                this.centerDest.lng = res.data.results[0].geometry.location.lng
                this.markersDest[0].position.lat = res.data.results[0].geometry.location.lat
                this.markersDest[0].position.lng = res.data.results[0].geometry.location.lng
                this.destNeighborhood = neighborhood
                this.seenDest = true
              } else {
                this.input.d_address = "";
                alert("Invalid address (no neighborhood), please try again.");
              }
              // this.initMap()
            }
          });
        } else {
          alert("Please enter a valid location.");
        }
      } catch (error) {}
    },
    writeReqData (addr) {
      // const db = getDatabase()
      // set(ref(db, 'test/' + 0), {
      //   test_str: "test_str",
      //   addr: addr
      // });
    },
    home() {
            this.$router.push('../')
    },
    profile() {
        this.$router.push('/profile')
    },
    favourite() {
        this.$router.push('/newFav')
    },
    chat() {
        this.$router.push('/chat')
    },
    settings() {
        this.$router.push('/profile')
    },
    logout(){
        this.$router.push('/login')
    }
  },
};
</script>
<style lang="">
</style>