<template>
    <button type="button" :class="['btn_secondary rounded-xl border text-[#000] border-[#1C2430] border-solid w-full min-h-12 font-semibold text-lg flex items-center justify-center gap-2',{'bg-[#fcaf17] border-x-0 border-t-0 border-[#ca8c12] border-b-[3px] text-[#1c2430]' : props.state === 'primary'}]">
        <slot />
        <span>{{ props.value }}</span>
    </button>
</template>
<script lang="ts" setup>
const props = defineProps<{
    value: string;
    state?: 'normal' | 'primary';
}>();
</script>
<style lang="css">
    
</style>