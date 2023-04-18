<script>
    import CardsList from "./CardsList.vue";
    import FilterArchetype from "./FilterArchetype.vue";
    import { store } from '../store'
    export default {
        data(){ 
            return {
                name: 'AppMain',
                CardsList: CardsList,
                store
            }
        },
        components:{
            CardsList,
            FilterArchetype
        },
        methods: {
            changeArchetype() {
                const url = this.store.apiUrl + `?archetype=${this.store.selectValue}`
                console.log(url);
                this.store.APIArchetype(this.store.apiUrl)
            }
        }
    }
</script>


<template>
    <main>
        <FilterArchetype @changeSelect="changeArchetype()"/>
        <CardsList v-model="this.store.archetypes"/>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

    main{
        background-color: $primary;
    }

</style>