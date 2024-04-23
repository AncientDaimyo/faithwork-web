<template>
    <HeaderCommon/>
    <div class="info-content-page">
        <div class="size-guide-heading">
            <h1>Размерная сетка</h1>
            <div class="size-guide-article">
                <p>
                    Мы сделали для вас отдельную страницу для выбора размерной сетки всех типов наших товаров
                </p>
            </div>
        </div>
        <div class="size-guide-picture">
            <img src="../pic/FW_GIRL_FACE_black.png" />
        </div>
    </div>
    <FooterSecond/>
</template>

<script>
import HeaderCommon from '../../Shared/controllers/HeaderCommon.vue'
import FooterSecond from '../../Shared/controllers/FooterSecond.vue'

export default {
    components: {
        HeaderCommon,
        FooterSecond,
    }
}
</script>