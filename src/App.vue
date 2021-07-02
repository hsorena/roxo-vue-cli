<template>
  <div id="app">
      <p>Server state : {{ status }}</p>
  </div>
</template>

<script>


export default {
  name:'app',
  data(){
    return{
      status :'bad'
    }
  }
}
</script>

<style>

</style>
