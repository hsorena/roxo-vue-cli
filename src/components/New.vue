<template>
    <div>
        <h3>کامپوننت New</h3>
        <button class="btn btn-primary" @click="counter++">افزایش مقدار</button>
        <p>مقدار مورد نظر : {{ counter }}</p>
    </div>
</template>

<script>
    export default {
        name: "New",
        data(){
            return{
                counter :0
            }
        }
        ,
        destroyed() {
            console.log('destroyed!')
        },
        activated() {
            console.log('activated!')
        },
        deactivated() {
            console.log('deactivate!')
        }
    }
</script>

<style scoped>

</style>