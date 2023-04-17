<script>
    import CardsList from "./CardsList.vue";
    export default {
        data(){ 
            return {
                name: 'AppMain',
                CardsList: CardsList
            }
        },
        components:{
            CardsList
        }
    }
</script>


<template>
    <main>
       <CardsList/>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

    main{
        background-color: $primary;
    }

</style>