<template>
    <div class="component">
        <h4>جزییات کاربران را می توانید از طریق این بخش مشاهده کنید</h4>
        <p>جزئیات بیشتر</p>
        <p>نام کاربری : {{username }}</p>
        <button @click="usernameReset">بازنویسی نام کاربری</button>
    </div>
</template>

<script>
    export default {
        props :['username']
        ,
        methods:{
            usernameReset(){
                this.username = 'roxo'
                this.$emit('usernameWasReset' , this.username)
            }
        }

    }
</script>

<style scoped>
    div{
        background-color: lightcoral;
    }
</style>