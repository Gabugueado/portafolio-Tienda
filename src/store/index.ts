import { createStore } from "vuex";

// My custom modules
import { AuthState } from "@/modules/auth/store/state";
import authModule from "@/modules/auth/store";

import { ShopInterface } from "@/modules/shop/store/state";
import shopModule from "@/modules/shop/store";

export interface StateInterface {
    auth: AuthState;
    shop: ShopInterface;
}

export default createStore({
    modules: {
        auth: authModule,
        shop: shopModule,
    },
    strict: true,
});
