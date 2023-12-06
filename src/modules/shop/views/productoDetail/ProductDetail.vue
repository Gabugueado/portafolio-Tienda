<template>
    <div class="details d-flex row">
        <div class="image-product col-6">
            <img :src="product.image" alt="image product" class="col-12 w-100 h-100"
                style="object-fit: contain; align-self: center;">
        </div>
        <div class="product-detail col-6">
            <div class="card p-3">
                <div class="card-body">
                    <h5 class="card-title">{{ product.title }}</h5>
                </div>
                <h6 class="card-subtitle mb-2 text-body-secondary">Description</h6>
                <p class="card-text">
                    {{ product.description }}
                </p>
                <p>price: {{ product.price }}</p>

                <!-- TODO: agregar stock -->
                <p>variant:</p>
                <div class="form-group">

                    <!-- Label -->
                    <p class="mb-3">
                        Color: <strong id="colorCaption"></strong>
                    </p>

                    <!-- Radio -->
                    <div class="mb-8 ">
                        <div class="form-check form-check-inline form-check-img">
                            <input type="radio" class="form-check-input" id="imgRadioOne" name="imgRadio"
                                data-toggle="form-caption" data-target="#colorCaption" value="White"
                                style="background-image: url('https://via.placeholder.com/540');" checked="true">
                        </div>
                        <div class="form-check form-check-inline form-check-img">
                            <input type="radio" class="form-check-input" id="imgRadioTwo" name="imgRadio"
                                data-toggle="form-caption" data-target="#colorCaption" value="White"
                                style="background-image: url('https://via.placeholder.com/540');" checked="true">
                        </div>
                    </div>

                </div>
                <div class="row gx-5 mb-7">
                    <!-- TODO: agregar stock -->
                    <div class="col-12 col-lg-auto">
                        <!-- Quantity -->
                        <select class="form-select mb-2" v-model="quantity">
                            <option value="1" selected="true">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                    </div>
                    <div class="col-12 col-lg">

                        <!-- Submit -->
                        <button type="submit" class="btn w-100 btn-dark mb-2" @click="addToCart">
                            Add to Cart
                            <font-awesome-icon icon="fas fa-cart-shopping" />
                        </button>

                    </div>
                    <div class="col-12 col-lg-auto">

                        <!-- TODO: Wishlist -->
                        <button class="btn btn-outline-dark w-100 mb-2" data-toggle="button">
                            Wishlist
                            <font-awesome-icon icon="fa-regular fa-heart" />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { StateInterface } from '@/store';
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';
import { ProductInterface } from '@/modules/shop/store/state';
import { useRouter } from 'vue-router';



export default defineComponent({
    name: 'productDetail',
    props: {
        id: {
            type: String,
            required: true,
        }
    },
    setup(props) {
        const store = useStore<StateInterface>()
        const router = useRouter()
        const quantity = ref('1')
        const product = computed<ProductInterface>(() => store.state.shop.product)

        const addToCart = () => {
            // * Empleo el operador spread para generar una réplica del objeto 'product' y así evitar mutar el objeto original durante la manipulación de datos.
            const added = {
                product: { ...product.value },
                quantity: quantity.value
            }
            const productExist = store.state.shop.cart.products.find(element => element.product.id === product.value.id)

            if (productExist) {
                store.dispatch('shop/updateCartFromStore', { ...added })
                router.push({ name: 'cart' })
            } else {
                store.dispatch('shop/addToCart', { ...added })
                router.push({ name: 'cart' })
            }

        }
        store.dispatch('shop/productById', props.id)

        return {
            product,
            quantity,
            addToCart,
        }

    }

})

</script>
<style scoped>
.form-check-img>.form-check-input {
    background-clip: padding-box;
    background-size: cover;
    border: 0;
    border-bottom: 2px solid transparent;
    border-radius: 0;
    cursor: pointer;
    height: 100%;
    height: 70px;
    opacity: .8;
    width: 100%;
    width: 70px;
}

.form-check-img>.form-check-input:checked {
    border-bottom-color: #1f1f1f;
    opacity: 1;
}

.form-select {
    -moz-padding-start: calc(1.5rem - 3px);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%232b2b2b' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E");
    background-position: right 1.5rem center;
    background-repeat: no-repeat;
    background-size: 16px 12px;
    border: 1px solid #e5e5e5;
    border-radius: 0;
    box-shadow: 0 0;
    color: #1f1f1f;
    display: block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.875rem 4.5rem 0.875rem 1.5rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    width: 100%;
}

.btn-dark {
    background-color: #1f1f1f;
    border-color: #1f1f1f;
    color: #fff;
}

.btn-dark:focus,
.btn-dark:hover {
    background-color: #1c1c1c;
    border-color: #1c1c1c;
    color: #fff;
}

.btn {
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0;
    color: #1f1f1f;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    padding: 0.875rem 1.75rem;
    text-align: center;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    vertical-align: middle;
}
