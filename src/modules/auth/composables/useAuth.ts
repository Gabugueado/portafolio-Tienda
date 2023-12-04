import { computed } from "vue"
import { useStore } from "vuex"


const useAuth = () => {

    const store = useStore()

    // const createUser = async( user ) => { 
    //     const resp = store.dispatch('auth/SignUp', user)
    //     return resp
    // }


    const loginUser = async( user: {email:string, password:string}) => { 
        
        const resp = store.dispatch('auth/SignIn', user)
        return resp
    }

    // const checkAuthStatus = async() => {
    //     console.log("checkAuthStatus");
    //     const resp = await store.dispatch('auth/checkAuthentication')
    //     return resp
    // }

    // const logOut = () => {
    //     store.commit('auth/logOut')
    //     store.commit('journal/clearEntries')
    // }

    return {
        // checkAuthStatus,
        // createUser,
        loginUser,
        // logOut,
        authStatus: computed( () => store.getters['auth/currenState']),
        username: computed( () => store.getters['auth/username']),
    }
}


export default useAuth