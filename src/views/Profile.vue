<template lang="">
   <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <Nav />
            <!-- Page content here -->
            <ProfileForm />
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


import Nav from "../components/Nav.vue"
import ProfileForm from "../components/ProfileForm.vue"
export default {
    name: "Profile",
    props: {},
    components: {
        Nav,
        ProfileForm
    },
    methods: {
      home() {
        this.$router.push('../')
      },
      profile() {
        window.location.reload()
      },
      favourite() {
        this.$router.push('/newFav')
      },
      chat() {
        this.$router.push('/chat')
      },
      settings() {
        window.location.reload()
      },
      logout(){
        this.$router.push('/login')
      }
    }
}
</script>

<style lang="">

    
</style>