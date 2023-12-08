<template>
    <!-- breadcrum -->
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li class="breadcrumb-item">
                <router-link :to="{ name: 'store' }">Store</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
    </nav>
    <!-- breadcrum /end -->
    <div class="card">
        <div class="row">
            <div class="col-md-8">
                <div class="title">
                    <div class="row">
                        <div class="col-10">
                            <h4><b>Shopping Cart</b></h4>
                        </div>
                        <div class="col text-muted" style="text-align: end;">3 items</div>
                    </div>
                </div>
                <div  v-for="products in cart.products" :key="products.id" class="row align-items-center">
                    <div class="col">
                        <img class="img-fluid" :src="products.image">
                    </div>
                    <div class="col">
                        <div class="row text-muted">{{ products.category }}</div>
                        <div class="row">{{ products.title }}</div>
                    </div>
                    <div class="col">
                        <a
                        class="changeQuantity"
                          @click="decrementQuantity(products.id)"
                          :style="products.quantity <= 0 ? 'pointer-events: none;': ''"
                          >-</a>
                        {{ products.quantity }}
                        <a
                        class="changeQuantity"
                          @click="incrementQuantity(products.id)"
                          >+</a>
                    </div>
                    <div class="col">&euro; {{ products.price }} <span class="close">&#10005;</span></div>
                </div>
                <div class="back-to-shop"><a href="#">&leftarrow;</a><span class="text-muted">Back to shop</span></div>
            </div>
            <div class="col-md-4 summary">
                <div>
                    <h5><b>Summary</b></h5>
                </div>
                <hr>
                <div class="row">
                    <div class="col" style="padding-left:0;">ITEMS 3</div>
                    <div class="col text-right">&euro; 132.00</div>
                </div>
                <form>
                    <p>SHIPPING</p>
                    <select>
                        <option class="text-muted">Standard-Delivery- &euro;5.00</option>
                    </select>
                    <p>GIVE CODE</p>
                    <input id="code" placeholder="Enter your code">
                </form>
                <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
                    <div class="col">TOTAL PRICE</div>
                    <div class="col text-right">&euro; 137.00</div>
                </div>
                <button class="btn">CHECKOUT</button>
            </div>
        </div>

    </div>
</template>


<script lang="ts">

import { StateInterface } from '@/store';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { CartInterface } from '../../store/state';
import { computed } from '@vue/reactivity';


export default defineComponent({
    name: 'cartView',
    setup() {

        const store = useStore<StateInterface>()

        const cart = computed<CartInterface>(() => store.state.shop.cart)
        
        return {
            cart,
            incrementQuantity : ( id: number) => store.commit('shop/incrementQuantity', id),
            decrementQuantity : ( id: number) => store.commit('shop/decrementQuantity', id)
        }
    }


})

</script>

<style scoped>

.changeQuantity {
    border-radius: 5px;
    background-color: #0F81C7;
    border: none;
    color: white;
    padding: 0.5rem 1.5rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    user-select: none;
}
</style>