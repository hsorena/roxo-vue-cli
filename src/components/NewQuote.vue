<template>
    <div class="row" id="root">
        <div class="col-lg-6">
            <div class="form-group">
                <label>سخن بزرگان</label>
                <textarea class="form-control" cols="4" rows="4" v-model="quote"></textarea>
            </div>
            <div class="form-group">
                <button @click.prevent="createQuote" class="btn btn-success">افزودن</button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                quote: ''
            }
        }
        ,
        methods: {
            createQuote() {
                this.$emit('quoteAdded', this.quote)
                this.quote = ''
            }
        }
    }
</script>

<style scoped>
    #root {
        margin: auto;
    }
</style>