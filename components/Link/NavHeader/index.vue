<template>
    <ul class="nav_header inline-flex">
        <li v-for="(e,i) in props.data" :key="i" class="inline-flex">
            <LinkNavHeaderItem :href="e.href" :value="e.value" />
        </li>
    </ul>
</template>
<script lang="ts" setup>
const props = defineProps<{
    data: Array<{
        href: string;
        value: string;
    }>
}>()

</script>
<style lang="css">
    
</style>