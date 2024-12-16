<template>
        <NuxtLink :to="props.href" class="item inline-block px-3 py-2 text-base leading-6 font-medium">
            {{ props.value }}
        </NuxtLink>
</template>
<script lang="ts" setup>

const props = defineProps<{
    href: string;
    value: string;
}>()
</script>
<style lang="css">
    
</style>