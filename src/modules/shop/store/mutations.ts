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
        // * en un futuro el carro final debe contar con usuario, fecha y ID,...
        // * ...además se creará y guardará en una base de datos una vez que esté en el método de pago
        state.cart.products.push({ product, quantity });
        localStorage.setItem( 'products', JSON.stringify( state.cart.products ) )
    },
    updateCartFromStore(state, { product, quantity }:{product: ProductInterface, quantity: string} ){
        console.log(product);
        
        // * si agrega el mismo producto desde la tienda se le agregará las cantidades seleccionadas a las actuales
        state.cart.products.map(element => {
            if ( element.product.id == product.id ){
                element.quantity =  ( parseInt( element.quantity ) + parseInt( quantity ) ).toString()
                return element
            }
        })
    },
    // ToDo: actualizar carro desde la vista /cart
};

export default mutation;
