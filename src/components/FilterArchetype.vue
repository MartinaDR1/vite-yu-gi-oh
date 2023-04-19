<script>
import axios from 'axios'
import { store } from "./../store.js"
    export default {
        name: 'FilterArchetype',
        emits: ['changeSelect'],

        data() {
            return {
                store
            }
        },
        mounted(){
            axios 
            .get ('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then (response => {
                store.archetypes= response.data
            })
        },
    }
</script>

<template>
    <div class="container py-3">
        <select class="rounded my-2" v-model="store.archetype" @change="$emit('changeSelect')">
            <label>Choose an archetype</label>
            <option :value="arch.archetype_name" v-for="arch in store.archetypes">{{ arch.archetype_name }}</option>
       </select>
    </div>
</template>

<style lang="scss" scoped>
    select{
        width: 100px;
    }
</style>