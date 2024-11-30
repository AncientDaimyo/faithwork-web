<template>
  <HeaderRide />
  <div class="single-product-page-wrapper">
    <MobileSingleProductSwiper />
    <div class="image-wrapper" ref="imageWrapper">

    </div>
    <div class="info">
      <p class="single-product-name">{{ product.name }}</p>
      <p class="single-product-article">{{ product.article }}</p>
      <p class="single-product-cost" v-if="product.cost">
        {{ product.cost.split('.')[0] }} ₽
      </p>

      <div class="single-product-description-block">
        <p class="single-product-description">Принт: {{ product.description.print }}</p>
        <p class="single-product-description">Плотность: {{ product.description.density }}</p>
        <p class="single-product-description">Состав: {{ product.description.compound }}</p>
      </div>

      <form class="single-product-size-form" @submit.prevent="addToCart">
        <div class="single-product-size-wrapper">
          <div class="single-product-size-cycle" v-for="size in product.sizes" :key="size" :size="size">
            <input :id="`size-${size}`" type="radio" name="getProductSize" v-model="sizeSelected" :value="size" required
              :disabled="isSizeInCart(product.uuid, size)" />
            <label :for="`size-${size}`" :class="{ disabled: isSizeInCart(product.uuid, size) }">
              {{ size }}
            </label>
          </div>
        </div>
        <div v-if="showError" class="error-message">Пожалуйста, выберите размер</div>

        <div class="single-product-add-to-cart">
          <div class="single-product-cart-buttons">
            <div class="single-product-cart-buttons-add">
              <button v-if="!hasJustAdded" type="button" class="single-product-add-to-cart-button" @click="addToCart">
                Добавить в корзину
              </button>
            </div>
            <div v-if="hasJustAdded" class="single-product-cart-buttons-after-add">
              <button type="button" class="single-product-go-to-cart" @click="goToCart">
                Перейти в корзину
              </button>
              <button type="button" class="single-product-continue-shopping" @click="continueShopping">
                Продолжить покупки
              </button>
            </div>
            <div class="single-product-cart-buttons-after-add">
              <button v-if="isAnySizeInCart && !hasJustAdded" type="button" class="single-product-return-cart"
                @click="goToCart">
                Вернуться в корзину
              </button>
            </div>
          </div>
        </div>
        <p class="size-guide-link" @click="openModal">Гайд по размерам</p>
      </form>

      <div v-if="showSizeGuide" class="modal" @click.self="closeModal">
        <div class="modal-content" ref="modalContent">
          <img :src="modalImageSrc" alt="Гайд по размерам" ref="modalImageRef" />
        </div>
      </div>
    </div>
  </div>
  <h1>Вам понравится:</h1>
  <ProductRecommendations />
  <FooterSecond />
</template>

<script>
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  nextTick,
  watch,
} from 'vue';
import HeaderRide from '../../Shared/controllers/HeaderRide.vue';
import FooterSecond from '../../Shared/controllers/FooterSecond.vue';
import ProductRecommendations from '../../Product/controllers/ProductRecommendations.vue';
import MobileSingleProductSwiper from '../controllers/MobileSingleProductSwiper.vue';
import axios from 'axios';
import { useCartStore } from '../../../stores/cart.js';
import { useProductRecomendationStore } from '../../../stores/productRecomendation.js';
import { useRouter } from 'vue-router';

// Импортируем изображения с использованием относительных путей
import girlFaceImage from '../../Shared/pic/FW_GIRL_FACE_black_2x3.png';
import sizeGuideImage from '../../Shared/pic/Razmernaja_Setka-01.png';

