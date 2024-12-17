<template>
    <Splide :options="{ perPage: 1, perMove: 1, type: 'loop', autoplay: true,easing: 'linear' }">
        <SplideSlide v-for="(e, i) in props.data" :key="i">
            <NuxtImg :src="e" width="100%" height="100%" alt="slider banner" class="size-full" />
        </SplideSlide>
    </Splide>
</template>
<script lang="ts" setup>

const props = defineProps<{
    data: Array<string>;
}>();
</script>
<style lang="css"></style>
