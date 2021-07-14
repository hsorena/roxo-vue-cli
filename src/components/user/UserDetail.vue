<template>
  <div>
    <p>شتاسه کاربر : {{$route.params.id}}</p>
    <router-link tag="button" class="btn btn-warning" :to="'/user/' + $route.params.id + '/edit'">ویرایش کاربر</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>