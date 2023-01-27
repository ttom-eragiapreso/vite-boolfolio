<script>
import Navbar from './partials/Navbar.vue';
  export default {
    components: {
      Navbar
    }
  }
</script>

<template>

  <navbar/>

  <router-view></router-view>
  
  
</template>


<style lang="scss">
@use './scss/general.scss' as *;


</style>