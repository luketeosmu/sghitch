<template lang="">
    <div id="app">
    
    <router-view></router-view>
    </div>
</template>

<script>
import Login from './views/Login.vue'
import Home from './views/Home.vue'
export default {
    name: 'App',
  components: {
    Login,
    Home
  },
}
</script>
<style lang="">
    
</style>