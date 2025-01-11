<template>
    <div class="test-page">
        <button class="fw-btn fw-btn--disabled" disabled>Кнопка</button>
        <button class="fw-btn fw-btn--primary">Кнопка</button>
        <input class="fw-input" type="text" placeholder="Текстовое поле">
        <input class="fw-input fw-input--disabled" type="text" placeholder="Текстовое поле" disabled>

        <h1 class="fw-h1">Heading 1</h1>
        <h2 class="fw-h2">Heading 2</h2>
        <h3 class="fw-h3">Heading 3</h3>
        <h4 class="fw-h4">Heading 4</h4>
        <h5 class="fw-h5">Heading 5</h5>
        <h6 class="fw-h6">Heading 6</h6>
        <p class="fw-p">This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
            odio
            vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>


        <button class="fw-btn fw-btn--primary" @click="openModal">Open Modal</button>
        <div :class="['fw-modal', { 'fw-modal--visible': isVisible }]" @click.self="closeModal">
            <div class="fw-modal-content">
                <div class="fw-modal-header">
                    <span class="fw-modal-close" @click="closeModal">&times;</span>
                </div>
                <div class="fw-modal-body">
                    This is the modal content.
                </div>
                <div class="fw-modal-footer">
                    <button class="fw-btn fw-btn--secondary" @click="closeModal">Close</button>
                    <button class="fw-btn fw-btn--primary" @click="save">Save</button>
                </div>
            </div>
        </div>
    </div>
    < </template>

<script setup>
import { ref } from 'vue';

console.log('Setup script loaded');

const isVisible = ref(false);
const title = 'Модальное окно';

const openModal = () => {
    isVisible.value = true;
    console.log('Modal opened');
};

const closeModal = () => {
    console.log('Closing modal');
    isVisible.value = false;
};

const save = () => {
    console.log('Saving and closing modal');
    isVisible.value = false;
};
</script>

<style scoped>
.test-page {
    height: 150vh;
}
</style>
