<template>
  <div id="app">
      <div class="container" dir="rtl">
          <div class="row">
              <div class="col-xs-12">
                  <app-user></app-user>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import User from "./components/User";
    export default {
      name:'app',
        components:{
            appUser : User
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
