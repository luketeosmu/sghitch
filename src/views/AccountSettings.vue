<template lang="">
    <div class="drawer bg-no-repeat bg-cover bg-bottom bg-settings-background">
         <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
         <div class="drawer-content flex flex-col">
             <!-- Navbar -->
             <Nav :userType="this.user.type"/>
             <!-- Page content here -->
             <AccSettingsForm />
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
 
 
 import Nav from "../components/Nav.vue"
 import AccSettingsForm from "../components/AccSettingsForm.vue"

 import { getAuth, signOut } from 'firebase/auth'
 import { getDatabase, ref, child, get, update, onValue } from 'firebase/database';
 export default {
     name: "AccountSettings",
     props: {},
     components: {
         Nav,
         AccSettingsForm
     },
     methods: {
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
     data () {
        return {
            favourites: [],
            user: {
                type: ""
            }
        }
    },
    mounted() {
        this.auth = getAuth();
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
 }
 </script>
 
 <style lang="">
 
     
 </style>