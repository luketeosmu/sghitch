<template lang="">
    <!-- starting point should be taken from google maps - should return a longitude/latitude -->
    <!-- when searching for requests, sort by distance away from starting point -->
    <div class="drawer bg-no-repeat bg-cover bg-center bg-merlion-background">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
    <div class="drawer-content flex flex-col ">
        <!-- Navbar -->
        <Nav />
        <!-- Page content here -->
        <span class="mt-10 w-96 sm:w-[600px] mx-auto text-center text-3xl text-black font-roboto font-semibold bg-white bg-opacity-60 rounded-lg py-1 px-2 mb-10 ">
                New Request
        </span>
        <div class=" inline-block ml-auto mr-auto shadow-xl rounded-lg w-96 sm:w-[600px]  px-3 py-5 relative mt-3 border bg-white bg-opacity-95 ">
            <!-- query autocomplete api, maps sdk api -->
            <form>
              <div class="grid grid-row-4 form-control px-2 sm:px-0 items-center mx-auto mb-5">
                <!-- <span class="text-3xl rounded-lg py-2 text-black font-bold mb-5">Add Request</span> -->
                <div class="flex form-control">
                  <label class="label">
                      <span class="label-text text-black bg-slate-300 bg-opacity-80 px-2 rounded-lg">Date & Time of Request</span>
                    </label>
                  <input v-model.lazy="input.datetime" type="datetime-local" placeholder="Date and Time" className="input input-bordered w-full bg-opacity-90" />
                </div>
                    <!-- <div class="">
                        <input v-model.lazy="input.pax" type="number" placeholder="No. of Pax" className="input input-bordered input-warning w-full max-w-xs sm:max-w-md mt-5" />
                    </div> -->
                    <div class="inline-flex">
                      <div class="flex form-control w-1/2 mr-5">
                          <label class="label">
                            <span class="label-text text-black bg-slate-300 bg-opacity-80 px-2 rounded-lg">Pax</span>
                          </label>
                          <select class="select select-bordered bg-opacity-90" v-model.lazy="input.pax">
                            <option selected>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                      </div>  
                      <div v-if="this.user.type == 'driver'" class="flex form-control w-1/2">
                          <label class="label">
                            <span class="label-text text-black bg-slate-300 bg-opacity-80 px-2 rounded-lg">Vehicle Type</span>
                          </label>
                          <select class="select select-bordered bg-opacity-90" v-model.lazy="input.vehicleType">
                            <option selected>Car</option>
                            <option>Van</option>
                            <option>Motorcycle</option>
                            <option>Lorry</option>
                          </select>
                      </div>  
                      <div v-else class="flex form-control w-1/2 ">
                          <label class="label">
                              <span class="label-text text-black bg-slate-300 bg-opacity-80 px-2 rounded-lg">Preferred Vehicle Type</span>
                          </label>
                          <select class="select select-bordered bg-opacity-90" v-model.lazy="input.vehiclePreference">
                              <option selected>Car Only</option>
                              <option>All Vehicles</option>
                              <option>Car, Lorry & Van Only</option>
                              <option>Car & Motorcycle Only</option>
                          </select>
                      </div>
                  </div>
                    
                  <div className="inline-flex mt-5 ">
                    <input v-model.lazy="input.s_address" type="text" placeholder="Starting Point Address" className="input input-bordered w-full bg-opacity-90 "  />
                    <button type="button" @click='queryMapsStart()' class="btn btn-ghost hover:bg-slate-700 bg-slate-500 text-white ml-4 bg-opacity-90">Search</button>
                  </div>
                    <div v-if="seenStart" className="mt-3">
                      <p>{{ input.startNeighborhood }}</p>
                        <GMapMap
                            :center="centerStart"
                            :zoom="18"  
                            map-type-id="terrain"
                            style="width: auto; height: 20rem"
                        >
                            <GMapMarker
                                :key="index"
                                v-for="(m, index) in markersStart"
                                :position="m.position"
                            />
                        </GMapMap>
                    </div>
                    <div class="inline-flex mt-5">
                        <input v-model.lazy="input.d_address" type="text" placeholder="Destination Point Address" className="input input-bordered w-full bg-opacity-90" />
                        <button type="button" @click='queryMapsDest()' class="btn btn-ghost hover:bg-slate-700 bg-slate-600 text-white ml-4 bg-opacity-90">Search</button>
                    </div>
                    <div v-if="seenDest" className="mt-3">
                      <p>{{ input.destNeighborhood }}</p>
                        <GMapMap
                            :center="centerDest"
                            :zoom="18"
                            map-type-id="terrain"
                            style="width: auto; height: 20rem"
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
                    <button type="button" @click="writeReqData" class="btn btn-ghost hover:bg-slate-700 bg-slate-600 text-white ml-5 bg-opacity-90">Submit</button>
                </div>
            </form>
        </div>
        <!-- Page content ends here -->
        </div> 
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
              <li><a @click="home()">Home</a></li>
              <li><a @click="favourite()">Favourite</a></li>
              <li><a @click="change()">Switch to Hitcher</a></li>
              <li><a @click="chat()">Offers</a></li>
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
// import { getAuth } from 'firebase/auth'
// import { getDatabase, ref, set } from 'firebase/database'
import { getAuth, signOut } from 'firebase/auth'
import { getDatabase, ref, child, set, get, update } from 'firebase/database';
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
      user: {
        type: ""
      },
      auth: null,
      input: {
        s_address: "",
        d_address: "",
        startNeighborhood: "",
        destNeighborhood: "",
        pax: 1,
        datetime: "",
        user: "",
        uid: "",
        vehicleType: "Car",
        vehiclePreference: "Car Only"
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
    };
  },
  mounted(){
      this.auth = getAuth();
      this.input.user = this.auth.currentUser.displayName
      this.input.uid = this.auth.currentUser.uid
      this.dbRef = ref(getDatabase())
      get(child(this.dbRef, `userTypes/${this.auth.currentUser.uid}`)).then((snapshot) => {
          if (snapshot.exists()){
              if(snapshot.val().type == "hitcher"){
                  this.user.type = "hitcher"
              } else {
                  this.user.type = "driver"
              }
          } else {
              alert("Application encountered a severe issue. Please login again.")
              this.logout()
          }
      }).catch((error) => {
          console.error(error)
          this.logout()
      })
  },
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
              let sNeighborhood = "";
              for (let component of address) {
                if (component.types.includes("neighborhood")) {
                  sNeighborhood = component.long_name;
                  break;
                }
              }
              if (sNeighborhood != "") {
                //display map
                this.input.s_address = res.data.results[0].formatted_address
                this.centerStart.lat = res.data.results[0].geometry.location.lat
                this.centerStart.lng = res.data.results[0].geometry.location.lng
                this.markersStart[0].position.lat = res.data.results[0].geometry.location.lat
                this.markersStart[0].position.lng = res.data.results[0].geometry.location.lng
                this.input.startNeighborhood = sNeighborhood
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
              let dNeighborhood = "";
              for (let component of address) {
                if (component.types.includes("neighborhood")) {
                  dNeighborhood = component.long_name;
                  break;
                }
              }
              if (dNeighborhood != "") {
                this.input.d_address = res.data.results[0].formatted_address
                this.centerDest.lat = res.data.results[0].geometry.location.lat
                this.centerDest.lng = res.data.results[0].geometry.location.lng
                this.markersDest[0].position.lat = res.data.results[0].geometry.location.lat
                this.markersDest[0].position.lng = res.data.results[0].geometry.location.lng
                this.input.destNeighborhood = dNeighborhood
                this.seenDest = true

                console.log(this.input.destNeighborhood)
                console.log(this.input.datetime)
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
    writeReqData () {
      //should check if all fields have been entered before setting and redirecting
      console.log(this.input.pax)
      console.log(this.input.vehicleType)
      console.log(this.input.vehiclePreference)
      const db = getDatabase()
      set(ref(db, 'userReqs/' + this.auth.currentUser.uid), this.input);
      // set(push(ref(db, 'userReqs/')), this.input);
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
        this.$router.push('/accountsettings')
    },
    logout(){
        this.$router.push('/login')
    },
    change() {
        const db = getDatabase()
        if(this.user.type == "driver"){
            this.user.type = "hitcher"
            update(ref(db, 'userTypes/' + this.auth.currentUser.uid), {
                type: this.user.type
            })
        } else {
            this.user.type = "driver"
            update(ref(db, 'userTypes/' + this.auth.currentUser.uid), {
                type: this.user.type
            })
        }
        location.reload()
    },
  },
};
</script>
<style lang="">
</style>