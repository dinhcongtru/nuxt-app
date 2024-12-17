<template>
  <ul class="product_lists grid w-[100%] grid-cols-4 gap-x-3 gap-y-10">
    <li v-for="(e, i) in new Array(5).fill(props.data[0])" :key="i">
      <ListProductItem
        :imageURLs="e.imageURLs"
        :productName="e.productName"
        :price="e.price"
        :discount="e.discount"
        :id="e._id"
        :productCode="e.productCode"
        :size="e.size"
        :quantity="e.quantity"
        :descriptions="e.descriptions"
        :colors="e.colors"
      />
    </li>
  </ul>
</template>
<script lang="ts" setup>
const props = defineProps<{
  data: Array<{
    imageURLs: Array<string>;
    productName: string;
    price: string;
    discount: string;
    _id: string;
    productCode: string;
    size: Array<string>;
    quantity: string;
    descriptions: string;
    colors: Array<string>;
  }>;
}>();
</script>
<style lang="css"></style>
