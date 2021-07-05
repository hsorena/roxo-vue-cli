<template>
    <div class="component">
        <h4>جزییات کاربران را می توانید از طریق این بخش مشاهده کنید</h4>
        <p>جزئیات بیشتر</p>
        <p>نام کاربری : {{username }}</p>
        <p>سن کاربر : {{ userAge }}</p>
        <button @click="usernameReset">بازنویسی نام کاربری</button>
        <button @click="resetFn">بازنویسی نام کاربری با callback</button>
    </div>
</template>

<script>
    import {eventBus} from "../main";

    export default {
        props :{
            username : String,
            resetFn : Function,
            userAge : Number
        }
        ,
        methods:{
            usernameReset(){
                this.username = 'roxo'
                this.$emit('usernameWasReset' , this.username)
            }
        },
        created() {
            eventBus.$on('ageWasEdited' , (data)=>{
                this.userAge = data
            })
        }

    }
</script>

<style scoped>
    div{
        background-color: lightcoral;
    }
</style>