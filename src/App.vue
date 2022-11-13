<template lang="">
    <div id="app">
    
    <router-view></router-view>
    </div>
</template>

<script>
import Login from './views/Login.vue'
import LoginAs from './views/LoginAs.vue'
import Register from './views/Register.vue';
import NewReq from './views/NewReq.vue'
import MapsService from './services/MapsService';
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import AccountSettings from './views/AccountSettings.vue'

export default {
  name: 'App',
  components: {
    Login,
    Register,
    NewReq,
    MapsService,
    Home,
    Profile,
    ForgotPassword,
    LoginAs,
    AccountSettings,
  },
}
</script>
<style lang="">
    
</style>