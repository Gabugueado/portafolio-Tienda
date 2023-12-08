import { MutationTree } from "vuex";
import { ShopInterface, ProductInterface } from "./state";

const mutation: MutationTree<ShopInterface> = {
    someMutation(/* state: ExampleStateInterface */) {
        // a line to prevent linter errors
    },
    setProducts(state, products) {
        state.products = products;
    },
    productSelected(state, product: ProductInterface) {
        state.product = product;
    },
    addToCart(
        state,
        { product, quantity }: { product: ProductInterface; quantity: number }
    ) {
        // * se agregará solamente al carro,
        // * en un futuro el carro final debe contar con usuario, fecha y ID,...
        // * ...además se creará y guardará en una base de datos una vez que esté en el método de pago
        product.quantity = quantity;
        state.cart.products.push({ ...product });
        localStorage.setItem("products", JSON.stringify(state.cart.products));
    },
    updateCartFromStore(
        state,
        { product, quantity }: { product: ProductInterface; quantity: number }
    ) {
        // * si agrega el mismo producto desde la tienda se le agregará las cantidades seleccionadas a las actuales
        state.cart.products.map((element) => {
            if (element.id == product.id) {
                element.quantity += quantity;
                return element;
            }
        });
    },
    incrementQuantity(state, id) {
        state.cart.products.find((element) => {
            if (element.id === id) {
                return element.quantity++;
            }
        });
    },
    decrementQuantity(state, id) {
        state.cart.products.find((element) => {
            if (element.id === id) {
                return element.quantity--;
            }
        });
    },
};

export default mutation;
