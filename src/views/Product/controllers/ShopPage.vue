<template>
    <HeaderRide />
    <div class="shop-page" v-bind:key="product in this.products">
        <ProductCard :product="product" />
    </div>
    <FooterSecond />
</template>

<script>

import HeaderRide from '../../Shared/controllers/HeaderRide.vue'
import FooterSecond from '../../Shared/controllers/FooterSecond.vue'
import ProductCard from './ProductCard.vue'


export default {
    components: {
        HeaderRide,
        FooterSecond,
        ProductCard
    },
    data() {
        return {
            products: []
        }
    },
    created() {
        try {
            const response = this.$axios.get(this.$apiUrl + '/api/product/get-products');
            this.products = JSON.parse(response);
        }
        catch{
            console.log("хуй");
        } 
    }
}
</script>
