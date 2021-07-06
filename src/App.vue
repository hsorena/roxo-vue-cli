<template>
  <div id="app">
    <div class="container" dir="rtl">
        <div class="row">
            <div class="col-xs-12">
                <app-header :quoteCount="quotes.length" :maxQuote="maxQuote"></app-header>
                <quote-grid :quotes="quotes" @quoteDeleted="quoteDelete"></quote-grid>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

    import QuoteGrid from "./components/QuoteGrid";
    import Header from "./components/Header";

    export default {
        data(){
            return{
                quotes :['زندگی همیشه امیدوار کننده است'],
                maxQuote :10
            }
        },
        components:{
            QuoteGrid:QuoteGrid,
            appHeader:Header
        },
        methods:{
            quoteDelete(index){
                this.quotes.splice(index , 1);
            }
        }
    }
</script>

<style scoped>

</style>
