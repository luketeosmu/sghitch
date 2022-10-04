<template lang="">
    <div id="app">
    
    <router-view></router-view>
    </div>
</template>

<script>
import Login from './views/Login.vue'
import Register from './views/Register.vue';
export default {
    name: 'App',
  components: {
    Login,
    Register
   
  },
}
</script>
<style lang="">
    
</style>