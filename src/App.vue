<template>
  <div id="app">
      <app-header></app-header>
      <server-status></server-status>
      <server-details></server-details>
      <app-footer></app-footer>
  </div>
</template>

<script>
    import AppHeader from "./components/shared/Header";
    import ServerStatus from "./components/servers/ServerStatus";
    import ServerDetails from "./components/servers/ServerDetails";
    import AppFooter from "./components/shared/Footer";
    export default {
      name:'app',
        components:{
            AppFooter,
            ServerDetails,
            ServerStatus,
            AppHeader
        }
    }
</script>

<style scoped>
    #app{
        text-align: center;
    }
</style>
