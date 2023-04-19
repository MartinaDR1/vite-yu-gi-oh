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
        methods:{
            filterResults(){
            console.log('filter results');
            let url;
            if(store.archtype === '') {
                url = store.apiUrl
            } else {
                url = `${store.apiUrl}&archetype=${store.archetype}`
            }
            store.fetchCards(url)
            }
        }
    }
</script>


<template>
    <main>
        <FilterArchetype @changeSelect ='filterResults()'/>
        <CardsList/>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

    main{
        background-color: $primary;
    }

</style>