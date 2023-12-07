
<template>
    <div class="d-flex">
        <div style="inline-size: 260px;">
            <VerticalMenu />
        </div>
        <div class="col p-3">
            <NavBar />
            <div class="content">
                <router-view />
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import VerticalMenu from '@/modules/shop/components/verticalMenu/VerticalMenu.vue';
import NavBar from '../components/navbar/NavBar.vue';

export default defineComponent({
    components: { VerticalMenu, NavBar }
})
</script>
<style>
.content {
    margin-top: 20px;
    height: 10000px;
}
</style>