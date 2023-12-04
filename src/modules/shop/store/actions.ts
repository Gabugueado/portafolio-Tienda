import { ActionTree } from "vuex";
import { ProductInterface, ShopInterface } from "./state";
import { StateInterface } from "@/store";
import store from "@/api/fakestore/store";

const actions: ActionTree<ShopInterface, StateInterface> = {
    someAction(/*{ commit }, payload  */) {
        // a line to prevent linter errors
    },
    async loadProducts({ commit }) {
        const { data } = await store.get("/products");

        if (!data) {
            commit("setProducts", []);
        }

        commit("setProducts", data);
    },
    async productById({ commit }, id: string) {
        const { data } = await store.get<ProductInterface>(`/products/${id}`);

        if (!data) {
            // TODO: redireccionar a vista /404 o /store
            return "error";
        }
        commit("productSelected", data);
    },
    async addToCart( { commit }, { product, quantity }: { product: ProductInterface; quantity: string } ) {

        commit("addToCart", { product, quantity });
    },
};

export default actions;
