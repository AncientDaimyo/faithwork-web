<template>
    <HeaderCommon/>
    <div class="info-content-page">
        <div class="contact-us-heading">
            <h1>Контакты</h1>
            <div class="contact-us-article">
                <p>
                    <strong>Email:</strong> <a href="mailto:clothing@faithwork.ru">clothing@faithwork.ru</a>
                </p>
                <p>
                    <strong>ИНН:</strong> 434547177915
                </p>
                <p>Скоро тут будет форма обратной связи, но мы её еще не сделали, поэтому пишите на Email, ответим в течение
                    получаса на любой вопрос, даже как сделать сырники.</p>
            </div>
        </div>
        <div class="contact-us-picture">
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