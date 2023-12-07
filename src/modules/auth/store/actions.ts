import { ActionTree } from "vuex";

import { AuthState } from "./state";
import { StateInterface } from "@/store";


const actions: ActionTree<AuthState, StateInterface> = {
    someAction(/*{commit},payload*/){
        
    },
    SignIn({ commit }, user) {
        
        const {email, password} = user
        if (email != 'a@a.a') {
            return false
        }
        commit('SignIn', user)
        
        return true
    },
}

export default actions