export default {
  components: {
    HeaderRide,
    FooterSecond,
    ProductRecommendations,
    MobileSingleProductSwiper,
  },
  setup() {
    const cartStore = useCartStore();
    const productRecomendationStore = useProductRecomendationStore();
    const router = useRouter();

    const product = ref({
      sizes: [],
      description: {},
    });

    const sizeSelected = ref(null);
    const hasJustAdded = ref(false);
    const showError = ref(false);
    const showSizeGuide = ref(false);
    const modalImageSrc = ref(null); // Для пути к изображению
    const modalImageRef = ref(null); // Ссылка на элемент <img>
    const modalContent = ref(null);
    const imageWrapper = ref(null);
    const isSliderInitialized = ref(false);

    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://127.0.0.1:8000/api/product/get-product-by/${router.currentRoute.value.params.id}`
        );
        product.value = response.data;
      } catch (error) {
        console.error('Ошибка при получении данных о продукте:', error);
      }
    };

    onMounted(() => {
      fetchProduct();
      productRecomendationStore.fetchRecommendedProducts();
      nextTick(() => {
        checkForSliderInit();
      });
    });

    onBeforeUnmount(() => {
      destroySlider();
    });

    watch(
      () => document.querySelectorAll('.single-product-image').length,
      (newLength) => {
        checkForSliderInit();
      }
    );

    const checkForSliderInit = () => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      if (mediaQuery.matches && document.querySelectorAll('.single-product-image').length > 1 && !isSliderInitialized.value) {
        initSlider();
      } else if (!mediaQuery.matches && isSliderInitialized.value) {
        destroySlider();
      }
    };

    const initSlider = () => {
      if (imageWrapper.value && imageWrapper.value !== window) {
        import('swiper').then(({ default: Swiper }) => {
          nextTick(() => {
            if (imageWrapper.value instanceof Element) {
              const swiper = new Swiper(imageWrapper.value, {
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
              });
              isSliderInitialized.value = true;
            } else {
              console.error('imageWrapper не является элементом DOM');
            }
          });
        });
      } else {
        console.error('imageWrapper не найден или является объектом window');
      }
    };

    const destroySlider = () => {
      if (imageWrapper.value) {
        import('swiper').then(({ default: Swiper }) => {
          nextTick(() => {
            const swiper = new Swiper(imageWrapper.value);
            swiper.destroy();
            isSliderInitialized.value = false;
          });
        });
      } else {
        console.error('imageWrapper не найден');
      }
    };

    const isAnySizeInCart = computed(() => {
      return cartStore.getCartItems.some(
        (item) => item.product.uuid === product.value.uuid
      );
    });

    const isSizeInCart = (productUuid, size) => {
      return cartStore.hasItemWithSize(productUuid, size);
    };

    const addToCart = () => {
      if (sizeSelected.value) {
        cartStore.addToCart(product.value, sizeSelected.value);
        hasJustAdded.value = true;
        showError.value = false;
      } else {
        showError.value = true;
      }
    };

    const goToCart = () => {
      router.push({ name: 'cart' });
      hasJustAdded.value = false;
    };

    const continueShopping = () => {
      router.push({ name: 'shop' });
      hasJustAdded.value = false;
    };

    const openModal = () => {
      modalImageSrc.value = sizeGuideImage;
      showSizeGuide.value = true;
    };

    const closeModal = () => {
      showSizeGuide.value = false;
    };

    const adjustImageSize = () => {
      if (modalContent.value && modalImageRef.value) {
        const contentHeight = modalContent.value.clientHeight;
        const contentWidth = modalContent.value.clientWidth;

        const maxHeight = contentHeight * 0.9;
        const maxWidth = contentWidth * 0.9;

        modalImageRef.value.style.maxHeight = `${maxHeight}rem`;
        modalImageRef.value.style.maxWidth = `${maxWidth}rem`;
      }
    };


    // Следим за изменением showSizeGuide
    watch(showSizeGuide, (newVal) => {
      if (newVal) {
        nextTick(() => {
          adjustImageSize();
          window.addEventListener('resize', adjustImageSize);
        });
      } else {
        window.removeEventListener('resize', adjustImageSize);
      }
    });

    return {
      product,
      sizeSelected,
      hasJustAdded,
      showError,
      isAnySizeInCart,
      isSizeInCart,
      addToCart,
      goToCart,
      continueShopping,
      openModal,
      closeModal,
      modalImageSrc,
      modalImageRef,
      modalContent,
      showSizeGuide,
      girlFaceImage,
      imageWrapper,
      checkForSliderInit,
      initSlider,
      destroySlider,
    };
  },
};
</script>