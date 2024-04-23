<template>
    <a v-bind:href="route + id"></a>
    <div class="product-card-wrapper" @mouseenter="showImage = true" @mouseleave="showImage = false">
        
        <div class="image-wrapper">
            <img class="product-card-image" v-bind:src="imageDir + image" v-bind:alt="name" />
        </div>
        <div class="product-card-name">{{ name }}</div>
        <div class="product-card-cost">{{ cost.split('.')[0] }}&#8381</div>
    </div>
</template>

<script setup>

defineProps({
    'id': String,
    'name': String,
    'article': String,
    'image': String,
    'cost': String,
    'description': String,
});

</script>

<script>

export default {
    data() {
        return {
            route: "shop/",
            imageDir: "/images/products/",
        };
    },
    methods: {

    }
}
</script>