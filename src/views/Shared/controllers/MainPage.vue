<template>
    <HeaderMain />
    <VideoMain />
    <SliderMain />
    <MarqueeMain />
    <FooterMain />
</template>

<script>
import HeaderMain from './HeaderMain.vue'
import VideoMain from './VideoMain.vue'
import SliderMain from './SliderMain.vue'
import MarqueeMain from './MarqueeMain.vue'
import FooterMain from './FooterMain.vue'

export default {
    components: {
        HeaderMain,
        VideoMain,
        SliderMain,
        MarqueeMain,
        FooterMain
    }
}
</script>