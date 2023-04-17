<script>
import { store } from "./../store.js"
    export default {
        name: 'Filter',

        data() {
            return {
                store,
            }
        }
    }
</script>

<template>
    <div class="container py-3">
        <select class="rounded my-2">
            <option value="search">Alien</option>
            <option value="search">Noble Knight</option>
            <option value="search">Melodious</option>
       </select>

    </div>
</template>

<style lang="scss" scoped>
select{
    width: 100px;
}
</style>