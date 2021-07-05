<template>
    <div class="component">
        <h4>جزییات کاربران را می توانید از طریق این بخش مشاهده کنید</h4>
        <p>جزئیات بیشتر</p>
        <p>نام کاربری : {{user }}</p>
    </div>
</template>

<script>
    export default {
        props :['user']

    }
</script>

<style scoped>
    *{
        background-color: lightcoral;
    }
</style>