<script>
    import CardsList from "./CardsList.vue";
    import Filter from "./Filter.vue";
    export default {
        data(){ 
            return {
                name: 'AppMain',
                CardsList: CardsList
            }
        },
        components:{
            CardsList,
            Filter
        }
    }
</script>


<template>
    <main>
        <Filter/>
        <CardsList/>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

    main{
        background-color: $primary;
    }

</style>