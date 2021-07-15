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
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to , from , next){
    if (false){
      next(false)
    } else{
      next(false)
    }
  }

}
</script>

<style scoped>

</style>