import Home from "@/components/Home";

import Header from "@/components/Header";
import NotFound from "@/components/NotFound";

const User = resolve => {
    require.ensure(['./components/user/User.vue'] , ()=>{
        resolve(require('./components/user/User'))
    } , 'user')
}

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'] , ()=>{
        resolve(require('./components/user/UserStart'))
    }, 'user')
}

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'] , ()=>{
        resolve(require('./components/user/UserDetail'))
    }, 'user')
}

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'] , ()=>{
        resolve(require('./components/user/UserEdit'))
    }, 'user')
}

export const routes =[
    {path : '' , name:'home' , components:{
        default: Home,
        'header-top' : Header} },
    {path : '/user' , components:{
            default: User,
            'header-bottom' : Header}  , children:[
            {path : '' , component : UserStart},
            {path : ':id' , component : UserDetail , name:'userEdit' , beforeEnter:(to , from , next)=>{
                console.log('inside guard')
                    next()
                }},
            {path : ':id/edit' , component : UserEdit}
    ]},
    {path: '/redirect-me' , redirect : {name : 'home'}},
    //redirect not found page to home
    {path: '/404' , name: 'notFound' , component:NotFound},
    {path: '*' , redirect : {name : 'notFound'}}
            //www.my.com/user
            //www.my.com/user/10
            //www.my.com/user/10/edit
]