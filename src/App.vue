<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <h3>درخواست های HTTP</h3>
      <hr>
      <div class="form-group">
        <label>عنوان مطلب</label>
        <input v-model="article.title" class="form-control" type="text">
      </div>
      <div class="form-group">
        <label>توضیحات مطلب</label>
        <textarea id="" v-model="article.body" class="form-control" cols="30" rows="10"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-success" type="button" @click="addPost">افزودن مطلب</button>

      </div>
      <hr>
      <button class="btn btn-info" type="button" @click="getPosts">فراخوانی داده</button>
      <button class="btn btn-warning" type="button" @click="updatePost">بروزرسانی داده</button>
      <button class="btn btn-danger" type="button" @click="deletePost">حدف داده</button>
      <br><br><br>

      <div v-for="post in allPosts" :key="post" class="panel panel-default">
        <div class="panel-heading">{{ post.title }}</div>
        <div class="panel-body">
          {{ post.body }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      article: {
        title: '',
        body: ''
      },
      allPosts: [],
      resource : []
    }
  },
  methods: {
    addPost() {
      this.$http.post('https://jsonplaceholder.typicode.com/posts', this.article).then(
          response => {
            console.log(response)
          },
          error => {
            console.log(error)
          }
      )
       //using resource
      // this.resource.save({} , this.article)
    },
    getPosts() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(
          response => {
            this.allPosts = response.body
          },
          error => {
            console.log(error)
          }
      )
      //using resource
      // this.resource.get().then(response => {this.allPosts = response.body})
    },
    updatePost() {
      this.$http.patch('https://jsonplaceholder.typicode.com/posts/1', this.article).then(
          response => {
            alert('مطلب شما با موفقیت بروز رسانی شد')
            console.log(response)
          },
          error => {
            console.log(error)
          }
      )
    },
    deletePost() {
      this.$http.delete('https://jsonplaceholder.typicode.com/posts/1').then(
          response => {
            alert('مطلب شما با موفقیت حذف شد')
            console.log(response)
          },
          error => {
            console.log(error)
          }
      )
    }
  },
  created() {
    this.resource = this.$resource('posts')
  }

}
</script>
<style scoped>

</style>
