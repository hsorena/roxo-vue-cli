<template>
    <div>
        <h3>فیلتر ها و ترکیب ها Filters and Mixins</h3>
        <input type="text" v-model="filterText">
        <ul>
            <li v-for="fruit in fruitFilter" :key="fruit">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import {fruitMixins} from "./fruitsMixins";

    export default {
        mixins:[fruitMixins]
    }
</script>

<style scoped>

</style>