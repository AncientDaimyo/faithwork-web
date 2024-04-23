<template>
    <HeaderCommon/>
    <div class="info-content-page">
        <div class="goods-exchange-and-return-heading">
            <h1>Обмен и возврат</h1>
            <div class="goods-exchange-and-return-article">
                <p>
                    <strong>Любой товар можно обменять или вернуть, при соблюдении следующих условий</strong>:<br>
                    – Товар не находился в употреблении и сохранены фабричные ярлыки.<br>
                    – Срок с момента покупки не превысил 30 календарных дней.<br>
                    – При возврате или обмене заказа в интернет магазине расходы на доставку не компенсируются.
                </p>
                <p>
                    <strong>При обмене или возврате онлайн-заказа необходимо написать письмо в нашу службу
                        поддержки:</strong><br>
                    <a href="mailto:clothing@faithwork.ru">clothing@faithwork.ru</a>
                </p>
                <p>
                    Вещи необходимо отправить на обратный адрес (адрес высылается по требованию клиента).<br>
                    Посылка должна быть отправлена без наложенного платежа.<br>
                    Возврат денежных средств или обмен осуществляется после того, как посылка с возвратом вернулась на
                    склад
                    интернет магазина.<br>
                    <strong>Для возврат денежных средств, клиент обязан предоставить следующую информацию:</strong><br>
                    – Наименование банка<br>
                    – Расчетный счет<br>
                    – БИК банка<br>
                    – ФИО
                </p>
                <p>
                    <strong>Стоимость доставки не учитывается (за исключением случаев заводского брака или вами получен
                        товар не надлежащего качества)</strong>
                </p>
            </div>
        </div>
        <div class="goods-exchange-and-return-picture">
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