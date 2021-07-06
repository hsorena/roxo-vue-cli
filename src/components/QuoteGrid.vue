<template>
    <div>
        <div class="row">
            <new-quote @quoteAdded="newQuote"></new-quote>
            <div class="row"><div class="col-lg-6"><p class="alert alert-info">برای حذف جمله ها روی آن ها کلیک کنید</p></div></div>

            <quote v-for="(quote , index) in quotes" :key="quote" @click.native="deleteQuote(index)">{{ quote }}</quote>
        </div>
    </div>

</template>

<script>
    import Quote from "./Quote";
    import NewQuote from "./NewQuote";

    export default {
        props:['quotes'],
        components:{
            'quote' :Quote,
            NewQuote:NewQuote
        },
        methods:{
            newQuote(quote){
                if (this.quotes.length >= 10)
                {
                    alert('تعداد جملات بیشتر از حد تعیین شده است')
                }else
                    {
                        this.quotes.push(quote)
                    }

            },
            deleteQuote(index){
                this.$emit('quoteDeleted' , index)
            }
        }
    }
</script>

<style scoped>
    div{
        margin-top: 30px;
    }
</style>