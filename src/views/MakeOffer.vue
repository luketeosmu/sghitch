<template lang="">
    <!-- starting point should be taken from google maps - should return a longitude/latitude -->
    <!-- when searching for requests, sort by distance away from starting point -->
    <div class="drawer bg-no-repeat bg-cover bg-center bg-garden-background">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
    <div class="drawer-content flex flex-col pb-10">
        <!-- Navbar -->
        <Nav :userType="this.user.type"/>
        <!-- Page content here -->
        <span v-if="this.user.type == 'hitcher'" class="mt-10 w-[350px] sm:w-[600px] mx-auto text-center text-3xl text-black font-roboto font-semibold bg-white bg-opacity-60 rounded-lg py-1 px-2 mb-10 ">
                Make Offer
        </span>
        <span v-else class="mt-10 w-[350px] sm:w-[600px] mx-auto text-center text-3xl text-black font-roboto font-semibold bg-white bg-opacity-60 rounded-lg py-1 px-2 mb-10 ">
                Error 404: Not Found<br>
        </span>
        <div v-if="this.user.type == 'hitcher'" class=" inline-block mx-auto shadow-xl rounded-lg w-[350px] sm:w-[600px] px-3 py-5 relative mt-3 border bg-white bg-opacity-95 ">
            <!-- query autocomplete api, maps sdk api -->
            <form>
              <div class="grid grid-rows-8 form-control px-2 sm:px-0 items-center mx-auto mb-5">
                <!-- <span class="text-3xl rounded-lg py-2 text-black font-bold mb-5">Add Request</span> -->
                <div class="">
                  <div class="flex form-control">
                    <label class="label">
                      <span class="label-text text-black bg-slate-300 bg-opacity-80 px-2 rounded-lg">Date & Time of Request</span>
                    </label> 
                    <input v-model.lazy="input.datetime" type="datetime-local" placeholder="Date and Time" className="input input-bordered w-full bg-opacity-90" />
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
                    <div class="flex form-control mt-3 sm:mt-2" v-if="this.user.type == 'hitcher'">
                      <label class="label">
                        <span class="label-text text-black bg-slate-300 bg-opacity-80 px-2 rounded-lg">Offer Price</span>
                      </label>
                    <input v-model.lazy="askingPrice" type="number" placeholder="0.00" :className="invalidPrice ? 'input input-bordered w-full bg-opacity-90 border-red-400 border-2' : 'input input-bordered w-full bg-opacity-90'"/>
                  </div>
                  </div>
                </div>
                <div class="">
                  <div class="mt-3 sm:mt-5">Driver's start: <b>{{ rStartNeighborhood }}</b></div>
                  <div className="inline-flex mt-1 sm:w-full">
                    <input v-on:keyup.enter="queryMapsStart()" v-model="input.s_address" type="text" placeholder="Starting Point Address" :className="invalidStartNhood ? 'input input-bordered sm:w-full bg-opacity-90 border-red-400 border-2' : 'input input-bordered sm:w-full bg-opacity-90'"/>
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
                  <div class="mt-3 sm:mt-5">Driver's destination: <b>{{ rDestNeighborhood }}</b></div>
                      <div class="inline-flex mt-1 sm:w-full">
                          <input v-on:keyup.enter="queryMapsDest()" v-model="input.d_address" type="text" placeholder="Destination Point Address" :className="invalidDestNhood ? 'input input-bordered sm:w-full bg-opacity-90 border-red-400 border-2' : 'input input-bordered sm:w-full bg-opacity-90'" />
                          <button type="button" @click='queryMapsDest()' class="btn btn-ghost hover:bg-slate-700 bg-slate-600 text-white ml-4 bg-opacity-90">Search</button>
                      </div>
                  <div v-if="invalidDestAddress" class="text-red-400">
                    <small>Invalid Destination Address. Please try again.</small>
                  </div>
                  <div v-if="seenDest" className="mt-3">
                    <p class="text-center mb-3">Vicinity: <b>{{ input.destNeighborhood }}</b></p>
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
                          <button type="button" @click="writeReqData" class="btn btn-ghost hover:bg-slate-700 bg-slate-600 text-white ml-5 bg-opacity-90">Submit</button>
                      </div>
                  </form>
                </div>
        <!-- Page content ends here -->
        </div> 
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                <li>
                    <a @click="home()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        Home
                    </a>
                </li>
                <li>
                    <a @click="newReq()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        New Request
                    </a>
                </li>
                <li>
                    <a @click="favourite()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        Edit Favourites
                    </a>
                </li>
                <li v-if="this.user.type == 'driver'" >
                    <a  @click="change()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>
                        Switch to Hitcher
                    </a>
                </li>
                <li v-else>
                    <a @click="change()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>
                        Switch to Driver
                    </a>
                </li>
                <li>
                    <a @click="settings()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Account Settings
                    </a>
                </li>
                <hr/>
                <li>
                    <a @click="logout()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                        Logout
                    </a>
                </li>
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
  name: "MakeOffer",
  components: {
    MapsService,
    Nav,
  },
  props: {},
  data() {
    return {
      requestId: this.$route.params.id,
      errorMsg: "",
      user: {
        type: ""
      },
      auth: null,
      rStartNeighborhood: "",
      rDestNeighborhood: "",
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
        vehiclePreference: "All Vehicles",
        centerStart: { 
        lat: 0.0, lng: 0.0 
        },
        centerDest: { 
          lat: 0.0, lng: 0.0 
        },
      },
      askingPrice: "",
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

      invalidInput: false,
      invalidPrice: false,
      invalidStartNhood: false,
      invalidDestNhood: false,

      invalidStartAddress: false,
      invalidDestAddress: false,
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

      this.showNeighborhoods()

      this.setDateTime()
  },
  methods: {
    showNeighborhoods(){
      const auth = getAuth()
      const dbRef = ref(getDatabase());
      get(child(dbRef, `driverReqs/${this.requestId}`)).then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          let request = snapshot.val()
          this.rStartNeighborhood = request.startNeighborhood
          this.rDestNeighborhood = request.destNeighborhood
        } else {
          console.log("No data available");
          // alert("No data available!")
        }
      }).catch((error) => {
        console.error(error);
      });
    },
    setDateTime() {
      let today = new Date()
      let year = today.getFullYear()
      let month = today.getMonth() + 1
      let day = today.getDate()
      let mins = ""
      let hour = ""
      if(today.getMinutes() < 10) {
          mins = "0" + today.getMinutes()
      } else {
          mins = today.getMinutes()
      }
      if(today.getHours() < 10) {
        hour = "0" + today.getHours()
      } else {
        hour = today.getHours()
      }
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

      this.invalidPrice = false
      if(this.askingPrice == "" || this.input.startNeighborhood == "" || this.input.destNeighborhood == ""){
        this.invalidInput = true
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

        return
      } else {
          this.invalidInput = false
      }

      const auth = getAuth()
      let offer = {}
      offer['datetime'] = this.input.datetime
      offer['pax'] = this.input.pax
      offer['uid'] = auth.currentUser.uid
      offer['displayName'] = auth.currentUser.displayName
      offer['askingPrice'] = this.askingPrice
      offer['startAddress'] = this.input.s_address
      offer['destAddress'] = this.input.d_address
      offer['rid'] = this.requestId
      offer['status'] = 'pending'
      //retrieve
      let request = null
      const dbRef = ref(getDatabase());
      get(child(dbRef, `driverReqs/${this.requestId}`)).then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          request = snapshot.val()

          //validation
          // if(this.input.startNeighborhood != request.startNeighborhood){
          //   this.invalidStartNhood = true
          //   this.invalidInput = true
          //   return
          // } else {
          //   this.invalidInput = false
          //   this.invalidStartNhood = false
          // }

          // if(this.input.destNeighborhood != request.destNeighborhood){
          //   this.invalidDestNhood = true
          //   this.invalidInput = true
          //   return
          // } else {
          //   this.invalidInput = false
          //   this.invalidDestNhood = false
          // }

          offer['requesterId'] = request.uid
          offer['driverName'] = request.user
          offer['hitcherName'] = auth.currentUser.displayName
          const db = getDatabase();
          const postListRef = ref(db, 'driverOffers/' + request.uid);
          const newPostRef = push(postListRef);
          set(newPostRef, offer)
          .then(() => {
              this.$router.push('/')
          })
        } else {
          console.log("No data available");
          // alert("No data available!")
        }
      }).catch((error) => {
        console.error(error);
      });

      
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