<template lang="">
    <div id="app">
    
    <router-view></router-view>
    </div>
</template>

<script>
import Login from './views/Login.vue'
import Register from './views/Register.vue';
import NewReq from './views/NewReq.vue'
import MapsService from './services/MapsService';
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Login,
    Register,
    NewReq,
    MapsService,
    Home
  },
}
</script>
<style lang="">
    
</style>