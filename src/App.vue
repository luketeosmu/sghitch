<template lang="">
    <div id="app">
    
    <router-view></router-view>
    </div>
</template>

<script>
import Login from './views/Login.vue'
import NewReq from './views/NewReq.vue'
import MapsService from './services/MapsService';
import Home from './views/Home.vue'

export default {
    name: 'App',
  components: {
    Login,
    NewReq,
    MapsService,
    Home
  },
}
</script>
<style lang="">
    
</style>