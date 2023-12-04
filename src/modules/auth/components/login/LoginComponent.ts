import { defineComponent, ref } from "vue";
import type { Ref } from 'vue'
import Swal from 'sweetalert2';
import { useRouter } from "vue-router";

//my custom imports
import useAuth from "../../composables/useAuth";

export default defineComponent({
    name: "loginComponent",
    setup() {
      const router = useRouter()
      const { loginUser } = useAuth()
        interface userForm {
          email: string
          password: string
        }
        const userForm: Ref<userForm> = ref({
            email: '',
            password: '',
        });

        const onSubmit = async () => {
          
          
          const resp = await loginUser(userForm.value)
          
          if ( !resp ) return Swal.fire('Error', 'Datos Invalidos', 'error')
          
          // const {ok, message } = await loginUser( userForm.value )


          router.push({ name: 'home' })
        };
        return {
            userForm,
            onSubmit,
        };
    },
});
