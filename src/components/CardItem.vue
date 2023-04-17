<script>
    export default {
        data(){
            return{
                name: 'CardItem'
            }
        },
        props:{
            card: Object
        }
    }
</script>


<template>
   <div class="col">
        <div class="card rounded-0 my-2">
            <img class="img-fluid" :src="card.card_images[0].image_url" alt="">
            
            <h5 class="text-center text-white text-uppercase fw-semibold p-2">{{ card.name }}</h5>
            <span class="text-center">{{ card.type }}</span>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

    .card{
        background-color: $primary;
        min-height: 450px;
    }
</style>