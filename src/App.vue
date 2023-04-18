<script>  
  import {store} from './store.js'
  import AppHeader from "./components/AppHeader.vue";
  import AppMain from './components/AppMain.vue'

  export default {
    data() {
      return {
        store,
      }
    },
    mounted(){
      store.fetchCards(store.apiUrl + `?num=20&offset=0`)
    },
    methods(){
      this.store.cards
      this.store.info
    },
    components:{
      AppHeader,
      AppMain
    }
  }
</script>


<template>
  <AppHeader/>
  <AppMain/>
</template>


<style lang="scss" scoped>

</style>