<template>
    <HeaderCommon />
    <div class="info-content-page">
        <div class="about-us-heading">
            <h1>О проекте</h1>
            <div class="about-us-article">
                <p><strong>FAITHWORK</strong> – лаконичный стритстайл бренд одежды, раскрывающий ваши тайные глубинные
                    желания. Мы верим в то, что сексуальность каждого человека должна быть раскрыта, не только
                    посредством
                    его мыслей, фантазий и образов, но и внешнего вида, стиля, одежды.</p>
                <p>Как и в повседневной жизни нам важно видеть в нашем окружений единомышленников, чей разум и тело
                    открыты
                    не только к новой окружающей реальности, но и к внутренним душевным и ментальным изменениям.</p>
                <p>Присоединяйтесь к <strong>FAITHWORK</strong> и раскройте внутреннее неосознанное.</p>
            </div>
        </div>
        <div class="about-us-picture">
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