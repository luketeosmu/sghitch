<template lang="">
    <div class="drawer bg-no-repeat bg-cover bg-center bg-fav-background">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <Nav />
            <!-- Page content here -->
            <AddFav :favourites="favourites"/>
            <CurrFav :favourites="favourites" />
            <!-- Page content ends here -->
        </div>
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
            <!-- Sidebar content here -->
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
import MapsService from '../services/MapsService'
import Nav from '../components/Nav.vue'
import AddFav from '../components/AddFav.vue'
import CurrFav from '../components/CurrFav.vue'
import { getDatabase, ref, push, set, query, onValue, update, child, get } from 'firebase/database'
import { getAuth, signOut } from 'firebase/auth'

export default {
    name: "NewFav",
    components: {
        MapsService,
        Nav,
        AddFav,
        CurrFav
    },
    props: {},
    methods: {
        home() {
            this.$router.push('../')
        },
        profile() {
            this.$router.push('/profile')
        },
        favourite() {
            window.location.reload()
        },
        chat() {
            this.$router.push('/chat')
        },
        settings() {
            this.$router.push('/accountsettings')
        },
        logout(){
            const auth = getAuth()
            signOut(auth).then(() => {
                this.$router.push('/login')
            })
        },
        change() {
            const db = getDatabase()
            const auth = getAuth()
            if(this.user.type == "driver"){
                this.user.type = "hitcher"
                update(ref(db, 'userTypes/' + auth.currentUser.uid), {
                    type: this.user.type
                })
            } else {
                this.user.type = "driver"
                update(ref(db, 'userTypes/' + auth.currentUser.uid), {
                    type: this.user.type
                })
            }
            location.reload()
        },
    },
    data () {
        return {
            favourites: [
            ],
            user: {
                type: ""
            }
        }
    },
    mounted(){
        const dbRef = ref(getDatabase())
        const auth = getAuth()
        get(child(dbRef, `userFavs/${auth.currentUser.uid}`)).then((snapshot) => {
            if(snapshot.exists()) {
                snapshot.forEach((childSnapshot) => {
                    const childData = childSnapshot.val();
                    childData.key = childSnapshot.key
                    this.favourites.push(childData)
                });
            } else {
                console.log("No data available")
            }
        }).catch((error) => {
            console.error(error)
        })

        get(child(dbRef, `userTypes/${auth.currentUser.uid}`)).then((snapshot) => {
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
}
</script>
<style lang="">
    
</style>