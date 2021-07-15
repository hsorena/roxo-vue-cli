<template>
  <div>
    <p>شتاسه کاربر : {{$route.params.id}}</p>
    <router-link tag="button" class="btn btn-warning"
                 :to="{name : 'userEdit' , params:{id : $route.params.id} , query : {locale: 'en' , q: 100 } ,hash:'#data'}"
    >ویرایش کاربر</router-link>
    <p>locale : {{ $route.query.locale }}</p>
    <p>Q Search : {{ $route.query.q }}</p>
    <div style="height: 700px"></div>
    <p id="data">یه یه داده اینجا موجود است</p>
    <button class="btn btn-primary" @click="changeRoute = true">تایید ترک صفحه</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      changeRoute:false
    }
  },
  beforeRouteLeave(to,from,next){
    if (this.changeRoute){
      next()
    }else{
      if (confirm('آیا میخواهید به مسیر بعدی بروید ؟')){
        next()
      }else {
        next(false)
      }
    }
  }
}
</script>

<style scoped>

</style>