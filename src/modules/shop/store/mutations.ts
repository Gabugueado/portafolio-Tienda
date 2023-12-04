import { MutationTree } from "vuex";
import { ShopInterface, ProductInterface } from "./state";

const mutation: MutationTree<ShopInterface> = {
    someMutation(/* state: ExampleStateInterface */) {
        // a line to prevent linter errors
    },
    setProducts(state, products) {
        state.products = products;
    },
    productSelected(state, product:ProductInterface) {
        state.product = product;
    },
    addToCart(state, {product, quantity}:{product: ProductInterface, quantity: string}) {
        // * se agregará solamente al carro,
        // * en un futuro el carro final con usuario, fecha y ID se creará una vez que esté en el método de pago
        state.cart.products.push({ product, quantity });
        localStorage.setItem( 'products', JSON.stringify( state.cart.products ) )
    },
};

export default mutation;
