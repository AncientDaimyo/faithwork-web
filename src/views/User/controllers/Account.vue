<script setup>
import { ref, reactive, onMounted } from 'vue';
import HeaderCommon from '@/views/Shared/controllers/HeaderCommon.vue'
import FooterSecond from '@/views/Shared/controllers/FooterSecond.vue'

const getFullName = reactive({
    name: '',
    secondName: '',
    lastName: ''
})

const isDataSaved = ref(false); // флаг, отслеживающий, были ли данные сохранены
const savedFullName = ref(''); // сохраненное полное имя

const saveUserData = async () => {
    // Здесь можно отправить данные пользователя на сервер или выполнить другие действия по сохранению данных

    // Пример сохранения данных в localStorage
    localStorage.setItem('name', getFullName.name);
    localStorage.setItem('secondName', getFullName.secondName);
    localStorage.setItem('lastName', getFullName.lastName);

    // Обновление отображаемых данных пользователя
    savedFullName.value = `${getFullName.name} ${getFullName.lastName} ${getFullName.secondName}`;
    isDataSaved.value = true;

    alert("Данные успешно обновлены!");
}

onMounted(() => {
    // При монтировании компонента можно загрузить сохраненные данные пользователя из localStorage
    getFullName.name = localStorage.getItem('name') || '';
    getFullName.secondName = localStorage.getItem('secondName') || '';
    getFullName.lastName = localStorage.getItem('lastName') || '';
})
</script>

<template>
    <HeaderCommon />
    <div class="account-full-wrapper">
        <div class="account-user-info">
            <div class="user-full-name">
                <p v-if="!isDataSaved">{{ getFullName.name + " " + getFullName.lastName + " " + getFullName.secondName
                    }}</p>
                <p v-else>{{ savedFullName }}</p>
            </div>
            <p class="user-email">spherefuturecow@gmail.com</p>
        </div>
        <div class="account-inputs-changes">
            <form class="account-settings" @submit.prevent="saveUserData">
                <h2>Личные данные</h2>
                <input type="text" placeholder="Имя" v-model="getFullName.name">
                <input type="text" placeholder="Отчество" v-model="getFullName.lastName">
                <input type="text" placeholder="Фамилия" v-model="getFullName.secondName">
                <button type="submit">Сохранить данные</button>
            </form>
            <form class="account-location">
                <h2>Адрес</h2>
                <input type="text" placeholder="Город">
            </form>
        </div>
    </div>
    <FooterSecond />
</template>