<template>
    <HeaderCommon />
    <div class="info-content-page">
        <div class="delivery-info">
            <div class="delivery-heading">
                <h1>Бесплатная доставка</h1>
                <div class="delivery-article">
                    <p>Бесплатная доставка осуществляется при заказе от 5000 ₽ до пункта выдачи заказов CDEK, Почта РФ.
                    </p>
                    <p>При оформлении заказа от 5000 ₽ вы можете указать предпочтительный вариант доставки CDEK или
                        Почта РФ.</p>
                </div>
            </div>
            <div class="delivery-heading">
                <h1>Доставка Почтой РФ</h1>
                <div class="delivery-article">
                    <p>В настоящее время доставка осуществляется только в пределах РФ.</p>
                    <p>Стоимость доставки в отделение Почты РФ высчитывается на странице оформления заказа и зависит от
                        расстояния до пункта назначения.</p>
                    <p>Товары отправляются из Санкт-Петербурга.</p>
                </div>
            </div>
            <div class="delivery-heading">
                <h1>Время доставки</h1>
                <div class="delivery-article">
                    <p>Товар передается в транспортную компанию в течение 24 часов с момента поступления средств на
                        счёт. После отправки на ваш email предоставляется трек-код для отслеживания посылки.</p>
                    <p>Срок доставки зависит от удаленности пункта назначения до нашего склада, однако в среднем
                        доставка осуществляется за 5-10 календарных дней.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="delivery-picture">
        <img src="../pic/FW_GIRL_FACE_black.png" />
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
    }
}
</script>