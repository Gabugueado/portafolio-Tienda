import { Module } from 'vuex';
import { StateInterface } from '@/store';

import state, { ShopInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const shopModule: Module<ShopInterface, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default shopModule;