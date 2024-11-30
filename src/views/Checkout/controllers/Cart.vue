<template>
  <!-- Обертка страницы -->
  <div class="page-wrapper">
    <!-- Компонент HeaderCommon -->
    <HeaderCommon />

    <!-- Обертка контента -->
    <div class="content-wrapper">
      <!-- Контейнер для корзины -->
      <div class="cart-page">
        <!-- Модальное окно авторизации -->
        <AuthModal :showModal="showModal" @close="closeModal" @continue-checkout="continueCheckout" />

        <!-- Список товаров в корзине -->
        <div v-if="cartItems.length > 0" class="cart-items-container">
          <!-- Вывод каждого товара в корзине -->
          <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
            <!-- Обертка изображения товара -->
            <div class="cart-item-image-wrapper">
              <!-- Изображение товара -->
              <img src="D:/Programing/faithwork-web/src/views/Shared/pic/FW_GIRL_FACE_black_2x3.png"
                :alt="item.product.name" class="cart-item-image" @click="goToProductPage(item.product.uuid)" />
            </div>

            <!-- Информация о товаре -->
            <div class="cart-item-info">
              <!-- Название товара -->
              <p class="cart-item-name" @click="goToProductPage(item.product.uuid)" :style="{ cursor: 'pointer' }">
                {{ item.product.name }}
              </p>
              <!-- Размер товара -->
              <p class="cart-item-size">Размер: {{ item.size }}</p>
              <!-- Количество товара -->
              <div class="cart-item-quantity">
                <!-- Кнопка уменьшения количества -->
                <button @click="decreaseQuantity(item.product.uuid, item.size)">
                  -
                </button>
                <!-- Текущее количество -->
                <span>{{ item.quantity }}</span>
                <!-- Кнопка увеличения количества -->
                <button @click="increaseQuantity(item.product.uuid, item.size)">
                  +
                </button>
              </div>
              <!-- Цена товара -->
              <p class="cart-item-price">
                Цена: {{ item.product.cost }} ₽ (за единицу)
              </p>
              <!-- Общая стоимость товара -->
              <p class="cart-item-total">
                Общая стоимость: {{ item.product.cost * item.quantity }} ₽
              </p>
              <!-- Кнопка удаления товара -->
              <button @click="removeItem(item.product.uuid, item.size)" class="remove-item">
                Удалить
              </button>
            </div>
          </div>
        </div>

        <!-- Информация о корзине и действия -->
        <div v-if="cartItems.length > 0" class="cart-total">
          <!-- Общая стоимость корзины -->
          <div>
            <p>Итого: {{ cartTotalPrice }} ₽</p>
          </div>
          <!-- Действия с корзиной -->
          <div class="actions">
            <!-- Блок кнопки оформления заказа -->
            <div class="action_checkout_block">
              <!-- Кнопка оформления заказа -->
              <button @click="checkout" class="checkout">
                Оформить заказ
              </button>
            </div>
            <!-- Блок кнопки очистки корзины -->
            <div class="action_clear_cart_block">
              <!-- Кнопка очистки корзины -->
              <button @click="clearCart" class="clear-cart">
                Очистить корзину
              </button>
            </div>
          </div>
        </div>

        <!-- Сообщение для пустой корзины -->
        <div v-else class="empty-cart-message">
          <p>Тут пусто, добавьте товар и случится чудо :)</p>
        </div>
      </div>
    </div>

    <!-- Компонент FooterSecond -->
    <FooterSecond />
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useCartStore } from "../../../stores/cart.js";
import HeaderCommon from "../../Shared/controllers/HeaderCommon.vue";
import FooterSecond from "../../Shared/controllers/FooterSecond.vue";
import AuthModal from "../../User/controllers/AuthModal.vue";
import { useUserStore } from "../../../stores/userStore.js";
import { useRouter } from 'vue-router';

export default {
  components: {
    HeaderCommon,
    FooterSecond,
    AuthModal,
  },
  setup() {
    // Используем store для работы с корзиной
    const cartStore = useCartStore();
    // Используем store для работы с пользователем
    const userStore = useUserStore();
    // Используем router для навигации по страницам
    const router = useRouter();

    // Состояние модального окна авторизации
    const showModal = ref(false);

    // Проверяем, авторизован ли пользователь
    const isLoggedIn = computed(() => userStore.isLoggedIn);

    // Функция закрытия модального окна авторизации
    const closeModal = () => {
      showModal.value = false;
      document.body.style.overflow = 'auto';
    };

    // Функция продолжения оформления заказа
    const continueCheckout = () => {
      closeModal();
      // Логика продолжения оформления заказа
      alert("Продолжаем оформление заказа!");
    };

    // Функция оформления заказа
    const checkout = () => {
      if (isLoggedIn.value) {
        alert("Оформление заказа в разработке!");
      } else {
        showModal.value = true;
        document.body.style.overflow = 'hidden';
      }
    };

    // Функция перехода на страницу товара
    const goToProductPage = (productId) => {
      router.push(`/shop/${productId}`);
    };

    // Возвращаем необходимые данные и функции
    return {
      // Список товаров в корзине
      cartItems: computed(() => cartStore.getCartItems),
      // Общая стоимость корзины
      cartTotalPrice: computed(() => cartStore.cartTotalPrice),
      // Функция удаления товара из корзины
      removeItem: cartStore.removeFromCart,
      // Функция увеличения количества товара в корзине
      increaseQuantity: cartStore.increaseQuantity,
      // Функция уменьшения количества товара в корзине
      decreaseQuantity: cartStore.decreaseQuantity,
      // Функция очистки корзины
      clearCart: cartStore.clearCart,
      // Функция оформления заказа
      checkout,
      // Состояние модального окна авторизации
      showModal,
      // Функция закрытия модального окна авторизации
      closeModal,
      // Функция продолжения оформления заказа
      continueCheckout,
      // Функция перехода на страницу товара
      goToProductPage,
    };
  },
};
</script>