export const fruitMixins = {
    data(){
        return{
            filterText:'',
            fruits:['موز' , 'انار' , 'سیب' , 'کیوی' ,'خربزه مشهدی' , 'انگور']
        }
    },
    computed:{
        fruitFilter(){
            return this.fruits.filter((element)=>{
                return element.match(this.filterText)
            })
        }
    }
}