<template>
    <div class="content">
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://via.placeholder.com/1920x720" class="d-block w-100" alt="first slide">
                </div>
                <div class="carousel-item">
                    <img src="https://via.placeholder.com/1920x720" class="d-block w-100" alt="second slide">
                </div>
                <div class="carousel-item">
                    <img src="https://via.placeholder.com/1920x720" class="d-block w-100" alt="third slide">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="py-3 product-list row">
            <div class="filter col-2">
                <div class="card mb-4 mb-lg-0">
                    <div class="card-body p-6">
                        <div>
                            <h5 class="mb-3">Brands</h5>
                            <div class="my-4">
                                <input type="search" class="form-control" placeholder="Search...">
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="brand1" checked="true">
                                <label class="form-check-label" for="brand1">brand 1</label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="brand2" checked="true">
                                <label class="form-check-label" for="brand2">brand 2</label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="brand3" checked="true">
                                <label class="form-check-label" for="brand3">brand 3</label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="brande4" checked="true">
                                <label class="form-check-label" for="brande4">brand 4</label>
                            </div>
                        </div>
                        <h5 class="mb-3">Categories</h5>
                        <ul class="nav nav-category">
                            <li class="nav-item border-bottom w-100">
                                <a href="#" class="nav-link">Category 1</a>
                            </li>
                            <li class="nav-item border-bottom w-100">
                                <a href="#" class="nav-link">Category 2</a>
                            </li>
                            <li class="nav-item border-bottom w-100">
                                <a href="#" class="nav-link">Category 3</a>
                            </li>
                            <li class="nav-item border-bottom w-100">
                                <a href="#" class="nav-link">Category 4</a>
                            </li>
                        </ul>
                        <div>
                            <h5 class="mb-3">Price</h5>
                            <div class="row mb-3">
                                <div class="col">
                                    <label class="form-label" for="minPrice">Min</label>
                                    <input type="number" class="form-control" id="minPrice" placeholder="Min"
                                        name="minPrice">
                                </div>
                                <div class="col">
                                    <label class="form-label" for="maxPrice">Max</label>
                                    <input type="text" class="form-control" id="maxPrice" placeholder="Max" name="maxPrice">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products col row justify-content-between">
                <div class="row row-cols-1 row-cols-md-3">
                    <template v-for="product in products" :key="product.id">
                        <div class="col mb-3">
                            <div class="card h-100">
                                <img :src="product.image"
                                    style="height: 200px; width: 200px; object-fit: contain; align-self: center;"
                                    class="card-img-top" alt="">
                                <hr>
                                <div class="card-body">
                                    <h5
                                      :title="product.title"
                                      @click="$router.push({ name: 'productDetail', params: { id: product.id } })"
                                      class="card-title product-name"
                                      style="text-overflow: ellipsis;overflow: hidden;">
                                        {{ product.title }}
                                    </h5>
                                    <p class="card-text">{{ product.description.substring(0, 100).replace(/\s+\S*$/, "...")
                                    }}</p>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">

import { defineComponent, computed } from 'vue';
// Mar 28 nov 08:48 api caida
import { useStore } from 'vuex'
import { StateInterface } from '@/store';
import { ProductInterface } from '../../store/state';


// my customs imports


export default defineComponent({
    name: 'HomeView',
    components: {},
    setup() {

        const store = useStore<StateInterface>()
        store.dispatch('shop/loadProducts')

        return {

            products: computed<ProductInterface[]>(() => store.state.shop.products),

        }
    }
})

</script>
<style>
.filter {
    width: 200px;
}

.product-name {
    cursor: pointer;
}</style>