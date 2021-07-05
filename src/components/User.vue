<template>
    <div id="user-root">
        <div class="component">
            <h3>کامپوننت کاربران یا User</h3>
            <p>من یک کاربر ویژه هستم</p>
            <p>نام کاربری : {{ userName }}</p>
            <p>سن کاربر : {{ age }}</p>
            <button @click="changeUsername" >تغییر نام کاربری</button>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <user-detail
                            :username="userName"
                            @usernameWasReset="userName = $event"
                            :resetFn="resetname"
                            :userAge="age"
                    ></user-detail>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <user-edit
                            :userAge="age"
                            @ageWasEdited="age = $event"
                    ></user-edit>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from "./UserDetail";
    import UserEdit from "./UserEdit";
    export default {
        data(){
          return{
              userName : 'sorena',
              age:25
          }
        },
        components:{
            'UserDetail' : UserDetail,
            'UserEdit' : UserEdit
        },
        methods:{
            changeUsername (){
                this.userName = 'jafar'
            },
            resetname(){
                this.userName = 'roxo'
            }
        }
    }
</script>

<style scoped>
    #user-root{
        background-color: lightblue;
    }
</style>