<script>
import { store } from "./../store.js"
    export default {
        name: 'FilterArchetype',

        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="container py-3">
        <select class="rounded my-2" v-model="store.selectValue" @click="$emit('changeSelect')">
            <label>Choose an archetype</label>
            <option v-for="archetype in this.store.archetypes" :value="archetype">{{archetype}}</option>
       </select>
    </div>
</template>

<style lang="scss" scoped>
    select{
        width: 100px;
    }
</style>