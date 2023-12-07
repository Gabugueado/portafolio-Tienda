import HomeView from "../views/home/HomeView.vue";
import ShopLayout from "../layouts/ShopLayout.vue";
import StoreViewVue from "../views/store/ StoreView.vue";
import ProductDetailVue from "../views/productoDetail/ProductDetail.vue";
import CartViewVue from "../views/cart/CartView.vue";
import OrderConfirmVue from "../views/orderConfirm/OrderConfirm.vue";
import CheckoutViewVue from "../views/checkout/CheckoutView.vue";
import { RouteLocation } from 'vue-router'
 
export default {
    name: 'shop',
    component: ShopLayout,
    children: [{
        path: '/home',
        name: 'home',
        component: HomeView,
    },{
        path: '/store',
        name: 'store',
        component: StoreViewVue,
    },{
        path: '/product-detail/:id',
        name: 'productDetail',
        component: ProductDetailVue,
        props: ( route: RouteLocation ) => {
            return {
                id: route.params.id,
            }
        },
    },{
        path: '/cart',
        name: 'cart',
        component: CartViewVue,
        props: ( route: RouteLocation ) => {
            return {
                product: route.params.product,
                quantity: route.params.quantity,
            }
        },
    },{
        path: '/checkout',
        name: 'checkout',
        component: CheckoutViewVue,
    },{
        path: '/order-confirm',
        name: 'orderConfirm',
        component: OrderConfirmVue,
    },
]
}