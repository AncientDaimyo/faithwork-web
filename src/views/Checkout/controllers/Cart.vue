<template>
    <div class="cart-page">
      <h1>Корзина</h1>
  
      <!-- Отображение товаров в корзине -->
      <div v-if="cartItems.length > 0">
        <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
          <img
            :src="item.product.image"
            :alt="item.product.name"
            class="cart-item-image"
          />
          <div class="cart-item-info">
            <p class="cart-item-name">{{ item.product.name }}</p>
            <p class="cart-item-size">Размер: {{ item.size }}</p>
            <div class="cart-item-quantity">
              <button @click="decreaseQuantity(item.product.uuid, item.size)">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="increaseQuantity(item.product.uuid, item.size)">+</button>
            </div>
            <p class="cart-item-price">
              Цена: {{ item.product.cost }} ₽ (за единицу)
            </p>
            <p class="cart-item-total">
              Общая стоимость: {{ item.product.cost * item.quantity }} ₽
            </p>
            <!-- Кнопка удаления товара -->
            <button @click="removeItem(item.product.uuid, item.size)">Удалить</button>
          </div>
        </div>
  
        <!-- Отображение общей суммы -->
        <div class="cart-total">
          <p>Итого: {{ cartTotalPrice }} ₽</p>
          <!-- Кнопка для полной очистки корзины -->
          <button @click="clearCart">Очистить корзину</button>
          <!-- Оформление заказа -->
          <button @click="checkout">Оформить заказ</button>
        </div>
      </div>
  
      <!-- Сообщение, если корзина пуста -->
      <div v-else>
        <p>Ваша корзина пуста.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useCartStore } from "../../../stores/cart.js"; // Подключаем хранилище Pinia
  
  export default {
    setup() {
      const cartStore = useCartStore(); // Используем хранилище
  
      return {
        cartItems: computed(() => cartStore.getCartItems), // Получаем товары в корзине через геттер
        cartTotalPrice: computed(() => cartStore.cartTotalPrice), // Общая стоимость корзины
        removeItem: cartStore.removeFromCart, // Метод удаления товара
        increaseQuantity: cartStore.increaseQuantity, // Увеличиваем количество товара
        decreaseQuantity: cartStore.decreaseQuantity, // Уменьшаем количество товара
        clearCart: cartStore.clearCart, // Полная очистка корзины
      };
    },
    methods: {
      checkout() {
        alert("Оформление заказа в разработке!");
      },
    },
  };
  </script>
  