<template lang="">
    <!-- starting point should be taken from google maps - should return a longitude/latitude -->
    <!-- when searching for requests, sort by distance away from starting point -->
    <div class="drawer bg-no-repeat bg-cover bg-center bg-merlion-background">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
    <div class="drawer-content flex flex-col pb-10">
        <!-- Navbar -->
        <Nav :userType="this.user.type"/>
        <!-- Page content here -->
        <span class="mt-10 w-96 sm:w-[600px] mx-auto text-center text-3xl text-black font-roboto font-semibold bg-white bg-opacity-60 rounded-lg py-1 px-2 mb-10 ">
                New Request
        </span>
        <div class=" inline-block mx-auto shadow-xl rounded-lg w-96 sm:w-[600px]  px-3 py-5 relative mt-3 border bg-white bg-opacity-95 ">
            <!-- query autocomplete api, maps sdk api -->
            <form>
              <div class="grid grid-rows-8 form-control px-2 sm:px-0 items-center mx-auto mb-5">
                <!-- <span class="text-3xl rounded-lg py-2 text-black font-bold mb-5">Add Request</span> -->
                <div class="grid sm:grid-cols-2">
                  <div class="sm:mr-5 flex form-control">
                    <label class="label">
                      <span class="label-text text-black bg-slate-300 bg-opacity-80 px-2 rounded-lg">Date & Time of Request</span>
                    </label> 
                    <input v-model.lazy="input.datetime" type="datetime-local" placeholder="Date and Time" :className="invalidDateTime ? 'input input-bordered w-full bg-opacity-90 border-red-400 border-2' : 'input input-bordered w-full bg-opacity-90'" />
                  </div>

                  <div class="flex form-control mt-3 sm:mt-0" v-if="this.user.type == 'hitcher'">
                    <div class="tooltip " data-tip="This is the asking price you can provide to other users for them to gauge how much to offer you">
                      <label class="label">
                        <span class="label-text text-black bg-slate-300 bg-opacity-80 px-2 rounded-lg">Asking Price</span>
                      </label>
                    </div>
                    <input v-model.lazy="askingPrice" type="number" placeholder="0.00" :className="invalidPrice ? 'input input-bordered w-full bg-opacity-90 border-red-400 border-2' : 'input input-bordered w-full bg-opacity-90'" />
                  </div>
                  <div class="flex form-control mt-3 sm:mt-0" v-else>
                    <!-- <div class="tooltip " data-tip="This is the asking price you can provide to other users for them to gauge how much to offer you"> -->
                      <label class="label">
                        <span class="label-text text-black bg-slate-300 bg-opacity-80 px-2 rounded-lg ">Vehicle Registration Number</span>
                      </label>
                    <!-- </div> -->
                    <input v-model.lazy="vehicleNo" type="text" placeholder="e.g. SLPxxxxA" :className="invalidVehicleNo ? 'input input-bordered w-full bg-opacity-90 border-red-400 border-2' : 'input input-bordered w-full bg-opacity-90'" />
                  </div>
                </div>
                    <!-- <div class="">
                        <input v-model.lazy="input.pax" type="number" placeholder="No. of Pax" className="input input-bordered input-warning w-full max-w-xs sm:max-w-md mt-5" />
                    </div> -->
                <div class="grid sm:grid-cols-2">
                  <div class="flex form-control sm:mr-5 mt-3 sm:mt-2" v-if="this.user.type == 'hitcher'">
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
                  <div class="flex form-control sm:mr-5 mt-3 sm:mt-2" v-else>
                      <label class="label">
                        <span class="label-text text-black bg-slate-300 bg-opacity-80 px-2 rounded-lg">Available Seats</span>
                      </label>
                      <select class="select select-bordered bg-opacity-90" v-model.lazy="input.pax">
                        <option selected>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                      </select>
                  </div>
                  <div>
                    <div v-if="this.user.type == 'driver'" class="flex form-control mt-3 sm:mt-2">
                        <label class="label">
                          <span class="label-text text-black bg-slate-300 bg-opacity-80 px-2 rounded-lg">Vehicle Type</span>
                        </label>
                        <select class="select select-bordered bg-opacity-90" v-model.lazy="vehicleType">
                          <option selected>Car</option>
                          <option>Van</option>
                          <option>Motorcycle</option>
                          <option>Lorry</option>
                        </select>
                    </div>  
                    <div v-else class="flex form-control mt-3 sm:mt-2">
                        <label class="label">
                            <span class="label-text text-black bg-slate-300 bg-opacity-80 px-2 rounded-lg">Preferred Vehicle Type</span>
                        </label>
                        <select class="select select-bordered bg-opacity-90" v-model.lazy="vehiclePreference">
                            <option selected>All Vehicles</option>
                            <option>Car Only</option>
                            <option>Car, Lorry & Van Only</option>
                            <option>Car & Motorcycle Only</option>
                        </select>
                    </div>
                  </div>
                </div>
                <div class="">
                  <div className="inline-flex mt-3 sm:mt-5 sm:w-full">
                    <input v-model.lazy="input.s_address" type="text" placeholder="Starting Point Address" :className="invalidStartNhood ? 'input input-bordered sm:w-full bg-opacity-90 border-red-400 border-2' : 'input input-bordered sm:w-full bg-opacity-90'"/>
                    <button type="button" @click='queryMapsStart()' class="btn btn-ghost hover:bg-slate-700 bg-slate-600 text-white ml-4 bg-opacity-90">Search</button>
                  </div>
                  <div v-if="invalidStartAddress" class="text-red-400">
                    <small>Invalid Starting Address. Please try again.</small>
                  </div>
                  <div v-if="seenStart" className="mt-3">
                      <p class="text-center mb-3">Vicinity: <b>{{ input.startNeighborhood }}</b></p>
                        <GMapMap
                            :center="input.centerStart"
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
                </div>
                <div class="grid grid-cols-1">
                  <div class="inline-flex mt-3 sm:mt-5 sm:w-full">
                      <input v-model.lazy="input.d_address" type="text" placeholder="Destination Point Address" :className="invalidDestNhood ? 'input input-bordered sm:w-full bg-opacity-90 border-red-400 border-2' : 'input input-bordered sm:w-full bg-opacity-90'" />
                      <button type="button" @click='queryMapsDest()' class="btn btn-ghost hover:bg-slate-700 bg-slate-600 text-white ml-4 bg-opacity-90">Search</button>
                  </div>
                  <div v-if="invalidDestAddress" class="text-red-400">
                    <small>Invalid Destination Address. Please try again.</small>
                  </div>
                  <div v-if="seenDest" className="mt-3">
                    <p>{{ input.destNeighborhood }}</p>
                      <GMapMap
                          :center="input.centerDest"
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
              </div>
              <div class="text-center text-red-400" v-if="invalidInput">
                <small class="mb-2">Failed to submit request. Please rectify errors and try again.</small>
              </div>
              <div class="text-center mt-5 ">
                <button type="button" @click="writeReqData" :class="loading ? 'btn btn-ghost loading hover:bg-slate-700 bg-slate-600 text-white ml-5 bg-opacity-90' : 'btn btn-ghost hover:bg-slate-700 bg-slate-600 text-white ml-5 bg-opacity-90'">Submit</button>
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
              <li v-if="this.user.type == 'driver'" ><a  @click="change()">Switch to Hitcher</a></li>
              <li v-else><a @click="change()">Switch to Driver</a></li>
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
import { getDatabase, ref, child, set, get, update, push } from 'firebase/database';
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
        centerStart: { 
        lat: 0.0, lng: 0.0 
        },
        centerDest: { 
          lat: 0.0, lng: 0.0 
        },
      },
      vehicleType: "Car",
      vehiclePreference: "All Vehicles",
      askingPrice: "",
      vehicleNo: "",
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

      invalidDateTime: false,
      invalidPrice: false,
      invalidStartNhood: false,
      invalidDestNhood: false,
      invalidVehicleNo: false,
      invalidInput: false,

      invalidStartAddress: false,
      invalidDestAddress: false,

      loading: false,
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
      this.setDateTime()
  },
  methods: {
    setDateTime() {
      let today = new Date()
      let year = today.getFullYear()
      let month = today.getMonth() + 1
      let day = today.getDate()
      let mins = ""
        if(today.getMinutes() < 10) {
            mins = "0" + today.getMinutes()
        } else {
            mins = today.getMinutes()
      }
      let hour = today.getHours()
      let str = year + "-" + month + "-" + day + "T" + hour + ":" + mins
      // console.log(year + "-" + month + "-" + day + "T" + hour + ":" + mins)
      this.input.datetime = str
    },
    queryMapsStart() {
      try {
        if (this.input.s_address != "") {
          MapsService.queryMaps(this.input.s_address).then((res) => {
            if (res.data.status == "ZERO_RESULTS") {
              // alert("Unable to locate, please try again.");
              this.invalidStartAddress = true
            } else {
              // this.$router.push('/')
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
                this.invalidStartAddress = false
                this.invalidStartNhood = false
                this.input.s_address = res.data.results[0].formatted_address
                this.input.centerStart.lat = res.data.results[0].geometry.location.lat
                this.input.centerStart.lng = res.data.results[0].geometry.location.lng
                this.markersStart[0].position.lat = res.data.results[0].geometry.location.lat
                this.markersStart[0].position.lng = res.data.results[0].geometry.location.lng
                this.input.startNeighborhood = sNeighborhood
                this.seenStart = true
              } else {
                this.input.s_address = "";
                // alert("Invalid address (no neighborhood), please try again.");
                this.invalidStartAddress = true
              }
              // this.initMap()
            }
          });
        } else {
          // alert("Please enter a valid location.");
          this.invalidStartAddress = true
        }
      } catch (error) {}
    },
    queryMapsDest() {
      try {
        if (this.input.d_address != "") {
          MapsService.queryMaps(this.input.d_address).then((res) => {
            if (res.data.status == "ZERO_RESULTS") {
              // alert("Unable to locate, please try again.");
              this.invalidDestAddress = true
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
                this.invalidDestAddress = false
                this.invalidDestNhood = false
                this.input.d_address = res.data.results[0].formatted_address
                this.input.centerDest.lat = res.data.results[0].geometry.location.lat
                this.input.centerDest.lng = res.data.results[0].geometry.location.lng
                this.markersDest[0].position.lat = res.data.results[0].geometry.location.lat
                this.markersDest[0].position.lng = res.data.results[0].geometry.location.lng
                this.input.destNeighborhood = dNeighborhood
                this.seenDest = true

                console.log(this.input.destNeighborhood)
                console.log(this.input.datetime)
              } else {
                this.input.d_address = "";
                // alert("Invalid address (no neighborhood), please try again.");
                this.invalidDestAddress = true
              }
              // this.initMap()
            }
          });
        } else {
          // alert("Please enter a valid location.");
          this.invalidDestAddress = true
        }
      } catch (error) {}
    },
    writeReqData () {
      //should check if all fields have been entered before setting and redirecting

      if(this.user.type == 'hitcher'){
        // set(ref(db, 'hitcherReqs/' + this.auth.currentUser.uid), this.input);
        if(this.askingPrice == "" || this.input.startNeighborhood == "" || this.input.destNeighborhood == "" || this.input.datetime == ""){
          if(this.askingPrice == ""){
            this.invalidPrice = true
          } else {
            this.invalidPrice = false
          }

          if(this.input.startNeighborhood == ""){
            this.invalidStartNhood = true
          } else {
            this.invalidStartNhood = false
          }

          if(this.input.destNeighborhood == ""){
            this.invalidDestNhood = true
          } else {
            this.invalidDestNhood = false
          }

          if(this.input.datetime == ""){
            this.invalidDateTime = true
          } else {
            this.invalidDateTime = false
          }
          return
        }
        this.loading = true
        let temp = this.input
        temp['vehiclePreference'] = this.vehiclePreference
        temp['askingPrice'] = this.askingPrice
        const db = getDatabase();
        const postListRef = ref(db, 'hitcherReqs');
        const newPostRef = push(postListRef);
        set(newPostRef, temp);
        // alert("Successfully submitted request!") //change to modal
        this.$router.push('/chat')
        // console.log(this.input.datetime)
      } else {
        if(this.vehicleNo.length < 3 || this.input.startNeighborhood == "" || this.input.destNeighborhood == "" || this.input.datetime == ""){
          this.invalidInput = true
          if(this.vehicleNo.length < 3){
            this.invalidVehicleNo = true
          } else {
            this.invalidVehicleNo = false
          }

          if(this.input.startNeighborhood == ""){
            this.invalidStartNhood = true
          } else {
            this.invalidStartNhood = false
          }

          if(this.input.destNeighborhood == ""){
            this.invalidDestNhood = true
          } else {
            this.invalidDestNhood = false
          }

          if(this.input.datetime == ""){
            this.invalidDateTime = true
          } else {
            this.invalidDateTime = false
          }
          return
        } else {
          this.invalidInput = false
        }
        this.loading = true
        let temp = this.input
        temp['vehicleType'] = this.vehicleType
        temp['vehicleNo'] = this.vehicleNo
        // set(ref(db, 'driverReqs/' + this.auth.currentUser.uid), temp);
        const db = getDatabase();
        const postListRef = ref(db, 'driverReqs');
        const newPostRef = push(postListRef);
        set(newPostRef, temp);
        alert("Successfully submitted request!") //change to modal
        this.$router.push('/')
        // console.log(this.input.datetime)
      }
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
        signOut(this.auth).then(() => {
            this.$router.push('/login')
        })
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