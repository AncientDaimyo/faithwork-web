<template>
    <div class="product-card-full">
        <div class="product-card-wrapper" @mouseenter="showImage = true" @mouseleave="showImage = false">
            <a v-bind:href="route + product.uuid"></a>
            <div class="image-wrapper">
                <img class="product-card-image" :src="product.image">
            </div>
            <div class="product-card-name">{{ product.name }}</div>
            <div class="product-card-cost">{{ product.cost.split('.')[0] }}</div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    'product': Object,
});
</script>

<script>
export default {
    data() {
        return {
            name: '',
            cost: '',
            image: '',
            route: '/shop/'
        }
    },
    created() {
        if (typeof product === "undefined") {
            this.name = '';
            this.cost = '';
            this.image = '';
        }
        else {
            this.name = this.product.name;
            this.cost = this.product.cost;
            this.image = this.product.image;
        }

    }
}
</script>
