import { Module } from "vuex";

import { StateInterface } from "@/store";
import state, { AuthState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";


const authModule: Module<AuthState, StateInterface> = {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
};

export default authModule;
