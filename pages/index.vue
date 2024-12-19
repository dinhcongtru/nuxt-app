<template>
    <main id="home_page">
        <div class="inner max-w-7xl mx-auto px-11 py-5">
            <section class="section" id="banner">
                <div class="inner mb-10">
                    <SliderBannerTop :data="dataSlideBannerTop" :options="optionSplideConfig" />
                </div>
            </section>
            <section class="section" id="product_favorite">
                <div class="inner">
                    <div class="section_heading">
                        <h2 class="title block text-center font-medium text-[32px] leading-[46px] mb-3">Sản phẩm ưa
                            chuộng</h2>
                        <div class="options flex items-center justify-center gap-x-4 mb-5">
                            <ButtonRectangleRound name="new" id="new" value="Hàng mới về" active />
                            <ButtonRectangleRound name="new" id="new" value="Outlet Tháng 12" />
                        </div>
                    </div>
                    <div class="wrapper">
                        <ListProduct :data="productData" />
                    </div>
                </div>
            </section>
        </div>
    </main>

</template>
<script lang="ts" setup>
import { dataSlideBannerTop, productData, SeoMeta, optionSplideConfig } from '~/constants/home/index';

definePageMeta({
    layout: 'default',
});

useSeoMeta(SeoMeta);



</script>
<style lang="css"></style>