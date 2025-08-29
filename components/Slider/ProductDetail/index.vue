<template>
    <div class="slider_init flex gap-3">
        <Splide :options="props.optionThumnails" :has-track="false" ref="thumbSplide">
            <SplideTrack>
                <SplideSlide v-for="(e, i) in props.dataImageURL" :key="i">
                    <img :src="$images[e]" class="size-full object-cover" alt="slide image thumb" />
                </SplideSlide>
            </SplideTrack>
        </Splide>
        <Splide :options="props.optionMain" :has-track="false" ref="mainSplide">
            <SplideTrack>
                <SplideSlide v-for="(e, i) in props.dataImageURL" :key="i">
                    <img :src="$images[e]" :width="495" alt="slide image thumb" />
                </SplideSlide>
            </SplideTrack>
        </Splide>
    </div>
</template>
<script lang="ts" setup>
import type { Options } from '@splidejs/splide';
const props = defineProps<{
    optionMain: Options;
    optionThumnails: Options;
    dataImageURL: Array<string>;
}>();

const mainSplide = ref<any>(null);
const thumbSplide = ref<any>(null);

onMounted(() => {
    if (mainSplide.value && thumbSplide.value) {
    mainSplide.value.splide.sync(thumbSplide.value.splide)
  }
})

</script>
<style lang="css" scoped>
.splide__track--nav>.splide__list>.splide__slide {
    border: 1px solid transparent;
}
.splide__track--nav>.splide__list>.splide__slide.is-active {
    border: 1px solid #333;
}
</style>