<script>
import {store} from "../store";
    export default {
        name: 'CounterCards',

        data(){
            return{
                store
            }
        }
    }

</script>

<template>
    <div class="counter p-2">
        <h6 class="text-white" v-if="store.cards">Found {{ store.cards.length }} cards</h6>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

    .counter{
        background-color: $dark;

    }
</style>