<template>
    <div class="page-wrapper">
        <HeaderCommon />
        <div class="content-wrapper">
            <div class="cart-page">
                <div v-if="cartItems.length > 0" class="cart-items-container">
                    <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
                        <div class="cart-item-image-wrapper">
                            <img src="D:\Programing\faithwork-web\src\views\Shared\pic\FW_GIRLS_LOGO_black.png"
                                :alt="item.product.name" class="cart-item-image" />
                        </div>
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
                            <button @click="removeItem(item.product.uuid, item.size)" class="remove-item">
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Cart total and actions -->
                <div v-if="cartItems.length > 0" class="cart-total">
                    <p>Итого: {{ cartTotalPrice }} ₽</p>
                    <div class="actions">
                        <button @click="clearCart" class="clear-cart">Очистить корзину</button>
                        <button @click="checkout" class="checkout">Оформить заказ</button>
                    </div>
                </div>

                <!-- Message for empty cart -->
                <div v-else class="empty-cart-message">
                    <p>Тут пусто, добавьте товар и случится чудо :)</p>
                </div>
            </div>
        </div>
        <FooterSecond />
    </div>
</template>

<script>
import { computed } from 'vue';
import { useCartStore } from "../../../stores/cart.js"; // Подключаем хранилище Pinia
import HeaderCommon from '../../Shared/controllers/HeaderCommon.vue';
import FooterSecond from '../../Shared/controllers/FooterSecond.vue';
import { useGamblingStore } from "../../../stores/gambling.js";

export default {
    components: {
        HeaderCommon,
        FooterSecond,
    },
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
            const gamblingStore = useGamblingStore();
            gamblingStore.setShowCardIcon(true);
        },
    },
};
</script>