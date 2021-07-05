<template>
    <div class="component">
        <h4>اطلاعات کاربران را می توانید در این بخش ویرایش کنید</h4>
        <p>ویرایش کنید</p>
        <p>سن کاربر : {{ userAge }}</p>
        <button @click="editAge">تغییر سن کاربر</button>

    </div>
</template>

<script>
    import {eventBus} from "../main";

    export default {
        props:{
            userAge : Number
        },
        methods:{
            editAge(){
                this.userAge = 30
                // this.$emit('ageWasEdited' , this.userAge)
                // eventBus.$emit('ageWasEdited' , this.userAge)
                eventBus.changeAge(this.userAge)
            }
        }
    }
</script>

<style scoped>
    div{
        background-color: limegreen;
    }

</style>