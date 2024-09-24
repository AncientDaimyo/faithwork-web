<template>
    <div class="recommendations">
      <h2 class="recommendations-title">Вам может понравиться</h2>
      <div class="recommendations-list" v-if="recommendedProducts.length > 0">
        <RecommendedProductCard 
          v-for="product in recommendedProducts" 
          :key="product.uuid" 
          :product="product" 
        />
      </div>
    </div>
  </template>
  
  <script>
  import { useProductRecomendationStore } from '../../../stores/productRecomendation.js';
  import RecommendedProductCard from 'D:/Programing/faithwork-web/src/views/Product/controllers/RecommendedProductCard.vue';
  
  export default {
    components: {
      RecommendedProductCard,
    },
    computed: {
      recommendedProducts() {
        const productRecomendationStore = useProductRecomendationStore();
        return productRecomendationStore.getRecommendedProducts(3);
      },
    },
  };
  </script>