<template>
    <div>
        <p>Server status : {{ status }}</p>
        <button @click="changeStatus">Change status</button>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "Server-status",
        data(){
            return{
                status:'Bad'
            }
        },
        methods:{
            changeStatus(){
                this.status = 'Good'
            }
        }
    }
</script>

<style scoped>

</style>