import { GetterTree } from "vuex";
import { ShopInterface } from "./state";
import { StateInterface } from "@/store";

const getters: GetterTree<ShopInterface, StateInterface> = {
    someGetter(/* state */) {
        // return true;
    },
    product(state) {
        return state.product
    },
};

export default getters;
