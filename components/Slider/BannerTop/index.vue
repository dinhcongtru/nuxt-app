<template>
    <Splide :options="props.options" :has-track="false">
        <SplideTrack>
            <SplideSlide v-for="(e, i) in props.data" :key="i">
                <img :src="$images[e]" width="100%" height="100%" alt="slider banner" class="size-full" />
            </SplideSlide>
        </SplideTrack>
        <slot name="arrows"/>
        <!-- <div class="splide__arrows">
            <button class="splide__arrow splide__arrow--prev">Prev</button>
            <button class="splide__arrow splide__arrow--next">Next</button>
        </div> -->
    </Splide>
</template>
<script lang="ts" setup>
import type { Options } from '@splidejs/splide';
const props = defineProps<{
    data: Array<string>;
    options: Options;
}>();
</script>
<style lang="css"></style>
