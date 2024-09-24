<template>
  <HeaderRide />
  <div class="single-product-page-wrapper">
    <div class="image-wrapper">
      <img src="D:\Programing\faithwork-web\src\views\Shared\pic\FW_GIRLS_LOGO_black.png" alt="" class="single-product-image" />
    </div>
    <div class="info">
      <p class="single-product-name">{{ product.name }}</p>
      <p class="single-product-article">{{ product.article }}</p>
      <p class="single-product-cost" v-if="product.cost">{{ product.cost.split('.')[0] }}</p>

      <div class="single-product-description-block">
        <p class="single-product-description">Принт: {{ product.description.print }}</p>
        <p class="single-product-description">Плотность: {{ product.description.density }}</p>
        <p class="single-product-description">Состав: {{ product.description.compound }}</p>
      </div>

      <form class="single-product-size-form" @submit.prevent="addToCart">
        <div class="single-product-size-wrapper">
          <div class="single-product-size-cycle" v-for="size in product.sizes" :key="size" :size="size">
            <input :id="`size-${size}`" type="radio" name="getProductSize" v-model="sizeSelected" :value="size" required />
            <label :for="`size-${size}`">{{ size }}</label>
          </div>
        </div>

        <div class="single-product-add-to-cart">
          <div class="single-product-cart-buttons">
            <button class="single-product-add-to-cart-button" v-if="showAddToCartButton" @click="addToCart">
              Добавить в корзину
            </button>
            <button class="single-product-go-to-cart" v-if="showGoToCartButton" @click="goToCart">
              Перейти в корзину
            </button>
          </div>
          <button class="single-product-continue-shopping" v-if="showContinueShoppingButton" @click="continueShopping">
            Продолжить покупки
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Компонент рекомендаций -->
  <ProductRecommendations />

  <FooterSecond />
</template>

<script>
import HeaderRide from "../../Shared/controllers/HeaderRide.vue";
import FooterSecond from "../../Shared/controllers/FooterSecond.vue";
import ProductRecommendations from "../../Product/controllers/ProductRecommendations.vue";
import axios from "axios";
import { useCartStore } from "../../../stores/cart.js";
import { useProductRecomendationStore } from "../../../stores/productRecomendation.js"; // Импорт хранилища рекомендаций

export default {
  components: {
    HeaderRide,
    FooterSecond,
    ProductRecommendations,
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
      showContinueShoppingButton: false,
    };
  },
  created() {
    // Получаем данные о продукте по ID из URL
    axios
      .get("https://127.0.0.1:8000/api/product/get-product-by/" + this.$route.params.id)
      .then((response) => {
        this.product = response.data;
      });

    // Загружаем рекомендации продуктов
    const productStore = useProductRecomendationStore();
    productStore.fetchRecommendedProducts(); // Вызываем правильный метод
  },
  methods: {
    addToCart() {
      if (this.sizeSelected) {
        const cartStore = useCartStore();
        cartStore.addToCart(this.product, this.sizeSelected);
        this.showAddToCartButton = false;
        this.showGoToCartButton = true;
        this.showContinueShoppingButton = true;
      } else {
        alert("Пожалуйста, выберите размер");
      }
    },
    goToCart() {
      this.$router.push({ name: "cart" });
    },
    continueShopping() {
      this.$router.push({ name: "shop" });
    },
  },
};
</script>