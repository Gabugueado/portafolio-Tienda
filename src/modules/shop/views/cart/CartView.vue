<template>
    {{ cart }}

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
                <div  v-for="products in cart.products" :key="products.product.id" class="row align-items-center">
                    <div class="col">
                        <img class="img-fluid" :src="products.product.image">
                    </div>
                    <div class="col">
                        <div class="row text-muted">{{ products.product.category }}</div>
                        <div class="row">{{ products.product.title }}</div>
                    </div>
                    <div class="col">
                        <a href="#">-</a><a href="#" class="border">{{ products.quantity }}</a><a href="#">+</a>
                    </div>
                    <div class="col">&euro; {{ products.product.price }} <span class="close">&#10005;</span></div>
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

        console.log();


        return {
            cart: computed<CartInterface>(() => store.state.shop.cart)
        }
    }


})

</script>

<style scoped></style>