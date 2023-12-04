import { GetterTree } from 'vuex';
import { ShopInterface } from './state';
import { StateInterface } from '@/store';

const getters: GetterTree<ShopInterface, StateInterface> = {
    someGetter( /* state */ ) {
        // return true;
    }
}



export default getters;