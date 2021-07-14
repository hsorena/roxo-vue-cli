<template>
  <div>
    <h2>کامپوننت یوزر</h2>
    <hr>
    <router-view></router-view>
    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، </p>
    <p>شناسه کاربر : {{ id }}</p>
    <button class="btn btn-primary" type="button" @click="navigateToHome">رفتن به صفحه اصلی</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id : this.$route.params.id
    }
  },
  watch:{
    '$route'(to){
      this.id = to.params.id
    }
  },
  methods:{
    navigateToHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>