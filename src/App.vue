<template>
  <div id="app">
      <div class="container">
          <div class="row" style="margin: 30px">
              <div class="col-xs-12 visible-lg-inline-block">
                  <button class="btn btn-success" @click="selectedComponent = 'new' ">کامپوننت New</button>
                  <button class="btn btn-danger" @click="selectedComponent = 'author' ">کامپوننت Author</button>
                  <button class="btn btn-primary" @click="selectedComponent = 'quote' ">کامپوننت Quote</button>

                  <keep-alive>
                      <component :is="selectedComponent"></component>
                  </keep-alive>

<!--                                <quote>-->
<!--                                    <h3 slot="title">جمله ای از بزرگان</h3>-->
<!--                                    <p slot="content">{{ quote }}</p>-->
<!--                                </quote>-->
              </div>
          </div>
      </div>


  </div>
</template>

<script>
    import Quote from "./components/Quote";
    import New from "./components/New";
    import Author from "./components/Author";

    export default {
        data(){
            return{
                quote :"یه جمله از داستایوفسکی",
                selectedComponent : 'quote'
            }
        },
        components:{
            'quote' : Quote,
            'new' : New,
            'author' : Author
        }
    }
</script>

<style scoped>

</style>
