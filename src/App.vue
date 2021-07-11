<template>
  <div id="app">
    <div class="container" dir="rtl">
      <div class="row">
        <h2>گزارش تخلفات</h2>
        <div class="col-md-6">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">ایمیل :</label>
              <input :value="userData.email" @input="userData.email = $event.target.value" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ایمیل خود را وارد کنید...">
              <small id="emailHelp" class="form-text text-muted">ما ایمیل شما را هرگز به اشتراک نخواهیم گداشت.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">رمز عبور :</label>
              <input v-model.lazy="userData.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="رمز عبور خود را وارد کنید...">
              {{userData.password}}
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">سن :</label>
              <input v-model="userData.age" type="number" class="form-control" id="exampleInputPassword1" placeholder="سن خود را وارد کنید...">
            </div>
            <div class="form-group">
              <label for="message">پیام :</label>
              <textarea v-model="message" class="form-control" cols="30" rows="10" id="message"></textarea>
            </div>
            <div class="form-group">
              <lable for="sendMail">ارسال ایمیل
                <input v-model="sendMail" type="checkbox" id="sendMail" value="ارسال ایمیل">
              </lable>&nbsp;&nbsp;&nbsp;
              <lable for="sendInformation">ارسال اطلاعات ایمیل
                <input v-model="sendMail" type="checkbox" id="sendInformation" value="ارسال اطلاعات">
              </lable>
            </div>
            <label for="male">
              <input
                      type="radio"
                      id="male"
                      value="مرد"
                      v-model="gender"
              > مرد
            </label>
            &nbsp;&nbsp;&nbsp;
            <label for="female">
              <input
                      type="radio"
                      id="female"
                      value="زن"
                      v-model="gender"
              > زن
            </label>
            <br><br>
            <label for="priority">سطح شکایت</label>
            <select
                    id="priority"
                    class="form-control"
                    v-model="selectedPriority"
            >
              <option v-for="item in priorities" :key="item">{{item}}</option>
            </select>
            <!--            //روش اول-->
            <app-switch :value="dataSwitch" @input="dataSwitch = $event"></app-switch>
            <!--            //روش دوم-->
            <app-switch v-model="dataSwitch"></app-switch>
            <button class="btn btn-success" @click.prevent="submitted">
              ثبت
            </button>
            <br><br><br>
          </form>
          <div class="row" v-if="isSubmited">
            <hr>
            <h3>اطلاعات درج شده</h3>
            <p>ایمیل : {{userData.email}}</p>
            <p>رمز عبور : {{userData.password}}</p>
            <p>سن : {{userData.age}}</p>
            <p style="white-space: pre">پیام : {{message}}</p>
            <p>ارسال ایمیل : </p>
            <ul>
              <li v-for="item in sendMail" :key="item">{{item}}</li>
            </ul>
            <p>جنسیت : {{gender}}</p>
            <p>سطح شکایت : {{selectedPriority}}</p>
            <p>تغییرات : {{dataSwitch}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    import Switch from "./Switch";

    export default {
        data(){
          return{
            userData:{
              email:'',
              password:'',
              age:'',
            },
            message:'',
            sendMail:[],
            gender:'مرد',
            priorities:['اورژانسی','متوسط','عادی'],
            selectedPriority:'',
            dataSwitch:true,
            isSubmited:false
          }
        },
      methods:{
        submitted(){
          this.isSubmited = true
        }
      },
      components:{
          appSwitch:Switch
      }
    }
</script>

<style scoped>

</style>
