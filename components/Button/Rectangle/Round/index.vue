<template>
    <button type="button" :class="[{'text-[black] font-semibold bg-[#fcaf17]': props.active},'text-lg text-[#949494] min-h-[50px] cursor-pointer rounded-[100px] bg-[#fafafa] px-8 transition-all']" :id="props.id" :name="props.name" :value="props.value" @click="onClick(props.value)">{{ props.value }}</button>
</template>
<script lang="ts" setup>
const props = defineProps<{
    id?: string;
    name?: string;
    value: string;
    active?: boolean;
}>();

const emits = defineEmits<{
    (e: 'onClick', value: string): void,
}>();

const onClick = (value: string) => {
    emits('onClick',value);
}

</script>
<style lang="css">
    
</style>