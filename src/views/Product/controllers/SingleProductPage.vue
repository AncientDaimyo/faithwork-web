<template>
    <HeaderRide />
    <div class="single-product-page-wrapper">
      <div class="image-wrapper">
        <img
          class="single-product-image"
          :src="product.image"
          :alt="name"
          v-for="(img, index) in 3"
          :key="index"
        />
      </div>
      <div class="info">
        <!-- <p class="single-product-id">{{ product.uuid }}</p> -->
        {{ product }}
        <p class="single-product-name">{{ product.name }}</p>
        <p class="single-product-article">{{ product.article }}</p>
        <p class="single-product-cost">{{ product.cost.split('.')[0] }}</p>
        <div class="single-product-description-block">
          <p class="single-product-description">Принт: {{ product.description.print }}</p>
          <p class="single-product-description">Плотность: {{ product.description.density }}</p>
          <p class="single-product-description">Состав: {{ product.description.compound }}</p>
        </div>
        <form class="single-product-size-form" @submit.prevent="addToCart">
          <div class="single-product-size-wrapper">
            <div
              class="single-product-size-cycle"
              v-for="size in product.sizes"
              :key="size"
              :size="size"
            >
              <input
                :id="`size-${size}`"
                type="radio"
                name="getProductSize"
                v-model="sizeSelected"
                :value="size"
                required
              />
              <label :for="`size-${size}`">{{ size }}</label>
            </div>
          </div>
          <div class="single-product-add-to-cart">
            <button
              class="single-product-add-to-cart-button"
              v-if="showAddToCartButton"
              @click="addToCart"
            >
              Добавить в корзину
            </button>
            <button class="single-product-go-to-cart" v-if="showGoToCartButton" @click="goToCart">
              Перейти в корзину
            </button>
          </div>
        </form>
      </div>
    </div>
    <FooterSecond />
  </template>
  
  <script>
  import HeaderRide from "../../Shared/controllers/HeaderRide.vue";
  import FooterSecond from "../../Shared/controllers/FooterSecond.vue";
  import axios from "axios";
  import { useCartStore } from "../../../stores/cart.js"; // Подключаем хранилище
  
  export default {
    components: {
      HeaderRide,
      FooterSecond,
    },
    data() {
      return {
        product: {
          sizes: [],
          description: {},
        },
        sizeSelected: null,
        showAddToCartButton: true,
        showGoToCartButton: false,
      };
    },
    created() {
      axios
        .get("https://127.0.0.1:8000/api/product/get-product-by/" + this.$route.params.id)
        .then((response) => {
          this.product = response.data;
        });
    },
    methods: {
      addToCart() {
        if (this.sizeSelected) {
          const cartStore = useCartStore(); // Используем хранилище
          cartStore.addToCart(this.product, this.sizeSelected); // Добавляем товар в корзину
          this.showAddToCartButton = false; // Скрываем кнопку "Добавить в корзину"
          this.showGoToCartButton = true; // Отображаем кнопку "Перейти в корзину"
        } else {
          alert("Пожалуйста, выберите размер");
        }
      },
      goToCart() {
        this.$router.push({ name: "cart" }); // Переход на страницу корзины
      },
    },
  };
  </script>