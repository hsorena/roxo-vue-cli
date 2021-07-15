import Home from "@/components/Home";
import User from "@/components/user/User";
import UserStart from "@/components/user/UserStart";
import UserDetail from "@/components/user/UserDetail";
import UserEdit from "@/components/user/UserEdit";
import Header from "@/components/Header";
import NotFound from "@/components/NotFound";

export const routes =[
    {path : '' , name:'home' , components:{
        default: Home,
        'header-top' : Header} },
    {path : '/user' , components:{
            default: User,
            'header-bottom' : Header}  , children:[
            {path : '' , component : UserStart},
            {path : ':id' , component : UserDetail , name:'userEdit'},
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