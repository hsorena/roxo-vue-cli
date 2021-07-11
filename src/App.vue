<template>
  <div class="container" dir="rtl">
    <div class="col-md-6 col-md-offset-3">
      <h3>فیلتر ها و ترکیب ها Filters and Mixins</h3>
      <p>{{ text | toUppercase | to-lowercase }}</p>
      <hr>
      <input type="text" v-model="filterText">
      <ul>
        <li v-for="fruit in fruitFilter" :key="fruit">{{ fruit }}</li>
      </ul>
      <hr>
      <button class="btn btn-primary" @click="fruits.push('انبه')">افزودن انبه</button>
      <hr>
      <aap-list></aap-list>
    </div>
  </div>
  
</template>

<script>
  import List from "./List";
  import {fruitMixins} from "./fruitsMixins";

  export default{
    mixins:[fruitMixins],
    data(){
      return{
        text : 'Hello World'
      }
    },
    filters:{
      toUppercase(value){
        return value.toUpperCase()
      }
    },
    components:{
      aapList:List
    }
  }
</script>
<style scoped>

</style>
