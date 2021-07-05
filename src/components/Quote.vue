<template>
    <div>
        <slot name="title"></slot>
        <hr>
        <slot name="content"></slot>
    </div>
</template>

<script>
    export default {
        name: "Quote"
    }
</script>

<style scoped>
    div{
        border: 1px solid #cccccc;
        box-shadow: 1px 1px 1px 1px;
        padding: 30px;
        margin: 30px;
        text-align: center;
    }
    p{
        text-align: center;
    }
    h3{
        text-align: center;
        color: red;
    }
</style>