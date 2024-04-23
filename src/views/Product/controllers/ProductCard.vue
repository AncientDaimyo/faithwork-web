<template>
    <a v-bind:href="route + id"></a>
    <div class="product-card-wrapper" @mouseenter="showImage = true" @mouseleave="showImage = false">
        <div class="image-wrapper">
            <img class="product-card-image" :src="this.image">
        </div>
        <div class="product-card-name">{{ this.name }}</div>
        <div class="product-card-cost">{{ this.cost.split('.')[0] }}</div>
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
            image: ''

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
