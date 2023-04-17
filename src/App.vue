<script>  
  import {store} from './store.js'
  import AppHeader from "./components/AppHeader.vue";
  export default {
    data() {
      return {
        store,
      }
    },
    components:{
      AppHeader
    }
  }
</script>


<template>
  <AppHeader/>

</template>


<style lang="scss" scoped>

</style>