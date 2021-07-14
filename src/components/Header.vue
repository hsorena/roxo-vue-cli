<template>
  <ul class="nav nav-pills">
    <router-link to="/" tag="li" active-class="active" exact><a>صفحه اصلی</a></router-link>
    <router-link to="/user" tag="li" active-class="active" exact><a>کاربران</a></router-link>
    <router-link to="/user/1" tag="li" active-class="active" exact><a>کاربر1</a></router-link>
    <router-link to="/user/2" tag="li" active-class="active" exact><a>کاربر2</a></router-link>
  </ul>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>