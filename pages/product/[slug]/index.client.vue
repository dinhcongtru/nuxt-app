<template>
    <main id="product_page">
        <div class="inner">
            <NavigationBreadcrumb :data="[...navigationBreadcrumbData, { value: productData[0].productName }]" />
            <section class="section" id="product_detail">
                <div class="inner max-w-7xl mx-auto px-12">
                    <div class="wrapper flex gap-4 mb-5">
                        <div class="slider">
                            <SliderProductDetail :optionMain="optionMain" :optionThumnails="optionthumbnails"
                                :dataImageURL="dataImageURL" />
                        </div>
                        <LayoutProductDescription :productName="productData[0].productName" />
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>
<script lang="ts" setup>
import { navigationBreadcrumbData, optionMain, optionthumbnails, dataImageURL } from '~/constants/product/index';
import { productData,SeoMeta } from '~/constants/home/index';
const route = useRoute();
const productCode = route.params.slug;

definePageMeta({
    layout: 'default',
});
useSeoMeta(SeoMeta);
</script>
<style lang="css"></style>