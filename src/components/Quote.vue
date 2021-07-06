<template>
    <div class="col-md-4">
        <div class="panel panel-default">
            <div class="panel-body quote">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .panel{
        font-size: 15px;
        color: #000000;
    }
    .quote{
        cursor:pointer;
    }
    .quote:hover{
        color: #761c19;
    }
</style>