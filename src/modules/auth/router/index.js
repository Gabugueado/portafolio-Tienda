import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import AuthLayout from "../layouts/AuthLayout.vue"

export default {
    name: '',
    component: AuthLayout,
    children: [{
        path: '',
        name: 'login',
        component: LoginView,
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    }]
}