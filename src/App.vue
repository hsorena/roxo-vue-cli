<template>
  <div id="app">
    <quote>
        <h3 slot="title">جمله ای از بزرگان</h3>
        <p slot="content">{{ quote }}</p>
    </quote>
  </div>
</template>

<script>
    import Quote from "./components/Quote";

    export default {
        data(){
            return{
                quote :"یه جمله از داستایوفسکی"
            }
        },
        components:{
            'quote' : Quote
        }
    }
</script>

<style scoped>

</style>
