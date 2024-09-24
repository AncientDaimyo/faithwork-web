<template>
  <HeaderRide />
  
  <div class="shop-page" >
    <ProductCard v-for="product in products" :key="product" :product="product" />
  </div>
  <FooterSecond />
</template>

<script>
import HeaderRide from "../../Shared/controllers/HeaderRide.vue";
import FooterSecond from "../../Shared/controllers/FooterSecond.vue";
import ProductCard from "./ProductCard.vue";
import axios from "axios";

export default {
  components: {
    HeaderRide,
    FooterSecond,
    ProductCard,
  },
  data() {
    return {
      products: {},
    };
  },
  created() {
    axios.get("https://127.0.0.1:8000/api/product/get-products")
      .then((response) => {
        // data is already parsed as JSON
        this.products = response.data;
      });
  }
};
</script>
