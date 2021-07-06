<template>
    <div class="row">
        <div class="col-md-6">
            <h3>تعداد جملات</h3>
            <div class="progress">
                <div class="progress-bar" role="progressbar" :style="{width:(quoteCount)*10+'%'}" aria-valuemin="10" aria-valuemax="100">{{ maxQuote }}/{{ quoteCount }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['quoteCount' , 'maxQuote']
    }
</script>

<style scoped>

</style>