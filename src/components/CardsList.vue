<script>
import CounterCards from "./CounterCards.vue";
import CardItem from "../components/CardItem.vue";
import {store} from "../store";

    export default {
        data(){
            return{
                name: 'CardsList',
                store
            }
        },
        components:{
            CardItem,
            CounterCards
        }
    }
</script>

<template>
    <div class="container ">
        <CounterCards/>
        <div class="row row-cols-sm-2 row-cols-md-3 row-cols-xl-5">
            <CardItem v-for="card in store.cards" :card="card"></CardItem>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;
    .container{
        background-color: $light;
    }
</style>