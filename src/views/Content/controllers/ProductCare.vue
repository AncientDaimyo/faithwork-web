<template>
    <HeaderCommon />
    <div class="dropdown-container">
        <div class="dropdown-trigger" @mouseover="showDropdown = true, handleMouseOver" @mouseleave="handleMouseLeave">
            Открыть/Закрыть список
        </div>
        <div v-if="showDropdown" class="dropdown">
            <a href="#" @mouseover="handleLinkMouseOver" @mouseleave="handleLinkMouseLeave">Ссылка 1</a>
            <a href="#" @mouseover="handleLinkMouseOver" @mouseleave="handleLinkMouseLeave">Ссылка 2</a>
            <a href="#" @mouseover="handleLinkMouseOver" @mouseleave="handleLinkMouseLeave">Ссылка 3</a>
        </div>
    </div>
    <FooterSecond />
</template>

<script>
import HeaderCommon from '../../Shared/controllers/HeaderCommon.vue'
import FooterSecond from '../../Shared/controllers/FooterSecond.vue'

export default {
    components: {
        HeaderCommon,
        FooterSecond,
    },
    data() {
        return {
            showDropdown: false,
            timer: null
        }
    },
    methods: {
        handleMouseLeave() {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.showDropdown = false;
            }, 500); // Задержка в 200 миллисекунд
        },
        handleLinkMouseOver() {
            clearTimeout(this.timer);
        },
        handleLinkMouseLeave() {
            this.timer = setTimeout(() => {
                this.showDropdown = false;
            }, 500); // Задержка в 200 миллисекунд
        }
    }
}
</script>

<style scoped>
.dropdown-container {
    position: relative;
}

.dropdown-trigger {
    cursor: pointer;
}

.dropdown {
    display: inline-block;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown a:hover {
    background-color: #f1f1f1;
}
</style>