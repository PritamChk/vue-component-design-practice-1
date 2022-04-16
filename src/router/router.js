import { createRouter ,createWebHistory} from "vue-router";
import SignUpForm from '../components/SignUpForm.vue'
import LoginForm from '../components/LoginForm.vue'

const router= createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'Home',
            component: SignUpForm,
        },
        {
            path:'/signup',
            name:'Home',
            component: SignUpForm,
        },
        {
            path:'/login',
            name:'Login',
            component: LoginForm,
        },
    ]
}) 

export default router;