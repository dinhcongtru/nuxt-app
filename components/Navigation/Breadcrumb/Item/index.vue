<template>
    <div class="item text-base text-[#6e87aa]">
        <NuxtLink v-if="props.link" class="link relative" :to="link">
            {{ props.value }}
            <Icon name="uil:angle-right-b" class="text-base absolute translate-y-[-50%] top-1/2 right-[-19px]" />
        </NuxtLink>
        <span v-else class="label text-[#394960]">{{ props.value }}</span>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
    link?: string;
    value: string;
}>();
</script>
<style lang="css">
    
</style>