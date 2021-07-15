<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <router-view name="header-top"></router-view>
        <router-view></router-view>
        <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import Header from "@/components/Header";

export default {
  components: {
    // appHeader : Header
  }
}


</script>
<style scoped>

</style>
