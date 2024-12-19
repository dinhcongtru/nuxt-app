<template>
    <nav class="nav_breadcrum max-w-7xl mx-auto px-12 mb-5">
        <ul class="breadcrumb_lists flex items-center gap-[22px] p-2.5">
            <li v-for="(e,i) in props.data" :key="i">
                <NavigationBreadcrumbItem :link="e.link" :value="e.value" />
            </li>
        </ul>
    </nav>
</template>
<script lang="ts" setup>
const props = defineProps<{
    data: Array<{
        link?: string;
        value: string;
    }>
}>();
</script>
<style lang="">

</style>