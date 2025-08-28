<template>
    <NuxtLink :to="`product/${props.productCode}`" class="inline-block">
        <div class="thumb size-full relative mb-3">
            <span class="tag_per rounded-[20px] px-2 absolute right-2 top-2 inline-block bg-[#e14337] text-white text-sm font-semibold">{{ props.discount }}</span>
            <NuxtImg :src="props.imageURLs[0] ? props.imageURLs[0] : '/products/kid_yody_01.webp'" width="288" height="384" alt="thumb" />
        </div>
        <div class="txt_desp">
            <h3 class="title text-[#1c2430] text-sm font-normal mb-2">{{ props.productName }}</h3>
            <div class="price mb-3 flex items-center gap-2">
                <strong class="pri_discount font-semibold text-base text-[#e14337]">{{ priceDiscount ? priceDiscount.toLocaleString('vi-VN', {style: 'currency',currency: 'VND'}) : 0 + ' đ' }}</strong>
                <span class="price_current line-through text-[12px] font-[400] text-[#C7C7C7]">{{ props.price ? Number(props.price).toLocaleString('vi-VN', {style: 'currency',currency: 'VND'}) : 0 + ' đ' }}</span>
            </div>
            <ul class="colors flex items-center gap-2">
                <li v-for="(e, i) in props.colors" :key="i">
                    <div class="thumb">
                        <NuxtImg class="aspect-square rounded-[9999px]" :src="e ? e : '/products/color_blue.webp'" width="24" height="24" alt="thumb color" />
                    </div>
                </li>
            </ul>
        </div>
    </NuxtLink>
</template>
<script lang="ts" setup>
const props = defineProps<{
    imageURLs: Array<string>;
    productName: string;
    price: string;
    discount: string;
    id: string;
    productCode: string;
    size: Array<string>;
    quantity: string;
    descriptions: string;
    colors: Array<string>;

}>();

const priceDiscount = computed(() => {
    const percentage = parseFloat(props.discount) / 100;
    const discount = Number(props.price) * percentage;
    return Number(props.price) - discount;
})

</script>
<style lang="css"></style>