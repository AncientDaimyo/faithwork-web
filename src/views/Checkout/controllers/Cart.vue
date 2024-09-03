<template>
    <HeaderCommon />
    <div class="cart-full-page">
        <CartCard />
        <Checkout />
    </div>
    <FooterSecond />
</template>



<script>

import CartCard from './CartCard.vue';
import Checkout from './Checkout.vue';
import HeaderCommon from '../../Shared/controllers/HeaderCommon.vue';
import FooterSecond from '@/views/Shared/controllers/FooterSecond.vue';

export default {
    components: {
        HeaderCommon,
        FooterSecond,
        CartCard,
        Checkout,
    }
}

</script>